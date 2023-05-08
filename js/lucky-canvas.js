! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).LuckyCanvas = {})
}(this, (function(t) {
    "use strict";
    /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
    var e = function(t, i) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            })(t, i)
    };

    function i(t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        e(t, i), t.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
    }
    var n = function() {
        return (n = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }).apply(this, arguments)
    };

    function r(t, e, i, n) {
        return new(i || (i = Promise))((function(r, o) {
            function a(t) {
                try {
                    h(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    h(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function h(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i((function(t) {
                    t(e)
                }))).then(a, s)
            }
            h((n = n.apply(t, e || [])).next())
        }))
    }

    function o(t, e) {
        var i, n, r, o, a = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1], r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], n = 0
                    } finally {
                        i = r = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }

    function a(t, e) {
        for (var i = 0, n = e.length, r = t.length; i < n; i++, r++) t[r] = e[i];
        return t
    }
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(t, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                n = i.length >>> 0;
            if (0 === n) return !1;
            for (var r, o, a = 0 | e, s = Math.max(a >= 0 ? a : n - Math.abs(a), 0); s < n;) {
                if ((r = i[s]) === (o = t) || "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o)) return !0;
                s++
            }
            return !1
        }
    }), String.prototype.includes || (String.prototype.includes = function(t, e) {
        return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e)
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var e = Object(this),
                i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var n = arguments[1], r = 0; r < i;) {
                var o = e[r];
                if (t.call(n, o, r, e)) return o;
                r++
            }
        }
    });
    var s = function(t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            return e.some((function(e) {
                return Object.prototype.toString.call(t).slice(8, -1).toLowerCase() === e
            }))
        },
        h = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        },
        c = function(t) {
            return [].filter.call(t, (function(t) {
                return "\n" !== t
            })).join("")
        },
        l = function(t) {
            if ("string" != typeof t) return !1;
            if ("transparent" === (t = t.toLocaleLowerCase().trim())) return !1;
            var e;
            if (/^rgba/.test(t) && 0 === (null === (e = /([^\s,]+)\)$/.exec(t)) ? 0 : "object" == typeof e ? NaN : "number" == typeof e ? e : "string" == typeof e ? "%" === e[e.length - 1] ? Number(e.slice(0, -1)) / 100 : Number(e) : NaN)) return !1;
            return !0
        },
        u = function(t, e) {
            var i, n = (null === (i = t.padding) || void 0 === i ? void 0 : i.split(" ").map((function(t) {
                    return e(t)
                }))) || [0],
                r = 0,
                o = 0,
                a = 0,
                c = 0;
            switch (n.length) {
                case 1:
                    r = o = a = c = n[0];
                    break;
                case 2:
                    r = o = n[0], a = c = n[1];
                    break;
                case 3:
                    r = n[0], a = c = n[1], o = n[2];
                    break;
                default:
                    r = n[0], o = n[1], a = n[2], c = n[3]
            }
            var l = {
                paddingTop: r,
                paddingBottom: o,
                paddingLeft: a,
                paddingRight: c
            };
            for (var u in l) l[u] = h(t, u) && s(t[u], "string", "number") ? e(t[u]) : l[u];
            return [r, o, a, c]
        },
        f = function(t) {
            var e = [],
                i = t.map((function(t) {
                    return Number(t)
                })).reduce((function(t, i) {
                    if (i > 0) {
                        var n = t + i;
                        return e.push(n), n
                    }
                    return e.push(NaN), t
                }), 0),
                n = Math.random() * i;
            return e.findIndex((function(t) {
                return n <= t
            }))
        },
        d = function(t, e, i, n) {
            void 0 === n && (n = 1 / 0), n <= 0 && (n = 1 / 0);
            for (var r = "", o = [], a = t.measureText("...").width, s = 0; s < e.length; s++) {
                r += e[s];
                var h = t.measureText(r).width,
                    c = i(o);
                if (n === o.length + 1 && (h += a), c < 0) return o;
                if (h > c && (o.push(r.slice(0, -1)), r = e[s]), n === o.length) return o[o.length - 1] += "...", o
            }
            return r && o.push(r), o.length || o.push(e), o
        },
        p = "1.7.25",
        g = function() {
            function t() {
                this.subs = []
            }
            return t.prototype.addSub = function(t) {
                this.subs.includes(t) || this.subs.push(t)
            }, t.prototype.notify = function() {
                this.subs.forEach((function(t) {
                    t.update()
                }))
            }, t
        }(),
        v = "__proto__" in {};

    function m(t, e, i, n) {
        Object.defineProperty(t, e, {
            value: i,
            enumerable: !!n,
            writable: !0,
            configurable: !0
        })
    }
    var w = Array.prototype,
        y = Object.create(w);
    ["push", "pop", "shift", "unshift", "sort", "splice", "reverse"].forEach((function(t) {
        y[t] = function() {
            for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            var n = w[t].apply(this, e),
                r = this.__luckyOb__;
            return ["push", "unshift", "splice"].includes(t) && r.walk(this), r.dep.notify(), n
        }
    }));
    var b = function() {
        function t(t) {
            this.dep = new g, m(t, "__luckyOb__", this), Array.isArray(t) && (v ? t.__proto__ = y : Object.getOwnPropertyNames(y).forEach((function(e) {
                m(t, e, y[e])
            }))), this.walk(t)
        }
        return t.prototype.walk = function(t) {
            Object.keys(t).forEach((function(e) {
                C(t, e, t[e])
            }))
        }, t
    }();

    function S(t) {
        if (t && "object" == typeof t) return "__luckyOb__" in t ? t.__luckyOb__ : new b(t)
    }

    function C(t, e, i) {
        var n = new g,
            r = Object.getOwnPropertyDescriptor(t, e);
        if (!r || !1 !== r.configurable) {
            var o = r && r.get,
                a = r && r.set;
            o && !a || 2 !== arguments.length || (i = t[e]);
            var s = S(i);
            Object.defineProperty(t, e, {
                get: function() {
                    var e = o ? o.call(t) : i;
                    return g.target && (n.addSub(g.target), s && s.dep.addSub(g.target)), e
                },
                set: function(e) {
                    e !== i && (i = e, o && !a || (a ? a.call(t, e) : i = e, s = S(e), n.notify()))
                }
            })
        }
    }
    var z = 0,
        x = function() {
            function t(t, e, i, n) {
                void 0 === n && (n = {}), this.id = z++, this.$lucky = t, this.expr = e, this.deep = !!n.deep, this.getter = "function" == typeof e ? e : function(t) {
                    t += ".";
                    for (var e = [], i = "", n = 0; n < t.length; n++) {
                        var r = t[n];
                        if (/\[|\./.test(r)) e.push(i), i = "";
                        else {
                            if (/\W/.test(r)) continue;
                            i += r
                        }
                    }
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return t[e]
                        }), t)
                    }
                }(e), this.cb = i, this.value = this.get()
            }
            return t.prototype.get = function() {
                g.target = this;
                var t = this.getter.call(this.$lucky, this.$lucky);
                return this.deep && function(t) {
                    var e = function(t) {
                        s(t, "array", "object") && Object.keys(t).forEach((function(i) {
                            var n = t[i];
                            e(n)
                        }))
                    };
                    e(t)
                }(t), g.target = null, t
            }, t.prototype.update = function() {
                var t = this.get(),
                    e = this.value;
                this.value = t, this.cb.call(this.$lucky, t, e)
            }, t
        }(),
        k = function() {
            function t(t, e) {
                var i = this;
                this.version = p, this.htmlFontSize = 16, this.rAF = function() {}, this.boxWidth = 0, this.boxHeight = 0, "string" == typeof t ? t = {
                    el: t
                } : 1 === t.nodeType && (t = {
                    el: "",
                    divElement: t
                }), t = t, this.config = t, this.data = e, t.flag || (t.flag = "WEB"), t.el && (t.divElement = document.querySelector(t.el)), t.divElement && (t.canvasElement = document.createElement("canvas"), t.divElement.appendChild(t.canvasElement)), t.canvasElement && (t.ctx = t.canvasElement.getContext("2d"), t.canvasElement.setAttribute("package", "lucky-canvas@1.7.25"), t.canvasElement.addEventListener("click", (function(t) {
                    return i.handleClick(t)
                }))), this.ctx = t.ctx, this.initWindowFunction(), this.config.ctx || console.error("无法获取到 CanvasContext2D"), window && "function" == typeof window.addEventListener && window.addEventListener("resize", function(t, e) {
                    void 0 === e && (e = 300);
                    var i = null;
                    return function() {
                        for (var n = this, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        i || (i = setTimeout((function() {
                            t.apply(n, r), clearTimeout(i), i = null
                        }), e))
                    }
                }((function() {
                    return i.resize()
                }), 300)), window && "function" == typeof window.MutationObserver && new window.MutationObserver((function() {
                    i.resize()
                })).observe(document.documentElement, {
                    attributes: !0
                })
            }
            return t.prototype.resize = function() {
                var t, e;
                null === (e = (t = this.config).beforeResize) || void 0 === e || e.call(t), this.setHTMLFontSize(), this.setDpr(), this.resetWidthAndHeight(), this.zoomCanvas()
            }, t.prototype.initLucky = function() {
                if (this.resize(), !this.boxWidth || !this.boxHeight) return console.error("无法获取到宽度或高度")
            }, t.prototype.handleClick = function(t) {}, t.prototype.setHTMLFontSize = function() {
                window && (this.htmlFontSize = +window.getComputedStyle(document.documentElement).fontSize.slice(0, -2))
            }, t.prototype.clearCanvas = function() {
                var t = [this.boxWidth, this.boxHeight],
                    e = t[0],
                    i = t[1];
                this.ctx.clearRect(-e, -i, 2 * e, 2 * i)
            }, t.prototype.setDpr = function() {
                var t = this.config;
                t.dpr || (window ? window.dpr = t.dpr = window.devicePixelRatio || 1 : t.dpr || console.error(t, "未传入 dpr 可能会导致绘制异常"))
            }, t.prototype.resetWidthAndHeight = function() {
                var t = this.config,
                    e = this.data,
                    i = 0,
                    n = 0;
                t.divElement && (i = t.divElement.offsetWidth, n = t.divElement.offsetHeight), this.boxWidth = this.getLength(e.width || t.width) || i, this.boxHeight = this.getLength(e.height || t.height) || n, t.divElement && (t.divElement.style.overflow = "hidden", t.divElement.style.width = this.boxWidth + "px", t.divElement.style.height = this.boxHeight + "px")
            }, t.prototype.zoomCanvas = function() {
                var t = this.config,
                    e = this.ctx,
                    i = t.canvasElement,
                    n = t.dpr,
                    r = [this.boxWidth * n, this.boxHeight * n],
                    o = r[0],
                    a = r[1];
                i && (i.width = o, i.height = a, i.style.width = o + "px", i.style.height = a + "px", i.style["transform-origin"] = "left top", i.style.transform = "scale(" + 1 / n + ")", e.scale(n, n))
            }, t.prototype.initWindowFunction = function() {
                var t = this.config;
                if (window) return this.rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                    window.setTimeout(t, 1e3 / 60)
                }, t.setTimeout = window.setTimeout, t.setInterval = window.setInterval, t.clearTimeout = window.clearTimeout, void(t.clearInterval = window.clearInterval);
                if (t.rAF) this.rAF = t.rAF;
                else if (t.setTimeout) {
                    var e = t.setTimeout;
                    this.rAF = function(t) {
                        return e(t, 16.7)
                    }
                } else this.rAF = function(t) {
                    return setTimeout(t, 16.7)
                }
            }, t.prototype.isWeb = function() {
                return ["WEB", "UNI-H5", "TARO-H5"].includes(this.config.flag)
            }, t.prototype.loadImg = function(t, e, i) {
                var n = this;
                return void 0 === i && (i = "$resolve"), new Promise((function(r, o) {
                    if (t || o("=> '" + e.src + "' 不能为空或不合法"), "WEB" !== n.config.flag) return e[i] = r, void(e.$reject = o);
                    var a = new Image;
                    a.onload = function() {
                        return r(a)
                    }, a.onerror = function() {
                        return o("=> '" + e.src + "' 图片加载失败")
                    }, a.src = t
                }))
            }, t.prototype.drawImage = function(t, e) {
                for (var i, n, r, o = [], s = 2; s < arguments.length; s++) o[s - 2] = arguments[s];
                var h = this.config,
                    c = h.flag,
                    l = h.dpr;
                if (["WEB", "MP-WX"].includes(c)) r = e;
                else {
                    if (!["UNI-H5", "UNI-MP", "TARO-H5", "TARO-MP"].includes(c)) return console.error("意料之外的 flag, 该平台尚未兼容!");
                    r = e.path
                }
                var u = null === (n = (i = r.canvas || r).getContext) || void 0 === n ? void 0 : n.call(i, "2d");
                if (u && !this.isWeb()) {
                    o = o.map((function(t) {
                        return t * l
                    }));
                    var f = u.getImageData.apply(u, o.slice(0, 4));
                    t.putImageData.apply(t, a([f], o.slice(4, 6)))
                } else {
                    8 === o.length && (o = o.map((function(t, e) {
                        return e < 4 ? t * l : t
                    })));
                    try {
                        t.drawImage.apply(t, a([r], o))
                    } catch (t) {}
                }
            }, t.prototype.computedWidthAndHeight = function(t, e, i, n) {
                if (!e.width && !e.height) return [t.width, t.height];
                if (e.width && !e.height) {
                    var r = this.getLength(e.width, i);
                    return [r, t.height * (r / t.width)]
                }
                if (!e.width && e.height) {
                    var o = this.getLength(e.height, n);
                    return [t.width * (o / t.height), o]
                }
                return [this.getLength(e.width, i), this.getLength(e.height, n)]
            }, t.prototype.changeUnits = function(t, e) {
                var i = this;
                void 0 === e && (e = 1);
                var n = this.config;
                return Number(t.replace(/^([-]*[0-9.]*)([a-z%]*)$/, (function(t, r, o) {
                    var a = {
                        "%": function(t) {
                            return t * (e / 100)
                        },
                        px: function(t) {
                            return 1 * t
                        },
                        rem: function(t) {
                            return t * i.htmlFontSize
                        },
                        vw: function(t) {
                            return t / 100 * window.innerWidth
                        }
                    } [o];
                    if (a) return a(r);
                    var s = n.handleCssUnit || n.unitFunc;
                    return s ? s(r, o) : r
                })))
            }, t.prototype.getLength = function(t, e) {
                return s(t, "number") ? t : s(t, "string") ? this.changeUnits(t, e) : 0
            }, t.prototype.getOffsetX = function(t, e) {
                return void 0 === e && (e = 0), (e - t) / 2
            }, t.prototype.getOffscreenCanvas = function(t, e) {
                if (!h(this, "_offscreenCanvas") && (window && window.document && "WEB" === this.config.flag ? this._offscreenCanvas = document.createElement("canvas") : this._offscreenCanvas = this.config.offscreenCanvas, !this._offscreenCanvas)) return console.error("离屏 Canvas 无法渲染!");
                var i = this.config.dpr,
                    n = this._offscreenCanvas;
                n.width = (t || 300) * i, n.height = (e || 150) * i;
                var r = n.getContext("2d");
                return r.clearRect(0, 0, t, e), r.scale(i, i), r.dpr = i, {
                    _offscreenCanvas: n,
                    _ctx: r
                }
            }, t.prototype.$set = function(t, e, i) {
                t && "object" == typeof t && C(t, e, i)
            }, t.prototype.$computed = function(t, e, i) {
                var n = this;
                Object.defineProperty(t, e, {
                    get: function() {
                        return i.call(n)
                    }
                })
            }, t.prototype.$watch = function(t, e, i) {
                void 0 === i && (i = {}), "object" == typeof e && (e = (i = e).handler);
                var n = new x(this, t, e, i);
                return i.immediate && e.call(this, n.value),
                    function() {}
            }, t.version = p, t
        }(),
        I = function(t) {
            return Math.PI / 180 * t
        },
        A = function(t) {
            for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            var n = e[0],
                r = e[1],
                o = e[2],
                a = e[3],
                s = e[4],
                h = Math.min(o, a),
                c = Math.PI;
            s > h / 2 && (s = h / 2), t.beginPath(), t.moveTo(n + s, r), t.lineTo(n + s, r), t.lineTo(n + o - s, r), t.arc(n + o - s, r + s, s, -c / 2, 0), t.lineTo(n + o, r + a - s), t.arc(n + o - s, r + a - s, s, 0, c / 2), t.lineTo(n + s, r + a), t.arc(n + s, r + a - s, s, c / 2, c), t.lineTo(n, r + s), t.arc(n + s, r + s, s, c, -c / 2), t.closePath()
        },
        L = function(t, e, i, n) {
            return t >= n && (t = n), i * (t /= n) * t + e
        },
        T = function(t, e, i, n) {
            return t >= n && (t = n), -i * (t /= n) * (t - 2) + e
        },
        _ = function(t) {
            function e(e, i) {
                var n, r = t.call(this, e, {
                    width: i.width,
                    height: i.height
                }) || this;
                return r.blocks = [], r.prizes = [], r.buttons = [], r.defaultConfig = {}, r.defaultStyle = {}, r._defaultConfig = {}, r._defaultStyle = {}, r.Radius = 0, r.prizeRadius = 0, r.prizeDeg = 0, r.prizeAng = 0, r.rotateDeg = 0, r.maxBtnRadius = 0, r.startTime = 0, r.endTime = 0, r.stopDeg = 0, r.endDeg = 0, r.FPS = 16.6, r.step = 0, r.ImageCache = new Map, r.initData(i), r.initWatch(), r.initComputed(), null === (n = e.beforeCreate) || void 0 === n || n.call(r), r.init(), r
            }
            return i(e, t), e.prototype.resize = function() {
                var e, i;
                t.prototype.resize.call(this), this.Radius = Math.min(this.boxWidth, this.boxHeight) / 2, this.ctx.translate(this.Radius, this.Radius), this.draw(), null === (i = (e = this.config).afterResize) || void 0 === i || i.call(e)
            }, e.prototype.initLucky = function() {
                this.Radius = 0, this.prizeRadius = 0, this.prizeDeg = 0, this.prizeAng = 0, this.rotateDeg = 0, this.maxBtnRadius = 0, this.startTime = 0, this.endTime = 0, this.stopDeg = 0, this.endDeg = 0, this.FPS = 16.6, this.prizeFlag = -1, this.step = 0, t.prototype.initLucky.call(this)
            }, e.prototype.initData = function(t) {
                this.$set(this, "width", t.width), this.$set(this, "height", t.height), this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), this.$set(this, "buttons", t.buttons || []), this.$set(this, "defaultConfig", t.defaultConfig || {}), this.$set(this, "defaultStyle", t.defaultStyle || {}), this.$set(this, "startCallback", t.start), this.$set(this, "endCallback", t.end)
            }, e.prototype.initComputed = function() {
                var t = this;
                this.$computed(this, "_defaultConfig", (function() {
                    return n({
                        gutter: "0px",
                        offsetDegree: 0,
                        speed: 20,
                        speedFunction: "quad",
                        accelerationTime: 2500,
                        decelerationTime: 2500,
                        stopRange: 0
                    }, t.defaultConfig)
                })), this.$computed(this, "_defaultStyle", (function() {
                    return n({
                        fontSize: "18px",
                        fontColor: "#000",
                        fontStyle: "sans-serif",
                        fontWeight: "400",
                        background: "rgba(0,0,0,0)",
                        wordWrap: !0,
                        lengthLimit: "90%"
                    }, t.defaultStyle)
                }))
            }, e.prototype.initWatch = function() {
                var t = this;
                this.$watch("width", (function(e) {
                    t.data.width = e, t.resize()
                })), this.$watch("height", (function(e) {
                    t.data.height = e, t.resize()
                })), this.$watch("blocks", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("prizes", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("buttons", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("defaultConfig", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("defaultStyle", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("startCallback", (function() {
                    return t.init()
                })), this.$watch("endCallback", (function() {
                    return t.init()
                }))
            }, e.prototype.init = function() {
                var t, e;
                return r(this, void 0, void 0, (function() {
                    var i;
                    return o(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.initLucky(), i = this.config, null === (t = i.beforeInit) || void 0 === t || t.call(this), this.draw(), this.draw(), [4, this.initImageCache()];
                            case 1:
                                return n.sent(), null === (e = i.afterInit) || void 0 === e || e.call(this), [2]
                        }
                    }))
                }))
            }, e.prototype.initImageCache = function() {
                var t = this;
                return new Promise((function(e) {
                    var i = {
                        blocks: t.blocks.map((function(t) {
                            return t.imgs
                        })),
                        prizes: t.prizes.map((function(t) {
                            return t.imgs
                        })),
                        buttons: t.buttons.map((function(t) {
                            return t.imgs
                        }))
                    };
                    Object.keys(i).forEach((function(n) {
                        var r = i[n],
                            o = [];
                        r && r.forEach((function(e, i) {
                            e && e.forEach((function(e, r) {
                                o.push(t.loadAndCacheImg(n, i, r))
                            }))
                        })), Promise.all(o).then((function() {
                            t.draw(), e()
                        }))
                    }))
                }))
            }, e.prototype.handleClick = function(t) {
                var e, i = this.ctx;
                i.beginPath(), i.arc(0, 0, this.maxBtnRadius, 0, 2 * Math.PI, !1), i.isPointInPath(t.offsetX, t.offsetY) && 0 === this.step && (null === (e = this.startCallback) || void 0 === e || e.call(this, t))
            }, e.prototype.loadAndCacheImg = function(t, e, i) {
                return r(this, void 0, void 0, (function() {
                    var n = this;
                    return o(this, (function(a) {
                        return [2, new Promise((function(a, s) {
                            var h = n[t][e];
                            if (h && h.imgs) {
                                var c = h.imgs[i];
                                c && n.loadImg(c.src, c).then((function(t) {
                                    return r(n, void 0, void 0, (function() {
                                        return o(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return "function" != typeof c.formatter ? [3, 2] : [4, Promise.resolve(c.formatter.call(this, t))];
                                                case 1:
                                                    t = e.sent(), e.label = 2;
                                                case 2:
                                                    return this.ImageCache.set(c.src, t), a(), [2]
                                            }
                                        }))
                                    }))
                                })).catch((function(n) {
                                    console.error(t + "[" + e + "].imgs[" + i + "] " + n), s()
                                }))
                            }
                        }))]
                    }))
                }))
            }, e.prototype.drawBlock = function(t, e, i) {
                var n = this,
                    r = this.ctx;
                l(e.background) && (r.beginPath(), r.fillStyle = e.background, r.arc(0, 0, t, 0, 2 * Math.PI, !1), r.fill()), e.imgs && e.imgs.forEach((function(e, i) {
                    var o = n.ImageCache.get(e.src);
                    if (o) {
                        var a = n.computedWidthAndHeight(o, e, 2 * t, 2 * t),
                            s = a[0],
                            h = a[1],
                            c = [n.getOffsetX(s) + n.getLength(e.left, 2 * t), n.getLength(e.top, 2 * t) - t],
                            l = c[0],
                            u = c[1];
                        r.save(), e.rotate && r.rotate(I(n.rotateDeg)), n.drawImage(r, o, l, u, s, h), r.restore()
                    }
                }))
            }, e.prototype.draw = function() {
                var t, e, i = this,
                    n = this,
                    r = n.config,
                    o = n.ctx,
                    a = n._defaultConfig,
                    s = n._defaultStyle;
                null === (t = r.beforeDraw) || void 0 === t || t.call(this, o), o.clearRect(-this.Radius, -this.Radius, 2 * this.Radius, 2 * this.Radius), this.prizeRadius = this.blocks.reduce((function(t, e, n) {
                    return i.drawBlock(t, e, n), t - i.getLength(e.padding && e.padding.split(" ")[0])
                }), this.Radius), this.prizeDeg = 360 / this.prizes.length, this.prizeAng = I(this.prizeDeg);
                var u = this.prizeRadius * Math.sin(this.prizeAng / 2) * 2,
                    f = I(this.rotateDeg - 90 + this.prizeDeg / 2 + a.offsetDegree),
                    p = function(t, e) {
                        return i.getOffsetX(o.measureText(e).width) + i.getLength(t.left, u)
                    },
                    g = function(t, e, n) {
                        var r = t.lineHeight || s.lineHeight || t.fontSize || s.fontSize;
                        return i.getLength(t.top, e) + (n + 1) * i.getLength(r)
                    };
                o.save(), this.prizes.forEach((function(t, e) {
                    var n = f + e * i.prizeAng,
                        r = i.prizeRadius - i.maxBtnRadius,
                        v = t.background || s.background;
                    l(v) && (o.fillStyle = v, function(t, e, i, n, r, o) {
                        t.beginPath();
                        var a, s, h = I(90 / Math.PI / i * o),
                            c = n + h,
                            l = r - h;
                        t.arc(0, 0, i, c, l, !1), t.lineTo.apply(t, (a = (n + r) / 2, s = o / 2 / Math.abs(Math.sin((n - r) / 2)), [+(Math.cos(a) * s).toFixed(8), +(Math.sin(a) * s).toFixed(8)])), t.closePath()
                    }(o, i.maxBtnRadius, i.prizeRadius, n - i.prizeAng / 2, n + i.prizeAng / 2, i.getLength(a.gutter)), o.fill());
                    var m = Math.cos(n) * i.prizeRadius,
                        w = Math.sin(n) * i.prizeRadius;
                    o.translate(m, w), o.rotate(n + I(90)), t.imgs && t.imgs.forEach((function(t, e) {
                        var n = i.ImageCache.get(t.src);
                        if (n) {
                            var a = i.computedWidthAndHeight(n, t, i.prizeAng * i.prizeRadius, r),
                                s = a[0],
                                h = a[1],
                                c = [i.getOffsetX(s) + i.getLength(t.left, u), i.getLength(t.top, r)],
                                l = c[0],
                                f = c[1];
                            i.drawImage(o, n, l, f, s, h)
                        }
                    })), t.fonts && t.fonts.forEach((function(t) {
                        var e = t.fontColor || s.fontColor,
                            n = t.fontWeight || s.fontWeight,
                            l = i.getLength(t.fontSize || s.fontSize),
                            u = t.fontStyle || s.fontStyle,
                            f = h(t, "wordWrap") ? t.wordWrap : s.wordWrap,
                            v = t.lengthLimit || s.lengthLimit,
                            m = t.lineClamp || s.lineClamp;
                        o.fillStyle = e, o.font = n + " " + (l >> 0) + "px " + u;
                        var w = String(t.text);
                        (f ? d(o, c(w), (function(e) {
                            var n = (i.prizeRadius - g(t, r, e.length)) * Math.tan(i.prizeAng / 2) * 2 - i.getLength(a.gutter);
                            return i.getLength(v, n)
                        }), m) : w.split("\n")).filter((function(t) {
                            return !!t
                        })).forEach((function(e, i) {
                            o.fillText(e, p(t, e), g(t, r, i))
                        }))
                    })), o.rotate(I(360) - n - I(90)), o.translate(-m, -w)
                })), o.restore(), this.buttons.forEach((function(t, e) {
                    var n = i.getLength(t.radius, i.prizeRadius);
                    i.maxBtnRadius = Math.max(i.maxBtnRadius, n), l(t.background) && (o.beginPath(), o.fillStyle = t.background, o.arc(0, 0, n, 0, 2 * Math.PI, !1), o.fill()), t.pointer && l(t.background) && (o.beginPath(), o.fillStyle = t.background, o.moveTo(-n, 0), o.lineTo(n, 0), o.lineTo(0, 2 * -n), o.closePath(), o.fill()), t.imgs && t.imgs.forEach((function(t, e) {
                        var r = i.ImageCache.get(t.src);
                        if (r) {
                            var a = i.computedWidthAndHeight(r, t, 2 * n, 2 * n),
                                s = a[0],
                                h = a[1],
                                c = [i.getOffsetX(s) + i.getLength(t.left, n), i.getLength(t.top, n)],
                                l = c[0],
                                u = c[1];
                            i.drawImage(o, r, l, u, s, h)
                        }
                    })), t.fonts && t.fonts.forEach((function(t) {
                        var e = t.fontColor || s.fontColor,
                            r = t.fontWeight || s.fontWeight,
                            a = i.getLength(t.fontSize || s.fontSize),
                            h = t.fontStyle || s.fontStyle;
                        o.fillStyle = e, o.font = r + " " + (a >> 0) + "px " + h, String(t.text).split("\n").forEach((function(e, i) {
                            o.fillText(e, p(t, e), g(t, n, i))
                        }))
                    }))
                })), null === (e = r.afterDraw) || void 0 === e || e.call(this, o)
            }, e.prototype.carveOnGunwaleOfAMovingBoat = function() {
                var t = this,
                    e = t._defaultConfig,
                    i = t.prizeFlag,
                    n = t.prizeDeg,
                    r = t.rotateDeg;
                this.endTime = Date.now();
                for (var o = this.stopDeg = r, a = e.speed, s = (Math.random() * n - n / 2) * this.getLength(e.stopRange), h = 0, c = 0, l = 0; ++h;) {
                    var u = 360 * h - i * n - r - e.offsetDegree + s - n / 2,
                        f = T(this.FPS, o, u, e.decelerationTime) - o;
                    if (f > a) {
                        this.endDeg = a - c > f - a ? u : l;
                        break
                    }
                    l = u, c = f
                }
            }, e.prototype.play = function() {
                var t, e;
                0 === this.step && (this.startTime = Date.now(), this.prizeFlag = void 0, this.step = 1, null === (e = (t = this.config).afterStart) || void 0 === e || e.call(t), this.run())
            }, e.prototype.stop = function(t) {
                if (0 !== this.step && 3 !== this.step) {
                    if (!t && 0 !== t) {
                        var e = this.prizes.map((function(t) {
                            return t.range
                        }));
                        t = f(e)
                    }
                    t < 0 ? (this.step = 0, this.prizeFlag = -1) : (this.step = 2, this.prizeFlag = t % this.prizes.length)
                }
            }, e.prototype.run = function(t) {
                var e;
                void 0 === t && (t = 0);
                var i = this,
                    n = i.rAF,
                    r = i.step,
                    o = i.prizeFlag,
                    a = i._defaultConfig,
                    s = a.accelerationTime,
                    h = a.decelerationTime,
                    c = a.speed;
                if (0 !== r) {
                    if (-1 !== o) {
                        3 !== r || this.endDeg || this.carveOnGunwaleOfAMovingBoat();
                        var l = Date.now() - this.startTime,
                            u = Date.now() - this.endTime,
                            f = this.rotateDeg;
                        if (1 === r || l < s) {
                            this.FPS = l / t;
                            var d = L(l, 0, c, s);
                            d === c && (this.step = 2), f += d % 360
                        } else 2 === r ? (f += c % 360, void 0 !== o && o >= 0 && (this.step = 3, this.stopDeg = 0, this.endDeg = 0)) : 3 === r ? (f = T(u, this.stopDeg, this.endDeg, h), u >= h && (this.step = 0)) : this.stop(-1);
                        this.rotateDeg = f, this.draw(), n(this.run.bind(this, t + 1))
                    }
                } else null === (e = this.endCallback) || void 0 === e || e.call(this, this.prizes.find((function(t, e) {
                    return e === o
                })) || {})
            }, e.prototype.conversionAxis = function(t, e) {
                var i = this.config;
                return [t / i.dpr - this.Radius, e / i.dpr - this.Radius]
            }, e
        }(k),
        W = function(t) {
            function e(e, i) {
                var n, r = t.call(this, e, {
                    width: i.width,
                    height: i.height
                }) || this;
                return r.rows = 3, r.cols = 3, r.blocks = [], r.prizes = [], r.buttons = [], r.defaultConfig = {}, r.defaultStyle = {}, r.activeStyle = {}, r._defaultConfig = {}, r._defaultStyle = {}, r._activeStyle = {}, r.cellWidth = 0, r.cellHeight = 0, r.startTime = 0, r.endTime = 0, r.currIndex = 0, r.stopIndex = 0, r.endIndex = 0, r.demo = !1, r.timer = 0, r.FPS = 16.6, r.step = 0, r.prizeFlag = -1, r.cells = [], r.ImageCache = new Map, r.initData(i), r.initWatch(), r.initComputed(), null === (n = e.beforeCreate) || void 0 === n || n.call(r), r.init(), r
            }
            return i(e, t), e.prototype.resize = function() {
                var e, i;
                t.prototype.resize.call(this), this.draw(), null === (i = (e = this.config).afterResize) || void 0 === i || i.call(e)
            }, e.prototype.initLucky = function() {
                this.cellWidth = 0, this.cellHeight = 0, this.startTime = 0, this.endTime = 0, this.currIndex = 0, this.stopIndex = 0, this.endIndex = 0, this.demo = !1, this.timer = 0, this.FPS = 16.6, this.prizeFlag = -1, this.step = 0, t.prototype.initLucky.call(this)
            }, e.prototype.initData = function(t) {
                this.$set(this, "width", t.width), this.$set(this, "height", t.height), this.$set(this, "rows", Number(t.rows) || 3), this.$set(this, "cols", Number(t.cols) || 3), this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), this.$set(this, "buttons", t.buttons || []), this.$set(this, "button", t.button), this.$set(this, "defaultConfig", t.defaultConfig || {}), this.$set(this, "defaultStyle", t.defaultStyle || {}), this.$set(this, "activeStyle", t.activeStyle || {}), this.$set(this, "startCallback", t.start), this.$set(this, "endCallback", t.end)
            }, e.prototype.initComputed = function() {
                var t = this;
                this.$computed(this, "_defaultConfig", (function() {
                    var e = n({
                        gutter: 5,
                        speed: 20,
                        accelerationTime: 2500,
                        decelerationTime: 2500
                    }, t.defaultConfig);
                    return e.gutter = t.getLength(e.gutter), e.speed = e.speed / 40, e
                })), this.$computed(this, "_defaultStyle", (function() {
                    return n({
                        borderRadius: 20,
                        fontColor: "#000",
                        fontSize: "18px",
                        fontStyle: "sans-serif",
                        fontWeight: "400",
                        background: "rgba(0,0,0,0)",
                        shadow: "",
                        wordWrap: !0,
                        lengthLimit: "90%"
                    }, t.defaultStyle)
                })), this.$computed(this, "_activeStyle", (function() {
                    return n({
                        background: "#ffce98",
                        shadow: ""
                    }, t.activeStyle)
                }))
            }, e.prototype.initWatch = function() {
                var t = this;
                this.$watch("width", (function(e) {
                    t.data.width = e, t.resize()
                })), this.$watch("height", (function(e) {
                    t.data.height = e, t.resize()
                })), this.$watch("blocks", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("prizes", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("buttons", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("rows", (function() {
                    return t.init()
                })), this.$watch("cols", (function() {
                    return t.init()
                })), this.$watch("defaultConfig", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("defaultStyle", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("activeStyle", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("startCallback", (function() {
                    return t.init()
                })), this.$watch("endCallback", (function() {
                    return t.init()
                }))
            }, e.prototype.init = function() {
                var t, e;
                return r(this, void 0, void 0, (function() {
                    var i;
                    return o(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.initLucky(), i = this.config, null === (t = i.beforeInit) || void 0 === t || t.call(this), this.draw(), [4, this.initImageCache()];
                            case 1:
                                return n.sent(), null === (e = i.afterInit) || void 0 === e || e.call(this), [2]
                        }
                    }))
                }))
            }, e.prototype.initImageCache = function() {
                var t = this;
                return new Promise((function(e) {
                    var i = t.buttons.map((function(t) {
                        return t.imgs
                    }));
                    t.button && i.push(t.button.imgs);
                    var n = {
                        blocks: t.blocks.map((function(t) {
                            return t.imgs
                        })),
                        prizes: t.prizes.map((function(t) {
                            return t.imgs
                        })),
                        buttons: i
                    };
                    Object.keys(n).forEach((function(i) {
                        var r = n[i],
                            o = [];
                        r && r.forEach((function(e, n) {
                            e && e.forEach((function(e, r) {
                                o.push(t.loadAndCacheImg(i, n, r))
                            }))
                        })), Promise.all(o).then((function() {
                            t.draw(), e()
                        }))
                    }))
                }))
            }, e.prototype.handleClick = function(t) {
                var e = this,
                    i = this.ctx;
                a(a([], this.buttons), [this.button]).forEach((function(n) {
                    var r;
                    if (n) {
                        var o = e.getGeometricProperty([n.x, n.y, n.col || 1, n.row || 1]),
                            a = o[0],
                            s = o[1],
                            h = o[2],
                            c = o[3];
                        i.beginPath(), i.rect(a, s, h, c), i.isPointInPath(t.offsetX, t.offsetY) && 0 === e.step && ("function" == typeof n.callback && n.callback.call(e, n), null === (r = e.startCallback) || void 0 === r || r.call(e, t, n))
                    }
                }))
            }, e.prototype.loadAndCacheImg = function(t, e, i) {
                return r(this, void 0, void 0, (function() {
                    var n = this;
                    return o(this, (function(a) {
                        return [2, new Promise((function(a, s) {
                            var h = n[t][e];
                            if ("buttons" === t && !n.buttons.length && n.button && (h = n.button), h && h.imgs) {
                                var c = h.imgs[i];
                                if (c) {
                                    var l = [n.loadImg(c.src, c), c.activeSrc && n.loadImg(c.activeSrc, c, "$activeResolve")];
                                    Promise.all(l).then((function(t) {
                                        var e = t[0],
                                            i = t[1];
                                        return r(n, void 0, void 0, (function() {
                                            var t;
                                            return o(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return "function" != typeof(t = c.formatter) ? [3, 3] : [4, Promise.resolve(t.call(this, e))];
                                                    case 1:
                                                        return e = n.sent(), i ? [4, Promise.resolve(t.call(this, i))] : [3, 3];
                                                    case 2:
                                                        i = n.sent(), n.label = 3;
                                                    case 3:
                                                        return this.ImageCache.set(c.src, e), i && this.ImageCache.set(c.activeSrc, i), a(), [2]
                                                }
                                            }))
                                        }))
                                    })).catch((function(n) {
                                        console.error(t + "[" + e + "].imgs[" + i + "] " + n), s()
                                    }))
                                }
                            }
                        }))]
                    }))
                }))
            }, e.prototype.draw = function() {
                var t, e, i = this,
                    n = this,
                    r = n.config,
                    o = n.ctx,
                    s = n._defaultConfig,
                    f = n._defaultStyle,
                    p = n._activeStyle;
                null === (t = r.beforeDraw) || void 0 === t || t.call(this, o), o.clearRect(0, 0, this.boxWidth, this.boxHeight), this.cells = a(a([], this.prizes), this.buttons), this.button && this.cells.push(this.button), this.cells.forEach((function(t) {
                    t.col = t.col || 1, t.row = t.row || 1
                })), this.prizeArea = this.blocks.reduce((function(t, e, n) {
                    var r = t.x,
                        a = t.y,
                        s = t.w,
                        h = t.h,
                        c = u(e, i.getLength.bind(i)),
                        f = c[0],
                        d = c[1],
                        p = c[2],
                        g = c[3],
                        v = e.borderRadius ? i.getLength(e.borderRadius) : 0,
                        m = e.background;
                    return l(m) && (o.fillStyle = i.handleBackground(r, a, s, h, m), A(o, r, a, s, h, v), o.fill()), e.imgs && e.imgs.forEach((function(t, e) {
                        var n = i.ImageCache.get(t.src);
                        if (n) {
                            var c = i.computedWidthAndHeight(n, t, s, h),
                                l = c[0],
                                u = c[1],
                                f = [i.getOffsetX(l, s) + i.getLength(t.left, s), i.getLength(t.top, h)],
                                d = f[0],
                                p = f[1];
                            i.drawImage(o, n, r + d, a + p, l, u)
                        }
                    })), {
                        x: r + p,
                        y: a + f,
                        w: s - p - g,
                        h: h - f - d
                    }
                }), {
                    x: 0,
                    y: 0,
                    w: this.boxWidth,
                    h: this.boxHeight
                }), this.cellWidth = (this.prizeArea.w - s.gutter * (this.cols - 1)) / this.cols, this.cellHeight = (this.prizeArea.h - s.gutter * (this.rows - 1)) / this.rows, this.cells.forEach((function(t, e) {
                    var n = i.getGeometricProperty([t.x, t.y, t.col, t.row]),
                        a = n[0],
                        s = n[1],
                        u = n[2],
                        g = n[3],
                        v = !1;
                    (void 0 === i.prizeFlag || i.prizeFlag > -1) && (v = e === i.currIndex % i.prizes.length >> 0);
                    var m = v ? p.background : t.background || f.background;
                    if (l(m)) {
                        var w = (v ? p.shadow : t.shadow || f.shadow).replace(/px/g, "").split(",")[0].split(" ").map((function(t, e) {
                            return e < 3 ? Number(t) : t
                        }));
                        4 === w.length && (o.shadowColor = w[3], o.shadowOffsetX = w[0] * r.dpr, o.shadowOffsetY = w[1] * r.dpr, o.shadowBlur = w[2], w[0] > 0 ? u -= w[0] : (u += w[0], a -= w[0]), w[1] > 0 ? g -= w[1] : (g += w[1], s -= w[1])), o.fillStyle = i.handleBackground(a, s, u, g, m);
                        var y = i.getLength(t.borderRadius ? t.borderRadius : f.borderRadius);
                        A(o, a, s, u, g, y), o.fill(), o.shadowColor = "rgba(0, 0, 0, 0)", o.shadowOffsetX = 0, o.shadowOffsetY = 0, o.shadowBlur = 0
                    }
                    e >= i.prizes.length && (e -= i.prizes.length), t.imgs && t.imgs.forEach((function(t, e) {
                        var n = i.ImageCache.get(t.src),
                            r = i.ImageCache.get(t.activeSrc);
                        if (n) {
                            var h = v && r || n;
                            if (h) {
                                var c = i.computedWidthAndHeight(h, t, u, g),
                                    l = c[0],
                                    f = c[1],
                                    d = [a + i.getOffsetX(l, u) + i.getLength(t.left, u), s + i.getLength(t.top, g)],
                                    p = d[0],
                                    m = d[1];
                                i.drawImage(o, h, p, m, l, f)
                            }
                        }
                    })), t.fonts && t.fonts.forEach((function(t) {
                        var e = v && p.fontStyle ? p.fontStyle : t.fontStyle || f.fontStyle,
                            n = v && p.fontWeight ? p.fontWeight : t.fontWeight || f.fontWeight,
                            r = v && p.fontSize ? i.getLength(p.fontSize) : i.getLength(t.fontSize || f.fontSize),
                            l = v && p.lineHeight ? p.lineHeight : t.lineHeight || f.lineHeight || t.fontSize || f.fontSize,
                            m = h(t, "wordWrap") ? t.wordWrap : f.wordWrap,
                            w = t.lengthLimit || f.lengthLimit,
                            y = t.lineClamp || f.lineClamp;
                        o.font = n + " " + (r >> 0) + "px " + e, o.fillStyle = v && p.fontColor ? p.fontColor : t.fontColor || f.fontColor;
                        var b = [],
                            S = String(t.text);
                        if (m) {
                            var C = i.getLength(w, u);
                            b = d(o, c(S), (function() {
                                return C
                            }), y)
                        } else b = S.split("\n");
                        b.forEach((function(e, n) {
                            o.fillText(e, a + i.getOffsetX(o.measureText(e).width, u) + i.getLength(t.left, u), s + i.getLength(t.top, g) + (n + 1) * i.getLength(l))
                        }))
                    }))
                })), null === (e = r.afterDraw) || void 0 === e || e.call(this, o)
            }, e.prototype.handleBackground = function(t, e, i, n, r) {
                var o = this.ctx;
                return r.includes("linear-gradient") && (r = function(t, e, i, n, r, o) {
                    var a = /linear-gradient\((.+)\)/.exec(o)[1].split(",").map((function(t) {
                            return t.trim()
                        })),
                        s = a.shift(),
                        h = [0, 0, 0, 0];
                    if (s.includes("deg")) {
                        var c = function(t) {
                            return Math.tan(t / 180 * Math.PI)
                        };
                        (s = s.slice(0, -3) % 360) >= 0 && s < 45 ? h = [e, i + r, e + n, i + r - n * c(s - 0)] : s >= 45 && s < 90 ? h = [e, i + r, e + n - r * c(s - 45), i] : s >= 90 && s < 135 ? h = [e + n, i + r, e + n - r * c(s - 90), i] : s >= 135 && s < 180 ? h = [e + n, i + r, e, i + n * c(s - 135)] : s >= 180 && s < 225 ? h = [e + n, i, e, i + n * c(s - 180)] : s >= 225 && s < 270 ? h = [e + n, i, e + r * c(s - 225), i + r] : s >= 270 && s < 315 ? h = [e, i, e + r * c(s - 270), i + r] : s >= 315 && s < 360 && (h = [e, i, e + n, i + r - n * c(s - 315)])
                    } else s.includes("top") ? h = [e, i + r, e, i] : s.includes("bottom") ? h = [e, i, e, i + r] : s.includes("left") ? h = [e + n, i, e, i] : s.includes("right") && (h = [e, i, e + n, i]);
                    var l = t.createLinearGradient.apply(t, h.map((function(t) {
                        return t >> 0
                    })));
                    return a.reduce((function(t, e, i) {
                        var n = e.split(" ");
                        return 1 === n.length ? t.addColorStop(i, n[0]) : 2 === n.length && t.addColorStop.apply(t, n), t
                    }), l)
                }(o, t, e, i, n, r)), r
            }, e.prototype.carveOnGunwaleOfAMovingBoat = function() {
                var t = this,
                    e = t._defaultConfig,
                    i = t.prizeFlag,
                    n = t.currIndex;
                this.endTime = Date.now();
                for (var r = this.stopIndex = n, o = e.speed, a = 0, s = 0, h = 0; ++a;) {
                    var c = this.prizes.length * a + i - r,
                        l = T(this.FPS, r, c, e.decelerationTime) - r;
                    if (l > o) {
                        this.endIndex = o - s > l - o ? c : h;
                        break
                    }
                    h = c, s = l
                }
            }, e.prototype.play = function() {
                var t, e;
                0 === this.step && (this.startTime = Date.now(), this.prizeFlag = void 0, this.step = 1, null === (e = (t = this.config).afterStart) || void 0 === e || e.call(t), this.run())
            }, e.prototype.stop = function(t) {
                if (0 !== this.step && 3 !== this.step) {
                    if (!t && 0 !== t) {
                        var e = this.prizes.map((function(t) {
                            return t.range
                        }));
                        t = f(e)
                    }
                    t < 0 ? (this.step = 0, this.prizeFlag = -1) : (this.step = 2, this.prizeFlag = t % this.prizes.length)
                }
            }, e.prototype.run = function(t) {
                var e;
                void 0 === t && (t = 0);
                var i = this,
                    n = i.rAF,
                    r = i.step,
                    o = i.prizes,
                    a = i.prizeFlag,
                    s = i._defaultConfig,
                    h = s.accelerationTime,
                    c = s.decelerationTime,
                    l = s.speed;
                if (0 !== r) {
                    if (-1 !== a) {
                        3 !== r || this.endIndex || this.carveOnGunwaleOfAMovingBoat();
                        var u = Date.now() - this.startTime,
                            f = Date.now() - this.endTime,
                            d = this.currIndex;
                        if (1 === r || u < h) {
                            this.FPS = u / t;
                            var p = L(u, .1, l - .1, h);
                            p === l && (this.step = 2), d += p % o.length
                        } else 2 === r ? (d += l % o.length, void 0 !== a && a >= 0 && (this.step = 3, this.stopIndex = 0, this.endIndex = 0)) : 3 === r ? (d = T(f, this.stopIndex, this.endIndex, c), f >= c && (this.step = 0)) : this.stop(-1);
                        this.currIndex = d, this.draw(), n(this.run.bind(this, t + 1))
                    }
                } else null === (e = this.endCallback) || void 0 === e || e.call(this, this.prizes.find((function(t, e) {
                    return e === a
                })) || {})
            }, e.prototype.getGeometricProperty = function(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2],
                    r = void 0 === n ? 1 : n,
                    o = t[3],
                    a = void 0 === o ? 1 : o,
                    s = this.cellWidth,
                    h = this.cellHeight,
                    c = this._defaultConfig.gutter,
                    l = [this.prizeArea.x + (s + c) * e, this.prizeArea.y + (h + c) * i];
                return r && a && l.push(s * r + c * (r - 1), h * a + c * (a - 1)), l
            }, e.prototype.conversionAxis = function(t, e) {
                var i = this.config;
                return [t / i.dpr, e / i.dpr]
            }, e
        }(k),
        $ = function(t) {
            function e(e, i) {
                var n, r = t.call(this, e, {
                    width: i.width,
                    height: i.height
                }) || this;
                return r.blocks = [], r.prizes = [], r.slots = [], r.defaultConfig = {}, r._defaultConfig = {}, r.defaultStyle = {}, r._defaultStyle = {}, r.endCallback = function() {}, r.cellWidth = 0, r.cellHeight = 0, r.cellAndSpacing = 0, r.widthAndSpacing = 0, r.heightAndSpacing = 0, r.FPS = 16.6, r.scroll = [], r.stopScroll = [], r.endScroll = [], r.startTime = 0, r.endTime = 0, r.step = 0, r.prizeFlag = void 0, r.ImageCache = new Map, r.initData(i), r.initWatch(), r.initComputed(), null === (n = e.beforeCreate) || void 0 === n || n.call(r), r.init(), r
            }
            return i(e, t), e.prototype.resize = function() {
                var e, i;
                t.prototype.resize.call(this), this.draw(), null === (i = (e = this.config).afterResize) || void 0 === i || i.call(e)
            }, e.prototype.initLucky = function() {
                this.cellWidth = 0, this.cellHeight = 0, this.cellAndSpacing = 0, this.widthAndSpacing = 0, this.heightAndSpacing = 0, this.FPS = 16.6, this.scroll = [], this.stopScroll = [], this.endScroll = [], this.startTime = 0, this.endTime = 0, this.prizeFlag = void 0, this.step = 0, t.prototype.initLucky.call(this)
            }, e.prototype.initData = function(t) {
                this.$set(this, "width", t.width), this.$set(this, "height", t.height), this.$set(this, "blocks", t.blocks || []), this.$set(this, "prizes", t.prizes || []), this.$set(this, "slots", t.slots || []), this.$set(this, "defaultConfig", t.defaultConfig || {}), this.$set(this, "defaultStyle", t.defaultStyle || {}), this.$set(this, "endCallback", t.end)
            }, e.prototype.initComputed = function() {
                var t = this;
                this.$computed(this, "_defaultConfig", (function() {
                    var e = n({
                        mode: "vertical",
                        rowSpacing: 0,
                        colSpacing: 5,
                        speed: 20,
                        direction: 1,
                        accelerationTime: 2500,
                        decelerationTime: 2500
                    }, t.defaultConfig);
                    return e.rowSpacing = t.getLength(e.rowSpacing), e.colSpacing = t.getLength(e.colSpacing), e
                })), this.$computed(this, "_defaultStyle", (function() {
                    return n({
                        borderRadius: 0,
                        fontColor: "#000",
                        fontSize: "18px",
                        fontStyle: "sans-serif",
                        fontWeight: "400",
                        background: "rgba(0,0,0,0)",
                        wordWrap: !0,
                        lengthLimit: "90%"
                    }, t.defaultStyle)
                }))
            }, e.prototype.initWatch = function() {
                var t = this;
                this.$watch("width", (function(e) {
                    t.data.width = e, t.resize()
                })), this.$watch("height", (function(e) {
                    t.data.height = e, t.resize()
                })), this.$watch("blocks", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("prizes", (function(e) {
                    t.initImageCache()
                }), {
                    deep: !0
                }), this.$watch("slots", (function(e) {
                    t.drawOffscreenCanvas(), t.draw()
                }), {
                    deep: !0
                }), this.$watch("defaultConfig", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("defaultStyle", (function() {
                    return t.draw()
                }), {
                    deep: !0
                }), this.$watch("endCallback", (function() {
                    return t.init()
                }))
            }, e.prototype.init = function() {
                var t, e;
                return r(this, void 0, void 0, (function() {
                    var i;
                    return o(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.initLucky(), i = this.config, null === (t = i.beforeInit) || void 0 === t || t.call(this), this.drawOffscreenCanvas(), this.draw(), [4, this.initImageCache()];
                            case 1:
                                return n.sent(), null === (e = i.afterInit) || void 0 === e || e.call(this), [2]
                        }
                    }))
                }))
            }, e.prototype.initImageCache = function() {
                var t = this;
                return new Promise((function(e) {
                    var i = {
                        blocks: t.blocks.map((function(t) {
                            return t.imgs
                        })),
                        prizes: t.prizes.map((function(t) {
                            return t.imgs
                        }))
                    };
                    Object.keys(i).forEach((function(n) {
                        var r = i[n],
                            o = [];
                        r && r.forEach((function(e, i) {
                            e && e.forEach((function(e, r) {
                                o.push(t.loadAndCacheImg(n, i, r))
                            }))
                        })), Promise.all(o).then((function() {
                            t.drawOffscreenCanvas(), t.draw(), e()
                        }))
                    }))
                }))
            }, e.prototype.loadAndCacheImg = function(t, e, i) {
                return r(this, void 0, void 0, (function() {
                    var n = this;
                    return o(this, (function(a) {
                        return [2, new Promise((function(a, s) {
                            var h = n[t][e];
                            if (h && h.imgs) {
                                var c = h.imgs[i];
                                c && n.loadImg(c.src, c).then((function(t) {
                                    return r(n, void 0, void 0, (function() {
                                        return o(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return "function" != typeof c.formatter ? [3, 2] : [4, Promise.resolve(c.formatter.call(this, t))];
                                                case 1:
                                                    t = e.sent(), e.label = 2;
                                                case 2:
                                                    return this.ImageCache.set(c.src, t), a(), [2]
                                            }
                                        }))
                                    }))
                                })).catch((function(n) {
                                    console.error(t + "[" + e + "].imgs[" + i + "] " + n), s()
                                }))
                            }
                        }))]
                    }))
                }))
            }, e.prototype.drawOffscreenCanvas = function() {
                var t = this,
                    e = this._defaultConfig,
                    i = this._defaultStyle,
                    n = this.drawBlocks(),
                    r = n.w,
                    o = n.h,
                    a = this.prizes.length,
                    s = this.displacementWidthOrHeight(),
                    u = s.cellWidth,
                    f = s.cellHeight,
                    p = s.widthAndSpacing,
                    g = s.heightAndSpacing,
                    v = new Array(a).fill(void 0).map((function(t, e) {
                        return e
                    })),
                    m = 0,
                    w = 0;
                this.slots.forEach((function(e, i) {
                    void 0 === t.scroll[i] && (t.scroll[i] = 0), e.order = e.order || v;
                    var n = e.order.length;
                    m = Math.max(m, r + p * n), w = Math.max(w, o + g * n)
                }));
                var y = this.getOffscreenCanvas(m, w),
                    b = y._offscreenCanvas,
                    S = y._ctx;
                this._offscreenCanvas = b, this.slots.forEach((function(n, r) {
                    var o = u * r,
                        a = f * r,
                        s = 0,
                        v = function(t, e) {
                            for (var i = {}, n = [], r = 0; r < t.length; r++) i[r] = t[r];
                            for (r = 0; r < e.length; r++) {
                                var o = i[e[r]];
                                o && (n[r] = o)
                            }
                            return n
                        }(t.prizes, n.order);
                    if (v.length) {
                        v.forEach((function(r, v) {
                            if (r) {
                                n.order[v];
                                var m = p * v + e.colSpacing / 2,
                                    w = g * v + e.rowSpacing / 2,
                                    y = t.displacement([o, w, g], [m, a, p]),
                                    b = y[0],
                                    C = y[1],
                                    z = y[2];
                                s += z;
                                var x = r.background || i.background;
                                if (l(x)) {
                                    var k = t.getLength(h(r, "borderRadius") ? r.borderRadius : i.borderRadius);
                                    A(S, b, C, u, u, k), S.fillStyle = x, S.fill()
                                }
                                r.imgs && r.imgs.forEach((function(e, i) {
                                    var n = t.ImageCache.get(e.src);
                                    if (n) {
                                        var r = t.computedWidthAndHeight(n, e, u, f),
                                            o = r[0],
                                            a = r[1],
                                            s = [b + t.getOffsetX(o, u) + t.getLength(e.left, u), C + t.getLength(e.top, f)],
                                            h = s[0],
                                            c = s[1];
                                        t.drawImage(S, n, h, c, o, a)
                                    }
                                })), r.fonts && r.fonts.forEach((function(e) {
                                    var n = e.fontStyle || i.fontStyle,
                                        r = e.fontWeight || i.fontWeight,
                                        o = t.getLength(e.fontSize || i.fontSize),
                                        a = e.lineHeight || i.lineHeight || e.fontSize || i.fontSize,
                                        s = h(e, "wordWrap") ? e.wordWrap : i.wordWrap,
                                        l = e.lengthLimit || i.lengthLimit,
                                        p = e.lineClamp || i.lineClamp;
                                    S.font = r + " " + (o >> 0) + "px " + n, S.fillStyle = e.fontColor || i.fontColor;
                                    var g = [],
                                        v = String(e.text);
                                    if (s) {
                                        var m = t.getLength(l, u);
                                        g = d(S, c(v), (function() {
                                            return m
                                        }), p)
                                    } else g = v.split("\n");
                                    g.forEach((function(i, n) {
                                        S.fillText(i, b + t.getOffsetX(S.measureText(i).width, u) + t.getLength(e.left, u), C + t.getLength(e.top, f) + (n + 1) * t.getLength(a))
                                    }))
                                }))
                            }
                        }));
                        for (var m = t.displacement([o, 0, u, s], [0, a, s, f]), y = m[0], C = m[1], z = m[2], x = m[3], k = s; k < w + s;) {
                            var I = t.displacement([y, k], [k, C]),
                                L = I[0],
                                T = I[1];
                            t.drawImage(S, b, y, C, z, x, L, T, z, x), k += s
                        }
                    }
                }))
            }, e.prototype.drawBlocks = function() {
                var t = this,
                    e = this;
                e.config;
                var i = e.ctx;
                e._defaultConfig;
                var n = e._defaultStyle;
                return this.prizeArea = this.blocks.reduce((function(e, r, o) {
                    var a = e.x,
                        s = e.y,
                        h = e.w,
                        c = e.h,
                        f = u(r, t.getLength.bind(t)),
                        d = f[0],
                        p = f[1],
                        g = f[2],
                        v = f[3],
                        m = r.borderRadius ? t.getLength(r.borderRadius) : 0,
                        w = r.background || n.background;
                    return l(w) && (A(i, a, s, h, c, m), i.fillStyle = w, i.fill()), r.imgs && r.imgs.forEach((function(e, n) {
                        var r = t.ImageCache.get(e.src);
                        if (r) {
                            var o = t.computedWidthAndHeight(r, e, h, c),
                                l = o[0],
                                u = o[1],
                                f = [t.getOffsetX(l, h) + t.getLength(e.left, h), t.getLength(e.top, c)],
                                d = f[0],
                                p = f[1];
                            t.drawImage(i, r, a + d, s + p, l, u)
                        }
                    })), {
                        x: a + g,
                        y: s + d,
                        w: h - g - v,
                        h: c - d - p
                    }
                }), {
                    x: 0,
                    y: 0,
                    w: this.boxWidth,
                    h: this.boxHeight
                })
            }, e.prototype.draw = function() {
                var t, e = this,
                    i = this,
                    n = i.config,
                    r = i.ctx;
                i._defaultConfig, i._defaultStyle, null === (t = n.beforeDraw) || void 0 === t || t.call(this, r), r.clearRect(0, 0, this.boxWidth, this.boxHeight);
                var o = this.drawBlocks(),
                    a = o.x,
                    s = o.y,
                    h = o.w,
                    c = o.h;
                if (this._offscreenCanvas) {
                    var l = this,
                        u = l.cellWidth,
                        f = l.cellHeight,
                        d = l.cellAndSpacing,
                        p = l.widthAndSpacing,
                        g = l.heightAndSpacing;
                    this.slots.forEach((function(t, i) {
                        var n = d * t.order.length,
                            o = e.displacement(-(c - g) / 2, -(h - p) / 2),
                            l = e.scroll[i] + o;
                        l < 0 && (l = l % n + n), l > n && (l %= n);
                        var v = e.displacement([u * i, l, u, c], [l, f * i, h, f]),
                            m = v[0],
                            w = v[1],
                            y = v[2],
                            b = v[3],
                            S = e.displacement([a + p * i, s, u, c], [a, s + g * i, h, f]),
                            C = S[0],
                            z = S[1],
                            x = S[2],
                            k = S[3];
                        e.drawImage(r, e._offscreenCanvas, m, w, y, b, C, z, x, k)
                    }))
                }
            }, e.prototype.carveOnGunwaleOfAMovingBoat = function() {
                var t = this,
                    e = this,
                    i = e._defaultConfig,
                    n = e.prizeFlag,
                    r = e.cellAndSpacing;
                this.endTime = Date.now(), this.slots.forEach((function(e, o) {
                    var a = e.order;
                    if (a.length)
                        for (var s = e.speed || i.speed, h = e.direction || i.direction, c = a.findIndex((function(t) {
                                return t === n[o]
                            })), l = r * a.length, u = t.stopScroll[o] = t.scroll[o], f = 0; ++f;) {
                            var d = r * c + l * f * h - u,
                                p = T(t.FPS, u, d, i.decelerationTime) - u;
                            if (Math.abs(p) > s) {
                                t.endScroll[o] = d;
                                break
                            }
                        }
                }))
            }, e.prototype.play = function() {
                var t, e;
                0 === this.step && (this.startTime = Date.now(), this.prizeFlag = void 0, this.step = 1, null === (e = (t = this.config).afterStart) || void 0 === e || e.call(t), this.run())
            }, e.prototype.stop = function(t) {
                var e;
                if (0 !== this.step && 3 !== this.step) {
                    if ("number" == typeof t) this.prizeFlag = new Array(this.slots.length).fill(t);
                    else {
                        if (!s(t, "array")) return this.stop(-1), console.error("stop() 无法识别的参数类型 " + typeof t);
                        if (t.length !== this.slots.length) return this.stop(-1), console.error("stop([" + t + "]) 参数长度的不正确");
                        this.prizeFlag = t
                    }(null === (e = this.prizeFlag) || void 0 === e ? void 0 : e.includes(-1)) ? (this.prizeFlag = [], this.step = 0) : this.step = 2
                }
            }, e.prototype.run = function(t) {
                var e, i, n = this;
                void 0 === t && (t = 0);
                var r = this,
                    o = r.rAF,
                    a = r.step,
                    s = r.prizeFlag,
                    h = r._defaultConfig,
                    c = r.cellAndSpacing,
                    l = r.slots,
                    u = h.accelerationTime,
                    f = h.decelerationTime;
                if (0 !== this.step || (null == s ? void 0 : s.length) !== l.length) {
                    if (void 0 === s || s.length) {
                        3 !== this.step || this.endScroll.length || this.carveOnGunwaleOfAMovingBoat();
                        var d = Date.now() - this.startTime,
                            p = Date.now() - this.endTime;
                        l.forEach((function(e, i) {
                            var r = e.order;
                            if (r && r.length) {
                                var o = c * r.length,
                                    g = Math.abs(e.speed || h.speed),
                                    v = e.direction || h.direction,
                                    m = 0,
                                    w = n.scroll[i];
                                if (1 === a || d < u) {
                                    n.FPS = d / t;
                                    var y = L(d, 0, g, u);
                                    y === g && (n.step = 2), m = (w + y * v) % o
                                } else if (2 === a) m = (w + g * v) % o, (null == s ? void 0 : s.length) === l.length && (n.step = 3, n.stopScroll = [], n.endScroll = []);
                                else if (3 === a && p) {
                                    var b = n.stopScroll[i],
                                        S = n.endScroll[i];
                                    m = T(p, b, S, f), p >= f && (n.step = 0)
                                }
                                n.scroll[i] = m
                            }
                        })), this.draw(), o(this.run.bind(this, t + 1))
                    }
                } else {
                    for (var g = s[0], v = 0; v < l.length; v++) {
                        var m = l[v],
                            w = s[v];
                        if (!(null === (e = m.order) || void 0 === e ? void 0 : e.includes(w)) || g !== w) {
                            g = -1;
                            break
                        }
                    }
                    null === (i = this.endCallback) || void 0 === i || i.call(this, this.prizes.find((function(t, e) {
                        return e === g
                    })) || void 0)
                }
            }, e.prototype.displacement = function(t, e) {
                return "horizontal" === this._defaultConfig.mode ? e : t
            }, e.prototype.displacementWidthOrHeight = function() {
                var t = this._defaultConfig.mode,
                    e = this.slots.length,
                    i = this._defaultConfig,
                    n = i.colSpacing,
                    r = i.rowSpacing,
                    o = this.prizeArea || this.drawBlocks();
                o.x, o.y;
                var a, s, h = o.w,
                    c = o.h,
                    l = 0,
                    u = 0;
                return "horizontal" === t ? (u = this.cellHeight = (c - r * (e - 1)) / e, l = this.cellWidth = u) : (l = this.cellWidth = (h - n * (e - 1)) / e, u = this.cellHeight = l), a = this.widthAndSpacing = this.cellWidth + n, s = this.heightAndSpacing = this.cellHeight + r, this.cellAndSpacing = "horizontal" === t ? a : s, {
                    cellWidth: l,
                    cellHeight: u,
                    widthAndSpacing: a,
                    heightAndSpacing: s
                }
            }, e
        }(k);
    t.LuckyGrid = W, t.LuckyWheel = _, t.SlotMachine = $, t.cutRound = function(t, e) {
        var i = document.createElement("canvas"),
            n = i.getContext("2d"),
            r = t.width,
            o = t.height;
        return i.width = r, i.height = o, A(n, 0, 0, r, o, e), n.clip(), n.drawImage(t, 0, 0, r, o), i
    }, t.opacity = function(t, e) {
        var i = document.createElement("canvas"),
            n = i.getContext("2d"),
            r = t.width,
            o = t.height;
        if (i.width = r, i.height = o, "string" == typeof n.filter) n.filter = "opacity(" + 100 * e + "%)", n.drawImage(t, 0, 0, r, o);
        else {
            n.drawImage(t, 0, 0, r, o);
            for (var a = n.getImageData(0, 0, r, o), s = a.data, h = s.length, c = 0; c < h; c += 4) {
                var l = s[c + 3];
                0 !== l && (s[c + 3] = l * e)
            }
            n.putImageData(a, 0, 0)
        }
        return i
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));