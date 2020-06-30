import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

export default class httpLog {
    constructor() {
        this.timeRecordArray = []
    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!httpLog.instance) {
            httpLog.instance = new httpLog()
        }
        return httpLog.instance
    }

    /**
     * 监听jquery、zepto、自己封装ajax方法报错
     * 我们监听 XMLHttpRequest 对象的两个事件 loadstart， loadend
     * @return {?}
     */
    recordHttpError() {
        let XMLHttpRequest = window.XMLHttpRequest
        let ajaxEventTrigger = () => {
            let ajaxEvent = new CustomEvent(event, { detail: this });
            window.dispatchEvent(ajaxEvent);
        }

        /**
         * @param {string} name
         * @return {undefined}
         */
        function fire(name) {
            /** @type {!CustomEvent} */
            var event = new CustomEvent(name, {
                detail: this
            });
            window.dispatchEvent(event);
        }


        window.XMLHttpRequest = () => {
            var xhr = new XMLHttpRequest;
            return xhr.addEventListener("abort", function () {
                fire.call(this, "ajaxAbort")
            }, false), xhr.addEventListener("error", function () {
                fire.call(this, "ajaxError")
            }, false), xhr.addEventListener("load", function () {
                fire.call(this, "ajaxLoad")
            }, false), xhr.addEventListener("loadstart", function () {
                fire.call(this, "ajaxLoadStart")
            }, false), xhr.addEventListener("progress", function () {
                fire.call(this, "ajaxProgress")
            }, false), xhr.addEventListener("timeout", function () {
                fire.call(this, "ajaxTimeout")
            }, false), xhr.addEventListener("loadend", function () {
                fire.call(this, "ajaxLoadEnd")
            }, false), xhr.addEventListener("readystatechange", function () {
                fire.call(this, "ajaxReadyStateChange")
            }, false), xhr
        }

        window.addEventListener('ajaxLoadStart', (e) => {
            console.log('进来了')
            console.log(e)
            let tempObj = {
                timeStamp: new Date().getTime(),
                event: e,
                simpleUrl: window.location.href.split('?')[0].replace('#', ''),
                uploadFlag: false,
            }
            this.timeRecordArray.push(tempObj)
        })

        window.addEventListener('ajaxLoadEnd', _ => {
            /** @type {number} */
            let i = 0;
            for (i; i < this.timeRecordArray.length; i++) {
                // uploadFlag == true 代表这个请求已经被上传过了
                if (this.timeRecordArray[i].uploadFlag === true) continue

                if (this.timeRecordArray[i].event.detail.status > 0) {
                    let rType = (this.timeRecordArray[i].event.detail.responseType + "").toLowerCase()
                    if (rType === "blob") {
                        (function (index) {
                            let reader = new FileReader()
                            reader.onload = function () {
                                let responseText = reader.result //内容就在这里
                                this.handleHttpResult(index, responseText)
                            }
                            try {
                                reader.readAsText(this.timeRecordArray[i].event.detail.response, 'utf-8')
                            } catch (e) {
                                this.handleHttpResult(index, this.timeRecordArray[i].event.detail.response + "")
                            }
                        })(i)
                    } else {
                        let responseText = this.timeRecordArray[i].event.detail.responseText
                        this.handleHttpResult(i, responseText)
                    }
                }
            }
        })

        this.fetch()

    }



    /**
     * http 请求日志包装
     * @param {*} i 
     * @param {*} tempResponseText 
     */
    handleHttpResult(i, tempResponseText) {
        let timeRecordArray = (util.isBlank(this.timeRecordArray) && util.isType().isArray(this.timeRecordArray)) ? this.timeRecordArray : []
        if (!timeRecordArray[i] || timeRecordArray[i].uploadFlag === true) {
            return
        }
        let responseText = ""
        try {
            responseText = tempResponseText ? JSON.stringify(util.encryptObj(JSON.parse(tempResponseText))) : ""
        } catch (e) {
            responseText = ""
        }
        let simpleUrl = timeRecordArray[i].simpleUrl,
            currentTime = new Date().getTime(),
            url = timeRecordArray[i].event.detail.responseURL,
            status = timeRecordArray[i].event.detail.status,
            statusText = timeRecordArray[i].event.detail.statusText,
            loadTime = currentTime - timeRecordArray[i].timeStamp;
        // if (!url || url.indexOf(HTTP_UPLOAD_LOG_API) != -1) return
        // let httpLogInfoStart = new HttpLogInfo(HTTP_LOG, simpleUrl, url, status, statusText, "发起请求", "", timeRecordArray[i].timeStamp, 0)
        // httpLogInfoStart.handleLogInfo(HTTP_LOG, httpLogInfoStart);
        // let httpLogInfoEnd = new HttpLogInfo(HTTP_LOG, simpleUrl, url, status, statusText, "请求返回", responseText, currentTime, loadTime)
        // httpLogInfoEnd.handleLogInfo(HTTP_LOG, httpLogInfoEnd);
        // 当前请求成功后就，就将该对象的uploadFlag设置为true, 代表已经上传了
        timeRecordArray[i].uploadFlag = true
    }

    /**
     * 重写window.fetch方法，为了能检测到浏览器api报错
     * @return {?}
     */
    fetch() {
        /**
         * @param {*} name 
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
                next: function () {
                    var _eof = parent.shift();
                    return {
                        done: void 0 === _eof,
                        value: _eof
                    };
                }
            };
            return n && (iterable[Symbol.iterator] = function () {
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
                headers.forEach(function (value, s) {
                    this.append(s, value);
                }, this);
            } else {
                if (Array.isArray(headers)) {
                    headers.forEach(function (header) {
                        this.append(header[0], header[1]);
                    }, this);
                } else {
                    if (headers) {
                        Object.getOwnPropertyNames(headers).forEach(function (name) {
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
            return new Promise(function (fileCallback, callback) {
                /**
                 * @return {undefined}
                 */
                x.onload = function () {
                    fileCallback(x.result);
                };
                /**
                 * @return {undefined}
                 */
                x.onerror = function () {
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
            return this.bodyUsed = false, this._initBody = function (body) {
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
            }, blobSupport && (this.blob = function () {
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
            }, this.arrayBuffer = function () {
                return this._bodyArrayBuffer ? consumed(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(done);
            }), this.text = function () {
                var rejected = consumed(this);
                if (rejected) {
                    return rejected;
                }
                if (this._bodyBlob) {
                    return function (f) {
                        /** @type {!FileReader} */
                        var r = new FileReader;
                        var io = require(r);
                        return r.readAsText(f), io;
                    }(this._bodyBlob);
                }
                if (this._bodyArrayBuffer) {
                    return Promise.resolve(function (signature) {
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
            }, parentElement && (this.formData = function () {
                return this.text().then(text2formData);
            }), this.json = function () {
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
            if (this.credentials = options.credentials || this.credentials || "omit", !options.headers && this.headers || (this.headers = new Headers(options.headers)), this.method = function (shortMonthName) {
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
            return body.trim().split("&").forEach(function (clusterShardData) {
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
        var blobSupport = "FileReader" in self && "Blob" in self && function () {
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
            var isDataView = function (obj) {
                return obj && DataView.prototype.isPrototypeOf(obj);
            };
            /** @type {function(*): boolean} */
            var isArrayBufferView = ArrayBuffer.isView || function (id) {
                return id && -1 < orderedPaneIds.indexOf(Object.prototype.toString.call(id));
            };
        }
        /**
         * @param {string} name
         * @param {string} value
         * @return {undefined}
         */
        Headers.prototype.append = function (name, value) {
            name = normalizeName(name);
            value = normalizeValue(value);
            var oldValue = this.map[name];
            this.map[name] = oldValue ? oldValue + "," + value : value;
        };
        /**
         * @param {string} name
         * @return {undefined}
         */
        Headers.prototype.delete = function (name) {
            delete this.map[normalizeName(name)];
        };
        /**
         * @param {string} name
         * @return {?}
         */
        Headers.prototype.get = function (name) {
            return name = normalizeName(name), this.has(name) ? this.map[name] : null;
        };
        /**
         * @param {string} name
         * @return {?}
         */
        Headers.prototype.has = function (name) {
            return this.map.hasOwnProperty(normalizeName(name));
        };
        /**
         * @param {?} name
         * @param {string} value
         * @return {undefined}
         */
        Headers.prototype.set = function (name, value) {
            this.map[normalizeName(name)] = normalizeValue(value);
        };
        /**
         * @param {!Function} callback
         * @param {?} thisp
         * @return {undefined}
         */
        Headers.prototype.forEach = function (callback, thisp) {
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
        Headers.prototype.keys = function () {
            /** @type {!Array} */
            var params = [];
            return this.forEach(function (canCreateDiscussions, post_content_type) {
                params.push(post_content_type);
            }), fn(params);
        };
        /**
         * @return {?}
         */
        Headers.prototype.values = function () {
            /** @type {!Array} */
            var q = [];
            return this.forEach(function (innerSource) {
                q.push(innerSource);
            }), fn(q);
        };
        /**
         * @return {?}
         */
        Headers.prototype.entries = function () {
            /** @type {!Array} */
            var q = [];
            return this.forEach(function (y, tiles) {
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
        Request.prototype.clone = function () {
            return new Request(this, {
                body: this._bodyInit
            });
        };
        Body.call(Request.prototype);
        Body.call(Response.prototype);
        /**
         * @return {?}
         */
        Response.prototype.clone = function () {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            });
        };
        /**
         * @return {?}
         */
        Response.error = function () {
            var response = new Response(null, {
                status: 0,
                statusText: ""
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
        Response.redirect = function (state, i) {
            if (-1 === removeDataListeners.indexOf(i)) {
                throw new RangeError("Invalid status code");
            }
            return new Response(null, {
                status: i,
                headers: {
                    location: state
                }
            });
        };
        /** @type {function(!Object): undefined} */
        window.Headers = Headers;
        /** @type {function(!Object, !Object): undefined} */
        window.Request = Request;
        /** @type {function(string, !Object): undefined} */
        window.Response = Response;
        /**
         * @param {?} method
         * @param {boolean} url
         * @return {?}
         */
        window.fetch = function (method, url) {
            return fetchHttpUrl = method, new Promise(function (resolve, reject) {
                var request = new Request(method, url);
                /** @type {!XMLHttpRequest} */
                var xhr = new XMLHttpRequest;
                /**
                 * @return {undefined}
                 */
                xhr.onload = function () {
                    /** @type {string} */
                    var type = xhr.responseType;
                    /** @type {string} */
                    var response = "";
                    var options = {
                        status: xhr.status,
                        statusText: xhr.statusText,
                        headers: function (clusterShardData) {
                            var h2 = new Headers;
                            return clusterShardData.split(/\r?\n/).forEach(function (clusterShardData) {
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
                xhr.onerror = function () {
                    console.error("Network request failed");
                    reject(new TypeError("Network request failed"));
                };
                /**
                 * @return {undefined}
                 */
                xhr.ontimeout = function () {
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
                request.headers.forEach(function (type, i) {
                    xhr.setRequestHeader(i, type);
                });
                xhr.send(void 0 === request._bodyInit ? null : request._bodyInit);
            });
        };
        /** @type {boolean} */
        window.fetch.polyfill = true;
    }
}