
# apizoe

**apizoe** is a comprehensive HTTP client package for JavaScript that combines the native simplicity of fetch with advanced features similar to Axios—and adds extra capabilities for robust HTTP communication. With apizoe, you get:

- **Timeout management:** Automatically cancel requests if no response is received within a specified time (using AbortController).
- **Retry with exponential backoff:** Automatically retry failed requests with an exponentially increasing delay.
- **Internal caching for GET requests:** Store GET responses internally to avoid redundant network calls.
- **Interceptors:** Add custom logic before requests are sent or after responses are received for modification or logging.
- **Authentication token management:** Automatically attach an authentication token (e.g., JWT) to request headers.
- **Progress event support:** Monitor upload and download progress via callback functions.
- **User-friendly error handling:** Convert HTTP status codes into clear, descriptive error messages.
- **Full support for HTTP methods:** Works with GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

This package is designed to help you build robust, flexible, and high-performance applications with ease.

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

The **apizoe** package is a unified HTTP client built on the native `fetch` API. It augments basic fetch functionality with advanced features like automatic retries with exponential backoff, internal caching, progress event support, request/response interceptors, timeout management using AbortController, and friendly error messages based on HTTP status codes. Additionally, it supports all standard HTTP methods.

---

## 2. Features

- **Base URL:**
Set a default URL that is prepended to every request, reducing repetitive URL definitions.

- **Timeout:**
Automatically cancel a request if no response is received within a specified time.

- **Retry with Exponential Backoff:**
Automatically retry failed requests with an exponentially increasing delay.

- **Internal Caching for GET Requests:**
Store GET responses internally (using a Map) to avoid redundant network calls.

- **Interceptors:**
Add custom logic to modify or log requests and responses.

- **Authentication Token Management:**
Automatically attach an authentication token (e.g., JWT) to every request.

- **Progress Events:**
Monitor upload and download progress via callback functions.

- **User-friendly Error Handling:**
Convert HTTP status codes into clear, descriptive error messages.

- **Support for All HTTP Methods:**
Works with GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.

---

## 3. Installation

To install the **apizoe** package via npm, run:

```bash
npm install apizoe

```
## 4. Quick Start

Here’s a basic example to get you started:

```js
import API from 'apizoe';

const api = new API({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,    // 10 seconds timeout
  retry: 3,          // Retry failed requests 3 times
  retryDelay: 1000,  // Initial delay of 1000 ms; then 2000, 4000, etc.
  cache: true,       // Enable internal caching for GET requests
  authToken: "your_jwt_token_here", // Optional authentication token
});

const getData=async() => {
  try {
    const response = await api.get("/products");
    console.log("Products:", response.data);
  } catch (error) {
    console.error("Error:", error.errorMessage);
  }
});

```