if you want to view the source visit the plugins github repository (https://github.com/denolehov/obsidian-git)
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  return to;
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/.pnpm/base64-js@1.5.1/node_modules/base64-js/index.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    exports2.byteLength = byteLength;
    exports2.toByteArray = toByteArray;
    exports2.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num2) {
      return lookup[num2 >> 18 & 63] + lookup[num2 >> 12 & 63] + lookup[num2 >> 6 & 63] + lookup[num2 & 63];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i2 = start; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(
          lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
        );
      }
      return parts.join("");
    }
  }
});

// node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js"(exports2) {
    init_polyfill_buffer();
    exports2.read = function(buffer2, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer2[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer2[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer2[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    exports2.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer2[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer2[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer2[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports2.Buffer = Buffer2;
    exports2.SlowBuffer = SlowBuffer;
    exports2.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports2.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString2(value, encodingOrOffset);
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer2, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString2(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      return buf;
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy2 = new Uint8Array(arrayView);
        return fromArrayBuffer(copy2.buffer, copy2.byteOffset, copy2.byteLength);
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer2.prototype);
      return buf;
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      return length | 0;
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
      const buffer2 = Buffer2.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer2.length) {
            if (!Buffer2.isBuffer(buf))
              buf = Buffer2.from(buf);
            buf.copy(buffer2, pos);
            Uint8Array.prototype.set.call(
              buffer2,
              buf,
              pos
            );
        } else if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer2, pos);
        pos += buf.length;
      return buffer2;
    };
    function byteLength(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
    Buffer2.byteLength = byteLength;
    function slowToString(encoding, start, end) {
      let loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      if (start > this.length) {
        return "";
      if (end === void 0 || end > this.length) {
        end = this.length;
      if (end <= 0) {
        return "";
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    Buffer2.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      return this;
    Buffer2.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    Buffer2.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals2(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      let str = "";
      const max = exports2.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      if (start === void 0) {
        start = 0;
      if (end === void 0) {
        end = target ? target.length : 0;
      if (thisStart === void 0) {
        thisStart = 0;
      if (thisEnd === void 0) {
        thisEnd = this.length;
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      if (thisStart >= thisEnd) {
        return -1;
      if (start >= end) {
        return 1;
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      if (x < y)
        return -1;
      if (y < x)
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      return -1;
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      return decodeCodePointsArray(res);
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      return res;
    function asciiSlice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    function latin1Slice(buf, start, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      return ret;
    function hexSlice(buf, start, end) {
      const len = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    function utf16leSlice(buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      return res;
    Buffer2.prototype.slice = function slice(start, end) {
      const len = this.length;
      start = ~~start;
      end = end === void 0 ? len : ~~end;
      if (start < 0) {
        start += len;
        if (start < 0)
          start = 0;
      } else if (start > len) {
        start = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start)
        end = start;
      const newBuf = this.subarray(start, end);
      Object.setPrototypeOf(newBuf, Buffer2.prototype);
      return newBuf;
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first2 = this[offset];
      const last2 = this[offset + 7];
      if (first2 === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first2 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last2 * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first2 = this[offset];
      const last2 = this[offset + 7];
      if (first2 === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first2 * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last2;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first2 = this[offset];
      const last2 = this[offset + 7];
      if (first2 === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last2 << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first2 + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first2 = this[offset];
      const last2 = this[offset + 7];
      if (first2 === void 0 || last2 === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first2 << 24) + // Overflow
      this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last2);
    });
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
      return offset + byteLength2;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy2(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      const len = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      return len;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start; i < end; ++i) {
          this[i] = val;
      } else {
        const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
      }
      return this;
    };
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        get code() {
          return sym;
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
      };
    E(
      "ERR_BUFFER_OUT_OF_BOUNDS",
      function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        return "Attempt to access memory outside buffer bounds";
      RangeError
    );
    E(
      "ERR_INVALID_ARG_TYPE",
      function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      TypeError
    );
    E(
      "ERR_OUT_OF_RANGE",
      function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          received += "n";
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      RangeError
    );
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start = val[0] === "-" ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          range = `>= ${min}${n} and <= ${max}${n}`;
        throw new errors.ERR_OUT_OF_RANGE("value", range, value);
      checkBounds(buf, offset, byteLength2);
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(
        type || "offset",
        `>= ${type ? 1 : 0} and <= ${length}`,
        value
      );
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
      return bytes;
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      return i;
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    function numberIsNaN(obj) {
      return obj !== obj;
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
// polyfill_buffer.js
var import_obsidian, buffer, Buffer;
var init_polyfill_buffer = __esm({
  "polyfill_buffer.js"() {
    import_obsidian = require("obsidian");
    if (import_obsidian.Platform.isMobileApp) {
      buffer = require_buffer().Buffer;
    } else {
      buffer = global.Buffer;
    Buffer = buffer;
// node_modules/.pnpm/async-lock@1.4.0/node_modules/async-lock/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/async-lock@1.4.0/node_modules/async-lock/lib/index.js"(exports2, module2) {
    init_polyfill_buffer();
    var AsyncLock2 = function(opts) {
      opts = opts || {};
      this.Promise = opts.Promise || Promise;
      this.queues = /* @__PURE__ */ Object.create(null);
      this.domainReentrant = opts.domainReentrant || false;
      if (this.domainReentrant) {
        if (typeof process === "undefined" || typeof process.domain === "undefined") {
          throw new Error(
            "Domain-reentrant locks require `process.domain` to exist. Please flip `opts.domainReentrant = false`, use a NodeJS version that still implements Domain, or install a browser polyfill."
          );
        }
        this.domains = /* @__PURE__ */ Object.create(null);
      this.timeout = opts.timeout || AsyncLock2.DEFAULT_TIMEOUT;
      this.maxOccupationTime = opts.maxOccupationTime || AsyncLock2.DEFAULT_MAX_OCCUPATION_TIME;
      this.maxExecutionTime = opts.maxExecutionTime || AsyncLock2.DEFAULT_MAX_EXECUTION_TIME;
      if (opts.maxPending === Infinity || Number.isInteger(opts.maxPending) && opts.maxPending >= 0) {
        this.maxPending = opts.maxPending;
        this.maxPending = AsyncLock2.DEFAULT_MAX_PENDING;
    AsyncLock2.DEFAULT_TIMEOUT = 0;
    AsyncLock2.DEFAULT_MAX_OCCUPATION_TIME = 0;
    AsyncLock2.DEFAULT_MAX_EXECUTION_TIME = 0;
    AsyncLock2.DEFAULT_MAX_PENDING = 1e3;
    AsyncLock2.prototype.acquire = function(key2, fn, cb, opts) {
      if (Array.isArray(key2)) {
        return this._acquireBatch(key2, fn, cb, opts);
      }
      if (typeof fn !== "function") {
        throw new Error("You must pass a function to execute");
      }
      var deferredResolve = null;
      var deferredReject = null;
      var deferred2 = null;
      if (typeof cb !== "function") {
        opts = cb;
        cb = null;
        deferred2 = new this.Promise(function(resolve, reject) {
          deferredResolve = resolve;
          deferredReject = reject;
        });
      }
      opts = opts || {};
      var resolved = false;
      var timer = null;
      var occupationTimer = null;
      var executionTimer = null;
      var self2 = this;
      var done = function(locked, err, ret) {
        if (occupationTimer) {
          clearTimeout(occupationTimer);
          occupationTimer = null;
        }
        if (executionTimer) {
          clearTimeout(executionTimer);
          executionTimer = null;
        }
        if (locked) {
          if (!!self2.queues[key2] && self2.queues[key2].length === 0) {
            delete self2.queues[key2];
          if (self2.domainReentrant) {
            delete self2.domains[key2];
        if (!resolved) {
          if (!deferred2) {
            if (typeof cb === "function") {
              cb(err, ret);
            }
            if (err) {
              deferredReject(err);
            } else {
              deferredResolve(ret);
            }
          resolved = true;
        if (locked) {
          if (!!self2.queues[key2] && self2.queues[key2].length > 0) {
            self2.queues[key2].shift()();
      };
      var exec = function(locked) {
        if (resolved) {
          return done(locked);
        if (timer) {
          clearTimeout(timer);
          timer = null;
        if (self2.domainReentrant && locked) {
          self2.domains[key2] = process.domain;
        }
        var maxExecutionTime = opts.maxExecutionTime || self2.maxExecutionTime;
        if (maxExecutionTime) {
          executionTimer = setTimeout(function() {
            if (!!self2.queues[key2]) {
              done(locked, new Error("Maximum execution time is exceeded " + key2));
            }
          }, maxExecutionTime);
        }
        if (fn.length === 1) {
          var called = false;
          try {
            fn(function(err, ret) {
              if (!called) {
                called = true;
                done(locked, err, ret);
              }
            });
          } catch (err) {
            if (!called) {
              called = true;
              done(locked, err);
        } else {
          self2._promiseTry(function() {
            return fn();
          }).then(function(ret) {
            done(locked, void 0, ret);
          }, function(error) {
            done(locked, error);
          });
      };
      if (self2.domainReentrant && !!process.domain) {
        exec = process.domain.bind(exec);
      }
      if (!self2.queues[key2]) {
        self2.queues[key2] = [];
        exec(true);
      } else if (self2.domainReentrant && !!process.domain && process.domain === self2.domains[key2]) {
        exec(false);
      } else if (self2.queues[key2].length >= self2.maxPending) {
        done(false, new Error("Too many pending tasks in queue " + key2));
      } else {
        var taskFn = function() {
          exec(true);
        };
        if (opts.skipQueue) {
          self2.queues[key2].unshift(taskFn);
        } else {
          self2.queues[key2].push(taskFn);
        var timeout = opts.timeout || self2.timeout;
        if (timeout) {
          timer = setTimeout(function() {
            timer = null;
            done(false, new Error("async-lock timed out in queue " + key2));
          }, timeout);
      }
      var maxOccupationTime = opts.maxOccupationTime || self2.maxOccupationTime;
      if (maxOccupationTime) {
        occupationTimer = setTimeout(function() {
          if (!!self2.queues[key2]) {
            done(false, new Error("Maximum occupation time is exceeded in queue " + key2));
        }, maxOccupationTime);
      }
      if (deferred2) {
        return deferred2;
      }
    };
    AsyncLock2.prototype._acquireBatch = function(keys, fn, cb, opts) {
      if (typeof cb !== "function") {
        opts = cb;
        cb = null;
      }
      var self2 = this;
      var getFn = function(key2, fn2) {
        return function(cb2) {
          self2.acquire(key2, fn2, cb2, opts);
        };
      };
      var fnx = keys.reduceRight(function(prev, key2) {
        return getFn(key2, prev);
      }, fn);
      if (typeof cb === "function") {
        fnx(cb);
      } else {
        return new this.Promise(function(resolve, reject) {
          if (fnx.length === 1) {
            fnx(function(err, ret) {
              if (err) {
                reject(err);
              } else {
                resolve(ret);
              }
            });
          } else {
            resolve(fnx());
        });
    };
    AsyncLock2.prototype.isBusy = function(key2) {
      if (!key2) {
        return Object.keys(this.queues).length > 0;
      } else {
        return !!this.queues[key2];
    };
    AsyncLock2.prototype._promiseTry = function(fn) {
      try {
        return this.Promise.resolve(fn());
      } catch (e) {
        return this.Promise.reject(e);
      }
    };
    module2.exports = AsyncLock2;
// node_modules/.pnpm/async-lock@1.4.0/node_modules/async-lock/index.js
var require_async_lock = __commonJS({
  "node_modules/.pnpm/async-lock@1.4.0/node_modules/async-lock/index.js"(exports2, module2) {
    init_polyfill_buffer();
    module2.exports = require_lib();
// node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js"(exports2, module2) {
    init_polyfill_buffer();
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
          });
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
      };
// node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/.pnpm/safe-buffer@5.2.1/node_modules/safe-buffer/index.js"(exports2, module2) {
    init_polyfill_buffer();
    var buffer2 = require_buffer();
    var Buffer2 = buffer2.Buffer;
    function copyProps(src, dst) {
      for (var key2 in src) {
        dst[key2] = src[key2];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer2;
    } else {
      copyProps(buffer2, exports2);
      exports2.Buffer = SafeBuffer;
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    SafeBuffer.prototype = Object.create(Buffer2.prototype);
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
          buf.fill(fill);
      } else {
        buf.fill(0);
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      return buffer2.SlowBuffer(size);
    };
// node_modules/.pnpm/sha.js@2.4.11/node_modules/sha.js/hash.js
var require_hash = __commonJS({
  "node_modules/.pnpm/sha.js@2.4.11/node_modules/sha.js/hash.js"(exports2, module2) {
    init_polyfill_buffer();
    var Buffer2 = require_safe_buffer().Buffer;
    function Hash2(blockSize, finalSize) {
      this._block = Buffer2.alloc(blockSize);
      this._finalSize = finalSize;
      this._blockSize = blockSize;
      this._len = 0;
    }
    Hash2.prototype.update = function(data, enc) {
      if (typeof data === "string") {
        enc = enc || "utf8";
        data = Buffer2.from(data, enc);
      }
      var block = this._block;
      var blockSize = this._blockSize;
      var length = data.length;
      var accum = this._len;
      for (var offset = 0; offset < length; ) {
        var assigned = accum % blockSize;
        var remainder = Math.min(length - offset, blockSize - assigned);
        for (var i = 0; i < remainder; i++) {
          block[assigned + i] = data[offset + i];
        }
        accum += remainder;
        offset += remainder;
        if (accum % blockSize === 0) {
          this._update(block);
        }
      this._len += length;
      return this;
    };
    Hash2.prototype.digest = function(enc) {
      var rem = this._len % this._blockSize;
      this._block[rem] = 128;
      this._block.fill(0, rem + 1);
      if (rem >= this._finalSize) {
        this._update(this._block);
        this._block.fill(0);
      }
      var bits = this._len * 8;
      if (bits <= 4294967295) {
        this._block.writeUInt32BE(bits, this._blockSize - 4);
      } else {
        var lowBits = (bits & 4294967295) >>> 0;
        var highBits = (bits - lowBits) / 4294967296;
        this._block.writeUInt32BE(highBits, this._blockSize - 8);
        this._block.writeUInt32BE(lowBits, this._blockSize - 4);
      }
      this._update(this._block);
      var hash2 = this._hash();
      return enc ? hash2.toString(enc) : hash2;
    };
    Hash2.prototype._update = function() {
      throw new Error("_update must be implemented by subclass");
    };
    module2.exports = Hash2;
  }
});

// node_modules/.pnpm/sha.js@2.4.11/node_modules/sha.js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/.pnpm/sha.js@2.4.11/node_modules/sha.js/sha1.js"(exports2, module2) {
    init_polyfill_buffer();
    var inherits = require_inherits_browser();
    var Hash2 = require_hash();
    var Buffer2 = require_safe_buffer().Buffer;
    var K2 = [
      1518500249,
      1859775393,
      2400959708 | 0,
      3395469782 | 0
    ];
    var W = new Array(80);
    function Sha1() {
      this.init();
      this._w = W;
      Hash2.call(this, 64, 56);
    }
    inherits(Sha1, Hash2);
    Sha1.prototype.init = function() {
      this._a = 1732584193;
      this._b = 4023233417;
      this._c = 2562383102;
      this._d = 271733878;
      this._e = 3285377520;
      return this;
    };
    function rotl1(num2) {
      return num2 << 1 | num2 >>> 31;
    }
    function rotl5(num2) {
      return num2 << 5 | num2 >>> 27;
    }
    function rotl30(num2) {
      return num2 << 30 | num2 >>> 2;
    }
    function ft(s, b, c, d) {
      if (s === 0)
        return b & c | ~b & d;
      if (s === 2)
        return b & c | b & d | c & d;
      return b ^ c ^ d;
    }
    Sha1.prototype._update = function(M) {
      var W2 = this._w;
      var a = this._a | 0;
      var b = this._b | 0;
      var c = this._c | 0;
      var d = this._d | 0;
      var e = this._e | 0;
      for (var i = 0; i < 16; ++i)
        W2[i] = M.readInt32BE(i * 4);
      for (; i < 80; ++i)
        W2[i] = rotl1(W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16]);
      for (var j = 0; j < 80; ++j) {
        var s = ~~(j / 20);
        var t = rotl5(a) + ft(s, b, c, d) + e + W2[j] + K2[s] | 0;
        e = d;
        d = c;
        c = rotl30(b);
        b = a;
        a = t;
      }
      this._a = a + this._a | 0;
      this._b = b + this._b | 0;
      this._c = c + this._c | 0;
      this._d = d + this._d | 0;
      this._e = e + this._e | 0;
    };
    Sha1.prototype._hash = function() {
      var H = Buffer2.allocUnsafe(20);
      H.writeInt32BE(this._a | 0, 0);
      H.writeInt32BE(this._b | 0, 4);
      H.writeInt32BE(this._c | 0, 8);
      H.writeInt32BE(this._d | 0, 12);
      H.writeInt32BE(this._e | 0, 16);
      return H;
    };
    module2.exports = Sha1;
  }
});

// node_modules/.pnpm/crc-32@1.2.2/node_modules/crc-32/crc32.js
var require_crc32 = __commonJS({
  "node_modules/.pnpm/crc-32@1.2.2/node_modules/crc-32/crc32.js"(exports2) {
    init_polyfill_buffer();
    var CRC32;
    (function(factory) {
      if (typeof DO_NOT_EXPORT_CRC === "undefined") {
        if ("object" === typeof exports2) {
          factory(exports2);
        } else if ("function" === typeof define && define.amd) {
          define(function() {
            var module3 = {};
            factory(module3);
            return module3;
          });
        } else {
          factory(CRC32 = {});
        }
      } else {
        factory(CRC32 = {});
      }
    })(function(CRC322) {
      CRC322.version = "1.2.2";
      function signed_crc_table() {
        var c = 0, table = new Array(256);
        for (var n = 0; n != 256; ++n) {
          c = n;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          c = c & 1 ? -306674912 ^ c >>> 1 : c >>> 1;
          table[n] = c;
        }
        return typeof Int32Array !== "undefined" ? new Int32Array(table) : table;
      }
      var T0 = signed_crc_table();
      function slice_by_16_tables(T) {
        var c = 0, v = 0, n = 0, table = typeof Int32Array !== "undefined" ? new Int32Array(4096) : new Array(4096);
        for (n = 0; n != 256; ++n)
          table[n] = T[n];
        for (n = 0; n != 256; ++n) {
          v = T[n];
          for (c = 256 + n; c < 4096; c += 256)
            v = table[c] = v >>> 8 ^ T[v & 255];
        }
        var out = [];
        for (n = 1; n != 16; ++n)
          out[n - 1] = typeof Int32Array !== "undefined" ? table.subarray(n * 256, n * 256 + 256) : table.slice(n * 256, n * 256 + 256);
        return out;
      }
      var TT = slice_by_16_tables(T0);
      var T1 = TT[0], T2 = TT[1], T3 = TT[2], T4 = TT[3], T5 = TT[4];
      var T6 = TT[5], T7 = TT[6], T8 = TT[7], T9 = TT[8], Ta = TT[9];
      var Tb = TT[10], Tc = TT[11], Td = TT[12], Te = TT[13], Tf = TT[14];
      function crc32_bstr(bstr, seed) {
        var C = seed ^ -1;
        for (var i = 0, L = bstr.length; i < L; )
          C = C >>> 8 ^ T0[(C ^ bstr.charCodeAt(i++)) & 255];
        return ~C;
      }
      function crc32_buf(B, seed) {
        var C = seed ^ -1, L = B.length - 15, i = 0;
        for (; i < L; )
          C = Tf[B[i++] ^ C & 255] ^ Te[B[i++] ^ C >> 8 & 255] ^ Td[B[i++] ^ C >> 16 & 255] ^ Tc[B[i++] ^ C >>> 24] ^ Tb[B[i++]] ^ Ta[B[i++]] ^ T9[B[i++]] ^ T8[B[i++]] ^ T7[B[i++]] ^ T6[B[i++]] ^ T5[B[i++]] ^ T4[B[i++]] ^ T3[B[i++]] ^ T2[B[i++]] ^ T1[B[i++]] ^ T0[B[i++]];
        L += 15;
        while (i < L)
          C = C >>> 8 ^ T0[(C ^ B[i++]) & 255];
        return ~C;
      }
      function crc32_str(str, seed) {
        var C = seed ^ -1;
        for (var i = 0, L = str.length, c = 0, d = 0; i < L; ) {
          c = str.charCodeAt(i++);
          if (c < 128) {
            C = C >>> 8 ^ T0[(C ^ c) & 255];
          } else if (c < 2048) {
            C = C >>> 8 ^ T0[(C ^ (192 | c >> 6 & 31)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
          } else if (c >= 55296 && c < 57344) {
            c = (c & 1023) + 64;
            d = str.charCodeAt(i++) & 1023;
            C = C >>> 8 ^ T0[(C ^ (240 | c >> 8 & 7)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c >> 2 & 63)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | d >> 6 & 15 | (c & 3) << 4)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | d & 63)) & 255];
          } else {
            C = C >>> 8 ^ T0[(C ^ (224 | c >> 12 & 15)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c >> 6 & 63)) & 255];
            C = C >>> 8 ^ T0[(C ^ (128 | c & 63)) & 255];
          }
        return ~C;
      CRC322.table = T0;
      CRC322.bstr = crc32_bstr;
      CRC322.buf = crc32_buf;
      CRC322.str = crc32_str;
    });
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/common.js"(exports2) {
    init_polyfill_buffer();
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key2) {
      return Object.prototype.hasOwnProperty.call(obj, key2);
    }
    exports2.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      return obj;
    };
    exports2.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports2.setTyped = function(on) {
      if (on) {
        exports2.Buf8 = Uint8Array;
        exports2.Buf16 = Uint16Array;
        exports2.Buf32 = Int32Array;
        exports2.assign(exports2, fnTyped);
        exports2.Buf8 = Array;
        exports2.Buf16 = Array;
        exports2.Buf32 = Array;
        exports2.assign(exports2, fnUntyped);
    };
    exports2.setTyped(TYPED_OK);
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/trees.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    var utils = require_common();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    );
    var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    function put_short(s, w) {
      s.pending_buf[s.pending++] = w & 255;
      s.pending_buf[s.pending++] = w >>> 8 & 255;
    }
    function send_bits(s, value, length) {
      if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
      }
    }
    function send_code(s, c, tree) {
      send_bits(
        s,
        tree[c * 2],
        tree[c * 2 + 1]
        /*.Len*/
      );
    }
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    function bi_flush(s) {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }
    function gen_bitlen(s, desc) {
      var tree = desc.dyn_tree;
      var max_code = desc.max_code;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var extra = desc.stat_desc.extra_bits;
      var base = desc.stat_desc.extra_base;
      var max_length = desc.stat_desc.max_length;
      var h;
      var n, m;
      var bits;
      var xbits;
      var f;
      var overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
          xbits = extra[n - base];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
    function gen_codes(tree, max_code, bl_count) {
      var next_code = new Array(MAX_BITS + 1);
      var code = 0;
      var bits;
      var n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = code + bl_count[bits - 1] << 1;
      for (n = 0; n <= max_code; n++) {
        var len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    }
    function tr_static_init() {
      var n;
      var bits;
      var length;
      var code;
      var dist;
      var bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < 1 << extra_lbits[code]; n++) {
          _length_code[length++] = code;
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < 1 << extra_dbits[code]; n++) {
          _dist_code[dist++] = code;
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
          _dist_code[256 + dist++] = code;
        }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }
    function init_block(s) {
      var n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.last_lit = s.matches = 0;
    }
    function bi_windup(s) {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }
    function copy_block(s, buf, len, header) {
      bi_windup(s);
      if (header) {
        put_short(s, len);
        put_short(s, ~len);
      }
      utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
      s.pending += len;
    }
    function smaller(tree, n, m, depth) {
      var _n2 = n * 2;
      var _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
    }
    function pqdownheap(s, tree, k) {
      var v = s.heap[k];
      var j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    }
    function compress_block(s, ltree, dtree) {
      var dist;
      var lc;
      var lx = 0;
      var code;
      var extra;
      if (s.last_lit !== 0) {
        do {
          dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
          lc = s.pending_buf[s.l_buf + lx];
          lx++;
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (lx < s.last_lit);
      }
      send_code(s, END_BLOCK, ltree);
    }
    function build_tree(s, desc) {
      var tree = desc.dyn_tree;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems = desc.stat_desc.elems;
      var n, m;
      var max_code = -1;
      var node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      desc.max_code = max_code;
      for (n = s.heap_len >> 1; n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[
          1
          /*SMALLEST*/
        ] = s.heap[s.heap_len--];
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
        m = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[
          1
          /*SMALLEST*/
        ] = node++;
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[
        1
        /*SMALLEST*/
      ];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    }
    function scan_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          s.bl_tree[curlen * 2] += count;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
          max_count = 7;
          min_count = 4;
    function send_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count--;
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count - 3, 2);
        } else if (count <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count - 11, 7);
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
          max_count = 7;
          min_count = 4;
    }
    function build_bl_tree(s) {
      var max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }
    function send_all_trees(s, lcodes, dcodes, blcodes) {
      var rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    }
    function detect_data_type(s) {
      var black_mask = 4093624447;
      var n;
      for (n = 0; n <= 31; n++, black_mask >>>= 1) {
        if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
          return Z_BINARY;
        }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
      return Z_BINARY;
    }
    var static_init_done = false;
    function _tr_init(s) {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    }
    function _tr_stored_block(s, buf, stored_len, last2) {
      send_bits(s, (STORED_BLOCK << 1) + (last2 ? 1 : 0), 3);
      copy_block(s, buf, stored_len, true);
    }
    function _tr_align(s) {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }
    function _tr_flush_block(s, buf, stored_len, last2) {
      var opt_lenb, static_lenb;
      var max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s, buf, stored_len, last2);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last2 ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last2 ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last2) {
        bi_windup(s);
      }
    }
    function _tr_tally(s, dist, lc) {
      s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
      s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
      s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
      s.last_lit++;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return s.last_lit === s.lit_bufsize - 1;
    exports2._tr_init = _tr_init;
    exports2._tr_stored_block = _tr_stored_block;
    exports2._tr_flush_block = _tr_flush_block;
    exports2._tr_tally = _tr_tally;
    exports2._tr_align = _tr_align;
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/adler32.js"(exports2, module2) {
    init_polyfill_buffer();
    function adler32(adler, buf, len, pos) {
      var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
      while (len !== 0) {
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    }
    module2.exports = adler32;
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/crc32.js"(exports2, module2) {
    init_polyfill_buffer();
    function makeTable() {
      var c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        table[n] = c;
      return table;
    var crcTable = makeTable();
    function crc322(crc, buf, len, pos) {
      var t = crcTable, end = pos + len;
      crc ^= -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    module2.exports = crc322;
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/messages.js"(exports2, module2) {
    init_polyfill_buffer();
    module2.exports = {
      2: "need dictionary",
      /* Z_NEED_DICT       2  */
      1: "stream end",
      /* Z_STREAM_END      1  */
      0: "",
      /* Z_OK              0  */
      "-1": "file error",
      /* Z_ERRNO         (-1) */
      "-2": "stream error",
      /* Z_STREAM_ERROR  (-2) */
      "-3": "data error",
      /* Z_DATA_ERROR    (-3) */
      "-4": "insufficient memory",
      /* Z_MEM_ERROR     (-4) */
      "-5": "buffer error",
      /* Z_BUF_ERROR     (-5) */
      "-6": "incompatible version"
      /* Z_VERSION_ERROR (-6) */
    };
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/deflate.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    var utils = require_common();
    var trees = require_trees();
    var adler32 = require_adler32();
    var crc322 = require_crc322();
    var msg = require_messages();
    var Z_NO_FLUSH = 0;
    var Z_PARTIAL_FLUSH = 1;
    var Z_FULL_FLUSH = 3;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_BUF_ERROR = -5;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_FILTERED = 1;
    var Z_HUFFMAN_ONLY = 2;
    var Z_RLE = 3;
    var Z_FIXED = 4;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_UNKNOWN = 2;
    var Z_DEFLATED = 8;
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    function rank(f) {
      return (f << 1) - (f > 4 ? 9 : 0);
    }
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    function flush_pending(strm) {
      var s = strm.state;
      var len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
    }
    function flush_block_only(s, last2) {
      trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last2);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }
    function put_byte(s, b) {
      s.pending_buf[s.pending++] = b;
    }
    function putShortMSB(s, b) {
      s.pending_buf[s.pending++] = b >>> 8 & 255;
      s.pending_buf[s.pending++] = b & 255;
    }
    function read_buf(strm, buf, start, size) {
      var len = strm.avail_in;
      if (len > size) {
        len = size;
      if (len === 0) {
        return 0;
      strm.avail_in -= len;
      utils.arraySet(buf, strm.input, strm.next_in, len, start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc322(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }
    function longest_match(s, cur_match) {
      var chain_length = s.max_chain_length;
      var scan = s.strstart;
      var match;
      var len;
      var best_len = s.prev_length;
      var nice_match = s.nice_match;
      var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      var _win = s.window;
      var wmask = s.w_mask;
      var prev = s.prev;
      var strend = s.strstart + MAX_MATCH;
      var scan_end1 = _win[scan + best_len - 1];
      var scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }
    function fill_window(s) {
      var _w_size = s.w_size;
      var p, n, m, more, str;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          n = s.hash_size;
          p = n;
          do {
            m = s.head[--p];
            s.head[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          n = _w_size;
          p = n;
          do {
            m = s.prev[--p];
            s.prev[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str = s.strstart - s.insert;
          s.ins_h = s.window[str];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
          while (s.insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    }
    function deflate_stored(s, flush2) {
      var max_block_size = 65535;
      if (max_block_size > s.pending_buf_size - 5) {
        max_block_size = s.pending_buf_size - 5;
      }
      for (; ; ) {
        if (s.lookahead <= 1) {
          fill_window(s);
          if (s.lookahead === 0 && flush2 === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.strstart += s.lookahead;
        s.lookahead = 0;
        var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
          s.lookahead = s.strstart - max_start;
          s.strstart = max_start;
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      s.insert = 0;
      if (flush2 === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      if (s.strstart > s.block_start) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      return BS_NEED_MORE;
    }
    function deflate_fast(s, flush2) {
      var hash_head;
      var bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush2 === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
          }
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush2 === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      return BS_BLOCK_DONE;
    }
    function deflate_slow(s, flush2) {
      var hash_head;
      var bflush;
      var max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush2 === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush2 === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      return BS_BLOCK_DONE;
    }
    function deflate_rle(s, flush2) {
      var bflush;
      var prev;
      var scan, strend;
      var _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush2 === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      s.insert = 0;
      if (flush2 === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      return BS_BLOCK_DONE;
    }
    function deflate_huff(s, flush2) {
      var bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush2 === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      s.insert = 0;
      if (flush2 === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    var configuration_table;
    configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
    ];
    function lm_init(s) {
      s.window_size = 2 * s.w_size;
      zero(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
      this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new utils.Buf16(MAX_BITS + 1);
      this.heap = new utils.Buf16(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new utils.Buf16(2 * L_CODES + 1);
      zero(this.depth);
      this.l_buf = 0;
      this.lit_bufsize = 0;
      this.last_lit = 0;
      this.d_buf = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    function deflateResetKeep(strm) {
      var s;
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = s.wrap ? INIT_STATE : BUSY_STATE;
      strm.adler = s.wrap === 2 ? 0 : 1;
      s.last_flush = Z_NO_FLUSH;
      trees._tr_init(s);
      return Z_OK;
    }
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }
    function deflateInit2(strm, level, method2, windowBits, memLevel, strategy) {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      var wrap = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method2 !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      var s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.wrap = wrap;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new utils.Buf8(s.w_size * 2);
      s.head = new utils.Buf16(s.hash_size);
      s.prev = new utils.Buf16(s.w_size);
      s.lit_bufsize = 1 << memLevel + 6;
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new utils.Buf8(s.pending_buf_size);
      s.d_buf = 1 * s.lit_bufsize;
      s.l_buf = (1 + 2) * s.lit_bufsize;
      s.level = level;
      s.strategy = strategy;
      s.method = method2;
      return deflateReset(strm);
    }
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    function deflate2(strm, flush2) {
      var old_flush, s;
      var beg, val;
      if (!strm || !strm.state || flush2 > Z_BLOCK || flush2 < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      s = strm.state;
      if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush2 !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      s.strm = strm;
      old_flush = s.last_flush;
      s.last_flush = flush2;
      if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
          strm.adler = 0;
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
          } else {
            put_byte(
              s,
              (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
            );
            put_byte(s, s.gzhead.time & 255);
            put_byte(s, s.gzhead.time >> 8 & 255);
            put_byte(s, s.gzhead.time >> 16 & 255);
            put_byte(s, s.gzhead.time >> 24 & 255);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 255);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 255);
              put_byte(s, s.gzhead.extra.length >> 8 & 255);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc322(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        } else {
          var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= level_flags << 6;
          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - header % 31;
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 65535);
          }
          strm.adler = 1;
        }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          beg = s.pending;
          while (s.gzindex < (s.gzhead.extra.length & 65535)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                break;
              }
            }
            put_byte(s, s.gzhead.extra[s.gzindex] & 255);
            s.gzindex++;
          }
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
          s.status = NAME_STATE;
        }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
          s.status = COMMENT_STATE;
        }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc322(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
          s.status = HCRC_STATE;
        }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
          if (s.pending + 2 <= s.pending_buf_size) {
            put_byte(s, strm.adler & 255);
            put_byte(s, strm.adler >> 8 & 255);
            strm.adler = 0;
            s.status = BUSY_STATE;
          }
        } else {
          s.status = BUSY_STATE;
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
      } else if (strm.avail_in === 0 && rank(flush2) <= rank(old_flush) && flush2 !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || flush2 !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush2) : s.strategy === Z_RLE ? deflate_rle(s, flush2) : configuration_table[s.level].func(s, flush2);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush2 === Z_PARTIAL_FLUSH) {
            trees._tr_align(s);
          } else if (flush2 !== Z_BLOCK) {
            trees._tr_stored_block(s, 0, 0, false);
            if (flush2 === Z_FULL_FLUSH) {
              zero(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush2 !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    function deflateEnd(strm) {
      var status2;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      status2 = strm.state.status;
      if (status2 !== INIT_STATE && status2 !== EXTRA_STATE && status2 !== NAME_STATE && status2 !== COMMENT_STATE && status2 !== HCRC_STATE && status2 !== BUSY_STATE && status2 !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.state = null;
      return status2 === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    function deflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var s;
      var str, n;
      var wrap;
      var avail;
      var next;
      var input;
      var tmpDict;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      s = strm.state;
      wrap = s.wrap;
      if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s.wrap = 0;
      if (dictLength >= s.w_size) {
        if (wrap === 0) {
          zero(s.head);
          s.strstart = 0;
          s.block_start = 0;
          s.insert = 0;
        }
        tmpDict = new utils.Buf8(s.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
      }
      avail = strm.avail_in;
      next = strm.next_in;
      input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s);
      while (s.lookahead >= MIN_MATCH) {
        str = s.strstart;
        n = s.lookahead - (MIN_MATCH - 1);
        do {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str;
          str++;
        } while (--n);
        s.strstart = str;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
      }
      s.strstart += s.lookahead;
      s.block_start = s.strstart;
      s.insert = s.lookahead;
      s.lookahead = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s.wrap = wrap;
      return Z_OK;
    }
    exports2.deflateInit = deflateInit;
    exports2.deflateInit2 = deflateInit2;
    exports2.deflateReset = deflateReset;
    exports2.deflateResetKeep = deflateResetKeep;
    exports2.deflateSetHeader = deflateSetHeader;
    exports2.deflate = deflate2;
    exports2.deflateEnd = deflateEnd;
    exports2.deflateSetDictionary = deflateSetDictionary;
    exports2.deflateInfo = "pako deflate (from Nodeca project)";
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/utils/strings.js"(exports2) {
    init_polyfill_buffer();
    var utils = require_common();
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (__) {
      STR_APPLY_OK = false;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new utils.Buf8(256);
    for (q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    var q;
    _utf8len[254] = _utf8len[254] = 1;
    exports2.string2buf = function(str) {
      var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new utils.Buf8(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
        if (c < 128) {
          buf[i++] = c;
        } else if (c < 2048) {
          buf[i++] = 192 | c >>> 6;
          buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i++] = 224 | c >>> 12;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        } else {
          buf[i++] = 240 | c >>> 18;
          buf[i++] = 128 | c >>> 12 & 63;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        }
      return buf;
    };
    function buf2binstring(buf, len) {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
      }
      var result = "";
      for (var i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    exports2.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    exports2.binstring2buf = function(str) {
      var buf = new utils.Buf8(str.length);
      for (var i = 0, len = buf.length; i < len; i++) {
        buf[i] = str.charCodeAt(i);
      }
      return buf;
    };
    exports2.buf2string = function(buf, max) {
      var i, out, c, c_len;
      var len = max || buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        c = buf[i++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i < len) {
          c = c << 6 | buf[i++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    exports2.utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/zstream.js"(exports2, module2) {
    init_polyfill_buffer();
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    module2.exports = ZStream;
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/deflate.js"(exports2) {
    init_polyfill_buffer();
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var Z_NO_FLUSH = 0;
    var Z_FINISH = 4;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_SYNC_FLUSH = 2;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_DEFLATED = 8;
    function Deflate(options) {
      if (!(this instanceof Deflate))
        return new Deflate(options);
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status2 = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status2 !== Z_OK) {
        throw new Error(msg[status2]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        var dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status2 = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status2 !== Z_OK) {
          throw new Error(msg[status2]);
        }
        this._dict_set = true;
      }
    }
    Deflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status2, _mode;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status2 = zlib_deflate.deflate(strm, _mode);
        if (status2 !== Z_STREAM_END && status2 !== Z_OK) {
          this.onEnd(status2);
          this.ended = true;
          return false;
        }
        if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status2 !== Z_STREAM_END);
      if (_mode === Z_FINISH) {
        status2 = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status2);
        this.ended = true;
        return status2 === Z_OK;
      }
      if (_mode === Z_SYNC_FLUSH) {
        this.onEnd(Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Deflate.prototype.onEnd = function(status2) {
      if (status2 === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status2;
      this.msg = this.strm.msg;
    };
    function deflate2(input, options) {
      var deflator = new Deflate(options);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    function deflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return deflate2(input, options);
    }
    function gzip(input, options) {
      options = options || {};
      options.gzip = true;
      return deflate2(input, options);
    }
    exports2.Deflate = Deflate;
    exports2.deflate = deflate2;
    exports2.deflateRaw = deflateRaw;
    exports2.gzip = gzip;
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inffast.js"(exports2, module2) {
    init_polyfill_buffer();
    var BAD = 30;
    var TYPE = 12;
    module2.exports = function inflate_fast(strm, start) {
      var state;
      var _in;
      var last2;
      var _out;
      var beg;
      var end;
      var dmax;
      var wsize;
      var whave;
      var wnext;
      var s_window;
      var hold;
      var bits;
      var lcode;
      var dcode;
      var lmask;
      var dmask;
      var here;
      var op;
      var len;
      var dist;
      var from;
      var from_source;
      var input, output;
      state = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last2 = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state.dmax;
      wsize = state.wsize;
      whave = state.whave;
      wnext = state.wnext;
      s_window = state.window;
      hold = state.hold;
      bits = state.bits;
      lcode = state.lencode;
      dcode = state.distcode;
      lmask = (1 << state.lenbits) - 1;
      dmask = (1 << state.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state.sane) {
                            strm.msg = "invalid distance too far back";
                            state.mode = BAD;
                            break top;
                          }
                        }
                        from = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from++];
                          if (len > 1) {
                            output[_out++] = from_source[from++];
                          }
                        }
                      } else {
                        from = _out - dist;
                        do {
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from++];
                          if (len > 1) {
                            output[_out++] = output[from++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break top;
              }
              break;
        } while (_in < last2 && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last2 ? 5 + (last2 - _in) : 5 - (_in - last2);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state.hold = hold;
      state.bits = bits;
      return;
    };
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inftrees.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var utils = require_common();
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = [
      /* Length codes 257..285 base */
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ];
    var lext = [
      /* Length codes 257..285 extra */
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ];
    var dbase = [
      /* Distance codes 0..29 base */
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ];
    var dext = [
      /* Distance codes 0..29 extra */
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
    module2.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
      var bits = opts.bits;
      var len = 0;
      var sym = 0;
      var min = 0, max = 0;
      var root2 = 0;
      var curr = 0;
      var drop = 0;
      var left = 0;
      var used = 0;
      var huff = 0;
      var incr;
      var fill;
      var low;
      var mask;
      var next;
      var base = null;
      var base_index = 0;
      var end;
      var count = new utils.Buf16(MAXBITS + 1);
      var offs = new utils.Buf16(MAXBITS + 1);
      var extra = null;
      var extra_index = 0;
      var here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes; sym++) {
        count[lens[lens_index + sym]]++;
      }
      root2 = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) {
          break;
      }
      if (root2 > max) {
        root2 = max;
      }
      if (max === 0) {
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) {
          break;
      }
      if (root2 < min) {
        root2 = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
      for (sym = 0; sym < codes; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
      if (type === CODES) {
        base = extra = work;
        end = 19;
      } else if (type === LENS) {
        base = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
      } else {
        base = dbase;
        extra = dext;
        end = -1;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root2;
      drop = 0;
      low = -1;
      used = 1 << root2;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base[base_index + work[sym]];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count[len] === 0) {
          if (len === max) {
            break;
          len = lens[lens_index + work[sym]];
        if (len > root2 && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root2;
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) {
              break;
            curr++;
            left <<= 1;
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          low = huff & mask;
          table[low] = root2 << 24 | curr << 16 | next - table_index | 0;
      if (huff !== 0) {
        table[next + huff] = len - drop << 24 | 64 << 16 | 0;
      opts.bits = root2;
      return 0;
    };
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/inflate.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    var utils = require_common();
    var adler32 = require_adler32();
    var crc322 = require_crc322();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_TREES = 6;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_NEED_DICT = 2;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_MEM_ERROR = -4;
    var Z_BUF_ERROR = -5;
    var Z_DEFLATED = 8;
    var HEAD = 1;
    var FLAGS = 2;
    var TIME = 3;
    var OS = 4;
    var EXLEN = 5;
    var EXTRA2 = 6;
    var NAME = 7;
    var COMMENT = 8;
    var HCRC = 9;
    var DICTID = 10;
    var DICT = 11;
    var TYPE = 12;
    var TYPEDO = 13;
    var STORED = 14;
    var COPY_ = 15;
    var COPY = 16;
    var TABLE = 17;
    var LENLENS = 18;
    var CODELENS = 19;
    var LEN_ = 20;
    var LEN = 21;
    var LENEXT = 22;
    var DIST = 23;
    var DISTEXT = 24;
    var MATCH = 25;
    var LIT = 26;
    var CHECK = 27;
    var LENGTH = 28;
    var DONE = 29;
    var BAD = 30;
    var MEM = 31;
    var SYNC = 32;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    function zswap32(q) {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    }
    function InflateState() {
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new utils.Buf16(320);
      this.work = new utils.Buf16(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    function inflateResetKeep(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      strm.total_in = strm.total_out = state.total = 0;
      strm.msg = "";
      if (state.wrap) {
        strm.adler = state.wrap & 1;
      }
      state.mode = HEAD;
      state.last = 0;
      state.havedict = 0;
      state.dmax = 32768;
      state.head = null;
      state.hold = 0;
      state.bits = 0;
      state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
      state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
      state.sane = 1;
      state.back = -1;
      return Z_OK;
    }
    function inflateReset(strm) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      state.wsize = 0;
      state.whave = 0;
      state.wnext = 0;
      return inflateResetKeep(strm);
    }
    function inflateReset2(strm, windowBits) {
      var wrap;
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (windowBits < 0) {
        wrap = 0;
        windowBits = -windowBits;
      } else {
        wrap = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      if (state.window !== null && state.wbits !== windowBits) {
        state.window = null;
      }
      state.wrap = wrap;
      state.wbits = windowBits;
      return inflateReset(strm);
    }
    function inflateInit2(strm, windowBits) {
      var ret;
      var state;
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      state = new InflateState();
      strm.state = state;
      state.window = null;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    var virgin = true;
    var lenfix;
    var distfix;
    function fixedtables(state) {
      if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        sym = 0;
        while (sym < 144) {
          state.lens[sym++] = 8;
        while (sym < 256) {
          state.lens[sym++] = 9;
        while (sym < 280) {
          state.lens[sym++] = 7;
        while (sym < 288) {
          state.lens[sym++] = 8;
        inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state.lens[sym++] = 5;
        inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
        virgin = false;
      }
      state.lencode = lenfix;
      state.lenbits = 9;
      state.distcode = distfix;
      state.distbits = 5;
    }
    function updatewindow(strm, src, end, copy2) {
      var dist;
      var state = strm.state;
      if (state.window === null) {
        state.wsize = 1 << state.wbits;
        state.wnext = 0;
        state.whave = 0;
        state.window = new utils.Buf8(state.wsize);
      }
      if (copy2 >= state.wsize) {
        utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
        state.wnext = 0;
        state.whave = state.wsize;
      } else {
        dist = state.wsize - state.wnext;
        if (dist > copy2) {
          dist = copy2;
        }
        utils.arraySet(state.window, src, end - copy2, dist, state.wnext);
        copy2 -= dist;
        if (copy2) {
          utils.arraySet(state.window, src, end - copy2, copy2, 0);
          state.wnext = copy2;
          state.whave = state.wsize;
        } else {
          state.wnext += dist;
          if (state.wnext === state.wsize) {
            state.wnext = 0;
          if (state.whave < state.wsize) {
            state.whave += dist;
        }
      }
      return 0;
    }
    function inflate2(strm, flush2) {
      var state;
      var input, output;
      var next;
      var put;
      var have, left;
      var hold;
      var bits;
      var _in, _out;
      var copy2;
      var from;
      var from_source;
      var here = 0;
      var here_bits, here_op, here_val;
      var last_bits, last_op, last_val;
      var len;
      var ret;
      var hbuf = new utils.Buf8(4);
      var opts;
      var n;
      var order = (
        /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      );
      if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.mode === TYPE) {
        state.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state.hold;
      bits = state.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              if (state.wrap & 2 && hold === 35615) {
                state.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc322(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state.mode = FLAGS;
                break;
              }
              state.flags = 0;
              if (state.head) {
                state.head.done = false;
              }
              if (!(state.wrap & 1) || /* check if zlib header allowed */
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = "invalid window size";
                state.mode = BAD;
                break;
              }
              state.dmax = 1 << len;
              strm.adler = state.check = 1;
              state.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state.flags = hold;
              if ((state.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state.mode = BAD;
                break;
              }
              if (state.flags & 57344) {
                strm.msg = "unknown header flags set";
                state.mode = BAD;
                break;
              }
              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc322(state.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = TIME;
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.time = hold;
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state.check = crc322(state.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state.mode = OS;
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state.head) {
                state.head.xflags = hold & 255;
                state.head.os = hold >> 8;
              if (state.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state.check = crc322(state.check, hbuf, 2, 0);
              hold = 0;
              bits = 0;
              state.mode = EXLEN;
            case EXLEN:
              if (state.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length = hold;
                if (state.head) {
                  state.head.extra_len = hold;
                }
                if (state.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state.check = crc322(state.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
              } else if (state.head) {
                state.head.extra = null;
              state.mode = EXTRA2;
            case EXTRA2:
              if (state.flags & 1024) {
                copy2 = state.length;
                if (copy2 > have) {
                  copy2 = have;
                }
                if (copy2) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;
                    if (!state.head.extra) {
                      state.head.extra = new Array(state.head.extra_len);
                    }
                    utils.arraySet(
                      state.head.extra,
                      input,
                      next,
                      // extra field is limited to 65536 bytes
                      // - no need for additional size check
                      copy2,
                      /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                      len
                    );
                  }
                  if (state.flags & 512) {
                    state.check = crc322(state.check, input, copy2, next);
                  }
                  have -= copy2;
                  next += copy2;
                  state.length -= copy2;
                }
                if (state.length) {
                  break inf_leave;
              state.length = 0;
              state.mode = NAME;
            case NAME:
              if (state.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy2 = 0;
                do {
                  len = input[next + copy2++];
                  if (state.head && len && state.length < 65536) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy2 < have);
                if (state.flags & 512) {
                  state.check = crc322(state.check, input, copy2, next);
                }
                have -= copy2;
                next += copy2;
                if (len) {
                  break inf_leave;
              } else if (state.head) {
                state.head.name = null;
              state.length = 0;
              state.mode = COMMENT;
            case COMMENT:
              if (state.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                copy2 = 0;
                do {
                  len = input[next + copy2++];
                  if (state.head && len && state.length < 65536) {
                    state.head.comment += String.fromCharCode(len);
                } while (len && copy2 < have);
                if (state.flags & 512) {
                  state.check = crc322(state.check, input, copy2, next);
                have -= copy2;
                next += copy2;
                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              state.mode = HCRC;
            case HCRC:
              if (state.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
              strm.adler = state.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state.mode = DICT;
            case DICT:
              if (state.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                return Z_NEED_DICT;
              strm.adler = state.check = 1;
              state.mode = TYPE;
            case TYPE:
              if (flush2 === Z_BLOCK || flush2 === Z_TREES) {
                break inf_leave;
              }
            case TYPEDO:
              if (state.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
              state.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state.mode = STORED;
                  break;
                case 1:
                  fixedtables(state);
                  state.mode = LEN_;
                  if (flush2 === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  break;
                case 2:
                  state.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state.mode = BAD;
                break;
              }
              state.length = hold & 65535;
              hold = 0;
              bits = 0;
              state.mode = COPY_;
              if (flush2 === Z_TREES) {
                break inf_leave;
              }
            case COPY_:
              state.mode = COPY;
            case COPY:
              copy2 = state.length;
              if (copy2) {
                if (copy2 > have) {
                  copy2 = have;
                if (copy2 > left) {
                  copy2 = left;
                if (copy2 === 0) {
                  break inf_leave;
                }
                utils.arraySet(output, input, next, copy2, put);
                have -= copy2;
                next += copy2;
                left -= copy2;
                put += copy2;
                state.length -= copy2;
                break;
              state.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              state.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state.mode = BAD;
                break;
              state.have = 0;
              state.mode = LENLENS;
            case LENLENS:
              while (state.have < state.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.lens[order[state.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = { bits: state.lenbits };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state.mode = BAD;
                break;
              state.have = 0;
              state.mode = CODELENS;
            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (; ; ) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state.mode = BAD;
                      break;
                    }
                    len = state.lens[state.have - 1];
                    copy2 = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy2 = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy2 = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state.have + copy2 > state.nlen + state.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state.mode = BAD;
                    break;
                  }
                  while (copy2--) {
                    state.lens[state.have++] = len;
                  }
              if (state.mode === BAD) {
                break;
              if (state.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state.mode = BAD;
                break;
              state.lenbits = 9;
              opts = { bits: state.lenbits };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state.mode = BAD;
                break;
              state.distbits = 6;
              state.distcode = state.distdyn;
              opts = { bits: state.distbits };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
              state.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state.mode = BAD;
                break;
              }
              state.mode = LEN_;
              if (flush2 === Z_TREES) {
                break inf_leave;
              }
            case LEN_:
              state.mode = LEN;
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                if (state.mode === TYPE) {
                  state.back = -1;
                break;
              state.back = 0;
              for (; ; ) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              state.length = here_val;
              if (here_op === 0) {
                state.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state.back = -1;
                state.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state.mode = BAD;
                break;
              }
              state.extra = here_op & 15;
              state.mode = LENEXT;
            case LENEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.length += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              state.was = state.length;
              state.mode = DIST;
            case DIST:
              for (; ; ) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state.mode = BAD;
                break;
              }
              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;
            case DISTEXT:
              if (state.extra) {
                n = state.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state.offset += hold & (1 << state.extra) - 1;
                hold >>>= state.extra;
                bits -= state.extra;
                state.back += state.extra;
              }
              if (state.offset > state.dmax) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD;
                break;
              }
              state.mode = MATCH;
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy2 = _out - left;
              if (state.offset > copy2) {
                copy2 = state.offset - copy2;
                if (copy2 > state.whave) {
                  if (state.sane) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                }
                if (copy2 > state.wnext) {
                  copy2 -= state.wnext;
                  from = state.wsize - copy2;
                } else {
                  from = state.wnext - copy2;
                }
                if (copy2 > state.length) {
                  copy2 = state.length;
                }
                from_source = state.window;
              } else {
                from_source = output;
                from = put - state.offset;
                copy2 = state.length;
              if (copy2 > left) {
                copy2 = left;
              }
              left -= copy2;
              state.length -= copy2;
              do {
                output[put++] = from_source[from++];
              } while (--copy2);
              if (state.length === 0) {
                state.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;
            case CHECK:
              if (state.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state.total += _out;
                if (_out) {
                  strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc322(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }
                _out = left;
                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = "incorrect data check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = LENGTH;
            case LENGTH:
              if (state.wrap && state.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state.mode = DONE;
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            default:
              return Z_STREAM_ERROR;
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state.hold = hold;
      state.bits = bits;
      if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush2 !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state.mode = MEM;
          return Z_MEM_ERROR;
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state.total += _out;
      if (state.wrap && _out) {
        strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
        state.flags ? crc322(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush2 === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    function inflateEnd(strm) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      var state = strm.state;
      if (state.window) {
        state.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    function inflateGetHeader(strm, head) {
      var state;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if ((state.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state.head = head;
      head.done = false;
      return Z_OK;
    }
    function inflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var state;
      var dictid;
      var ret;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state = strm.state;
      if (state.wrap !== 0 && state.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state.check) {
          return Z_DATA_ERROR;
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state.mode = MEM;
        return Z_MEM_ERROR;
      }
      state.havedict = 1;
      return Z_OK;
    }
    exports2.inflateReset = inflateReset;
    exports2.inflateReset2 = inflateReset2;
    exports2.inflateResetKeep = inflateResetKeep;
    exports2.inflateInit = inflateInit;
    exports2.inflateInit2 = inflateInit2;
    exports2.inflate = inflate2;
    exports2.inflateEnd = inflateEnd;
    exports2.inflateGetHeader = inflateGetHeader;
    exports2.inflateSetDictionary = inflateSetDictionary;
    exports2.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/constants.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    module2.exports = {
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      /* compression levels */
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      /* The deflate compression method */
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/zlib/gzheader.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    module2.exports = GZheader;
  }
});

// node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/lib/inflate.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var c = require_constants();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    function Inflate(options) {
      if (!(this instanceof Inflate))
        return new Inflate(options);
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
      }, options || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status2 = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status2 !== c.Z_OK) {
        throw new Error(msg[status2]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        if (opt.raw) {
          status2 = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status2 !== c.Z_OK) {
            throw new Error(msg[status2]);
          }
      }
    }
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var dictionary = this.options.dictionary;
      var status2, _mode;
      var next_out_utf8, tail, utf8str;
      var allowBufError = false;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        status2 = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status2 === c.Z_NEED_DICT && dictionary) {
          status2 = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        if (status2 === c.Z_BUF_ERROR && allowBufError === true) {
          status2 = c.Z_OK;
          allowBufError = false;
        if (status2 !== c.Z_STREAM_END && status2 !== c.Z_OK) {
          this.onEnd(status2);
          this.ended = true;
          return false;
        }
        if (strm.next_out) {
          if (strm.avail_out === 0 || status2 === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
            if (this.options.to === "string") {
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) {
                utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
              }
              this.onData(utf8str);
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status2 !== c.Z_STREAM_END);
      if (status2 === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      if (_mode === c.Z_FINISH) {
        status2 = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status2);
        this.ended = true;
        return status2 === c.Z_OK;
      }
      if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status2) {
      if (status2 === c.Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
          this.result = utils.flattenChunks(this.chunks);
      }
      this.chunks = [];
      this.err = status2;
      this.msg = this.strm.msg;
    };
    function inflate2(input, options) {
      var inflator = new Inflate(options);
      inflator.push(input, true);
      if (inflator.err) {
        throw inflator.msg || msg[inflator.err];
      }
      return inflator.result;
    }
    function inflateRaw(input, options) {
      options = options || {};
      options.raw = true;
      return inflate2(input, options);
    }
    exports2.Inflate = Inflate;
    exports2.inflate = inflate2;
    exports2.inflateRaw = inflateRaw;
    exports2.ungzip = inflate2;
// node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js
var require_pako = __commonJS({
  "node_modules/.pnpm/pako@1.0.11/node_modules/pako/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var assign2 = require_common().assign;
    var deflate2 = require_deflate2();
    var inflate2 = require_inflate2();
    var constants = require_constants();
    var pako2 = {};
    assign2(pako2, deflate2, inflate2, constants);
    module2.exports = pako2;
  }
// node_modules/.pnpm/pify@4.0.1/node_modules/pify/index.js
var require_pify = __commonJS({
  "node_modules/.pnpm/pify@4.0.1/node_modules/pify/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var processFn = (fn, options) => function(...args) {
      const P = options.promiseModule;
      return new P((resolve, reject) => {
        if (options.multiArgs) {
          args.push((...result) => {
            if (options.errorFirst) {
              if (result[0]) {
                reject(result);
              } else {
                result.shift();
                resolve(result);
              }
            } else {
              resolve(result);
            }
          });
        } else if (options.errorFirst) {
          args.push((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          });
        } else {
          args.push(resolve);
        }
        fn.apply(this, args);
      });
    };
    module2.exports = (input, options) => {
      options = Object.assign({
        exclude: [/.+(Sync|Stream)$/],
        errorFirst: true,
        promiseModule: Promise
      }, options);
      const objType = typeof input;
      if (!(input !== null && (objType === "object" || objType === "function"))) {
        throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objType}\``);
      }
      const filter = (key2) => {
        const match = (pattern) => typeof pattern === "string" ? key2 === pattern : pattern.test(key2);
        return options.include ? options.include.some(match) : !options.exclude.some(match);
      };
      let ret;
      if (objType === "function") {
        ret = function(...args) {
          return options.excludeMain ? input(...args) : processFn(input, options).apply(this, args);
        };
      } else {
        ret = Object.create(Object.getPrototypeOf(input));
      for (const key2 in input) {
        const property = input[key2];
        ret[key2] = typeof property === "function" && filter(key2) ? processFn(property, options) : property;
      }
      return ret;
    };
});
// node_modules/.pnpm/ignore@5.2.4/node_modules/ignore/index.js
var require_ignore = __commonJS({
  "node_modules/.pnpm/ignore@5.2.4/node_modules/ignore/index.js"(exports2, module2) {
    init_polyfill_buffer();
    function makeArray(subject) {
      return Array.isArray(subject) ? subject : [subject];
    }
    var EMPTY = "";
    var SPACE = " ";
    var ESCAPE = "\\";
    var REGEX_TEST_BLANK_LINE = /^\s+$/;
    var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
    var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
    var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
    var REGEX_SPLITALL_CRLF = /\r?\n/g;
    var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
    var SLASH = "/";
    var TMP_KEY_IGNORE = "node-ignore";
    if (typeof Symbol !== "undefined") {
      TMP_KEY_IGNORE = Symbol.for("node-ignore");
    }
    var KEY_IGNORE = TMP_KEY_IGNORE;
    var define2 = (object, key2, value) => Object.defineProperty(object, key2, { value });
    var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
    var RETURN_FALSE = () => false;
    var sanitizeRange = (range) => range.replace(
      REGEX_REGEXP_RANGE,
      (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY
    );
    var cleanRangeBackSlash = (slashes) => {
      const { length } = slashes;
      return slashes.slice(0, length - length % 2);
    };
    var REPLACERS = [
      // > Trailing spaces are ignored unless they are quoted with backslash ("\")
      [
        // (a\ ) -> (a )
        // (a  ) -> (a)
        // (a \ ) -> (a  )
        /\\?\s+$/,
        (match) => match.indexOf("\\") === 0 ? SPACE : EMPTY
      ],
      // replace (\ ) with ' '
      [
        /\\\s/g,
        () => SPACE
      ],
      // Escape metacharacters
      // which is written down by users but means special for regular expressions.
      // > There are 12 characters with special meanings:
      // > - the backslash \,
      // > - the caret ^,
      // > - the dollar sign $,
      // > - the period or dot .,
      // > - the vertical bar or pipe symbol |,
      // > - the question mark ?,
      // > - the asterisk or star *,
      // > - the plus sign +,
      // > - the opening parenthesis (,
      // > - the closing parenthesis ),
      // > - and the opening square bracket [,
      // > - the opening curly brace {,
      // > These special characters are often called "metacharacters".
      [
        /[\\$.|*+(){^]/g,
        (match) => `\\${match}`
      ],
      [
        // > a question mark (?) matches a single character
        /(?!\\)\?/g,
        () => "[^/]"
      ],
      // leading slash
      [
        // > A leading slash matches the beginning of the pathname.
        // > For example, "/*.c" matches "cat-file.c" but not "mozilla-sha1/sha1.c".
        // A leading slash matches the beginning of the pathname
        /^\//,
        () => "^"
      ],
      // replace special metacharacter slash after the leading slash
      [
        /\//g,
        () => "\\/"
      ],
      [
        // > A leading "**" followed by a slash means match in all directories.
        // > For example, "**/foo" matches file or directory "foo" anywhere,
        // > the same as pattern "foo".
        // > "**/foo/bar" matches file or directory "bar" anywhere that is directly
        // >   under directory "foo".
        // Notice that the '*'s have been replaced as '\\*'
        /^\^*\\\*\\\*\\\//,
        // '**/foo' <-> 'foo'
        () => "^(?:.*\\/)?"
      ],
      // starting
      [
        // there will be no leading '/'
        //   (which has been replaced by section "leading slash")
        // If starts with '**', adding a '^' to the regular expression also works
        /^(?=[^^])/,
        function startingReplacer() {
          return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
      ],
      // two globstars
      [
        // Use lookahead assertions so that we could match more than one `'/**'`
        /\\\/\\\*\\\*(?=\\\/|$)/g,
        // Zero, one or several directories
        // should not use '*', or it will be replaced by the next replacer
        // Check if it is not the last `'/**'`
        (_, index2, str) => index2 + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
      ],
      // normal intermediate wildcards
      [
        // Never replace escaped '*'
        // ignore rule '\*' will match the path '*'
        // 'abc.*/' -> go
        // 'abc.*'  -> skip this rule,
        //    coz trailing single wildcard will be handed by [trailing wildcard]
        /(^|[^\\]+)(\\\*)+(?=.+)/g,
        // '*.js' matches '.js'
        // '*.js' doesn't match 'abc'
        (_, p1, p2) => {
          const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
          return p1 + unescaped;
        }
      ],
      [
        // unescape, revert step 3 except for back slash
        // For example, if a user escape a '\\*',
        // after step 3, the result will be '\\\\\\*'
        /\\\\\\(?=[$.|*+(){^])/g,
        () => ESCAPE
      ],
      [
        // '\\\\' -> '\\'
        /\\\\/g,
        () => ESCAPE
      ],
      [
        // > The range notation, e.g. [a-zA-Z],
        // > can be used to match one of the characters in a range.
        // `\` is escaped by step 3
        /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
        (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE ? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range)}${endEscape}]` : "[]" : "[]"
      ],
      // ending
      [
        // 'js' will not match 'js.'
        // 'ab' will not match 'abc'
        /(?:[^*])$/,
        // WTF!
        // https://git-scm.com/docs/gitignore
        // changes in [2.22.1](https://git-scm.com/docs/gitignore/2.22.1)
        // which re-fixes #24, #38
        // > If there is a separator at the end of the pattern then the pattern
        // > will only match directories, otherwise the pattern can match both
        // > files and directories.
        // 'js*' will not match 'a.js'
        // 'js/' will not match 'a.js'
        // 'js' will match 'a.js' and 'a.js/'
        (match) => /\/$/.test(match) ? `${match}$` : `${match}(?=$|\\/$)`
      ],
      // trailing wildcard
      [
        /(\^|\\\/)?\\\*$/,
        (_, p1) => {
          const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
          return `${prefix}(?=$|\\/$)`;
        }
      ]
    ];
    var regexCache = /* @__PURE__ */ Object.create(null);
    var makeRegex = (pattern, ignoreCase) => {
      let source = regexCache[pattern];
      if (!source) {
        source = REPLACERS.reduce(
          (prev, current) => prev.replace(current[0], current[1].bind(pattern)),
          pattern
        );
        regexCache[pattern] = source;
      }
      return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
    };
    var isString = (subject) => typeof subject === "string";
    var checkPattern = (pattern) => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
    var splitPattern = (pattern) => pattern.split(REGEX_SPLITALL_CRLF);
    var IgnoreRule = class {
      constructor(origin, pattern, negative, regex2) {
        this.origin = origin;
        this.pattern = pattern;
        this.negative = negative;
        this.regex = regex2;
    };
    var createRule = (pattern, ignoreCase) => {
      const origin = pattern;
      let negative = false;
      if (pattern.indexOf("!") === 0) {
        negative = true;
        pattern = pattern.substr(1);
      }
      pattern = pattern.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
      const regex2 = makeRegex(pattern, ignoreCase);
      return new IgnoreRule(
        origin,
        pattern,
        negative,
        regex2
      );
    };
    var throwError = (message, Ctor) => {
      throw new Ctor(message);
    };
    var checkPath = (path2, originalPath, doThrow) => {
      if (!isString(path2)) {
        return doThrow(
          `path must be a string, but got \`${originalPath}\``,
          TypeError
        );
      }
      if (!path2) {
        return doThrow(`path must not be empty`, TypeError);
      }
      if (checkPath.isNotRelative(path2)) {
        const r = "`path.relative()`d";
        return doThrow(
          `path should be a ${r} string, but got "${originalPath}"`,
          RangeError
        );
      return true;
    };
    var isNotRelative = (path2) => REGEX_TEST_INVALID_PATH.test(path2);
    checkPath.isNotRelative = isNotRelative;
    checkPath.convert = (p) => p;
    var Ignore = class {
      constructor({
        ignorecase = true,
        ignoreCase = ignorecase,
        allowRelativePaths = false
      } = {}) {
        define2(this, KEY_IGNORE, true);
        this._rules = [];
        this._ignoreCase = ignoreCase;
        this._allowRelativePaths = allowRelativePaths;
        this._initCache();
      }
      _initCache() {
        this._ignoreCache = /* @__PURE__ */ Object.create(null);
        this._testCache = /* @__PURE__ */ Object.create(null);
      }
      _addPattern(pattern) {
        if (pattern && pattern[KEY_IGNORE]) {
          this._rules = this._rules.concat(pattern._rules);
          this._added = true;
          return;
        }
        if (checkPattern(pattern)) {
          const rule = createRule(pattern, this._ignoreCase);
          this._added = true;
          this._rules.push(rule);
      // @param {Array<string> | string | Ignore} pattern
      add(pattern) {
        this._added = false;
        makeArray(
          isString(pattern) ? splitPattern(pattern) : pattern
        ).forEach(this._addPattern, this);
        if (this._added) {
          this._initCache();
        }
        return this;
      }
      // legacy
      addPattern(pattern) {
        return this.add(pattern);
      }
      //          |           ignored : unignored
      // negative |   0:0   |   0:1   |   1:0   |   1:1
      // -------- | ------- | ------- | ------- | --------
      //     0    |  TEST   |  TEST   |  SKIP   |    X
      //     1    |  TESTIF |  SKIP   |  TEST   |    X
      // - SKIP: always skip
      // - TEST: always test
      // - TESTIF: only test if checkUnignored
      // - X: that never happen
      // @param {boolean} whether should check if the path is unignored,
      //   setting `checkUnignored` to `false` could reduce additional
      //   path matching.
      // @returns {TestResult} true if a file is ignored
      _testOne(path2, checkUnignored) {
        let ignored = false;
        let unignored = false;
        this._rules.forEach((rule) => {
          const { negative } = rule;
          if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
            return;
          }
          const matched = rule.regex.test(path2);
          if (matched) {
            ignored = !negative;
            unignored = negative;
          }
        });
        return {
          ignored,
          unignored
        };
      }
      // @returns {TestResult}
      _test(originalPath, cache, checkUnignored, slices) {
        const path2 = originalPath && checkPath.convert(originalPath);
        checkPath(
          path2,
          originalPath,
          this._allowRelativePaths ? RETURN_FALSE : throwError
        );
        return this._t(path2, cache, checkUnignored, slices);
      }
      _t(path2, cache, checkUnignored, slices) {
        if (path2 in cache) {
          return cache[path2];
        }
        if (!slices) {
          slices = path2.split(SLASH);
        }
        slices.pop();
        if (!slices.length) {
          return cache[path2] = this._testOne(path2, checkUnignored);
        }
        const parent = this._t(
          slices.join(SLASH) + SLASH,
          cache,
          checkUnignored,
          slices
        );
        return cache[path2] = parent.ignored ? parent : this._testOne(path2, checkUnignored);
      }
      ignores(path2) {
        return this._test(path2, this._ignoreCache, false).ignored;
      }
      createFilter() {
        return (path2) => !this.ignores(path2);
      }
      filter(paths) {
        return makeArray(paths).filter(this.createFilter());
      }
      // @returns {TestResult}
      test(path2) {
        return this._test(path2, this._testCache, true);
      }
    };
    var factory = (options) => new Ignore(options);
    var isPathValid = (path2) => checkPath(path2 && checkPath.convert(path2), path2, RETURN_FALSE);
    factory.isPathValid = isPathValid;
    factory.default = factory;
    module2.exports = factory;
    if (
      // Detect `process` so that it can run in browsers.
      typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")
    ) {
      const makePosix = (str) => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, "/");
      checkPath.convert = makePosix;
      const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
      checkPath.isNotRelative = (path2) => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path2) || isNotRelative(path2);
});
// node_modules/.pnpm/clean-git-ref@2.0.1/node_modules/clean-git-ref/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/clean-git-ref@2.0.1/node_modules/clean-git-ref/lib/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    function replaceAll(str, search, replacement) {
      search = search instanceof RegExp ? search : new RegExp(escapeRegExp(search), "g");
      return str.replace(search, replacement);
    }
    var CleanGitRef = {
      clean: function clean(value) {
        if (typeof value !== "string") {
          throw new Error("Expected a string, received: " + value);
        }
        value = replaceAll(value, "./", "/");
        value = replaceAll(value, "..", ".");
        value = replaceAll(value, " ", "-");
        value = replaceAll(value, /^[~^:?*\\\-]/g, "");
        value = replaceAll(value, /[~^:?*\\]/g, "-");
        value = replaceAll(value, /[~^:?*\\\-]$/g, "");
        value = replaceAll(value, "@{", "-");
        value = replaceAll(value, /\.$/g, "");
        value = replaceAll(value, /\/$/g, "");
        value = replaceAll(value, /\.lock$/g, "");
        return value;
    };
    module2.exports = CleanGitRef;
});
// node_modules/.pnpm/diff3@0.0.3/node_modules/diff3/onp.js
var require_onp = __commonJS({
  "node_modules/.pnpm/diff3@0.0.3/node_modules/diff3/onp.js"(exports2, module2) {
    init_polyfill_buffer();
    module2.exports = function(a_, b_) {
      var a = a_, b = b_, m = a.length, n = b.length, reverse = false, ed = null, offset = m + 1, path2 = [], pathposi = [], ses = [], lcs = "", SES_DELETE = -1, SES_COMMON = 0, SES_ADD = 1;
      var tmp1, tmp2;
      var init3 = function() {
        if (m >= n) {
          tmp1 = a;
          tmp2 = m;
          a = b;
          b = tmp1;
          m = n;
          n = tmp2;
          reverse = true;
          offset = m + 1;
        }
      };
      var P = function(x, y, k) {
        return {
          "x": x,
          "y": y,
          "k": k
        };
      };
      var seselem = function(elem, t) {
        return {
          "elem": elem,
          "t": t
        };
      };
      var snake = function(k, p, pp) {
        var r, x, y;
        if (p > pp) {
          r = path2[k - 1 + offset];
        } else {
          r = path2[k + 1 + offset];
        }
        y = Math.max(p, pp);
        x = y - k;
        while (x < m && y < n && a[x] === b[y]) {
          ++x;
          ++y;
        }
        path2[k + offset] = pathposi.length;
        pathposi[pathposi.length] = new P(x, y, r);
        return y;
      };
      var recordseq = function(epc) {
        var x_idx, y_idx, px_idx, py_idx, i;
        x_idx = y_idx = 1;
        px_idx = py_idx = 0;
        for (i = epc.length - 1; i >= 0; --i) {
          while (px_idx < epc[i].x || py_idx < epc[i].y) {
            if (epc[i].y - epc[i].x > py_idx - px_idx) {
              if (reverse) {
                ses[ses.length] = new seselem(b[py_idx], SES_DELETE);
              } else {
                ses[ses.length] = new seselem(b[py_idx], SES_ADD);
              }
              ++y_idx;
              ++py_idx;
            } else if (epc[i].y - epc[i].x < py_idx - px_idx) {
              if (reverse) {
                ses[ses.length] = new seselem(a[px_idx], SES_ADD);
              } else {
                ses[ses.length] = new seselem(a[px_idx], SES_DELETE);
              }
              ++x_idx;
              ++px_idx;
            } else {
              ses[ses.length] = new seselem(a[px_idx], SES_COMMON);
              lcs += a[px_idx];
              ++x_idx;
              ++y_idx;
              ++px_idx;
              ++py_idx;
            }
          }
        }
      };
      init3();
      return {
        SES_DELETE: -1,
        SES_COMMON: 0,
        SES_ADD: 1,
        editdistance: function() {
          return ed;
        },
        getlcs: function() {
          return lcs;
        },
        getses: function() {
          return ses;
        },
        compose: function() {
          var delta, size, fp, p, r, epc, i, k;
          delta = n - m;
          size = m + n + 3;
          fp = {};
          for (i = 0; i < size; ++i) {
            fp[i] = -1;
            path2[i] = -1;
          }
          p = -1;
          do {
            ++p;
            for (k = -p; k <= delta - 1; ++k) {
              fp[k + offset] = snake(k, fp[k - 1 + offset] + 1, fp[k + 1 + offset]);
            }
            for (k = delta + p; k >= delta + 1; --k) {
              fp[k + offset] = snake(k, fp[k - 1 + offset] + 1, fp[k + 1 + offset]);
            }
            fp[delta + offset] = snake(delta, fp[delta - 1 + offset] + 1, fp[delta + 1 + offset]);
          } while (fp[delta + offset] !== n);
          ed = delta + 2 * p;
          r = path2[delta + offset];
          epc = [];
          while (r !== -1) {
            epc[epc.length] = new P(pathposi[r].x, pathposi[r].y, null);
            r = pathposi[r].k;
          }
          recordseq(epc);
        }
      };
    };
});
// node_modules/.pnpm/diff3@0.0.3/node_modules/diff3/diff3.js
var require_diff3 = __commonJS({
  "node_modules/.pnpm/diff3@0.0.3/node_modules/diff3/diff3.js"(exports2, module2) {
    init_polyfill_buffer();
    var onp = require_onp();
    function longestCommonSubsequence(file1, file2) {
      var diff2 = new onp(file1, file2);
      diff2.compose();
      var ses = diff2.getses();
      var root2;
      var prev;
      var file1RevIdx = file1.length - 1, file2RevIdx = file2.length - 1;
      for (var i = ses.length - 1; i >= 0; --i) {
        if (ses[i].t === diff2.SES_COMMON) {
          if (prev) {
            prev.chain = {
              file1index: file1RevIdx,
              file2index: file2RevIdx,
              chain: null
            };
            prev = prev.chain;
          } else {
            root2 = {
              file1index: file1RevIdx,
              file2index: file2RevIdx,
              chain: null
            };
            prev = root2;
          }
          file1RevIdx--;
          file2RevIdx--;
        } else if (ses[i].t === diff2.SES_DELETE) {
          file1RevIdx--;
        } else if (ses[i].t === diff2.SES_ADD) {
          file2RevIdx--;
        }
      var tail = {
        file1index: -1,
        file2index: -1,
        chain: null
      };
      if (!prev) {
        return tail;
      }
      prev.chain = tail;
      return root2;
    }
    function diffIndices(file1, file2) {
      var result = [];
      var tail1 = file1.length;
      var tail2 = file2.length;
      for (var candidate = longestCommonSubsequence(file1, file2); candidate !== null; candidate = candidate.chain) {
        var mismatchLength1 = tail1 - candidate.file1index - 1;
        var mismatchLength2 = tail2 - candidate.file2index - 1;
        tail1 = candidate.file1index;
        tail2 = candidate.file2index;
        if (mismatchLength1 || mismatchLength2) {
          result.push({
            file1: [tail1 + 1, mismatchLength1],
            file2: [tail2 + 1, mismatchLength2]
          });
        }
      }
      result.reverse();
      return result;
    function diff3MergeIndices(a, o, b) {
      var i;
      var m1 = diffIndices(o, a);
      var m2 = diffIndices(o, b);
      var hunks = [];
      function addHunk(h, side2) {
        hunks.push([h.file1[0], side2, h.file1[1], h.file2[0], h.file2[1]]);
      }
      for (i = 0; i < m1.length; i++) {
        addHunk(m1[i], 0);
      }
      for (i = 0; i < m2.length; i++) {
        addHunk(m2[i], 2);
      }
      hunks.sort(function(x, y) {
        return x[0] - y[0];
      });
      var result = [];
      var commonOffset = 0;
      function copyCommon(targetOffset) {
        if (targetOffset > commonOffset) {
          result.push([1, commonOffset, targetOffset - commonOffset]);
          commonOffset = targetOffset;
        }
      }
      for (var hunkIndex = 0; hunkIndex < hunks.length; hunkIndex++) {
        var firstHunkIndex = hunkIndex;
        var hunk = hunks[hunkIndex];
        var regionLhs = hunk[0];
        var regionRhs = regionLhs + hunk[2];
        while (hunkIndex < hunks.length - 1) {
          var maybeOverlapping = hunks[hunkIndex + 1];
          var maybeLhs = maybeOverlapping[0];
          if (maybeLhs > regionRhs)
            break;
          regionRhs = Math.max(regionRhs, maybeLhs + maybeOverlapping[2]);
          hunkIndex++;
        }
        copyCommon(regionLhs);
        if (firstHunkIndex == hunkIndex) {
          if (hunk[4] > 0) {
            result.push([hunk[1], hunk[3], hunk[4]]);
          }
        } else {
          var regions = {
            0: [a.length, -1, o.length, -1],
            2: [b.length, -1, o.length, -1]
          };
          for (i = firstHunkIndex; i <= hunkIndex; i++) {
            hunk = hunks[i];
            var side = hunk[1];
            var r = regions[side];
            var oLhs = hunk[0];
            var oRhs = oLhs + hunk[2];
            var abLhs = hunk[3];
            var abRhs = abLhs + hunk[4];
            r[0] = Math.min(abLhs, r[0]);
            r[1] = Math.max(abRhs, r[1]);
            r[2] = Math.min(oLhs, r[2]);
            r[3] = Math.max(oRhs, r[3]);
          }
          var aLhs = regions[0][0] + (regionLhs - regions[0][2]);
          var aRhs = regions[0][1] + (regionRhs - regions[0][3]);
          var bLhs = regions[2][0] + (regionLhs - regions[2][2]);
          var bRhs = regions[2][1] + (regionRhs - regions[2][3]);
          result.push([
            -1,
            aLhs,
            aRhs - aLhs,
            regionLhs,
            regionRhs - regionLhs,
            bLhs,
            bRhs - bLhs
          ]);
        }
        commonOffset = regionRhs;
      }
      copyCommon(o.length);
      return result;
    function diff3Merge2(a, o, b) {
      var result = [];
      var files = [a, o, b];
      var indices = diff3MergeIndices(a, o, b);
      var okLines = [];
      function flushOk() {
        if (okLines.length) {
          result.push({
            ok: okLines
          });
        }
        okLines = [];
      function pushOk(xs) {
        for (var j = 0; j < xs.length; j++) {
          okLines.push(xs[j]);
        }
      function isTrueConflict(rec) {
        if (rec[2] != rec[6])
          return true;
        var aoff = rec[1];
        var boff = rec[5];
        for (var j = 0; j < rec[2]; j++) {
          if (a[j + aoff] != b[j + boff])
            return true;
        }
        return false;
      for (var i = 0; i < indices.length; i++) {
        var x = indices[i];
        var side = x[0];
        if (side == -1) {
          if (!isTrueConflict(x)) {
            pushOk(files[0].slice(x[1], x[1] + x[2]));
          } else {
            flushOk();
            result.push({
              conflict: {
                a: a.slice(x[1], x[1] + x[2]),
                aIndex: x[1],
                o: o.slice(x[3], x[3] + x[4]),
                oIndex: x[3],
                b: b.slice(x[5], x[5] + x[6]),
                bIndex: x[5]
              }
            });
          }
        } else {
          pushOk(files[side].slice(x[1], x[1] + x[2]));
        }
      }
      flushOk();
      return result;
    }
    module2.exports = diff3Merge2;

// node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/.pnpm/ms@2.1.2/node_modules/ms/index.js"(exports2, module2) {
    init_polyfill_buffer();
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse2(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    function parse2(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }

// node_modules/.pnpm/debug@4.3.4_supports-color@7.2.0/node_modules/debug/src/common.js
var require_common2 = __commonJS({
  "node_modules/.pnpm/debug@4.3.4_supports-color@7.2.0/node_modules/debug/src/common.js"(exports2, module2) {
    init_polyfill_buffer();
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key2) => {
        createDebug[key2] = env[key2];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash2 = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
          hash2 |= 0;
        }
        return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          const self2 = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index2 = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index2++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index2];
              match = formatter.call(self2, val);
              args.splice(index2, 1);
              index2--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        return debug3;
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        return val;
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    module2.exports = setup;

// node_modules/.pnpm/debug@4.3.4_supports-color@7.2.0/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/.pnpm/debug@4.3.4_supports-color@7.2.0/node_modules/debug/src/browser.js"(exports2, module2) {
    init_polyfill_buffer();
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index2 = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index2++;
        if (match === "%c") {
          lastC = index2;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common2()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }

// node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@7.2.0/node_modules/@kwsites/file-exists/dist/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@7.2.0/node_modules/@kwsites/file-exists/dist/src/index.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var fs_1 = require("fs");
    var debug_1 = __importDefault(require_browser());
    var log2 = debug_1.default("@kwsites/file-exists");
    function check(path2, isFile, isDirectory) {
      log2(`checking %s`, path2);
      try {
        const stat = fs_1.statSync(path2);
        if (stat.isFile() && isFile) {
          log2(`[OK] path represents a file`);
          return true;
        }
        if (stat.isDirectory() && isDirectory) {
          log2(`[OK] path represents a directory`);
          return true;
        }
        log2(`[FAIL] path represents something other than a file or directory`);
        return false;
      } catch (e) {
        if (e.code === "ENOENT") {
          log2(`[FAIL] path is not accessible: %o`, e);
          return false;
        }
        log2(`[FATAL] %o`, e);
        throw e;
      }
    }
    function exists2(path2, type = exports2.READABLE) {
      return check(path2, (type & exports2.FILE) > 0, (type & exports2.FOLDER) > 0);
    }
    exports2.exists = exists2;
    exports2.FILE = 1;
    exports2.FOLDER = 2;
    exports2.READABLE = exports2.FILE + exports2.FOLDER;

// node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@7.2.0/node_modules/@kwsites/file-exists/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/@kwsites+file-exists@1.1.1_supports-color@7.2.0/node_modules/@kwsites/file-exists/dist/index.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    function __export3(m) {
      for (var p in m)
        if (!exports2.hasOwnProperty(p))
          exports2[p] = m[p];
    }
    Object.defineProperty(exports2, "__esModule", { value: true });
    __export3(require_src());
  }

// node_modules/.pnpm/@kwsites+promise-deferred@1.1.1/node_modules/@kwsites/promise-deferred/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/@kwsites+promise-deferred@1.1.1/node_modules/@kwsites/promise-deferred/dist/index.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createDeferred = exports2.deferred = void 0;
    function deferred2() {
      let done;
      let fail;
      let status2 = "pending";
      const promise2 = new Promise((_done, _fail) => {
        done = _done;
        fail = _fail;
      });
      return {
        promise: promise2,
        done(result) {
          if (status2 === "pending") {
            status2 = "resolved";
            done(result);
          }
        },
        fail(error) {
          if (status2 === "pending") {
            status2 = "rejected";
            fail(error);
          }
        },
        get fulfilled() {
          return status2 !== "pending";
        },
        get status() {
          return status2;
        }
      };
    }
    exports2.deferred = deferred2;
    exports2.createDeferred = deferred2;
    exports2.default = deferred2;
  }
});

// node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/.pnpm/css-unit-converter@1.1.2/node_modules/css-unit-converter/index.js
var require_css_unit_converter = __commonJS({
  "node_modules/.pnpm/css-unit-converter@1.1.2/node_modules/css-unit-converter/index.js"(exports2, module2) {
    init_polyfill_buffer();
    var conversions = {
      // length
      "px": {
        "px": 1,
        "cm": 96 / 2.54,
        "mm": 96 / 25.4,
        "in": 96,
        "pt": 96 / 72,
        "pc": 16
      },
      "cm": {
        "px": 2.54 / 96,
        "cm": 1,
        "mm": 0.1,
        "in": 2.54,
        "pt": 2.54 / 72,
        "pc": 2.54 / 6
      },
      "mm": {
        "px": 25.4 / 96,
        "cm": 10,
        "mm": 1,
        "in": 25.4,
        "pt": 25.4 / 72,
        "pc": 25.4 / 6
      },
      "in": {
        "px": 1 / 96,
        "cm": 1 / 2.54,
        "mm": 1 / 25.4,
        "in": 1,
        "pt": 1 / 72,
        "pc": 1 / 6
      },
      "pt": {
        "px": 0.75,
        "cm": 72 / 2.54,
        "mm": 72 / 25.4,
        "in": 72,
        "pt": 1,
        "pc": 12
      },
      "pc": {
        "px": 6 / 96,
        "cm": 6 / 2.54,
        "mm": 6 / 25.4,
        "in": 6,
        "pt": 6 / 72,
        "pc": 1
      },
      // angle
      "deg": {
        "deg": 1,
        "grad": 0.9,
        "rad": 180 / Math.PI,
        "turn": 360
      },
      "grad": {
        "deg": 400 / 360,
        "grad": 1,
        "rad": 200 / Math.PI,
        "turn": 400
      },
      "rad": {
        "deg": Math.PI / 180,
        "grad": Math.PI / 200,
        "rad": 1,
        "turn": Math.PI * 2
      },
      "turn": {
        "deg": 1 / 360,
        "grad": 1 / 400,
        "rad": 0.5 / Math.PI,
        "turn": 1
      },
      // time
      "s": {
        "s": 1,
        "ms": 1 / 1e3
      },
      "ms": {
        "s": 1e3,
        "ms": 1
      },
      // frequency
      "Hz": {
        "Hz": 1,
        "kHz": 1e3
      },
      "kHz": {
        "Hz": 1 / 1e3,
        "kHz": 1
      },
      // resolution
      "dpi": {
        "dpi": 1,
        "dpcm": 1 / 2.54,
        "dppx": 1 / 96
      },
      "dpcm": {
        "dpi": 2.54,
        "dpcm": 1,
        "dppx": 2.54 / 96
      },
      "dppx": {
        "dpi": 96,
        "dpcm": 96 / 2.54,
        "dppx": 1
      }
    };
    module2.exports = function(value, sourceUnit, targetUnit, precision) {
      if (!conversions.hasOwnProperty(targetUnit))
        throw new Error("Cannot convert to " + targetUnit);
      if (!conversions[targetUnit].hasOwnProperty(sourceUnit))
        throw new Error("Cannot convert from " + sourceUnit + " to " + targetUnit);
      var converted = conversions[targetUnit][sourceUnit] * value;
      if (precision !== false) {
        precision = Math.pow(10, parseInt(precision) || 5);
        return Math.round(converted * precision) / precision;
      }
      return converted;
    };
  }
});

// node_modules/.pnpm/css-color-converter@2.0.0/node_modules/css-color-converter/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/.pnpm/css-color-converter@2.0.0/node_modules/css-color-converter/lib/index.js"(exports2) {
    "use strict";
    init_polyfill_buffer();
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.fromRgba = fromRgba;
    exports2.fromRgb = fromRgb;
    exports2.fromHsla = fromHsla;
    exports2.fromHsl = fromHsl;
    exports2.fromString = fromString2;
    exports2["default"] = void 0;
    var _colorName = _interopRequireDefault(require_color_name());
    var _cssUnitConverter = _interopRequireDefault(require_css_unit_converter());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance10, Constructor) {
      if (!(instance10 instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray2(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray2(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray2(o, minLen);
    }
    function _arrayLikeToArray2(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
        return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = void 0;
      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i)
            break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null)
            _i["return"]();
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr))
        return arr;
    }
    var hex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/;
    var shortHex = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/;
    var rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
    var rgbfn = /^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
    var rgbperc = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
    var rgbpercfn = /^rgba?\(\s*(\d+%)\s+(\d+%)\s+(\d+%)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
    var hsl = /^hsla?\(\s*(\d+)(deg|rad|grad|turn)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
    function contains2(haystack, needle) {
      return haystack.indexOf(needle) > -1;
    }
    function rgbToHsl(r, g, b) {
      var rprim = r / 255;
      var gprim = g / 255;
      var bprim = b / 255;
      var cmax = Math.max(rprim, gprim, bprim);
      var cmin = Math.min(rprim, gprim, bprim);
      var delta = cmax - cmin;
      var l = (cmax + cmin) / 2;
      if (delta === 0) {
        return [0, 0, l * 100];
      }
      var s = delta / (1 - Math.abs(2 * l - 1));
      var h = function() {
        switch (cmax) {
          case rprim: {
            return (gprim - bprim) / delta % 6;
          }
          case gprim: {
            return (bprim - rprim) / delta + 2;
          }
          default: {
            return (rprim - gprim) / delta + 4;
          }
        }
      }();
      return [h * 60, s * 100, l * 100];
    }
    function hslToRgb(h, s, l) {
      var hprim = h / 60;
      var sprim = s / 100;
      var lprim = l / 100;
      var c = (1 - Math.abs(2 * lprim - 1)) * sprim;
      var x = c * (1 - Math.abs(hprim % 2 - 1));
      var m = lprim - c / 2;
      var _ref = function() {
        if (hprim < 1)
          return [c, x, 0];
        if (hprim < 2)
          return [x, c, 0];
        if (hprim < 3)
          return [0, c, x];
        if (hprim < 4)
          return [0, x, c];
        if (hprim < 5)
          return [x, 0, c];
        return [c, 0, x];
      }(), _ref2 = _slicedToArray(_ref, 3), rprim = _ref2[0], gprim = _ref2[1], bprim = _ref2[2];
      return [(rprim + m) * 255, (gprim + m) * 255, (bprim + m) * 255];
    }
    var Color = /* @__PURE__ */ function() {
      function Color2(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 4), r = _ref4[0], g = _ref4[1], b = _ref4[2], a = _ref4[3];
        _classCallCheck(this, Color2);
        this.values = [Math.max(Math.min(parseInt(r, 10), 255), 0), Math.max(Math.min(parseInt(g, 10), 255), 0), Math.max(Math.min(parseInt(b, 10), 255), 0), a == null ? 1 : Math.max(Math.min(parseFloat(a), 255), 0)];
      }
      _createClass(Color2, [{
        key: "toRgbString",
        value: function toRgbString() {
          var _this$values = _slicedToArray(this.values, 4), r = _this$values[0], g = _this$values[1], b = _this$values[2], a = _this$values[3];
          if (a === 1) {
            return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
          }
          return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
        }
      }, {
        key: "toHslString",
        value: function toHslString() {
          var _this$toHslaArray = this.toHslaArray(), _this$toHslaArray2 = _slicedToArray(_this$toHslaArray, 4), h = _this$toHslaArray2[0], s = _this$toHslaArray2[1], l = _this$toHslaArray2[2], a = _this$toHslaArray2[3];
          if (a === 1) {
            return "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
          }
          return "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(a, ")");
        }
      }, {
        key: "toHexString",
        value: function toHexString() {
          var _this$values2 = _slicedToArray(this.values, 4), r = _this$values2[0], g = _this$values2[1], b = _this$values2[2], a = _this$values2[3];
          r = Number(r).toString(16).padStart(2, "0");
          g = Number(g).toString(16).padStart(2, "0");
          b = Number(b).toString(16).padStart(2, "0");
          a = a < 1 ? parseInt(a * 255, 10).toString(16).padStart(2, "0") : "";
          return "#".concat(r).concat(g).concat(b).concat(a);
        }
      }, {
        key: "toRgbaArray",
        value: function toRgbaArray() {
          return this.values;
        }
      }, {
        key: "toHslaArray",
        value: function toHslaArray() {
          var _this$values3 = _slicedToArray(this.values, 4), r = _this$values3[0], g = _this$values3[1], b = _this$values3[2], a = _this$values3[3];
          var _rgbToHsl = rgbToHsl(r, g, b), _rgbToHsl2 = _slicedToArray(_rgbToHsl, 3), h = _rgbToHsl2[0], s = _rgbToHsl2[1], l = _rgbToHsl2[2];
          return [h, s, l, a];
        }
      }]);
      return Color2;
    }();
    function fromRgba(_ref5) {
      var _ref6 = _slicedToArray(_ref5, 4), r = _ref6[0], g = _ref6[1], b = _ref6[2], a = _ref6[3];
      return new Color([r, g, b, a]);
    }
    function fromRgb(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 3), r = _ref8[0], g = _ref8[1], b = _ref8[2];
      return fromRgba([r, g, b, 1]);
    }
    function fromHsla(_ref9) {
      var _ref10 = _slicedToArray(_ref9, 4), h = _ref10[0], s = _ref10[1], l = _ref10[2], a = _ref10[3];
      var _hslToRgb = hslToRgb(h, s, l), _hslToRgb2 = _slicedToArray(_hslToRgb, 3), r = _hslToRgb2[0], g = _hslToRgb2[1], b = _hslToRgb2[2];
      return fromRgba([r, g, b, a]);
    }
    function fromHsl(_ref11) {
      var _ref12 = _slicedToArray(_ref11, 3), h = _ref12[0], s = _ref12[1], l = _ref12[2];
      return fromHsla([h, s, l, 1]);
    }
    function fromHexString(str) {
      var _ref13 = hex.exec(str) || shortHex.exec(str), _ref14 = _slicedToArray(_ref13, 5), r = _ref14[1], g = _ref14[2], b = _ref14[3], a = _ref14[4];
      r = parseInt(r.length < 2 ? r.repeat(2) : r, 16);
      g = parseInt(g.length < 2 ? g.repeat(2) : g, 16);
      b = parseInt(b.length < 2 ? b.repeat(2) : b, 16);
      a = a && (parseInt(a.length < 2 ? a.repeat(2) : a, 16) / 255).toPrecision(1) || 1;
      return fromRgba([r, g, b, a]);
    }
    function fromRgbString(str) {
      var _ref15 = rgb.exec(str) || rgbperc.exec(str) || rgbfn.exec(str) || rgbpercfn.exec(str), _ref16 = _slicedToArray(_ref15, 5), r = _ref16[1], g = _ref16[2], b = _ref16[3], a = _ref16[4];
      r = contains2(r, "%") ? parseInt(r, 10) * 255 / 100 : parseInt(r, 10);
      g = contains2(g, "%") ? parseInt(g, 10) * 255 / 100 : parseInt(g, 10);
      b = contains2(b, "%") > 0 ? parseInt(b, 10) * 255 / 100 : parseInt(b, 10);
      a = a === void 0 ? 1 : parseFloat(a) / (contains2(a, "%") ? 100 : 1);
      return fromRgba([r, g, b, a]);
    }
    function fromHslString(str) {
      var _hsl$exec = hsl.exec(str), _hsl$exec2 = _slicedToArray(_hsl$exec, 6), h = _hsl$exec2[1], unit = _hsl$exec2[2], s = _hsl$exec2[3], l = _hsl$exec2[4], a = _hsl$exec2[5];
      unit = unit || "deg";
      h = (0, _cssUnitConverter["default"])(parseFloat(h), unit, "deg");
      s = parseFloat(s);
      l = parseFloat(l);
      a = a === void 0 ? 1 : parseFloat(a) / (contains2(a, "%") ? 100 : 1);
      return fromHsla([h, s, l, a]);
    }
    function fromString2(str) {
      if (_colorName["default"][str]) {
        return fromRgb(_colorName["default"][str]);
      }
      if (hex.test(str) || shortHex.test(str)) {
        return fromHexString(str);
      }
      if (rgb.test(str) || rgbperc.test(str) || rgbfn.test(str) || rgbpercfn.test(str)) {
        return fromRgbString(str);
      }
      if (hsl.test(str)) {
        return fromHslString(str);
      }
      return null;
    }
    var _default = {
      fromString: fromString2,
      fromRgb,
      fromRgba,
      fromHsl,
      fromHsla
    };
    exports2["default"] = _default;
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/isArguments.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var toStr = Object.prototype.toString;
    module2.exports = function isArguments(value) {
      var str = toStr.call(value);
      var isArgs = str === "[object Arguments]";
      if (!isArgs) {
        isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
      }
      return isArgs;
    };
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js
var require_implementation = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/implementation.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var keysShim;
    if (!Object.keys) {
      has = Object.prototype.hasOwnProperty;
      toStr = Object.prototype.toString;
      isArgs = require_isArguments();
      isEnumerable = Object.prototype.propertyIsEnumerable;
      hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
      hasProtoEnumBug = isEnumerable.call(function() {
      }, "prototype");
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
      ];
      equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
      };
      excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
      };
      hasAutomationEqualityBug = function() {
        if (typeof window === "undefined") {
          return false;
        }
        for (var k in window) {
          try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
              try {
                equalsConstructorPrototype(window[k]);
              } catch (e) {
                return true;
              }
            }
          } catch (e) {
            return true;
          }
        }
        return false;
      }();
      equalsConstructorPrototypeIfNotBuggy = function(o) {
        if (typeof window === "undefined" || !hasAutomationEqualityBug) {
          return equalsConstructorPrototype(o);
        }
        try {
          return equalsConstructorPrototype(o);
        } catch (e) {
          return false;
        }
      };
      keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) {
          throw new TypeError("Object.keys called on a non-object");
        }
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) {
          for (var i = 0; i < object.length; ++i) {
            theKeys.push(String(i));
          }
        }
        if (isArguments && object.length > 0) {
          for (var j = 0; j < object.length; ++j) {
            theKeys.push(String(j));
          }
        } else {
          for (var name in object) {
            if (!(skipProto && name === "prototype") && has.call(object, name)) {
              theKeys.push(String(name));
            }
          }
        }
        if (hasDontEnumBug) {
          var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
          for (var k = 0; k < dontEnums.length; ++k) {
            if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
              theKeys.push(dontEnums[k]);
            }
          }
        }
        return theKeys;
      };
    }
    var has;
    var toStr;
    var isArgs;
    var isEnumerable;
    var hasDontEnumBug;
    var hasProtoEnumBug;
    var dontEnums;
    var equalsConstructorPrototype;
    var excludedKeys;
    var hasAutomationEqualityBug;
    var equalsConstructorPrototypeIfNotBuggy;
    module2.exports = keysShim;
  }
});

// node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js
var require_object_keys = __commonJS({
  "node_modules/.pnpm/object-keys@1.1.1/node_modules/object-keys/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var slice = Array.prototype.slice;
    var isArgs = require_isArguments();
    var origKeys = Object.keys;
    var keysShim = origKeys ? function keys(o) {
      return origKeys(o);
    } : require_implementation();
    var originalKeys = Object.keys;
    keysShim.shim = function shimObjectKeys() {
      if (Object.keys) {
        var keysWorksWithArguments = function() {
          var args = Object.keys(arguments);
          return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) {
          Object.keys = function keys(object) {
            if (isArgs(object)) {
              return originalKeys(slice.call(object));
            }
            return originalKeys(object);
          };
        }
      } else {
        Object.keys = keysShim;
      }
      return Object.keys || keysShim;
    };
    module2.exports = keysShim;
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/.pnpm/has-symbols@1.0.3/node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js
var require_implementation2 = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            args.concat(slice.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(
            that,
            args.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/.pnpm/function-bind@1.1.1/node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var implementation = require_implementation2();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js
var require_src2 = __commonJS({
  "node_modules/.pnpm/has@1.0.3/node_modules/has/src/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var bind = require_function_bind();
    module2.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/.pnpm/get-intrinsic@1.2.0/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/.pnpm/get-intrinsic@1.2.0/node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    try {
      null.error;
    } catch (e) {
      errorProto = getProto(getProto(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src2();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var $exec = bind.call(Function.call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first2 = $strSlice(string, 0, 1);
      var last2 = $strSlice(string, -1);
      if (first2 === "%" && last2 !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last2 === "%" && first2 !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first2 = $strSlice(part, 0, 1);
        var last2 = $strSlice(part, -1);
        if ((first2 === '"' || first2 === "'" || first2 === "`" || (last2 === '"' || last2 === "'" || last2 === "`")) && first2 !== last2) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/.pnpm/has-property-descriptors@1.0.0/node_modules/has-property-descriptors/index.js
var require_has_property_descriptors = __commonJS({
  "node_modules/.pnpm/has-property-descriptors@1.0.0/node_modules/has-property-descriptors/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var GetIntrinsic = require_get_intrinsic();
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var hasPropertyDescriptors = function hasPropertyDescriptors2() {
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    };
    hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
      if (!hasPropertyDescriptors()) {
        return null;
      }
      try {
        return $defineProperty([], "length", { value: 1 }).length !== 1;
      } catch (e) {
        return true;
      }
    };
    module2.exports = hasPropertyDescriptors;
  }
});

// node_modules/.pnpm/define-properties@1.2.0/node_modules/define-properties/index.js
var require_define_properties = __commonJS({
  "node_modules/.pnpm/define-properties@1.2.0/node_modules/define-properties/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var keys = require_object_keys();
    var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
    var toStr = Object.prototype.toString;
    var concat = Array.prototype.concat;
    var origDefineProperty = Object.defineProperty;
    var isFunction = function(fn) {
      return typeof fn === "function" && toStr.call(fn) === "[object Function]";
    };
    var hasPropertyDescriptors = require_has_property_descriptors()();
    var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
    var defineProperty = function(object, name, value, predicate) {
      if (name in object) {
        if (predicate === true) {
          if (object[name] === value) {
            return;
          }
        } else if (!isFunction(predicate) || !predicate()) {
          return;
        }
      }
      if (supportsDescriptors) {
        origDefineProperty(object, name, {
          configurable: true,
          enumerable: false,
          value,
          writable: true
        });
      } else {
        object[name] = value;
      }
    };
    var defineProperties = function(object, map) {
      var predicates = arguments.length > 2 ? arguments[2] : {};
      var props = keys(map);
      if (hasSymbols) {
        props = concat.call(props, Object.getOwnPropertySymbols(map));
      }
      for (var i = 0; i < props.length; i += 1) {
        defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
      }
    };
    defineProperties.supportsDescriptors = !!supportsDescriptors;
    module2.exports = defineProperties;
  }
});

// node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module2.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/.pnpm/call-bind@1.0.2/node_modules/call-bind/callBound.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/implementation.js
var require_implementation3 = __commonJS({
  "node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/implementation.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var objectKeys = require_object_keys();
    var hasSymbols = require_shams()();
    var callBound = require_callBound();
    var toObject = Object;
    var $push = callBound("Array.prototype.push");
    var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
    var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
    module2.exports = function assign2(target, source1) {
      if (target == null) {
        throw new TypeError("target must be an object");
      }
      var to = toObject(target);
      if (arguments.length === 1) {
        return to;
      }
      for (var s = 1; s < arguments.length; ++s) {
        var from = toObject(arguments[s]);
        var keys = objectKeys(from);
        var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
          var syms = getSymbols(from);
          for (var j = 0; j < syms.length; ++j) {
            var key2 = syms[j];
            if ($propIsEnumerable(from, key2)) {
              $push(keys, key2);
            }
          }
        }
        for (var i = 0; i < keys.length; ++i) {
          var nextKey = keys[i];
          if ($propIsEnumerable(from, nextKey)) {
            var propValue = from[nextKey];
            to[nextKey] = propValue;
          }
        }
      }
      return to;
    };
  }
});

// node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/polyfill.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var implementation = require_implementation3();
    var lacksProperEnumerationOrder = function() {
      if (!Object.assign) {
        return false;
      }
      var str = "abcdefghijklmnopqrst";
      var letters = str.split("");
      var map = {};
      for (var i = 0; i < letters.length; ++i) {
        map[letters[i]] = letters[i];
      }
      var obj = Object.assign({}, map);
      var actual = "";
      for (var k in obj) {
        actual += k;
      }
      return str !== actual;
    };
    var assignHasPendingExceptions = function() {
      if (!Object.assign || !Object.preventExtensions) {
        return false;
      }
      var thrower = Object.preventExtensions({ 1: 2 });
      try {
        Object.assign(thrower, "xy");
      } catch (e) {
        return thrower[1] === "y";
      }
      return false;
    };
    module2.exports = function getPolyfill() {
      if (!Object.assign) {
        return implementation;
      }
      if (lacksProperEnumerationOrder()) {
        return implementation;
      }
      if (assignHasPendingExceptions()) {
        return implementation;
      }
      return Object.assign;
    };
  }
});

// node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/shim.js
var require_shim = __commonJS({
  "node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/shim.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var define2 = require_define_properties();
    var getPolyfill = require_polyfill();
    module2.exports = function shimAssign() {
      var polyfill = getPolyfill();
      define2(
        Object,
        { assign: polyfill },
        { assign: function() {
          return Object.assign !== polyfill;
        } }
      );
      return polyfill;
    };
  }
});

// node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/index.js
var require_object = __commonJS({
  "node_modules/.pnpm/object.assign@4.1.4/node_modules/object.assign/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var defineProperties = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation3();
    var getPolyfill = require_polyfill();
    var shim = require_shim();
    var polyfill = callBind.apply(getPolyfill());
    var bound = function assign2(target, source1) {
      return polyfill(Object, arguments);
    };
    defineProperties(bound, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = bound;
  }
});

// node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js
var require_functions_have_names = __commonJS({
  "node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var functionsHaveNames = function functionsHaveNames2() {
      return typeof function f() {
      }.name === "string";
    };
    var gOPD = Object.getOwnPropertyDescriptor;
    if (gOPD) {
      try {
        gOPD([], "length");
      } catch (e) {
        gOPD = null;
      }
    }
    functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
      if (!functionsHaveNames() || !gOPD) {
        return false;
      }
      var desc = gOPD(function() {
      }, "name");
      return !!desc && !!desc.configurable;
    };
    var $bind = Function.prototype.bind;
    functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
      return functionsHaveNames() && typeof $bind === "function" && function f() {
      }.bind().name !== "";
    };
    module2.exports = functionsHaveNames;
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/implementation.js
var require_implementation4 = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/implementation.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var functionsHaveConfigurableNames = require_functions_have_names().functionsHaveConfigurableNames();
    var $Object = Object;
    var $TypeError = TypeError;
    module2.exports = function flags() {
      if (this != null && this !== $Object(this)) {
        throw new $TypeError("RegExp.prototype.flags getter called on non-object");
      }
      var result = "";
      if (this.hasIndices) {
        result += "d";
      }
      if (this.global) {
        result += "g";
      }
      if (this.ignoreCase) {
        result += "i";
      }
      if (this.multiline) {
        result += "m";
      }
      if (this.dotAll) {
        result += "s";
      }
      if (this.unicode) {
        result += "u";
      }
      if (this.unicodeSets) {
        result += "v";
      }
      if (this.sticky) {
        result += "y";
      }
      return result;
    };
    if (functionsHaveConfigurableNames && Object.defineProperty) {
      Object.defineProperty(module2.exports, "name", { value: "get flags" });
    }
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/polyfill.js
var require_polyfill2 = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/polyfill.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var implementation = require_implementation4();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var $gOPD = Object.getOwnPropertyDescriptor;
    module2.exports = function getPolyfill() {
      if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
          var calls = "";
          var o = {};
          Object.defineProperty(o, "hasIndices", {
            get: function() {
              calls += "d";
            }
          });
          Object.defineProperty(o, "sticky", {
            get: function() {
              calls += "y";
            }
          });
          if (calls === "dy") {
            return descriptor.get;
          }
        }
      }
      return implementation;
    };
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/shim.js
var require_shim2 = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/shim.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var supportsDescriptors = require_define_properties().supportsDescriptors;
    var getPolyfill = require_polyfill2();
    var gOPD = Object.getOwnPropertyDescriptor;
    var defineProperty = Object.defineProperty;
    var TypeErr = TypeError;
    var getProto = Object.getPrototypeOf;
    var regex2 = /a/;
    module2.exports = function shimFlags() {
      if (!supportsDescriptors || !getProto) {
        throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
      }
      var polyfill = getPolyfill();
      var proto = getProto(regex2);
      var descriptor = gOPD(proto, "flags");
      if (!descriptor || descriptor.get !== polyfill) {
        defineProperty(proto, "flags", {
          configurable: true,
          enumerable: false,
          get: polyfill
        });
      }
      return polyfill;
    };
  }
});

// node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/index.js
var require_regexp_prototype = __commonJS({
  "node_modules/.pnpm/regexp.prototype.flags@1.5.0/node_modules/regexp.prototype.flags/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation4();
    var getPolyfill = require_polyfill2();
    var shim = require_shim2();
    var flagsBound = callBind(getPolyfill());
    define2(flagsBound, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = flagsBound;
  }
});

// node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js
var require_shams2 = __commonJS({
  "node_modules/.pnpm/has-tostringtag@1.0.0/node_modules/has-tostringtag/shams.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var hasSymbols = require_shams();
    module2.exports = function hasToStringTagShams() {
      return hasSymbols() && !!Symbol.toStringTag;
    };
  }
});

// node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js
var require_is_arguments = __commonJS({
  "node_modules/.pnpm/is-arguments@1.1.1/node_modules/is-arguments/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var hasToStringTag = require_shams2()();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var isStandardArguments = function isArguments(value) {
      if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
        return false;
      }
      return $toString(value) === "[object Arguments]";
    };
    var isLegacyArguments = function isArguments(value) {
      if (isStandardArguments(value)) {
        return true;
      }
      return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
    };
    var supportsStandardArguments = function() {
      return isStandardArguments(arguments);
    }();
    isStandardArguments.isLegacyArguments = isLegacyArguments;
    module2.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  }
});

// (disabled):node_modules/.pnpm/object-inspect@1.12.3/node_modules/object-inspect/util.inspect
var require_util = __commonJS({
  "(disabled):node_modules/.pnpm/object-inspect@1.12.3/node_modules/object-inspect/util.inspect"() {
    init_polyfill_buffer();
  }
});

// node_modules/.pnpm/object-inspect@1.12.3/node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/.pnpm/object-inspect@1.12.3/node_modules/object-inspect/index.js"(exports2, module2) {
    init_polyfill_buffer();
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString2 = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num2, str) {
      if (num2 === Infinity || num2 === -Infinity || num2 !== num2 || num2 && num2 > -1e3 && num2 < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num2 === "number") {
        var int = num2 < 0 ? -$floor(-num2) : $floor(num2);
        if (int !== num2) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent2 = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent2 && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent2) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key2) {
            mapParts.push(inspect(key2, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent2);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent2);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag2 = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag2 + "{}";
        }
        if (indent2) {
          return tag2 + "{" + indentedJoin(ys, indent2) + "}";
        }
        return tag2 + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key2) {
      return key2 in this;
    };
    function has(obj, key2) {
      return hasOwn.call(obj, key2);
    }
    function toStr(obj) {
      return objectToString2.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent2) {
      var joinedEntries = indent2 ? indentedJoin(entries, indent2) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent2) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent2.prev + indent2.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent2.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key2 in obj) {
        if (!has(obj, key2)) {
          continue;
        }
        if (isArr && String(Number(key2)) === key2 && key2 < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key2] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key2)) {
          xs.push(inspect(key2, obj) + ": " + inspect(obj[key2], obj));
        } else {
          xs.push(key2 + ": " + inspect(obj[key2], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/.pnpm/side-channel@1.0.4/node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/.pnpm/side-channel@1.0.4/node_modules/side-channel/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key2) {
      for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key2) {
          prev.next = curr.next;
          curr.next = list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key2) {
      var node = listGetNode(objects, key2);
      return node && node.value;
    };
    var listSet = function(objects, key2, value) {
      var node = listGetNode(objects, key2);
      if (node) {
        node.value = value;
      } else {
        objects.next = {
          // eslint-disable-line no-param-reassign
          key: key2,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key2) {
      return !!listGetNode(objects, key2);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key2) {
          if (!channel.has(key2)) {
            throw new $TypeError("Side channel does not contain " + inspect(key2));
          }
        },
        get: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key2);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key2);
            }
          } else {
            if ($o) {
              return listGet($o, key2);
            }
          }
        },
        has: function(key2) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key2);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key2);
            }
          } else {
            if ($o) {
              return listHas($o, key2);
            }
          }
          return false;
        },
        set: function(key2, value) {
          if ($WeakMap && key2 && (typeof key2 === "object" || typeof key2 === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key2, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key2, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key2, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/.pnpm/internal-slot@1.0.5/node_modules/internal-slot/index.js
var require_internal_slot = __commonJS({
  "node_modules/.pnpm/internal-slot@1.0.5/node_modules/internal-slot/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var GetIntrinsic = require_get_intrinsic();
    var has = require_src2();
    var channel = require_side_channel()();
    var $TypeError = GetIntrinsic("%TypeError%");
    var SLOT = {
      assert: function(O, slot) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        channel.assert(O);
        if (!SLOT.has(O, slot)) {
          throw new $TypeError("`" + slot + "` is not present on `O`");
        }
      },
      get: function(O, slot) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        var slots = channel.get(O);
        return slots && slots["$" + slot];
      },
      has: function(O, slot) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        var slots = channel.get(O);
        return !!slots && has(slots, "$" + slot);
      },
      set: function(O, slot, V) {
        if (!O || typeof O !== "object" && typeof O !== "function") {
          throw new $TypeError("`O` is not an object");
        }
        if (typeof slot !== "string") {
          throw new $TypeError("`slot` must be a string");
        }
        var slots = channel.get(O);
        if (!slots) {
          slots = {};
          channel.set(O, slots);
        }
        slots["$" + slot] = V;
      }
    };
    if (Object.freeze) {
      Object.freeze(SLOT);
    }
    module2.exports = SLOT;
  }
});

// node_modules/.pnpm/stop-iteration-iterator@1.0.0/node_modules/stop-iteration-iterator/index.js
var require_stop_iteration_iterator = __commonJS({
  "node_modules/.pnpm/stop-iteration-iterator@1.0.0/node_modules/stop-iteration-iterator/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var SLOT = require_internal_slot();
    var $SyntaxError = SyntaxError;
    var $StopIteration = typeof StopIteration === "object" ? StopIteration : null;
    module2.exports = function getStopIterationIterator(origIterator) {
      if (!$StopIteration) {
        throw new $SyntaxError("this environment lacks StopIteration");
      }
      SLOT.set(origIterator, "[[Done]]", false);
      var siIterator = {
        next: function next() {
          var iterator = SLOT.get(this, "[[Iterator]]");
          var done = SLOT.get(iterator, "[[Done]]");
          try {
            return {
              done,
              value: done ? void 0 : iterator.next()
            };
          } catch (e) {
            SLOT.set(iterator, "[[Done]]", true);
            if (e !== $StopIteration) {
              throw e;
            }
            return {
              done: true,
              value: void 0
            };
          }
        }
      };
      SLOT.set(siIterator, "[[Iterator]]", origIterator);
      return siIterator;
    };
  }
});

// node_modules/.pnpm/isarray@2.0.5/node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/.pnpm/isarray@2.0.5/node_modules/isarray/index.js"(exports2, module2) {
    init_polyfill_buffer();
    var toString = {}.toString;
    module2.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/.pnpm/is-string@1.0.7/node_modules/is-string/index.js
var require_is_string = __commonJS({
  "node_modules/.pnpm/is-string@1.0.7/node_modules/is-string/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var strValue = String.prototype.valueOf;
    var tryStringObject = function tryStringObject2(value) {
      try {
        strValue.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var strClass = "[object String]";
    var hasToStringTag = require_shams2()();
    module2.exports = function isString(value) {
      if (typeof value === "string") {
        return true;
      }
      if (typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
    };
  }
});

// node_modules/.pnpm/is-map@2.0.2/node_modules/is-map/index.js
var require_is_map = __commonJS({
  "node_modules/.pnpm/is-map@2.0.2/node_modules/is-map/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var $Map = typeof Map === "function" && Map.prototype ? Map : null;
    var $Set = typeof Set === "function" && Set.prototype ? Set : null;
    var exported;
    if (!$Map) {
      exported = function isMap(x) {
        return false;
      };
    }
    var $mapHas = $Map ? Map.prototype.has : null;
    var $setHas = $Set ? Set.prototype.has : null;
    if (!exported && !$mapHas) {
      exported = function isMap(x) {
        return false;
      };
    }
    module2.exports = exported || function isMap(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $mapHas.call(x);
        if ($setHas) {
          try {
            $setHas.call(x);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $Map;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/.pnpm/is-set@2.0.2/node_modules/is-set/index.js
var require_is_set = __commonJS({
  "node_modules/.pnpm/is-set@2.0.2/node_modules/is-set/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var $Map = typeof Map === "function" && Map.prototype ? Map : null;
    var $Set = typeof Set === "function" && Set.prototype ? Set : null;
    var exported;
    if (!$Set) {
      exported = function isSet(x) {
        return false;
      };
    }
    var $mapHas = $Map ? Map.prototype.has : null;
    var $setHas = $Set ? Set.prototype.has : null;
    if (!exported && !$setHas) {
      exported = function isSet(x) {
        return false;
      };
    }
    module2.exports = exported || function isSet(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $setHas.call(x);
        if ($mapHas) {
          try {
            $mapHas.call(x);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $Set;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/.pnpm/es-get-iterator@1.1.3/node_modules/es-get-iterator/index.js
var require_es_get_iterator = __commonJS({
  "node_modules/.pnpm/es-get-iterator@1.1.3/node_modules/es-get-iterator/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var isArguments = require_is_arguments();
    var getStopIterationIterator = require_stop_iteration_iterator();
    if (require_has_symbols()() || require_shams()()) {
      $iterator = Symbol.iterator;
      module2.exports = function getIterator3(iterable) {
        if (iterable != null && typeof iterable[$iterator] !== "undefined") {
          return iterable[$iterator]();
        }
        if (isArguments(iterable)) {
          return Array.prototype[$iterator].call(iterable);
        }
      };
    } else {
      isArray = require_isarray();
      isString = require_is_string();
      GetIntrinsic = require_get_intrinsic();
      $Map = GetIntrinsic("%Map%", true);
      $Set = GetIntrinsic("%Set%", true);
      callBound = require_callBound();
      $arrayPush = callBound("Array.prototype.push");
      $charCodeAt = callBound("String.prototype.charCodeAt");
      $stringSlice = callBound("String.prototype.slice");
      advanceStringIndex = function advanceStringIndex2(S, index2) {
        var length = S.length;
        if (index2 + 1 >= length) {
          return index2 + 1;
        }
        var first2 = $charCodeAt(S, index2);
        if (first2 < 55296 || first2 > 56319) {
          return index2 + 1;
        }
        var second = $charCodeAt(S, index2 + 1);
        if (second < 56320 || second > 57343) {
          return index2 + 1;
        }
        return index2 + 2;
      };
      getArrayIterator = function getArrayIterator2(arraylike) {
        var i = 0;
        return {
          next: function next() {
            var done = i >= arraylike.length;
            var value;
            if (!done) {
              value = arraylike[i];
              i += 1;
            }
            return {
              done,
              value
            };
          }
        };
      };
      getNonCollectionIterator = function getNonCollectionIterator2(iterable, noPrimordialCollections) {
        if (isArray(iterable) || isArguments(iterable)) {
          return getArrayIterator(iterable);
        }
        if (isString(iterable)) {
          var i = 0;
          return {
            next: function next() {
              var nextIndex = advanceStringIndex(iterable, i);
              var value = $stringSlice(iterable, i, nextIndex);
              i = nextIndex;
              return {
                done: nextIndex > iterable.length,
                value
              };
            }
          };
        }
        if (noPrimordialCollections && typeof iterable["_es6-shim iterator_"] !== "undefined") {
          return iterable["_es6-shim iterator_"]();
        }
      };
      if (!$Map && !$Set) {
        module2.exports = function getIterator3(iterable) {
          if (iterable != null) {
            return getNonCollectionIterator(iterable, true);
          }
        };
      } else {
        isMap = require_is_map();
        isSet = require_is_set();
        $mapForEach = callBound("Map.prototype.forEach", true);
        $setForEach = callBound("Set.prototype.forEach", true);
        if (typeof process === "undefined" || !process.versions || !process.versions.node) {
          $mapIterator = callBound("Map.prototype.iterator", true);
          $setIterator = callBound("Set.prototype.iterator", true);
        }
        $mapAtAtIterator = callBound("Map.prototype.@@iterator", true) || callBound("Map.prototype._es6-shim iterator_", true);
        $setAtAtIterator = callBound("Set.prototype.@@iterator", true) || callBound("Set.prototype._es6-shim iterator_", true);
        getCollectionIterator = function getCollectionIterator2(iterable) {
          if (isMap(iterable)) {
            if ($mapIterator) {
              return getStopIterationIterator($mapIterator(iterable));
            }
            if ($mapAtAtIterator) {
              return $mapAtAtIterator(iterable);
            }
            if ($mapForEach) {
              var entries = [];
              $mapForEach(iterable, function(v, k) {
                $arrayPush(entries, [k, v]);
              });
              return getArrayIterator(entries);
            }
          }
          if (isSet(iterable)) {
            if ($setIterator) {
              return getStopIterationIterator($setIterator(iterable));
            }
            if ($setAtAtIterator) {
              return $setAtAtIterator(iterable);
            }
            if ($setForEach) {
              var values = [];
              $setForEach(iterable, function(v) {
                $arrayPush(values, v);
              });
              return getArrayIterator(values);
            }
          }
        };
        module2.exports = function getIterator3(iterable) {
          return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
        };
      }
    }
    var $iterator;
    var isArray;
    var isString;
    var GetIntrinsic;
    var $Map;
    var $Set;
    var callBound;
    var $arrayPush;
    var $charCodeAt;
    var $stringSlice;
    var advanceStringIndex;
    var getArrayIterator;
    var getNonCollectionIterator;
    var isMap;
    var isSet;
    var $mapForEach;
    var $setForEach;
    var $mapIterator;
    var $setIterator;
    var $mapAtAtIterator;
    var $setAtAtIterator;
    var getCollectionIterator;
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/implementation.js
var require_implementation5 = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/implementation.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var numberIsNaN = function(value) {
      return value !== value;
    };
    module2.exports = function is(a, b) {
      if (a === 0 && b === 0) {
        return 1 / a === 1 / b;
      }
      if (a === b) {
        return true;
      }
      if (numberIsNaN(a) && numberIsNaN(b)) {
        return true;
      }
      return false;
    };
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/polyfill.js
var require_polyfill3 = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/polyfill.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var implementation = require_implementation5();
    module2.exports = function getPolyfill() {
      return typeof Object.is === "function" ? Object.is : implementation;
    };
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/shim.js
var require_shim3 = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/shim.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var getPolyfill = require_polyfill3();
    var define2 = require_define_properties();
    module2.exports = function shimObjectIs() {
      var polyfill = getPolyfill();
      define2(Object, { is: polyfill }, {
        is: function testObjectIs() {
          return Object.is !== polyfill;
        }
      });
      return polyfill;
    };
  }
});

// node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/index.js
var require_object_is = __commonJS({
  "node_modules/.pnpm/object-is@1.1.5/node_modules/object-is/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var define2 = require_define_properties();
    var callBind = require_call_bind();
    var implementation = require_implementation5();
    var getPolyfill = require_polyfill3();
    var shim = require_shim3();
    var polyfill = callBind(getPolyfill(), Object);
    define2(polyfill, {
      getPolyfill,
      implementation,
      shim
    });
    module2.exports = polyfill;
  }
});

// node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/is-callable@1.2.7/node_modules/is-callable/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var fnToStr = Function.prototype.toString;
    var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
    var badArrayLike;
    var isCallableMarker;
    if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
      try {
        badArrayLike = Object.defineProperty({}, "length", {
          get: function() {
            throw isCallableMarker;
          }
        });
        isCallableMarker = {};
        reflectApply(function() {
          throw 42;
        }, null, badArrayLike);
      } catch (_) {
        if (_ !== isCallableMarker) {
          reflectApply = null;
        }
      }
    } else {
      reflectApply = null;
    }
    var constructorRegex = /^\s*class\b/;
    var isES6ClassFn = function isES6ClassFunction(value) {
      try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
      } catch (e) {
        return false;
      }
    };
    var tryFunctionObject = function tryFunctionToStr(value) {
      try {
        if (isES6ClassFn(value)) {
          return false;
        }
        fnToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var objectClass = "[object Object]";
    var fnClass = "[object Function]";
    var genClass = "[object GeneratorFunction]";
    var ddaClass = "[object HTMLAllCollection]";
    var ddaClass2 = "[object HTML document.all class]";
    var ddaClass3 = "[object HTMLCollection]";
    var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
    var isIE68 = !(0 in [,]);
    var isDDA = function isDocumentDotAll() {
      return false;
    };
    if (typeof document === "object") {
      all = document.all;
      if (toStr.call(all) === toStr.call(document.all)) {
        isDDA = function isDocumentDotAll(value) {
          if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) {
            try {
              var str = toStr.call(value);
              return (str === ddaClass || str === ddaClass2 || str === ddaClass3 || str === objectClass) && value("") == null;
            } catch (e) {
            }
          }
          return false;
        };
      }
    }
    var all;
    module2.exports = reflectApply ? function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      try {
        reflectApply(value, null, badArrayLike);
      } catch (e) {
        if (e !== isCallableMarker) {
          return false;
        }
      }
      return !isES6ClassFn(value) && tryFunctionObject(value);
    } : function isCallable(value) {
      if (isDDA(value)) {
        return true;
      }
      if (!value) {
        return false;
      }
      if (typeof value !== "function" && typeof value !== "object") {
        return false;
      }
      if (hasToStringTag) {
        return tryFunctionObject(value);
      }
      if (isES6ClassFn(value)) {
        return false;
      }
      var strClass = toStr.call(value);
      if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
        return false;
      }
      return tryFunctionObject(value);
    };
  }
});

// node_modules/.pnpm/for-each@0.3.3/node_modules/for-each/index.js
var require_for_each = __commonJS({
  "node_modules/.pnpm/for-each@0.3.3/node_modules/for-each/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var isCallable = require_is_callable();
    var toStr = Object.prototype.toString;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var forEachArray = function forEachArray2(array, iterator, receiver) {
      for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
          if (receiver == null) {
            iterator(array[i], i, array);
          } else {
            iterator.call(receiver, array[i], i, array);
          }
        }
      }
    };
    var forEachString = function forEachString2(string, iterator, receiver) {
      for (var i = 0, len = string.length; i < len; i++) {
        if (receiver == null) {
          iterator(string.charAt(i), i, string);
        } else {
          iterator.call(receiver, string.charAt(i), i, string);
        }
      }
    };
    var forEachObject = function forEachObject2(object, iterator, receiver) {
      for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
          if (receiver == null) {
            iterator(object[k], k, object);
          } else {
            iterator.call(receiver, object[k], k, object);
          }
        }
      }
    };
    var forEach2 = function forEach3(list, iterator, thisArg) {
      if (!isCallable(iterator)) {
        throw new TypeError("iterator must be a function");
      }
      var receiver;
      if (arguments.length >= 3) {
        receiver = thisArg;
      }
      if (toStr.call(list) === "[object Array]") {
        forEachArray(list, iterator, receiver);
      } else if (typeof list === "string") {
        forEachString(list, iterator, receiver);
      } else {
        forEachObject(list, iterator, receiver);
      }
    };
    module2.exports = forEach2;
  }
});

// node_modules/.pnpm/available-typed-arrays@1.0.5/node_modules/available-typed-arrays/index.js
var require_available_typed_arrays = __commonJS({
  "node_modules/.pnpm/available-typed-arrays@1.0.5/node_modules/available-typed-arrays/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var possibleNames = [
      "BigInt64Array",
      "BigUint64Array",
      "Float32Array",
      "Float64Array",
      "Int16Array",
      "Int32Array",
      "Int8Array",
      "Uint16Array",
      "Uint32Array",
      "Uint8Array",
      "Uint8ClampedArray"
    ];
    var g = typeof globalThis === "undefined" ? global : globalThis;
    module2.exports = function availableTypedArrays() {
      var out = [];
      for (var i = 0; i < possibleNames.length; i++) {
        if (typeof g[possibleNames[i]] === "function") {
          out[out.length] = possibleNames[i];
        }
      }
      return out;
    };
  }
});

// node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "node_modules/.pnpm/gopd@1.0.1/node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var GetIntrinsic = require_get_intrinsic();
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// node_modules/.pnpm/is-typed-array@1.1.10/node_modules/is-typed-array/index.js
var require_is_typed_array = __commonJS({
  "node_modules/.pnpm/is-typed-array@1.1.10/node_modules/is-typed-array/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var forEach2 = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var gOPD = require_gopd();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    };
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach2(typedArrays, function(typedArray) {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var anyTrue = false;
      forEach2(toStrTags, function(getter, typedArray) {
        if (!anyTrue) {
          try {
            anyTrue = getter.call(value) === typedArray;
          } catch (e) {
          }
        }
      });
      return anyTrue;
    };
    module2.exports = function isTypedArray(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag2 = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag2) > -1;
      }
      if (!gOPD) {
        return false;
      }
      return tryTypedArrays(value);
    };
  }
});

// node_modules/.pnpm/is-array-buffer@3.0.2/node_modules/is-array-buffer/index.js
var require_is_array_buffer = __commonJS({
  "node_modules/.pnpm/is-array-buffer@3.0.2/node_modules/is-array-buffer/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var callBind = require_call_bind();
    var callBound = require_callBound();
    var GetIntrinsic = require_get_intrinsic();
    var isTypedArray = require_is_typed_array();
    var $ArrayBuffer = GetIntrinsic("ArrayBuffer", true);
    var $Float32Array = GetIntrinsic("Float32Array", true);
    var $byteLength = callBound("ArrayBuffer.prototype.byteLength", true);
    var abSlice = $ArrayBuffer && !$byteLength && new $ArrayBuffer().slice;
    var $abSlice = abSlice && callBind(abSlice);
    module2.exports = $byteLength || $abSlice ? function isArrayBuffer(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      try {
        if ($byteLength) {
          $byteLength(obj);
        } else {
          $abSlice(obj, 0);
        }
        return true;
      } catch (e) {
        return false;
      }
    } : $Float32Array ? function IsArrayBuffer(obj) {
      try {
        return new $Float32Array(obj).buffer === obj && !isTypedArray(obj);
      } catch (e) {
        return typeof obj === "object" && e.name === "RangeError";
      }
    } : function isArrayBuffer(obj) {
      return false;
    };
  }
});

// node_modules/.pnpm/is-date-object@1.0.5/node_modules/is-date-object/index.js
var require_is_date_object = __commonJS({
  "node_modules/.pnpm/is-date-object@1.0.5/node_modules/is-date-object/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var getDay = Date.prototype.getDay;
    var tryDateObject = function tryDateGetDayCall(value) {
      try {
        getDay.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var dateClass = "[object Date]";
    var hasToStringTag = require_shams2()();
    module2.exports = function isDateObject(value) {
      if (typeof value !== "object" || value === null) {
        return false;
      }
      return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
    };
  }
});

// node_modules/.pnpm/is-regex@1.1.4/node_modules/is-regex/index.js
var require_is_regex = __commonJS({
  "node_modules/.pnpm/is-regex@1.1.4/node_modules/is-regex/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var callBound = require_callBound();
    var hasToStringTag = require_shams2()();
    var has;
    var $exec;
    var isRegexMarker;
    var badStringifier;
    if (hasToStringTag) {
      has = callBound("Object.prototype.hasOwnProperty");
      $exec = callBound("RegExp.prototype.exec");
      isRegexMarker = {};
      throwRegexMarker = function() {
        throw isRegexMarker;
      };
      badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
      };
      if (typeof Symbol.toPrimitive === "symbol") {
        badStringifier[Symbol.toPrimitive] = throwRegexMarker;
      }
    }
    var throwRegexMarker;
    var $toString = callBound("Object.prototype.toString");
    var gOPD = Object.getOwnPropertyDescriptor;
    var regexClass = "[object RegExp]";
    module2.exports = hasToStringTag ? function isRegex(value) {
      if (!value || typeof value !== "object") {
        return false;
      }
      var descriptor = gOPD(value, "lastIndex");
      var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
      if (!hasLastIndexDataProperty) {
        return false;
      }
      try {
        $exec(value, badStringifier);
      } catch (e) {
        return e === isRegexMarker;
      }
    } : function isRegex(value) {
      if (!value || typeof value !== "object" && typeof value !== "function") {
        return false;
      }
      return $toString(value) === regexClass;
    };
  }
});

// node_modules/.pnpm/is-shared-array-buffer@1.0.2/node_modules/is-shared-array-buffer/index.js
var require_is_shared_array_buffer = __commonJS({
  "node_modules/.pnpm/is-shared-array-buffer@1.0.2/node_modules/is-shared-array-buffer/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var callBound = require_callBound();
    var $byteLength = callBound("SharedArrayBuffer.prototype.byteLength", true);
    module2.exports = $byteLength ? function isSharedArrayBuffer(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      try {
        $byteLength(obj);
        return true;
      } catch (e) {
        return false;
      }
    } : function isSharedArrayBuffer(obj) {
      return false;
    };
  }
});

// node_modules/.pnpm/is-number-object@1.0.7/node_modules/is-number-object/index.js
var require_is_number_object = __commonJS({
  "node_modules/.pnpm/is-number-object@1.0.7/node_modules/is-number-object/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var numToStr = Number.prototype.toString;
    var tryNumberObject = function tryNumberObject2(value) {
      try {
        numToStr.call(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var toStr = Object.prototype.toString;
    var numClass = "[object Number]";
    var hasToStringTag = require_shams2()();
    module2.exports = function isNumberObject(value) {
      if (typeof value === "number") {
        return true;
      }
      if (typeof value !== "object") {
        return false;
      }
      return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
    };
  }
});

// node_modules/.pnpm/is-boolean-object@1.1.2/node_modules/is-boolean-object/index.js
var require_is_boolean_object = __commonJS({
  "node_modules/.pnpm/is-boolean-object@1.1.2/node_modules/is-boolean-object/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var callBound = require_callBound();
    var $boolToStr = callBound("Boolean.prototype.toString");
    var $toString = callBound("Object.prototype.toString");
    var tryBooleanObject = function booleanBrandCheck(value) {
      try {
        $boolToStr(value);
        return true;
      } catch (e) {
        return false;
      }
    };
    var boolClass = "[object Boolean]";
    var hasToStringTag = require_shams2()();
    module2.exports = function isBoolean(value) {
      if (typeof value === "boolean") {
        return true;
      }
      if (value === null || typeof value !== "object") {
        return false;
      }
      return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString(value) === boolClass;
    };
  }
});

// node_modules/.pnpm/is-symbol@1.0.4/node_modules/is-symbol/index.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/is-symbol@1.0.4/node_modules/is-symbol/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var toStr = Object.prototype.toString;
    var hasSymbols = require_has_symbols()();
    if (hasSymbols) {
      symToStr = Symbol.prototype.toString;
      symStringRegex = /^Symbol\(.*\)$/;
      isSymbolObject = function isRealSymbolObject(value) {
        if (typeof value.valueOf() !== "symbol") {
          return false;
        }
        return symStringRegex.test(symToStr.call(value));
      };
      module2.exports = function isSymbol(value) {
        if (typeof value === "symbol") {
          return true;
        }
        if (toStr.call(value) !== "[object Symbol]") {
          return false;
        }
        try {
          return isSymbolObject(value);
        } catch (e) {
          return false;
        }
      };
    } else {
      module2.exports = function isSymbol(value) {
        return false;
      };
    }
    var symToStr;
    var symStringRegex;
    var isSymbolObject;
  }
});

// node_modules/.pnpm/has-bigints@1.0.2/node_modules/has-bigints/index.js
var require_has_bigints = __commonJS({
  "node_modules/.pnpm/has-bigints@1.0.2/node_modules/has-bigints/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var $BigInt = typeof BigInt !== "undefined" && BigInt;
    module2.exports = function hasNativeBigInts() {
      return typeof $BigInt === "function" && typeof BigInt === "function" && typeof $BigInt(42) === "bigint" && typeof BigInt(42) === "bigint";
    };
  }
});

// node_modules/.pnpm/is-bigint@1.0.4/node_modules/is-bigint/index.js
var require_is_bigint = __commonJS({
  "node_modules/.pnpm/is-bigint@1.0.4/node_modules/is-bigint/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var hasBigInts = require_has_bigints()();
    if (hasBigInts) {
      bigIntValueOf = BigInt.prototype.valueOf;
      tryBigInt = function tryBigIntObject(value) {
        try {
          bigIntValueOf.call(value);
          return true;
        } catch (e) {
        }
        return false;
      };
      module2.exports = function isBigInt(value) {
        if (value === null || typeof value === "undefined" || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "function") {
          return false;
        }
        if (typeof value === "bigint") {
          return true;
        }
        return tryBigInt(value);
      };
    } else {
      module2.exports = function isBigInt(value) {
        return false;
      };
    }
    var bigIntValueOf;
    var tryBigInt;
  }
});

// node_modules/.pnpm/which-boxed-primitive@1.0.2/node_modules/which-boxed-primitive/index.js
var require_which_boxed_primitive = __commonJS({
  "node_modules/.pnpm/which-boxed-primitive@1.0.2/node_modules/which-boxed-primitive/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var isString = require_is_string();
    var isNumber = require_is_number_object();
    var isBoolean = require_is_boolean_object();
    var isSymbol = require_is_symbol();
    var isBigInt = require_is_bigint();
    module2.exports = function whichBoxedPrimitive(value) {
      if (value == null || typeof value !== "object" && typeof value !== "function") {
        return null;
      }
      if (isString(value)) {
        return "String";
      }
      if (isNumber(value)) {
        return "Number";
      }
      if (isBoolean(value)) {
        return "Boolean";
      }
      if (isSymbol(value)) {
        return "Symbol";
      }
      if (isBigInt(value)) {
        return "BigInt";
      }
    };
  }
});

// node_modules/.pnpm/is-weakmap@2.0.1/node_modules/is-weakmap/index.js
var require_is_weakmap = __commonJS({
  "node_modules/.pnpm/is-weakmap@2.0.1/node_modules/is-weakmap/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var $WeakMap = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null;
    var $WeakSet = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null;
    var exported;
    if (!$WeakMap) {
      exported = function isWeakMap(x) {
        return false;
      };
    }
    var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
    var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
    if (!exported && !$mapHas) {
      exported = function isWeakMap(x) {
        return false;
      };
    }
    module2.exports = exported || function isWeakMap(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      try {
        $mapHas.call(x, $mapHas);
        if ($setHas) {
          try {
            $setHas.call(x, $setHas);
          } catch (e) {
            return true;
          }
        }
        return x instanceof $WeakMap;
      } catch (e) {
      }
      return false;
    };
  }
});

// node_modules/.pnpm/is-weakset@2.0.2/node_modules/is-weakset/index.js
var require_is_weakset = __commonJS({
  "node_modules/.pnpm/is-weakset@2.0.2/node_modules/is-weakset/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var $WeakSet = GetIntrinsic("%WeakSet%", true);
    var $setHas = callBound("WeakSet.prototype.has", true);
    if ($setHas) {
      $mapHas = callBound("WeakMap.prototype.has", true);
      module2.exports = function isWeakSet(x) {
        if (!x || typeof x !== "object") {
          return false;
        }
        try {
          $setHas(x, $setHas);
          if ($mapHas) {
            try {
              $mapHas(x, $mapHas);
            } catch (e) {
              return true;
            }
          }
          return x instanceof $WeakSet;
        } catch (e) {
        }
        return false;
      };
    } else {
      module2.exports = function isWeakSet(x) {
        return false;
      };
    }
    var $mapHas;
  }
});

// node_modules/.pnpm/which-collection@1.0.1/node_modules/which-collection/index.js
var require_which_collection = __commonJS({
  "node_modules/.pnpm/which-collection@1.0.1/node_modules/which-collection/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var isMap = require_is_map();
    var isSet = require_is_set();
    var isWeakMap = require_is_weakmap();
    var isWeakSet = require_is_weakset();
    module2.exports = function whichCollection(value) {
      if (value && typeof value === "object") {
        if (isMap(value)) {
          return "Map";
        }
        if (isSet(value)) {
          return "Set";
        }
        if (isWeakMap(value)) {
          return "WeakMap";
        }
        if (isWeakSet(value)) {
          return "WeakSet";
        }
      }
      return false;
    };
  }
});

// node_modules/.pnpm/which-typed-array@1.1.9/node_modules/which-typed-array/index.js
var require_which_typed_array = __commonJS({
  "node_modules/.pnpm/which-typed-array@1.1.9/node_modules/which-typed-array/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var forEach2 = require_for_each();
    var availableTypedArrays = require_available_typed_arrays();
    var callBound = require_callBound();
    var gOPD = require_gopd();
    var $toString = callBound("Object.prototype.toString");
    var hasToStringTag = require_shams2()();
    var g = typeof globalThis === "undefined" ? global : globalThis;
    var typedArrays = availableTypedArrays();
    var $slice = callBound("String.prototype.slice");
    var toStrTags = {};
    var getPrototypeOf = Object.getPrototypeOf;
    if (hasToStringTag && gOPD && getPrototypeOf) {
      forEach2(typedArrays, function(typedArray) {
        if (typeof g[typedArray] === "function") {
          var arr = new g[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf(proto);
              descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
          }
        }
      });
    }
    var tryTypedArrays = function tryAllTypedArrays(value) {
      var foundName = false;
      forEach2(toStrTags, function(getter, typedArray) {
        if (!foundName) {
          try {
            var name = getter.call(value);
            if (name === typedArray) {
              foundName = name;
            }
          } catch (e) {
          }
        }
      });
      return foundName;
    };
    var isTypedArray = require_is_typed_array();
    module2.exports = function whichTypedArray(value) {
      if (!isTypedArray(value)) {
        return false;
      }
      if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        return $slice($toString(value), 8, -1);
      }
      return tryTypedArrays(value);
    };
  }
});

// node_modules/.pnpm/array-buffer-byte-length@1.0.0/node_modules/array-buffer-byte-length/index.js
var require_array_buffer_byte_length = __commonJS({
  "node_modules/.pnpm/array-buffer-byte-length@1.0.0/node_modules/array-buffer-byte-length/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var callBound = require_callBound();
    var $byteLength = callBound("ArrayBuffer.prototype.byteLength", true);
    var isArrayBuffer = require_is_array_buffer();
    module2.exports = function byteLength(ab) {
      if (!isArrayBuffer(ab)) {
        return NaN;
      }
      return $byteLength ? $byteLength(ab) : ab.byteLength;
    };
  }
});

// node_modules/.pnpm/deep-equal@2.2.1/node_modules/deep-equal/index.js
var require_deep_equal = __commonJS({
  "node_modules/.pnpm/deep-equal@2.2.1/node_modules/deep-equal/index.js"(exports2, module2) {
    "use strict";
    init_polyfill_buffer();
    var assign2 = require_object();
    var callBound = require_callBound();
    var flags = require_regexp_prototype();
    var GetIntrinsic = require_get_intrinsic();
    var getIterator3 = require_es_get_iterator();
    var getSideChannel = require_side_channel();
    var is = require_object_is();
    var isArguments = require_is_arguments();
    var isArray = require_isarray();
    var isArrayBuffer = require_is_array_buffer();
    var isDate = require_is_date_object();
    var isRegex = require_is_regex();
    var isSharedArrayBuffer = require_is_shared_array_buffer();
    var objectKeys = require_object_keys();
    var whichBoxedPrimitive = require_which_boxed_primitive();
    var whichCollection = require_which_collection();
    var whichTypedArray = require_which_typed_array();
    var byteLength = require_array_buffer_byte_length();
    var sabByteLength = callBound("SharedArrayBuffer.prototype.byteLength", true);
    var $getTime = callBound("Date.prototype.getTime");
    var gPO = Object.getPrototypeOf;
    var $objToString = callBound("Object.prototype.toString");
    var $Set = GetIntrinsic("%Set%", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSize = callBound("Map.prototype.size", true);
    var $setAdd = callBound("Set.prototype.add", true);
    var $setDelete = callBound("Set.prototype.delete", true);
    var $setHas = callBound("Set.prototype.has", true);
    var $setSize = callBound("Set.prototype.size", true);
    function setHasEqualElement(set, val1, opts, channel) {
      var i = getIterator3(set);
      var result;
      while ((result = i.next()) && !result.done) {
        if (internalDeepEqual(val1, result.value, opts, channel)) {
          $setDelete(set, result.value);
          return true;
        }
      }
      return false;
    }
    function findLooseMatchingPrimitives(prim) {
      if (typeof prim === "undefined") {
        return null;
      }
      if (typeof prim === "object") {
        return void 0;
      }
      if (typeof prim === "symbol") {
        return false;
      }
      if (typeof prim === "string" || typeof prim === "number") {
        return +prim === +prim;
      }
      return true;
    }
    function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      var curB = $mapGet(b, altValue);
      var looseOpts = assign2({}, opts, { strict: false });
      if (typeof curB === "undefined" && !$mapHas(b, altValue) || !internalDeepEqual(item, curB, looseOpts, channel)) {
        return false;
      }
      return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
    }
    function setMightHaveLoosePrim(a, b, prim) {
      var altValue = findLooseMatchingPrimitives(prim);
      if (altValue != null) {
        return altValue;
      }
      return $setHas(b, altValue) && !$setHas(a, altValue);
    }
    function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
      var i = getIterator3(set);
      var result;
      var key2;
      while ((result = i.next()) && !result.done) {
        key2 = result.value;
        if (
          // eslint-disable-next-line no-use-before-define
          internalDeepEqual(key1, key2, opts, channel) && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
        ) {
          $setDelete(set, key2);
          return true;
        }
      }
      return false;
    }
    function internalDeepEqual(actual, expected, options, channel) {
      var opts = options || {};
      if (opts.strict ? is(actual, expected) : actual === expected) {
        return true;
      }
      var actualBoxed = whichBoxedPrimitive(actual);
      var expectedBoxed = whichBoxedPrimitive(expected);
      if (actualBoxed !== expectedBoxed) {
        return false;
      }
      if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") {
        return opts.strict ? is(actual, expected) : actual == expected;
      }
      var hasActual = channel.has(actual);
      var hasExpected = channel.has(expected);
      var sentinel;
      if (hasActual && hasExpected) {
        if (channel.get(actual) === channel.get(expected)) {
          return true;
        }
      } else {
        sentinel = {};
      }
      if (!hasActual) {
        channel.set(actual, sentinel);
      }
      if (!hasExpected) {
        channel.set(expected, sentinel);
      }
      return objEquiv(actual, expected, opts, channel);
    }
    function isBuffer(x) {
      if (!x || typeof x !== "object" || typeof x.length !== "number") {
        return false;
      }
      if (typeof x.copy !== "function" || typeof x.slice !== "function") {
        return false;
      }
      if (x.length > 0 && typeof x[0] !== "number") {
        return false;
      }
      return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
    }
    function setEquiv(a, b, opts, channel) {
      if ($setSize(a) !== $setSize(b)) {
        return false;
      }
      var iA = getIterator3(a);
      var iB = getIterator3(b);
      var resultA;
      var resultB;
      var set;
      while ((resultA = iA.next()) && !resultA.done) {
        if (resultA.value && typeof resultA.value === "object") {
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, resultA.value);
        } else if (!$setHas(b, resultA.value)) {
          if (opts.strict) {
            return false;
          }
          if (!setMightHaveLoosePrim(a, b, resultA.value)) {
            return false;
          }
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, resultA.value);
        }
      }
      if (set) {
        while ((resultB = iB.next()) && !resultB.done) {
          if (resultB.value && typeof resultB.value === "object") {
            if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
              return false;
            }
          } else if (!opts.strict && !$setHas(a, resultB.value) && !setHasEqualElement(set, resultB.value, opts.strict, channel)) {
            return false;
          }
        }
        return $setSize(set) === 0;
      }
      return true;
    }
    function mapEquiv(a, b, opts, channel) {
      if ($mapSize(a) !== $mapSize(b)) {
        return false;
      }
      var iA = getIterator3(a);
      var iB = getIterator3(b);
      var resultA;
      var resultB;
      var set;
      var key2;
      var item1;
      var item2;
      while ((resultA = iA.next()) && !resultA.done) {
        key2 = resultA.value[0];
        item1 = resultA.value[1];
        if (key2 && typeof key2 === "object") {
          if (!set) {
            set = new $Set();
          }
          $setAdd(set, key2);
        } else {
          item2 = $mapGet(b, key2);
          if (typeof item2 === "undefined" && !$mapHas(b, key2) || !internalDeepEqual(item1, item2, opts, channel)) {
            if (opts.strict) {
              return false;
            }
            if (!mapMightHaveLoosePrim(a, b, key2, item1, opts, channel)) {
              return false;
            }
            if (!set) {
              set = new $Set();
            }
            $setAdd(set, key2);
          }
        }
      }
      if (set) {
        while ((resultB = iB.next()) && !resultB.done) {
          key2 = resultB.value[0];
          item2 = resultB.value[1];
          if (key2 && typeof key2 === "object") {
            if (!mapHasEqualEntry(set, a, key2, item2, opts, channel)) {
              return false;
            }
          } else if (!opts.strict && (!a.has(key2) || !internalDeepEqual($mapGet(a, key2), item2, opts, channel)) && !mapHasEqualEntry(set, a, key2, item2, assign2({}, opts, { strict: false }), channel)) {
            return false;
          }
        }
        return $setSize(set) === 0;
      }
      return true;
    }
    function objEquiv(a, b, opts, channel) {
      var i, key2;
      if (typeof a !== typeof b) {
        return false;
      }
      if (a == null || b == null) {
        return false;
      }
      if ($objToString(a) !== $objToString(b)) {
        return false;
      }
      if (isArguments(a) !== isArguments(b)) {
        return false;
      }
      var aIsArray = isArray(a);
      var bIsArray = isArray(b);
      if (aIsArray !== bIsArray) {
        return false;
      }
      var aIsError = a instanceof Error;
      var bIsError = b instanceof Error;
      if (aIsError !== bIsError) {
        return false;
      }
      if (aIsError || bIsError) {
        if (a.name !== b.name || a.message !== b.message) {
          return false;
        }
      }
      var aIsRegex = isRegex(a);
      var bIsRegex = isRegex(b);
      if (aIsRegex !== bIsRegex) {
        return false;
      }
      if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
        return false;
      }
      var aIsDate = isDate(a);
      var bIsDate = isDate(b);
      if (aIsDate !== bIsDate) {
        return false;
      }
      if (aIsDate || bIsDate) {
        if ($getTime(a) !== $getTime(b)) {
          return false;
        }
      }
      if (opts.strict && gPO && gPO(a) !== gPO(b)) {
        return false;
      }
      var aWhich = whichTypedArray(a);
      var bWhich = whichTypedArray(b);
      if ((aWhich || bWhich) && aWhich !== bWhich) {
        return false;
      }
      var aIsBuffer = isBuffer(a);
      var bIsBuffer = isBuffer(b);
      if (aIsBuffer !== bIsBuffer) {
        return false;
      }
      if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) {
          return false;
        }
        for (i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            return false;
          }
        }
        return true;
      }
      var aIsArrayBuffer = isArrayBuffer(a);
      var bIsArrayBuffer = isArrayBuffer(b);
      if (aIsArrayBuffer !== bIsArrayBuffer) {
        return false;
      }
      if (aIsArrayBuffer || bIsArrayBuffer) {
        if (byteLength(a) !== byteLength(b)) {
          return false;
        }
        return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
      }
      var aIsSAB = isSharedArrayBuffer(a);
      var bIsSAB = isSharedArrayBuffer(b);
      if (aIsSAB !== bIsSAB) {
        return false;
      }
      if (aIsSAB || bIsSAB) {
        if (sabByteLength(a) !== sabByteLength(b)) {
          return false;
        }
        return typeof Uint8Array === "function" && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
      }
      if (typeof a !== typeof b) {
        return false;
      }
      var ka = objectKeys(a);
      var kb = objectKeys(b);
      if (ka.length !== kb.length) {
        return false;
      }
      ka.sort();
      kb.sort();
      for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i]) {
          return false;
        }
      }
      for (i = ka.length - 1; i >= 0; i--) {
        key2 = ka[i];
        if (!internalDeepEqual(a[key2], b[key2], opts, channel)) {
          return false;
        }
      }
      var aCollection = whichCollection(a);
      var bCollection = whichCollection(b);
      if (aCollection !== bCollection) {
        return false;
      }
      if (aCollection === "Set" || bCollection === "Set") {
        return setEquiv(a, b, opts, channel);
      }
      if (aCollection === "Map") {
        return mapEquiv(a, b, opts, channel);
      }
      return true;
    }
    module2.exports = function deepEqual2(a, b, opts) {
      return internalDeepEqual(a, b, opts, getSideChannel());
    };
  }
});

// node_modules/.pnpm/js-sha256@0.9.0/node_modules/js-sha256/src/sha256.js
var require_sha256 = __commonJS({
  "node_modules/.pnpm/js-sha256@0.9.0/node_modules/js-sha256/src/sha256.js"(exports, module) {
    init_polyfill_buffer();
    (function() {
      "use strict";
      var ERROR = "input is invalid type";
      var WINDOW = typeof window === "object";
      var root = WINDOW ? window : {};
      if (root.JS_SHA256_NO_WINDOW) {
        WINDOW = false;
      }
      var WEB_WORKER = !WINDOW && typeof self === "object";
      var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === "object" && process.versions && process.versions.node;
      if (NODE_JS) {
        root = global;
      } else if (WEB_WORKER) {
        root = self;
      }
      var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && typeof module === "object" && module.exports;
      var AMD = typeof define === "function" && define.amd;
      var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== "undefined";
      var HEX_CHARS = "0123456789abcdef".split("");
      var EXTRA = [-2147483648, 8388608, 32768, 128];
      var SHIFT = [24, 16, 8, 0];
      var K = [
        1116352408,
        1899447441,
        3049323471,
        3921009573,
        961987163,
        1508970993,
        2453635748,
        2870763221,
        3624381080,
        310598401,
        607225278,
        1426881987,
        1925078388,
        2162078206,
        2614888103,
        3248222580,
        3835390401,
        4022224774,
        264347078,
        604807628,
        770255983,
        1249150122,
        1555081692,
        1996064986,
        2554220882,
        2821834349,
        2952996808,
        3210313671,
        3336571891,
        3584528711,
        113926993,
        338241895,
        666307205,
        773529912,
        1294757372,
        1396182291,
        1695183700,
        1986661051,
        2177026350,
        2456956037,
        2730485921,
        2820302411,
        3259730800,
        3345764771,
        3516065817,
        3600352804,
        4094571909,
        275423344,
        430227734,
        506948616,
        659060556,
        883997877,
        958139571,
        1322822218,
        1537002063,
        1747873779,
        1955562222,
        2024104815,
        2227730452,
        2361852424,
        2428436474,
        2756734187,
        3204031479,
        3329325298
      ];
      var OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"];
      var blocks = [];
      if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
        Array.isArray = function(obj) {
          return Object.prototype.toString.call(obj) === "[object Array]";
        };
      }
      if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
        ArrayBuffer.isView = function(obj) {
          return typeof obj === "object" && obj.buffer && obj.buffer.constructor === ArrayBuffer;
        };
      }
      var createOutputMethod = function(outputType, is2242) {
        return function(message) {
          return new Sha256(is2242, true).update(message)[outputType]();
        };
      };
      var createMethod = function(is2242) {
        var method2 = createOutputMethod("hex", is2242);
        if (NODE_JS) {
          method2 = nodeWrap(method2, is2242);
        }
        method2.create = function() {
          return new Sha256(is2242);
        };
        method2.update = function(message) {
          return method2.create().update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createOutputMethod(type, is2242);
        }
        return method2;
      };
      var nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var algorithm = is224 ? "sha224" : "sha256";
        var nodeMethod = function(message) {
          if (typeof message === "string") {
            return crypto.createHash(algorithm).update(message, "utf8").digest("hex");
          } else {
            if (message === null || message === void 0) {
              throw new Error(ERROR);
            } else if (message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            }
          }
          if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
            return crypto.createHash(algorithm).update(new Buffer(message)).digest("hex");
          } else {
            return method(message);
          }
        };
        return nodeMethod;
      };
      var createHmacOutputMethod = function(outputType, is2242) {
        return function(key2, message) {
          return new HmacSha256(key2, is2242, true).update(message)[outputType]();
        };
      };
      var createHmacMethod = function(is2242) {
        var method2 = createHmacOutputMethod("hex", is2242);
        method2.create = function(key2) {
          return new HmacSha256(key2, is2242);
        };
        method2.update = function(key2, message) {
          return method2.create(key2).update(message);
        };
        for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
          var type = OUTPUT_TYPES[i];
          method2[type] = createHmacOutputMethod(type, is2242);
        }
        return method2;
      };
      function Sha256(is2242, sharedMemory) {
        if (sharedMemory) {
          blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
          this.blocks = blocks;
        } else {
          this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (is2242) {
          this.h0 = 3238371032;
          this.h1 = 914150663;
          this.h2 = 812702999;
          this.h3 = 4144912697;
          this.h4 = 4290775857;
          this.h5 = 1750603025;
          this.h6 = 1694076839;
          this.h7 = 3204075428;
        } else {
          this.h0 = 1779033703;
          this.h1 = 3144134277;
          this.h2 = 1013904242;
          this.h3 = 2773480762;
          this.h4 = 1359893119;
          this.h5 = 2600822924;
          this.h6 = 528734635;
          this.h7 = 1541459225;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is2242;
      }
      Sha256.prototype.update = function(message) {
        if (this.finalized) {
          return;
        }
        var notString, type = typeof message;
        if (type !== "string") {
          if (type === "object") {
            if (message === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
              message = new Uint8Array(message);
            } else if (!Array.isArray(message)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
          notString = true;
        }
        var code, index2 = 0, i, length = message.length, blocks2 = this.blocks;
        while (index2 < length) {
          if (this.hashed) {
            this.hashed = false;
            blocks2[0] = this.block;
            blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
          }
          if (notString) {
            for (i = this.start; index2 < length && i < 64; ++index2) {
              blocks2[i >> 2] |= message[index2] << SHIFT[i++ & 3];
            }
          } else {
            for (i = this.start; index2 < length && i < 64; ++index2) {
              code = message.charCodeAt(index2);
              if (code < 128) {
                blocks2[i >> 2] |= code << SHIFT[i++ & 3];
              } else if (code < 2048) {
                blocks2[i >> 2] |= (192 | code >> 6) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else if (code < 55296 || code >= 57344) {
                blocks2[i >> 2] |= (224 | code >> 12) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              } else {
                code = 65536 + ((code & 1023) << 10 | message.charCodeAt(++index2) & 1023);
                blocks2[i >> 2] |= (240 | code >> 18) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 12 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code >> 6 & 63) << SHIFT[i++ & 3];
                blocks2[i >> 2] |= (128 | code & 63) << SHIFT[i++ & 3];
              }
            }
          }
          this.lastByteIndex = i;
          this.bytes += i - this.start;
          if (i >= 64) {
            this.block = blocks2[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
          } else {
            this.start = i;
          }
        }
        if (this.bytes > 4294967295) {
          this.hBytes += this.bytes / 4294967296 << 0;
          this.bytes = this.bytes % 4294967296;
        }
        return this;
      };
      Sha256.prototype.finalize = function() {
        if (this.finalized) {
          return;
        }
        this.finalized = true;
        var blocks2 = this.blocks, i = this.lastByteIndex;
        blocks2[16] = this.block;
        blocks2[i >> 2] |= EXTRA[i & 3];
        this.block = blocks2[16];
        if (i >= 56) {
          if (!this.hashed) {
            this.hash();
          }
          blocks2[0] = this.block;
          blocks2[16] = blocks2[1] = blocks2[2] = blocks2[3] = blocks2[4] = blocks2[5] = blocks2[6] = blocks2[7] = blocks2[8] = blocks2[9] = blocks2[10] = blocks2[11] = blocks2[12] = blocks2[13] = blocks2[14] = blocks2[15] = 0;
        }
        blocks2[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks2[15] = this.bytes << 3;
        this.hash();
      };
      Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks2 = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for (j = 16; j < 64; ++j) {
          t1 = blocks2[j - 15];
          s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
          t1 = blocks2[j - 2];
          s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
          blocks2[j] = blocks2[j - 16] + s0 + blocks2[j - 7] + s1 << 0;
        }
        bc = b & c;
        for (j = 0; j < 64; j += 4) {
          if (this.first) {
            if (this.is224) {
              ab = 300032;
              t1 = blocks2[0] - 1413257819;
              h = t1 - 150054599 << 0;
              d = t1 + 24177077 << 0;
            } else {
              ab = 704751109;
              t1 = blocks2[0] - 210244248;
              h = t1 - 1521486534 << 0;
              d = t1 + 143694565 << 0;
            }
            this.first = false;
          } else {
            s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
            s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
            ab = a & b;
            maj = ab ^ a & c ^ bc;
            ch = e & f ^ ~e & g;
            t1 = h + s1 + ch + K[j] + blocks2[j];
            t2 = s0 + maj;
            h = d + t1 << 0;
            d = t1 + t2 << 0;
          }
          s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
          s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
          da = d & a;
          maj = da ^ d & b ^ ab;
          ch = h & e ^ ~h & f;
          t1 = g + s1 + ch + K[j + 1] + blocks2[j + 1];
          t2 = s0 + maj;
          g = c + t1 << 0;
          c = t1 + t2 << 0;
          s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
          s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
          cd = c & d;
          maj = cd ^ c & a ^ da;
          ch = g & h ^ ~g & e;
          t1 = f + s1 + ch + K[j + 2] + blocks2[j + 2];
          t2 = s0 + maj;
          f = b + t1 << 0;
          b = t1 + t2 << 0;
          s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
          s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
          bc = b & c;
          maj = bc ^ b & d ^ cd;
          ch = f & g ^ ~f & h;
          t1 = e + s1 + ch + K[j + 3] + blocks2[j + 3];
          t2 = s0 + maj;
          e = a + t1 << 0;
          a = t1 + t2 << 0;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
      };
      Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >> 28 & 15] + HEX_CHARS[h0 >> 24 & 15] + HEX_CHARS[h0 >> 20 & 15] + HEX_CHARS[h0 >> 16 & 15] + HEX_CHARS[h0 >> 12 & 15] + HEX_CHARS[h0 >> 8 & 15] + HEX_CHARS[h0 >> 4 & 15] + HEX_CHARS[h0 & 15] + HEX_CHARS[h1 >> 28 & 15] + HEX_CHARS[h1 >> 24 & 15] + HEX_CHARS[h1 >> 20 & 15] + HEX_CHARS[h1 >> 16 & 15] + HEX_CHARS[h1 >> 12 & 15] + HEX_CHARS[h1 >> 8 & 15] + HEX_CHARS[h1 >> 4 & 15] + HEX_CHARS[h1 & 15] + HEX_CHARS[h2 >> 28 & 15] + HEX_CHARS[h2 >> 24 & 15] + HEX_CHARS[h2 >> 20 & 15] + HEX_CHARS[h2 >> 16 & 15] + HEX_CHARS[h2 >> 12 & 15] + HEX_CHARS[h2 >> 8 & 15] + HEX_CHARS[h2 >> 4 & 15] + HEX_CHARS[h2 & 15] + HEX_CHARS[h3 >> 28 & 15] + HEX_CHARS[h3 >> 24 & 15] + HEX_CHARS[h3 >> 20 & 15] + HEX_CHARS[h3 >> 16 & 15] + HEX_CHARS[h3 >> 12 & 15] + HEX_CHARS[h3 >> 8 & 15] + HEX_CHARS[h3 >> 4 & 15] + HEX_CHARS[h3 & 15] + HEX_CHARS[h4 >> 28 & 15] + HEX_CHARS[h4 >> 24 & 15] + HEX_CHARS[h4 >> 20 & 15] + HEX_CHARS[h4 >> 16 & 15] + HEX_CHARS[h4 >> 12 & 15] + HEX_CHARS[h4 >> 8 & 15] + HEX_CHARS[h4 >> 4 & 15] + HEX_CHARS[h4 & 15] + HEX_CHARS[h5 >> 28 & 15] + HEX_CHARS[h5 >> 24 & 15] + HEX_CHARS[h5 >> 20 & 15] + HEX_CHARS[h5 >> 16 & 15] + HEX_CHARS[h5 >> 12 & 15] + HEX_CHARS[h5 >> 8 & 15] + HEX_CHARS[h5 >> 4 & 15] + HEX_CHARS[h5 & 15] + HEX_CHARS[h6 >> 28 & 15] + HEX_CHARS[h6 >> 24 & 15] + HEX_CHARS[h6 >> 20 & 15] + HEX_CHARS[h6 >> 16 & 15] + HEX_CHARS[h6 >> 12 & 15] + HEX_CHARS[h6 >> 8 & 15] + HEX_CHARS[h6 >> 4 & 15] + HEX_CHARS[h6 & 15];
        if (!this.is224) {
          hex += HEX_CHARS[h7 >> 28 & 15] + HEX_CHARS[h7 >> 24 & 15] + HEX_CHARS[h7 >> 20 & 15] + HEX_CHARS[h7 >> 16 & 15] + HEX_CHARS[h7 >> 12 & 15] + HEX_CHARS[h7 >> 8 & 15] + HEX_CHARS[h7 >> 4 & 15] + HEX_CHARS[h7 & 15];
        }
        return hex;
      };
      Sha256.prototype.toString = Sha256.prototype.hex;
      Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
          h0 >> 24 & 255,
          h0 >> 16 & 255,
          h0 >> 8 & 255,
          h0 & 255,
          h1 >> 24 & 255,
          h1 >> 16 & 255,
          h1 >> 8 & 255,
          h1 & 255,
          h2 >> 24 & 255,
          h2 >> 16 & 255,
          h2 >> 8 & 255,
          h2 & 255,
          h3 >> 24 & 255,
          h3 >> 16 & 255,
          h3 >> 8 & 255,
          h3 & 255,
          h4 >> 24 & 255,
          h4 >> 16 & 255,
          h4 >> 8 & 255,
          h4 & 255,
          h5 >> 24 & 255,
          h5 >> 16 & 255,
          h5 >> 8 & 255,
          h5 & 255,
          h6 >> 24 & 255,
          h6 >> 16 & 255,
          h6 >> 8 & 255,
          h6 & 255
        ];
        if (!this.is224) {
          arr.push(h7 >> 24 & 255, h7 >> 16 & 255, h7 >> 8 & 255, h7 & 255);
        }
        return arr;
      };
      Sha256.prototype.array = Sha256.prototype.digest;
      Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer2 = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer2);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) {
          dataView.setUint32(28, this.h7);
        }
        return buffer2;
      };
      function HmacSha256(key2, is2242, sharedMemory) {
        var i, type = typeof key2;
        if (type === "string") {
          var bytes = [], length = key2.length, index2 = 0, code;
          for (i = 0; i < length; ++i) {
            code = key2.charCodeAt(i);
            if (code < 128) {
              bytes[index2++] = code;
            } else if (code < 2048) {
              bytes[index2++] = 192 | code >> 6;
              bytes[index2++] = 128 | code & 63;
            } else if (code < 55296 || code >= 57344) {
              bytes[index2++] = 224 | code >> 12;
              bytes[index2++] = 128 | code >> 6 & 63;
              bytes[index2++] = 128 | code & 63;
            } else {
              code = 65536 + ((code & 1023) << 10 | key2.charCodeAt(++i) & 1023);
              bytes[index2++] = 240 | code >> 18;
              bytes[index2++] = 128 | code >> 12 & 63;
              bytes[index2++] = 128 | code >> 6 & 63;
              bytes[index2++] = 128 | code & 63;
            }
          }
          key2 = bytes;
        } else {
          if (type === "object") {
            if (key2 === null) {
              throw new Error(ERROR);
            } else if (ARRAY_BUFFER && key2.constructor === ArrayBuffer) {
              key2 = new Uint8Array(key2);
            } else if (!Array.isArray(key2)) {
              if (!ARRAY_BUFFER || !ArrayBuffer.isView(key2)) {
                throw new Error(ERROR);
              }
            }
          } else {
            throw new Error(ERROR);
          }
        }
        if (key2.length > 64) {
          key2 = new Sha256(is2242, true).update(key2).array();
        }
        var oKeyPad = [], iKeyPad = [];
        for (i = 0; i < 64; ++i) {
          var b = key2[i] || 0;
          oKeyPad[i] = 92 ^ b;
          iKeyPad[i] = 54 ^ b;
        }
        Sha256.call(this, is2242, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
      }
      HmacSha256.prototype = new Sha256();
      HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
          this.inner = false;
          var innerHash = this.array();
          Sha256.call(this, this.is224, this.sharedMemory);
          this.update(this.oKeyPad);
          this.update(innerHash);
          Sha256.prototype.finalize.call(this);
        }
      };
      var exports = createMethod();
      exports.sha256 = exports;
      exports.sha224 = createMethod(true);
      exports.sha256.hmac = createHmacMethod();
      exports.sha224.hmac = createHmacMethod(true);
      if (COMMON_JS) {
        module.exports = exports;
      } else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) {
          define(function() {
            return exports;
          });
        }
      }
    })();
  }
});

// node_modules/.pnpm/hogan.js@3.0.2/node_modules/hogan.js/lib/compiler.js
var require_compiler = __commonJS({
  "node_modules/.pnpm/hogan.js@3.0.2/node_modules/hogan.js/lib/compiler.js"(exports2) {
    init_polyfill_buffer();
    (function(Hogan4) {
      var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
      Hogan4.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        "$": 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        "_v": 9,
        "{": 10,
        "&": 11,
        "_t": 12
      };
      Hogan4.scan = function scan(text2, delimiters) {
        var len = text2.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag2 = null, buf = "", tokens = [], seenTag = false, i = 0, lineStart = 0, otag = "{{", ctag = "}}";
        function addBuf() {
          if (buf.length > 0) {
            tokens.push({ tag: "_t", text: new String(buf) });
            buf = "";
          }
        }
        function lineIsWhitespace() {
          var isAllWhitespace = true;
          for (var j = lineStart; j < tokens.length; j++) {
            isAllWhitespace = Hogan4.tags[tokens[j].tag] < Hogan4.tags["_v"] || tokens[j].tag == "_t" && tokens[j].text.match(rIsWhitespace) === null;
            if (!isAllWhitespace) {
              return false;
            }
          }
          return isAllWhitespace;
        }
        function filterLine(haveSeenTag, noNewLine) {
          addBuf();
          if (haveSeenTag && lineIsWhitespace()) {
            for (var j = lineStart, next; j < tokens.length; j++) {
              if (tokens[j].text) {
                if ((next = tokens[j + 1]) && next.tag == ">") {
                  next.indent = tokens[j].text.toString();
                }
                tokens.splice(j, 1);
              }
            }
          } else if (!noNewLine) {
            tokens.push({ tag: "\n" });
          }
          seenTag = false;
          lineStart = tokens.length;
        }
        function changeDelimiters(text3, index2) {
          var close = "=" + ctag, closeIndex = text3.indexOf(close, index2), delimiters2 = trim(
            text3.substring(text3.indexOf("=", index2) + 1, closeIndex)
          ).split(" ");
          otag = delimiters2[0];
          ctag = delimiters2[delimiters2.length - 1];
          return closeIndex + close.length - 1;
        }
        if (delimiters) {
          delimiters = delimiters.split(" ");
          otag = delimiters[0];
          ctag = delimiters[1];
        }
        for (i = 0; i < len; i++) {
          if (state == IN_TEXT) {
            if (tagChange(otag, text2, i)) {
              --i;
              addBuf();
              state = IN_TAG_TYPE;
            } else {
              if (text2.charAt(i) == "\n") {
                filterLine(seenTag);
              } else {
                buf += text2.charAt(i);
              }
            }
          } else if (state == IN_TAG_TYPE) {
            i += otag.length - 1;
            tag2 = Hogan4.tags[text2.charAt(i + 1)];
            tagType = tag2 ? text2.charAt(i + 1) : "_v";
            if (tagType == "=") {
              i = changeDelimiters(text2, i);
              state = IN_TEXT;
            } else {
              if (tag2) {
                i++;
              }
              state = IN_TAG;
            }
            seenTag = i;
          } else {
            if (tagChange(ctag, text2, i)) {
              tokens.push({
                tag: tagType,
                n: trim(buf),
                otag,
                ctag,
                i: tagType == "/" ? seenTag - otag.length : i + ctag.length
              });
              buf = "";
              i += ctag.length - 1;
              state = IN_TEXT;
              if (tagType == "{") {
                if (ctag == "}}") {
                  i++;
                } else {
                  cleanTripleStache(tokens[tokens.length - 1]);
                }
              }
            } else {
              buf += text2.charAt(i);
            }
          }
        }
        filterLine(seenTag, true);
        return tokens;
      };
      function cleanTripleStache(token) {
        if (token.n.substr(token.n.length - 1) === "}") {
          token.n = token.n.substring(0, token.n.length - 1);
        }
      }
      function trim(s) {
        if (s.trim) {
          return s.trim();
        }
        return s.replace(/^\s*|\s*$/g, "");
      }
      function tagChange(tag2, text2, index2) {
        if (text2.charAt(index2) != tag2.charAt(0)) {
          return false;
        }
        for (var i = 1, l = tag2.length; i < l; i++) {
          if (text2.charAt(index2 + i) != tag2.charAt(i)) {
            return false;
          }
        }
        return true;
      }
      var allowedInSuper = { "_t": true, "\n": true, "$": true, "/": true };
      function buildTree(tokens, kind, stack, customTags) {
        var instructions = [], opener = null, tail = null, token = null;
        tail = stack[stack.length - 1];
        while (tokens.length > 0) {
          token = tokens.shift();
          if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) {
            throw new Error("Illegal content in < super tag.");
          }
          if (Hogan4.tags[token.tag] <= Hogan4.tags["$"] || isOpener(token, customTags)) {
            stack.push(token);
            token.nodes = buildTree(tokens, token.tag, stack, customTags);
          } else if (token.tag == "/") {
            if (stack.length === 0) {
              throw new Error("Closing tag without opener: /" + token.n);
            }
            opener = stack.pop();
            if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
              throw new Error("Nesting error: " + opener.n + " vs. " + token.n);
            }
            opener.end = token.i;
            return instructions;
          } else if (token.tag == "\n") {
            token.last = tokens.length == 0 || tokens[0].tag == "\n";
          }
          instructions.push(token);
        }
        if (stack.length > 0) {
          throw new Error("missing closing tag: " + stack.pop().n);
        }
        return instructions;
      }
      function isOpener(token, tags) {
        for (var i = 0, l = tags.length; i < l; i++) {
          if (tags[i].o == token.n) {
            token.tag = "#";
            return true;
          }
        }
      }
      function isCloser(close, open, tags) {
        for (var i = 0, l = tags.length; i < l; i++) {
          if (tags[i].c == close && tags[i].o == open) {
            return true;
          }
        }
      }
      function stringifySubstitutions(obj) {
        var items = [];
        for (var key2 in obj) {
          items.push('"' + esc(key2) + '": function(c,p,t,i) {' + obj[key2] + "}");
        }
        return "{ " + items.join(",") + " }";
      }
      function stringifyPartials(codeObj) {
        var partials = [];
        for (var key2 in codeObj.partials) {
          partials.push('"' + esc(key2) + '":{name:"' + esc(codeObj.partials[key2].name) + '", ' + stringifyPartials(codeObj.partials[key2]) + "}");
        }
        return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
      }
      Hogan4.stringify = function(codeObj, text2, options) {
        return "{code: function (c,p,i) { " + Hogan4.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
      };
      var serialNo = 0;
      Hogan4.generate = function(tree, text2, options) {
        serialNo = 0;
        var context = { code: "", subs: {}, partials: {} };
        Hogan4.walk(tree, context);
        if (options.asString) {
          return this.stringify(context, text2, options);
        }
        return this.makeTemplate(context, text2, options);
      };
      Hogan4.wrapMain = function(code) {
        return 'var t=this;t.b(i=i||"");' + code + "return t.fl();";
      };
      Hogan4.template = Hogan4.Template;
      Hogan4.makeTemplate = function(codeObj, text2, options) {
        var template = this.makePartials(codeObj);
        template.code = new Function("c", "p", "i", this.wrapMain(codeObj.code));
        return new this.template(template, text2, this, options);
      };
      Hogan4.makePartials = function(codeObj) {
        var key2, template = { subs: {}, partials: codeObj.partials, name: codeObj.name };
        for (key2 in template.partials) {
          template.partials[key2] = this.makePartials(template.partials[key2]);
        }
        for (key2 in codeObj.subs) {
          template.subs[key2] = new Function("c", "p", "t", "i", codeObj.subs[key2]);
        }
        return template;
      };
      function esc(s) {
        return s.replace(rSlash, "\\\\").replace(rQuot, '\\"').replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029");
      }
      function chooseMethod(s) {
        return ~s.indexOf(".") ? "d" : "f";
      }
      function createPartial(node, context) {
        var prefix = "<" + (context.prefix || "");
        var sym = prefix + node.n + serialNo++;
        context.partials[sym] = { name: node.n, partials: {} };
        context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || "") + '"));';
        return sym;
      }
      Hogan4.codegen = {
        "#": function(node, context) {
          context.code += "if(t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,0,' + node.i + "," + node.end + ',"' + node.otag + " " + node.ctag + '")){t.rs(c,p,function(c,p,t){';
          Hogan4.walk(node.nodes, context);
          context.code += "});c.pop();}";
        },
        "^": function(node, context) {
          context.code += "if(!t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
          Hogan4.walk(node.nodes, context);
          context.code += "};";
        },
        ">": createPartial,
        "<": function(node, context) {
          var ctx = { partials: {}, code: "", subs: {}, inPartial: true };
          Hogan4.walk(node.nodes, ctx);
          var template = context.partials[createPartial(node, context)];
          template.subs = ctx.subs;
          template.partials = ctx.partials;
        },
        "$": function(node, context) {
          var ctx = { subs: {}, code: "", partials: context.partials, prefix: node.n };
          Hogan4.walk(node.nodes, ctx);
          context.subs[node.n] = ctx.code;
          if (!context.inPartial) {
            context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
          }
        },
        "\n": function(node, context) {
          context.code += write('"\\n"' + (node.last ? "" : " + i"));
        },
        "_v": function(node, context) {
          context.code += "t.b(t.v(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        },
        "_t": function(node, context) {
          context.code += write('"' + esc(node.text) + '"');
        },
        "{": tripleStache,
        "&": tripleStache
      };
      function tripleStache(node, context) {
        context.code += "t.b(t.t(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
      }
      function write(s) {
        return "t.b(" + s + ");";
      }
      Hogan4.walk = function(nodelist, context) {
        var func;
        for (var i = 0, l = nodelist.length; i < l; i++) {
          func = Hogan4.codegen[nodelist[i].tag];
          func && func(nodelist[i], context);
        }
        return context;
      };
      Hogan4.parse = function(tokens, text2, options) {
        options = options || {};
        return buildTree(tokens, "", [], options.sectionTags || []);
      };
      Hogan4.cache = {};
      Hogan4.cacheKey = function(text2, options) {
        return [text2, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join("||");
      };
      Hogan4.compile = function(text2, options) {
        options = options || {};
        var key2 = Hogan4.cacheKey(text2, options);
        var template = this.cache[key2];
        if (template) {
          var partials = template.partials;
          for (var name in partials) {
            delete partials[name].instance;
          }
          return template;
        }
        template = this.generate(this.parse(this.scan(text2, options.delimiters), text2, options), text2, options);
        return this.cache[key2] = template;
      };
    })(typeof exports2 !== "undefined" ? exports2 : Hogan);
  }
});

// node_modules/.pnpm/hogan.js@3.0.2/node_modules/hogan.js/lib/template.js
var require_template = __commonJS({
  "node_modules/.pnpm/hogan.js@3.0.2/node_modules/hogan.js/lib/template.js"(exports2) {
    init_polyfill_buffer();
    var Hogan4 = {};
    (function(Hogan5) {
      Hogan5.Template = function(codeObj, text2, compiler, options) {
        codeObj = codeObj || {};
        this.r = codeObj.code || this.r;
        this.c = compiler;
        this.options = options || {};
        this.text = text2 || "";
        this.partials = codeObj.partials || {};
        this.subs = codeObj.subs || {};
        this.buf = "";
      };
      Hogan5.Template.prototype = {
        // render: replaced by generated code.
        r: function(context, partials, indent2) {
          return "";
        },
        // variable escaping
        v: hoganEscape,
        // triple stache
        t: coerceToString,
        render: function render2(context, partials, indent2) {
          return this.ri([context], partials || {}, indent2);
        },
        // render internal -- a hook for overrides that catches partials too
        ri: function(context, partials, indent2) {
          return this.r(context, partials, indent2);
        },
        // ensurePartial
        ep: function(symbol, partials) {
          var partial = this.partials[symbol];
          var template = partials[partial.name];
          if (partial.instance && partial.base == template) {
            return partial.instance;
          }
          if (typeof template == "string") {
            if (!this.c) {
              throw new Error("No compiler available.");
            }
            template = this.c.compile(template, this.options);
          }
          if (!template) {
            return null;
          }
          this.partials[symbol].base = template;
          if (partial.subs) {
            if (!partials.stackText)
              partials.stackText = {};
            for (key in partial.subs) {
              if (!partials.stackText[key]) {
                partials.stackText[key] = this.activeSub !== void 0 && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
              }
            }
            template = createSpecializedPartial(
              template,
              partial.subs,
              partial.partials,
              this.stackSubs,
              this.stackPartials,
              partials.stackText
            );
          }
          this.partials[symbol].instance = template;
          return template;
        },
        // tries to find a partial in the current scope and render it
        rp: function(symbol, context, partials, indent2) {
          var partial = this.ep(symbol, partials);
          if (!partial) {
            return "";
          }
          return partial.ri(context, partials, indent2);
        },
        // render a section
        rs: function(context, partials, section) {
          var tail = context[context.length - 1];
          if (!isArray(tail)) {
            section(context, partials, this);
            return;
          }
          for (var i = 0; i < tail.length; i++) {
            context.push(tail[i]);
            section(context, partials, this);
            context.pop();
          }
        },
        // maybe start a section
        s: function(val, ctx, partials, inverted, start, end, tags) {
          var pass;
          if (isArray(val) && val.length === 0) {
            return false;
          }
          if (typeof val == "function") {
            val = this.ms(val, ctx, partials, inverted, start, end, tags);
          }
          pass = !!val;
          if (!inverted && pass && ctx) {
            ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1]);
          }
          return pass;
        },
        // find values with dotted names
        d: function(key2, ctx, partials, returnFound) {
          var found, names = key2.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
          if (key2 === "." && isArray(ctx[ctx.length - 2])) {
            val = ctx[ctx.length - 1];
          } else {
            for (var i = 1; i < names.length; i++) {
              found = findInScope(names[i], val, doModelGet);
              if (found !== void 0) {
                cx = val;
                val = found;
              } else {
                val = "";
              }
            }
          }
          if (returnFound && !val) {
            return false;
          }
          if (!returnFound && typeof val == "function") {
            ctx.push(cx);
            val = this.mv(val, ctx, partials);
            ctx.pop();
          }
          return val;
        },
        // find values with normal names
        f: function(key2, ctx, partials, returnFound) {
          var val = false, v = null, found = false, doModelGet = this.options.modelGet;
          for (var i = ctx.length - 1; i >= 0; i--) {
            v = ctx[i];
            val = findInScope(key2, v, doModelGet);
            if (val !== void 0) {
              found = true;
              break;
            }
          }
          if (!found) {
            return returnFound ? false : "";
          }
          if (!returnFound && typeof val == "function") {
            val = this.mv(val, ctx, partials);
          }
          return val;
        },
        // higher order templates
        ls: function(func, cx, partials, text2, tags) {
          var oldTags = this.options.delimiters;
          this.options.delimiters = tags;
          this.b(this.ct(coerceToString(func.call(cx, text2)), cx, partials));
          this.options.delimiters = oldTags;
          return false;
        },
        // compile text
        ct: function(text2, cx, partials) {
          if (this.options.disableLambda) {
            throw new Error("Lambda features disabled.");
          }
          return this.c.compile(text2, this.options).render(cx, partials);
        },
        // template result buffering
        b: function(s) {
          this.buf += s;
        },
        fl: function() {
          var r = this.buf;
          this.buf = "";
          return r;
        },
        // method replace section
        ms: function(func, ctx, partials, inverted, start, end, tags) {
          var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
          if (typeof result == "function") {
            if (inverted) {
              return true;
            } else {
              textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
              return this.ls(result, cx, partials, textSource.substring(start, end), tags);
            }
          }
          return result;
        },
        // method replace variable
        mv: function(func, ctx, partials) {
          var cx = ctx[ctx.length - 1];
          var result = func.call(cx);
          if (typeof result == "function") {
            return this.ct(coerceToString(result.call(cx)), cx, partials);
          }
          return result;
        },
        sub: function(name, context, partials, indent2) {
          var f = this.subs[name];
          if (f) {
            this.activeSub = name;
            f(context, partials, this, indent2);
            this.activeSub = false;
          }
        }
      };
      function findInScope(key2, scope, doModelGet) {
        var val;
        if (scope && typeof scope == "object") {
          if (scope[key2] !== void 0) {
            val = scope[key2];
          } else if (doModelGet && scope.get && typeof scope.get == "function") {
            val = scope.get(key2);
          }
        }
        return val;
      }
      function createSpecializedPartial(instance10, subs, partials, stackSubs, stackPartials, stackText) {
        function PartialTemplate() {
        }
        ;
        PartialTemplate.prototype = instance10;
        function Substitutions() {
        }
        ;
        Substitutions.prototype = instance10.subs;
        var key2;
        var partial = new PartialTemplate();
        partial.subs = new Substitutions();
        partial.subsText = {};
        partial.buf = "";
        stackSubs = stackSubs || {};
        partial.stackSubs = stackSubs;
        partial.subsText = stackText;
        for (key2 in subs) {
          if (!stackSubs[key2])
            stackSubs[key2] = subs[key2];
        }
        for (key2 in stackSubs) {
          partial.subs[key2] = stackSubs[key2];
        }
        stackPartials = stackPartials || {};
        partial.stackPartials = stackPartials;
        for (key2 in partials) {
          if (!stackPartials[key2])
            stackPartials[key2] = partials[key2];
        }
        for (key2 in stackPartials) {
          partial.partials[key2] = stackPartials[key2];
        }
        return partial;
      }
      var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
      function coerceToString(val) {
        return String(val === null || val === void 0 ? "" : val);
      }
      function hoganEscape(str) {
        str = coerceToString(str);
        return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str;
      }
      var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
      };
    })(typeof exports2 !== "undefined" ? exports2 : Hogan4);
  }
});

// node_modules/.pnpm/hogan.js@3.0.2/node_modules/hogan.js/lib/hogan.js
var require_hogan = __commonJS({
  "node_modules/.pnpm/hogan.js@3.0.2/node_modules/hogan.js/lib/hogan.js"(exports2, module2) {
    init_polyfill_buffer();
    var Hogan4 = require_compiler();
    Hogan4.Template = require_template().Template;
    Hogan4.template = Hogan4.Template;
    module2.exports = Hogan4;
  }
});

// node_modules/.pnpm/feather-icons@4.29.0/node_modules/feather-icons/dist/feather.js
var require_feather = __commonJS({
  "node_modules/.pnpm/feather-icons@4.29.0/node_modules/feather-icons/dist/feather.js"(exports2, module2) {
    init_polyfill_buffer();
    (function webpackUniversalModuleDefinition(root2, factory) {
      if (typeof exports2 === "object" && typeof module2 === "object")
        module2.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports2 === "object")
        exports2["feather"] = factory();
      else
        root2["feather"] = factory();
    })(typeof self !== "undefined" ? self : exports2, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module3 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
            module3.l = true;
            return module3.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports3, name, getter) {
            if (!__webpack_require__.o(exports3, name)) {
              Object.defineProperty(exports3, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
              });
            }
          };
          __webpack_require__.r = function(exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
          };
          __webpack_require__.n = function(module3) {
            var getter = module3 && module3.__esModule ? (
              /******/
              function getDefault() {
                return module3["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module3;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 0);
        }({
          /***/
          "./dist/icons.json": (
            /*!*************************!*\
              !*** ./dist/icons.json ***!
              \*************************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(module3) {
              module3.exports = { "activity": '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', "airplay": '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', "anchor": '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', "aperture": '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', "archive": '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', "award": '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', "battery": '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "bell": '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', "bluetooth": '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', "bold": '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', "book": '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', "bookmark": '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', "box": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "briefcase": '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', "calendar": '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', "camera": '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', "cast": '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', "check": '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', "chrome": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', "circle": '<circle cx="12" cy="12" r="10"></circle>', "clipboard": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', "clock": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', "cloud": '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', "code": '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', "codepen": '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', "codesandbox": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "coffee": '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', "columns": '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', "command": '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', "compass": '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', "copy": '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', "cpu": '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', "crop": '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', "crosshair": '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', "database": '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', "delete": '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', "disc": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', "divide": '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', "dribbble": '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', "droplet": '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', "edit": '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "eye": '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', "facebook": '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', "feather": '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', "figma": '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', "file": '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', "film": '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', "filter": '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', "flag": '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', "folder": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', "framer": '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', "frown": '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "gift": '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', "github": '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', "gitlab": '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', "globe": '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', "grid": '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', "hash": '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', "headphones": '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', "heart": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', "hexagon": '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', "home": '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', "image": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', "inbox": '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', "info": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', "instagram": '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', "italic": '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', "key": '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', "layers": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', "layout": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', "link": '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', "linkedin": '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', "list": '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', "loader": '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', "lock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', "mail": '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', "map": '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "maximize": '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', "meh": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "menu": '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "mic": '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', "minimize": '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', "minus": '<line x1="5" y1="12" x2="19" y2="12"></line>', "monitor": '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', "moon": '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', "move": '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', "music": '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', "navigation": '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', "octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', "package": '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', "paperclip": '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', "pause": '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', "percent": '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', "play": '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus": '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', "pocket": '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', "power": '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', "printer": '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', "radio": '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', "repeat": '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', "rewind": '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', "rss": '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', "save": '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', "scissors": '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', "search": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', "send": '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', "server": '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', "settings": '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', "share": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "shield": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', "shuffle": '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', "sidebar": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', "slack": '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', "slash": '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', "sliders": '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', "smartphone": '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "smile": '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', "speaker": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', "square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', "star": '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', "sun": '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', "sunrise": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', "sunset": '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', "table": '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>', "tablet": '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', "tag": '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', "target": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', "terminal": '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', "thermometer": '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', "tool": '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', "trash": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', "trello": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', "triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', "truck": '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', "tv": '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', "twitch": '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', "twitter": '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', "type": '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', "umbrella": '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', "underline": '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', "unlock": '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', "upload": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', "user": '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', "users": '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "video": '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', "voicemail": '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', "watch": '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wifi": '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', "wind": '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', "x": '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', "youtube": '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', "zap": '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
            }
          ),
          /***/
          "./node_modules/classnames/dedupe.js": (
            /*!*******************************************!*\
              !*** ./node_modules/classnames/dedupe.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
              (function() {
                "use strict";
                var classNames = function() {
                  function StorageObject() {
                  }
                  StorageObject.prototype = /* @__PURE__ */ Object.create(null);
                  function _parseArray(resultSet, array) {
                    var length = array.length;
                    for (var i = 0; i < length; ++i) {
                      _parse(resultSet, array[i]);
                    }
                  }
                  var hasOwn = {}.hasOwnProperty;
                  function _parseNumber(resultSet, num2) {
                    resultSet[num2] = true;
                  }
                  function _parseObject(resultSet, object) {
                    for (var k in object) {
                      if (hasOwn.call(object, k)) {
                        resultSet[k] = !!object[k];
                      }
                    }
                  }
                  var SPACE = /\s+/;
                  function _parseString(resultSet, str) {
                    var array = str.split(SPACE);
                    var length = array.length;
                    for (var i = 0; i < length; ++i) {
                      resultSet[array[i]] = true;
                    }
                  }
                  function _parse(resultSet, arg) {
                    if (!arg)
                      return;
                    var argType = typeof arg;
                    if (argType === "string") {
                      _parseString(resultSet, arg);
                    } else if (Array.isArray(arg)) {
                      _parseArray(resultSet, arg);
                    } else if (argType === "object") {
                      _parseObject(resultSet, arg);
                    } else if (argType === "number") {
                      _parseNumber(resultSet, arg);
                    }
                  }
                  function _classNames() {
                    var len = arguments.length;
                    var args = Array(len);
                    for (var i = 0; i < len; i++) {
                      args[i] = arguments[i];
                    }
                    var classSet = new StorageObject();
                    _parseArray(classSet, args);
                    var list = [];
                    for (var k in classSet) {
                      if (classSet[k]) {
                        list.push(k);
                      }
                    }
                    return list.join(" ");
                  }
                  return _classNames;
                }();
                if (typeof module3 !== "undefined" && module3.exports) {
                  module3.exports = classNames;
                } else if (true) {
                  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return classNames;
                  }.apply(exports3, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module3.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else {
                }
              })();
            }
          ),
          /***/
          "./node_modules/core-js/es/array/from.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/es/array/from.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              __webpack_require__(
                /*! ../../modules/es.string.iterator */
                "./node_modules/core-js/modules/es.string.iterator.js"
              );
              __webpack_require__(
                /*! ../../modules/es.array.from */
                "./node_modules/core-js/modules/es.array.from.js"
              );
              var path2 = __webpack_require__(
                /*! ../../internals/path */
                "./node_modules/core-js/internals/path.js"
              );
              module3.exports = path2.Array.from;
            }
          ),
          /***/
          "./node_modules/core-js/internals/a-function.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/a-function.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = function(it) {
                if (typeof it != "function") {
                  throw TypeError(String(it) + " is not a function");
                }
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/an-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/an-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              module3.exports = function(it) {
                if (!isObject(it)) {
                  throw TypeError(String(it) + " is not an object");
                }
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-from.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/array-from.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var bind = __webpack_require__(
                /*! ../internals/bind-context */
                "./node_modules/core-js/internals/bind-context.js"
              );
              var toObject = __webpack_require__(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              );
              var callWithSafeIterationClosing = __webpack_require__(
                /*! ../internals/call-with-safe-iteration-closing */
                "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
              );
              var isArrayIteratorMethod = __webpack_require__(
                /*! ../internals/is-array-iterator-method */
                "./node_modules/core-js/internals/is-array-iterator-method.js"
              );
              var toLength = __webpack_require__(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              );
              var createProperty = __webpack_require__(
                /*! ../internals/create-property */
                "./node_modules/core-js/internals/create-property.js"
              );
              var getIteratorMethod = __webpack_require__(
                /*! ../internals/get-iterator-method */
                "./node_modules/core-js/internals/get-iterator-method.js"
              );
              module3.exports = function from(arrayLike) {
                var O = toObject(arrayLike);
                var C = typeof this == "function" ? this : Array;
                var argumentsLength = arguments.length;
                var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
                var mapping = mapfn !== void 0;
                var index2 = 0;
                var iteratorMethod = getIteratorMethod(O);
                var length, result, step, iterator;
                if (mapping)
                  mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0, 2);
                if (iteratorMethod != void 0 && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
                  iterator = iteratorMethod.call(O);
                  result = new C();
                  for (; !(step = iterator.next()).done; index2++) {
                    createProperty(
                      result,
                      index2,
                      mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index2], true) : step.value
                    );
                  }
                } else {
                  length = toLength(O.length);
                  result = new C(length);
                  for (; length > index2; index2++) {
                    createProperty(result, index2, mapping ? mapfn(O[index2], index2) : O[index2]);
                  }
                }
                result.length = index2;
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-includes.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/array-includes.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var toLength = __webpack_require__(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              );
              var toAbsoluteIndex = __webpack_require__(
                /*! ../internals/to-absolute-index */
                "./node_modules/core-js/internals/to-absolute-index.js"
              );
              module3.exports = function(IS_INCLUDES) {
                return function($this, el, fromIndex) {
                  var O = toIndexedObject($this);
                  var length = toLength(O.length);
                  var index2 = toAbsoluteIndex(fromIndex, length);
                  var value;
                  if (IS_INCLUDES && el != el)
                    while (length > index2) {
                      value = O[index2++];
                      if (value != value)
                        return true;
                    }
                  else
                    for (; length > index2; index2++)
                      if (IS_INCLUDES || index2 in O) {
                        if (O[index2] === el)
                          return IS_INCLUDES || index2 || 0;
                      }
                  return !IS_INCLUDES && -1;
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/bind-context.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/bind-context.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var aFunction = __webpack_require__(
                /*! ../internals/a-function */
                "./node_modules/core-js/internals/a-function.js"
              );
              module3.exports = function(fn, that, length) {
                aFunction(fn);
                if (that === void 0)
                  return fn;
                switch (length) {
                  case 0:
                    return function() {
                      return fn.call(that);
                    };
                  case 1:
                    return function(a) {
                      return fn.call(that, a);
                    };
                  case 2:
                    return function(a, b) {
                      return fn.call(that, a, b);
                    };
                  case 3:
                    return function(a, b, c) {
                      return fn.call(that, a, b, c);
                    };
                }
                return function() {
                  return fn.apply(that, arguments);
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": (
            /*!****************************************************************************!*\
              !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
              \****************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              module3.exports = function(iterator, fn, value, ENTRIES) {
                try {
                  return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
                } catch (error) {
                  var returnMethod = iterator["return"];
                  if (returnMethod !== void 0)
                    anObject(returnMethod.call(iterator));
                  throw error;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/check-correctness-of-iteration.js": (
            /*!**************************************************************************!*\
              !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
              \**************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var SAFE_CLOSING = false;
              try {
                var called = 0;
                var iteratorWithReturn = {
                  next: function() {
                    return { done: !!called++ };
                  },
                  "return": function() {
                    SAFE_CLOSING = true;
                  }
                };
                iteratorWithReturn[ITERATOR] = function() {
                  return this;
                };
                Array.from(iteratorWithReturn, function() {
                  throw 2;
                });
              } catch (error) {
              }
              module3.exports = function(exec, SKIP_CLOSING) {
                if (!SKIP_CLOSING && !SAFE_CLOSING)
                  return false;
                var ITERATION_SUPPORT = false;
                try {
                  var object = {};
                  object[ITERATOR] = function() {
                    return {
                      next: function() {
                        return { done: ITERATION_SUPPORT = true };
                      }
                    };
                  };
                  exec(object);
                } catch (error) {
                }
                return ITERATION_SUPPORT;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof-raw.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/classof-raw.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              var toString = {}.toString;
              module3.exports = function(it) {
                return toString.call(it).slice(8, -1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/classof.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var classofRaw = __webpack_require__(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var TO_STRING_TAG = wellKnownSymbol("toStringTag");
              var CORRECT_ARGUMENTS = classofRaw(function() {
                return arguments;
              }()) == "Arguments";
              var tryGet = function(it, key2) {
                try {
                  return it[key2];
                } catch (error) {
                }
              };
              module3.exports = function(it) {
                var O, tag2, result;
                return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag2 = tryGet(O = Object(it), TO_STRING_TAG)) == "string" ? tag2 : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/copy-constructor-properties.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var ownKeys = __webpack_require__(
                /*! ../internals/own-keys */
                "./node_modules/core-js/internals/own-keys.js"
              );
              var getOwnPropertyDescriptorModule = __webpack_require__(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              module3.exports = function(target, source) {
                var keys = ownKeys(source);
                var defineProperty = definePropertyModule.f;
                var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
                for (var i = 0; i < keys.length; i++) {
                  var key2 = keys[i];
                  if (!has(target, key2))
                    defineProperty(target, key2, getOwnPropertyDescriptor(source, key2));
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/correct-prototype-getter.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module3.exports = !fails(function() {
                function F() {
                }
                F.prototype.constructor = null;
                return Object.getPrototypeOf(new F()) !== F.prototype;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-iterator-constructor.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var IteratorPrototype = __webpack_require__(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ).IteratorPrototype;
              var create = __webpack_require__(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var returnThis = function() {
                return this;
              };
              module3.exports = function(IteratorConstructor, NAME, next) {
                var TO_STRING_TAG = NAME + " Iterator";
                IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
                setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
                Iterators[TO_STRING_TAG] = returnThis;
                return IteratorConstructor;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property-descriptor.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = function(bitmap, value) {
                return {
                  enumerable: !(bitmap & 1),
                  configurable: !(bitmap & 2),
                  writable: !(bitmap & 4),
                  value
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/create-property.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              module3.exports = function(object, key2, value) {
                var propertyKey = toPrimitive(key2);
                if (propertyKey in object)
                  definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
                else
                  object[propertyKey] = value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/define-iterator.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/define-iterator.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var $ = __webpack_require__(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              );
              var createIteratorConstructor = __webpack_require__(
                /*! ../internals/create-iterator-constructor */
                "./node_modules/core-js/internals/create-iterator-constructor.js"
              );
              var getPrototypeOf = __webpack_require__(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              );
              var setPrototypeOf = __webpack_require__(
                /*! ../internals/object-set-prototype-of */
                "./node_modules/core-js/internals/object-set-prototype-of.js"
              );
              var setToStringTag = __webpack_require__(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var redefine = __webpack_require__(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var IteratorsCore = __webpack_require__(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              );
              var IteratorPrototype = IteratorsCore.IteratorPrototype;
              var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
              var ITERATOR = wellKnownSymbol("iterator");
              var KEYS = "keys";
              var VALUES = "values";
              var ENTRIES = "entries";
              var returnThis = function() {
                return this;
              };
              module3.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
                createIteratorConstructor(IteratorConstructor, NAME, next);
                var getIterationMethod = function(KIND) {
                  if (KIND === DEFAULT && defaultIterator)
                    return defaultIterator;
                  if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
                    return IterablePrototype[KIND];
                  switch (KIND) {
                    case KEYS:
                      return function keys() {
                        return new IteratorConstructor(this, KIND);
                      };
                    case VALUES:
                      return function values() {
                        return new IteratorConstructor(this, KIND);
                      };
                    case ENTRIES:
                      return function entries() {
                        return new IteratorConstructor(this, KIND);
                      };
                  }
                  return function() {
                    return new IteratorConstructor(this);
                  };
                };
                var TO_STRING_TAG = NAME + " Iterator";
                var INCORRECT_VALUES_NAME = false;
                var IterablePrototype = Iterable.prototype;
                var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
                var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
                var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
                var CurrentIteratorPrototype, methods, KEY;
                if (anyNativeIterator) {
                  CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
                  if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
                    if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
                      if (setPrototypeOf) {
                        setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                      } else if (typeof CurrentIteratorPrototype[ITERATOR] != "function") {
                        hide(CurrentIteratorPrototype, ITERATOR, returnThis);
                      }
                    }
                    setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
                    if (IS_PURE)
                      Iterators[TO_STRING_TAG] = returnThis;
                  }
                }
                if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
                  INCORRECT_VALUES_NAME = true;
                  defaultIterator = function values() {
                    return nativeIterator.call(this);
                  };
                }
                if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
                  hide(IterablePrototype, ITERATOR, defaultIterator);
                }
                Iterators[NAME] = defaultIterator;
                if (DEFAULT) {
                  methods = {
                    values: getIterationMethod(VALUES),
                    keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                    entries: getIterationMethod(ENTRIES)
                  };
                  if (FORCED)
                    for (KEY in methods) {
                      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
                        redefine(IterablePrototype, KEY, methods[KEY]);
                      }
                    }
                  else
                    $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
                }
                return methods;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/descriptors.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/descriptors.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module3.exports = !fails(function() {
                return Object.defineProperty({}, "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/document-create-element.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/document-create-element.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var document2 = global2.document;
              var exist = isObject(document2) && isObject(document2.createElement);
              module3.exports = function(it) {
                return exist ? document2.createElement(it) : {};
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/enum-bug-keys.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "./node_modules/core-js/internals/export.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/export.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var getOwnPropertyDescriptor = __webpack_require__(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ).f;
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var redefine = __webpack_require__(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var copyConstructorProperties = __webpack_require__(
                /*! ../internals/copy-constructor-properties */
                "./node_modules/core-js/internals/copy-constructor-properties.js"
              );
              var isForced = __webpack_require__(
                /*! ../internals/is-forced */
                "./node_modules/core-js/internals/is-forced.js"
              );
              module3.exports = function(options, source) {
                var TARGET = options.target;
                var GLOBAL = options.global;
                var STATIC = options.stat;
                var FORCED, target, key2, targetProperty, sourceProperty, descriptor;
                if (GLOBAL) {
                  target = global2;
                } else if (STATIC) {
                  target = global2[TARGET] || setGlobal(TARGET, {});
                } else {
                  target = (global2[TARGET] || {}).prototype;
                }
                if (target)
                  for (key2 in source) {
                    sourceProperty = source[key2];
                    if (options.noTargetGet) {
                      descriptor = getOwnPropertyDescriptor(target, key2);
                      targetProperty = descriptor && descriptor.value;
                    } else
                      targetProperty = target[key2];
                    FORCED = isForced(GLOBAL ? key2 : TARGET + (STATIC ? "." : "#") + key2, options.forced);
                    if (!FORCED && targetProperty !== void 0) {
                      if (typeof sourceProperty === typeof targetProperty)
                        continue;
                      copyConstructorProperties(sourceProperty, targetProperty);
                    }
                    if (options.sham || targetProperty && targetProperty.sham) {
                      hide(sourceProperty, "sham", true);
                    }
                    redefine(target, key2, sourceProperty, options);
                  }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/fails.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/internals/fails.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = function(exec) {
                try {
                  return !!exec();
                } catch (error) {
                  return true;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/function-to-string.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/internals/function-to-string.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              module3.exports = shared("native-function-to-string", Function.toString);
            }
          ),
          /***/
          "./node_modules/core-js/internals/get-iterator-method.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var classof = __webpack_require__(
                /*! ../internals/classof */
                "./node_modules/core-js/internals/classof.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              module3.exports = function(it) {
                if (it != void 0)
                  return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/global.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/global.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              (function(global2) {
                var O = "object";
                var check = function(it) {
                  return it && it.Math == Math && it;
                };
                module3.exports = // eslint-disable-next-line no-undef
                check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global2 == O && global2) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, __webpack_require__(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            }
          ),
          /***/
          "./node_modules/core-js/internals/has.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/has.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              var hasOwnProperty = {}.hasOwnProperty;
              module3.exports = function(it, key2) {
                return hasOwnProperty.call(it, key2);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/hidden-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/hidden-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/hide.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/hide.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              module3.exports = DESCRIPTORS ? function(object, key2, value) {
                return definePropertyModule.f(object, key2, createPropertyDescriptor(1, value));
              } : function(object, key2, value) {
                object[key2] = value;
                return object;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/html.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/html.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var document2 = global2.document;
              module3.exports = document2 && document2.documentElement;
            }
          ),
          /***/
          "./node_modules/core-js/internals/ie8-dom-define.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var createElement = __webpack_require__(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              module3.exports = !DESCRIPTORS && !fails(function() {
                return Object.defineProperty(createElement("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/indexed-object.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/indexed-object.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var classof = __webpack_require__(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              );
              var split = "".split;
              module3.exports = fails(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(it) {
                return classof(it) == "String" ? split.call(it, "") : Object(it);
              } : Object;
            }
          ),
          /***/
          "./node_modules/core-js/internals/internal-state.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/internal-state.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var NATIVE_WEAK_MAP = __webpack_require__(
                /*! ../internals/native-weak-map */
                "./node_modules/core-js/internals/native-weak-map.js"
              );
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var objectHas = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var WeakMap2 = global2.WeakMap;
              var set, get, has;
              var enforce = function(it) {
                return has(it) ? get(it) : set(it, {});
              };
              var getterFor = function(TYPE) {
                return function(it) {
                  var state;
                  if (!isObject(it) || (state = get(it)).type !== TYPE) {
                    throw TypeError("Incompatible receiver, " + TYPE + " required");
                  }
                  return state;
                };
              };
              if (NATIVE_WEAK_MAP) {
                var store = new WeakMap2();
                var wmget = store.get;
                var wmhas = store.has;
                var wmset = store.set;
                set = function(it, metadata) {
                  wmset.call(store, it, metadata);
                  return metadata;
                };
                get = function(it) {
                  return wmget.call(store, it) || {};
                };
                has = function(it) {
                  return wmhas.call(store, it);
                };
              } else {
                var STATE = sharedKey("state");
                hiddenKeys[STATE] = true;
                set = function(it, metadata) {
                  hide(it, STATE, metadata);
                  return metadata;
                };
                get = function(it) {
                  return objectHas(it, STATE) ? it[STATE] : {};
                };
                has = function(it) {
                  return objectHas(it, STATE);
                };
              }
              module3.exports = {
                set,
                get,
                has,
                enforce,
                getterFor
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-array-iterator-method.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var Iterators = __webpack_require__(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var ArrayPrototype = Array.prototype;
              module3.exports = function(it) {
                return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-forced.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-forced.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              var replacement = /#|\.prototype\./;
              var isForced = function(feature, detection) {
                var value = data[normalize2(feature)];
                return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == "function" ? fails(detection) : !!detection;
              };
              var normalize2 = isForced.normalize = function(string) {
                return String(string).replace(replacement, ".").toLowerCase();
              };
              var data = isForced.data = {};
              var NATIVE = isForced.NATIVE = "N";
              var POLYFILL = isForced.POLYFILL = "P";
              module3.exports = isForced;
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = function(it) {
                return typeof it === "object" ? it !== null : typeof it === "function";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-pure.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/is-pure.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = false;
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators-core.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/iterators-core.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var getPrototypeOf = __webpack_require__(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var ITERATOR = wellKnownSymbol("iterator");
              var BUGGY_SAFARI_ITERATORS = false;
              var returnThis = function() {
                return this;
              };
              var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
              if ([].keys) {
                arrayIterator = [].keys();
                if (!("next" in arrayIterator))
                  BUGGY_SAFARI_ITERATORS = true;
                else {
                  PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
                  if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
                    IteratorPrototype = PrototypeOfArrayIteratorPrototype;
                }
              }
              if (IteratorPrototype == void 0)
                IteratorPrototype = {};
              if (!IS_PURE && !has(IteratorPrototype, ITERATOR))
                hide(IteratorPrototype, ITERATOR, returnThis);
              module3.exports = {
                IteratorPrototype,
                BUGGY_SAFARI_ITERATORS
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/iterators.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-symbol.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/native-symbol.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var fails = __webpack_require__(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              module3.exports = !!Object.getOwnPropertySymbols && !fails(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-weak-map.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/native-weak-map.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var nativeFunctionToString = __webpack_require__(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              );
              var WeakMap2 = global2.WeakMap;
              module3.exports = typeof WeakMap2 === "function" && /native code/.test(nativeFunctionToString.call(WeakMap2));
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-create.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/object-create.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var defineProperties = __webpack_require__(
                /*! ../internals/object-define-properties */
                "./node_modules/core-js/internals/object-define-properties.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var html2 = __webpack_require__(
                /*! ../internals/html */
                "./node_modules/core-js/internals/html.js"
              );
              var documentCreateElement = __webpack_require__(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var IE_PROTO = sharedKey("IE_PROTO");
              var PROTOTYPE = "prototype";
              var Empty = function() {
              };
              var createDict = function() {
                var iframe = documentCreateElement("iframe");
                var length = enumBugKeys.length;
                var lt = "<";
                var script = "script";
                var gt = ">";
                var js = "java" + script + ":";
                var iframeDocument;
                iframe.style.display = "none";
                html2.appendChild(iframe);
                iframe.src = String(js);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + script + gt + "document.F=Object" + lt + "/" + script + gt);
                iframeDocument.close();
                createDict = iframeDocument.F;
                while (length--)
                  delete createDict[PROTOTYPE][enumBugKeys[length]];
                return createDict();
              };
              module3.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                  Empty[PROTOTYPE] = anObject(O);
                  result = new Empty();
                  Empty[PROTOTYPE] = null;
                  result[IE_PROTO] = O;
                } else
                  result = createDict();
                return Properties === void 0 ? result : defineProperties(result, Properties);
              };
              hiddenKeys[IE_PROTO] = true;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-properties.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-properties.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var definePropertyModule = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var objectKeys = __webpack_require__(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              );
              module3.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = objectKeys(Properties);
                var length = keys.length;
                var i = 0;
                var key2;
                while (length > i)
                  definePropertyModule.f(O, key2 = keys[i++], Properties[key2]);
                return O;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-property.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-property.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var nativeDefineProperty = Object.defineProperty;
              exports3.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeDefineProperty(O, P, Attributes);
                  } catch (error) {
                  }
                if ("get" in Attributes || "set" in Attributes)
                  throw TypeError("Accessors not supported");
                if ("value" in Attributes)
                  O[P] = Attributes.value;
                return O;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-descriptor.js": (
            /*!******************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
              \******************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var DESCRIPTORS = __webpack_require__(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              );
              var propertyIsEnumerableModule = __webpack_require__(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              );
              var createPropertyDescriptor = __webpack_require__(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var toPrimitive = __webpack_require__(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var IE8_DOM_DEFINE = __webpack_require__(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              );
              var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
              exports3.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
                O = toIndexedObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return nativeGetOwnPropertyDescriptor(O, P);
                  } catch (error) {
                  }
                if (has(O, P))
                  return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-names.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var internalObjectKeys = __webpack_require__(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              var hiddenKeys = enumBugKeys.concat("length", "prototype");
              exports3.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                return internalObjectKeys(O, hiddenKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-symbols.js": (
            /*!***************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
              \***************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              exports3.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var toObject = __webpack_require__(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              );
              var sharedKey = __webpack_require__(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              );
              var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
                /*! ../internals/correct-prototype-getter */
                "./node_modules/core-js/internals/correct-prototype-getter.js"
              );
              var IE_PROTO = sharedKey("IE_PROTO");
              var ObjectPrototype = Object.prototype;
              module3.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function(O) {
                O = toObject(O);
                if (has(O, IE_PROTO))
                  return O[IE_PROTO];
                if (typeof O.constructor == "function" && O instanceof O.constructor) {
                  return O.constructor.prototype;
                }
                return O instanceof Object ? ObjectPrototype : null;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys-internal.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var toIndexedObject = __webpack_require__(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              );
              var arrayIncludes = __webpack_require__(
                /*! ../internals/array-includes */
                "./node_modules/core-js/internals/array-includes.js"
              );
              var hiddenKeys = __webpack_require__(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              );
              var arrayIndexOf = arrayIncludes(false);
              module3.exports = function(object, names) {
                var O = toIndexedObject(object);
                var i = 0;
                var result = [];
                var key2;
                for (key2 in O)
                  !has(hiddenKeys, key2) && has(O, key2) && result.push(key2);
                while (names.length > i)
                  if (has(O, key2 = names[i++])) {
                    ~arrayIndexOf(result, key2) || result.push(key2);
                  }
                return result;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var internalObjectKeys = __webpack_require__(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              );
              var enumBugKeys = __webpack_require__(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              module3.exports = Object.keys || function keys(O) {
                return internalObjectKeys(O, enumBugKeys);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-property-is-enumerable.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
              var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
              var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
              exports3.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
                var descriptor = getOwnPropertyDescriptor(this, V);
                return !!descriptor && descriptor.enumerable;
              } : nativePropertyIsEnumerable;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-set-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var validateSetPrototypeOfArguments = __webpack_require__(
                /*! ../internals/validate-set-prototype-of-arguments */
                "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js"
              );
              module3.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var correctSetter = false;
                var test = {};
                var setter;
                try {
                  setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                  setter.call(test, []);
                  correctSetter = test instanceof Array;
                } catch (error) {
                }
                return function setPrototypeOf(O, proto) {
                  validateSetPrototypeOfArguments(O, proto);
                  if (correctSetter)
                    setter.call(O, proto);
                  else
                    O.__proto__ = proto;
                  return O;
                };
              }() : void 0);
            }
          ),
          /***/
          "./node_modules/core-js/internals/own-keys.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/own-keys.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var getOwnPropertyNamesModule = __webpack_require__(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              );
              var getOwnPropertySymbolsModule = __webpack_require__(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              var Reflect2 = global2.Reflect;
              module3.exports = Reflect2 && Reflect2.ownKeys || function ownKeys(it) {
                var keys = getOwnPropertyNamesModule.f(anObject(it));
                var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
                return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/path.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/path.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              module3.exports = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
            }
          ),
          /***/
          "./node_modules/core-js/internals/redefine.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/redefine.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var nativeFunctionToString = __webpack_require__(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              );
              var InternalStateModule = __webpack_require__(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              );
              var getInternalState = InternalStateModule.get;
              var enforceInternalState = InternalStateModule.enforce;
              var TEMPLATE = String(nativeFunctionToString).split("toString");
              shared("inspectSource", function(it) {
                return nativeFunctionToString.call(it);
              });
              (module3.exports = function(O, key2, value, options) {
                var unsafe = options ? !!options.unsafe : false;
                var simple2 = options ? !!options.enumerable : false;
                var noTargetGet = options ? !!options.noTargetGet : false;
                if (typeof value == "function") {
                  if (typeof key2 == "string" && !has(value, "name"))
                    hide(value, "name", key2);
                  enforceInternalState(value).source = TEMPLATE.join(typeof key2 == "string" ? key2 : "");
                }
                if (O === global2) {
                  if (simple2)
                    O[key2] = value;
                  else
                    setGlobal(key2, value);
                  return;
                } else if (!unsafe) {
                  delete O[key2];
                } else if (!noTargetGet && O[key2]) {
                  simple2 = true;
                }
                if (simple2)
                  O[key2] = value;
                else
                  hide(O, key2, value);
              })(Function.prototype, "toString", function toString() {
                return typeof this == "function" && getInternalState(this).source || nativeFunctionToString.call(this);
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/require-object-coercible.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              module3.exports = function(it) {
                if (it == void 0)
                  throw TypeError("Can't call method on " + it);
                return it;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-global.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/set-global.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var hide = __webpack_require__(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              module3.exports = function(key2, value) {
                try {
                  hide(global2, key2, value);
                } catch (error) {
                  global2[key2] = value;
                }
                return value;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-to-string-tag.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var defineProperty = __webpack_require__(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f;
              var has = __webpack_require__(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              );
              var wellKnownSymbol = __webpack_require__(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              );
              var TO_STRING_TAG = wellKnownSymbol("toStringTag");
              module3.exports = function(it, TAG, STATIC) {
                if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
                  defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared-key.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/shared-key.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var uid = __webpack_require__(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              );
              var keys = shared("keys");
              module3.exports = function(key2) {
                return keys[key2] || (keys[key2] = uid(key2));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/shared.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var setGlobal = __webpack_require__(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              );
              var IS_PURE = __webpack_require__(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              );
              var SHARED = "__core-js_shared__";
              var store = global2[SHARED] || setGlobal(SHARED, {});
              (module3.exports = function(key2, value) {
                return store[key2] || (store[key2] = value !== void 0 ? value : {});
              })("versions", []).push({
                version: "3.1.3",
                mode: IS_PURE ? "pure" : "global",
                copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-at.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/string-at.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module3.exports = function(that, pos, CONVERT_TO_STRING) {
                var S = String(requireObjectCoercible(that));
                var position = toInteger(pos);
                var size = S.length;
                var first2, second;
                if (position < 0 || position >= size)
                  return CONVERT_TO_STRING ? "" : void 0;
                first2 = S.charCodeAt(position);
                return first2 < 55296 || first2 > 56319 || position + 1 === size || (second = S.charCodeAt(position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? S.charAt(position) : first2 : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first2 - 55296 << 10) + (second - 56320) + 65536;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-absolute-index.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var max = Math.max;
              var min = Math.min;
              module3.exports = function(index2, length) {
                var integer = toInteger(index2);
                return integer < 0 ? max(integer + length, 0) : min(integer, length);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-indexed-object.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var IndexedObject = __webpack_require__(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              );
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module3.exports = function(it) {
                return IndexedObject(requireObjectCoercible(it));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-integer.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/to-integer.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              var ceil = Math.ceil;
              var floor = Math.floor;
              module3.exports = function(argument) {
                return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-length.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-length.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var toInteger = __webpack_require__(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              );
              var min = Math.min;
              module3.exports = function(argument) {
                return argument > 0 ? min(toInteger(argument), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var requireObjectCoercible = __webpack_require__(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              module3.exports = function(argument) {
                return Object(requireObjectCoercible(argument));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-primitive.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/to-primitive.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              module3.exports = function(it, S) {
                if (!isObject(it))
                  return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
                  return val;
                if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it)))
                  return val;
                if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it)))
                  return val;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/uid.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/uid.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              var id = 0;
              var postfix = Math.random();
              module3.exports = function(key2) {
                return "Symbol(".concat(key2 === void 0 ? "" : key2, ")_", (++id + postfix).toString(36));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": (
            /*!*******************************************************************************!*\
              !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
              \*******************************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var isObject = __webpack_require__(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              var anObject = __webpack_require__(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              module3.exports = function(O, proto) {
                anObject(O);
                if (!isObject(proto) && proto !== null) {
                  throw TypeError("Can't set " + String(proto) + " as a prototype");
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/well-known-symbol.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var global2 = __webpack_require__(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
              var shared = __webpack_require__(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              var uid = __webpack_require__(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              );
              var NATIVE_SYMBOL = __webpack_require__(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              );
              var Symbol2 = global2.Symbol;
              var store = shared("wks");
              module3.exports = function(name) {
                return store[name] || (store[name] = NATIVE_SYMBOL && Symbol2[name] || (NATIVE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.from.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.from.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              var $ = __webpack_require__(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              );
              var from = __webpack_require__(
                /*! ../internals/array-from */
                "./node_modules/core-js/internals/array-from.js"
              );
              var checkCorrectnessOfIteration = __webpack_require__(
                /*! ../internals/check-correctness-of-iteration */
                "./node_modules/core-js/internals/check-correctness-of-iteration.js"
              );
              var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
                Array.from(iterable);
              });
              $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
                from
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.string.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var codePointAt = __webpack_require__(
                /*! ../internals/string-at */
                "./node_modules/core-js/internals/string-at.js"
              );
              var InternalStateModule = __webpack_require__(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              );
              var defineIterator = __webpack_require__(
                /*! ../internals/define-iterator */
                "./node_modules/core-js/internals/define-iterator.js"
              );
              var STRING_ITERATOR = "String Iterator";
              var setInternalState = InternalStateModule.set;
              var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
              defineIterator(String, "String", function(iterated) {
                setInternalState(this, {
                  type: STRING_ITERATOR,
                  string: String(iterated),
                  index: 0
                });
              }, function next() {
                var state = getInternalState(this);
                var string = state.string;
                var index2 = state.index;
                var point;
                if (index2 >= string.length)
                  return { value: void 0, done: true };
                point = codePointAt(string, index2, true);
                state.index += point.length;
                return { value: point, done: false };
              });
            }
          ),
          /***/
          "./node_modules/webpack/buildin/global.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            function(module3, exports3) {
              var g;
              g = function() {
                return this;
              }();
              try {
                g = g || Function("return this")() || (1, eval)("this");
              } catch (e) {
                if (typeof window === "object")
                  g = window;
              }
              module3.exports = g;
            }
          ),
          /***/
          "./src/default-attrs.json": (
            /*!********************************!*\
              !*** ./src/default-attrs.json ***!
              \********************************/
            /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
            /***/
            function(module3) {
              module3.exports = { "xmlns": "http://www.w3.org/2000/svg", "width": 24, "height": 24, "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
            }
          ),
          /***/
          "./src/icon.js": (
            /*!*********************!*\
              !*** ./src/icon.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports3, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key2 in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key2)) {
                      target[key2] = source[key2];
                    }
                  }
                }
                return target;
              };
              var _createClass = function() {
                function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                      descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                return function(Constructor, protoProps, staticProps) {
                  if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                  if (staticProps)
                    defineProperties(Constructor, staticProps);
                  return Constructor;
                };
              }();
              var _dedupe = __webpack_require__(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              );
              var _dedupe2 = _interopRequireDefault(_dedupe);
              var _defaultAttrs = __webpack_require__(
                /*! ./default-attrs.json */
                "./src/default-attrs.json"
              );
              var _defaultAttrs2 = _interopRequireDefault(_defaultAttrs);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function _classCallCheck(instance10, Constructor) {
                if (!(instance10 instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
                }
              }
              var Icon = function() {
                function Icon2(name, contents) {
                  var tags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                  _classCallCheck(this, Icon2);
                  this.name = name;
                  this.contents = contents;
                  this.tags = tags;
                  this.attrs = _extends({}, _defaultAttrs2.default, { class: "feather feather-" + name });
                }
                _createClass(Icon2, [{
                  key: "toSvg",
                  value: function toSvg() {
                    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var combinedAttrs = _extends({}, this.attrs, attrs, { class: (0, _dedupe2.default)(this.attrs.class, attrs.class) });
                    return "<svg " + attrsToString(combinedAttrs) + ">" + this.contents + "</svg>";
                  }
                  /**
                   * Return string representation of an `Icon`.
                   *
                   * Added for backward compatibility. If old code expects `feather.icons.<name>`
                   * to be a string, `toString()` will get implicitly called.
                   *
                   * @returns {string}
                   */
                }, {
                  key: "toString",
                  value: function toString() {
                    return this.contents;
                  }
                }]);
                return Icon2;
              }();
              function attrsToString(attrs) {
                return Object.keys(attrs).map(function(key2) {
                  return key2 + '="' + attrs[key2] + '"';
                }).join(" ");
              }
              exports3.default = Icon;
            }
          ),
          /***/
          "./src/icons.js": (
            /*!**********************!*\
              !*** ./src/icons.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports3, "__esModule", {
                value: true
              });
              var _icon = __webpack_require__(
                /*! ./icon */
                "./src/icon.js"
              );
              var _icon2 = _interopRequireDefault(_icon);
              var _icons = __webpack_require__(
                /*! ../dist/icons.json */
                "./dist/icons.json"
              );
              var _icons2 = _interopRequireDefault(_icons);
              var _tags = __webpack_require__(
                /*! ./tags.json */
                "./src/tags.json"
              );
              var _tags2 = _interopRequireDefault(_tags);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              exports3.default = Object.keys(_icons2.default).map(function(key2) {
                return new _icon2.default(key2, _icons2.default[key2], _tags2.default[key2]);
              }).reduce(function(object, icon) {
                object[icon.name] = icon;
                return object;
              }, {});
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              var _toSvg = __webpack_require__(
                /*! ./to-svg */
                "./src/to-svg.js"
              );
              var _toSvg2 = _interopRequireDefault(_toSvg);
              var _replace = __webpack_require__(
                /*! ./replace */
                "./src/replace.js"
              );
              var _replace2 = _interopRequireDefault(_replace);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              module3.exports = { icons: _icons2.default, toSvg: _toSvg2.default, replace: _replace2.default };
            }
          ),
          /***/
          "./src/replace.js": (
            /*!************************!*\
              !*** ./src/replace.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports3, "__esModule", {
                value: true
              });
              var _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];
                  for (var key2 in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key2)) {
                      target[key2] = source[key2];
                    }
                  }
                }
                return target;
              };
              var _dedupe = __webpack_require__(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              );
              var _dedupe2 = _interopRequireDefault(_dedupe);
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function replace() {
                var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (typeof document === "undefined") {
                  throw new Error("`feather.replace()` only works in a browser environment.");
                }
                var elementsToReplace = document.querySelectorAll("[data-feather]");
                Array.from(elementsToReplace).forEach(function(element2) {
                  return replaceElement(element2, attrs);
                });
              }
              function replaceElement(element2) {
                var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var elementAttrs = getAttrs(element2);
                var name = elementAttrs["data-feather"];
                delete elementAttrs["data-feather"];
                var svgString = _icons2.default[name].toSvg(_extends({}, attrs, elementAttrs, { class: (0, _dedupe2.default)(attrs.class, elementAttrs.class) }));
                var svgDocument = new DOMParser().parseFromString(svgString, "image/svg+xml");
                var svgElement = svgDocument.querySelector("svg");
                element2.parentNode.replaceChild(svgElement, element2);
              }
              function getAttrs(element2) {
                return Array.from(element2.attributes).reduce(function(attrs, attr2) {
                  attrs[attr2.name] = attr2.value;
                  return attrs;
                }, {});
              }
              exports3.default = replace;
            }
          ),
          /***/
          "./src/tags.json": (
            /*!***********************!*\
              !*** ./src/tags.json ***!
              \***********************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-bouy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(module3) {
              module3.exports = { "activity": ["pulse", "health", "action", "motion"], "airplay": ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], "anchor": [], "archive": ["index", "box"], "at-sign": ["mention", "at", "email", "message"], "award": ["achievement", "badge"], "aperture": ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], "battery": ["power", "electricity"], "battery-charging": ["power", "electricity"], "bell": ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], "bluetooth": ["wireless"], "book-open": ["read", "library"], "book": ["read", "dictionary", "booklet", "magazine", "library"], "bookmark": ["read", "clip", "marker", "tag"], "box": ["cube"], "briefcase": ["work", "bag", "baggage", "folder"], "calendar": ["date"], "camera": ["photo"], "cast": ["chromecast", "airplay"], "chevron-down": ["expand"], "chevron-up": ["collapse"], "circle": ["off", "zero", "record"], "clipboard": ["copy"], "clock": ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], "cloud": ["weather"], "codepen": ["logo"], "codesandbox": ["logo"], "code": ["source", "programming"], "coffee": ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], "columns": ["layout"], "command": ["keyboard", "cmd", "terminal", "prompt"], "compass": ["navigation", "safari", "travel", "direction"], "copy": ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], "cpu": ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], "crop": ["photo", "image"], "crosshair": ["aim", "target"], "database": ["storage", "memory"], "delete": ["remove"], "disc": ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], "droplet": ["water"], "edit": ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], "eye": ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], "facebook": ["logo", "social"], "fast-forward": ["music"], "figma": ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], "film": ["movie", "video"], "filter": ["funnel", "hopper"], "flag": ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], "folder": ["directory"], "framer": ["logo", "design", "tool"], "frown": ["emoji", "face", "bad", "sad", "emotion"], "gift": ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], "github": ["logo", "version control"], "gitlab": ["logo", "version control"], "globe": ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], "hash": ["hashtag", "number", "pound"], "headphones": ["music", "audio", "sound"], "heart": ["like", "love", "emotion"], "help-circle": ["question mark"], "hexagon": ["shape", "node.js", "logo"], "home": ["house", "living"], "image": ["picture"], "inbox": ["email"], "instagram": ["logo", "camera"], "key": ["password", "login", "authentication", "secure"], "layers": ["stack"], "layout": ["window", "webpage"], "life-bouy": ["help", "life ring", "support"], "link": ["chain", "url"], "link-2": ["chain", "url"], "linkedin": ["logo", "social media"], "list": ["options"], "lock": ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], "mail": ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], "map": ["location", "navigation", "travel"], "maximize": ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], "meh": ["emoji", "face", "neutral", "emotion"], "menu": ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], "mic": ["record", "sound", "listen"], "minimize": ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], "minus": ["subtract"], "monitor": ["tv", "screen", "display"], "moon": ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], "move": ["arrows"], "music": ["note"], "navigation": ["location", "travel"], "navigation-2": ["location", "travel"], "octagon": ["stop"], "package": ["box", "container"], "paperclip": ["attachment"], "pause": ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], "percent": ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], "phone": ["call"], "play": ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], "plus": ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], "pocket": ["logo", "save"], "power": ["on", "off"], "printer": ["fax", "office", "device"], "radio": ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], "repeat": ["loop", "arrows"], "rewind": ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], "rss": ["feed", "subscribe"], "save": ["floppy disk"], "scissors": ["cut"], "search": ["find", "magnifier", "magnifying glass"], "send": ["message", "mail", "email", "paper airplane", "paper aeroplane"], "settings": ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], "shield": ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], "shuffle": ["music"], "skip-back": ["music"], "skip-forward": ["music"], "slack": ["logo"], "slash": ["ban", "no"], "sliders": ["settings", "controls"], "smartphone": ["cellphone", "device"], "smile": ["emoji", "face", "happy", "good", "emotion"], "speaker": ["audio", "music"], "star": ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], "sun": ["brightness", "weather", "light"], "sunrise": ["weather", "time", "morning", "day"], "sunset": ["weather", "time", "evening", "night"], "tablet": ["device"], "tag": ["label"], "target": ["logo", "bullseye"], "terminal": ["code", "command line", "prompt"], "thermometer": ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], "tool": ["settings", "spanner"], "trash": ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], "triangle": ["delta"], "truck": ["delivery", "van", "shipping", "transport", "lorry"], "tv": ["television", "stream"], "twitch": ["logo"], "twitter": ["logo", "social"], "type": ["text"], "umbrella": ["rain", "weather"], "unlock": ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], "user": ["person", "account"], "users": ["group"], "video-off": ["camera", "movie", "film"], "video": ["camera", "movie", "film"], "voicemail": ["phone"], "volume": ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], "watch": ["clock", "time"], "wifi-off": ["disabled"], "wifi": ["connection", "signal", "wireless"], "wind": ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], "x": ["cancel", "close", "delete", "remove", "times", "clear"], "youtube": ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], "zap": ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
            }
          ),
          /***/
          "./src/to-svg.js": (
            /*!***********************!*\
              !*** ./src/to-svg.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              "use strict";
              Object.defineProperty(exports3, "__esModule", {
                value: true
              });
              var _icons = __webpack_require__(
                /*! ./icons */
                "./src/icons.js"
              );
              var _icons2 = _interopRequireDefault(_icons);
              function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
              }
              function toSvg(name) {
                var attrs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.");
                if (!name) {
                  throw new Error("The required `key` (icon name) parameter is missing.");
                }
                if (!_icons2.default[name]) {
                  throw new Error("No icon matching '" + name + "'. See the complete list of icons at https://feathericons.com");
                }
                return _icons2.default[name].toSvg(attrs);
              }
              exports3.default = toSvg;
            }
          ),
          /***/
          0: (
            /*!**************************************************!*\
              !*** multi core-js/es/array/from ./src/index.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(module3, exports3, __webpack_require__) {
              __webpack_require__(
                /*! core-js/es/array/from */
                "./node_modules/core-js/es/array/from.js"
              );
              module3.exports = __webpack_require__(
                /*! /home/runner/work/feather/feather/src/index.js */
                "./src/index.js"
              );
            }
          )
          /******/
        })
      );
    });
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => ObsidianGit
});
module.exports = __toCommonJS(main_exports);
init_polyfill_buffer();

// node_modules/.pnpm/isomorphic-git@1.23.0/node_modules/isomorphic-git/index.js
init_polyfill_buffer();
var import_async_lock = __toESM(require_async_lock(), 1);
var import_sha1 = __toESM(require_sha1(), 1);
var import_crc_32 = __toESM(require_crc32(), 1);
var import_pako = __toESM(require_pako(), 1);
var import_pify = __toESM(require_pify(), 1);
var import_ignore = __toESM(require_ignore(), 1);
var import_clean_git_ref = __toESM(require_lib2(), 1);
var import_diff3 = __toESM(require_diff3(), 1);
var BaseError = class extends Error {
  constructor(message) {
    super(message);
    this.caller = "";
  }
  toJSON() {
    return {
      code: this.code,
      data: this.data,
      caller: this.caller,
      message: this.message,
      stack: this.stack
    };
  }
  fromJSON(json) {
    const e = new BaseError(json.message);
    e.code = json.code;
    e.data = json.data;
    e.caller = json.caller;
    e.stack = json.stack;
    return e;
  }
  get isIsomorphicGitError() {
    return true;
  }
};
var UnmergedPathsError = class extends BaseError {
  /**
   * @param {Array<string>} filepaths
   */
  constructor(filepaths) {
    super(
      `Modifying the index is not possible because you have unmerged files: ${filepaths.toString}. Fix them up in the work tree, and then use 'git add/rm as appropriate to mark resolution and make a commit.`
    );
    this.code = this.name = UnmergedPathsError.code;
    this.data = { filepaths };
  }
};
UnmergedPathsError.code = "UnmergedPathsError";
var InternalError = class extends BaseError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(
      `An internal error caused this command to fail. Please file a bug report at https://github.com/isomorphic-git/isomorphic-git/issues with this error message: ${message}`
    );
    this.code = this.name = InternalError.code;
    this.data = { message };
  }
};
InternalError.code = "InternalError";
var UnsafeFilepathError = class extends BaseError {
  /**
   * @param {string} filepath
   */
  constructor(filepath) {
    super(`The filepath "${filepath}" contains unsafe character sequences`);
    this.code = this.name = UnsafeFilepathError.code;
    this.data = { filepath };
  }
};
UnsafeFilepathError.code = "UnsafeFilepathError";
var BufferCursor = class {
  constructor(buffer2) {
    this.buffer = buffer2;
    this._start = 0;
  }
  eof() {
    return this._start >= this.buffer.length;
  }
  tell() {
    return this._start;
  }
  seek(n) {
    this._start = n;
  }
  slice(n) {
    const r = this.buffer.slice(this._start, this._start + n);
    this._start += n;
    return r;
  }
  toString(enc, length) {
    const r = this.buffer.toString(enc, this._start, this._start + length);
    this._start += length;
    return r;
  }
  write(value, length, enc) {
    const r = this.buffer.write(value, this._start, length, enc);
    this._start += length;
    return r;
  }
  copy(source, start, end) {
    const r = source.copy(this.buffer, this._start, start, end);
    this._start += r;
    return r;
  }
  readUInt8() {
    const r = this.buffer.readUInt8(this._start);
    this._start += 1;
    return r;
  }
  writeUInt8(value) {
    const r = this.buffer.writeUInt8(value, this._start);
    this._start += 1;
    return r;
  }
  readUInt16BE() {
    const r = this.buffer.readUInt16BE(this._start);
    this._start += 2;
    return r;
  }
  writeUInt16BE(value) {
    const r = this.buffer.writeUInt16BE(value, this._start);
    this._start += 2;
    return r;
  }
  readUInt32BE() {
    const r = this.buffer.readUInt32BE(this._start);
    this._start += 4;
    return r;
  }
  writeUInt32BE(value) {
    const r = this.buffer.writeUInt32BE(value, this._start);
    this._start += 4;
    return r;
  }
};
function compareStrings(a, b) {
  return -(a < b) || +(a > b);
}
function comparePath(a, b) {
  return compareStrings(a.path, b.path);
}
function normalizeMode(mode) {
  let type = mode > 0 ? mode >> 12 : 0;
  if (type !== 4 && type !== 8 && type !== 10 && type !== 14) {
    type = 8;
  }
  let permissions = mode & 511;
  if (permissions & 73) {
    permissions = 493;
  } else {
    permissions = 420;
  }
  if (type !== 8)
    permissions = 0;
  return (type << 12) + permissions;
}
var MAX_UINT32 = 2 ** 32;
function SecondsNanoseconds(givenSeconds, givenNanoseconds, milliseconds, date) {
  if (givenSeconds !== void 0 && givenNanoseconds !== void 0) {
    return [givenSeconds, givenNanoseconds];
  }
  if (milliseconds === void 0) {
    milliseconds = date.valueOf();
  }
  const seconds = Math.floor(milliseconds / 1e3);
  const nanoseconds = (milliseconds - seconds * 1e3) * 1e6;
  return [seconds, nanoseconds];
}
function normalizeStats(e) {
  const [ctimeSeconds, ctimeNanoseconds] = SecondsNanoseconds(
    e.ctimeSeconds,
    e.ctimeNanoseconds,
    e.ctimeMs,
    e.ctime
  );
  const [mtimeSeconds, mtimeNanoseconds] = SecondsNanoseconds(
    e.mtimeSeconds,
    e.mtimeNanoseconds,
    e.mtimeMs,
    e.mtime
  );
  return {
    ctimeSeconds: ctimeSeconds % MAX_UINT32,
    ctimeNanoseconds: ctimeNanoseconds % MAX_UINT32,
    mtimeSeconds: mtimeSeconds % MAX_UINT32,
    mtimeNanoseconds: mtimeNanoseconds % MAX_UINT32,
    dev: e.dev % MAX_UINT32,
    ino: e.ino % MAX_UINT32,
    mode: normalizeMode(e.mode % MAX_UINT32),
    uid: e.uid % MAX_UINT32,
    gid: e.gid % MAX_UINT32,
    // size of -1 happens over a BrowserFS HTTP Backend that doesn't serve Content-Length headers
    // (like the Karma webserver) because BrowserFS HTTP Backend uses HTTP HEAD requests to do fs.stat
    size: e.size > -1 ? e.size % MAX_UINT32 : 0
  };
}
function toHex(buffer2) {
  let hex = "";
  for (const byte of new Uint8Array(buffer2)) {
    if (byte < 16)
      hex += "0";
    hex += byte.toString(16);
  }
  return hex;
}
var supportsSubtleSHA1 = null;
async function shasum(buffer2) {
  if (supportsSubtleSHA1 === null) {
    supportsSubtleSHA1 = await testSubtleSHA1();
  }
  return supportsSubtleSHA1 ? subtleSHA1(buffer2) : shasumSync(buffer2);
}
function shasumSync(buffer2) {
  return new import_sha1.default().update(buffer2).digest("hex");
}
async function subtleSHA1(buffer2) {
  const hash2 = await crypto.subtle.digest("SHA-1", buffer2);
  return toHex(hash2);
}
async function testSubtleSHA1() {
  try {
    const hash2 = await subtleSHA1(new Uint8Array([]));
    if (hash2 === "da39a3ee5e6b4b0d3255bfef95601890afd80709")
      return true;
  } catch (_) {
  }
  return false;
}
function parseCacheEntryFlags(bits) {
  return {
    assumeValid: Boolean(bits & 32768),
    extended: Boolean(bits & 16384),
    stage: (bits & 12288) >> 12,
    nameLength: bits & 4095
  };
}
function renderCacheEntryFlags(entry) {
  const flags = entry.flags;
  flags.extended = false;
  flags.nameLength = Math.min(Buffer.from(entry.path).length, 4095);
  return (flags.assumeValid ? 32768 : 0) + (flags.extended ? 16384 : 0) + ((flags.stage & 3) << 12) + (flags.nameLength & 4095);
}
var GitIndex = class {
  /*::
   _entries: Map<string, CacheEntry>
   _dirty: boolean // Used to determine if index needs to be saved to filesystem
   */
  constructor(entries, unmergedPaths) {
    this._dirty = false;
    this._unmergedPaths = unmergedPaths || /* @__PURE__ */ new Set();
    this._entries = entries || /* @__PURE__ */ new Map();
  }
  _addEntry(entry) {
    if (entry.flags.stage === 0) {
      entry.stages = [entry];
      this._entries.set(entry.path, entry);
      this._unmergedPaths.delete(entry.path);
    } else {
      let existingEntry = this._entries.get(entry.path);
      if (!existingEntry) {
        this._entries.set(entry.path, entry);
        existingEntry = entry;
      }
      existingEntry.stages[entry.flags.stage] = entry;
      this._unmergedPaths.add(entry.path);
    }
  }
  static async from(buffer2) {
    if (Buffer.isBuffer(buffer2)) {
      return GitIndex.fromBuffer(buffer2);
    } else if (buffer2 === null) {
      return new GitIndex(null);
    } else {
      throw new InternalError("invalid type passed to GitIndex.from");
    }
  }
  static async fromBuffer(buffer2) {
    const shaComputed = await shasum(buffer2.slice(0, -20));
    const shaClaimed = buffer2.slice(-20).toString("hex");
    if (shaClaimed !== shaComputed) {
      throw new InternalError(
        `Invalid checksum in GitIndex buffer: expected ${shaClaimed} but saw ${shaComputed}`
      );
    }
    const index2 = new GitIndex();
    const reader = new BufferCursor(buffer2);
    const magic = reader.toString("utf8", 4);
    if (magic !== "DIRC") {
      throw new InternalError(`Inavlid dircache magic file number: ${magic}`);
    }
    const version2 = reader.readUInt32BE();
    if (version2 !== 2) {
      throw new InternalError(`Unsupported dircache version: ${version2}`);
    }
    const numEntries = reader.readUInt32BE();
    let i = 0;
    while (!reader.eof() && i < numEntries) {
      const entry = {};
      entry.ctimeSeconds = reader.readUInt32BE();
      entry.ctimeNanoseconds = reader.readUInt32BE();
      entry.mtimeSeconds = reader.readUInt32BE();
      entry.mtimeNanoseconds = reader.readUInt32BE();
      entry.dev = reader.readUInt32BE();
      entry.ino = reader.readUInt32BE();
      entry.mode = reader.readUInt32BE();
      entry.uid = reader.readUInt32BE();
      entry.gid = reader.readUInt32BE();
      entry.size = reader.readUInt32BE();
      entry.oid = reader.slice(20).toString("hex");
      const flags = reader.readUInt16BE();
      entry.flags = parseCacheEntryFlags(flags);
      const pathlength = buffer2.indexOf(0, reader.tell() + 1) - reader.tell();
      if (pathlength < 1) {
        throw new InternalError(`Got a path length of: ${pathlength}`);
      }
      entry.path = reader.toString("utf8", pathlength);
      if (entry.path.includes("..\\") || entry.path.includes("../")) {
        throw new UnsafeFilepathError(entry.path);
      }
      let padding = 8 - (reader.tell() - 12) % 8;
      if (padding === 0)
        padding = 8;
      while (padding--) {
        const tmp = reader.readUInt8();
        if (tmp !== 0) {
          throw new InternalError(
            `Expected 1-8 null characters but got '${tmp}' after ${entry.path}`
          );
        } else if (reader.eof()) {
          throw new InternalError("Unexpected end of file");
        }
      }
      entry.stages = [];
      index2._addEntry(entry);
      i++;
    }
    return index2;
  }
  get unmergedPaths() {
    return [...this._unmergedPaths];
  }
  get entries() {
    return [...this._entries.values()].sort(comparePath);
  }
  get entriesMap() {
    return this._entries;
  }
  get entriesFlat() {
    return [...this.entries].flatMap((entry) => {
      return entry.stages.length > 1 ? entry.stages.filter((x) => x) : entry;
    });
  }
  *[Symbol.iterator]() {
    for (const entry of this.entries) {
      yield entry;
    }
  }
  insert({ filepath, stats, oid, stage = 0 }) {
    if (!stats) {
      stats = {
        ctimeSeconds: 0,
        ctimeNanoseconds: 0,
        mtimeSeconds: 0,
        mtimeNanoseconds: 0,
        dev: 0,
        ino: 0,
        mode: 0,
        uid: 0,
        gid: 0,
        size: 0
      };
    }
    stats = normalizeStats(stats);
    const bfilepath = Buffer.from(filepath);
    const entry = {
      ctimeSeconds: stats.ctimeSeconds,
      ctimeNanoseconds: stats.ctimeNanoseconds,
      mtimeSeconds: stats.mtimeSeconds,
      mtimeNanoseconds: stats.mtimeNanoseconds,
      dev: stats.dev,
      ino: stats.ino,
      // We provide a fallback value for `mode` here because not all fs
      // implementations assign it, but we use it in GitTree.
      // '100644' is for a "regular non-executable file"
      mode: stats.mode || 33188,
      uid: stats.uid,
      gid: stats.gid,
      size: stats.size,
      path: filepath,
      oid,
      flags: {
        assumeValid: false,
        extended: false,
        stage,
        nameLength: bfilepath.length < 4095 ? bfilepath.length : 4095
      },
      stages: []
    };
    this._addEntry(entry);
    this._dirty = true;
  }
  delete({ filepath }) {
    if (this._entries.has(filepath)) {
      this._entries.delete(filepath);
    } else {
      for (const key2 of this._entries.keys()) {
        if (key2.startsWith(filepath + "/")) {
          this._entries.delete(key2);
        }
      }
    }
    if (this._unmergedPaths.has(filepath)) {
      this._unmergedPaths.delete(filepath);
    }
    this._dirty = true;
  }
  clear() {
    this._entries.clear();
    this._dirty = true;
  }
  has({ filepath }) {
    return this._entries.has(filepath);
  }
  render() {
    return this.entries.map((entry) => `${entry.mode.toString(8)} ${entry.oid}    ${entry.path}`).join("\n");
  }
  static async _entryToBuffer(entry) {
    const bpath = Buffer.from(entry.path);
    const length = Math.ceil((62 + bpath.length + 1) / 8) * 8;
    const written = Buffer.alloc(length);
    const writer = new BufferCursor(written);
    const stat = normalizeStats(entry);
    writer.writeUInt32BE(stat.ctimeSeconds);
    writer.writeUInt32BE(stat.ctimeNanoseconds);
    writer.writeUInt32BE(stat.mtimeSeconds);
    writer.writeUInt32BE(stat.mtimeNanoseconds);
    writer.writeUInt32BE(stat.dev);
    writer.writeUInt32BE(stat.ino);
    writer.writeUInt32BE(stat.mode);
    writer.writeUInt32BE(stat.uid);
    writer.writeUInt32BE(stat.gid);
    writer.writeUInt32BE(stat.size);
    writer.write(entry.oid, 20, "hex");
    writer.writeUInt16BE(renderCacheEntryFlags(entry));
    writer.write(entry.path, bpath.length, "utf8");
    return written;
  }
  async toObject() {
    const header = Buffer.alloc(12);
    const writer = new BufferCursor(header);
    writer.write("DIRC", 4, "utf8");
    writer.writeUInt32BE(2);
    writer.writeUInt32BE(this.entriesFlat.length);
    let entryBuffers = [];
    for (const entry of this.entries) {
      entryBuffers.push(GitIndex._entryToBuffer(entry));
      if (entry.stages.length > 1) {
        for (const stage of entry.stages) {
          if (stage && stage !== entry) {
            entryBuffers.push(GitIndex._entryToBuffer(stage));
          }
        }
      }
    }
    entryBuffers = await Promise.all(entryBuffers);
    const body = Buffer.concat(entryBuffers);
    const main = Buffer.concat([header, body]);
    const sum = await shasum(main);
    return Buffer.concat([main, Buffer.from(sum, "hex")]);
  }
};
function compareStats(entry, stats) {
  const e = normalizeStats(entry);
  const s = normalizeStats(stats);
  const staleness = e.mode !== s.mode || e.mtimeSeconds !== s.mtimeSeconds || e.ctimeSeconds !== s.ctimeSeconds || e.uid !== s.uid || e.gid !== s.gid || e.ino !== s.ino || e.size !== s.size;
  return staleness;
}
var lock = null;
var IndexCache = Symbol("IndexCache");
function createCache() {
  return {
    map: /* @__PURE__ */ new Map(),
    stats: /* @__PURE__ */ new Map()
  };
}
async function updateCachedIndexFile(fs, filepath, cache) {
  const stat = await fs.lstat(filepath);
  const rawIndexFile = await fs.read(filepath);
  const index2 = await GitIndex.from(rawIndexFile);
  cache.map.set(filepath, index2);
  cache.stats.set(filepath, stat);
}
async function isIndexStale(fs, filepath, cache) {
  const savedStats = cache.stats.get(filepath);
  if (savedStats === void 0)
    return true;
  const currStats = await fs.lstat(filepath);
  if (savedStats === null)
    return false;
  if (currStats === null)
    return false;
  return compareStats(savedStats, currStats);
}
var GitIndexManager = class {
  /**
   *
   * @param {object} opts
   * @param {import('../models/FileSystem.js').FileSystem} opts.fs
   * @param {string} opts.gitdir
   * @param {object} opts.cache
   * @param {bool} opts.allowUnmerged
   * @param {function(GitIndex): any} closure
   */
  static async acquire({ fs, gitdir, cache, allowUnmerged = true }, closure) {
    if (!cache[IndexCache])
      cache[IndexCache] = createCache();
    const filepath = `${gitdir}/index`;
    if (lock === null)
      lock = new import_async_lock.default({ maxPending: Infinity });
    let result;
    let unmergedPaths = [];
    await lock.acquire(filepath, async () => {
      if (await isIndexStale(fs, filepath, cache[IndexCache])) {
        await updateCachedIndexFile(fs, filepath, cache[IndexCache]);
      }
      const index2 = cache[IndexCache].map.get(filepath);
      unmergedPaths = index2.unmergedPaths;
      if (unmergedPaths.length && !allowUnmerged)
        throw new UnmergedPathsError(unmergedPaths);
      result = await closure(index2);
      if (index2._dirty) {
        const buffer2 = await index2.toObject();
        await fs.write(filepath, buffer2);
        cache[IndexCache].stats.set(filepath, await fs.lstat(filepath));
        index2._dirty = false;
      }
    });
    return result;
  }
};
function basename(path2) {
  const last2 = Math.max(path2.lastIndexOf("/"), path2.lastIndexOf("\\"));
  if (last2 > -1) {
    path2 = path2.slice(last2 + 1);
  }
  return path2;
}
function dirname(path2) {
  const last2 = Math.max(path2.lastIndexOf("/"), path2.lastIndexOf("\\"));
  if (last2 === -1)
    return ".";
  if (last2 === 0)
    return "/";
  return path2.slice(0, last2);
}
function flatFileListToDirectoryStructure(files) {
  const inodes = /* @__PURE__ */ new Map();
  const mkdir = function(name) {
    if (!inodes.has(name)) {
      const dir = {
        type: "tree",
        fullpath: name,
        basename: basename(name),
        metadata: {},
        children: []
      };
      inodes.set(name, dir);
      dir.parent = mkdir(dirname(name));
      if (dir.parent && dir.parent !== dir)
        dir.parent.children.push(dir);
    }
    return inodes.get(name);
  };
  const mkfile = function(name, metadata) {
    if (!inodes.has(name)) {
      const file = {
        type: "blob",
        fullpath: name,
        basename: basename(name),
        metadata,
        // This recursively generates any missing parent folders.
        parent: mkdir(dirname(name)),
        children: []
      };
      if (file.parent)
        file.parent.children.push(file);
      inodes.set(name, file);
    }
    return inodes.get(name);
  };
  mkdir(".");
  for (const file of files) {
    mkfile(file.path, file);
  }
  return inodes;
}
function mode2type(mode) {
  switch (mode) {
    case 16384:
      return "tree";
    case 33188:
      return "blob";
    case 33261:
      return "blob";
    case 40960:
      return "blob";
    case 57344:
      return "commit";
  }
  throw new InternalError(`Unexpected GitTree entry mode: ${mode.toString(8)}`);
}
var GitWalkerIndex = class {
  constructor({ fs, gitdir, cache }) {
    this.treePromise = GitIndexManager.acquire(
      { fs, gitdir, cache },
      async function(index2) {
        return flatFileListToDirectoryStructure(index2.entries);
      }
    );
    const walker = this;
    this.ConstructEntry = class StageEntry {
      constructor(fullpath) {
        this._fullpath = fullpath;
        this._type = false;
        this._mode = false;
        this._stat = false;
        this._oid = false;
      }
      async type() {
        return walker.type(this);
      }
      async mode() {
        return walker.mode(this);
      }
      async stat() {
        return walker.stat(this);
      }
      async content() {
        return walker.content(this);
      }
      async oid() {
        return walker.oid(this);
      }
    };
  }
  async readdir(entry) {
    const filepath = entry._fullpath;
    const tree = await this.treePromise;
    const inode = tree.get(filepath);
    if (!inode)
      return null;
    if (inode.type === "blob")
      return null;
    if (inode.type !== "tree") {
      throw new Error(`ENOTDIR: not a directory, scandir '${filepath}'`);
    }
    const names = inode.children.map((inode2) => inode2.fullpath);
    names.sort(compareStrings);
    return names;
  }
  async type(entry) {
    if (entry._type === false) {
      await entry.stat();
    }
    return entry._type;
  }
  async mode(entry) {
    if (entry._mode === false) {
      await entry.stat();
    }
    return entry._mode;
  }
  async stat(entry) {
    if (entry._stat === false) {
      const tree = await this.treePromise;
      const inode = tree.get(entry._fullpath);
      if (!inode) {
        throw new Error(
          `ENOENT: no such file or directory, lstat '${entry._fullpath}'`
        );
      }
      const stats = inode.type === "tree" ? {} : normalizeStats(inode.metadata);
      entry._type = inode.type === "tree" ? "tree" : mode2type(stats.mode);
      entry._mode = stats.mode;
      if (inode.type === "tree") {
        entry._stat = void 0;
      } else {
        entry._stat = stats;
      }
    }
    return entry._stat;
  }
  async content(_entry) {
  }
  async oid(entry) {
    if (entry._oid === false) {
      const tree = await this.treePromise;
      const inode = tree.get(entry._fullpath);
      entry._oid = inode.metadata.oid;
    }
    return entry._oid;
  }
};
var GitWalkSymbol = Symbol("GitWalkSymbol");
function STAGE() {
  const o = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(o, GitWalkSymbol, {
    value: function({ fs, gitdir, cache }) {
      return new GitWalkerIndex({ fs, gitdir, cache });
    }
  });
  Object.freeze(o);
  return o;
}
var NotFoundError = class extends BaseError {
  /**
   * @param {string} what
   */
  constructor(what) {
    super(`Could not find ${what}.`);
    this.code = this.name = NotFoundError.code;
    this.data = { what };
  }
};
NotFoundError.code = "NotFoundError";
var ObjectTypeError = class extends BaseError {
  /**
   * @param {string} oid
   * @param {'blob'|'commit'|'tag'|'tree'} actual
   * @param {'blob'|'commit'|'tag'|'tree'} expected
   * @param {string} [filepath]
   */
  constructor(oid, actual, expected, filepath) {
    super(
      `Object ${oid} ${filepath ? `at ${filepath}` : ""}was anticipated to be a ${expected} but it is a ${actual}.`
    );
    this.code = this.name = ObjectTypeError.code;
    this.data = { oid, actual, expected, filepath };
  }
};
ObjectTypeError.code = "ObjectTypeError";
var InvalidOidError = class extends BaseError {
  /**
   * @param {string} value
   */
  constructor(value) {
    super(`Expected a 40-char hex object id but saw "${value}".`);
    this.code = this.name = InvalidOidError.code;
    this.data = { value };
  }
};
InvalidOidError.code = "InvalidOidError";
var NoRefspecError = class extends BaseError {
  /**
   * @param {string} remote
   */
  constructor(remote) {
    super(`Could not find a fetch refspec for remote "${remote}". Make sure the config file has an entry like the following:
[remote "${remote}"]
	fetch = +refs/heads/*:refs/remotes/origin/*
`);
    this.code = this.name = NoRefspecError.code;
    this.data = { remote };
  }
};
NoRefspecError.code = "NoRefspecError";
var GitPackedRefs = class {
  constructor(text2) {
    this.refs = /* @__PURE__ */ new Map();
    this.parsedConfig = [];
    if (text2) {
      let key2 = null;
      this.parsedConfig = text2.trim().split("\n").map((line) => {
        if (/^\s*#/.test(line)) {
          return { line, comment: true };
        }
        const i = line.indexOf(" ");
        if (line.startsWith("^")) {
          const value = line.slice(1);
          this.refs.set(key2 + "^{}", value);
          return { line, ref: key2, peeled: value };
        } else {
          const value = line.slice(0, i);
          key2 = line.slice(i + 1);
          this.refs.set(key2, value);
          return { line, ref: key2, oid: value };
        }
      });
    }
    return this;
  }
  static from(text2) {
    return new GitPackedRefs(text2);
  }
  delete(ref) {
    this.parsedConfig = this.parsedConfig.filter((entry) => entry.ref !== ref);
    this.refs.delete(ref);
  }
  toString() {
    return this.parsedConfig.map(({ line }) => line).join("\n") + "\n";
  }
};
var GitRefSpec = class {
  constructor({ remotePath, localPath, force, matchPrefix }) {
    Object.assign(this, {
      remotePath,
      localPath,
      force,
      matchPrefix
    });
  }
  static from(refspec) {
    const [
      forceMatch,
      remotePath,
      remoteGlobMatch,
      localPath,
      localGlobMatch
    ] = refspec.match(/^(\+?)(.*?)(\*?):(.*?)(\*?)$/).slice(1);
    const force = forceMatch === "+";
    const remoteIsGlob = remoteGlobMatch === "*";
    const localIsGlob = localGlobMatch === "*";
    if (remoteIsGlob !== localIsGlob) {
      throw new InternalError("Invalid refspec");
    }
    return new GitRefSpec({
      remotePath,
      localPath,
      force,
      matchPrefix: remoteIsGlob
    });
  }
  translate(remoteBranch) {
    if (this.matchPrefix) {
      if (remoteBranch.startsWith(this.remotePath)) {
        return this.localPath + remoteBranch.replace(this.remotePath, "");
      }
    } else {
      if (remoteBranch === this.remotePath)
        return this.localPath;
    }
    return null;
  }
  reverseTranslate(localBranch) {
    if (this.matchPrefix) {
      if (localBranch.startsWith(this.localPath)) {
        return this.remotePath + localBranch.replace(this.localPath, "");
      }
    } else {
      if (localBranch === this.localPath)
        return this.remotePath;
    }
    return null;
  }
};
var GitRefSpecSet = class {
  constructor(rules = []) {
    this.rules = rules;
  }
  static from(refspecs) {
    const rules = [];
    for (const refspec of refspecs) {
      rules.push(GitRefSpec.from(refspec));
    }
    return new GitRefSpecSet(rules);
  }
  add(refspec) {
    const rule = GitRefSpec.from(refspec);
    this.rules.push(rule);
  }
  translate(remoteRefs) {
    const result = [];
    for (const rule of this.rules) {
      for (const remoteRef of remoteRefs) {
        const localRef = rule.translate(remoteRef);
        if (localRef) {
          result.push([remoteRef, localRef]);
        }
      }
    }
    return result;
  }
  translateOne(remoteRef) {
    let result = null;
    for (const rule of this.rules) {
      const localRef = rule.translate(remoteRef);
      if (localRef) {
        result = localRef;
      }
    }
    return result;
  }
  localNamespaces() {
    return this.rules.filter((rule) => rule.matchPrefix).map((rule) => rule.localPath.replace(/\/$/, ""));
  }
};
function compareRefNames(a, b) {
  const _a2 = a.replace(/\^\{\}$/, "");
  const _b = b.replace(/\^\{\}$/, "");
  const tmp = -(_a2 < _b) || +(_a2 > _b);
  if (tmp === 0) {
    return a.endsWith("^{}") ? 1 : -1;
  }
  return tmp;
}
function normalizePath(path2) {
  return path2.replace(/\/\.\//g, "/").replace(/\/{2,}/g, "/").replace(/^\/\.$/, "/").replace(/^\.\/$/, ".").replace(/^\.\//, "").replace(/\/\.$/, "").replace(/(.+)\/$/, "$1").replace(/^$/, ".");
}
function join(...parts) {
  return normalizePath(parts.map(normalizePath).join("/"));
}
var num = (val) => {
  val = val.toLowerCase();
  let n = parseInt(val);
  if (val.endsWith("k"))
    n *= 1024;
  if (val.endsWith("m"))
    n *= 1024 * 1024;
  if (val.endsWith("g"))
    n *= 1024 * 1024 * 1024;
  return n;
};
var bool = (val) => {
  val = val.trim().toLowerCase();
  if (val === "true" || val === "yes" || val === "on")
    return true;
  if (val === "false" || val === "no" || val === "off")
    return false;
  throw Error(
    `Expected 'true', 'false', 'yes', 'no', 'on', or 'off', but got ${val}`
  );
};
var schema = {
  core: {
    filemode: bool,
    bare: bool,
    logallrefupdates: bool,
    symlinks: bool,
    ignorecase: bool,
    bigFileThreshold: num
  }
};
var SECTION_LINE_REGEX = /^\[([A-Za-z0-9-.]+)(?: "(.*)")?\]$/;
var SECTION_REGEX = /^[A-Za-z0-9-.]+$/;
var VARIABLE_LINE_REGEX = /^([A-Za-z][A-Za-z-]*)(?: *= *(.*))?$/;
var VARIABLE_NAME_REGEX = /^[A-Za-z][A-Za-z-]*$/;
var VARIABLE_VALUE_COMMENT_REGEX = /^(.*?)( *[#;].*)$/;
var extractSectionLine = (line) => {
  const matches = SECTION_LINE_REGEX.exec(line);
  if (matches != null) {
    const [section, subsection] = matches.slice(1);
    return [section, subsection];
  }
  return null;
};
var extractVariableLine = (line) => {
  const matches = VARIABLE_LINE_REGEX.exec(line);
  if (matches != null) {
    const [name, rawValue = "true"] = matches.slice(1);
    const valueWithoutComments = removeComments(rawValue);
    const valueWithoutQuotes = removeQuotes(valueWithoutComments);
    return [name, valueWithoutQuotes];
  }
  return null;
};
var removeComments = (rawValue) => {
  const commentMatches = VARIABLE_VALUE_COMMENT_REGEX.exec(rawValue);
  if (commentMatches == null) {
    return rawValue;
  }
  const [valueWithoutComment, comment] = commentMatches.slice(1);
  if (hasOddNumberOfQuotes(valueWithoutComment) && hasOddNumberOfQuotes(comment)) {
    return `${valueWithoutComment}${comment}`;
  }
  return valueWithoutComment;
};
var hasOddNumberOfQuotes = (text2) => {
  const numberOfQuotes = (text2.match(/(?:^|[^\\])"/g) || []).length;
  return numberOfQuotes % 2 !== 0;
};
var removeQuotes = (text2) => {
  return text2.split("").reduce((newText, c, idx, text3) => {
    const isQuote = c === '"' && text3[idx - 1] !== "\\";
    const isEscapeForQuote = c === "\\" && text3[idx + 1] === '"';
    if (isQuote || isEscapeForQuote) {
      return newText;
    }
    return newText + c;
  }, "");
};
var lower = (text2) => {
  return text2 != null ? text2.toLowerCase() : null;
};
var getPath = (section, subsection, name) => {
  return [lower(section), subsection, lower(name)].filter((a) => a != null).join(".");
};
var normalizePath$1 = (path2) => {
  const pathSegments = path2.split(".");
  const section = pathSegments.shift();
  const name = pathSegments.pop();
  const subsection = pathSegments.length ? pathSegments.join(".") : void 0;
  return {
    section,
    subsection,
    name,
    path: getPath(section, subsection, name),
    sectionPath: getPath(section, subsection, null)
  };
};
var findLastIndex = (array, callback) => {
  return array.reduce((lastIndex, item, index2) => {
    return callback(item) ? index2 : lastIndex;
  }, -1);
};
var GitConfig = class {
  constructor(text2) {
    let section = null;
    let subsection = null;
    this.parsedConfig = text2.split("\n").map((line) => {
      let name = null;
      let value = null;
      const trimmedLine = line.trim();
      const extractedSection = extractSectionLine(trimmedLine);
      const isSection = extractedSection != null;
      if (isSection) {
        ;
        [section, subsection] = extractedSection;
      } else {
        const extractedVariable = extractVariableLine(trimmedLine);
        const isVariable = extractedVariable != null;
        if (isVariable) {
          ;
          [name, value] = extractedVariable;
        }
      }
      const path2 = getPath(section, subsection, name);
      return { line, isSection, section, subsection, name, value, path: path2 };
    });
  }
  static from(text2) {
    return new GitConfig(text2);
  }
  async get(path2, getall = false) {
    const normalizedPath = normalizePath$1(path2).path;
    const allValues = this.parsedConfig.filter((config) => config.path === normalizedPath).map(({ section, name, value }) => {
      const fn = schema[section] && schema[section][name];
      return fn ? fn(value) : value;
    });
    return getall ? allValues : allValues.pop();
  }
  async getall(path2) {
    return this.get(path2, true);
  }
  async getSubsections(section) {
    return this.parsedConfig.filter((config) => config.section === section && config.isSection).map((config) => config.subsection);
  }
  async deleteSection(section, subsection) {
    this.parsedConfig = this.parsedConfig.filter(
      (config) => !(config.section === section && config.subsection === subsection)
    );
  }
  async append(path2, value) {
    return this.set(path2, value, true);
  }
  async set(path2, value, append3 = false) {
    const {
      section,
      subsection,
      name,
      path: normalizedPath,
      sectionPath
    } = normalizePath$1(path2);
    const configIndex = findLastIndex(
      this.parsedConfig,
      (config) => config.path === normalizedPath
    );
    if (value == null) {
      if (configIndex !== -1) {
        this.parsedConfig.splice(configIndex, 1);
      }
    } else {
      if (configIndex !== -1) {
        const config = this.parsedConfig[configIndex];
        const modifiedConfig = Object.assign({}, config, {
          name,
          value,
          modified: true
        });
        if (append3) {
          this.parsedConfig.splice(configIndex + 1, 0, modifiedConfig);
        } else {
          this.parsedConfig[configIndex] = modifiedConfig;
        }
      } else {
        const sectionIndex = this.parsedConfig.findIndex(
          (config) => config.path === sectionPath
        );
        const newConfig = {
          section,
          subsection,
          name,
          value,
          modified: true,
          path: normalizedPath
        };
        if (SECTION_REGEX.test(section) && VARIABLE_NAME_REGEX.test(name)) {
          if (sectionIndex >= 0) {
            this.parsedConfig.splice(sectionIndex + 1, 0, newConfig);
          } else {
            const newSection = {
              section,
              subsection,
              modified: true,
              path: sectionPath
            };
            this.parsedConfig.push(newSection, newConfig);
          }
        }
      }
    }
  }
  toString() {
    return this.parsedConfig.map(({ line, section, subsection, name, value, modified: modified2 = false }) => {
      if (!modified2) {
        return line;
      }
      if (name != null && value != null) {
        if (typeof value === "string" && /[#;]/.test(value)) {
          return `	${name} = "${value}"`;
        }
        return `	${name} = ${value}`;
      }
      if (subsection != null) {
        return `[${section} "${subsection}"]`;
      }
      return `[${section}]`;
    }).join("\n");
  }
};
var GitConfigManager = class {
  static async get({ fs, gitdir }) {
    const text2 = await fs.read(`${gitdir}/config`, { encoding: "utf8" });
    return GitConfig.from(text2);
  }
  static async save({ fs, gitdir, config }) {
    await fs.write(`${gitdir}/config`, config.toString(), {
      encoding: "utf8"
    });
  }
};
var refpaths = (ref) => [
  `${ref}`,
  `refs/${ref}`,
  `refs/tags/${ref}`,
  `refs/heads/${ref}`,
  `refs/remotes/${ref}`,
  `refs/remotes/${ref}/HEAD`
];
var GIT_FILES = ["config", "description", "index", "shallow", "commondir"];
var GitRefManager = class {
  static async updateRemoteRefs({
    fs,
    gitdir,
    remote,
    refs,
    symrefs,
    tags,
    refspecs = void 0,
    prune = false,
    pruneTags = false
  }) {
    for (const value of refs.values()) {
      if (!value.match(/[0-9a-f]{40}/)) {
        throw new InvalidOidError(value);
      }
    }
    const config = await GitConfigManager.get({ fs, gitdir });
    if (!refspecs) {
      refspecs = await config.getall(`remote.${remote}.fetch`);
      if (refspecs.length === 0) {
        throw new NoRefspecError(remote);
      }
      refspecs.unshift(`+HEAD:refs/remotes/${remote}/HEAD`);
    }
    const refspec = GitRefSpecSet.from(refspecs);
    const actualRefsToWrite = /* @__PURE__ */ new Map();
    if (pruneTags) {
      const tags2 = await GitRefManager.listRefs({
        fs,
        gitdir,
        filepath: "refs/tags"
      });
      await GitRefManager.deleteRefs({
        fs,
        gitdir,
        refs: tags2.map((tag2) => `refs/tags/${tag2}`)
      });
    }
    if (tags) {
      for (const serverRef of refs.keys()) {
        if (serverRef.startsWith("refs/tags") && !serverRef.endsWith("^{}")) {
          if (!await GitRefManager.exists({ fs, gitdir, ref: serverRef })) {
            const oid = refs.get(serverRef);
            actualRefsToWrite.set(serverRef, oid);
          }
        }
      }
    }
    const refTranslations = refspec.translate([...refs.keys()]);
    for (const [serverRef, translatedRef] of refTranslations) {
      const value = refs.get(serverRef);
      actualRefsToWrite.set(translatedRef, value);
    }
    const symrefTranslations = refspec.translate([...symrefs.keys()]);
    for (const [serverRef, translatedRef] of symrefTranslations) {
      const value = symrefs.get(serverRef);
      const symtarget = refspec.translateOne(value);
      if (symtarget) {
        actualRefsToWrite.set(translatedRef, `ref: ${symtarget}`);
      }
    }
    const pruned = [];
    if (prune) {
      for (const filepath of refspec.localNamespaces()) {
        const refs2 = (await GitRefManager.listRefs({
          fs,
          gitdir,
          filepath
        })).map((file) => `${filepath}/${file}`);
        for (const ref of refs2) {
          if (!actualRefsToWrite.has(ref)) {
            pruned.push(ref);
          }
        }
      }
      if (pruned.length > 0) {
        await GitRefManager.deleteRefs({ fs, gitdir, refs: pruned });
      }
    }
    for (const [key2, value] of actualRefsToWrite) {
      await fs.write(join(gitdir, key2), `${value.trim()}
`, "utf8");
    }
    return { pruned };
  }
  // TODO: make this less crude?
  static async writeRef({ fs, gitdir, ref, value }) {
    if (!value.match(/[0-9a-f]{40}/)) {
      throw new InvalidOidError(value);
    }
    await fs.write(join(gitdir, ref), `${value.trim()}
`, "utf8");
  }
  static async writeSymbolicRef({ fs, gitdir, ref, value }) {
    await fs.write(join(gitdir, ref), `ref: ${value.trim()}
`, "utf8");
  }
  static async deleteRef({ fs, gitdir, ref }) {
    return GitRefManager.deleteRefs({ fs, gitdir, refs: [ref] });
  }
  static async deleteRefs({ fs, gitdir, refs }) {
    await Promise.all(refs.map((ref) => fs.rm(join(gitdir, ref))));
    let text2 = await fs.read(`${gitdir}/packed-refs`, { encoding: "utf8" });
    const packed = GitPackedRefs.from(text2);
    const beforeSize = packed.refs.size;
    for (const ref of refs) {
      if (packed.refs.has(ref)) {
        packed.delete(ref);
      }
    }
    if (packed.refs.size < beforeSize) {
      text2 = packed.toString();
      await fs.write(`${gitdir}/packed-refs`, text2, { encoding: "utf8" });
    }
  }
  /**
   * @param {object} args
   * @param {import('../models/FileSystem.js').FileSystem} args.fs
   * @param {string} args.gitdir
   * @param {string} args.ref
   * @param {number} [args.depth]
   * @returns {Promise<string>}
   */
  static async resolve({ fs, gitdir, ref, depth = void 0 }) {
    if (depth !== void 0) {
      depth--;
      if (depth === -1) {
        return ref;
      }
    }
    let sha;
    if (ref.startsWith("ref: ")) {
      ref = ref.slice("ref: ".length);
      return GitRefManager.resolve({ fs, gitdir, ref, depth });
    }
    if (ref.length === 40 && /[0-9a-f]{40}/.test(ref)) {
      return ref;
    }
    const packedMap = await GitRefManager.packedRefs({ fs, gitdir });
    const allpaths = refpaths(ref).filter((p) => !GIT_FILES.includes(p));
    for (const ref2 of allpaths) {
      sha = await fs.read(`${gitdir}/${ref2}`, { encoding: "utf8" }) || packedMap.get(ref2);
      if (sha) {
        return GitRefManager.resolve({ fs, gitdir, ref: sha.trim(), depth });
      }
    }
    throw new NotFoundError(ref);
  }
  static async exists({ fs, gitdir, ref }) {
    try {
      await GitRefManager.expand({ fs, gitdir, ref });
      return true;
    } catch (err) {
      return false;
    }
  }
  static async expand({ fs, gitdir, ref }) {
    if (ref.length === 40 && /[0-9a-f]{40}/.test(ref)) {
      return ref;
    }
    const packedMap = await GitRefManager.packedRefs({ fs, gitdir });
    const allpaths = refpaths(ref);
    for (const ref2 of allpaths) {
      if (await fs.exists(`${gitdir}/${ref2}`))
        return ref2;
      if (packedMap.has(ref2))
        return ref2;
    }
    throw new NotFoundError(ref);
  }
  static async expandAgainstMap({ ref, map }) {
    const allpaths = refpaths(ref);
    for (const ref2 of allpaths) {
      if (await map.has(ref2))
        return ref2;
    }
    throw new NotFoundError(ref);
  }
  static resolveAgainstMap({ ref, fullref = ref, depth = void 0, map }) {
    if (depth !== void 0) {
      depth--;
      if (depth === -1) {
        return { fullref, oid: ref };
      }
    }
    if (ref.startsWith("ref: ")) {
      ref = ref.slice("ref: ".length);
      return GitRefManager.resolveAgainstMap({ ref, fullref, depth, map });
    }
    if (ref.length === 40 && /[0-9a-f]{40}/.test(ref)) {
      return { fullref, oid: ref };
    }
    const allpaths = refpaths(ref);
    for (const ref2 of allpaths) {
      const sha = map.get(ref2);
      if (sha) {
        return GitRefManager.resolveAgainstMap({
          ref: sha.trim(),
          fullref: ref2,
          depth,
          map
        });
      }
    }
    throw new NotFoundError(ref);
  }
  static async packedRefs({ fs, gitdir }) {
    const text2 = await fs.read(`${gitdir}/packed-refs`, { encoding: "utf8" });
    const packed = GitPackedRefs.from(text2);
    return packed.refs;
  }
  // List all the refs that match the `filepath` prefix
  static async listRefs({ fs, gitdir, filepath }) {
    const packedMap = GitRefManager.packedRefs({ fs, gitdir });
    let files = null;
    try {
      files = await fs.readdirDeep(`${gitdir}/${filepath}`);
      files = files.map((x) => x.replace(`${gitdir}/${filepath}/`, ""));
    } catch (err) {
      files = [];
    }
    for (let key2 of (await packedMap).keys()) {
      if (key2.startsWith(filepath)) {
        key2 = key2.replace(filepath + "/", "");
        if (!files.includes(key2)) {
          files.push(key2);
        }
      }
    }
    files.sort(compareRefNames);
    return files;
  }
  static async listBranches({ fs, gitdir, remote }) {
    if (remote) {
      return GitRefManager.listRefs({
        fs,
        gitdir,
        filepath: `refs/remotes/${remote}`
      });
    } else {
      return GitRefManager.listRefs({ fs, gitdir, filepath: `refs/heads` });
    }
  }
  static async listTags({ fs, gitdir }) {
    const tags = await GitRefManager.listRefs({
      fs,
      gitdir,
      filepath: `refs/tags`
    });
    return tags.filter((x) => !x.endsWith("^{}"));
  }
};
function compareTreeEntryPath(a, b) {
  return compareStrings(appendSlashIfDir(a), appendSlashIfDir(b));
}
function appendSlashIfDir(entry) {
  return entry.mode === "040000" ? entry.path + "/" : entry.path;
}
function mode2type$1(mode) {
  switch (mode) {
    case "040000":
      return "tree";
    case "100644":
      return "blob";
    case "100755":
      return "blob";
    case "120000":
      return "blob";
    case "160000":
      return "commit";
  }
  throw new InternalError(`Unexpected GitTree entry mode: ${mode}`);
}
function parseBuffer(buffer2) {
  const _entries = [];
  let cursor = 0;
  while (cursor < buffer2.length) {
    const space2 = buffer2.indexOf(32, cursor);
    if (space2 === -1) {
      throw new InternalError(
        `GitTree: Error parsing buffer at byte location ${cursor}: Could not find the next space character.`
      );
    }
    const nullchar = buffer2.indexOf(0, cursor);
    if (nullchar === -1) {
      throw new InternalError(
        `GitTree: Error parsing buffer at byte location ${cursor}: Could not find the next null character.`
      );
    }
    let mode = buffer2.slice(cursor, space2).toString("utf8");
    if (mode === "40000")
      mode = "040000";
    const type = mode2type$1(mode);
    const path2 = buffer2.slice(space2 + 1, nullchar).toString("utf8");
    if (path2.includes("\\") || path2.includes("/")) {
      throw new UnsafeFilepathError(path2);
    }
    const oid = buffer2.slice(nullchar + 1, nullchar + 21).toString("hex");
    cursor = nullchar + 21;
    _entries.push({ mode, path: path2, oid, type });
  }
  return _entries;
}
function limitModeToAllowed(mode) {
  if (typeof mode === "number") {
    mode = mode.toString(8);
  }
  if (mode.match(/^0?4.*/))
    return "040000";
  if (mode.match(/^1006.*/))
    return "100644";
  if (mode.match(/^1007.*/))
    return "100755";
  if (mode.match(/^120.*/))
    return "120000";
  if (mode.match(/^160.*/))
    return "160000";
  throw new InternalError(`Could not understand file mode: ${mode}`);
}
function nudgeIntoShape(entry) {
  if (!entry.oid && entry.sha) {
    entry.oid = entry.sha;
  }
  entry.mode = limitModeToAllowed(entry.mode);
  if (!entry.type) {
    entry.type = mode2type$1(entry.mode);
  }
  return entry;
}
var GitTree = class {
  constructor(entries) {
    if (Buffer.isBuffer(entries)) {
      this._entries = parseBuffer(entries);
    } else if (Array.isArray(entries)) {
      this._entries = entries.map(nudgeIntoShape);
    } else {
      throw new InternalError("invalid type passed to GitTree constructor");
    }
    this._entries.sort(comparePath);
  }
  static from(tree) {
    return new GitTree(tree);
  }
  render() {
    return this._entries.map((entry) => `${entry.mode} ${entry.type} ${entry.oid}    ${entry.path}`).join("\n");
  }
  toObject() {
    const entries = [...this._entries];
    entries.sort(compareTreeEntryPath);
    return Buffer.concat(
      entries.map((entry) => {
        const mode = Buffer.from(entry.mode.replace(/^0/, ""));
        const space2 = Buffer.from(" ");
        const path2 = Buffer.from(entry.path, "utf8");
        const nullchar = Buffer.from([0]);
        const oid = Buffer.from(entry.oid, "hex");
        return Buffer.concat([mode, space2, path2, nullchar, oid]);
      })
    );
  }
  /**
