class API {
  constructor(defaultConfig = {}) {
    this.defaults = {
      baseURL: defaultConfig.baseURL || "",
      headers: defaultConfig.headers || {},
      timeout: defaultConfig.timeout || 0, // milliseconds; 0 means no timeout
      retry: defaultConfig.retry || 0, // number of retries on error
      retryDelay: defaultConfig.retryDelay || 1000, // initial delay in ms
      cache: defaultConfig.cache || false, // enable internal cache for GET requests
      authToken: defaultConfig.authToken || null, // authentication token
    };

    // Add auth token to headers if provided
    if (this.defaults.authToken) {
      this.defaults.headers[
        "Authorization"
      ] = Bearer`${this.defaults.authToken}`;
    }

    this.requestInterceptors = [];
    this.responseInterceptors = [];
    // Internal cache store for GET responses
    this.cacheStore = new Map();
  }

  // Add request interceptor
  addRequestInterceptor(interceptor) {
    this.requestInterceptors.push(interceptor);
  }

  // Add response interceptor
  addResponseInterceptor(interceptor) {
    this.responseInterceptors.push(interceptor);
  }

  // Merge two configuration objects
  mergeConfig(config1, config2) {
    return {
      ...config1,
      ...config2,
      headers: { ...config1.headers, ...config2.headers },
    };
  }

  // Helper function to get a user-friendly error message based on status code
  getErrorMessage(status) {
    switch (status) {
      case 400:
        return "Bad Request: The request was invalid. Please check your input.";
      case 401:
        return "Unauthorized: You are not authorized to access this resource. Please check your credentials.";
      case 403:
        return "Forbidden: You don't have permission to access this resource.";
      case 404:
        return "Not Found: The requested resource could not be found.";
      case 408:
        return "Request Timeout: The server timed out waiting for your request.";
      case 429:
        return "Too Many Requests: You have sent too many requests in a given time.";
      case 500:
        return "Internal Server Error: The server encountered an unexpected condition.";
      case 502:
        return "Bad Gateway: The server received an invalid response from an upstream server.";
      case 503:
        return "Service Unavailable: The server is currently unable to handle the request.";
      case 504:
        return "Gateway Timeout: The upstream server failed to send a request in time.";
      default:
        return "An unexpected error occurred. Please try again later.";
    }
  }

  // Main request method with retry, timeout, and exponential backoff
  async request(config) {
    let finalConfig = this.mergeConfig(this.defaults, config);
    let url = finalConfig.baseURL
      ? finalConfig.baseURL + finalConfig.url
      : finalConfig.url;

    // Apply request interceptors
    for (const interceptor of this.requestInterceptors) {
      finalConfig = (await interceptor(finalConfig)) || finalConfig;
    }

    // For GET requests with caching enabled, check the cacheStore
    if (
      finalConfig.method &&
      finalConfig.method.toUpperCase() === "GET" &&
      finalConfig.cache
    ) {
      if (this.cacheStore.has(url)) {
        return this.cacheStore.get(url);
      }
    }

    // Use XMLHttpRequest for progress events if defined
    if (finalConfig.onUploadProgress || finalConfig.onDownloadProgress) {
      return this.xhrRequest(url, finalConfig);
    }

    let attempt = 0;
    let response;
    let lastError;
    while (attempt <= finalConfig.retry) {
      const controller = new AbortController();
      finalConfig.signal = controller.signal;
      let timeoutId;
      if (finalConfig.timeout > 0) {
        timeoutId = setTimeout(() => controller.abort(), finalConfig.timeout);
      }

      // Prepare request body
      if (finalConfig.data) {
        if (
          !(finalConfig.data instanceof FormData) &&
          !finalConfig.headers["Content-Type"] &&
          typeof finalConfig.data === "object"
        ) {
          finalConfig.headers["Content-Type"] = "application/json";
          finalConfig.body = JSON.stringify(finalConfig.data);
        } else if (!(finalConfig.data instanceof FormData)) {
          finalConfig.body = finalConfig.data;
        } else {
          finalConfig.body = finalConfig.data;
        }
      }

      try {
        // Remove custom "cache" property before calling fetch
        const { cache, ...fetchConfig } = finalConfig;
        const fetchFn =
          typeof fetch === "function" ? fetch : require("node-fetch");
        response = await fetchFn(url, fetchConfig);
        if (timeoutId) clearTimeout(timeoutId);

        let processedResponse = response;
        // Apply response interceptors
        for (const interceptor of this.responseInterceptors) {
          processedResponse =
            (await interceptor(processedResponse)) || processedResponse;
        }

        // Process response based on Content-Type
        const contentType = response.headers.get("Content-Type") || "";
        if (contentType.includes("application/json")) {
          processedResponse.data = await response.json();
        } else {
          processedResponse.data = await response.text();
        }

        // If response is not ok, attach a friendly error message and throw
        if (!response.ok) {
          processedResponse.errorMessage = this.getErrorMessage(
            response.status
          );
          throw processedResponse;
        }

        // Store in cacheStore if caching is enabled for GET requests
        if (
          finalConfig.method &&
          finalConfig.method.toUpperCase() === "GET" &&
          finalConfig.cache
        ) {
          this.cacheStore.set(url, processedResponse);
        }
        return processedResponse;
      } catch (error) {
        lastError = error;
        attempt++;
        if (attempt > finalConfig.retry) break;
        await this.delay(finalConfig.retryDelay * Math.pow(2, attempt - 1));
      }
    }
    throw lastError;
  }

