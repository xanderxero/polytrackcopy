(() => {
   var t = {
         23: (t, e, n) => {
            var i;
            /**
             * [js-sha256]{@link https://github.com/emn178/js-sha256}
             *
             * @version 0.10.1
             * @author Chen, Yi-Cyuan [emn178@gmail.com]
             * @copyright Chen, Yi-Cyuan 2014-2023
             * @license MIT
             */
            ! function () {
               "use strict";
               var e = "input is invalid type",
                  r = "object" == typeof window,
                  a = r ? window : {};
               a.JS_SHA256_NO_WINDOW && (r = !1);
               var s = !r && "object" == typeof self,
                  o = !a.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;
               o ? a = n.g : s && (a = self);
               var l = !a.JS_SHA256_NO_COMMON_JS && t.exports,
                  c = n.amdO,
                  h = !a.JS_SHA256_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,
                  u = "0123456789abcdef".split(""),
                  d = [-2147483648, 8388608, 32768, 128],
                  p = [24, 16, 8, 0],
                  f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                  m = ["hex", "array", "digest", "arrayBuffer"],
                  g = [];
               !a.JS_SHA256_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {
                  return "[object Array]" === Object.prototype.toString.call(t)
               }), !h || !a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {
                  return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer
               });
               var _ = function (t, e) {
                     return function (n) {
                        return new S(e, !0).update(n)[t]()
                     }
                  },
                  v = function (t) {
                     var e = _("hex", t);
                     o && (e = x(e, t)), e.create = function () {
                        return new S(t)
                     }, e.update = function (t) {
                        return e.create().update(t)
                     };
                     for (var n = 0; n < m.length; ++n) {
                        var i = m[n];
                        e[i] = _(i, t)
                     }
                     return e
                  },
                  x = function (t, i) {
                     var r, s = n(127),
                        o = n(371).Buffer,
                        l = i ? "sha224" : "sha256";
                     r = o.from && !a.JS_SHA256_NO_BUFFER_FROM ? o.from : function (t) {
                        return new o(t)
                     };
                     return function (n) {
                        if ("string" == typeof n) return s.createHash(l).update(n, "utf8").digest("hex");
                        if (null == n) throw new Error(e);
                        return n.constructor === ArrayBuffer && (n = new Uint8Array(n)), Array.isArray(n) || ArrayBuffer.isView(n) || n.constructor === o ? s.createHash(l).update(r(n)).digest("hex") : t(n)
                     }
                  },
                  y = function (t, e) {
                     return function (n, i) {
                        return new E(n, e, !0).update(i)[t]()
                     }
                  },
                  M = function (t) {
                     var e = y("hex", t);
                     e.create = function (e) {
                        return new E(e, t)
                     }, e.update = function (t, n) {
                        return e.create(t).update(n)
                     };
                     for (var n = 0; n < m.length; ++n) {
                        var i = m[n];
                        e[i] = y(i, t)
                     }
                     return e
                  };

               function S(t, e) {
                  e ? (g[0] = g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0, this.blocks = g) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t ? (this.h0 = 3238371032, this.h1 = 914150663, this.h2 = 812702999, this.h3 = 4144912697, this.h4 = 4290775857, this.h5 = 1750603025, this.h6 = 1694076839, this.h7 = 3204075428) : (this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = t
               }

               function E(t, n, i) {
                  var r, a = typeof t;
                  if ("string" === a) {
                     var s, o = [],
                        l = t.length,
                        c = 0;
                     for (r = 0; r < l; ++r)(s = t.charCodeAt(r)) < 128 ? o[c++] = s : s < 2048 ? (o[c++] = 192 | s >> 6, o[c++] = 128 | 63 & s) : s < 55296 || s >= 57344 ? (o[c++] = 224 | s >> 12, o[c++] = 128 | s >> 6 & 63, o[c++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++r)), o[c++] = 240 | s >> 18, o[c++] = 128 | s >> 12 & 63, o[c++] = 128 | s >> 6 & 63, o[c++] = 128 | 63 & s);
                     t = o
                  } else {
                     if ("object" !== a) throw new Error(e);
                     if (null === t) throw new Error(e);
                     if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                     else if (!(Array.isArray(t) || h && ArrayBuffer.isView(t))) throw new Error(e)
                  }
                  t.length > 64 && (t = new S(n, !0).update(t).array());
                  var u = [],
                     d = [];
                  for (r = 0; r < 64; ++r) {
                     var p = t[r] || 0;
                     u[r] = 92 ^ p, d[r] = 54 ^ p
                  }
                  S.call(this, n, i), this.update(d), this.oKeyPad = u, this.inner = !0, this.sharedMemory = i
               }
               S.prototype.update = function (t) {
                  if (!this.finalized) {
                     var n, i = typeof t;
                     if ("string" !== i) {
                        if ("object" !== i) throw new Error(e);
                        if (null === t) throw new Error(e);
                        if (h && t.constructor === ArrayBuffer) t = new Uint8Array(t);
                        else if (!(Array.isArray(t) || h && ArrayBuffer.isView(t))) throw new Error(e);
                        n = !0
                     }
                     for (var r, a, s = 0, o = t.length, l = this.blocks; s < o;) {
                        if (this.hashed && (this.hashed = !1, l[0] = this.block, l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0), n)
                           for (a = this.start; s < o && a < 64; ++s) l[a >> 2] |= t[s] << p[3 & a++];
                        else
                           for (a = this.start; s < o && a < 64; ++s)(r = t.charCodeAt(s)) < 128 ? l[a >> 2] |= r << p[3 & a++] : r < 2048 ? (l[a >> 2] |= (192 | r >> 6) << p[3 & a++], l[a >> 2] |= (128 | 63 & r) << p[3 & a++]) : r < 55296 || r >= 57344 ? (l[a >> 2] |= (224 | r >> 12) << p[3 & a++], l[a >> 2] |= (128 | r >> 6 & 63) << p[3 & a++], l[a >> 2] |= (128 | 63 & r) << p[3 & a++]) : (r = 65536 + ((1023 & r) << 10 | 1023 & t.charCodeAt(++s)), l[a >> 2] |= (240 | r >> 18) << p[3 & a++], l[a >> 2] |= (128 | r >> 12 & 63) << p[3 & a++], l[a >> 2] |= (128 | r >> 6 & 63) << p[3 & a++], l[a >> 2] |= (128 | 63 & r) << p[3 & a++]);
                        this.lastByteIndex = a, this.bytes += a - this.start, a >= 64 ? (this.block = l[16], this.start = a - 64, this.hash(), this.hashed = !0) : this.start = a
                     }
                     return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this
                  }
               }, S.prototype.finalize = function () {
                  if (!this.finalized) {
                     this.finalized = !0;
                     var t = this.blocks,
                        e = this.lastByteIndex;
                     t[16] = this.block, t[e >> 2] |= d[3 & e], this.block = t[16], e >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash()
                  }
               }, S.prototype.hash = function () {
                  var t, e, n, i, r, a, s, o, l, c = this.h0,
                     h = this.h1,
                     u = this.h2,
                     d = this.h3,
                     p = this.h4,
                     m = this.h5,
                     g = this.h6,
                     _ = this.h7,
                     v = this.blocks;
                  for (t = 16; t < 64; ++t) e = ((r = v[t - 15]) >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3, n = ((r = v[t - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, v[t] = v[t - 16] + e + v[t - 7] + n << 0;
                  for (l = h & u, t = 0; t < 64; t += 4) this.first ? (this.is224 ? (a = 300032, _ = (r = v[0] - 1413257819) - 150054599 << 0, d = r + 24177077 << 0) : (a = 704751109, _ = (r = v[0] - 210244248) - 1521486534 << 0, d = r + 143694565 << 0), this.first = !1) : (e = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), i = (a = c & h) ^ c & u ^ l, _ = d + (r = _ + (n = (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) + (p & m ^ ~p & g) + f[t] + v[t]) << 0, d = r + (e + i) << 0), e = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), i = (s = d & c) ^ d & h ^ a, g = u + (r = g + (n = (_ >>> 6 | _ << 26) ^ (_ >>> 11 | _ << 21) ^ (_ >>> 25 | _ << 7)) + (_ & p ^ ~_ & m) + f[t + 1] + v[t + 1]) << 0, e = ((u = r + (e + i) << 0) >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), i = (o = u & d) ^ u & c ^ s, m = h + (r = m + (n = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7)) + (g & _ ^ ~g & p) + f[t + 2] + v[t + 2]) << 0, e = ((h = r + (e + i) << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), i = (l = h & u) ^ h & d ^ o, p = c + (r = p + (n = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7)) + (m & g ^ ~m & _) + f[t + 3] + v[t + 3]) << 0, c = r + (e + i) << 0, this.chromeBugWorkAround = !0;
                  this.h0 = this.h0 + c << 0, this.h1 = this.h1 + h << 0, this.h2 = this.h2 + u << 0, this.h3 = this.h3 + d << 0, this.h4 = this.h4 + p << 0, this.h5 = this.h5 + m << 0, this.h6 = this.h6 + g << 0, this.h7 = this.h7 + _ << 0
               }, S.prototype.hex = function () {
                  this.finalize();
                  var t = this.h0,
                     e = this.h1,
                     n = this.h2,
                     i = this.h3,
                     r = this.h4,
                     a = this.h5,
                     s = this.h6,
                     o = this.h7,
                     l = u[t >> 28 & 15] + u[t >> 24 & 15] + u[t >> 20 & 15] + u[t >> 16 & 15] + u[t >> 12 & 15] + u[t >> 8 & 15] + u[t >> 4 & 15] + u[15 & t] + u[e >> 28 & 15] + u[e >> 24 & 15] + u[e >> 20 & 15] + u[e >> 16 & 15] + u[e >> 12 & 15] + u[e >> 8 & 15] + u[e >> 4 & 15] + u[15 & e] + u[n >> 28 & 15] + u[n >> 24 & 15] + u[n >> 20 & 15] + u[n >> 16 & 15] + u[n >> 12 & 15] + u[n >> 8 & 15] + u[n >> 4 & 15] + u[15 & n] + u[i >> 28 & 15] + u[i >> 24 & 15] + u[i >> 20 & 15] + u[i >> 16 & 15] + u[i >> 12 & 15] + u[i >> 8 & 15] + u[i >> 4 & 15] + u[15 & i] + u[r >> 28 & 15] + u[r >> 24 & 15] + u[r >> 20 & 15] + u[r >> 16 & 15] + u[r >> 12 & 15] + u[r >> 8 & 15] + u[r >> 4 & 15] + u[15 & r] + u[a >> 28 & 15] + u[a >> 24 & 15] + u[a >> 20 & 15] + u[a >> 16 & 15] + u[a >> 12 & 15] + u[a >> 8 & 15] + u[a >> 4 & 15] + u[15 & a] + u[s >> 28 & 15] + u[s >> 24 & 15] + u[s >> 20 & 15] + u[s >> 16 & 15] + u[s >> 12 & 15] + u[s >> 8 & 15] + u[s >> 4 & 15] + u[15 & s];
                  return this.is224 || (l += u[o >> 28 & 15] + u[o >> 24 & 15] + u[o >> 20 & 15] + u[o >> 16 & 15] + u[o >> 12 & 15] + u[o >> 8 & 15] + u[o >> 4 & 15] + u[15 & o]), l
               }, S.prototype.toString = S.prototype.hex, S.prototype.digest = function () {
                  this.finalize();
                  var t = this.h0,
                     e = this.h1,
                     n = this.h2,
                     i = this.h3,
                     r = this.h4,
                     a = this.h5,
                     s = this.h6,
                     o = this.h7,
                     l = [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a, s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, 255 & s];
                  return this.is224 || l.push(o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o), l
               }, S.prototype.array = S.prototype.digest, S.prototype.arrayBuffer = function () {
                  this.finalize();
                  var t = new ArrayBuffer(this.is224 ? 28 : 32),
                     e = new DataView(t);
                  return e.setUint32(0, this.h0), e.setUint32(4, this.h1), e.setUint32(8, this.h2), e.setUint32(12, this.h3), e.setUint32(16, this.h4), e.setUint32(20, this.h5), e.setUint32(24, this.h6), this.is224 || e.setUint32(28, this.h7), t
               }, E.prototype = new S, E.prototype.finalize = function () {
                  if (S.prototype.finalize.call(this), this.inner) {
                     this.inner = !1;
                     var t = this.array();
                     S.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(t), S.prototype.finalize.call(this)
                  }
               };
               var b = v();
               b.sha256 = b, b.sha224 = v(!0), b.sha256.hmac = M(), b.sha224.hmac = M(!0), l ? t.exports = b : (a.sha256 = b.sha256, a.sha224 = b.sha224, c && (void 0 === (i = function () {
                  return b
               }.call(b, n, b, t)) || (t.exports = i)))
            }()
         },
         371: () => {},
         127: () => {}
      },
      e = {};

   function n(i) {
      var r = e[i];
      if (void 0 !== r) return r.exports;
      var a = e[i] = {
         exports: {}
      };
      return t[i](a, a.exports, n), a.exports
   }
   n.amdO = {}, n.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
         return this || new Function("return this")()
      } catch (t) {
         if ("object" == typeof window) return window
      }
   }(), (() => {
      "use strict";
      /**
       * @license
       * Copyright 2010-2023 Three.js Authors
       * SPDX-License-Identifier: MIT
       */
      const t = "155",
         e = 100,
         i = 301,
         r = 302,
         a = 303,
         s = 304,
         o = 306,
         l = 1e3,
         c = 1001,
         h = 1002,
         u = 1003,
         d = 1004,
         p = 1005,
         f = 1006,
         m = 1008,
         g = 1009,
         _ = 1012,
         v = 1013,
         x = 1014,
         y = 1015,
         M = 1016,
         S = 1020,
         E = 1023,
         b = 1026,
         w = 1027,
         T = 33776,
         A = 33777,
         R = 33778,
         C = 33779,
         P = 36492,
         L = 2300,
         U = 2301,
         D = 2302,
         I = 2400,
         N = 2401,
         O = 2402,
         F = 3001,
         k = "",
         z = "srgb",
         B = "srgb-linear",
         H = "display-p3",
         V = 7680,
         W = 35044,
         G = "300 es",
         X = 1035,
         j = 2e3,
         q = 2001;
      class Y {
         addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
         }
         hasEventListener(t, e) {
            if (void 0 === this._listeners) return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
         }
         removeEventListener(t, e) {
            if (void 0 === this._listeners) return;
            const n = this._listeners[t];
            if (void 0 !== n) {
               const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
            }
         }
         dispatchEvent(t) {
            if (void 0 === this._listeners) return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
               t.target = this;
               const n = e.slice(0);
               for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t);
               t.target = null
            }
         }
      }
      const Z = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
      const K = Math.PI / 180,
         J = 180 / Math.PI;

      function Q() {
         const t = 4294967295 * Math.random() | 0,
            e = 4294967295 * Math.random() | 0,
            n = 4294967295 * Math.random() | 0,
            i = 4294967295 * Math.random() | 0;
         return (Z[255 & t] + Z[t >> 8 & 255] + Z[t >> 16 & 255] + Z[t >> 24 & 255] + "-" + Z[255 & e] + Z[e >> 8 & 255] + "-" + Z[e >> 16 & 15 | 64] + Z[e >> 24 & 255] + "-" + Z[63 & n | 128] + Z[n >> 8 & 255] + "-" + Z[n >> 16 & 255] + Z[n >> 24 & 255] + Z[255 & i] + Z[i >> 8 & 255] + Z[i >> 16 & 255] + Z[i >> 24 & 255]).toLowerCase()
      }

      function $(t, e, n) {
         return Math.max(e, Math.min(n, t))
      }

      function tt(t, e) {
         return (t % e + e) % e
      }

      function et(t, e, n) {
         return (1 - n) * t + n * e
      }

      function nt(t) {
         return 0 == (t & t - 1) && 0 !== t
      }

      function it(t) {
         return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      }

      function rt(t, e) {
         switch (e.constructor) {
            case Float32Array:
               return t;
            case Uint32Array:
               return t / 4294967295;
            case Uint16Array:
               return t / 65535;
            case Uint8Array:
               return t / 255;
            case Int32Array:
               return Math.max(t / 2147483647, -1);
            case Int16Array:
               return Math.max(t / 32767, -1);
            case Int8Array:
               return Math.max(t / 127, -1);
            default:
               throw new Error("Invalid component type.")
         }
      }

      function at(t, e) {
         switch (e.constructor) {
            case Float32Array:
               return t;
            case Uint32Array:
               return Math.round(4294967295 * t);
            case Uint16Array:
               return Math.round(65535 * t);
            case Uint8Array:
               return Math.round(255 * t);
            case Int32Array:
               return Math.round(2147483647 * t);
            case Int16Array:
               return Math.round(32767 * t);
            case Int8Array:
               return Math.round(127 * t);
            default:
               throw new Error("Invalid component type.")
         }
      }
      class st {
         constructor(t = 0, e = 0) {
            st.prototype.isVector2 = !0, this.x = t, this.y = e
         }
         get width() {
            return this.x
         }
         set width(t) {
            this.x = t
         }
         get height() {
            return this.y
         }
         set height(t) {
            this.y = t
         }
         set(t, e) {
            return this.x = t, this.y = e, this
         }
         setScalar(t) {
            return this.x = t, this.y = t, this
         }
         setX(t) {
            return this.x = t, this
         }
         setY(t) {
            return this.y = t, this
         }
         setComponent(t, e) {
            switch (t) {
               case 0:
                  this.x = e;
                  break;
               case 1:
                  this.y = e;
                  break;
               default:
                  throw new Error("index is out of range: " + t)
            }
            return this
         }
         getComponent(t) {
            switch (t) {
               case 0:
                  return this.x;
               case 1:
                  return this.y;
               default:
                  throw new Error("index is out of range: " + t)
            }
         }
         clone() {
            return new this.constructor(this.x, this.y)
         }
         copy(t) {
            return this.x = t.x, this.y = t.y, this
         }
         add(t) {
            return this.x += t.x, this.y += t.y, this
         }
         addScalar(t) {
            return this.x += t, this.y += t, this
         }
         addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
         }
         addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
         }
         sub(t) {
            return this.x -= t.x, this.y -= t.y, this
         }
         subScalar(t) {
            return this.x -= t, this.y -= t, this
         }
         subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
         }
         multiply(t) {
            return this.x *= t.x, this.y *= t.y, this
         }
         multiplyScalar(t) {
            return this.x *= t, this.y *= t, this
         }
         divide(t) {
            return this.x /= t.x, this.y /= t.y, this
         }
         divideScalar(t) {
            return this.multiplyScalar(1 / t)
         }
         applyMatrix3(t) {
            const e = this.x,
               n = this.y,
               i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
         }
         min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
         }
         max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
         }
         clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
         }
         clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
         }
         clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
         }
         floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
         }
         ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
         }
         round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
         }
         roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
         }
         negate() {
            return this.x = -this.x, this.y = -this.y, this
         }
         dot(t) {
            return this.x * t.x + this.y * t.y
         }
         cross(t) {
            return this.x * t.y - this.y * t.x
         }
         lengthSq() {
            return this.x * this.x + this.y * this.y
         }
         length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
         }
         manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
         }
         normalize() {
            return this.divideScalar(this.length() || 1)
         }
         angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
         }
         angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos($(n, -1, 1))
         }
         distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
         }
         distanceToSquared(t) {
            const e = this.x - t.x,
               n = this.y - t.y;
            return e * e + n * n
         }
         manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
         }
         setLength(t) {
            return this.normalize().multiplyScalar(t)
         }
         lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
         }
         lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
         }
         equals(t) {
            return t.x === this.x && t.y === this.y
         }
         fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this
         }
         toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t
         }
         fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this
         }
         rotateAround(t, e) {
            const n = Math.cos(e),
               i = Math.sin(e),
               r = this.x - t.x,
               a = this.y - t.y;
            return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this
         }
         random() {
            return this.x = Math.random(), this.y = Math.random(), this
         }*[Symbol.iterator]() {
            yield this.x, yield this.y
         }
      }
      class ot {
         constructor(t, e, n, i, r, a, s, o, l) {
            ot.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t && this.set(t, e, n, i, r, a, s, o, l)
         }
         set(t, e, n, i, r, a, s, o, l) {
            const c = this.elements;
            return c[0] = t, c[1] = i, c[2] = s, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = a, c[8] = l, this
         }
         identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
         }
         copy(t) {
            const e = this.elements,
               n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
         }
         extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
         }
         setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
         }
         multiply(t) {
            return this.multiplyMatrices(this, t)
         }
         premultiply(t) {
            return this.multiplyMatrices(t, this)
         }
         multiplyMatrices(t, e) {
            const n = t.elements,
               i = e.elements,
               r = this.elements,
               a = n[0],
               s = n[3],
               o = n[6],
               l = n[1],
               c = n[4],
               h = n[7],
               u = n[2],
               d = n[5],
               p = n[8],
               f = i[0],
               m = i[3],
               g = i[6],
               _ = i[1],
               v = i[4],
               x = i[7],
               y = i[2],
               M = i[5],
               S = i[8];
            return r[0] = a * f + s * _ + o * y, r[3] = a * m + s * v + o * M, r[6] = a * g + s * x + o * S, r[1] = l * f + c * _ + h * y, r[4] = l * m + c * v + h * M, r[7] = l * g + c * x + h * S, r[2] = u * f + d * _ + p * y, r[5] = u * m + d * v + p * M, r[8] = u * g + d * x + p * S, this
         }
         multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
         }
         determinant() {
            const t = this.elements,
               e = t[0],
               n = t[1],
               i = t[2],
               r = t[3],
               a = t[4],
               s = t[5],
               o = t[6],
               l = t[7],
               c = t[8];
            return e * a * c - e * s * l - n * r * c + n * s * o + i * r * l - i * a * o
         }
         invert() {
            const t = this.elements,
               e = t[0],
               n = t[1],
               i = t[2],
               r = t[3],
               a = t[4],
               s = t[5],
               o = t[6],
               l = t[7],
               c = t[8],
               h = c * a - s * l,
               u = s * o - c * r,
               d = l * r - a * o,
               p = e * h + n * u + i * d;
            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const f = 1 / p;
            return t[0] = h * f, t[1] = (i * l - c * n) * f, t[2] = (s * n - i * a) * f, t[3] = u * f, t[4] = (c * e - i * o) * f, t[5] = (i * r - s * e) * f, t[6] = d * f, t[7] = (n * o - l * e) * f, t[8] = (a * e - n * r) * f, this
         }
         transpose() {
            let t;
            const e = this.elements;
            return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
         }
         getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose()
         }
         transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
         }
         setUvTransform(t, e, n, i, r, a, s) {
            const o = Math.cos(r),
               l = Math.sin(r);
            return this.set(n * o, n * l, -n * (o * a + l * s) + a + t, -i * l, i * o, -i * (-l * a + o * s) + s + e, 0, 0, 1), this
         }
         scale(t, e) {
            return this.premultiply(lt.makeScale(t, e)), this
         }
         rotate(t) {
            return this.premultiply(lt.makeRotation(-t)), this
         }
         translate(t, e) {
            return this.premultiply(lt.makeTranslation(t, e)), this
         }
         makeTranslation(t, e) {
            return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this
         }
         makeRotation(t) {
            const e = Math.cos(t),
               n = Math.sin(t);
            return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this
         }
         makeScale(t, e) {
            return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this
         }
         equals(t) {
            const e = this.elements,
               n = t.elements;
            for (let t = 0; t < 9; t++)
               if (e[t] !== n[t]) return !1;
            return !0
         }
         fromArray(t, e = 0) {
            for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
            return this
         }
         toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
         }
         clone() {
            return (new this.constructor).fromArray(this.elements)
         }
      }
      const lt = new ot;

      function ct(t) {
         for (let e = t.length - 1; e >= 0; --e)
            if (t[e] >= 65535) return !0;
         return !1
      }
      Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;

      function ht(t) {
         return document.createElementNS("http://www.w3.org/1999/xhtml", t)
      }
      const ut = {};

      function dt(t) {
         t in ut || (ut[t] = !0, console.warn(t))
      }

      function pt(t) {
         return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
      }

      function ft(t) {
         return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
      }
      const mt = (new ot).fromArray([.8224621, .0331941, .0170827, .177538, .9668058, .0723974, -1e-7, 1e-7, .9105199]),
         gt = (new ot).fromArray([1.2249401, -.0420569, -.0196376, -.2249404, 1.0420571, -.0786361, 1e-7, 0, 1.0982735]);
      const _t = {
            [B]: t => t,
            [z]: t => t.convertSRGBToLinear(),
            [H]: function (t) {
               return t.convertSRGBToLinear().applyMatrix3(gt)
            }
         },
         vt = {
            [B]: t => t,
            [z]: t => t.convertLinearToSRGB(),
            [H]: function (t) {
               return t.applyMatrix3(mt).convertLinearToSRGB()
            }
         },
         xt = {
            enabled: !0,
            get legacyMode() {
               return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled
            },
            set legacyMode(t) {
               console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !t
            },
            get workingColorSpace() {
               return B
            },
            set workingColorSpace(t) {
               console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
            },
            convert: function (t, e, n) {
               if (!1 === this.enabled || e === n || !e || !n) return t;
               const i = _t[e],
                  r = vt[n];
               if (void 0 === i || void 0 === r) throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);
               return r(i(t))
            },
            fromWorkingColorSpace: function (t, e) {
               return this.convert(t, this.workingColorSpace, e)
            },
            toWorkingColorSpace: function (t, e) {
               return this.convert(t, e, this.workingColorSpace)
            }
         };
      let yt;
      class Mt {
         static getDataURL(t) {
            if (/^data:/i.test(t.src)) return t.src;
            if ("undefined" == typeof HTMLCanvasElement) return t.src;
            let e;
            if (t instanceof HTMLCanvasElement) e = t;
            else {
               void 0 === yt && (yt = ht("canvas")), yt.width = t.width, yt.height = t.height;
               const n = yt.getContext("2d");
               t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = yt
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
         }
         static sRGBToLinear(t) {
            if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
               const e = ht("canvas");
               e.width = t.width, e.height = t.height;
               const n = e.getContext("2d");
               n.drawImage(t, 0, 0, t.width, t.height);
               const i = n.getImageData(0, 0, t.width, t.height),
                  r = i.data;
               for (let t = 0; t < r.length; t++) r[t] = 255 * pt(r[t] / 255);
               return n.putImageData(i, 0, 0), e
            }
            if (t.data) {
               const e = t.data.slice(0);
               for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * pt(e[t] / 255)) : e[t] = pt(e[t]);
               return {
                  data: e,
                  width: t.width,
                  height: t.height
               }
            }
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t
         }
      }
      let St = 0;
      class Et {
         constructor(t = null) {
            this.isSource = !0, Object.defineProperty(this, "id", {
               value: St++
            }), this.uuid = Q(), this.data = t, this.version = 0
         }
         set needsUpdate(t) {
            !0 === t && this.version++
         }
         toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
            const n = {
                  uuid: this.uuid,
                  url: ""
               },
               i = this.data;
            if (null !== i) {
               let t;
               if (Array.isArray(i)) {
                  t = [];
                  for (let e = 0, n = i.length; e < n; e++) i[e].isDataTexture ? t.push(bt(i[e].image)) : t.push(bt(i[e]))
               } else t = bt(i);
               n.url = t
            }
            return e || (t.images[this.uuid] = n), n
         }
      }

      function bt(t) {
         return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Mt.getDataURL(t) : t.data ? {
            data: Array.from(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
         } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
      }
      let wt = 0;
      class Tt extends Y {
         constructor(t = Tt.DEFAULT_IMAGE, e = Tt.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, s = 1023, o = 1009, l = Tt.DEFAULT_ANISOTROPY, c = "") {
            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
               value: wt++
            }), this.uuid = Q(), this.name = "", this.source = new Et(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = s, this.internalFormat = null, this.type = o, this.offset = new st(0, 0), this.repeat = new st(1, 1), this.center = new st(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new ot, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, "string" == typeof c ? this.colorSpace = c : (dt("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = c === F ? z : k), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1
         }
         get image() {
            return this.source.data
         }
         set image(t = null) {
            this.source.data = t
         }
         updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
         }
         clone() {
            return (new this.constructor).copy(this)
         }
         copy(t) {
            return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this
         }
         toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            const n = {
               metadata: {
                  version: 4.6,
                  type: "Texture",
                  generator: "Texture.toJSON"
               },
               uuid: this.uuid,
               name: this.name,
               image: this.source.toJSON(t).uuid,
               mapping: this.mapping,
               channel: this.channel,
               repeat: [this.repeat.x, this.repeat.y],
               offset: [this.offset.x, this.offset.y],
               center: [this.center.x, this.center.y],
               rotation: this.rotation,
               wrap: [this.wrapS, this.wrapT],
               format: this.format,
               internalFormat: this.internalFormat,
               type: this.type,
               colorSpace: this.colorSpace,
               minFilter: this.minFilter,
               magFilter: this.magFilter,
               anisotropy: this.anisotropy,
               flipY: this.flipY,
               generateMipmaps: this.generateMipmaps,
               premultiplyAlpha: this.premultiplyAlpha,
               unpackAlignment: this.unpackAlignment
            };
            return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n
         }
         dispose() {
            this.dispatchEvent({
               type: "dispose"
            })
         }
         transformUv(t) {
            if (300 !== this.mapping) return t;
            if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
               case l:
                  t.x = t.x - Math.floor(t.x);
                  break;
               case c:
                  t.x = t.x < 0 ? 0 : 1;
                  break;
               case h:
                  1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
            }
            if (t.y < 0 || t.y > 1) switch (this.wrapT) {
               case l:
                  t.y = t.y - Math.floor(t.y);
                  break;
               case c:
                  t.y = t.y < 0 ? 0 : 1;
                  break;
               case h:
                  1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
            }
            return this.flipY && (t.y = 1 - t.y), t
         }
         set needsUpdate(t) {
            !0 === t && (this.version++, this.source.needsUpdate = !0)
         }
         get encoding() {
            return dt("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === z ? F : 3e3
         }
         set encoding(t) {
            dt("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = t === F ? z : k
         }
      }
      Tt.DEFAULT_IMAGE = null, Tt.DEFAULT_MAPPING = 300, Tt.DEFAULT_ANISOTROPY = 1;
      class At {
         constructor(t = 0, e = 0, n = 0, i = 1) {
            At.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i
         }
         get width() {
            return this.z
         }
         set width(t) {
            this.z = t
         }
         get height() {
            return this.w
         }
         set height(t) {
            this.w = t
         }
         set(t, e, n, i) {
            return this.x = t, this.y = e, this.z = n, this.w = i, this
         }
         setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this.w = t, this
         }
         setX(t) {
            return this.x = t, this
         }
         setY(t) {
            return this.y = t, this
         }
         setZ(t) {
            return this.z = t, this
         }
         setW(t) {
            return this.w = t, this
         }
         setComponent(t, e) {
            switch (t) {
               case 0:
                  this.x = e;
                  break;
               case 1:
                  this.y = e;
                  break;
               case 2:
                  this.z = e;
                  break;
               case 3:
                  this.w = e;
                  break;
               default:
                  throw new Error("index is out of range: " + t)
            }
            return this
         }
         getComponent(t) {
            switch (t) {
               case 0:
                  return this.x;
               case 1:
                  return this.y;
               case 2:
                  return this.z;
               case 3:
                  return this.w;
               default:
                  throw new Error("index is out of range: " + t)
            }
         }
         clone() {
            return new this.constructor(this.x, this.y, this.z, this.w)
         }
         copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
         }
         add(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this
         }
         addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
         }
         addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
         }
         addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
         }
         sub(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this
         }
         subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
         }
         subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
         }
         multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this
         }
         multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
         }
         applyMatrix4(t) {
            const e = this.x,
               n = this.y,
               i = this.z,
               r = this.w,
               a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this
         }
         divideScalar(t) {
            return this.multiplyScalar(1 / t)
         }
         setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
         }
         setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const a = .01,
               s = .1,
               o = t.elements,
               l = o[0],
               c = o[4],
               h = o[8],
               u = o[1],
               d = o[5],
               p = o[9],
               f = o[2],
               m = o[6],
               g = o[10];
            if (Math.abs(c - u) < a && Math.abs(h - f) < a && Math.abs(p - m) < a) {
               if (Math.abs(c + u) < s && Math.abs(h + f) < s && Math.abs(p + m) < s && Math.abs(l + d + g - 3) < s) return this.set(1, 0, 0, 0), this;
               e = Math.PI;
               const t = (l + 1) / 2,
                  o = (d + 1) / 2,
                  _ = (g + 1) / 2,
                  v = (c + u) / 4,
                  x = (h + f) / 4,
                  y = (p + m) / 4;
               return t > o && t > _ ? t < a ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = v / n, r = x / n) : o > _ ? o < a ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), n = v / i, r = y / i) : _ < a ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(_), n = x / r, i = y / r), this.set(n, i, r, e), this
            }
            let _ = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - c) * (u - c));
            return Math.abs(_) < .001 && (_ = 1), this.x = (m - p) / _, this.y = (h - f) / _, this.z = (u - c) / _, this.w = Math.acos((l + d + g - 1) / 2), this
         }
         min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
         }
         max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
         }
         clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
         }
         clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
         }
         clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
         }
         floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
         }
         ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
         }
         round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
         }
         roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
         }
         negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
         }
         dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
         }
         lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
         }
         length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
         }
         manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
         }
         normalize() {
            return this.divideScalar(this.length() || 1)
         }
         setLength(t) {
            return this.normalize().multiplyScalar(t)
         }
         lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
         }
         lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
         }
         equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
         }
         fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
         }
         toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
         }
         fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
         }
         random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
         }*[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z, yield this.w
         }
      }
      class Rt extends Y {
         constructor(t = 1, e = 1, n = {}) {
            super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new At(0, 0, t, e), this.scissorTest = !1, this.viewport = new At(0, 0, t, e);
            const i = {
               width: t,
               height: e,
               depth: 1
            };
            void 0 !== n.encoding && (dt("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === F ? z : k), this.texture = new Tt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.internalFormat = void 0 !== n.internalFormat ? n.internalFormat : null, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : f, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null, this.samples = void 0 !== n.samples ? n.samples : 0
         }
         setSize(t, e, n = 1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t, this.height = e, this.depth = n, this.texture.image.width = t, this.texture.image.height = e, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
         }
         clone() {
            return (new this.constructor).copy(this)
         }
         copy(t) {
            this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.texture.isRenderTargetTexture = !0;
            const e = Object.assign({}, t.texture.image);
            return this.texture.source = new Et(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, null !== t.depthTexture && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this
         }
         dispose() {
            this.dispatchEvent({
               type: "dispose"
            })
         }
      }
      class Ct extends Rt {
         constructor(t = 1, e = 1, n = {}) {
            super(t, e, n), this.isWebGLRenderTarget = !0
         }
      }
      class Pt extends Tt {
         constructor(t = null, e = 1, n = 1, i = 1) {
            super(null), this.isDataArrayTexture = !0, this.image = {
               data: t,
               width: e,
               height: n,
               depth: i
            }, this.magFilter = u, this.minFilter = u, this.wrapR = c, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
         }
      }
      class Lt extends Tt {
         constructor(t = null, e = 1, n = 1, i = 1) {
            super(null), this.isData3DTexture = !0, this.image = {
               data: t,
               width: e,
               height: n,
               depth: i
            }, this.magFilter = u, this.minFilter = u, this.wrapR = c, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
         }
      }
      class Ut {
         constructor(t = 0, e = 0, n = 0, i = 1) {
            this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i
         }
         static slerpFlat(t, e, n, i, r, a, s) {
            let o = n[i + 0],
               l = n[i + 1],
               c = n[i + 2],
               h = n[i + 3];
            const u = r[a + 0],
               d = r[a + 1],
               p = r[a + 2],
               f = r[a + 3];
            if (0 === s) return t[e + 0] = o, t[e + 1] = l, t[e + 2] = c, void(t[e + 3] = h);
            if (1 === s) return t[e + 0] = u, t[e + 1] = d, t[e + 2] = p, void(t[e + 3] = f);
            if (h !== f || o !== u || l !== d || c !== p) {
               let t = 1 - s;
               const e = o * u + l * d + c * p + h * f,
                  n = e >= 0 ? 1 : -1,
                  i = 1 - e * e;
               if (i > Number.EPSILON) {
                  const r = Math.sqrt(i),
                     a = Math.atan2(r, e * n);
                  t = Math.sin(t * a) / r, s = Math.sin(s * a) / r
               }
               const r = s * n;
               if (o = o * t + u * r, l = l * t + d * r, c = c * t + p * r, h = h * t + f * r, t === 1 - s) {
                  const t = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
                  o *= t, l *= t, c *= t, h *= t
               }
            }
            t[e] = o, t[e + 1] = l, t[e + 2] = c, t[e + 3] = h
         }
         static multiplyQuaternionsFlat(t, e, n, i, r, a) {
            const s = n[i],
               o = n[i + 1],
               l = n[i + 2],
               c = n[i + 3],
               h = r[a],
               u = r[a + 1],
               d = r[a + 2],
               p = r[a + 3];
            return t[e] = s * p + c * h + o * d - l * u, t[e + 1] = o * p + c * u + l * h - s * d, t[e + 2] = l * p + c * d + s * u - o * h, t[e + 3] = c * p - s * h - o * u - l * d, t
         }
         get x() {
            return this._x
         }
         set x(t) {
            this._x = t, this._onChangeCallback()
         }
         get y() {
            return this._y
         }
         set y(t) {
            this._y = t, this._onChangeCallback()
         }
         get z() {
            return this._z
         }
         set z(t) {
            this._z = t, this._onChangeCallback()
         }
         get w() {
            return this._w
         }
         set w(t) {
            this._w = t, this._onChangeCallback()
         }
         set(t, e, n, i) {
            return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
         }
         clone() {
            return new this.constructor(this._x, this._y, this._z, this._w)
         }
         copy(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
         }
         setFromEuler(t, e) {
            const n = t._x,
               i = t._y,
               r = t._z,
               a = t._order,
               s = Math.cos,
               o = Math.sin,
               l = s(n / 2),
               c = s(i / 2),
               h = s(r / 2),
               u = o(n / 2),
               d = o(i / 2),
               p = o(r / 2);
            switch (a) {
               case "XYZ":
                  this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                  break;
               case "YXZ":
                  this._x = u * c * h + l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                  break;
               case "ZXY":
                  this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h - u * d * p;
                  break;
               case "ZYX":
                  this._x = u * c * h - l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h + u * d * p;
                  break;
               case "YZX":
                  this._x = u * c * h + l * d * p, this._y = l * d * h + u * c * p, this._z = l * c * p - u * d * h, this._w = l * c * h - u * d * p;
                  break;
               case "XZY":
                  this._x = u * c * h - l * d * p, this._y = l * d * h - u * c * p, this._z = l * c * p + u * d * h, this._w = l * c * h + u * d * p;
                  break;
               default:
                  console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
            }
            return !1 !== e && this._onChangeCallback(), this
         }
         setFromAxisAngle(t, e) {
            const n = e / 2,
               i = Math.sin(n);
            return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
         }
         setFromRotationMatrix(t) {
            const e = t.elements,
               n = e[0],
               i = e[4],
               r = e[8],
               a = e[1],
               s = e[5],
               o = e[9],
               l = e[2],
               c = e[6],
               h = e[10],
               u = n + s + h;
            if (u > 0) {
               const t = .5 / Math.sqrt(u + 1);
               this._w = .25 / t, this._x = (c - o) * t, this._y = (r - l) * t, this._z = (a - i) * t
            } else if (n > s && n > h) {
               const t = 2 * Math.sqrt(1 + n - s - h);
               this._w = (c - o) / t, this._x = .25 * t, this._y = (i + a) / t, this._z = (r + l) / t
            } else if (s > h) {
               const t = 2 * Math.sqrt(1 + s - n - h);
               this._w = (r - l) / t, this._x = (i + a) / t, this._y = .25 * t, this._z = (o + c) / t
            } else {
               const t = 2 * Math.sqrt(1 + h - n - s);
               this._w = (a - i) / t, this._x = (r + l) / t, this._y = (o + c) / t, this._z = .25 * t
            }
            return this._onChangeCallback(), this
         }
         setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
         }
         angleTo(t) {
            return 2 * Math.acos(Math.abs($(this.dot(t), -1, 1)))
         }
         rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n) return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i), this
         }
         identity() {
            return this.set(0, 0, 0, 1)
         }
         invert() {
            return this.conjugate()
         }
         conjugate() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
         }
         dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
         }
         lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
         }
         length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
         }
         normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
         }
         multiply(t) {
            return this.multiplyQuaternions(this, t)
         }
         premultiply(t) {
            return this.multiplyQuaternions(t, this)
         }
         multiplyQuaternions(t, e) {
            const n = t._x,
               i = t._y,
               r = t._z,
               a = t._w,
               s = e._x,
               o = e._y,
               l = e._z,
               c = e._w;
            return this._x = n * c + a * s + i * l - r * o, this._y = i * c + a * o + r * s - n * l, this._z = r * c + a * l + n * o - i * s, this._w = a * c - n * s - i * o - r * l, this._onChangeCallback(), this
         }
         slerp(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            const n = this._x,
               i = this._y,
               r = this._z,
               a = this._w;
            let s = a * t._w + n * t._x + i * t._y + r * t._z;
            if (s < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), s >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
            const o = 1 - s * s;
            if (o <= Number.EPSILON) {
               const t = 1 - e;
               return this._w = t * a + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
            }
            const l = Math.sqrt(o),
               c = Math.atan2(l, s),
               h = Math.sin((1 - e) * c) / l,
               u = Math.sin(e * c) / l;
            return this._w = a * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
         }
         slerpQuaternions(t, e, n) {
            return this.copy(t).slerp(e, n)
         }
         random() {
            const t = Math.random(),
               e = Math.sqrt(1 - t),
               n = Math.sqrt(t),
               i = 2 * Math.PI * Math.random(),
               r = 2 * Math.PI * Math.random();
            return this.set(e * Math.cos(i), n * Math.sin(r), n * Math.cos(r), e * Math.sin(i))
         }
         equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
         }
         fromArray(t, e = 0) {
            return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
         }
         toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
         }
         fromBufferAttribute(t, e) {
            return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
         }
         toJSON() {
            return this.toArray()
         }
         _onChange(t) {
            return this._onChangeCallback = t, this
         }
         _onChangeCallback() {}*[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._w
         }
      }
      class Dt {
         constructor(t = 0, e = 0, n = 0) {
            Dt.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n
         }
         set(t, e, n) {
            return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
         }
         setScalar(t) {
            return this.x = t, this.y = t, this.z = t, this
         }
         setX(t) {
            return this.x = t, this
         }
         setY(t) {
            return this.y = t, this
         }
         setZ(t) {
            return this.z = t, this
         }
         setComponent(t, e) {
            switch (t) {
               case 0:
                  this.x = e;
                  break;
               case 1:
                  this.y = e;
                  break;
               case 2:
                  this.z = e;
                  break;
               default:
                  throw new Error("index is out of range: " + t)
            }
            return this
         }
         getComponent(t) {
            switch (t) {
               case 0:
                  return this.x;
               case 1:
                  return this.y;
               case 2:
                  return this.z;
               default:
                  throw new Error("index is out of range: " + t)
            }
         }
         clone() {
            return new this.constructor(this.x, this.y, this.z)
         }
         copy(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
         }
         add(t) {
            return this.x += t.x, this.y += t.y, this.z += t.z, this
         }
         addScalar(t) {
            return this.x += t, this.y += t, this.z += t, this
         }
         addVectors(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
         }
         addScaledVector(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
         }
         sub(t) {
            return this.x -= t.x, this.y -= t.y, this.z -= t.z, this
         }
         subScalar(t) {
            return this.x -= t, this.y -= t, this.z -= t, this
         }
         subVectors(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
         }
         multiply(t) {
            return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
         }
         multiplyScalar(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
         }
         multiplyVectors(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
         }
         applyEuler(t) {
            return this.applyQuaternion(Nt.setFromEuler(t))
         }
         applyAxisAngle(t, e) {
            return this.applyQuaternion(Nt.setFromAxisAngle(t, e))
         }
         applyMatrix3(t) {
            const e = this.x,
               n = this.y,
               i = this.z,
               r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
         }
         applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize()
         }
         applyMatrix4(t) {
            const e = this.x,
               n = this.y,
               i = this.z,
               r = t.elements,
               a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this
         }
         applyQuaternion(t) {
            const e = this.x,
               n = this.y,
               i = this.z,
               r = t.x,
               a = t.y,
               s = t.z,
               o = t.w,
               l = o * e + a * i - s * n,
               c = o * n + s * e - r * i,
               h = o * i + r * n - a * e,
               u = -r * e - a * n - s * i;
            return this.x = l * o + u * -r + c * -s - h * -a, this.y = c * o + u * -a + h * -r - l * -s, this.z = h * o + u * -s + l * -a - c * -r, this
         }
         project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
         }
         unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
         }
         transformDirection(t) {
            const e = this.x,
               n = this.y,
               i = this.z,
               r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
         }
         divide(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
         }
         divideScalar(t) {
            return this.multiplyScalar(1 / t)
         }
         min(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
         }
         max(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
         }
         clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
         }
         clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
         }
         clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
         }
         floor() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
         }
         ceil() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
         }
         round() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
         }
         roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
         }
         negate() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
         }
         dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
         }
         lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
         }
         length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
         }
         manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
         }
         normalize() {
            return this.divideScalar(this.length() || 1)
         }
         setLength(t) {
            return this.normalize().multiplyScalar(t)
         }
         lerp(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
         }
         lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
         }
         cross(t) {
            return this.crossVectors(this, t)
         }
         crossVectors(t, e) {
            const n = t.x,
               i = t.y,
               r = t.z,
               a = e.x,
               s = e.y,
               o = e.z;
            return this.x = i * o - r * s, this.y = r * a - n * o, this.z = n * s - i * a, this
         }
         projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e) return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n)
         }
         projectOnPlane(t) {
            return It.copy(this).projectOnVector(t), this.sub(It)
         }
         reflect(t) {
            return this.sub(It.copy(t).multiplyScalar(2 * this.dot(t)))
         }
         angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e) return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos($(n, -1, 1))
         }
         distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
         }
         distanceToSquared(t) {
            const e = this.x - t.x,
               n = this.y - t.y,
               i = this.z - t.z;
            return e * e + n * n + i * i
         }
         manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
         }
         setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
         }
         setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
         }
         setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
         }
         setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
         }
         setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12], this.y = e[13], this.z = e[14], this
         }
         setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length(),
               n = this.setFromMatrixColumn(t, 1).length(),
               i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e, this.y = n, this.z = i, this
         }
         setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e)
         }
         setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e)
         }
         setFromEuler(t) {
            return this.x = t._x, this.y = t._y, this.z = t._z, this
         }
         setFromColor(t) {
            return this.x = t.r, this.y = t.g, this.z = t.b, this
         }
         equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
         }
         fromArray(t, e = 0) {
            return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
         }
         toArray(t = [], e = 0) {
            return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
         }
         fromBufferAttribute(t, e) {
            return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
         }
         random() {
            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
         }
         randomDirection() {
            const t = 2 * (Math.random() - .5),
               e = Math.random() * Math.PI * 2,
               n = Math.sqrt(1 - t ** 2);
            return this.x = n * Math.cos(e), this.y = n * Math.sin(e), this.z = t, this
         }*[Symbol.iterator]() {
            yield this.x, yield this.y, yield this.z
         }
      }
      const It = new Dt,
         Nt = new Ut;
      class Ot {
         constructor(t = new Dt(1 / 0, 1 / 0, 1 / 0), e = new Dt(-1 / 0, -1 / 0, -1 / 0)) {
            this.isBox3 = !0, this.min = t, this.max = e
         }
         set(t, e) {
            return this.min.copy(t), this.max.copy(e), this
         }
         setFromArray(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(kt.fromArray(t, e));
            return this
         }
         setFromBufferAttribute(t) {
            this.makeEmpty();
            for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(kt.fromBufferAttribute(t, e));
            return this
         }
         setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
            return this
         }
         setFromCenterAndSize(t, e) {
            const n = kt.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
         }
         setFromObject(t, e = !1) {
            return this.makeEmpty(), this.expandByObject(t, e)
         }
         clone() {
            return (new this.constructor).copy(this)
         }
         copy(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
         }
         makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
         }
         isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
         }
         getCenter(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
         }
         getSize(t) {
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
         }
         expandByPoint(t) {
            return this.min.min(t), this.max.max(t), this
         }
         expandByVector(t) {
            return this.min.sub(t), this.max.add(t), this
         }
         expandByScalar(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
         }
         expandByObject(t, e = !1) {
            if (t.updateWorldMatrix(!1, !1), void 0 !== t.boundingBox) null === t.boundingBox && t.computeBoundingBox(), zt.copy(t.boundingBox), zt.applyMatrix4(t.matrixWorld), this.union(zt);
            else {
               const n = t.geometry;
               if (void 0 !== n)
                  if (e && void 0 !== n.attributes && void 0 !== n.attributes.position) {
                     const e = n.attributes.position;
                     for (let n = 0, i = e.count; n < i; n++) kt.fromBufferAttribute(e, n).applyMatrix4(t.matrixWorld), this.expandByPoint(kt)
                  } else null === n.boundingBox && n.computeBoundingBox(), zt.copy(n.boundingBox), zt.applyMatrix4(t.matrixWorld), this.union(zt)
            }
            const n = t.children;
            for (let t = 0, i = n.length; t < i; t++) this.expandByObject(n[t], e);
            return this
         }
         containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
         }
         containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
         }
         getParameter(t, e) {
            return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
         }
         intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
         }
         intersectsSphere(t) {
            return this.clampPoint(t.center, kt), kt.distanceToSquared(t.center) <= t.radius * t.radius
         }
         intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
         }
         intersectsTriangle(t) {
            if (this.isEmpty()) return !1;
            this.getCenter(jt), qt.subVectors(this.max, jt), Bt.subVectors(t.a, jt), Ht.subVectors(t.b, jt), Vt.subVectors(t.c, jt), Wt.subVectors(Ht, Bt), Gt.subVectors(Vt, Ht), Xt.subVectors(Bt, Vt);
            let e = [0, -Wt.z, Wt.y, 0, -Gt.z, Gt.y, 0, -Xt.z, Xt.y, Wt.z, 0, -Wt.x, Gt.z, 0, -Gt.x, Xt.z, 0, -Xt.x, -Wt.y, Wt.x, 0, -Gt.y, Gt.x, 0, -Xt.y, Xt.x, 0];
            return !!Kt(e, Bt, Ht, Vt, qt) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Kt(e, Bt, Ht, Vt, qt) && (Yt.crossVectors(Wt, Gt), e = [Yt.x, Yt.y, Yt.z], Kt(e, Bt, Ht, Vt, qt)))
         }
         clampPoint(t, e) {
            return e.copy(t).clamp(this.min, this.max)
         }
         distanceToPoint(t) {
            return this.clampPoint(t, kt).distanceTo(t)
         }
         getBoundingSphere(t) {
            return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = .5 * this.getSize(kt).length()), t
         }
         intersect(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
         }
         union(t) {
            return this.min.min(t.min), this.max.max(t.max), this
         }
         applyMatrix4(t) {
            return this.isEmpty() || (Ft[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Ft[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Ft[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Ft[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Ft[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Ft[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Ft[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Ft[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Ft)), this
         }
         translate(t) {
            return this.min.add(t), this.max.add(t), this
         }
         equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
         }
      }
      const Ft = [new Dt, new Dt, new Dt, new Dt, new Dt, new Dt, new Dt, new Dt],
         kt = new Dt,
         zt = new Ot,
         Bt = new Dt,
         Ht = new Dt,
         Vt = new Dt,
         Wt = new Dt,
         Gt = new Dt,
         Xt = new Dt,
         jt = new Dt,
         qt = new Dt,
         Yt = new Dt,
         Zt = new Dt;

      function Kt(t, e, n, i, r) {
         for (let a = 0, s = t.length - 3; a <= s; a += 3) {
            Zt.fromArray(t, a);
            const s = r.x * Math.abs(Zt.x) + r.y * Math.abs(Zt.y) + r.z * Math.abs(Zt.z),
               o = e.dot(Zt),
               l = n.dot(Zt),
               c = i.dot(Zt);
            if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > s) return !1
         }
         return !0
      }
      const Jt = new Ot,
         Qt = new Dt,
         $t = new Dt;
      class te {
         constructor(t = new Dt, e = -1) {
            this.center = t, this.radius = e
         }
         set(t, e) {
            return this.center.copy(t), this.radius = e, this
         }
         setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : Jt.setFromPoints(t).getCenter(n);
            let i = 0;
            for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
            return this.radius = Math.sqrt(i), this
         }
         copy(t) {
            return this.center.copy(t.center), this.radius = t.radius, this
         }
         isEmpty() {
            return this.radius < 0
         }
         makeEmpty() {
            return this.center.set(0, 0, 0), this.radius = -1, this
         }
         containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
         }
         distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius
         }
         intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
         }
         intersectsBox(t) {
            return t.intersectsSphere(this)
         }
         intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
         }
         clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
         }
         getBoundingBox(t) {
            return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
         }
         applyMatrix4(t) {
            return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
         }
         translate(t) {
            return this.center.add(t), this
         }
         expandByPoint(t) {
            if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
            Qt.subVectors(t, this.center);
            const e = Qt.lengthSq();
            if (e > this.radius * this.radius) {
               const t = Math.sqrt(e),
                  n = .5 * (t - this.radius);
               this.center.addScaledVector(Qt, n / t), this.radius += n
            }
            return this
         }
         union(t) {
            return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? this.radius = Math.max(this.radius, t.radius) : ($t.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Qt.copy(t.center).add($t)), this.expandByPoint(Qt.copy(t.center).sub($t))), this)
         }
         equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius
         }
         clone() {
            return (new this.constructor).copy(this)
         }
      }
      const ee = new Dt,
         ne = new Dt,
         ie = new Dt,
         re = new Dt,
         ae = new Dt,
         se = new Dt,
         oe = new Dt;
      class le {
         constructor(t = new Dt, e = new Dt(0, 0, -1)) {
            this.origin = t, this.direction = e
         }
         set(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
         }
         copy(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
         }
         at(t, e) {
            return e.copy(this.origin).addScaledVector(this.direction, t)
         }
         lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
         }
         recast(t) {
            return this.origin.copy(this.at(t, ee)), this
         }
         closestPointToPoint(t, e) {
            e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n)
         }
         distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
         }
         distanceSqToPoint(t) {
            const e = ee.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (ee.copy(this.origin).addScaledVector(this.direction, e), ee.distanceToSquared(t))
         }
         distanceSqToSegment(t, e, n, i) {
            ne.copy(t).add(e).multiplyScalar(.5), ie.copy(e).sub(t).normalize(), re.copy(this.origin).sub(ne);
            const r = .5 * t.distanceTo(e),
               a = -this.direction.dot(ie),
               s = re.dot(this.direction),
               o = -re.dot(ie),
               l = re.lengthSq(),
               c = Math.abs(1 - a * a);
            let h, u, d, p;
            if (c > 0)
               if (h = a * o - s, u = a * s - o, p = r * c, h >= 0)
                  if (u >= -p)
                     if (u <= p) {
                        const t = 1 / c;
                        h *= t, u *= t, d = h * (h + a * u + 2 * s) + u * (a * h + u + 2 * o) + l
                     } else u = r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
            else u = -r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
            else u <= -p ? (h = Math.max(0, -(-a * r + s)), u = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -o), r), d = u * (u + 2 * o) + l) : (h = Math.max(0, -(a * r + s)), u = h > 0 ? r : Math.min(Math.max(-r, -o), r), d = -h * h + u * (u + 2 * o) + l);
            else u = a > 0 ? -r : r, h = Math.max(0, -(a * u + s)), d = -h * h + u * (u + 2 * o) + l;
            return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(ne).addScaledVector(ie, u), d
         }
         intersectSphere(t, e) {
            ee.subVectors(t.center, this.origin);
            const n = ee.dot(this.direction),
               i = ee.dot(ee) - n * n,
               r = t.radius * t.radius;
            if (i > r) return null;
            const a = Math.sqrt(r - i),
               s = n - a,
               o = n + a;
            return o < 0 ? null : s < 0 ? this.at(o, e) : this.at(s, e)
         }
         intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
         }
         distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
         }
         intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
         }
         intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e) return !0;
            return t.normal.dot(this.direction) * e < 0
         }
         intersectBox(t, e) {
            let n, i, r, a, s, o;
            const l = 1 / this.direction.x,
               c = 1 / this.direction.y,
               h = 1 / this.direction.z,
               u = this.origin;
            return l >= 0 ? (n = (t.min.x - u.x) * l, i = (t.max.x - u.x) * l) : (n = (t.max.x - u.x) * l, i = (t.min.x - u.x) * l), c >= 0 ? (r = (t.min.y - u.y) * c, a = (t.max.y - u.y) * c) : (r = (t.max.y - u.y) * c, a = (t.min.y - u.y) * c), n > a || r > i ? null : ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), h >= 0 ? (s = (t.min.z - u.z) * h, o = (t.max.z - u.z) * h) : (s = (t.max.z - u.z) * h, o = (t.min.z - u.z) * h), n > o || s > i ? null : ((s > n || n != n) && (n = s), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
         }
         intersectsBox(t) {
            return null !== this.intersectBox(t, ee)
         }
         intersectTriangle(t, e, n, i, r) {
            ae.subVectors(e, t), se.subVectors(n, t), oe.crossVectors(ae, se);
            let a, s = this.direction.dot(oe);
            if (s > 0) {
               if (i) return null;
               a = 1
            } else {
               if (!(s < 0)) return null;
               a = -1, s = -s
            }
            re.subVectors(this.origin, t);
            const o = a * this.direction.dot(se.crossVectors(re, se));
            if (o < 0) return null;
            const l = a * this.direction.dot(ae.cross(re));
            if (l < 0) return null;
            if (o + l > s) return null;
            const c = -a * re.dot(oe);
            return c < 0 ? null : this.at(c / s, r)
         }
         applyMatrix4(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
         }
         equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
         }
         clone() {
            return (new this.constructor).copy(this)
         }
      }
      class ce {
         constructor(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
            ce.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t && this.set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m)
         }
         set(t, e, n, i, r, a, s, o, l, c, h, u, d, p, f, m) {
            const g = this.elements;
            return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
         }
         identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
         }
         clone() {
            return (new ce).fromArray(this.elements)
         }
         copy(t) {
            const e = this.elements,
               n = t.elements;
            return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
         }
         copyPosition(t) {
            const e = this.elements,
               n = t.elements;
            return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
         }
         setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this
         }
         extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
         }
         makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
         }
         extractRotation(t) {
            const e = this.elements,
               n = t.elements,
               i = 1 / he.setFromMatrixColumn(t, 0).length(),
               r = 1 / he.setFromMatrixColumn(t, 1).length(),
               a = 1 / he.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
         }
         makeRotationFromEuler(t) {
            const e = this.elements,
               n = t.x,
               i = t.y,
               r = t.z,
               a = Math.cos(n),
               s = Math.sin(n),
               o = Math.cos(i),
               l = Math.sin(i),
               c = Math.cos(r),
               h = Math.sin(r);
            if ("XYZ" === t.order) {
               const t = a * c,
                  n = a * h,
                  i = s * c,
                  r = s * h;
               e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n + i * l, e[5] = t - r * l, e[9] = -s * o, e[2] = r - t * l, e[6] = i + n * l, e[10] = a * o
            } else if ("YXZ" === t.order) {
               const t = o * c,
                  n = o * h,
                  i = l * c,
                  r = l * h;
               e[0] = t + r * s, e[4] = i * s - n, e[8] = a * l, e[1] = a * h, e[5] = a * c, e[9] = -s, e[2] = n * s - i, e[6] = r + t * s, e[10] = a * o
            } else if ("ZXY" === t.order) {
               const t = o * c,
                  n = o * h,
                  i = l * c,
                  r = l * h;
               e[0] = t - r * s, e[4] = -a * h, e[8] = i + n * s, e[1] = n + i * s, e[5] = a * c, e[9] = r - t * s, e[2] = -a * l, e[6] = s, e[10] = a * o
            } else if ("ZYX" === t.order) {
               const t = a * c,
                  n = a * h,
                  i = s * c,
                  r = s * h;
               e[0] = o * c, e[4] = i * l - n, e[8] = t * l + r, e[1] = o * h, e[5] = r * l + t, e[9] = n * l - i, e[2] = -l, e[6] = s * o, e[10] = a * o
            } else if ("YZX" === t.order) {
               const t = a * o,
                  n = a * l,
                  i = s * o,
                  r = s * l;
               e[0] = o * c, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = a * c, e[9] = -s * c, e[2] = -l * c, e[6] = n * h + i, e[10] = t - r * h
            } else if ("XZY" === t.order) {
               const t = a * o,
                  n = a * l,
                  i = s * o,
                  r = s * l;
               e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t * h + r, e[5] = a * c, e[9] = n * h - i, e[2] = i * h - n, e[6] = s * c, e[10] = r * h + t
            }
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
         }
         makeRotationFromQuaternion(t) {
            return this.compose(de, t, pe)
         }
         lookAt(t, e, n) {
            const i = this.elements;
            return ge.subVectors(t, e), 0 === ge.lengthSq() && (ge.z = 1), ge.normalize(), fe.crossVectors(n, ge), 0 === fe.lengthSq() && (1 === Math.abs(n.z) ? ge.x += 1e-4 : ge.z += 1e-4, ge.normalize(), fe.crossVectors(n, ge)), fe.normalize(), me.crossVectors(ge, fe), i[0] = fe.x, i[4] = me.x, i[8] = ge.x, i[1] = fe.y, i[5] = me.y, i[9] = ge.y, i[2] = fe.z, i[6] = me.z, i[10] = ge.z, this
         }
         multiply(t) {
            return this.multiplyMatrices(this, t)
         }
         premultiply(t) {
            return this.multiplyMatrices(t, this)
         }
         multiplyMatrices(t, e) {
            const n = t.elements,
               i = e.elements,
               r = this.elements,
               a = n[0],
               s = n[4],
               o = n[8],
               l = n[12],
               c = n[1],
               h = n[5],
               u = n[9],
               d = n[13],
               p = n[2],
               f = n[6],
               m = n[10],
               g = n[14],
               _ = n[3],
               v = n[7],
               x = n[11],
               y = n[15],
               M = i[0],
               S = i[4],
               E = i[8],
               b = i[12],
               w = i[1],
               T = i[5],
               A = i[9],
               R = i[13],
               C = i[2],
               P = i[6],
               L = i[10],
               U = i[14],
               D = i[3],
               I = i[7],
               N = i[11],
               O = i[15];
            return r[0] = a * M + s * w + o * C + l * D, r[4] = a * S + s * T + o * P + l * I, r[8] = a * E + s * A + o * L + l * N, r[12] = a * b + s * R + o * U + l * O, r[1] = c * M + h * w + u * C + d * D, r[5] = c * S + h * T + u * P + d * I, r[9] = c * E + h * A + u * L + d * N, r[13] = c * b + h * R + u * U + d * O, r[2] = p * M + f * w + m * C + g * D, r[6] = p * S + f * T + m * P + g * I, r[10] = p * E + f * A + m * L + g * N, r[14] = p * b + f * R + m * U + g * O, r[3] = _ * M + v * w + x * C + y * D, r[7] = _ * S + v * T + x * P + y * I, r[11] = _ * E + v * A + x * L + y * N, r[15] = _ * b + v * R + x * U + y * O, this
         }
         multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
         }
         determinant() {
            const t = this.elements,
               e = t[0],
               n = t[4],
               i = t[8],
               r = t[12],
               a = t[1],
               s = t[5],
               o = t[9],
               l = t[13],
               c = t[2],
               h = t[6],
               u = t[10],
               d = t[14];
            return t[3] * (+r * o * h - i * l * h - r * s * u + n * l * u + i * s * d - n * o * d) + t[7] * (+e * o * d - e * l * u + r * a * u - i * a * d + i * l * c - r * o * c) + t[11] * (+e * l * h - e * s * d - r * a * h + n * a * d + r * s * c - n * l * c) + t[15] * (-i * s * c - e * o * h + e * s * u + i * a * h - n * a * u + n * o * c)
         }
         transpose() {
            const t = this.elements;
            let e;
            return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
         }
         setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
         }
         invert() {
            const t = this.elements,
               e = t[0],
               n = t[1],
               i = t[2],
               r = t[3],
               a = t[4],
               s = t[5],
               o = t[6],
               l = t[7],
               c = t[8],
               h = t[9],
               u = t[10],
               d = t[11],
               p = t[12],
               f = t[13],
               m = t[14],
               g = t[15],
               _ = h * m * l - f * u * l + f * o * d - s * m * d - h * o * g + s * u * g,
               v = p * u * l - c * m * l - p * o * d + a * m * d + c * o * g - a * u * g,
               x = c * f * l - p * h * l + p * s * d - a * f * d - c * s * g + a * h * g,
               y = p * h * o - c * f * o - p * s * u + a * f * u + c * s * m - a * h * m,
               M = e * _ + n * v + i * x + r * y;
            if (0 === M) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const S = 1 / M;
            return t[0] = _ * S, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * S, t[2] = (s * m * r - f * o * r + f * i * l - n * m * l - s * i * g + n * o * g) * S, t[3] = (h * o * r - s * u * r - h * i * l + n * u * l + s * i * d - n * o * d) * S, t[4] = v * S, t[5] = (c * m * r - p * u * r + p * i * d - e * m * d - c * i * g + e * u * g) * S, t[6] = (p * o * r - a * m * r - p * i * l + e * m * l + a * i * g - e * o * g) * S, t[7] = (a * u * r - c * o * r + c * i * l - e * u * l - a * i * d + e * o * d) * S, t[8] = x * S, t[9] = (p * h * r - c * f * r - p * n * d + e * f * d + c * n * g - e * h * g) * S, t[10] = (a * f * r - p * s * r + p * n * l - e * f * l - a * n * g + e * s * g) * S, t[11] = (c * s * r - a * h * r - c * n * l + e * h * l + a * n * d - e * s * d) * S, t[12] = y * S, t[13] = (c * f * i - p * h * i + p * n * u - e * f * u - c * n * m + e * h * m) * S, t[14] = (p * s * i - a * f * i - p * n * o + e * f * o + a * n * m - e * s * m) * S, t[15] = (a * h * i - c * s * i + c * n * o - e * h * o - a * n * u + e * s * u) * S, this
         }
         scale(t) {
            const e = this.elements,
               n = t.x,
               i = t.y,
               r = t.z;
            return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
         }
         getMaxScaleOnAxis() {
            const t = this.elements,
               e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
               n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
               i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
         }
         makeTranslation(t, e, n) {
            return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
         }
         makeRotationX(t) {
            const e = Math.cos(t),
               n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
         }
         makeRotationY(t) {
            const e = Math.cos(t),
               n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
         }
         makeRotationZ(t) {
            const e = Math.cos(t),
               n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
         }
         makeRotationAxis(t, e) {
            const n = Math.cos(e),
               i = Math.sin(e),
               r = 1 - n,
               a = t.x,
               s = t.y,
               o = t.z,
               l = r * a,
               c = r * s;
            return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, c * s + n, c * o - i * a, 0, l * o - i * s, c * o + i * a, r * o * o + n, 0, 0, 0, 0, 1), this
         }
         makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
         }
         makeShear(t, e, n, i, r, a) {
            return this.set(1, n, r, 0, t, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this
         }
         compose(t, e, n) {
            const i = this.elements,
               r = e._x,
               a = e._y,
               s = e._z,
               o = e._w,
               l = r + r,
               c = a + a,
               h = s + s,
               u = r * l,
               d = r * c,
               p = r * h,
               f = a * c,
               m = a * h,
               g = s * h,
               _ = o * l,
               v = o * c,
               x = o * h,
               y = n.x,
               M = n.y,
               S = n.z;
            return i[0] = (1 - (f + g)) * y, i[1] = (d + x) * y, i[2] = (p - v) * y, i[3] = 0, i[4] = (d - x) * M, i[5] = (1 - (u + g)) * M, i[6] = (m + _) * M, i[7] = 0, i[8] = (p + v) * S, i[9] = (m - _) * S, i[10] = (1 - (u + f)) * S, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
         }
         decompose(t, e, n) {
            const i = this.elements;
            let r = he.set(i[0], i[1], i[2]).length();
            const a = he.set(i[4], i[5], i[6]).length(),
               s = he.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], ue.copy(this);
            const o = 1 / r,
               l = 1 / a,
               c = 1 / s;
            return ue.elements[0] *= o, ue.elements[1] *= o, ue.elements[2] *= o, ue.elements[4] *= l, ue.elements[5] *= l, ue.elements[6] *= l, ue.elements[8] *= c, ue.elements[9] *= c, ue.elements[10] *= c, e.setFromRotationMatrix(ue), n.x = r, n.y = a, n.z = s, this
         }
         makePerspective(t, e, n, i, r, a, s = 2e3) {
            const o = this.elements,
               l = 2 * r / (e - t),
               c = 2 * r / (n - i),
               h = (e + t) / (e - t),
               u = (n + i) / (n - i);
            let d, p;
            if (s === j) d = -(a + r) / (a - r), p = -2 * a * r / (a - r);
            else {
               if (s !== q) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
               d = -a / (a - r), p = -a * r / (a - r)
            }
            return o[0] = l, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
         }
         makeOrthographic(t, e, n, i, r, a, s = 2e3) {
            const o = this.elements,
               l = 1 / (e - t),
               c = 1 / (n - i),
               h = 1 / (a - r),
               u = (e + t) * l,
               d = (n + i) * c;
            let p, f;
            if (s === j) p = (a + r) * h, f = -2 * h;
            else {
               if (s !== q) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
               p = r * h, f = -1 * h
            }
            return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -u, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -d, o[2] = 0, o[6] = 0, o[10] = f, o[14] = -p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
         }
         equals(t) {
            const e = this.elements,
               n = t.elements;
            for (let t = 0; t < 16; t++)
               if (e[t] !== n[t]) return !1;
            return !0
         }
         fromArray(t, e = 0) {
            for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
            return this
         }
         toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
         }
      }
      const he = new Dt,
         ue = new ce,
         de = new Dt(0, 0, 0),
         pe = new Dt(1, 1, 1),
         fe = new Dt,
         me = new Dt,
         ge = new Dt,
         _e = new ce,
         ve = new Ut;
      class xe {
         constructor(t = 0, e = 0, n = 0, i = xe.DEFAULT_ORDER) {
            this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i
         }
         get x() {
            return this._x
         }
         set x(t) {
            this._x = t, this._onChangeCallback()
         }
         get y() {
            return this._y
         }
         set y(t) {
            this._y = t, this._onChangeCallback()
         }
         get z() {
            return this._z
         }
         set z(t) {
            this._z = t, this._onChangeCallback()
         }
         get order() {
            return this._order
         }
         set order(t) {
            this._order = t, this._onChangeCallback()
         }
         set(t, e, n, i = this._order) {
            return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this
         }
         clone() {
            return new this.constructor(this._x, this._y, this._z, this._order)
         }
         copy(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
         }
         setFromRotationMatrix(t, e = this._order, n = !0) {
            const i = t.elements,
               r = i[0],
               a = i[4],
               s = i[8],
               o = i[1],
               l = i[5],
               c = i[9],
               h = i[2],
               u = i[6],
               d = i[10];
            switch (e) {
               case "XYZ":
                  this._y = Math.asin($(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(u, l), this._z = 0);
                  break;
               case "YXZ":
                  this._x = Math.asin(-$(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
                  break;
               case "ZXY":
                  this._x = Math.asin($(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-h, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                  break;
               case "ZYX":
                  this._y = Math.asin(-$(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(u, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
                  break;
               case "YZX":
                  this._z = Math.asin($(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(s, d));
                  break;
               case "XZY":
                  this._z = Math.asin(-$(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(u, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-c, d), this._y = 0);
                  break;
               default:
                  console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
            }
            return this._order = e, !0 === n && this._onChangeCallback(), this
         }
         setFromQuaternion(t, e, n) {
            return _e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(_e, e, n)
         }
         setFromVector3(t, e = this._order) {
            return this.set(t.x, t.y, t.z, e)
         }
         reorder(t) {
            return ve.setFromEuler(this), this.setFromQuaternion(ve, t)
         }
         equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
         }
         fromArray(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
         }
         toArray(t = [], e = 0) {
            return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
         }
         _onChange(t) {
            return this._onChangeCallback = t, this
         }
         _onChangeCallback() {}*[Symbol.iterator]() {
            yield this._x, yield this._y, yield this._z, yield this._order
         }
      }
      xe.DEFAULT_ORDER = "XYZ";
      class ye {
         constructor() {
            this.mask = 1
         }
         set(t) {
            this.mask = (1 << t | 0) >>> 0
         }
         enable(t) {
            this.mask |= 1 << t | 0
         }
         enableAll() {
            this.mask = -1
         }
         toggle(t) {
            this.mask ^= 1 << t | 0
         }
         disable(t) {
            this.mask &= ~(1 << t | 0)
         }
         disableAll() {
            this.mask = 0
         }
         test(t) {
            return 0 != (this.mask & t.mask)
         }
         isEnabled(t) {
            return 0 != (this.mask & (1 << t | 0))
         }
      }
      let Me = 0;
      const Se = new Dt,
         Ee = new Ut,
         be = new ce,
         we = new Dt,
         Te = new Dt,
         Ae = new Dt,
         Re = new Ut,
         Ce = new Dt(1, 0, 0),
         Pe = new Dt(0, 1, 0),
         Le = new Dt(0, 0, 1),
         Ue = {
            type: "added"
         },
         De = {
            type: "removed"
         };
      class Ie extends Y {
         constructor() {
            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
               value: Me++
            }), this.uuid = Q(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Ie.DEFAULT_UP.clone();
            const t = new Dt,
               e = new xe,
               n = new Ut,
               i = new Dt(1, 1, 1);
            e._onChange((function () {
               n.setFromEuler(e, !1)
            })), n._onChange((function () {
               e.setFromQuaternion(n, void 0, !1)
            })), Object.defineProperties(this, {
               position: {
                  configurable: !0,
                  enumerable: !0,
                  value: t
               },
               rotation: {
                  configurable: !0,
                  enumerable: !0,
                  value: e
               },
               quaternion: {
                  configurable: !0,
                  enumerable: !0,
                  value: n
               },
               scale: {
                  configurable: !0,
                  enumerable: !0,
                  value: i
               },
               modelViewMatrix: {
                  value: new ce
               },
               normalMatrix: {
                  value: new ot
               }
            }), this.matrix = new ce, this.matrixWorld = new ce, this.matrixAutoUpdate = Ie.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new ye, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
         }
         onBeforeRender() {}
         onAfterRender() {}
         applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
         }
         applyQuaternion(t) {
            return this.quaternion.premultiply(t), this
         }
         setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
         }
         setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0)
         }
         setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t)
         }
         setRotationFromQuaternion(t) {
            this.quaternion.copy(t)
         }
         rotateOnAxis(t, e) {
            return Ee.setFromAxisAngle(t, e), this.quaternion.multiply(Ee), this
         }
         rotateOnWorldAxis(t, e) {
            return Ee.setFromAxisAngle(t, e), this.quaternion.premultiply(Ee), this
         }
         rotateX(t) {
            return this.rotateOnAxis(Ce, t)
         }
         rotateY(t) {
            return this.rotateOnAxis(Pe, t)
         }
         rotateZ(t) {
            return this.rotateOnAxis(Le, t)
         }
         translateOnAxis(t, e) {
            return Se.copy(t).applyQuaternion(this.quaternion), this.position.add(Se.multiplyScalar(e)), this
         }
         translateX(t) {
            return this.translateOnAxis(Ce, t)
         }
         translateY(t) {
            return this.translateOnAxis(Pe, t)
         }
         translateZ(t) {
            return this.translateOnAxis(Le, t)
         }
         localToWorld(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld)
         }
         worldToLocal(t) {
            return this.updateWorldMatrix(!0, !1), t.applyMatrix4(be.copy(this.matrixWorld).invert())
         }
         lookAt(t, e, n) {
            t.isVector3 ? we.copy(t) : we.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1), Te.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? be.lookAt(Te, we, this.up) : be.lookAt(we, Te, this.up), this.quaternion.setFromRotationMatrix(be), i && (be.extractRotation(i.matrixWorld), Ee.setFromRotationMatrix(be), this.quaternion.premultiply(Ee.invert()))
         }
         add(t) {
            if (arguments.length > 1) {
               for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
               return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(Ue)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
         }
         remove(t) {
            if (arguments.length > 1) {
               for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
               return this
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(De)), this
         }
         removeFromParent() {
            const t = this.parent;
            return null !== t && t.remove(this), this
         }
         clear() {
            for (let t = 0; t < this.children.length; t++) {
               const e = this.children[t];
               e.parent = null, e.dispatchEvent(De)
            }
            return this.children.length = 0, this
         }
         attach(t) {
            return this.updateWorldMatrix(!0, !1), be.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), be.multiply(t.parent.matrixWorld)), t.applyMatrix4(be), this.add(t), t.updateWorldMatrix(!1, !0), this
         }
         getObjectById(t) {
            return this.getObjectByProperty("id", t)
         }
         getObjectByName(t) {
            return this.getObjectByProperty("name", t)
         }
         getObjectByProperty(t, e) {
            if (this[t] === e) return this;
            for (let n = 0, i = this.children.length; n < i; n++) {
               const i = this.children[n].getObjectByProperty(t, e);
               if (void 0 !== i) return i
            }
         }
         getObjectsByProperty(t, e) {
            let n = [];
            this[t] === e && n.push(this);
            for (let i = 0, r = this.children.length; i < r; i++) {
               const r = this.children[i].getObjectsByProperty(t, e);
               r.length > 0 && (n = n.concat(r))
            }
            return n
         }
         getWorldPosition(t) {
            return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
         }
         getWorldQuaternion(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Te, t, Ae), t
         }
         getWorldScale(t) {
            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Te, Re, t), t
         }
         getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
         }
         raycast() {}
         traverse(t) {
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
         }
         traverseVisible(t) {
            if (!1 === this.visible) return;
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
         }
         traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
         }
         updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
         }
         updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++) {
               const i = e[n];
               !0 !== i.matrixWorldAutoUpdate && !0 !== t || i.updateMatrixWorld(t)
            }
         }
         updateWorldMatrix(t, e) {
            const n = this.parent;
            if (!0 === t && null !== n && !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
               const t = this.children;
               for (let e = 0, n = t.length; e < n; e++) {
                  const n = t[e];
                  !0 === n.matrixWorldAutoUpdate && n.updateWorldMatrix(!1, !0)
               }
            }
         }
         toJSON(t) {
            const e = void 0 === t || "string" == typeof t,
               n = {};
            e && (t = {
               geometries: {},
               materials: {},
               textures: {},
               images: {},
               shapes: {},
               skeletons: {},
               animations: {},
               nodes: {}
            }, n.metadata = {
               version: 4.6,
               type: "Object",
               generator: "Object3D.toJSON"
            });
            const i = {};

            function r(e, n) {
               return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
            }
            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t).uuid);
            else if (this.isMesh || this.isLine || this.isPoints) {
               i.geometry = r(t.geometries, this.geometry);
               const e = this.geometry.parameters;
               if (void 0 !== e && void 0 !== e.shapes) {
                  const n = e.shapes;
                  if (Array.isArray(n))
                     for (let e = 0, i = n.length; e < i; e++) {
                        const i = n[e];
                        r(t.shapes, i)
                     } else r(t.shapes, n)
               }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
               if (Array.isArray(this.material)) {
                  const e = [];
                  for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
                  i.material = e
               } else i.material = r(t.materials, this.material);
            if (this.children.length > 0) {
               i.children = [];
               for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
            }
            if (this.animations.length > 0) {
               i.animations = [];
               for (let e = 0; e < this.animations.length; e++) {
                  const n = this.animations[e];
                  i.animations.push(r(t.animations, n))
               }
            }
            if (e) {
               const e = a(t.geometries),
                  i = a(t.materials),
                  r = a(t.textures),
                  s = a(t.images),
                  o = a(t.shapes),
                  l = a(t.skeletons),
                  c = a(t.animations),
                  h = a(t.nodes);
               e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h)
            }
            return n.object = i, n;

            function a(t) {
               const e = [];
               for (const n in t) {
                  const i = t[n];
                  delete i.metadata, e.push(i)
               }
               return e
            }
         }
         clone(t) {
            return (new this.constructor).copy(this, t)
         }
         copy(t, e = !0) {
            if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
               for (let e = 0; e < t.children.length; e++) {
                  const n = t.children[e];
                  this.add(n.clone())
               }
            return this
         }
      }
      Ie.DEFAULT_UP = new Dt(0, 1, 0), Ie.DEFAULT_MATRIX_AUTO_UPDATE = !0, Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
      const Ne = new Dt,
         Oe = new Dt,
         Fe = new Dt,
         ke = new Dt,
         ze = new Dt,
         Be = new Dt,
         He = new Dt,
         Ve = new Dt,
         We = new Dt,
         Ge = new Dt;
      let Xe = !1;
      class je {
         constructor(t = new Dt, e = new Dt, n = new Dt) {
            this.a = t, this.b = e, this.c = n
         }
         static getNormal(t, e, n, i) {
            i.subVectors(n, e), Ne.subVectors(t, e), i.cross(Ne);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
         }
         static getBarycoord(t, e, n, i, r) {
            Ne.subVectors(i, e), Oe.subVectors(n, e), Fe.subVectors(t, e);
            const a = Ne.dot(Ne),
               s = Ne.dot(Oe),
               o = Ne.dot(Fe),
               l = Oe.dot(Oe),
               c = Oe.dot(Fe),
               h = a * l - s * s;
            if (0 === h) return r.set(-2, -1, -1);
            const u = 1 / h,
               d = (l * o - s * c) * u,
               p = (a * c - s * o) * u;
            return r.set(1 - d - p, p, d)
         }
         static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, ke), ke.x >= 0 && ke.y >= 0 && ke.x + ke.y <= 1
         }
         static getUV(t, e, n, i, r, a, s, o) {
            return !1 === Xe && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Xe = !0), this.getInterpolation(t, e, n, i, r, a, s, o)
         }
         static getInterpolation(t, e, n, i, r, a, s, o) {
            return this.getBarycoord(t, e, n, i, ke), o.setScalar(0), o.addScaledVector(r, ke.x), o.addScaledVector(a, ke.y), o.addScaledVector(s, ke.z), o
         }
         static isFrontFacing(t, e, n, i) {
            return Ne.subVectors(n, e), Oe.subVectors(t, e), Ne.cross(Oe).dot(i) < 0
         }
         set(t, e, n) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
         }
         setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
         }
         setFromAttributeAndIndices(t, e, n, i) {
            return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this
         }
         clone() {
            return (new this.constructor).copy(this)
         }
         copy(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
         }
         getArea() {
            return Ne.subVectors(this.c, this.b), Oe.subVectors(this.a, this.b), .5 * Ne.cross(Oe).length()
         }
         getMidpoint(t) {
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
         }
         getNormal(t) {
            return je.getNormal(this.a, this.b, this.c, t)
         }
         getPlane(t) {
            return t.setFromCoplanarPoints(this.a, this.b, this.c)
         }
         getBarycoord(t, e) {
            return je.getBarycoord(t, this.a, this.b, this.c, e)
         }
         getUV(t, e, n, i, r) {
            return !1 === Xe && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Xe = !0), je.getInterpolation(t, this.a, this.b, this.c, e, n, i, r)
         }
         getInterpolation(t, e, n, i, r) {
            return je.getInterpolation(t, this.a, this.b, this.c, e, n, i, r)
         }
         containsPoint(t) {
            return je.containsPoint(t, this.a, this.b, this.c)
         }
         isFrontFacing(t) {
            return je.isFrontFacing(this.a, this.b, this.c, t)
         }
         intersectsBox(t) {
            return t.intersectsTriangle(this)
         }
         closestPointToPoint(t, e) {
            const n = this.a,
               i = this.b,
               r = this.c;
            let a, s;
            ze.subVectors(i, n), Be.subVectors(r, n), Ve.subVectors(t, n);
            const o = ze.dot(Ve),
               l = Be.dot(Ve);
            if (o <= 0 && l <= 0) return e.copy(n);
            We.subVectors(t, i);
            const c = ze.dot(We),
               h = Be.dot(We);
            if (c >= 0 && h <= c) return e.copy(i);
            const u = o * h - c * l;
            if (u <= 0 && o >= 0 && c <= 0) return a = o / (o - c), e.copy(n).addScaledVector(ze, a);
            Ge.subVectors(t, r);
            const d = ze.dot(Ge),
               p = Be.dot(Ge);
            if (p >= 0 && d <= p) return e.copy(r);
            const f = d * l - o * p;
            if (f <= 0 && l >= 0 && p <= 0) return s = l / (l - p), e.copy(n).addScaledVector(Be, s);
            const m = c * p - d * h;
            if (m <= 0 && h - c >= 0 && d - p >= 0) return He.subVectors(r, i), s = (h - c) / (h - c + (d - p)), e.copy(i).addScaledVector(He, s);
            const g = 1 / (m + f + u);
            return a = f * g, s = u * g, e.copy(n).addScaledVector(ze, a).addScaledVector(Be, s)
         }
         equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
         }
      }
      let qe = 0;
      class Ye extends Y {
         constructor() {
            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
               value: qe++
            }), this.uuid = Q(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = e, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = V, this.stencilZFail = V, this.stencilZPass = V, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
         }
         get alphaTest() {
            return this._alphaTest
         }
         set alphaTest(t) {
            this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t
         }
         onBuild() {}
         onBeforeRender() {}
         onBeforeCompile() {}
         customProgramCacheKey() {
            return this.onBeforeCompile.toString()
         }
         setValues(t) {
            if (void 0 !== t)
               for (const e in t) {
                  const n = t[e];
                  if (void 0 === n) {
                     console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
                     continue
                  }
                  const i = this[e];
                  void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`)
               }
         }
         toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            e && (t = {
               textures: {},
               images: {}
            });
            const n = {
               metadata: {
                  version: 4.6,
                  type: "Material",
                  generator: "Material.toJSON"
               }
            };

            function i(t) {
               const e = [];
               for (const n in t) {
                  const i = t[n];
                  delete i.metadata, e.push(i)
               }
               return e
            }
            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaHash && (n.alphaHash = this.alphaHash), !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.forceSinglePass && (n.forceSinglePass = this.forceSinglePass), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = this.flatShading), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
               const e = i(t.textures),
                  r = i(t.images);
               e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
            }
            return n
         }
         clone() {
            return (new this.constructor).copy(this)
         }
         copy(t) {
            this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
               const t = e.length;
               n = new Array(t);
               for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
            }
            return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
         }
         dispose() {
            this.dispatchEvent({
               type: "dispose"
            })
         }
         set needsUpdate(t) {
            !0 === t && this.version++
         }
      }
      const Ze = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
         },
         Ke = {
            h: 0,
            s: 0,
            l: 0
         },
         Je = {
            h: 0,
            s: 0,
            l: 0
         };

      function Qe(t, e, n) {
         return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
      }
      class $e {
         constructor(t, e, n) {
            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n)
         }
         set(t, e, n) {
            if (void 0 === e && void 0 === n) {
               const e = t;
               e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e)
            } else this.setRGB(t, e, n);
            return this
         }
         setScalar(t) {
            return this.r = t, this.g = t, this.b = t, this
         }
         setHex(t, e = z) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, xt.toWorkingColorSpace(this, e), this
         }
         setRGB(t, e, n, i = xt.workingColorSpace) {
            return this.r = t, this.g = e, this.b = n, xt.toWorkingColorSpace(this, i), this
         }
         setHSL(t, e, n, i = xt.workingColorSpace) {
            if (t = tt(t, 1), e = $(e, 0, 1), n = $(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
            else {
               const i = n <= .5 ? n * (1 + e) : n + e - n * e,
                  r = 2 * n - i;
               this.r = Qe(r, i, t + 1 / 3), this.g = Qe(r, i, t), this.b = Qe(r, i, t - 1 / 3)
            }
            return xt.toWorkingColorSpace(this, i), this
         }
         setStyle(t, e = z) {
            function n(e) {
               void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            let i;
            if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
               let r;
               const a = i[1],
                  s = i[2];
               switch (a) {
                  case "rgb":
                  case "rgba":
                     if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
                     if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
                     break;
                  case "hsl":
                  case "hsla":
                     if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
                     break;
                  default:
                     console.warn("THREE.Color: Unknown color model " + t)
               }
            } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
               const n = i[1],
                  r = n.length;
               if (3 === r) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, e);
               if (6 === r) return this.setHex(parseInt(n, 16), e);
               console.warn("THREE.Color: Invalid hex color " + t)
            } else if (t && t.length > 0) return this.setColorName(t, e);
            return this
         }
         setColorName(t, e = z) {
            const n = Ze[t.toLowerCase()];
            return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this
         }
         clone() {
            return new this.constructor(this.r, this.g, this.b)
         }
         copy(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
         }
         copySRGBToLinear(t) {
            return this.r = pt(t.r), this.g = pt(t.g), this.b = pt(t.b), this
         }
         copyLinearToSRGB(t) {
            return this.r = ft(t.r), this.g = ft(t.g), this.b = ft(t.b), this
         }
         convertSRGBToLinear() {
            return this.copySRGBToLinear(this), this
         }
         convertLinearToSRGB() {
            return this.copyLinearToSRGB(this), this
         }
         getHex(t = z) {
            return xt.fromWorkingColorSpace(tn.copy(this), t), 65536 * Math.round($(255 * tn.r, 0, 255)) + 256 * Math.round($(255 * tn.g, 0, 255)) + Math.round($(255 * tn.b, 0, 255))
         }
         getHexString(t = z) {
            return ("000000" + this.getHex(t).toString(16)).slice(-6)
         }
         getHSL(t, e = xt.workingColorSpace) {
            xt.fromWorkingColorSpace(tn.copy(this), e);
            const n = tn.r,
               i = tn.g,
               r = tn.b,
               a = Math.max(n, i, r),
               s = Math.min(n, i, r);
            let o, l;
            const c = (s + a) / 2;
            if (s === a) o = 0, l = 0;
            else {
               const t = a - s;
               switch (l = c <= .5 ? t / (a + s) : t / (2 - a - s), a) {
                  case n:
                     o = (i - r) / t + (i < r ? 6 : 0);
                     break;
                  case i:
                     o = (r - n) / t + 2;
                     break;
                  case r:
                     o = (n - i) / t + 4
               }
               o /= 6
            }
            return t.h = o, t.s = l, t.l = c, t
         }
         getRGB(t, e = xt.workingColorSpace) {
            return xt.fromWorkingColorSpace(tn.copy(this), e), t.r = tn.r, t.g = tn.g, t.b = tn.b, t
         }
         getStyle(t = z) {
            xt.fromWorkingColorSpace(tn.copy(this), t);
            const e = tn.r,
               n = tn.g,
               i = tn.b;
            return t !== z ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*i)})`
         }
         offsetHSL(t, e, n) {
            return this.getHSL(Ke), Ke.h += t, Ke.s += e, Ke.l += n, this.setHSL(Ke.h, Ke.s, Ke.l), this
         }
         add(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
         }
         addColors(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
         }
         addScalar(t) {
            return this.r += t, this.g += t, this.b += t, this
         }
         sub(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
         }
         multiply(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
         }
         multiplyScalar(t) {
            return this.r *= t, this.g *= t, this.b *= t, this
         }
         lerp(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
         }
         lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this
         }
         lerpHSL(t, e) {
            this.getHSL(Ke), t.getHSL(Je);
            const n = et(Ke.h, Je.h, e),
               i = et(Ke.s, Je.s, e),
               r = et(Ke.l, Je.l, e);
            return this.setHSL(n, i, r), this
         }
         setFromVector3(t) {
            return this.r = t.x, this.g = t.y, this.b = t.z, this
         }
         applyMatrix3(t) {
            const e = this.r,
               n = this.g,
               i = this.b,
               r = t.elements;
            return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this
         }
         equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
         }
         fromArray(t, e = 0) {
            return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
         }
         toArray(t = [], e = 0) {
            return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
         }
         fromBufferAttribute(t, e) {
            return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this
         }
         toJSON() {
            return this.getHex()
         }*[Symbol.iterator]() {
            yield this.r, yield this.g, yield this.b
         }
      }
      const tn = new $e;
      $e.NAMES = Ze;
      class en extends Ye {
         constructor(t) {
            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new $e(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t)
         }
         copy(t) {
            return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this
         }
      }
      const nn = new Dt,
         rn = new st;
      class an {
         constructor(t, e, n = !1) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = n, this.usage = W, this.updateRange = {
               offset: 0,
               count: -1
            }, this.gpuType = y, this.version = 0
         }
         onUploadCallback() {}
         set needsUpdate(t) {
            !0 === t && this.version++
         }
         setUsage(t) {
            return this.usage = t, this
         }
         copy(t) {
            return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this
         }
         copyAt(t, e, n) {
            t *= this.itemSize, n *= e.itemSize;
            for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
            return this
         }
         copyArray(t) {
            return this.array.set(t), this
         }
         applyMatrix3(t) {
            if (2 === this.itemSize)
               for (let e = 0, n = this.count; e < n; e++) rn.fromBufferAttribute(this, e), rn.applyMatrix3(t), this.setXY(e, rn.x, rn.y);
            else if (3 === this.itemSize)
               for (let e = 0, n = this.count; e < n; e++) nn.fromBufferAttribute(this, e), nn.applyMatrix3(t), this.setXYZ(e, nn.x, nn.y, nn.z);
            return this
         }
         applyMatrix4(t) {
            for (let e = 0, n = this.count; e < n; e++) nn.fromBufferAttribute(this, e), nn.applyMatrix4(t), this.setXYZ(e, nn.x, nn.y, nn.z);
            return this
         }
         applyNormalMatrix(t) {
            for (let e = 0, n = this.count; e < n; e++) nn.fromBufferAttribute(this, e), nn.applyNormalMatrix(t), this.setXYZ(e, nn.x, nn.y, nn.z);
            return this
         }
         transformDirection(t) {
            for (let e = 0, n = this.count; e < n; e++) nn.fromBufferAttribute(this, e), nn.transformDirection(t), this.setXYZ(e, nn.x, nn.y, nn.z);
            return this
         }
         set(t, e = 0) {
            return this.array.set(t, e), this
         }
         getComponent(t, e) {
            let n = this.array[t * this.itemSize + e];
            return this.normalized && (n = rt(n, this.array)), n
         }
         setComponent(t, e, n) {
            return this.normalized && (n = at(n, this.array)), this.array[t * this.itemSize + e] = n, this
         }
         getX(t) {
            let e = this.array[t * this.itemSize];
            return this.normalized && (e = rt(e, this.array)), e
         }
         setX(t, e) {
            return this.normalized && (e = at(e, this.array)), this.array[t * this.itemSize] = e, this
         }
         getY(t) {
            let e = this.array[t * this.itemSize + 1];
            return this.normalized && (e = rt(e, this.array)), e
         }
         setY(t, e) {
            return this.normalized && (e = at(e, this.array)), this.array[t * this.itemSize + 1] = e, this
         }
         getZ(t) {
            let e = this.array[t * this.itemSize + 2];
            return this.normalized && (e = rt(e, this.array)), e
         }
         setZ(t, e) {
            return this.normalized && (e = at(e, this.array)), this.array[t * this.itemSize + 2] = e, this
         }
         getW(t) {
            let e = this.array[t * this.itemSize + 3];
            return this.normalized && (e = rt(e, this.array)), e
         }
         setW(t, e) {
            return this.normalized && (e = at(e, this.array)), this.array[t * this.itemSize + 3] = e, this
         }
         setXY(t, e, n) {
            return t *= this.itemSize, this.normalized && (e = at(e, this.array), n = at(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this
         }
         setXYZ(t, e, n, i) {
            return t *= this.itemSize, this.normalized && (e = at(e, this.array), n = at(n, this.array), i = at(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
         }
         setXYZW(t, e, n, i, r) {
            return t *= this.itemSize, this.normalized && (e = at(e, this.array), n = at(n, this.array), i = at(i, this.array), r = at(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
         }
         onUpload(t) {
            return this.onUploadCallback = t, this
         }
         clone() {
            return new this.constructor(this.array, this.itemSize).copy(this)
         }
         toJSON() {
            const t = {
               itemSize: this.itemSize,
               type: this.array.constructor.name,
               array: Array.from(this.array),
               normalized: this.normalized
            };
            return "" !== this.name && (t.name = this.name), this.usage !== W && (t.usage = this.usage), 0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange), t
         }
      }
      class sn extends an {
         constructor(t, e, n) {
            super(new Uint16Array(t), e, n)
         }
      }
      class on extends an {
         constructor(t, e, n) {
            super(new Uint32Array(t), e, n)
         }
      }
      class ln extends an {
         constructor(t, e, n) {
            super(new Float32Array(t), e, n)
         }
      }
      let cn = 0;
      const hn = new ce,
         un = new Ie,
         dn = new Dt,
         pn = new Ot,
         fn = new Ot,
         mn = new Dt;
      class gn extends Y {
         constructor() {
            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
               value: cn++
            }), this.uuid = Q(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
               start: 0,
               count: 1 / 0
            }, this.userData = {}
         }
         getIndex() {
            return this.index
         }
         setIndex(t) {
            return Array.isArray(t) ? this.index = new(ct(t) ? on : sn)(t, 1) : this.index = t, this
         }
         getAttribute(t) {
            return this.attributes[t]
         }
         setAttribute(t, e) {
            return this.attributes[t] = e, this
         }
         deleteAttribute(t) {
            return delete this.attributes[t], this
         }
         hasAttribute(t) {
            return void 0 !== this.attributes[t]
         }
         addGroup(t, e, n = 0) {
            this.groups.push({
               start: t,
               count: e,
               materialIndex: n
            })
         }
         clearGroups() {
            this.groups = []
         }
         setDrawRange(t, e) {
            this.drawRange.start = t, this.drawRange.count = e
         }
         applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
               const e = (new ot).getNormalMatrix(t);
               n.applyNormalMatrix(e), n.needsUpdate = !0
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
         }
         applyQuaternion(t) {
            return hn.makeRotationFromQuaternion(t), this.applyMatrix4(hn), this
         }
         rotateX(t) {
            return hn.makeRotationX(t), this.applyMatrix4(hn), this
         }
         rotateY(t) {
            return hn.makeRotationY(t), this.applyMatrix4(hn), this
         }
         rotateZ(t) {
            return hn.makeRotationZ(t), this.applyMatrix4(hn), this
         }
         translate(t, e, n) {
            return hn.makeTranslation(t, e, n), this.applyMatrix4(hn), this
         }
         scale(t, e, n) {
            return hn.makeScale(t, e, n), this.applyMatrix4(hn), this
         }
         lookAt(t) {
            return un.lookAt(t), un.updateMatrix(), this.applyMatrix4(un.matrix), this
         }
         center() {
            return this.computeBoundingBox(), this.boundingBox.getCenter(dn).negate(), this.translate(dn.x, dn.y, dn.z), this
         }
         setFromPoints(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
               const i = t[n];
               e.push(i.x, i.y, i.z || 0)
            }
            return this.setAttribute("position", new ln(e, 3)), this
         }
         computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new Ot);
            const t = this.attributes.position,
               e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new Dt(-1 / 0, -1 / 0, -1 / 0), new Dt(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t) {
               if (this.boundingBox.setFromBufferAttribute(t), e)
                  for (let t = 0, n = e.length; t < n; t++) {
                     const n = e[t];
                     pn.setFromBufferAttribute(n), this.morphTargetsRelative ? (mn.addVectors(this.boundingBox.min, pn.min), this.boundingBox.expandByPoint(mn), mn.addVectors(this.boundingBox.max, pn.max), this.boundingBox.expandByPoint(mn)) : (this.boundingBox.expandByPoint(pn.min), this.boundingBox.expandByPoint(pn.max))
                  }
            } else this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
         }
         computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new te);
            const t = this.attributes.position,
               e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new Dt, 1 / 0);
            if (t) {
               const n = this.boundingSphere.center;
               if (pn.setFromBufferAttribute(t), e)
                  for (let t = 0, n = e.length; t < n; t++) {
                     const n = e[t];
                     fn.setFromBufferAttribute(n), this.morphTargetsRelative ? (mn.addVectors(pn.min, fn.min), pn.expandByPoint(mn), mn.addVectors(pn.max, fn.max), pn.expandByPoint(mn)) : (pn.expandByPoint(fn.min), pn.expandByPoint(fn.max))
                  }
               pn.getCenter(n);
               let i = 0;
               for (let e = 0, r = t.count; e < r; e++) mn.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(mn));
               if (e)
                  for (let r = 0, a = e.length; r < a; r++) {
                     const a = e[r],
                        s = this.morphTargetsRelative;
                     for (let e = 0, r = a.count; e < r; e++) mn.fromBufferAttribute(a, e), s && (dn.fromBufferAttribute(t, e), mn.add(dn)), i = Math.max(i, n.distanceToSquared(mn))
                  }
               this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
         }
         computeTangents() {
            const t = this.index,
               e = this.attributes;
            if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t.array,
               i = e.position.array,
               r = e.normal.array,
               a = e.uv.array,
               s = i.length / 3;
            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new an(new Float32Array(4 * s), 4));
            const o = this.getAttribute("tangent").array,
               l = [],
               c = [];
            for (let t = 0; t < s; t++) l[t] = new Dt, c[t] = new Dt;
            const h = new Dt,
               u = new Dt,
               d = new Dt,
               p = new st,
               f = new st,
               m = new st,
               g = new Dt,
               _ = new Dt;

            function v(t, e, n) {
               h.fromArray(i, 3 * t), u.fromArray(i, 3 * e), d.fromArray(i, 3 * n), p.fromArray(a, 2 * t), f.fromArray(a, 2 * e), m.fromArray(a, 2 * n), u.sub(h), d.sub(h), f.sub(p), m.sub(p);
               const r = 1 / (f.x * m.y - m.x * f.y);
               isFinite(r) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r), _.copy(d).multiplyScalar(f.x).addScaledVector(u, -m.x).multiplyScalar(r), l[t].add(g), l[e].add(g), l[n].add(g), c[t].add(_), c[e].add(_), c[n].add(_))
            }
            let x = this.groups;
            0 === x.length && (x = [{
               start: 0,
               count: n.length
            }]);
            for (let t = 0, e = x.length; t < e; ++t) {
               const e = x[t],
                  i = e.start;
               for (let t = i, r = i + e.count; t < r; t += 3) v(n[t + 0], n[t + 1], n[t + 2])
            }
            const y = new Dt,
               M = new Dt,
               S = new Dt,
               E = new Dt;

            function b(t) {
               S.fromArray(r, 3 * t), E.copy(S);
               const e = l[t];
               y.copy(e), y.sub(S.multiplyScalar(S.dot(e))).normalize(), M.crossVectors(E, e);
               const n = M.dot(c[t]) < 0 ? -1 : 1;
               o[4 * t] = y.x, o[4 * t + 1] = y.y, o[4 * t + 2] = y.z, o[4 * t + 3] = n
            }
            for (let t = 0, e = x.length; t < e; ++t) {
               const e = x[t],
                  i = e.start;
               for (let t = i, r = i + e.count; t < r; t += 3) b(n[t + 0]), b(n[t + 1]), b(n[t + 2])
            }
         }
         computeVertexNormals() {
            const t = this.index,
               e = this.getAttribute("position");
            if (void 0 !== e) {
               let n = this.getAttribute("normal");
               if (void 0 === n) n = new an(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
               else
                  for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
               const i = new Dt,
                  r = new Dt,
                  a = new Dt,
                  s = new Dt,
                  o = new Dt,
                  l = new Dt,
                  c = new Dt,
                  h = new Dt;
               if (t)
                  for (let u = 0, d = t.count; u < d; u += 3) {
                     const d = t.getX(u + 0),
                        p = t.getX(u + 1),
                        f = t.getX(u + 2);
                     i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), a.fromBufferAttribute(e, f), c.subVectors(a, r), h.subVectors(i, r), c.cross(h), s.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), s.add(c), o.add(c), l.add(c), n.setXYZ(d, s.x, s.y, s.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(f, l.x, l.y, l.z)
                  } else
                     for (let t = 0, s = e.count; t < s; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), a.fromBufferAttribute(e, t + 2), c.subVectors(a, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t + 0, c.x, c.y, c.z), n.setXYZ(t + 1, c.x, c.y, c.z), n.setXYZ(t + 2, c.x, c.y, c.z);
               this.normalizeNormals(), n.needsUpdate = !0
            }
         }
         normalizeNormals() {
            const t = this.attributes.normal;
            for (let e = 0, n = t.count; e < n; e++) mn.fromBufferAttribute(t, e), mn.normalize(), t.setXYZ(e, mn.x, mn.y, mn.z)
         }
         toNonIndexed() {
            function t(t, e) {
               const n = t.array,
                  i = t.itemSize,
                  r = t.normalized,
                  a = new n.constructor(e.length * i);
               let s = 0,
                  o = 0;
               for (let r = 0, l = e.length; r < l; r++) {
                  s = t.isInterleavedBufferAttribute ? e[r] * t.data.stride + t.offset : e[r] * i;
                  for (let t = 0; t < i; t++) a[o++] = n[s++]
               }
               return new an(a, i, r)
            }
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
            const e = new gn,
               n = this.index.array,
               i = this.attributes;
            for (const r in i) {
               const a = t(i[r], n);
               e.setAttribute(r, a)
            }
            const r = this.morphAttributes;
            for (const i in r) {
               const a = [],
                  s = r[i];
               for (let e = 0, i = s.length; e < i; e++) {
                  const i = t(s[e], n);
                  a.push(i)
               }
               e.morphAttributes[i] = a
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const a = this.groups;
            for (let t = 0, n = a.length; t < n; t++) {
               const n = a[t];
               e.addGroup(n.start, n.count, n.materialIndex)
            }
            return e
         }
         toJSON() {
            const t = {
               metadata: {
                  version: 4.6,
                  type: "BufferGeometry",
                  generator: "BufferGeometry.toJSON"
               }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
               const e = this.parameters;
               for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
               return t
            }
            t.data = {
               attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
               type: e.array.constructor.name,
               array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for (const e in n) {
               const i = n[e];
               t.data.attributes[e] = i.toJSON(t.data)
            }
            const i = {};
            let r = !1;
            for (const e in this.morphAttributes) {
               const n = this.morphAttributes[e],
                  a = [];
               for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e];
                  a.push(i.toJSON(t.data))
               }
               a.length > 0 && (i[e] = a, r = !0)
            }
            r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
            const a = this.groups;
            a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
            const s = this.boundingSphere;
            return null !== s && (t.data.boundingSphere = {
               center: s.center.toArray(),
               radius: s.radius
            }), t
         }
         clone() {
            return (new this.constructor).copy(this)
         }
         copy(t) {
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for (const t in i) {
               const n = i[t];
               this.setAttribute(t, n.clone(e))
            }
            const r = t.morphAttributes;
            for (const t in r) {
               const n = [],
                  i = r[t];
               for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
               this.morphAttributes[t] = n
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const a = t.groups;
            for (let t = 0, e = a.length; t < e; t++) {
               const e = a[t];
               this.addGroup(e.start, e.count, e.materialIndex)
            }
            const s = t.boundingBox;
            null !== s && (this.boundingBox = s.clone());
            const o = t.boundingSphere;
            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
         }
         dispose() {
            this.dispatchEvent({
               type: "dispose"
            })
         }
      }
      const _n = new ce,
         vn = new le,
         xn = new te,
         yn = new Dt,
         Mn = new Dt,
         Sn = new Dt,
         En = new Dt,
         bn = new Dt,
         wn = new Dt,
         Tn = new st,
         An = new st,
         Rn = new st,
         Cn = new Dt,
         Pn = new Dt,
         Ln = new Dt,
         Un = new Dt,
         Dn = new Dt;
      class In extends Ie {
         constructor(t = new gn, e = new en) {
            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
         }
         copy(t, e) {
            return super.copy(t, e), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
         }
         updateMorphTargets() {
            const t = this.geometry.morphAttributes,
               e = Object.keys(t);
            if (e.length > 0) {
               const n = t[e[0]];
               if (void 0 !== n) {
                  this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                  for (let t = 0, e = n.length; t < e; t++) {
                     const e = n[t].name || String(t);
                     this.morphTargetInfluences.push(0), this.morphTargetDictionary[e] = t
                  }
               }
            }
         }
         getVertexPosition(t, e) {
            const n = this.geometry,
               i = n.attributes.position,
               r = n.morphAttributes.position,
               a = n.morphTargetsRelative;
            e.fromBufferAttribute(i, t);
            const s = this.morphTargetInfluences;
            if (r && s) {
               wn.set(0, 0, 0);
               for (let n = 0, i = r.length; n < i; n++) {
                  const i = s[n],
                     o = r[n];
                  0 !== i && (bn.fromBufferAttribute(o, t), a ? wn.addScaledVector(bn, i) : wn.addScaledVector(bn.sub(e), i))
               }
               e.add(wn)
            }
            return e
         }
         raycast(t, e) {
            const n = this.geometry,
               i = this.material,
               r = this.matrixWorld;
            if (void 0 !== i) {
               if (null === n.boundingSphere && n.computeBoundingSphere(), xn.copy(n.boundingSphere), xn.applyMatrix4(r), vn.copy(t.ray).recast(t.near), !1 === xn.containsPoint(vn.origin)) {
                  if (null === vn.intersectSphere(xn, yn)) return;
                  if (vn.origin.distanceToSquared(yn) > (t.far - t.near) ** 2) return
               }
               _n.copy(r).invert(), vn.copy(t.ray).applyMatrix4(_n), null !== n.boundingBox && !1 === vn.intersectsBox(n.boundingBox) || this._computeIntersections(t, e, vn)
            }
         }
         _computeIntersections(t, e, n) {
            let i;
            const r = this.geometry,
               a = this.material,
               s = r.index,
               o = r.attributes.position,
               l = r.attributes.uv,
               c = r.attributes.uv1,
               h = r.attributes.normal,
               u = r.groups,
               d = r.drawRange;
            if (null !== s)
               if (Array.isArray(a))
                  for (let r = 0, o = u.length; r < o; r++) {
                     const o = u[r],
                        p = a[o.materialIndex];
                     for (let r = Math.max(o.start, d.start), a = Math.min(s.count, Math.min(o.start + o.count, d.start + d.count)); r < a; r += 3) {
                        i = Nn(this, p, t, n, l, c, h, s.getX(r), s.getX(r + 1), s.getX(r + 2)), i && (i.faceIndex = Math.floor(r / 3), i.face.materialIndex = o.materialIndex, e.push(i))
                     }
                  } else {
                     for (let r = Math.max(0, d.start), o = Math.min(s.count, d.start + d.count); r < o; r += 3) {
                        i = Nn(this, a, t, n, l, c, h, s.getX(r), s.getX(r + 1), s.getX(r + 2)), i && (i.faceIndex = Math.floor(r / 3), e.push(i))
                     }
                  } else if (void 0 !== o)
                     if (Array.isArray(a))
                        for (let r = 0, s = u.length; r < s; r++) {
                           const s = u[r],
                              p = a[s.materialIndex];
                           for (let r = Math.max(s.start, d.start), a = Math.min(o.count, Math.min(s.start + s.count, d.start + d.count)); r < a; r += 3) {
                              i = Nn(this, p, t, n, l, c, h, r, r + 1, r + 2), i && (i.faceIndex = Math.floor(r / 3), i.face.materialIndex = s.materialIndex, e.push(i))
                           }
                        } else {
                           for (let r = Math.max(0, d.start), s = Math.min(o.count, d.start + d.count); r < s; r += 3) {
                              i = Nn(this, a, t, n, l, c, h, r, r + 1, r + 2), i && (i.faceIndex = Math.floor(r / 3), e.push(i))
                           }
                        }
         }
      }

      function Nn(t, e, n, i, r, a, s, o, l, c) {
         t.getVertexPosition(o, Mn), t.getVertexPosition(l, Sn), t.getVertexPosition(c, En);
         const h = function (t, e, n, i, r, a, s, o) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, 0 === e.side, o), null === l) return null;
            Dn.copy(o), Dn.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(Dn);
            return c < n.near || c > n.far ? null : {
               distance: c,
               point: Dn.clone(),
               object: t
            }
         }(t, e, n, i, Mn, Sn, En, Un);
         if (h) {
            r && (Tn.fromBufferAttribute(r, o), An.fromBufferAttribute(r, l), Rn.fromBufferAttribute(r, c), h.uv = je.getInterpolation(Un, Mn, Sn, En, Tn, An, Rn, new st)), a && (Tn.fromBufferAttribute(a, o), An.fromBufferAttribute(a, l), Rn.fromBufferAttribute(a, c), h.uv1 = je.getInterpolation(Un, Mn, Sn, En, Tn, An, Rn, new st), h.uv2 = h.uv1), s && (Cn.fromBufferAttribute(s, o), Pn.fromBufferAttribute(s, l), Ln.fromBufferAttribute(s, c), h.normal = je.getInterpolation(Un, Mn, Sn, En, Cn, Pn, Ln, new Dt), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
            const t = {
               a: o,
               b: l,
               c,
               normal: new Dt,
               materialIndex: 0
            };
            je.getNormal(Mn, Sn, En, t.normal), h.face = t
         }
         return h
      }
      class On extends gn {
         constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
            super(), this.type = "BoxGeometry", this.parameters = {
               width: t,
               height: e,
               depth: n,
               widthSegments: i,
               heightSegments: r,
               depthSegments: a
            };
            const s = this;
            i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
            const o = [],
               l = [],
               c = [],
               h = [];
            let u = 0,
               d = 0;

            function p(t, e, n, i, r, a, p, f, m, g, _) {
               const v = a / m,
                  x = p / g,
                  y = a / 2,
                  M = p / 2,
                  S = f / 2,
                  E = m + 1,
                  b = g + 1;
               let w = 0,
                  T = 0;
               const A = new Dt;
               for (let a = 0; a < b; a++) {
                  const s = a * x - M;
                  for (let o = 0; o < E; o++) {
                     const u = o * v - y;
                     A[t] = u * i, A[e] = s * r, A[n] = S, l.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, c.push(A.x, A.y, A.z), h.push(o / m), h.push(1 - a / g), w += 1
                  }
               }
               for (let t = 0; t < g; t++)
                  for (let e = 0; e < m; e++) {
                     const n = u + e + E * t,
                        i = u + e + E * (t + 1),
                        r = u + (e + 1) + E * (t + 1),
                        a = u + (e + 1) + E * t;
                     o.push(n, i, a), o.push(i, r, a), T += 6
                  }
               s.addGroup(d, T, _), d += T, u += w
            }
            p("z", "y", "x", -1, -1, n, e, t, a, r, 0), p("z", "y", "x", 1, -1, n, e, -t, a, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, a, 2), p("x", "z", "y", 1, -1, t, n, -e, i, a, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new ln(l, 3)), this.setAttribute("normal", new ln(c, 3)), this.setAttribute("uv", new ln(h, 2))
         }
         copy(t) {
            return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
         }
         static fromJSON(t) {
            return new On(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
         }
      }

      function Fn(t) {
         const e = {};
         for (const n in t) {
            e[n] = {};
            for (const i in t[n]) {
               const r = t[n][i];
               r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][i] = null) : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
            }
         }
         return e
      }

      function kn(t) {
         const e = {};
         for (let n = 0; n < t.length; n++) {
            const i = Fn(t[n]);
            for (const t in i) e[t] = i[t]
         }
         return e
      }

      function zn(t) {
         return null === t.getRenderTarget() ? t.outputColorSpace : B
      }
      const Bn = {
         clone: Fn,
         merge: kn
      };
      class Hn extends Ye {
         constructor(t) {
            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
               derivatives: !1,
               fragDepth: !1,
               drawBuffers: !1,
               shaderTextureLOD: !1
            }, this.defaultAttributeValues = {
               color: [1, 1, 1],
               uv: [0, 0],
               uv1: [0, 0]
            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && this.setValues(t)
         }
         copy(t) {
            return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = Fn(t.uniforms), this.uniformsGroups = function (t) {
               const e = [];
               for (let n = 0; n < t.length; n++) e.push(t[n].clone());
               return e
            }(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
         }
         toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion, e.uniforms = {};
            for (const n in this.uniforms) {
               const i = this.uniforms[n].value;
               i && i.isTexture ? e.uniforms[n] = {
                  type: "t",
                  value: i.toJSON(t).uuid
               } : i && i.isColor ? e.uniforms[n] = {
                  type: "c",
                  value: i.getHex()
               } : i && i.isVector2 ? e.uniforms[n] = {
                  type: "v2",
                  value: i.toArray()
               } : i && i.isVector3 ? e.uniforms[n] = {
                  type: "v3",
                  value: i.toArray()
               } : i && i.isVector4 ? e.uniforms[n] = {
                  type: "v4",
                  value: i.toArray()
               } : i && i.isMatrix3 ? e.uniforms[n] = {
                  type: "m3",
                  value: i.toArray()
               } : i && i.isMatrix4 ? e.uniforms[n] = {
                  type: "m4",
                  value: i.toArray()
               } : e.uniforms[n] = {
                  value: i
               }
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
            const n = {};
            for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n), e
         }
      }
      class Vn extends Ie {
         constructor() {
            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new ce, this.projectionMatrix = new ce, this.projectionMatrixInverse = new ce, this.coordinateSystem = j
         }
         copy(t, e) {
            return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this
         }
         getWorldDirection(t) {
            this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
         }
         updateMatrixWorld(t) {
            super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
         }
         updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
         }
         clone() {
            return (new this.constructor).copy(this)
         }
      }
      class Wn extends Vn {
         constructor(t = 50, e = 1, n = .1, i = 2e3) {
            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
         }
         copy(t, e) {
            return super.copy(t, e), this.fov = t.fov, this.zoom = 10, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
         }
         setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * J * Math.atan(e), this.updateProjectionMatrix()
         }
         getFocalLength() {
            const t = Math.tan(.5 * K * this.fov);
            return .5 * this.getFilmHeight() / t
         }
         getEffectiveFOV() {
            return 2 * J * Math.atan(Math.tan(.5 * K * this.fov) / this.zoom)
         }
         getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
         }
         getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
         }
         setViewOffset(t, e, n, i, r, a) {
            this.aspect = t / e, null === this.view && (this.view = {
               enabled: !0,
               fullWidth: 1,
               fullHeight: 1,
               offsetX: 0,
               offsetY: 0,
               width: 1,
               height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
         }
         clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
         }
         updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(.5 * K * this.fov) / this.zoom,
               n = 2 * e,
               i = this.aspect * n,
               r = -.5 * i;
            const a = this.view;
            if (null !== this.view && this.view.enabled) {
               const t = a.fullWidth,
                  s = a.fullHeight;
               r += a.offsetX * i / t, e -= a.offsetY * n / s, i *= a.width / t, n *= a.height / s
            }
            const s = this.filmOffset;
            0 !== s && (r += t * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
         }
         toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
         }
      }
      const Gn = -90;
      class Xn extends Ie {
         constructor(t, e, n) {
            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null;
            const i = new Wn(Gn, 1, t, e);
            i.layers = this.layers, this.add(i);
            const r = new Wn(Gn, 1, t, e);
            r.layers = this.layers, this.add(r);
            const a = new Wn(Gn, 1, t, e);
            a.layers = this.layers, this.add(a);
            const s = new Wn(Gn, 1, t, e);
            s.layers = this.layers, this.add(s);
            const o = new Wn(Gn, 1, t, e);
            o.layers = this.layers, this.add(o);
            const l = new Wn(Gn, 1, t, e);
            l.layers = this.layers, this.add(l)
         }
         updateCoordinateSystem() {
            const t = this.coordinateSystem,
               e = this.children.concat(),
               [n, i, r, a, s, o] = e;
            for (const t of e) this.remove(t);
            if (t === j) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), s.up.set(0, 1, 0), s.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
            else {
               if (t !== q) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
               n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), s.up.set(0, -1, 0), s.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1)
            }
            for (const t of e) this.add(t), t.updateMatrixWorld()
         }
         update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget;
            this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
            const [i, r, a, s, o, l] = this.children, c = t.getRenderTarget(), h = t.xr.enabled;
            t.xr.enabled = !1;
            const u = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, a), t.setRenderTarget(n, 3), t.render(e, s), t.setRenderTarget(n, 4), t.render(e, o), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, l), t.setRenderTarget(c), t.xr.enabled = h, n.texture.needsPMREMUpdate = !0
         }
      }
      class jn extends Tt {
         constructor(t, e, n, r, a, s, o, l, c, h) {
            super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : i, n, r, a, s, o, l, c, h), this.isCubeTexture = !0, this.flipY = !1
         }
         get images() {
            return this.image
         }
         set images(t) {
            this.image = t
         }
      }
      class qn extends Ct {
         constructor(t = 1, e = {}) {
            super(t, t, e), this.isWebGLCubeRenderTarget = !0;
            const n = {
                  width: t,
                  height: t,
                  depth: 1
               },
               i = [n, n, n, n, n, n];
            void 0 !== e.encoding && (dt("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), e.colorSpace = e.encoding === F ? z : k), this.texture = new jn(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : f
         }
         fromEquirectangularTexture(t, e) {
            this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
            const n = {
                  uniforms: {
                     tEquirect: {
                        value: null
                     }
                  },
                  vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                  fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
               },
               i = new On(5, 5, 5),
               r = new Hn({
                  name: "CubemapFromEquirect",
                  uniforms: Fn(n.uniforms),
                  vertexShader: n.vertexShader,
                  fragmentShader: n.fragmentShader,
                  side: 1,
                  blending: 0
               });
            r.uniforms.tEquirect.value = e;
            const a = new In(i, r),
               s = e.minFilter;
            e.minFilter === m && (e.minFilter = f);
            return new Xn(1, 10, this).update(t, a), e.minFilter = s, a.geometry.dispose(), a.material.dispose(), this
         }
         clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
            t.setRenderTarget(r)
         }
      }
      const Yn = new Dt,
         Zn = new Dt,
         Kn = new ot;
      class Jn {
         constructor(t = new Dt(1, 0, 0), e = 0) {
            this.isPlane = !0, this.normal = t, this.constant = e
         }
         set(t, e) {
            return this.normal.copy(t), this.constant = e, this
         }
         setComponents(t, e, n, i) {
            return this.normal.set(t, e, n), this.constant = i, this
         }
         setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
         }
         setFromCoplanarPoints(t, e, n) {
            const i = Yn.subVectors(n, e).cross(Zn.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t), this
         }
         copy(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
         }
         normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
         }
         negate() {
            return this.constant *= -1, this.normal.negate(), this
         }
         distanceToPoint(t) {
            return this.normal.dot(t) + this.constant
         }
         distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius
         }
         projectPoint(t, e) {
            return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t))
         }
         intersectLine(t, e) {
            const n = t.delta(Yn),
               i = this.normal.dot(n);
            if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r)
         }
         intersectsLine(t) {
            const e = this.distanceToPoint(t.start),
               n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
         }
         intersectsBox(t) {
            return t.intersectsPlane(this)
         }
         intersectsSphere(t) {
            return t.intersectsPlane(this)
         }
         coplanarPoint(t) {
            return t.copy(this.normal).multiplyScalar(-this.constant)
         }
         applyMatrix4(t, e) {
            const n = e || Kn.getNormalMatrix(t),
               i = this.coplanarPoint(Yn).applyMatrix4(t),
               r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r), this
         }
         translate(t) {
            return this.constant -= t.dot(this.normal), this
         }
         equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
         }
         clone() {
            return (new this.constructor).copy(this)
         }
      }
      const Qn = new te,
         $n = new Dt;
      class ti {
         constructor(t = new Jn, e = new Jn, n = new Jn, i = new Jn, r = new Jn, a = new Jn) {
            this.planes = [t, e, n, i, r, a]
         }
         set(t, e, n, i, r, a) {
            const s = this.planes;
            return s[0].copy(t), s[1].copy(e), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(a), this
         }
         copy(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
            return this
         }
         setFromProjectionMatrix(t, e = 2e3) {
            const n = this.planes,
               i = t.elements,
               r = i[0],
               a = i[1],
               s = i[2],
               o = i[3],
               l = i[4],
               c = i[5],
               h = i[6],
               u = i[7],
               d = i[8],
               p = i[9],
               f = i[10],
               m = i[11],
               g = i[12],
               _ = i[13],
               v = i[14],
               x = i[15];
            if (n[0].setComponents(o - r, u - l, m - d, x - g).normalize(), n[1].setComponents(o + r, u + l, m + d, x + g).normalize(), n[2].setComponents(o + a, u + c, m + p, x + _).normalize(), n[3].setComponents(o - a, u - c, m - p, x - _).normalize(), n[4].setComponents(o - s, u - h, m - f, x - v).normalize(), e === j) n[5].setComponents(o + s, u + h, m + f, x + v).normalize();
            else {
               if (e !== q) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
               n[5].setComponents(s, h, f, v).normalize()
            }
            return this
         }
         intersectsObject(t) {
            if (void 0 !== t.boundingSphere) null === t.boundingSphere && t.computeBoundingSphere(), Qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
            else {
               const e = t.geometry;
               null === e.boundingSphere && e.computeBoundingSphere(), Qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)
            }
            return this.intersectsSphere(Qn)
         }
         intersectsSprite(t) {
            return Qn.center.set(0, 0, 0), Qn.radius = .7071067811865476, Qn.applyMatrix4(t.matrixWorld), this.intersectsSphere(Qn)
         }
         intersectsSphere(t) {
            const e = this.planes,
               n = t.center,
               i = -t.radius;
            for (let t = 0; t < 6; t++) {
               if (e[t].distanceToPoint(n) < i) return !1
            }
            return !0
         }
         intersectsBox(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) {
               const i = e[n];
               if ($n.x = i.normal.x > 0 ? t.max.x : t.min.x, $n.y = i.normal.y > 0 ? t.max.y : t.min.y, $n.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint($n) < 0) return !1
            }
            return !0
         }
         containsPoint(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
               if (e[n].distanceToPoint(t) < 0) return !1;
            return !0
         }
         clone() {
            return (new this.constructor).copy(this)
         }
      }

      function ei() {
         let t = null,
            e = !1,
            n = null,
            i = null;

         function r(e, a) {
            n(e, a), i = t.requestAnimationFrame(r)
         }
         return {
            start: function () {
               !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
            },
            stop: function () {
               t.cancelAnimationFrame(i), e = !1
            },
            setAnimationLoop: function (t) {
               n = t
            },
            setContext: function (e) {
               t = e
            }
         }
      }

      function ni(t, e) {
         const n = e.isWebGL2,
            i = new WeakMap;
         return {
            get: function (t) {
               return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
            },
            remove: function (e) {
               e.isInterleavedBufferAttribute && (e = e.data);
               const n = i.get(e);
               n && (t.deleteBuffer(n.buffer), i.delete(e))
            },
            update: function (e, r) {
               if (e.isGLBufferAttribute) {
                  const t = i.get(e);
                  return void((!t || t.version < e.version) && i.set(e, {
                     buffer: e.buffer,
                     type: e.type,
                     bytesPerElement: e.elementSize,
                     version: e.version
                  }))
               }
               e.isInterleavedBufferAttribute && (e = e.data);
               const a = i.get(e);
               void 0 === a ? i.set(e, function (e, i) {
                  const r = e.array,
                     a = e.usage,
                     s = t.createBuffer();
                  let o;
                  if (t.bindBuffer(i, s), t.bufferData(i, r, a), e.onUploadCallback(), r instanceof Float32Array) o = t.FLOAT;
                  else if (r instanceof Uint16Array)
                     if (e.isFloat16BufferAttribute) {
                        if (!n) throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
                        o = t.HALF_FLOAT
                     } else o = t.UNSIGNED_SHORT;
                  else if (r instanceof Int16Array) o = t.SHORT;
                  else if (r instanceof Uint32Array) o = t.UNSIGNED_INT;
                  else if (r instanceof Int32Array) o = t.INT;
                  else if (r instanceof Int8Array) o = t.BYTE;
                  else if (r instanceof Uint8Array) o = t.UNSIGNED_BYTE;
                  else {
                     if (!(r instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                     o = t.UNSIGNED_BYTE
                  }
                  return {
                     buffer: s,
                     type: o,
                     bytesPerElement: r.BYTES_PER_ELEMENT,
                     version: e.version
                  }
               }(e, r)) : a.version < e.version && (! function (e, i, r) {
                  const a = i.array,
                     s = i.updateRange;
                  t.bindBuffer(r, e), -1 === s.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a, s.offset, s.count) : t.bufferSubData(r, s.offset * a.BYTES_PER_ELEMENT, a.subarray(s.offset, s.offset + s.count)), s.count = -1), i.onUploadCallback()
               }(a.buffer, e, r), a.version = e.version)
            }
         }
      }
      class ii extends gn {
         constructor(t = 1, e = 1, n = 1, i = 1) {
            super(), this.type = "PlaneGeometry", this.parameters = {
               width: t,
               height: e,
               widthSegments: n,
               heightSegments: i
            };
            const r = t / 2,
               a = e / 2,
               s = Math.floor(n),
               o = Math.floor(i),
               l = s + 1,
               c = o + 1,
               h = t / s,
               u = e / o,
               d = [],
               p = [],
               f = [],
               m = [];
            for (let t = 0; t < c; t++) {
               const e = t * u - a;
               for (let n = 0; n < l; n++) {
                  const i = n * h - r;
                  p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - t / o)
               }
            }
            for (let t = 0; t < o; t++)
               for (let e = 0; e < s; e++) {
                  const n = e + l * t,
                     i = e + l * (t + 1),
                     r = e + 1 + l * (t + 1),
                     a = e + 1 + l * t;
                  d.push(n, i, a), d.push(i, r, a)
               }
            this.setIndex(d), this.setAttribute("position", new ln(p, 3)), this.setAttribute("normal", new ln(f, 3)), this.setAttribute("uv", new ln(m, 2))
         }
         copy(t) {
            return super.copy(t), this.parameters = Object.assign({}, t.parameters), this
         }
         static fromJSON(t) {
            return new ii(t.width, t.height, t.widthSegments, t.heightSegments)
         }
      }
      const ri = {
            alphahash_fragment: "#ifdef USE_ALPHAHASH\n\tif ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
            alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n\tconst float ALPHA_HASH_SCALE = 0.05;\n\tfloat hash2D( vec2 value ) {\n\t\treturn fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\t}\n\tfloat hash3D( vec3 value ) {\n\t\treturn hash2D( vec2( hash2D( value.xy ), value.z ) );\n\t}\n\tfloat getAlphaHashThreshold( vec3 position ) {\n\t\tfloat maxDeriv = max(\n\t\t\tlength( dFdx( position.xyz ) ),\n\t\t\tlength( dFdy( position.xyz ) )\n\t\t);\n\t\tfloat pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\t\tvec2 pixScales = vec2(\n\t\t\texp2( floor( log2( pixScale ) ) ),\n\t\t\texp2( ceil( log2( pixScale ) ) )\n\t\t);\n\t\tvec2 alpha = vec2(\n\t\t\thash3D( floor( pixScales.x * position.xyz ) ),\n\t\t\thash3D( floor( pixScales.y * position.xyz ) )\n\t\t);\n\t\tfloat lerpFactor = fract( log2( pixScale ) );\n\t\tfloat x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\t\tfloat a = min( lerpFactor, 1.0 - lerpFactor );\n\t\tvec3 cases = vec3(\n\t\t\tx * x / ( 2.0 * a * ( 1.0 - a ) ),\n\t\t\t( x - 0.5 * a ) / ( 1.0 - a ),\n\t\t\t1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n\t\t);\n\t\tfloat threshold = ( x < ( 1.0 - a ) )\n\t\t\t? ( ( x < a ) ? cases.x : cases.y )\n\t\t\t: cases.z;\n\t\treturn clamp( threshold , 1.0e-6, 1.0 );\n\t}\n#endif",
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
            alphatest_fragment: "#ifdef USE_ALPHATEST\n\tif ( diffuseColor.a < alphaTest ) discard;\n#endif",
            alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n\tuniform float alphaTest;\n#endif",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\t#endif\n#endif",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n\tvPosition = vec3( position );\n#endif",
            beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
            bsdfs: "float G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n} // validated",
            iridescence_fragment: "#ifdef USE_IRIDESCENCE\n\tconst mat3 XYZ_TO_REC709 = mat3(\n\t\t 3.2404542, -0.9692660,  0.0556434,\n\t\t-1.5371385,  1.8760108, -0.2040259,\n\t\t-0.4985314,  0.0415560,  1.0572252\n\t);\n\tvec3 Fresnel0ToIor( vec3 fresnel0 ) {\n\t\tvec3 sqrtF0 = sqrt( fresnel0 );\n\t\treturn ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n\t}\n\tvec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n\t}\n\tfloat IorToFresnel0( float transmittedIor, float incidentIor ) {\n\t\treturn pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n\t}\n\tvec3 evalSensitivity( float OPD, vec3 shift ) {\n\t\tfloat phase = 2.0 * PI * OPD * 1.0e-9;\n\t\tvec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n\t\tvec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n\t\tvec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n\t\tvec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n\t\txyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n\t\txyz /= 1.0685e-7;\n\t\tvec3 rgb = XYZ_TO_REC709 * xyz;\n\t\treturn rgb;\n\t}\n\tvec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n\t\tvec3 I;\n\t\tfloat iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n\t\tfloat sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n\t\tfloat cosTheta2Sq = 1.0 - sinTheta2Sq;\n\t\tif ( cosTheta2Sq < 0.0 ) {\n\t\t\treturn vec3( 1.0 );\n\t\t}\n\t\tfloat cosTheta2 = sqrt( cosTheta2Sq );\n\t\tfloat R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n\t\tfloat R12 = F_Schlick( R0, 1.0, cosTheta1 );\n\t\tfloat T121 = 1.0 - R12;\n\t\tfloat phi12 = 0.0;\n\t\tif ( iridescenceIOR < outsideIOR ) phi12 = PI;\n\t\tfloat phi21 = PI - phi12;\n\t\tvec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );\t\tvec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n\t\tvec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n\t\tvec3 phi23 = vec3( 0.0 );\n\t\tif ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n\t\tif ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n\t\tif ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n\t\tfloat OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n\t\tvec3 phi = vec3( phi21 ) + phi23;\n\t\tvec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n\t\tvec3 r123 = sqrt( R123 );\n\t\tvec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n\t\tvec3 C0 = R12 + Rs;\n\t\tI = C0;\n\t\tvec3 Cm = Rs - T121;\n\t\tfor ( int m = 1; m <= 2; ++ m ) {\n\t\t\tCm *= r123;\n\t\t\tvec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n\t\t\tI += Cm * Sm;\n\t\t}\n\t\treturn max( I, vec3( 0.0 ) );\n\t}\n#endif",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vBumpMapUv );\n\t\tvec2 dSTdy = dFdy( vBumpMapUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos.xyz );\n\t\tvec3 vSigmaY = dFdy( surf_pos.xyz );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 ) * faceDirection;\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
            color_fragment: "#if defined( USE_COLOR_ALPHA )\n\tdiffuseColor *= vColor;\n#elif defined( USE_COLOR )\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR )\n\tvarying vec3 vColor;\n#endif",
            color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvarying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#if defined( USE_COLOR_ALPHA )\n\tvColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
            common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\n#ifdef USE_ALPHAHASH\n\tvarying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat luminance( const in vec3 rgb ) {\n\tconst vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );\n\treturn dot( weights, rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\tfloat fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\treturn f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\thighp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tuv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\t\tuv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\t\tuv.x *= CUBEUV_TEXEL_WIDTH;\n\t\tuv.y *= CUBEUV_TEXEL_HEIGHT;\n\t\t#ifdef texture2DGradEXT\n\t\t\treturn texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n\t\t#else\n\t\t\treturn texture2D( envMap, uv ).rgb;\n\t\t#endif\n\t}\n\t#define cubeUV_r0 1.0\n\t#define cubeUV_v0 0.339\n\t#define cubeUV_m0 - 2.0\n\t#define cubeUV_r1 0.8\n\t#define cubeUV_v1 0.276\n\t#define cubeUV_m1 - 1.0\n\t#define cubeUV_r4 0.4\n\t#define cubeUV_v4 0.046\n\t#define cubeUV_m4 2.0\n\t#define cubeUV_r5 0.305\n\t#define cubeUV_v5 0.016\n\t#define cubeUV_m5 3.0\n\t#define cubeUV_r6 0.21\n\t#define cubeUV_v6 0.0038\n\t#define cubeUV_m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= cubeUV_r1 ) {\n\t\t\tmip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\t\t} else if ( roughness >= cubeUV_r4 ) {\n\t\t\tmip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\t\t} else if ( roughness >= cubeUV_r5 ) {\n\t\t\tmip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\t\t} else if ( roughness >= cubeUV_r6 ) {\n\t\t\tmip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
            defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
            colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
            colorspace_pars_fragment: "vec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
            envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
            envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
            envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n\tvec3 getIBLIrradiance( const in vec3 normal ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\tvec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\tvec3 reflectVec = reflect( - viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t\treturn envMapColor.rgb * envMapIntensity;\n\t\t#else\n\t\t\treturn vec3( 0.0 );\n\t\t#endif\n\t}\n\t#ifdef USE_ANISOTROPY\n\t\tvec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\t\t\t#ifdef ENVMAP_TYPE_CUBE_UV\n\t\t\t\tvec3 bentNormal = cross( bitangent, viewDir );\n\t\t\t\tbentNormal = normalize( cross( bentNormal, bitangent ) );\n\t\t\t\tbentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\t\t\t\treturn getIBLRadiance( viewDir, bentNormal, roughness );\n\t\t\t#else\n\t\t\t\treturn vec3( 0.0 );\n\t\t\t#endif\n\t\t}\n\t#endif\n#endif",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
            fog_vertex: "#ifdef USE_FOG\n\tvFogDepth = - mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float vFogDepth;\n#endif",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float vFogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
            gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn vec3( texture2D( gradientMap, coord ).r );\n\t#else\n\t\tvec2 fw = fwidth( coord ) * 0.5;\n\t\treturn mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\t#endif\n}",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\treflectedLight.indirectDiffuse += lightMapIrradiance;\n#endif",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
            lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n\tvec3 diffuseColor;\n\tfloat specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Lambert\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Lambert",
            lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\treturn irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t#if defined ( LEGACY_LIGHTS )\n\t\tif ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\t\treturn pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t\t}\n\t\treturn 1.0;\n\t#else\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tif ( cutoffDistance > 0.0 ) {\n\t\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t}\n\t\treturn distanceFalloff;\n\t#endif\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n\treturn smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tlight.color = directionalLight.color;\n\t\tlight.direction = directionalLight.direction;\n\t\tlight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tlight.color = pointLight.color;\n\t\tlight.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tlight.direction = normalize( lVector );\n\t\tfloat angleCos = dot( light.direction, spotLight.direction );\n\t\tfloat spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\tif ( spotAttenuation > 0.0 ) {\n\t\t\tfloat lightDistance = length( lVector );\n\t\t\tlight.color = spotLight.color * spotAttenuation;\n\t\t\tlight.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tlight.visible = ( light.color != vec3( 0.0 ) );\n\t\t} else {\n\t\t\tlight.color = vec3( 0.0 );\n\t\t\tlight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n\t\tfloat dotNL = dot( normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\treturn irradiance;\n\t}\n#endif",
            lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
            lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n\tmaterial.ior = ior;\n\t#ifdef USE_SPECULAR\n\t\tfloat specularIntensityFactor = specularIntensity;\n\t\tvec3 specularColorFactor = specularColor;\n\t\t#ifdef USE_SPECULAR_COLORMAP\n\t\t\tspecularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\t\t#endif\n\t\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\t\tspecularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\t\t#endif\n\t\tmaterial.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\t#else\n\t\tfloat specularIntensityFactor = 1.0;\n\t\tvec3 specularColorFactor = vec3( 1.0 );\n\t\tmaterial.specularF90 = 1.0;\n\t#endif\n\tmaterial.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\tmaterial.clearcoatF0 = vec3( 0.04 );\n\tmaterial.clearcoatF90 = 1.0;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_IRIDESCENCE\n\tmaterial.iridescence = iridescence;\n\tmaterial.iridescenceIOR = iridescenceIOR;\n\t#ifdef USE_IRIDESCENCEMAP\n\t\tmaterial.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\t#endif\n\t#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\t\tmaterial.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\t#else\n\t\tmaterial.iridescenceThickness = iridescenceThicknessMaximum;\n\t#endif\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheenColor;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tmaterial.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\t#endif\n\tmaterial.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tmaterial.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\t#ifdef USE_ANISOTROPYMAP\n\t\tmat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n\t\tvec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n\t\tvec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\t#else\n\t\tvec2 anisotropyV = anisotropyVector;\n\t#endif\n\tmaterial.anisotropy = length( anisotropyV );\n\tanisotropyV /= material.anisotropy;\n\tmaterial.anisotropy = saturate( material.anisotropy );\n\tmaterial.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\tmaterial.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;\n\tmaterial.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;\n#endif",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat roughness;\n\tvec3 specularColor;\n\tfloat specularF90;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat clearcoat;\n\t\tfloat clearcoatRoughness;\n\t\tvec3 clearcoatF0;\n\t\tfloat clearcoatF90;\n\t#endif\n\t#ifdef USE_IRIDESCENCE\n\t\tfloat iridescence;\n\t\tfloat iridescenceIOR;\n\t\tfloat iridescenceThickness;\n\t\tvec3 iridescenceFresnel;\n\t\tvec3 iridescenceF0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tvec3 sheenColor;\n\t\tfloat sheenRoughness;\n\t#endif\n\t#ifdef IOR\n\t\tfloat ior;\n\t#endif\n\t#ifdef USE_TRANSMISSION\n\t\tfloat transmission;\n\t\tfloat transmissionAlpha;\n\t\tfloat thickness;\n\t\tfloat attenuationDistance;\n\t\tvec3 attenuationColor;\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat anisotropy;\n\t\tfloat alphaT;\n\t\tvec3 anisotropyT;\n\t\tvec3 anisotropyB;\n\t#endif\n};\nvec3 clearcoatSpecular = vec3( 0.0 );\nvec3 sheenSpecular = vec3( 0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n\tfloat V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n\t\tfloat gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n\t\tfloat gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n\t\tfloat v = 0.5 / ( gv + gl );\n\t\treturn saturate(v);\n\t}\n\tfloat D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n\t\tfloat a2 = alphaT * alphaB;\n\t\thighp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n\t\thighp float v2 = dot( v, v );\n\t\tfloat w2 = a2 / v2;\n\t\treturn RECIPROCAL_PI * a2 * pow2 ( w2 );\n\t}\n#endif\n#ifdef USE_CLEARCOAT\n\tvec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n\t\tvec3 f0 = material.clearcoatF0;\n\t\tfloat f90 = material.clearcoatF90;\n\t\tfloat roughness = material.clearcoatRoughness;\n\t\tfloat alpha = pow2( roughness );\n\t\tvec3 halfDir = normalize( lightDir + viewDir );\n\t\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\t\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\t\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\t\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\t\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t\treturn F * ( V * D );\n\t}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n\tvec3 f0 = material.specularColor;\n\tfloat f90 = material.specularF90;\n\tfloat roughness = material.roughness;\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotVH = saturate( dot( viewDir, halfDir ) );\n\tvec3 F = F_Schlick( f0, f90, dotVH );\n\t#ifdef USE_IRIDESCENCE\n\t\tF = mix( F, material.iridescenceFresnel, material.iridescence );\n\t#endif\n\t#ifdef USE_ANISOTROPY\n\t\tfloat dotTL = dot( material.anisotropyT, lightDir );\n\t\tfloat dotTV = dot( material.anisotropyT, viewDir );\n\t\tfloat dotTH = dot( material.anisotropyT, halfDir );\n\t\tfloat dotBL = dot( material.anisotropyB, lightDir );\n\t\tfloat dotBV = dot( material.anisotropyB, viewDir );\n\t\tfloat dotBH = dot( material.anisotropyB, halfDir );\n\t\tfloat V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n\t\tfloat D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n\t#else\n\t\tfloat V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\t\tfloat D = D_GGX( alpha, dotNH );\n\t#endif\n\treturn F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n\tfloat alpha = pow2( roughness );\n\tfloat invAlpha = 1.0 / alpha;\n\tfloat cos2h = dotNH * dotNH;\n\tfloat sin2h = max( 1.0 - cos2h, 0.0078125 );\n\treturn ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n\treturn saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n\tvec3 halfDir = normalize( lightDir + viewDir );\n\tfloat dotNL = saturate( dot( normal, lightDir ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat D = D_Charlie( sheenRoughness, dotNH );\n\tfloat V = V_Neubelt( dotNV, dotNL );\n\treturn sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat r2 = roughness * roughness;\n\tfloat a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n\tfloat b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n\tfloat DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n\treturn saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n\treturn fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\treturn specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n\tvec2 fab = DFGApprox( normal, viewDir, roughness );\n\t#ifdef USE_IRIDESCENCE\n\t\tvec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n\t#else\n\t\tvec3 Fr = specularColor;\n\t#endif\n\tvec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n\tfloat Ess = fab.x + fab.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.roughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = dotNLcc * directLight.color;\n\t\tclearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );\n\t#endif\n\treflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );\n\treflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n\t#endif\n\t#ifdef USE_SHEEN\n\t\tsheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );\n\t#endif\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t#ifdef USE_IRIDESCENCE\n\t\tcomputeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n\t#else\n\t\tcomputeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n\t#endif\n\tvec3 totalScattering = singleScattering + multiScattering;\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n\treflectedLight.indirectSpecular += radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
            lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef USE_CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n\tfloat dotNVi = saturate( dot( normal, geometry.viewDir ) );\n\tif ( material.iridescenceThickness == 0.0 ) {\n\t\tmaterial.iridescence = 0.0;\n\t} else {\n\t\tmaterial.iridescence = saturate( material.iridescence );\n\t}\n\tif ( material.iridescence > 0.0 ) {\n\t\tmaterial.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n\t\tmaterial.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n\t}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointLightInfo( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tvec4 spotColor;\n\tvec3 spotLightCoord;\n\tbool inSpotLightMap;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotLightInfo( spotLight, geometry, directLight );\n\t\t#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n\t\t#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n\t\t#else\n\t\t#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n\t\t#endif\n\t\t#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n\t\t\tspotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n\t\t\tinSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n\t\t\tspotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n\t\t\tdirectLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n\t\t#endif\n\t\t#undef SPOT_LIGHT_MAP_INDEX\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalLightInfo( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry.normal );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
            lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\tvec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getIBLIrradiance( geometry.normal );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\t#ifdef USE_ANISOTROPY\n\t\tradiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );\n\t#else\n\t\tradiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tclearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );\n\t#endif\n#endif",
            lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
            logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
            map_fragment: "#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, vMapUv );\n#endif",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
            map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t#if defined( USE_POINTS_UV )\n\t\tvec2 uv = vUv;\n\t#else\n\t\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tdiffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
            map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n\tvarying vec2 vUv;\n#else\n\t#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\t\tuniform mat3 uvTransform;\n\t#endif\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphcolor_vertex: "#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )\n\tvColor *= morphTargetBaseInfluence;\n\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t#if defined( USE_COLOR_ALPHA )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\t\t#elif defined( USE_COLOR )\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\t\t#endif\n\t}\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\t\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\t\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\t\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n\t#endif\n#endif",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tuniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\t\tuniform sampler2DArray morphTargetsTexture;\n\t\tuniform ivec2 morphTargetsTextureSize;\n\t\tvec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\t\t\tint texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n\t\t\tint y = texelIndex / morphTargetsTextureSize.x;\n\t\t\tint x = texelIndex - y * morphTargetsTextureSize.x;\n\t\t\tivec3 morphUV = ivec3( x, y, morphTargetIndex );\n\t\t\treturn texelFetch( morphTargetsTexture, morphUV, 0 );\n\t\t}\n\t#else\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\tuniform float morphTargetInfluences[ 8 ];\n\t\t#else\n\t\t\tuniform float morphTargetInfluences[ 4 ];\n\t\t#endif\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\t#ifdef MORPHTARGETS_TEXTURE\n\t\tfor ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\t\t\tif ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\t\t}\n\t#else\n\t\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\t\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\t\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\t\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t\t#ifndef USE_MORPHNORMALS\n\t\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t\t#endif\n\t#endif\n#endif",
            normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal *= faceDirection;\n\t#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn = getTangentFrame( - vViewPosition, normal,\n\t\t#if defined( USE_NORMALMAP )\n\t\t\tvNormalMapUv\n\t\t#elif defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tvClearcoatNormalMapUv\n\t\t#else\n\t\t\tvUv\n\t\t#endif\n\t\t);\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn[0] *= faceDirection;\n\t\ttbn[1] *= faceDirection;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\t#ifdef USE_TANGENT\n\t\tmat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\t#else\n\t\tmat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\t#endif\n\t#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\t\ttbn2[0] *= faceDirection;\n\t\ttbn2[1] *= faceDirection;\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
            normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n\tnormal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * faceDirection;\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\tvec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\tnormal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
            normal_pars_fragment: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
            normal_pars_vertex: "#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif",
            normal_vertex: "#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n\tmat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( uv.st );\n\t\tvec2 st1 = dFdy( uv.st );\n\t\tvec3 N = surf_norm;\n\t\tvec3 q1perp = cross( q1, N );\n\t\tvec3 q0perp = cross( N, q0 );\n\t\tvec3 T = q1perp * st0.x + q0perp * st1.x;\n\t\tvec3 B = q1perp * st0.y + q0perp * st1.y;\n\t\tfloat det = max( dot( T, T ), dot( B, B ) );\n\t\tfloat scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n\t\treturn mat3( T * scale, B * scale, N );\n\t}\n#endif",
            clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
            clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\tclearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
            clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif",
            iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n\tuniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform sampler2D iridescenceThicknessMap;\n#endif",
            opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec2 packDepthToRG( in highp float v ) {\n\treturn packDepthToRGBA( v ).yx;\n}\nfloat unpackRGToDepth( const in highp vec2 v ) {\n\treturn unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * depth - far );\n}",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
            project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
            dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
            dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n\tuniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n\t\tbool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
            shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n\tuniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n\tvarying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
            shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\tvec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition;\n\t\t#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\t\tshadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n\t\t#endif\n\t\tvSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n#endif",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\tuniform highp sampler2D boneTexture;\n\tuniform int boneTextureSize;\n\tmat4 getBoneMatrix( const in float i ) {\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\ty = dy * ( y + 0.5 );\n\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\treturn bone;\n\t}\n#endif",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
            tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
            transmission_fragment: "#ifdef USE_TRANSMISSION\n\tmaterial.transmission = transmission;\n\tmaterial.transmissionAlpha = 1.0;\n\tmaterial.thickness = thickness;\n\tmaterial.attenuationDistance = attenuationDistance;\n\tmaterial.attenuationColor = attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tmaterial.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tmaterial.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\t#endif\n\tvec3 pos = vWorldPosition;\n\tvec3 v = normalize( cameraPosition - pos );\n\tvec3 n = inverseTransformDirection( normal, viewMatrix );\n\tvec4 transmitted = getIBLVolumeRefraction(\n\t\tn, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n\t\tpos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,\n\t\tmaterial.attenuationColor, material.attenuationDistance );\n\tmaterial.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\ttotalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
            transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n\tuniform float transmission;\n\tuniform float thickness;\n\tuniform float attenuationDistance;\n\tuniform vec3 attenuationColor;\n\t#ifdef USE_TRANSMISSIONMAP\n\t\tuniform sampler2D transmissionMap;\n\t#endif\n\t#ifdef USE_THICKNESSMAP\n\t\tuniform sampler2D thicknessMap;\n\t#endif\n\tuniform vec2 transmissionSamplerSize;\n\tuniform sampler2D transmissionSamplerMap;\n\tuniform mat4 modelMatrix;\n\tuniform mat4 projectionMatrix;\n\tvarying vec3 vWorldPosition;\n\tfloat w0( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\t}\n\tfloat w1( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\t}\n\tfloat w2( float a ){\n\t\treturn ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\t}\n\tfloat w3( float a ) {\n\t\treturn ( 1.0 / 6.0 ) * ( a * a * a );\n\t}\n\tfloat g0( float a ) {\n\t\treturn w0( a ) + w1( a );\n\t}\n\tfloat g1( float a ) {\n\t\treturn w2( a ) + w3( a );\n\t}\n\tfloat h0( float a ) {\n\t\treturn - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\t}\n\tfloat h1( float a ) {\n\t\treturn 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\t}\n\tvec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\t\tuv = uv * texelSize.zw + 0.5;\n\t\tvec2 iuv = floor( uv );\n\t\tvec2 fuv = fract( uv );\n\t\tfloat g0x = g0( fuv.x );\n\t\tfloat g1x = g1( fuv.x );\n\t\tfloat h0x = h0( fuv.x );\n\t\tfloat h1x = h1( fuv.x );\n\t\tfloat h0y = h0( fuv.y );\n\t\tfloat h1y = h1( fuv.y );\n\t\tvec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\tvec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\t\treturn g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n\t\t\tg1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\t}\n\tvec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\t\tvec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n\t\tvec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n\t\tvec2 fLodSizeInv = 1.0 / fLodSize;\n\t\tvec2 cLodSizeInv = 1.0 / cLodSize;\n\t\tvec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n\t\tvec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n\t\treturn mix( fSample, cSample, fract( lod ) );\n\t}\n\tvec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\t\tvec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\t\tvec3 modelScale;\n\t\tmodelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n\t\tmodelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n\t\tmodelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\t\treturn normalize( refractionVector ) * thickness * modelScale;\n\t}\n\tfloat applyIorToRoughness( const in float roughness, const in float ior ) {\n\t\treturn roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\t}\n\tvec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\t\tfloat lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n\t\treturn textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\t}\n\tvec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tif ( isinf( attenuationDistance ) ) {\n\t\t\treturn vec3( 1.0 );\n\t\t} else {\n\t\t\tvec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n\t\t\tvec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );\t\t\treturn transmittance;\n\t\t}\n\t}\n\tvec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n\t\tconst in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n\t\tconst in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,\n\t\tconst in vec3 attenuationColor, const in float attenuationDistance ) {\n\t\tvec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n\t\tvec3 refractedRayExit = position + transmissionRay;\n\t\tvec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n\t\tvec2 refractionCoords = ndcPos.xy / ndcPos.w;\n\t\trefractionCoords += 1.0;\n\t\trefractionCoords /= 2.0;\n\t\tvec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n\t\tvec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\t\tvec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\t\tvec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\t\tfloat transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\t\treturn vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\t}\n#endif",
            uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
            uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\n\tuniform mat3 mapTransform;\n\tvarying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform mat3 alphaMapTransform;\n\tvarying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n\tuniform mat3 lightMapTransform;\n\tvarying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n\tuniform mat3 aoMapTransform;\n\tvarying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n\tuniform mat3 bumpMapTransform;\n\tvarying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n\tuniform mat3 normalMapTransform;\n\tvarying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tuniform mat3 displacementMapTransform;\n\tvarying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tuniform mat3 emissiveMapTransform;\n\tvarying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n\tuniform mat3 metalnessMapTransform;\n\tvarying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tuniform mat3 roughnessMapTransform;\n\tvarying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tuniform mat3 anisotropyMapTransform;\n\tvarying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tuniform mat3 clearcoatMapTransform;\n\tvarying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform mat3 clearcoatNormalMapTransform;\n\tvarying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform mat3 clearcoatRoughnessMapTransform;\n\tvarying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tuniform mat3 sheenColorMapTransform;\n\tvarying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tuniform mat3 sheenRoughnessMapTransform;\n\tvarying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tuniform mat3 iridescenceMapTransform;\n\tvarying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tuniform mat3 iridescenceThicknessMapTransform;\n\tvarying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n\tuniform mat3 specularMapTransform;\n\tvarying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tuniform mat3 specularColorMapTransform;\n\tvarying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tuniform mat3 specularIntensityMapTransform;\n\tvarying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tuniform mat3 transmissionMapTransform;\n\tvarying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n\tuniform mat3 thicknessMapTransform;\n\tvarying vec2 vThicknessMapUv;\n#endif",
            uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\tvUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n\tvMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n\tvAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n\tvLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n\tvAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n\tvBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n\tvNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\tvDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n\tvEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n\tvMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n\tvRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n\tvAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n\tvClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tvClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tvClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\tvIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\tvIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\tvSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\tvSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n\tvSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\tvSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\tvSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\tvTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n\tvThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
            background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
            background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
            backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
            backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n\tuniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\tuniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );\n\t#else\n\t\tvec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t#endif\n\ttexColor.rgb *= backgroundIntensity;\n\tgl_FragColor = texColor;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
            cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = texColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
            distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
            distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
            equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
            equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n}",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinbase_vertex>\n\t\t#include <skinnormal_vertex>\n\t\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n\t\treflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_lambert_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
            meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t#else\n\t\tvec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
            meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\tvarying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n\t#ifdef OPAQUE\n\t\tgl_FragColor.a = 1.0;\n\t#endif\n}",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n\tvarying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n\tvWorldPosition = worldPosition.xyz;\n#endif\n}",
            meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define IOR\n\t#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n\tuniform float ior;\n#endif\n#ifdef USE_SPECULAR\n\tuniform float specularIntensity;\n\tuniform vec3 specularColor;\n\t#ifdef USE_SPECULAR_COLORMAP\n\t\tuniform sampler2D specularColorMap;\n\t#endif\n\t#ifdef USE_SPECULAR_INTENSITYMAP\n\t\tuniform sampler2D specularIntensityMap;\n\t#endif\n#endif\n#ifdef USE_CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_IRIDESCENCE\n\tuniform float iridescence;\n\tuniform float iridescenceIOR;\n\tuniform float iridescenceThicknessMinimum;\n\tuniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheenColor;\n\tuniform float sheenRoughness;\n\t#ifdef USE_SHEEN_COLORMAP\n\t\tuniform sampler2D sheenColorMap;\n\t#endif\n\t#ifdef USE_SHEEN_ROUGHNESSMAP\n\t\tuniform sampler2D sheenRoughnessMap;\n\t#endif\n#endif\n#ifdef USE_ANISOTROPY\n\tuniform vec2 anisotropyVector;\n\t#ifdef USE_ANISOTROPYMAP\n\t\tuniform sampler2D anisotropyMap;\n\t#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n\tvec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n\t#include <transmission_fragment>\n\tvec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n\t#ifdef USE_SHEEN\n\t\tfloat sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n\t\toutgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;\n\t#endif\n\t#ifdef USE_CLEARCOAT\n\t\tfloat dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\tvec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n\t\toutgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;\n\t#endif\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <normal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif\nvoid main() {\n\t#ifdef USE_POINTS_UV\n\t\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\t#endif\n\t#include <color_vertex>\n\t#include <morphcolor_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
            shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
            shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}",
            sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
            sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <alphahash_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\t#include <opaque_fragment>\n\t#include <tonemapping_fragment>\n\t#include <colorspace_fragment>\n\t#include <fog_fragment>\n}"
         },
         ai = {
            common: {
               diffuse: {
                  value: new $e(16777215)
               },
               opacity: {
                  value: 1
               },
               map: {
                  value: null
               },
               mapTransform: {
                  value: new ot
               },
               alphaMap: {
                  value: null
               },
               alphaMapTransform: {
                  value: new ot
               },
               alphaTest: {
                  value: 0
               }
            },
            specularmap: {
               specularMap: {
                  value: null
               },
               specularMapTransform: {
                  value: new ot
               }
            },
            envmap: {
               envMap: {
                  value: null
               },
               flipEnvMap: {
                  value: -1
               },
               reflectivity: {
                  value: 1
               },
               ior: {
                  value: 1.5
               },
               refractionRatio: {
                  value: .98
               }
            },
            aomap: {
               aoMap: {
                  value: null
               },
               aoMapIntensity: {
                  value: 1
               },
               aoMapTransform: {
                  value: new ot
               }
            },
            lightmap: {
               lightMap: {
                  value: null
               },
               lightMapIntensity: {
                  value: 1
               },
               lightMapTransform: {
                  value: new ot
               }
            },
            bumpmap: {
               bumpMap: {
                  value: null
               },
               bumpMapTransform: {
                  value: new ot
               },
               bumpScale: {
                  value: 1
               }
            },
            normalmap: {
               normalMap: {
                  value: null
               },
               normalMapTransform: {
                  value: new ot
               },
               normalScale: {
                  value: new st(1, 1)
               }
            },
            displacementmap: {
               displacementMap: {
                  value: null
               },
               displacementMapTransform: {
                  value: new ot
               },
               displacementScale: {
                  value: 1
               },
               displacementBias: {
                  value: 0
               }
            },
            emissivemap: {
               emissiveMap: {
                  value: null
               },
               emissiveMapTransform: {
                  value: new ot
               }
            },
            metalnessmap: {
               metalnessMap: {
                  value: null
               },
               metalnessMapTransform: {
                  value: new ot
               }
            },
            roughnessmap: {
               roughnessMap: {
                  value: null
               },
               roughnessMapTransform: {
                  value: new ot
               }
            },
            gradientmap: {
               gradientMap: {
                  value: null
               }
            },
            fog: {
               fogDensity: {
                  value: 25e-5
               },
               fogNear: {
                  value: 1
               },
               fogFar: {
                  value: 2e3
               },
               fogColor: {
                  value: new $e(16777215)
               }
            },
            lights: {
               ambientLightColor: {
                  value: []
               },
               lightProbe: {
                  value: []
               },
               directionalLights: {
                  value: [],
                  properties: {
                     direction: {},
                     color: {}
                  }
               },
               directionalLightShadows: {
                  value: [],
                  properties: {
                     shadowBias: {},
                     shadowNormalBias: {},
                     shadowRadius: {},
                     shadowMapSize: {}
                  }
               },
               directionalShadowMap: {
                  value: []
               },
               directionalShadowMatrix: {
                  value: []
               },
               spotLights: {
                  value: [],
                  properties: {
                     color: {},
                     position: {},
                     direction: {},
                     distance: {},
                     coneCos: {},
                     penumbraCos: {},
                     decay: {}
                  }
               },
               spotLightShadows: {
                  value: [],
                  properties: {
                     shadowBias: {},
                     shadowNormalBias: {},
                     shadowRadius: {},
                     shadowMapSize: {}
                  }
               },
               spotLightMap: {
                  value: []
               },
               spotShadowMap: {
                  value: []
               },
               spotLightMatrix: {
                  value: []
               },
               pointLights: {
                  value: [],
                  properties: {
                     color: {},
                     position: {},
                     decay: {},
                     distance: {}
                  }
               },
               pointLightShadows: {
                  value: [],
                  properties: {
                     shadowBias: {},
                     shadowNormalBias: {},
                     shadowRadius: {},
                     shadowMapSize: {},
                     shadowCameraNear: {},
                     shadowCameraFar: {}
                  }
               },
               pointShadowMap: {
                  value: []
               },
               pointShadowMatrix: {
                  value: []
               },
               hemisphereLights: {
                  value: [],
                  properties: {
                     direction: {},
                     skyColor: {},
                     groundColor: {}
                  }
               },
               rectAreaLights: {
                  value: [],
                  properties: {
                     color: {},
                     position: {},
                     width: {},
                     height: {}
                  }
               },
               ltc_1: {
                  value: null
               },
               ltc_2: {
                  value: null
               }
            },
            points: {
               diffuse: {
                  value: new $e(16777215)
               },
               opacity: {
                  value: 1
               },
               size: {
                  value: 1
               },
               scale: {
                  value: 1
               },
               map: {
                  value: null
               },
               alphaMap: {
                  value: null
               },
               alphaMapTransform: {
                  value: new ot
               },
               alphaTest: {
                  value: 0
               },
               uvTransform: {
                  value: new ot
               }
            },
            sprite: {
               diffuse: {
                  value: new $e(16777215)
               },
               opacity: {
                  value: 1
               },
               center: {
                  value: new st(.5, .5)
               },
               rotation: {
                  value: 0
               },
               map: {
                  value: null
               },
               mapTransform: {
                  value: new ot
               },
               alphaMap: {
                  value: null
               },
               alphaMapTransform: {
                  value: new ot
               },
               alphaTest: {
                  value: 0
               }
            }
         },
         si = {
            basic: {
               uniforms: kn([ai.common, ai.specularmap, ai.envmap, ai.aomap, ai.lightmap, ai.fog]),
               vertexShader: ri.meshbasic_vert,
               fragmentShader: ri.meshbasic_frag
            },
            lambert: {
               uniforms: kn([ai.common, ai.specularmap, ai.envmap, ai.aomap, ai.lightmap, ai.emissivemap, ai.bumpmap, ai.normalmap, ai.displacementmap, ai.fog, ai.lights, {
                  emissive: {
                     value: new $e(0)
                  }
               }]),
               vertexShader: ri.meshlambert_vert,
               fragmentShader: ri.meshlambert_frag
            },
            phong: {
               uniforms: kn([ai.common, ai.specularmap, ai.envmap, ai.aomap, ai.lightmap, ai.emissivemap, ai.bumpmap, ai.normalmap, ai.displacementmap, ai.fog, ai.lights, {
                  emissive: {
                     value: new $e(0)
                  },
                  specular: {
                     value: new $e(1118481)
                  },
                  shininess: {
                     value: 30
                  }
               }]),
               vertexShader: ri.meshphong_vert,
               fragmentShader: ri.meshphong_frag
            },
            standard: {
               uniforms: kn([ai.common, ai.envmap, ai.aomap, ai.lightmap, ai.emissivemap, ai.bumpmap, ai.normalmap, ai.displacementmap, ai.roughnessmap, ai.metalnessmap, ai.fog, ai.lights, {
                  emissive: {
                     value: new $e(0)
                  },
                  roughness: {
                     value: 1
                  },
                  metalness: {
                     value: 0
                  },
                  envMapIntensity: {
                     value: 1
                  }
               }]),
               vertexShader: ri.meshphysical_vert,
               fragmentShader: ri.meshphysical_frag
            },
            toon: {
               uniforms: kn([ai.common, ai.aomap, ai.lightmap, ai.emissivemap, ai.bumpmap, ai.normalmap, ai.displacementmap, ai.gradientmap, ai.fog, ai.lights, {
                  emissive: {
                     value: new $e(0)
                  }
               }]),
               vertexShader: ri.meshtoon_vert,
               fragmentShader: ri.meshtoon_frag
            },
            matcap: {
               uniforms: kn([ai.common, ai.bumpmap, ai.normalmap, ai.displacementmap, ai.fog, {
                  matcap: {
                     value: null
                  }
               }]),
               vertexShader: ri.meshmatcap_vert,
               fragmentShader: ri.meshmatcap_frag
            },
            points: {
               uniforms: kn([ai.points, ai.fog]),
               vertexShader: ri.points_vert,
               fragmentShader: ri.points_frag
            },
            dashed: {
               uniforms: kn([ai.common, ai.fog, {
                  scale: {
                     value: 1
                  },
                  dashSize: {
                     value: 1
                  },
                  totalSize: {
                     value: 2
                  }
               }]),
               vertexShader: ri.linedashed_vert,
               fragmentShader: ri.linedashed_frag
            },
            depth: {
               uniforms: kn([ai.common, ai.displacementmap]),
               vertexShader: ri.depth_vert,
               fragmentShader: ri.depth_frag
            },
            normal: {
               uniforms: kn([ai.common, ai.bumpmap, ai.normalmap, ai.displacementmap, {
                  opacity: {
                     value: 1
                  }
               }]),
               vertexShader: ri.meshnormal_vert,
               fragmentShader: ri.meshnormal_frag
            },
            sprite: {
               uniforms: kn([ai.sprite, ai.fog]),
               vertexShader: ri.sprite_vert,
               fragmentShader: ri.sprite_frag
            },
            background: {
               uniforms: {
                  uvTransform: {
                     value: new ot
                  },
                  t2D: {
                     value: null
                  },
                  backgroundIntensity: {
                     value: 1
                  }
               },
               vertexShader: ri.background_vert,
               fragmentShader: ri.background_frag
            },
            backgroundCube: {
               uniforms: {
                  envMap: {
                     value: null
                  },
                  flipEnvMap: {
                     value: -1
                  },
                  backgroundBlurriness: {
                     value: 0
                  },
                  backgroundIntensity: {
                     value: 1
                  }
               },
               vertexShader: ri.backgroundCube_vert,
               fragmentShader: ri.backgroundCube_frag
            },
            cube: {
               uniforms: {
                  tCube: {
                     value: null
                  },
                  tFlip: {
                     value: -1
                  },
                  opacity: {
                     value: 1
                  }
               },
               vertexShader: ri.cube_vert,
               fragmentShader: ri.cube_frag
            },
            equirect: {
               uniforms: {
                  tEquirect: {
                     value: null
                  }
               },
               vertexShader: ri.equirect_vert,
               fragmentShader: ri.equirect_frag
            },
            distanceRGBA: {
               uniforms: kn([ai.common, ai.displacementmap, {
                  referencePosition: {
                     value: new Dt
                  },
                  nearDistance: {
                     value: 1
                  },
                  farDistance: {
                     value: 1e3
                  }
               }]),
               vertexShader: ri.distanceRGBA_vert,
               fragmentShader: ri.distanceRGBA_frag
            },
            shadow: {
               uniforms: kn([ai.lights, ai.fog, {
                  color: {
                     value: new $e(0)
                  },
                  opacity: {
                     value: 1
                  }
               }]),
               vertexShader: ri.shadow_vert,
               fragmentShader: ri.shadow_frag
            }
         };
      si.physical = {
         uniforms: kn([si.standard.uniforms, {
            clearcoat: {
               value: 0
            },
            clearcoatMap: {
               value: null
            },
            clearcoatMapTransform: {
               value: new ot
            },
            clearcoatNormalMap: {
               value: null
            },
            clearcoatNormalMapTransform: {
               value: new ot
            },
            clearcoatNormalScale: {
               value: new st(1, 1)
            },
            clearcoatRoughness: {
               value: 0
            },
            clearcoatRoughnessMap: {
               value: null
            },
            clearcoatRoughnessMapTransform: {
               value: new ot
            },
            iridescence: {
               value: 0
            },
            iridescenceMap: {
               value: null
            },
            iridescenceMapTransform: {
               value: new ot
            },
            iridescenceIOR: {
               value: 1.3
            },
            iridescenceThicknessMinimum: {
               value: 100
            },
            iridescenceThicknessMaximum: {
               value: 400
            },
            iridescenceThicknessMap: {
               value: null
            },
            iridescenceThicknessMapTransform: {
               value: new ot
            },
            sheen: {
               value: 0
            },
            sheenColor: {
               value: new $e(0)
            },
            sheenColorMap: {
               value: null
            },
            sheenColorMapTransform: {
               value: new ot
            },
            sheenRoughness: {
               value: 1
            },
            sheenRoughnessMap: {
               value: null
            },
            sheenRoughnessMapTransform: {
               value: new ot
            },
            transmission: {
               value: 0
            },
            transmissionMap: {
               value: null
            },
            transmissionMapTransform: {
               value: new ot
            },
            transmissionSamplerSize: {
               value: new st
            },
            transmissionSamplerMap: {
               value: null
            },
            thickness: {
               value: 0
            },
            thicknessMap: {
               value: null
            },
            thicknessMapTransform: {
               value: new ot
            },
            attenuationDistance: {
               value: 0
            },
            attenuationColor: {
               value: new $e(0)
            },
            specularColor: {
               value: new $e(1, 1, 1)
            },
            specularColorMap: {
               value: null
            },
            specularColorMapTransform: {
               value: new ot
            },
            specularIntensity: {
               value: 1
            },
            specularIntensityMap: {
               value: null
            },
            specularIntensityMapTransform: {
               value: new ot
            },
            anisotropyVector: {
               value: new st
            },
            anisotropyMap: {
               value: null
            },
            anisotropyMapTransform: {
               value: new ot
            }
         }]),
         vertexShader: ri.meshphysical_vert,
         fragmentShader: ri.meshphysical_frag
      };
      const oi = {
         r: 0,
         b: 0,
         g: 0
      };

      function li(t, e, n, i, r, a, s) {
         const l = new $e(0);
         let c, h, u = !0 === a ? 0 : 1,
            d = null,
            p = 0,
            f = null;

         function m(e, n) {
            e.getRGB(oi, zn(t)), i.buffers.color.setClear(oi.r, oi.g, oi.b, n, s)
         }
         return {
            getClearColor: function () {
               return l
            },
            setClearColor: function (t, e = 1) {
               l.set(t), u = e, m(l, u)
            },
            getClearAlpha: function () {
               return u
            },
            setClearAlpha: function (t) {
               u = t, m(l, u)
            },
            render: function (a, g) {
               let _ = !1,
                  v = !0 === g.isScene ? g.background : null;
               if (v && v.isTexture) {
                  v = (g.backgroundBlurriness > 0 ? n : e).get(v)
               }
               switch (null === v ? m(l, u) : v && v.isColor && (m(v, 1), _ = !0), t.xr.getEnvironmentBlendMode()) {
                  case "opaque":
                     _ = !0;
                     break;
                  case "additive":
                     i.buffers.color.setClear(0, 0, 0, 1, s), _ = !0;
                     break;
                  case "alpha-blend":
                     i.buffers.color.setClear(0, 0, 0, 0, s), _ = !0
               }(t.autoClear || _) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), v && (v.isCubeTexture || v.mapping === o) ? (void 0 === h && (h = new In(new On(1, 1, 1), new Hn({
                  name: "BackgroundCubeMaterial",
                  uniforms: Fn(si.backgroundCube.uniforms),
                  vertexShader: si.backgroundCube.vertexShader,
                  fragmentShader: si.backgroundCube.fragmentShader,
                  side: 1,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
               })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (t, e, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld)
               }, Object.defineProperty(h.material, "envMap", {
                  get: function () {
                     return this.uniforms.envMap.value
                  }
               }), r.update(h)), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && !1 === v.isRenderTargetTexture ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = g.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = g.backgroundIntensity, h.material.toneMapped = v.colorSpace !== z, d === v && p === v.version && f === t.toneMapping || (h.material.needsUpdate = !0, d = v, p = v.version, f = t.toneMapping), h.layers.enableAll(), a.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (void 0 === c && (c = new In(new ii(2, 2), new Hn({
                  name: "BackgroundMaterial",
                  uniforms: Fn(si.background.uniforms),
                  vertexShader: si.background.vertexShader,
                  fragmentShader: si.background.fragmentShader,
                  side: 0,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
               })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", {
                  get: function () {
                     return this.uniforms.t2D.value
                  }
               }), r.update(c)), c.material.uniforms.t2D.value = v, c.material.uniforms.backgroundIntensity.value = g.backgroundIntensity, c.material.toneMapped = v.colorSpace !== z, !0 === v.matrixAutoUpdate && v.updateMatrix(), c.material.uniforms.uvTransform.value.copy(v.matrix), d === v && p === v.version && f === t.toneMapping || (c.material.needsUpdate = !0, d = v, p = v.version, f = t.toneMapping), c.layers.enableAll(), a.unshift(c, c.geometry, c.material, 0, 0, null))
            }
         }
      }

      function ci(t, e, n, i) {
         const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            a = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
            s = i.isWebGL2 || null !== a,
            o = {},
            l = p(null);
         let c = l,
            h = !1;

         function u(e) {
            return i.isWebGL2 ? t.bindVertexArray(e) : a.bindVertexArrayOES(e)
         }

         function d(e) {
            return i.isWebGL2 ? t.deleteVertexArray(e) : a.deleteVertexArrayOES(e)
         }

         function p(t) {
            const e = [],
               n = [],
               i = [];
            for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
            return {
               geometry: null,
               program: null,
               wireframe: !1,
               newAttributes: e,
               enabledAttributes: n,
               attributeDivisors: i,
               object: t,
               attributes: {},
               index: null
            }
         }

         function f() {
            const t = c.newAttributes;
            for (let e = 0, n = t.length; e < n; e++) t[e] = 0
         }

         function m(t) {
            g(t, 0)
         }

         function g(n, r) {
            const a = c.newAttributes,
               s = c.enabledAttributes,
               o = c.attributeDivisors;
            if (a[n] = 1, 0 === s[n] && (t.enableVertexAttribArray(n), s[n] = 1), o[n] !== r) {
               (i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), o[n] = r
            }
         }

         function _() {
            const e = c.newAttributes,
               n = c.enabledAttributes;
            for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
         }

         function x(e, n, i, r, a, s, o) {
            !0 === o ? t.vertexAttribIPointer(e, n, i, a, s) : t.vertexAttribPointer(e, n, i, r, a, s)
         }

         function y() {
            M(), h = !0, c !== l && (c = l, u(c.object))
         }

         function M() {
            l.geometry = null, l.program = null, l.wireframe = !1
         }
         return {
            setup: function (r, l, d, y, M) {
               let S = !1;
               if (s) {
                  const e = function (e, n, r) {
                     const s = !0 === r.wireframe;
                     let l = o[e.id];
                     void 0 === l && (l = {}, o[e.id] = l);
                     let c = l[n.id];
                     void 0 === c && (c = {}, l[n.id] = c);
                     let h = c[s];
                     void 0 === h && (h = p(i.isWebGL2 ? t.createVertexArray() : a.createVertexArrayOES()), c[s] = h);
                     return h
                  }(y, d, l);
                  c !== e && (c = e, u(c.object)), S = function (t, e, n, i) {
                     const r = c.attributes,
                        a = e.attributes;
                     let s = 0;
                     const o = n.getAttributes();
                     for (const e in o) {
                        if (o[e].location >= 0) {
                           const n = r[e];
                           let i = a[e];
                           if (void 0 === i && ("instanceMatrix" === e && t.instanceMatrix && (i = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (i = t.instanceColor)), void 0 === n) return !0;
                           if (n.attribute !== i) return !0;
                           if (i && n.data !== i.data) return !0;
                           s++
                        }
                     }
                     return c.attributesNum !== s || c.index !== i
                  }(r, y, d, M), S && function (t, e, n, i) {
                     const r = {},
                        a = e.attributes;
                     let s = 0;
                     const o = n.getAttributes();
                     for (const e in o) {
                        if (o[e].location >= 0) {
                           let n = a[e];
                           void 0 === n && ("instanceMatrix" === e && t.instanceMatrix && (n = t.instanceMatrix), "instanceColor" === e && t.instanceColor && (n = t.instanceColor));
                           const i = {};
                           i.attribute = n, n && n.data && (i.data = n.data), r[e] = i, s++
                        }
                     }
                     c.attributes = r, c.attributesNum = s, c.index = i
                  }(r, y, d, M)
               } else {
                  const t = !0 === l.wireframe;
                  c.geometry === y.id && c.program === d.id && c.wireframe === t || (c.geometry = y.id, c.program = d.id, c.wireframe = t, S = !0)
               }
               null !== M && n.update(M, t.ELEMENT_ARRAY_BUFFER), (S || h) && (h = !1, function (r, a, s, o) {
                  if (!1 === i.isWebGL2 && (r.isInstancedMesh || o.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                  f();
                  const l = o.attributes,
                     c = s.getAttributes(),
                     h = a.defaultAttributeValues;
                  for (const e in c) {
                     const a = c[e];
                     if (a.location >= 0) {
                        let s = l[e];
                        if (void 0 === s && ("instanceMatrix" === e && r.instanceMatrix && (s = r.instanceMatrix), "instanceColor" === e && r.instanceColor && (s = r.instanceColor)), void 0 !== s) {
                           const e = s.normalized,
                              l = s.itemSize,
                              c = n.get(s);
                           if (void 0 === c) continue;
                           const h = c.buffer,
                              u = c.type,
                              d = c.bytesPerElement,
                              p = !0 === i.isWebGL2 && (u === t.INT || u === t.UNSIGNED_INT || s.gpuType === v);
                           if (s.isInterleavedBufferAttribute) {
                              const n = s.data,
                                 i = n.stride,
                                 c = s.offset;
                              if (n.isInstancedInterleavedBuffer) {
                                 for (let t = 0; t < a.locationSize; t++) g(a.location + t, n.meshPerAttribute);
                                 !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = n.meshPerAttribute * n.count)
                              } else
                                 for (let t = 0; t < a.locationSize; t++) m(a.location + t);
                              t.bindBuffer(t.ARRAY_BUFFER, h);
                              for (let t = 0; t < a.locationSize; t++) x(a.location + t, l / a.locationSize, u, e, i * d, (c + l / a.locationSize * t) * d, p)
                           } else {
                              if (s.isInstancedBufferAttribute) {
                                 for (let t = 0; t < a.locationSize; t++) g(a.location + t, s.meshPerAttribute);
                                 !0 !== r.isInstancedMesh && void 0 === o._maxInstanceCount && (o._maxInstanceCount = s.meshPerAttribute * s.count)
                              } else
                                 for (let t = 0; t < a.locationSize; t++) m(a.location + t);
                              t.bindBuffer(t.ARRAY_BUFFER, h);
                              for (let t = 0; t < a.locationSize; t++) x(a.location + t, l / a.locationSize, u, e, l * d, l / a.locationSize * t * d, p)
                           }
                        } else if (void 0 !== h) {
                           const n = h[e];
                           if (void 0 !== n) switch (n.length) {
                              case 2:
                                 t.vertexAttrib2fv(a.location, n);
                                 break;
                              case 3:
                                 t.vertexAttrib3fv(a.location, n);
                                 break;
                              case 4:
                                 t.vertexAttrib4fv(a.location, n);
                                 break;
                              default:
                                 t.vertexAttrib1fv(a.location, n)
                           }
                        }
                     }
                  }
                  _()
               }(r, l, d, y), null !== M && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(M).buffer))
            },
            reset: y,
            resetDefaultState: M,
            dispose: function () {
               y();
               for (const t in o) {
                  const e = o[t];
                  for (const t in e) {
                     const n = e[t];
                     for (const t in n) d(n[t].object), delete n[t];
                     delete e[t]
                  }
                  delete o[t]
               }
            },
            releaseStatesOfGeometry: function (t) {
               if (void 0 === o[t.id]) return;
               const e = o[t.id];
               for (const t in e) {
                  const n = e[t];
                  for (const t in n) d(n[t].object), delete n[t];
                  delete e[t]
               }
               delete o[t.id]
            },
            releaseStatesOfProgram: function (t) {
               for (const e in o) {
                  const n = o[e];
                  if (void 0 === n[t.id]) continue;
                  const i = n[t.id];
                  for (const t in i) d(i[t].object), delete i[t];
                  delete n[t.id]
               }
            },
            initAttributes: f,
            enableAttribute: m,
            disableUnusedAttributes: _
         }
      }

      function hi(t, e, n, i) {
         const r = i.isWebGL2;
         let a;
         this.setMode = function (t) {
            a = t
         }, this.render = function (e, i) {
            t.drawArrays(a, e, i), n.update(i, a, 1)
         }, this.renderInstances = function (i, s, o) {
            if (0 === o) return;
            let l, c;
            if (r) l = t, c = "drawArraysInstanced";
            else if (l = e.get("ANGLE_instanced_arrays"), c = "drawArraysInstancedANGLE", null === l) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            l[c](a, i, s, o), n.update(s, a, o)
         }
      }

      function ui(t, e, n) {
         let i;

         function r(e) {
            if ("highp" === e) {
               if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) return "highp";
               e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
         }
         const a = "undefined" != typeof WebGL2RenderingContext && "WebGL2RenderingContext" === t.constructor.name;
         let s = void 0 !== n.precision ? n.precision : "highp";
         const o = r(s);
         o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);
         const l = a || e.has("WEBGL_draw_buffers"),
            c = !0 === n.logarithmicDepthBuffer,
            h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
            u = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            d = t.getParameter(t.MAX_TEXTURE_SIZE),
            p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
            f = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            m = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
            g = t.getParameter(t.MAX_VARYING_VECTORS),
            _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
            v = u > 0,
            x = a || e.has("OES_texture_float");
         return {
            isWebGL2: a,
            drawBuffers: l,
            getMaxAnisotropy: function () {
               if (void 0 !== i) return i;
               if (!0 === e.has("EXT_texture_filter_anisotropic")) {
                  const n = e.get("EXT_texture_filter_anisotropic");
                  i = t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
               } else i = 0;
               return i
            },
            getMaxPrecision: r,
            precision: s,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: u,
            maxTextureSize: d,
            maxCubemapSize: p,
            maxAttributes: f,
            maxVertexUniforms: m,
            maxVaryings: g,
            maxFragmentUniforms: _,
            vertexTextures: v,
            floatFragmentTextures: x,
            floatVertexTextures: v && x,
            maxSamples: a ? t.getParameter(t.MAX_SAMPLES) : 0
         }
      }

      function di(t) {
         const e = this;
         let n = null,
            i = 0,
            r = !1,
            a = !1;
         const s = new Jn,
            o = new ot,
            l = {
               value: null,
               needsUpdate: !1
            };

         function c(t, n, i, r) {
            const a = null !== t ? t.length : 0;
            let c = null;
            if (0 !== a) {
               if (c = l.value, !0 !== r || null === c) {
                  const e = i + 4 * a,
                     r = n.matrixWorldInverse;
                  o.getNormalMatrix(r), (null === c || c.length < e) && (c = new Float32Array(e));
                  for (let e = 0, n = i; e !== a; ++e, n += 4) s.copy(t[e]).applyMatrix4(r, o), s.normal.toArray(c, n), c[n + 3] = s.constant
               }
               l.value = c, l.needsUpdate = !0
            }
            return e.numPlanes = a, e.numIntersection = 0, c
         }
         this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (t, e) {
            const n = 0 !== t.length || e || 0 !== i || r;
            return r = e, i = t.length, n
         }, this.beginShadows = function () {
            a = !0, c(null)
         }, this.endShadows = function () {
            a = !1
         }, this.setGlobalState = function (t, e) {
            n = c(t, e, 0)
         }, this.setState = function (s, o, h) {
            const u = s.clippingPlanes,
               d = s.clipIntersection,
               p = s.clipShadows,
               f = t.get(s);
            if (!r || null === u || 0 === u.length || a && !p) a ? c(null) : function () {
               l.value !== n && (l.value = n, l.needsUpdate = i > 0);
               e.numPlanes = i, e.numIntersection = 0
            }();
            else {
               const t = a ? 0 : i,
                  e = 4 * t;
               let r = f.clippingState || null;
               l.value = r, r = c(u, o, e, h);
               for (let t = 0; t !== e; ++t) r[t] = n[t];
               f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
            }
         }
      }

      function pi(t) {
         let e = new WeakMap;

         function n(t, e) {
            return e === a ? t.mapping = i : e === s && (t.mapping = r), t
         }

         function o(t) {
            const n = t.target;
            n.removeEventListener("dispose", o);
            const i = e.get(n);
            void 0 !== i && (e.delete(n), i.dispose())
         }
         return {
            get: function (i) {
               if (i && i.isTexture && !1 === i.isRenderTargetTexture) {
                  const r = i.mapping;
                  if (r === a || r === s) {
                     if (e.has(i)) {
                        return n(e.get(i).texture, i.mapping)
                     } {
                        const r = i.image;
                        if (r && r.height > 0) {
                           const a = new qn(r.height / 2);
                           return a.fromEquirectangularTexture(t, i), e.set(i, a), i.addEventListener("dispose", o), n(a.texture, i.mapping)
                        }
                        return null
                     }
                  }
               }
               return i
            },
            dispose: function () {
               e = new WeakMap
            }
         }
      }
      class fi extends Vn {
         constructor(t = -1, e = 1, n = 1, i = -1, r = .1, a = 2e3) {
            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix()
         }
         copy(t, e) {
            return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
         }
         setViewOffset(t, e, n, i, r, a) {
            null === this.view && (this.view = {
               enabled: !0,
               fullWidth: 1,
               fullHeight: 1,
               offsetX: 0,
               offsetY: 0,
               width: 1,
               height: 1
            }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
         }
         clearViewOffset() {
            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
         }
         updateProjectionMatrix() {
            const t = (this.right - this.left) / (2 * this.zoom),
               e = (this.top - this.bottom) / (2 * this.zoom),
               n = (this.right + this.left) / 2,
               i = (this.top + this.bottom) / 2;
            let r = n - t,
               a = n + t,
               s = i + e,
               o = i - e;
            if (null !== this.view && this.view.enabled) {
               const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
                  e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
               r += t * this.view.offsetX, a = r + t * this.view.width, s -= e * this.view.offsetY, o = s - e * this.view.height
            }
            this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
         }
         toJSON(t) {
            const e = super.toJSON(t);
            return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
         }
      }
      const mi = [.125, .215, .35, .446, .526, .582],
         gi = 20,
         _i = new fi,
         vi = new $e;
      let xi = null;
      const yi = (1 + Math.sqrt(5)) / 2,
         Mi = 1 / yi,
         Si = [new Dt(1, 1, 1), new Dt(-1, 1, 1), new Dt(1, 1, -1), new Dt(-1, 1, -1), new Dt(0, yi, Mi), new Dt(0, yi, -Mi), new Dt(Mi, 0, yi), new Dt(-Mi, 0, yi), new Dt(yi, Mi, 0), new Dt(-yi, Mi, 0)];
      class Ei {
         constructor(t) {
            this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
         }
         fromScene(t, e = 0, n = .1, i = 100) {
            xi = this._renderer.getRenderTarget(), this._setSize(256);
            const r = this._allocateTargets();
            return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r
         }
         fromEquirectangular(t, e = null) {
            return this._fromTexture(t, e)
         }
         fromCubemap(t, e = null) {
            return this._fromTexture(t, e)
         }
         compileCubemapShader() {
            null === this._cubemapMaterial && (this._cubemapMaterial = Ai(), this._compileMaterial(this._cubemapMaterial))
         }
         compileEquirectangularShader() {
            null === this._equirectMaterial && (this._equirectMaterial = Ti(), this._compileMaterial(this._equirectMaterial))
         }
         dispose() {
            this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
         }
         _setSize(t) {
            this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax)
         }
         _dispose() {
            null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
            for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose()
         }
         _cleanup(t) {
            this._renderer.setRenderTarget(xi), t.scissorTest = !1, wi(t, 0, 0, t.width, t.height)
         }
         _fromTexture(t, e) {
            t.mapping === i || t.mapping === r ? this._setSize(0 === t.image.length ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), xi = this._renderer.getRenderTarget();
            const n = e || this._allocateTargets();
            return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n
         }
         _allocateTargets() {
            const t = 3 * Math.max(this._cubeSize, 112),
               e = 4 * this._cubeSize,
               n = {
                  magFilter: f,
                  minFilter: f,
                  generateMipmaps: !1,
                  type: M,
                  format: E,
                  colorSpace: B,
                  depthBuffer: !1
               },
               i = bi(t, e, n);
            if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
               null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = bi(t, e, n);
               const {
                  _lodMax: i
               } = this;
               ({
                  sizeLods: this._sizeLods,
                  lodPlanes: this._lodPlanes,
                  sigmas: this._sigmas
               } = function (t) {
                  const e = [],
                     n = [],
                     i = [];
                  let r = t;
                  const a = t - 4 + 1 + mi.length;
                  for (let s = 0; s < a; s++) {
                     const a = Math.pow(2, r);
                     n.push(a);
                     let o = 1 / a;
                     s > t - 4 ? o = mi[s - t + 4 - 1] : 0 === s && (o = 0), i.push(o);
                     const l = 1 / (a - 2),
                        c = -l,
                        h = 1 + l,
                        u = [c, c, h, c, h, h, c, c, h, h, c, h],
                        d = 6,
                        p = 6,
                        f = 3,
                        m = 2,
                        g = 1,
                        _ = new Float32Array(f * p * d),
                        v = new Float32Array(m * p * d),
                        x = new Float32Array(g * p * d);
                     for (let t = 0; t < d; t++) {
                        const e = t % 3 * 2 / 3 - 1,
                           n = t > 2 ? 0 : -1,
                           i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
                        _.set(i, f * p * t), v.set(u, m * p * t);
                        const r = [t, t, t, t, t, t];
                        x.set(r, g * p * t)
                     }
                     const y = new gn;
                     y.setAttribute("position", new an(_, f)), y.setAttribute("uv", new an(v, m)), y.setAttribute("faceIndex", new an(x, g)), e.push(y), r > 4 && r--
                  }
                  return {
                     lodPlanes: e,
                     sizeLods: n,
                     sigmas: i
                  }
               }(i)), this._blurMaterial = function (t, e, n) {
                  const i = new Float32Array(gi),
                     r = new Dt(0, 1, 0),
                     a = new Hn({
                        name: "SphericalGaussianBlur",
                        defines: {
                           n: gi,
                           CUBEUV_TEXEL_WIDTH: 1 / e,
                           CUBEUV_TEXEL_HEIGHT: 1 / n,
                           CUBEUV_MAX_MIP: `${t}.0`
                        },
                        uniforms: {
                           envMap: {
                              value: null
                           },
                           samples: {
                              value: 1
                           },
                           weights: {
                              value: i
                           },
                           latitudinal: {
                              value: !1
                           },
                           dTheta: {
                              value: 0
                           },
                           mipInt: {
                              value: 0
                           },
                           poleAxis: {
                              value: r
                           }
                        },
                        vertexShader: Ri(),
                        fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t",
                        blending: 0,
                        depthTest: !1,
                        depthWrite: !1
                     });
                  return a
               }(i, t, e)
            }
            return i
         }
         _compileMaterial(t) {
            const e = new In(this._lodPlanes[0], t);
            this._renderer.compile(e, _i)
         }
         _sceneToCubeUV(t, e, n, i) {
            const r = new Wn(90, 1, e, n),
               a = [1, -1, 1, 1, 1, 1],
               s = [1, 1, 1, -1, -1, -1],
               o = this._renderer,
               l = o.autoClear,
               c = o.toneMapping;
            o.getClearColor(vi), o.toneMapping = 0, o.autoClear = !1;
            const h = new en({
                  name: "PMREM.Background",
                  side: 1,
                  depthWrite: !1,
                  depthTest: !1
               }),
               u = new In(new On, h);
            let d = !1;
            const p = t.background;
            p ? p.isColor && (h.color.copy(p), t.background = null, d = !0) : (h.color.copy(vi), d = !0);
            for (let e = 0; e < 6; e++) {
               const n = e % 3;
               0 === n ? (r.up.set(0, a[e], 0), r.lookAt(s[e], 0, 0)) : 1 === n ? (r.up.set(0, 0, a[e]), r.lookAt(0, s[e], 0)) : (r.up.set(0, a[e], 0), r.lookAt(0, 0, s[e]));
               const l = this._cubeSize;
               wi(i, n * l, e > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(u, r), o.render(t, r)
            }
            u.geometry.dispose(), u.material.dispose(), o.toneMapping = c, o.autoClear = l, t.background = p
         }
         _textureToCubeUV(t, e) {
            const n = this._renderer,
               a = t.mapping === i || t.mapping === r;
            a ? (null === this._cubemapMaterial && (this._cubemapMaterial = Ai()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === t.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ti());
            const s = a ? this._cubemapMaterial : this._equirectMaterial,
               o = new In(this._lodPlanes[0], s);
            s.uniforms.envMap.value = t;
            const l = this._cubeSize;
            wi(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(o, _i)
         }
         _applyPMREM(t) {
            const e = this._renderer,
               n = e.autoClear;
            e.autoClear = !1;
            for (let e = 1; e < this._lodPlanes.length; e++) {
               const n = Math.sqrt(this._sigmas[e] * this._sigmas[e] - this._sigmas[e - 1] * this._sigmas[e - 1]),
                  i = Si[(e - 1) % Si.length];
               this._blur(t, e - 1, e, n, i)
            }
            e.autoClear = n
         }
         _blur(t, e, n, i, r) {
            const a = this._pingPongRenderTarget;
            this._halfBlur(t, a, e, n, i, "latitudinal", r), this._halfBlur(a, t, n, n, i, "longitudinal", r)
         }
         _halfBlur(t, e, n, i, r, a, s) {
            const o = this._renderer,
               l = this._blurMaterial;
            "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
            const c = new In(this._lodPlanes[i], l),
               h = l.uniforms,
               u = this._sizeLods[n] - 1,
               d = isFinite(r) ? Math.PI / (2 * u) : 2 * Math.PI / 39,
               p = r / d,
               f = isFinite(r) ? 1 + Math.floor(3 * p) : gi;
            f > gi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);
            const m = [];
            let g = 0;
            for (let t = 0; t < gi; ++t) {
               const e = t / p,
                  n = Math.exp(-e * e / 2);
               m.push(n), 0 === t ? g += n : t < f && (g += 2 * n)
            }
            for (let t = 0; t < m.length; t++) m[t] = m[t] / g;
            h.envMap.value = t.texture, h.samples.value = f, h.weights.value = m, h.latitudinal.value = "latitudinal" === a, s && (h.poleAxis.value = s);
            const {
               _lodMax: _
            } = this;
            h.dTheta.value = d, h.mipInt.value = _ - n;
            const v = this._sizeLods[i];
            wi(e, 3 * v * (i > _ - 4 ? i - _ + 4 : 0), 4 * (this._cubeSize - v), 3 * v, 2 * v), o.setRenderTarget(e), o.render(c, _i)
         }
      }

      function bi(t, e, n) {
         const i = new Ct(t, e, n);
         return i.texture.mapping = o, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i
      }

      function wi(t, e, n, i, r) {
         t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r)
      }

      function Ti() {
         return new Hn({
            name: "EquirectangularToCubeUV",
            uniforms: {
               envMap: {
                  value: null
               }
            },
            vertexShader: Ri(),
            fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tgl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
         })
      }

      function Ai() {
         return new Hn({
            name: "CubemapToCubeUV",
            uniforms: {
               envMap: {
                  value: null
               },
               flipEnvMap: {
                  value: -1
               }
            },
            vertexShader: Ri(),
            fragmentShader: "\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tuniform float flipEnvMap;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n\t\t\t}\n\t\t",
            blending: 0,
            depthTest: !1,
            depthWrite: !1
         })
      }

      function Ri() {
         return "\n\n\t\tprecision mediump float;\n\t\tprecision mediump int;\n\n\t\tattribute float faceIndex;\n\n\t\tvarying vec3 vOutputDirection;\n\n\t\t// RH coordinate system; PMREM face-indexing convention\n\t\tvec3 getDirection( vec2 uv, float face ) {\n\n\t\t\tuv = 2.0 * uv - 1.0;\n\n\t\t\tvec3 direction = vec3( uv, 1.0 );\n\n\t\t\tif ( face == 0.0 ) {\n\n\t\t\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\n\t\t\t} else if ( face == 1.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n\t\t\t} else if ( face == 2.0 ) {\n\n\t\t\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\n\t\t\t} else if ( face == 3.0 ) {\n\n\t\t\t\tdirection = direction.zyx;\n\t\t\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\n\t\t\t} else if ( face == 4.0 ) {\n\n\t\t\t\tdirection = direction.xzy;\n\t\t\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\n\t\t\t} else if ( face == 5.0 ) {\n\n\t\t\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\n\t\t\t}\n\n\t\t\treturn direction;\n\n\t\t}\n\n\t\tvoid main() {\n\n\t\t\tvOutputDirection = getDirection( uv, faceIndex );\n\t\t\tgl_Position = vec4( position, 1.0 );\n\n\t\t}\n\t"
      }

      function Ci(t) {
         let e = new WeakMap,
            n = null;

         function o(t) {
            const n = t.target;
            n.removeEventListener("dispose", o);
            const i = e.get(n);
            void 0 !== i && (e.delete(n), i.dispose())
         }
         return {
            get: function (l) {
               if (l && l.isTexture) {
                  const c = l.mapping,
                     h = c === a || c === s,
                     u = c === i || c === r;
                  if (h || u) {
                     if (l.isRenderTargetTexture && !0 === l.needsPMREMUpdate) {
                        l.needsPMREMUpdate = !1;
                        let i = e.get(l);
                        return null === n && (n = new Ei(t)), i = h ? n.fromEquirectangular(l, i) : n.fromCubemap(l, i), e.set(l, i), i.texture
                     }
                     if (e.has(l)) return e.get(l).texture; {
                        const i = l.image;
                        if (h && i && i.height > 0 || u && i && function (t) {
                              let e = 0;
                              const n = 6;
                              for (let i = 0; i < n; i++) void 0 !== t[i] && e++;
                              return e === n
                           }(i)) {
                           null === n && (n = new Ei(t));
                           const i = h ? n.fromEquirectangular(l) : n.fromCubemap(l);
                           return e.set(l, i), l.addEventListener("dispose", o), i.texture
                        }
                        return null
                     }
                  }
               }
               return l
            },
            dispose: function () {
               e = new WeakMap, null !== n && (n.dispose(), n = null)
            }
         }
      }

      function Pi(t) {
         const e = {};

         function n(n) {
            if (void 0 !== e[n]) return e[n];
            let i;
            switch (n) {
               case "WEBGL_depth_texture":
                  i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                  break;
               case "EXT_texture_filter_anisotropic":
                  i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                  break;
               case "WEBGL_compressed_texture_s3tc":
                  i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                  break;
               case "WEBGL_compressed_texture_pvrtc":
                  i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                  break;
               default:
                  i = t.getExtension(n)
            }
            return e[n] = i, i
         }
         return {
            has: function (t) {
               return null !== n(t)
            },
            init: function (t) {
               t.isWebGL2 ? n("EXT_color_buffer_float") : (n("WEBGL_depth_texture"), n("OES_texture_float"), n("OES_texture_half_float"), n("OES_texture_half_float_linear"), n("OES_standard_derivatives"), n("OES_element_index_uint"), n("OES_vertex_array_object"), n("ANGLE_instanced_arrays")), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture")
            },
            get: function (t) {
               const e = n(t);
               return null === e && console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e
            }
         }
      }

      function Li(t, e, n, i) {
         const r = {},
            a = new WeakMap;

         function s(t) {
            const o = t.target;
            null !== o.index && e.remove(o.index);
            for (const t in o.attributes) e.remove(o.attributes[t]);
            for (const t in o.morphAttributes) {
               const n = o.morphAttributes[t];
               for (let t = 0, i = n.length; t < i; t++) e.remove(n[t])
            }
            o.removeEventListener("dispose", s), delete r[o.id];
            const l = a.get(o);
            l && (e.remove(l), a.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
         }

         function o(t) {
            const n = [],
               i = t.index,
               r = t.attributes.position;
            let s = 0;
            if (null !== i) {
               const t = i.array;
               s = i.version;
               for (let e = 0, i = t.length; e < i; e += 3) {
                  const i = t[e + 0],
                     r = t[e + 1],
                     a = t[e + 2];
                  n.push(i, r, r, a, a, i)
               }
            } else {
               if (void 0 === r) return; {
                  const t = r.array;
                  s = r.version;
                  for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                     const t = e + 0,
                        i = e + 1,
                        r = e + 2;
                     n.push(t, i, i, r, r, t)
                  }
               }
            }
            const o = new(ct(n) ? on : sn)(n, 1);
            o.version = s;
            const l = a.get(t);
            l && e.remove(l), a.set(t, o)
         }
         return {
            get: function (t, e) {
               return !0 === r[e.id] || (e.addEventListener("dispose", s), r[e.id] = !0, n.memory.geometries++), e
            },
            update: function (n) {
               const i = n.attributes;
               for (const n in i) e.update(i[n], t.ARRAY_BUFFER);
               const r = n.morphAttributes;
               for (const n in r) {
                  const i = r[n];
                  for (let n = 0, r = i.length; n < r; n++) e.update(i[n], t.ARRAY_BUFFER)
               }
            },
            getWireframeAttribute: function (t) {
               const e = a.get(t);
               if (e) {
                  const n = t.index;
                  null !== n && e.version < n.version && o(t)
               } else o(t);
               return a.get(t)
            }
         }
      }

      function Ui(t, e, n, i) {
         const r = i.isWebGL2;
         let a, s, o;
         this.setMode = function (t) {
            a = t
         }, this.setIndex = function (t) {
            s = t.type, o = t.bytesPerElement
         }, this.render = function (e, i) {
            t.drawElements(a, i, s, e * o), n.update(i, a, 1)
         }, this.renderInstances = function (i, l, c) {
            if (0 === c) return;
            let h, u;
            if (r) h = t, u = "drawElementsInstanced";
            else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            h[u](a, l, s, i * o, c), n.update(l, a, c)
         }
      }

      function Di(t) {
         const e = {
            frame: 0,
            calls: 0,
            triangles: 0,
            points: 0,
            lines: 0
         };
         return {
            memory: {
               geometries: 0,
               textures: 0
            },
            render: e,
            programs: null,
            autoReset: !0,
            reset: function () {
               e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
            },
            update: function (n, i, r) {
               switch (e.calls++, i) {
                  case t.TRIANGLES:
                     e.triangles += r * (n / 3);
                     break;
                  case t.LINES:
                     e.lines += r * (n / 2);
                     break;
                  case t.LINE_STRIP:
                     e.lines += r * (n - 1);
                     break;
                  case t.LINE_LOOP:
                     e.lines += r * n;
                     break;
                  case t.POINTS:
                     e.points += r * n;
                     break;
                  default:
                     console.error("THREE.WebGLInfo: Unknown draw mode:", i)
               }
            }
         }
      }

      function Ii(t, e) {
         return t[0] - e[0]
      }

      function Ni(t, e) {
         return Math.abs(e[1]) - Math.abs(t[1])
      }

      function Oi(t, e, n) {
         const i = {},
            r = new Float32Array(8),
            a = new WeakMap,
            s = new At,
            o = [];
         for (let t = 0; t < 8; t++) o[t] = [t, 0];
         return {
            update: function (l, c, h) {
               const u = l.morphTargetInfluences;
               if (!0 === e.isWebGL2) {
                  const d = c.morphAttributes.position || c.morphAttributes.normal || c.morphAttributes.color,
                     p = void 0 !== d ? d.length : 0;
                  let f = a.get(c);
                  if (void 0 === f || f.count !== p) {
                     void 0 !== f && f.texture.dispose();
                     const _ = void 0 !== c.morphAttributes.position,
                        v = void 0 !== c.morphAttributes.normal,
                        x = void 0 !== c.morphAttributes.color,
                        M = c.morphAttributes.position || [],
                        S = c.morphAttributes.normal || [],
                        E = c.morphAttributes.color || [];
                     let b = 0;
                     !0 === _ && (b = 1), !0 === v && (b = 2), !0 === x && (b = 3);
                     let w = c.attributes.position.count * b,
                        T = 1;
                     w > e.maxTextureSize && (T = Math.ceil(w / e.maxTextureSize), w = e.maxTextureSize);
                     const A = new Float32Array(w * T * 4 * p),
                        R = new Pt(A, w, T, p);
                     R.type = y, R.needsUpdate = !0;
                     const C = 4 * b;
                     for (let L = 0; L < p; L++) {
                        const U = M[L],
                           D = S[L],
                           I = E[L],
                           N = w * T * 4 * L;
                        for (let O = 0; O < U.count; O++) {
                           const F = O * C;
                           !0 === _ && (s.fromBufferAttribute(U, O), A[N + F + 0] = s.x, A[N + F + 1] = s.y, A[N + F + 2] = s.z, A[N + F + 3] = 0), !0 === v && (s.fromBufferAttribute(D, O), A[N + F + 4] = s.x, A[N + F + 5] = s.y, A[N + F + 6] = s.z, A[N + F + 7] = 0), !0 === x && (s.fromBufferAttribute(I, O), A[N + F + 8] = s.x, A[N + F + 9] = s.y, A[N + F + 10] = s.z, A[N + F + 11] = 4 === I.itemSize ? s.w : 1)
                        }
                     }

                     function P() {
                        R.dispose(), a.delete(c), c.removeEventListener("dispose", P)
                     }
                     f = {
                        count: p,
                        texture: R,
                        size: new st(w, T)
                     }, a.set(c, f), c.addEventListener("dispose", P)
                  }
                  let m = 0;
                  for (let k = 0; k < u.length; k++) m += u[k];
                  const g = c.morphTargetsRelative ? 1 : 1 - m;
                  h.getUniforms().setValue(t, "morphTargetBaseInfluence", g), h.getUniforms().setValue(t, "morphTargetInfluences", u), h.getUniforms().setValue(t, "morphTargetsTexture", f.texture, n), h.getUniforms().setValue(t, "morphTargetsTextureSize", f.size)
               } else {
                  const z = void 0 === u ? 0 : u.length;
                  let B = i[c.id];
                  if (void 0 === B || B.length !== z) {
                     B = [];
                     for (let X = 0; X < z; X++) B[X] = [X, 0];
                     i[c.id] = B
                  }
                  for (let j = 0; j < z; j++) {
                     const q = B[j];
                     q[0] = j, q[1] = u[j]
                  }
                  B.sort(Ni);
                  for (let Y = 0; Y < 8; Y++) Y < z && B[Y][1] ? (o[Y][0] = B[Y][0], o[Y][1] = B[Y][1]) : (o[Y][0] = Number.MAX_SAFE_INTEGER, o[Y][1] = 0);
                  o.sort(Ii);
                  const H = c.morphAttributes.position,
                     V = c.morphAttributes.normal;
                  let W = 0;
                  for (let Z = 0; Z < 8; Z++) {
                     const K = o[Z],
                        J = K[0],
                        Q = K[1];
                     J !== Number.MAX_SAFE_INTEGER && Q ? (H && c.getAttribute("morphTarget" + Z) !== H[J] && c.setAttribute("morphTarget" + Z, H[J]), V && c.getAttribute("morphNormal" + Z) !== V[J] && c.setAttribute("morphNormal" + Z, V[J]), r[Z] = Q, W += Q) : (H && !0 === c.hasAttribute("morphTarget" + Z) && c.deleteAttribute("morphTarget" + Z), V && !0 === c.hasAttribute("morphNormal" + Z) && c.deleteAttribute("morphNormal" + Z), r[Z] = 0)
                  }
                  const G = c.morphTargetsRelative ? 1 : 1 - W;
                  h.getUniforms().setValue(t, "morphTargetBaseInfluence", G), h.getUniforms().setValue(t, "morphTargetInfluences", r)
               }
            }
         }
      }

      function Fi(t, e, n, i) {
         let r = new WeakMap;

         function a(t) {
            const e = t.target;
            e.removeEventListener("dispose", a), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
         }
         return {
            update: function (s) {
               const o = i.render.frame,
                  l = s.geometry,
                  c = e.get(s, l);
               if (r.get(c) !== o && (e.update(c), r.set(c, o)), s.isInstancedMesh && (!1 === s.hasEventListener("dispose", a) && s.addEventListener("dispose", a), r.get(s) !== o && (n.update(s.instanceMatrix, t.ARRAY_BUFFER), null !== s.instanceColor && n.update(s.instanceColor, t.ARRAY_BUFFER), r.set(s, o))), s.isSkinnedMesh) {
                  const t = s.skeleton;
                  r.get(t) !== o && (t.update(), r.set(t, o))
               }
               return c
            },
            dispose: function () {
               r = new WeakMap
            }
         }
      }
      const ki = new Tt,
         zi = new Pt,
         Bi = new Lt,
         Hi = new jn,
         Vi = [],
         Wi = [],
         Gi = new Float32Array(16),
         Xi = new Float32Array(9),
         ji = new Float32Array(4);

      function qi(t, e, n) {
         const i = t[0];
         if (i <= 0 || i > 0) return t;
         const r = e * n;
         let a = Vi[r];
         if (void 0 === a && (a = new Float32Array(r), Vi[r] = a), 0 !== e) {
            i.toArray(a, 0);
            for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(a, r)
         }
         return a
      }

      function Yi(t, e) {
         if (t.length !== e.length) return !1;
         for (let n = 0, i = t.length; n < i; n++)
            if (t[n] !== e[n]) return !1;
         return !0
      }

      function Zi(t, e) {
         for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
      }

      function Ki(t, e) {
         let n = Wi[e];
         void 0 === n && (n = new Int32Array(e), Wi[e] = n);
         for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
         return n
      }

      function Ji(t, e) {
         const n = this.cache;
         n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
      }

      function Qi(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
         else {
            if (Yi(n, e)) return;
            t.uniform2fv(this.addr, e), Zi(n, e)
         }
      }

      function $i(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
         else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
         else {
            if (Yi(n, e)) return;
            t.uniform3fv(this.addr, e), Zi(n, e)
         }
      }

      function tr(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
         else {
            if (Yi(n, e)) return;
            t.uniform4fv(this.addr, e), Zi(n, e)
         }
      }

      function er(t, e) {
         const n = this.cache,
            i = e.elements;
         if (void 0 === i) {
            if (Yi(n, e)) return;
            t.uniformMatrix2fv(this.addr, !1, e), Zi(n, e)
         } else {
            if (Yi(n, i)) return;
            ji.set(i), t.uniformMatrix2fv(this.addr, !1, ji), Zi(n, i)
         }
      }

      function nr(t, e) {
         const n = this.cache,
            i = e.elements;
         if (void 0 === i) {
            if (Yi(n, e)) return;
            t.uniformMatrix3fv(this.addr, !1, e), Zi(n, e)
         } else {
            if (Yi(n, i)) return;
            Xi.set(i), t.uniformMatrix3fv(this.addr, !1, Xi), Zi(n, i)
         }
      }

      function ir(t, e) {
         const n = this.cache,
            i = e.elements;
         if (void 0 === i) {
            if (Yi(n, e)) return;
            t.uniformMatrix4fv(this.addr, !1, e), Zi(n, e)
         } else {
            if (Yi(n, i)) return;
            Gi.set(i), t.uniformMatrix4fv(this.addr, !1, Gi), Zi(n, i)
         }
      }

      function rr(t, e) {
         const n = this.cache;
         n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
      }

      function ar(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
         else {
            if (Yi(n, e)) return;
            t.uniform2iv(this.addr, e), Zi(n, e)
         }
      }

      function sr(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
         else {
            if (Yi(n, e)) return;
            t.uniform3iv(this.addr, e), Zi(n, e)
         }
      }

      function or(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
         else {
            if (Yi(n, e)) return;
            t.uniform4iv(this.addr, e), Zi(n, e)
         }
      }

      function lr(t, e) {
         const n = this.cache;
         n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
      }

      function cr(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
         else {
            if (Yi(n, e)) return;
            t.uniform2uiv(this.addr, e), Zi(n, e)
         }
      }

      function hr(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
         else {
            if (Yi(n, e)) return;
            t.uniform3uiv(this.addr, e), Zi(n, e)
         }
      }

      function ur(t, e) {
         const n = this.cache;
         if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
         else {
            if (Yi(n, e)) return;
            t.uniform4uiv(this.addr, e), Zi(n, e)
         }
      }

      function dr(t, e, n) {
         const i = this.cache,
            r = n.allocateTextureUnit();
         i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2D(e || ki, r)
      }

      function pr(t, e, n) {
         const i = this.cache,
            r = n.allocateTextureUnit();
         i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Bi, r)
      }

      function fr(t, e, n) {
         const i = this.cache,
            r = n.allocateTextureUnit();
         i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || Hi, r)
      }

      function mr(t, e, n) {
         const i = this.cache,
            r = n.allocateTextureUnit();
         i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || zi, r)
      }

      function gr(t, e) {
         t.uniform1fv(this.addr, e)
      }

      function _r(t, e) {
         const n = qi(e, this.size, 2);
         t.uniform2fv(this.addr, n)
      }

      function vr(t, e) {
         const n = qi(e, this.size, 3);
         t.uniform3fv(this.addr, n)
      }

      function xr(t, e) {
         const n = qi(e, this.size, 4);
         t.uniform4fv(this.addr, n)
      }

      function yr(t, e) {
         const n = qi(e, this.size, 4);
         t.uniformMatrix2fv(this.addr, !1, n)
      }

      function Mr(t, e) {
         const n = qi(e, this.size, 9);
         t.uniformMatrix3fv(this.addr, !1, n)
      }

      function Sr(t, e) {
         const n = qi(e, this.size, 16);
         t.uniformMatrix4fv(this.addr, !1, n)
      }

      function Er(t, e) {
         t.uniform1iv(this.addr, e)
      }

      function br(t, e) {
         t.uniform2iv(this.addr, e)
      }

      function wr(t, e) {
         t.uniform3iv(this.addr, e)
      }

      function Tr(t, e) {
         t.uniform4iv(this.addr, e)
      }

      function Ar(t, e) {
         t.uniform1uiv(this.addr, e)
      }

      function Rr(t, e) {
         t.uniform2uiv(this.addr, e)
      }

      function Cr(t, e) {
         t.uniform3uiv(this.addr, e)
      }

      function Pr(t, e) {
         t.uniform4uiv(this.addr, e)
      }

      function Lr(t, e, n) {
         const i = this.cache,
            r = e.length,
            a = Ki(n, r);
         Yi(i, a) || (t.uniform1iv(this.addr, a), Zi(i, a));
         for (let t = 0; t !== r; ++t) n.setTexture2D(e[t] || ki, a[t])
      }

      function Ur(t, e, n) {
         const i = this.cache,
            r = e.length,
            a = Ki(n, r);
         Yi(i, a) || (t.uniform1iv(this.addr, a), Zi(i, a));
         for (let t = 0; t !== r; ++t) n.setTexture3D(e[t] || Bi, a[t])
      }

      function Dr(t, e, n) {
         const i = this.cache,
            r = e.length,
            a = Ki(n, r);
         Yi(i, a) || (t.uniform1iv(this.addr, a), Zi(i, a));
         for (let t = 0; t !== r; ++t) n.setTextureCube(e[t] || Hi, a[t])
      }

      function Ir(t, e, n) {
         const i = this.cache,
            r = e.length,
            a = Ki(n, r);
         Yi(i, a) || (t.uniform1iv(this.addr, a), Zi(i, a));
         for (let t = 0; t !== r; ++t) n.setTexture2DArray(e[t] || zi, a[t])
      }
      class Nr {
         constructor(t, e, n) {
            this.id = t, this.addr = n, this.cache = [], this.setValue = function (t) {
               switch (t) {
                  case 5126:
                     return Ji;
                  case 35664:
                     return Qi;
                  case 35665:
                     return $i;
                  case 35666:
                     return tr;
                  case 35674:
                     return er;
                  case 35675:
                     return nr;
                  case 35676:
                     return ir;
                  case 5124:
                  case 35670:
                     return rr;
                  case 35667:
                  case 35671:
                     return ar;
                  case 35668:
                  case 35672:
                     return sr;
                  case 35669:
                  case 35673:
                     return or;
                  case 5125:
                     return lr;
                  case 36294:
                     return cr;
                  case 36295:
                     return hr;
                  case 36296:
                     return ur;
                  case 35678:
                  case 36198:
                  case 36298:
                  case 36306:
                  case 35682:
                     return dr;
                  case 35679:
                  case 36299:
                  case 36307:
                     return pr;
                  case 35680:
                  case 36300:
                  case 36308:
                  case 36293:
                     return fr;
                  case 36289:
                  case 36303:
                  case 36311:
                  case 36292:
                     return mr
               }
            }(e.type)
         }
      }
      class Or {
         constructor(t, e, n) {
            this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function (t) {
               switch (t) {
                  case 5126:
                     return gr;
                  case 35664:
                     return _r;
                  case 35665:
                     return vr;
                  case 35666:
                     return xr;
                  case 35674:
                     return yr;
                  case 35675:
                     return Mr;
                  case 35676:
                     return Sr;
                  case 5124:
                  case 35670:
                     return Er;
                  case 35667:
                  case 35671:
                     return br;
                  case 35668:
                  case 35672:
                     return wr;
                  case 35669:
                  case 35673:
                     return Tr;
                  case 5125:
                     return Ar;
                  case 36294:
                     return Rr;
                  case 36295:
                     return Cr;
                  case 36296:
                     return Pr;
                  case 35678:
                  case 36198:
                  case 36298:
                  case 36306:
                  case 35682:
                     return Lr;
                  case 35679:
                  case 36299:
                  case 36307:
                     return Ur;
                  case 35680:
                  case 36300:
                  case 36308:
                  case 36293:
                     return Dr;
                  case 36289:
                  case 36303:
                  case 36311:
                  case 36292:
                     return Ir
               }
            }(e.type)
         }
      }
      class Fr {
         constructor(t) {
            this.id = t, this.seq = [], this.map = {}
         }
         setValue(t, e, n) {
            const i = this.seq;
            for (let r = 0, a = i.length; r !== a; ++r) {
               const a = i[r];
               a.setValue(t, e[a.id], n)
            }
         }
      }
      const kr = /(\w+)(\])?(\[|\.)?/g;

      function zr(t, e) {
         t.seq.push(e), t.map[e.id] = e
      }

      function Br(t, e, n) {
         const i = t.name,
            r = i.length;
         for (kr.lastIndex = 0;;) {
            const a = kr.exec(i),
               s = kr.lastIndex;
            let o = a[1];
            const l = "]" === a[2],
               c = a[3];
            if (l && (o |= 0), void 0 === c || "[" === c && s + 2 === r) {
               zr(n, void 0 === c ? new Nr(o, t, e) : new Or(o, t, e));
               break
            } {
               let t = n.map[o];
               void 0 === t && (t = new Fr(o), zr(n, t)), n = t
            }
         }
      }
      class Hr {
         constructor(t, e) {
            this.seq = [], this.map = {};
            const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
            for (let i = 0; i < n; ++i) {
               const n = t.getActiveUniform(e, i);
               Br(n, t.getUniformLocation(e, n.name), this)
            }
         }
         setValue(t, e, n, i) {
            const r = this.map[e];
            void 0 !== r && r.setValue(t, n, i)
         }
         setOptional(t, e, n) {
            const i = e[n];
            void 0 !== i && this.setValue(t, n, i)
         }
         static upload(t, e, n, i) {
            for (let r = 0, a = e.length; r !== a; ++r) {
               const a = e[r],
                  s = n[a.id];
               !1 !== s.needsUpdate && a.setValue(t, s.value, i)
            }
         }
         static seqWithValue(t, e) {
            const n = [];
            for (let i = 0, r = t.length; i !== r; ++i) {
               const r = t[i];
               r.id in e && n.push(r)
            }
            return n
         }
      }

      function Vr(t, e, n) {
         const i = t.createShader(e);
         return t.shaderSource(i, n), t.compileShader(i), i
      }
      let Wr = 0;

      function Gr(t, e, n) {
         const i = t.getShaderParameter(e, t.COMPILE_STATUS),
            r = t.getShaderInfoLog(e).trim();
         if (i && "" === r) return "";
         const a = /ERROR: 0:(\d+)/.exec(r);
         if (a) {
            const i = parseInt(a[1]);
            return n.toUpperCase() + "\n\n" + r + "\n\n" + function (t, e) {
               const n = t.split("\n"),
                  i = [],
                  r = Math.max(e - 6, 0),
                  a = Math.min(e + 6, n.length);
               for (let t = r; t < a; t++) {
                  const r = t + 1;
                  i.push(`${r===e?">":" "} ${r}: ${n[t]}`)
               }
               return i.join("\n")
            }(t.getShaderSource(e), i)
         }
         return r
      }

      function Xr(t, e) {
         const n = function (t) {
            switch (t) {
               case B:
                  return ["Linear", "( value )"];
               case z:
                  return ["sRGB", "( value )"];
               default:
                  return console.warn("THREE.WebGLProgram: Unsupported color space:", t), ["Linear", "( value )"]
            }
         }(e);
         return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
      }

      function jr(t, e) {
         let n;
         switch (e) {
            case 1:
               n = "Linear";
               break;
            case 2:
               n = "Reinhard";
               break;
            case 3:
               n = "OptimizedCineon";
               break;
            case 4:
               n = "ACESFilmic";
               break;
            case 5:
               n = "Custom";
               break;
            default:
               console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
         }
         return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
      }

      function qr(t) {
         return "" !== t
      }

      function Yr(t, e) {
         const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
         return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
      }

      function Zr(t, e) {
         return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
      }
      const Kr = /^[ \t]*#include +<([\w\d./]+)>/gm;

      function Jr(t) {
         return t.replace(Kr, $r)
      }
      const Qr = new Map([
         ["encodings_fragment", "colorspace_fragment"],
         ["encodings_pars_fragment", "colorspace_pars_fragment"],
         ["output_fragment", "opaque_fragment"]
      ]);

      function $r(t, e) {
         let n = ri[e];
         if (void 0 === n) {
            const t = Qr.get(e);
            if (void 0 === t) throw new Error("Can not resolve #include <" + e + ">");
            n = ri[t], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, t)
         }
         return Jr(n)
      }
      const ta = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

      function ea(t) {
         return t.replace(ta, na)
      }

      function na(t, e, n, i) {
         let r = "";
         for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
         return r
      }

      function ia(t) {
         let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
         return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
      }

      function ra(t, e, n, a) {
         const s = t.getContext(),
            l = n.defines;
         let c = n.vertexShader,
            h = n.fragmentShader;
         const u = function (t) {
               let e = "SHADOWMAP_TYPE_BASIC";
               return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
            }(n),
            d = function (t) {
               let e = "ENVMAP_TYPE_CUBE";
               if (t.envMap) switch (t.envMapMode) {
                  case i:
                  case r:
                     e = "ENVMAP_TYPE_CUBE";
                     break;
                  case o:
                     e = "ENVMAP_TYPE_CUBE_UV"
               }
               return e
            }(n),
            p = function (t) {
               let e = "ENVMAP_MODE_REFLECTION";
               t.envMap && t.envMapMode === r && (e = "ENVMAP_MODE_REFRACTION");
               return e
            }(n),
            f = function (t) {
               let e = "ENVMAP_BLENDING_NONE";
               if (t.envMap) switch (t.combine) {
                  case 0:
                     e = "ENVMAP_BLENDING_MULTIPLY";
                     break;
                  case 1:
                     e = "ENVMAP_BLENDING_MIX";
                     break;
                  case 2:
                     e = "ENVMAP_BLENDING_ADD"
               }
               return e
            }(n),
            m = function (t) {
               const e = t.envMapCubeUVHeight;
               if (null === e) return null;
               const n = Math.log2(e) - 2,
                  i = 1 / e;
               return {
                  texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
                  texelHeight: i,
                  maxMip: n
               }
            }(n),
            g = n.isWebGL2 ? "" : function (t) {
               return [t.extensionDerivatives || t.envMapCubeUVHeight || t.bumpMap || t.normalMapTangentSpace || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap || t.transmission) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(qr).join("\n")
            }(n),
            _ = function (t) {
               const e = [];
               for (const n in t) {
                  const i = t[n];
                  !1 !== i && e.push("#define " + n + " " + i)
               }
               return e.join("\n")
            }(l),
            v = s.createProgram();
         let x, y, M = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
         n.isRawShaderMaterial ? (x = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, _].filter(qr).join("\n"), x.length > 0 && (x += "\n"), y = [g, "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, _].filter(qr).join("\n"), y.length > 0 && (y += "\n")) : (x = [ia(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, _, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors && n.isWebGL2 ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 && n.isWebGL2 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "\tattribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "\tattribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "\tattribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "\tattribute vec4 color;", "#elif defined( USE_COLOR )", "\tattribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(qr).join("\n"), y = [g, ia(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, _, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + d : "", n.envMap ? "#define " + p : "", n.envMap ? "#define " + f : "", m ? "#define CUBEUV_TEXEL_WIDTH " + m.texelWidth : "", m ? "#define CUBEUV_TEXEL_HEIGHT " + m.texelHeight : "", m ? "#define CUBEUV_MAX_MIP " + m.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + u : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.useLegacyLights ? "#define LEGACY_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? ri.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? jr("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", ri.colorspace_pars_fragment, Xr("linearToOutputTexel", n.outputColorSpace), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(qr).join("\n")), c = Jr(c), c = Yr(c, n), c = Zr(c, n), h = Jr(h), h = Yr(h, n), h = Zr(h, n), c = ea(c), h = ea(h), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (M = "#version 300 es\n", x = ["precision mediump sampler2DArray;", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + x, y = ["#define varying in", n.glslVersion === G ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === G ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + y);
         const S = M + x + c,
            E = M + y + h,
            b = Vr(s, s.VERTEX_SHADER, S),
            w = Vr(s, s.FRAGMENT_SHADER, E);
         if (s.attachShader(v, b), s.attachShader(v, w), void 0 !== n.index0AttributeName ? s.bindAttribLocation(v, 0, n.index0AttributeName) : !0 === n.morphTargets && s.bindAttribLocation(v, 0, "position"), s.linkProgram(v), t.debug.checkShaderErrors) {
            const e = s.getProgramInfoLog(v).trim(),
               n = s.getShaderInfoLog(b).trim(),
               i = s.getShaderInfoLog(w).trim();
            let r = !0,
               a = !0;
            if (!1 === s.getProgramParameter(v, s.LINK_STATUS))
               if (r = !1, "function" == typeof t.debug.onShaderError) t.debug.onShaderError(s, v, b, w);
               else {
                  const t = Gr(s, b, "vertex"),
                     n = Gr(s, w, "fragment");
                  console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(v, s.VALIDATE_STATUS) + "\n\nProgram Info Log: " + e + "\n" + t + "\n" + n)
               }
            else "" !== e ? console.warn("THREE.WebGLProgram: Program Info Log:", e) : "" !== n && "" !== i || (a = !1);
            a && (this.diagnostics = {
               runnable: r,
               programLog: e,
               vertexShader: {
                  log: n,
                  prefix: x
               },
               fragmentShader: {
                  log: i,
                  prefix: y
               }
            })
         }
         let T, A;
         return s.deleteShader(b), s.deleteShader(w), this.getUniforms = function () {
            return void 0 === T && (T = new Hr(s, v)), T
         }, this.getAttributes = function () {
            return void 0 === A && (A = function (t, e) {
               const n = {},
                  i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
               for (let r = 0; r < i; r++) {
                  const i = t.getActiveAttrib(e, r),
                     a = i.name;
                  let s = 1;
                  i.type === t.FLOAT_MAT2 && (s = 2), i.type === t.FLOAT_MAT3 && (s = 3), i.type === t.FLOAT_MAT4 && (s = 4), n[a] = {
                     type: i.type,
                     location: t.getAttribLocation(e, a),
                     locationSize: s
                  }
               }
               return n
            }(s, v)), A
         }, this.destroy = function () {
            a.releaseStatesOfProgram(this), s.deleteProgram(v), this.program = void 0
         }, this.type = n.shaderType, this.name = n.shaderName, this.id = Wr++, this.cacheKey = e, this.usedTimes = 1, this.program = v, this.vertexShader = b, this.fragmentShader = w, this
      }
      let aa = 0;
      class sa {
         constructor() {
            this.shaderCache = new Map, this.materialCache = new Map
         }
         update(t) {
            const e = t.vertexShader,
               n = t.fragmentShader,
               i = this._getShaderStage(e),
               r = this._getShaderStage(n),
               a = this._getShaderCacheForMaterial(t);
            return !1 === a.has(i) && (a.add(i), i.usedTimes++), !1 === a.has(r) && (a.add(r), r.usedTimes++), this
         }
         remove(t) {
            const e = this.materialCache.get(t);
            for (const t of e) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
            return this.materialCache.delete(t), this
         }
         getVertexShaderID(t) {
            return this._getShaderStage(t.vertexShader).id
         }
         getFragmentShaderID(t) {
            return this._getShaderStage(t.fragmentShader).id
         }
         dispose() {
            this.shaderCache.clear(), this.materialCache.clear()
         }
         _getShaderCacheForMaterial(t) {
            const e = this.materialCache;
            let n = e.get(t);
            return void 0 === n && (n = new Set, e.set(t, n)), n
         }
         _getShaderStage(t) {
            const e = this.shaderCache;
            let n = e.get(t);
            return void 0 === n && (n = new oa(t), e.set(t, n)), n
         }
      }
      class oa {
         constructor(t) {
            this.id = aa++, this.code = t, this.usedTimes = 0
         }
      }

      function la(t, e, n, i, r, a, s) {
         const l = new ye,
            c = new sa,
            h = [],
            u = r.isWebGL2,
            d = r.logarithmicDepthBuffer,
            p = r.vertexTextures;
         let f = r.precision;
         const m = {
            MeshDepthMaterial: "depth",
            MeshDistanceMaterial: "distanceRGBA",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "toon",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            MeshMatcapMaterial: "matcap",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points",
            ShadowMaterial: "shadow",
            SpriteMaterial: "sprite"
         };

         function g(t) {
            return 0 === t ? "uv" : `uv${t}`
         }
         return {
            getParameters: function (a, l, h, _, v) {
               const x = _.fog,
                  y = v.geometry,
                  M = a.isMeshStandardMaterial ? _.environment : null,
                  S = (a.isMeshStandardMaterial ? n : e).get(a.envMap || M),
                  E = S && S.mapping === o ? S.image.height : null,
                  b = m[a.type];
               null !== a.precision && (f = r.getMaxPrecision(a.precision), f !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", f, "instead."));
               const w = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color,
                  T = void 0 !== w ? w.length : 0;
               let A, R, C, P, L = 0;
               if (void 0 !== y.morphAttributes.position && (L = 1), void 0 !== y.morphAttributes.normal && (L = 2), void 0 !== y.morphAttributes.color && (L = 3), b) {
                  const t = si[b];
                  A = t.vertexShader, R = t.fragmentShader
               } else A = a.vertexShader, R = a.fragmentShader, c.update(a), C = c.getVertexShaderID(a), P = c.getFragmentShaderID(a);
               const U = t.getRenderTarget(),
                  D = !0 === v.isInstancedMesh,
                  I = !!a.map,
                  N = !!a.matcap,
                  O = !!S,
                  F = !!a.aoMap,
                  k = !!a.lightMap,
                  z = !!a.bumpMap,
                  H = !!a.normalMap,
                  V = !!a.displacementMap,
                  W = !!a.emissiveMap,
                  G = !!a.metalnessMap,
                  X = !!a.roughnessMap,
                  j = a.anisotropy > 0,
                  q = a.clearcoat > 0,
                  Y = a.iridescence > 0,
                  Z = a.sheen > 0,
                  K = a.transmission > 0,
                  J = j && !!a.anisotropyMap,
                  Q = q && !!a.clearcoatMap,
                  $ = q && !!a.clearcoatNormalMap,
                  tt = q && !!a.clearcoatRoughnessMap,
                  et = Y && !!a.iridescenceMap,
                  nt = Y && !!a.iridescenceThicknessMap,
                  it = Z && !!a.sheenColorMap,
                  rt = Z && !!a.sheenRoughnessMap,
                  at = !!a.specularMap,
                  st = !!a.specularColorMap,
                  ot = !!a.specularIntensityMap,
                  lt = K && !!a.transmissionMap,
                  ct = K && !!a.thicknessMap,
                  ht = !!a.gradientMap,
                  ut = !!a.alphaMap,
                  dt = a.alphaTest > 0,
                  pt = !!a.alphaHash,
                  ft = !!a.extensions,
                  mt = !!y.attributes.uv1,
                  gt = !!y.attributes.uv2,
                  _t = !!y.attributes.uv3;
               let vt = 0;
               return a.toneMapped && (null !== U && !0 !== U.isXRRenderTarget || (vt = t.toneMapping)), {
                  isWebGL2: u,
                  shaderID: b,
                  shaderType: a.type,
                  shaderName: a.name,
                  vertexShader: A,
                  fragmentShader: R,
                  defines: a.defines,
                  customVertexShaderID: C,
                  customFragmentShaderID: P,
                  isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                  glslVersion: a.glslVersion,
                  precision: f,
                  instancing: D,
                  instancingColor: D && null !== v.instanceColor,
                  supportsVertexTextures: p,
                  outputColorSpace: null === U ? t.outputColorSpace : !0 === U.isXRRenderTarget ? U.texture.colorSpace : B,
                  map: I,
                  matcap: N,
                  envMap: O,
                  envMapMode: O && S.mapping,
                  envMapCubeUVHeight: E,
                  aoMap: F,
                  lightMap: k,
                  bumpMap: z,
                  normalMap: H,
                  displacementMap: p && V,
                  emissiveMap: W,
                  normalMapObjectSpace: H && 1 === a.normalMapType,
                  normalMapTangentSpace: H && 0 === a.normalMapType,
                  metalnessMap: G,
                  roughnessMap: X,
                  anisotropy: j,
                  anisotropyMap: J,
                  clearcoat: q,
                  clearcoatMap: Q,
                  clearcoatNormalMap: $,
                  clearcoatRoughnessMap: tt,
                  iridescence: Y,
                  iridescenceMap: et,
                  iridescenceThicknessMap: nt,
                  sheen: Z,
                  sheenColorMap: it,
                  sheenRoughnessMap: rt,
                  specularMap: at,
                  specularColorMap: st,
                  specularIntensityMap: ot,
                  transmission: K,
                  transmissionMap: lt,
                  thicknessMap: ct,
                  gradientMap: ht,
                  opaque: !1 === a.transparent && 1 === a.blending,
                  alphaMap: ut,
                  alphaTest: dt,
                  alphaHash: pt,
                  combine: a.combine,
                  mapUv: I && g(a.map.channel),
                  aoMapUv: F && g(a.aoMap.channel),
                  lightMapUv: k && g(a.lightMap.channel),
                  bumpMapUv: z && g(a.bumpMap.channel),
                  normalMapUv: H && g(a.normalMap.channel),
                  displacementMapUv: V && g(a.displacementMap.channel),
                  emissiveMapUv: W && g(a.emissiveMap.channel),
                  metalnessMapUv: G && g(a.metalnessMap.channel),
                  roughnessMapUv: X && g(a.roughnessMap.channel),
                  anisotropyMapUv: J && g(a.anisotropyMap.channel),
                  clearcoatMapUv: Q && g(a.clearcoatMap.channel),
                  clearcoatNormalMapUv: $ && g(a.clearcoatNormalMap.channel),
                  clearcoatRoughnessMapUv: tt && g(a.clearcoatRoughnessMap.channel),
                  iridescenceMapUv: et && g(a.iridescenceMap.channel),
                  iridescenceThicknessMapUv: nt && g(a.iridescenceThicknessMap.channel),
                  sheenColorMapUv: it && g(a.sheenColorMap.channel),
                  sheenRoughnessMapUv: rt && g(a.sheenRoughnessMap.channel),
                  specularMapUv: at && g(a.specularMap.channel),
                  specularColorMapUv: st && g(a.specularColorMap.channel),
                  specularIntensityMapUv: ot && g(a.specularIntensityMap.channel),
                  transmissionMapUv: lt && g(a.transmissionMap.channel),
                  thicknessMapUv: ct && g(a.thicknessMap.channel),
                  alphaMapUv: ut && g(a.alphaMap.channel),
                  vertexTangents: !!y.attributes.tangent && (H || j),
                  vertexColors: a.vertexColors,
                  vertexAlphas: !0 === a.vertexColors && !!y.attributes.color && 4 === y.attributes.color.itemSize,
                  vertexUv1s: mt,
                  vertexUv2s: gt,
                  vertexUv3s: _t,
                  pointsUvs: !0 === v.isPoints && !!y.attributes.uv && (I || ut),
                  fog: !!x,
                  useFog: !0 === a.fog,
                  fogExp2: x && x.isFogExp2,
                  flatShading: !0 === a.flatShading,
                  sizeAttenuation: !0 === a.sizeAttenuation,
                  logarithmicDepthBuffer: d,
                  skinning: !0 === v.isSkinnedMesh,
                  morphTargets: void 0 !== y.morphAttributes.position,
                  morphNormals: void 0 !== y.morphAttributes.normal,
                  morphColors: void 0 !== y.morphAttributes.color,
                  morphTargetsCount: T,
                  morphTextureStride: L,
                  numDirLights: l.directional.length,
                  numPointLights: l.point.length,
                  numSpotLights: l.spot.length,
                  numSpotLightMaps: l.spotLightMap.length,
                  numRectAreaLights: l.rectArea.length,
                  numHemiLights: l.hemi.length,
                  numDirLightShadows: l.directionalShadowMap.length,
                  numPointLightShadows: l.pointShadowMap.length,
                  numSpotLightShadows: l.spotShadowMap.length,
                  numSpotLightShadowsWithMaps: l.numSpotLightShadowsWithMaps,
                  numClippingPlanes: s.numPlanes,
                  numClipIntersection: s.numIntersection,
                  dithering: a.dithering,
                  shadowMapEnabled: t.shadowMap.enabled && h.length > 0,
                  shadowMapType: t.shadowMap.type,
                  toneMapping: vt,
                  useLegacyLights: t._useLegacyLights,
                  premultipliedAlpha: a.premultipliedAlpha,
                  doubleSided: 2 === a.side,
                  flipSided: 1 === a.side,
                  useDepthPacking: a.depthPacking >= 0,
                  depthPacking: a.depthPacking || 0,
                  index0AttributeName: a.index0AttributeName,
                  extensionDerivatives: ft && !0 === a.extensions.derivatives,
                  extensionFragDepth: ft && !0 === a.extensions.fragDepth,
                  extensionDrawBuffers: ft && !0 === a.extensions.drawBuffers,
                  extensionShaderTextureLOD: ft && !0 === a.extensions.shaderTextureLOD,
                  rendererExtensionFragDepth: u || i.has("EXT_frag_depth"),
                  rendererExtensionDrawBuffers: u || i.has("WEBGL_draw_buffers"),
                  rendererExtensionShaderTextureLod: u || i.has("EXT_shader_texture_lod"),
                  customProgramCacheKey: a.customProgramCacheKey()
               }
            },
            getProgramCacheKey: function (e) {
               const n = [];
               if (e.shaderID ? n.push(e.shaderID) : (n.push(e.customVertexShaderID), n.push(e.customFragmentShaderID)), void 0 !== e.defines)
                  for (const t in e.defines) n.push(t), n.push(e.defines[t]);
               return !1 === e.isRawShaderMaterial && (! function (t, e) {
                  t.push(e.precision), t.push(e.outputColorSpace), t.push(e.envMapMode), t.push(e.envMapCubeUVHeight), t.push(e.mapUv), t.push(e.alphaMapUv), t.push(e.lightMapUv), t.push(e.aoMapUv), t.push(e.bumpMapUv), t.push(e.normalMapUv), t.push(e.displacementMapUv), t.push(e.emissiveMapUv), t.push(e.metalnessMapUv), t.push(e.roughnessMapUv), t.push(e.anisotropyMapUv), t.push(e.clearcoatMapUv), t.push(e.clearcoatNormalMapUv), t.push(e.clearcoatRoughnessMapUv), t.push(e.iridescenceMapUv), t.push(e.iridescenceThicknessMapUv), t.push(e.sheenColorMapUv), t.push(e.sheenRoughnessMapUv), t.push(e.specularMapUv), t.push(e.specularColorMapUv), t.push(e.specularIntensityMapUv), t.push(e.transmissionMapUv), t.push(e.thicknessMapUv), t.push(e.combine), t.push(e.fogExp2), t.push(e.sizeAttenuation), t.push(e.morphTargetsCount), t.push(e.morphAttributeCount), t.push(e.numDirLights), t.push(e.numPointLights), t.push(e.numSpotLights), t.push(e.numSpotLightMaps), t.push(e.numHemiLights), t.push(e.numRectAreaLights), t.push(e.numDirLightShadows), t.push(e.numPointLightShadows), t.push(e.numSpotLightShadows), t.push(e.numSpotLightShadowsWithMaps), t.push(e.shadowMapType), t.push(e.toneMapping), t.push(e.numClippingPlanes), t.push(e.numClipIntersection), t.push(e.depthPacking)
               }(n, e), function (t, e) {
                  l.disableAll(), e.isWebGL2 && l.enable(0);
                  e.supportsVertexTextures && l.enable(1);
                  e.instancing && l.enable(2);
                  e.instancingColor && l.enable(3);
                  e.matcap && l.enable(4);
                  e.envMap && l.enable(5);
                  e.normalMapObjectSpace && l.enable(6);
                  e.normalMapTangentSpace && l.enable(7);
                  e.clearcoat && l.enable(8);
                  e.iridescence && l.enable(9);
                  e.alphaTest && l.enable(10);
                  e.vertexColors && l.enable(11);
                  e.vertexAlphas && l.enable(12);
                  e.vertexUv1s && l.enable(13);
                  e.vertexUv2s && l.enable(14);
                  e.vertexUv3s && l.enable(15);
                  e.vertexTangents && l.enable(16);
                  e.anisotropy && l.enable(17);
                  t.push(l.mask), l.disableAll(), e.fog && l.enable(0);
                  e.useFog && l.enable(1);
                  e.flatShading && l.enable(2);
                  e.logarithmicDepthBuffer && l.enable(3);
                  e.skinning && l.enable(4);
                  e.morphTargets && l.enable(5);
                  e.morphNormals && l.enable(6);
                  e.morphColors && l.enable(7);
                  e.premultipliedAlpha && l.enable(8);
                  e.shadowMapEnabled && l.enable(9);
                  e.useLegacyLights && l.enable(10);
                  e.doubleSided && l.enable(11);
                  e.flipSided && l.enable(12);
                  e.useDepthPacking && l.enable(13);
                  e.dithering && l.enable(14);
                  e.transmission && l.enable(15);
                  e.sheen && l.enable(16);
                  e.opaque && l.enable(17);
                  e.pointsUvs && l.enable(18);
                  t.push(l.mask)
               }(n, e), n.push(t.outputColorSpace)), n.push(e.customProgramCacheKey), n.join()
            },
            getUniforms: function (t) {
               const e = m[t.type];
               let n;
               if (e) {
                  const t = si[e];
                  n = Bn.clone(t.uniforms)
               } else n = t.uniforms;
               return n
            },
            acquireProgram: function (e, n) {
               let i;
               for (let t = 0, e = h.length; t < e; t++) {
                  const e = h[t];
                  if (e.cacheKey === n) {
                     i = e, ++i.usedTimes;
                     break
                  }
               }
               return void 0 === i && (i = new ra(t, n, e, a), h.push(i)), i
            },
            releaseProgram: function (t) {
               if (0 == --t.usedTimes) {
                  const e = h.indexOf(t);
                  h[e] = h[h.length - 1], h.pop(), t.destroy()
               }
            },
            releaseShaderCache: function (t) {
               c.remove(t)
            },
            programs: h,
            dispose: function () {
               c.dispose()
            }
         }
      }

      function ca() {
         let t = new WeakMap;
         return {
            get: function (e) {
               let n = t.get(e);
               return void 0 === n && (n = {}, t.set(e, n)), n
            },
            remove: function (e) {
               t.delete(e)
            },
            update: function (e, n, i) {
               t.get(e)[n] = i
            },
            dispose: function () {
               t = new WeakMap
            }
         }
      }

      function ha(t, e) {
         return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
      }

      function ua(t, e) {
         return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
      }

      function da() {
         const t = [];
         let e = 0;
         const n = [],
            i = [],
            r = [];

         function a(n, i, r, a, s, o) {
            let l = t[e];
            return void 0 === l ? (l = {
               id: n.id,
               object: n,
               geometry: i,
               material: r,
               groupOrder: a,
               renderOrder: n.renderOrder,
               z: s,
               group: o
            }, t[e] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = o), e++, l
         }
         return {
            opaque: n,
            transmissive: i,
            transparent: r,
            init: function () {
               e = 0, n.length = 0, i.length = 0, r.length = 0
            },
            push: function (t, e, s, o, l, c) {
               const h = a(t, e, s, o, l, c);
               s.transmission > 0 ? i.push(h) : !0 === s.transparent ? r.push(h) : n.push(h)
            },
            unshift: function (t, e, s, o, l, c) {
               const h = a(t, e, s, o, l, c);
               s.transmission > 0 ? i.unshift(h) : !0 === s.transparent ? r.unshift(h) : n.unshift(h)
            },
            finish: function () {
               for (let n = e, i = t.length; n < i; n++) {
                  const e = t[n];
                  if (null === e.id) break;
                  e.id = null, e.object = null, e.geometry = null, e.material = null, e.group = null
               }
            },
            sort: function (t, e) {
               n.length > 1 && n.sort(t || ha), i.length > 1 && i.sort(e || ua), r.length > 1 && r.sort(e || ua)
            }
         }
      }

      function pa() {
         let t = new WeakMap;
         return {
            get: function (e, n) {
               const i = t.get(e);
               let r;
               return void 0 === i ? (r = new da, t.set(e, [r])) : n >= i.length ? (r = new da, i.push(r)) : r = i[n], r
            },
            dispose: function () {
               t = new WeakMap
            }
         }
      }

      function fa() {
         const t = {};
         return {
            get: function (e) {
               if (void 0 !== t[e.id]) return t[e.id];
               let n;
               switch (e.type) {
                  case "DirectionalLight":
                     n = {
                        direction: new Dt,
                        color: new $e
                     };
                     break;
                  case "SpotLight":
                     n = {
                        position: new Dt,
                        direction: new Dt,
                        color: new $e,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0
                     };
                     break;
                  case "PointLight":
                     n = {
                        position: new Dt,
                        color: new $e,
                        distance: 0,
                        decay: 0
                     };
                     break;
                  case "HemisphereLight":
                     n = {
                        direction: new Dt,
                        skyColor: new $e,
                        groundColor: new $e
                     };
                     break;
                  case "RectAreaLight":
                     n = {
                        color: new $e,
                        position: new Dt,
                        halfWidth: new Dt,
                        halfHeight: new Dt
                     }
               }
               return t[e.id] = n, n
            }
         }
      }
      let ma = 0;

      function ga(t, e) {
         return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0)
      }

      function _a(t, e) {
         const n = new fa,
            i = function () {
               const t = {};
               return {
                  get: function (e) {
                     if (void 0 !== t[e.id]) return t[e.id];
                     let n;
                     switch (e.type) {
                        case "DirectionalLight":
                        case "SpotLight":
                           n = {
                              shadowBias: 0,
                              shadowNormalBias: 0,
                              shadowRadius: 1,
                              shadowMapSize: new st
                           };
                           break;
                        case "PointLight":
                           n = {
                              shadowBias: 0,
                              shadowNormalBias: 0,
                              shadowRadius: 1,
                              shadowMapSize: new st,
                              shadowCameraNear: 1,
                              shadowCameraFar: 1e3
                           }
                     }
                     return t[e.id] = n, n
                  }
               }
            }(),
            r = {
               version: 0,
               hash: {
                  directionalLength: -1,
                  pointLength: -1,
                  spotLength: -1,
                  rectAreaLength: -1,
                  hemiLength: -1,
                  numDirectionalShadows: -1,
                  numPointShadows: -1,
                  numSpotShadows: -1,
                  numSpotMaps: -1
               },
               ambient: [0, 0, 0],
               probe: [],
               directional: [],
               directionalShadow: [],
               directionalShadowMap: [],
               directionalShadowMatrix: [],
               spot: [],
               spotLightMap: [],
               spotShadow: [],
               spotShadowMap: [],
               spotLightMatrix: [],
               rectArea: [],
               rectAreaLTC1: null,
               rectAreaLTC2: null,
               point: [],
               pointShadow: [],
               pointShadowMap: [],
               pointShadowMatrix: [],
               hemi: [],
               numSpotLightShadowsWithMaps: 0
            };
         for (let t = 0; t < 9; t++) r.probe.push(new Dt);
         const a = new Dt,
            s = new ce,
            o = new ce;
         return {
            setup: function (a, s) {
               let o = 0,
                  l = 0,
                  c = 0;
               for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
               let h = 0,
                  u = 0,
                  d = 0,
                  p = 0,
                  f = 0,
                  m = 0,
                  g = 0,
                  _ = 0,
                  v = 0,
                  x = 0;
               a.sort(ga);
               const y = !0 === s ? Math.PI : 1;
               for (let t = 0, e = a.length; t < e; t++) {
                  const e = a[t],
                     s = e.color,
                     M = e.intensity,
                     S = e.distance,
                     E = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                  if (e.isAmbientLight) o += s.r * M * y, l += s.g * M * y, c += s.b * M * y;
                  else if (e.isLightProbe)
                     for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], M);
                  else if (e.isDirectionalLight) {
                     const t = n.get(e);
                     if (t.color.copy(e.color).multiplyScalar(e.intensity * y), e.castShadow) {
                        const t = e.shadow,
                           n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[h] = n, r.directionalShadowMap[h] = E, r.directionalShadowMatrix[h] = e.shadow.matrix, m++
                     }
                     r.directional[h] = t, h++
                  } else if (e.isSpotLight) {
                     const t = n.get(e);
                     t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(s).multiplyScalar(M * y), t.distance = S, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, r.spot[d] = t;
                     const a = e.shadow;
                     if (e.map && (r.spotLightMap[v] = e.map, v++, a.updateMatrices(e), e.castShadow && x++), r.spotLightMatrix[d] = a.matrix, e.castShadow) {
                        const t = i.get(e);
                        t.shadowBias = a.bias, t.shadowNormalBias = a.normalBias, t.shadowRadius = a.radius, t.shadowMapSize = a.mapSize, r.spotShadow[d] = t, r.spotShadowMap[d] = E, _++
                     }
                     d++
                  } else if (e.isRectAreaLight) {
                     const t = n.get(e);
                     t.color.copy(s).multiplyScalar(M), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[p] = t, p++
                  } else if (e.isPointLight) {
                     const t = n.get(e);
                     if (t.color.copy(e.color).multiplyScalar(e.intensity * y), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                        const t = e.shadow,
                           n = i.get(e);
                        n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[u] = n, r.pointShadowMap[u] = E, r.pointShadowMatrix[u] = e.shadow.matrix, g++
                     }
                     r.point[u] = t, u++
                  } else if (e.isHemisphereLight) {
                     const t = n.get(e);
                     t.skyColor.copy(e.color).multiplyScalar(M * y), t.groundColor.copy(e.groundColor).multiplyScalar(M * y), r.hemi[f] = t, f++
                  }
               }
               p > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = ai.LTC_FLOAT_1, r.rectAreaLTC2 = ai.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = ai.LTC_HALF_1, r.rectAreaLTC2 = ai.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = l, r.ambient[2] = c;
               const M = r.hash;
               M.directionalLength === h && M.pointLength === u && M.spotLength === d && M.rectAreaLength === p && M.hemiLength === f && M.numDirectionalShadows === m && M.numPointShadows === g && M.numSpotShadows === _ && M.numSpotMaps === v || (r.directional.length = h, r.spot.length = d, r.rectArea.length = p, r.point.length = u, r.hemi.length = f, r.directionalShadow.length = m, r.directionalShadowMap.length = m, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = m, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - x, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = x, M.directionalLength = h, M.pointLength = u, M.spotLength = d, M.rectAreaLength = p, M.hemiLength = f, M.numDirectionalShadows = m, M.numPointShadows = g, M.numSpotShadows = _, M.numSpotMaps = v, r.version = ma++)
            },
            setupView: function (t, e) {
               let n = 0,
                  i = 0,
                  l = 0,
                  c = 0,
                  h = 0;
               const u = e.matrixWorldInverse;
               for (let e = 0, d = t.length; e < d; e++) {
                  const d = t[e];
                  if (d.isDirectionalLight) {
                     const t = r.directional[n];
                     t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(u), n++
                  } else if (d.isSpotLight) {
                     const t = r.spot[l];
                     t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(a), t.direction.transformDirection(u), l++
                  } else if (d.isRectAreaLight) {
                     const t = r.rectArea[c];
                     t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), o.identity(), s.copy(d.matrixWorld), s.premultiply(u), o.extractRotation(s), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(o), t.halfHeight.applyMatrix4(o), c++
                  } else if (d.isPointLight) {
                     const t = r.point[i];
                     t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++
                  } else if (d.isHemisphereLight) {
                     const t = r.hemi[h];
                     t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), h++
                  }
               }
            },
            state: r
         }
      }

      function va(t, e) {
         const n = new _a(t, e),
            i = [],
            r = [];
         return {
            init: function () {
               i.length = 0, r.length = 0
            },
            state: {
               lightsArray: i,
               shadowsArray: r,
               lights: n
            },
            setupLights: function (t) {
               n.setup(i, t)
            },
            setupLightsView: function (t) {
               n.setupView(i, t)
            },
            pushLight: function (t) {
               i.push(t)
            },
            pushShadow: function (t) {
               r.push(t)
            }
         }
      }

      function xa(t, e) {
         let n = new WeakMap;
         return {
            get: function (i, r = 0) {
               const a = n.get(i);
               let s;
               return void 0 === a ? (s = new va(t, e), n.set(i, [s])) : r >= a.length ? (s = new va(t, e), a.push(s)) : s = a[r], s
            },
            dispose: function () {
               n = new WeakMap
            }
         }
      }
      class ya extends Ye {
         constructor(t) {
            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t)
         }
         copy(t) {
            return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
         }
      }
      class Ma extends Ye {
         constructor(t) {
            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t)
         }
         copy(t) {
            return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
         }
      }

      function Sa(t, e, n) {
         let i = new ti;
         const r = new st,
            a = new st,
            s = new At,
            o = new ya({
               depthPacking: 3201
            }),
            l = new Ma,
            c = {},
            h = n.maxTextureSize,
            d = {
               0: 1,
               1: 0,
               2: 2
            },
            p = new Hn({
               defines: {
                  VSM_SAMPLES: 8
               },
               uniforms: {
                  shadow_pass: {
                     value: null
                  },
                  resolution: {
                     value: new st
                  },
                  radius: {
                     value: 4
                  }
               },
               vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
               fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tconst float samples = float( VSM_SAMPLES );\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n\tfloat uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n\tfor ( float i = 0.0; i < samples; i ++ ) {\n\t\tfloat uvOffset = uvStart + i * uvStride;\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean / samples;\n\tsquared_mean = squared_mean / samples;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
            }),
            f = p.clone();
         f.defines.HORIZONTAL_PASS = 1;
         const m = new gn;
         m.setAttribute("position", new an(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
         const g = new In(m, p),
            _ = this;
         this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
         let v = this.type;

         function x(n, i) {
            const a = e.update(g);
            p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, f.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, f.needsUpdate = !0), null === n.mapPass && (n.mapPass = new Ct(r.x, r.y)), p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, a, p, g, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, a, f, g, null)
         }

         function y(e, n, i, r) {
            let a = null;
            const s = !0 === i.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
            if (void 0 !== s) a = s;
            else if (a = !0 === i.isPointLight ? l : o, t.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
               const t = a.uuid,
                  e = n.uuid;
               let i = c[t];
               void 0 === i && (i = {}, c[t] = i);
               let r = i[e];
               void 0 === r && (r = a.clone(), i[e] = r), a = r
            }
            if (a.visible = n.visible, a.wireframe = n.wireframe, a.side = 3 === r ? null !== n.shadowSide ? n.shadowSide : n.side : null !== n.shadowSide ? n.shadowSide : d[n.side], a.alphaMap = n.alphaMap, a.alphaTest = n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, !0 === i.isPointLight && !0 === a.isMeshDistanceMaterial) {
               t.properties.get(a).light = i
            }
            return a
         }

         function M(n, r, a, s, o) {
            if (!1 === n.visible) return;
            if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === o) && (!n.frustumCulled || i.intersectsObject(n))) {
               n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
               const i = e.update(n),
                  r = n.material;
               if (Array.isArray(r)) {
                  const e = i.groups;
                  for (let l = 0, c = e.length; l < c; l++) {
                     const c = e[l],
                        h = r[c.materialIndex];
                     if (h && h.visible) {
                        const e = y(n, h, s, o);
                        t.renderBufferDirect(a, null, i, e, n, c)
                     }
                  }
               } else if (r.visible) {
                  const e = y(n, r, s, o);
                  t.renderBufferDirect(a, null, i, e, n, null)
               }
            }
            const l = n.children;
            for (let t = 0, e = l.length; t < e; t++) M(l[t], r, a, s, o)
         }
         this.render = function (e, n, o) {
            if (!1 === _.enabled) return;
            if (!1 === _.autoUpdate && !1 === _.needsUpdate) return;
            if (0 === e.length) return;
            const l = t.getRenderTarget(),
               c = t.getActiveCubeFace(),
               d = t.getActiveMipmapLevel(),
               p = t.state;
            p.setBlending(0), p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
            const f = 3 !== v && 3 === this.type,
               m = 3 === v && 3 !== this.type;
            for (let l = 0, c = e.length; l < c; l++) {
               const c = e[l],
                  d = c.shadow;
               if (void 0 === d) {
                  console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                  continue
               }
               if (!1 === d.autoUpdate && !1 === d.needsUpdate) continue;
               r.copy(d.mapSize);
               const g = d.getFrameExtents();
               if (r.multiply(g), a.copy(d.mapSize), (r.x > h || r.y > h) && (r.x > h && (a.x = Math.floor(h / g.x), r.x = a.x * g.x, d.mapSize.x = a.x), r.y > h && (a.y = Math.floor(h / g.y), r.y = a.y * g.y, d.mapSize.y = a.y)), null === d.map || !0 === f || !0 === m) {
                  const t = 3 !== this.type ? {
                     minFilter: u,
                     magFilter: u
                  } : {};
                  null !== d.map && d.map.dispose(), d.map = new Ct(r.x, r.y, t), d.map.texture.name = c.name + ".shadowMap", d.camera.updateProjectionMatrix()
               }
               t.setRenderTarget(d.map), t.clear();
               const _ = d.getViewportCount();
               for (let t = 0; t < _; t++) {
                  const e = d.getViewport(t);
                  s.set(a.x * e.x, a.y * e.y, a.x * e.z, a.y * e.w), p.viewport(s), d.updateMatrices(c, t), i = d.getFrustum(), M(n, o, d.camera, c, this.type)
               }!0 !== d.isPointLightShadow && 3 === this.type && x(d, o), d.needsUpdate = !1
            }
            v = this.type, _.needsUpdate = !1, t.setRenderTarget(l, c, d)
         }
      }

      function Ea(t, n, i) {
         const r = i.isWebGL2;
         const a = new function () {
               let e = !1;
               const n = new At;
               let i = null;
               const r = new At(0, 0, 0, 0);
               return {
                  setMask: function (n) {
                     i === n || e || (t.colorMask(n, n, n, n), i = n)
                  },
                  setLocked: function (t) {
                     e = t
                  },
                  setClear: function (e, i, a, s, o) {
                     !0 === o && (e *= s, i *= s, a *= s), n.set(e, i, a, s), !1 === r.equals(n) && (t.clearColor(e, i, a, s), r.copy(n))
                  },
                  reset: function () {
                     e = !1, i = null, r.set(-1, 0, 0, 0)
                  }
               }
            },
            s = new function () {
               let e = !1,
                  n = null,
                  i = null,
                  r = null;
               return {
                  setTest: function (e) {
                     e ? H(t.DEPTH_TEST) : V(t.DEPTH_TEST)
                  },
                  setMask: function (i) {
                     n === i || e || (t.depthMask(i), n = i)
                  },
                  setFunc: function (e) {
                     if (i !== e) {
                        switch (e) {
                           case 0:
                              t.depthFunc(t.NEVER);
                              break;
                           case 1:
                              t.depthFunc(t.ALWAYS);
                              break;
                           case 2:
                              t.depthFunc(t.LESS);
                              break;
                           case 3:
                           default:
                              t.depthFunc(t.LEQUAL);
                              break;
                           case 4:
                              t.depthFunc(t.EQUAL);
                              break;
                           case 5:
                              t.depthFunc(t.GEQUAL);
                              break;
                           case 6:
                              t.depthFunc(t.GREATER);
                              break;
                           case 7:
                              t.depthFunc(t.NOTEQUAL)
                        }
                        i = e
                     }
                  },
                  setLocked: function (t) {
                     e = t
                  },
                  setClear: function (e) {
                     r !== e && (t.clearDepth(e), r = e)
                  },
                  reset: function () {
                     e = !1, n = null, i = null, r = null
                  }
               }
            },
            o = new function () {
               let e = !1,
                  n = null,
                  i = null,
                  r = null,
                  a = null,
                  s = null,
                  o = null,
                  l = null,
                  c = null;
               return {
                  setTest: function (n) {
                     e || (n ? H(t.STENCIL_TEST) : V(t.STENCIL_TEST))
                  },
                  setMask: function (i) {
                     n === i || e || (t.stencilMask(i), n = i)
                  },
                  setFunc: function (e, n, s) {
                     i === e && r === n && a === s || (t.stencilFunc(e, n, s), i = e, r = n, a = s)
                  },
                  setOp: function (e, n, i) {
                     s === e && o === n && l === i || (t.stencilOp(e, n, i), s = e, o = n, l = i)
                  },
                  setLocked: function (t) {
                     e = t
                  },
                  setClear: function (e) {
                     c !== e && (t.clearStencil(e), c = e)
                  },
                  reset: function () {
                     e = !1, n = null, i = null, r = null, a = null, s = null, o = null, l = null, c = null
                  }
               }
            },
            l = new WeakMap,
            c = new WeakMap;
         let h = {},
            u = {},
            d = new WeakMap,
            p = [],
            f = null,
            m = !1,
            g = null,
            _ = null,
            v = null,
            x = null,
            y = null,
            M = null,
            S = null,
            E = !1,
            b = null,
            w = null,
            T = null,
            A = null,
            R = null;
         const C = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
         let P = !1,
            L = 0;
         const U = t.getParameter(t.VERSION); - 1 !== U.indexOf("WebGL") ? (L = parseFloat(/^WebGL (\d)/.exec(U)[1]), P = L >= 1) : -1 !== U.indexOf("OpenGL ES") && (L = parseFloat(/^OpenGL ES (\d)/.exec(U)[1]), P = L >= 2);
         let D = null,
            I = {};
         const N = t.getParameter(t.SCISSOR_BOX),
            O = t.getParameter(t.VIEWPORT),
            F = (new At).fromArray(N),
            k = (new At).fromArray(O);

         function z(e, n, i, a) {
            const s = new Uint8Array(4),
               o = t.createTexture();
            t.bindTexture(e, o), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (let o = 0; o < i; o++) !r || e !== t.TEXTURE_3D && e !== t.TEXTURE_2D_ARRAY ? t.texImage2D(n + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, s) : t.texImage3D(n, 0, t.RGBA, 1, 1, a, 0, t.RGBA, t.UNSIGNED_BYTE, s);
            return o
         }
         const B = {};

         function H(e) {
            !0 !== h[e] && (t.enable(e), h[e] = !0)
         }

         function V(e) {
            !1 !== h[e] && (t.disable(e), h[e] = !1)
         }
         B[t.TEXTURE_2D] = z(t.TEXTURE_2D, t.TEXTURE_2D, 1), B[t.TEXTURE_CUBE_MAP] = z(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), r && (B[t.TEXTURE_2D_ARRAY] = z(t.TEXTURE_2D_ARRAY, t.TEXTURE_2D_ARRAY, 1, 1), B[t.TEXTURE_3D] = z(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), H(t.DEPTH_TEST), s.setFunc(3), j(!1), q(1), H(t.CULL_FACE), X(0);
         const W = {
            [e]: t.FUNC_ADD,
            101: t.FUNC_SUBTRACT,
            102: t.FUNC_REVERSE_SUBTRACT
         };
         if (r) W[103] = t.MIN, W[104] = t.MAX;
         else {
            const t = n.get("EXT_blend_minmax");
            null !== t && (W[103] = t.MIN_EXT, W[104] = t.MAX_EXT)
         }
         const G = {
            200: t.ZERO,
            201: t.ONE,
            202: t.SRC_COLOR,
            204: t.SRC_ALPHA,
            210: t.SRC_ALPHA_SATURATE,
            208: t.DST_COLOR,
            206: t.DST_ALPHA,
            203: t.ONE_MINUS_SRC_COLOR,
            205: t.ONE_MINUS_SRC_ALPHA,
            209: t.ONE_MINUS_DST_COLOR,
            207: t.ONE_MINUS_DST_ALPHA
         };

         function X(n, i, r, a, s, o, l, c) {
            if (0 !== n) {
               if (!1 === m && (H(t.BLEND), m = !0), 5 === n) s = s || i, o = o || r, l = l || a, i === _ && s === y || (t.blendEquationSeparate(W[i], W[s]), _ = i, y = s), r === v && a === x && o === M && l === S || (t.blendFuncSeparate(G[r], G[a], G[o], G[l]), v = r, x = a, M = o, S = l), g = n, E = !1;
               else if (n !== g || c !== E) {
                  if (_ === e && y === e || (t.blendEquation(t.FUNC_ADD), _ = e, y = e), c) switch (n) {
                     case 1:
                        t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                        break;
                     case 2:
                        t.blendFunc(t.ONE, t.ONE);
                        break;
                     case 3:
                        t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
                        break;
                     case 4:
                        t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
                        break;
                     default:
                        console.error("THREE.WebGLState: Invalid blending: ", n)
                  } else switch (n) {
                     case 1:
                        t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
                        break;
                     case 2:
                        t.blendFunc(t.SRC_ALPHA, t.ONE);
                        break;
                     case 3:
                        t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
                        break;
                     case 4:
                        t.blendFunc(t.ZERO, t.SRC_COLOR);
                        break;
                     default:
                        console.error("THREE.WebGLState: Invalid blending: ", n)
                  }
                  v = null, x = null, M = null, S = null, g = n, E = c
               }
            } else !0 === m && (V(t.BLEND), m = !1)
         }

         function j(e) {
            b !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), b = e)
         }

         function q(e) {
            0 !== e ? (H(t.CULL_FACE), e !== w && (1 === e ? t.cullFace(t.BACK) : 2 === e ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : V(t.CULL_FACE), w = e
         }

         function Y(e, n, i) {
            e ? (H(t.POLYGON_OFFSET_FILL), A === n && R === i || (t.polygonOffset(n, i), A = n, R = i)) : V(t.POLYGON_OFFSET_FILL)
         }
         return {
            buffers: {
               color: a,
               depth: s,
               stencil: o
            },
            enable: H,
            disable: V,
            bindFramebuffer: function (e, n) {
               return u[e] !== n && (t.bindFramebuffer(e, n), u[e] = n, r && (e === t.DRAW_FRAMEBUFFER && (u[t.FRAMEBUFFER] = n), e === t.FRAMEBUFFER && (u[t.DRAW_FRAMEBUFFER] = n)), !0)
            },
            drawBuffers: function (e, r) {
               let a = p,
                  s = !1;
               if (e)
                  if (a = d.get(r), void 0 === a && (a = [], d.set(r, a)), e.isWebGLMultipleRenderTargets) {
                     const n = e.texture;
                     if (a.length !== n.length || a[0] !== t.COLOR_ATTACHMENT0) {
                        for (let e = 0, i = n.length; e < i; e++) a[e] = t.COLOR_ATTACHMENT0 + e;
                        a.length = n.length, s = !0
                     }
                  } else a[0] !== t.COLOR_ATTACHMENT0 && (a[0] = t.COLOR_ATTACHMENT0, s = !0);
               else a[0] !== t.BACK && (a[0] = t.BACK, s = !0);
               s && (i.isWebGL2 ? t.drawBuffers(a) : n.get("WEBGL_draw_buffers").drawBuffersWEBGL(a))
            },
            useProgram: function (e) {
               return f !== e && (t.useProgram(e), f = e, !0)
            },
            setBlending: X,
            setMaterial: function (e, n) {
               2 === e.side ? V(t.CULL_FACE) : H(t.CULL_FACE);
               let i = 1 === e.side;
               n && (i = !i), j(i), 1 === e.blending && !1 === e.transparent ? X(0) : X(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha), s.setFunc(e.depthFunc), s.setTest(e.depthTest), s.setMask(e.depthWrite), a.setMask(e.colorWrite);
               const r = e.stencilWrite;
               o.setTest(r), r && (o.setMask(e.stencilWriteMask), o.setFunc(e.stencilFunc, e.stencilRef, e.stencilFuncMask), o.setOp(e.stencilFail, e.stencilZFail, e.stencilZPass)), Y(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits), !0 === e.alphaToCoverage ? H(t.SAMPLE_ALPHA_TO_COVERAGE) : V(t.SAMPLE_ALPHA_TO_COVERAGE)
            },
            setFlipSided: j,
            setCullFace: q,
            setLineWidth: function (e) {
               e !== T && (P && t.lineWidth(e), T = e)
            },
            setPolygonOffset: Y,
            setScissorTest: function (e) {
               e ? H(t.SCISSOR_TEST) : V(t.SCISSOR_TEST)
            },
            activeTexture: function (e) {
               void 0 === e && (e = t.TEXTURE0 + C - 1), D !== e && (t.activeTexture(e), D = e)
            },
            bindTexture: function (e, n, i) {
               void 0 === i && (i = null === D ? t.TEXTURE0 + C - 1 : D);
               let r = I[i];
               void 0 === r && (r = {
                  type: void 0,
                  texture: void 0
               }, I[i] = r), r.type === e && r.texture === n || (D !== i && (t.activeTexture(i), D = i), t.bindTexture(e, n || B[e]), r.type = e, r.texture = n)
            },
            unbindTexture: function () {
               const e = I[D];
               void 0 !== e && void 0 !== e.type && (t.bindTexture(e.type, null), e.type = void 0, e.texture = void 0)
            },
            compressedTexImage2D: function () {
               try {
                  t.compressedTexImage2D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            compressedTexImage3D: function () {
               try {
                  t.compressedTexImage3D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            texImage2D: function () {
               try {
                  t.texImage2D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            texImage3D: function () {
               try {
                  t.texImage3D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            updateUBOMapping: function (e, n) {
               let i = c.get(n);
               void 0 === i && (i = new WeakMap, c.set(n, i));
               let r = i.get(e);
               void 0 === r && (r = t.getUniformBlockIndex(n, e.name), i.set(e, r))
            },
            uniformBlockBinding: function (e, n) {
               const i = c.get(n).get(e);
               l.get(n) !== i && (t.uniformBlockBinding(n, i, e.__bindingPointIndex), l.set(n, i))
            },
            texStorage2D: function () {
               try {
                  t.texStorage2D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            texStorage3D: function () {
               try {
                  t.texStorage3D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            texSubImage2D: function () {
               try {
                  t.texSubImage2D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            texSubImage3D: function () {
               try {
                  t.texSubImage3D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            compressedTexSubImage2D: function () {
               try {
                  t.compressedTexSubImage2D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            compressedTexSubImage3D: function () {
               try {
                  t.compressedTexSubImage3D.apply(t, arguments)
               } catch (t) {
                  console.error("THREE.WebGLState:", t)
               }
            },
            scissor: function (e) {
               !1 === F.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), F.copy(e))
            },
            viewport: function (e) {
               !1 === k.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), k.copy(e))
            },
            reset: function () {
               t.disable(t.BLEND), t.disable(t.CULL_FACE), t.disable(t.DEPTH_TEST), t.disable(t.POLYGON_OFFSET_FILL), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.SAMPLE_ALPHA_TO_COVERAGE), t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ONE, t.ZERO), t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO), t.colorMask(!0, !0, !0, !0), t.clearColor(0, 0, 0, 0), t.depthMask(!0), t.depthFunc(t.LESS), t.clearDepth(1), t.stencilMask(4294967295), t.stencilFunc(t.ALWAYS, 0, 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP), t.clearStencil(0), t.cullFace(t.BACK), t.frontFace(t.CCW), t.polygonOffset(0, 0), t.activeTexture(t.TEXTURE0), t.bindFramebuffer(t.FRAMEBUFFER, null), !0 === r && (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.bindFramebuffer(t.READ_FRAMEBUFFER, null)), t.useProgram(null), t.lineWidth(1), t.scissor(0, 0, t.canvas.width, t.canvas.height), t.viewport(0, 0, t.canvas.width, t.canvas.height), h = {}, D = null, I = {}, u = {}, d = new WeakMap, p = [], f = null, m = !1, g = null, _ = null, v = null, x = null, y = null, M = null, S = null, E = !1, b = null, w = null, T = null, A = null, R = null, F.set(0, 0, t.canvas.width, t.canvas.height), k.set(0, 0, t.canvas.width, t.canvas.height), a.reset(), s.reset(), o.reset()
            }
         }
      }

      function ba(t, e, n, i, r, a, s) {
         const o = r.isWebGL2,
            v = r.maxTextures,
            T = r.maxCubemapSize,
            A = r.maxTextureSize,
            R = r.maxSamples,
            C = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
            P = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent),
            L = new WeakMap;
         let U;
         const D = new WeakMap;
         let I = !1;
         try {
            I = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
         } catch (t) {}

         function N(t, e) {
            return I ? new OffscreenCanvas(t, e) : ht("canvas")
         }

         function O(t, e, n, i) {
            let r = 1;
            if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
               if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                  const i = e ? it : Math.floor,
                     a = i(r * t.width),
                     s = i(r * t.height);
                  void 0 === U && (U = N(a, s));
                  const o = n ? N(a, s) : U;
                  o.width = a, o.height = s;
                  return o.getContext("2d").drawImage(t, 0, 0, a, s), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + a + "x" + s + ")."), o
               }
               return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
            }
            return t
         }

         function F(t) {
            return nt(t.width) && nt(t.height)
         }

         function H(t, e) {
            return t.generateMipmaps && e && t.minFilter !== u && t.minFilter !== f
         }

         function V(e) {
            t.generateMipmap(e)
         }

         function W(n, i, r, a, s = !1) {
            if (!1 === o) return i;
            if (null !== n) {
               if (void 0 !== t[n]) return t[n];
               console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
            }
            let l = i;
            return i === t.RED && (r === t.FLOAT && (l = t.R32F), r === t.HALF_FLOAT && (l = t.R16F), r === t.UNSIGNED_BYTE && (l = t.R8)), i === t.RED_INTEGER && (r === t.UNSIGNED_BYTE && (l = t.R8UI), r === t.UNSIGNED_SHORT && (l = t.R16UI), r === t.UNSIGNED_INT && (l = t.R32UI), r === t.BYTE && (l = t.R8I), r === t.SHORT && (l = t.R16I), r === t.INT && (l = t.R32I)), i === t.RG && (r === t.FLOAT && (l = t.RG32F), r === t.HALF_FLOAT && (l = t.RG16F), r === t.UNSIGNED_BYTE && (l = t.RG8)), i === t.RGBA && (r === t.FLOAT && (l = t.RGBA32F), r === t.HALF_FLOAT && (l = t.RGBA16F), r === t.UNSIGNED_BYTE && (l = a === z && !1 === s ? t.SRGB8_ALPHA8 : t.RGBA8), r === t.UNSIGNED_SHORT_4_4_4_4 && (l = t.RGBA4), r === t.UNSIGNED_SHORT_5_5_5_1 && (l = t.RGB5_A1)), l !== t.R16F && l !== t.R32F && l !== t.RG16F && l !== t.RG32F && l !== t.RGBA16F && l !== t.RGBA32F || e.get("EXT_color_buffer_float"), l
         }

         function G(t, e, n) {
            return !0 === H(t, n) || t.isFramebufferTexture && t.minFilter !== u && t.minFilter !== f ? Math.log2(Math.max(e.width, e.height)) + 1 : void 0 !== t.mipmaps && t.mipmaps.length > 0 ? t.mipmaps.length : t.isCompressedTexture && Array.isArray(t.image) ? e.mipmaps.length : 1
         }

         function j(e) {
            return e === u || e === d || e === p ? t.NEAREST : t.LINEAR
         }

         function q(t) {
            const e = t.target;
            e.removeEventListener("dispose", q),
               function (t) {
                  const e = i.get(t);
                  if (void 0 === e.__webglInit) return;
                  const n = t.source,
                     r = D.get(n);
                  if (r) {
                     const i = r[e.__cacheKey];
                     i.usedTimes--, 0 === i.usedTimes && Z(t), 0 === Object.keys(r).length && D.delete(n)
                  }
                  i.remove(t)
               }(e), e.isVideoTexture && L.delete(e)
         }

         function Y(e) {
            const n = e.target;
            n.removeEventListener("dispose", Y),
               function (e) {
                  const n = e.texture,
                     r = i.get(e),
                     a = i.get(n);
                  void 0 !== a.__webglTexture && (t.deleteTexture(a.__webglTexture), s.memory.textures--);
                  e.depthTexture && e.depthTexture.dispose();
                  if (e.isWebGLCubeRenderTarget)
                     for (let e = 0; e < 6; e++) {
                        if (Array.isArray(r.__webglFramebuffer[e]))
                           for (let n = 0; n < r.__webglFramebuffer[e].length; n++) t.deleteFramebuffer(r.__webglFramebuffer[e][n]);
                        else t.deleteFramebuffer(r.__webglFramebuffer[e]);
                        r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer[e])
                     } else {
                        if (Array.isArray(r.__webglFramebuffer))
                           for (let e = 0; e < r.__webglFramebuffer.length; e++) t.deleteFramebuffer(r.__webglFramebuffer[e]);
                        else t.deleteFramebuffer(r.__webglFramebuffer);
                        if (r.__webglDepthbuffer && t.deleteRenderbuffer(r.__webglDepthbuffer), r.__webglMultisampledFramebuffer && t.deleteFramebuffer(r.__webglMultisampledFramebuffer), r.__webglColorRenderbuffer)
                           for (let e = 0; e < r.__webglColorRenderbuffer.length; e++) r.__webglColorRenderbuffer[e] && t.deleteRenderbuffer(r.__webglColorRenderbuffer[e]);
                        r.__webglDepthRenderbuffer && t.deleteRenderbuffer(r.__webglDepthRenderbuffer)
                     }
                  if (e.isWebGLMultipleRenderTargets)
                     for (let e = 0, r = n.length; e < r; e++) {
                        const r = i.get(n[e]);
                        r.__webglTexture && (t.deleteTexture(r.__webglTexture), s.memory.textures--), i.remove(n[e])
                     }
                  i.remove(n), i.remove(e)
               }(n)
         }

         function Z(e) {
            const n = i.get(e);
            t.deleteTexture(n.__webglTexture);
            const r = e.source;
            delete D.get(r)[n.__cacheKey], s.memory.textures--
         }
         let K = 0;

         function J(e, r) {
            const a = i.get(e);
            if (e.isVideoTexture && function (t) {
                  const e = s.render.frame;
                  L.get(t) !== e && (L.set(t, e), t.update())
               }(e), !1 === e.isRenderTargetTexture && e.version > 0 && a.__version !== e.version) {
               const t = e.image;
               if (null === t) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
               else {
                  if (!1 !== t.complete) return void at(a, e, r);
                  console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
               }
            }
            n.bindTexture(t.TEXTURE_2D, a.__webglTexture, t.TEXTURE0 + r)
         }
         const Q = {
               [l]: t.REPEAT,
               [c]: t.CLAMP_TO_EDGE,
               [h]: t.MIRRORED_REPEAT
            },
            $ = {
               [u]: t.NEAREST,
               [d]: t.NEAREST_MIPMAP_NEAREST,
               [p]: t.NEAREST_MIPMAP_LINEAR,
               [f]: t.LINEAR,
               1007: t.LINEAR_MIPMAP_NEAREST,
               [m]: t.LINEAR_MIPMAP_LINEAR
            },
            tt = {
               512: t.NEVER,
               519: t.ALWAYS,
               513: t.LESS,
               515: t.LEQUAL,
               514: t.EQUAL,
               518: t.GEQUAL,
               516: t.GREATER,
               517: t.NOTEQUAL
            };

         function et(n, a, s) {
            if (s ? (t.texParameteri(n, t.TEXTURE_WRAP_S, Q[a.wrapS]), t.texParameteri(n, t.TEXTURE_WRAP_T, Q[a.wrapT]), n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, Q[a.wrapR]), t.texParameteri(n, t.TEXTURE_MAG_FILTER, $[a.magFilter]), t.texParameteri(n, t.TEXTURE_MIN_FILTER, $[a.minFilter])) : (t.texParameteri(n, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(n, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), n !== t.TEXTURE_3D && n !== t.TEXTURE_2D_ARRAY || t.texParameteri(n, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE), a.wrapS === c && a.wrapT === c || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(n, t.TEXTURE_MAG_FILTER, j(a.magFilter)), t.texParameteri(n, t.TEXTURE_MIN_FILTER, j(a.minFilter)), a.minFilter !== u && a.minFilter !== f && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), a.compareFunction && (t.texParameteri(n, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE), t.texParameteri(n, t.TEXTURE_COMPARE_FUNC, tt[a.compareFunction])), !0 === e.has("EXT_texture_filter_anisotropic")) {
               const s = e.get("EXT_texture_filter_anisotropic");
               if (a.magFilter === u) return;
               if (a.minFilter !== p && a.minFilter !== m) return;
               if (a.type === y && !1 === e.has("OES_texture_float_linear")) return;
               if (!1 === o && a.type === M && !1 === e.has("OES_texture_half_float_linear")) return;
               (a.anisotropy > 1 || i.get(a).__currentAnisotropy) && (t.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy)
            }
         }

         function rt(e, n) {
            let i = !1;
            void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", q));
            const r = n.source;
            let a = D.get(r);
            void 0 === a && (a = {}, D.set(r, a));
            const o = function (t) {
               const e = [];
               return e.push(t.wrapS), e.push(t.wrapT), e.push(t.wrapR || 0), e.push(t.magFilter), e.push(t.minFilter), e.push(t.anisotropy), e.push(t.internalFormat), e.push(t.format), e.push(t.type), e.push(t.generateMipmaps), e.push(t.premultiplyAlpha), e.push(t.flipY), e.push(t.unpackAlignment), e.push(t.colorSpace), e.join()
            }(n);
            if (o !== e.__cacheKey) {
               void 0 === a[o] && (a[o] = {
                  texture: t.createTexture(),
                  usedTimes: 0
               }, s.memory.textures++, i = !0), a[o].usedTimes++;
               const r = a[e.__cacheKey];
               void 0 !== r && (a[e.__cacheKey].usedTimes--, 0 === r.usedTimes && Z(n)), e.__cacheKey = o, e.__webglTexture = a[o].texture
            }
            return i
         }

         function at(e, r, s) {
            let l = t.TEXTURE_2D;
            (r.isDataArrayTexture || r.isCompressedArrayTexture) && (l = t.TEXTURE_2D_ARRAY), r.isData3DTexture && (l = t.TEXTURE_3D);
            const h = rt(e, r),
               d = r.source;
            n.bindTexture(l, e.__webglTexture, t.TEXTURE0 + s);
            const p = i.get(d);
            if (d.version !== p.__version || !0 === h) {
               n.activeTexture(t.TEXTURE0 + s), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
               const e = function (t) {
                  return !o && (t.wrapS !== c || t.wrapT !== c || t.minFilter !== u && t.minFilter !== f)
               }(r) && !1 === F(r.image);
               let i = O(r.image, e, !1, A);
               i = dt(r, i);
               const m = F(i) || o,
                  g = a.convert(r.format, r.colorSpace);
               let v, M = a.convert(r.type),
                  T = W(r.internalFormat, g, M, r.colorSpace);
               et(l, r, m);
               const R = r.mipmaps,
                  C = o && !0 !== r.isVideoTexture,
                  P = void 0 === p.__version || !0 === h,
                  L = G(r, i, m);
               if (r.isDepthTexture) T = t.DEPTH_COMPONENT, o ? T = r.type === y ? t.DEPTH_COMPONENT32F : r.type === x ? t.DEPTH_COMPONENT24 : r.type === S ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT16 : r.type === y && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), r.format === b && T === t.DEPTH_COMPONENT && r.type !== _ && r.type !== x && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), r.type = x, M = a.convert(r.type)), r.format === w && T === t.DEPTH_COMPONENT && (T = t.DEPTH_STENCIL, r.type !== S && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), r.type = S, M = a.convert(r.type))), P && (C ? n.texStorage2D(t.TEXTURE_2D, 1, T, i.width, i.height) : n.texImage2D(t.TEXTURE_2D, 0, T, i.width, i.height, 0, g, M, null));
               else if (r.isDataTexture)
                  if (R.length > 0 && m) {
                     C && P && n.texStorage2D(t.TEXTURE_2D, L, T, R[0].width, R[0].height);
                     for (let e = 0, i = R.length; e < i; e++) v = R[e], C ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, v.width, v.height, g, M, v.data) : n.texImage2D(t.TEXTURE_2D, e, T, v.width, v.height, 0, g, M, v.data);
                     r.generateMipmaps = !1
                  } else C ? (P && n.texStorage2D(t.TEXTURE_2D, L, T, i.width, i.height), n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, i.width, i.height, g, M, i.data)) : n.texImage2D(t.TEXTURE_2D, 0, T, i.width, i.height, 0, g, M, i.data);
               else if (r.isCompressedTexture)
                  if (r.isCompressedArrayTexture) {
                     C && P && n.texStorage3D(t.TEXTURE_2D_ARRAY, L, T, R[0].width, R[0].height, i.depth);
                     for (let e = 0, a = R.length; e < a; e++) v = R[e], r.format !== E ? null !== g ? C ? n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY, e, 0, 0, 0, v.width, v.height, i.depth, g, v.data, 0, 0) : n.compressedTexImage3D(t.TEXTURE_2D_ARRAY, e, T, v.width, v.height, i.depth, 0, v.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? n.texSubImage3D(t.TEXTURE_2D_ARRAY, e, 0, 0, 0, v.width, v.height, i.depth, g, M, v.data) : n.texImage3D(t.TEXTURE_2D_ARRAY, e, T, v.width, v.height, i.depth, 0, g, M, v.data)
                  } else {
                     C && P && n.texStorage2D(t.TEXTURE_2D, L, T, R[0].width, R[0].height);
                     for (let e = 0, i = R.length; e < i; e++) v = R[e], r.format !== E ? null !== g ? C ? n.compressedTexSubImage2D(t.TEXTURE_2D, e, 0, 0, v.width, v.height, g, v.data) : n.compressedTexImage2D(t.TEXTURE_2D, e, T, v.width, v.height, 0, v.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : C ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, v.width, v.height, g, M, v.data) : n.texImage2D(t.TEXTURE_2D, e, T, v.width, v.height, 0, g, M, v.data)
                  }
               else if (r.isDataArrayTexture) C ? (P && n.texStorage3D(t.TEXTURE_2D_ARRAY, L, T, i.width, i.height, i.depth), n.texSubImage3D(t.TEXTURE_2D_ARRAY, 0, 0, 0, 0, i.width, i.height, i.depth, g, M, i.data)) : n.texImage3D(t.TEXTURE_2D_ARRAY, 0, T, i.width, i.height, i.depth, 0, g, M, i.data);
               else if (r.isData3DTexture) C ? (P && n.texStorage3D(t.TEXTURE_3D, L, T, i.width, i.height, i.depth), n.texSubImage3D(t.TEXTURE_3D, 0, 0, 0, 0, i.width, i.height, i.depth, g, M, i.data)) : n.texImage3D(t.TEXTURE_3D, 0, T, i.width, i.height, i.depth, 0, g, M, i.data);
               else if (r.isFramebufferTexture) {
                  if (P)
                     if (C) n.texStorage2D(t.TEXTURE_2D, L, T, i.width, i.height);
                     else {
                        let e = i.width,
                           r = i.height;
                        for (let i = 0; i < L; i++) n.texImage2D(t.TEXTURE_2D, i, T, e, r, 0, g, M, null), e >>= 1, r >>= 1
                     }
               } else if (R.length > 0 && m) {
                  C && P && n.texStorage2D(t.TEXTURE_2D, L, T, R[0].width, R[0].height);
                  for (let e = 0, i = R.length; e < i; e++) v = R[e], C ? n.texSubImage2D(t.TEXTURE_2D, e, 0, 0, g, M, v) : n.texImage2D(t.TEXTURE_2D, e, T, g, M, v);
                  r.generateMipmaps = !1
               } else C ? (P && n.texStorage2D(t.TEXTURE_2D, L, T, i.width, i.height), n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, g, M, i)) : n.texImage2D(t.TEXTURE_2D, 0, T, g, M, i);
               H(r, m) && V(l), p.__version = d.version, r.onUpdate && r.onUpdate(r)
            }
            e.__version = r.version
         }

         function st(e, r, s, o, l, c) {
            const h = a.convert(s.format, s.colorSpace),
               u = a.convert(s.type),
               d = W(s.internalFormat, h, u, s.colorSpace);
            if (!i.get(r).__hasExternalTextures) {
               const e = Math.max(1, r.width >> c),
                  i = Math.max(1, r.height >> c);
               l === t.TEXTURE_3D || l === t.TEXTURE_2D_ARRAY ? n.texImage3D(l, c, d, e, i, r.depth, 0, h, u, null) : n.texImage2D(l, c, d, e, i, 0, h, u, null)
            }
            n.bindFramebuffer(t.FRAMEBUFFER, e), ut(r) ? C.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, o, l, i.get(s).__webglTexture, 0, ct(r)) : (l === t.TEXTURE_2D || l >= t.TEXTURE_CUBE_MAP_POSITIVE_X && l <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t.framebufferTexture2D(t.FRAMEBUFFER, o, l, i.get(s).__webglTexture, c), n.bindFramebuffer(t.FRAMEBUFFER, null)
         }

         function ot(e, n, i) {
            if (t.bindRenderbuffer(t.RENDERBUFFER, e), n.depthBuffer && !n.stencilBuffer) {
               let r = t.DEPTH_COMPONENT16;
               if (i || ut(n)) {
                  const e = n.depthTexture;
                  e && e.isDepthTexture && (e.type === y ? r = t.DEPTH_COMPONENT32F : e.type === x && (r = t.DEPTH_COMPONENT24));
                  const i = ct(n);
                  ut(n) ? C.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, i, r, n.width, n.height) : t.renderbufferStorageMultisample(t.RENDERBUFFER, i, r, n.width, n.height)
               } else t.renderbufferStorage(t.RENDERBUFFER, r, n.width, n.height);
               t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)
            } else if (n.depthBuffer && n.stencilBuffer) {
               const r = ct(n);
               i && !1 === ut(n) ? t.renderbufferStorageMultisample(t.RENDERBUFFER, r, t.DEPTH24_STENCIL8, n.width, n.height) : ut(n) ? C.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, r, t.DEPTH24_STENCIL8, n.width, n.height) : t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)
            } else {
               const e = !0 === n.isWebGLMultipleRenderTargets ? n.texture : [n.texture];
               for (let r = 0; r < e.length; r++) {
                  const s = e[r],
                     o = a.convert(s.format, s.colorSpace),
                     l = a.convert(s.type),
                     c = W(s.internalFormat, o, l, s.colorSpace),
                     h = ct(n);
                  i && !1 === ut(n) ? t.renderbufferStorageMultisample(t.RENDERBUFFER, h, c, n.width, n.height) : ut(n) ? C.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, h, c, n.width, n.height) : t.renderbufferStorage(t.RENDERBUFFER, c, n.width, n.height)
               }
            }
            t.bindRenderbuffer(t.RENDERBUFFER, null)
         }

         function lt(e) {
            const r = i.get(e),
               a = !0 === e.isWebGLCubeRenderTarget;
            if (e.depthTexture && !r.__autoAllocateDepthBuffer) {
               if (a) throw new Error("target.depthTexture not supported in Cube render targets");
               ! function (e, r) {
                  if (r && r.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                  if (n.bindFramebuffer(t.FRAMEBUFFER, e), !r.depthTexture || !r.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                  i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), J(r.depthTexture, 0);
                  const a = i.get(r.depthTexture).__webglTexture,
                     s = ct(r);
                  if (r.depthTexture.format === b) ut(r) ? C.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, a, 0, s) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, a, 0);
                  else {
                     if (r.depthTexture.format !== w) throw new Error("Unknown depthTexture format");
                     ut(r) ? C.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, a, 0, s) : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, a, 0)
                  }
               }(r.__webglFramebuffer, e)
            } else if (a) {
               r.__webglDepthbuffer = [];
               for (let i = 0; i < 6; i++) n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[i]), r.__webglDepthbuffer[i] = t.createRenderbuffer(), ot(r.__webglDepthbuffer[i], e, !1)
            } else n.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), ot(r.__webglDepthbuffer, e, !1);
            n.bindFramebuffer(t.FRAMEBUFFER, null)
         }

         function ct(t) {
            return Math.min(R, t.samples)
         }

         function ut(t) {
            const n = i.get(t);
            return o && t.samples > 0 && !0 === e.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
         }

         function dt(t, n) {
            const i = t.colorSpace,
               r = t.format,
               a = t.type;
            return !0 === t.isCompressedTexture || t.format === X || i !== B && i !== k && (i === z ? !1 === o ? !0 === e.has("EXT_sRGB") && r === E ? (t.format = X, t.minFilter = f, t.generateMipmaps = !1) : n = Mt.sRGBToLinear(n) : r === E && a === g || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", i)), n
         }
         this.allocateTextureUnit = function () {
            const t = K;
            return t >= v && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + v), K += 1, t
         }, this.resetTextureUnits = function () {
            K = 0
         }, this.setTexture2D = J, this.setTexture2DArray = function (e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version ? at(a, e, r) : n.bindTexture(t.TEXTURE_2D_ARRAY, a.__webglTexture, t.TEXTURE0 + r)
         }, this.setTexture3D = function (e, r) {
            const a = i.get(e);
            e.version > 0 && a.__version !== e.version ? at(a, e, r) : n.bindTexture(t.TEXTURE_3D, a.__webglTexture, t.TEXTURE0 + r)
         }, this.setTextureCube = function (e, r) {
            const s = i.get(e);
            e.version > 0 && s.__version !== e.version ? function (e, r, s) {
               if (6 !== r.image.length) return;
               const l = rt(e, r),
                  c = r.source;
               n.bindTexture(t.TEXTURE_CUBE_MAP, e.__webglTexture, t.TEXTURE0 + s);
               const h = i.get(c);
               if (c.version !== h.__version || !0 === l) {
                  n.activeTexture(t.TEXTURE0 + s), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, r.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, r.unpackAlignment), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE);
                  const e = r.isCompressedTexture || r.image[0].isCompressedTexture,
                     i = r.image[0] && r.image[0].isDataTexture,
                     u = [];
                  for (let t = 0; t < 6; t++) u[t] = e || i ? i ? r.image[t].image : r.image[t] : O(r.image[t], !1, !0, T), u[t] = dt(r, u[t]);
                  const d = u[0],
                     p = F(d) || o,
                     f = a.convert(r.format, r.colorSpace),
                     m = a.convert(r.type),
                     g = W(r.internalFormat, f, m, r.colorSpace),
                     _ = o && !0 !== r.isVideoTexture,
                     v = void 0 === h.__version || !0 === l;
                  let x, y = G(r, d, p);
                  if (et(t.TEXTURE_CUBE_MAP, r, p), e) {
                     _ && v && n.texStorage2D(t.TEXTURE_CUBE_MAP, y, g, d.width, d.height);
                     for (let e = 0; e < 6; e++) {
                        x = u[e].mipmaps;
                        for (let i = 0; i < x.length; i++) {
                           const a = x[i];
                           r.format !== E ? null !== f ? _ ? n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, 0, 0, a.width, a.height, f, a.data) : n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, g, a.width, a.height, 0, a.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, 0, 0, a.width, a.height, f, m, a.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i, g, a.width, a.height, 0, f, m, a.data)
                        }
                     }
                  } else {
                     x = r.mipmaps, _ && v && (x.length > 0 && y++, n.texStorage2D(t.TEXTURE_CUBE_MAP, y, g, u[0].width, u[0].height));
                     for (let e = 0; e < 6; e++)
                        if (i) {
                           _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, u[e].width, u[e].height, f, m, u[e].data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, g, u[e].width, u[e].height, 0, f, m, u[e].data);
                           for (let i = 0; i < x.length; i++) {
                              const r = x[i].image[e].image;
                              _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, r.width, r.height, f, m, r.data) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, g, r.width, r.height, 0, f, m, r.data)
                           }
                        } else {
                           _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, 0, 0, f, m, u[e]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, g, f, m, u[e]);
                           for (let i = 0; i < x.length; i++) {
                              const r = x[i];
                              _ ? n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, 0, 0, f, m, r.image[e]) : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + e, i + 1, g, f, m, r.image[e])
                           }
                        }
                  }
                  H(r, p) && V(t.TEXTURE_CUBE_MAP), h.__version = c.version, r.onUpdate && r.onUpdate(r)
               }
               e.__version = r.version
            }(s, e, r) : n.bindTexture(t.TEXTURE_CUBE_MAP, s.__webglTexture, t.TEXTURE0 + r)
         }, this.rebindTextures = function (e, n, r) {
            const a = i.get(e);
            void 0 !== n && st(a.__webglFramebuffer, e, e.texture, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, 0), void 0 !== r && lt(e)
         }, this.setupRenderTarget = function (e) {
            const l = e.texture,
               c = i.get(e),
               h = i.get(l);
            e.addEventListener("dispose", Y), !0 !== e.isWebGLMultipleRenderTargets && (void 0 === h.__webglTexture && (h.__webglTexture = t.createTexture()), h.__version = l.version, s.memory.textures++);
            const u = !0 === e.isWebGLCubeRenderTarget,
               d = !0 === e.isWebGLMultipleRenderTargets,
               p = F(e) || o;
            if (u) {
               c.__webglFramebuffer = [];
               for (let e = 0; e < 6; e++)
                  if (o && l.mipmaps && l.mipmaps.length > 0) {
                     c.__webglFramebuffer[e] = [];
                     for (let n = 0; n < l.mipmaps.length; n++) c.__webglFramebuffer[e][n] = t.createFramebuffer()
                  } else c.__webglFramebuffer[e] = t.createFramebuffer()
            } else {
               if (o && l.mipmaps && l.mipmaps.length > 0) {
                  c.__webglFramebuffer = [];
                  for (let e = 0; e < l.mipmaps.length; e++) c.__webglFramebuffer[e] = t.createFramebuffer()
               } else c.__webglFramebuffer = t.createFramebuffer();
               if (d)
                  if (r.drawBuffers) {
                     const n = e.texture;
                     for (let e = 0, r = n.length; e < r; e++) {
                        const r = i.get(n[e]);
                        void 0 === r.__webglTexture && (r.__webglTexture = t.createTexture(), s.memory.textures++)
                     }
                  } else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
               if (o && e.samples > 0 && !1 === ut(e)) {
                  const i = d ? l : [l];
                  c.__webglMultisampledFramebuffer = t.createFramebuffer(), c.__webglColorRenderbuffer = [], n.bindFramebuffer(t.FRAMEBUFFER, c.__webglMultisampledFramebuffer);
                  for (let n = 0; n < i.length; n++) {
                     const r = i[n];
                     c.__webglColorRenderbuffer[n] = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, c.__webglColorRenderbuffer[n]);
                     const s = a.convert(r.format, r.colorSpace),
                        o = a.convert(r.type),
                        l = W(r.internalFormat, s, o, r.colorSpace, !0 === e.isXRRenderTarget),
                        h = ct(e);
                     t.renderbufferStorageMultisample(t.RENDERBUFFER, h, l, e.width, e.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + n, t.RENDERBUFFER, c.__webglColorRenderbuffer[n])
                  }
                  t.bindRenderbuffer(t.RENDERBUFFER, null), e.depthBuffer && (c.__webglDepthRenderbuffer = t.createRenderbuffer(), ot(c.__webglDepthRenderbuffer, e, !0)), n.bindFramebuffer(t.FRAMEBUFFER, null)
               }
            }
            if (u) {
               n.bindTexture(t.TEXTURE_CUBE_MAP, h.__webglTexture), et(t.TEXTURE_CUBE_MAP, l, p);
               for (let n = 0; n < 6; n++)
                  if (o && l.mipmaps && l.mipmaps.length > 0)
                     for (let i = 0; i < l.mipmaps.length; i++) st(c.__webglFramebuffer[n][i], e, l, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + n, i);
                  else st(c.__webglFramebuffer[n], e, l, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
               H(l, p) && V(t.TEXTURE_CUBE_MAP), n.unbindTexture()
            } else if (d) {
               const r = e.texture;
               for (let a = 0, s = r.length; a < s; a++) {
                  const s = r[a],
                     o = i.get(s);
                  n.bindTexture(t.TEXTURE_2D, o.__webglTexture), et(t.TEXTURE_2D, s, p), st(c.__webglFramebuffer, e, s, t.COLOR_ATTACHMENT0 + a, t.TEXTURE_2D, 0), H(s, p) && V(t.TEXTURE_2D)
               }
               n.unbindTexture()
            } else {
               let i = t.TEXTURE_2D;
               if ((e.isWebGL3DRenderTarget || e.isWebGLArrayRenderTarget) && (o ? i = e.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), n.bindTexture(i, h.__webglTexture), et(i, l, p), o && l.mipmaps && l.mipmaps.length > 0)
                  for (let n = 0; n < l.mipmaps.length; n++) st(c.__webglFramebuffer[n], e, l, t.COLOR_ATTACHMENT0, i, n);
               else st(c.__webglFramebuffer, e, l, t.COLOR_ATTACHMENT0, i, 0);
               H(l, p) && V(i), n.unbindTexture()
            }
            e.depthBuffer && lt(e)
         }, this.updateRenderTargetMipmap = function (e) {
            const r = F(e) || o,
               a = !0 === e.isWebGLMultipleRenderTargets ? e.texture : [e.texture];
            for (let s = 0, o = a.length; s < o; s++) {
               const o = a[s];
               if (H(o, r)) {
                  const r = e.isWebGLCubeRenderTarget ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
                     a = i.get(o).__webglTexture;
                  n.bindTexture(r, a), V(r), n.unbindTexture()
               }
            }
         }, this.updateMultisampleRenderTarget = function (e) {
            if (o && e.samples > 0 && !1 === ut(e)) {
               const r = e.isWebGLMultipleRenderTargets ? e.texture : [e.texture],
                  a = e.width,
                  s = e.height;
               let o = t.COLOR_BUFFER_BIT;
               const l = [],
                  c = e.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
                  h = i.get(e),
                  u = !0 === e.isWebGLMultipleRenderTargets;
               if (u)
                  for (let e = 0; e < r.length; e++) n.bindFramebuffer(t.FRAMEBUFFER, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.RENDERBUFFER, null), n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer), t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.TEXTURE_2D, null, 0);
               n.bindFramebuffer(t.READ_FRAMEBUFFER, h.__webglMultisampledFramebuffer), n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglFramebuffer);
               for (let n = 0; n < r.length; n++) {
                  l.push(t.COLOR_ATTACHMENT0 + n), e.depthBuffer && l.push(c);
                  const d = void 0 !== h.__ignoreDepthValues && h.__ignoreDepthValues;
                  if (!1 === d && (e.depthBuffer && (o |= t.DEPTH_BUFFER_BIT), e.stencilBuffer && (o |= t.STENCIL_BUFFER_BIT)), u && t.framebufferRenderbuffer(t.READ_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, h.__webglColorRenderbuffer[n]), !0 === d && (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [c]), t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [c])), u) {
                     const e = i.get(r[n]).__webglTexture;
                     t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, e, 0)
                  }
                  t.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, t.NEAREST), P && t.invalidateFramebuffer(t.READ_FRAMEBUFFER, l)
               }
               if (n.bindFramebuffer(t.READ_FRAMEBUFFER, null), n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), u)
                  for (let e = 0; e < r.length; e++) {
                     n.bindFramebuffer(t.FRAMEBUFFER, h.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.RENDERBUFFER, h.__webglColorRenderbuffer[e]);
                     const a = i.get(r[e]).__webglTexture;
                     n.bindFramebuffer(t.FRAMEBUFFER, h.__webglFramebuffer), t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0 + e, t.TEXTURE_2D, a, 0)
                  }
               n.bindFramebuffer(t.DRAW_FRAMEBUFFER, h.__webglMultisampledFramebuffer)
            }
         }, this.setupDepthRenderbuffer = lt, this.setupFrameBufferTexture = st, this.useMultisampledRTT = ut
      }

      function wa(t, e, n) {
         const i = n.isWebGL2;
         return {
            convert: function (n, r = "") {
               let a;
               if (n === g) return t.UNSIGNED_BYTE;
               if (1017 === n) return t.UNSIGNED_SHORT_4_4_4_4;
               if (1018 === n) return t.UNSIGNED_SHORT_5_5_5_1;
               if (1010 === n) return t.BYTE;
               if (1011 === n) return t.SHORT;
               if (n === _) return t.UNSIGNED_SHORT;
               if (n === v) return t.INT;
               if (n === x) return t.UNSIGNED_INT;
               if (n === y) return t.FLOAT;
               if (n === M) return i ? t.HALF_FLOAT : (a = e.get("OES_texture_half_float"), null !== a ? a.HALF_FLOAT_OES : null);
               if (1021 === n) return t.ALPHA;
               if (n === E) return t.RGBA;
               if (1024 === n) return t.LUMINANCE;
               if (1025 === n) return t.LUMINANCE_ALPHA;
               if (n === b) return t.DEPTH_COMPONENT;
               if (n === w) return t.DEPTH_STENCIL;
               if (n === X) return a = e.get("EXT_sRGB"), null !== a ? a.SRGB_ALPHA_EXT : null;
               if (1028 === n) return t.RED;
               if (1029 === n) return t.RED_INTEGER;
               if (1030 === n) return t.RG;
               if (1031 === n) return t.RG_INTEGER;
               if (1033 === n) return t.RGBA_INTEGER;
               if (n === T || n === A || n === R || n === C)
                  if (r === z) {
                     if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === a) return null;
                     if (n === T) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                     if (n === A) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                     if (n === R) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                     if (n === C) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                  } else {
                     if (a = e.get("WEBGL_compressed_texture_s3tc"), null === a) return null;
                     if (n === T) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                     if (n === A) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                     if (n === R) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                     if (n === C) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
                  } if (35840 === n || 35841 === n || 35842 === n || 35843 === n) {
                  if (a = e.get("WEBGL_compressed_texture_pvrtc"), null === a) return null;
                  if (35840 === n) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                  if (35841 === n) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                  if (35842 === n) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                  if (35843 === n) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
               }
               if (36196 === n) return a = e.get("WEBGL_compressed_texture_etc1"), null !== a ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
               if (37492 === n || 37496 === n) {
                  if (a = e.get("WEBGL_compressed_texture_etc"), null === a) return null;
                  if (37492 === n) return r === z ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                  if (37496 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC
               }
               if (37808 === n || 37809 === n || 37810 === n || 37811 === n || 37812 === n || 37813 === n || 37814 === n || 37815 === n || 37816 === n || 37817 === n || 37818 === n || 37819 === n || 37820 === n || 37821 === n) {
                  if (a = e.get("WEBGL_compressed_texture_astc"), null === a) return null;
                  if (37808 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                  if (37809 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                  if (37810 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                  if (37811 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                  if (37812 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                  if (37813 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                  if (37814 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                  if (37815 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                  if (37816 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                  if (37817 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                  if (37818 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                  if (37819 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                  if (37820 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                  if (37821 === n) return r === z ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
               }
               if (n === P) {
                  if (a = e.get("EXT_texture_compression_bptc"), null === a) return null;
                  if (n === P) return r === z ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT
               }
               if (36283 === n || 36284 === n || 36285 === n || 36286 === n) {
                  if (a = e.get("EXT_texture_compression_rgtc"), null === a) return null;
                  if (n === P) return a.COMPRESSED_RED_RGTC1_EXT;
                  if (36284 === n) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                  if (36285 === n) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
                  if (36286 === n) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
               }
               return n === S ? i ? t.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), null !== a ? a.UNSIGNED_INT_24_8_WEBGL : null) : void 0 !== t[n] ? t[n] : null
            }
         }
      }
      class Ta extends Wn {
         constructor(t = []) {
            super(), this.isArrayCamera = !0, this.cameras = t
         }
      }
      class Aa extends Ie {
         constructor() {
            super(), this.isGroup = !0, this.type = "Group"
         }
      }
      const Ra = {
         type: "move"
      };
      class Ca {
         constructor() {
            this._targetRay = null, this._grip = null, this._hand = null
         }
         getHandSpace() {
            return null === this._hand && (this._hand = new Aa, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
               pinching: !1
            }), this._hand
         }
         getTargetRaySpace() {
            return null === this._targetRay && (this._targetRay = new Aa, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Dt, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Dt), this._targetRay
         }
         getGripSpace() {
            return null === this._grip && (this._grip = new Aa, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Dt, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Dt), this._grip
         }
         dispatchEvent(t) {
            return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
         }
         connect(t) {
            if (t && t.hand) {
               const e = this._hand;
               if (e)
                  for (const n of t.hand.values()) this._getHandJoint(e, n)
            }
            return this.dispatchEvent({
               type: "connected",
               data: t
            }), this
         }
         disconnect(t) {
            return this.dispatchEvent({
               type: "disconnected",
               data: t
            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
         }
         update(t, e, n) {
            let i = null,
               r = null,
               a = null;
            const s = this._targetRay,
               o = this._grip,
               l = this._hand;
            if (t && "visible-blurred" !== e.session.visibilityState) {
               if (l && t.hand) {
                  a = !0;
                  for (const i of t.hand.values()) {
                     const t = e.getJointPose(i, n),
                        r = this._getHandJoint(l, i);
                     null !== t && (r.matrix.fromArray(t.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.matrixWorldNeedsUpdate = !0, r.jointRadius = t.radius), r.visible = null !== t
                  }
                  const i = l.joints["index-finger-tip"],
                     r = l.joints["thumb-tip"],
                     s = i.position.distanceTo(r.position),
                     o = .02,
                     c = .005;
                  l.inputState.pinching && s > o + c ? (l.inputState.pinching = !1, this.dispatchEvent({
                     type: "pinchend",
                     handedness: t.handedness,
                     target: this
                  })) : !l.inputState.pinching && s <= o - c && (l.inputState.pinching = !0, this.dispatchEvent({
                     type: "pinchstart",
                     handedness: t.handedness,
                     target: this
                  }))
               } else null !== o && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1));
               null !== s && (i = e.getPose(t.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(Ra)))
            }
            return null !== s && (s.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== a), this
         }
         _getHandJoint(t, e) {
            if (void 0 === t.joints[e.jointName]) {
               const n = new Aa;
               n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n)
            }
            return t.joints[e.jointName]
         }
      }
      class Pa extends Tt {
         constructor(t, e, n, i, r, a, s, o, l, c) {
            if ((c = void 0 !== c ? c : b) !== b && c !== w) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
            void 0 === n && c === b && (n = x), void 0 === n && c === w && (n = S), super(null, i, r, a, s, o, c, n, l), this.isDepthTexture = !0, this.image = {
               width: t,
               height: e
            }, this.magFilter = void 0 !== s ? s : u, this.minFilter = void 0 !== o ? o : u, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null
         }
         copy(t) {
            return super.copy(t), this.compareFunction = t.compareFunction, this
         }
         toJSON(t) {
            const e = super.toJSON(t);
            return null !== this.compareFunction && (e.compareFunction = this.compareFunction), e
         }
      }
      class La extends Y {
         constructor(t, e) {
            super();
            const n = this;
            let i = null,
               r = 1,
               a = null,
               s = "local-floor",
               o = 1,
               l = null,
               c = null,
               h = null,
               u = null,
               d = null,
               p = null;
            const f = e.getContextAttributes();
            let m = null,
               _ = null;
            const v = [],
               y = [],
               M = new Wn;
            M.layers.enable(1), M.viewport = new At;
            const T = new Wn;
            T.layers.enable(2), T.viewport = new At;
            const A = [M, T],
               R = new Ta;
            R.layers.enable(1), R.layers.enable(2);
            let C = null,
               P = null;

            function L(t) {
               const e = y.indexOf(t.inputSource);
               if (-1 === e) return;
               const n = v[e];
               void 0 !== n && (n.update(t.inputSource, t.frame, l || a), n.dispatchEvent({
                  type: t.type,
                  data: t.inputSource
               }))
            }

            function U() {
               i.removeEventListener("select", L), i.removeEventListener("selectstart", L), i.removeEventListener("selectend", L), i.removeEventListener("squeeze", L), i.removeEventListener("squeezestart", L), i.removeEventListener("squeezeend", L), i.removeEventListener("end", U), i.removeEventListener("inputsourceschange", D);
               for (let t = 0; t < v.length; t++) {
                  const e = y[t];
                  null !== e && (y[t] = null, v[t].disconnect(e))
               }
               C = null, P = null, t.setRenderTarget(m), d = null, u = null, h = null, i = null, _ = null, k.stop(), n.isPresenting = !1, n.dispatchEvent({
                  type: "sessionend"
               })
            }

            function D(t) {
               for (let e = 0; e < t.removed.length; e++) {
                  const n = t.removed[e],
                     i = y.indexOf(n);
                  i >= 0 && (y[i] = null, v[i].disconnect(n))
               }
               for (let e = 0; e < t.added.length; e++) {
                  const n = t.added[e];
                  let i = y.indexOf(n);
                  if (-1 === i) {
                     for (let t = 0; t < v.length; t++) {
                        if (t >= y.length) {
                           y.push(n), i = t;
                           break
                        }
                        if (null === y[t]) {
                           y[t] = n, i = t;
                           break
                        }
                     }
                     if (-1 === i) break
                  }
                  const r = v[i];
                  r && r.connect(n)
               }
            }
            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (t) {
               let e = v[t];
               return void 0 === e && (e = new Ca, v[t] = e), e.getTargetRaySpace()
            }, this.getControllerGrip = function (t) {
               let e = v[t];
               return void 0 === e && (e = new Ca, v[t] = e), e.getGripSpace()
            }, this.getHand = function (t) {
               let e = v[t];
               return void 0 === e && (e = new Ca, v[t] = e), e.getHandSpace()
            }, this.setFramebufferScaleFactor = function (t) {
               r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
            }, this.setReferenceSpaceType = function (t) {
               s = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
            }, this.getReferenceSpace = function () {
               return l || a
            }, this.setReferenceSpace = function (t) {
               l = t
            }, this.getBaseLayer = function () {
               return null !== u ? u : d
            }, this.getBinding = function () {
               return h
            }, this.getFrame = function () {
               return p
            }, this.getSession = function () {
               return i
            }, this.setSession = async function (c) {
               if (i = c, null !== i) {
                  if (m = t.getRenderTarget(), i.addEventListener("select", L), i.addEventListener("selectstart", L), i.addEventListener("selectend", L), i.addEventListener("squeeze", L), i.addEventListener("squeezestart", L), i.addEventListener("squeezeend", L), i.addEventListener("end", U), i.addEventListener("inputsourceschange", D), !0 !== f.xrCompatible && await e.makeXRCompatible(), void 0 === i.renderState.layers || !1 === t.capabilities.isWebGL2) {
                     const n = {
                        antialias: void 0 !== i.renderState.layers || f.antialias,
                        alpha: !0,
                        depth: f.depth,
                        stencil: f.stencil,
                        framebufferScaleFactor: r
                     };
                     d = new XRWebGLLayer(i, e, n), i.updateRenderState({
                        baseLayer: d
                     }), _ = new Ct(d.framebufferWidth, d.framebufferHeight, {
                        format: E,
                        type: g,
                        colorSpace: t.outputColorSpace,
                        stencilBuffer: f.stencil
                     })
                  } else {
                     let n = null,
                        a = null,
                        s = null;
                     f.depth && (s = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, n = f.stencil ? w : b, a = f.stencil ? S : x);
                     const o = {
                        colorFormat: e.RGBA8,
                        depthFormat: s,
                        scaleFactor: r
                     };
                     h = new XRWebGLBinding(i, e), u = h.createProjectionLayer(o), i.updateRenderState({
                        layers: [u]
                     }), _ = new Ct(u.textureWidth, u.textureHeight, {
                        format: E,
                        type: g,
                        depthTexture: new Pa(u.textureWidth, u.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
                        stencilBuffer: f.stencil,
                        colorSpace: t.outputColorSpace,
                        samples: f.antialias ? 4 : 0
                     });
                     t.properties.get(_).__ignoreDepthValues = u.ignoreDepthValues
                  }
                  _.isXRRenderTarget = !0, this.setFoveation(o), l = null, a = await i.requestReferenceSpace(s), k.setContext(i), k.start(), n.isPresenting = !0, n.dispatchEvent({
                     type: "sessionstart"
                  })
               }
            }, this.getEnvironmentBlendMode = function () {
               if (null !== i) return i.environmentBlendMode
            };
            const I = new Dt,
               N = new Dt;

            function O(t, e) {
               null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
            }
            this.updateCamera = function (t) {
               if (null === i) return;
               R.near = T.near = M.near = t.near, R.far = T.far = M.far = t.far, C === R.near && P === R.far || (i.updateRenderState({
                  depthNear: R.near,
                  depthFar: R.far
               }), C = R.near, P = R.far);
               const e = t.parent,
                  n = R.cameras;
               O(R, e);
               for (let t = 0; t < n.length; t++) O(n[t], e);
               2 === n.length ? function (t, e, n) {
                     I.setFromMatrixPosition(e.matrixWorld), N.setFromMatrixPosition(n.matrixWorld);
                     const i = I.distanceTo(N),
                        r = e.projectionMatrix.elements,
                        a = n.projectionMatrix.elements,
                        s = r[14] / (r[10] - 1),
                        o = r[14] / (r[10] + 1),
                        l = (r[9] + 1) / r[5],
                        c = (r[9] - 1) / r[5],
                        h = (r[8] - 1) / r[0],
                        u = (a[8] + 1) / a[0],
                        d = s * h,
                        p = s * u,
                        f = i / (-h + u),
                        m = f * -h;
                     e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
                     const g = s + f,
                        _ = o + f,
                        v = d - m,
                        x = p + (i - m),
                        y = l * o / _ * g,
                        M = c * o / _ * g;
                     t.projectionMatrix.makePerspective(v, x, y, M, g, _), t.projectionMatrixInverse.copy(t.projectionMatrix).invert()
                  }(R, M, T) : R.projectionMatrix.copy(M.projectionMatrix),
                  function (t, e, n) {
                     null === n ? t.matrix.copy(e.matrixWorld) : (t.matrix.copy(n.matrixWorld), t.matrix.invert(), t.matrix.multiply(e.matrixWorld));
                     t.matrix.decompose(t.position, t.quaternion, t.scale), t.updateMatrixWorld(!0);
                     const i = t.children;
                     for (let t = 0, e = i.length; t < e; t++) i[t].updateMatrixWorld(!0);
                     t.projectionMatrix.copy(e.projectionMatrix), t.projectionMatrixInverse.copy(e.projectionMatrixInverse), t.isPerspectiveCamera && (t.fov = 2 * J * Math.atan(1 / t.projectionMatrix.elements[5]), t.zoom = 1)
                  }(t, R, e)
            }, this.getCamera = function () {
               return R
            }, this.getFoveation = function () {
               if (null !== u || null !== d) return o
            }, this.setFoveation = function (t) {
               o = t, null !== u && (u.fixedFoveation = t), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = t)
            };
            let F = null;
            const k = new ei;
            k.setAnimationLoop((function (e, i) {
               if (c = i.getViewerPose(l || a), p = i, null !== c) {
                  const e = c.views;
                  null !== d && (t.setRenderTargetFramebuffer(_, d.framebuffer), t.setRenderTarget(_));
                  let n = !1;
                  e.length !== R.cameras.length && (R.cameras.length = 0, n = !0);
                  for (let i = 0; i < e.length; i++) {
                     const r = e[i];
                     let a = null;
                     if (null !== d) a = d.getViewport(r);
                     else {
                        const e = h.getViewSubImage(u, r);
                        a = e.viewport, 0 === i && (t.setRenderTargetTextures(_, e.colorTexture, u.ignoreDepthValues ? void 0 : e.depthStencilTexture), t.setRenderTarget(_))
                     }
                     let s = A[i];
                     void 0 === s && (s = new Wn, s.layers.enable(i), s.viewport = new At, A[i] = s), s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.quaternion, s.scale), s.projectionMatrix.fromArray(r.projectionMatrix), s.projectionMatrixInverse.copy(s.projectionMatrix).invert(), s.viewport.set(a.x, a.y, a.width, a.height), 0 === i && (R.matrix.copy(s.matrix), R.matrix.decompose(R.position, R.quaternion, R.scale)), !0 === n && R.cameras.push(s)
                  }
               }
               for (let t = 0; t < v.length; t++) {
                  const e = y[t],
                     n = v[t];
                  null !== e && void 0 !== n && n.update(e, i, l || a)
               }
               F && F(e, i), i.detectedPlanes && n.dispatchEvent({
                  type: "planesdetected",
                  data: i
               }), p = null
            })), this.setAnimationLoop = function (t) {
               F = t
            }, this.dispose = function () {}
         }
      }

      function Ua(t, e) {
         function n(t, e) {
            !0 === t.matrixAutoUpdate && t.updateMatrix(), e.value.copy(t.matrix)
         }

         function i(i, r) {
            i.opacity.value = r.opacity, r.color && i.diffuse.value.copy(r.color), r.emissive && i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (i.map.value = r.map, n(r.map, i.mapTransform)), r.alphaMap && (i.alphaMap.value = r.alphaMap, n(r.alphaMap, i.alphaMapTransform)), r.bumpMap && (i.bumpMap.value = r.bumpMap, n(r.bumpMap, i.bumpMapTransform), i.bumpScale.value = r.bumpScale, 1 === r.side && (i.bumpScale.value *= -1)), r.normalMap && (i.normalMap.value = r.normalMap, n(r.normalMap, i.normalMapTransform), i.normalScale.value.copy(r.normalScale), 1 === r.side && i.normalScale.value.negate()), r.displacementMap && (i.displacementMap.value = r.displacementMap, n(r.displacementMap, i.displacementMapTransform), i.displacementScale.value = r.displacementScale, i.displacementBias.value = r.displacementBias), r.emissiveMap && (i.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, i.emissiveMapTransform)), r.specularMap && (i.specularMap.value = r.specularMap, n(r.specularMap, i.specularMapTransform)), r.alphaTest > 0 && (i.alphaTest.value = r.alphaTest);
            const a = e.get(r).envMap;
            if (a && (i.envMap.value = a, i.flipEnvMap.value = a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1, i.reflectivity.value = r.reflectivity, i.ior.value = r.ior, i.refractionRatio.value = r.refractionRatio), r.lightMap) {
               i.lightMap.value = r.lightMap;
               const e = !0 === t._useLegacyLights ? Math.PI : 1;
               i.lightMapIntensity.value = r.lightMapIntensity * e, n(r.lightMap, i.lightMapTransform)
            }
            r.aoMap && (i.aoMap.value = r.aoMap, i.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, i.aoMapTransform))
         }
         return {
            refreshFogUniforms: function (e, n) {
               n.color.getRGB(e.fogColor.value, zn(t)), n.isFog ? (e.fogNear.value = n.near, e.fogFar.value = n.far) : n.isFogExp2 && (e.fogDensity.value = n.density)
            },
            refreshMaterialUniforms: function (t, r, a, s, o) {
               r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t, r) : r.isMeshToonMaterial ? (i(t, r), function (t, e) {
                  e.gradientMap && (t.gradientMap.value = e.gradientMap)
               }(t, r)) : r.isMeshPhongMaterial ? (i(t, r), function (t, e) {
                  t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4)
               }(t, r)) : r.isMeshStandardMaterial ? (i(t, r), function (t, i) {
                  t.metalness.value = i.metalness, i.metalnessMap && (t.metalnessMap.value = i.metalnessMap, n(i.metalnessMap, t.metalnessMapTransform));
                  t.roughness.value = i.roughness, i.roughnessMap && (t.roughnessMap.value = i.roughnessMap, n(i.roughnessMap, t.roughnessMapTransform));
                  const r = e.get(i).envMap;
                  r && (t.envMapIntensity.value = i.envMapIntensity)
               }(t, r), r.isMeshPhysicalMaterial && function (t, e, i) {
                  t.ior.value = e.ior, e.sheen > 0 && (t.sheenColor.value.copy(e.sheenColor).multiplyScalar(e.sheen), t.sheenRoughness.value = e.sheenRoughness, e.sheenColorMap && (t.sheenColorMap.value = e.sheenColorMap, n(e.sheenColorMap, t.sheenColorMapTransform)), e.sheenRoughnessMap && (t.sheenRoughnessMap.value = e.sheenRoughnessMap, n(e.sheenRoughnessMap, t.sheenRoughnessMapTransform)));
                  e.clearcoat > 0 && (t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap, n(e.clearcoatMap, t.clearcoatMapTransform)), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap, n(e.clearcoatRoughnessMap, t.clearcoatRoughnessMapTransform)), e.clearcoatNormalMap && (t.clearcoatNormalMap.value = e.clearcoatNormalMap, n(e.clearcoatNormalMap, t.clearcoatNormalMapTransform), t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), 1 === e.side && t.clearcoatNormalScale.value.negate()));
                  e.iridescence > 0 && (t.iridescence.value = e.iridescence, t.iridescenceIOR.value = e.iridescenceIOR, t.iridescenceThicknessMinimum.value = e.iridescenceThicknessRange[0], t.iridescenceThicknessMaximum.value = e.iridescenceThicknessRange[1], e.iridescenceMap && (t.iridescenceMap.value = e.iridescenceMap, n(e.iridescenceMap, t.iridescenceMapTransform)), e.iridescenceThicknessMap && (t.iridescenceThicknessMap.value = e.iridescenceThicknessMap, n(e.iridescenceThicknessMap, t.iridescenceThicknessMapTransform)));
                  e.transmission > 0 && (t.transmission.value = e.transmission, t.transmissionSamplerMap.value = i.texture, t.transmissionSamplerSize.value.set(i.width, i.height), e.transmissionMap && (t.transmissionMap.value = e.transmissionMap, n(e.transmissionMap, t.transmissionMapTransform)), t.thickness.value = e.thickness, e.thicknessMap && (t.thicknessMap.value = e.thicknessMap, n(e.thicknessMap, t.thicknessMapTransform)), t.attenuationDistance.value = e.attenuationDistance, t.attenuationColor.value.copy(e.attenuationColor));
                  e.anisotropy > 0 && (t.anisotropyVector.value.set(e.anisotropy * Math.cos(e.anisotropyRotation), e.anisotropy * Math.sin(e.anisotropyRotation)), e.anisotropyMap && (t.anisotropyMap.value = e.anisotropyMap, n(e.anisotropyMap, t.anisotropyMapTransform)));
                  t.specularIntensity.value = e.specularIntensity, t.specularColor.value.copy(e.specularColor), e.specularColorMap && (t.specularColorMap.value = e.specularColorMap, n(e.specularColorMap, t.specularColorMapTransform));
                  e.specularIntensityMap && (t.specularIntensityMap.value = e.specularIntensityMap, n(e.specularIntensityMap, t.specularIntensityMapTransform))
               }(t, r, o)) : r.isMeshMatcapMaterial ? (i(t, r), function (t, e) {
                  e.matcap && (t.matcap.value = e.matcap)
               }(t, r)) : r.isMeshDepthMaterial ? i(t, r) : r.isMeshDistanceMaterial ? (i(t, r), function (t, n) {
                  const i = e.get(n).light;
                  t.referencePosition.value.setFromMatrixPosition(i.matrixWorld), t.nearDistance.value = i.shadow.camera.near, t.farDistance.value = i.shadow.camera.far
               }(t, r)) : r.isMeshNormalMaterial ? i(t, r) : r.isLineBasicMaterial ? (function (t, e) {
                  t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, e.map && (t.map.value = e.map, n(e.map, t.mapTransform))
               }(t, r), r.isLineDashedMaterial && function (t, e) {
                  t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
               }(t, r)) : r.isPointsMaterial ? function (t, e, i, r) {
                  t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * i, t.scale.value = .5 * r, e.map && (t.map.value = e.map, n(e.map, t.uvTransform));
                  e.alphaMap && (t.alphaMap.value = e.alphaMap, n(e.alphaMap, t.alphaMapTransform));
                  e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest)
               }(t, r, a, s) : r.isSpriteMaterial ? function (t, e) {
                  t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map, n(e.map, t.mapTransform));
                  e.alphaMap && (t.alphaMap.value = e.alphaMap, n(e.alphaMap, t.alphaMapTransform));
                  e.alphaTest > 0 && (t.alphaTest.value = e.alphaTest)
               }(t, r) : r.isShadowMaterial ? (t.color.value.copy(r.color), t.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1)
            }
         }
      }

      function Da(t, e, n, i) {
         let r = {},
            a = {},
            s = [];
         const o = n.isWebGL2 ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS) : 0;

         function l(t, e, n) {
            const i = t.value;
            if (void 0 === n[e]) {
               if ("number" == typeof i) n[e] = i;
               else {
                  const t = Array.isArray(i) ? i : [i],
                     r = [];
                  for (let e = 0; e < t.length; e++) r.push(t[e].clone());
                  n[e] = r
               }
               return !0
            }
            if ("number" == typeof i) {
               if (n[e] !== i) return n[e] = i, !0
            } else {
               const t = Array.isArray(n[e]) ? n[e] : [n[e]],
                  r = Array.isArray(i) ? i : [i];
               for (let e = 0; e < t.length; e++) {
                  const n = t[e];
                  if (!1 === n.equals(r[e])) return n.copy(r[e]), !0
               }
            }
            return !1
         }

         function c(t) {
            const e = {
               boundary: 0,
               storage: 0
            };
            return "number" == typeof t ? (e.boundary = 4, e.storage = 4) : t.isVector2 ? (e.boundary = 8, e.storage = 8) : t.isVector3 || t.isColor ? (e.boundary = 16, e.storage = 12) : t.isVector4 ? (e.boundary = 16, e.storage = 16) : t.isMatrix3 ? (e.boundary = 48, e.storage = 48) : t.isMatrix4 ? (e.boundary = 64, e.storage = 64) : t.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t), e
         }

         function h(e) {
            const n = e.target;
            n.removeEventListener("dispose", h);
            const i = s.indexOf(n.__bindingPointIndex);
            s.splice(i, 1), t.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id]
         }
         return {
            bind: function (t, e) {
               const n = e.program;
               i.uniformBlockBinding(t, n)
            },
            update: function (n, u) {
               let d = r[n.id];
               void 0 === d && (! function (t) {
                  const e = t.uniforms;
                  let n = 0;
                  const i = 16;
                  let r = 0;
                  for (let t = 0, a = e.length; t < a; t++) {
                     const a = e[t],
                        s = {
                           boundary: 0,
                           storage: 0
                        },
                        o = Array.isArray(a.value) ? a.value : [a.value];
                     for (let t = 0, e = o.length; t < e; t++) {
                        const e = c(o[t]);
                        s.boundary += e.boundary, s.storage += e.storage
                     }
                     if (a.__data = new Float32Array(s.storage / Float32Array.BYTES_PER_ELEMENT), a.__offset = n, t > 0) {
                        r = n % i;
                        0 !== r && i - r - s.boundary < 0 && (n += i - r, a.__offset = n)
                     }
                     n += s.storage
                  }
                  r = n % i, r > 0 && (n += i - r);
                  t.__size = n, t.__cache = {}
               }(n), d = function (e) {
                  const n = function () {
                     for (let t = 0; t < o; t++)
                        if (-1 === s.indexOf(t)) return s.push(t), t;
                     return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
                  }();
                  e.__bindingPointIndex = n;
                  const i = t.createBuffer(),
                     r = e.__size,
                     a = e.usage;
                  return t.bindBuffer(t.UNIFORM_BUFFER, i), t.bufferData(t.UNIFORM_BUFFER, r, a), t.bindBuffer(t.UNIFORM_BUFFER, null), t.bindBufferBase(t.UNIFORM_BUFFER, n, i), i
               }(n), r[n.id] = d, n.addEventListener("dispose", h));
               const p = u.program;
               i.updateUBOMapping(n, p);
               const f = e.render.frame;
               a[n.id] !== f && (! function (e) {
                  const n = r[e.id],
                     i = e.uniforms,
                     a = e.__cache;
                  t.bindBuffer(t.UNIFORM_BUFFER, n);
                  for (let e = 0, n = i.length; e < n; e++) {
                     const n = i[e];
                     if (!0 === l(n, e, a)) {
                        const e = n.__offset,
                           i = Array.isArray(n.value) ? n.value : [n.value];
                        let r = 0;
                        for (let a = 0; a < i.length; a++) {
                           const s = i[a],
                              o = c(s);
                           "number" == typeof s ? (n.__data[0] = s, t.bufferSubData(t.UNIFORM_BUFFER, e + r, n.__data)) : s.isMatrix3 ? (n.__data[0] = s.elements[0], n.__data[1] = s.elements[1], n.__data[2] = s.elements[2], n.__data[3] = s.elements[0], n.__data[4] = s.elements[3], n.__data[5] = s.elements[4], n.__data[6] = s.elements[5], n.__data[7] = s.elements[0], n.__data[8] = s.elements[6], n.__data[9] = s.elements[7], n.__data[10] = s.elements[8], n.__data[11] = s.elements[0]) : (s.toArray(n.__data, r), r += o.storage / Float32Array.BYTES_PER_ELEMENT)
                        }
                        t.bufferSubData(t.UNIFORM_BUFFER, e, n.__data)
                     }
                  }
                  t.bindBuffer(t.UNIFORM_BUFFER, null)
               }(n), a[n.id] = f)
            },
            dispose: function () {
               for (const e in r) t.deleteBuffer(r[e]);
               s = [], r = {}, a = {}
            }
         }
      }

      function Ia() {
         const t = ht("canvas");
         return t.style.display = "block", t
      }
      class Na {
         constructor(e = {}) {
            const {
               canvas: n = Ia(),
               context: i = null,
               depth: r = !0,
               stencil: a = !0,
               alpha: s = !1,
               antialias: o = !1,
               premultipliedAlpha: l = !0,
               preserveDrawingBuffer: c = !1,
               powerPreference: h = "default",
               failIfMajorPerformanceCaveat: u = !1
            } = e;
            let d;
            this.isWebGLRenderer = !0, d = null !== i ? i.getContextAttributes().alpha : s;
            const p = new Uint32Array(4),
               f = new Int32Array(4);
            let v = null,
               b = null;
            const w = [],
               T = [];
            this.domElement = n, this.debug = {
               checkShaderErrors: !0,
               onShaderError: null
            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = z, this._useLegacyLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
            const A = this;
            let R = !1,
               C = 0,
               P = 0,
               L = null,
               U = -1,
               D = null;
            const I = new At,
               N = new At;
            let O = null;
            const F = new $e(0);
            let k = 0,
               H = n.width,
               V = n.height,
               W = 1,
               G = null,
               X = null;
            const j = new At(0, 0, H, V),
               q = new At(0, 0, H, V);
            let Y = !1;
            const Z = new ti;
            let K = !1,
               J = !1,
               Q = null;
            const $ = new ce,
               tt = new st,
               et = new Dt,
               nt = {
                  background: null,
                  fog: null,
                  environment: null,
                  overrideMaterial: null,
                  isScene: !0
               };

            function rt() {
               return null === L ? W : 1
            }
            let at, ot, lt, ct, ht, ut, dt, pt, ft, mt, gt, _t, vt, xt, yt, Mt, St, Et, bt, wt, Tt, Rt, Pt, Lt, Ut = i;

            function It(t, e) {
               for (let i = 0; i < t.length; i++) {
                  const r = t[i],
                     a = n.getContext(r, e);
                  if (null !== a) return a
               }
               return null
            }
            try {
               const e = {
                  alpha: !0,
                  depth: r,
                  stencil: a,
                  antialias: o,
                  premultipliedAlpha: l,
                  preserveDrawingBuffer: c,
                  powerPreference: h,
                  failIfMajorPerformanceCaveat: u
               };
               if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${t}`), n.addEventListener("webglcontextlost", Ft, !1), n.addEventListener("webglcontextrestored", kt, !1), n.addEventListener("webglcontextcreationerror", zt, !1), null === Ut) {
                  const t = ["webgl2", "webgl", "experimental-webgl"];
                  if (!0 === A.isWebGL1Renderer && t.shift(), Ut = It(t, e), null === Ut) throw It(t) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
               }
               "undefined" != typeof WebGLRenderingContext && Ut instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), void 0 === Ut.getShaderPrecisionFormat && (Ut.getShaderPrecisionFormat = function () {
                  return {
                     rangeMin: 1,
                     rangeMax: 1,
                     precision: 1
                  }
               })
            } catch (t) {
               throw console.error("THREE.WebGLRenderer: " + t.message), t
            }

            function Nt() {
               at = new Pi(Ut), ot = new ui(Ut, at, e), at.init(ot), Rt = new wa(Ut, at, ot), lt = new Ea(Ut, at, ot), ct = new Di(Ut), ht = new ca, ut = new ba(Ut, at, lt, ht, ot, Rt, ct), dt = new pi(A), pt = new Ci(A), ft = new ni(Ut, ot), Pt = new ci(Ut, at, ft, ot), mt = new Li(Ut, ft, ct, Pt), gt = new Fi(Ut, mt, ft, ct), bt = new Oi(Ut, ot, ut), Mt = new di(ht), _t = new la(A, dt, pt, at, ot, Pt, Mt), vt = new Ua(A, ht), xt = new pa, yt = new xa(at, ot), Et = new li(A, dt, pt, lt, gt, d, l), St = new Sa(A, gt, ot), Lt = new Da(Ut, ct, ot, lt), wt = new hi(Ut, at, ct, ot), Tt = new Ui(Ut, at, ct, ot), ct.programs = _t.programs, A.capabilities = ot, A.extensions = at, A.properties = ht, A.renderLists = xt, A.shadowMap = St, A.state = lt, A.info = ct
            }
            Nt();
            const Ot = new La(A, Ut);

            function Ft(t) {
               t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), R = !0
            }

            function kt() {
               console.log("THREE.WebGLRenderer: Context Restored."), R = !1;
               const t = ct.autoReset,
                  e = St.enabled,
                  n = St.autoUpdate,
                  i = St.needsUpdate,
                  r = St.type;
               Nt(), ct.autoReset = t, St.enabled = e, St.autoUpdate = n, St.needsUpdate = i, St.type = r
            }

            function zt(t) {
               console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t.statusMessage)
            }

            function Bt(t) {
               const e = t.target;
               e.removeEventListener("dispose", Bt),
                  function (t) {
                     (function (t) {
                        const e = ht.get(t).programs;
                        void 0 !== e && (e.forEach((function (t) {
                           _t.releaseProgram(t)
                        })), t.isShaderMaterial && _t.releaseShaderCache(t))
                     })(t), ht.remove(t)
                  }(e)
            }
            this.xr = Ot, this.getContext = function () {
               return Ut
            }, this.getContextAttributes = function () {
               return Ut.getContextAttributes()
            }, this.forceContextLoss = function () {
               const t = at.get("WEBGL_lose_context");
               t && t.loseContext()
            }, this.forceContextRestore = function () {
               const t = at.get("WEBGL_lose_context");
               t && t.restoreContext()
            }, this.getPixelRatio = function () {
               return W
            }, this.setPixelRatio = function (t) {
               void 0 !== t && (W = t, this.setSize(H, V, !1))
            }, this.getSize = function (t) {
               return t.set(H, V)
            }, this.setSize = function (t, e, i = !0) {
               Ot.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (H = t, V = e, n.width = Math.floor(t * W), n.height = Math.floor(e * W), !0 === i && (n.style.width = t + "px", n.style.height = e + "px"), this.setViewport(0, 0, t, e))
            }, this.getDrawingBufferSize = function (t) {
               return t.set(H * W, V * W).floor()
            }, this.setDrawingBufferSize = function (t, e, i) {
               H = t, V = e, W = i, n.width = Math.floor(t * i), n.height = Math.floor(e * i), this.setViewport(0, 0, t, e)
            }, this.getCurrentViewport = function (t) {
               return t.copy(I)
            }, this.getViewport = function (t) {
               return t.copy(j)
            }, this.setViewport = function (t, e, n, i) {
               t.isVector4 ? j.set(t.x, t.y, t.z, t.w) : j.set(t, e, n, i), lt.viewport(I.copy(j).multiplyScalar(W).floor())
            }, this.getScissor = function (t) {
               return t.copy(q)
            }, this.setScissor = function (t, e, n, i) {
               t.isVector4 ? q.set(t.x, t.y, t.z, t.w) : q.set(t, e, n, i), lt.scissor(N.copy(q).multiplyScalar(W).floor())
            }, this.getScissorTest = function () {
               return Y
            }, this.setScissorTest = function (t) {
               lt.setScissorTest(Y = t)
            }, this.setOpaqueSort = function (t) {
               G = t
            }, this.setTransparentSort = function (t) {
               X = t
            }, this.getClearColor = function (t) {
               return t.copy(Et.getClearColor())
            }, this.setClearColor = function () {
               Et.setClearColor.apply(Et, arguments)
            }, this.getClearAlpha = function () {
               return Et.getClearAlpha()
            }, this.setClearAlpha = function () {
               Et.setClearAlpha.apply(Et, arguments)
            }, this.clear = function (t = !0, e = !0, n = !0) {
               let i = 0;
               if (t) {
                  let t = !1;
                  if (null !== L) {
                     const e = L.texture.format;
                     t = 1033 === e || 1031 === e || 1029 === e
                  }
                  if (t) {
                     const t = L.texture.type,
                        e = t === g || t === x || t === _ || t === S || 1017 === t || 1018 === t,
                        n = Et.getClearColor(),
                        i = Et.getClearAlpha(),
                        r = n.r,
                        a = n.g,
                        s = n.b;
                     e ? (p[0] = r, p[1] = a, p[2] = s, p[3] = i, Ut.clearBufferuiv(Ut.COLOR, 0, p)) : (f[0] = r, f[1] = a, f[2] = s, f[3] = i, Ut.clearBufferiv(Ut.COLOR, 0, f))
                  } else i |= Ut.COLOR_BUFFER_BIT
               }
               e && (i |= Ut.DEPTH_BUFFER_BIT), n && (i |= Ut.STENCIL_BUFFER_BIT), Ut.clear(i)
            }, this.clearColor = function () {
               this.clear(!0, !1, !1)
            }, this.clearDepth = function () {
               this.clear(!1, !0, !1)
            }, this.clearStencil = function () {
               this.clear(!1, !1, !0)
            }, this.dispose = function () {
               n.removeEventListener("webglcontextlost", Ft, !1), n.removeEventListener("webglcontextrestored", kt, !1), n.removeEventListener("webglcontextcreationerror", zt, !1), xt.dispose(), yt.dispose(), ht.dispose(), dt.dispose(), pt.dispose(), gt.dispose(), Pt.dispose(), Lt.dispose(), _t.dispose(), Ot.dispose(), Ot.removeEventListener("sessionstart", Vt), Ot.removeEventListener("sessionend", Wt), Q && (Q.dispose(), Q = null), Gt.stop()
            }, this.renderBufferDirect = function (t, e, n, i, r, a) {
               null === e && (e = nt);
               const s = r.isMesh && r.matrixWorld.determinant() < 0,
                  o = function (t, e, n, i, r) {
                     !0 !== e.isScene && (e = nt);
                     ut.resetTextureUnits();
                     const a = e.fog,
                        s = i.isMeshStandardMaterial ? e.environment : null,
                        o = null === L ? A.outputColorSpace : !0 === L.isXRRenderTarget ? L.texture.colorSpace : B,
                        l = (i.isMeshStandardMaterial ? pt : dt).get(i.envMap || s),
                        c = !0 === i.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
                        h = !!n.attributes.tangent && (!!i.normalMap || i.anisotropy > 0),
                        u = !!n.morphAttributes.position,
                        d = !!n.morphAttributes.normal,
                        p = !!n.morphAttributes.color;
                     let f = 0;
                     i.toneMapped && (null !== L && !0 !== L.isXRRenderTarget || (f = A.toneMapping));
                     const m = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
                        g = void 0 !== m ? m.length : 0,
                        _ = ht.get(i),
                        v = b.state.lights;
                     if (!0 === K && (!0 === J || t !== D)) {
                        const e = t === D && i.id === U;
                        Mt.setState(i, t, e)
                     }
                     let x = !1;
                     i.version === _.__version ? _.needsLights && _.lightsStateVersion !== v.state.version || _.outputColorSpace !== o || r.isInstancedMesh && !1 === _.instancing ? x = !0 : r.isInstancedMesh || !0 !== _.instancing ? r.isSkinnedMesh && !1 === _.skinning ? x = !0 : r.isSkinnedMesh || !0 !== _.skinning ? r.isInstancedMesh && !0 === _.instancingColor && null === r.instanceColor || r.isInstancedMesh && !1 === _.instancingColor && null !== r.instanceColor || _.envMap !== l || !0 === i.fog && _.fog !== a ? x = !0 : void 0 === _.numClippingPlanes || _.numClippingPlanes === Mt.numPlanes && _.numIntersection === Mt.numIntersection ? (_.vertexAlphas !== c || _.vertexTangents !== h || _.morphTargets !== u || _.morphNormals !== d || _.morphColors !== p || _.toneMapping !== f || !0 === ot.isWebGL2 && _.morphTargetsCount !== g) && (x = !0) : x = !0 : x = !0 : x = !0 : (x = !0, _.__version = i.version);
                     let y = _.currentProgram;
                     !0 === x && (y = Zt(i, e, r));
                     let M = !1,
                        S = !1,
                        E = !1;
                     const w = y.getUniforms(),
                        T = _.uniforms;
                     lt.useProgram(y.program) && (M = !0, S = !0, E = !0);
                     i.id !== U && (U = i.id, S = !0);
                     if (M || D !== t) {
                        if (w.setValue(Ut, "projectionMatrix", t.projectionMatrix), ot.logarithmicDepthBuffer && w.setValue(Ut, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), D !== t && (D = t, S = !0, E = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshStandardMaterial || i.envMap) {
                           const e = w.map.cameraPosition;
                           void 0 !== e && e.setValue(Ut, et.setFromMatrixPosition(t.matrixWorld))
                        }(i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial) && w.setValue(Ut, "isOrthographic", !0 === t.isOrthographicCamera), (i.isMeshPhongMaterial || i.isMeshToonMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.isShadowMaterial || r.isSkinnedMesh) && w.setValue(Ut, "viewMatrix", t.matrixWorldInverse)
                     }
                     if (r.isSkinnedMesh) {
                        w.setOptional(Ut, r, "bindMatrix"), w.setOptional(Ut, r, "bindMatrixInverse");
                        const t = r.skeleton;
                        t && (ot.floatVertexTextures ? (null === t.boneTexture && t.computeBoneTexture(), w.setValue(Ut, "boneTexture", t.boneTexture, ut), w.setValue(Ut, "boneTextureSize", t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))
                     }
                     const R = n.morphAttributes;
                     (void 0 !== R.position || void 0 !== R.normal || void 0 !== R.color && !0 === ot.isWebGL2) && bt.update(r, n, y);
                     (S || _.receiveShadow !== r.receiveShadow) && (_.receiveShadow = r.receiveShadow, w.setValue(Ut, "receiveShadow", r.receiveShadow));
                     i.isMeshGouraudMaterial && null !== i.envMap && (T.envMap.value = l, T.flipEnvMap.value = l.isCubeTexture && !1 === l.isRenderTargetTexture ? -1 : 1);
                     S && (w.setValue(Ut, "toneMappingExposure", A.toneMappingExposure), _.needsLights && (P = E, (C = T).ambientLightColor.needsUpdate = P, C.lightProbe.needsUpdate = P, C.directionalLights.needsUpdate = P, C.directionalLightShadows.needsUpdate = P, C.pointLights.needsUpdate = P, C.pointLightShadows.needsUpdate = P, C.spotLights.needsUpdate = P, C.spotLightShadows.needsUpdate = P, C.rectAreaLights.needsUpdate = P, C.hemisphereLights.needsUpdate = P), a && !0 === i.fog && vt.refreshFogUniforms(T, a), vt.refreshMaterialUniforms(T, i, W, V, Q), Hr.upload(Ut, _.uniformsList, T, ut));
                     var C, P;
                     i.isShaderMaterial && !0 === i.uniformsNeedUpdate && (Hr.upload(Ut, _.uniformsList, T, ut), i.uniformsNeedUpdate = !1);
                     i.isSpriteMaterial && w.setValue(Ut, "center", r.center);
                     if (w.setValue(Ut, "modelViewMatrix", r.modelViewMatrix), w.setValue(Ut, "normalMatrix", r.normalMatrix), w.setValue(Ut, "modelMatrix", r.matrixWorld), i.isShaderMaterial || i.isRawShaderMaterial) {
                        const t = i.uniformsGroups;
                        for (let e = 0, n = t.length; e < n; e++)
                           if (ot.isWebGL2) {
                              const n = t[e];
                              Lt.update(n, y), Lt.bind(n, y)
                           } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")
                     }
                     return y
                  }(t, e, n, i, r);
               lt.setMaterial(i, s);
               let l = n.index,
                  c = 1;
               if (!0 === i.wireframe) {
                  if (l = mt.getWireframeAttribute(n), void 0 === l) return;
                  c = 2
               }
               const h = n.drawRange,
                  u = n.attributes.position;
               let d = h.start * c,
                  p = (h.start + h.count) * c;
               null !== a && (d = Math.max(d, a.start * c), p = Math.min(p, (a.start + a.count) * c)), null !== l ? (d = Math.max(d, 0), p = Math.min(p, l.count)) : null != u && (d = Math.max(d, 0), p = Math.min(p, u.count));
               const f = p - d;
               if (f < 0 || f === 1 / 0) return;
               let m;
               Pt.setup(r, i, o, n, l);
               let g = wt;
               if (null !== l && (m = ft.get(l), g = Tt, g.setIndex(m)), r.isMesh) !0 === i.wireframe ? (lt.setLineWidth(i.wireframeLinewidth * rt()), g.setMode(Ut.LINES)) : g.setMode(Ut.TRIANGLES);
               else if (r.isLine) {
                  let t = i.linewidth;
                  void 0 === t && (t = 1), lt.setLineWidth(t * rt()), r.isLineSegments ? g.setMode(Ut.LINES) : r.isLineLoop ? g.setMode(Ut.LINE_LOOP) : g.setMode(Ut.LINE_STRIP)
               } else r.isPoints ? g.setMode(Ut.POINTS) : r.isSprite && g.setMode(Ut.TRIANGLES);
               console.log(d)
               if (r.isInstancedMesh) g.renderInstances(d, f, r.count);
               else if (n.isInstancedBufferGeometry) {
                  const t = void 0 !== n._maxInstanceCount ? n._maxInstanceCount : 1 / 0,
                     e = Math.min(n.instanceCount, t);
                  g.renderInstances(d, f, e)
               } else g.render(d, f)
            }, this.compile = function (t, e) {
               function n(t, e, n) {
                  !0 === t.transparent && 2 === t.side && !1 === t.forceSinglePass ? (t.side = 1, t.needsUpdate = !0, Zt(t, e, n), t.side = 0, t.needsUpdate = !0, Zt(t, e, n), t.side = 2) : Zt(t, e, n)
               }
               b = yt.get(t), b.init(), T.push(b), t.traverseVisible((function (t) {
                  t.isLight && t.layers.test(e.layers) && (b.pushLight(t), t.castShadow && b.pushShadow(t))
               })), b.setupLights(A._useLegacyLights), t.traverse((function (e) {
                  const i = e.material;
                  if (i)
                     if (Array.isArray(i))
                        for (let r = 0; r < i.length; r++) {
                           n(i[r], t, e)
                        } else n(i, t, e)
               })), T.pop(), b = null
            };
            let Ht = null;

            function Vt() {
               Gt.stop()
            }

            function Wt() {
               Gt.start()
            }
            const Gt = new ei;

            function Xt(t, e, n, i) {
               if (!1 === t.visible) return;
               if (t.layers.test(e.layers))
                  if (t.isGroup) n = t.renderOrder;
                  else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
               else if (t.isLight) b.pushLight(t), t.castShadow && b.pushShadow(t);
               else if (t.isSprite) {
                  if (!t.frustumCulled || Z.intersectsSprite(t)) {
                     i && et.setFromMatrixPosition(t.matrixWorld).applyMatrix4($);
                     const e = gt.update(t),
                        r = t.material;
                     r.visible && v.push(t, e, r, n, et.z, null)
                  }
               } else if ((t.isMesh || t.isLine || t.isPoints) && (!t.frustumCulled || Z.intersectsObject(t))) {
                  const e = gt.update(t),
                     r = t.material;
                  if (i && (void 0 !== t.boundingSphere ? (null === t.boundingSphere && t.computeBoundingSphere(), et.copy(t.boundingSphere.center)) : (null === e.boundingSphere && e.computeBoundingSphere(), et.copy(e.boundingSphere.center)), et.applyMatrix4(t.matrixWorld).applyMatrix4($)), Array.isArray(r)) {
                     const i = e.groups;
                     for (let a = 0, s = i.length; a < s; a++) {
                        const s = i[a],
                           o = r[s.materialIndex];
                        o && o.visible && v.push(t, e, o, n, et.z, s)
                     }
                  } else r.visible && v.push(t, e, r, n, et.z, null)
               }
               const r = t.children;
               for (let t = 0, a = r.length; t < a; t++) Xt(r[t], e, n, i)
            }

            function jt(t, e, n, i) {
               const r = t.opaque,
                  a = t.transmissive,
                  s = t.transparent;
               b.setupLightsView(n), !0 === K && Mt.setGlobalState(A.clippingPlanes, n), a.length > 0 && function (t, e, n, i) {
                  const r = ot.isWebGL2;
                  null === Q && (Q = new Ct(1, 1, {
                     generateMipmaps: !0,
                     type: at.has("EXT_color_buffer_half_float") ? M : g,
                     minFilter: m,
                     samples: r ? 4 : 0
                  }));
                  A.getDrawingBufferSize(tt), r ? Q.setSize(tt.x, tt.y) : Q.setSize(it(tt.x), it(tt.y));
                  const a = A.getRenderTarget();
                  A.setRenderTarget(Q), A.getClearColor(F), k = A.getClearAlpha(), k < 1 && A.setClearColor(16777215, .5);
                  A.clear();
                  const s = A.toneMapping;
                  A.toneMapping = 0, qt(t, n, i), ut.updateMultisampleRenderTarget(Q), ut.updateRenderTargetMipmap(Q);
                  let o = !1;
                  for (let t = 0, r = e.length; t < r; t++) {
                     const r = e[t],
                        a = r.object,
                        s = r.geometry,
                        l = r.material,
                        c = r.group;
                     if (2 === l.side && a.layers.test(i.layers)) {
                        const t = l.side;
                        l.side = 1, l.needsUpdate = !0, Yt(a, n, i, s, l, c), l.side = t, l.needsUpdate = !0, o = !0
                     }
                  }!0 === o && (ut.updateMultisampleRenderTarget(Q), ut.updateRenderTargetMipmap(Q));
                  A.setRenderTarget(a), A.setClearColor(F, k), A.toneMapping = s
               }(r, a, e, n), i && lt.viewport(I.copy(i)), r.length > 0 && qt(r, e, n), a.length > 0 && qt(a, e, n), s.length > 0 && qt(s, e, n), lt.buffers.depth.setTest(!0), lt.buffers.depth.setMask(!0), lt.buffers.color.setMask(!0), lt.setPolygonOffset(!1)
            }

            function qt(t, e, n) {
               const i = !0 === e.isScene ? e.overrideMaterial : null;
               for (let r = 0, a = t.length; r < a; r++) {
                  const a = t[r],
                     s = a.object,
                     o = a.geometry,
                     l = null === i ? a.material : i,
                     c = a.group;
                  s.layers.test(n.layers) && Yt(s, e, n, o, l, c)
               }
            }

            function Yt(t, e, n, i, r, a) {
               t.onBeforeRender(A, e, n, i, r, a), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), r.onBeforeRender(A, e, n, i, t, a), !0 === r.transparent && 2 === r.side && !1 === r.forceSinglePass ? (r.side = 1, r.needsUpdate = !0, A.renderBufferDirect(n, e, i, r, t, a), r.side = 0, r.needsUpdate = !0, A.renderBufferDirect(n, e, i, r, t, a), r.side = 2) : A.renderBufferDirect(n, e, i, r, t, a), t.onAfterRender(A, e, n, i, r, a)
            }

            function Zt(t, e, n) {
               !0 !== e.isScene && (e = nt);
               const i = ht.get(t),
                  r = b.state.lights,
                  a = b.state.shadowsArray,
                  s = r.state.version,
                  o = _t.getParameters(t, r.state, a, e, n),
                  l = _t.getProgramCacheKey(o);
               let c = i.programs;
               i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = (t.isMeshStandardMaterial ? pt : dt).get(t.envMap || i.environment), void 0 === c && (t.addEventListener("dispose", Bt), c = new Map, i.programs = c);
               let h = c.get(l);
               if (void 0 !== h) {
                  if (i.currentProgram === h && i.lightsStateVersion === s) return Kt(t, o), h
               } else o.uniforms = _t.getUniforms(t), t.onBuild(n, o, A), t.onBeforeCompile(o, A), h = _t.acquireProgram(o, l), c.set(l, h), i.uniforms = o.uniforms;
               const u = i.uniforms;
               (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (u.clippingPlanes = Mt.uniform), Kt(t, o), i.needsLights = function (t) {
                  return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
               }(t), i.lightsStateVersion = s, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotLightMatrix.value = r.state.spotLightMatrix, u.spotLightMap.value = r.state.spotLightMap, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
               const d = h.getUniforms(),
                  p = Hr.seqWithValue(d.seq, u);
               return i.currentProgram = h, i.uniformsList = p, h
            }

            function Kt(t, e) {
               const n = ht.get(t);
               n.outputColorSpace = e.outputColorSpace, n.instancing = e.instancing, n.instancingColor = e.instancingColor, n.skinning = e.skinning, n.morphTargets = e.morphTargets, n.morphNormals = e.morphNormals, n.morphColors = e.morphColors, n.morphTargetsCount = e.morphTargetsCount, n.numClippingPlanes = e.numClippingPlanes, n.numIntersection = e.numClipIntersection, n.vertexAlphas = e.vertexAlphas, n.vertexTangents = e.vertexTangents, n.toneMapping = e.toneMapping
            }
            Gt.setAnimationLoop((function (t) {
               Ht && Ht(t)
            })), "undefined" != typeof self && Gt.setContext(self), this.setAnimationLoop = function (t) {
               Ht = t, Ot.setAnimationLoop(t), null === t ? Gt.stop() : Gt.start()
            }, Ot.addEventListener("sessionstart", Vt), Ot.addEventListener("sessionend", Wt), this.render = function (t, e) {
               if (void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
               if (!0 === R) return;
               !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), null === e.parent && !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), !0 === Ot.enabled && !0 === Ot.isPresenting && (!0 === Ot.cameraAutoUpdate && Ot.updateCamera(e), e = Ot.getCamera()), !0 === t.isScene && t.onBeforeRender(A, t, e, L), b = yt.get(t, T.length), b.init(), T.push(b), $.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), Z.setFromProjectionMatrix($), J = this.localClippingEnabled, K = Mt.init(this.clippingPlanes, J), v = xt.get(t, w.length), v.init(), w.push(v), Xt(t, e, 0, A.sortObjects), v.finish(), !0 === A.sortObjects && v.sort(G, X), this.info.render.frame++, !0 === K && Mt.beginShadows();
               const n = b.state.shadowsArray;
               if (St.render(n, t, e), !0 === K && Mt.endShadows(), !0 === this.info.autoReset && this.info.reset(), Et.render(v, t), b.setupLights(A._useLegacyLights), e.isArrayCamera) {
                  const n = e.cameras;
                  for (let e = 0, i = n.length; e < i; e++) {
                     const i = n[e];
                     jt(v, t, i, i.viewport)
                  }
               } else jt(v, t, e);
               null !== L && (ut.updateMultisampleRenderTarget(L), ut.updateRenderTargetMipmap(L)), !0 === t.isScene && t.onAfterRender(A, t, e), Pt.resetDefaultState(), U = -1, D = null, T.pop(), b = T.length > 0 ? T[T.length - 1] : null, w.pop(), v = w.length > 0 ? w[w.length - 1] : null
            }, this.getActiveCubeFace = function () {
               return C
            }, this.getActiveMipmapLevel = function () {
               return P
            }, this.getRenderTarget = function () {
               return L
            }, this.setRenderTargetTextures = function (t, e, n) {
               ht.get(t.texture).__webglTexture = e, ht.get(t.depthTexture).__webglTexture = n;
               const i = ht.get(t);
               i.__hasExternalTextures = !0, i.__hasExternalTextures && (i.__autoAllocateDepthBuffer = void 0 === n, i.__autoAllocateDepthBuffer || !0 === at.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i.__useRenderToTexture = !1))
            }, this.setRenderTargetFramebuffer = function (t, e) {
               const n = ht.get(t);
               n.__webglFramebuffer = e, n.__useDefaultFramebuffer = void 0 === e
            }, this.setRenderTarget = function (t, e = 0, n = 0) {
               L = t, C = e, P = n;
               let i = !0,
                  r = null,
                  a = !1,
                  s = !1;
               if (t) {
                  const o = ht.get(t);
                  void 0 !== o.__useDefaultFramebuffer ? (lt.bindFramebuffer(Ut.FRAMEBUFFER, null), i = !1) : void 0 === o.__webglFramebuffer ? ut.setupRenderTarget(t) : o.__hasExternalTextures && ut.rebindTextures(t, ht.get(t.texture).__webglTexture, ht.get(t.depthTexture).__webglTexture);
                  const l = t.texture;
                  (l.isData3DTexture || l.isDataArrayTexture || l.isCompressedArrayTexture) && (s = !0);
                  const c = ht.get(t).__webglFramebuffer;
                  t.isWebGLCubeRenderTarget ? (r = Array.isArray(c[e]) ? c[e][n] : c[e], a = !0) : r = ot.isWebGL2 && t.samples > 0 && !1 === ut.useMultisampledRTT(t) ? ht.get(t).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, I.copy(t.viewport), N.copy(t.scissor), O = t.scissorTest
               } else I.copy(j).multiplyScalar(W).floor(), N.copy(q).multiplyScalar(W).floor(), O = Y;
               if (lt.bindFramebuffer(Ut.FRAMEBUFFER, r) && ot.drawBuffers && i && lt.drawBuffers(t, r), lt.viewport(I), lt.scissor(N), lt.setScissorTest(O), a) {
                  const i = ht.get(t.texture);
                  Ut.framebufferTexture2D(Ut.FRAMEBUFFER, Ut.COLOR_ATTACHMENT0, Ut.TEXTURE_CUBE_MAP_POSITIVE_X + e, i.__webglTexture, n)
               } else if (s) {
                  const i = ht.get(t.texture),
                     r = e || 0;
                  Ut.framebufferTextureLayer(Ut.FRAMEBUFFER, Ut.COLOR_ATTACHMENT0, i.__webglTexture, n || 0, r)
               }
               U = -1
            }, this.readRenderTargetPixels = function (t, e, n, i, r, a, s) {
               if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
               let o = ht.get(t).__webglFramebuffer;
               if (t.isWebGLCubeRenderTarget && void 0 !== s && (o = o[s]), o) {
                  lt.bindFramebuffer(Ut.FRAMEBUFFER, o);
                  try {
                     const s = t.texture,
                        o = s.format,
                        l = s.type;
                     if (o !== E && Rt.convert(o) !== Ut.getParameter(Ut.IMPLEMENTATION_COLOR_READ_FORMAT)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                     const c = l === M && (at.has("EXT_color_buffer_half_float") || ot.isWebGL2 && at.has("EXT_color_buffer_float"));
                     if (!(l === g || Rt.convert(l) === Ut.getParameter(Ut.IMPLEMENTATION_COLOR_READ_TYPE) || l === y && (ot.isWebGL2 || at.has("OES_texture_float") || at.has("WEBGL_color_buffer_float")) || c)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                     e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && Ut.readPixels(e, n, i, r, Rt.convert(o), Rt.convert(l), a)
                  } finally {
                     const t = null !== L ? ht.get(L).__webglFramebuffer : null;
                     lt.bindFramebuffer(Ut.FRAMEBUFFER, t)
                  }
               }
            }, this.copyFramebufferToTexture = function (t, e, n = 0) {
               const i = Math.pow(2, -n),
                  r = Math.floor(e.image.width * i),
                  a = Math.floor(e.image.height * i);
               ut.setTexture2D(e, 0), Ut.copyTexSubImage2D(Ut.TEXTURE_2D, n, 0, 0, t.x, t.y, r, a), lt.unbindTexture()
            }, this.copyTextureToTexture = function (t, e, n, i = 0) {
               const r = e.image.width,
                  a = e.image.height,
                  s = Rt.convert(n.format),
                  o = Rt.convert(n.type);
               ut.setTexture2D(n, 0), Ut.pixelStorei(Ut.UNPACK_FLIP_Y_WEBGL, n.flipY), Ut.pixelStorei(Ut.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), Ut.pixelStorei(Ut.UNPACK_ALIGNMENT, n.unpackAlignment), e.isDataTexture ? Ut.texSubImage2D(Ut.TEXTURE_2D, i, t.x, t.y, r, a, s, o, e.image.data) : e.isCompressedTexture ? Ut.compressedTexSubImage2D(Ut.TEXTURE_2D, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, s, e.mipmaps[0].data) : Ut.texSubImage2D(Ut.TEXTURE_2D, i, t.x, t.y, s, o, e.image), 0 === i && n.generateMipmaps && Ut.generateMipmap(Ut.TEXTURE_2D), lt.unbindTexture()
            }, this.copyTextureToTexture3D = function (t, e, n, i, r = 0) {
               if (A.isWebGL1Renderer) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
               const a = t.max.x - t.min.x + 1,
                  s = t.max.y - t.min.y + 1,
                  o = t.max.z - t.min.z + 1,
                  l = Rt.convert(i.format),
                  c = Rt.convert(i.type);
               let h;
               if (i.isData3DTexture) ut.setTexture3D(i, 0), h = Ut.TEXTURE_3D;
               else {
                  if (!i.isDataArrayTexture) return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                  ut.setTexture2DArray(i, 0), h = Ut.TEXTURE_2D_ARRAY
               }
               Ut.pixelStorei(Ut.UNPACK_FLIP_Y_WEBGL, i.flipY), Ut.pixelStorei(Ut.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultiplyAlpha), Ut.pixelStorei(Ut.UNPACK_ALIGNMENT, i.unpackAlignment);
               const u = Ut.getParameter(Ut.UNPACK_ROW_LENGTH),
                  d = Ut.getParameter(Ut.UNPACK_IMAGE_HEIGHT),
                  p = Ut.getParameter(Ut.UNPACK_SKIP_PIXELS),
                  f = Ut.getParameter(Ut.UNPACK_SKIP_ROWS),
                  m = Ut.getParameter(Ut.UNPACK_SKIP_IMAGES),
                  g = n.isCompressedTexture ? n.mipmaps[0] : n.image;
               Ut.pixelStorei(Ut.UNPACK_ROW_LENGTH, g.width), Ut.pixelStorei(Ut.UNPACK_IMAGE_HEIGHT, g.height), Ut.pixelStorei(Ut.UNPACK_SKIP_PIXELS, t.min.x), Ut.pixelStorei(Ut.UNPACK_SKIP_ROWS, t.min.y), Ut.pixelStorei(Ut.UNPACK_SKIP_IMAGES, t.min.z), n.isDataTexture || n.isData3DTexture ? Ut.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g.data) : n.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), Ut.compressedTexSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, g.data)) : Ut.texSubImage3D(h, r, e.x, e.y, e.z, a, s, o, l, c, g), Ut.pixelStorei(Ut.UNPACK_ROW_LENGTH, u), Ut.pixelStorei(Ut.UNPACK_IMAGE_HEIGHT, d), Ut.pixelStorei(Ut.UNPACK_SKIP_PIXELS, p), Ut.pixelStorei(Ut.UNPACK_SKIP_ROWS, f), Ut.pixelStorei(Ut.UNPACK_SKIP_IMAGES, m), 0 === r && i.generateMipmaps && Ut.generateMipmap(h), lt.unbindTexture()
            }, this.initTexture = function (t) {
               t.isCubeTexture ? ut.setTextureCube(t, 0) : t.isData3DTexture ? ut.setTexture3D(t, 0) : t.isDataArrayTexture || t.isCompressedArrayTexture ? ut.setTexture2DArray(t, 0) : ut.setTexture2D(t, 0), lt.unbindTexture()
            }, this.resetState = function () {
               C = 0, P = 0, L = null, lt.reset(), Pt.reset()
            }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
               detail: this
            }))
         }
         get coordinateSystem() {
            return j
         }
         get physicallyCorrectLights() {
            return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights
         }
         set physicallyCorrectLights(t) {
            console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !t
         }
         get outputEncoding() {
            return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === z ? F : 3e3
         }
         set outputEncoding(t) {
            console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = t === F ? z : B
         }
         get useLegacyLights() {
            return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights
         }
         set useLegacyLights(t) {
            console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = t
         }
      }(class extends Na {}).prototype.isWebGL1Renderer = !0;
      class Oa extends an {
         constructor(t, e, n, i = 1) {
            super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i
         }
         copy(t) {
            return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this
         }
         toJSON() {
            const t = super.toJSON();
            return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
         }
      }
      const Fa = new ce,
         ka = new ce,
         za = [],
         Ba = new Ot,
         Ha = new ce,
         Va = new In,
         Wa = new te;
      class Ga extends In {
         constructor(t, e, n) {
            super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new Oa(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
            for (let t = 0; t < n; t++) this.setMatrixAt(t, Ha)
         }
         computeBoundingBox() {
            const t = this.geometry,
               e = this.count;
            null === this.boundingBox && (this.boundingBox = new Ot), null === t.boundingBox && t.computeBoundingBox(), this.boundingBox.makeEmpty();
            for (let n = 0; n < e; n++) this.getMatrixAt(n, Fa), Ba.copy(t.boundingBox).applyMatrix4(Fa), this.boundingBox.union(Ba)
         }
         computeBoundingSphere() {
            const t = this.geometry,
               e = this.count;
            null === this.boundingSphere && (this.boundingSphere = new te), null === t.boundingSphere && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
            for (let n = 0; n < e; n++) this.getMatrixAt(n, Fa), Wa.copy(t.boundingSphere).applyMatrix4(Fa), this.boundingSphere.union(Wa)
         }
         copy(t, e) {
            return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), null !== t.instanceColor && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
         }
         getColorAt(t, e) {
            e.fromArray(this.instanceColor.array, 3 * t)
         }
         getMatrixAt(t, e) {
            e.fromArray(this.instanceMatrix.array, 16 * t)
         }
         raycast(t, e) {
            const n = this.matrixWorld,
               i = this.count;
            if (Va.geometry = this.geometry, Va.material = this.material, void 0 !== Va.material && (null === this.boundingSphere && this.computeBoundingSphere(), Wa.copy(this.boundingSphere), Wa.applyMatrix4(n), !1 !== t.ray.intersectsSphere(Wa)))
               for (let r = 0; r < i; r++) {
                  this.getMatrixAt(r, Fa), ka.multiplyMatrices(n, Fa), Va.matrixWorld = ka, Va.raycast(t, za);
                  for (let t = 0, n = za.length; t < n; t++) {
                     const n = za[t];
                     n.instanceId = r, n.object = this, e.push(n)
                  }
                  za.length = 0
               }
         }
         setColorAt(t, e) {
            null === this.instanceColor && (this.instanceColor = new Oa(new Float32Array(3 * this.instanceMatrix.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
         }
         setMatrixAt(t, e) {
            e.toArray(this.instanceMatrix.array, 16 * t)
         }
         updateMorphTargets() {}
         dispose() {
            this.dispatchEvent({
               type: "dispose"
            })
         }
      }

      function Xa(t, e, n) {
         return qa(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
      }

      function ja(t, e, n) {
         return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
      }

      function qa(t) {
         return ArrayBuffer.isView(t) && !(t instanceof DataView)
      }
      class Ya {
         constructor(t, e, n, i) {
            this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {}
         }
         evaluate(t) {
            const e = this.parameterPositions;
            let n = this._cachedIndex,
               i = e[n],
               r = e[n - 1];
            t: {
               e: {
                  let a;n: {
                     i: if (!(t < i)) {
                        for (let a = n + 2;;) {
                           if (void 0 === i) {
                              if (t < r) break i;
                              return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1)
                           }
                           if (n === a) break;
                           if (r = i, i = e[++n], t < i) break e
                        }
                        a = e.length;
                        break n
                     }if (t >= r) break t; {
                        const s = e[1];
                        t < s && (n = 2, r = s);
                        for (let a = n - 2;;) {
                           if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                           if (n === a) break;
                           if (i = r, r = e[--n - 1], t >= r) break e
                        }
                        a = n, n = 0
                     }
                  }
                  for (; n < a;) {
                     const i = n + a >>> 1;
                     t < e[i] ? a = i : n = i + 1
                  }
                  if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0,
                  this.copySampleValue_(0);
                  if (void 0 === i) return n = e.length,
                  this._cachedIndex = n,
                  this.copySampleValue_(n - 1)
               }
               this._cachedIndex = n,
               this.intervalChanged_(n, r, i)
            }
            return this.interpolate_(n, r, t, i)
         }
         getSettings_() {
            return this.settings || this.DefaultSettings_
         }
         copySampleValue_(t) {
            const e = this.resultBuffer,
               n = this.sampleValues,
               i = this.valueSize,
               r = t * i;
            for (let t = 0; t !== i; ++t) e[t] = n[r + t];
            return e
         }
         interpolate_() {
            throw new Error("call to abstract method")
         }
         intervalChanged_() {}
      }
      class Za extends Ya {
         constructor(t, e, n, i) {
            super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
               endingStart: I,
               endingEnd: I
            }
         }
         intervalChanged_(t, e, n) {
            const i = this.parameterPositions;
            let r = t - 2,
               a = t + 1,
               s = i[r],
               o = i[a];
            if (void 0 === s) switch (this.getSettings_().endingStart) {
               case N:
                  r = t, s = 2 * e - n;
                  break;
               case O:
                  r = i.length - 2, s = e + i[r] - i[r + 1];
                  break;
               default:
                  r = t, s = n
            }
            if (void 0 === o) switch (this.getSettings_().endingEnd) {
               case N:
                  a = t, o = 2 * n - e;
                  break;
               case O:
                  a = 1, o = n + i[1] - i[0];
                  break;
               default:
                  a = t - 1, o = e
            }
            const l = .5 * (n - e),
               c = this.valueSize;
            this._weightPrev = l / (e - s), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = a * c
         }
         interpolate_(t, e, n, i) {
            const r = this.resultBuffer,
               a = this.sampleValues,
               s = this.valueSize,
               o = t * s,
               l = o - s,
               c = this._offsetPrev,
               h = this._offsetNext,
               u = this._weightPrev,
               d = this._weightNext,
               p = (n - e) / (i - e),
               f = p * p,
               m = f * p,
               g = -u * m + 2 * u * f - u * p,
               _ = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1,
               v = (-1 - d) * m + (1.5 + d) * f + .5 * p,
               x = d * m - d * f;
            for (let t = 0; t !== s; ++t) r[t] = g * a[c + t] + _ * a[l + t] + v * a[o + t] + x * a[h + t];
            return r
         }
      }
      class Ka extends Ya {
         constructor(t, e, n, i) {
            super(t, e, n, i)
         }
         interpolate_(t, e, n, i) {
            const r = this.resultBuffer,
               a = this.sampleValues,
               s = this.valueSize,
               o = t * s,
               l = o - s,
               c = (n - e) / (i - e),
               h = 1 - c;
            for (let t = 0; t !== s; ++t) r[t] = a[l + t] * h + a[o + t] * c;
            return r
         }
      }
      class Ja extends Ya {
         constructor(t, e, n, i) {
            super(t, e, n, i)
         }
         interpolate_(t) {
            return this.copySampleValue_(t - 1)
         }
      }
      class Qa {
         constructor(t, e, n, i) {
            if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
            if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
            this.name = t, this.times = ja(e, this.TimeBufferType), this.values = ja(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
         }
         static toJSON(t) {
            const e = t.constructor;
            let n;
            if (e.toJSON !== this.toJSON) n = e.toJSON(t);
            else {
               n = {
                  name: t.name,
                  times: ja(t.times, Array),
                  values: ja(t.values, Array)
               };
               const e = t.getInterpolation();
               e !== t.DefaultInterpolation && (n.interpolation = e)
            }
            return n.type = t.ValueTypeName, n
         }
         InterpolantFactoryMethodDiscrete(t) {
            return new Ja(this.times, this.values, this.getValueSize(), t)
         }
         InterpolantFactoryMethodLinear(t) {
            return new Ka(this.times, this.values, this.getValueSize(), t)
         }
         InterpolantFactoryMethodSmooth(t) {
            return new Za(this.times, this.values, this.getValueSize(), t)
         }
         setInterpolation(t) {
            let e;
            switch (t) {
               case L:
                  e = this.InterpolantFactoryMethodDiscrete;
                  break;
               case U:
                  e = this.InterpolantFactoryMethodLinear;
                  break;
               case D:
                  e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
               const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
               if (void 0 === this.createInterpolant) {
                  if (t === this.DefaultInterpolation) throw new Error(e);
                  this.setInterpolation(this.DefaultInterpolation)
               }
               return console.warn("THREE.KeyframeTrack:", e), this
            }
            return this.createInterpolant = e, this
         }
         getInterpolation() {
            switch (this.createInterpolant) {
               case this.InterpolantFactoryMethodDiscrete:
                  return L;
               case this.InterpolantFactoryMethodLinear:
                  return U;
               case this.InterpolantFactoryMethodSmooth:
                  return D
            }
         }
         getValueSize() {
            return this.values.length / this.times.length
         }
         shift(t) {
            if (0 !== t) {
               const e = this.times;
               for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
            }
            return this
         }
         scale(t) {
            if (1 !== t) {
               const e = this.times;
               for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
            }
            return this
         }
         trim(t, e) {
            const n = this.times,
               i = n.length;
            let r = 0,
               a = i - 1;
            for (; r !== i && n[r] < t;) ++r;
            for (; - 1 !== a && n[a] > e;) --a;
            if (++a, 0 !== r || a !== i) {
               r >= a && (a = Math.max(a, 1), r = a - 1);
               const t = this.getValueSize();
               this.times = Xa(n, r, a), this.values = Xa(this.values, r * t, a * t)
            }
            return this
         }
         validate() {
            let t = !0;
            const e = this.getValueSize();
            e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
            const n = this.times,
               i = this.values,
               r = n.length;
            0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
            let a = null;
            for (let e = 0; e !== r; e++) {
               const i = n[e];
               if ("number" == typeof i && isNaN(i)) {
                  console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
                  break
               }
               if (null !== a && a > i) {
                  console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, a), t = !1;
                  break
               }
               a = i
            }
            if (void 0 !== i && qa(i))
               for (let e = 0, n = i.length; e !== n; ++e) {
                  const n = i[e];
                  if (isNaN(n)) {
                     console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
                     break
                  }
               }
            return t
         }
         optimize() {
            const t = Xa(this.times),
               e = Xa(this.values),
               n = this.getValueSize(),
               i = this.getInterpolation() === D,
               r = t.length - 1;
            let a = 1;
            for (let s = 1; s < r; ++s) {
               let r = !1;
               const o = t[s];
               if (o !== t[s + 1] && (1 !== s || o !== t[0]))
                  if (i) r = !0;
                  else {
                     const t = s * n,
                        i = t - n,
                        a = t + n;
                     for (let s = 0; s !== n; ++s) {
                        const n = e[t + s];
                        if (n !== e[i + s] || n !== e[a + s]) {
                           r = !0;
                           break
                        }
                     }
                  } if (r) {
                  if (s !== a) {
                     t[a] = t[s];
                     const i = s * n,
                        r = a * n;
                     for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
                  }++a
               }
            }
            if (r > 0) {
               t[a] = t[r];
               for (let t = r * n, i = a * n, s = 0; s !== n; ++s) e[i + s] = e[t + s];
               ++a
            }
            return a !== t.length ? (this.times = Xa(t, 0, a), this.values = Xa(e, 0, a * n)) : (this.times = t, this.values = e), this
         }
         clone() {
            const t = Xa(this.times, 0),
               e = Xa(this.values, 0),
               n = new(0, this.constructor)(this.name, t, e);
            return n.createInterpolant = this.createInterpolant, n
         }
      }
      Qa.prototype.TimeBufferType = Float32Array, Qa.prototype.ValueBufferType = Float32Array, Qa.prototype.DefaultInterpolation = U;
      class $a extends Qa {}
      $a.prototype.ValueTypeName = "bool", $a.prototype.ValueBufferType = Array, $a.prototype.DefaultInterpolation = L, $a.prototype.InterpolantFactoryMethodLinear = void 0, $a.prototype.InterpolantFactoryMethodSmooth = void 0;
      class ts extends Qa {}
      ts.prototype.ValueTypeName = "color";
      class es extends Qa {}
      es.prototype.ValueTypeName = "number";
      class ns extends Ya {
         constructor(t, e, n, i) {
            super(t, e, n, i)
         }
         interpolate_(t, e, n, i) {
            const r = this.resultBuffer,
               a = this.sampleValues,
               s = this.valueSize,
               o = (n - e) / (i - e);
            let l = t * s;
            for (let t = l + s; l !== t; l += 4) Ut.slerpFlat(r, 0, a, l - s, a, l, o);
            return r
         }
      }
      class is extends Qa {
         InterpolantFactoryMethodLinear(t) {
            return new ns(this.times, this.values, this.getValueSize(), t)
         }
      }
      is.prototype.ValueTypeName = "quaternion", is.prototype.DefaultInterpolation = U, is.prototype.InterpolantFactoryMethodSmooth = void 0;
      class rs extends Qa {}
      rs.prototype.ValueTypeName = "string", rs.prototype.ValueBufferType = Array, rs.prototype.DefaultInterpolation = L, rs.prototype.InterpolantFactoryMethodLinear = void 0, rs.prototype.InterpolantFactoryMethodSmooth = void 0;
      class as extends Qa {}
      as.prototype.ValueTypeName = "vector";
      class ss {
         constructor(t, e, n) {
            const i = this;
            let r, a = !1,
               s = 0,
               o = 0;
            const l = [];
            this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function (t) {
               o++, !1 === a && void 0 !== i.onStart && i.onStart(t, s, o), a = !0
            }, this.itemEnd = function (t) {
               s++, void 0 !== i.onProgress && i.onProgress(t, s, o), s === o && (a = !1, void 0 !== i.onLoad && i.onLoad())
            }, this.itemError = function (t) {
               void 0 !== i.onError && i.onError(t)
            }, this.resolveURL = function (t) {
               return r ? r(t) : t
            }, this.setURLModifier = function (t) {
               return r = t, this
            }, this.addHandler = function (t, e) {
               return l.push(t, e), this
            }, this.removeHandler = function (t) {
               const e = l.indexOf(t);
               return -1 !== e && l.splice(e, 2), this
            }, this.getHandler = function (t) {
               for (let e = 0, n = l.length; e < n; e += 2) {
                  const n = l[e],
                     i = l[e + 1];
                  if (n.global && (n.lastIndex = 0), n.test(t)) return i
               }
               return null
            }
         }
      }
      const os = new ss;
      class ls {
         constructor(t) {
            this.manager = void 0 !== t ? t : os, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
         }
         load() {}
         loadAsync(t, e) {
            const n = this;
            return new Promise((function (i, r) {
               n.load(t, i, e, r)
            }))
         }
         parse() {}
         setCrossOrigin(t) {
            return this.crossOrigin = t, this
         }
         setWithCredentials(t) {
            return this.withCredentials = t, this
         }
         setPath(t) {
            return this.path = t, this
         }
         setResourcePath(t) {
            return this.resourcePath = t, this
         }
         setRequestHeader(t) {
            return this.requestHeader = t, this
         }
      }
      ls.DEFAULT_MATERIAL_NAME = "__DEFAULT";
      class cs extends Error {
         constructor(t, e) {
            super(t), this.response = e
         }
      }
      const hs = "\\[\\]\\.:\\/",
         us = new RegExp("[" + hs + "]", "g"),
         ds = "[^" + hs + "]",
         ps = "[^" + hs.replace("\\.", "") + "]",
         fs = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", ds) + /(WCOD+)?/.source.replace("WCOD", ps) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ds) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ds) + "$"),
         ms = ["material", "materials", "bones", "map"];
      class gs {
         constructor(t, e, n) {
            this.path = e, this.parsedPath = n || gs.parseTrackName(e), this.node = gs.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
         }
         static create(t, e, n) {
            return t && t.isAnimationObjectGroup ? new gs.Composite(t, e, n) : new gs(t, e, n)
         }
         static sanitizeNodeName(t) {
            return t.replace(/\s/g, "_").replace(us, "")
         }
         static parseTrackName(t) {
            const e = fs.exec(t);
            if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
            const n = {
                  nodeName: e[2],
                  objectName: e[3],
                  objectIndex: e[4],
                  propertyName: e[5],
                  propertyIndex: e[6]
               },
               i = n.nodeName && n.nodeName.lastIndexOf(".");
            if (void 0 !== i && -1 !== i) {
               const t = n.nodeName.substring(i + 1); - 1 !== ms.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
            }
            if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
            return n
         }
         static findNode(t, e) {
            if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
               const n = t.skeleton.getBoneByName(e);
               if (void 0 !== n) return n
            }
            if (t.children) {
               const n = function (t) {
                     for (let i = 0; i < t.length; i++) {
                        const r = t[i];
                        if (r.name === e || r.uuid === e) return r;
                        const a = n(r.children);
                        if (a) return a
                     }
                     return null
                  },
                  i = n(t.children);
               if (i) return i
            }
            return null
         }
         _getValue_unavailable() {}
         _setValue_unavailable() {}
         _getValue_direct(t, e) {
            t[e] = this.targetObject[this.propertyName]
         }
         _getValue_array(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
         }
         _getValue_arrayElement(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
         }
         _getValue_toArray(t, e) {
            this.resolvedProperty.toArray(t, e)
         }
         _setValue_direct(t, e) {
            this.targetObject[this.propertyName] = t[e]
         }
         _setValue_direct_setNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
         }
         _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
            this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
         }
         _setValue_array(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
         }
         _setValue_array_setNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
            this.targetObject.needsUpdate = !0
         }
         _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
            const n = this.resolvedProperty;
            for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
         }
         _setValue_arrayElement(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
         }
         _setValue_arrayElement_setNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
         }
         _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
         }
         _setValue_fromArray(t, e) {
            this.resolvedProperty.fromArray(t, e)
         }
         _setValue_fromArray_setNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
         }
         _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
            this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
         }
         _getValue_unbound(t, e) {
            this.bind(), this.getValue(t, e)
         }
         _setValue_unbound(t, e) {
            this.bind(), this.setValue(t, e)
         }
         bind() {
            let t = this.node;
            const e = this.parsedPath,
               n = e.objectName,
               i = e.propertyName;
            let r = e.propertyIndex;
            if (t || (t = gs.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
            if (n) {
               let i = e.objectIndex;
               switch (n) {
                  case "materials":
                     if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                     if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                     t = t.material.materials;
                     break;
                  case "bones":
                     if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                     t = t.skeleton.bones;
                     for (let e = 0; e < t.length; e++)
                        if (t[e].name === i) {
                           i = e;
                           break
                        } break;
                  case "map":
                     if ("map" in t) {
                        t = t.map;
                        break
                     }
                     if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                     if (!t.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                     t = t.material.map;
                     break;
                  default:
                     if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                     t = t[n]
               }
               if (void 0 !== i) {
                  if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                  t = t[i]
               }
            }
            const a = t[i];
            if (void 0 === a) {
               const n = e.nodeName;
               return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
            }
            let s = this.Versioning.None;
            this.targetObject = t, void 0 !== t.needsUpdate ? s = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate);
            let o = this.BindingType.Direct;
            if (void 0 !== r) {
               if ("morphTargetInfluences" === i) {
                  if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                  if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                  void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
               }
               o = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r
            } else void 0 !== a.fromArray && void 0 !== a.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (o = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
            this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][s]
         }
         unbind() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
         }
      }
      gs.Composite = class {
         constructor(t, e, n) {
            const i = n || gs.parseTrackName(e);
            this._targetGroup = t, this._bindings = t.subscribe_(e, i)
         }
         getValue(t, e) {
            this.bind();
            const n = this._targetGroup.nCachedObjects_,
               i = this._bindings[n];
            void 0 !== i && i.getValue(t, e)
         }
         setValue(t, e) {
            const n = this._bindings;
            for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
         }
         bind() {
            const t = this._bindings;
            for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
         }
         unbind() {
            const t = this._bindings;
            for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
         }
      }, gs.prototype.BindingType = {
         Direct: 0,
         EntireArray: 1,
         ArrayElement: 2,
         HasFromToArray: 3
      }, gs.prototype.Versioning = {
         None: 0,
         NeedsUpdate: 1,
         MatrixWorldNeedsUpdate: 2
      }, gs.prototype.GetterByBindingType = [gs.prototype._getValue_direct, gs.prototype._getValue_array, gs.prototype._getValue_arrayElement, gs.prototype._getValue_toArray], gs.prototype.SetterByBindingTypeAndVersioning = [
         [gs.prototype._setValue_direct, gs.prototype._setValue_direct_setNeedsUpdate, gs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],
         [gs.prototype._setValue_array, gs.prototype._setValue_array_setNeedsUpdate, gs.prototype._setValue_array_setMatrixWorldNeedsUpdate],
         [gs.prototype._setValue_arrayElement, gs.prototype._setValue_arrayElement_setNeedsUpdate, gs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],
         [gs.prototype._setValue_fromArray, gs.prototype._setValue_fromArray_setNeedsUpdate, gs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]
      ];
      new Float32Array(1);
      "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
         detail: {
            revision: t
         }
      })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

      function _s(t) {
         let e = t.length;
         for (; --e >= 0;) t[e] = 0
      }
      const vs = 256,
         xs = 286,
         ys = 30,
         Ms = 15,
         Ss = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
         Es = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
         bs = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
         ws = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
         Ts = new Array(576);
      _s(Ts);
      const As = new Array(60);
      _s(As);
      const Rs = new Array(512);
      _s(Rs);
      const Cs = new Array(256);
      _s(Cs);
      const Ps = new Array(29);
      _s(Ps);
      const Ls = new Array(ys);

      function Us(t, e, n, i, r) {
         this.static_tree = t, this.extra_bits = e, this.extra_base = n, this.elems = i, this.max_length = r, this.has_stree = t && t.length
      }
      let Ds, Is, Ns;

      function Os(t, e) {
         this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
      }
      _s(Ls);
      const Fs = t => t < 256 ? Rs[t] : Rs[256 + (t >>> 7)],
         ks = (t, e) => {
            t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
         },
         zs = (t, e, n) => {
            t.bi_valid > 16 - n ? (t.bi_buf |= e << t.bi_valid & 65535, ks(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += n - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += n)
         },
         Bs = (t, e, n) => {
            zs(t, n[2 * e], n[2 * e + 1])
         },
         Hs = (t, e) => {
            let n = 0;
            do {
               n |= 1 & t, t >>>= 1, n <<= 1
            } while (--e > 0);
            return n >>> 1
         },
         Vs = (t, e, n) => {
            const i = new Array(16);
            let r, a, s = 0;
            for (r = 1; r <= Ms; r++) s = s + n[r - 1] << 1, i[r] = s;
            for (a = 0; a <= e; a++) {
               let e = t[2 * a + 1];
               0 !== e && (t[2 * a] = Hs(i[e]++, e))
            }
         },
         Ws = t => {
            let e;
            for (e = 0; e < xs; e++) t.dyn_ltree[2 * e] = 0;
            for (e = 0; e < ys; e++) t.dyn_dtree[2 * e] = 0;
            for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
            t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.sym_next = t.matches = 0
         },
         Gs = t => {
            t.bi_valid > 8 ? ks(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
         },
         Xs = (t, e, n, i) => {
            const r = 2 * e,
               a = 2 * n;
            return t[r] < t[a] || t[r] === t[a] && i[e] <= i[n]
         },
         js = (t, e, n) => {
            const i = t.heap[n];
            let r = n << 1;
            for (; r <= t.heap_len && (r < t.heap_len && Xs(e, t.heap[r + 1], t.heap[r], t.depth) && r++, !Xs(e, i, t.heap[r], t.depth));) t.heap[n] = t.heap[r], n = r, r <<= 1;
            t.heap[n] = i
         },
         qs = (t, e, n) => {
            let i, r, a, s, o = 0;
            if (0 !== t.sym_next)
               do {
                  i = 255 & t.pending_buf[t.sym_buf + o++], i += (255 & t.pending_buf[t.sym_buf + o++]) << 8, r = t.pending_buf[t.sym_buf + o++], 0 === i ? Bs(t, r, e) : (a = Cs[r], Bs(t, a + vs + 1, e), s = Ss[a], 0 !== s && (r -= Ps[a], zs(t, r, s)), i--, a = Fs(i), Bs(t, a, n), s = Es[a], 0 !== s && (i -= Ls[a], zs(t, i, s)))
               } while (o < t.sym_next);
            Bs(t, 256, e)
         },
         Ys = (t, e) => {
            const n = e.dyn_tree,
               i = e.stat_desc.static_tree,
               r = e.stat_desc.has_stree,
               a = e.stat_desc.elems;
            let s, o, l, c = -1;
            for (t.heap_len = 0, t.heap_max = 573, s = 0; s < a; s++) 0 !== n[2 * s] ? (t.heap[++t.heap_len] = c = s, t.depth[s] = 0) : n[2 * s + 1] = 0;
            for (; t.heap_len < 2;) l = t.heap[++t.heap_len] = c < 2 ? ++c : 0, n[2 * l] = 1, t.depth[l] = 0, t.opt_len--, r && (t.static_len -= i[2 * l + 1]);
            for (e.max_code = c, s = t.heap_len >> 1; s >= 1; s--) js(t, n, s);
            l = a;
            do {
               s = t.heap[1], t.heap[1] = t.heap[t.heap_len--], js(t, n, 1), o = t.heap[1], t.heap[--t.heap_max] = s, t.heap[--t.heap_max] = o, n[2 * l] = n[2 * s] + n[2 * o], t.depth[l] = (t.depth[s] >= t.depth[o] ? t.depth[s] : t.depth[o]) + 1, n[2 * s + 1] = n[2 * o + 1] = l, t.heap[1] = l++, js(t, n, 1)
            } while (t.heap_len >= 2);
            t.heap[--t.heap_max] = t.heap[1], ((t, e) => {
               const n = e.dyn_tree,
                  i = e.max_code,
                  r = e.stat_desc.static_tree,
                  a = e.stat_desc.has_stree,
                  s = e.stat_desc.extra_bits,
                  o = e.stat_desc.extra_base,
                  l = e.stat_desc.max_length;
               let c, h, u, d, p, f, m = 0;
               for (d = 0; d <= Ms; d++) t.bl_count[d] = 0;
               for (n[2 * t.heap[t.heap_max] + 1] = 0, c = t.heap_max + 1; c < 573; c++) h = t.heap[c], d = n[2 * n[2 * h + 1] + 1] + 1, d > l && (d = l, m++), n[2 * h + 1] = d, h > i || (t.bl_count[d]++, p = 0, h >= o && (p = s[h - o]), f = n[2 * h], t.opt_len += f * (d + p), a && (t.static_len += f * (r[2 * h + 1] + p)));
               if (0 !== m) {
                  do {
                     for (d = l - 1; 0 === t.bl_count[d];) d--;
                     t.bl_count[d]--, t.bl_count[d + 1] += 2, t.bl_count[l]--, m -= 2
                  } while (m > 0);
                  for (d = l; 0 !== d; d--)
                     for (h = t.bl_count[d]; 0 !== h;) u = t.heap[--c], u > i || (n[2 * u + 1] !== d && (t.opt_len += (d - n[2 * u + 1]) * n[2 * u], n[2 * u + 1] = d), h--)
               }
            })(t, e), Vs(n, c, t.bl_count)
         },
         Zs = (t, e, n) => {
            let i, r, a = -1,
               s = e[1],
               o = 0,
               l = 7,
               c = 4;
            for (0 === s && (l = 138, c = 3), e[2 * (n + 1) + 1] = 65535, i = 0; i <= n; i++) r = s, s = e[2 * (i + 1) + 1], ++o < l && r === s || (o < c ? t.bl_tree[2 * r] += o : 0 !== r ? (r !== a && t.bl_tree[2 * r]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++, o = 0, a = r, 0 === s ? (l = 138, c = 3) : r === s ? (l = 6, c = 3) : (l = 7, c = 4))
         },
         Ks = (t, e, n) => {
            let i, r, a = -1,
               s = e[1],
               o = 0,
               l = 7,
               c = 4;
            for (0 === s && (l = 138, c = 3), i = 0; i <= n; i++)
               if (r = s, s = e[2 * (i + 1) + 1], !(++o < l && r === s)) {
                  if (o < c)
                     do {
                        Bs(t, r, t.bl_tree)
                     } while (0 != --o);
                  else 0 !== r ? (r !== a && (Bs(t, r, t.bl_tree), o--), Bs(t, 16, t.bl_tree), zs(t, o - 3, 2)) : o <= 10 ? (Bs(t, 17, t.bl_tree), zs(t, o - 3, 3)) : (Bs(t, 18, t.bl_tree), zs(t, o - 11, 7));
                  o = 0, a = r, 0 === s ? (l = 138, c = 3) : r === s ? (l = 6, c = 3) : (l = 7, c = 4)
               }
         };
      let Js = !1;
      const Qs = (t, e, n, i) => {
         zs(t, 0 + (i ? 1 : 0), 3), Gs(t), ks(t, n), ks(t, ~n), n && t.pending_buf.set(t.window.subarray(e, e + n), t.pending), t.pending += n
      };
      var $s = (t, e, n, i) => {
            let r, a, s = 0;
            t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = (t => {
               let e, n = 4093624447;
               for (e = 0; e <= 31; e++, n >>>= 1)
                  if (1 & n && 0 !== t.dyn_ltree[2 * e]) return 0;
               if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
               for (e = 32; e < vs; e++)
                  if (0 !== t.dyn_ltree[2 * e]) return 1;
               return 0
            })(t)), Ys(t, t.l_desc), Ys(t, t.d_desc), s = (t => {
               let e;
               for (Zs(t, t.dyn_ltree, t.l_desc.max_code), Zs(t, t.dyn_dtree, t.d_desc.max_code), Ys(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * ws[e] + 1]; e--);
               return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
            })(t), r = t.opt_len + 3 + 7 >>> 3, a = t.static_len + 3 + 7 >>> 3, a <= r && (r = a)) : r = a = n + 5, n + 4 <= r && -1 !== e ? Qs(t, e, n, i) : 4 === t.strategy || a === r ? (zs(t, 2 + (i ? 1 : 0), 3), qs(t, Ts, As)) : (zs(t, 4 + (i ? 1 : 0), 3), ((t, e, n, i) => {
               let r;
               for (zs(t, e - 257, 5), zs(t, n - 1, 5), zs(t, i - 4, 4), r = 0; r < i; r++) zs(t, t.bl_tree[2 * ws[r] + 1], 3);
               Ks(t, t.dyn_ltree, e - 1), Ks(t, t.dyn_dtree, n - 1)
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1), qs(t, t.dyn_ltree, t.dyn_dtree)), Ws(t), i && Gs(t)
         },
         to = {
            _tr_init: t => {
               Js || ((() => {
                  let t, e, n, i, r;
                  const a = new Array(16);
                  for (n = 0, i = 0; i < 28; i++)
                     for (Ps[i] = n, t = 0; t < 1 << Ss[i]; t++) Cs[n++] = i;
                  for (Cs[n - 1] = i, r = 0, i = 0; i < 16; i++)
                     for (Ls[i] = r, t = 0; t < 1 << Es[i]; t++) Rs[r++] = i;
                  for (r >>= 7; i < ys; i++)
                     for (Ls[i] = r << 7, t = 0; t < 1 << Es[i] - 7; t++) Rs[256 + r++] = i;
                  for (e = 0; e <= Ms; e++) a[e] = 0;
                  for (t = 0; t <= 143;) Ts[2 * t + 1] = 8, t++, a[8]++;
                  for (; t <= 255;) Ts[2 * t + 1] = 9, t++, a[9]++;
                  for (; t <= 279;) Ts[2 * t + 1] = 7, t++, a[7]++;
                  for (; t <= 287;) Ts[2 * t + 1] = 8, t++, a[8]++;
                  for (Vs(Ts, 287, a), t = 0; t < ys; t++) As[2 * t + 1] = 5, As[2 * t] = Hs(t, 5);
                  Ds = new Us(Ts, Ss, 257, xs, Ms), Is = new Us(As, Es, 0, ys, Ms), Ns = new Us(new Array(0), bs, 0, 19, 7)
               })(), Js = !0), t.l_desc = new Os(t.dyn_ltree, Ds), t.d_desc = new Os(t.dyn_dtree, Is), t.bl_desc = new Os(t.bl_tree, Ns), t.bi_buf = 0, t.bi_valid = 0, Ws(t)
            },
            _tr_stored_block: Qs,
            _tr_flush_block: $s,
            _tr_tally: (t, e, n) => (t.pending_buf[t.sym_buf + t.sym_next++] = e, t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8, t.pending_buf[t.sym_buf + t.sym_next++] = n, 0 === e ? t.dyn_ltree[2 * n]++ : (t.matches++, e--, t.dyn_ltree[2 * (Cs[n] + vs + 1)]++, t.dyn_dtree[2 * Fs(e)]++), t.sym_next === t.sym_end),
            _tr_align: t => {
               zs(t, 2, 3), Bs(t, 256, Ts), (t => {
                  16 === t.bi_valid ? (ks(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
               })(t)
            }
         };
      var eo = (t, e, n, i) => {
         let r = 65535 & t | 0,
            a = t >>> 16 & 65535 | 0,
            s = 0;
         for (; 0 !== n;) {
            s = n > 2e3 ? 2e3 : n, n -= s;
            do {
               r = r + e[i++] | 0, a = a + r | 0
            } while (--s);
            r %= 65521, a %= 65521
         }
         return r | a << 16 | 0
      };
      const no = new Uint32Array((() => {
         let t, e = [];
         for (var n = 0; n < 256; n++) {
            t = n;
            for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
            e[n] = t
         }
         return e
      })());
      var io = (t, e, n, i) => {
            const r = no,
               a = i + n;
            t ^= -1;
            for (let n = i; n < a; n++) t = t >>> 8 ^ r[255 & (t ^ e[n])];
            return -1 ^ t
         },
         ro = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
         },
         ao = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
         };
      const {
         _tr_init: so,
         _tr_stored_block: oo,
         _tr_flush_block: lo,
         _tr_tally: co,
         _tr_align: ho
      } = to, {
         Z_NO_FLUSH: uo,
         Z_PARTIAL_FLUSH: po,
         Z_FULL_FLUSH: fo,
         Z_FINISH: mo,
         Z_BLOCK: go,
         Z_OK: _o,
         Z_STREAM_END: vo,
         Z_STREAM_ERROR: xo,
         Z_DATA_ERROR: yo,
         Z_BUF_ERROR: Mo,
         Z_DEFAULT_COMPRESSION: So,
         Z_FILTERED: Eo,
         Z_HUFFMAN_ONLY: bo,
         Z_RLE: wo,
         Z_FIXED: To,
         Z_DEFAULT_STRATEGY: Ao,
         Z_UNKNOWN: Ro,
         Z_DEFLATED: Co
      } = ao, Po = 258, Lo = 262, Uo = 42, Do = 113, Io = 666, No = (t, e) => (t.msg = ro[e], e), Oo = t => 2 * t - (t > 4 ? 9 : 0), Fo = t => {
         let e = t.length;
         for (; --e >= 0;) t[e] = 0
      }, ko = t => {
         let e, n, i, r = t.w_size;
         e = t.hash_size, i = e;
         do {
            n = t.head[--i], t.head[i] = n >= r ? n - r : 0
         } while (--e);
         e = r, i = e;
         do {
            n = t.prev[--i], t.prev[i] = n >= r ? n - r : 0
         } while (--e)
      };
      let zo = (t, e, n) => (e << t.hash_shift ^ n) & t.hash_mask;
      const Bo = t => {
            const e = t.state;
            let n = e.pending;
            n > t.avail_out && (n = t.avail_out), 0 !== n && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + n), t.next_out), t.next_out += n, e.pending_out += n, t.total_out += n, t.avail_out -= n, e.pending -= n, 0 === e.pending && (e.pending_out = 0))
         },
         Ho = (t, e) => {
            lo(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, Bo(t.strm)
         },
         Vo = (t, e) => {
            t.pending_buf[t.pending++] = e
         },
         Wo = (t, e) => {
            t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
         },
         Go = (t, e, n, i) => {
            let r = t.avail_in;
            return r > i && (r = i), 0 === r ? 0 : (t.avail_in -= r, e.set(t.input.subarray(t.next_in, t.next_in + r), n), 1 === t.state.wrap ? t.adler = eo(t.adler, e, r, n) : 2 === t.state.wrap && (t.adler = io(t.adler, e, r, n)), t.next_in += r, t.total_in += r, r)
         },
         Xo = (t, e) => {
            let n, i, r = t.max_chain_length,
               a = t.strstart,
               s = t.prev_length,
               o = t.nice_match;
            const l = t.strstart > t.w_size - Lo ? t.strstart - (t.w_size - Lo) : 0,
               c = t.window,
               h = t.w_mask,
               u = t.prev,
               d = t.strstart + Po;
            let p = c[a + s - 1],
               f = c[a + s];
            t.prev_length >= t.good_match && (r >>= 2), o > t.lookahead && (o = t.lookahead);
            do {
               if (n = e, c[n + s] === f && c[n + s - 1] === p && c[n] === c[a] && c[++n] === c[a + 1]) {
                  a += 2, n++;
                  do {} while (c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && c[++a] === c[++n] && a < d);
                  if (i = Po - (d - a), a = d - Po, i > s) {
                     if (t.match_start = e, s = i, i >= o) break;
                     p = c[a + s - 1], f = c[a + s]
                  }
               }
            } while ((e = u[e & h]) > l && 0 != --r);
            return s <= t.lookahead ? s : t.lookahead
         },
         jo = t => {
            const e = t.w_size;
            let n, i, r;
            do {
               if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - Lo) && (t.window.set(t.window.subarray(e, e + e - i), 0), t.match_start -= e, t.strstart -= e, t.block_start -= e, t.insert > t.strstart && (t.insert = t.strstart), ko(t), i += e), 0 === t.strm.avail_in) break;
               if (n = Go(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += n, t.lookahead + t.insert >= 3)
                  for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = zo(t, t.ins_h, t.window[r + 1]); t.insert && (t.ins_h = zo(t, t.ins_h, t.window[r + 3 - 1]), t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < 3)););
            } while (t.lookahead < Lo && 0 !== t.strm.avail_in)
         },
         qo = (t, e) => {
            let n, i, r, a = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5,
               s = 0,
               o = t.strm.avail_in;
            do {
               if (n = 65535, r = t.bi_valid + 42 >> 3, t.strm.avail_out < r) break;
               if (r = t.strm.avail_out - r, i = t.strstart - t.block_start, n > i + t.strm.avail_in && (n = i + t.strm.avail_in), n > r && (n = r), n < a && (0 === n && e !== mo || e === uo || n !== i + t.strm.avail_in)) break;
               s = e === mo && n === i + t.strm.avail_in ? 1 : 0, oo(t, 0, 0, s), t.pending_buf[t.pending - 4] = n, t.pending_buf[t.pending - 3] = n >> 8, t.pending_buf[t.pending - 2] = ~n, t.pending_buf[t.pending - 1] = ~n >> 8, Bo(t.strm), i && (i > n && (i = n), t.strm.output.set(t.window.subarray(t.block_start, t.block_start + i), t.strm.next_out), t.strm.next_out += i, t.strm.avail_out -= i, t.strm.total_out += i, t.block_start += i, n -= i), n && (Go(t.strm, t.strm.output, t.strm.next_out, n), t.strm.next_out += n, t.strm.avail_out -= n, t.strm.total_out += n)
            } while (0 === s);
            return o -= t.strm.avail_in, o && (o >= t.w_size ? (t.matches = 2, t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0), t.strstart = t.w_size, t.insert = t.strstart) : (t.window_size - t.strstart <= o && (t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, t.insert > t.strstart && (t.insert = t.strstart)), t.window.set(t.strm.input.subarray(t.strm.next_in - o, t.strm.next_in), t.strstart), t.strstart += o, t.insert += o > t.w_size - t.insert ? t.w_size - t.insert : o), t.block_start = t.strstart), t.high_water < t.strstart && (t.high_water = t.strstart), s ? 4 : e !== uo && e !== mo && 0 === t.strm.avail_in && t.strstart === t.block_start ? 2 : (r = t.window_size - t.strstart, t.strm.avail_in > r && t.block_start >= t.w_size && (t.block_start -= t.w_size, t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, r += t.w_size, t.insert > t.strstart && (t.insert = t.strstart)), r > t.strm.avail_in && (r = t.strm.avail_in), r && (Go(t.strm, t.window, t.strstart, r), t.strstart += r, t.insert += r > t.w_size - t.insert ? t.w_size - t.insert : r), t.high_water < t.strstart && (t.high_water = t.strstart), r = t.bi_valid + 42 >> 3, r = t.pending_buf_size - r > 65535 ? 65535 : t.pending_buf_size - r, a = r > t.w_size ? t.w_size : r, i = t.strstart - t.block_start, (i >= a || (i || e === mo) && e !== uo && 0 === t.strm.avail_in && i <= r) && (n = i > r ? r : i, s = e === mo && 0 === t.strm.avail_in && n === i ? 1 : 0, oo(t, t.block_start, n, s), t.block_start += n, Bo(t.strm)), s ? 3 : 1)
         },
         Yo = (t, e) => {
            let n, i;
            for (;;) {
               if (t.lookahead < Lo) {
                  if (jo(t), t.lookahead < Lo && e === uo) return 1;
                  if (0 === t.lookahead) break
               }
               if (n = 0, t.lookahead >= 3 && (t.ins_h = zo(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== n && t.strstart - n <= t.w_size - Lo && (t.match_length = Xo(t, n)), t.match_length >= 3)
                  if (i = co(t, t.strstart - t.match_start, t.match_length - 3), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= 3) {
                     t.match_length--;
                     do {
                        t.strstart++, t.ins_h = zo(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                     } while (0 != --t.match_length);
                     t.strstart++
                  } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = zo(t, t.ins_h, t.window[t.strstart + 1]);
               else i = co(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
               if (i && (Ho(t, !1), 0 === t.strm.avail_out)) return 1
            }
            return t.insert = t.strstart < 2 ? t.strstart : 2, e === mo ? (Ho(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ho(t, !1), 0 === t.strm.avail_out) ? 1 : 2
         },
         Zo = (t, e) => {
            let n, i, r;
            for (;;) {
               if (t.lookahead < Lo) {
                  if (jo(t), t.lookahead < Lo && e === uo) return 1;
                  if (0 === t.lookahead) break
               }
               if (n = 0, t.lookahead >= 3 && (t.ins_h = zo(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = 2, 0 !== n && t.prev_length < t.max_lazy_match && t.strstart - n <= t.w_size - Lo && (t.match_length = Xo(t, n), t.match_length <= 5 && (t.strategy === Eo || 3 === t.match_length && t.strstart - t.match_start > 4096) && (t.match_length = 2)), t.prev_length >= 3 && t.match_length <= t.prev_length) {
                  r = t.strstart + t.lookahead - 3, i = co(t, t.strstart - 1 - t.prev_match, t.prev_length - 3), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                  do {
                     ++t.strstart <= r && (t.ins_h = zo(t, t.ins_h, t.window[t.strstart + 3 - 1]), n = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                  } while (0 != --t.prev_length);
                  if (t.match_available = 0, t.match_length = 2, t.strstart++, i && (Ho(t, !1), 0 === t.strm.avail_out)) return 1
               } else if (t.match_available) {
                  if (i = co(t, 0, t.window[t.strstart - 1]), i && Ho(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return 1
               } else t.match_available = 1, t.strstart++, t.lookahead--
            }
            return t.match_available && (i = co(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < 2 ? t.strstart : 2, e === mo ? (Ho(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ho(t, !1), 0 === t.strm.avail_out) ? 1 : 2
         };

      function Ko(t, e, n, i, r) {
         this.good_length = t, this.max_lazy = e, this.nice_length = n, this.max_chain = i, this.func = r
      }
      const Jo = [new Ko(0, 0, 0, 0, qo), new Ko(4, 4, 8, 4, Yo), new Ko(4, 5, 16, 8, Yo), new Ko(4, 6, 32, 32, Yo), new Ko(4, 4, 16, 16, Zo), new Ko(8, 16, 32, 32, Zo), new Ko(8, 16, 128, 128, Zo), new Ko(8, 32, 128, 256, Zo), new Ko(32, 128, 258, 1024, Zo), new Ko(32, 258, 258, 4096, Zo)];

      function Qo() {
         this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Co, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), Fo(this.dyn_ltree), Fo(this.dyn_dtree), Fo(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), Fo(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), Fo(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
      }
      const $o = t => {
            if (!t) return 1;
            const e = t.state;
            return !e || e.strm !== t || e.status !== Uo && 57 !== e.status && 69 !== e.status && 73 !== e.status && 91 !== e.status && 103 !== e.status && e.status !== Do && e.status !== Io ? 1 : 0
         },
         tl = t => {
            if ($o(t)) return No(t, xo);
            t.total_in = t.total_out = 0, t.data_type = Ro;
            const e = t.state;
            return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = 2 === e.wrap ? 57 : e.wrap ? Uo : Do, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = -2, so(e), _o
         },
         el = t => {
            const e = tl(t);
            var n;
            return e === _o && ((n = t.state).window_size = 2 * n.w_size, Fo(n.head), n.max_lazy_match = Jo[n.level].max_lazy, n.good_match = Jo[n.level].good_length, n.nice_match = Jo[n.level].nice_length, n.max_chain_length = Jo[n.level].max_chain, n.strstart = 0, n.block_start = 0, n.lookahead = 0, n.insert = 0, n.match_length = n.prev_length = 2, n.match_available = 0, n.ins_h = 0), e
         },
         nl = (t, e, n, i, r, a) => {
            if (!t) return xo;
            let s = 1;
            if (e === So && (e = 6), i < 0 ? (s = 0, i = -i) : i > 15 && (s = 2, i -= 16), r < 1 || r > 9 || n !== Co || i < 8 || i > 15 || e < 0 || e > 9 || a < 0 || a > To || 8 === i && 1 !== s) return No(t, xo);
            8 === i && (i = 9);
            const o = new Qo;
            return t.state = o, o.strm = t, o.status = Uo, o.wrap = s, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = r + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + 3 - 1) / 3), o.window = new Uint8Array(2 * o.w_size), o.head = new Uint16Array(o.hash_size), o.prev = new Uint16Array(o.w_size), o.lit_bufsize = 1 << r + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new Uint8Array(o.pending_buf_size), o.sym_buf = o.lit_bufsize, o.sym_end = 3 * (o.lit_bufsize - 1), o.level = e, o.strategy = a, o.method = n, el(t)
         };
      var il = {
         deflateInit: (t, e) => nl(t, e, Co, 15, 8, Ao),
         deflateInit2: nl,
         deflateReset: el,
         deflateResetKeep: tl,
         deflateSetHeader: (t, e) => $o(t) || 2 !== t.state.wrap ? xo : (t.state.gzhead = e, _o),
         deflate: (t, e) => {
            if ($o(t) || e > go || e < 0) return t ? No(t, xo) : xo;
            const n = t.state;
            if (!t.output || 0 !== t.avail_in && !t.input || n.status === Io && e !== mo) return No(t, 0 === t.avail_out ? Mo : xo);
            const i = n.last_flush;
            if (n.last_flush = e, 0 !== n.pending) {
               if (Bo(t), 0 === t.avail_out) return n.last_flush = -1, _o
            } else if (0 === t.avail_in && Oo(e) <= Oo(i) && e !== mo) return No(t, Mo);
            if (n.status === Io && 0 !== t.avail_in) return No(t, Mo);
            if (n.status === Uo && 0 === n.wrap && (n.status = Do), n.status === Uo) {
               let e = Co + (n.w_bits - 8 << 4) << 8,
                  i = -1;
               if (i = n.strategy >= bo || n.level < 2 ? 0 : n.level < 6 ? 1 : 6 === n.level ? 2 : 3, e |= i << 6, 0 !== n.strstart && (e |= 32), e += 31 - e % 31, Wo(n, e), 0 !== n.strstart && (Wo(n, t.adler >>> 16), Wo(n, 65535 & t.adler)), t.adler = 1, n.status = Do, Bo(t), 0 !== n.pending) return n.last_flush = -1, _o
            }
            if (57 === n.status)
               if (t.adler = 0, Vo(n, 31), Vo(n, 139), Vo(n, 8), n.gzhead) Vo(n, (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)), Vo(n, 255 & n.gzhead.time), Vo(n, n.gzhead.time >> 8 & 255), Vo(n, n.gzhead.time >> 16 & 255), Vo(n, n.gzhead.time >> 24 & 255), Vo(n, 9 === n.level ? 2 : n.strategy >= bo || n.level < 2 ? 4 : 0), Vo(n, 255 & n.gzhead.os), n.gzhead.extra && n.gzhead.extra.length && (Vo(n, 255 & n.gzhead.extra.length), Vo(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (t.adler = io(t.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = 69;
               else if (Vo(n, 0), Vo(n, 0), Vo(n, 0), Vo(n, 0), Vo(n, 0), Vo(n, 9 === n.level ? 2 : n.strategy >= bo || n.level < 2 ? 4 : 0), Vo(n, 3), n.status = Do, Bo(t), 0 !== n.pending) return n.last_flush = -1, _o;
            if (69 === n.status) {
               if (n.gzhead.extra) {
                  let e = n.pending,
                     i = (65535 & n.gzhead.extra.length) - n.gzindex;
                  for (; n.pending + i > n.pending_buf_size;) {
                     let r = n.pending_buf_size - n.pending;
                     if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + r), n.pending), n.pending = n.pending_buf_size, n.gzhead.hcrc && n.pending > e && (t.adler = io(t.adler, n.pending_buf, n.pending - e, e)), n.gzindex += r, Bo(t), 0 !== n.pending) return n.last_flush = -1, _o;
                     e = 0, i -= r
                  }
                  let r = new Uint8Array(n.gzhead.extra);
                  n.pending_buf.set(r.subarray(n.gzindex, n.gzindex + i), n.pending), n.pending += i, n.gzhead.hcrc && n.pending > e && (t.adler = io(t.adler, n.pending_buf, n.pending - e, e)), n.gzindex = 0
               }
               n.status = 73
            }
            if (73 === n.status) {
               if (n.gzhead.name) {
                  let e, i = n.pending;
                  do {
                     if (n.pending === n.pending_buf_size) {
                        if (n.gzhead.hcrc && n.pending > i && (t.adler = io(t.adler, n.pending_buf, n.pending - i, i)), Bo(t), 0 !== n.pending) return n.last_flush = -1, _o;
                        i = 0
                     }
                     e = n.gzindex < n.gzhead.name.length ? 255 & n.gzhead.name.charCodeAt(n.gzindex++) : 0, Vo(n, e)
                  } while (0 !== e);
                  n.gzhead.hcrc && n.pending > i && (t.adler = io(t.adler, n.pending_buf, n.pending - i, i)), n.gzindex = 0
               }
               n.status = 91
            }
            if (91 === n.status) {
               if (n.gzhead.comment) {
                  let e, i = n.pending;
                  do {
                     if (n.pending === n.pending_buf_size) {
                        if (n.gzhead.hcrc && n.pending > i && (t.adler = io(t.adler, n.pending_buf, n.pending - i, i)), Bo(t), 0 !== n.pending) return n.last_flush = -1, _o;
                        i = 0
                     }
                     e = n.gzindex < n.gzhead.comment.length ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++) : 0, Vo(n, e)
                  } while (0 !== e);
                  n.gzhead.hcrc && n.pending > i && (t.adler = io(t.adler, n.pending_buf, n.pending - i, i))
               }
               n.status = 103
            }
            if (103 === n.status) {
               if (n.gzhead.hcrc) {
                  if (n.pending + 2 > n.pending_buf_size && (Bo(t), 0 !== n.pending)) return n.last_flush = -1, _o;
                  Vo(n, 255 & t.adler), Vo(n, t.adler >> 8 & 255), t.adler = 0
               }
               if (n.status = Do, Bo(t), 0 !== n.pending) return n.last_flush = -1, _o
            }
            if (0 !== t.avail_in || 0 !== n.lookahead || e !== uo && n.status !== Io) {
               let i = 0 === n.level ? qo(n, e) : n.strategy === bo ? ((t, e) => {
                  let n;
                  for (;;) {
                     if (0 === t.lookahead && (jo(t), 0 === t.lookahead)) {
                        if (e === uo) return 1;
                        break
                     }
                     if (t.match_length = 0, n = co(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, n && (Ho(t, !1), 0 === t.strm.avail_out)) return 1
                  }
                  return t.insert = 0, e === mo ? (Ho(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ho(t, !1), 0 === t.strm.avail_out) ? 1 : 2
               })(n, e) : n.strategy === wo ? ((t, e) => {
                  let n, i, r, a;
                  const s = t.window;
                  for (;;) {
                     if (t.lookahead <= Po) {
                        if (jo(t), t.lookahead <= Po && e === uo) return 1;
                        if (0 === t.lookahead) break
                     }
                     if (t.match_length = 0, t.lookahead >= 3 && t.strstart > 0 && (r = t.strstart - 1, i = s[r], i === s[++r] && i === s[++r] && i === s[++r])) {
                        a = t.strstart + Po;
                        do {} while (i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && i === s[++r] && r < a);
                        t.match_length = Po - (a - r), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                     }
                     if (t.match_length >= 3 ? (n = co(t, 1, t.match_length - 3), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (n = co(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), n && (Ho(t, !1), 0 === t.strm.avail_out)) return 1
                  }
                  return t.insert = 0, e === mo ? (Ho(t, !0), 0 === t.strm.avail_out ? 3 : 4) : t.sym_next && (Ho(t, !1), 0 === t.strm.avail_out) ? 1 : 2
               })(n, e) : Jo[n.level].func(n, e);
               if (3 !== i && 4 !== i || (n.status = Io), 1 === i || 3 === i) return 0 === t.avail_out && (n.last_flush = -1), _o;
               if (2 === i && (e === po ? ho(n) : e !== go && (oo(n, 0, 0, !1), e === fo && (Fo(n.head), 0 === n.lookahead && (n.strstart = 0, n.block_start = 0, n.insert = 0))), Bo(t), 0 === t.avail_out)) return n.last_flush = -1, _o
            }
            return e !== mo ? _o : n.wrap <= 0 ? vo : (2 === n.wrap ? (Vo(n, 255 & t.adler), Vo(n, t.adler >> 8 & 255), Vo(n, t.adler >> 16 & 255), Vo(n, t.adler >> 24 & 255), Vo(n, 255 & t.total_in), Vo(n, t.total_in >> 8 & 255), Vo(n, t.total_in >> 16 & 255), Vo(n, t.total_in >> 24 & 255)) : (Wo(n, t.adler >>> 16), Wo(n, 65535 & t.adler)), Bo(t), n.wrap > 0 && (n.wrap = -n.wrap), 0 !== n.pending ? _o : vo)
         },
         deflateEnd: t => {
            if ($o(t)) return xo;
            const e = t.state.status;
            return t.state = null, e === Do ? No(t, yo) : _o
         },
         deflateSetDictionary: (t, e) => {
            let n = e.length;
            if ($o(t)) return xo;
            const i = t.state,
               r = i.wrap;
            if (2 === r || 1 === r && i.status !== Uo || i.lookahead) return xo;
            if (1 === r && (t.adler = eo(t.adler, e, n, 0)), i.wrap = 0, n >= i.w_size) {
               0 === r && (Fo(i.head), i.strstart = 0, i.block_start = 0, i.insert = 0);
               let t = new Uint8Array(i.w_size);
               t.set(e.subarray(n - i.w_size, n), 0), e = t, n = i.w_size
            }
            const a = t.avail_in,
               s = t.next_in,
               o = t.input;
            for (t.avail_in = n, t.next_in = 0, t.input = e, jo(i); i.lookahead >= 3;) {
               let t = i.strstart,
                  e = i.lookahead - 2;
               do {
                  i.ins_h = zo(i, i.ins_h, i.window[t + 3 - 1]), i.prev[t & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = t, t++
               } while (--e);
               i.strstart = t, i.lookahead = 2, jo(i)
            }
            return i.strstart += i.lookahead, i.block_start = i.strstart, i.insert = i.lookahead, i.lookahead = 0, i.match_length = i.prev_length = 2, i.match_available = 0, t.next_in = s, t.input = o, t.avail_in = a, i.wrap = r, _o
         },
         deflateInfo: "pako deflate (from Nodeca project)"
      };
      const rl = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
      var al = function (t) {
            const e = Array.prototype.slice.call(arguments, 1);
            for (; e.length;) {
               const n = e.shift();
               if (n) {
                  if ("object" != typeof n) throw new TypeError(n + "must be non-object");
                  for (const e in n) rl(n, e) && (t[e] = n[e])
               }
            }
            return t
         },
         sl = t => {
            let e = 0;
            for (let n = 0, i = t.length; n < i; n++) e += t[n].length;
            const n = new Uint8Array(e);
            for (let e = 0, i = 0, r = t.length; e < r; e++) {
               let r = t[e];
               n.set(r, i), i += r.length
            }
            return n
         };
      let ol = !0;
      try {
         String.fromCharCode.apply(null, new Uint8Array(1))
      } catch (t) {
         ol = !1
      }
      const ll = new Uint8Array(256);
      for (let t = 0; t < 256; t++) ll[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
      ll[254] = ll[254] = 1;
      var cl = t => {
            if ("function" == typeof TextEncoder && TextEncoder.prototype.encode) return (new TextEncoder).encode(t);
            let e, n, i, r, a, s = t.length,
               o = 0;
            for (r = 0; r < s; r++) n = t.charCodeAt(r), 55296 == (64512 & n) && r + 1 < s && (i = t.charCodeAt(r + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), o += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
            for (e = new Uint8Array(o), a = 0, r = 0; a < o; r++) n = t.charCodeAt(r), 55296 == (64512 & n) && r + 1 < s && (i = t.charCodeAt(r + 1), 56320 == (64512 & i) && (n = 65536 + (n - 55296 << 10) + (i - 56320), r++)), n < 128 ? e[a++] = n : n < 2048 ? (e[a++] = 192 | n >>> 6, e[a++] = 128 | 63 & n) : n < 65536 ? (e[a++] = 224 | n >>> 12, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n) : (e[a++] = 240 | n >>> 18, e[a++] = 128 | n >>> 12 & 63, e[a++] = 128 | n >>> 6 & 63, e[a++] = 128 | 63 & n);
            return e
         },
         hl = (t, e) => {
            const n = e || t.length;
            if ("function" == typeof TextDecoder && TextDecoder.prototype.decode) return (new TextDecoder).decode(t.subarray(0, e));
            let i, r;
            const a = new Array(2 * n);
            for (r = 0, i = 0; i < n;) {
               let e = t[i++];
               if (e < 128) {
                  a[r++] = e;
                  continue
               }
               let s = ll[e];
               if (s > 4) a[r++] = 65533, i += s - 1;
               else {
                  for (e &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && i < n;) e = e << 6 | 63 & t[i++], s--;
                  s > 1 ? a[r++] = 65533 : e < 65536 ? a[r++] = e : (e -= 65536, a[r++] = 55296 | e >> 10 & 1023, a[r++] = 56320 | 1023 & e)
               }
            }
            return ((t, e) => {
               if (e < 65534 && t.subarray && ol) return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
               let n = "";
               for (let i = 0; i < e; i++) n += String.fromCharCode(t[i]);
               return n
            })(a, r)
         },
         ul = (t, e) => {
            (e = e || t.length) > t.length && (e = t.length);
            let n = e - 1;
            for (; n >= 0 && 128 == (192 & t[n]);) n--;
            return n < 0 || 0 === n ? e : n + ll[t[n]] > e ? n : e
         };
      var dl = function () {
         this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
      };
      const pl = Object.prototype.toString,
         {
            Z_NO_FLUSH: fl,
            Z_SYNC_FLUSH: ml,
            Z_FULL_FLUSH: gl,
            Z_FINISH: _l,
            Z_OK: vl,
            Z_STREAM_END: xl,
            Z_DEFAULT_COMPRESSION: yl,
            Z_DEFAULT_STRATEGY: Ml,
            Z_DEFLATED: Sl
         } = ao;

      function El(t) {
         this.options = al({
            level: yl,
            method: Sl,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: Ml
         }, t || {});
         let e = this.options;
         e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new dl, this.strm.avail_out = 0;
         let n = il.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
         if (n !== vl) throw new Error(ro[n]);
         if (e.header && il.deflateSetHeader(this.strm, e.header), e.dictionary) {
            let t;
            if (t = "string" == typeof e.dictionary ? cl(e.dictionary) : "[object ArrayBuffer]" === pl.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, n = il.deflateSetDictionary(this.strm, t), n !== vl) throw new Error(ro[n]);
            this._dict_set = !0
         }
      }

      function bl(t, e) {
         const n = new El(e);
         if (n.push(t, !0), n.err) throw n.msg || ro[n.err];
         return n.result
      }
      El.prototype.push = function (t, e) {
         const n = this.strm,
            i = this.options.chunkSize;
         let r, a;
         if (this.ended) return !1;
         for (a = e === ~~e ? e : !0 === e ? _l : fl, "string" == typeof t ? n.input = cl(t) : "[object ArrayBuffer]" === pl.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;)
            if (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), (a === ml || a === gl) && n.avail_out <= 6) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
            else {
               if (r = il.deflate(n, a), r === xl) return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), r = il.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === vl;
               if (0 !== n.avail_out) {
                  if (a > 0 && n.next_out > 0) this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
                  else if (0 === n.avail_in) break
               } else this.onData(n.output)
            } return !0
      }, El.prototype.onData = function (t) {
         this.chunks.push(t)
      }, El.prototype.onEnd = function (t) {
         t === vl && (this.result = sl(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
      };
      var wl = {
         Deflate: El,
         deflate: bl,
         deflateRaw: function (t, e) {
            return (e = e || {}).raw = !0, bl(t, e)
         },
         gzip: function (t, e) {
            return (e = e || {}).gzip = !0, bl(t, e)
         },
         constants: ao
      };
      const Tl = 16209;
      var Al = function (t, e) {
         let n, i, r, a, s, o, l, c, h, u, d, p, f, m, g, _, v, x, y, M, S, E, b, w;
         const T = t.state;
         n = t.next_in, b = t.input, i = n + (t.avail_in - 5), r = t.next_out, w = t.output, a = r - (e - t.avail_out), s = r + (t.avail_out - 257), o = T.dmax, l = T.wsize, c = T.whave, h = T.wnext, u = T.window, d = T.hold, p = T.bits, f = T.lencode, m = T.distcode, g = (1 << T.lenbits) - 1, _ = (1 << T.distbits) - 1;
         t: do {
            p < 15 && (d += b[n++] << p, p += 8, d += b[n++] << p, p += 8), v = f[d & g];
            e: for (;;) {
               if (x = v >>> 24, d >>>= x, p -= x, x = v >>> 16 & 255, 0 === x) w[r++] = 65535 & v;
               else {
                  if (!(16 & x)) {
                     if (0 == (64 & x)) {
                        v = f[(65535 & v) + (d & (1 << x) - 1)];
                        continue e
                     }
                     if (32 & x) {
                        T.mode = 16191;
                        break t
                     }
                     t.msg = "invalid literal/length code", T.mode = Tl;
                     break t
                  }
                  y = 65535 & v, x &= 15, x && (p < x && (d += b[n++] << p, p += 8), y += d & (1 << x) - 1, d >>>= x, p -= x), p < 15 && (d += b[n++] << p, p += 8, d += b[n++] << p, p += 8), v = m[d & _];
                  n: for (;;) {
                     if (x = v >>> 24, d >>>= x, p -= x, x = v >>> 16 & 255, !(16 & x)) {
                        if (0 == (64 & x)) {
                           v = m[(65535 & v) + (d & (1 << x) - 1)];
                           continue n
                        }
                        t.msg = "invalid distance code", T.mode = Tl;
                        break t
                     }
                     if (M = 65535 & v, x &= 15, p < x && (d += b[n++] << p, p += 8, p < x && (d += b[n++] << p, p += 8)), M += d & (1 << x) - 1, M > o) {
                        t.msg = "invalid distance too far back", T.mode = Tl;
                        break t
                     }
                     if (d >>>= x, p -= x, x = r - a, M > x) {
                        if (x = M - x, x > c && T.sane) {
                           t.msg = "invalid distance too far back", T.mode = Tl;
                           break t
                        }
                        if (S = 0, E = u, 0 === h) {
                           if (S += l - x, x < y) {
                              y -= x;
                              do {
                                 w[r++] = u[S++]
                              } while (--x);
                              S = r - M, E = w
                           }
                        } else if (h < x) {
                           if (S += l + h - x, x -= h, x < y) {
                              y -= x;
                              do {
                                 w[r++] = u[S++]
                              } while (--x);
                              if (S = 0, h < y) {
                                 x = h, y -= x;
                                 do {
                                    w[r++] = u[S++]
                                 } while (--x);
                                 S = r - M, E = w
                              }
                           }
                        } else if (S += h - x, x < y) {
                           y -= x;
                           do {
                              w[r++] = u[S++]
                           } while (--x);
                           S = r - M, E = w
                        }
                        for (; y > 2;) w[r++] = E[S++], w[r++] = E[S++], w[r++] = E[S++], y -= 3;
                        y && (w[r++] = E[S++], y > 1 && (w[r++] = E[S++]))
                     } else {
                        S = r - M;
                        do {
                           w[r++] = w[S++], w[r++] = w[S++], w[r++] = w[S++], y -= 3
                        } while (y > 2);
                        y && (w[r++] = w[S++], y > 1 && (w[r++] = w[S++]))
                     }
                     break
                  }
               }
               break
            }
         } while (n < i && r < s);
         y = p >> 3, n -= y, p -= y << 3, d &= (1 << p) - 1, t.next_in = n, t.next_out = r, t.avail_in = n < i ? i - n + 5 : 5 - (n - i), t.avail_out = r < s ? s - r + 257 : 257 - (r - s), T.hold = d, T.bits = p
      };
      const Rl = 15,
         Cl = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]),
         Pl = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]),
         Ll = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]),
         Ul = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]);
      var Dl = (t, e, n, i, r, a, s, o) => {
         const l = o.bits;
         let c, h, u, d, p, f, m = 0,
            g = 0,
            _ = 0,
            v = 0,
            x = 0,
            y = 0,
            M = 0,
            S = 0,
            E = 0,
            b = 0,
            w = null;
         const T = new Uint16Array(16),
            A = new Uint16Array(16);
         let R, C, P, L = null;
         for (m = 0; m <= Rl; m++) T[m] = 0;
         for (g = 0; g < i; g++) T[e[n + g]]++;
         for (x = l, v = Rl; v >= 1 && 0 === T[v]; v--);
         if (x > v && (x = v), 0 === v) return r[a++] = 20971520, r[a++] = 20971520, o.bits = 1, 0;
         for (_ = 1; _ < v && 0 === T[_]; _++);
         for (x < _ && (x = _), S = 1, m = 1; m <= Rl; m++)
            if (S <<= 1, S -= T[m], S < 0) return -1;
         if (S > 0 && (0 === t || 1 !== v)) return -1;
         for (A[1] = 0, m = 1; m < Rl; m++) A[m + 1] = A[m] + T[m];
         for (g = 0; g < i; g++) 0 !== e[n + g] && (s[A[e[n + g]]++] = g);
         if (0 === t ? (w = L = s, f = 20) : 1 === t ? (w = Cl, L = Pl, f = 257) : (w = Ll, L = Ul, f = 0), b = 0, g = 0, m = _, p = a, y = x, M = 0, u = -1, E = 1 << x, d = E - 1, 1 === t && E > 852 || 2 === t && E > 592) return 1;
         for (;;) {
            R = m - M, s[g] + 1 < f ? (C = 0, P = s[g]) : s[g] >= f ? (C = L[s[g] - f], P = w[s[g] - f]) : (C = 96, P = 0), c = 1 << m - M, h = 1 << y, _ = h;
            do {
               h -= c, r[p + (b >> M) + h] = R << 24 | C << 16 | P | 0
            } while (0 !== h);
            for (c = 1 << m - 1; b & c;) c >>= 1;
            if (0 !== c ? (b &= c - 1, b += c) : b = 0, g++, 0 == --T[m]) {
               if (m === v) break;
               m = e[n + s[g]]
            }
            if (m > x && (b & d) !== u) {
               for (0 === M && (M = x), p += _, y = m - M, S = 1 << y; y + M < v && (S -= T[y + M], !(S <= 0));) y++, S <<= 1;
               if (E += 1 << y, 1 === t && E > 852 || 2 === t && E > 592) return 1;
               u = b & d, r[u] = x << 24 | y << 16 | p - a | 0
            }
         }
         return 0 !== b && (r[p + b] = m - M << 24 | 64 << 16 | 0), o.bits = x, 0
      };
      const {
         Z_FINISH: Il,
         Z_BLOCK: Nl,
         Z_TREES: Ol,
         Z_OK: Fl,
         Z_STREAM_END: kl,
         Z_NEED_DICT: zl,
         Z_STREAM_ERROR: Bl,
         Z_DATA_ERROR: Hl,
         Z_MEM_ERROR: Vl,
         Z_BUF_ERROR: Wl,
         Z_DEFLATED: Gl
      } = ao, Xl = 16180, jl = 16190, ql = 16191, Yl = 16192, Zl = 16194, Kl = 16199, Jl = 16200, Ql = 16206, $l = 16209, tc = t => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);

      function ec() {
         this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
      }
      const nc = t => {
            if (!t) return 1;
            const e = t.state;
            return !e || e.strm !== t || e.mode < Xl || e.mode > 16211 ? 1 : 0
         },
         ic = t => {
            if (nc(t)) return Bl;
            const e = t.state;
            return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = Xl, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(852), e.distcode = e.distdyn = new Int32Array(592), e.sane = 1, e.back = -1, Fl
         },
         rc = t => {
            if (nc(t)) return Bl;
            const e = t.state;
            return e.wsize = 0, e.whave = 0, e.wnext = 0, ic(t)
         },
         ac = (t, e) => {
            let n;
            if (nc(t)) return Bl;
            const i = t.state;
            return e < 0 ? (n = 0, e = -e) : (n = 5 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Bl : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = n, i.wbits = e, rc(t))
         },
         sc = (t, e) => {
            if (!t) return Bl;
            const n = new ec;
            t.state = n, n.strm = t, n.window = null, n.mode = Xl;
            const i = ac(t, e);
            return i !== Fl && (t.state = null), i
         };
      let oc, lc, cc = !0;
      const hc = t => {
            if (cc) {
               oc = new Int32Array(512), lc = new Int32Array(32);
               let e = 0;
               for (; e < 144;) t.lens[e++] = 8;
               for (; e < 256;) t.lens[e++] = 9;
               for (; e < 280;) t.lens[e++] = 7;
               for (; e < 288;) t.lens[e++] = 8;
               for (Dl(1, t.lens, 0, 288, oc, 0, t.work, {
                     bits: 9
                  }), e = 0; e < 32;) t.lens[e++] = 5;
               Dl(2, t.lens, 0, 32, lc, 0, t.work, {
                  bits: 5
               }), cc = !1
            }
            t.lencode = oc, t.lenbits = 9, t.distcode = lc, t.distbits = 5
         },
         uc = (t, e, n, i) => {
            let r;
            const a = t.state;
            return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new Uint8Array(a.wsize)), i >= a.wsize ? (a.window.set(e.subarray(n - a.wsize, n), 0), a.wnext = 0, a.whave = a.wsize) : (r = a.wsize - a.wnext, r > i && (r = i), a.window.set(e.subarray(n - i, n - i + r), a.wnext), (i -= r) ? (a.window.set(e.subarray(n - i, n), 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += r, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += r))), 0
         };
      var dc = {
         inflateReset: rc,
         inflateReset2: ac,
         inflateResetKeep: ic,
         inflateInit: t => sc(t, 15),
         inflateInit2: sc,
         inflate: (t, e) => {
            let n, i, r, a, s, o, l, c, h, u, d, p, f, m, g, _, v, x, y, M, S, E, b = 0;
            const w = new Uint8Array(4);
            let T, A;
            const R = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
            if (nc(t) || !t.output || !t.input && 0 !== t.avail_in) return Bl;
            n = t.state, n.mode === ql && (n.mode = Yl), s = t.next_out, r = t.output, l = t.avail_out, a = t.next_in, i = t.input, o = t.avail_in, c = n.hold, h = n.bits, u = o, d = l, E = Fl;
            t: for (;;) switch (n.mode) {
               case Xl:
                  if (0 === n.wrap) {
                     n.mode = Yl;
                     break
                  }
                  for (; h < 16;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  if (2 & n.wrap && 35615 === c) {
                     0 === n.wbits && (n.wbits = 15), n.check = 0, w[0] = 255 & c, w[1] = c >>> 8 & 255, n.check = io(n.check, w, 2, 0), c = 0, h = 0, n.mode = 16181;
                     break
                  }
                  if (n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & c) << 8) + (c >> 8)) % 31) {
                     t.msg = "incorrect header check", n.mode = $l;
                     break
                  }
                  if ((15 & c) !== Gl) {
                     t.msg = "unknown compression method", n.mode = $l;
                     break
                  }
                  if (c >>>= 4, h -= 4, S = 8 + (15 & c), 0 === n.wbits && (n.wbits = S), S > 15 || S > n.wbits) {
                     t.msg = "invalid window size", n.mode = $l;
                     break
                  }
                  n.dmax = 1 << n.wbits, n.flags = 0, t.adler = n.check = 1, n.mode = 512 & c ? 16189 : ql, c = 0, h = 0;
                  break;
               case 16181:
                  for (; h < 16;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  if (n.flags = c, (255 & n.flags) !== Gl) {
                     t.msg = "unknown compression method", n.mode = $l;
                     break
                  }
                  if (57344 & n.flags) {
                     t.msg = "unknown header flags set", n.mode = $l;
                     break
                  }
                  n.head && (n.head.text = c >> 8 & 1), 512 & n.flags && 4 & n.wrap && (w[0] = 255 & c, w[1] = c >>> 8 & 255, n.check = io(n.check, w, 2, 0)), c = 0, h = 0, n.mode = 16182;
               case 16182:
                  for (; h < 32;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  n.head && (n.head.time = c), 512 & n.flags && 4 & n.wrap && (w[0] = 255 & c, w[1] = c >>> 8 & 255, w[2] = c >>> 16 & 255, w[3] = c >>> 24 & 255, n.check = io(n.check, w, 4, 0)), c = 0, h = 0, n.mode = 16183;
               case 16183:
                  for (; h < 16;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  n.head && (n.head.xflags = 255 & c, n.head.os = c >> 8), 512 & n.flags && 4 & n.wrap && (w[0] = 255 & c, w[1] = c >>> 8 & 255, n.check = io(n.check, w, 2, 0)), c = 0, h = 0, n.mode = 16184;
               case 16184:
                  if (1024 & n.flags) {
                     for (; h < 16;) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     n.length = c, n.head && (n.head.extra_len = c), 512 & n.flags && 4 & n.wrap && (w[0] = 255 & c, w[1] = c >>> 8 & 255, n.check = io(n.check, w, 2, 0)), c = 0, h = 0
                  } else n.head && (n.head.extra = null);
                  n.mode = 16185;
               case 16185:
                  if (1024 & n.flags && (p = n.length, p > o && (p = o), p && (n.head && (S = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(i.subarray(a, a + p), S)), 512 & n.flags && 4 & n.wrap && (n.check = io(n.check, i, p, a)), o -= p, a += p, n.length -= p), n.length)) break t;
                  n.length = 0, n.mode = 16186;
               case 16186:
                  if (2048 & n.flags) {
                     if (0 === o) break t;
                     p = 0;
                     do {
                        S = i[a + p++], n.head && S && n.length < 65536 && (n.head.name += String.fromCharCode(S))
                     } while (S && p < o);
                     if (512 & n.flags && 4 & n.wrap && (n.check = io(n.check, i, p, a)), o -= p, a += p, S) break t
                  } else n.head && (n.head.name = null);
                  n.length = 0, n.mode = 16187;
               case 16187:
                  if (4096 & n.flags) {
                     if (0 === o) break t;
                     p = 0;
                     do {
                        S = i[a + p++], n.head && S && n.length < 65536 && (n.head.comment += String.fromCharCode(S))
                     } while (S && p < o);
                     if (512 & n.flags && 4 & n.wrap && (n.check = io(n.check, i, p, a)), o -= p, a += p, S) break t
                  } else n.head && (n.head.comment = null);
                  n.mode = 16188;
               case 16188:
                  if (512 & n.flags) {
                     for (; h < 16;) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     if (4 & n.wrap && c !== (65535 & n.check)) {
                        t.msg = "header crc mismatch", n.mode = $l;
                        break
                     }
                     c = 0, h = 0
                  }
                  n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), t.adler = n.check = 0, n.mode = ql;
                  break;
               case 16189:
                  for (; h < 32;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  t.adler = n.check = tc(c), c = 0, h = 0, n.mode = jl;
               case jl:
                  if (0 === n.havedict) return t.next_out = s, t.avail_out = l, t.next_in = a, t.avail_in = o, n.hold = c, n.bits = h, zl;
                  t.adler = n.check = 1, n.mode = ql;
               case ql:
                  if (e === Nl || e === Ol) break t;
               case Yl:
                  if (n.last) {
                     c >>>= 7 & h, h -= 7 & h, n.mode = Ql;
                     break
                  }
                  for (; h < 3;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  switch (n.last = 1 & c, c >>>= 1, h -= 1, 3 & c) {
                     case 0:
                        n.mode = 16193;
                        break;
                     case 1:
                        if (hc(n), n.mode = Kl, e === Ol) {
                           c >>>= 2, h -= 2;
                           break t
                        }
                        break;
                     case 2:
                        n.mode = 16196;
                        break;
                     case 3:
                        t.msg = "invalid block type", n.mode = $l
                  }
                  c >>>= 2, h -= 2;
                  break;
               case 16193:
                  for (c >>>= 7 & h, h -= 7 & h; h < 32;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  if ((65535 & c) != (c >>> 16 ^ 65535)) {
                     t.msg = "invalid stored block lengths", n.mode = $l;
                     break
                  }
                  if (n.length = 65535 & c, c = 0, h = 0, n.mode = Zl, e === Ol) break t;
               case Zl:
                  n.mode = 16195;
               case 16195:
                  if (p = n.length, p) {
                     if (p > o && (p = o), p > l && (p = l), 0 === p) break t;
                     r.set(i.subarray(a, a + p), s), o -= p, a += p, l -= p, s += p, n.length -= p;
                     break
                  }
                  n.mode = ql;
                  break;
               case 16196:
                  for (; h < 14;) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  if (n.nlen = 257 + (31 & c), c >>>= 5, h -= 5, n.ndist = 1 + (31 & c), c >>>= 5, h -= 5, n.ncode = 4 + (15 & c), c >>>= 4, h -= 4, n.nlen > 286 || n.ndist > 30) {
                     t.msg = "too many length or distance symbols", n.mode = $l;
                     break
                  }
                  n.have = 0, n.mode = 16197;
               case 16197:
                  for (; n.have < n.ncode;) {
                     for (; h < 3;) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     n.lens[R[n.have++]] = 7 & c, c >>>= 3, h -= 3
                  }
                  for (; n.have < 19;) n.lens[R[n.have++]] = 0;
                  if (n.lencode = n.lendyn, n.lenbits = 7, T = {
                        bits: n.lenbits
                     }, E = Dl(0, n.lens, 0, 19, n.lencode, 0, n.work, T), n.lenbits = T.bits, E) {
                     t.msg = "invalid code lengths set", n.mode = $l;
                     break
                  }
                  n.have = 0, n.mode = 16198;
               case 16198:
                  for (; n.have < n.nlen + n.ndist;) {
                     for (; b = n.lencode[c & (1 << n.lenbits) - 1], g = b >>> 24, _ = b >>> 16 & 255, v = 65535 & b, !(g <= h);) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     if (v < 16) c >>>= g, h -= g, n.lens[n.have++] = v;
                     else {
                        if (16 === v) {
                           for (A = g + 2; h < A;) {
                              if (0 === o) break t;
                              o--, c += i[a++] << h, h += 8
                           }
                           if (c >>>= g, h -= g, 0 === n.have) {
                              t.msg = "invalid bit length repeat", n.mode = $l;
                              break
                           }
                           S = n.lens[n.have - 1], p = 3 + (3 & c), c >>>= 2, h -= 2
                        } else if (17 === v) {
                           for (A = g + 3; h < A;) {
                              if (0 === o) break t;
                              o--, c += i[a++] << h, h += 8
                           }
                           c >>>= g, h -= g, S = 0, p = 3 + (7 & c), c >>>= 3, h -= 3
                        } else {
                           for (A = g + 7; h < A;) {
                              if (0 === o) break t;
                              o--, c += i[a++] << h, h += 8
                           }
                           c >>>= g, h -= g, S = 0, p = 11 + (127 & c), c >>>= 7, h -= 7
                        }
                        if (n.have + p > n.nlen + n.ndist) {
                           t.msg = "invalid bit length repeat", n.mode = $l;
                           break
                        }
                        for (; p--;) n.lens[n.have++] = S
                     }
                  }
                  if (n.mode === $l) break;
                  if (0 === n.lens[256]) {
                     t.msg = "invalid code -- missing end-of-block", n.mode = $l;
                     break
                  }
                  if (n.lenbits = 9, T = {
                        bits: n.lenbits
                     }, E = Dl(1, n.lens, 0, n.nlen, n.lencode, 0, n.work, T), n.lenbits = T.bits, E) {
                     t.msg = "invalid literal/lengths set", n.mode = $l;
                     break
                  }
                  if (n.distbits = 6, n.distcode = n.distdyn, T = {
                        bits: n.distbits
                     }, E = Dl(2, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, T), n.distbits = T.bits, E) {
                     t.msg = "invalid distances set", n.mode = $l;
                     break
                  }
                  if (n.mode = Kl, e === Ol) break t;
               case Kl:
                  n.mode = Jl;
               case Jl:
                  if (o >= 6 && l >= 258) {
                     t.next_out = s, t.avail_out = l, t.next_in = a, t.avail_in = o, n.hold = c, n.bits = h, Al(t, d), s = t.next_out, r = t.output, l = t.avail_out, a = t.next_in, i = t.input, o = t.avail_in, c = n.hold, h = n.bits, n.mode === ql && (n.back = -1);
                     break
                  }
                  for (n.back = 0; b = n.lencode[c & (1 << n.lenbits) - 1], g = b >>> 24, _ = b >>> 16 & 255, v = 65535 & b, !(g <= h);) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  if (_ && 0 == (240 & _)) {
                     for (x = g, y = _, M = v; b = n.lencode[M + ((c & (1 << x + y) - 1) >> x)], g = b >>> 24, _ = b >>> 16 & 255, v = 65535 & b, !(x + g <= h);) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     c >>>= x, h -= x, n.back += x
                  }
                  if (c >>>= g, h -= g, n.back += g, n.length = v, 0 === _) {
                     n.mode = 16205;
                     break
                  }
                  if (32 & _) {
                     n.back = -1, n.mode = ql;
                     break
                  }
                  if (64 & _) {
                     t.msg = "invalid literal/length code", n.mode = $l;
                     break
                  }
                  n.extra = 15 & _, n.mode = 16201;
               case 16201:
                  if (n.extra) {
                     for (A = n.extra; h < A;) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     n.length += c & (1 << n.extra) - 1, c >>>= n.extra, h -= n.extra, n.back += n.extra
                  }
                  n.was = n.length, n.mode = 16202;
               case 16202:
                  for (; b = n.distcode[c & (1 << n.distbits) - 1], g = b >>> 24, _ = b >>> 16 & 255, v = 65535 & b, !(g <= h);) {
                     if (0 === o) break t;
                     o--, c += i[a++] << h, h += 8
                  }
                  if (0 == (240 & _)) {
                     for (x = g, y = _, M = v; b = n.distcode[M + ((c & (1 << x + y) - 1) >> x)], g = b >>> 24, _ = b >>> 16 & 255, v = 65535 & b, !(x + g <= h);) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     c >>>= x, h -= x, n.back += x
                  }
                  if (c >>>= g, h -= g, n.back += g, 64 & _) {
                     t.msg = "invalid distance code", n.mode = $l;
                     break
                  }
                  n.offset = v, n.extra = 15 & _, n.mode = 16203;
               case 16203:
                  if (n.extra) {
                     for (A = n.extra; h < A;) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     n.offset += c & (1 << n.extra) - 1, c >>>= n.extra, h -= n.extra, n.back += n.extra
                  }
                  if (n.offset > n.dmax) {
                     t.msg = "invalid distance too far back", n.mode = $l;
                     break
                  }
                  n.mode = 16204;
               case 16204:
                  if (0 === l) break t;
                  if (p = d - l, n.offset > p) {
                     if (p = n.offset - p, p > n.whave && n.sane) {
                        t.msg = "invalid distance too far back", n.mode = $l;
                        break
                     }
                     p > n.wnext ? (p -= n.wnext, f = n.wsize - p) : f = n.wnext - p, p > n.length && (p = n.length), m = n.window
                  } else m = r, f = s - n.offset, p = n.length;
                  p > l && (p = l), l -= p, n.length -= p;
                  do {
                     r[s++] = m[f++]
                  } while (--p);
                  0 === n.length && (n.mode = Jl);
                  break;
               case 16205:
                  if (0 === l) break t;
                  r[s++] = n.length, l--, n.mode = Jl;
                  break;
               case Ql:
                  if (n.wrap) {
                     for (; h < 32;) {
                        if (0 === o) break t;
                        o--, c |= i[a++] << h, h += 8
                     }
                     if (d -= l, t.total_out += d, n.total += d, 4 & n.wrap && d && (t.adler = n.check = n.flags ? io(n.check, r, d, s - d) : eo(n.check, r, d, s - d)), d = l, 4 & n.wrap && (n.flags ? c : tc(c)) !== n.check) {
                        t.msg = "incorrect data check", n.mode = $l;
                        break
                     }
                     c = 0, h = 0
                  }
                  n.mode = 16207;
               case 16207:
                  if (n.wrap && n.flags) {
                     for (; h < 32;) {
                        if (0 === o) break t;
                        o--, c += i[a++] << h, h += 8
                     }
                     if (4 & n.wrap && c !== (4294967295 & n.total)) {
                        t.msg = "incorrect length check", n.mode = $l;
                        break
                     }
                     c = 0, h = 0
                  }
                  n.mode = 16208;
               case 16208:
                  E = kl;
                  break t;
               case $l:
                  E = Hl;
                  break t;
               case 16210:
                  return Vl;
               default:
                  return Bl
            }
            return t.next_out = s, t.avail_out = l, t.next_in = a, t.avail_in = o, n.hold = c, n.bits = h, (n.wsize || d !== t.avail_out && n.mode < $l && (n.mode < Ql || e !== Il)) && uc(t, t.output, t.next_out, d - t.avail_out), u -= t.avail_in, d -= t.avail_out, t.total_in += u, t.total_out += d, n.total += d, 4 & n.wrap && d && (t.adler = n.check = n.flags ? io(n.check, r, d, t.next_out - d) : eo(n.check, r, d, t.next_out - d)), t.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === ql ? 128 : 0) + (n.mode === Kl || n.mode === Zl ? 256 : 0), (0 === u && 0 === d || e === Il) && E === Fl && (E = Wl), E
         },
         inflateEnd: t => {
            if (nc(t)) return Bl;
            let e = t.state;
            return e.window && (e.window = null), t.state = null, Fl
         },
         inflateGetHeader: (t, e) => {
            if (nc(t)) return Bl;
            const n = t.state;
            return 0 == (2 & n.wrap) ? Bl : (n.head = e, e.done = !1, Fl)
         },
         inflateSetDictionary: (t, e) => {
            const n = e.length;
            let i, r, a;
            return nc(t) ? Bl : (i = t.state, 0 !== i.wrap && i.mode !== jl ? Bl : i.mode === jl && (r = 1, r = eo(r, e, n, 0), r !== i.check) ? Hl : (a = uc(t, e, n, n), a ? (i.mode = 16210, Vl) : (i.havedict = 1, Fl)))
         },
         inflateInfo: "pako inflate (from Nodeca project)"
      };
      var pc = function () {
         this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
      };
      const fc = Object.prototype.toString,
         {
            Z_NO_FLUSH: mc,
            Z_FINISH: gc,
            Z_OK: _c,
            Z_STREAM_END: vc,
            Z_NEED_DICT: xc,
            Z_STREAM_ERROR: yc,
            Z_DATA_ERROR: Mc,
            Z_MEM_ERROR: Sc
         } = ao;

      function Ec(t) {
         this.options = al({
            chunkSize: 65536,
            windowBits: 15,
            to: ""
         }, t || {});
         const e = this.options;
         e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new dl, this.strm.avail_out = 0;
         let n = dc.inflateInit2(this.strm, e.windowBits);
         if (n !== _c) throw new Error(ro[n]);
         if (this.header = new pc, dc.inflateGetHeader(this.strm, this.header), e.dictionary && ("string" == typeof e.dictionary ? e.dictionary = cl(e.dictionary) : "[object ArrayBuffer]" === fc.call(e.dictionary) && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (n = dc.inflateSetDictionary(this.strm, e.dictionary), n !== _c))) throw new Error(ro[n])
      }

      function bc(t, e) {
         const n = new Ec(e);
         if (n.push(t), n.err) throw n.msg || ro[n.err];
         return n.result
      }
      Ec.prototype.push = function (t, e) {
         const n = this.strm,
            i = this.options.chunkSize,
            r = this.options.dictionary;
         let a, s, o;
         if (this.ended) return !1;
         for (s = e === ~~e ? e : !0 === e ? gc : mc, "[object ArrayBuffer]" === fc.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;;) {
            for (0 === n.avail_out && (n.output = new Uint8Array(i), n.next_out = 0, n.avail_out = i), a = dc.inflate(n, s), a === xc && r && (a = dc.inflateSetDictionary(n, r), a === _c ? a = dc.inflate(n, s) : a === Mc && (a = xc)); n.avail_in > 0 && a === vc && n.state.wrap > 0 && 0 !== t[n.next_in];) dc.inflateReset(n), a = dc.inflate(n, s);
            switch (a) {
               case yc:
               case Mc:
               case xc:
               case Sc:
                  return this.onEnd(a), this.ended = !0, !1
            }
            if (o = n.avail_out, n.next_out && (0 === n.avail_out || a === vc))
               if ("string" === this.options.to) {
                  let t = ul(n.output, n.next_out),
                     e = n.next_out - t,
                     r = hl(n.output, t);
                  n.next_out = e, n.avail_out = i - e, e && n.output.set(n.output.subarray(t, t + e), 0), this.onData(r)
               } else this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
            if (a !== _c || 0 !== o) {
               if (a === vc) return a = dc.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
               if (0 === n.avail_in) break
            }
         }
         return !0
      }, Ec.prototype.onData = function (t) {
         this.chunks.push(t)
      }, Ec.prototype.onEnd = function (t) {
         t === _c && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = sl(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
      };
      var wc = {
         Inflate: Ec,
         inflate: bc,
         inflateRaw: function (t, e) {
            return (e = e || {}).raw = !0, bc(t, e)
         },
         ungzip: bc,
         constants: ao
      };
      const {
         Deflate: Tc,
         deflate: Ac,
         deflateRaw: Rc,
         gzip: Cc
      } = wl, {
         Inflate: Pc,
         inflate: Lc,
         inflateRaw: Uc,
         ungzip: Dc
      } = wc;
      var Ic, Nc = {
         Deflate: Tc,
         deflate: Ac,
         deflateRaw: Rc,
         gzip: Cc,
         Inflate: Pc,
         inflate: Lc,
         inflateRaw: Uc,
         ungzip: Dc,
         constants: ao
      };
      ! function (t) {
         t.encode = function (t) {
            let e = "";
            t.forEach((t => {
               e += String.fromCharCode(t)
            }));
            let n = btoa(e);
            return n = n.replace(/\+/g, "-"), n = n.replace(/\//g, "_"), n = n.replace(/=/g, ""), n
         }, t.decode = function (t) {
            let e;
            t = (t = t.replace(/\-/g, "+")).replace(/\_/g, "/");
            try {
               e = atob(t)
            } catch (t) {
               return null
            }
            const n = new Uint8Array(e.length);
            for (let t = 0; t < e.length; ++t) {
               const i = e.charCodeAt(t);
               if (i > 255) return null;
               n[t] = i
            }
            return n
         }
      }(Ic || (Ic = {}));
      const Oc = Ic;
      var Fc, kc = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         zc = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      class Bc {
         constructor(t) {
            Fc.set(this, []), null != t && kc(this, Fc, t, "f")
         }
         recordFrame(t, e) {
            if (zc(this, Fc, "f").length > 0) {
               const t = zc(this, Fc, "f")[zc(this, Fc, "f").length - 1];
               if (t.controls.up == e.up && t.controls.right == e.right && t.controls.down == e.down && t.controls.left == e.left) return
            }
            zc(this, Fc, "f").push({
               frame: t,
               controls: e
            })
         }
         getFrame(t) {
            for (let e = 0; e < zc(this, Fc, "f").length; ++e) {
               const n = zc(this, Fc, "f")[e];
               if (n.frame == t) return [n.controls.up, n.controls.right, n.controls.down, n.controls.left];
               if (n.frame > t && e > 0) {
                  const t = zc(this, Fc, "f")[e - 1];
                  return [t.controls.up, t.controls.right, t.controls.down, t.controls.left]
               }
            }
            if (zc(this, Fc, "f").length > 0) {
               const t = zc(this, Fc, "f")[zc(this, Fc, "f").length - 1];
               return [t.controls.up, t.controls.right, t.controls.down, t.controls.left]
            }
            return [!1, !1, !1, !1]
         }
         getRecording() {
            return zc(this, Fc, "f")
         }
         serialize() {
            const t = new Uint8Array(Math.ceil(3.5 * zc(this, Fc, "f").length));
            for (let e = 0; e < zc(this, Fc, "f").length; ++e) {
               const n = zc(this, Fc, "f")[e];
               t[3 * e] = 255 & n.frame, t[3 * e + 1] = n.frame >>> 8 & 255, t[3 * e + 2] = n.frame >>> 16 & 255
            }
            for (let e = 0; e < zc(this, Fc, "f").length; e += 2) {
               const n = zc(this, Fc, "f")[e];
               let i = 0;
               if (i |= n.controls.up ? 1 : 0, i |= (n.controls.right ? 1 : 0) << 1, i |= (n.controls.down ? 1 : 0) << 2, i |= (n.controls.left ? 1 : 0) << 3, e + 1 < zc(this, Fc, "f").length) {
                  const t = zc(this, Fc, "f")[e + 1];
                  i |= (t.controls.up ? 1 : 0) << 4, i |= (t.controls.right ? 1 : 0) << 5, i |= (t.controls.down ? 1 : 0) << 6, i |= (t.controls.left ? 1 : 0) << 7
               }
               t[3 * zc(this, Fc, "f").length + Math.floor(e / 2)] = i
            }
            const e = new Nc.Deflate({
               level: 9
            });
            return e.push(new Uint8Array(t), !0), Oc.encode(e.result)
         }
         static deserialize(t) {
            const e = Oc.decode(t);
            if (null == e) return null;
            const n = new Nc.Inflate;
            if (n.push(e, !0), n.err) return null;
            const i = n.result,
               r = [],
               a = Math.round(i.length / 3.5);
            for (let t = 0; t < a; ++t) {
               const e = i[3 * t + 0] | i[3 * t + 1] << 8 | i[3 * t + 2] << 16;
               let n;
               const s = i[3 * a + Math.floor(t / 2)];
               n = t % 2 == 0 ? {
                  up: 1 == (1 & s),
                  right: 1 == (s >>> 1 & 1),
                  down: 1 == (s >>> 2 & 1),
                  left: 1 == (s >>> 3 & 1)
               } : {
                  up: 1 == (s >>> 4 & 1),
                  right: 1 == (s >>> 5 & 1),
                  down: 1 == (s >>> 6 & 1),
                  left: 1 == (s >>> 7 & 1)
               }, r.push({
                  frame: e,
                  controls: n
               })
            }
            return new Bc(r)
         }
      }
      Fc = new WeakMap;
      const Hc = Bc;
      var Vc, Wc, Gc, Xc, jc, qc, Yc, Zc, Kc, Jc, Qc, $c, th, eh, nh, ih, rh, ah, sh, oh, lh, ch, hh = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         uh = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      class dh {
         constructor() {
            Vc.add(this), Gc.set(this, void 0), Xc.set(this, void 0), jc.set(this, void 0), qc.set(this, void 0), Yc.set(this, void 0), Zc.set(this, void 0), Kc.set(this, []), Jc.set(this, []), Qc.set(this, new Map), th.set(this, []), eh.set(this, null), nh.set(this, null), ih.set(this, 0), rh.set(this, 0), ah.set(this, 1e3), sh.set(this, []), oh.set(this, []), hh(this, Gc, new Ammo.btDefaultCollisionConfiguration, "f"), hh(this, Xc, new Ammo.btCollisionDispatcher(uh(this, Gc, "f")), "f"), hh(this, jc, new Ammo.btDbvtBroadphase, "f"), hh(this, qc, new Ammo.btSequentialImpulseConstraintSolver, "f"), hh(this, Yc, new Ammo.btDiscreteDynamicsWorld(uh(this, Xc, "f"), uh(this, jc, "f"), uh(this, qc, "f"), uh(this, Gc, "f")), "f"), hh(this, Zc, new Ammo.btGhostPairCallback, "f"), uh(this, Yc, "f").getPairCache().setInternalGhostPairCallback(uh(this, Zc, "f"));
            const t = new Ammo.btVector3(0, -9.82, 0);
            uh(this, Yc, "f").setGravity(t), Ammo.destroy(t)
         }
         dispose() {
            uh(this, Kc, "f").forEach((t => {
               uh(this, Yc, "f").removeRigidBody(t), Ammo.destroy(t.getMotionState()), Ammo.destroy(t)
            })), uh(this, Kc, "f").length = 0, uh(this, th, "f").forEach((({
               body: t
            }) => {
               uh(this, Yc, "f").removeRigidBody(t)
            })), uh(this, th, "f").length = 0, uh(this, Jc, "f").forEach((({
               body: t
            }) => {
               Ammo.destroy(t.getMotionState()), Ammo.destroy(t)
            })), uh(this, Jc, "f").length = 0, uh(this, Qc, "f").clear(), null != uh(this, eh, "f") && Ammo.destroy(uh(this, eh, "f")), null != uh(this, nh, "f") && (Ammo.destroy(uh(this, nh, "f").shape), Ammo.destroy(uh(this, nh, "f").triangleMesh)), Ammo.destroy(uh(this, Yc, "f")), Ammo.destroy(uh(this, Zc, "f")), Ammo.destroy(uh(this, qc, "f")), Ammo.destroy(uh(this, jc, "f")), Ammo.destroy(uh(this, Xc, "f")), Ammo.destroy(uh(this, Gc, "f"))
         }
         createGroundPlane() {
            if (null != uh(this, eh, "f")) throw "Ground is already initialized";
            const t = new Ammo.btVector3(0, 1, 0),
               e = new Ammo.btStaticPlaneShape(t, 0);
            Ammo.destroy(t);
            const n = new Ammo.btTransform;
            n.setIdentity();
            const i = new Ammo.btDefaultMotionState(n);
            Ammo.destroy(n);
            const r = new Ammo.btVector3;
            e.calculateLocalInertia(0, r);
            const a = new Ammo.btRigidBodyConstructionInfo(0, i, e, r),
               s = new Ammo.btRigidBody(a);
            Ammo.destroy(r), Ammo.destroy(a), uh(this, Vc, "m", lh).call(this, s), hh(this, eh, e, "f")
         }
         createMountains(t, e) {
            if (t.length % 9 != 0) throw "Number of mountain vertices is not dividable by 9";
            if (t.length > 0) {
               if (null != uh(this, nh, "f")) throw "Mountains are already initialized";
               const n = new Ammo.btTriangleMesh;
               for (let e = 0; e < t.length; e += 9) {
                  const i = t[e + 0],
                     r = t[e + 1],
                     a = t[e + 2],
                     s = t[e + 3],
                     o = t[e + 4],
                     l = t[e + 5],
                     c = t[e + 6],
                     h = t[e + 7],
                     u = t[e + 8],
                     d = new Ammo.btVector3(i, r, a),
                     p = new Ammo.btVector3(s, o, l),
                     f = new Ammo.btVector3(c, h, u);
                  n.addTriangle(d, p, f), Ammo.destroy(d), Ammo.destroy(p), Ammo.destroy(f)
               }
               const i = new Ammo.btBvhTriangleMeshShape(n),
                  r = new Ammo.btVector3(e.x, e.y, e.z),
                  a = new Ammo.btTransform;
               a.setIdentity(), a.setOrigin(r), Ammo.destroy(r);
               const s = new Ammo.btVector3;
               i.calculateLocalInertia(0, s);
               const o = new Ammo.btDefaultMotionState(a);
               Ammo.destroy(a);
               const l = new Ammo.btRigidBodyConstructionInfo(0, o, i, s),
                  c = new Ammo.btRigidBody(l);
               Ammo.destroy(s), Ammo.destroy(l), uh(this, Vc, "m", lh).call(this, c), hh(this, nh, {
                  shape: i,
                  triangleMesh: n
               }, "f")
            }
         }
         addStaticBody(t) {
            const e = {
               active: !1,
               body: t
            };
            uh(this, Jc, "f").push(e);
            const n = new Ammo.btVector3,
               i = new Ammo.btVector3;
            t.getAabb(n, i);
            const r = uh(dh, Wc, "f", $c);
            for (let t = Math.floor((n.x() - 3) / r); t <= Math.ceil((i.x() + 3) / r); ++t)
               for (let a = Math.floor((n.y() - 3) / r); a <= Math.ceil((i.y() + 3) / r); ++a)
                  for (let s = Math.floor((n.z() - 3) / r); s <= Math.ceil((i.z() + 3) / r); ++s) {
                     const n = t + "|" + a + "|" + s,
                        i = uh(this, Qc, "f").get(n);
                     null != i ? i.push(e) : uh(this, Qc, "f").set(n, [e])
                  }
            Ammo.destroy(n), Ammo.destroy(i)
         }
         activePhysicsAt(t) {
            const e = new Ammo.btVector3,
               n = new Ammo.btVector3;
            hh(this, th, uh(this, th, "f").filter((i => {
               i.body.getAabb(e, n);
               const r = t.x < e.x() - 3 || t.x > n.x() + 3,
                  a = t.y < e.y() - 3 || t.y > n.y() + 3,
                  s = t.z < e.z() - 3 || t.z > n.z() + 3;
               return !(!(r && a && s) && i.active) || (uh(this, Yc, "f").removeRigidBody(i.body), i.active = !1, !1)
            })), "f");
            const i = t.clone().divideScalar(uh(dh, Wc, "f", $c)).floor(),
               r = i.x + "|" + i.y + "|" + i.z,
               a = uh(this, Qc, "f").get(r);
            null != a && a.forEach((i => {
               i.body.getAabb(e, n);
               const r = t.x >= e.x() - 3 && t.x <= n.x() + 3,
                  a = t.y >= e.y() - 3 && t.y <= n.y() + 3,
                  s = t.z >= e.z() - 3 && t.z <= n.z() + 3;
               r && a && s && (i.active || (uh(this, Yc, "f").addRigidBody(i.body), i.active = !0, uh(this, th, "f").push(i)))
            })), Ammo.destroy(e), Ammo.destroy(n)
         }
         addPreStepEventListener(t) {
            uh(this, sh, "f").push(t)
         }
         addPostStepEventListener(t) {
            uh(this, oh, "f").push(t)
         }
         removePreStepEventListener(t) {
            hh(this, sh, uh(this, sh, "f").filter((e => e != t)), "f")
         }
         removePostStepEventListener(t) {
            hh(this, oh, uh(this, oh, "f").filter((e => e != t)), "f")
         }
         update(t) {
            hh(this, ih, uh(this, ih, "f") + t, "f");
            let e = 0;
            for (; uh(this, ih, "f") > 1 / uh(this, ah, "f");) uh(this, Vc, "m", ch).call(this), hh(this, ih, uh(this, ih, "f") - 1 / uh(this, ah, "f"), "f"), ++e, e > uh(this, ah, "f") && hh(this, ih, 0, "f")
         }
         get world() {
            return uh(this, Yc, "f")
         }
         get dispatcher() {
            return uh(this, Xc, "f")
         }
         get currentFrame() {
            return uh(this, rh, "f")
         }
      }
      Wc = dh, Gc = new WeakMap, Xc = new WeakMap, jc = new WeakMap, qc = new WeakMap, Yc = new WeakMap, Zc = new WeakMap, Kc = new WeakMap, Jc = new WeakMap, Qc = new WeakMap, th = new WeakMap, eh = new WeakMap, nh = new WeakMap, ih = new WeakMap, rh = new WeakMap, ah = new WeakMap, sh = new WeakMap, oh = new WeakMap, Vc = new WeakSet, lh = function (t) {
         uh(this, Yc, "f").addRigidBody(t), uh(this, Kc, "f").push(t)
      }, ch = function () {
         var t;
         for (let t = 0; t < uh(this, sh, "f").length; ++t) uh(this, sh, "f")[t](1 / uh(this, ah, "f"));
         uh(this, Yc, "f").stepSimulation(1 / uh(this, ah, "f"), 0, 1 / uh(this, ah, "f")), hh(this, rh, (t = uh(this, rh, "f"), ++t), "f");
         for (let t = 0; t < uh(this, oh, "f").length; ++t) uh(this, oh, "f")[t](1 / uh(this, ah, "f"))
      }, $c = {
         value: 40
      };
      const ph = dh;
      var fh, mh = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         gh = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      class _h {
         constructor(t) {
            if (fh.set(this, 0), null != t) {
               if (!Number.isSafeInteger(t)) throw "Frames is not a safe integer";
               mh(this, fh, t, "f")
            }
         }
         get numberOfFrames() {
            return gh(this, fh, "f")
         }
         get time() {
            return gh(this, fh, "f") / 1e3
         }
         increment() {
            var t;
            mh(this, fh, (t = gh(this, fh, "f"), ++t), "f")
         }
         difference(t) {
            return new _h(gh(this, fh, "f") - gh(t, fh, "f"))
         }
         lessThan(t) {
            return gh(this, fh, "f") < gh(t, fh, "f")
         }
         greaterThan(t) {
            return gh(this, fh, "f") > gh(t, fh, "f")
         }
         lessOrEqual(t) {
            return gh(this, fh, "f") <= gh(t, fh, "f")
         }
         greaterOrEqual(t) {
            return gh(this, fh, "f") >= gh(t, fh, "f")
         }
         equals(t) {
            return gh(this, fh, "f") == gh(t, fh, "f")
         }
         isNegative() {
            return gh(this, fh, "f") < 0
         }
         clone() {
            const t = new _h;
            return mh(t, fh, gh(this, fh, "f"), "f"), t
         }
      }
      fh = new WeakMap;
      const vh = _h;
      var xh;
      ! function (t) {
         t[t.Checkpoint = 0] = "Checkpoint", t[t.Finish = 1] = "Finish"
      }(xh || (xh = {}));
      const yh = xh;
      var Mh, Sh, Eh, bh, wh = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         Th = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      class Ah {
         constructor(t, e, n) {
            Mh.add(this), Sh.set(this, void 0), Eh.set(this, new Map), wh(this, Sh, e, "f"), n.forEachPart(((n, i, r, a, s, o) => {
               Th(this, Mh, "m", bh).call(this, n, i, r, s, a, t, e);
               const l = Th(this, Eh, "f").get(a);
               null == l ? Th(this, Eh, "f").set(a, [{
                  x: n,
                  y: i,
                  z: r,
                  rotation: s,
                  type: a,
                  checkpointOrder: o
               }]) : l.push({
                  x: n,
                  y: i,
                  z: r,
                  rotation: s,
                  type: a,
                  checkpointOrder: o
               })
            }))
         }
         checkCheckpoint(t, e) {
            return this.checkFinishOrCheckpoint(t, e)
         }
         checkFinish(t) {
            return this.checkFinishOrCheckpoint(t)
         }
         checkFinishOrCheckpoint(t, e) {
            let n = [],
               i = null;
            if (null == e) {
               Th(this, Sh, "f").getPartTypesWithDetector(yh.Finish).forEach((t => {
                  const e = Th(this, Sh, "f").getDetector(t);
                  if (null == e) throw "Part detector is missing";
                  const i = Th(this, Eh, "f").get(t);
                  null != i && (n = n.concat(i.map((({
                     x: t,
                     y: n,
                     z: i,
                     rotation: r,
                     checkpointOrder: a
                  }) => ({
                     x: t,
                     y: n,
                     z: i,
                     rotation: r,
                     checkpointOrder: a,
                     detector: e
                  })))))
               }))
            } else {
               Th(this, Sh, "f").getPartTypesWithDetector(yh.Checkpoint).forEach((t => {
                  const e = Th(this, Sh, "f").getDetector(t);
                  if (null == e) throw "Part detector is missing";
                  const i = Th(this, Eh, "f").get(t);
                  null != i && (n = n.concat(i.map((({
                     x: t,
                     y: n,
                     z: i,
                     rotation: r,
                     checkpointOrder: a
                  }) => ({
                     x: t,
                     y: n,
                     z: i,
                     rotation: r,
                     checkpointOrder: a,
                     detector: e
                  })))))
               }));
               const t = n.map((t => {
                  if (null == t.checkpointOrder) throw "Checkpoint has no checkpoint order";
                  return t.checkpointOrder
               })).filter(((t, e, n) => n.indexOf(t) == e)).sort(((t, e) => t - e));
               e < t.length && (i = t[e])
            }
            return n.some((({
               x: e,
               y: n,
               z: r,
               rotation: a,
               checkpointOrder: s,
               detector: o
            }) => {
               if (s == i) {
                  const i = new Dt(...o.center),
                     s = new Dt(...o.size);
                  let l, c;
                  if (0 == a) l = new Dt(i.x, i.y, i.z), c = new Dt(s.x, s.y, s.z);
                  else if (1 == a) l = new Dt(i.z, i.y, -i.x), c = new Dt(s.z, s.y, s.x);
                  else if (2 == a) l = new Dt(-i.x, i.y, -i.z), c = new Dt(s.x, s.y, s.z);
                  else {
                     if (3 != a) throw "Invalid rotation";
                     l = new Dt(i.z, i.y, i.x), c = new Dt(s.z, s.y, s.x)
                  }
                  l.add(new Dt(e * Ah.partWidth, n * Ah.partHeight, r * Ah.partLength));
                  const h = (new Ot).setFromCenterAndSize(l, c);
                  return t.some((t => h.intersectsTriangle(t)))
               }
               return !1
            }))
         }
         getTotalNumberOfCheckpointIndices() {
            let t = [];
            if (Th(this, Sh, "f").getPartTypesWithDetector(yh.Checkpoint).forEach((e => {
                  const n = Th(this, Sh, "f").getDetector(e);
                  if (null == n) throw "Part detector is missing";
                  const i = Th(this, Eh, "f").get(e);
                  null != i && (t = t.concat(i.map((({
                     x: t,
                     y: e,
                     z: i,
                     rotation: r,
                     checkpointOrder: a
                  }) => ({
                     x: t,
                     y: e,
                     z: i,
                     rotation: r,
                     checkpointOrder: a,
                     detector: n
                  })))))
               })), null == t) return 0;
            return t.map((t => t.checkpointOrder)).filter(((t, e, n) => n.indexOf(t) == e)).length
         }
      }
      Sh = new WeakMap, Eh = new WeakMap, Mh = new WeakSet, bh = function (t, e, n, i, r, a, s) {
         const o = new Ammo.btTransform,
            l = new Ammo.btVector3(t * Ah.partWidth, e * Ah.partHeight, n * Ah.partLength);
         o.setOrigin(l), Ammo.destroy(l);
         const c = new Ammo.btQuaternion;
         c.setEulerZYX(0, i * Math.PI / 2, 0), o.setRotation(c), Ammo.destroy(c);
         const h = new Ammo.btDefaultMotionState(o);
         Ammo.destroy(o);
         const u = s.getPhysicsShape(r),
            d = new Ammo.btVector3;
         u.calculateLocalInertia(0, d);
         const p = new Ammo.btRigidBodyConstructionInfo(0, h, u, d),
            f = new Ammo.btRigidBody(p);
         Ammo.destroy(d), Ammo.destroy(p), a.addStaticBody(f)
      }, Ah.partWidth = 20, Ah.partHeight = 5, Ah.partLength = 20;
      const Rh = Ah;
      var Ch, Ph, Lh, Uh, Dh, Ih, Nh, Oh, Fh, kh, zh, Bh, Hh, Vh, Wh, Gh, Xh, jh, qh, Yh, Zh, Kh, Jh, Qh, $h = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         tu = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      Ph = new WeakMap, Lh = new WeakMap, Uh = new WeakMap, Dh = new WeakMap, Ih = new WeakMap, Nh = new WeakMap, Oh = new WeakMap, Fh = new WeakMap, kh = new WeakMap, zh = new WeakMap, Bh = new WeakMap, Hh = new WeakMap, Vh = new WeakMap, Wh = new WeakMap, Gh = new WeakMap, Xh = new WeakMap, jh = new WeakMap, Ch = new WeakSet, qh = function (t) {
         if (t.length % 3 != 0) throw "Car collision shape number of vertices is not dividable by 3";
         const e = new Ammo.btConvexHullShape;
         for (let n = 0; n < t.length; n += 3) {
            const i = t[n + 0],
               r = t[n + 1],
               a = t[n + 2],
               s = new Ammo.btVector3(i, r, a);
            e.addPoint(s, !0), Ammo.destroy(s)
         }
         const n = new Ammo.btCompoundShape,
            i = new Ammo.btTransform;
         i.setIdentity();
         const r = new Ammo.btVector3(0, tu(this, Nh, "f"), 0);
         return i.setOrigin(r), Ammo.destroy(r), n.addChildShape(i, e), Ammo.destroy(i), n
      }, Yh = function () {
         return new Dt(0, 0, 1).applyQuaternion(this.getQuaternion())
      }, Zh = function () {
         return new Dt(0, -1, 0).applyQuaternion(this.getQuaternion())
      }, Kh = function () {
         if (null == tu(this, Dh, "f")) return new Dt; {
            const t = tu(this, Dh, "f").getLinearVelocity();
            return new Dt(t.x(), t.y(), t.z())
         }
      }, Jh = function () {
         const t = tu(this, Ch, "m", Yh).call(this).dot(tu(this, Ch, "m", Kh).call(this)),
            e = tu(this, Ch, "m", Zh).call(this),
            n = .05,
            i = new Ammo.btVector3(e.x * t * n, e.y * t * n, e.z * t * n);
         tu(this, Dh, "f").applyCentralImpulse(i), Ammo.destroy(i)
      }, Qh = function (t, e) {
         var n;
         $h(this, Vh, !1, "f");
         let i = !1,
            r = !1,
            a = !1,
            s = !1;
        console.log(e.getControls(tu(this, Lh, "f").currentFrame)) // REC CODE HERE
         if (!tu(this, kh, "f") && tu(this, zh, "f") && (({
               up: i,
               right: r,
               down: a,
               left: s
            } = null !== (n = null == e ? void 0 : e.getControls(tu(this, Lh, "f").currentFrame)) && void 0 !== n ? n : {
               up: !1,
               right: !1,
               down: !1,
               left: !1
            }), tu(this, Fh, "f").recordFrame(tu(this, Lh, "f").currentFrame, {
               up: i,
               right: r,
               down: a,
               left: s
            }), tu(this, Bh, "f").increment()), i && !tu(this, kh, "f") && tu(this, zh, "f")) {
            const t = 4e3;
            tu(this, Uh, "f").applyEngineForce(t, 2), tu(this, Uh, "f").applyEngineForce(t, 3)
         } else tu(this, Uh, "f").applyEngineForce(0, 2), tu(this, Uh, "f").applyEngineForce(0, 3);
         if (a && !tu(this, kh, "f") && tu(this, zh, "f"))
            if (this.getSpeedKmh() > 1) {
               const t = 10;
               tu(this, Uh, "f").setBrake(t, 0), tu(this, Uh, "f").setBrake(t, 1), tu(this, Uh, "f").setBrake(t, 2), tu(this, Uh, "f").setBrake(t, 3), $h(this, Vh, !0, "f")
            } else {
               const t = -1e3;
               tu(this, Uh, "f").applyEngineForce(t, 2), tu(this, Uh, "f").applyEngineForce(t, 3), tu(this, Uh, "f").setBrake(0, 0), tu(this, Uh, "f").setBrake(0, 1), tu(this, Uh, "f").setBrake(0, 2), tu(this, Uh, "f").setBrake(0, 3)
            }
         else tu(this, Uh, "f").setBrake(0, 0), tu(this, Uh, "f").setBrake(0, 1), tu(this, Uh, "f").setBrake(0, 2), tu(this, Uh, "f").setBrake(0, 3);
         const o = tu(this, Ch, "m", Kh).call(this).applyQuaternion(this.getQuaternion().invert()),
            l = -new st(o.x, o.z).normalize().angle() + Math.PI / 2;
         let c = Math.max(0, Math.min(1, this.getSpeedKmh() / 30));
         this.getWheelInContact(0) || this.getWheelInContact(1) || (c = 0);
         const h = 144 / Math.pow(46, 1.55),
            u = Math.max(-h, Math.min(h, l * c)),
            d = 144 / Math.pow(Math.max(46, Math.abs(this.getSpeedKmh())), 1.55);
         tu(this, zh, "f") && (s && !tu(this, kh, "f") ? $h(this, Oh, Math.min(tu(this, Oh, "f") + 10 * t, 1), "f") : r && !tu(this, kh, "f") ? $h(this, Oh, Math.max(tu(this, Oh, "f") - 10 * t, -1), "f") : tu(this, Oh, "f") > 0 ? $h(this, Oh, Math.max(tu(this, Oh, "f") - 10 * t, 0), "f") : tu(this, Oh, "f") < 0 && $h(this, Oh, Math.min(tu(this, Oh, "f") + 10 * t, 0), "f"));
         const p = tu(this, Oh, "f") * d;
         let f;
         f = u < 0 && p < 0 ? Math.min(u, p) : u > 0 && p > 0 ? Math.max(u, p) : u + p, tu(this, Uh, "f").setSteeringValue(f, 0), tu(this, Uh, "f").setSteeringValue(f, 1)
      };
      const eu = class {
         constructor(t, e, n, i, r, a, s, o) {
            Ch.add(this), Ph.set(this, void 0), Lh.set(this, void 0), Uh.set(this, void 0), Dh.set(this, void 0), Ih.set(this, void 0), Nh.set(this, void 0), Oh.set(this, 0), Fh.set(this, new Hc), kh.set(this, !1), zh.set(this, !1), Bh.set(this, new vh), Hh.set(this, 0), Vh.set(this, !1), Wh.set(this, void 0), Gh.set(this, void 0), Xh.set(this, []), jh.set(this, []), $h(this, Nh, a, "f"), $h(this, Lh, new ph, "f"), tu(this, Lh, "f").createGroundPlane(), tu(this, Lh, "f").createMountains(t, e), $h(this, Ph, new Rh(tu(this, Lh, "f"), n, i), "f"), tu(this, Lh, "f").addPreStepEventListener($h(this, Wh, (t => {
               null != tu(this, Uh, "f") && (tu(this, Lh, "f").activePhysicsAt(this.getPosition()), tu(this, Ch, "m", Jh).call(this), tu(this, Ch, "m", Qh).call(this, t, s))
            }), "f")), tu(this, Lh, "f").addPostStepEventListener($h(this, Gh, (t => {
               var e;
               if (null != tu(this, Uh, "f") && !tu(this, kh, "f")) {
                  const t = this.getMatrix4(),
                     n = .16,
                     i = [new je(new Dt(0, n, -1.65436).applyMatrix4(t), new Dt(.701253, n, -.458486).applyMatrix4(t), new Dt(-.701253, n, -.458486).applyMatrix4(t)), new je(new Dt(0, n, 1.94498).applyMatrix4(t), new Dt(.701253, n, -.458486).applyMatrix4(t), new Dt(-.701253, n, -.458486).applyMatrix4(t))],
                     r = tu(this, Ph, "f").getTotalNumberOfCheckpointIndices();
                  tu(this, Hh, "f") == r ? tu(this, Ph, "f").checkFinish(i) && ($h(this, kh, !0, "f"), tu(this, jh, "f").forEach((t => {
                     t()
                  }))) : tu(this, Ph, "f").checkCheckpoint(i, tu(this, Hh, "f")) && ($h(this, Hh, (e = tu(this, Hh, "f"), ++e), "f"), tu(this, Xh, "f").forEach((t => {
                     t()
                  })))
               }
            }), "f"));
            const l = new Ammo.btTransform;
            l.setIdentity();
            const c = new Ammo.btDefaultMotionState(l);
            Ammo.destroy(l);
            const h = new Ammo.btVector3(0, 0, 0);
            $h(this, Ih, tu(this, Ch, "m", qh).call(this, r), "f"), tu(this, Ih, "f").calculateLocalInertia(400, h);
            const u = new Ammo.btRigidBodyConstructionInfo(400, c, tu(this, Ih, "f"), h),
               d = new Ammo.btRigidBody(u);
            Ammo.destroy(u), Ammo.destroy(h), d.setDamping(.1, .1), d.setActivationState(4), tu(this, Lh, "f").world.addRigidBody(d, 1, 2), $h(this, Dh, d, "f");
            const p = new Ammo.btVehicleTuning,
               f = new Ammo.btDefaultVehicleRaycaster(tu(this, Lh, "f").world),
               m = new Ammo.btRaycastVehicle(p, d, f);
            m.setCoordinateSystem(0, 1, 2), tu(this, Lh, "f").world.addAction(m), $h(this, Uh, m, "f");
            const g = new Ammo.btVector3(0, -1, 0),
               _ = new Ammo.btVector3(-1, 0, 0);
            ["WheelFL", "WheelFR", "WheelBL", "WheelBR"].forEach((t => {
               let e;
               if ("WheelFL" == t) e = new Ammo.btVector3(.627909, .27, 1.3478);
               else if ("WheelFR" == t) e = new Ammo.btVector3(-.627909, .27, 1.3478);
               else if ("WheelBL" == t) e = new Ammo.btVector3(.720832, .27, -1.52686);
               else {
                  if ("WheelBR" != t) throw "Unidentified wheel";
                  e = new Ammo.btVector3(-.720832, .27, -1.52686)
               }
               const n = "WheelFL" == t || "WheelFR" == t,
                  i = m.addWheel(e, g, _, .12, .331, p, n);
               Ammo.destroy(e), i.set_m_maxSuspensionTravelCm(1e3), i.set_m_maxSuspensionForce(1e6), i.set_m_suspensionStiffness(50), i.set_m_wheelsDampingRelaxation(5), i.set_m_wheelsDampingCompression(200), i.set_m_frictionSlip(3), i.set_m_rollInfluence(.75)
            })), Ammo.destroy(g), Ammo.destroy(_);
            const v = new Ammo.btTransform;
            v.setIdentity();
            const x = new Ammo.btVector3(o.position.x, o.position.y, o.position.z);
            v.setOrigin(x), Ammo.destroy(x);
            const y = new Ammo.btQuaternion(o.quaternion.x, o.quaternion.y, o.quaternion.z, o.quaternion.w);
            v.setRotation(y), Ammo.destroy(y), tu(this, Dh, "f").setWorldTransform(v), tu(this, Dh, "f").getMotionState().setWorldTransform(v), Ammo.destroy(v), tu(this, Uh, "f").resetSuspension(), tu(this, Uh, "f").setSteeringValue(0, 0), tu(this, Uh, "f").setSteeringValue(0, 1);
            const M = tu(this, Uh, "f").getNumWheels();
            for (let t = 0; t < M; t++) tu(this, Uh, "f").updateWheelTransform(t, !0)
         }
         dispose() {
            tu(this, Lh, "f").world.removeRigidBody(tu(this, Dh, "f")), Ammo.destroy(tu(this, Dh, "f").getMotionState()), Ammo.destroy(tu(this, Dh, "f"));
            for (let t = 0; t < tu(this, Ih, "f").getNumChildShapes(); t++) Ammo.destroy(tu(this, Ih, "f").getChildShape(t));
            Ammo.destroy(tu(this, Ih, "f")), tu(this, Lh, "f").world.removeAction(tu(this, Uh, "f"));
            for (let t = 0; t < tu(this, Uh, "f").getNumWheels(); ++t) Ammo.destroy(tu(this, Uh, "f").getWheelInfo(t));
            Ammo.destroy(tu(this, Uh, "f")), tu(this, Lh, "f").removePreStepEventListener(tu(this, Wh, "f")), tu(this, Lh, "f").removePostStepEventListener(tu(this, Gh, "f")), tu(this, Lh, "f").dispose()
         }
         get physics() {
            return tu(this, Lh, "f")
         }
         addCheckpointCallback(t) {
            tu(this, Xh, "f").push(t)
         }
         addFinishCallback(t) {
            tu(this, jh, "f").push(t)
         }
         getSpeedKmh() {
            return null != tu(this, Uh, "f") && this.hasStarted() ? tu(this, Uh, "f").getCurrentSpeedKmHour() : 0
         }
         start() {
            $h(this, zh, !0, "f")
         }
         hasStarted() {
            return tu(this, zh, "f")
         }
         hasFinished() {
            return tu(this, kh, "f")
         }
         getRecording() {
            return tu(this, Fh, "f")
         }
         getTime() {
            return tu(this, Bh, "f").clone()
         }
         getNextCheckpointIndex() {
            return tu(this, Hh, "f")
         }
         isBrakeLightEnabled() {
            return tu(this, Vh, "f")
         }
         getPosition() {
            if (null == tu(this, Dh, "f")) return new Dt; {
               const t = new Ammo.btTransform;
               tu(this, Dh, "f").getMotionState().getWorldTransform(t);
               const e = t.getOrigin(),
                  n = new Dt(e.x(), e.y(), e.z());
               return Ammo.destroy(t), n
            }
         }
         getQuaternion() {
            if (null == tu(this, Dh, "f")) return new Ut; {
               const t = new Ammo.btTransform;
               tu(this, Dh, "f").getMotionState().getWorldTransform(t);
               const e = t.getRotation(),
                  n = new Ut(e.x(), e.y(), e.z(), e.w());
               return Ammo.destroy(t), n
            }
         }
         getMatrix4() {
            return (new ce).compose(this.getPosition(), this.getQuaternion(), new Dt(1, 1, 1))
         }
         getWheelPosition(t) {
            const e = tu(this, Uh, "f").getWheelTransformWS(t).getOrigin();
            return new Dt(e.x(), e.y(), e.z())
         }
         getWheelQuaternion(t) {
            const e = tu(this, Uh, "f").getWheelTransformWS(t).getRotation();
            return new Ut(e.x(), e.y(), e.z(), e.w())
         }
         getWheelInContact(t) {
            return tu(this, Uh, "f").getWheelInfo(t).m_raycastInfo.m_isInContact
         }
         getWheelSuspensionVelocity(t) {
            return tu(this, Uh, "f").getWheelInfo(t).m_suspensionRelativeVelocity
         }
         getWheelSuspensionLength(t) {
            return tu(this, Uh, "f").getWheelInfo(t).m_raycastInfo.m_suspensionLength
         }
         getWheelRotation(t) {
            return tu(this, Uh, "f").getWheelInfo(t).m_rotation
         }
         getWheelDeltaRotation(t) {
            return tu(this, Uh, "f").getWheelInfo(t).m_deltaRotation
         }
         getWheelSkidInfo(t) {
            return tu(this, Uh, "f").getWheelInfo(t).m_skidInfo
         }
         getCollisionImpulses() {
            const t = [],
               e = tu(this, Lh, "f").dispatcher.getNumManifolds();
            for (let n = 0; n < e; ++n) {
               const e = tu(this, Lh, "f").dispatcher.getManifoldByIndexInternal(n),
                  i = e.getBody0(),
                  r = e.getBody1();
               if (i.H == tu(this, Dh, "f").H || r.H == tu(this, Dh, "f").H) {
                  const n = e.getNumContacts();
                  for (let i = 0; i < n; ++i) {
                     const n = e.getContactPoint(i);
                     t.push(n.getAppliedImpulse())
                  }
               }
            }
            return t
         }
         update(t) {
            null != tu(this, Uh, "f") && this.hasStarted() && tu(this, Lh, "f").update(t)
         }
      };
      var nu, iu, ru, au = function (t, e, n, i) {
         if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
         if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
         return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
      };
      iu = new WeakMap, nu = new WeakSet, ru = function (t) {
         if (t.length % 9 != 0) throw "Physics shape vertices length is not dividable by 9";
         const e = new Ammo.btTriangleMesh;
         for (let n = 0; n < t.length; n += 9) {
            const i = t[n + 0],
               r = t[n + 1],
               a = t[n + 2],
               s = t[n + 3],
               o = t[n + 4],
               l = t[n + 5],
               c = t[n + 6],
               h = t[n + 7],
               u = t[n + 8],
               d = new Ammo.btVector3(i, r, a),
               p = new Ammo.btVector3(s, o, l),
               f = new Ammo.btVector3(c, h, u);
            e.addTriangle(d, p, f), Ammo.destroy(d), Ammo.destroy(p), Ammo.destroy(f)
         }
         return {
            shape: new Ammo.btBvhTriangleMeshShape(e),
            triangleMesh: e
         }
      };
      const su = class {
         constructor(t) {
            nu.add(this), iu.set(this, new Map), t.forEach((({
               type: t,
               vertices: e,
               detector: n
            }) => {
               const {
                  shape: i,
                  triangleMesh: r
               } = au(this, nu, "m", ru).call(this, e);
               au(this, iu, "f").set(t, {
                  shape: i,
                  triangleMesh: r,
                  detector: n
               })
            }))
         }
         dispose() {
            au(this, iu, "f").forEach((({
               shape: t,
               triangleMesh: e
            }) => {
               Ammo.destroy(t), Ammo.destroy(e)
            })), au(this, iu, "f").clear()
         }
         getPhysicsShape(t) {
            var e;
            const n = null === (e = au(this, iu, "f").get(t)) || void 0 === e ? void 0 : e.shape;
            if (null == n) throw 'Track part with the id "' + t + '" has no physics model';
            return n
         }
         getPartTypesWithDetector(t) {
            const e = [];
            return au(this, iu, "f").forEach(((n, i) => {
               null != n.detector && n.detector.type == t && e.push(i)
            })), e
         }
         getDetector(t) {
            const e = au(this, iu, "f").get(t);
            if (null == e) throw 'Track part with the id "' + t + '" does not exist';
            return e.detector
         }
      };
      var ou;
      ! function (t) {
         t[t.Init = 0] = "Init", t[t.CreateCar = 1] = "CreateCar", t[t.StartCar = 2] = "StartCar", t[t.TestDeterminism = 3] = "TestDeterminism", t[t.Update = 4] = "Update", t[t.DeterminismResult = 5] = "DeterminismResult"
      }(ou || (ou = {}));
      const lu = ou;
      var cu, hu = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         uu = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      cu = new WeakMap;
      const du = class {
         constructor(t) {
            cu.set(this, void 0), hu(this, cu, t, "f")
         }
         dispose() {}
         getControls(t) {
            const [e, n, i, r] = uu(this, cu, "f").getFrame(t);
            return {
               up: e,
               right: n,
               down: i,
               left: r
            }
         }
      };
      var pu, fu = n(23);
      ! function (t) {
         const e = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            n = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

         function i(t, e) {
            if (e >= 8 * t.length) throw "Out of range";
            const n = Math.floor(e / 8),
               i = t[n],
               r = e - 8 * n;
            if (r <= 2 || n >= t.length - 1) return (i & 63 << r) >>> r;
            return (i & 63 << r) >>> r | (t[n + 1] & 63 >>> 8 - r) << 8 - r
         }

         function r(t, e, n, i, r) {
            const a = Math.floor(e / 8);
            for (; a >= t.length;) t.push(0);
            const s = e - 8 * a;
            if (t[a] |= i << s & 255, s > 8 - n && !r) {
               const e = a + 1;
               e >= t.length && t.push(0), t[e] |= i >> 8 - s
            }
         }
         t.encode = function (t) {
            let n = 0,
               r = "";
            for (; n < 8 * t.length;) {
               const a = i(t, n);
               let s;
               30 == (30 & a) ? (s = 31 & a, n += 5) : (s = a, n += 6), r += e[s]
            }
            return r
         }, t.decode = function (t) {
            let e = 0;
            const i = [],
               a = t.length;
            for (let s = 0; s < a; s++) {
               const o = t.charCodeAt(s);
               if (o >= n.length) return null;
               const l = n[o];
               if (-1 == l) return null;
               30 == (30 & l) ? (r(i, e, 5, l, s == a - 1), e += 5) : (r(i, e, 6, l, s == a - 1), e += 6)
            }
            return new Uint8Array(i)
         }
      }(pu || (pu = {}));
      const mu = pu;
      var gu;
      ! function (t) {
         t[t.Straight = 0] = "Straight", t[t.TurnSharp = 1] = "TurnSharp", t[t.SlopeUp = 2] = "SlopeUp", t[t.SlopeDown = 3] = "SlopeDown", t[t.Slope = 4] = "Slope", t[t.Start = 5] = "Start", t[t.Finish = 6] = "Finish", t[t.ToWideMiddle = 7] = "ToWideMiddle", t[t.ToWideLeft = 8] = "ToWideLeft", t[t.ToWideRight = 9] = "ToWideRight", t[t.StraightWide = 10] = "StraightWide", t[t.InnerCornerWide = 11] = "InnerCornerWide", t[t.OuterCornerWide = 12] = "OuterCornerWide", t[t.SlopeUpLeftWide = 13] = "SlopeUpLeftWide", t[t.SlopeUpRightWide = 14] = "SlopeUpRightWide", t[t.SlopeDownLeftWide = 15] = "SlopeDownLeftWide", t[t.SlopeDownRightWide = 16] = "SlopeDownRightWide", t[t.SlopeLeftWide = 17] = "SlopeLeftWide", t[t.SlopeRightWide = 18] = "SlopeRightWide", t[t.PillarTop = 19] = "PillarTop", t[t.PillarMiddle = 20] = "PillarMiddle", t[t.PillarBottom = 21] = "PillarBottom", t[t.PillarShort = 22] = "PillarShort", t[t.PlanePillarBottom = 23] = "PlanePillarBottom", t[t.PlanePillarShort = 24] = "PlanePillarShort", t[t.Plane = 25] = "Plane", t[t.PlaneWall = 26] = "PlaneWall", t[t.PlaneWallCorner = 27] = "PlaneWallCorner", t[t.PlaneWallInnerCorner = 28] = "PlaneWallInnerCorner", t[t.Block = 29] = "Block", t[t.WallTrackTop = 30] = "WallTrackTop", t[t.WallTrackMiddle = 31] = "WallTrackMiddle", t[t.WallTrackBottom = 32] = "WallTrackBottom", t[t.PlaneSlopeUp = 33] = "PlaneSlopeUp", t[t.PlaneSlopeDown = 34] = "PlaneSlopeDown", t[t.PlaneSlope = 35] = "PlaneSlope", t[t.TurnShort = 36] = "TurnShort", t[t.TurnLong = 37] = "TurnLong", t[t.SlopeUpLong = 38] = "SlopeUpLong", t[t.SlopeDownLong = 39] = "SlopeDownLong", t[t.SlopePillar = 40] = "SlopePillar", t[t.TurnSLeft = 41] = "TurnSLeft", t[t.TurnSRight = 42] = "TurnSRight", t[t.IntersectionT = 43] = "IntersectionT", t[t.IntersectionCross = 44] = "IntersectionCross", t[t.PillarMiddleBranch1 = 45] = "PillarMiddleBranch1", t[t.PillarMiddleBranch2 = 46] = "PillarMiddleBranch2", t[t.PillarMiddleBranch3 = 47] = "PillarMiddleBranch3", t[t.PillarMiddleBranch4 = 48] = "PillarMiddleBranch4", t[t.WallTrackBottomCorner = 49] = "WallTrackBottomCorner", t[t.WallTrackMiddleCorner = 50] = "WallTrackMiddleCorner", t[t.WallTrackTopCorner = 51] = "WallTrackTopCorner", t[t.Checkpoint = 52] = "Checkpoint", t[t.HalfBlock = 53] = "HalfBlock", t[t.QuarterBlock = 54] = "QuarterBlock", t[t.HalfPlane = 55] = "HalfPlane", t[t.QuarterPlane = 56] = "QuarterPlane", t[t.PlaneBridge = 57] = "PlaneBridge", t[t.SignArrowLeft = 58] = "SignArrowLeft", t[t.SignArrowRight = 59] = "SignArrowRight", t[t.SignArrowUp = 61] = "SignArrowUp", t[t.SignArrowDown = 62] = "SignArrowDown", t[t.SignWarning = 63] = "SignWarning", t[t.SignWrongWay = 64] = "SignWrongWay", t[t.CheckpointWide = 65] = "CheckpointWide", t[t.WallTrackCeiling = 66] = "WallTrackCeiling", t[t.WallTrackFloor = 67] = "WallTrackFloor", t[t.BlockSlopedDown = 68] = "BlockSlopedDown", t[t.BlockSlopedDownInnerCorner = 69] = "BlockSlopedDownInnerCorner", t[t.BlockSlopedDownOuterCorner = 70] = "BlockSlopedDownOuterCorner", t[t.BlockSlopedUp = 71] = "BlockSlopedUp", t[t.BlockSlopedUpInnerCorner = 72] = "BlockSlopedUpInnerCorner", t[t.BlockSlopedUpOuterCorner = 73] = "BlockSlopedUpOuterCorner", t[t.FinishWide = 74] = "FinishWide", t[t.PlaneCheckpoint = 75] = "PlaneCheckpoint", t[t.PlaneFinish = 76] = "PlaneFinish", t[t.PlaneCheckpointWide = 77] = "PlaneCheckpointWide", t[t.PlaneFinishWide = 78] = "PlaneFinishWide"
      }(gu || (gu = {}));
      const _u = gu;
      var vu;
      ! function (t) {
         function e(t, e) {
            const n = t.parts;
            if ("object" != typeof n && null !== n && !Array.isArray(n)) return null;
            const i = e.getPartTypesWithDetector(yh.Checkpoint),
               r = new Ju,
               a = Object.keys(n);
            for (let t = 0; t < a.length; ++t) {
               const e = parseInt(a[t], 10);
               if (!(e in _u)) return null; {
                  const t = n[e];
                  if (!Array.isArray(t)) return null;
                  if (t.length % 4 != 0) return null;
                  for (let n = 0; n < t.length; n += 4) {
                     const a = parseInt(t[n + 0], 10),
                        s = parseInt(t[n + 1], 10),
                        o = parseInt(t[n + 2], 10),
                        l = parseInt(t[n + 3], 10);
                     if (isNaN(a) || isNaN(s) || isNaN(o) || isNaN(l)) return null;
                     if (!(l >= 0 && l <= 3 && Math.abs(a) <= 1e9 && s >= 0 && s <= 1e9 && Math.abs(o) <= 1e9)) return null;
                     if (i.includes(e)) return null;
                     r.addPart(a, s, o, e, l, null)
                  }
               }
            }
            return r
         }
         t.withoutMetadata = e, t.withMetadata = function (t, n) {
            if ("string" != typeof t.name) return null;
            if ("string" != typeof t.track) return null;
            let i;
            try {
               i = JSON.parse(t.track)
            } catch (t) {
               return console.error(t), null
            }
            const r = e(i, n);
            return null == r ? null : {
               trackName: t.name,
               trackData: r
            }
         }
      }(vu || (vu = {}));
      const xu = vu;
      var yu;
      ! function (t) {
         function e(t, e) {
            const n = Oc.decode(t);
            if (null == n) return null;
            const i = e.getPartTypesWithDetector(yh.Checkpoint),
               r = new Ju;
            let a = 0;
            for (; a < n.length;) {
               if (n.length - a < 2) return null;
               const t = n[a + 0] | n[a + 1] << 8;
               if (a += 2, !(t in _u)) return null;
               if (n.length - a < 4) return null;
               const e = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16 | n[a + 3] << 24;
               a += 4;
               for (let s = 0; s < e; ++s) {
                  if (n.length - a < 3) return null;
                  const e = (n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16) - Math.pow(2, 23);
                  if (a += 3, n.length - a < 3) return null;
                  const s = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16;
                  if (a += 3, n.length - a < 3) return null;
                  const o = (n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16) - Math.pow(2, 23);
                  if (a += 3, n.length - a < 1) return null;
                  const l = 3 & n[a + 0];
                  if (a += 1, i.includes(t)) return null;
                  r.addPart(e, s, o, t, l, null)
               }
            }
            return r
         }
         t.withoutMetadata = e, t.withMetadata = function (t, n) {
            if (!t.startsWith("v1n")) return null;
            const i = t.substring(3, 5);
            let r = Oc.decode(i);
            if (null == r) return null;
            if (1 != r.length) return null;
            const a = r[0],
               s = t.substring(5, 5 + a);
            let o;
            try {
               o = decodeURIComponent(s)
            } catch (t) {
               return console.error(t), null
            }
            const l = e(t.substring(5 + a), n);
            return null == l ? null : {
               trackName: o,
               trackData: l
            }
         }
      }(yu || (yu = {}));
      const Mu = yu;
      var Su;
      ! function (t) {
         function e(t, e) {
            const n = mu.decode(t);
            if (null == n) return null;
            const i = new Nc.Inflate;
            if (i.push(n, !0), i.err) return null;
            const r = i.result,
               a = e.getPartTypesWithDetector(yh.Checkpoint),
               s = new Ju;
            let o = 0;
            for (; o < r.length;) {
               if (r.length - o < 2) return null;
               const t = r[o + 0] | r[o + 1] << 8;
               if (o += 2, !(t in _u)) return null;
               if (r.length - o < 4) return null;
               const e = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16 | r[o + 3] << 24;
               o += 4;
               for (let n = 0; n < e; ++n) {
                  if (r.length - o < 3) return null;
                  const e = (r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16) - Math.pow(2, 23);
                  if (o += 3, r.length - o < 3) return null;
                  const n = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16;
                  if (o += 3, r.length - o < 3) return null;
                  const i = (r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16) - Math.pow(2, 23);
                  if (o += 3, r.length - o < 1) return null;
                  const l = 3 & r[o + 0];
                  o += 1;
                  let c = null;
                  a.includes(t) && (c = r[o + 0] | r[o + 1] << 8, o += 2), s.addPart(e, n, i, t, l, c)
               }
            }
            return s
         }
         t.withoutMetadata = e, t.withMetadata = function (t, n) {
            if (!t.startsWith("v2")) return null;
            const i = t.substring(2, 4);
            let r = mu.decode(i);
            if (null == r) return null;
            if (1 != r.length) return null;
            const a = r[0],
               s = Math.ceil(a / 3 * 4),
               o = t.substring(4, 4 + s),
               l = mu.decode(o);
            if (null == l) return null;
            let c;
            try {
               c = new TextDecoder("utf-8").decode(l)
            } catch (t) {
               return null
            }
            const h = e(t.substring(4 + s), n);
            return null == h ? null : {
               trackName: c,
               trackData: h
            }
         }
      }(Su || (Su = {}));
      const Eu = Su;
      class bu extends Ga {
         constructor(t, e) {
            const n = new en({
               color: e,
               depthWrite: !1
            });
            super(t.geometry, n, t.count);
            for (let e = 0; e < t.count; ++e) {
               const n = new ce;
               t.getMatrixAt(e, n), this.setMatrixAt(e, n)
            }
            this.meshMatrix = t.matrixWorld, this.frustumCulled = !1, this.matrixAutoUpdate = !1, this.renderOrder = -1
         }
         update(t, e) {
            var n = new ce,
               i = t.normal.x * e.x + t.normal.y * e.y + t.normal.z * e.z + -t.constant * e.w,
               r = n.elements;
            r[0] = i - e.x * t.normal.x, r[4] = -e.x * t.normal.y, r[8] = -e.x * t.normal.z, r[12] = -e.x * -t.constant, r[1] = -e.y * t.normal.x, r[5] = i - e.y * t.normal.y, r[9] = -e.y * t.normal.z, r[13] = -e.y * -t.constant, r[2] = -e.z * t.normal.x, r[6] = -e.z * t.normal.y, r[10] = i - e.z * t.normal.z, r[14] = -e.z * -t.constant, r[3] = -e.w * t.normal.x, r[7] = -e.w * t.normal.y, r[11] = -e.w * t.normal.z, r[15] = i - e.w * -t.constant, this.matrix.multiplyMatrices(n, this.meshMatrix)
         }
      }
      var wu;
      ! function (t) {
         t[t.ImperialUnitsEnabled = 0] = "ImperialUnitsEnabled", t[t.ResetHintEnabled = 1] = "ResetHintEnabled", t[t.GhostCarEnabled = 2] = "GhostCarEnabled", t[t.CockpitCameraToggle = 3] = "CockpitCameraToggle", t[t.Language = 4] = "Language", t[t.CarShadowQuality = 5] = "CarShadowQuality", t[t.TrackShadowEnabled = 6] = "TrackShadowEnabled", t[t.CloudsEnabled = 7] = "CloudsEnabled", t[t.ParticlesEnabled = 8] = "ParticlesEnabled", t[t.SkidmarksEnabled = 9] = "SkidmarksEnabled", t[t.RenderScale = 10] = "RenderScale", t[t.Antialiasing = 11] = "Antialiasing", t[t.SoundEffectVolume = 12] = "SoundEffectVolume", t[t.MusicVolume = 13] = "MusicVolume", t[t.CheckpointVolume = 14] = "CheckpointVolume"
      }(wu || (wu = {}));
      const Tu = wu;
      var Au, Ru, Cu, Pu, Lu, Uu, Du, Iu, Nu, Ou, Fu, ku, zu, Bu, Hu = function (t, e, n, i, r) {
            if ("m" === i) throw new TypeError("Private method is not writable");
            if ("a" === i && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === i ? r.call(t, n) : r ? r.value = n : e.set(t, n), n
         },
         Vu = function (t, e, n, i) {
            if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
         };
      class Wu {
         constructor(t, e, n, i, r, a, s) {
            if (this.checkpointOrder = null, this.x = t, this.y = e, this.z = n, this.rotation = i, this.type = r, this.matrix = a, this.checkpointOrder = s, null != r.detector && r.detector.type == yh.Checkpoint) {
               if (null == s) throw "Checkpoint has no checkpoint order"
            } else if (null != s) throw "Non-checkpoint has checkpoint order"
         }
      }
      class Gu {
         constructor(t, e, n) {
            Au.add(this), Ru.set(this, void 0), Cu.set(this, void 0), Pu.set(this, void 0), Lu.set(this, []), Uu.set(this, new Map), Du.set(this, new Map), Iu.set(this, {
               min: new st(0, 0),
               max: new st(0, 0)
            }), Nu.set(this, null), Ou.set(this, []), Hu(this, Ru, t, "f"), Hu(this, Cu, e, "f"), Hu(this, Pu, n, "f")
         }
         getID() {
            return Vu(this, Nu, "f")
         }
         clear() {
            Hu(this, Nu, null, "f"), Vu(this, Lu, "f").length = 0, Vu(this, Uu, "f").clear(), Vu(this, Du, "f").clear(), Vu(this, Au, "m", Fu).call(this)
         }
         hasPartAt(t, e, n) {
            return Vu(this, Uu, "f").has(t + "|" + e + "|" + n)
         }
         setPart(t, e, n, i, r, a) {
            const s = Vu(this, Pu, "f").getPart(i),
               o = new Wu(t, e, n, r, s, (new ce).makeRotationY(r * Math.PI / 2).setPosition(t * Gu.partWidth, e * Gu.partHeight, n * Gu.partLength), a);
            Vu(this, Lu, "f").push(o);
            s.tiles.rotated(r).forEach(((i, r, a) => {
               const s = t + i + "|" + (e + r) + "|" + (n + a);
               if (this.hasPartAt(t + i, e + r, n + a)) throw "Track part collision";
               Vu(this, Uu, "f").set(s, o)
            }));
            const l = Vu(this, Du, "f").get(i);
            null == l ? Vu(this, Du, "f").set(i, [o]) : l.push(o)
         }
         deletePart(t, e, n) {
            const i = Vu(this, Uu, "f").get(t + "|" + e + "|" + n);
            if (null == i) throw "Track part missing from parts by position map";
            for (let t = 0; t < Vu(this, Lu, "f").length; ++t) {
               if (Vu(this, Lu, "f")[t] == i) {
                  Vu(this, Lu, "f").splice(t, 1);
                  break
               }
               if (t == Vu(this, Lu, "f").length - 1) throw "Track part missing from parts list"
            }
            i.type.tiles.rotated(i.rotation).forEach(((t, e, n) => {
               const r = i.x + t + "|" + (i.y + e) + "|" + (i.z + n);
               if (!Vu(this, Uu, "f").has(r)) throw "Track part section missing";
               Vu(this, Uu, "f").delete(r)
            }));
            const r = Vu(this, Du, "f").get(i.type.id);
            if (null == r) throw "Track part type is missing from parts by type map";
            for (let t = 0; t < r.length; ++t) {
               if (r[t] == i) {
                  r.splice(t, 1);
                  break
               }
               if (t == r.length - 1) throw "Track part is missing from parts by type map"
            }
         }
         getBounds() {
            return Vu(this, Iu, "f")
         }
         shortRaycast(t) {
            const e = new Dt(Math.floor(t.ray.origin.x / Gu.partWidth), Math.floor(t.ray.origin.y / Gu.partHeight), Math.floor(t.ray.origin.z / Gu.partLength)),
               n = new Set;
            for (let t = -1; t <= 1; t++)
               for (let i = -1; i <= 1; i++)
                  for (let r = -1; r <= 1; r++) {
                     const a = Vu(this, Au, "m", ku).call(this, e.x + t, e.y + i, e.z + r);
                     null != a && n.add(a)
                  }
            let i = null;
            return n.forEach((e => {
               if (null == e.type.object) throw "Track part is not loaded yet";
               if (null == i) {
                  const n = e.type.object.children[0];
                  n.matrixWorld.copy(e.matrix);
                  const r = t.intersectObject(n, !0);
                  r.length > 0 && (i = r[0])
               }
            })), i
         }
         generateMeshes() {
            Vu(this, Au, "m", Fu).call(this);
            const t = Vu(this, Ru, "f").getShadowDirection(),
               e = new At(t.x, t.y, t.z, 0);
            Vu(this, Pu, "f").getAllParts().forEach((t => {
               const n = [];
               for (let e = 0; e < Vu(this, Lu, "f").length; ++e) Vu(this, Lu, "f")[e].type == t && n.push(Vu(this, Lu, "f")[e]);
               if (n.length > 0) {
                  if (null == t.object) throw "Mesh is not loaded";
                  const i = t.object.children[0],
                     r = new Ga(i.geometry, i.material, n.length);
                  r.frustumCulled = !1, r.receiveShadow = !0;
                  for (let t = 0; t < n.length; ++t) r.setMatrixAt(t, n[t].matrix);
                  if (Vu(this, Ru, "f").scene.add(r), Vu(this, Ou, "f").push(r), Vu(this, Cu, "f").getSettingBoolean(Tu.TrackShadowEnabled)) {
                     const t = new bu(r, 1192238);
                     t.update(new Jn(new Dt(0, 1, 0), 0), e), Vu(this, Ru, "f").scene.add(t), Vu(this, Ou, "f").push(t)
                  }
               }
            })), Vu(this, Au, "m", zu).call(this)
         }
         getCheckpoints() {
            let t = [];
            return Vu(this, Pu, "f").getPartTypesWithDetector(yh.Checkpoint).forEach((e => {
               const n = Vu(this, Du, "f").get(e);
               null != n && (t = t.concat(n))
            })), t.map((t => {
               if (null == t.checkpointOrder) throw "Checkpoint has no checkpoint order";
               if (null == t.type.detector) throw "Checkpoint has no detector";
               return {
                  x: t.x,
                  y: t.y,
                  z: t.z,
                  rotation: t.rotation,
                  checkpointOrder: t.checkpointOrder,
                  detector: t.type.detector
               }
            }))
         }
         getCheckpointOrders() {
            let t = [];
            return Vu(this, Pu, "f").getPartTypesWithDetector(yh.Checkpoint).forEach((e => {
               const n = Vu(this, Du, "f").get(e);
               null != n && (t = t.concat(n))
            })), t.map((t => {
               if (null == t.checkpointOrder) throw "Checkpoint has no checkpoint order";
               if (null == t.type.detector) throw "Checkpoint has no detector";
               return t.checkpointOrder
            }))
         }
         getTotalNumberOfCheckpointIndices() {
            let t = [];
            if (Vu(this, Pu, "f").getPartTypesWithDetector(yh.Checkpoint).forEach((e => {
                  const n = Vu(this, Du, "f").get(e);
                  null != n && (t = t.concat(n))
               })), null == t) return 0;
            return t.map((t => t.checkpointOrder)).filter(((t, e, n) => n.indexOf(t) == e)).length
         }
         getStartTransform() {
            const t = Vu(this, Au, "m", Bu).call(this);
            if (null != t) {
               const e = (new Ut).setFromEuler(new xe(0, Math.PI + t.rotation * Math.PI / 2, 0)),
                  n = new Dt(0, .48, .8);
               return n.applyQuaternion(e), {
                  position: new Dt(t.x * Gu.partWidth + n.x, t.y * Gu.partHeight + n.y, t.z * Gu.partLength + n.z),
                  quaternion: e
               }
            }
            return null
         }
         getTrackData() {
            const t = new Ju;
            return Vu(this, Lu, "f").forEach((e => {
               t.addPart(e.x, e.y, e.z, e.type.id, e.rotation, e.checkpointOrder)
            })), t
         }
         loadTrackData(t, e = !0) {
            return this.clear(), Hu(this, Nu, e ? t.getId(Vu(this, Pu, "f")) : null, "f"), t.forEachPart(((t, e, n, i, r, a) => {
               this.setPart(t, e, n, i, r, a)
            })), !0
         }
      }
      Ru = new WeakMap, Cu = new WeakMap, Pu = new WeakMap, Lu = new WeakMap, Uu = new WeakMap, Du = new WeakMap, Iu = new WeakMap, Nu = new WeakMap, Ou = new WeakMap, Au = new WeakSet, Fu = function () {
         for (let t = 0; t < Vu(this, Ou, "f").length; ++t) {
            const e = Vu(this, Ou, "f")[t];
            Vu(this, Ru, "f").scene.remove(e)
         }
         Vu(this, Ou, "f").length = 0
      }, ku = function (t, e, n) {
         return Vu(this, Uu, "f").get(t + "|" + e + "|" + n)
      }, zu = function () {
         let t = 1 / 0,
            e = 1 / 0,
            n = -1 / 0,
            i = -1 / 0;
         Vu(this, Lu, "f").forEach((r => {
            t = Math.min(r.x, t), e = Math.min(r.z, e), n = Math.max(r.x, n), i = Math.max(r.z, i)
         })), Number.isFinite(t) && Number.isFinite(e) && Number.isFinite(n) && Number.isFinite(i) ? Hu(this, Iu, {
            min: new st(t, e),
            max: new st(n, i)
         }, "f") : Hu(this, Iu, {
            min: new st,
            max: new st
         }, "f")
      }, Bu = function () {
         const t = Vu(this, Du, "f").get(_u.Start);
         return null != t && t.length > 0 ? t[t.length - 1] : null
      }, Gu.partWidth = 20, Gu.partHeight = 5, Gu.partLength = 20;
      const Xu = Gu;
      var ju, qu, Yu, Zu, Ku = function (t, e, n, i) {
         if ("a" === n && !i) throw new TypeError("Private accessor was defined without a getter");
         if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
         return "m" === n ? i : "a" === n ? i.call(t) : i ? i.value : e.get(t)
      };
      qu = new WeakMap, ju = new WeakSet, Yu = function () {
         const t = Ku(this, qu, "f").get(_u.Start);
         return null != t && t.length > 0 ? t[t.length - 1] : null
      }, Zu = function (t) {
         const e = t.getPartTypesWithDetector(yh.Checkpoint),
            n = [];
         return Ku(this, qu, "f").forEach(((t, i) => {
            if (i < 0 || i > 65535) throw "Type id is out of range";
            const r = t.length;
            n.push(255 & i, i >>> 8 & 255, 255 & r, r >>> 8 & 255, r >>> 16 & 255, r >>> 24 & 255), t.forEach((t => {
               const r = t.x + Math.pow(2, 23),
                  a = t.y,
                  s = t.z + Math.pow(2, 23);
               if (n.push(255 & r, r >>> 8 & 255, r >>> 16 & 255, 255 & a, a >>> 8 & 255, a >>> 16 & 255, 255 & s, s >>> 8 & 255, s >>> 16 & 255, 3 & t.rotation), e.includes(i)) {
                  if (null == t.checkpointOrder) throw "Checkpoint has no checkpoint order";
                  n.push(255 & t.checkpointOrder, t.checkpointOrder >>> 8 & 255)
               }
            }))
         })), new Uint8Array(n)
      };
      const Ju = class {
         constructor() {
            ju.add(this), qu.set(this, new Map)
         }
         addPart(t, e, n, i, r, a) {
            const s = Ku(this, qu, "f").get(i);
            null != s ? s.push({
               x: t,
               y: e,
               z: n,
               rotation: r,
               checkpointOrder: a
            }) : Ku(this, qu, "f").set(i, [{
               x: t,
               y: e,
               z: n,
               rotation: r,
               checkpointOrder: a
            }])
         }
         forEachPart(t) {
            Ku(this, qu, "f").forEach(((e, n) => {
               e.forEach((e => {
                  t(e.x, e.y, e.z, n, e.rotation, e.checkpointOrder)
               }))
            }))
         }
         getId(t) {
            return (0, fu.sha256)(Ku(this, ju, "m", Zu).call(this, t))
         }
         getBounds() {
            let t = 1 / 0,
               e = 1 / 0,
               n = -1 / 0,
               i = -1 / 0;
            return this.forEachPart(((r, a, s) => {
               t = Math.min(r, t), e = Math.min(s, e), n = Math.max(r, n), i = Math.max(s, i)
            })), Number.isFinite(t) && Number.isFinite(e) && Number.isFinite(n) && Number.isFinite(i) ? {
               min: new st(t, e),
               max: new st(n, i)
            } : {
               min: new st,
               max: new st
            }
         }
         hasStartingPoint() {
            return Ku(this, qu, "f").has(_u.Start)
         }
         getStartTransform() {
            const t = Ku(this, ju, "m", Yu).call(this);
            if (null != t) {
               const e = (new Ut).setFromEuler(new xe(0, Math.PI + t.rotation * Math.PI / 2, 0)),
                  n = new Dt(0, .48, .8);
               return n.applyQuaternion(e), {
                  position: new Dt(t.x * Xu.partWidth + n.x, t.y * Xu.partHeight + n.y, t.z * Xu.partLength + n.z),
                  quaternion: e
               }
            }
            return null
         }
         toSaveString(t) {
            const e = Ku(this, ju, "m", Zu).call(this, t),
               n = new Nc.Deflate({
                  level: 9
               });
            return n.push(e, !0), mu.encode(n.result)
         }
         toExportString(t, e) {
            const n = (new TextEncoder).encode(t),
               i = new Uint8Array(1);
            return i[0] = n.length, "v2" + mu.encode(i) + mu.encode(n) + this.toSaveString(e)
         }
         static fromSaveString(t, e) {
            const n = Eu.withoutMetadata(t, e);
            if (null != n) return n;
            const i = Mu.withoutMetadata(t, e);
            if (null != i) return i;
            const r = xu.withoutMetadata(t, e);
            return null != r ? r : null
         }
         static fromExportString(t, e) {
            const n = t.replace(/\s+/g, ""),
               i = Eu.withMetadata(n, e);
            if (null != i) return i;
            const r = Mu.withMetadata(n, e);
            if (null != r) return r;
            const a = xu.withMetadata(t, e);
            return null != a ? a : null
         }
         createThumbnail(t) {
            const e = document.createElement("canvas");
            let n = 0,
               i = 0,
               r = 0,
               a = 0;
            this.forEachPart(((t, e, s, o, l) => {
               n = Math.min(n, t), i = Math.min(i, s), r = Math.max(r, t), a = Math.max(a, s)
            }));
            const s = 10,
               o = r - n + 1;
            o <= s && (r += Math.ceil((s - o) / 2), n -= Math.ceil((s - o) / 2));
            const l = a - i + 1;
            l <= s && (a += Math.ceil((s - l) / 2), i -= Math.ceil((s - l) / 2)), e.width = Math.min(1024, r - n + 1), e.height = Math.min(1024, a - i + 1);
            const c = e.getContext("2d");
            c.fillStyle = "#fff";
            const h = [],
               u = [],
               d = [];
            return this.forEachPart(((e, r, a, s, o) => {
               const l = t.getPart(s);
               l.tiles.rotated(o).forEach(((t, r, o) => {
                  c.fillRect(e + t - n, a + o - i, 1, 1), s == _u.Start ? u.push([e + t - n, a + o - i]) : null != l.detector && l.detector.type == yh.Checkpoint ? h.push([e + t - n, a + o - i]) : null != l.detector && l.detector.type == yh.Finish && d.push([e + t - n, a + o - i])
               }))
            })), c.fillStyle = "#e2c026", h.forEach((([t, e]) => {
               c.fillRect(t, e, 1, 1)
            })), c.fillStyle = "#338ce0", u.forEach((([t, e]) => {
               c.fillRect(t, e, 1, 1)
            })), c.fillStyle = "#d12929", d.forEach((([t, e]) => {
               c.fillRect(t, e, 1, 1)
            })), e
         }
      };
      importScripts("../js/2176-lib-ammo.js"), Ammo().then((function (t) {
         let e = new su([]),
            n = null;

         function i() {
            if (3.141592653589793 != Math.PI) return console.error("Determinism check failed: Math.PI"), !1;
            if (1.4142135623730951 != Math.SQRT2) return console.error("Determinism check failed: Math.SQRT2"), !1;
            if (.8325374724941544 != Math.cos(.587123751237)) return console.error("Determinism check failed: Math.cos"), !1;
            if (.5308738369903678 != Math.sin(2.581961285)) return console.error("Determinism check failed: Math.sin"), !1;
            if (3678159.3874182813 != Math.pow(123, Math.PI)) return console.error("Determinism check failed: Math.pow"), !1;
            if (123 * Math.PI != 386.41589639154455) return console.error("Determinism check failed: Multiply"), !1;
            if (123 / Math.PI != 39.152116000606256) return console.error("Determinism check failed: Division"), !1;
            const e = new Dt(1.771862268447876, .1061100885272026, 5.619295597076416),
               n = new Ut(.04136250913143158, .03184755891561508, .9986355900764465, -.0013517792103812099),
               i = new ph;
            i.createGroundPlane();
            const r = new t.btTransform;
            r.setIdentity();
            const a = new t.btDefaultMotionState(r);
            t.destroy(r);
            const s = new t.btVector3(0, 0, 0),
               o = new t.btVector3(.1, .1, .1),
               l = new t.btBoxShape(o);
            l.calculateLocalInertia(400, s), t.destroy(o);
            const c = new t.btRigidBodyConstructionInfo(400, a, l, s),
               h = new t.btRigidBody(c);
            t.destroy(s), t.destroy(c), h.setActivationState(4), i.world.addRigidBody(h);
            const u = new t.btVehicleTuning,
               d = new t.btDefaultVehicleRaycaster(i.world),
               p = new t.btRaycastVehicle(u, h, d);
            p.setCoordinateSystem(0, 1, 2), i.world.addAction(p);
            const f = new t.btVector3(0, -1, 0),
               m = new t.btVector3(-1, 0, 0);
            ["WheelFL", "WheelFR", "WheelBL", "WheelBR"].forEach((e => {
               let n;
               if ("WheelFL" == e) n = new t.btVector3(.627909, .27, 1.3478);
               else if ("WheelFR" == e) n = new t.btVector3(-.627909, .27, 1.3478);
               else if ("WheelBL" == e) n = new t.btVector3(.720832, .27, -1.52686);
               else {
                  if ("WheelBR" != e) throw "Unidentified wheel";
                  n = new t.btVector3(-.720832, .27, -1.52686)
               }
               const i = "WheelFL" == e || "WheelFR" == e;
               p.addWheel(n, f, m, .12, .331, u, i), t.destroy(n)
            })), t.destroy(f), t.destroy(m);
            const g = new t.btTransform;
            g.setIdentity(), h.setWorldTransform(g), h.getMotionState().setWorldTransform(g), t.destroy(g), p.resetSuspension(), p.setSteeringValue(0, 0), p.setSteeringValue(0, 1);
            const _ = new t.btTransform;
            _.setIdentity();
            const v = new t.btDefaultMotionState(_);
            t.destroy(_);
            const x = new t.btVector3(0, 0, 0),
               y = new t.btVector3(.1, .1, .1),
               M = new t.btBoxShape(y);
            M.calculateLocalInertia(100, x), t.destroy(y);
            const S = new t.btRigidBodyConstructionInfo(100, v, M, x),
               E = new t.btRigidBody(S);
            t.destroy(x), t.destroy(S), E.setActivationState(4), i.world.addRigidBody(E);
            const b = 1e5;
            p.applyEngineForce(b, 2), p.applyEngineForce(b, 3), i.update(1);
            const w = new t.btTransform;
            h.getMotionState().getWorldTransform(w);
            const T = w.getOrigin(),
               A = w.getRotation();
            t.destroy(w);
            const R = e.equals(new Dt(T.x(), T.y(), T.z())),
               C = n.equals(new Ut(A.x(), A.y(), A.z(), A.w()));
            i.dispose(), t.destroy(l), t.destroy(h), t.destroy(p), t.destroy(M), t.destroy(E);
            const P = R || C;
            return P || console.error("Determinism check failed: Simulation"), P
         }
         onmessage = t => {
            switch (t.data.messageType) {
               case lu.Init:
                  e = new su(t.data.trackParts);
                  break;
               case lu.CreateCar:
                  null == n || n.model.dispose();
                  const r = Ju.fromSaveString(t.data.trackData, e);
                  if (null == r) throw "Failed to load track";
                  const a = Hc.deserialize(t.data.carRecording);
                  if (null == a) throw "Failed to deserialize recording";
                  n = {
                     id: t.data.carId,
                     model: new eu(t.data.mountainVertices, new Dt(t.data.mountainOffset.x, t.data.mountainOffset.y, t.data.mountainOffset.z), e, r, t.data.carCollisionShapeVertices, t.data.carMassOffset, new du(a), {
                        position: new Dt(t.data.carPosition.x, t.data.carPosition.y, t.data.carPosition.z),
                        quaternion: new Ut(t.data.carQuaternion.x, t.data.carQuaternion.y, t.data.carQuaternion.z, t.data.carQuaternion.w)
                     })
                  };
                  break;
               case lu.StartCar:
                  null == n || n.model.start();
                  break;
               case lu.TestDeterminism:
                  postMessage({
                     messageType: lu.DeterminismResult,
                     isDeterminstic: i()
                  })
            }
         }, setInterval((() => {
            null == n || n.model.hasFinished() || (n.model.update(.5), postMessage({
               messageType: lu.Update,
               carId: n.id,
               carTime: n.model.getTime().numberOfFrames,
               carHasFinished: n.model.hasFinished()
            }))
         }), 0)
      }))
   })()
})();