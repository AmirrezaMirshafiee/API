# apizone

**apizone** is a comprehensive HTTP client package for JavaScript that combines the native simplicity of fetch with advanced features similar to Axios—and adds extra capabilities for robust HTTP communication. With apizone, you get:

- ⏱️ **Timeout management:** Automatically cancel requests if no response is received within a specified time (using AbortController).
- ♻️ **Retry with exponential backoff:** Automatically retry failed requests with an exponentially increasing delay.
- 🗂️ **Internal caching for GET requests:** Store GET responses internally to avoid redundant network calls.
- 🛠️ **Interceptors:** Add custom logic before requests are sent or after responses are received for modification or logging.
- 🔐 **Authentication token management:** Automatically attach an authentication token (e.g., JWT) to request headers.
- 📊 **Progress event support:** Monitor upload and download progress via callback functions.
- ⚠️ **User-friendly error handling:** Convert HTTP status codes into clear, descriptive error messages.
- ✉️ **Full support for HTTP methods:** Works with GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

This package is designed to help you build robust, flexible, and high-performance applications with ease.

---

## 🔍 Table of Contents

1. [Introduction](#1-introduction)  
2. [Features](#2-features)  
3. [Installation](#3-installation)  
4. [Quick Start](#4-quick-start)  
5. [Usage](#5-usage)  
   - [Setting Base URL](#setting-base-url)  
   - [Timeout](#timeout)  
   - [Retry with Exponential Backoff](#retry-with-exponential-backoff)  
   - [Internal Caching for GET Requests](#internal-caching-for-get-requests)  
   - [Interceptors](#interceptors)  
   - [Authentication Token](#authentication-token)  
   - [Progress Events](#progress-events)  
   - [User-friendly Error Handling](#user-friendly-error-handling)  
   - [HTTP Methods](#http-methods)  
6. [Advanced Configuration](#6-advanced-configuration)  
7. [Examples](#7-examples)  
8. [Contributing](#8-contributing)  
9. [License](#9-license)  

---

## 1. 📚 Introduction

The **apizone** package is a unified HTTP client built on the native `fetch` API. It augments basic fetch functionality with advanced features like automatic retries with exponential backoff, internal caching, progress event support, request/response interceptors, timeout management using AbortController, and friendly error messages based on HTTP status codes. Additionally, it supports all standard HTTP methods.

---

## 2. ✨ Features

- **Base URL:** Set a default URL that is prepended to every request, reducing repetitive URL definitions.  
- **Timeout:** Automatically cancel a request if no response is received within a specified time.  
- **Retry with Exponential Backoff:** Automatically retry failed requests with an exponentially increasing delay.  
- **Internal Caching for GET Requests:** Store GET responses internally (using a Map) to avoid redundant network calls.  
- **Interceptors:** Add custom logic to modify or log requests and responses.  
- **Authentication Token Management:** Automatically attach an authentication token (e.g., JWT) to every request.  
- **Progress Events:** Monitor upload and download progress via callback functions.  
- **User-friendly Error Handling:** Convert HTTP status codes into clear, descriptive error messages.  
- **Support for All HTTP Methods:** Works with GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

---

## 📝 Installation

You can install **apizone** using various package managers:

### Using npm:
```bash
npm install apizone
```

### Using Bower:
```bash
bower install apizone
```

### Using Yarn:
```bash
yarn add apizone
```

### Using pnpm:
```bash
pnpm add apizone
```

### Using Bun:
```bash
bun add apizone
```

### CDN Links

You can also use **apizone** directly in the browser via CDN:

- **unpkg:**
```html
<script src="https://unpkg.com/apizone@latest/dist/index.js"></script>
```

- **jsDelivr:**
```html
<script src="https://cdn.jsdelivr.net/npm/apizone@latest/dist/index.js"></script>
```


## 4. ⏱️ Quick Start

Here’s a basic example to get you started:

```js
import API from 'apizone';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  retry: 3,
  retryDelay: 1000,
  cache: true,
  authToken: "your_jwt_token_here",
});

const getData = async () => {
  try {
    const response = await api.get("/products");
    console.log("Products:", response.data);
  } catch (error) {
    console.error("Error:", error.errorMessage);
  }
};

getData();
```

---

## 5. 📁 Usage

### 🔍 Setting Base URL

```js
const api = new API({
  baseURL: "https://fakestoreapi.com",
});
```

### ⏱️ Timeout

```js
const api = new API({
  timeout: 10000, // 10 seconds
});
```

### ♻️ Retry with Exponential Backoff

```js
const api = new API({
  retry: 3,
  retryDelay: 1000,
});
```

### 🗂️ Internal Caching for GET Requests

```js
await api.get("/products", { cache: true });
```

### 🛠️ Interceptors

#### Request Interceptor:

```js
api.addRequestInterceptor(async (config) => {
  config.headers["x-custom-header"] = "myValue";
  return config;
});
```

#### Response Interceptor:

```js
api.addResponseInterceptor(async (response) => {
  console.log("Response status:", response.status);
  return response;
});
```

### 🔐 Authentication Token

```js
const api = new API({
  authToken: "your_jwt_token_here",
});
```

### 📊 Progress Events

```js
const formData = new FormData();
formData.append("file", fileInput.files[0]);

await api.post("/upload", formData, {
  onUploadProgress: (e) => {
    const percent = Math.round((e.loaded / e.total) * 100);
    console.log(`Upload Progress: ${percent}%`);
  },
});
```

### ⚠️ User-friendly Error Handling

```js
try {
  await api.get("/non-existent-endpoint");
} catch (err) {
  console.error(err.errorMessage);
  // Example: "Not Found: The requested resource could not be found."
}
```

### ✉️ HTTP Methods

```js
await api.get("/products");
await api.post("/products", { title: "New Product", price: 29.99 });
await api.put("/products/1", { title: "Updated Product", price: 19.99 });
await api.patch("/products/1", { price: 17.99 });
await api.delete("/products/1");
await api.head("/products");
await api.options("/products");
```

---

## 6. 💡 Advanced Configuration

### Custom Retry Behavior

```js
const api = new API({
  retry: 5,
  retryDelay: 500,
});
```

### Interceptors for Logging or Data Manipulation

```js
api.addRequestInterceptor(async (config) => {
  console.log("Sending request to:", config.url);
  return config;
});

api.addResponseInterceptor(async (response) => {
  return response;
});
```

### Environment-Specific Settings

```js
const api = new API({
  baseURL: process.env.API_BASE_URL || "https://fakestoreapi.com",
  timeout: 10000,
});
```

---

## 7. 📚 Examples

### Example 1: Fetching Products with Caching

```js
import API from 'apizone';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
  cache: true,
});

const getData = async () => {
  try {
    const response = await api.get("/products");
    console.log("Products:", response.data);
  } catch (error) {
    console.error("Error:", error.errorMessage);
  }
};

getData();
```

### Example 2: Creating a New Product with Authentication

```js
import API from 'apizone';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  authToken: "your_jwt_token_here",
  timeout: 10000,
});

const postData = async () => {
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
};

postData();
```

---

## 8. 👨‍💼 Contributing

Contributions to **apizone** are welcome! Please follow these steps:

1. ⭐ **Fork** the repository.  
2. 🔧 **Create a feature branch** for your changes.  
3. 📃 **Commit your changes** with clear and descriptive commit messages.  
4. 🔍 **Submit a pull request** with a detailed description of your changes.

Bug reports, feature requests, and general improvements are highly appreciated 🙌

---

## 9. 📄 License

This project is licensed under the **MIT License**.  
Please see the [LICENSE](./LICENSE) file for more details.