  // Delay helper for exponential backoff
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // xhrRequest method to support progress events (upload/download) using XMLHttpRequest
  xhrRequest(url, config) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(config.method, url, true);

      // Set headers
      for (const key in config.headers) {
        xhr.setRequestHeader(key, config.headers[key]);
      }

      if (config.timeout > 0) {
        xhr.timeout = config.timeout;
      }

      // Upload progress event
      if (config.onUploadProgress && xhr.upload) {
        xhr.upload.onprogress = config.onUploadProgress;
      }

      // Download progress event
      if (config.onDownloadProgress) {
        xhr.onprogress = config.onDownloadProgress;
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          const headers = this.parseXHRHeaders(xhr.getAllResponseHeaders());
          let responseData;
          const contentType = headers["content-type"] || "";
          if (contentType.includes("application/json")) {
            try {
              responseData = JSON.parse(xhr.responseText);
            } catch (e) {
              responseData = xhr.responseText;
            }
          } else {
            responseData = xhr.responseText;
          }
          const response = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers,
            data: responseData,
            ok: xhr.status >= 200 && xhr.status < 300,
          };
          if (!response.ok) {
            response.errorMessage = this.getErrorMessage(xhr.status);
            reject(response);
          } else {
            resolve(response);
          }
        }
      };

      xhr.onerror = () => reject(new Error("Network error"));
      xhr.ontimeout = () =>
        reject(new Error(`Request timed out after ${config.timeout} ms`));

      // Send request
      if (config.data instanceof FormData || typeof config.data === "string") {
        xhr.send(config.data);
      } else if (config.data && typeof config.data === "object") {
        xhr.send(JSON.stringify(config.data));
      } else {
        xhr.send();
      }
    });
  }

  // Helper to parse XHR headers
  parseXHRHeaders(headerStr) {
    const headers = {};
    if (!headerStr) return headers;
    const headerPairs = headerStr.trim().split(/[\r\n]+/);
    headerPairs.forEach((line) => {
      const parts = line.split(": ");
      const header = parts.shift().toLowerCase();
      const value = parts.join(": ");
      headers[header] = value;
    });
    return headers;
  }

  // Helper methods for HTTP verbs
  get(url, config = {}) {
    return this.request({ ...config, method: "GET", url });
  }

  delete(url, config = {}) {
    return this.request({ ...config, method: "DELETE", url });
  }

  head(url, config = {}) {
    return this.request({ ...config, method: "HEAD", url });
  }

  options(url, config = {}) {
    return this.request({ ...config, method: "OPTIONS", url });
  }

  post(url, data, config = {}) {
    return this.request({ ...config, method: "POST", url, data });
  }

  put(url, data, config = {}) {
    return this.request({ ...config, method: "PUT", url, data });
  }

  patch(url, data, config = {}) {
    return this.request({ ...config, method: "PATCH", url, data });
  }
}

export default API;
