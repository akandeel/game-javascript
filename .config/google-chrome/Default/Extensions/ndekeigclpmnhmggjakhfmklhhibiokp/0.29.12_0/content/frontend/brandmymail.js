(function(h, l) {
  function q(a) {
    return c.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }
  function A(a) {
    if (!fa[a]) {
      var b = c("<" + a + ">").appendTo("body"), d = b.css("display");
      b.remove();
      if ("none" === d || "" === d) {
        D || (D = m.createElement("iframe"), D.frameBorder = D.width = D.height = 0), m.body.appendChild(D), U && D.createElement || (U = (D.contentWindow || D.contentDocument).document, U.write("<!doctype><html><body></body></html>")), b = U.createElement(a), U.body.appendChild(b), d = c.css(b, "display"), m.body.removeChild(D);
      }
      fa[a] = d;
    }
    return fa[a];
  }
  function u(a, b) {
    var d = {};
    c.each(ta.concat.apply([], ta.slice(0, b)), function() {
      d[this] = a;
    });
    return d;
  }
  function z() {
    Y = l;
  }
  function x() {
    setTimeout(z, 0);
    return Y = c.now();
  }
  function H() {
    try {
      return new h.XMLHttpRequest;
    } catch (a) {
    }
  }
  function O(a, b, d, e) {
    if (c.isArray(b)) {
      c.each(b, function(b, f) {
        d || cb.test(a) ? e(a, f) : O(a + "[" + ("object" == typeof f || c.isArray(f) ? b : "") + "]", f, d, e);
      });
    } else {
      if (d || null == b || "object" != typeof b) {
        e(a, b);
      } else {
        for (var f in b) {
          O(a + "[" + f + "]", b[f], d, e);
        }
      }
    }
  }
  function M(a, b, c, e, f, g) {
    f = f || b.dataTypes[0];
    g = g || {};
    g[f] = !0;
    f = a[f];
    for (var k = 0, n = f ? f.length : 0, t = a === ga, p;k < n && (t || !p);k++) {
      p = f[k](b, c, e), "string" == typeof p && (!t || g[p] ? p = l : (b.dataTypes.unshift(p), p = M(a, b, c, e, p, g)));
    }
    !t && p || g["*"] || (p = M(a, b, c, e, "*", g));
    return p;
  }
  function ua(a) {
    return function(b, d) {
      "string" != typeof b && (d = b, b = "*");
      if (c.isFunction(d)) {
        for (var e = b.toLowerCase().split(va), f = 0, g = e.length, k, n;f < g;f++) {
          k = e[f], (n = /^\+/.test(k)) && (k = k.substr(1) || "*"), k = a[k] = a[k] || [], k[n ? "unshift" : "push"](d);
        }
      }
    };
  }
  function wa(a, b, d) {
    var e = "width" === b ? a.offsetWidth : a.offsetHeight;
    if ("border" === d) {
      return e;
    }
    c.each("width" === b ? db : eb, function() {
      d || (e -= parseFloat(c.css(a, "padding" + this)) || 0);
      "margin" === d ? e += parseFloat(c.css(a, "margin" + this)) || 0 : e -= parseFloat(c.css(a, "border" + this + "Width")) || 0;
    });
    return e;
  }
  function fb(a, b) {
    b.src ? c.ajax({url:b.src, async:!1, dataType:"script"}) : c.globalEval(b.text || b.textContent || b.innerHTML || "");
    b.parentNode && b.parentNode.removeChild(b);
  }
  function xa(a) {
    c.nodeName(a, "input") ? ya(a) : a.getElementsByTagName && c.grep(a.getElementsByTagName("input"), ya);
  }
  function ya(a) {
    if ("checkbox" === a.type || "radio" === a.type) {
      a.defaultChecked = a.checked;
    }
  }
  function Z(a) {
    return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : [];
  }
  function za(a, b) {
    var d;
    if (1 === b.nodeType) {
      b.clearAttributes && b.clearAttributes();
      b.mergeAttributes && b.mergeAttributes(a);
      d = b.nodeName.toLowerCase();
      if ("object" === d) {
        b.outerHTML = a.outerHTML;
      } else {
        if ("input" !== d || "checkbox" !== a.type && "radio" !== a.type) {
          if ("option" === d) {
            b.selected = a.defaultSelected;
          } else {
            if ("input" === d || "textarea" === d) {
              b.defaultValue = a.defaultValue;
            }
          }
        } else {
          a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
        }
      }
      b.removeAttribute(c.expando);
    }
  }
  function Aa(a, b) {
    if (1 === b.nodeType && c.hasData(a)) {
      var d = c.expando, e = c.data(a), f = c.data(b, e);
      if (e = e[d]) {
        var g = e.events, f = f[d] = c.extend({}, e);
        if (g) {
          delete f.handle;
          f.events = {};
          for (var k in g) {
            for (d = 0, e = g[k].length;d < e;d++) {
              c.event.add(b, k + (g[k][d].namespace ? "." : "") + g[k][d].namespace, g[k][d], g[k][d].data);
            }
          }
        }
      }
    }
  }
  function gb(a, b) {
    return c.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function Ba(a, b, d) {
    b = b || 0;
    if (c.isFunction(b)) {
      return c.grep(a, function(a, c) {
        return!!b.call(a, c, a) === d;
      });
    }
    if (b.nodeType) {
      return c.grep(a, function(a, c) {
        return a === b === d;
      });
    }
    if ("string" == typeof b) {
      var e = c.grep(a, function(a) {
        return 1 === a.nodeType;
      });
      if (hb.test(b)) {
        return c.filter(b, e, !d);
      }
      b = c.filter(b, e);
    }
    return c.grep(a, function(a, e) {
      return 0 <= c.inArray(a, b) === d;
    });
  }
  function Ca(a) {
    return!a || !a.parentNode || 11 === a.parentNode.nodeType;
  }
  function aa(a, b) {
    return(a && "*" !== a ? a + "." : "") + b.replace(ib, "`").replace(jb, "&");
  }
  function kb(a) {
    var b, d, e, f, g, k, n, t, p, h, l, m = [];
    f = [];
    g = c._data(this, "events");
    if (a.liveFired !== this && g && g.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
      a.namespace && (l = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
      a.liveFired = this;
      var v = g.live.slice(0);
      for (n = 0;n < v.length;n++) {
        g = v[n], g.origType.replace(ha, "") === a.type ? f.push(g.selector) : v.splice(n--, 1);
      }
      f = c(a.target).closest(f, a.currentTarget);
      t = 0;
      for (p = f.length;t < p;t++) {
        for (h = f[t], n = 0;n < v.length;n++) {
          if (g = v[n], h.selector === g.selector && (!l || l.test(g.namespace)) && !h.elem.disabled) {
            k = h.elem;
            e = null;
            if ("mouseenter" === g.preType || "mouseleave" === g.preType) {
              a.type = g.preType, (e = c(a.relatedTarget).closest(g.selector)[0]) && c.contains(k, e) && (e = k);
            }
            e && e === k || m.push({elem:k, handleObj:g, level:h.level});
          }
        }
      }
      t = 0;
      for (p = m.length;t < p;t++) {
        f = m[t];
        if (d && f.level > d) {
          break;
        }
        a.currentTarget = f.elem;
        a.data = f.handleObj.data;
        a.handleObj = f.handleObj;
        l = f.handleObj.origHandler.apply(f.elem, arguments);
        if (!1 === l || a.isPropagationStopped()) {
          if (d = f.level, !1 === l && (b = !1), a.isImmediatePropagationStopped()) {
            break;
          }
        }
      }
      return b;
    }
  }
  function Da(a, b, d) {
    var e = c.extend({}, d[0]);
    e.type = a;
    e.originalEvent = {};
    e.liveFired = l;
    c.event.handle.call(b, e);
    e.isDefaultPrevented() && d[0].preventDefault();
  }
  function ba() {
    return!0;
  }
  function K() {
    return!1;
  }
  function Ea(a, b, d) {
    var e = b + "defer", f = b + "queue", g = b + "mark", k = c.data(a, e, l, !0);
    !k || "queue" !== d && c.data(a, f, l, !0) || "mark" !== d && c.data(a, g, l, !0) || setTimeout(function() {
      c.data(a, f, l, !0) || c.data(a, g, l, !0) || (c.removeData(a, e, !0), k.resolve());
    }, 0);
  }
  function ia(a) {
    for (var b in a) {
      if ("toJSON" !== b) {
        return!1;
      }
    }
    return!0;
  }
  function Fa(a, b, d) {
    if (d === l && 1 === a.nodeType) {
      if (name = "data-" + b.replace(lb, "$1-$2").toLowerCase(), d = a.getAttribute(name), "string" == typeof d) {
        try {
          d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : c.isNaN(d) ? mb.test(d) ? c.parseJSON(d) : d : parseFloat(d);
        } catch (e) {
        }
        c.data(a, b, d);
      } else {
        d = l;
      }
    }
    return d;
  }
  var m = h.document, nb = h.navigator, ob = h.location, c = function() {
    function a() {
      if (!b.isReady) {
        try {
          m.documentElement.doScroll("left");
        } catch (c) {
          setTimeout(a, 1);
          return;
        }
        b.ready();
      }
    }
    var b = function(a, c) {
      return new b.fn.init(a, c, f);
    }, c = h.jQuery, e = h.$, f, g = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, k = /\S/, n = /^\s+/, t = /\s+$/, p = /\d/, r = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, V = /^[\],:{}\s]*$/, q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, C = /(?:^|:|,)(?:\s*\[)+/g, u = /(webkit)[ \/]([\w.]+)/, z = /(opera)(?:.*version)?[ \/]([\w.]+)/, A = /(msie) ([\w.]+)/, x = /(mozilla)(?:.*? rv:([\w.]+))?/, y = nb.userAgent, w, I, pb = Object.prototype.toString, 
    ja = Object.prototype.hasOwnProperty, ka = Array.prototype.push, W = Array.prototype.slice, Ga = String.prototype.trim, Ha = Array.prototype.indexOf, Ia = {};
    b.fn = b.prototype = {constructor:b, init:function(a, c, d) {
      var e, f;
      if (!a) {
        return this;
      }
      if (a.nodeType) {
        return this.context = this[0] = a, this.length = 1, this;
      }
      if ("body" === a && !c && m.body) {
        return this.context = m, this[0] = m.body, this.selector = a, this.length = 1, this;
      }
      if ("string" == typeof a) {
        "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? e = [null, a, null] : e = g.exec(a);
        if (e && (e[1] || !c)) {
          if (e[1]) {
            return f = (c = c instanceof b ? c[0] : c) ? c.ownerDocument || c : m, (d = r.exec(a)) ? b.isPlainObject(c) ? (a = [m.createElement(d[1])], b.fn.attr.call(a, c, !0)) : a = [f.createElement(d[1])] : (d = b.buildFragment([e[1]], [f]), a = (d.cacheable ? b.clone(d.fragment) : d.fragment).childNodes), b.merge(this, a);
          }
          if ((c = m.getElementById(e[2])) && c.parentNode) {
            if (c.id !== e[2]) {
              return d.find(a);
            }
            this.length = 1;
            this[0] = c;
          }
          this.context = m;
          this.selector = a;
          return this;
        }
        return!c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
      }
      if (b.isFunction(a)) {
        return d.ready(a);
      }
      a.selector !== l && (this.selector = a.selector, this.context = a.context);
      return b.makeArray(a, this);
    }, selector:"", jquery:"1.6", length:0, size:function() {
      return this.length;
    }, toArray:function() {
      return W.call(this, 0);
    }, get:function(a) {
      return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
    }, pushStack:function(a, c, d) {
      var e = this.constructor();
      b.isArray(a) ? ka.apply(e, a) : b.merge(e, a);
      e.prevObject = this;
      e.context = this.context;
      "find" === c ? e.selector = this.selector + (this.selector ? " " : "") + d : c && (e.selector = this.selector + "." + c + "(" + d + ")");
      return e;
    }, each:function(a, c) {
      return b.each(this, a, c);
    }, ready:function(a) {
      b.bindReady();
      w.done(a);
      return this;
    }, eq:function(a) {
      return-1 === a ? this.slice(a) : this.slice(a, +a + 1);
    }, first:function() {
      return this.eq(0);
    }, last:function() {
      return this.eq(-1);
    }, slice:function() {
      return this.pushStack(W.apply(this, arguments), "slice", W.call(arguments).join(","));
    }, map:function(a) {
      return this.pushStack(b.map(this, function(b, c) {
        return a.call(b, c, b);
      }));
    }, end:function() {
      return this.prevObject || this.constructor(null);
    }, push:ka, sort:[].sort, splice:[].splice};
    b.fn.init.prototype = b.fn;
    b.extend = b.fn.extend = function() {
      var a, c, d, e, f, g, y = arguments[0] || {}, k = 1, w = arguments.length, n = !1;
      "boolean" == typeof y && (n = y, y = arguments[1] || {}, k = 2);
      "object" != typeof y && !b.isFunction(y) && (y = {});
      for (w === k && (y = this, --k);k < w;k++) {
        if (null != (a = arguments[k])) {
          for (c in a) {
            d = y[c], e = a[c], y !== e && (n && e && (b.isPlainObject(e) || (f = b.isArray(e))) ? (f ? (f = !1, g = d && b.isArray(d) ? d : []) : g = d && b.isPlainObject(d) ? d : {}, y[c] = b.extend(n, g, e)) : e !== l && (y[c] = e));
          }
        }
      }
      return y;
    };
    b.extend({noConflict:function(a) {
      h.$ === b && (h.$ = e);
      a && h.jQuery === b && (h.jQuery = c);
      return b;
    }, isReady:!1, readyWait:1, holdReady:function(a) {
      a ? b.readyWait++ : b.ready(!0);
    }, ready:function(a) {
      if (!0 === a && !--b.readyWait || !0 !== a && !b.isReady) {
        if (!m.body) {
          return setTimeout(b.ready, 1);
        }
        b.isReady = !0;
        !0 !== a && 0 < --b.readyWait || (w.resolveWith(m, [b]), b.fn.trigger && b(m).trigger("ready").unbind("ready"));
      }
    }, bindReady:function() {
      if (!w) {
        w = b._Deferred();
        if ("complete" === m.readyState) {
          return setTimeout(b.ready, 1);
        }
        if (m.addEventListener) {
          m.addEventListener("DOMContentLoaded", I, !1), h.addEventListener("load", b.ready, !1);
        } else {
          if (m.attachEvent) {
            m.attachEvent("onreadystatechange", I);
            h.attachEvent("onload", b.ready);
            var c = !1;
            try {
              c = null == h.frameElement;
            } catch (d) {
            }
            m.documentElement.doScroll && c && a();
          }
        }
      }
    }, isFunction:function(a) {
      return "function" === b.type(a);
    }, isArray:Array.isArray || function(a) {
      return "array" === b.type(a);
    }, isWindow:function(a) {
      return a && "object" == typeof a && "setInterval" in a;
    }, isNaN:function(a) {
      return null == a || !p.test(a) || isNaN(a);
    }, type:function(a) {
      return null == a ? String(a) : Ia[pb.call(a)] || "object";
    }, isPlainObject:function(a) {
      if (!a || "object" !== b.type(a) || a.nodeType || b.isWindow(a) || a.constructor && !ja.call(a, "constructor") && !ja.call(a.constructor.prototype, "isPrototypeOf")) {
        return!1;
      }
      for (var c in a) {
      }
      return c === l || ja.call(a, c);
    }, isEmptyObject:function(a) {
      for (var b in a) {
        return!1;
      }
      return!0;
    }, error:function(a) {
      throw a;
    }, parseJSON:function(a) {
      if ("string" != typeof a || !a) {
        return null;
      }
      a = b.trim(a);
      if (h.JSON && h.JSON.parse) {
        return h.JSON.parse(a);
      }
      if (V.test(a.replace(q, "@").replace(v, "]").replace(C, ""))) {
        return(new Function("return " + a))();
      }
      b.error("Invalid JSON: " + a);
    }, parseXML:function(a, c, d) {
      h.DOMParser ? (d = new DOMParser, c = d.parseFromString(a, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a));
      (d = c.documentElement) && d.nodeName && "parsererror" !== d.nodeName || b.error("Invalid XML: " + a);
      return c;
    }, noop:function() {
    }, globalEval:function(a) {
      a && k.test(a) && (h.execScript || function(a) {
        h.eval.call(h, a);
      })(a);
    }, nodeName:function(a, b) {
      return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
    }, each:function(a, c, d) {
      var e, f = 0, g = a.length, y = g === l || b.isFunction(a);
      if (d) {
        if (y) {
          for (e in a) {
            if (!1 === c.apply(a[e], d)) {
              break;
            }
          }
        } else {
          for (;f < g && !1 !== c.apply(a[f++], d);) {
          }
        }
      } else {
        if (y) {
          for (e in a) {
            if (!1 === c.call(a[e], e, a[e])) {
              break;
            }
          }
        } else {
          for (;f < g && !1 !== c.call(a[f], f, a[f++]);) {
          }
        }
      }
      return a;
    }, trim:Ga ? function(a) {
      return null == a ? "" : Ga.call(a);
    } : function(a) {
      return null == a ? "" : (a + "").replace(n, "").replace(t, "");
    }, makeArray:function(a, c) {
      var d = c || [];
      if (null != a) {
        var e = b.type(a);
        null == a.length || "string" === e || "function" === e || "regexp" === e || b.isWindow(a) ? ka.call(d, a) : b.merge(d, a);
      }
      return d;
    }, inArray:function(a, b) {
      if (Ha) {
        return Ha.call(b, a);
      }
      for (var c = 0, d = b.length;c < d;c++) {
        if (b[c] === a) {
          return c;
        }
      }
      return-1;
    }, merge:function(a, b) {
      var c = a.length, d = 0;
      if ("number" == typeof b.length) {
        for (var e = b.length;d < e;d++) {
          a[c++] = b[d];
        }
      } else {
        for (;b[d] !== l;) {
          a[c++] = b[d++];
        }
      }
      a.length = c;
      return a;
    }, grep:function(a, b, c) {
      var d = [], e;
      c = !!c;
      for (var f = 0, g = a.length;f < g;f++) {
        e = !!b(a[f], f), c !== e && d.push(a[f]);
      }
      return d;
    }, map:function(a, c, d) {
      var e, f, g = [], y = 0, k = a.length;
      if (a instanceof b || k !== l && "number" == typeof k && (0 < k && a[0] && a[k - 1] || 0 === k || b.isArray(a))) {
        for (;y < k;y++) {
          e = c(a[y], y, d), null != e && (g[g.length] = e);
        }
      } else {
        for (f in a) {
          e = c(a[f], f, d), null != e && (g[g.length] = e);
        }
      }
      return g.concat.apply([], g);
    }, guid:1, proxy:function(a, c) {
      if ("string" == typeof c) {
        var d = a[c];
        c = a;
        a = d;
      }
      if (!b.isFunction(a)) {
        return l;
      }
      var e = W.call(arguments, 2), d = function() {
        return a.apply(c, e.concat(W.call(arguments)));
      };
      d.guid = a.guid = a.guid || d.guid || b.guid++;
      return d;
    }, access:function(a, c, d, e, f, g) {
      var y = a.length;
      if ("object" == typeof c) {
        for (var k in c) {
          b.access(a, k, c[k], e, f, d);
        }
        return a;
      }
      if (d !== l) {
        e = !g && e && b.isFunction(d);
        for (k = 0;k < y;k++) {
          f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
        }
        return a;
      }
      return y ? f(a[0], c) : l;
    }, now:function() {
      return(new Date).getTime();
    }, uaMatch:function(a) {
      a = a.toLowerCase();
      a = u.exec(a) || z.exec(a) || A.exec(a) || 0 > a.indexOf("compatible") && x.exec(a) || [];
      return{browser:a[1] || "", version:a[2] || "0"};
    }, sub:function() {
      function a(b, c) {
        return new a.fn.init(b, c);
      }
      b.extend(!0, a, this);
      a.superclass = this;
      a.fn = a.prototype = this();
      a.fn.constructor = a;
      a.sub = this.sub;
      a.fn.init = function(d, e) {
        e && e instanceof b && !(e instanceof a) && (e = a(e));
        return b.fn.init.call(this, d, e, c);
      };
      a.fn.init.prototype = a.fn;
      var c = a(m);
      return a;
    }, browser:{}});
    b.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
      Ia["[object " + b + "]"] = b.toLowerCase();
    });
    y = b.uaMatch(y);
    y.browser && (b.browser[y.browser] = !0, b.browser.version = y.version);
    b.browser.webkit && (b.browser.safari = !0);
    k.test("\u00a0") && (n = /^[\s\xA0]+/, t = /[\s\xA0]+$/);
    f = b(m);
    m.addEventListener ? I = function() {
      m.removeEventListener("DOMContentLoaded", I, !1);
      b.ready();
    } : m.attachEvent && (I = function() {
      "complete" === m.readyState && (m.detachEvent("onreadystatechange", I), b.ready());
    });
    return b;
  }(), la = "done fail isResolved isRejected promise then always pipe".split(" "), Ja = [].slice;
  c.extend({_Deferred:function() {
    var a = [], b, d, e, f = {done:function() {
      if (!e) {
        var d = arguments, k, n, t, h, l;
        b && (l = b, b = 0);
        k = 0;
        for (n = d.length;k < n;k++) {
          t = d[k], h = c.type(t), "array" === h ? f.done.apply(f, t) : "function" === h && a.push(t);
        }
        l && f.resolveWith(l[0], l[1]);
      }
      return this;
    }, resolveWith:function(c, f) {
      if (!e && !b && !d) {
        f = f || [];
        d = 1;
        try {
          for (;a[0];) {
            a.shift().apply(c, f);
          }
        } finally {
          b = [c, f], d = 0;
        }
      }
      return this;
    }, resolve:function() {
      f.resolveWith(this, arguments);
      return this;
    }, isResolved:function() {
      return!!d || !!b;
    }, cancel:function() {
      e = 1;
      a = [];
      return this;
    }};
    return f;
  }, Deferred:function(a) {
    var b = c._Deferred(), d = c._Deferred(), e;
    c.extend(b, {then:function(a, c) {
      b.done(a).fail(c);
      return this;
    }, always:function() {
      return b.done.apply(b, arguments).fail.apply(this, arguments);
    }, fail:d.done, rejectWith:d.resolveWith, reject:d.resolve, isRejected:d.isResolved, pipe:function(a, d) {
      return c.Deferred(function(e) {
        c.each({done:[a, "resolve"], fail:[d, "reject"]}, function(a, d) {
          var f = d[0], g = d[1], h;
          c.isFunction(f) ? b[a](function() {
            h = f.apply(this, arguments);
            c.isFunction(h.promise) ? h.promise().then(e.resolve, e.reject) : e[g](h);
          }) : b[a](e[g]);
        });
      }).promise();
    }, promise:function(a) {
      if (null == a) {
        if (e) {
          return e;
        }
        e = a = {};
      }
      for (var c = la.length;c--;) {
        a[la[c]] = b[la[c]];
      }
      return a;
    }});
    b.done(d.cancel).fail(b.cancel);
    delete b.cancel;
    a && a.call(b, b);
    return b;
  }, when:function(a) {
    function b(a) {
      return function(b) {
        d[a] = 1 < arguments.length ? Ja.call(arguments, 0) : b;
        --g || k.resolveWith(k, Ja.call(d, 0));
      };
    }
    var d = arguments, e = 0, f = d.length, g = f, k = 1 >= f && a && c.isFunction(a.promise) ? a : c.Deferred();
    if (1 < f) {
      for (;e < f;e++) {
        d[e] && c.isFunction(d[e].promise) ? d[e].promise().then(b(e), k.reject) : --g;
      }
      g || k.resolveWith(k, d);
    } else {
      k !== a && k.resolveWith(k, f ? [a] : []);
    }
    return k.promise();
  }});
  c.support = function() {
    var a = m.createElement("div"), b, c, e, f, g, k, n;
    a.setAttribute("className", "t");
    a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    b = a.getElementsByTagName("*");
    c = a.getElementsByTagName("a")[0];
    if (!b || !b.length || !c) {
      return{};
    }
    e = m.createElement("select");
    f = e.appendChild(m.createElement("option"));
    b = a.getElementsByTagName("input")[0];
    k = {leadingWhitespace:3 === a.firstChild.nodeType, tbody:!a.getElementsByTagName("tbody").length, htmlSerialize:!!a.getElementsByTagName("link").length, style:/top/.test(c.getAttribute("style")), hrefNormalized:"/a" === c.getAttribute("href"), opacity:/^0.55$/.test(c.style.opacity), cssFloat:!!c.style.cssFloat, checkOn:"on" === b.value, optSelected:f.selected, getSetAttribute:"t" !== a.className, submitBubbles:!0, changeBubbles:!0, focusinBubbles:!1, deleteExpando:!0, noCloneEvent:!0, inlineBlockNeedsLayout:!1, 
    shrinkWrapBlocks:!1, reliableMarginRight:!0};
    b.checked = !0;
    k.noCloneChecked = b.cloneNode(!0).checked;
    e.disabled = !0;
    k.optDisabled = !f.disabled;
    try {
      delete a.test;
    } catch (h) {
      k.deleteExpando = !1;
    }
    !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function r() {
      k.noCloneEvent = !1;
      a.detachEvent("onclick", r);
    }), a.cloneNode(!0).fireEvent("onclick"));
    b = m.createElement("input");
    b.value = "t";
    b.setAttribute("type", "radio");
    k.radioValue = "t" === b.value;
    b.setAttribute("checked", "checked");
    a.appendChild(b);
    c = m.createDocumentFragment();
    c.appendChild(a.firstChild);
    k.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
    a.innerHTML = "";
    a.style.width = a.style.paddingLeft = "1px";
    c = m.createElement("body");
    e = {visibility:"hidden", width:0, height:0, border:0, margin:0, background:"none"};
    for (n in e) {
      c.style[n] = e[n];
    }
    c.appendChild(a);
    m.documentElement.appendChild(c);
    k.appendChecked = b.checked;
    k.boxModel = 2 === a.offsetWidth;
    "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = 2 !== a.offsetWidth);
    a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
    e = a.getElementsByTagName("td");
    b = 0 === e[0].offsetHeight;
    e[0].style.display = "";
    e[1].style.display = "none";
    k.reliableHiddenOffsets = b && 0 === e[0].offsetHeight;
    a.innerHTML = "";
    m.defaultView && m.defaultView.getComputedStyle && (g = m.createElement("div"), g.style.width = "0", g.style.marginRight = "0", a.appendChild(g), k.reliableMarginRight = 0 === (parseInt(m.defaultView.getComputedStyle(g, null).marginRight, 10) || 0));
    c.innerHTML = "";
    m.documentElement.removeChild(c);
    if (a.attachEvent) {
      for (n in{submit:1, change:1, focusin:1}) {
        g = "on" + n, (b = g in a) || (a.setAttribute(g, "return;"), b = "function" == typeof a[g]), k[n + "Bubbles"] = b;
      }
    }
    return k;
  }();
  c.boxModel = c.support.boxModel;
  var mb = /^(?:\{.*\}|\[.*\])$/, lb = /([a-z])([A-Z])/g;
  c.extend({cache:{}, uuid:0, expando:"jQuery" + (c.fn.jquery + Math.random()).replace(/\D/g, ""), noData:{embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet:!0}, hasData:function(a) {
    a = a.nodeType ? c.cache[a[c.expando]] : a[c.expando];
    return!!a && !ia(a);
  }, data:function(a, b, d, e) {
    if (c.acceptData(a)) {
      var f = c.expando, g = "string" == typeof b, k = a.nodeType, n = k ? c.cache : a, h = k ? a[c.expando] : a[c.expando] && c.expando;
      if (h && (!e || !h || n[h][f]) || !g || d !== l) {
        h || (k ? a[c.expando] = h = ++c.uuid : h = c.expando);
        n[h] || (n[h] = {}, k || (n[h].toJSON = c.noop));
        if ("object" == typeof b || "function" == typeof b) {
          e ? n[h][f] = c.extend(n[h][f], b) : n[h] = c.extend(n[h], b);
        }
        a = n[h];
        e && (a[f] || (a[f] = {}), a = a[f]);
        d !== l && (a[b] = d);
        return "events" !== b || a[b] ? g ? a[b] : a : a[f] && a[f].events;
      }
    }
  }, removeData:function(a, b, d) {
    if (c.acceptData(a)) {
      var e = c.expando, f = a.nodeType, g = f ? c.cache : a, k = f ? a[c.expando] : c.expando;
      if (g[k]) {
        if (b) {
          var n = d ? g[k][e] : g[k];
          if (n && (delete n[b], !ia(n))) {
            return;
          }
        }
        if (d && (delete g[k][e], !ia(g[k]))) {
          return;
        }
        b = g[k][e];
        c.support.deleteExpando || g != h ? delete g[k] : g[k] = null;
        b ? (g[k] = {}, f || (g[k].toJSON = c.noop), g[k][e] = b) : f && (c.support.deleteExpando ? delete a[c.expando] : a.removeAttribute ? a.removeAttribute(c.expando) : a[c.expando] = null);
      }
    }
  }, _data:function(a, b, d) {
    return c.data(a, b, d, !0);
  }, acceptData:function(a) {
    if (a.nodeName) {
      var b = c.noData[a.nodeName.toLowerCase()];
      if (b) {
        return!0 !== b && a.getAttribute("classid") === b;
      }
    }
    return!0;
  }});
  c.fn.extend({data:function(a, b) {
    var d = null;
    if ("undefined" == typeof a) {
      if (this.length && (d = c.data(this[0]), 1 === this[0].nodeType)) {
        for (var e = this[0].attributes, f, g = 0, k = e.length;g < k;g++) {
          f = e[g].name, 0 === f.indexOf("data-") && (f = c.camelCase(f.substring(5)), Fa(this[0], f, d[f]));
        }
      }
      return d;
    }
    if ("object" == typeof a) {
      return this.each(function() {
        c.data(this, a);
      });
    }
    var n = a.split(".");
    n[1] = n[1] ? "." + n[1] : "";
    return b === l ? (d = this.triggerHandler("getData" + n[1] + "!", [n[0]]), d === l && this.length && (d = c.data(this[0], a), d = Fa(this[0], a, d)), d === l && n[1] ? this.data(n[0]) : d) : this.each(function() {
      var d = c(this), e = [n[0], b];
      d.triggerHandler("setData" + n[1] + "!", e);
      c.data(this, a, b);
      d.triggerHandler("changeData" + n[1] + "!", e);
    });
  }, removeData:function(a) {
    return this.each(function() {
      c.removeData(this, a);
    });
  }});
  c.extend({_mark:function(a, b) {
    a && (b = (b || "fx") + "mark", c.data(a, b, (c.data(a, b, l, !0) || 0) + 1, !0));
  }, _unmark:function(a, b, d) {
    !0 !== a && (d = b, b = a, a = !1);
    if (b) {
      d = d || "fx";
      var e = d + "mark";
      (a = a ? 0 : (c.data(b, e, l, !0) || 1) - 1) ? c.data(b, e, a, !0) : (c.removeData(b, e, !0), Ea(b, d, "mark"));
    }
  }, queue:function(a, b, d) {
    if (a) {
      b = (b || "fx") + "queue";
      var e = c.data(a, b, l, !0);
      d && (!e || c.isArray(d) ? e = c.data(a, b, c.makeArray(d), !0) : e.push(d));
      return e || [];
    }
  }, dequeue:function(a, b) {
    b = b || "fx";
    var d = c.queue(a, b), e = d.shift();
    "inprogress" === e && (e = d.shift());
    e && ("fx" === b && d.unshift("inprogress"), e.call(a, function() {
      c.dequeue(a, b);
    }));
    d.length || (c.removeData(a, b + "queue", !0), Ea(a, b, "queue"));
  }});
  c.fn.extend({queue:function(a, b) {
    "string" != typeof a && (b = a, a = "fx");
    return b === l ? c.queue(this[0], a) : this.each(function() {
      var d = c.queue(this, a, b);
      "fx" === a && "inprogress" !== d[0] && c.dequeue(this, a);
    });
  }, dequeue:function(a) {
    return this.each(function() {
      c.dequeue(this, a);
    });
  }, delay:function(a, b) {
    a = c.fx ? c.fx.speeds[a] || a : a;
    b = b || "fx";
    return this.queue(b, function() {
      var d = this;
      setTimeout(function() {
        c.dequeue(d, b);
      }, a);
    });
  }, clearQueue:function(a) {
    return this.queue(a || "fx", []);
  }, promise:function(a, b) {
    function d() {
      --k || e.resolveWith(f, [f]);
    }
    "string" != typeof a && (a = l);
    a = a || "fx";
    for (var e = c.Deferred(), f = this, g = f.length, k = 1, n = a + "defer", h = a + "queue", p = a + "mark";g--;) {
      if (tmp = c.data(f[g], n, l, !0) || (c.data(f[g], h, l, !0) || c.data(f[g], p, l, !0)) && c.data(f[g], n, c._Deferred(), !0)) {
        k++, tmp.done(d);
      }
    }
    d();
    return e.promise();
  }});
  var Ka = /[\n\t\r]/g, ma = /\s+/, qb = /\r/g, rb = /^(?:button|input)$/i, sb = /^(?:button|input|object|select|textarea)$/i, tb = /^a(?:rea)?$/i, La = /^(?:data-|aria-)/, ub = /\:/, na;
  c.fn.extend({attr:function(a, b) {
    return c.access(this, a, b, !0, c.attr);
  }, removeAttr:function(a) {
    return this.each(function() {
      c.removeAttr(this, a);
    });
  }, prop:function(a, b) {
    return c.access(this, a, b, !0, c.prop);
  }, removeProp:function(a) {
    return this.each(function() {
      try {
        this[a] = l, delete this[a];
      } catch (b) {
      }
    });
  }, addClass:function(a) {
    if (c.isFunction(a)) {
      return this.each(function(b) {
        var d = c(this);
        d.addClass(a.call(this, b, d.attr("class") || ""));
      });
    }
    if (a && "string" == typeof a) {
      for (var b = (a || "").split(ma), d = 0, e = this.length;d < e;d++) {
        var f = this[d];
        if (1 === f.nodeType) {
          if (f.className) {
            for (var g = " " + f.className + " ", k = f.className, n = 0, h = b.length;n < h;n++) {
              0 > g.indexOf(" " + b[n] + " ") && (k += " " + b[n]);
            }
            f.className = c.trim(k);
          } else {
            f.className = a;
          }
        }
      }
    }
    return this;
  }, removeClass:function(a) {
    if (c.isFunction(a)) {
      return this.each(function(b) {
        var d = c(this);
        d.removeClass(a.call(this, b, d.attr("class")));
      });
    }
    if (a && "string" == typeof a || a === l) {
      for (var b = (a || "").split(ma), d = 0, e = this.length;d < e;d++) {
        var f = this[d];
        if (1 === f.nodeType && f.className) {
          if (a) {
            for (var g = (" " + f.className + " ").replace(Ka, " "), k = 0, n = b.length;k < n;k++) {
              g = g.replace(" " + b[k] + " ", " ");
            }
            f.className = c.trim(g);
          } else {
            f.className = "";
          }
        }
      }
    }
    return this;
  }, toggleClass:function(a, b) {
    var d = typeof a, e = "boolean" == typeof b;
    return c.isFunction(a) ? this.each(function(d) {
      var e = c(this);
      e.toggleClass(a.call(this, d, e.attr("class"), b), b);
    }) : this.each(function() {
      if ("string" === d) {
        for (var f, g = 0, k = c(this), n = b, h = a.split(ma);f = h[g++];) {
          n = e ? n : !k.hasClass(f), k[n ? "addClass" : "removeClass"](f);
        }
      } else {
        if ("undefined" === d || "boolean" === d) {
          this.className && c._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : c._data(this, "__className__") || "";
        }
      }
    });
  }, hasClass:function(a) {
    a = " " + a + " ";
    for (var b = 0, c = this.length;b < c;b++) {
      if (-1 < (" " + this[b].className + " ").replace(Ka, " ").indexOf(a)) {
        return!0;
      }
    }
    return!1;
  }, val:function(a) {
    var b, d, e = this[0];
    if (!arguments.length) {
      return e ? (b = c.valHooks[e.nodeName.toLowerCase()] || c.valHooks[e.type]) && "get" in b && (d = b.get(e, "value")) !== l ? d : (e.value || "").replace(qb, "") : l;
    }
    var f = c.isFunction(a);
    return this.each(function(d) {
      var e = c(this), n;
      1 === this.nodeType && (f ? n = a.call(this, d, e.val()) : n = a, null == n ? n = "" : "number" == typeof n ? n += "" : c.isArray(n) && (n = c.map(n, function(a) {
        return null == a ? "" : a + "";
      })), b = c.valHooks[this.nodeName.toLowerCase()] || c.valHooks[this.type], !b || "set" in b && b.set(this, n, "value") === l) && (this.value = n);
    });
  }});
  c.extend({valHooks:{option:{get:function(a) {
    var b = a.attributes.value;
    return!b || b.specified ? a.value : a.text;
  }}, select:{get:function(a) {
    var b = a.selectedIndex, d = [], e = a.options;
    a = "select-one" === a.type;
    if (0 > b) {
      return null;
    }
    for (var f = a ? b : 0, g = a ? b + 1 : e.length;f < g;f++) {
      var k = e[f];
      if (!(!k.selected || (c.support.optDisabled ? k.disabled : null !== k.getAttribute("disabled")) || k.parentNode.disabled && c.nodeName(k.parentNode, "optgroup"))) {
        value = c(k).val();
        if (a) {
          return value;
        }
        d.push(value);
      }
    }
    return a && !d.length && e.length ? c(e[b]).val() : d;
  }, set:function(a, b) {
    var d = c.makeArray(b);
    c(a).find("option").each(function() {
      this.selected = 0 <= c.inArray(c(this).val(), d);
    });
    d.length || (a.selectedIndex = -1);
    return d;
  }}}, attrFn:{val:!0, css:!0, html:!0, text:!0, data:!0, width:!0, height:!0, offset:!0}, attrFix:{tabindex:"tabIndex", readonly:"readOnly"}, attr:function(a, b, d, e) {
    var f = a.nodeType;
    if (!a || 3 === f || 8 === f || 2 === f) {
      return l;
    }
    if (e && b in c.attrFn) {
      return c(a)[b](d);
    }
    var g;
    b = (f = 1 !== f || !c.isXMLDoc(a)) && c.attrFix[b] || b;
    e = c.attrHooks[b] || (na && (c.nodeName(a, "form") || ub.test(b)) ? na : l);
    if (d !== l) {
      if (null === d || !1 === d && !La.test(b)) {
        return c.removeAttr(a, b), l;
      }
      if (e && "set" in e && f && (g = e.set(a, d, b)) !== l) {
        return g;
      }
      !0 === d && !La.test(b) && (d = b);
      a.setAttribute(b, "" + d);
      return d;
    }
    if (e && "get" in e && f) {
      return e.get(a, b);
    }
    g = a.getAttribute(b);
    return null === g ? l : g;
  }, removeAttr:function(a, b) {
    1 === a.nodeType && (b = c.attrFix[b] || b, c.support.getSetAttribute ? a.removeAttribute(b) : (c.attr(a, b, ""), a.removeAttributeNode(a.getAttributeNode(b))));
  }, attrHooks:{type:{set:function(a, b) {
    if (rb.test(a.nodeName) && a.parentNode) {
      c.error("type property can't be changed");
    } else {
      if (!c.support.radioValue && "radio" === b && c.nodeName(a, "input")) {
        var d = a.getAttribute("value");
        a.setAttribute("type", b);
        d && (a.value = d);
        return b;
      }
    }
  }}, tabIndex:{get:function(a) {
    var b = a.getAttributeNode("tabIndex");
    return b && b.specified ? parseInt(b.value, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : l;
  }}}, propFix:{}, prop:function(a, b, d) {
    var e = a.nodeType;
    if (!a || 3 === e || 8 === e || 2 === e) {
      return l;
    }
    var f;
    b = (1 !== e || !c.isXMLDoc(a)) && c.propFix[b] || b;
    e = c.propHooks[b];
    return d !== l ? e && "set" in e && (f = e.set(a, d, b)) !== l ? f : a[b] = d : e && "get" in e && (f = e.get(a, b)) !== l ? f : a[b];
  }, propHooks:{}});
  c.support.getSetAttribute || (c.attrFix = c.extend(c.attrFix, {"for":"htmlFor", "class":"className", maxlength:"maxLength", cellspacing:"cellSpacing", cellpadding:"cellPadding", rowspan:"rowSpan", colspan:"colSpan", usemap:"useMap", frameborder:"frameBorder"}), na = c.attrHooks.name = c.attrHooks.value = c.valHooks.button = {get:function(a, b) {
    var d;
    return "value" !== b || c.nodeName(a, "button") ? (d = a.getAttributeNode(b)) && d.specified ? d.nodeValue : l : a.getAttribute(b);
  }, set:function(a, b, c) {
    if (a = a.getAttributeNode(c)) {
      return a.nodeValue = b;
    }
  }}, c.each(["width", "height"], function(a, b) {
    c.attrHooks[b] = c.extend(c.attrHooks[b], {set:function(a, c) {
      if ("" === c) {
        return a.setAttribute(b, "auto"), c;
      }
    }});
  }));
  c.support.hrefNormalized || c.each(["href", "src", "width", "height"], function(a, b) {
    c.attrHooks[b] = c.extend(c.attrHooks[b], {get:function(a) {
      a = a.getAttribute(b, 2);
      return null === a ? l : a;
    }});
  });
  c.support.style || (c.attrHooks.style = {get:function(a) {
    return a.style.cssText.toLowerCase() || l;
  }, set:function(a, b) {
    return a.style.cssText = "" + b;
  }});
  c.support.optSelected || (c.propHooks.selected = c.extend(c.propHooks.selected, {get:function(a) {
    a = a.parentNode;
    a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
  }}));
  c.support.checkOn || c.each(["radio", "checkbox"], function() {
    c.valHooks[this] = {get:function(a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    }};
  });
  c.each(["radio", "checkbox"], function() {
    c.valHooks[this] = c.extend(c.valHooks[this], {set:function(a, b) {
      if (c.isArray(b)) {
        return a.checked = 0 <= c.inArray(c(a).val(), b);
      }
    }});
  });
  var ha = /\.(.*)$/, oa = /^(?:textarea|input|select)$/i, ib = /\./g, jb = / /g, vb = /[^\w\s.|`]/g, wb = function(a) {
    return a.replace(vb, "\\$&");
  };
  c.event = {add:function(a, b, d, e) {
    if (3 !== a.nodeType && 8 !== a.nodeType) {
      if (!1 === d) {
        d = K;
      } else {
        if (!d) {
          return;
        }
      }
      var f, g;
      d.handler && (f = d, d = f.handler);
      d.guid || (d.guid = c.guid++);
      if (g = c._data(a)) {
        var k = g.events, n = g.handle;
        k || (g.events = k = {});
        n || (g.handle = n = function(a) {
          return "undefined" == typeof c || a && c.event.triggered === a.type ? l : c.event.handle.apply(n.elem, arguments);
        });
        n.elem = a;
        b = b.split(" ");
        for (var h, p = 0, r;h = b[p++];) {
          g = f ? c.extend({}, f) : {handler:d, data:e};
          -1 < h.indexOf(".") ? (r = h.split("."), h = r.shift(), g.namespace = r.slice(0).sort().join(".")) : (r = [], g.namespace = "");
          g.type = h;
          g.guid || (g.guid = d.guid);
          var m = k[h], q = c.event.special[h] || {};
          m || (m = k[h] = [], q.setup && !1 !== q.setup.call(a, e, r, n) || (a.addEventListener ? a.addEventListener(h, n, !1) : a.attachEvent && a.attachEvent("on" + h, n)));
          q.add && (q.add.call(a, g), g.handler.guid || (g.handler.guid = d.guid));
          m.push(g);
          c.event.global[h] = !0;
        }
        a = null;
      }
    }
  }, global:{}, remove:function(a, b, d, e) {
    if (3 !== a.nodeType && 8 !== a.nodeType) {
      !1 === d && (d = K);
      var f, g, k = 0, h, t, p, r, m, q, v = c.hasData(a) && c._data(a), C = v && v.events;
      if (v && C) {
        if (b && b.type && (d = b.handler, b = b.type), !b || "string" == typeof b && "." === b.charAt(0)) {
          for (f in b = b || "", C) {
            c.event.remove(a, f + b);
          }
        } else {
          for (b = b.split(" ");f = b[k++];) {
            if (r = f, h = 0 > f.indexOf("."), t = [], h || (t = f.split("."), f = t.shift(), p = new RegExp("(^|\\.)" + c.map(t.slice(0).sort(), wb).join("\\.(?:.*\\.)?") + "(\\.|$)")), m = C[f]) {
              if (d) {
                r = c.event.special[f] || {};
                for (g = e || 0;g < m.length;g++) {
                  if (q = m[g], d.guid === q.guid) {
                    if (h || p.test(q.namespace)) {
                      null == e && m.splice(g--, 1), r.remove && r.remove.call(a, q);
                    }
                    if (null != e) {
                      break;
                    }
                  }
                }
                if (0 === m.length || null != e && 1 === m.length) {
                  r.teardown && !1 !== r.teardown.call(a, t) || c.removeEvent(a, f, v.handle), delete C[f];
                }
              } else {
                for (g = 0;g < m.length;g++) {
                  if (q = m[g], h || p.test(q.namespace)) {
                    c.event.remove(a, r, q.handler, g), m.splice(g--, 1);
                  }
                }
              }
            }
          }
          c.isEmptyObject(C) && ((b = v.handle) && (b.elem = null), delete v.events, delete v.handle, c.isEmptyObject(v) && c.removeData(a, l, !0));
        }
      }
    }
  }, customEvent:{getData:!0, setData:!0, changeData:!0}, trigger:function(a, b, d, e) {
    var f = a.type || a, g = [], k;
    0 <= f.indexOf("!") && (f = f.slice(0, -1), k = !0);
    0 <= f.indexOf(".") && (g = f.split("."), f = g.shift(), g.sort());
    if (d && !c.event.customEvent[f] || c.event.global[f]) {
      a = "object" == typeof a ? a[c.expando] ? a : new c.Event(f, a) : new c.Event(f);
      a.type = f;
      a.exclusive = k;
      a.namespace = g.join(".");
      a.namespace_re = new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.)?") + "(\\.|$)");
      if (e || !d) {
        a.preventDefault(), a.stopPropagation();
      }
      if (!d) {
        c.each(c.cache, function() {
          var d = this[c.expando];
          d && d.events && d.events[f] && c.event.trigger(a, b, d.handle.elem);
        });
      } else {
        if (3 !== d.nodeType && 8 !== d.nodeType) {
          a.result = l;
          a.target = d;
          b = b ? c.makeArray(b) : [];
          b.unshift(a);
          g = d;
          e = 0 > f.indexOf(":") ? "on" + f : "";
          do {
            k = c._data(g, "handle"), a.currentTarget = g, k && k.apply(g, b), e && c.acceptData(g) && g[e] && !1 === g[e].apply(g, b) && (a.result = !1, a.preventDefault()), g = g.parentNode || g.ownerDocument || g === a.target.ownerDocument && h;
          } while (g && !a.isPropagationStopped());
          if (!a.isDefaultPrevented()) {
            var n, g = c.event.special[f] || {};
            if (!(g._default && !1 !== g._default.call(d.ownerDocument, a) || "click" === f && c.nodeName(d, "a")) && c.acceptData(d)) {
              try {
                e && d[f] && (n = d[e], n && (d[e] = null), c.event.triggered = f, d[f]());
              } catch (t) {
              }
              n && (d[e] = n);
              c.event.triggered = l;
            }
          }
          return a.result;
        }
      }
    }
  }, handle:function(a) {
    a = c.event.fix(a || h.event);
    var b = ((c._data(this, "events") || {})[a.type] || []).slice(0), d = !a.exclusive && !a.namespace, e = Array.prototype.slice.call(arguments, 0);
    e[0] = a;
    a.currentTarget = this;
    for (var f = 0, g = b.length;f < g;f++) {
      var k = b[f];
      if (d || a.namespace_re.test(k.namespace)) {
        if (a.handler = k.handler, a.data = k.data, a.handleObj = k, k = k.handler.apply(this, e), k !== l && (a.result = k, !1 === k && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped()) {
          break;
        }
      }
    }
    return a.result;
  }, props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix:function(a) {
    if (a[c.expando]) {
      return a;
    }
    var b = a;
    a = c.Event(b);
    for (var d = this.props.length, e;d;) {
      e = this.props[--d], a[e] = b[e];
    }
    a.target || (a.target = a.srcElement || m);
    3 === a.target.nodeType && (a.target = a.target.parentNode);
    !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
    null == a.pageX && null != a.clientX && (d = a.target.ownerDocument || m, b = d.documentElement, d = d.body, a.pageX = a.clientX + (b && b.scrollLeft || d && d.scrollLeft || 0) - (b && b.clientLeft || d && d.clientLeft || 0), a.pageY = a.clientY + (b && b.scrollTop || d && d.scrollTop || 0) - (b && b.clientTop || d && d.clientTop || 0));
    null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode);
    !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
    !a.which && a.button !== l && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
    return a;
  }, guid:1E8, proxy:c.proxy, special:{ready:{setup:c.bindReady, teardown:c.noop}, live:{add:function(a) {
    c.event.add(this, aa(a.origType, a.selector), c.extend({}, a, {handler:kb, guid:a.handler.guid}));
  }, remove:function(a) {
    c.event.remove(this, aa(a.origType, a.selector), a);
  }}, beforeunload:{setup:function(a, b, d) {
    c.isWindow(this) && (this.onbeforeunload = d);
  }, teardown:function(a, b) {
    this.onbeforeunload === b && (this.onbeforeunload = null);
  }}}};
  c.removeEvent = m.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function(a, b, c) {
    a.detachEvent && a.detachEvent("on" + b, c);
  };
  c.Event = function(a, b) {
    if (!this.preventDefault) {
      return new c.Event(a, b);
    }
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? ba : K) : this.type = a;
    b && c.extend(this, b);
    this.timeStamp = c.now();
    this[c.expando] = !0;
  };
  c.Event.prototype = {preventDefault:function() {
    this.isDefaultPrevented = ba;
    var a = this.originalEvent;
    !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
  }, stopPropagation:function() {
    this.isPropagationStopped = ba;
    var a = this.originalEvent;
    !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = ba;
    this.stopPropagation();
  }, isDefaultPrevented:K, isPropagationStopped:K, isImmediatePropagationStopped:K};
  var Ma = function(a) {
    var b = a.relatedTarget;
    try {
      if (!b || b === m || b.parentNode) {
        for (;b && b !== this;) {
          b = b.parentNode;
        }
        b !== this && (a.type = a.data, c.event.handle.apply(this, arguments));
      }
    } catch (d) {
    }
  }, Na = function(a) {
    a.type = a.data;
    c.event.handle.apply(this, arguments);
  };
  c.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function(a, b) {
    c.event.special[a] = {setup:function(d) {
      c.event.add(this, b, d && d.selector ? Na : Ma, a);
    }, teardown:function(a) {
      c.event.remove(this, b, a && a.selector ? Na : Ma);
    }};
  });
  c.support.submitBubbles || (c.event.special.submit = {setup:function(a, b) {
    if (c.nodeName(this, "form")) {
      return!1;
    }
    c.event.add(this, "click.specialSubmit", function(a) {
      var b = a.target, f = b.type;
      ("submit" === f || "image" === f) && c(b).closest("form").length && Da("submit", this, arguments);
    });
    c.event.add(this, "keypress.specialSubmit", function(a) {
      var b = a.target, f = b.type;
      ("text" === f || "password" === f) && c(b).closest("form").length && 13 === a.keyCode && Da("submit", this, arguments);
    });
  }, teardown:function(a) {
    c.event.remove(this, ".specialSubmit");
  }});
  if (!c.support.changeBubbles) {
    var X, Oa = function(a) {
      var b = a.type, d = a.value;
      "radio" === b || "checkbox" === b ? d = a.checked : "select-multiple" === b ? d = -1 < a.selectedIndex ? c.map(a.options, function(a) {
        return a.selected;
      }).join("-") : "" : c.nodeName(a, "select") && (d = a.selectedIndex);
      return d;
    }, ca = function(a, b) {
      var d = a.target, e, f;
      oa.test(d.nodeName) && !d.readOnly && (e = c._data(d, "_change_data"), f = Oa(d), "focusout" === a.type && "radio" === d.type || c._data(d, "_change_data", f), e === l || f === e || null == e && !f || (a.type = "change", a.liveFired = l, c.event.trigger(a, b, d)));
    };
    c.event.special.change = {filters:{focusout:ca, beforedeactivate:ca, click:function(a) {
      var b = a.target, d = c.nodeName(b, "input") ? b.type : "";
      ("radio" === d || "checkbox" === d || c.nodeName(b, "select")) && ca.call(this, a);
    }, keydown:function(a) {
      var b = a.target, d = c.nodeName(b, "input") ? b.type : "";
      (13 === a.keyCode && !c.nodeName(b, "textarea") || 32 === a.keyCode && ("checkbox" === d || "radio" === d) || "select-multiple" === d) && ca.call(this, a);
    }, beforeactivate:function(a) {
      a = a.target;
      c._data(a, "_change_data", Oa(a));
    }}, setup:function(a, b) {
      if ("file" === this.type) {
        return!1;
      }
      for (var d in X) {
        c.event.add(this, d + ".specialChange", X[d]);
      }
      return oa.test(this.nodeName);
    }, teardown:function(a) {
      c.event.remove(this, ".specialChange");
      return oa.test(this.nodeName);
    }};
    X = c.event.special.change.filters;
    X.focus = X.beforeactivate;
  }
  c.support.focusinBubbles || c.each({focus:"focusin", blur:"focusout"}, function(a, b) {
    function d(a) {
      var d = c.event.fix(a);
      d.type = b;
      d.originalEvent = {};
      c.event.trigger(d, null, d.target);
      d.isDefaultPrevented() && a.preventDefault();
    }
    var e = 0;
    c.event.special[b] = {setup:function() {
      0 === e++ && m.addEventListener(a, d, !0);
    }, teardown:function() {
      0 === --e && m.removeEventListener(a, d, !0);
    }};
  });
  c.each(["bind", "one"], function(a, b) {
    c.fn[b] = function(a, e, f) {
      var g;
      if ("object" == typeof a) {
        for (var k in a) {
          this[b](k, e, a[k], f);
        }
        return this;
      }
      if (2 === arguments.length || !1 === e) {
        f = e, e = l;
      }
      "one" === b ? (g = function(a) {
        c(this).unbind(a, g);
        return f.apply(this, arguments);
      }, g.guid = f.guid || c.guid++) : g = f;
      if ("unload" === a && "one" !== b) {
        this.one(a, e, f);
      } else {
        k = 0;
        for (var h = this.length;k < h;k++) {
          c.event.add(this[k], a, g, e);
        }
      }
      return this;
    };
  });
  c.fn.extend({unbind:function(a, b) {
    if ("object" != typeof a || a.preventDefault) {
      for (var d = 0, e = this.length;d < e;d++) {
        c.event.remove(this[d], a, b);
      }
    } else {
      for (d in a) {
        this.unbind(d, a[d]);
      }
    }
    return this;
  }, delegate:function(a, b, c, e) {
    return this.live(b, c, e, a);
  }, undelegate:function(a, b, c) {
    return 0 === arguments.length ? this.unbind("live") : this.die(b, null, c, a);
  }, trigger:function(a, b) {
    return this.each(function() {
      c.event.trigger(a, b, this);
    });
  }, triggerHandler:function(a, b) {
    if (this[0]) {
      return c.event.trigger(a, b, this[0], !0);
    }
  }, toggle:function(a) {
    var b = arguments, d = a.guid || c.guid++, e = 0, f = function(d) {
      var f = (c.data(this, "lastToggle" + a.guid) || 0) % e;
      c.data(this, "lastToggle" + a.guid, f + 1);
      d.preventDefault();
      return b[f].apply(this, arguments) || !1;
    };
    for (f.guid = d;e < b.length;) {
      b[e++].guid = d;
    }
    return this.click(f);
  }, hover:function(a, b) {
    return this.mouseenter(a).mouseleave(b || a);
  }});
  var pa = {focus:"focusin", blur:"focusout", mouseenter:"mouseover", mouseleave:"mouseout"};
  c.each(["live", "die"], function(a, b) {
    c.fn[b] = function(a, e, f, g) {
      var k = 0, h, t, p = g || this.selector, r = g ? this : c(this.context);
      if ("object" == typeof a && !a.preventDefault) {
        for (h in a) {
          r[b](h, e, a[h], p);
        }
        return this;
      }
      if ("die" === b && !a && g && "." === g.charAt(0)) {
        return r.unbind(g), this;
      }
      if (!1 === e || c.isFunction(e)) {
        f = e || K, e = l;
      }
      for (a = (a || "").split(" ");null != (g = a[k++]);) {
        if (h = ha.exec(g), t = "", h && (t = h[0], g = g.replace(ha, "")), "hover" === g) {
          a.push("mouseenter" + t, "mouseleave" + t);
        } else {
          if (h = g, pa[g] ? (a.push(pa[g] + t), g += t) : g = (pa[g] || g) + t, "live" === b) {
            t = 0;
            for (var m = r.length;t < m;t++) {
              c.event.add(r[t], "live." + aa(g, p), {data:e, selector:p, handler:f, origType:g, origHandler:f, preType:h});
            }
          } else {
            r.unbind("live." + aa(g, p), f);
          }
        }
      }
      return this;
    };
  });
  c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, b) {
    c.fn[b] = function(a, c) {
      null == c && (c = a, a = null);
      return 0 < arguments.length ? this.bind(b, a, c) : this.trigger(b);
    };
    c.attrFn && (c.attrFn[b] = !0);
  });
  (function() {
    function a(a, b, c, d, e, f) {
      e = 0;
      for (var g = d.length;e < g;e++) {
        var k = d[e];
        if (k) {
          for (var h = !1, k = k[a];k;) {
            if (k.sizcache === c) {
              h = d[k.sizset];
              break;
            }
            if (1 === k.nodeType) {
              if (f || (k.sizcache = c, k.sizset = e), "string" != typeof b) {
                if (k === b) {
                  h = !0;
                  break;
                }
              } else {
                if (0 < p.filter(b, [k]).length) {
                  h = k;
                  break;
                }
              }
            }
            k = k[a];
          }
          d[e] = h;
        }
      }
    }
    function b(a, b, c, d, e, f) {
      e = 0;
      for (var g = d.length;e < g;e++) {
        var k = d[e];
        if (k) {
          for (var h = !1, k = k[a];k;) {
            if (k.sizcache === c) {
              h = d[k.sizset];
              break;
            }
            1 === k.nodeType && !f && (k.sizcache = c, k.sizset = e);
            if (k.nodeName.toLowerCase() === b) {
              h = k;
              break;
            }
            k = k[a];
          }
          d[e] = h;
        }
      }
    }
    var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, e = 0, f = Object.prototype.toString, g = !1, k = !0, h = /\\/g, t = /\W/;
    [0, 0].sort(function() {
      k = !1;
      return 0;
    });
    var p = function(a, b, c, e) {
      c = c || [];
      var g = b = b || m;
      if (1 !== b.nodeType && 9 !== b.nodeType) {
        return[];
      }
      if (!a || "string" != typeof a) {
        return c;
      }
      var k, h, n, l, t, v, A = !0, u = p.isXML(b), B = [], z = a;
      do {
        if (d.exec(""), k = d.exec(z)) {
          if (z = k[3], B.push(k[1]), k[2]) {
            l = k[3];
            break;
          }
        }
      } while (k);
      if (1 < B.length && q.exec(a)) {
        if (2 === B.length && r.relative[B[0]]) {
          h = H(B[0] + B[1], b);
        } else {
          for (h = r.relative[B[0]] ? [b] : p(B.shift(), b);B.length;) {
            a = B.shift(), r.relative[a] && (a += B.shift()), h = H(a, h);
          }
        }
      } else {
        if (!e && 1 < B.length && 9 === b.nodeType && !u && r.match.ID.test(B[0]) && !r.match.ID.test(B[B.length - 1]) && (t = p.find(B.shift(), b, u), b = t.expr ? p.filter(t.expr, t.set)[0] : t.set[0]), b) {
          for (t = e ? {expr:B.pop(), set:C(e)} : p.find(B.pop(), 1 !== B.length || "~" !== B[0] && "+" !== B[0] || !b.parentNode ? b : b.parentNode, u), h = t.expr ? p.filter(t.expr, t.set) : t.set, 0 < B.length ? n = C(h) : A = !1;B.length;) {
            k = v = B.pop(), r.relative[v] ? k = B.pop() : v = "", null == k && (k = b), r.relative[v](n, k, u);
          }
        } else {
          n = [];
        }
      }
      n || (n = h);
      n || p.error(v || a);
      if ("[object Array]" === f.call(n)) {
        if (A) {
          if (b && 1 === b.nodeType) {
            for (a = 0;null != n[a];a++) {
              n[a] && (!0 === n[a] || 1 === n[a].nodeType && p.contains(b, n[a])) && c.push(h[a]);
            }
          } else {
            for (a = 0;null != n[a];a++) {
              n[a] && 1 === n[a].nodeType && c.push(h[a]);
            }
          }
        } else {
          c.push.apply(c, n);
        }
      } else {
        C(n, c);
      }
      l && (p(l, g, c, e), p.uniqueSort(c));
      return c;
    };
    p.uniqueSort = function(a) {
      if (A && (g = k, a.sort(A), g)) {
        for (var b = 1;b < a.length;b++) {
          a[b] === a[b - 1] && a.splice(b--, 1);
        }
      }
      return a;
    };
    p.matches = function(a, b) {
      return p(a, null, null, b);
    };
    p.matchesSelector = function(a, b) {
      return 0 < p(b, null, null, [a]).length;
    };
    p.find = function(a, b, c) {
      var d;
      if (!a) {
        return[];
      }
      for (var e = 0, f = r.order.length;e < f;e++) {
        var g, k = r.order[e];
        if (g = r.leftMatch[k].exec(a)) {
          var l = g[1];
          g.splice(1, 1);
          if ("\\" !== l.substr(l.length - 1) && (g[1] = (g[1] || "").replace(h, ""), d = r.find[k](g, b, c), null != d)) {
            a = a.replace(r.match[k], "");
            break;
          }
        }
      }
      d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []);
      return{set:d, expr:a};
    };
    p.filter = function(a, b, c, d) {
      for (var e, f, g = a, k = [], h = b, n = b && b[0] && p.isXML(b[0]);a && b.length;) {
        for (var t in r.filter) {
          if (null != (e = r.leftMatch[t].exec(a)) && e[2]) {
            var m, q, v = r.filter[t];
            q = e[1];
            f = !1;
            e.splice(1, 1);
            if ("\\" !== q.substr(q.length - 1)) {
              h === k && (k = []);
              if (r.preFilter[t]) {
                if (e = r.preFilter[t](e, h, c, k, d, n), !e) {
                  f = m = !0;
                } else {
                  if (!0 === e) {
                    continue;
                  }
                }
              }
              if (e) {
                for (var u = 0;null != (q = h[u]);u++) {
                  if (q) {
                    m = v(q, e, u, h);
                    var C = d ^ !!m;
                    c && null != m ? C ? f = !0 : h[u] = !1 : C && (k.push(q), f = !0);
                  }
                }
              }
              if (m !== l) {
                c || (h = k);
                a = a.replace(r.match[t], "");
                if (!f) {
                  return[];
                }
                break;
              }
            }
          }
        }
        if (a === g) {
          if (null == f) {
            p.error(a);
          } else {
            break;
          }
        }
        g = a;
      }
      return h;
    };
    p.error = function(a) {
      throw "Syntax error, unrecognized expression: " + a;
    };
    var r = p.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, 
    PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:function(a) {
      return a.getAttribute("href");
    }, type:function(a) {
      return a.getAttribute("type");
    }}, relative:{"+":function(a, b) {
      var c = "string" == typeof b, d = c && !t.test(b), c = c && !d;
      d && (b = b.toLowerCase());
      for (var d = 0, e = a.length, f;d < e;d++) {
        if (f = a[d]) {
          for (;(f = f.previousSibling) && 1 !== f.nodeType;) {
          }
          a[d] = c || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b;
        }
      }
      c && p.filter(b, a, !0);
    }, ">":function(a, b) {
      var c, d = "string" == typeof b, e = 0, f = a.length;
      if (d && !t.test(b)) {
        for (b = b.toLowerCase();e < f;e++) {
          if (c = a[e]) {
            c = c.parentNode, a[e] = c.nodeName.toLowerCase() === b ? c : !1;
          }
        }
      } else {
        for (;e < f;e++) {
          (c = a[e]) && (a[e] = d ? c.parentNode : c.parentNode === b);
        }
        d && p.filter(b, a, !0);
      }
    }, "":function(c, d, f) {
      var g, k = e++, h = a;
      "string" == typeof d && !t.test(d) && (d = d.toLowerCase(), g = d, h = b);
      h("parentNode", d, k, c, g, f);
    }, "~":function(c, d, f) {
      var g, k = e++, h = a;
      "string" == typeof d && !t.test(d) && (d = d.toLowerCase(), g = d, h = b);
      h("previousSibling", d, k, c, g, f);
    }}, find:{ID:function(a, b, c) {
      if ("undefined" != typeof b.getElementById && !c) {
        return(a = b.getElementById(a[1])) && a.parentNode ? [a] : [];
      }
    }, NAME:function(a, b) {
      if ("undefined" != typeof b.getElementsByName) {
        for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length;e < f;e++) {
          d[e].getAttribute("name") === a[1] && c.push(d[e]);
        }
        return 0 === c.length ? null : c;
      }
    }, TAG:function(a, b) {
      if ("undefined" != typeof b.getElementsByTagName) {
        return b.getElementsByTagName(a[1]);
      }
    }}, preFilter:{CLASS:function(a, b, c, d, e, f) {
      a = " " + a[1].replace(h, "") + " ";
      if (f) {
        return a;
      }
      f = 0;
      for (var g;null != (g = b[f]);f++) {
        g && (e ^ (g.className && 0 <= (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? c || d.push(g) : c && (b[f] = !1));
      }
      return!1;
    }, ID:function(a) {
      return a[1].replace(h, "");
    }, TAG:function(a, b) {
      return a[1].replace(h, "").toLowerCase();
    }, CHILD:function(a) {
      if ("nth" === a[1]) {
        a[2] || p.error(a[0]);
        a[2] = a[2].replace(/^\+|\s*/g, "");
        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
        a[2] = b[1] + (b[2] || 1) - 0;
        a[3] = b[3] - 0;
      } else {
        a[2] && p.error(a[0]);
      }
      a[0] = e++;
      return a;
    }, ATTR:function(a, b, c, d, e, f) {
      b = a[1] = a[1].replace(h, "");
      !f && r.attrMap[b] && (a[1] = r.attrMap[b]);
      a[4] = (a[4] || a[5] || "").replace(h, "");
      "~=" === a[2] && (a[4] = " " + a[4] + " ");
      return a;
    }, PSEUDO:function(a, b, c, e, f) {
      if ("not" === a[1]) {
        if (1 < (d.exec(a[3]) || "").length || /^\w/.test(a[3])) {
          a[3] = p(a[3], null, null, b);
        } else {
          return a = p.filter(a[3], b, c, 1 ^ f), c || e.push.apply(e, a), !1;
        }
      } else {
        if (r.match.POS.test(a[0]) || r.match.CHILD.test(a[0])) {
          return!0;
        }
      }
      return a;
    }, POS:function(a) {
      a.unshift(!0);
      return a;
    }}, filters:{enabled:function(a) {
      return!1 === a.disabled && "hidden" !== a.type;
    }, disabled:function(a) {
      return!0 === a.disabled;
    }, checked:function(a) {
      return!0 === a.checked;
    }, selected:function(a) {
      a.parentNode && a.parentNode.selectedIndex;
      return!0 === a.selected;
    }, parent:function(a) {
      return!!a.firstChild;
    }, empty:function(a) {
      return!a.firstChild;
    }, has:function(a, b, c) {
      return!!p(c[3], a).length;
    }, header:function(a) {
      return/h\d/i.test(a.nodeName);
    }, text:function(a) {
      var b = a.getAttribute("type"), c = a.type;
      return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b);
    }, radio:function(a) {
      return "input" === a.nodeName.toLowerCase() && "radio" === a.type;
    }, checkbox:function(a) {
      return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type;
    }, file:function(a) {
      return "input" === a.nodeName.toLowerCase() && "file" === a.type;
    }, password:function(a) {
      return "input" === a.nodeName.toLowerCase() && "password" === a.type;
    }, submit:function(a) {
      var b = a.nodeName.toLowerCase();
      return("input" === b || "button" === b) && "submit" === a.type;
    }, image:function(a) {
      return "input" === a.nodeName.toLowerCase() && "image" === a.type;
    }, reset:function(a) {
      return "input" === a.nodeName.toLowerCase() && "reset" === a.type;
    }, button:function(a) {
      var b = a.nodeName.toLowerCase();
      return "input" === b && "button" === a.type || "button" === b;
    }, input:function(a) {
      return/input|select|textarea|button/i.test(a.nodeName);
    }, focus:function(a) {
      return a === a.ownerDocument.activeElement;
    }}, setFilters:{first:function(a, b) {
      return 0 === b;
    }, last:function(a, b, c, d) {
      return b === d.length - 1;
    }, even:function(a, b) {
      return 0 === b % 2;
    }, odd:function(a, b) {
      return 1 === b % 2;
    }, lt:function(a, b, c) {
      return b < c[3] - 0;
    }, gt:function(a, b, c) {
      return b > c[3] - 0;
    }, nth:function(a, b, c) {
      return c[3] - 0 === b;
    }, eq:function(a, b, c) {
      return c[3] - 0 === b;
    }}, filter:{PSEUDO:function(a, b, c, d) {
      var e = b[1], f = r.filters[e];
      if (f) {
        return f(a, c, b, d);
      }
      if ("contains" === e) {
        return 0 <= (a.textContent || a.innerText || p.getText([a]) || "").indexOf(b[3]);
      }
      if ("not" === e) {
        b = b[3];
        c = 0;
        for (d = b.length;c < d;c++) {
          if (b[c] === a) {
            return!1;
          }
        }
        return!0;
      }
      p.error(e);
    }, CHILD:function(a, b) {
      var c = b[1], d = a;
      switch(c) {
        case "only":
        ;
        case "first":
          for (;d = d.previousSibling;) {
            if (1 === d.nodeType) {
              return!1;
            }
          }
          if ("first" === c) {
            return!0;
          }
          d = a;
        case "last":
          for (;d = d.nextSibling;) {
            if (1 === d.nodeType) {
              return!1;
            }
          }
          return!0;
        case "nth":
          var c = b[2], e = b[3];
          if (1 === c && 0 === e) {
            return!0;
          }
          var f = b[0], g = a.parentNode;
          if (g && (g.sizcache !== f || !a.nodeIndex)) {
            for (var k = 0, d = g.firstChild;d;d = d.nextSibling) {
              1 === d.nodeType && (d.nodeIndex = ++k);
            }
            g.sizcache = f;
          }
          d = a.nodeIndex - e;
          return 0 === c ? 0 === d : 0 === d % c && 0 <= d / c;
      }
    }, ID:function(a, b) {
      return 1 === a.nodeType && a.getAttribute("id") === b;
    }, TAG:function(a, b) {
      return "*" === b && 1 === a.nodeType || a.nodeName.toLowerCase() === b;
    }, CLASS:function(a, b) {
      return-1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b);
    }, ATTR:function(a, b) {
      var c = b[1], c = r.attrHandle[c] ? r.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c), d = c + "", e = b[2], f = b[4];
      return null == c ? "!=" === e : "=" === e ? d === f : "*=" === e ? 0 <= d.indexOf(f) : "~=" === e ? 0 <= (" " + d + " ").indexOf(f) : f ? "!=" === e ? d !== f : "^=" === e ? 0 === d.indexOf(f) : "$=" === e ? d.substr(d.length - f.length) === f : "|=" === e ? d === f || d.substr(0, f.length + 1) === f + "-" : !1 : d && !1 !== c;
    }, POS:function(a, b, c, d) {
      var e = r.setFilters[b[2]];
      if (e) {
        return e(a, c, b, d);
      }
    }}}, q = r.match.POS, u = function(a, b) {
      return "\\" + (b - 0 + 1);
    }, v;
    for (v in r.match) {
      r.match[v] = new RegExp(r.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), r.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + r.match[v].source.replace(/\\(\d+)/g, u));
    }
    var C = function(a, b) {
      a = Array.prototype.slice.call(a, 0);
      return b ? (b.push.apply(b, a), b) : a;
    };
    try {
      Array.prototype.slice.call(m.documentElement.childNodes, 0)[0].nodeType;
    } catch (z) {
      C = function(a, b) {
        var c = 0, d = b || [];
        if ("[object Array]" === f.call(a)) {
          Array.prototype.push.apply(d, a);
        } else {
          if ("number" == typeof a.length) {
            for (var e = a.length;c < e;c++) {
              d.push(a[c]);
            }
          } else {
            for (;a[c];c++) {
              d.push(a[c]);
            }
          }
        }
        return d;
      };
    }
    var A, x;
    m.documentElement.compareDocumentPosition ? A = function(a, b) {
      return a === b ? (g = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? a.compareDocumentPosition(b) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
    } : (A = function(a, b) {
      var c, d, e = [], f = [];
      c = a.parentNode;
      d = b.parentNode;
      var k = c;
      if (a === b) {
        return g = !0, 0;
      }
      if (c === d) {
        return x(a, b);
      }
      if (!c) {
        return-1;
      }
      if (!d) {
        return 1;
      }
      for (;k;) {
        e.unshift(k), k = k.parentNode;
      }
      for (k = d;k;) {
        f.unshift(k), k = k.parentNode;
      }
      c = e.length;
      d = f.length;
      for (k = 0;k < c && k < d;k++) {
        if (e[k] !== f[k]) {
          return x(e[k], f[k]);
        }
      }
      return k === c ? x(a, f[k], -1) : x(e[k], b, 1);
    }, x = function(a, b, c) {
      if (a === b) {
        return c;
      }
      for (a = a.nextSibling;a;) {
        if (a === b) {
          return-1;
        }
        a = a.nextSibling;
      }
      return 1;
    });
    p.getText = function(a) {
      for (var b = "", c, d = 0;a[d];d++) {
        c = a[d], 3 === c.nodeType || 4 === c.nodeType ? b += c.nodeValue : 8 !== c.nodeType && (b += p.getText(c.childNodes));
      }
      return b;
    };
    (function() {
      var a = m.createElement("div"), b = "script" + (new Date).getTime(), c = m.documentElement;
      a.innerHTML = "<a name='" + b + "'/>";
      c.insertBefore(a, c.firstChild);
      m.getElementById(b) && (r.find.ID = function(a, b, c) {
        if ("undefined" != typeof b.getElementById && !c) {
          return(b = b.getElementById(a[1])) ? b.id === a[1] || "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id").nodeValue === a[1] ? [b] : l : [];
        }
      }, r.filter.ID = function(a, b) {
        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
        return 1 === a.nodeType && c && c.nodeValue === b;
      });
      c.removeChild(a);
      c = a = null;
    })();
    (function() {
      var a = m.createElement("div");
      a.appendChild(m.createComment(""));
      0 < a.getElementsByTagName("*").length && (r.find.TAG = function(a, b) {
        var c = b.getElementsByTagName(a[1]);
        if ("*" === a[1]) {
          for (var d = [], e = 0;c[e];e++) {
            1 === c[e].nodeType && d.push(c[e]);
          }
          c = d;
        }
        return c;
      });
      a.innerHTML = "<a href='#'></a>";
      a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (r.attrHandle.href = function(a) {
        return a.getAttribute("href", 2);
      });
      a = null;
    })();
    m.querySelectorAll && function() {
      var a = p, b = m.createElement("div");
      b.innerHTML = "<p class='TEST'></p>";
      if (!b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
        p = function(b, c, d, e) {
          c = c || m;
          if (!e && !p.isXML(c)) {
            var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
            if (f && (1 === c.nodeType || 9 === c.nodeType)) {
              if (f[1]) {
                return C(c.getElementsByTagName(b), d);
              }
              if (f[2] && r.find.CLASS && c.getElementsByClassName) {
                return C(c.getElementsByClassName(f[2]), d);
              }
            }
            if (9 === c.nodeType) {
              if ("body" === b && c.body) {
                return C([c.body], d);
              }
              if (f && f[3]) {
                var g = c.getElementById(f[3]);
                if (!g || !g.parentNode) {
                  return C([], d);
                }
                if (g.id === f[3]) {
                  return C([g], d);
                }
              }
              try {
                return C(c.querySelectorAll(b), d);
              } catch (k) {
              }
            } else {
              if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                var f = c, h = (g = c.getAttribute("id")) || "__sizzle__", n = c.parentNode, l = /^\s*[+~]/.test(b);
                g ? h = h.replace(/'/g, "\\$&") : c.setAttribute("id", h);
                l && n && (c = c.parentNode);
                try {
                  if (!l || n) {
                    return C(c.querySelectorAll("[id='" + h + "'] " + b), d);
                  }
                } catch (t) {
                } finally {
                  g || f.removeAttribute("id");
                }
              }
            }
          }
          return a(b, c, d, e);
        };
        for (var c in a) {
          p[c] = a[c];
        }
        b = null;
      }
    }();
    (function() {
      var a = m.documentElement, b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
      if (b) {
        var c = !b.call(m.createElement("div"), "div"), d = !1;
        try {
          b.call(m.documentElement, "[test!='']:sizzle");
        } catch (e) {
          d = !0;
        }
        p.matchesSelector = function(a, e) {
          e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!p.isXML(a)) {
            try {
              if (d || !r.match.PSEUDO.test(e) && !/!=/.test(e)) {
                var f = b.call(a, e);
                if (f || !c || a.document && 11 !== a.document.nodeType) {
                  return f;
                }
              }
            } catch (g) {
            }
          }
          return 0 < p(e, null, null, [a]).length;
        };
      }
    })();
    (function() {
      var a = m.createElement("div");
      a.innerHTML = "<div class='test e'></div><div class='test'></div>";
      a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (r.order.splice(1, 0, "CLASS"), r.find.CLASS = function(a, b, c) {
        if ("undefined" != typeof b.getElementsByClassName && !c) {
          return b.getElementsByClassName(a[1]);
        }
      }, a = null));
    })();
    m.documentElement.contains ? p.contains = function(a, b) {
      return a !== b && (a.contains ? a.contains(b) : !0);
    } : m.documentElement.compareDocumentPosition ? p.contains = function(a, b) {
      return!!(a.compareDocumentPosition(b) & 16);
    } : p.contains = function() {
      return!1;
    };
    p.isXML = function(a) {
      return(a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1;
    };
    var H = function(a, b) {
      for (var c, d = [], e = "", f = b.nodeType ? [b] : b;c = r.match.PSEUDO.exec(a);) {
        e += c[0], a = a.replace(r.match.PSEUDO, "");
      }
      a = r.relative[a] ? a + "*" : a;
      c = 0;
      for (var g = f.length;c < g;c++) {
        p(a, f[c], d);
      }
      return p.filter(e, d);
    };
    c.find = p;
    c.expr = p.selectors;
    c.expr[":"] = c.expr.filters;
    c.unique = p.uniqueSort;
    c.text = p.getText;
    c.isXMLDoc = p.isXML;
    c.contains = p.contains;
  })();
  var xb = /Until$/, yb = /^(?:parents|prevUntil|prevAll)/, zb = /,/, hb = /^.[^:#\[\.,]*$/, Ab = Array.prototype.slice, Pa = c.expr.match.POS, Bb = {children:!0, contents:!0, next:!0, prev:!0};
  c.fn.extend({find:function(a) {
    var b = this, d, e;
    if ("string" != typeof a) {
      return c(a).filter(function() {
        d = 0;
        for (e = b.length;d < e;d++) {
          if (c.contains(b[d], this)) {
            return!0;
          }
        }
      });
    }
    var f = this.pushStack("", "find", a), g, k, h;
    d = 0;
    for (e = this.length;d < e;d++) {
      if (g = f.length, c.find(a, this[d], f), 0 < d) {
        for (k = g;k < f.length;k++) {
          for (h = 0;h < g;h++) {
            if (f[h] === f[k]) {
              f.splice(k--, 1);
              break;
            }
          }
        }
      }
    }
    return f;
  }, has:function(a) {
    var b = c(a);
    return this.filter(function() {
      for (var a = 0, e = b.length;a < e;a++) {
        if (c.contains(this, b[a])) {
          return!0;
        }
      }
    });
  }, not:function(a) {
    return this.pushStack(Ba(this, a, !1), "not", a);
  }, filter:function(a) {
    return this.pushStack(Ba(this, a, !0), "filter", a);
  }, is:function(a) {
    return!!a && ("string" == typeof a ? 0 < c.filter(a, this).length : 0 < this.filter(a).length);
  }, closest:function(a, b) {
    var d = [], e, f, g = this[0];
    if (c.isArray(a)) {
      var k, h = {}, l = 1;
      if (g && a.length) {
        e = 0;
        for (f = a.length;e < f;e++) {
          k = a[e], h[k] || (h[k] = Pa.test(k) ? c(k, b || this.context) : k);
        }
        for (;g && g.ownerDocument && g !== b;) {
          for (k in h) {
            e = h[k], (e.jquery ? -1 < e.index(g) : c(g).is(e)) && d.push({selector:k, elem:g, level:l});
          }
          g = g.parentNode;
          l++;
        }
      }
      return d;
    }
    k = Pa.test(a) || "string" != typeof a ? c(a, b || this.context) : 0;
    e = 0;
    for (f = this.length;e < f;e++) {
      for (g = this[e];g;) {
        if (k ? -1 < k.index(g) : c.find.matchesSelector(g, a)) {
          d.push(g);
          break;
        }
        g = g.parentNode;
        if (!g || !g.ownerDocument || g === b || 11 === g.nodeType) {
          break;
        }
      }
    }
    d = 1 < d.length ? c.unique(d) : d;
    return this.pushStack(d, "closest", a);
  }, index:function(a) {
    return a && "string" != typeof a ? c.inArray(a.jquery ? a[0] : a, this) : c.inArray(this[0], a ? c(a) : this.parent().children());
  }, add:function(a, b) {
    var d = "string" == typeof a ? c(a, b) : c.makeArray(a && a.nodeType ? [a] : a), e = c.merge(this.get(), d);
    return this.pushStack(Ca(d[0]) || Ca(e[0]) ? e : c.unique(e));
  }, andSelf:function() {
    return this.add(this.prevObject);
  }});
  c.each({parent:function(a) {
    return(a = a.parentNode) && 11 !== a.nodeType ? a : null;
  }, parents:function(a) {
    return c.dir(a, "parentNode");
  }, parentsUntil:function(a, b, d) {
    return c.dir(a, "parentNode", d);
  }, next:function(a) {
    return c.nth(a, 2, "nextSibling");
  }, prev:function(a) {
    return c.nth(a, 2, "previousSibling");
  }, nextAll:function(a) {
    return c.dir(a, "nextSibling");
  }, prevAll:function(a) {
    return c.dir(a, "previousSibling");
  }, nextUntil:function(a, b, d) {
    return c.dir(a, "nextSibling", d);
  }, prevUntil:function(a, b, d) {
    return c.dir(a, "previousSibling", d);
  }, siblings:function(a) {
    return c.sibling(a.parentNode.firstChild, a);
  }, children:function(a) {
    return c.sibling(a.firstChild);
  }, contents:function(a) {
    return c.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : c.makeArray(a.childNodes);
  }}, function(a, b) {
    c.fn[a] = function(d, e) {
      var f = c.map(this, b, d), g = Ab.call(arguments);
      xb.test(a) || (e = d);
      e && "string" == typeof e && (f = c.filter(e, f));
      f = 1 < this.length && !Bb[a] ? c.unique(f) : f;
      (1 < this.length || zb.test(e)) && yb.test(a) && (f = f.reverse());
      return this.pushStack(f, a, g.join(","));
    };
  });
  c.extend({filter:function(a, b, d) {
    d && (a = ":not(" + a + ")");
    return 1 === b.length ? c.find.matchesSelector(b[0], a) ? [b[0]] : [] : c.find.matches(a, b);
  }, dir:function(a, b, d) {
    var e = [];
    for (a = a[b];a && 9 !== a.nodeType && (d === l || 1 !== a.nodeType || !c(a).is(d));) {
      1 === a.nodeType && e.push(a), a = a[b];
    }
    return e;
  }, nth:function(a, b, c, e) {
    b = b || 1;
    for (e = 0;a && (1 !== a.nodeType || ++e !== b);a = a[c]) {
    }
    return a;
  }, sibling:function(a, b) {
    for (var c = [];a;a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }
    return c;
  }});
  var Cb = / jQuery\d+="(?:\d+|null)"/g, qa = /^\s+/, Qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Ra = /<([\w:]+)/, Db = /<tbody/i, Eb = /<|&#?\w+;/, Sa = /<(?:script|object|embed|option|style)/i, Ta = /checked\s*(?:[^=]|=\s*.checked.)/i, Fb = /\/(java|ecma)script/i, F = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", 
  "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]};
  F.optgroup = F.option;
  F.tbody = F.tfoot = F.colgroup = F.caption = F.thead;
  F.th = F.td;
  c.support.htmlSerialize || (F._default = [1, "div<div>", "</div>"]);
  c.fn.extend({text:function(a) {
    return c.isFunction(a) ? this.each(function(b) {
      var d = c(this);
      d.text(a.call(this, b, d.text()));
    }) : "object" != typeof a && a !== l ? this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(a)) : c.text(this);
  }, wrapAll:function(a) {
    if (c.isFunction(a)) {
      return this.each(function(b) {
        c(this).wrapAll(a.call(this, b));
      });
    }
    if (this[0]) {
      var b = c(a, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && b.insertBefore(this[0]);
      b.map(function() {
        for (var a = this;a.firstChild && 1 === a.firstChild.nodeType;) {
          a = a.firstChild;
        }
        return a;
      }).append(this);
    }
    return this;
  }, wrapInner:function(a) {
    return c.isFunction(a) ? this.each(function(b) {
      c(this).wrapInner(a.call(this, b));
    }) : this.each(function() {
      var b = c(this), d = b.contents();
      d.length ? d.wrapAll(a) : b.append(a);
    });
  }, wrap:function(a) {
    return this.each(function() {
      c(this).wrapAll(a);
    });
  }, unwrap:function() {
    return this.parent().each(function() {
      c.nodeName(this, "body") || c(this).replaceWith(this.childNodes);
    }).end();
  }, append:function() {
    return this.domManip(arguments, !0, function(a) {
      1 === this.nodeType && this.appendChild(a);
    });
  }, prepend:function() {
    return this.domManip(arguments, !0, function(a) {
      1 === this.nodeType && this.insertBefore(a, this.firstChild);
    });
  }, before:function() {
    if (this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this);
      });
    }
    if (arguments.length) {
      var a = c(arguments[0]);
      a.push.apply(a, this.toArray());
      return this.pushStack(a, "before", arguments);
    }
  }, after:function() {
    if (this[0] && this[0].parentNode) {
      return this.domManip(arguments, !1, function(a) {
        this.parentNode.insertBefore(a, this.nextSibling);
      });
    }
    if (arguments.length) {
      var a = this.pushStack(this, "after", arguments);
      a.push.apply(a, c(arguments[0]).toArray());
      return a;
    }
  }, remove:function(a, b) {
    for (var d = 0, e;null != (e = this[d]);d++) {
      if (!a || c.filter(a, [e]).length) {
        !b && 1 === e.nodeType && (c.cleanData(e.getElementsByTagName("*")), c.cleanData([e])), e.parentNode && e.parentNode.removeChild(e);
      }
    }
    return this;
  }, empty:function() {
    for (var a = 0, b;null != (b = this[a]);a++) {
      for (1 === b.nodeType && c.cleanData(b.getElementsByTagName("*"));b.firstChild;) {
        b.removeChild(b.firstChild);
      }
    }
    return this;
  }, clone:function(a, b) {
    a = null == a ? !1 : a;
    b = null == b ? a : b;
    return this.map(function() {
      return c.clone(this, a, b);
    });
  }, html:function(a) {
    if (a === l) {
      return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Cb, "") : null;
    }
    if ("string" != typeof a || Sa.test(a) || !c.support.leadingWhitespace && qa.test(a) || F[(Ra.exec(a) || ["", ""])[1].toLowerCase()]) {
      c.isFunction(a) ? this.each(function(b) {
        var d = c(this);
        d.html(a.call(this, b, d.html()));
      }) : this.empty().append(a);
    } else {
      a = a.replace(Qa, "<$1></$2>");
      try {
        for (var b = 0, d = this.length;b < d;b++) {
          1 === this[b].nodeType && (c.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a);
        }
      } catch (e) {
        this.empty().append(a);
      }
    }
    return this;
  }, replaceWith:function(a) {
    if (this[0] && this[0].parentNode) {
      if (c.isFunction(a)) {
        return this.each(function(b) {
          var d = c(this), e = d.html();
          d.replaceWith(a.call(this, b, e));
        });
      }
      "string" != typeof a && (a = c(a).detach());
      return this.each(function() {
        var b = this.nextSibling, d = this.parentNode;
        c(this).remove();
        b ? c(b).before(a) : c(d).append(a);
      });
    }
    return this.length ? this.pushStack(c(c.isFunction(a) ? a() : a), "replaceWith", a) : this;
  }, detach:function(a) {
    return this.remove(a, !0);
  }, domManip:function(a, b, d) {
    var e, f, g, k = a[0], h = [];
    if (!c.support.checkClone && 3 === arguments.length && "string" == typeof k && Ta.test(k)) {
      return this.each(function() {
        c(this).domManip(a, b, d, !0);
      });
    }
    if (c.isFunction(k)) {
      return this.each(function(e) {
        var f = c(this);
        a[0] = k.call(this, e, b ? f.html() : l);
        f.domManip(a, b, d);
      });
    }
    if (this[0]) {
      g = k && k.parentNode;
      c.support.parentNode && g && 11 === g.nodeType && g.childNodes.length === this.length ? e = {fragment:g} : e = c.buildFragment(a, this, h);
      g = e.fragment;
      1 === g.childNodes.length ? f = g = g.firstChild : f = g.firstChild;
      if (f) {
        b = b && c.nodeName(f, "tr");
        for (var t = 0, p = this.length, m = p - 1;t < p;t++) {
          d.call(b ? gb(this[t], f) : this[t], e.cacheable || 1 < p && t < m ? c.clone(g, !0, !0) : g);
        }
      }
      h.length && c.each(h, fb);
    }
    return this;
  }});
  c.buildFragment = function(a, b, d) {
    var e, f, g;
    b = b && b[0] ? b[0].ownerDocument || b[0] : m;
    1 === a.length && "string" == typeof a[0] && 512 > a[0].length && b === m && "<" === a[0].charAt(0) && !Sa.test(a[0]) && (c.support.checkClone || !Ta.test(a[0])) && (f = !0, g = c.fragments[a[0]], g && 1 !== g && (e = g));
    e || (e = b.createDocumentFragment(), c.clean(a, b, e, d));
    f && (c.fragments[a[0]] = g ? e : 1);
    return{fragment:e, cacheable:f};
  };
  c.fragments = {};
  c.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, b) {
    c.fn[a] = function(d) {
      var e = [];
      d = c(d);
      var f = 1 === this.length && this[0].parentNode;
      if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === d.length) {
        return d[b](this[0]), this;
      }
      for (var f = 0, g = d.length;f < g;f++) {
        var k = (0 < f ? this.clone(!0) : this).get();
        c(d[f])[b](k);
        e = e.concat(k);
      }
      return this.pushStack(e, a, d.selector);
    };
  });
  c.extend({clone:function(a, b, d) {
    var e = a.cloneNode(!0), f, g, k;
    if (!(c.support.noCloneEvent && c.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || c.isXMLDoc(a))) {
      for (za(a, e), f = Z(a), g = Z(e), k = 0;f[k];++k) {
        za(f[k], g[k]);
      }
    }
    if (b && (Aa(a, e), d)) {
      for (f = Z(a), g = Z(e), k = 0;f[k];++k) {
        Aa(f[k], g[k]);
      }
    }
    return e;
  }, clean:function(a, b, d, e) {
    b = b || m;
    "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || m);
    for (var f = [], g = 0, k;null != (k = a[g]);g++) {
      if ("number" == typeof k && (k += ""), k) {
        if ("string" == typeof k) {
          if (Eb.test(k)) {
            k = k.replace(Qa, "<$1></$2>");
            var h = (Ra.exec(k) || ["", ""])[1].toLowerCase(), l = F[h] || F._default, p = l[0], r = b.createElement("div");
            for (r.innerHTML = l[1] + k + l[2];p--;) {
              r = r.lastChild;
            }
            if (!c.support.tbody) {
              for (p = Db.test(k), h = "table" !== h || p ? "<table>" !== l[1] || p ? [] : r.childNodes : r.firstChild && r.firstChild.childNodes, l = h.length - 1;0 <= l;--l) {
                c.nodeName(h[l], "tbody") && !h[l].childNodes.length && h[l].parentNode.removeChild(h[l]);
              }
            }
            !c.support.leadingWhitespace && qa.test(k) && r.insertBefore(b.createTextNode(qa.exec(k)[0]), r.firstChild);
            k = r.childNodes;
          } else {
            k = b.createTextNode(k);
          }
        }
        var q;
        if (!c.support.appendChecked) {
          if (k[0] && "number" == typeof(q = k.length)) {
            for (g = 0;g < q;g++) {
              xa(k[g]);
            }
          } else {
            xa(k);
          }
        }
        k.nodeType ? f.push(k) : f = c.merge(f, k);
      }
    }
    if (d) {
      for (a = function(a) {
        return!a.type || Fb.test(a.type);
      }, g = 0;f[g];g++) {
        !e || !c.nodeName(f[g], "script") || f[g].type && "text/javascript" !== f[g].type.toLowerCase() ? (1 === f[g].nodeType && (b = c.grep(f[g].getElementsByTagName("script"), a), f.splice.apply(f, [g + 1, 0].concat(b))), d.appendChild(f[g])) : e.push(f[g].parentNode ? f[g].parentNode.removeChild(f[g]) : f[g]);
      }
    }
    return f;
  }, cleanData:function(a) {
    for (var b, d, e = c.cache, f = c.expando, g = c.event.special, k = c.support.deleteExpando, h = 0, l;null != (l = a[h]);h++) {
      if (!l.nodeName || !c.noData[l.nodeName.toLowerCase()]) {
        if (d = l[c.expando]) {
          if ((b = e[d] && e[d][f]) && b.events) {
            for (var p in b.events) {
              g[p] ? c.event.remove(l, p) : c.removeEvent(l, p, b.handle);
            }
            b.handle && (b.handle.elem = null);
          }
          k ? delete l[c.expando] : l.removeAttribute && l.removeAttribute(c.expando);
          delete e[d];
        }
      }
    }
  }});
  var Ua = /alpha\([^)]*\)/i, Gb = /opacity=([^)]*)/, Hb = /-([a-z])/ig, Ib = /([A-Z]|^ms)/g, Va = /^-?\d+(?:px)?$/i, Jb = /^-?\d/, Kb = /^[+\-]=/, Lb = /[^+\-\.\de]+/g, Mb = {position:"absolute", visibility:"hidden", display:"block"}, db = ["Left", "Right"], eb = ["Top", "Bottom"], N, Wa, da, Nb = function(a, b) {
    return b.toUpperCase();
  };
  c.fn.css = function(a, b) {
    return 2 === arguments.length && b === l ? this : c.access(this, a, b, !0, function(a, b, f) {
      return f !== l ? c.style(a, b, f) : c.css(a, b);
    });
  };
  c.extend({cssHooks:{opacity:{get:function(a, b) {
    if (b) {
      var c = N(a, "opacity", "opacity");
      return "" === c ? "1" : c;
    }
    return a.style.opacity;
  }}}, cssNumber:{zIndex:!0, fontWeight:!0, opacity:!0, zoom:!0, lineHeight:!0, widows:!0, orphans:!0}, cssProps:{"float":c.support.cssFloat ? "cssFloat" : "styleFloat"}, style:function(a, b, d, e) {
    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
      var f, g = c.camelCase(b), k = a.style, h = c.cssHooks[g];
      b = c.cssProps[g] || g;
      if (d === l) {
        return h && "get" in h && (f = h.get(a, !1, e)) !== l ? f : k[b];
      }
      e = typeof d;
      if (!("number" === e && isNaN(d) || null == d || ("string" === e && Kb.test(d) && (d = +d.replace(Lb, "") + parseFloat(c.css(a, b))), "number" === e && !c.cssNumber[g] && (d += "px"), h && "set" in h && (d = h.set(a, d)) === l))) {
        try {
          k[b] = d;
        } catch (t) {
        }
      }
    }
  }, css:function(a, b, d) {
    var e, f;
    b = c.camelCase(b);
    f = c.cssHooks[b];
    b = c.cssProps[b] || b;
    "cssFloat" === b && (b = "float");
    if (f && "get" in f && (e = f.get(a, !0, d)) !== l) {
      return e;
    }
    if (N) {
      return N(a, b);
    }
  }, swap:function(a, b, c) {
    var e = {}, f;
    for (f in b) {
      e[f] = a.style[f], a.style[f] = b[f];
    }
    c.call(a);
    for (f in b) {
      a.style[f] = e[f];
    }
  }, camelCase:function(a) {
    return a.replace(Hb, Nb);
  }});
  c.curCSS = c.css;
  c.each(["height", "width"], function(a, b) {
    c.cssHooks[b] = {get:function(a, e, f) {
      var g;
      if (e) {
        return 0 !== a.offsetWidth ? g = wa(a, b, f) : c.swap(a, Mb, function() {
          g = wa(a, b, f);
        }), 0 >= g && (g = N(a, b, b), "0px" === g && da && (g = da(a, b, b)), null != g) ? "" === g || "auto" === g ? "0px" : g : 0 > g || null == g ? (g = a.style[b], "" === g || "auto" === g ? "0px" : g) : "string" == typeof g ? g : g + "px";
      }
    }, set:function(a, b) {
      if (!Va.test(b)) {
        return b;
      }
      b = parseFloat(b);
      if (0 <= b) {
        return b + "px";
      }
    }};
  });
  c.support.opacity || (c.cssHooks.opacity = {get:function(a, b) {
    return Gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "";
  }, set:function(a, b) {
    var d = a.style, e = a.currentStyle;
    d.zoom = 1;
    var f = c.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")", e = e && e.filter || d.filter || "";
    d.filter = Ua.test(e) ? e.replace(Ua, f) : e + " " + f;
  }});
  c(function() {
    c.support.reliableMarginRight || (c.cssHooks.marginRight = {get:function(a, b) {
      var d;
      c.swap(a, {display:"inline-block"}, function() {
        b ? d = N(a, "margin-right", "marginRight") : d = a.style.marginRight;
      });
      return d;
    }});
  });
  m.defaultView && m.defaultView.getComputedStyle && (Wa = function(a, b) {
    var d, e;
    b = b.replace(Ib, "-$1").toLowerCase();
    if (!(e = a.ownerDocument.defaultView)) {
      return l;
    }
    if (e = e.getComputedStyle(a, null)) {
      d = e.getPropertyValue(b), "" === d && !c.contains(a.ownerDocument.documentElement, a) && (d = c.style(a, b));
    }
    return d;
  });
  m.documentElement.currentStyle && (da = function(a, b) {
    var c, e = a.currentStyle && a.currentStyle[b], f = a.runtimeStyle && a.runtimeStyle[b], g = a.style;
    !Va.test(e) && Jb.test(e) && (c = g.left, f && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : e || 0, e = g.pixelLeft + "px", g.left = c, f && (a.runtimeStyle.left = f));
    return "" === e ? "auto" : e;
  });
  N = Wa || da;
  c.expr && c.expr.filters && (c.expr.filters.hidden = function(a) {
    var b = a.offsetHeight;
    return 0 === a.offsetWidth && 0 === b || !c.support.reliableHiddenOffsets && "none" === (a.style.display || c.css(a, "display"));
  }, c.expr.filters.visible = function(a) {
    return!c.expr.filters.hidden(a);
  });
  var Ob = /%20/g, cb = /\[\]$/, Xa = /\r?\n/g, Pb = /#.*$/, Qb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Rb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Sb = /^(?:GET|HEAD)$/, Tb = /^\/\//, Ya = /\?/, Ub = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Vb = /^(?:select|textarea)/i, va = /\s+/, Wb = /([?&])_=[^&]*/, Za = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, $a = c.fn.load, ga = {}, ab = {}, P, L;
  try {
    P = ob.href;
  } catch (bc) {
    P = m.createElement("a"), P.href = "", P = P.href;
  }
  L = Za.exec(P.toLowerCase()) || [];
  c.fn.extend({load:function(a, b, d) {
    if ("string" != typeof a && $a) {
      return $a.apply(this, arguments);
    }
    if (!this.length) {
      return this;
    }
    var e = a.indexOf(" ");
    if (0 <= e) {
      var f = a.slice(e, a.length);
      a = a.slice(0, e);
    }
    e = "GET";
    b && (c.isFunction(b) ? (d = b, b = l) : "object" == typeof b && (b = c.param(b, c.ajaxSettings.traditional), e = "POST"));
    var g = this;
    c.ajax({url:a, type:e, dataType:"html", data:b, complete:function(a, b, e) {
      e = a.responseText;
      a.isResolved() && (a.done(function(a) {
        e = a;
      }), g.html(f ? c("<div>").append(e.replace(Ub, "")).find(f) : e));
      d && g.each(d, [e, b, a]);
    }});
    return this;
  }, serialize:function() {
    return c.param(this.serializeArray());
  }, serializeArray:function() {
    return this.map(function() {
      return this.elements ? c.makeArray(this.elements) : this;
    }).filter(function() {
      return this.name && !this.disabled && (this.checked || Vb.test(this.nodeName) || Rb.test(this.type));
    }).map(function(a, b) {
      var d = c(this).val();
      return null == d ? null : c.isArray(d) ? c.map(d, function(a, c) {
        return{name:b.name, value:a.replace(Xa, "\r\n")};
      }) : {name:b.name, value:d.replace(Xa, "\r\n")};
    }).get();
  }});
  c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
    c.fn[b] = function(a) {
      return this.bind(b, a);
    };
  });
  c.each(["get", "post"], function(a, b) {
    c[b] = function(a, e, f, g) {
      c.isFunction(e) && (g = g || f, f = e, e = l);
      return c.ajax({type:b, url:a, data:e, success:f, dataType:g});
    };
  });
  c.extend({getScript:function(a, b) {
    return c.get(a, l, b, "script");
  }, getJSON:function(a, b, d) {
    return c.get(a, b, d, "json");
  }, ajaxSetup:function(a, b) {
    b ? c.extend(!0, a, c.ajaxSettings, b) : (b = a, a = c.extend(!0, c.ajaxSettings, b));
    for (var d in{context:1, url:1}) {
      d in b ? a[d] = b[d] : d in c.ajaxSettings && (a[d] = c.ajaxSettings[d]);
    }
    return a;
  }, ajaxSettings:{url:P, isLocal:/^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(L[1]), global:!0, type:"GET", contentType:"application/x-www-form-urlencoded", processData:!0, async:!0, accepts:{xml:"application/xml, text/xml", html:"text/html", text:"text/plain", json:"application/json, text/javascript", "*":"*/*"}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText"}, converters:{"* text":h.String, "text html":!0, "text json":c.parseJSON, 
  "text xml":c.parseXML}}, ajaxPrefilter:ua(ga), ajaxTransport:ua(ab), ajax:function(a, b) {
    function d(a, b, d, m) {
      if (2 !== x) {
        x = 2;
        A && clearTimeout(A);
        C = l;
        u = m || "";
        w.readyState = a ? 4 : 0;
        var r, q, v;
        if (d) {
          m = e;
          var z = w, y = m.contents, B = m.dataTypes, F = m.responseFields, G, E, D, V;
          for (E in F) {
            E in d && (z[F[E]] = d[E]);
          }
          for (;"*" === B[0];) {
            B.shift(), G === l && (G = m.mimeType || z.getResponseHeader("content-type"));
          }
          if (G) {
            for (E in y) {
              if (y[E] && y[E].test(G)) {
                B.unshift(E);
                break;
              }
            }
          }
          if (B[0] in d) {
            D = B[0];
          } else {
            for (E in d) {
              if (!B[0] || m.converters[E + " " + B[0]]) {
                D = E;
                break;
              }
              V || (V = E);
            }
            D = D || V;
          }
          D ? (D !== B[0] && B.unshift(D), d = d[D]) : d = void 0;
        } else {
          d = l;
        }
        if (200 <= a && 300 > a || 304 === a) {
          if (e.ifModified) {
            if (G = w.getResponseHeader("Last-Modified")) {
              c.lastModified[p] = G;
            }
            if (G = w.getResponseHeader("Etag")) {
              c.etag[p] = G;
            }
          }
          if (304 === a) {
            b = "notmodified", r = !0;
          } else {
            try {
              G = e;
              G.dataFilter && (d = G.dataFilter(d, G.dataType));
              var O = G.dataTypes;
              E = {};
              var M, K, P = O.length, L, Q = O[0], I, N, R, T, J;
              for (M = 1;M < P;M++) {
                if (1 === M) {
                  for (K in G.converters) {
                    "string" == typeof K && (E[K.toLowerCase()] = G.converters[K]);
                  }
                }
                I = Q;
                Q = O[M];
                if ("*" === Q) {
                  Q = I;
                } else {
                  if ("*" !== I && I !== Q) {
                    N = I + " " + Q;
                    R = E[N] || E["* " + Q];
                    if (!R) {
                      for (T in J = l, E) {
                        if (L = T.split(" "), L[0] === I || "*" === L[0]) {
                          if (J = E[L[1] + " " + Q]) {
                            T = E[T];
                            !0 === T ? R = J : !0 === J && (R = T);
                            break;
                          }
                        }
                      }
                    }
                    R || J || c.error("No conversion from " + N.replace(" ", " to "));
                    !0 !== R && (d = R ? R(d) : J(T(d)));
                  }
                }
              }
              q = d;
              b = "success";
              r = !0;
            } catch (S) {
              b = "parsererror", v = S;
            }
          }
        } else {
          if (v = b, !b || a) {
            b = "error", 0 > a && (a = 0);
          }
        }
        w.status = a;
        w.statusText = b;
        r ? k.resolveWith(f, [q, b, w]) : k.rejectWith(f, [w, b, v]);
        w.statusCode(t);
        t = l;
        H && g.trigger("ajax" + (r ? "Success" : "Error"), [w, e, r ? q : v]);
        h.resolveWith(f, [w, b]);
        H && (g.trigger("ajaxComplete", [w, e]), --c.active || c.event.trigger("ajaxStop"));
      }
    }
    "object" == typeof a && (b = a, a = l);
    b = b || {};
    var e = c.ajaxSetup({}, b), f = e.context || e, g = f !== e && (f.nodeType || f instanceof c) ? c(f) : c.event, k = c.Deferred(), h = c._Deferred(), t = e.statusCode || {}, p, m = {}, q = {}, u, v, C, A, z, x = 0, H, y, w = {readyState:0, setRequestHeader:function(a, b) {
      if (!x) {
        var c = a.toLowerCase();
        a = q[c] = q[c] || a;
        m[a] = b;
      }
      return this;
    }, getAllResponseHeaders:function() {
      return 2 === x ? u : null;
    }, getResponseHeader:function(a) {
      var b;
      if (2 === x) {
        if (!v) {
          for (v = {};b = Qb.exec(u);) {
            v[b[1].toLowerCase()] = b[2];
          }
        }
        b = v[a.toLowerCase()];
      }
      return b === l ? null : b;
    }, overrideMimeType:function(a) {
      x || (e.mimeType = a);
      return this;
    }, abort:function(a) {
      a = a || "abort";
      C && C.abort(a);
      d(0, a);
      return this;
    }};
    k.promise(w);
    w.success = w.done;
    w.error = w.fail;
    w.complete = h.done;
    w.statusCode = function(a) {
      if (a) {
        var b;
        if (2 > x) {
          for (b in a) {
            t[b] = [t[b], a[b]];
          }
        } else {
          b = a[w.status], w.then(b, b);
        }
      }
      return this;
    };
    e.url = ((a || e.url) + "").replace(Pb, "").replace(Tb, L[1] + "//");
    e.dataTypes = c.trim(e.dataType || "*").toLowerCase().split(va);
    null == e.crossDomain && (z = Za.exec(e.url.toLowerCase()), e.crossDomain = !(!z || z[1] == L[1] && z[2] == L[2] && (z[3] || ("http:" === z[1] ? 80 : 443)) == (L[3] || ("http:" === L[1] ? 80 : 443))));
    e.data && e.processData && "string" != typeof e.data && (e.data = c.param(e.data, e.traditional));
    M(ga, e, b, w);
    if (2 === x) {
      return!1;
    }
    H = e.global;
    e.type = e.type.toUpperCase();
    e.hasContent = !Sb.test(e.type);
    H && 0 === c.active++ && c.event.trigger("ajaxStart");
    if (!e.hasContent && (e.data && (e.url += (Ya.test(e.url) ? "&" : "?") + e.data), p = e.url, !1 === e.cache)) {
      z = c.now();
      var F = e.url.replace(Wb, "$1_=" + z);
      e.url = F + (F === e.url ? (Ya.test(e.url) ? "&" : "?") + "_=" + z : "");
    }
    (e.data && e.hasContent && !1 !== e.contentType || b.contentType) && w.setRequestHeader("Content-Type", e.contentType);
    e.ifModified && (p = p || e.url, c.lastModified[p] && w.setRequestHeader("If-Modified-Since", c.lastModified[p]), c.etag[p] && w.setRequestHeader("If-None-Match", c.etag[p]));
    w.setRequestHeader("Accept", e.dataTypes[0] && e.accepts[e.dataTypes[0]] ? e.accepts[e.dataTypes[0]] + ("*" !== e.dataTypes[0] ? ", */*; q=0.01" : "") : e.accepts["*"]);
    for (y in e.headers) {
      w.setRequestHeader(y, e.headers[y]);
    }
    if (e.beforeSend && (!1 === e.beforeSend.call(f, w, e) || 2 === x)) {
      return w.abort(), !1;
    }
    for (y in{success:1, error:1, complete:1}) {
      w[y](e[y]);
    }
    if (C = M(ab, e, b, w)) {
      w.readyState = 1;
      H && g.trigger("ajaxSend", [w, e]);
      e.async && 0 < e.timeout && (A = setTimeout(function() {
        w.abort("timeout");
      }, e.timeout));
      try {
        x = 1, C.send(m, d);
      } catch (D) {
        2 > status ? d(-1, D) : c.error(D);
      }
    } else {
      d(-1, "No Transport");
    }
    return w;
  }, param:function(a, b) {
    var d = [], e = function(a, b) {
      b = c.isFunction(b) ? b() : b;
      d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };
    b === l && (b = c.ajaxSettings.traditional);
    if (c.isArray(a) || a.jquery && !c.isPlainObject(a)) {
      c.each(a, function() {
        e(this.name, this.value);
      });
    } else {
      for (var f in a) {
        O(f, a[f], b, e);
      }
    }
    return d.join("&").replace(Ob, "+");
  }});
  c.extend({active:0, lastModified:{}, etag:{}});
  var Xb = c.now(), ea = /(\=)\?(&|$)|\?\?/i;
  c.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
    return c.expando + "_" + Xb++;
  }});
  c.ajaxPrefilter("json jsonp", function(a, b, d) {
    b = "application/x-www-form-urlencoded" === a.contentType && "string" == typeof a.data;
    if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (ea.test(a.url) || b && ea.test(a.data))) {
      var e, f = a.jsonpCallback = c.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, g = h[f], k = a.url, l = a.data, m = "$1" + f + "$2";
      !1 !== a.jsonp && (k = k.replace(ea, m), a.url === k && (b && (l = l.replace(ea, m)), a.data === l && (k += (/\?/.test(k) ? "&" : "?") + a.jsonp + "=" + f)));
      a.url = k;
      a.data = l;
      h[f] = function(a) {
        e = [a];
      };
      d.always(function() {
        h[f] = g;
        e && c.isFunction(g) && h[f](e[0]);
      });
      a.converters["script json"] = function() {
        e || c.error(f + " was not called");
        return e[0];
      };
      a.dataTypes[0] = "json";
      return "script";
    }
  });
  c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/javascript|ecmascript/}, converters:{"text script":function(a) {
    c.globalEval(a);
    return a;
  }}});
  c.ajaxPrefilter("script", function(a) {
    a.cache === l && (a.cache = !1);
    a.crossDomain && (a.type = "GET", a.global = !1);
  });
  c.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = m.head || m.getElementsByTagName("head")[0] || m.documentElement;
      return{send:function(e, f) {
        b = m.createElement("script");
        b.async = "async";
        a.scriptCharset && (b.charset = a.scriptCharset);
        b.src = a.url;
        b.onload = b.onreadystatechange = function(a, e) {
          if (e || !b.readyState || /loaded|complete/.test(b.readyState)) {
            b.onload = b.onreadystatechange = null, c && b.parentNode && c.removeChild(b), b = l, e || f(200, "success");
          }
        };
        c.insertBefore(b, c.firstChild);
      }, abort:function() {
        b && b.onload(0, 1);
      }};
    }
  });
  var ra = h.ActiveXObject ? function() {
    for (var a in J) {
      J[a](0, 1);
    }
  } : !1, Yb = 0, J;
  c.ajaxSettings.xhr = h.ActiveXObject ? function() {
    var a;
    if (!(a = !this.isLocal && H())) {
      a: {
        try {
          a = new h.ActiveXObject("Microsoft.XMLHTTP");
          break a;
        } catch (b) {
        }
        a = void 0;
      }
    }
    return a;
  } : H;
  (function(a) {
    c.extend(c.support, {ajax:!!a, cors:!!a && "withCredentials" in a});
  })(c.ajaxSettings.xhr());
  c.support.ajax && c.ajaxTransport(function(a) {
    if (!a.crossDomain || c.support.cors) {
      var b;
      return{send:function(d, e) {
        var f = a.xhr(), g, k;
        a.username ? f.open(a.type, a.url, a.async, a.username, a.password) : f.open(a.type, a.url, a.async);
        if (a.xhrFields) {
          for (k in a.xhrFields) {
            f[k] = a.xhrFields[k];
          }
        }
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
        a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (k in d) {
            f.setRequestHeader(k, d[k]);
          }
        } catch (n) {
        }
        f.send(a.hasContent && a.data || null);
        b = function(d, k) {
          var h, n, m, q, u;
          try {
            if (b && (k || 4 === f.readyState)) {
              if (b = l, g && (f.onreadystatechange = c.noop, ra && delete J[g]), k) {
                4 !== f.readyState && f.abort();
              } else {
                h = f.status;
                m = f.getAllResponseHeaders();
                q = {};
                (u = f.responseXML) && u.documentElement && (q.xml = u);
                q.text = f.responseText;
                try {
                  n = f.statusText;
                } catch (z) {
                  n = "";
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = q.text ? 200 : 404;
              }
            }
          } catch (A) {
            k || e(-1, A);
          }
          q && e(h, n, q, m);
        };
        a.async && 4 !== f.readyState ? (g = ++Yb, ra && (J || (J = {}, c(h).unload(ra)), J[g] = b), f.onreadystatechange = b) : b();
      }, abort:function() {
        b && b(0, 1);
      }};
    }
  });
  var fa = {}, D, U, Zb = /^(?:toggle|show|hide)$/, $b = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, S, ta = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], Y, sa = h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame;
  c.fn.extend({show:function(a, b, d) {
    var e;
    if (a || 0 === a) {
      return this.animate(u("show", 3), a, b, d);
    }
    b = 0;
    for (d = this.length;b < d;b++) {
      a = this[b], a.style && (e = a.style.display, !c._data(a, "olddisplay") && "none" === e && (e = a.style.display = ""), "" === e && "none" === c.css(a, "display") && c._data(a, "olddisplay", A(a.nodeName)));
    }
    for (b = 0;b < d;b++) {
      if (a = this[b], a.style && (e = a.style.display, "" === e || "none" === e)) {
        a.style.display = c._data(a, "olddisplay") || "";
      }
    }
    return this;
  }, hide:function(a, b, d) {
    if (a || 0 === a) {
      return this.animate(u("hide", 3), a, b, d);
    }
    a = 0;
    for (b = this.length;a < b;a++) {
      this[a].style && (d = c.css(this[a], "display"), "none" !== d && !c._data(this[a], "olddisplay") && c._data(this[a], "olddisplay", d));
    }
    for (a = 0;a < b;a++) {
      this[a].style && (this[a].style.display = "none");
    }
    return this;
  }, _toggle:c.fn.toggle, toggle:function(a, b, d) {
    var e = "boolean" == typeof a;
    c.isFunction(a) && c.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || e ? this.each(function() {
      var b = e ? a : c(this).is(":hidden");
      c(this)[b ? "show" : "hide"]();
    }) : this.animate(u("toggle", 3), a, b, d);
    return this;
  }, fadeTo:function(a, b, c, e) {
    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity:b}, a, c, e);
  }, animate:function(a, b, d, e) {
    var f = c.speed(b, d, e);
    return c.isEmptyObject(a) ? this.each(f.complete, [!1]) : this[!1 === f.queue ? "each" : "queue"](function() {
      !1 === f.queue && c._mark(this);
      var b = c.extend({}, f), d = 1 === this.nodeType, e = d && c(this).is(":hidden"), h, l, m, q, u, v, z, x;
      b.animatedProperties = {};
      for (m in a) {
        h = c.camelCase(m);
        m !== h && (a[h] = a[m], delete a[m]);
        l = a[h];
        if ("hide" === l && e || "show" === l && !e) {
          return b.complete.call(this);
        }
        d && ("height" === h || "width" === h) && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === c.css(this, "display") && "none" === c.css(this, "float") && (c.support.inlineBlockNeedsLayout ? (q = A(this.nodeName), "inline" === q ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"));
        b.animatedProperties[h] = c.isArray(l) ? l[1] : b.specialEasing && b.specialEasing[h] || b.easing || "swing";
      }
      null != b.overflow && (this.style.overflow = "hidden");
      for (m in a) {
        d = new c.fx(this, b, m), l = a[m], Zb.test(l) ? d["toggle" === l ? e ? "show" : "hide" : l]() : (u = $b.exec(l), v = d.cur(), u ? (z = parseFloat(u[2]), x = u[3] || (c.cssNumber[h] ? "" : "px"), "px" !== x && (c.style(this, m, (z || 1) + x), v *= (z || 1) / d.cur(), c.style(this, m, v + x)), u[1] && (z = ("-=" === u[1] ? -1 : 1) * z + v), d.custom(v, z, x)) : d.custom(v, l, ""));
      }
      return!0;
    });
  }, stop:function(a, b) {
    a && this.queue([]);
    this.each(function() {
      var a = c.timers, e = a.length;
      for (b || c._unmark(!0, this);e--;) {
        a[e].elem === this && (b && a[e](!0), a.splice(e, 1));
      }
    });
    b || this.dequeue();
    return this;
  }});
  c.each({slideDown:u("show", 1), slideUp:u("hide", 1), slideToggle:u("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, b) {
    c.fn[a] = function(a, c, f) {
      return this.animate(b, a, c, f);
    };
  });
  c.extend({speed:function(a, b, d) {
    var e = a && "object" == typeof a ? c.extend({}, a) : {complete:d || !d && b || c.isFunction(a) && a, duration:a, easing:d && b || b && !c.isFunction(b) && b};
    e.duration = c.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in c.fx.speeds ? c.fx.speeds[e.duration] : c.fx.speeds._default;
    e.old = e.complete;
    e.complete = function(a) {
      !1 !== e.queue ? c.dequeue(this) : !1 !== a && c._unmark(this);
      c.isFunction(e.old) && e.old.call(this);
    };
    return e;
  }, easing:{linear:function(a, b, c, e) {
    return c + e * a;
  }, swing:function(a, b, c, e) {
    return(-Math.cos(a * Math.PI) / 2 + .5) * e + c;
  }}, timers:[], fx:function(a, b, c) {
    this.options = b;
    this.elem = a;
    this.prop = c;
    b.orig = b.orig || {};
  }});
  c.fx.prototype = {update:function() {
    this.options.step && this.options.step.call(this.elem, this.now, this);
    (c.fx.step[this.prop] || c.fx.step._default)(this);
  }, cur:function() {
    if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) {
      return this.elem[this.prop];
    }
    var a, b = c.css(this.elem, this.prop);
    return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a;
  }, custom:function(a, b, d) {
    function e(a) {
      return f.step(a);
    }
    var f = this, g = c.fx, k;
    this.startTime = Y || x();
    this.start = a;
    this.end = b;
    this.unit = d || this.unit || (c.cssNumber[this.prop] ? "" : "px");
    this.now = this.start;
    this.pos = this.state = 0;
    e.elem = this.elem;
    e() && c.timers.push(e) && !S && (sa ? (S = 1, k = function() {
      S && (sa(k), g.tick());
    }, sa(k)) : S = setInterval(g.tick, g.interval));
  }, show:function() {
    this.options.orig[this.prop] = c.style(this.elem, this.prop);
    this.options.show = !0;
    this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
    c(this.elem).show();
  }, hide:function() {
    this.options.orig[this.prop] = c.style(this.elem, this.prop);
    this.options.hide = !0;
    this.custom(this.cur(), 0);
  }, step:function(a) {
    var b = Y || x(), d = !0, e = this.elem, f = this.options, g, k;
    if (a || b >= f.duration + this.startTime) {
      this.now = this.end;
      this.pos = this.state = 1;
      this.update();
      f.animatedProperties[this.prop] = !0;
      for (g in f.animatedProperties) {
        !0 !== f.animatedProperties[g] && (d = !1);
      }
      if (d) {
        null != f.overflow && !c.support.shrinkWrapBlocks && c.each(["", "X", "Y"], function(a, b) {
          e.style["overflow" + b] = f.overflow[a];
        });
        f.hide && c(e).hide();
        if (f.hide || f.show) {
          for (var h in f.animatedProperties) {
            c.style(e, h, f.orig[h]);
          }
        }
        f.complete.call(e);
      }
      return!1;
    }
    Infinity == f.duration ? this.now = b : (k = b - this.startTime, this.state = k / f.duration, this.pos = c.easing[f.animatedProperties[this.prop]](this.state, k, 0, 1, f.duration), this.now = this.start + (this.end - this.start) * this.pos);
    this.update();
    return!0;
  }};
  c.extend(c.fx, {tick:function() {
    for (var a = c.timers, b = a.length;b--;) {
      a[b]() || a.splice(b, 1);
    }
    a.length || c.fx.stop();
  }, interval:13, stop:function() {
    clearInterval(S);
    S = null;
  }, speeds:{slow:600, fast:200, _default:400}, step:{opacity:function(a) {
    c.style(a.elem, "opacity", a.now);
  }, _default:function(a) {
    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now;
  }}});
  c.expr && c.expr.filters && (c.expr.filters.animated = function(a) {
    return c.grep(c.timers, function(b) {
      return a === b.elem;
    }).length;
  });
  var ac = /^t(?:able|d|h)$/i, bb = /^(?:body|html)$/i;
  "getBoundingClientRect" in m.documentElement ? c.fn.offset = function(a) {
    var b = this[0], d;
    if (a) {
      return this.each(function(b) {
        c.offset.setOffset(this, a, b);
      });
    }
    if (!b || !b.ownerDocument) {
      return null;
    }
    if (b === b.ownerDocument.body) {
      return c.offset.bodyOffset(b);
    }
    try {
      d = b.getBoundingClientRect();
    } catch (e) {
    }
    var f = b.ownerDocument, g = f.documentElement;
    if (!d || !c.contains(g, b)) {
      return d ? {top:d.top, left:d.left} : {top:0, left:0};
    }
    b = f.body;
    f = q(f);
    return{top:d.top + (f.pageYOffset || c.support.boxModel && g.scrollTop || b.scrollTop) - (g.clientTop || b.clientTop || 0), left:d.left + (f.pageXOffset || c.support.boxModel && g.scrollLeft || b.scrollLeft) - (g.clientLeft || b.clientLeft || 0)};
  } : c.fn.offset = function(a) {
    var b = this[0];
    if (a) {
      return this.each(function(b) {
        c.offset.setOffset(this, a, b);
      });
    }
    if (!b || !b.ownerDocument) {
      return null;
    }
    if (b === b.ownerDocument.body) {
      return c.offset.bodyOffset(b);
    }
    c.offset.initialize();
    var d, e = b.offsetParent, f = b.ownerDocument, g = f.documentElement, k = f.body;
    d = (f = f.defaultView) ? f.getComputedStyle(b, null) : b.currentStyle;
    for (var h = b.offsetTop, l = b.offsetLeft;(b = b.parentNode) && b !== k && b !== g && (!c.offset.supportsFixedPosition || "fixed" !== d.position);) {
      d = f ? f.getComputedStyle(b, null) : b.currentStyle, h -= b.scrollTop, l -= b.scrollLeft, b === e && (h += b.offsetTop, l += b.offsetLeft, c.offset.doesNotAddBorder && (!c.offset.doesAddBorderForTableAndCells || !ac.test(b.nodeName)) && (h += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), e = b.offsetParent), c.offset.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (h += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 
      0);
    }
    if ("relative" === d.position || "static" === d.position) {
      h += k.offsetTop, l += k.offsetLeft;
    }
    c.offset.supportsFixedPosition && "fixed" === d.position && (h += Math.max(g.scrollTop, k.scrollTop), l += Math.max(g.scrollLeft, k.scrollLeft));
    return{top:h, left:l};
  };
  c.offset = {initialize:function() {
    var a = m.body, b = m.createElement("div"), d, e, f, g = parseFloat(c.css(a, "marginTop")) || 0;
    c.extend(b.style, {position:"absolute", top:0, left:0, margin:0, border:0, width:"1px", height:"1px", visibility:"hidden"});
    b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    a.insertBefore(b, a.firstChild);
    d = b.firstChild;
    e = d.firstChild;
    f = d.nextSibling.firstChild.firstChild;
    this.doesNotAddBorder = 5 !== e.offsetTop;
    this.doesAddBorderForTableAndCells = 5 === f.offsetTop;
    e.style.position = "fixed";
    e.style.top = "20px";
    this.supportsFixedPosition = 20 === e.offsetTop || 15 === e.offsetTop;
    e.style.position = e.style.top = "";
    d.style.overflow = "hidden";
    d.style.position = "relative";
    this.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop;
    this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== g;
    a.removeChild(b);
    c.offset.initialize = c.noop;
  }, bodyOffset:function(a) {
    var b = a.offsetTop, d = a.offsetLeft;
    c.offset.initialize();
    c.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(c.css(a, "marginTop")) || 0, d += parseFloat(c.css(a, "marginLeft")) || 0);
    return{top:b, left:d};
  }, setOffset:function(a, b, d) {
    var e = c.css(a, "position");
    "static" === e && (a.style.position = "relative");
    var f = c(a), g = f.offset(), k = c.css(a, "top"), h = c.css(a, "left"), l = {}, m = {}, r, q;
    ("absolute" === e || "fixed" === e) && -1 < c.inArray("auto", [k, h]) ? (m = f.position(), r = m.top, q = m.left) : (r = parseFloat(k) || 0, q = parseFloat(h) || 0);
    c.isFunction(b) && (b = b.call(a, d, g));
    null != b.top && (l.top = b.top - g.top + r);
    null != b.left && (l.left = b.left - g.left + q);
    "using" in b ? b.using.call(a, l) : f.css(l);
  }};
  c.fn.extend({position:function() {
    if (!this[0]) {
      return null;
    }
    var a = this[0], b = this.offsetParent(), d = this.offset(), e = bb.test(b[0].nodeName) ? {top:0, left:0} : b.offset();
    d.top -= parseFloat(c.css(a, "marginTop")) || 0;
    d.left -= parseFloat(c.css(a, "marginLeft")) || 0;
    e.top += parseFloat(c.css(b[0], "borderTopWidth")) || 0;
    e.left += parseFloat(c.css(b[0], "borderLeftWidth")) || 0;
    return{top:d.top - e.top, left:d.left - e.left};
  }, offsetParent:function() {
    return this.map(function() {
      for (var a = this.offsetParent || m.body;a && !bb.test(a.nodeName) && "static" === c.css(a, "position");) {
        a = a.offsetParent;
      }
      return a;
    });
  }});
  c.each(["Left", "Top"], function(a, b) {
    var d = "scroll" + b;
    c.fn[d] = function(b) {
      var f, g;
      return b === l ? (f = this[0], f ? (g = q(f)) ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : c.support.boxModel && g.document.documentElement[d] || g.document.body[d] : f[d] : null) : this.each(function() {
        (g = q(this)) ? g.scrollTo(a ? c(g).scrollLeft() : b, a ? b : c(g).scrollTop()) : this[d] = b;
      });
    };
  });
  c.each(["Height", "Width"], function(a, b) {
    var d = b.toLowerCase();
    c.fn["inner" + b] = function() {
      return this[0] ? parseFloat(c.css(this[0], d, "padding")) : null;
    };
    c.fn["outer" + b] = function(a) {
      return this[0] ? parseFloat(c.css(this[0], d, a ? "margin" : "border")) : null;
    };
    c.fn[d] = function(a) {
      var f = this[0];
      if (!f) {
        return null == a ? null : this;
      }
      if (c.isFunction(a)) {
        return this.each(function(b) {
          var f = c(this);
          f[d](a.call(this, b, f[d]()));
        });
      }
      if (c.isWindow(f)) {
        var g = f.document.documentElement["client" + b];
        return "CSS1Compat" === f.document.compatMode && g || f.document.body["client" + b] || g;
      }
      return 9 === f.nodeType ? Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]) : a === l ? (f = c.css(f, d), g = parseFloat(f), c.isNaN(g) ? f : g) : this.css(d, "string" == typeof a ? a : a + "px");
    };
  });
  h.jQuery = h.$ = c;
})(window);
function bmmLang() {
  this.init();
}
bmmLang.prototype = {init:function() {
}, getString:function(h) {
  h = h.replace(/\./g, "_");
  return chrome.i18n.getMessage(h, "");
}, getMessage:function(h, l) {
  var q = this.getString(h);
  for (param in l) {
    l[param] && (q = q.replace(new RegExp("%" + param, "g"), l[param]));
  }
  return q;
}};
function bmmVisual() {
}
bmmVisual.prototype = {RequestPermission:function(h, l) {
  window.webkitNotifications.requestPermission(h, [l]);
}, notif:function(h) {
  if (0 < window.webkitNotifications.checkPermission()) {
    this.RequestPermission(this.notif, h);
  } else {
    var l = webkitNotifications.createNotification("http://www.brandmymail.com/static/images/gmail.jpg", "BrandMyMail Message", h);
    l.show();
    setTimeout(function() {
      l.cancel();
    }, "15000");
  }
}, display:function(h) {
  this.notif(h);
}, activationRequest:function(h) {
  if (0 < window.webkitNotifications.checkPermission()) {
    this.RequestPermission(this.notif, h);
  } else {
    var l = webkitNotifications.createHTMLNotification(chrome.extension.getURL("notauthenticated.html"));
    l.onclose = function() {
      bmmPrefs.update(function() {
        bmmPrefs.getValue("username") && bmmPrefs.getValue("userkey");
      });
    };
    l.show();
    setTimeout(function() {
      l.cancel();
    }, "15000");
  }
}, openNewBmmTab:function() {
  chrome.tabs.create({url:bmmPrefs.getHost() + "/activation"});
}, onCloseAlert:function(h, l) {
  $j("#bmm-alert-container", l).remove();
}, _create_dialog:function(h) {
  var l = this, q = $j("<div>", h).attr("id", "bmm-alert-container").bind("click", function(q) {
    l.onCloseAlert(q, h);
  }), A = $j("<div>", h).attr("id", "bmm-alert-window").attr("role", "dialog").addClass("bmm-dialog").addClass("ui-dialog").addClass("ui-widget").addClass("ui-widget-content").addClass("ui-corner-all").bind("click", function(h) {
    return!1;
  }).prependTo(q), u = $j("<div>", h).attr("id", "bmm-alert-title").addClass("ui-dialog-titlebar").addClass("ui-widget-header").addClass("ui-corner-all").addClass("ui-helper-clearfix").bind("click", function(h) {
    return!1;
  }).prependTo(A);
  $j("<span>", h).attr("id", "bmm-alert-title-span").addClass("ui-dialog-title").text(bmmLanguage.getString("bmm.dialog.title")).bind("click", function(h) {
    return!1;
  }).prependTo(u);
  u = $j("<a>", h).attr("id", "bmm-alert-title-bar").attr("role", "button").addClass("ui-dialog-titlebar-close").addClass("ui-corner-all").bind("click", function(q) {
    l.onCloseAlert(q, h);
  }).appendTo(u);
  $j("<span>", h).addClass("ui-icon").addClass("ui-icon-closethick").bind("click", function(q) {
    l.onCloseAlert(q, h);
  }).prependTo(u);
  $j("<div>", h).attr("id", "bmm-alert-content").addClass("bmm-dialog-content").addClass("ui-dialog-content").addClass("ui-widget-content").bind("click", function(h) {
    return!1;
  }).appendTo(A);
  return q;
}, message_dialog:function(h, l) {
  var q = this, A = this._create_dialog(h), u = A.find("div#bmm-alert-content");
  l || (l = "Undefined BrandMyMail server error. Try in a few minutes");
  $j("<p>", h).text(l).appendTo(u);
  var z = $j("<div>", h).addClass("dock_buttons").bind("click", function(h) {
    return!1;
  });
  $j("<input>", h).attr("type", "button").addClass("button color-2").val("CLOSE").bind("click", function(l) {
    q.onCloseAlert(l, h);
  }).appendTo(z);
  z.appendTo(u);
  A.appendTo($j("body", h));
}, account_not_authorized_dialog:function(h, l, q) {
  var A = this;
  q = this._create_dialog(h);
  var u = q.find("div#bmm-alert-content"), z = $j("<p>", h), x = $j("<div>", h);
  if (l) {
    var H = bmmPrefs.getHost() + "/settings", O = $j("<a>", h).attr("href", "#").text("settings").click(function() {
      window.open(H);
    });
    $j("<p>", h).html("Your BrandMyMail account is connected to your gmail account <b>" + l[0] + "</b>.").appendTo(x);
    $j("<p>", h).html("You can connect more Gmail accounts on your BrandMyMail ").append(O).append(" page.").appendTo(x);
  } else {
    x.text("You don't have gmail accounts configured for BrandMyMail");
  }
  l = $j("<div>", h).addClass("dock_buttons").bind("click", function(h) {
    return!1;
  });
  $j("<input>", h).attr("type", "button").addClass("button color-2").val("CLOSE").bind("click", function(l) {
    A.onCloseAlert(l, h);
  }).appendTo(l);
  l.appendTo(x);
  x.appendTo(z);
  z.appendTo(u);
  q.appendTo($j("body", h));
}, extension_out_of_date:function(h) {
  var l = this, q = this._create_dialog(h), A = q.find("div#bmm-alert-content"), u = $j("<form>", h).attr({action:bmmPrefs.getHost() + "/static/extension/chrome/bmm.crx", method:"GET"}), z = $j("<p>", h), x = $j("<div>", h).text("Your Chrome extension is out of date. ");
  $j("<a>", h).attr("href", bmmPrefs.getHost() + "/static/extension/chrome/bmm.crx").text("Download the new version here!").click(function(q) {
    var u = $j(this).attr("href");
    gBrowser.contentWindow.location = u;
    l.onCloseAlert(q, h);
  }).appendTo(x);
  x.appendTo(u);
  x = $j("<div>", h).addClass("dock_buttons").bind("click", function(h) {
    return!1;
  });
  $j("<input>", h).attr("type", "button").addClass("submit button color-1").val("DOWNLOAD").bind("click", function(q) {
    var u = $j(this).closest("form");
    q = document.createEvent("HTMLEvents");
    q.initEvent("submit", !0, !0);
    u.get(0).dispatchEvent(q);
    l.onCloseAlert(q, h);
  }).appendTo(x);
  $j("<input>", h).attr("type", "button").addClass("button color-2").val("NO, THANKS").bind("click", function(q) {
    l.onCloseAlert(q, h);
  }).appendTo(x);
  x.appendTo(u);
  u.appendTo(z);
  z.appendTo(A);
  q.appendTo($j("body", h));
}, bmmFailIcon:function() {
  this.setIcon("failed");
}, bmmReadyIcon:function() {
  bmmPrefs.isActivated() ? this.setIcon("ready") : this.setIcon("installed");
}, bmmServiceIcon:function() {
  bmmPrefs.isActivated() ? this.setIcon("active") : this.setIcon("installed");
}, setIcon:function(h) {
}};
function bmmPreferences(h) {
  this.init(h);
}
bmmPreferences.prototype = {_preferences:[], _bmm_version:"0", init:function(h) {
  this._preferences = h;
  console.log("BMM extension version: " + this.getValue("version"));
  this._bmm_version = this.getValue("version");
}, update:function(h) {
  var l = this;
  chrome.extension.sendRequest({action:"get"}, function(q) {
    l._preferences = q;
    h && h();
  });
}, isActivated:function() {
  return "" != this.getValue("username") && "" != this.getValue("userkey");
}, getValue:function(h) {
  h = this._preferences[h];
  return void 0 != h ? h : "";
}, setValue:function(h, l) {
  var q = this;
  chrome.extension.sendRequest({action:"set", name:h, data:l}, function(h) {
    q._preferences = h;
  });
}, hasNext:function(h) {
  h = $j(h);
  return!!(h.next().length || h[0].nextSibling && $j.trim(h[0].nextSibling.nodeValue));
}, save:function() {
}, getHost:function(h) {
  var l = this.getValue("mode");
  h = h ? "http://" : "https://";
  return "local" == l ? h + this.getValue("localhost") : "dev" == l ? h + this.getValue("devhost") : h + this.getValue("livehost");
}, clear:function() {
}, getVersion:function() {
  return this._bmm_version;
}, getToken:function(h, l) {
  var q = this;
  chrome.extension.sendRequest({action:"get_token", host:q.getHost()}, function(A) {
    !A.token && l ? l(A.error) : A.token && h && (q.expireToken(), h(A.token));
  });
}, setToken:function(h) {
  chrome.extension.sendRequest({action:"set_token", token:h}, function(h) {
  });
}, expireToken:function() {
  var h = this;
  chrome.extension.sendRequest({action:"expire_token"}, function(l) {
    h._preferences = l;
  });
}, validateEmailAddress:function(h, l) {
  var q = null;
  if (!h) {
    return!1;
  }
  $j.each(l, function(l, u) {
    if (null == q && u.toString().toLowerCase() == h.toString().toLowerCase()) {
      return q = l, !1;
    }
  });
  return null != q ? !0 : !1;
}};
function bmmBmm(h) {
  this.doc = h;
  this.init();
}
bmmBmm.prototype = {doc:null, init:function() {
  var h = this;
  this.doc.defaultView.addEventListener("load", function(l) {
    h.handler(l);
  }, !1);
}, handler:function(h) {
  h = $j("body", this.doc);
  var l = bmmPrefs.getValue("username"), q = bmmPrefs.getValue("userkey"), A = bmmPrefs.getValue("mode"), u = this;
  h.get(0).addEventListener("bmmsave", function(h) {
    u.save(h);
  }, !1);
  document.addEventListener("bmmsave", function(h) {
    u.save(h);
  }, !1);
  "" != l && "" != q ? this.dispatcher(h.get(0), "bmmcheck", '{"extension": {"installed": "Y", "configured" : "Y", "name": "' + l + '", "mode": "' + A + '", "browser": "chrome", "version": "' + bmmPrefs.getVersion() + '"}}') : this.dispatcher(h.get(0), "bmmcheck", '{"extension": {"installed": "Y", "configured" : "N", "browser": "chrome", "version": "' + bmmPrefs.getVersion() + '"}}');
}, save:function(h) {
  var l = $j("body", this.doc), q = h.target.getAttribute("username"), A = h.target.getAttribute("userkey"), u = h.target.getAttribute("token"), z = h.target.getAttribute("mode");
  h = h.target.getAttribute("staff");
  bmmPrefs.setValue("username", q);
  bmmPrefs.setValue("userkey", A);
  bmmPrefs.setValue("mode", z);
  bmmPrefs.setValue("staff", h);
  bmmPrefs.setToken(u);
  bmmPrefs.save();
  bmmBrowser.bmmServiceIcon();
  this.dispatcher(l.get(0), "bmmsaved", "Y");
}, dispatcher:function(h, l, q) {
  h.setAttribute("eventData", q);
  q = document.createEvent("Event");
  q.initEvent(l, !0, !0);
  h.dispatchEvent(q);
}, stop:function() {
  this.doc = null;
}};
var $j = jQuery.noConflict(!0), bmmLanguage, bmmPrefs, bmmBrowser, bmm;
chrome.extension.sendRequest({action:"get"}, function(h) {
  bmmLanguage = new bmmLang;
  bmmPrefs = new bmmPreferences(h);
  bmmBrowser = new bmmVisual;
  bmmPrefs.setValue("first", "N");
  bmm = new bmmBmm(document);
});

