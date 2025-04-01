# API Package

**API** is a comprehensive HTTP client package for JavaScript that combines the native simplicity of fetch with advanced features similar to Axios—and adds additional capabilities such as:

- **Timeout management** using AbortController  
- **Retry with exponential backoff** for failed requests  
- **Internal caching for** GET requests  
- **Request/response interceptors** for customization and logging  
- **Authentication token management**  
- **Progress event support** for uploads/downloads  
- **User-friendly error handling** (converting HTTP status codes to clear error messages)  
- Full support for standard HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS)

This package is designed to help you build robust, flexible, and high-performance applications.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Installation](#installation)  
4. [Quick Start](#quick-start)  
5. [Usage](#usage)  
   - [Setting Base URL](#setting-base-url)  
   - [Timeout](#timeout)  
   - [Retry with Exponential Backoff](#retry-with-exponential-backoff)  
   - [Internal Caching for GET Requests](#internal-caching-for-get-requests)  
   - [Interceptors](#interceptors)  
   - [Authentication Token](#authentication-token)  
   - [Progress Events](#progress-events)  
   - [User-friendly Error Handling](#user-friendly-error-handling)  
   - [HTTP Methods](#http-methods)  
6. [Advanced Configuration](#advanced-configuration)  
7. [Examples](#examples)  
8. [Contributing](#contributing)  
9. [License](#license)  

---

## 1. Introduction

The API package is a unified HTTP client built on top of the native fetch API. It augments the basic fetch functionality with advanced features like automatic retries with exponential backoff, internal caching, progress event support, request/response interceptors, timeout management using AbortController, and friendly error messages based on HTTP status codes. Additionally, it supports all standard HTTP methods (GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS).

---

## 2. Features

- **Base URL**: Set a default URL that is prepended to every request.  
- **Timeout**: Automatically cancel a request if no response is received within a specified time.  
- **Retry with Exponential Backoff**: Automatically retry failed requests with an exponentially increasing delay.  
- **Internal Caching for GET Requests**: Store GET responses in an internal cache (using a Map) to avoid redundant server calls.  
- **Interceptors**: Add custom logic before requests are sent or after responses are received.  
- **Authentication Token Management**: Automatically attach an authentication token (e.g., JWT) to every request.  
- **Progress Events**: Monitor upload and download progress via callbacks.  
- **User-friendly Error Handling**: Convert HTTP status codes into clear error messages.  
- **Support for All HTTP Methods**: Works with GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

---

## 3. Installation

To install the API package via npm, run:

```bash
npm install your-api-package-name

Alternatively, you can include the source code directly in your project.

⸻

4. Quick Start

Below is a basic example to get you started:

import API from 'your-api-package-name';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,    // 10 seconds timeout
  retry: 3,          // Retry failed requests 3 times
  retryDelay: 1000,  // 1000 ms initial delay; then 2000, 4000, etc.
  cache: true,       // Enable internal caching for GET requests
  authToken: "your_jwt_token_here", // Optional authentication token
});

(async () => {
  try {
    const response = await api.get("/products");
    console.log("Products:", response.data);
  } catch (error) {
    console.error("Error:", error.errorMessage);
  }
})();



⸻

5. Usage

Setting Base URL

Configure a base URL so you only need to specify endpoint paths in your requests.

const api = new API({
  baseURL: "https://fakestoreapi.com",
});

Timeout

Automatically cancel a request if no response is received within the specified time.

const api = new API({
  timeout: 10000, // 10 seconds
});

Retry with Exponential Backoff

Automatically retry failed requests with an exponentially increasing delay.

const api = new API({
  retry: 3,         // Retry up to 3 times
  retryDelay: 1000,  // 1000 ms initial delay; then 2000, 4000, etc.
});

Internal Caching for GET Requests

Enable internal caching so that responses from GET requests are stored and reused for subsequent calls.

await api.get("/products", { cache: true });

Interceptors

Add request and response interceptors to modify or log data.

Request Interceptor Example:

api.addRequestInterceptor(async (config) => {
  config.headers["x-custom-header"] = "myValue";
  return config;
});

Response Interceptor Example:

api.addResponseInterceptor(async (response) => {
  console.log("Response status:", response.status);
  return response;
});

Authentication Token

Automatically attach an authentication token to every request.

const api = new API({
  authToken: "your_jwt_token_here",
});

Progress Events

Monitor upload or download progress using callbacks.

const formData = new FormData();
formData.append("file", fileInput.files[0]);

await api.post("/upload", formData, {
  onUploadProgress: (e) => {
    const percent = Math.round((e.loaded / e.total) * 100);
    console.log(`Upload Progress: ${percent}%`);
  },
});

User-friendly Error Handling

Convert HTTP status codes into clear error messages.

try {
  await api.get("/non-existent-endpoint");
} catch (err) {
  console.error(err.errorMessage);
  // Example: "Not Found: The requested resource could not be found."
}

HTTP Methods

The API supports all standard HTTP methods:

// GET
await api.get("/products");

// POST
await api.post("/products", { title: "New Product", price: 29.99 });

// PUT
await api.put("/products/1", { title: "Updated Product", price: 19.99 });

// PATCH
await api.patch("/products/1", { price: 17.99 });

// DELETE
await api.delete("/products/1");

// HEAD
await api.head("/products");

// OPTIONS
await api.options("/products");



⸻

6. Advanced Configuration

Custom Retry Behavior

Customize the number of retries and delay between retries.

const api = new API({
  retry: 5,
  retryDelay: 500, // Initial delay of 500 ms; subsequent delays increase exponentially.
});

Interceptors for Logging or Data Manipulation

Use interceptors to log or modify request and response data.

api.addRequestInterceptor(async (config) => {
  console.log("Sending request to:", config.url);
  return config;
});

api.addResponseInterceptor(async (response) => {
  // Optionally modify response data.
  return response;
});

Environment-Specific Settings

Customize your configuration based on the environment (e.g., browser or Node.js).

const api = new API({
  baseURL: process.env.API_BASE_URL || "https://fakestoreapi.com",
  timeout: 10000,
});



⸻

7. Examples

Example 1: Fetching Products with Caching

import API from 'your-api-package-name';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  cache: true,
});

(async () => {
  try {
    const response = await api.get("/products");
    console.log("Products:", response.data);
  } catch (error) {
    console.error("Error:", error.errorMessage);
  }
})();

Example 2: Creating a New Product with Authentication

import API from 'your-api-package-name';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  authToken: "your_jwt_token_here",
  timeout: 10000,
});

(async () => {
  try {
    const newProduct = {
      title: "New Product",
      price: 49.99,
      description: "A fantastic new product",
      image: "https://i.pravatar.cc",
      category: "electronics",
    };
    const response = await api.post("/products", newProduct);
    console.log("Product Created:", response.data);
  } catch (error) {
    console.error("Error:", error.errorMessage);
  }
})();



⸻

8. Contributing

Contributions to the API package are welcome! Please follow these steps to contribute:
 1. Fork the repository.
 2. Create a feature branch for your changes.
 3. Commit your changes with clear messages.
 4. Submit a pull request with a detailed description of your changes.

Bug reports, feature requests, and improvements are highly appreciated.

⸻

9. License

This project is licensed under the MIT License. Please see the LICENSE file for more details.

⸻

End of Documentation

⸻