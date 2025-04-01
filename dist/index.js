(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.API = factory());
})(this, (function () { 'use strict';

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _createForOfIteratorHelper(r, e) {
    var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (!t) {
      if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
        t && (r = t);
        var n = 0,
          F = function () {};
        return {
          s: F,
          n: function () {
            return n >= r.length ? {
              done: true
            } : {
              done: false,
              value: r[n++]
            };
          },
          e: function (r) {
            throw r;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o,
      a = true,
      u = false;
    return {
      s: function () {
        t = t.call(r);
      },
      n: function () {
        var r = t.next();
        return a = r.done, r;
      },
      e: function (r) {
        u = true, o = r;
      },
      f: function () {
        try {
          a || null == t.return || t.return();
        } finally {
          if (u) throw o;
        }
      }
    };
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: true
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(true);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: true
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: true
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = false, next;
        }
        return next.done = true, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = true;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, true);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _taggedTemplateLiteral(e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var _excluded = ["cache"];
  var _templateObject;
  var API = /*#__PURE__*/function () {
    function API() {
      var defaultConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, API);
      this.defaults = {
        baseURL: defaultConfig.baseURL || "",
        headers: defaultConfig.headers || {},
        timeout: defaultConfig.timeout || 0,
        // milliseconds; 0 means no timeout
        retry: defaultConfig.retry || 0,
        // number of retries on error
        retryDelay: defaultConfig.retryDelay || 1000,
        // initial delay in ms
        cache: defaultConfig.cache || false,
        // enable internal cache for GET requests
        authToken: defaultConfig.authToken || null // authentication token
      };

      // Add auth token to headers if provided
      if (this.defaults.authToken) {
        this.defaults.headers["Authorization"] = Bearer(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), this.defaults.authToken);
      }
      this.requestInterceptors = [];
      this.responseInterceptors = [];
      // Internal cache store for GET responses
      this.cacheStore = new Map();
    }

    // Add request interceptor
    return _createClass(API, [{
      key: "addRequestInterceptor",
      value: function addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
      }

      // Add response interceptor
    }, {
      key: "addResponseInterceptor",
      value: function addResponseInterceptor(interceptor) {
        this.responseInterceptors.push(interceptor);
      }

      // Merge two configuration objects
    }, {
      key: "mergeConfig",
      value: function mergeConfig(config1, config2) {
        return _objectSpread2(_objectSpread2(_objectSpread2({}, config1), config2), {}, {
          headers: _objectSpread2(_objectSpread2({}, config1.headers), config2.headers)
        });
      }

      // Helper function to get a user-friendly error message based on status code
    }, {
      key: "getErrorMessage",
      value: function getErrorMessage(status) {
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
    }, {
      key: "request",
      value: function () {
        var _request = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(config) {
          var _this = this;
          var finalConfig, url, _iterator, _step, interceptor, attempt, response, lastError, _loop, _ret;
          return _regeneratorRuntime().wrap(function _callee$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                finalConfig = this.mergeConfig(this.defaults, config);
                url = finalConfig.baseURL ? finalConfig.baseURL + finalConfig.url : finalConfig.url; // Apply request interceptors
                _iterator = _createForOfIteratorHelper(this.requestInterceptors);
                _context2.prev = 3;
                _iterator.s();
              case 5:
                if ((_step = _iterator.n()).done) {
                  _context2.next = 15;
                  break;
                }
                interceptor = _step.value;
                _context2.next = 9;
                return interceptor(finalConfig);
              case 9:
                _context2.t0 = _context2.sent;
                if (_context2.t0) {
                  _context2.next = 12;
                  break;
                }
                _context2.t0 = finalConfig;
              case 12:
                finalConfig = _context2.t0;
              case 13:
                _context2.next = 5;
                break;
              case 15:
                _context2.next = 20;
                break;
              case 17:
                _context2.prev = 17;
                _context2.t1 = _context2["catch"](3);
                _iterator.e(_context2.t1);
              case 20:
                _context2.prev = 20;
                _iterator.f();
                return _context2.finish(20);
              case 23:
                if (!(finalConfig.method && finalConfig.method.toUpperCase() === "GET" && finalConfig.cache)) {
                  _context2.next = 26;
                  break;
                }
                if (!this.cacheStore.has(url)) {
                  _context2.next = 26;
                  break;
                }
                return _context2.abrupt("return", this.cacheStore.get(url));
              case 26:
                if (!(finalConfig.onUploadProgress || finalConfig.onDownloadProgress)) {
                  _context2.next = 28;
                  break;
                }
                return _context2.abrupt("return", this.xhrRequest(url, finalConfig));
              case 28:
                attempt = 0;
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                  var controller, timeoutId, _finalConfig, fetchConfig, fetchFn, processedResponse, _iterator2, _step2, _interceptor, contentType;
                  return _regeneratorRuntime().wrap(function _loop$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        controller = new AbortController();
                        finalConfig.signal = controller.signal;
                        if (finalConfig.timeout > 0) {
                          timeoutId = setTimeout(function () {
                            return controller.abort();
                          }, finalConfig.timeout);
                        }

                        // Prepare request body
                        if (finalConfig.data) {
                          if (!(finalConfig.data instanceof FormData) && !finalConfig.headers["Content-Type"] && _typeof(finalConfig.data) === "object") {
                            finalConfig.headers["Content-Type"] = "application/json";
                            finalConfig.body = JSON.stringify(finalConfig.data);
                          } else if (!(finalConfig.data instanceof FormData)) {
                            finalConfig.body = finalConfig.data;
                          } else {
                            finalConfig.body = finalConfig.data;
                          }
                        }
                        _context.prev = 4;
                        // Remove custom "cache" property before calling fetch
                        _finalConfig = finalConfig, _finalConfig.cache, fetchConfig = _objectWithoutProperties(_finalConfig, _excluded);
                        fetchFn = typeof fetch === "function" ? fetch : require("node-fetch");
                        _context.next = 9;
                        return fetchFn(url, fetchConfig);
                      case 9:
                        response = _context.sent;
                        if (timeoutId) clearTimeout(timeoutId);
                        processedResponse = response; // Apply response interceptors
                        _iterator2 = _createForOfIteratorHelper(_this.responseInterceptors);
                        _context.prev = 13;
                        _iterator2.s();
                      case 15:
                        if ((_step2 = _iterator2.n()).done) {
                          _context.next = 25;
                          break;
                        }
                        _interceptor = _step2.value;
                        _context.next = 19;
                        return _interceptor(processedResponse);
                      case 19:
                        _context.t0 = _context.sent;
                        if (_context.t0) {
                          _context.next = 22;
                          break;
                        }
                        _context.t0 = processedResponse;
                      case 22:
                        processedResponse = _context.t0;
                      case 23:
                        _context.next = 15;
                        break;
                      case 25:
                        _context.next = 30;
                        break;
                      case 27:
                        _context.prev = 27;
                        _context.t1 = _context["catch"](13);
                        _iterator2.e(_context.t1);
                      case 30:
                        _context.prev = 30;
                        _iterator2.f();
                        return _context.finish(30);
                      case 33:
                        // Process response based on Content-Type
                        contentType = response.headers.get("Content-Type") || "";
                        if (!contentType.includes("application/json")) {
                          _context.next = 40;
                          break;
                        }
                        _context.next = 37;
                        return response.json();
                      case 37:
                        processedResponse.data = _context.sent;
                        _context.next = 43;
                        break;
                      case 40:
                        _context.next = 42;
                        return response.text();
                      case 42:
                        processedResponse.data = _context.sent;
                      case 43:
                        if (response.ok) {
                          _context.next = 46;
                          break;
                        }
                        processedResponse.errorMessage = _this.getErrorMessage(response.status);
                        throw processedResponse;
                      case 46:
                        // Store in cacheStore if caching is enabled for GET requests
                        if (finalConfig.method && finalConfig.method.toUpperCase() === "GET" && finalConfig.cache) {
                          _this.cacheStore.set(url, processedResponse);
                        }
                        return _context.abrupt("return", {
                          v: processedResponse
                        });
                      case 50:
                        _context.prev = 50;
                        _context.t2 = _context["catch"](4);
                        lastError = _context.t2;
                        attempt++;
                        if (!(attempt > finalConfig.retry)) {
                          _context.next = 56;
                          break;
                        }
                        return _context.abrupt("return", 0);
                      case 56:
                        _context.next = 58;
                        return _this.delay(finalConfig.retryDelay * Math.pow(2, attempt - 1));
                      case 58:
                      case "end":
                        return _context.stop();
                    }
                  }, _loop, null, [[4, 50], [13, 27, 30, 33]]);
                });
              case 30:
                if (!(attempt <= finalConfig.retry)) {
                  _context2.next = 39;
                  break;
                }
                return _context2.delegateYield(_loop(), "t2", 32);
              case 32:
                _ret = _context2.t2;
                if (!(_ret === 0)) {
                  _context2.next = 35;
                  break;
                }
                return _context2.abrupt("break", 39);
              case 35:
                if (!_ret) {
                  _context2.next = 37;
                  break;
                }
                return _context2.abrupt("return", _ret.v);
              case 37:
                _context2.next = 30;
                break;
              case 39:
                throw lastError;
              case 40:
              case "end":
                return _context2.stop();
            }
          }, _callee, this, [[3, 17, 20, 23]]);
        }));
        function request(_x) {
          return _request.apply(this, arguments);
        }
        return request;
      }() // Delay helper for exponential backoff
    }, {
      key: "delay",
      value: function delay(ms) {
        return new Promise(function (resolve) {
          return setTimeout(resolve, ms);
        });
      }

      // xhrRequest method to support progress events (upload/download) using XMLHttpRequest
    }, {
      key: "xhrRequest",
      value: function xhrRequest(url, config) {
        var _this2 = this;
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();
          xhr.open(config.method, url, true);

          // Set headers
          for (var key in config.headers) {
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
          xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              var headers = _this2.parseXHRHeaders(xhr.getAllResponseHeaders());
              var responseData;
              var contentType = headers["content-type"] || "";
              if (contentType.includes("application/json")) {
                try {
                  responseData = JSON.parse(xhr.responseText);
                } catch (e) {
                  responseData = xhr.responseText;
                }
              } else {
                responseData = xhr.responseText;
              }
              var response = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: headers,
                data: responseData,
                ok: xhr.status >= 200 && xhr.status < 300
              };
              if (!response.ok) {
                response.errorMessage = _this2.getErrorMessage(xhr.status);
                reject(response);
              } else {
                resolve(response);
              }
            }
          };
          xhr.onerror = function () {
            return reject(new Error("Network error"));
          };
          xhr.ontimeout = function () {
            return reject(new Error("Request timed out after ".concat(config.timeout, " ms")));
          };

          // Send request
          if (config.data instanceof FormData || typeof config.data === "string") {
            xhr.send(config.data);
          } else if (config.data && _typeof(config.data) === "object") {
            xhr.send(JSON.stringify(config.data));
          } else {
            xhr.send();
          }
        });
      }

      // Helper to parse XHR headers
    }, {
      key: "parseXHRHeaders",
      value: function parseXHRHeaders(headerStr) {
        var headers = {};
        if (!headerStr) return headers;
        var headerPairs = headerStr.trim().split(/[\r\n]+/);
        headerPairs.forEach(function (line) {
          var parts = line.split(": ");
          var header = parts.shift().toLowerCase();
          var value = parts.join(": ");
          headers[header] = value;
        });
        return headers;
      }

      // Helper methods for HTTP verbs
    }, {
      key: "get",
      value: function get(url) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "GET",
          url: url
        }));
      }
    }, {
      key: "delete",
      value: function _delete(url) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "DELETE",
          url: url
        }));
      }
    }, {
      key: "head",
      value: function head(url) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "HEAD",
          url: url
        }));
      }
    }, {
      key: "options",
      value: function options(url) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "OPTIONS",
          url: url
        }));
      }
    }, {
      key: "post",
      value: function post(url, data) {
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "POST",
          url: url,
          data: data
        }));
      }
    }, {
      key: "put",
      value: function put(url, data) {
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "PUT",
          url: url,
          data: data
        }));
      }
    }, {
      key: "patch",
      value: function patch(url, data) {
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return this.request(_objectSpread2(_objectSpread2({}, config), {}, {
          method: "PATCH",
          url: url,
          data: data
        }));
      }
    }]);
  }();

  return API;

}));
//# sourceMappingURL=index.js.map
