'use strict';
!function(m) {
  /**
   * @param {string} i
   * @return {?}
   */
  function t(i) {
    if (n[i]) {
      return n[i].exports;
    }
    var module = n[i] = {
      i : i,
      l : false,
      exports : {}
    };
    return m[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
  }
  var n = {};
  /** @type {!Array} */
  t.m = m;
  t.c = n;
  /**
   * @param {!Function} d
   * @param {string} name
   * @param {!Function} n
   * @return {undefined}
   */
  t.d = function(d, name, n) {
    if (!t.o(d, name)) {
      Object.defineProperty(d, name, {
        enumerable : true,
        get : n
      });
    }
  };
  /**
   * @param {!Object} x
   * @return {undefined}
   */
  t.r = function(x) {
    if ("undefined" != typeof Symbol && Symbol.toStringTag) {
      Object.defineProperty(x, Symbol.toStringTag, {
        value : "Module"
      });
    }
    Object.defineProperty(x, "__esModule", {
      value : true
    });
  };
  /**
   * @param {string} val
   * @param {number} byteOffset
   * @return {?}
   */
  t.t = function(val, byteOffset) {
    if (1 & byteOffset && (val = t(val)), 8 & byteOffset) {
      return val;
    }
    if (4 & byteOffset && "object" == typeof val && val && val.__esModule) {
      return val;
    }
    /** @type {!Object} */
    var d = Object.create(null);
    if (t.r(d), Object.defineProperty(d, "default", {
      enumerable : true,
      value : val
    }), 2 & byteOffset && "string" != typeof val) {
      var s;
      for (s in val) {
        t.d(d, s, function(attrPropertyName) {
          return val[attrPropertyName];
        }.bind(null, s));
      }
    }
    return d;
  };
  /**
   * @param {string} module
   * @return {?}
   */
  t.n = function(module) {
    /** @type {function(): ?} */
    var n = module && module.__esModule ? function() {
      return module.default;
    } : function() {
      return module;
    };
    return t.d(n, "a", n), n;
  };
  /**
   * @param {!Function} property
   * @param {string} object
   * @return {?}
   */
  t.o = function(property, object) {
    return Object.prototype.hasOwnProperty.call(property, object);
  };
  /** @type {string} */
  t.p = "";
  t(t.s = 0);
}([function(module, canCreateDiscussions, factory) {
  factory(1);
  module.exports = factory(2);
}, function(record, t, aFunctionName) {
  var result;
  var f;
  var g;
  var strategy;
  var LZString;
  !function(window) {
    /**
     * @return {undefined}
     */
    function ElementDefault() {
      /**
       * @param {string} type
       * @param {?} data
       * @return {undefined}
       */
      this.handleLogInfo = function(type, data) {
        var url = options[type] ? options[type] : "";
        switch(type) {
          case a:
            /** @type {string} */
            options[a] = url + JSON.stringify(data) + "$$$";
            break;
          case b:
            /** @type {string} */
            options[b] = url + JSON.stringify(data) + "$$$";
            break;
          case name:
            /** @type {string} */
            options[name] = url + JSON.stringify(data) + "$$$";
            break;
          case json:
            /** @type {string} */
            options[json] = url + JSON.stringify(data) + "$$$";
            break;
          case element:
            /** @type {string} */
            options[element] = url + JSON.stringify(data) + "$$$";
            break;
          case css:
            /** @type {string} */
            options[css] = url + JSON.stringify(data) + "$$$";
            break;
          case tag:
            /** @type {string} */
            options[tag] = url + JSON.stringify(data) + "$$$";
            break;
          case number:
            /** @type {string} */
            options[number] = url + JSON.stringify(data) + "$$$";
            break;
          case object:
            /** @type {string} */
            options[object] = url + JSON.stringify(data) + "$$$";
        }
      };
    }
    /**
     * @return {undefined}
     */
    function transformToString() {
      /** @type {number} */
      this.h = (new Date).getTime();
      this.a = j;
      /** @type {string} */
      this.g = window.location.href.split("?")[0].replace("#", "");
      this.f = self.b64EncodeUnicode(encodeURIComponent(window.location.href));
      this.b = self.getCustomerKey();
      /** @type {*} */
      var a = options.wmUserInfo ? JSON.parse(options.wmUserInfo) : {};
      this.c = a.userId;
      this.d = self.b64EncodeUnicode(a.firstUserParam || "");
      this.e = self.b64EncodeUnicode(a.secondUserParam || "");
    }
    /**
     * @param {number} i
     * @param {string} t
     * @param {string} stats
     * @param {?} state
     * @param {string} valid
     * @return {undefined}
     */
    function run(i, t, stats, state, valid) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = i;
      this.j = self.b64EncodeUnicode(props.projectVersion || "");
      this.k = self.getPageKey();
      this.l = config.deviceName;
      /** @type {string} */
      this.m = config.os + (config.osVersion ? " " + config.osVersion : "");
      this.n = config.browserName;
      this.o = config.browserVersion;
      this.p = self.getCookie("webfunny_ip");
      /** @type {string} */
      this.q = "china";
      this.r = self.getCookie("webfunny_province");
      /** @type {string} */
      this.s = "";
      /** @type {string} */
      this.t = t;
      /** @type {string} */
      this.u = stats;
      this.newStatus = state;
      this.referrer = (valid || "").split("?")[0].replace("#", "");
    }
    /**
     * @param {number} i
     * @param {string} t
     * @param {number} n
     * @param {number} width
     * @param {number} point
     * @param {number} y
     * @param {number} z
     * @param {?} a
     * @param {(Array|number|string)} b
     * @param {?} keys
     * @param {!Array} object
     * @param {?} changeRecords
     * @return {undefined}
     */
    function check(i, t, n, width, point, y, z, a, b, keys, object, changeRecords) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = i;
      /** @type {string} */
      this.t = t;
      /** @type {number} */
      this.v = n;
      /** @type {number} */
      this.w = width;
      /** @type {number} */
      this.x = point;
      /** @type {number} */
      this.y = y;
      /** @type {number} */
      this.z = z;
      this.A = a;
      /** @type {(Array|number|string)} */
      this.B = b;
      this.C = keys;
      /** @type {!Array} */
      this.D = object;
      this.E = changeRecords;
    }
    /**
     * @param {number} a
     * @param {?} b
     * @param {string} r
     * @param {string} s
     * @param {string} h
     * @param {?} l
     * @param {?} message
     * @return {undefined}
     */
    function Color(a, b, r, s, h, l, message) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = a;
      this.da = b;
      this.G = self.b64EncodeUnicode(r);
      this.H = self.b64EncodeUnicode(s);
      this.I = self.b64EncodeUnicode(h);
      this.L = l;
      this.M = self.b64EncodeUnicode(encodeURIComponent(message));
    }
    /**
     * @param {number} i
     * @param {?} h
     * @param {string} c
     * @param {string} f
     * @return {undefined}
     */
    function init(i, h, c, f) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = i;
      this.O = h;
      this.k = self.getPageKey();
      this.l = config.deviceName;
      /** @type {string} */
      this.m = config.os + (config.osVersion ? " " + config.osVersion : "");
      this.n = config.browserName;
      this.o = config.browserVersion;
      /** @type {string} */
      this.p = "";
      /** @type {string} */
      this.q = "china";
      /** @type {string} */
      this.r = "";
      /** @type {string} */
      this.s = "";
      this.P = self.b64EncodeUnicode(c);
      this.Q = self.b64EncodeUnicode(f);
      /** @type {string} */
      this.R = "";
    }
    /**
     * @param {number} total
     * @param {string} q
     * @param {?} id
     * @param {!Function} n
     * @param {?} acc
     * @param {?} v
     * @param {string} e
     * @param {number} h
     * @param {string} u
     * @return {undefined}
     */
    function update(total, q, id, n, acc, v, e, h, u) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = total;
      /** @type {string} */
      this.g = q;
      this.S = self.b64EncodeUnicode(encodeURIComponent(id));
      /** @type {!Function} */
      this.T = n;
      this.U = acc;
      this.V = v;
      /** @type {string} */
      this.W = "";
      this.X = self.b64EncodeUnicode(e);
      /** @type {number} */
      this.h = h;
      /** @type {string} */
      this.u = u;
    }
    /**
     * @param {number} remote
     * @param {string} address
     * @param {?} other
     * @param {string} event
     * @return {undefined}
     */
    function Request(remote, address, other, event) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = remote;
      this.Y = self.b64EncodeUnicode(address);
      this.Z = other;
      this.aa = event || "jpeg";
    }
    /**
     * @param {number} i
     * @param {?} tag
     * @param {?} extra
     * @param {!Function} styles
     * @return {undefined}
     */
    function Element(i, tag, extra, styles) {
      transformToString.apply(this);
      /** @type {number} */
      this.i = i;
      this.ba = extra;
      this.ca = self.b64EncodeUnicode(encodeURIComponent(tag));
      /** @type {!Function} */
      this.T = styles;
    }
    /**
     * @param {string} value
     * @param {?} kind
     * @param {?} to
     * @param {number} idx
     * @param {string} label
     * @return {undefined}
     */
    function Node(value, kind, to, idx, label) {
      /** @type {string} */
      this.c = value;
      this.da = kind;
      this.ea = to;
      /** @type {number} */
      this.i = idx;
      /** @type {string} */
      this.Y = label;
      /** @type {number} */
      this.h = (new Date).getTime();
    }
    /**
     * @return {undefined}
     */
    function start() {
      /** @type {string} */
      var value = window.location.href.split("?")[0].replace("#", "");
      if (rows != value) {
        connect();
        /** @type {string} */
        rows = value;
      }
    }
    /**
     * @return {undefined}
     */
    function connect() {
      /**
       * @return {undefined}
       */
      function connect() {
        /** @type {string} */
        var e = JSON.stringify(node) + "$$$";
        self.ajax("POST", path, {
          logInfo : e
        }, function(node) {
          if (node && node.data && node.data.d) {
            /** @type {string} */
            options.ds = "c" == node.data.d ? "connected" : "disconnect";
            options.sl = node.data.s || "012345";
            options.WEBFUNNY_WAIT_COUNT = node.data.w || "40";
          }
        }, function() {
        });
      }
      self.setPageKey();
      /** @type {string} */
      var unparsed = "";
      if (gcGeometriesToConvert) {
        /** @type {string} */
        unparsed = gcGeometriesToConvert[0] && "navigate" === gcGeometriesToConvert[0].type ? "load" : "reload";
      }
      var style = self.getCookie("monitorCustomerKey");
      if (style) {
        /** @type {string} */
        var chunks = "";
        var message = style ? style.match(/\d{13}/g) : [];
        if (message && 0 < message.length) {
          /** @type {number} */
          var whiteRating = parseInt(message[0], 10);
          /** @type {string} */
          chunks = 1E3 < (new Date).getTime() - whiteRating ? "old" : "new";
        }
      }
      /** @type {string} */
      var bdUrl = document.referrer;
      var node = new run(element, unparsed, 0, chunks, bdUrl);
      var networkStatus = options.ds;
      if (networkStatus) {
        if ("connected" === networkStatus) {
          if (createDebugClient) {
            return;
          }
          self.initDebugTool();
        } else {
          if ("disconnect" === networkStatus && createDebugClient) {
            createDebugClient();
            /** @type {null} */
            createDebugClient = null;
          }
        }
        connect();
      } else {
        self.getIp(function() {
          connect();
        });
      }
    }
    /**
     * @param {string} error
     * @param {string} text
     * @param {number} vars
     * @param {number} position
     * @param {number} replace
     * @param {string} state
     * @return {undefined}
     */
    function debug(error, text, vars, position, replace, state) {
      start();
      var retn = text || "";
      var keys = state || "";
      /** @type {string} */
      var errorListOutput = "";
      if (retn) {
        /** @type {string} */
        errorListOutput = "string" == typeof keys ? keys.split(": ")[0].replace('"', "") : JSON.stringify(keys).split(": ")[0].replace('"', "");
      }
      var event = new init(b, error, errorListOutput + ": " + retn, keys);
      event.handleLogInfo(b, event);
    }
    /**
     * @return {undefined}
     */
    function handleError() {
      /** @type {function(...*): undefined} */
      var originalConsoleErrorFn = console.error;
      /**
       * @param {...*} err
       * @return {undefined}
       */
      console.error = function(err) {
        /** @type {*} */
        var body = err && err.message || err;
        /** @type {*} */
        var error = err && err.stack;
        if (error) {
          debug("on_error", body, 0, 0, 0, error);
        } else {
          if ("object" == typeof body) {
            try {
              /** @type {string} */
              body = JSON.stringify(body);
            } catch (e) {
              /** @type {string} */
              body = "\u9519\u8bef\u65e0\u6cd5\u89e3\u6790";
            }
          }
          debug("console_error", body, 0, 0, 0, "CustomizeError: " + body);
        }
        return originalConsoleErrorFn.apply(console, arguments);
      };
      /**
       * @param {string} script
       * @param {?} url
       * @param {?} event
       * @param {?} reason
       * @param {string} error
       * @return {undefined}
       */
      window.onerror = function(script, url, event, reason, error) {
        debug("on_error", script, 0, 0, 0, error ? error.stack : null);
      };
      /**
       * @param {!Object} event
       * @return {undefined}
       */
      window.onunhandledrejection = function(event) {
        /** @type {string} */
        var errorMessage = "";
        /** @type {string} */
        var th_field = "";
        th_field = "object" == typeof event.reason ? (errorMessage = event.reason.message, event.reason.stack) : (errorMessage = event.reason, "");
        debug("on_error", errorMessage, 0, 0, 0, "UncaughtInPromiseError: " + th_field);
      };
    }
    /**
     * @return {undefined}
     */
    function request() {
      /**
       * @param {string} name
       * @return {undefined}
       */
      function fire(name) {
        /** @type {!CustomEvent} */
        var event = new CustomEvent(name, {
          detail : this
        });
        window.dispatchEvent(event);
      }
      /**
       * @param {number} i
       * @param {string} t
       * @return {undefined}
       */
      function callback(i, t) {
        if (cache[i] && true !== cache[i].uploadFlag) {
          /** @type {string} */
          var t2 = "";
          if (t && t2.length < 500) {
            try {
              /** @type {string} */
              t2 = t ? JSON.stringify(self.encryptObj(JSON.parse(t))) : "";
            } catch (e) {
              /** @type {string} */
              t2 = "";
            }
          } else {
            /** @type {string} */
            t2 = "data is too long";
          }
          var scope = cache[i].simpleUrl;
          /** @type {number} */
          var timeStamp = (new Date).getTime();
          var m = cache[i].event.detail.responseURL;
          var status = cache[i].event.detail.status;
          var a = cache[i].event.detail.statusText;
          /** @type {number} */
          var time = timeStamp - cache[i].timeStamp;
          if (m && -1 == m.indexOf(y) && -1 == m.indexOf(value)) {
            var node = new update(name, scope, m, status, a, "\u53d1\u8d77\u8bf7\u6c42", "", cache[i].timeStamp, 0);
            node.handleLogInfo(name, node);
            var audio = new update(name, scope, m, status, a, "\u8bf7\u6c42\u8fd4\u56de", t2, timeStamp, time);
            audio.handleLogInfo(name, audio);
            /** @type {boolean} */
            cache[i].uploadFlag = true;
          }
        }
      }
      /** @type {function(): ?} */
      var XMLHttpRequest = window.XMLHttpRequest;
      /** @type {!Array} */
      var cache = [];
      /**
       * @return {?}
       */
      window.XMLHttpRequest = function() {
        var xhr = new XMLHttpRequest;
        return xhr.addEventListener("abort", function() {
          fire.call(this, "ajaxAbort");
        }, false), xhr.addEventListener("error", function() {
          fire.call(this, "ajaxError");
        }, false), xhr.addEventListener("load", function() {
          fire.call(this, "ajaxLoad");
        }, false), xhr.addEventListener("loadstart", function() {
          fire.call(this, "ajaxLoadStart");
        }, false), xhr.addEventListener("progress", function() {
          fire.call(this, "ajaxProgress");
        }, false), xhr.addEventListener("timeout", function() {
          fire.call(this, "ajaxTimeout");
        }, false), xhr.addEventListener("loadend", function() {
          fire.call(this, "ajaxLoadEnd");
        }, false), xhr.addEventListener("readystatechange", function() {
          fire.call(this, "ajaxReadyStateChange");
        }, false), xhr;
      };
      window.addEventListener("ajaxLoadStart", function(event) {
        var eventData = {
          timeStamp : (new Date).getTime(),
          event : event,
          simpleUrl : window.location.href.split("?")[0].replace("#", ""),
          uploadFlag : false
        };
        cache.push(eventData);
      });
      window.addEventListener("ajaxLoadEnd", function() {
        /** @type {number} */
        var i = 0;
        for (; i < cache.length; i++) {
          if (true !== cache[i].uploadFlag) {
            if (0 < cache[i].event.detail.status) {
              if ("blob" === (cache[i].event.detail.responseType + "").toLowerCase()) {
                !function(t) {
                  /** @type {!FileReader} */
                  var reader = new FileReader;
                  /**
                   * @return {undefined}
                   */
                  reader.onload = function() {
                    /** @type {(ArrayBuffer|Blob|null|string)} */
                    var result = reader.result;
                    callback(t, result);
                  };
                  try {
                    reader.readAsText(cache[i].event.detail.response, "utf-8");
                  } catch (e) {
                    callback(t, cache[i].event.detail.response + "");
                  }
                }(i);
              } else {
                try {
                  var response = cache[i] && cache[i].event && cache[i].event.detail;
                  if (!response) {
                    return;
                  }
                  var id = response.responseType;
                  /** @type {string} */
                  var result = "";
                  if (!("" !== id && "text" !== id)) {
                    result = response.responseText;
                  }
                  if ("json" === id) {
                    /** @type {string} */
                    result = JSON.stringify(response.response);
                  }
                  callback(i, result);
                } catch (e) {
                }
              }
            }
          }
        }
      });
    }
    /**
     * @param {!Function} position
     * @return {undefined}
     */
    function render(position) {
      if (position && position.record && 1 == position.record) {
        start();
        self.addOnclickForDocument(function(e) {
          /** @type {string} */
          var c = "";
          /** @type {string} */
          var m = "";
          /** @type {string} */
          var last_frame_text = "";
          var child_tag = e.target.tagName;
          /** @type {string} */
          var suffix = "";
          if ("svg" != e.target.tagName && "use" != e.target.tagName) {
            c = e.target.className;
            m = e.target.placeholder || "";
            last_frame_text = e.target.value || "";
            if (200 < (suffix = e.target.innerText ? e.target.innerText.replace(/\s*/g, "") : "").length) {
              /** @type {string} */
              suffix = suffix.substring(0, 100) + "... ..." + suffix.substring(suffix.length - 99, suffix.length - 1);
            }
            suffix = suffix.replace(/\s/g, "");
          }
          var handle = new Color(a, "click", c, m, last_frame_text, child_tag, suffix);
          handle.handleLogInfo(a, handle);
        });
      }
    }
    if (!sessionStorage) {
      window.sessionStorage = {};
    }
    if (!localStorage) {
      window.localStorage = {};
    }
    var options = localStorage;
    /** @type {string} */
    var rows = window.location.href.split("?")[0].replace("#", "");
    /** @type {null} */
    var createDebugClient = null;
    /** @type {(PerformanceTiming|null)} */
    var now = performance && performance.timing;
    /** @type {(Array<PerformanceEntry>|null)} */
    var gcGeometriesToConvert = performance && "function" == typeof performance.getEntries ? performance.getEntries() : null;
    var j = sessionStorage.CUSTOMER_WEB_MONITOR_ID || "webfunny_1592137897686";
    /** @type {string} */
    var current = -1 === window.location.href.indexOf("https") ? "http://" : "https://";
    /** @type {string} */
    var o = (window.location.href, "");
    /** @type {string} */
    var mid = current + "localhost:8011";
    /** @type {string} */
    var y = "/server/upLog";
    /** @type {string} */
    var value = "/server/upDLog";
    /** @type {string} */
    var path = mid + y;
    /** @type {string} */
    var url = mid + value;
    /** @type {string} */
    var i = mid;
    /** @type {string} */
    var element = "CUSTOMER_PV";
    /** @type {string} */
    var css = "LOAD_PAGE";
    /** @type {string} */
    var name = "HTTP_LOG";
    /** @type {string} */
    var b = "JS_ERROR";
    /** @type {string} */
    var json = "SCREEN_SHOT";
    /** @type {string} */
    var a = "ELE_BEHAVIOR";
    /** @type {string} */
    var tag = "RESOURCE_LOAD";
    /** @type {string} */
    var number = "CUSTOMIZE_BEHAVIOR";
    /** @type {string} */
    var object = "VIDEOS_EVENT";
    var self = (window.navigator.userAgent, new function() {
      /**
       * @param {!Function} cb
       * @return {undefined}
       */
      this.getIp = function(cb) {
        if (self.getCookie("webfunny_ip")) {
          if ("function" == typeof cb) {
            cb();
          }
        } else {
          self.loadJs("//pv.sohu.com/cityjson?ie=utf-8", function() {
            var opt_by = returnCitySN ? returnCitySN.cip : "";
            /** @type {string} */
            var urlSafeNodeName = encodeURIComponent(returnCitySN ? returnCitySN.cname : "");
            /** @type {!Date} */
            var dateExpires = new Date;
            dateExpires.setTime(dateExpires.getTime() + 864e5);
            /** @type {string} */
            document.cookie = "webfunny_ip=" + opt_by + ";Path=/;domain=;expires=" + dateExpires.toGMTString();
            /** @type {string} */
            document.cookie = "webfunny_province=" + urlSafeNodeName + ";Path=/;domain=;expires=" + dateExpires.toGMTString();
            if ("function" == typeof cb) {
              cb();
            }
          }, function() {
            if ("function" == typeof cb) {
              cb();
            }
          });
        }
      };
      /**
       * @return {?}
       */
      this.getUuid = function() {
        /** @type {number} */
        var _transactionName = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
          /** @type {number} */
          var r = 16 * Math.random() | 0;
          return ("x" == c ? r : 3 & r | 8).toString(16);
        }) + "-" + _transactionName;
      };
      /**
       * @return {?}
       */
      this.getCustomerKey = function() {
        var uuid = this.getUuid();
        var obj = self.getCookie("monitorCustomerKey");
        if (!obj) {
          /** @type {!Date} */
          var dateExpires = new Date;
          dateExpires.setTime(dateExpires.getTime() + 15552e7);
          /** @type {string} */
          document.cookie = "monitorCustomerKey=" + uuid + ";Path=/;domain=" + o + ";expires=" + dateExpires.toGMTString();
          obj = uuid;
        }
        return obj;
      };
      /**
       * @param {string} name
       * @return {?}
       */
      this.getCookie = function(name) {
        var t;
        /** @type {!RegExp} */
        var re2 = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return document.cookie.match(re2) ? (t = document.cookie.match(re2), unescape(t[2])) : "";
      };
      /**
       * @return {?}
       */
      this.getPageKey = function() {
        var uuid = this.getUuid();
        return options.monitorPageKey && /^[0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12}-\d{13}$/.test(options.monitorPageKey) || (options.monitorPageKey = uuid), options.monitorPageKey;
      };
      /**
       * @return {undefined}
       */
      this.setPageKey = function() {
        options.monitorPageKey = this.getUuid();
      };
      /**
       * @param {!Function} func
       * @return {undefined}
       */
      this.addLoadEvent = function(func) {
        /** @type {function(): undefined} */
        var oldonload = window.onload;
        if ("function" != typeof window.onload) {
          /** @type {!Function} */
          window.onload = func;
        } else {
          /**
           * @return {undefined}
           */
          window.onload = function() {
            oldonload();
            func();
          };
        }
      };
      /**
       * @param {!Function} hideCalen
       * @return {undefined}
       */
      this.addOnclickForDocument = function(hideCalen) {
        /** @type {function(): undefined} */
        var onclick = document.onclick;
        if ("function" != typeof document.onclick) {
          /** @type {!Function} */
          document.onclick = hideCalen;
        } else {
          /**
           * @return {undefined}
           */
          document.onclick = function() {
            onclick();
            hideCalen();
          };
        }
      };
      /**
       * @param {string} url
       * @param {string} data
       * @param {number} params
       * @param {!Function} callback
       * @param {!Function} handler
       * @return {undefined}
       */
      this.ajax = function(url, data, params, callback, handler) {
        try {
          var xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
          xhr.open(url, data, true);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
          /**
           * @return {undefined}
           */
          xhr.onreadystatechange = function() {
            if (4 == xhr.readyState) {
              var cached_wifi_network_list = {};
              try {
                /** @type {*} */
                cached_wifi_network_list = xhr.responseText ? JSON.parse(xhr.responseText) : {};
              } catch (e) {
                console.error(xhr.responseText);
                cached_wifi_network_list = {};
              }
              if ("function" == typeof callback) {
                callback(cached_wifi_network_list);
              }
            } else {
              if ("function" == typeof handler) {
                handler();
              }
            }
          };
          /** @type {string} */
          var json = JSON.stringify(params || {});
          xhr.send("data=" + json);
        } catch (inputExp) {
          console.warn(inputExp);
        }
      };
      /**
       * @return {undefined}
       */
      this.initDebugTool = function() {
        /**
         * @param {!Array} input
         * @return {?}
         */
        function done(input) {
          /** @type {!Array} */
          var results = [];
          var input_len = input.length;
          /** @type {number} */
          var j = 0;
          for (; j < input_len; j++) {
            results.push(input[j]);
          }
          var data = {};
          /** @type {!Array} */
          data.log = results;
          data.userId = file.userId;
          /** @type {number} */
          data.happenTime = (new Date).getTime();
          /** @type {string} */
          var buffer = "";
          try {
            buffer = window.LZString.compressToEncodedURIComponent(JSON.stringify(data));
          } catch (e) {
            /** @type {string} */
            buffer = "Lz convert fail";
          }
          return buffer;
        }
        /** @type {*} */
        var file = options.wmUserInfo ? JSON.parse(options.wmUserInfo) : {};
        var result = {};
        for (key in options) {
          if (!("function" == typeof options[key] || -1 != types.indexOf(key) || 1e3 < options[key].length)) {
            result[key] = options[key];
          }
        }
        try {
          result = self.b64EncodeUnicode(JSON.stringify(result));
        } catch (e) {
          /** @type {string} */
          result = "";
        }
        var n = {};
        for (key in sessionStorage) {
          if (!("function" == typeof sessionStorage[key] || -1 != types.indexOf(key) || 1e3 < sessionStorage[key].length)) {
            n[key] = sessionStorage[key];
          }
        }
        try {
          n = self.b64EncodeUnicode(JSON.stringify(n));
        } catch (e) {
          /** @type {string} */
          n = "";
        }
        var e = self.b64EncodeUnicode(document.cookie);
        self.ajax("POST", url, {
          localInfo : result,
          sessionInfo : n,
          cookieInfo : e
        }, function() {
        });
        /** @type {function(...*): undefined} */
        var originLog = console.log;
        /** @type {function(...*): undefined} */
        var ori = console.warn;
        /**
         * @param {...*} p0
         * @return {undefined}
         */
        console.log = function() {
          var result = done(arguments);
          return "connected" === options.ds && self.ajax("POST", url, {
            consoleInfo : result
          }, function() {
          }), originLog.apply(console, arguments);
        };
        /**
         * @param {...*} p0
         * @return {undefined}
         */
        console.warn = function() {
          var result = done(arguments);
          return "connected" === options.ds && self.ajax("POST", url, {
            warnInfo : result
          }, function() {
          }), ori.apply(console, arguments);
        };
      };
      /**
       * @param {string} s
       * @return {?}
       */
      this.encryptObj = function(s) {
        if (s instanceof Array) {
          /** @type {!Array} */
          var conf_shortcuts_icon = [];
          /** @type {number} */
          var i = 0;
          for (; i < s.length; ++i) {
            conf_shortcuts_icon[i] = this.encryptObj(s[i]);
          }
          return conf_shortcuts_icon;
        }
        if (s instanceof Object) {
          conf_shortcuts_icon = {};
          for (i in s) {
            conf_shortcuts_icon[i] = this.encryptObj(s[i]);
          }
          return conf_shortcuts_icon;
        }
        return 50 < (s = s + "").length && (s = s.substring(0, 10) + "****" + s.substring(s.length - 9, s.length)), s;
      };
      /**
       * @return {?}
       */
      this.getDevice = function() {
        var device = {};
        /** @type {string} */
        var ua = navigator.userAgent;
        /** @type {(Array<string>|null)} */
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        /** @type {(Array<string>|null)} */
        var showEffects = ua.match(/(iPad).*OS\s([\d_]+)/);
        /** @type {(Array<string>|null)} */
        var showPackageConstants = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        /** @type {(Array<string>|boolean|null)} */
        var showConstants = !showEffects && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        /** @type {(Array<string>|null)} */
        var cache_message = ua.match(/Android\s[\S\s]+Build\//);
        if (device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false, device.isWeixin = /MicroMessenger/i.test(ua), device.os = "web", device.deviceName = "PC", android && (device.os = "android", device.osVersion = android[2], device.android = true, device.androidChrome = 0 <= ua.toLowerCase().indexOf("chrome")), (showEffects || showConstants || showPackageConstants) && (device.os = "ios", device.ios = true), showConstants && !showPackageConstants && (device.osVersion = 
        showConstants[2].replace(/_/g, "."), device.iphone = true), showEffects && (device.osVersion = showEffects[2].replace(/_/g, "."), device.ipad = true), showPackageConstants && (device.osVersion = showPackageConstants[3] ? showPackageConstants[3].replace(/_/g, ".") : null, device.iphone = true), device.ios && device.osVersion && 0 <= ua.indexOf("Version/") && "10" === device.osVersion.split(".")[0] && (device.osVersion = ua.toLowerCase().split("version/")[1].split(" ")[0]), device.iphone) {
          /** @type {string} */
          device.deviceName = "iphone";
          var beginWidth = window.screen.width;
          var upperHeight = window.screen.height;
          if (320 === beginWidth && 480 === upperHeight) {
            /** @type {string} */
            device.deviceName = "iphone 4";
          } else {
            if (320 === beginWidth && 568 === upperHeight) {
              /** @type {string} */
              device.deviceName = "iphone 5/SE";
            } else {
              if (375 === beginWidth && 667 === upperHeight) {
                /** @type {string} */
                device.deviceName = "iphone 6/7/8";
              } else {
                if (414 === beginWidth && 736 === upperHeight) {
                  /** @type {string} */
                  device.deviceName = "iphone 6/7/8 Plus";
                } else {
                  if (375 === beginWidth && 812 === upperHeight) {
                    /** @type {string} */
                    device.deviceName = "iphone X/S/Max";
                  }
                }
              }
            }
          }
        } else {
          if (device.ipad) {
            /** @type {string} */
            device.deviceName = "ipad";
          } else {
            if (cache_message) {
              /** @type {string} */
              var d = cache_message[0].split(";")[1].replace(/Build\//g, "");
              /** @type {string} */
              device.deviceName = d.replace(/(^\s*)|(\s*$)/g, "");
            }
          }
        }
        if (-1 == ua.indexOf("Mobile")) {
          /** @type {string} */
          var ua = navigator.userAgent.toLowerCase();
          if (device.browserName = "\u672a\u77e5", 0 < ua.indexOf("msie")) {
            /** @type {string} */
            var assignmentUrl = ua.match(/msie [\d.]+;/gi)[0];
            /** @type {string} */
            device.browserName = assignmentUrl.split("/")[0];
            /** @type {string} */
            device.browserVersion = assignmentUrl.split("/")[1];
          }
          if (0 < ua.indexOf("firefox")) {
            /** @type {string} */
            assignmentUrl = ua.match(/firefox\/[\d.]+/gi)[0];
            /** @type {string} */
            device.browserName = assignmentUrl.split("/")[0];
            /** @type {string} */
            device.browserVersion = assignmentUrl.split("/")[1];
          }
          if (0 < ua.indexOf("safari") && ua.indexOf("chrome") < 0) {
            /** @type {string} */
            assignmentUrl = ua.match(/safari\/[\d.]+/gi)[0];
            /** @type {string} */
            device.browserName = assignmentUrl.split("/")[0];
            /** @type {string} */
            device.browserVersion = assignmentUrl.split("/")[1];
          }
          if (0 < ua.indexOf("chrome")) {
            /** @type {string} */
            assignmentUrl = ua.match(/chrome\/[\d.]+/gi)[0];
            /** @type {string} */
            device.browserName = assignmentUrl.split("/")[0];
            /** @type {string} */
            device.browserVersion = assignmentUrl.split("/")[1];
          }
        }
        return device.webView = (showConstants || showEffects || showPackageConstants) && ua.match(/.*AppleWebKit(?!.*Safari)/i), device;
      };
      /**
       * @param {string} js
       * @param {!Function} callback
       * @param {!Function} url
       * @return {?}
       */
      this.loadJs = function(js, callback, url) {
        /** @type {!Element} */
        var script = document.createElement("script");
        /** @type {number} */
        script.async = 1;
        /** @type {string} */
        script.src = js;
        /** @type {!Function} */
        script.onload = callback;
        if ("function" == typeof url) {
          /** @type {!Function} */
          script.onerror = url;
        }
        /** @type {!Element} */
        var mContainer = document.getElementsByTagName("script")[0];
        return mContainer.parentNode.insertBefore(script, mContainer), mContainer;
      };
      /**
       * @param {string} str
       * @return {?}
       */
      this.b64EncodeUnicode = function(str) {
        try {
          return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(canCreateDiscussions, index) {
            return String.fromCharCode("0x" + index);
          }));
        } catch (e) {
          return str;
        }
      };
    });
    var config = self.getDevice();
    /** @type {string} */
    var c = "";
    /** @type {string} */
    var defaultValue = "";
    /** @type {string} */
    var scope = "";
    /** @type {string} */
    var err = "";
    /** @type {string} */
    var s = "";
    /** @type {string} */
    var sort = "";
    /** @type {string} */
    var tmpSlug = "";
    /** @type {*} */
    var props = options.wmUserInfo ? JSON.parse(options.wmUserInfo) : {};
    /** @type {!Array} */
    var types = [a, b, name, json, element, css, tag, number, object];
    self.getCustomerKey();
    run.prototype = new ElementDefault;
    check.prototype = new ElementDefault;
    Color.prototype = new ElementDefault;
    init.prototype = new ElementDefault;
    update.prototype = new ElementDefault;
    Request.prototype = new ElementDefault;
    Element.prototype = new ElementDefault;
    Node.prototype = new ElementDefault;
    new ElementDefault;
    (function() {
      self.getIp();
      var row = options.sl;
      /** @type {!Array} */
      var crossfilterable_layers = ["0", "1", "2", "3", "4", "5"];
      if (row) {
        crossfilterable_layers = row.split("");
      }
      try {
        /** @type {number} */
        var layer_i = 0;
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
          switch(crossfilterable_layers[layer_i]) {
            case "0":
              connect();
              /** @type {string} */
              c = "\u542f\u52a8...";
              break;
            case "1":
              window.addEventListener("error", function(event) {
                var localName = event.target.localName;
                /** @type {string} */
                var text = "";
                if ("link" === localName) {
                  text = event.target.href;
                } else {
                  if ("script" === localName) {
                    text = event.target.src;
                  }
                }
                var element = new Element(tag, text, localName, "0");
                element.handleLogInfo(tag, element);
              }, true);
              /** @type {string} */
              err = "\u542f\u52a8...";
              break;
            case "2":
              handleError();
              /** @type {string} */
              defaultValue = "\u542f\u52a8...";
              break;
            case "3":
              request();
              /** @type {string} */
              scope = "\u542f\u52a8...";
              break;
            case "4":
              self.addLoadEvent(function() {
                setTimeout(function() {
                  if (gcGeometriesToConvert) {
                    /** @type {string} */
                    var action = "load";
                    /** @type {string} */
                    action = gcGeometriesToConvert[0] && "navigate" === gcGeometriesToConvert[0].type ? "load" : "reload";
                    /** @type {(PerformanceTiming|null)} */
                    var timing = now;
                    var options = new check(css);
                    /** @type {string} */
                    options.loadType = action;
                    /** @type {number} */
                    options.loadPage = timing.loadEventEnd - timing.navigationStart;
                    /** @type {number} */
                    options.domReady = timing.domComplete - timing.responseEnd;
                    /** @type {number} */
                    options.redirect = timing.redirectEnd - timing.redirectStart;
                    /** @type {number} */
                    options.lookupDomain = timing.domainLookupEnd - timing.domainLookupStart;
                    /** @type {number} */
                    options.ttfb = timing.responseStart - timing.navigationStart;
                    /** @type {number} */
                    options.request = timing.responseEnd - timing.requestStart;
                    /** @type {number} */
                    options.loadEvent = timing.loadEventEnd - timing.loadEventStart;
                    /** @type {number} */
                    options.appcache = timing.domainLookupStart - timing.fetchStart;
                    /** @type {number} */
                    options.unloadEvent = timing.unloadEventEnd - timing.unloadEventStart;
                    /** @type {number} */
                    options.connect = timing.connectEnd - timing.connectStart;
                    options.handleLogInfo(css, options);
                  }
                }, 1E3);
              });
              /** @type {string} */
              sort = "\u542f\u52a8...";
              break;
            case "5":
              render({
                record : 1
              });
              /** @type {string} */
              s = "\u542f\u52a8...";
          }
        }
        /** @type {number} */
        var max = 0;
        /** @type {!Array} */
        var spltdt = types;
        setInterval(function() {
          start();
          /** @type {number} */
          var min = parseInt(options.WEBFUNNY_WAIT_COUNT || "40", 10);
          if ((min = "connected" == options.ds ? 5 : min) <= max) {
            /** @type {string} */
            var extractedChars = "";
            /** @type {number} */
            var i = 0;
            for (; i < spltdt.length; i++) {
              extractedChars = extractedChars + (options[spltdt[i]] || "");
            }
            if (0 < extractedChars.length) {
              self.ajax("POST", path, {
                logInfo : extractedChars
              }, function(node) {
                if (node && node.data && node.data.d) {
                  /** @type {string} */
                  options.ds = "c" == node.data.d ? "connected" : "disconnect";
                  options.sl = node.data.s || "012345";
                  options.WEBFUNNY_WAIT_COUNT = node.data.w || "40";
                }
              }, function() {
                /** @type {number} */
                var i = 0;
                for (; i < spltdt.length; i++) {
                  /** @type {string} */
                  options[spltdt[i]] = "";
                }
              });
            }
            /** @type {number} */
            max = 0;
          }
          max++;
        }, 200);
      } catch (ChangeSetName) {
        console.error("\u76d1\u63a7\u4ee3\u7801\u5f02\u5e38\uff0c\u6355\u83b7", ChangeSetName);
      }
    })();
    window.webfunny = {
      wm_check : function() {
        /** @type {string} */
        var e = "\u672a\u542f\u52a8\uff01";
        return console.log("start check:"), console.log("\u8eab\u4efd\u6807\u8bc6\uff1a" + options.wmUserInfo), console.log("\u63a2\u9488\u6807\u8bc6\uff1a" + j), console.log("\u4e0a\u62a5\u63a5\u53e3\uff1a" + path), console.log("\u542f\u52a8\u5217\u8868\uff1a" + options.sl), console.log("..........."), console.log("PVUV\u72b6\u6001\uff1a" + (c || e)), console.log("\u9759\u6001\u8d44\u6e90\u72b6\u6001\uff1a" + (err || e)), console.log("JS\u9519\u8bef\u72b6\u6001\uff1a" + (defaultValue || e)), console.log("\u63a5\u53e3\u8bf7\u6c42\u72b6\u6001\uff1a" + 
        (scope || e)), console.log("\u9875\u9762\u52a0\u8f7d\u72b6\u6001\uff1a" + (sort || e)), console.log("\u884c\u4e3a\u72b6\u6001\uff1a" + (s || e)), console.log("\u4fe1\u606f\u521d\u59cb\u5316\u72b6\u6001\uff1a" + (tmpSlug || "\u672a\u521d\u59cb\u5316\uff01\u90e8\u5206\u529f\u80fd\u5c06\u65e0\u6cd5\u4f7f\u7528\uff0c\u8bf7\u67e5\u770b\u6587\u6863(API\u65b9\u6cd5\u8c03\u7528)")), "end";
      },
      wm_upload : function(artist, type, lastIndex, index) {
        /** @type {string} */
        var otpUrl = (new Date).toString();
        var manifest = {
          createTime : encodeURIComponent(otpUrl),
          happenTime : (new Date).getTime(),
          uploadType : "WM_UPLOAD",
          simpleUrl : encodeURIComponent(encodeURIComponent(artist)),
          webMonitorId : j,
          recordType : type,
          recordIndex : lastIndex,
          description : index
        };
        /** @type {string} */
        var s = i;
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("POST", s, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("data=" + JSON.stringify([manifest]));
      },
      wm_init_user : function(coeffTab, nDataCW, dataTab) {
        return coeffTab || console.warn("userId \u521d\u59cb\u5316\u503c\u4e3a0(\u4e0d\u63a8\u8350) \u6216\u8005 \u672a\u521d\u59cb\u5316"), dataTab || console.warn("secondParam \u521d\u59cb\u5316\u503c\u4e3a0(\u4e0d\u63a8\u8350) \u6216\u8005 \u672a\u521d\u59cb\u5316"), nDataCW && (j = nDataCW + "_webmonitor"), options.wmUserInfo = JSON.stringify({
          userId : coeffTab,
          userTag : nDataCW,
          secondUserParam : dataTab
        }), 1;
      },
      wmInitUser : function(text, no) {
        return text || console.warn("userId(\u7528\u6237\u552f\u4e00\u6807\u8bc6) \u521d\u59cb\u5316\u503c\u4e3a0(\u4e0d\u63a8\u8350) \u6216\u8005 \u672a\u4f20\u503c, \u63a2\u9488\u53ef\u80fd\u65e0\u6cd5\u751f\u6548"), no || console.warn("projectVersion(\u5e94\u7528\u7248\u672c\u53f7) \u521d\u59cb\u5316\u503c\u4e3a0(\u4e0d\u63a8\u8350) \u6216\u8005 \u672a\u4f20\u503c, \u63a2\u9488\u53ef\u80fd\u65e0\u6cd5\u751f\u6548"), options.wmUserInfo = JSON.stringify({
          userId : text,
          projectVersion : no
        }), tmpSlug = "\u7528\u6237\u4fe1\u606f\u521d\u59cb\u5316\uff1auserId=" + text + "\uff0c\u7248\u672c\u53f7\uff1a" + no, 1;
      },
      wm_screen_shot : function() {
      },
      wm_upload_picture : function(context, id, nbLast) {
        var o = new Request(json, id, context, nbLast || "jpeg");
        o.handleLogInfo(json, o);
      },
      wm_upload_extend_log : function(config, i, options, node, maxDepth) {
        var scope = new Node(config, i, options, node, maxDepth);
        scope.handleLogInfo(number, scope);
      }
    };
    (function() {
      /**
       * @param {?} type
       * @param {!Object} eventInitDict
       * @return {?}
       */
      function CustomEvent(type, eventInitDict) {
        eventInitDict = eventInitDict || {
          bubbles : false,
          cancelable : false,
          detail : void 0
        };
        /** @type {(Event|null)} */
        var event = document.createEvent("CustomEvent");
        return event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail), event;
      }
      if ("function" == typeof window.CustomEvent) {
        return;
      }
      CustomEvent.prototype = window.Event.prototype;
      /** @type {function(?, !Object): ?} */
      window.CustomEvent = CustomEvent;
    })();
  }(window);
  window.LZString = (f = String.fromCharCode, g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", strategy = {}, LZString = {
    compressToEncodedURIComponent : function(value) {
      return null == value ? "" : LZString._compress(value, 6, function(cat) {
        return g.charAt(cat);
      });
    },
    decompressFromEncodedURIComponent : function(input) {
      return null == input ? "" : "" == input ? null : (input = input.replace(/ /g, "+"), LZString._decompress(input.length, 32, function(i) {
        return function(str, intent) {
          if (!strategy[str]) {
            strategy[str] = {};
            /** @type {number} */
            var i = 0;
            for (; i < str.length; i++) {
              /** @type {number} */
              strategy[str][str.charAt(i)] = i;
            }
          }
          return strategy[str][intent];
        }(g, input.charAt(i));
      }));
    },
    _compress : function(data, duration, clamp) {
      if (null == data) {
        return "";
      }
      var o;
      var result;
      var i;
      var cache = {};
      var placeMidpointLine = {};
      /** @type {string} */
      var k = "";
      /** @type {string} */
      var id = "";
      /** @type {string} */
      var p = "";
      /** @type {number} */
      var randomValue = 2;
      /** @type {number} */
      var counter = 3;
      /** @type {number} */
      var charsetBitSize = 2;
      /** @type {!Array} */
      var colors = [];
      /** @type {number} */
      var r = 0;
      /** @type {number} */
      var n = 0;
      /** @type {number} */
      i = 0;
      for (; i < data.length; i = i + 1) {
        if (k = data.charAt(i), Object.prototype.hasOwnProperty.call(cache, k) || (cache[k] = counter++, placeMidpointLine[k] = true), id = p + k, Object.prototype.hasOwnProperty.call(cache, id)) {
          /** @type {string} */
          p = id;
        } else {
          if (Object.prototype.hasOwnProperty.call(placeMidpointLine, p)) {
            if (p.charCodeAt(0) < 256) {
              /** @type {number} */
              o = 0;
              for (; o < charsetBitSize; o++) {
                /** @type {number} */
                r = r << 1;
                if (n == duration - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
              }
              /** @type {number} */
              result = p.charCodeAt(0);
              /** @type {number} */
              o = 0;
              for (; o < 8; o++) {
                /** @type {number} */
                r = r << 1 | 1 & result;
                if (n == duration - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
                /** @type {number} */
                result = result >> 1;
              }
            } else {
              /** @type {number} */
              result = 1;
              /** @type {number} */
              o = 0;
              for (; o < charsetBitSize; o++) {
                /** @type {number} */
                r = r << 1 | result;
                if (n == duration - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
                /** @type {number} */
                result = 0;
              }
              /** @type {number} */
              result = p.charCodeAt(0);
              /** @type {number} */
              o = 0;
              for (; o < 16; o++) {
                /** @type {number} */
                r = r << 1 | 1 & result;
                if (n == duration - 1) {
                  /** @type {number} */
                  n = 0;
                  colors.push(clamp(r));
                  /** @type {number} */
                  r = 0;
                } else {
                  n++;
                }
                /** @type {number} */
                result = result >> 1;
              }
            }
            if (0 == --randomValue) {
              /** @type {number} */
              randomValue = Math.pow(2, charsetBitSize);
              charsetBitSize++;
            }
            delete placeMidpointLine[p];
          } else {
            result = cache[p];
            /** @type {number} */
            o = 0;
            for (; o < charsetBitSize; o++) {
              /** @type {number} */
              r = r << 1 | 1 & result;
              if (n == duration - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              result = result >> 1;
            }
          }
          if (0 == --randomValue) {
            /** @type {number} */
            randomValue = Math.pow(2, charsetBitSize);
            charsetBitSize++;
          }
          /** @type {number} */
          cache[id] = counter++;
          /** @type {string} */
          p = String(k);
        }
      }
      if ("" !== p) {
        if (Object.prototype.hasOwnProperty.call(placeMidpointLine, p)) {
          if (p.charCodeAt(0) < 256) {
            /** @type {number} */
            o = 0;
            for (; o < charsetBitSize; o++) {
              /** @type {number} */
              r = r << 1;
              if (n == duration - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
            }
            /** @type {number} */
            result = p.charCodeAt(0);
            /** @type {number} */
            o = 0;
            for (; o < 8; o++) {
              /** @type {number} */
              r = r << 1 | 1 & result;
              if (n == duration - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              result = result >> 1;
            }
          } else {
            /** @type {number} */
            result = 1;
            /** @type {number} */
            o = 0;
            for (; o < charsetBitSize; o++) {
              /** @type {number} */
              r = r << 1 | result;
              if (n == duration - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              result = 0;
            }
            /** @type {number} */
            result = p.charCodeAt(0);
            /** @type {number} */
            o = 0;
            for (; o < 16; o++) {
              /** @type {number} */
              r = r << 1 | 1 & result;
              if (n == duration - 1) {
                /** @type {number} */
                n = 0;
                colors.push(clamp(r));
                /** @type {number} */
                r = 0;
              } else {
                n++;
              }
              /** @type {number} */
              result = result >> 1;
            }
          }
          if (0 == --randomValue) {
            /** @type {number} */
            randomValue = Math.pow(2, charsetBitSize);
            charsetBitSize++;
          }
          delete placeMidpointLine[p];
        } else {
          result = cache[p];
          /** @type {number} */
          o = 0;
          for (; o < charsetBitSize; o++) {
            /** @type {number} */
            r = r << 1 | 1 & result;
            if (n == duration - 1) {
              /** @type {number} */
              n = 0;
              colors.push(clamp(r));
              /** @type {number} */
              r = 0;
            } else {
              n++;
            }
            /** @type {number} */
            result = result >> 1;
          }
        }
        if (0 == --randomValue) {
          /** @type {number} */
          randomValue = Math.pow(2, charsetBitSize);
          charsetBitSize++;
        }
      }
      /** @type {number} */
      result = 2;
      /** @type {number} */
      o = 0;
      for (; o < charsetBitSize; o++) {
        /** @type {number} */
        r = r << 1 | 1 & result;
        if (n == duration - 1) {
          /** @type {number} */
          n = 0;
          colors.push(clamp(r));
          /** @type {number} */
          r = 0;
        } else {
          n++;
        }
        /** @type {number} */
        result = result >> 1;
      }
      for (;;) {
        if (r = r << 1, n == duration - 1) {
          colors.push(clamp(r));
          break;
        }
        n++;
      }
      return colors.join("");
    },
    _decompress : function(length, resetValue, getNextValue) {
      var name;
      var b;
      var i;
      var s;
      var A;
      var tag;
      var j;
      /** @type {!Array} */
      var arr = [];
      /** @type {number} */
      var p = 4;
      /** @type {number} */
      var offset = 4;
      /** @type {number} */
      var n = 3;
      /** @type {string} */
      var a = "";
      /** @type {!Array} */
      var search = [];
      var data = {
        val : getNextValue(0),
        position : resetValue,
        index : 1
      };
      /** @type {number} */
      name = 0;
      for (; name < 3; name = name + 1) {
        /** @type {number} */
        arr[name] = name;
      }
      /** @type {number} */
      i = 0;
      /** @type {number} */
      A = Math.pow(2, 2);
      /** @type {number} */
      tag = 1;
      for (; tag != A;) {
        /** @type {number} */
        s = data.val & data.position;
        data.position >>= 1;
        if (0 == data.position) {
          /** @type {number} */
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        /** @type {number} */
        i = i | (0 < s ? 1 : 0) * tag;
        /** @type {number} */
        tag = tag << 1;
      }
      switch(i) {
        case 0:
          /** @type {number} */
          i = 0;
          /** @type {number} */
          A = Math.pow(2, 8);
          /** @type {number} */
          tag = 1;
          for (; tag != A;) {
            /** @type {number} */
            s = data.val & data.position;
            data.position >>= 1;
            if (0 == data.position) {
              /** @type {number} */
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            /** @type {number} */
            i = i | (0 < s ? 1 : 0) * tag;
            /** @type {number} */
            tag = tag << 1;
          }
          j = f(i);
          break;
        case 1:
          /** @type {number} */
          i = 0;
          /** @type {number} */
          A = Math.pow(2, 16);
          /** @type {number} */
          tag = 1;
          for (; tag != A;) {
            /** @type {number} */
            s = data.val & data.position;
            data.position >>= 1;
            if (0 == data.position) {
              /** @type {number} */
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            /** @type {number} */
            i = i | (0 < s ? 1 : 0) * tag;
            /** @type {number} */
            tag = tag << 1;
          }
          j = f(i);
          break;
        case 2:
          return "";
      }
      b = arr[3] = j;
      search.push(j);
      for (;;) {
        if (data.index > length) {
          return "";
        }
        /** @type {number} */
        i = 0;
        /** @type {number} */
        A = Math.pow(2, n);
        /** @type {number} */
        tag = 1;
        for (; tag != A;) {
          /** @type {number} */
          s = data.val & data.position;
          data.position >>= 1;
          if (0 == data.position) {
            /** @type {number} */
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }
          /** @type {number} */
          i = i | (0 < s ? 1 : 0) * tag;
          /** @type {number} */
          tag = tag << 1;
        }
        switch(j = i) {
          case 0:
            /** @type {number} */
            i = 0;
            /** @type {number} */
            A = Math.pow(2, 8);
            /** @type {number} */
            tag = 1;
            for (; tag != A;) {
              /** @type {number} */
              s = data.val & data.position;
              data.position >>= 1;
              if (0 == data.position) {
                /** @type {number} */
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              /** @type {number} */
              i = i | (0 < s ? 1 : 0) * tag;
              /** @type {number} */
              tag = tag << 1;
            }
            arr[offset++] = f(i);
            /** @type {number} */
            j = offset - 1;
            p--;
            break;
          case 1:
            /** @type {number} */
            i = 0;
            /** @type {number} */
            A = Math.pow(2, 16);
            /** @type {number} */
            tag = 1;
            for (; tag != A;) {
              /** @type {number} */
              s = data.val & data.position;
              data.position >>= 1;
              if (0 == data.position) {
                /** @type {number} */
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }
              /** @type {number} */
              i = i | (0 < s ? 1 : 0) * tag;
              /** @type {number} */
              tag = tag << 1;
            }
            arr[offset++] = f(i);
            /** @type {number} */
            j = offset - 1;
            p--;
            break;
          case 2:
            return search.join("");
        }
        if (0 == p && (p = Math.pow(2, n), n++), arr[j]) {
          a = arr[j];
        } else {
          if (j !== offset) {
            return null;
          }
          a = b + b.charAt(0);
        }
        search.push(a);
        arr[offset++] = b + a.charAt(0);
        b = a;
        if (0 == --p) {
          /** @type {number} */
          p = Math.pow(2, n);
          n++;
        }
      }
    }
  });
  if (!(void 0 === (result = function() {
    return window.LZString;
  }.call(t, aFunctionName, t, record)))) {
    record.exports = result;
  }
}, function(canCreateDiscussions, isSlidingUp) {
  !function(self) {
    /**
     * @param {string} name
     * @return {?}
     */
    function normalizeName(name) {
      if ("string" != typeof name && (name = String(name)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError("Invalid character in header field name");
      }
      return name.toLowerCase();
    }
    /**
     * @param {string} name
     * @return {?}
     */
    function normalizeValue(name) {
      return "string" != typeof name && (name = String(name)), name;
    }
    /**
     * @param {!Array} parent
     * @return {?}
     */
    function fn(parent) {
      var iterable = {
        next : function() {
          var _eof = parent.shift();
          return {
            done : void 0 === _eof,
            value : _eof
          };
        }
      };
      return n && (iterable[Symbol.iterator] = function() {
        return iterable;
      }), iterable;
    }
    /**
     * @param {!Object} headers
     * @return {undefined}
     */
    function Headers(headers) {
      this.map = {};
      if (headers instanceof Headers) {
        headers.forEach(function(value, s) {
          this.append(s, value);
        }, this);
      } else {
        if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else {
          if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name) {
              this.append(name, headers[name]);
            }, this);
          }
        }
      }
    }
    /**
     * @param {?} body
     * @return {?}
     */
    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError("Already read"));
      }
      /** @type {boolean} */
      body.bodyUsed = true;
    }
    /**
     * @param {!Object} x
     * @return {?}
     */
    function require(x) {
      return new Promise(function(fileCallback, callback) {
        /**
         * @return {undefined}
         */
        x.onload = function() {
          fileCallback(x.result);
        };
        /**
         * @return {undefined}
         */
        x.onerror = function() {
          callback(x.error);
        };
      });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function done(value) {
      /** @type {!FileReader} */
      var f = new FileReader;
      var result = require(f);
      return f.readAsArrayBuffer(value), result;
    }
    /**
     * @param {!Object} buffer
     * @return {?}
     */
    function bufferClone(buffer) {
      if (buffer.slice) {
        return buffer.slice(0);
      }
      /** @type {!Uint8Array} */
      var tmp = new Uint8Array(buffer.byteLength);
      return tmp.set(new Uint8Array(buffer)), tmp.buffer;
    }
    /**
     * @return {?}
     */
    function Body() {
      return this.bodyUsed = false, this._initBody = function(body) {
        if (this._bodyInit = body) {
          if ("string" == typeof body) {
            /** @type {string} */
            this._bodyText = body;
          } else {
            if (blobSupport && Blob.prototype.isPrototypeOf(body)) {
              /** @type {string} */
              this._bodyBlob = body;
            } else {
              if (parentElement && FormData.prototype.isPrototypeOf(body)) {
                /** @type {string} */
                this._bodyFormData = body;
              } else {
                if (isElement && URLSearchParams.prototype.isPrototypeOf(body)) {
                  this._bodyText = body.toString();
                } else {
                  if (range && blobSupport && isDataView(body)) {
                    this._bodyArrayBuffer = bufferClone(body.buffer);
                    /** @type {!Blob} */
                    this._bodyInit = new Blob([this._bodyArrayBuffer]);
                  } else {
                    if (!range || !ArrayBuffer.prototype.isPrototypeOf(body) && !isArrayBufferView(body)) {
                      throw new Error("unsupported BodyInit type");
                    }
                    this._bodyArrayBuffer = bufferClone(body);
                  }
                }
              }
            }
          }
        } else {
          /** @type {string} */
          this._bodyText = "";
        }
        if (!this.headers.get("content-type")) {
          if ("string" == typeof body) {
            this.headers.set("content-type", "text/plain;charset=UTF-8");
          } else {
            if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else {
              if (isElement && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          }
        }
      }, blobSupport && (this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        }
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as blob");
        }
        return Promise.resolve(new Blob([this._bodyText]));
      }, this.arrayBuffer = function() {
        return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(done);
      }), this.text = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }
        if (this._bodyBlob) {
          return function(f) {
            /** @type {!FileReader} */
            var r = new FileReader;
            var io = require(r);
            return r.readAsText(f), io;
          }(this._bodyBlob);
        }
        if (this._bodyArrayBuffer) {
          return Promise.resolve(function(signature) {
            /** @type {!Uint8Array} */
            var result = new Uint8Array(signature);
            /** @type {!Array} */
            var n = new Array(result.length);
            /** @type {number} */
            var i = 0;
            for (; i < result.length; i++) {
              /** @type {string} */
              n[i] = String.fromCharCode(result[i]);
            }
            return n.join("");
          }(this._bodyArrayBuffer));
        }
        if (this._bodyFormData) {
          throw new Error("could not read FormData body as text");
        }
        return Promise.resolve(this._bodyText);
      }, parentElement && (this.formData = function() {
        return this.text().then(text2formData);
      }), this.json = function() {
        return this.text().then(JSON.parse);
      }, this;
    }
    /**
     * @param {!Object} input
     * @param {!Object} options
     * @return {undefined}
     */
    function Request(input, options) {
      var body = (options = options || {}).body;
      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError("Already read");
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!(body || null == input._bodyInit)) {
          body = input._bodyInit;
          /** @type {boolean} */
          input.bodyUsed = true;
        }
      } else {
        /** @type {string} */
        this.url = String(input);
      }
      if (this.credentials = options.credentials || this.credentials || "omit", !options.headers && this.headers || (this.headers = new Headers(options.headers)), this.method = function(shortMonthName) {
        var looseWord = shortMonthName.toUpperCase();
        return -1 < methods.indexOf(looseWord) ? looseWord : shortMonthName;
      }(options.method || this.method || "GET"), this.mode = options.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && body) {
        throw new TypeError("Body not allowed for GET or HEAD requests");
      }
      this._initBody(body);
    }
    /**
     * @param {!Object} body
     * @return {?}
     */
    function text2formData(body) {
      /** @type {!FormData} */
      var form = new FormData;
      return body.trim().split("&").forEach(function(clusterShardData) {
        if (clusterShardData) {
          var headersAndBody = clusterShardData.split("=");
          var url = headersAndBody.shift().replace(/\+/g, " ");
          var filePath = headersAndBody.join("=").replace(/\+/g, " ");
          form.append(decodeURIComponent(url), decodeURIComponent(filePath));
        }
      }), form;
    }
    /**
     * @param {string} bodyInit
     * @param {!Object} options
     * @return {undefined}
     */
    function Response(bodyInit, options) {
      options = options || {};
      /** @type {string} */
      this.type = "default";
      this.status = "status" in options ? options.status : 200;
      /** @type {boolean} */
      this.ok = 200 <= this.status && this.status < 300;
      this.statusText = "statusText" in options ? options.statusText : "OK";
      this.headers = new Headers(options.headers);
      this.url = options.url || "";
      this._initBody(bodyInit);
    }
    /** @type {boolean} */
    var isElement = "URLSearchParams" in self;
    /** @type {boolean} */
    var n = "Symbol" in self && "iterator" in Symbol;
    var blobSupport = "FileReader" in self && "Blob" in self && function() {
      try {
        return new Blob, true;
      } catch (e) {
        return false;
      }
    }();
    /** @type {boolean} */
    var parentElement = "FormData" in self;
    /** @type {boolean} */
    var range = "ArrayBuffer" in self;
    if (range) {
      /** @type {!Array} */
      var orderedPaneIds = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"];
      /**
       * @param {string} obj
       * @return {?}
       */
      var isDataView = function(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      };
      /** @type {function(*): boolean} */
      var isArrayBufferView = ArrayBuffer.isView || function(id) {
        return id && -1 < orderedPaneIds.indexOf(Object.prototype.toString.call(id));
      };
    }
    /**
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + "," + value : value;
    };
    /**
     * @param {string} name
     * @return {undefined}
     */
    Headers.prototype.delete = function(name) {
      delete this.map[normalizeName(name)];
    };
    /**
     * @param {string} name
     * @return {?}
     */
    Headers.prototype.get = function(name) {
      return name = normalizeName(name), this.has(name) ? this.map[name] : null;
    };
    /**
     * @param {string} name
     * @return {?}
     */
    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };
    /**
     * @param {?} name
     * @param {string} value
     * @return {undefined}
     */
    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };
    /**
     * @param {!Function} callback
     * @param {?} thisp
     * @return {undefined}
     */
    Headers.prototype.forEach = function(callback, thisp) {
      var i;
      for (i in this.map) {
        if (this.map.hasOwnProperty(i)) {
          callback.call(thisp, this.map[i], i, this);
        }
      }
    };
    /**
     * @return {?}
     */
    Headers.prototype.keys = function() {
      /** @type {!Array} */
      var params = [];
      return this.forEach(function(canCreateDiscussions, post_content_type) {
        params.push(post_content_type);
      }), fn(params);
    };
    /**
     * @return {?}
     */
    Headers.prototype.values = function() {
      /** @type {!Array} */
      var q = [];
      return this.forEach(function(innerSource) {
        q.push(innerSource);
      }), fn(q);
    };
    /**
     * @return {?}
     */
    Headers.prototype.entries = function() {
      /** @type {!Array} */
      var q = [];
      return this.forEach(function(y, tiles) {
        q.push([tiles, y]);
      }), fn(q);
    };
    if (n) {
      /** @type {function(): ?} */
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }
    /** @type {!Array} */
    var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    /**
     * @return {?}
     */
    Request.prototype.clone = function() {
      return new Request(this, {
        body : this._bodyInit
      });
    };
    Body.call(Request.prototype);
    Body.call(Response.prototype);
    /**
     * @return {?}
     */
    Response.prototype.clone = function() {
      return new Response(this._bodyInit, {
        status : this.status,
        statusText : this.statusText,
        headers : new Headers(this.headers),
        url : this.url
      });
    };
    /**
     * @return {?}
     */
    Response.error = function() {
      var response = new Response(null, {
        status : 0,
        statusText : ""
      });
      return response.type = "error", response;
    };
    /** @type {!Array} */
    var removeDataListeners = [301, 302, 303, 307, 308];
    /**
     * @param {string} state
     * @param {string} i
     * @return {?}
     */
    Response.redirect = function(state, i) {
      if (-1 === removeDataListeners.indexOf(i)) {
        throw new RangeError("Invalid status code");
      }
      return new Response(null, {
        status : i,
        headers : {
          location : state
        }
      });
    };
    /** @type {function(!Object): undefined} */
    self.Headers = Headers;
    /** @type {function(!Object, !Object): undefined} */
    self.Request = Request;
    /** @type {function(string, !Object): undefined} */
    self.Response = Response;
    /**
     * @param {?} method
     * @param {boolean} url
     * @return {?}
     */
    self.fetch = function(method, url) {
      return fetchHttpUrl = method, new Promise(function(resolve, reject) {
        var request = new Request(method, url);
        /** @type {!XMLHttpRequest} */
        var xhr = new XMLHttpRequest;
        /**
         * @return {undefined}
         */
        xhr.onload = function() {
          /** @type {string} */
          var type = xhr.responseType;
          /** @type {string} */
          var response = "";
          var options = {
            status : xhr.status,
            statusText : xhr.statusText,
            headers : function(clusterShardData) {
              var h2 = new Headers;
              return clusterShardData.split(/\r?\n/).forEach(function(clusterShardData) {
                /** @type {!Array<string>} */
                var headersAndBody = clusterShardData.split(":");
                /** @type {string} */
                var style = headersAndBody.shift().trim();
                if (style) {
                  /** @type {string} */
                  var foo = headersAndBody.join(":").trim();
                  h2.append(style, foo);
                }
              }), h2;
            }(xhr.getAllResponseHeaders() || "")
          };
          options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
          if (!("" !== type && "text" !== type)) {
            /** @type {string} */
            response = xhr.responseText;
          }
          if ("json" === type) {
            /** @type {(Object|null|string)} */
            response = xhr.response;
          }
          /** @type {(Object|null|string)} */
          var body = "response" in xhr ? xhr.response : response;
          resolve(new Response(body, options));
        };
        /**
         * @return {undefined}
         */
        xhr.onerror = function() {
          console.error("Network request failed");
          reject(new TypeError("Network request failed"));
        };
        /**
         * @return {undefined}
         */
        xhr.ontimeout = function() {
          reject(new TypeError("Network request failed"));
        };
        xhr.open(request.method, request.url, true);
        if ("include" === request.credentials) {
          /** @type {boolean} */
          xhr.withCredentials = true;
        }
        if ("responseType" in xhr && blobSupport) {
          /** @type {string} */
          xhr.responseType = "blob";
        }
        request.headers.forEach(function(type, i) {
          xhr.setRequestHeader(i, type);
        });
        xhr.send(void 0 === request._bodyInit ? null : request._bodyInit);
      });
    };
    /** @type {boolean} */
    self.fetch.polyfill = true;
  }("undefined" != typeof self ? self : window);
}]);
