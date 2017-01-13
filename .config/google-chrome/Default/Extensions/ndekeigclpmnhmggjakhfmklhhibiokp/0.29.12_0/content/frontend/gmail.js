(function(c, g) {
  function k(a) {
    return d.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }
  function h(a) {
    if (!ia[a]) {
      var e = d("<" + a + ">").appendTo("body"), m = e.css("display");
      e.remove();
      if ("none" === m || "" === m) {
        G || (G = u.createElement("iframe"), G.frameBorder = G.width = G.height = 0), u.body.appendChild(G), Y && G.createElement || (Y = (G.contentWindow || G.contentDocument).document, Y.write("<!doctype><html><body></body></html>")), e = Y.createElement(a), Y.body.appendChild(e), m = d.css(e, "display"), u.body.removeChild(G);
      }
      ia[a] = m;
    }
    return ia[a];
  }
  function l(a, e) {
    var m = {};
    d.each(xa.concat.apply([], xa.slice(0, e)), function() {
      m[this] = a;
    });
    return m;
  }
  function b() {
    ba = g;
  }
  function f() {
    setTimeout(b, 0);
    return ba = d.now();
  }
  function n() {
    try {
      return new c.XMLHttpRequest;
    } catch (a) {
    }
  }
  function t(a, e, m, r) {
    if (d.isArray(e)) {
      d.each(e, function(e, b) {
        m || db.test(a) ? r(a, b) : t(a + "[" + ("object" == typeof b || d.isArray(b) ? e : "") + "]", b, m, r);
      });
    } else {
      if (m || null == e || "object" != typeof e) {
        r(a, e);
      } else {
        for (var b in e) {
          t(a + "[" + b + "]", e[b], m, r);
        }
      }
    }
  }
  function v(a, e, d, r, b, p) {
    b = b || e.dataTypes[0];
    p = p || {};
    p[b] = !0;
    b = a[b];
    for (var c = 0, f = b ? b.length : 0, n = a === ja, h;c < f && (n || !h);c++) {
      h = b[c](e, d, r), "string" == typeof h && (!n || p[h] ? h = g : (e.dataTypes.unshift(h), h = v(a, e, d, r, h, p)));
    }
    !n && h || p["*"] || (h = v(a, e, d, r, "*", p));
    return h;
  }
  function w(a) {
    return function(e, m) {
      "string" != typeof e && (m = e, e = "*");
      if (d.isFunction(m)) {
        for (var b = e.toLowerCase().split(za), q = 0, p = b.length, c, g;q < p;q++) {
          c = b[q], (g = /^\+/.test(c)) && (c = c.substr(1) || "*"), c = a[c] = a[c] || [], c[g ? "unshift" : "push"](m);
        }
      }
    };
  }
  function y(a, e, m) {
    var b = "width" === e ? a.offsetWidth : a.offsetHeight;
    if ("border" === m) {
      return b;
    }
    d.each("width" === e ? eb : fb, function() {
      m || (b -= parseFloat(d.css(a, "padding" + this)) || 0);
      "margin" === m ? b += parseFloat(d.css(a, "margin" + this)) || 0 : b -= parseFloat(d.css(a, "border" + this + "Width")) || 0;
    });
    return b;
  }
  function J(a, e) {
    e.src ? d.ajax({url:e.src, async:!1, dataType:"script"}) : d.globalEval(e.text || e.textContent || e.innerHTML || "");
    e.parentNode && e.parentNode.removeChild(e);
  }
  function A(a) {
    d.nodeName(a, "input") ? P(a) : a.getElementsByTagName && d.grep(a.getElementsByTagName("input"), P);
  }
  function P(a) {
    if ("checkbox" === a.type || "radio" === a.type) {
      a.defaultChecked = a.checked;
    }
  }
  function K(a) {
    return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : [];
  }
  function Aa(a, e) {
    var m;
    if (1 === e.nodeType) {
      e.clearAttributes && e.clearAttributes();
      e.mergeAttributes && e.mergeAttributes(a);
      m = e.nodeName.toLowerCase();
      if ("object" === m) {
        e.outerHTML = a.outerHTML;
      } else {
        if ("input" !== m || "checkbox" !== a.type && "radio" !== a.type) {
          if ("option" === m) {
            e.selected = a.defaultSelected;
          } else {
            if ("input" === m || "textarea" === m) {
              e.defaultValue = a.defaultValue;
            }
          }
        } else {
          a.checked && (e.defaultChecked = e.checked = a.checked), e.value !== a.value && (e.value = a.value);
        }
      }
      e.removeAttribute(d.expando);
    }
  }
  function Ba(a, e) {
    if (1 === e.nodeType && d.hasData(a)) {
      var m = d.expando, b = d.data(a), q = d.data(e, b);
      if (b = b[m]) {
        var p = b.events, q = q[m] = d.extend({}, b);
        if (p) {
          delete q.handle;
          q.events = {};
          for (var c in p) {
            for (m = 0, b = p[c].length;m < b;m++) {
              d.event.add(e, c + (p[c][m].namespace ? "." : "") + p[c][m].namespace, p[c][m], p[c][m].data);
            }
          }
        }
      }
    }
  }
  function gb(a, e) {
    return d.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }
  function Ca(a, e, m) {
    e = e || 0;
    if (d.isFunction(e)) {
      return d.grep(a, function(a, d) {
        return!!e.call(a, d, a) === m;
      });
    }
    if (e.nodeType) {
      return d.grep(a, function(a, d) {
        return a === e === m;
      });
    }
    if ("string" == typeof e) {
      var b = d.grep(a, function(a) {
        return 1 === a.nodeType;
      });
      if (hb.test(e)) {
        return d.filter(e, b, !m);
      }
      e = d.filter(e, b);
    }
    return d.grep(a, function(a, b) {
      return 0 <= d.inArray(a, e) === m;
    });
  }
  function Da(a) {
    return!a || !a.parentNode || 11 === a.parentNode.nodeType;
  }
  function da(a, e) {
    return(a && "*" !== a ? a + "." : "") + e.replace(ib, "`").replace(jb, "&");
  }
  function kb(a) {
    var e, m, b, q, c, g, f, h, n, k, l, t = [];
    q = [];
    c = d._data(this, "events");
    if (a.liveFired !== this && c && c.live && !a.target.disabled && (!a.button || "click" !== a.type)) {
      a.namespace && (l = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)"));
      a.liveFired = this;
      var v = c.live.slice(0);
      for (f = 0;f < v.length;f++) {
        c = v[f], c.origType.replace(la, "") === a.type ? q.push(c.selector) : v.splice(f--, 1);
      }
      q = d(a.target).closest(q, a.currentTarget);
      h = 0;
      for (n = q.length;h < n;h++) {
        for (k = q[h], f = 0;f < v.length;f++) {
          if (c = v[f], k.selector === c.selector && (!l || l.test(c.namespace)) && !k.elem.disabled) {
            g = k.elem;
            b = null;
            if ("mouseenter" === c.preType || "mouseleave" === c.preType) {
              a.type = c.preType, (b = d(a.relatedTarget).closest(c.selector)[0]) && d.contains(g, b) && (b = g);
            }
            b && b === g || t.push({elem:g, handleObj:c, level:k.level});
          }
        }
      }
      h = 0;
      for (n = t.length;h < n;h++) {
        q = t[h];
        if (m && q.level > m) {
          break;
        }
        a.currentTarget = q.elem;
        a.data = q.handleObj.data;
        a.handleObj = q.handleObj;
        l = q.handleObj.origHandler.apply(q.elem, arguments);
        if (!1 === l || a.isPropagationStopped()) {
          if (m = q.level, !1 === l && (e = !1), a.isImmediatePropagationStopped()) {
            break;
          }
        }
      }
      return e;
    }
  }
  function Ea(a, e, m) {
    var b = d.extend({}, m[0]);
    b.type = a;
    b.originalEvent = {};
    b.liveFired = g;
    d.event.handle.call(e, b);
    b.isDefaultPrevented() && m[0].preventDefault();
  }
  function ea() {
    return!0;
  }
  function L() {
    return!1;
  }
  function Fa(a, e, m) {
    var b = e + "defer", q = e + "queue", c = e + "mark", f = d.data(a, b, g, !0);
    !f || "queue" !== m && d.data(a, q, g, !0) || "mark" !== m && d.data(a, c, g, !0) || setTimeout(function() {
      d.data(a, q, g, !0) || d.data(a, c, g, !0) || (d.removeData(a, b, !0), f.resolve());
    }, 0);
  }
  function ma(a) {
    for (var e in a) {
      if ("toJSON" !== e) {
        return!1;
      }
    }
    return!0;
  }
  function Ga(a, e, m) {
    if (m === g && 1 === a.nodeType) {
      if (name = "data-" + e.replace(lb, "$1-$2").toLowerCase(), m = a.getAttribute(name), "string" == typeof m) {
        try {
          m = "true" === m ? !0 : "false" === m ? !1 : "null" === m ? null : d.isNaN(m) ? mb.test(m) ? d.parseJSON(m) : m : parseFloat(m);
        } catch (b) {
        }
        d.data(a, e, m);
      } else {
        m = g;
      }
    }
    return m;
  }
  var u = c.document, nb = c.navigator, ob = c.location, d = function() {
    function a() {
      if (!e.isReady) {
        try {
          u.documentElement.doScroll("left");
        } catch (d) {
          setTimeout(a, 1);
          return;
        }
        e.ready();
      }
    }
    var e = function(a, d) {
      return new e.fn.init(a, d, q);
    }, d = c.jQuery, b = c.$, q, p = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, h = /^\s+/, n = /\s+$/, k = /\d/, l = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, t = /^[\],:{}\s]*$/, v = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, Q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, w = /(?:^|:|,)(?:\s*\[)+/g, y = /(webkit)[ \/]([\w.]+)/, z = /(opera)(?:.*version)?[ \/]([\w.]+)/, E = /(msie) ([\w.]+)/, B = /(mozilla)(?:.*? rv:([\w.]+))?/, F = nb.userAgent, x, M, pb = Object.prototype.toString, 
    na = Object.prototype.hasOwnProperty, oa = Array.prototype.push, Z = Array.prototype.slice, Ha = String.prototype.trim, Ia = Array.prototype.indexOf, Ja = {};
    e.fn = e.prototype = {constructor:e, init:function(a, d, m) {
      var b, r;
      if (!a) {
        return this;
      }
      if (a.nodeType) {
        return this.context = this[0] = a, this.length = 1, this;
      }
      if ("body" === a && !d && u.body) {
        return this.context = u, this[0] = u.body, this.selector = a, this.length = 1, this;
      }
      if ("string" == typeof a) {
        "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? b = [null, a, null] : b = p.exec(a);
        if (b && (b[1] || !d)) {
          if (b[1]) {
            return r = (d = d instanceof e ? d[0] : d) ? d.ownerDocument || d : u, (m = l.exec(a)) ? e.isPlainObject(d) ? (a = [u.createElement(m[1])], e.fn.attr.call(a, d, !0)) : a = [r.createElement(m[1])] : (m = e.buildFragment([b[1]], [r]), a = (m.cacheable ? e.clone(m.fragment) : m.fragment).childNodes), e.merge(this, a);
          }
          if ((d = u.getElementById(b[2])) && d.parentNode) {
            if (d.id !== b[2]) {
              return m.find(a);
            }
            this.length = 1;
            this[0] = d;
          }
          this.context = u;
          this.selector = a;
          return this;
        }
        return!d || d.jquery ? (d || m).find(a) : this.constructor(d).find(a);
      }
      if (e.isFunction(a)) {
        return m.ready(a);
      }
      a.selector !== g && (this.selector = a.selector, this.context = a.context);
      return e.makeArray(a, this);
    }, selector:"", jquery:"1.6", length:0, size:function() {
      return this.length;
    }, toArray:function() {
      return Z.call(this, 0);
    }, get:function(a) {
      return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
    }, pushStack:function(a, d, m) {
      var b = this.constructor();
      e.isArray(a) ? oa.apply(b, a) : e.merge(b, a);
      b.prevObject = this;
      b.context = this.context;
      "find" === d ? b.selector = this.selector + (this.selector ? " " : "") + m : d && (b.selector = this.selector + "." + d + "(" + m + ")");
      return b;
    }, each:function(a, d) {
      return e.each(this, a, d);
    }, ready:function(a) {
      e.bindReady();
      x.done(a);
      return this;
    }, eq:function(a) {
      return-1 === a ? this.slice(a) : this.slice(a, +a + 1);
    }, first:function() {
      return this.eq(0);
    }, last:function() {
      return this.eq(-1);
    }, slice:function() {
      return this.pushStack(Z.apply(this, arguments), "slice", Z.call(arguments).join(","));
    }, map:function(a) {
      return this.pushStack(e.map(this, function(e, d) {
        return a.call(e, d, e);
      }));
    }, end:function() {
      return this.prevObject || this.constructor(null);
    }, push:oa, sort:[].sort, splice:[].splice};
    e.fn.init.prototype = e.fn;
    e.extend = e.fn.extend = function() {
      var a, d, m, b, r, q, c = arguments[0] || {}, p = 1, F = arguments.length, f = !1;
      "boolean" == typeof c && (f = c, c = arguments[1] || {}, p = 2);
      "object" != typeof c && !e.isFunction(c) && (c = {});
      for (F === p && (c = this, --p);p < F;p++) {
        if (null != (a = arguments[p])) {
          for (d in a) {
            m = c[d], b = a[d], c !== b && (f && b && (e.isPlainObject(b) || (r = e.isArray(b))) ? (r ? (r = !1, q = m && e.isArray(m) ? m : []) : q = m && e.isPlainObject(m) ? m : {}, c[d] = e.extend(f, q, b)) : b !== g && (c[d] = b));
          }
        }
      }
      return c;
    };
    e.extend({noConflict:function(a) {
      c.$ === e && (c.$ = b);
      a && c.jQuery === e && (c.jQuery = d);
      return e;
    }, isReady:!1, readyWait:1, holdReady:function(a) {
      a ? e.readyWait++ : e.ready(!0);
    }, ready:function(a) {
      if (!0 === a && !--e.readyWait || !0 !== a && !e.isReady) {
        if (!u.body) {
          return setTimeout(e.ready, 1);
        }
        e.isReady = !0;
        !0 !== a && 0 < --e.readyWait || (x.resolveWith(u, [e]), e.fn.trigger && e(u).trigger("ready").unbind("ready"));
      }
    }, bindReady:function() {
      if (!x) {
        x = e._Deferred();
        if ("complete" === u.readyState) {
          return setTimeout(e.ready, 1);
        }
        if (u.addEventListener) {
          u.addEventListener("DOMContentLoaded", M, !1), c.addEventListener("load", e.ready, !1);
        } else {
          if (u.attachEvent) {
            u.attachEvent("onreadystatechange", M);
            c.attachEvent("onload", e.ready);
            var d = !1;
            try {
              d = null == c.frameElement;
            } catch (m) {
            }
            u.documentElement.doScroll && d && a();
          }
        }
      }
    }, isFunction:function(a) {
      return "function" === e.type(a);
    }, isArray:Array.isArray || function(a) {
      return "array" === e.type(a);
    }, isWindow:function(a) {
      return a && "object" == typeof a && "setInterval" in a;
    }, isNaN:function(a) {
      return null == a || !k.test(a) || isNaN(a);
    }, type:function(a) {
      return null == a ? String(a) : Ja[pb.call(a)] || "object";
    }, isPlainObject:function(a) {
      if (!a || "object" !== e.type(a) || a.nodeType || e.isWindow(a) || a.constructor && !na.call(a, "constructor") && !na.call(a.constructor.prototype, "isPrototypeOf")) {
        return!1;
      }
      for (var d in a) {
      }
      return d === g || na.call(a, d);
    }, isEmptyObject:function(a) {
      for (var e in a) {
        return!1;
      }
      return!0;
    }, error:function(a) {
      throw a;
    }, parseJSON:function(a) {
      if ("string" != typeof a || !a) {
        return null;
      }
      a = e.trim(a);
      if (c.JSON && c.JSON.parse) {
        return c.JSON.parse(a);
      }
      if (t.test(a.replace(v, "@").replace(Q, "]").replace(w, ""))) {
        return(new Function("return " + a))();
      }
      e.error("Invalid JSON: " + a);
    }, parseXML:function(a, d, m) {
      c.DOMParser ? (m = new DOMParser, d = m.parseFromString(a, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(a));
      (m = d.documentElement) && m.nodeName && "parsererror" !== m.nodeName || e.error("Invalid XML: " + a);
      return d;
    }, noop:function() {
    }, globalEval:function(a) {
      a && f.test(a) && (c.execScript || function(a) {
        c.eval.call(c, a);
      })(a);
    }, nodeName:function(a, e) {
      return a.nodeName && a.nodeName.toUpperCase() === e.toUpperCase();
    }, each:function(a, d, m) {
      var b, r = 0, q = a.length, c = q === g || e.isFunction(a);
      if (m) {
        if (c) {
          for (b in a) {
            if (!1 === d.apply(a[b], m)) {
              break;
            }
          }
        } else {
          for (;r < q && !1 !== d.apply(a[r++], m);) {
          }
        }
      } else {
        if (c) {
          for (b in a) {
            if (!1 === d.call(a[b], b, a[b])) {
              break;
            }
          }
        } else {
          for (;r < q && !1 !== d.call(a[r], r, a[r++]);) {
          }
        }
      }
      return a;
    }, trim:Ha ? function(a) {
      return null == a ? "" : Ha.call(a);
    } : function(a) {
      return null == a ? "" : (a + "").replace(h, "").replace(n, "");
    }, makeArray:function(a, d) {
      var m = d || [];
      if (null != a) {
        var b = e.type(a);
        null == a.length || "string" === b || "function" === b || "regexp" === b || e.isWindow(a) ? oa.call(m, a) : e.merge(m, a);
      }
      return m;
    }, inArray:function(a, e) {
      if (Ia) {
        return Ia.call(e, a);
      }
      for (var d = 0, m = e.length;d < m;d++) {
        if (e[d] === a) {
          return d;
        }
      }
      return-1;
    }, merge:function(a, e) {
      var d = a.length, m = 0;
      if ("number" == typeof e.length) {
        for (var b = e.length;m < b;m++) {
          a[d++] = e[m];
        }
      } else {
        for (;e[m] !== g;) {
          a[d++] = e[m++];
        }
      }
      a.length = d;
      return a;
    }, grep:function(a, e, d) {
      var m = [], b;
      d = !!d;
      for (var r = 0, q = a.length;r < q;r++) {
        b = !!e(a[r], r), d !== b && m.push(a[r]);
      }
      return m;
    }, map:function(a, d, m) {
      var b, r, q = [], c = 0, p = a.length;
      if (a instanceof e || p !== g && "number" == typeof p && (0 < p && a[0] && a[p - 1] || 0 === p || e.isArray(a))) {
        for (;c < p;c++) {
          b = d(a[c], c, m), null != b && (q[q.length] = b);
        }
      } else {
        for (r in a) {
          b = d(a[r], r, m), null != b && (q[q.length] = b);
        }
      }
      return q.concat.apply([], q);
    }, guid:1, proxy:function(a, d) {
      if ("string" == typeof d) {
        var m = a[d];
        d = a;
        a = m;
      }
      if (!e.isFunction(a)) {
        return g;
      }
      var b = Z.call(arguments, 2), m = function() {
        return a.apply(d, b.concat(Z.call(arguments)));
      };
      m.guid = a.guid = a.guid || m.guid || e.guid++;
      return m;
    }, access:function(a, d, m, b, r, q) {
      var c = a.length;
      if ("object" == typeof d) {
        for (var p in d) {
          e.access(a, p, d[p], b, r, m);
        }
        return a;
      }
      if (m !== g) {
        b = !q && b && e.isFunction(m);
        for (p = 0;p < c;p++) {
          r(a[p], d, b ? m.call(a[p], p, r(a[p], d)) : m, q);
        }
        return a;
      }
      return c ? r(a[0], d) : g;
    }, now:function() {
      return(new Date).getTime();
    }, uaMatch:function(a) {
      a = a.toLowerCase();
      a = y.exec(a) || z.exec(a) || E.exec(a) || 0 > a.indexOf("compatible") && B.exec(a) || [];
      return{browser:a[1] || "", version:a[2] || "0"};
    }, sub:function() {
      function a(e, d) {
        return new a.fn.init(e, d);
      }
      e.extend(!0, a, this);
      a.superclass = this;
      a.fn = a.prototype = this();
      a.fn.constructor = a;
      a.sub = this.sub;
      a.fn.init = function(m, b) {
        b && b instanceof e && !(b instanceof a) && (b = a(b));
        return e.fn.init.call(this, m, b, d);
      };
      a.fn.init.prototype = a.fn;
      var d = a(u);
      return a;
    }, browser:{}});
    e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, e) {
      Ja["[object " + e + "]"] = e.toLowerCase();
    });
    F = e.uaMatch(F);
    F.browser && (e.browser[F.browser] = !0, e.browser.version = F.version);
    e.browser.webkit && (e.browser.safari = !0);
    f.test("\u00a0") && (h = /^[\s\xA0]+/, n = /[\s\xA0]+$/);
    q = e(u);
    u.addEventListener ? M = function() {
      u.removeEventListener("DOMContentLoaded", M, !1);
      e.ready();
    } : u.attachEvent && (M = function() {
      "complete" === u.readyState && (u.detachEvent("onreadystatechange", M), e.ready());
    });
    return e;
  }(), pa = "done fail isResolved isRejected promise then always pipe".split(" "), Ka = [].slice;
  d.extend({_Deferred:function() {
    var a = [], e, m, b, q = {done:function() {
      if (!b) {
        var m = arguments, c, f, g, h, n;
        e && (n = e, e = 0);
        c = 0;
        for (f = m.length;c < f;c++) {
          g = m[c], h = d.type(g), "array" === h ? q.done.apply(q, g) : "function" === h && a.push(g);
        }
        n && q.resolveWith(n[0], n[1]);
      }
      return this;
    }, resolveWith:function(d, q) {
      if (!b && !e && !m) {
        q = q || [];
        m = 1;
        try {
          for (;a[0];) {
            a.shift().apply(d, q);
          }
        } finally {
          e = [d, q], m = 0;
        }
      }
      return this;
    }, resolve:function() {
      q.resolveWith(this, arguments);
      return this;
    }, isResolved:function() {
      return!!m || !!e;
    }, cancel:function() {
      b = 1;
      a = [];
      return this;
    }};
    return q;
  }, Deferred:function(a) {
    var e = d._Deferred(), m = d._Deferred(), b;
    d.extend(e, {then:function(a, d) {
      e.done(a).fail(d);
      return this;
    }, always:function() {
      return e.done.apply(e, arguments).fail.apply(this, arguments);
    }, fail:m.done, rejectWith:m.resolveWith, reject:m.resolve, isRejected:m.isResolved, pipe:function(a, m) {
      return d.Deferred(function(b) {
        d.each({done:[a, "resolve"], fail:[m, "reject"]}, function(a, m) {
          var r = m[0], q = m[1], c;
          d.isFunction(r) ? e[a](function() {
            c = r.apply(this, arguments);
            d.isFunction(c.promise) ? c.promise().then(b.resolve, b.reject) : b[q](c);
          }) : e[a](b[q]);
        });
      }).promise();
    }, promise:function(a) {
      if (null == a) {
        if (b) {
          return b;
        }
        b = a = {};
      }
      for (var d = pa.length;d--;) {
        a[pa[d]] = e[pa[d]];
      }
      return a;
    }});
    e.done(m.cancel).fail(e.cancel);
    delete e.cancel;
    a && a.call(e, e);
    return e;
  }, when:function(a) {
    function e(a) {
      return function(e) {
        m[a] = 1 < arguments.length ? Ka.call(arguments, 0) : e;
        --p || f.resolveWith(f, Ka.call(m, 0));
      };
    }
    var m = arguments, b = 0, c = m.length, p = c, f = 1 >= c && a && d.isFunction(a.promise) ? a : d.Deferred();
    if (1 < c) {
      for (;b < c;b++) {
        m[b] && d.isFunction(m[b].promise) ? m[b].promise().then(e(b), f.reject) : --p;
      }
      p || f.resolveWith(f, m);
    } else {
      f !== a && f.resolveWith(f, c ? [a] : []);
    }
    return f.promise();
  }});
  d.support = function() {
    var a = u.createElement("div"), e, d, b, c, p, f, g;
    a.setAttribute("className", "t");
    a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    e = a.getElementsByTagName("*");
    d = a.getElementsByTagName("a")[0];
    if (!e || !e.length || !d) {
      return{};
    }
    b = u.createElement("select");
    c = b.appendChild(u.createElement("option"));
    e = a.getElementsByTagName("input")[0];
    f = {leadingWhitespace:3 === a.firstChild.nodeType, tbody:!a.getElementsByTagName("tbody").length, htmlSerialize:!!a.getElementsByTagName("link").length, style:/top/.test(d.getAttribute("style")), hrefNormalized:"/a" === d.getAttribute("href"), opacity:/^0.55$/.test(d.style.opacity), cssFloat:!!d.style.cssFloat, checkOn:"on" === e.value, optSelected:c.selected, getSetAttribute:"t" !== a.className, submitBubbles:!0, changeBubbles:!0, focusinBubbles:!1, deleteExpando:!0, noCloneEvent:!0, inlineBlockNeedsLayout:!1, 
    shrinkWrapBlocks:!1, reliableMarginRight:!0};
    e.checked = !0;
    f.noCloneChecked = e.cloneNode(!0).checked;
    b.disabled = !0;
    f.optDisabled = !c.disabled;
    try {
      delete a.test;
    } catch (h) {
      f.deleteExpando = !1;
    }
    !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function D() {
      f.noCloneEvent = !1;
      a.detachEvent("onclick", D);
    }), a.cloneNode(!0).fireEvent("onclick"));
    e = u.createElement("input");
    e.value = "t";
    e.setAttribute("type", "radio");
    f.radioValue = "t" === e.value;
    e.setAttribute("checked", "checked");
    a.appendChild(e);
    d = u.createDocumentFragment();
    d.appendChild(a.firstChild);
    f.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked;
    a.innerHTML = "";
    a.style.width = a.style.paddingLeft = "1px";
    d = u.createElement("body");
    b = {visibility:"hidden", width:0, height:0, border:0, margin:0, background:"none"};
    for (g in b) {
      d.style[g] = b[g];
    }
    d.appendChild(a);
    u.documentElement.appendChild(d);
    f.appendChecked = e.checked;
    f.boxModel = 2 === a.offsetWidth;
    "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, f.inlineBlockNeedsLayout = 2 === a.offsetWidth, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", f.shrinkWrapBlocks = 2 !== a.offsetWidth);
    a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
    b = a.getElementsByTagName("td");
    e = 0 === b[0].offsetHeight;
    b[0].style.display = "";
    b[1].style.display = "none";
    f.reliableHiddenOffsets = e && 0 === b[0].offsetHeight;
    a.innerHTML = "";
    u.defaultView && u.defaultView.getComputedStyle && (p = u.createElement("div"), p.style.width = "0", p.style.marginRight = "0", a.appendChild(p), f.reliableMarginRight = 0 === (parseInt(u.defaultView.getComputedStyle(p, null).marginRight, 10) || 0));
    d.innerHTML = "";
    u.documentElement.removeChild(d);
    if (a.attachEvent) {
      for (g in{submit:1, change:1, focusin:1}) {
        p = "on" + g, (e = p in a) || (a.setAttribute(p, "return;"), e = "function" == typeof a[p]), f[g + "Bubbles"] = e;
      }
    }
    return f;
  }();
  d.boxModel = d.support.boxModel;
  var mb = /^(?:\{.*\}|\[.*\])$/, lb = /([a-z])([A-Z])/g;
  d.extend({cache:{}, uuid:0, expando:"jQuery" + (d.fn.jquery + Math.random()).replace(/\D/g, ""), noData:{embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet:!0}, hasData:function(a) {
    a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
    return!!a && !ma(a);
  }, data:function(a, e, m, b) {
    if (d.acceptData(a)) {
      var c = d.expando, p = "string" == typeof e, f = a.nodeType, h = f ? d.cache : a, n = f ? a[d.expando] : a[d.expando] && d.expando;
      if (n && (!b || !n || h[n][c]) || !p || m !== g) {
        n || (f ? a[d.expando] = n = ++d.uuid : n = d.expando);
        h[n] || (h[n] = {}, f || (h[n].toJSON = d.noop));
        if ("object" == typeof e || "function" == typeof e) {
          b ? h[n][c] = d.extend(h[n][c], e) : h[n] = d.extend(h[n], e);
        }
        a = h[n];
        b && (a[c] || (a[c] = {}), a = a[c]);
        m !== g && (a[e] = m);
        return "events" !== e || a[e] ? p ? a[e] : a : a[c] && a[c].events;
      }
    }
  }, removeData:function(a, e, m) {
    if (d.acceptData(a)) {
      var b = d.expando, q = a.nodeType, p = q ? d.cache : a, f = q ? a[d.expando] : d.expando;
      if (p[f]) {
        if (e) {
          var g = m ? p[f][b] : p[f];
          if (g && (delete g[e], !ma(g))) {
            return;
          }
        }
        if (m && (delete p[f][b], !ma(p[f]))) {
          return;
        }
        e = p[f][b];
        d.support.deleteExpando || p != c ? delete p[f] : p[f] = null;
        e ? (p[f] = {}, q || (p[f].toJSON = d.noop), p[f][b] = e) : q && (d.support.deleteExpando ? delete a[d.expando] : a.removeAttribute ? a.removeAttribute(d.expando) : a[d.expando] = null);
      }
    }
  }, _data:function(a, e, b) {
    return d.data(a, e, b, !0);
  }, acceptData:function(a) {
    if (a.nodeName) {
      var e = d.noData[a.nodeName.toLowerCase()];
      if (e) {
        return!0 !== e && a.getAttribute("classid") === e;
      }
    }
    return!0;
  }});
  d.fn.extend({data:function(a, e) {
    var b = null;
    if ("undefined" == typeof a) {
      if (this.length && (b = d.data(this[0]), 1 === this[0].nodeType)) {
        for (var r = this[0].attributes, c, p = 0, f = r.length;p < f;p++) {
          c = r[p].name, 0 === c.indexOf("data-") && (c = d.camelCase(c.substring(5)), Ga(this[0], c, b[c]));
        }
      }
      return b;
    }
    if ("object" == typeof a) {
      return this.each(function() {
        d.data(this, a);
      });
    }
    var h = a.split(".");
    h[1] = h[1] ? "." + h[1] : "";
    return e === g ? (b = this.triggerHandler("getData" + h[1] + "!", [h[0]]), b === g && this.length && (b = d.data(this[0], a), b = Ga(this[0], a, b)), b === g && h[1] ? this.data(h[0]) : b) : this.each(function() {
      var b = d(this), m = [h[0], e];
      b.triggerHandler("setData" + h[1] + "!", m);
      d.data(this, a, e);
      b.triggerHandler("changeData" + h[1] + "!", m);
    });
  }, removeData:function(a) {
    return this.each(function() {
      d.removeData(this, a);
    });
  }});
  d.extend({_mark:function(a, e) {
    a && (e = (e || "fx") + "mark", d.data(a, e, (d.data(a, e, g, !0) || 0) + 1, !0));
  }, _unmark:function(a, e, b) {
    !0 !== a && (b = e, e = a, a = !1);
    if (e) {
      b = b || "fx";
      var r = b + "mark";
      (a = a ? 0 : (d.data(e, r, g, !0) || 1) - 1) ? d.data(e, r, a, !0) : (d.removeData(e, r, !0), Fa(e, b, "mark"));
    }
  }, queue:function(a, e, b) {
    if (a) {
      e = (e || "fx") + "queue";
      var r = d.data(a, e, g, !0);
      b && (!r || d.isArray(b) ? r = d.data(a, e, d.makeArray(b), !0) : r.push(b));
      return r || [];
    }
  }, dequeue:function(a, e) {
    e = e || "fx";
    var b = d.queue(a, e), r = b.shift();
    "inprogress" === r && (r = b.shift());
    r && ("fx" === e && b.unshift("inprogress"), r.call(a, function() {
      d.dequeue(a, e);
    }));
    b.length || (d.removeData(a, e + "queue", !0), Fa(a, e, "queue"));
  }});
  d.fn.extend({queue:function(a, e) {
    "string" != typeof a && (e = a, a = "fx");
    return e === g ? d.queue(this[0], a) : this.each(function() {
      var b = d.queue(this, a, e);
      "fx" === a && "inprogress" !== b[0] && d.dequeue(this, a);
    });
  }, dequeue:function(a) {
    return this.each(function() {
      d.dequeue(this, a);
    });
  }, delay:function(a, e) {
    a = d.fx ? d.fx.speeds[a] || a : a;
    e = e || "fx";
    return this.queue(e, function() {
      var b = this;
      setTimeout(function() {
        d.dequeue(b, e);
      }, a);
    });
  }, clearQueue:function(a) {
    return this.queue(a || "fx", []);
  }, promise:function(a, e) {
    function b() {
      --f || r.resolveWith(c, [c]);
    }
    "string" != typeof a && (a = g);
    a = a || "fx";
    for (var r = d.Deferred(), c = this, p = c.length, f = 1, h = a + "defer", n = a + "queue", k = a + "mark";p--;) {
      if (tmp = d.data(c[p], h, g, !0) || (d.data(c[p], n, g, !0) || d.data(c[p], k, g, !0)) && d.data(c[p], h, d._Deferred(), !0)) {
        f++, tmp.done(b);
      }
    }
    b();
    return r.promise();
  }});
  var La = /[\n\t\r]/g, qa = /\s+/, qb = /\r/g, rb = /^(?:button|input)$/i, sb = /^(?:button|input|object|select|textarea)$/i, tb = /^a(?:rea)?$/i, Ma = /^(?:data-|aria-)/, ub = /\:/, ra;
  d.fn.extend({attr:function(a, e) {
    return d.access(this, a, e, !0, d.attr);
  }, removeAttr:function(a) {
    return this.each(function() {
      d.removeAttr(this, a);
    });
  }, prop:function(a, e) {
    return d.access(this, a, e, !0, d.prop);
  }, removeProp:function(a) {
    return this.each(function() {
      try {
        this[a] = g, delete this[a];
      } catch (e) {
      }
    });
  }, addClass:function(a) {
    if (d.isFunction(a)) {
      return this.each(function(e) {
        var b = d(this);
        b.addClass(a.call(this, e, b.attr("class") || ""));
      });
    }
    if (a && "string" == typeof a) {
      for (var e = (a || "").split(qa), b = 0, r = this.length;b < r;b++) {
        var c = this[b];
        if (1 === c.nodeType) {
          if (c.className) {
            for (var p = " " + c.className + " ", f = c.className, g = 0, h = e.length;g < h;g++) {
              0 > p.indexOf(" " + e[g] + " ") && (f += " " + e[g]);
            }
            c.className = d.trim(f);
          } else {
            c.className = a;
          }
        }
      }
    }
    return this;
  }, removeClass:function(a) {
    if (d.isFunction(a)) {
      return this.each(function(e) {
        var b = d(this);
        b.removeClass(a.call(this, e, b.attr("class")));
      });
    }
    if (a && "string" == typeof a || a === g) {
      for (var e = (a || "").split(qa), b = 0, c = this.length;b < c;b++) {
        var q = this[b];
        if (1 === q.nodeType && q.className) {
          if (a) {
            for (var p = (" " + q.className + " ").replace(La, " "), f = 0, h = e.length;f < h;f++) {
              p = p.replace(" " + e[f] + " ", " ");
            }
            q.className = d.trim(p);
          } else {
            q.className = "";
          }
        }
      }
    }
    return this;
  }, toggleClass:function(a, e) {
    var b = typeof a, c = "boolean" == typeof e;
    return d.isFunction(a) ? this.each(function(b) {
      var m = d(this);
      m.toggleClass(a.call(this, b, m.attr("class"), e), e);
    }) : this.each(function() {
      if ("string" === b) {
        for (var q, p = 0, f = d(this), g = e, h = a.split(qa);q = h[p++];) {
          g = c ? g : !f.hasClass(q), f[g ? "addClass" : "removeClass"](q);
        }
      } else {
        if ("undefined" === b || "boolean" === b) {
          this.className && d._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : d._data(this, "__className__") || "";
        }
      }
    });
  }, hasClass:function(a) {
    a = " " + a + " ";
    for (var e = 0, d = this.length;e < d;e++) {
      if (-1 < (" " + this[e].className + " ").replace(La, " ").indexOf(a)) {
        return!0;
      }
    }
    return!1;
  }, val:function(a) {
    var e, b, c = this[0];
    if (!arguments.length) {
      return c ? (e = d.valHooks[c.nodeName.toLowerCase()] || d.valHooks[c.type]) && "get" in e && (b = e.get(c, "value")) !== g ? b : (c.value || "").replace(qb, "") : g;
    }
    var q = d.isFunction(a);
    return this.each(function(b) {
      var m = d(this), c;
      1 === this.nodeType && (q ? c = a.call(this, b, m.val()) : c = a, null == c ? c = "" : "number" == typeof c ? c += "" : d.isArray(c) && (c = d.map(c, function(a) {
        return null == a ? "" : a + "";
      })), e = d.valHooks[this.nodeName.toLowerCase()] || d.valHooks[this.type], !e || "set" in e && e.set(this, c, "value") === g) && (this.value = c);
    });
  }});
  d.extend({valHooks:{option:{get:function(a) {
    var e = a.attributes.value;
    return!e || e.specified ? a.value : a.text;
  }}, select:{get:function(a) {
    var e = a.selectedIndex, b = [], c = a.options;
    a = "select-one" === a.type;
    if (0 > e) {
      return null;
    }
    for (var q = a ? e : 0, p = a ? e + 1 : c.length;q < p;q++) {
      var f = c[q];
      if (!(!f.selected || (d.support.optDisabled ? f.disabled : null !== f.getAttribute("disabled")) || f.parentNode.disabled && d.nodeName(f.parentNode, "optgroup"))) {
        value = d(f).val();
        if (a) {
          return value;
        }
        b.push(value);
      }
    }
    return a && !b.length && c.length ? d(c[e]).val() : b;
  }, set:function(a, e) {
    var b = d.makeArray(e);
    d(a).find("option").each(function() {
      this.selected = 0 <= d.inArray(d(this).val(), b);
    });
    b.length || (a.selectedIndex = -1);
    return b;
  }}}, attrFn:{val:!0, css:!0, html:!0, text:!0, data:!0, width:!0, height:!0, offset:!0}, attrFix:{tabindex:"tabIndex", readonly:"readOnly"}, attr:function(a, e, b, c) {
    var q = a.nodeType;
    if (!a || 3 === q || 8 === q || 2 === q) {
      return g;
    }
    if (c && e in d.attrFn) {
      return d(a)[e](b);
    }
    var f;
    e = (q = 1 !== q || !d.isXMLDoc(a)) && d.attrFix[e] || e;
    c = d.attrHooks[e] || (ra && (d.nodeName(a, "form") || ub.test(e)) ? ra : g);
    if (b !== g) {
      if (null === b || !1 === b && !Ma.test(e)) {
        return d.removeAttr(a, e), g;
      }
      if (c && "set" in c && q && (f = c.set(a, b, e)) !== g) {
        return f;
      }
      !0 === b && !Ma.test(e) && (b = e);
      a.setAttribute(e, "" + b);
      return b;
    }
    if (c && "get" in c && q) {
      return c.get(a, e);
    }
    f = a.getAttribute(e);
    return null === f ? g : f;
  }, removeAttr:function(a, e) {
    1 === a.nodeType && (e = d.attrFix[e] || e, d.support.getSetAttribute ? a.removeAttribute(e) : (d.attr(a, e, ""), a.removeAttributeNode(a.getAttributeNode(e))));
  }, attrHooks:{type:{set:function(a, e) {
    if (rb.test(a.nodeName) && a.parentNode) {
      d.error("type property can't be changed");
    } else {
      if (!d.support.radioValue && "radio" === e && d.nodeName(a, "input")) {
        var b = a.getAttribute("value");
        a.setAttribute("type", e);
        b && (a.value = b);
        return e;
      }
    }
  }}, tabIndex:{get:function(a) {
    var e = a.getAttributeNode("tabIndex");
    return e && e.specified ? parseInt(e.value, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : g;
  }}}, propFix:{}, prop:function(a, e, b) {
    var c = a.nodeType;
    if (!a || 3 === c || 8 === c || 2 === c) {
      return g;
    }
    var q;
    e = (1 !== c || !d.isXMLDoc(a)) && d.propFix[e] || e;
    c = d.propHooks[e];
    return b !== g ? c && "set" in c && (q = c.set(a, b, e)) !== g ? q : a[e] = b : c && "get" in c && (q = c.get(a, e)) !== g ? q : a[e];
  }, propHooks:{}});
  d.support.getSetAttribute || (d.attrFix = d.extend(d.attrFix, {"for":"htmlFor", "class":"className", maxlength:"maxLength", cellspacing:"cellSpacing", cellpadding:"cellPadding", rowspan:"rowSpan", colspan:"colSpan", usemap:"useMap", frameborder:"frameBorder"}), ra = d.attrHooks.name = d.attrHooks.value = d.valHooks.button = {get:function(a, e) {
    var b;
    return "value" !== e || d.nodeName(a, "button") ? (b = a.getAttributeNode(e)) && b.specified ? b.nodeValue : g : a.getAttribute(e);
  }, set:function(a, e, d) {
    if (a = a.getAttributeNode(d)) {
      return a.nodeValue = e;
    }
  }}, d.each(["width", "height"], function(a, e) {
    d.attrHooks[e] = d.extend(d.attrHooks[e], {set:function(a, d) {
      if ("" === d) {
        return a.setAttribute(e, "auto"), d;
      }
    }});
  }));
  d.support.hrefNormalized || d.each(["href", "src", "width", "height"], function(a, e) {
    d.attrHooks[e] = d.extend(d.attrHooks[e], {get:function(a) {
      a = a.getAttribute(e, 2);
      return null === a ? g : a;
    }});
  });
  d.support.style || (d.attrHooks.style = {get:function(a) {
    return a.style.cssText.toLowerCase() || g;
  }, set:function(a, e) {
    return a.style.cssText = "" + e;
  }});
  d.support.optSelected || (d.propHooks.selected = d.extend(d.propHooks.selected, {get:function(a) {
    a = a.parentNode;
    a && (a.selectedIndex, a.parentNode && a.parentNode.selectedIndex);
  }}));
  d.support.checkOn || d.each(["radio", "checkbox"], function() {
    d.valHooks[this] = {get:function(a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    }};
  });
  d.each(["radio", "checkbox"], function() {
    d.valHooks[this] = d.extend(d.valHooks[this], {set:function(a, e) {
      if (d.isArray(e)) {
        return a.checked = 0 <= d.inArray(d(a).val(), e);
      }
    }});
  });
  var la = /\.(.*)$/, sa = /^(?:textarea|input|select)$/i, ib = /\./g, jb = / /g, vb = /[^\w\s.|`]/g, wb = function(a) {
    return a.replace(vb, "\\$&");
  };
  d.event = {add:function(a, e, b, c) {
    if (3 !== a.nodeType && 8 !== a.nodeType) {
      if (!1 === b) {
        b = L;
      } else {
        if (!b) {
          return;
        }
      }
      var q, f;
      b.handler && (q = b, b = q.handler);
      b.guid || (b.guid = d.guid++);
      if (f = d._data(a)) {
        var h = f.events, n = f.handle;
        h || (f.events = h = {});
        n || (f.handle = n = function(a) {
          return "undefined" == typeof d || a && d.event.triggered === a.type ? g : d.event.handle.apply(n.elem, arguments);
        });
        n.elem = a;
        e = e.split(" ");
        for (var k, l = 0, D;k = e[l++];) {
          f = q ? d.extend({}, q) : {handler:b, data:c};
          -1 < k.indexOf(".") ? (D = k.split("."), k = D.shift(), f.namespace = D.slice(0).sort().join(".")) : (D = [], f.namespace = "");
          f.type = k;
          f.guid || (f.guid = b.guid);
          var t = h[k], v = d.event.special[k] || {};
          t || (t = h[k] = [], v.setup && !1 !== v.setup.call(a, c, D, n) || (a.addEventListener ? a.addEventListener(k, n, !1) : a.attachEvent && a.attachEvent("on" + k, n)));
          v.add && (v.add.call(a, f), f.handler.guid || (f.handler.guid = b.guid));
          t.push(f);
          d.event.global[k] = !0;
        }
        a = null;
      }
    }
  }, global:{}, remove:function(a, e, b, c) {
    if (3 !== a.nodeType && 8 !== a.nodeType) {
      !1 === b && (b = L);
      var f, p, h = 0, n, k, l, D, t, v, u = d.hasData(a) && d._data(a), w = u && u.events;
      if (u && w) {
        if (e && e.type && (b = e.handler, e = e.type), !e || "string" == typeof e && "." === e.charAt(0)) {
          for (f in e = e || "", w) {
            d.event.remove(a, f + e);
          }
        } else {
          for (e = e.split(" ");f = e[h++];) {
            if (D = f, n = 0 > f.indexOf("."), k = [], n || (k = f.split("."), f = k.shift(), l = new RegExp("(^|\\.)" + d.map(k.slice(0).sort(), wb).join("\\.(?:.*\\.)?") + "(\\.|$)")), t = w[f]) {
              if (b) {
                D = d.event.special[f] || {};
                for (p = c || 0;p < t.length;p++) {
                  if (v = t[p], b.guid === v.guid) {
                    if (n || l.test(v.namespace)) {
                      null == c && t.splice(p--, 1), D.remove && D.remove.call(a, v);
                    }
                    if (null != c) {
                      break;
                    }
                  }
                }
                if (0 === t.length || null != c && 1 === t.length) {
                  D.teardown && !1 !== D.teardown.call(a, k) || d.removeEvent(a, f, u.handle), delete w[f];
                }
              } else {
                for (p = 0;p < t.length;p++) {
                  if (v = t[p], n || l.test(v.namespace)) {
                    d.event.remove(a, D, v.handler, p), t.splice(p--, 1);
                  }
                }
              }
            }
          }
          d.isEmptyObject(w) && ((e = u.handle) && (e.elem = null), delete u.events, delete u.handle, d.isEmptyObject(u) && d.removeData(a, g, !0));
        }
      }
    }
  }, customEvent:{getData:!0, setData:!0, changeData:!0}, trigger:function(a, e, b, r) {
    var f = a.type || a, p = [], h;
    0 <= f.indexOf("!") && (f = f.slice(0, -1), h = !0);
    0 <= f.indexOf(".") && (p = f.split("."), f = p.shift(), p.sort());
    if (b && !d.event.customEvent[f] || d.event.global[f]) {
      a = "object" == typeof a ? a[d.expando] ? a : new d.Event(f, a) : new d.Event(f);
      a.type = f;
      a.exclusive = h;
      a.namespace = p.join(".");
      a.namespace_re = new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.)?") + "(\\.|$)");
      if (r || !b) {
        a.preventDefault(), a.stopPropagation();
      }
      if (!b) {
        d.each(d.cache, function() {
          var b = this[d.expando];
          b && b.events && b.events[f] && d.event.trigger(a, e, b.handle.elem);
        });
      } else {
        if (3 !== b.nodeType && 8 !== b.nodeType) {
          a.result = g;
          a.target = b;
          e = e ? d.makeArray(e) : [];
          e.unshift(a);
          p = b;
          r = 0 > f.indexOf(":") ? "on" + f : "";
          do {
            h = d._data(p, "handle"), a.currentTarget = p, h && h.apply(p, e), r && d.acceptData(p) && p[r] && !1 === p[r].apply(p, e) && (a.result = !1, a.preventDefault()), p = p.parentNode || p.ownerDocument || p === a.target.ownerDocument && c;
          } while (p && !a.isPropagationStopped());
          if (!a.isDefaultPrevented()) {
            var n, p = d.event.special[f] || {};
            if (!(p._default && !1 !== p._default.call(b.ownerDocument, a) || "click" === f && d.nodeName(b, "a")) && d.acceptData(b)) {
              try {
                r && b[f] && (n = b[r], n && (b[r] = null), d.event.triggered = f, b[f]());
              } catch (k) {
              }
              n && (b[r] = n);
              d.event.triggered = g;
            }
          }
          return a.result;
        }
      }
    }
  }, handle:function(a) {
    a = d.event.fix(a || c.event);
    var e = ((d._data(this, "events") || {})[a.type] || []).slice(0), b = !a.exclusive && !a.namespace, f = Array.prototype.slice.call(arguments, 0);
    f[0] = a;
    a.currentTarget = this;
    for (var q = 0, p = e.length;q < p;q++) {
      var h = e[q];
      if (b || a.namespace_re.test(h.namespace)) {
        if (a.handler = h.handler, a.data = h.data, a.handleObj = h, h = h.handler.apply(this, f), h !== g && (a.result = h, !1 === h && (a.preventDefault(), a.stopPropagation())), a.isImmediatePropagationStopped()) {
          break;
        }
      }
    }
    return a.result;
  }, props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix:function(a) {
    if (a[d.expando]) {
      return a;
    }
    var e = a;
    a = d.Event(e);
    for (var b = this.props.length, c;b;) {
      c = this.props[--b], a[c] = e[c];
    }
    a.target || (a.target = a.srcElement || u);
    3 === a.target.nodeType && (a.target = a.target.parentNode);
    !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
    null == a.pageX && null != a.clientX && (b = a.target.ownerDocument || u, e = b.documentElement, b = b.body, a.pageX = a.clientX + (e && e.scrollLeft || b && b.scrollLeft || 0) - (e && e.clientLeft || b && b.clientLeft || 0), a.pageY = a.clientY + (e && e.scrollTop || b && b.scrollTop || 0) - (e && e.clientTop || b && b.clientTop || 0));
    null != a.which || null == a.charCode && null == a.keyCode || (a.which = null != a.charCode ? a.charCode : a.keyCode);
    !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey);
    !a.which && a.button !== g && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
    return a;
  }, guid:1E8, proxy:d.proxy, special:{ready:{setup:d.bindReady, teardown:d.noop}, live:{add:function(a) {
    d.event.add(this, da(a.origType, a.selector), d.extend({}, a, {handler:kb, guid:a.handler.guid}));
  }, remove:function(a) {
    d.event.remove(this, da(a.origType, a.selector), a);
  }}, beforeunload:{setup:function(a, e, b) {
    d.isWindow(this) && (this.onbeforeunload = b);
  }, teardown:function(a, e) {
    this.onbeforeunload === e && (this.onbeforeunload = null);
  }}}};
  d.removeEvent = u.removeEventListener ? function(a, e, b) {
    a.removeEventListener && a.removeEventListener(e, b, !1);
  } : function(a, e, b) {
    a.detachEvent && a.detachEvent("on" + e, b);
  };
  d.Event = function(a, e) {
    if (!this.preventDefault) {
      return new d.Event(a, e);
    }
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || !1 === a.returnValue || a.getPreventDefault && a.getPreventDefault() ? ea : L) : this.type = a;
    e && d.extend(this, e);
    this.timeStamp = d.now();
    this[d.expando] = !0;
  };
  d.Event.prototype = {preventDefault:function() {
    this.isDefaultPrevented = ea;
    var a = this.originalEvent;
    !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
  }, stopPropagation:function() {
    this.isPropagationStopped = ea;
    var a = this.originalEvent;
    !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
  }, stopImmediatePropagation:function() {
    this.isImmediatePropagationStopped = ea;
    this.stopPropagation();
  }, isDefaultPrevented:L, isPropagationStopped:L, isImmediatePropagationStopped:L};
  var Na = function(a) {
    var e = a.relatedTarget;
    try {
      if (!e || e === u || e.parentNode) {
        for (;e && e !== this;) {
          e = e.parentNode;
        }
        e !== this && (a.type = a.data, d.event.handle.apply(this, arguments));
      }
    } catch (b) {
    }
  }, Oa = function(a) {
    a.type = a.data;
    d.event.handle.apply(this, arguments);
  };
  d.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function(a, e) {
    d.event.special[a] = {setup:function(b) {
      d.event.add(this, e, b && b.selector ? Oa : Na, a);
    }, teardown:function(a) {
      d.event.remove(this, e, a && a.selector ? Oa : Na);
    }};
  });
  d.support.submitBubbles || (d.event.special.submit = {setup:function(a, e) {
    if (d.nodeName(this, "form")) {
      return!1;
    }
    d.event.add(this, "click.specialSubmit", function(a) {
      var e = a.target, b = e.type;
      ("submit" === b || "image" === b) && d(e).closest("form").length && Ea("submit", this, arguments);
    });
    d.event.add(this, "keypress.specialSubmit", function(a) {
      var e = a.target, b = e.type;
      ("text" === b || "password" === b) && d(e).closest("form").length && 13 === a.keyCode && Ea("submit", this, arguments);
    });
  }, teardown:function(a) {
    d.event.remove(this, ".specialSubmit");
  }});
  if (!d.support.changeBubbles) {
    var aa, Pa = function(a) {
      var e = a.type, b = a.value;
      "radio" === e || "checkbox" === e ? b = a.checked : "select-multiple" === e ? b = -1 < a.selectedIndex ? d.map(a.options, function(a) {
        return a.selected;
      }).join("-") : "" : d.nodeName(a, "select") && (b = a.selectedIndex);
      return b;
    }, fa = function(a, e) {
      var b = a.target, c, f;
      sa.test(b.nodeName) && !b.readOnly && (c = d._data(b, "_change_data"), f = Pa(b), "focusout" === a.type && "radio" === b.type || d._data(b, "_change_data", f), c === g || f === c || null == c && !f || (a.type = "change", a.liveFired = g, d.event.trigger(a, e, b)));
    };
    d.event.special.change = {filters:{focusout:fa, beforedeactivate:fa, click:function(a) {
      var e = a.target, b = d.nodeName(e, "input") ? e.type : "";
      ("radio" === b || "checkbox" === b || d.nodeName(e, "select")) && fa.call(this, a);
    }, keydown:function(a) {
      var e = a.target, b = d.nodeName(e, "input") ? e.type : "";
      (13 === a.keyCode && !d.nodeName(e, "textarea") || 32 === a.keyCode && ("checkbox" === b || "radio" === b) || "select-multiple" === b) && fa.call(this, a);
    }, beforeactivate:function(a) {
      a = a.target;
      d._data(a, "_change_data", Pa(a));
    }}, setup:function(a, e) {
      if ("file" === this.type) {
        return!1;
      }
      for (var b in aa) {
        d.event.add(this, b + ".specialChange", aa[b]);
      }
      return sa.test(this.nodeName);
    }, teardown:function(a) {
      d.event.remove(this, ".specialChange");
      return sa.test(this.nodeName);
    }};
    aa = d.event.special.change.filters;
    aa.focus = aa.beforeactivate;
  }
  d.support.focusinBubbles || d.each({focus:"focusin", blur:"focusout"}, function(a, e) {
    function b(a) {
      var c = d.event.fix(a);
      c.type = e;
      c.originalEvent = {};
      d.event.trigger(c, null, c.target);
      c.isDefaultPrevented() && a.preventDefault();
    }
    var c = 0;
    d.event.special[e] = {setup:function() {
      0 === c++ && u.addEventListener(a, b, !0);
    }, teardown:function() {
      0 === --c && u.removeEventListener(a, b, !0);
    }};
  });
  d.each(["bind", "one"], function(a, e) {
    d.fn[e] = function(a, b, c) {
      var f;
      if ("object" == typeof a) {
        for (var h in a) {
          this[e](h, b, a[h], c);
        }
        return this;
      }
      if (2 === arguments.length || !1 === b) {
        c = b, b = g;
      }
      "one" === e ? (f = function(a) {
        d(this).unbind(a, f);
        return c.apply(this, arguments);
      }, f.guid = c.guid || d.guid++) : f = c;
      if ("unload" === a && "one" !== e) {
        this.one(a, b, c);
      } else {
        h = 0;
        for (var n = this.length;h < n;h++) {
          d.event.add(this[h], a, f, b);
        }
      }
      return this;
    };
  });
  d.fn.extend({unbind:function(a, e) {
    if ("object" != typeof a || a.preventDefault) {
      for (var b = 0, c = this.length;b < c;b++) {
        d.event.remove(this[b], a, e);
      }
    } else {
      for (b in a) {
        this.unbind(b, a[b]);
      }
    }
    return this;
  }, delegate:function(a, e, b, d) {
    return this.live(e, b, d, a);
  }, undelegate:function(a, e, b) {
    return 0 === arguments.length ? this.unbind("live") : this.die(e, null, b, a);
  }, trigger:function(a, e) {
    return this.each(function() {
      d.event.trigger(a, e, this);
    });
  }, triggerHandler:function(a, e) {
    if (this[0]) {
      return d.event.trigger(a, e, this[0], !0);
    }
  }, toggle:function(a) {
    var e = arguments, b = a.guid || d.guid++, c = 0, f = function(b) {
      var m = (d.data(this, "lastToggle" + a.guid) || 0) % c;
      d.data(this, "lastToggle" + a.guid, m + 1);
      b.preventDefault();
      return e[m].apply(this, arguments) || !1;
    };
    for (f.guid = b;c < e.length;) {
      e[c++].guid = b;
    }
    return this.click(f);
  }, hover:function(a, e) {
    return this.mouseenter(a).mouseleave(e || a);
  }});
  var ta = {focus:"focusin", blur:"focusout", mouseenter:"mouseover", mouseleave:"mouseout"};
  d.each(["live", "die"], function(a, e) {
    d.fn[e] = function(a, b, c, f) {
      var h = 0, n, k, l = f || this.selector, t = f ? this : d(this.context);
      if ("object" == typeof a && !a.preventDefault) {
        for (n in a) {
          t[e](n, b, a[n], l);
        }
        return this;
      }
      if ("die" === e && !a && f && "." === f.charAt(0)) {
        return t.unbind(f), this;
      }
      if (!1 === b || d.isFunction(b)) {
        c = b || L, b = g;
      }
      for (a = (a || "").split(" ");null != (f = a[h++]);) {
        if (n = la.exec(f), k = "", n && (k = n[0], f = f.replace(la, "")), "hover" === f) {
          a.push("mouseenter" + k, "mouseleave" + k);
        } else {
          if (n = f, ta[f] ? (a.push(ta[f] + k), f += k) : f = (ta[f] || f) + k, "live" === e) {
            k = 0;
            for (var v = t.length;k < v;k++) {
              d.event.add(t[k], "live." + da(f, l), {data:b, selector:l, handler:c, origType:f, origHandler:c, preType:n});
            }
          } else {
            t.unbind("live." + da(f, l), c);
          }
        }
      }
      return this;
    };
  });
  d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(a, e) {
    d.fn[e] = function(a, b) {
      null == b && (b = a, a = null);
      return 0 < arguments.length ? this.bind(e, a, b) : this.trigger(e);
    };
    d.attrFn && (d.attrFn[e] = !0);
  });
  (function() {
    function a(a, b, e, d, c, f) {
      c = 0;
      for (var m = d.length;c < m;c++) {
        var r = d[c];
        if (r) {
          for (var q = !1, r = r[a];r;) {
            if (r.sizcache === e) {
              q = d[r.sizset];
              break;
            }
            if (1 === r.nodeType) {
              if (f || (r.sizcache = e, r.sizset = c), "string" != typeof b) {
                if (r === b) {
                  q = !0;
                  break;
                }
              } else {
                if (0 < l.filter(b, [r]).length) {
                  q = r;
                  break;
                }
              }
            }
            r = r[a];
          }
          d[c] = q;
        }
      }
    }
    function e(a, b, e, d, c, f) {
      c = 0;
      for (var m = d.length;c < m;c++) {
        var r = d[c];
        if (r) {
          for (var q = !1, r = r[a];r;) {
            if (r.sizcache === e) {
              q = d[r.sizset];
              break;
            }
            1 === r.nodeType && !f && (r.sizcache = e, r.sizset = c);
            if (r.nodeName.toLowerCase() === b) {
              q = r;
              break;
            }
            r = r[a];
          }
          d[c] = q;
        }
      }
    }
    var b = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, c = 0, f = Object.prototype.toString, p = !1, h = !0, n = /\\/g, k = /\W/;
    [0, 0].sort(function() {
      h = !1;
      return 0;
    });
    var l = function(a, e, d, c) {
      d = d || [];
      var r = e = e || u;
      if (1 !== e.nodeType && 9 !== e.nodeType) {
        return[];
      }
      if (!a || "string" != typeof a) {
        return d;
      }
      var g, p, h, n, k, W, ya = !0, ca = l.isXML(e), w = [], y = a;
      do {
        if (b.exec(""), g = b.exec(y)) {
          if (y = g[3], w.push(g[1]), g[2]) {
            n = g[3];
            break;
          }
        }
      } while (g);
      if (1 < w.length && v.exec(a)) {
        if (2 === w.length && t.relative[w[0]]) {
          p = G(w[0] + w[1], e);
        } else {
          for (p = t.relative[w[0]] ? [e] : l(w.shift(), e);w.length;) {
            a = w.shift(), t.relative[a] && (a += w.shift()), p = G(a, p);
          }
        }
      } else {
        if (!c && 1 < w.length && 9 === e.nodeType && !ca && t.match.ID.test(w[0]) && !t.match.ID.test(w[w.length - 1]) && (k = l.find(w.shift(), e, ca), e = k.expr ? l.filter(k.expr, k.set)[0] : k.set[0]), e) {
          for (k = c ? {expr:w.pop(), set:H(c)} : l.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !e.parentNode ? e : e.parentNode, ca), p = k.expr ? l.filter(k.expr, k.set) : k.set, 0 < w.length ? h = H(p) : ya = !1;w.length;) {
            g = W = w.pop(), t.relative[W] ? g = w.pop() : W = "", null == g && (g = e), t.relative[W](h, g, ca);
          }
        } else {
          h = [];
        }
      }
      h || (h = p);
      h || l.error(W || a);
      if ("[object Array]" === f.call(h)) {
        if (ya) {
          if (e && 1 === e.nodeType) {
            for (a = 0;null != h[a];a++) {
              h[a] && (!0 === h[a] || 1 === h[a].nodeType && l.contains(e, h[a])) && d.push(p[a]);
            }
          } else {
            for (a = 0;null != h[a];a++) {
              h[a] && 1 === h[a].nodeType && d.push(p[a]);
            }
          }
        } else {
          d.push.apply(d, h);
        }
      } else {
        H(h, d);
      }
      n && (l(n, r, d, c), l.uniqueSort(d));
      return d;
    };
    l.uniqueSort = function(a) {
      if (z && (p = h, a.sort(z), p)) {
        for (var e = 1;e < a.length;e++) {
          a[e] === a[e - 1] && a.splice(e--, 1);
        }
      }
      return a;
    };
    l.matches = function(a, e) {
      return l(a, null, null, e);
    };
    l.matchesSelector = function(a, e) {
      return 0 < l(e, null, null, [a]).length;
    };
    l.find = function(a, e, b) {
      var d;
      if (!a) {
        return[];
      }
      for (var c = 0, f = t.order.length;c < f;c++) {
        var m, r = t.order[c];
        if (m = t.leftMatch[r].exec(a)) {
          var q = m[1];
          m.splice(1, 1);
          if ("\\" !== q.substr(q.length - 1) && (m[1] = (m[1] || "").replace(n, ""), d = t.find[r](m, e, b), null != d)) {
            a = a.replace(t.match[r], "");
            break;
          }
        }
      }
      d || (d = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : []);
      return{set:d, expr:a};
    };
    l.filter = function(a, e, b, d) {
      for (var c, f, m = a, r = [], q = e, p = e && e[0] && l.isXML(e[0]);a && e.length;) {
        for (var h in t.filter) {
          if (null != (c = t.leftMatch[h].exec(a)) && c[2]) {
            var n, k, W = t.filter[h];
            k = c[1];
            f = !1;
            c.splice(1, 1);
            if ("\\" !== k.substr(k.length - 1)) {
              q === r && (r = []);
              if (t.preFilter[h]) {
                if (c = t.preFilter[h](c, q, b, r, d, p), !c) {
                  f = n = !0;
                } else {
                  if (!0 === c) {
                    continue;
                  }
                }
              }
              if (c) {
                for (var v = 0;null != (k = q[v]);v++) {
                  if (k) {
                    n = W(k, c, v, q);
                    var u = d ^ !!n;
                    b && null != n ? u ? f = !0 : q[v] = !1 : u && (r.push(k), f = !0);
                  }
                }
              }
              if (n !== g) {
                b || (q = r);
                a = a.replace(t.match[h], "");
                if (!f) {
                  return[];
                }
                break;
              }
            }
          }
        }
        if (a === m) {
          if (null == f) {
            l.error(a);
          } else {
            break;
          }
        }
        m = a;
      }
      return q;
    };
    l.error = function(a) {
      throw "Syntax error, unrecognized expression: " + a;
    };
    var t = l.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, 
    PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:function(a) {
      return a.getAttribute("href");
    }, type:function(a) {
      return a.getAttribute("type");
    }}, relative:{"+":function(a, e) {
      var b = "string" == typeof e, d = b && !k.test(e), b = b && !d;
      d && (e = e.toLowerCase());
      for (var d = 0, c = a.length, f;d < c;d++) {
        if (f = a[d]) {
          for (;(f = f.previousSibling) && 1 !== f.nodeType;) {
          }
          a[d] = b || f && f.nodeName.toLowerCase() === e ? f || !1 : f === e;
        }
      }
      b && l.filter(e, a, !0);
    }, ">":function(a, e) {
      var b, d = "string" == typeof e, c = 0, f = a.length;
      if (d && !k.test(e)) {
        for (e = e.toLowerCase();c < f;c++) {
          if (b = a[c]) {
            b = b.parentNode, a[c] = b.nodeName.toLowerCase() === e ? b : !1;
          }
        }
      } else {
        for (;c < f;c++) {
          (b = a[c]) && (a[c] = d ? b.parentNode : b.parentNode === e);
        }
        d && l.filter(e, a, !0);
      }
    }, "":function(b, d, f) {
      var m, q = c++, g = a;
      "string" == typeof d && !k.test(d) && (d = d.toLowerCase(), m = d, g = e);
      g("parentNode", d, q, b, m, f);
    }, "~":function(b, d, f) {
      var m, q = c++, g = a;
      "string" == typeof d && !k.test(d) && (d = d.toLowerCase(), m = d, g = e);
      g("previousSibling", d, q, b, m, f);
    }}, find:{ID:function(a, e, b) {
      if ("undefined" != typeof e.getElementById && !b) {
        return(a = e.getElementById(a[1])) && a.parentNode ? [a] : [];
      }
    }, NAME:function(a, e) {
      if ("undefined" != typeof e.getElementsByName) {
        for (var b = [], d = e.getElementsByName(a[1]), c = 0, f = d.length;c < f;c++) {
          d[c].getAttribute("name") === a[1] && b.push(d[c]);
        }
        return 0 === b.length ? null : b;
      }
    }, TAG:function(a, e) {
      if ("undefined" != typeof e.getElementsByTagName) {
        return e.getElementsByTagName(a[1]);
      }
    }}, preFilter:{CLASS:function(a, e, b, d, c, f) {
      a = " " + a[1].replace(n, "") + " ";
      if (f) {
        return a;
      }
      f = 0;
      for (var m;null != (m = e[f]);f++) {
        m && (c ^ (m.className && 0 <= (" " + m.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a)) ? b || d.push(m) : b && (e[f] = !1));
      }
      return!1;
    }, ID:function(a) {
      return a[1].replace(n, "");
    }, TAG:function(a, e) {
      return a[1].replace(n, "").toLowerCase();
    }, CHILD:function(a) {
      if ("nth" === a[1]) {
        a[2] || l.error(a[0]);
        a[2] = a[2].replace(/^\+|\s*/g, "");
        var e = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
        a[2] = e[1] + (e[2] || 1) - 0;
        a[3] = e[3] - 0;
      } else {
        a[2] && l.error(a[0]);
      }
      a[0] = c++;
      return a;
    }, ATTR:function(a, e, b, d, c, f) {
      e = a[1] = a[1].replace(n, "");
      !f && t.attrMap[e] && (a[1] = t.attrMap[e]);
      a[4] = (a[4] || a[5] || "").replace(n, "");
      "~=" === a[2] && (a[4] = " " + a[4] + " ");
      return a;
    }, PSEUDO:function(a, e, d, c, f) {
      if ("not" === a[1]) {
        if (1 < (b.exec(a[3]) || "").length || /^\w/.test(a[3])) {
          a[3] = l(a[3], null, null, e);
        } else {
          return a = l.filter(a[3], e, d, 1 ^ f), d || c.push.apply(c, a), !1;
        }
      } else {
        if (t.match.POS.test(a[0]) || t.match.CHILD.test(a[0])) {
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
    }, has:function(a, e, b) {
      return!!l(b[3], a).length;
    }, header:function(a) {
      return/h\d/i.test(a.nodeName);
    }, text:function(a) {
      var e = a.getAttribute("type"), b = a.type;
      return "input" === a.nodeName.toLowerCase() && "text" === b && (e === b || null === e);
    }, radio:function(a) {
      return "input" === a.nodeName.toLowerCase() && "radio" === a.type;
    }, checkbox:function(a) {
      return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type;
    }, file:function(a) {
      return "input" === a.nodeName.toLowerCase() && "file" === a.type;
    }, password:function(a) {
      return "input" === a.nodeName.toLowerCase() && "password" === a.type;
    }, submit:function(a) {
      var e = a.nodeName.toLowerCase();
      return("input" === e || "button" === e) && "submit" === a.type;
    }, image:function(a) {
      return "input" === a.nodeName.toLowerCase() && "image" === a.type;
    }, reset:function(a) {
      return "input" === a.nodeName.toLowerCase() && "reset" === a.type;
    }, button:function(a) {
      var e = a.nodeName.toLowerCase();
      return "input" === e && "button" === a.type || "button" === e;
    }, input:function(a) {
      return/input|select|textarea|button/i.test(a.nodeName);
    }, focus:function(a) {
      return a === a.ownerDocument.activeElement;
    }}, setFilters:{first:function(a, e) {
      return 0 === e;
    }, last:function(a, e, b, d) {
      return e === d.length - 1;
    }, even:function(a, e) {
      return 0 === e % 2;
    }, odd:function(a, e) {
      return 1 === e % 2;
    }, lt:function(a, e, b) {
      return e < b[3] - 0;
    }, gt:function(a, e, b) {
      return e > b[3] - 0;
    }, nth:function(a, e, b) {
      return b[3] - 0 === e;
    }, eq:function(a, e, b) {
      return b[3] - 0 === e;
    }}, filter:{PSEUDO:function(a, e, b, d) {
      var c = e[1], f = t.filters[c];
      if (f) {
        return f(a, b, e, d);
      }
      if ("contains" === c) {
        return 0 <= (a.textContent || a.innerText || l.getText([a]) || "").indexOf(e[3]);
      }
      if ("not" === c) {
        e = e[3];
        b = 0;
        for (d = e.length;b < d;b++) {
          if (e[b] === a) {
            return!1;
          }
        }
        return!0;
      }
      l.error(c);
    }, CHILD:function(a, e) {
      var b = e[1], d = a;
      switch(b) {
        case "only":
        ;
        case "first":
          for (;d = d.previousSibling;) {
            if (1 === d.nodeType) {
              return!1;
            }
          }
          if ("first" === b) {
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
          var b = e[2], c = e[3];
          if (1 === b && 0 === c) {
            return!0;
          }
          var f = e[0], m = a.parentNode;
          if (m && (m.sizcache !== f || !a.nodeIndex)) {
            for (var r = 0, d = m.firstChild;d;d = d.nextSibling) {
              1 === d.nodeType && (d.nodeIndex = ++r);
            }
            m.sizcache = f;
          }
          d = a.nodeIndex - c;
          return 0 === b ? 0 === d : 0 === d % b && 0 <= d / b;
      }
    }, ID:function(a, e) {
      return 1 === a.nodeType && a.getAttribute("id") === e;
    }, TAG:function(a, e) {
      return "*" === e && 1 === a.nodeType || a.nodeName.toLowerCase() === e;
    }, CLASS:function(a, e) {
      return-1 < (" " + (a.className || a.getAttribute("class")) + " ").indexOf(e);
    }, ATTR:function(a, e) {
      var b = e[1], b = t.attrHandle[b] ? t.attrHandle[b](a) : null != a[b] ? a[b] : a.getAttribute(b), d = b + "", c = e[2], f = e[4];
      return null == b ? "!=" === c : "=" === c ? d === f : "*=" === c ? 0 <= d.indexOf(f) : "~=" === c ? 0 <= (" " + d + " ").indexOf(f) : f ? "!=" === c ? d !== f : "^=" === c ? 0 === d.indexOf(f) : "$=" === c ? d.substr(d.length - f.length) === f : "|=" === c ? d === f || d.substr(0, f.length + 1) === f + "-" : !1 : d && !1 !== b;
    }, POS:function(a, e, b, d) {
      var c = t.setFilters[e[2]];
      if (c) {
        return c(a, b, e, d);
      }
    }}}, v = t.match.POS, w = function(a, e) {
      return "\\" + (e - 0 + 1);
    }, y;
    for (y in t.match) {
      t.match[y] = new RegExp(t.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source), t.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + t.match[y].source.replace(/\\(\d+)/g, w));
    }
    var H = function(a, e) {
      a = Array.prototype.slice.call(a, 0);
      return e ? (e.push.apply(e, a), e) : a;
    };
    try {
      Array.prototype.slice.call(u.documentElement.childNodes, 0)[0].nodeType;
    } catch (B) {
      H = function(a, e) {
        var b = 0, d = e || [];
        if ("[object Array]" === f.call(a)) {
          Array.prototype.push.apply(d, a);
        } else {
          if ("number" == typeof a.length) {
            for (var c = a.length;b < c;b++) {
              d.push(a[b]);
            }
          } else {
            for (;a[b];b++) {
              d.push(a[b]);
            }
          }
        }
        return d;
      };
    }
    var z, E;
    u.documentElement.compareDocumentPosition ? z = function(a, e) {
      return a === e ? (p = !0, 0) : a.compareDocumentPosition && e.compareDocumentPosition ? a.compareDocumentPosition(e) & 4 ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
    } : (z = function(a, e) {
      var b, d, c = [], f = [];
      b = a.parentNode;
      d = e.parentNode;
      var m = b;
      if (a === e) {
        return p = !0, 0;
      }
      if (b === d) {
        return E(a, e);
      }
      if (!b) {
        return-1;
      }
      if (!d) {
        return 1;
      }
      for (;m;) {
        c.unshift(m), m = m.parentNode;
      }
      for (m = d;m;) {
        f.unshift(m), m = m.parentNode;
      }
      b = c.length;
      d = f.length;
      for (m = 0;m < b && m < d;m++) {
        if (c[m] !== f[m]) {
          return E(c[m], f[m]);
        }
      }
      return m === b ? E(a, f[m], -1) : E(c[m], e, 1);
    }, E = function(a, e, b) {
      if (a === e) {
        return b;
      }
      for (a = a.nextSibling;a;) {
        if (a === e) {
          return-1;
        }
        a = a.nextSibling;
      }
      return 1;
    });
    l.getText = function(a) {
      for (var e = "", b, d = 0;a[d];d++) {
        b = a[d], 3 === b.nodeType || 4 === b.nodeType ? e += b.nodeValue : 8 !== b.nodeType && (e += l.getText(b.childNodes));
      }
      return e;
    };
    (function() {
      var a = u.createElement("div"), e = "script" + (new Date).getTime(), b = u.documentElement;
      a.innerHTML = "<a name='" + e + "'/>";
      b.insertBefore(a, b.firstChild);
      u.getElementById(e) && (t.find.ID = function(a, e, b) {
        if ("undefined" != typeof e.getElementById && !b) {
          return(e = e.getElementById(a[1])) ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : g : [];
        }
      }, t.filter.ID = function(a, e) {
        var b = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
        return 1 === a.nodeType && b && b.nodeValue === e;
      });
      b.removeChild(a);
      b = a = null;
    })();
    (function() {
      var a = u.createElement("div");
      a.appendChild(u.createComment(""));
      0 < a.getElementsByTagName("*").length && (t.find.TAG = function(a, e) {
        var b = e.getElementsByTagName(a[1]);
        if ("*" === a[1]) {
          for (var d = [], c = 0;b[c];c++) {
            1 === b[c].nodeType && d.push(b[c]);
          }
          b = d;
        }
        return b;
      });
      a.innerHTML = "<a href='#'></a>";
      a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (t.attrHandle.href = function(a) {
        return a.getAttribute("href", 2);
      });
      a = null;
    })();
    u.querySelectorAll && function() {
      var a = l, e = u.createElement("div");
      e.innerHTML = "<p class='TEST'></p>";
      if (!e.querySelectorAll || 0 !== e.querySelectorAll(".TEST").length) {
        l = function(e, b, d, c) {
          b = b || u;
          if (!c && !l.isXML(b)) {
            var f = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(e);
            if (f && (1 === b.nodeType || 9 === b.nodeType)) {
              if (f[1]) {
                return H(b.getElementsByTagName(e), d);
              }
              if (f[2] && t.find.CLASS && b.getElementsByClassName) {
                return H(b.getElementsByClassName(f[2]), d);
              }
            }
            if (9 === b.nodeType) {
              if ("body" === e && b.body) {
                return H([b.body], d);
              }
              if (f && f[3]) {
                var m = b.getElementById(f[3]);
                if (!m || !m.parentNode) {
                  return H([], d);
                }
                if (m.id === f[3]) {
                  return H([m], d);
                }
              }
              try {
                return H(b.querySelectorAll(e), d);
              } catch (r) {
              }
            } else {
              if (1 === b.nodeType && "object" !== b.nodeName.toLowerCase()) {
                var f = b, q = (m = b.getAttribute("id")) || "__sizzle__", g = b.parentNode, p = /^\s*[+~]/.test(e);
                m ? q = q.replace(/'/g, "\\$&") : b.setAttribute("id", q);
                p && g && (b = b.parentNode);
                try {
                  if (!p || g) {
                    return H(b.querySelectorAll("[id='" + q + "'] " + e), d);
                  }
                } catch (h) {
                } finally {
                  m || f.removeAttribute("id");
                }
              }
            }
          }
          return a(e, b, d, c);
        };
        for (var b in a) {
          l[b] = a[b];
        }
        e = null;
      }
    }();
    (function() {
      var a = u.documentElement, e = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
      if (e) {
        var b = !e.call(u.createElement("div"), "div"), d = !1;
        try {
          e.call(u.documentElement, "[test!='']:sizzle");
        } catch (c) {
          d = !0;
        }
        l.matchesSelector = function(a, c) {
          c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!l.isXML(a)) {
            try {
              if (d || !t.match.PSEUDO.test(c) && !/!=/.test(c)) {
                var f = e.call(a, c);
                if (f || !b || a.document && 11 !== a.document.nodeType) {
                  return f;
                }
              }
            } catch (m) {
            }
          }
          return 0 < l(c, null, null, [a]).length;
        };
      }
    })();
    (function() {
      var a = u.createElement("div");
      a.innerHTML = "<div class='test e'></div><div class='test'></div>";
      a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length && (a.lastChild.className = "e", 1 !== a.getElementsByClassName("e").length && (t.order.splice(1, 0, "CLASS"), t.find.CLASS = function(a, e, b) {
        if ("undefined" != typeof e.getElementsByClassName && !b) {
          return e.getElementsByClassName(a[1]);
        }
      }, a = null));
    })();
    u.documentElement.contains ? l.contains = function(a, e) {
      return a !== e && (a.contains ? a.contains(e) : !0);
    } : u.documentElement.compareDocumentPosition ? l.contains = function(a, e) {
      return!!(a.compareDocumentPosition(e) & 16);
    } : l.contains = function() {
      return!1;
    };
    l.isXML = function(a) {
      return(a = (a ? a.ownerDocument || a : 0).documentElement) ? "HTML" !== a.nodeName : !1;
    };
    var G = function(a, e) {
      for (var b, d = [], c = "", f = e.nodeType ? [e] : e;b = t.match.PSEUDO.exec(a);) {
        c += b[0], a = a.replace(t.match.PSEUDO, "");
      }
      a = t.relative[a] ? a + "*" : a;
      b = 0;
      for (var m = f.length;b < m;b++) {
        l(a, f[b], d);
      }
      return l.filter(c, d);
    };
    d.find = l;
    d.expr = l.selectors;
    d.expr[":"] = d.expr.filters;
    d.unique = l.uniqueSort;
    d.text = l.getText;
    d.isXMLDoc = l.isXML;
    d.contains = l.contains;
  })();
  var xb = /Until$/, yb = /^(?:parents|prevUntil|prevAll)/, zb = /,/, hb = /^.[^:#\[\.,]*$/, Ab = Array.prototype.slice, Qa = d.expr.match.POS, Bb = {children:!0, contents:!0, next:!0, prev:!0};
  d.fn.extend({find:function(a) {
    var e = this, b, c;
    if ("string" != typeof a) {
      return d(a).filter(function() {
        b = 0;
        for (c = e.length;b < c;b++) {
          if (d.contains(e[b], this)) {
            return!0;
          }
        }
      });
    }
    var f = this.pushStack("", "find", a), g, h, n;
    b = 0;
    for (c = this.length;b < c;b++) {
      if (g = f.length, d.find(a, this[b], f), 0 < b) {
        for (h = g;h < f.length;h++) {
          for (n = 0;n < g;n++) {
            if (f[n] === f[h]) {
              f.splice(h--, 1);
              break;
            }
          }
        }
      }
    }
    return f;
  }, has:function(a) {
    var e = d(a);
    return this.filter(function() {
      for (var a = 0, b = e.length;a < b;a++) {
        if (d.contains(this, e[a])) {
          return!0;
        }
      }
    });
  }, not:function(a) {
    return this.pushStack(Ca(this, a, !1), "not", a);
  }, filter:function(a) {
    return this.pushStack(Ca(this, a, !0), "filter", a);
  }, is:function(a) {
    return!!a && ("string" == typeof a ? 0 < d.filter(a, this).length : 0 < this.filter(a).length);
  }, closest:function(a, e) {
    var b = [], c, f, g = this[0];
    if (d.isArray(a)) {
      var h, n = {}, k = 1;
      if (g && a.length) {
        c = 0;
        for (f = a.length;c < f;c++) {
          h = a[c], n[h] || (n[h] = Qa.test(h) ? d(h, e || this.context) : h);
        }
        for (;g && g.ownerDocument && g !== e;) {
          for (h in n) {
            c = n[h], (c.jquery ? -1 < c.index(g) : d(g).is(c)) && b.push({selector:h, elem:g, level:k});
          }
          g = g.parentNode;
          k++;
        }
      }
      return b;
    }
    h = Qa.test(a) || "string" != typeof a ? d(a, e || this.context) : 0;
    c = 0;
    for (f = this.length;c < f;c++) {
      for (g = this[c];g;) {
        if (h ? -1 < h.index(g) : d.find.matchesSelector(g, a)) {
          b.push(g);
          break;
        }
        g = g.parentNode;
        if (!g || !g.ownerDocument || g === e || 11 === g.nodeType) {
          break;
        }
      }
    }
    b = 1 < b.length ? d.unique(b) : b;
    return this.pushStack(b, "closest", a);
  }, index:function(a) {
    return a && "string" != typeof a ? d.inArray(a.jquery ? a[0] : a, this) : d.inArray(this[0], a ? d(a) : this.parent().children());
  }, add:function(a, e) {
    var b = "string" == typeof a ? d(a, e) : d.makeArray(a && a.nodeType ? [a] : a), c = d.merge(this.get(), b);
    return this.pushStack(Da(b[0]) || Da(c[0]) ? c : d.unique(c));
  }, andSelf:function() {
    return this.add(this.prevObject);
  }});
  d.each({parent:function(a) {
    return(a = a.parentNode) && 11 !== a.nodeType ? a : null;
  }, parents:function(a) {
    return d.dir(a, "parentNode");
  }, parentsUntil:function(a, e, b) {
    return d.dir(a, "parentNode", b);
  }, next:function(a) {
    return d.nth(a, 2, "nextSibling");
  }, prev:function(a) {
    return d.nth(a, 2, "previousSibling");
  }, nextAll:function(a) {
    return d.dir(a, "nextSibling");
  }, prevAll:function(a) {
    return d.dir(a, "previousSibling");
  }, nextUntil:function(a, e, b) {
    return d.dir(a, "nextSibling", b);
  }, prevUntil:function(a, e, b) {
    return d.dir(a, "previousSibling", b);
  }, siblings:function(a) {
    return d.sibling(a.parentNode.firstChild, a);
  }, children:function(a) {
    return d.sibling(a.firstChild);
  }, contents:function(a) {
    return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.makeArray(a.childNodes);
  }}, function(a, e) {
    d.fn[a] = function(b, c) {
      var f = d.map(this, e, b), g = Ab.call(arguments);
      xb.test(a) || (c = b);
      c && "string" == typeof c && (f = d.filter(c, f));
      f = 1 < this.length && !Bb[a] ? d.unique(f) : f;
      (1 < this.length || zb.test(c)) && yb.test(a) && (f = f.reverse());
      return this.pushStack(f, a, g.join(","));
    };
  });
  d.extend({filter:function(a, e, b) {
    b && (a = ":not(" + a + ")");
    return 1 === e.length ? d.find.matchesSelector(e[0], a) ? [e[0]] : [] : d.find.matches(a, e);
  }, dir:function(a, e, b) {
    var c = [];
    for (a = a[e];a && 9 !== a.nodeType && (b === g || 1 !== a.nodeType || !d(a).is(b));) {
      1 === a.nodeType && c.push(a), a = a[e];
    }
    return c;
  }, nth:function(a, e, b, d) {
    e = e || 1;
    for (d = 0;a && (1 !== a.nodeType || ++d !== e);a = a[b]) {
    }
    return a;
  }, sibling:function(a, e) {
    for (var b = [];a;a = a.nextSibling) {
      1 === a.nodeType && a !== e && b.push(a);
    }
    return b;
  }});
  var Cb = / jQuery\d+="(?:\d+|null)"/g, ua = /^\s+/, Ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Sa = /<([\w:]+)/, Db = /<tbody/i, Eb = /<|&#?\w+;/, Ta = /<(?:script|object|embed|option|style)/i, Ua = /checked\s*(?:[^=]|=\s*.checked.)/i, Fb = /\/(java|ecma)script/i, B = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", 
  "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]};
  B.optgroup = B.option;
  B.tbody = B.tfoot = B.colgroup = B.caption = B.thead;
  B.th = B.td;
  d.support.htmlSerialize || (B._default = [1, "div<div>", "</div>"]);
  d.fn.extend({text:function(a) {
    return d.isFunction(a) ? this.each(function(e) {
      var b = d(this);
      b.text(a.call(this, e, b.text()));
    }) : "object" != typeof a && a !== g ? this.empty().append((this[0] && this[0].ownerDocument || u).createTextNode(a)) : d.text(this);
  }, wrapAll:function(a) {
    if (d.isFunction(a)) {
      return this.each(function(e) {
        d(this).wrapAll(a.call(this, e));
      });
    }
    if (this[0]) {
      var e = d(a, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && e.insertBefore(this[0]);
      e.map(function() {
        for (var a = this;a.firstChild && 1 === a.firstChild.nodeType;) {
          a = a.firstChild;
        }
        return a;
      }).append(this);
    }
    return this;
  }, wrapInner:function(a) {
    return d.isFunction(a) ? this.each(function(e) {
      d(this).wrapInner(a.call(this, e));
    }) : this.each(function() {
      var e = d(this), b = e.contents();
      b.length ? b.wrapAll(a) : e.append(a);
    });
  }, wrap:function(a) {
    return this.each(function() {
      d(this).wrapAll(a);
    });
  }, unwrap:function() {
    return this.parent().each(function() {
      d.nodeName(this, "body") || d(this).replaceWith(this.childNodes);
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
      var a = d(arguments[0]);
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
      a.push.apply(a, d(arguments[0]).toArray());
      return a;
    }
  }, remove:function(a, b) {
    for (var c = 0, f;null != (f = this[c]);c++) {
      if (!a || d.filter(a, [f]).length) {
        !b && 1 === f.nodeType && (d.cleanData(f.getElementsByTagName("*")), d.cleanData([f])), f.parentNode && f.parentNode.removeChild(f);
      }
    }
    return this;
  }, empty:function() {
    for (var a = 0, b;null != (b = this[a]);a++) {
      for (1 === b.nodeType && d.cleanData(b.getElementsByTagName("*"));b.firstChild;) {
        b.removeChild(b.firstChild);
      }
    }
    return this;
  }, clone:function(a, b) {
    a = null == a ? !1 : a;
    b = null == b ? a : b;
    return this.map(function() {
      return d.clone(this, a, b);
    });
  }, html:function(a) {
    if (a === g) {
      return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(Cb, "") : null;
    }
    if ("string" != typeof a || Ta.test(a) || !d.support.leadingWhitespace && ua.test(a) || B[(Sa.exec(a) || ["", ""])[1].toLowerCase()]) {
      d.isFunction(a) ? this.each(function(b) {
        var e = d(this);
        e.html(a.call(this, b, e.html()));
      }) : this.empty().append(a);
    } else {
      a = a.replace(Ra, "<$1></$2>");
      try {
        for (var b = 0, c = this.length;b < c;b++) {
          1 === this[b].nodeType && (d.cleanData(this[b].getElementsByTagName("*")), this[b].innerHTML = a);
        }
      } catch (f) {
        this.empty().append(a);
      }
    }
    return this;
  }, replaceWith:function(a) {
    if (this[0] && this[0].parentNode) {
      if (d.isFunction(a)) {
        return this.each(function(b) {
          var c = d(this), f = c.html();
          c.replaceWith(a.call(this, b, f));
        });
      }
      "string" != typeof a && (a = d(a).detach());
      return this.each(function() {
        var b = this.nextSibling, c = this.parentNode;
        d(this).remove();
        b ? d(b).before(a) : d(c).append(a);
      });
    }
    return this.length ? this.pushStack(d(d.isFunction(a) ? a() : a), "replaceWith", a) : this;
  }, detach:function(a) {
    return this.remove(a, !0);
  }, domManip:function(a, b, c) {
    var f, q, h, n = a[0], k = [];
    if (!d.support.checkClone && 3 === arguments.length && "string" == typeof n && Ua.test(n)) {
      return this.each(function() {
        d(this).domManip(a, b, c, !0);
      });
    }
    if (d.isFunction(n)) {
      return this.each(function(f) {
        var r = d(this);
        a[0] = n.call(this, f, b ? r.html() : g);
        r.domManip(a, b, c);
      });
    }
    if (this[0]) {
      h = n && n.parentNode;
      d.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? f = {fragment:h} : f = d.buildFragment(a, this, k);
      h = f.fragment;
      1 === h.childNodes.length ? q = h = h.firstChild : q = h.firstChild;
      if (q) {
        b = b && d.nodeName(q, "tr");
        for (var l = 0, t = this.length, v = t - 1;l < t;l++) {
          c.call(b ? gb(this[l], q) : this[l], f.cacheable || 1 < t && l < v ? d.clone(h, !0, !0) : h);
        }
      }
      k.length && d.each(k, J);
    }
    return this;
  }});
  d.buildFragment = function(a, b, c) {
    var f, g, h;
    b = b && b[0] ? b[0].ownerDocument || b[0] : u;
    1 === a.length && "string" == typeof a[0] && 512 > a[0].length && b === u && "<" === a[0].charAt(0) && !Ta.test(a[0]) && (d.support.checkClone || !Ua.test(a[0])) && (g = !0, h = d.fragments[a[0]], h && 1 !== h && (f = h));
    f || (f = b.createDocumentFragment(), d.clean(a, b, f, c));
    g && (d.fragments[a[0]] = h ? f : 1);
    return{fragment:f, cacheable:g};
  };
  d.fragments = {};
  d.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, b) {
    d.fn[a] = function(c) {
      var f = [];
      c = d(c);
      var g = 1 === this.length && this[0].parentNode;
      if (g && 11 === g.nodeType && 1 === g.childNodes.length && 1 === c.length) {
        return c[b](this[0]), this;
      }
      for (var g = 0, h = c.length;g < h;g++) {
        var n = (0 < g ? this.clone(!0) : this).get();
        d(c[g])[b](n);
        f = f.concat(n);
      }
      return this.pushStack(f, a, c.selector);
    };
  });
  d.extend({clone:function(a, b, c) {
    var f = a.cloneNode(!0), g, h, n;
    if (!(d.support.noCloneEvent && d.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a))) {
      for (Aa(a, f), g = K(a), h = K(f), n = 0;g[n];++n) {
        Aa(g[n], h[n]);
      }
    }
    if (b && (Ba(a, f), c)) {
      for (g = K(a), h = K(f), n = 0;g[n];++n) {
        Ba(g[n], h[n]);
      }
    }
    return f;
  }, clean:function(a, b, c, f) {
    b = b || u;
    "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || u);
    for (var g = [], h = 0, n;null != (n = a[h]);h++) {
      if ("number" == typeof n && (n += ""), n) {
        if ("string" == typeof n) {
          if (Eb.test(n)) {
            n = n.replace(Ra, "<$1></$2>");
            var k = (Sa.exec(n) || ["", ""])[1].toLowerCase(), l = B[k] || B._default, t = l[0], v = b.createElement("div");
            for (v.innerHTML = l[1] + n + l[2];t--;) {
              v = v.lastChild;
            }
            if (!d.support.tbody) {
              for (t = Db.test(n), k = "table" !== k || t ? "<table>" !== l[1] || t ? [] : v.childNodes : v.firstChild && v.firstChild.childNodes, l = k.length - 1;0 <= l;--l) {
                d.nodeName(k[l], "tbody") && !k[l].childNodes.length && k[l].parentNode.removeChild(k[l]);
              }
            }
            !d.support.leadingWhitespace && ua.test(n) && v.insertBefore(b.createTextNode(ua.exec(n)[0]), v.firstChild);
            n = v.childNodes;
          } else {
            n = b.createTextNode(n);
          }
        }
        var w;
        if (!d.support.appendChecked) {
          if (n[0] && "number" == typeof(w = n.length)) {
            for (h = 0;h < w;h++) {
              A(n[h]);
            }
          } else {
            A(n);
          }
        }
        n.nodeType ? g.push(n) : g = d.merge(g, n);
      }
    }
    if (c) {
      for (a = function(a) {
        return!a.type || Fb.test(a.type);
      }, h = 0;g[h];h++) {
        !f || !d.nodeName(g[h], "script") || g[h].type && "text/javascript" !== g[h].type.toLowerCase() ? (1 === g[h].nodeType && (b = d.grep(g[h].getElementsByTagName("script"), a), g.splice.apply(g, [h + 1, 0].concat(b))), c.appendChild(g[h])) : f.push(g[h].parentNode ? g[h].parentNode.removeChild(g[h]) : g[h]);
      }
    }
    return g;
  }, cleanData:function(a) {
    for (var b, c, f = d.cache, g = d.expando, h = d.event.special, n = d.support.deleteExpando, k = 0, l;null != (l = a[k]);k++) {
      if (!l.nodeName || !d.noData[l.nodeName.toLowerCase()]) {
        if (c = l[d.expando]) {
          if ((b = f[c] && f[c][g]) && b.events) {
            for (var t in b.events) {
              h[t] ? d.event.remove(l, t) : d.removeEvent(l, t, b.handle);
            }
            b.handle && (b.handle.elem = null);
          }
          n ? delete l[d.expando] : l.removeAttribute && l.removeAttribute(d.expando);
          delete f[c];
        }
      }
    }
  }});
  var Va = /alpha\([^)]*\)/i, Gb = /opacity=([^)]*)/, Hb = /-([a-z])/ig, Ib = /([A-Z]|^ms)/g, Wa = /^-?\d+(?:px)?$/i, Jb = /^-?\d/, Kb = /^[+\-]=/, Lb = /[^+\-\.\de]+/g, Mb = {position:"absolute", visibility:"hidden", display:"block"}, eb = ["Left", "Right"], fb = ["Top", "Bottom"], R, Xa, ga, Nb = function(a, b) {
    return b.toUpperCase();
  };
  d.fn.css = function(a, b) {
    return 2 === arguments.length && b === g ? this : d.access(this, a, b, !0, function(a, b, e) {
      return e !== g ? d.style(a, b, e) : d.css(a, b);
    });
  };
  d.extend({cssHooks:{opacity:{get:function(a, b) {
    if (b) {
      var d = R(a, "opacity", "opacity");
      return "" === d ? "1" : d;
    }
    return a.style.opacity;
  }}}, cssNumber:{zIndex:!0, fontWeight:!0, opacity:!0, zoom:!0, lineHeight:!0, widows:!0, orphans:!0}, cssProps:{"float":d.support.cssFloat ? "cssFloat" : "styleFloat"}, style:function(a, b, c, f) {
    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
      var h, n = d.camelCase(b), k = a.style, l = d.cssHooks[n];
      b = d.cssProps[n] || n;
      if (c === g) {
        return l && "get" in l && (h = l.get(a, !1, f)) !== g ? h : k[b];
      }
      f = typeof c;
      if (!("number" === f && isNaN(c) || null == c || ("string" === f && Kb.test(c) && (c = +c.replace(Lb, "") + parseFloat(d.css(a, b))), "number" === f && !d.cssNumber[n] && (c += "px"), l && "set" in l && (c = l.set(a, c)) === g))) {
        try {
          k[b] = c;
        } catch (t) {
        }
      }
    }
  }, css:function(a, b, c) {
    var f, h;
    b = d.camelCase(b);
    h = d.cssHooks[b];
    b = d.cssProps[b] || b;
    "cssFloat" === b && (b = "float");
    if (h && "get" in h && (f = h.get(a, !0, c)) !== g) {
      return f;
    }
    if (R) {
      return R(a, b);
    }
  }, swap:function(a, b, d) {
    var c = {}, f;
    for (f in b) {
      c[f] = a.style[f], a.style[f] = b[f];
    }
    d.call(a);
    for (f in b) {
      a.style[f] = c[f];
    }
  }, camelCase:function(a) {
    return a.replace(Hb, Nb);
  }});
  d.curCSS = d.css;
  d.each(["height", "width"], function(a, b) {
    d.cssHooks[b] = {get:function(a, c, f) {
      var g;
      if (c) {
        return 0 !== a.offsetWidth ? g = y(a, b, f) : d.swap(a, Mb, function() {
          g = y(a, b, f);
        }), 0 >= g && (g = R(a, b, b), "0px" === g && ga && (g = ga(a, b, b)), null != g) ? "" === g || "auto" === g ? "0px" : g : 0 > g || null == g ? (g = a.style[b], "" === g || "auto" === g ? "0px" : g) : "string" == typeof g ? g : g + "px";
      }
    }, set:function(a, b) {
      if (!Wa.test(b)) {
        return b;
      }
      b = parseFloat(b);
      if (0 <= b) {
        return b + "px";
      }
    }};
  });
  d.support.opacity || (d.cssHooks.opacity = {get:function(a, b) {
    return Gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "";
  }, set:function(a, b) {
    var c = a.style, f = a.currentStyle;
    c.zoom = 1;
    var g = d.isNaN(b) ? "" : "alpha(opacity=" + 100 * b + ")", f = f && f.filter || c.filter || "";
    c.filter = Va.test(f) ? f.replace(Va, g) : f + " " + g;
  }});
  d(function() {
    d.support.reliableMarginRight || (d.cssHooks.marginRight = {get:function(a, b) {
      var c;
      d.swap(a, {display:"inline-block"}, function() {
        b ? c = R(a, "margin-right", "marginRight") : c = a.style.marginRight;
      });
      return c;
    }});
  });
  u.defaultView && u.defaultView.getComputedStyle && (Xa = function(a, b) {
    var c, f;
    b = b.replace(Ib, "-$1").toLowerCase();
    if (!(f = a.ownerDocument.defaultView)) {
      return g;
    }
    if (f = f.getComputedStyle(a, null)) {
      c = f.getPropertyValue(b), "" === c && !d.contains(a.ownerDocument.documentElement, a) && (c = d.style(a, b));
    }
    return c;
  });
  u.documentElement.currentStyle && (ga = function(a, b) {
    var d, c = a.currentStyle && a.currentStyle[b], f = a.runtimeStyle && a.runtimeStyle[b], g = a.style;
    !Wa.test(c) && Jb.test(c) && (d = g.left, f && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : c || 0, c = g.pixelLeft + "px", g.left = d, f && (a.runtimeStyle.left = f));
    return "" === c ? "auto" : c;
  });
  R = Xa || ga;
  d.expr && d.expr.filters && (d.expr.filters.hidden = function(a) {
    var b = a.offsetHeight;
    return 0 === a.offsetWidth && 0 === b || !d.support.reliableHiddenOffsets && "none" === (a.style.display || d.css(a, "display"));
  }, d.expr.filters.visible = function(a) {
    return!d.expr.filters.hidden(a);
  });
  var Ob = /%20/g, db = /\[\]$/, Ya = /\r?\n/g, Pb = /#.*$/, Qb = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Rb = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Sb = /^(?:GET|HEAD)$/, Tb = /^\/\//, Za = /\?/, Ub = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Vb = /^(?:select|textarea)/i, za = /\s+/, Wb = /([?&])_=[^&]*/, $a = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ab = d.fn.load, ja = {}, bb = {}, O, S;
  try {
    O = ob.href;
  } catch (bc) {
    O = u.createElement("a"), O.href = "", O = O.href;
  }
  S = $a.exec(O.toLowerCase()) || [];
  d.fn.extend({load:function(a, b, c) {
    if ("string" != typeof a && ab) {
      return ab.apply(this, arguments);
    }
    if (!this.length) {
      return this;
    }
    var f = a.indexOf(" ");
    if (0 <= f) {
      var h = a.slice(f, a.length);
      a = a.slice(0, f);
    }
    f = "GET";
    b && (d.isFunction(b) ? (c = b, b = g) : "object" == typeof b && (b = d.param(b, d.ajaxSettings.traditional), f = "POST"));
    var n = this;
    d.ajax({url:a, type:f, dataType:"html", data:b, complete:function(a, b, e) {
      e = a.responseText;
      a.isResolved() && (a.done(function(a) {
        e = a;
      }), n.html(h ? d("<div>").append(e.replace(Ub, "")).find(h) : e));
      c && n.each(c, [e, b, a]);
    }});
    return this;
  }, serialize:function() {
    return d.param(this.serializeArray());
  }, serializeArray:function() {
    return this.map(function() {
      return this.elements ? d.makeArray(this.elements) : this;
    }).filter(function() {
      return this.name && !this.disabled && (this.checked || Vb.test(this.nodeName) || Rb.test(this.type));
    }).map(function(a, b) {
      var c = d(this).val();
      return null == c ? null : d.isArray(c) ? d.map(c, function(a, d) {
        return{name:b.name, value:a.replace(Ya, "\r\n")};
      }) : {name:b.name, value:c.replace(Ya, "\r\n")};
    }).get();
  }});
  d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
    d.fn[b] = function(a) {
      return this.bind(b, a);
    };
  });
  d.each(["get", "post"], function(a, b) {
    d[b] = function(a, c, f, h) {
      d.isFunction(c) && (h = h || f, f = c, c = g);
      return d.ajax({type:b, url:a, data:c, success:f, dataType:h});
    };
  });
  d.extend({getScript:function(a, b) {
    return d.get(a, g, b, "script");
  }, getJSON:function(a, b, c) {
    return d.get(a, b, c, "json");
  }, ajaxSetup:function(a, b) {
    b ? d.extend(!0, a, d.ajaxSettings, b) : (b = a, a = d.extend(!0, d.ajaxSettings, b));
    for (var c in{context:1, url:1}) {
      c in b ? a[c] = b[c] : c in d.ajaxSettings && (a[c] = d.ajaxSettings[c]);
    }
    return a;
  }, ajaxSettings:{url:O, isLocal:/^(?:about|app|app\-storage|.+\-extension|file|widget):$/.test(S[1]), global:!0, type:"GET", contentType:"application/x-www-form-urlencoded", processData:!0, async:!0, accepts:{xml:"application/xml, text/xml", html:"text/html", text:"text/plain", json:"application/json, text/javascript", "*":"*/*"}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText"}, converters:{"* text":c.String, "text html":!0, "text json":d.parseJSON, 
  "text xml":d.parseXML}}, ajaxPrefilter:w(ja), ajaxTransport:w(bb), ajax:function(a, b) {
    function c(a, b, e, m) {
      if (2 !== E) {
        E = 2;
        G && clearTimeout(G);
        H = g;
        B = m || "";
        x.readyState = a ? 4 : 0;
        var v, w, y;
        if (e) {
          m = f;
          var D = x, Q = m.contents, z = m.dataTypes, F = m.responseFields, I, C, A, J;
          for (C in F) {
            C in e && (D[F[C]] = e[C]);
          }
          for (;"*" === z[0];) {
            z.shift(), I === g && (I = m.mimeType || D.getResponseHeader("content-type"));
          }
          if (I) {
            for (C in Q) {
              if (Q[C] && Q[C].test(I)) {
                z.unshift(C);
                break;
              }
            }
          }
          if (z[0] in e) {
            A = z[0];
          } else {
            for (C in e) {
              if (!z[0] || m.converters[C + " " + z[0]]) {
                A = C;
                break;
              }
              J || (J = C);
            }
            A = A || J;
          }
          A ? (A !== z[0] && z.unshift(A), e = e[A]) : e = void 0;
        } else {
          e = g;
        }
        if (200 <= a && 300 > a || 304 === a) {
          if (f.ifModified) {
            if (I = x.getResponseHeader("Last-Modified")) {
              d.lastModified[u] = I;
            }
            if (I = x.getResponseHeader("Etag")) {
              d.etag[u] = I;
            }
          }
          if (304 === a) {
            b = "notmodified", v = !0;
          } else {
            try {
              I = f;
              I.dataFilter && (e = I.dataFilter(e, I.dataType));
              var ka = I.dataTypes;
              C = {};
              var L, O, S = ka.length, P, T = ka[0], M, R, U, X, N;
              for (L = 1;L < S;L++) {
                if (1 === L) {
                  for (O in I.converters) {
                    "string" == typeof O && (C[O.toLowerCase()] = I.converters[O]);
                  }
                }
                M = T;
                T = ka[L];
                if ("*" === T) {
                  T = M;
                } else {
                  if ("*" !== M && M !== T) {
                    R = M + " " + T;
                    U = C[R] || C["* " + T];
                    if (!U) {
                      for (X in N = g, C) {
                        if (P = X.split(" "), P[0] === M || "*" === P[0]) {
                          if (N = C[P[1] + " " + T]) {
                            X = C[X];
                            !0 === X ? U = N : !0 === N && (U = X);
                            break;
                          }
                        }
                      }
                    }
                    U || N || d.error("No conversion from " + R.replace(" ", " to "));
                    !0 !== U && (e = U ? U(e) : N(X(e)));
                  }
                }
              }
              w = e;
              b = "success";
              v = !0;
            } catch (V) {
              b = "parsererror", y = V;
            }
          }
        } else {
          if (y = b, !b || a) {
            b = "error", 0 > a && (a = 0);
          }
        }
        x.status = a;
        x.statusText = b;
        v ? k.resolveWith(h, [w, b, x]) : k.rejectWith(h, [x, b, y]);
        x.statusCode(t);
        t = g;
        K && n.trigger("ajax" + (v ? "Success" : "Error"), [x, f, v ? w : y]);
        l.resolveWith(h, [x, b]);
        K && (n.trigger("ajaxComplete", [x, f]), --d.active || d.event.trigger("ajaxStop"));
      }
    }
    "object" == typeof a && (b = a, a = g);
    b = b || {};
    var f = d.ajaxSetup({}, b), h = f.context || f, n = h !== f && (h.nodeType || h instanceof d) ? d(h) : d.event, k = d.Deferred(), l = d._Deferred(), t = f.statusCode || {}, u, w = {}, y = {}, B, Q, H, G, z, E = 0, K, F, x = {readyState:0, setRequestHeader:function(a, b) {
      if (!E) {
        var e = a.toLowerCase();
        a = y[e] = y[e] || a;
        w[a] = b;
      }
      return this;
    }, getAllResponseHeaders:function() {
      return 2 === E ? B : null;
    }, getResponseHeader:function(a) {
      var b;
      if (2 === E) {
        if (!Q) {
          for (Q = {};b = Qb.exec(B);) {
            Q[b[1].toLowerCase()] = b[2];
          }
        }
        b = Q[a.toLowerCase()];
      }
      return b === g ? null : b;
    }, overrideMimeType:function(a) {
      E || (f.mimeType = a);
      return this;
    }, abort:function(a) {
      a = a || "abort";
      H && H.abort(a);
      c(0, a);
      return this;
    }};
    k.promise(x);
    x.success = x.done;
    x.error = x.fail;
    x.complete = l.done;
    x.statusCode = function(a) {
      if (a) {
        var b;
        if (2 > E) {
          for (b in a) {
            t[b] = [t[b], a[b]];
          }
        } else {
          b = a[x.status], x.then(b, b);
        }
      }
      return this;
    };
    f.url = ((a || f.url) + "").replace(Pb, "").replace(Tb, S[1] + "//");
    f.dataTypes = d.trim(f.dataType || "*").toLowerCase().split(za);
    null == f.crossDomain && (z = $a.exec(f.url.toLowerCase()), f.crossDomain = !(!z || z[1] == S[1] && z[2] == S[2] && (z[3] || ("http:" === z[1] ? 80 : 443)) == (S[3] || ("http:" === S[1] ? 80 : 443))));
    f.data && f.processData && "string" != typeof f.data && (f.data = d.param(f.data, f.traditional));
    v(ja, f, b, x);
    if (2 === E) {
      return!1;
    }
    K = f.global;
    f.type = f.type.toUpperCase();
    f.hasContent = !Sb.test(f.type);
    K && 0 === d.active++ && d.event.trigger("ajaxStart");
    if (!f.hasContent && (f.data && (f.url += (Za.test(f.url) ? "&" : "?") + f.data), u = f.url, !1 === f.cache)) {
      z = d.now();
      var A = f.url.replace(Wb, "$1_=" + z);
      f.url = A + (A === f.url ? (Za.test(f.url) ? "&" : "?") + "_=" + z : "");
    }
    (f.data && f.hasContent && !1 !== f.contentType || b.contentType) && x.setRequestHeader("Content-Type", f.contentType);
    f.ifModified && (u = u || f.url, d.lastModified[u] && x.setRequestHeader("If-Modified-Since", d.lastModified[u]), d.etag[u] && x.setRequestHeader("If-None-Match", d.etag[u]));
    x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", */*; q=0.01" : "") : f.accepts["*"]);
    for (F in f.headers) {
      x.setRequestHeader(F, f.headers[F]);
    }
    if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || 2 === E)) {
      return x.abort(), !1;
    }
    for (F in{success:1, error:1, complete:1}) {
      x[F](f[F]);
    }
    if (H = v(bb, f, b, x)) {
      x.readyState = 1;
      K && n.trigger("ajaxSend", [x, f]);
      f.async && 0 < f.timeout && (G = setTimeout(function() {
        x.abort("timeout");
      }, f.timeout));
      try {
        E = 1, H.send(w, c);
      } catch (J) {
        2 > status ? c(-1, J) : d.error(J);
      }
    } else {
      c(-1, "No Transport");
    }
    return x;
  }, param:function(a, b) {
    var c = [], f = function(a, b) {
      b = d.isFunction(b) ? b() : b;
      c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };
    b === g && (b = d.ajaxSettings.traditional);
    if (d.isArray(a) || a.jquery && !d.isPlainObject(a)) {
      d.each(a, function() {
        f(this.name, this.value);
      });
    } else {
      for (var h in a) {
        t(h, a[h], b, f);
      }
    }
    return c.join("&").replace(Ob, "+");
  }});
  d.extend({active:0, lastModified:{}, etag:{}});
  var Xb = d.now(), ha = /(\=)\?(&|$)|\?\?/i;
  d.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
    return d.expando + "_" + Xb++;
  }});
  d.ajaxPrefilter("json jsonp", function(a, b, f) {
    b = "application/x-www-form-urlencoded" === a.contentType && "string" == typeof a.data;
    if ("jsonp" === a.dataTypes[0] || !1 !== a.jsonp && (ha.test(a.url) || b && ha.test(a.data))) {
      var g, h = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, n = c[h], k = a.url, l = a.data, t = "$1" + h + "$2";
      !1 !== a.jsonp && (k = k.replace(ha, t), a.url === k && (b && (l = l.replace(ha, t)), a.data === l && (k += (/\?/.test(k) ? "&" : "?") + a.jsonp + "=" + h)));
      a.url = k;
      a.data = l;
      c[h] = function(a) {
        g = [a];
      };
      f.always(function() {
        c[h] = n;
        g && d.isFunction(n) && c[h](g[0]);
      });
      a.converters["script json"] = function() {
        g || d.error(h + " was not called");
        return g[0];
      };
      a.dataTypes[0] = "json";
      return "script";
    }
  });
  d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/javascript|ecmascript/}, converters:{"text script":function(a) {
    d.globalEval(a);
    return a;
  }}});
  d.ajaxPrefilter("script", function(a) {
    a.cache === g && (a.cache = !1);
    a.crossDomain && (a.type = "GET", a.global = !1);
  });
  d.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, d = u.head || u.getElementsByTagName("head")[0] || u.documentElement;
      return{send:function(c, f) {
        b = u.createElement("script");
        b.async = "async";
        a.scriptCharset && (b.charset = a.scriptCharset);
        b.src = a.url;
        b.onload = b.onreadystatechange = function(a, c) {
          if (c || !b.readyState || /loaded|complete/.test(b.readyState)) {
            b.onload = b.onreadystatechange = null, d && b.parentNode && d.removeChild(b), b = g, c || f(200, "success");
          }
        };
        d.insertBefore(b, d.firstChild);
      }, abort:function() {
        b && b.onload(0, 1);
      }};
    }
  });
  var va = c.ActiveXObject ? function() {
    for (var a in N) {
      N[a](0, 1);
    }
  } : !1, Yb = 0, N;
  d.ajaxSettings.xhr = c.ActiveXObject ? function() {
    var a;
    if (!(a = !this.isLocal && n())) {
      a: {
        try {
          a = new c.ActiveXObject("Microsoft.XMLHTTP");
          break a;
        } catch (b) {
        }
        a = void 0;
      }
    }
    return a;
  } : n;
  (function(a) {
    d.extend(d.support, {ajax:!!a, cors:!!a && "withCredentials" in a});
  })(d.ajaxSettings.xhr());
  d.support.ajax && d.ajaxTransport(function(a) {
    if (!a.crossDomain || d.support.cors) {
      var b;
      return{send:function(f, h) {
        var n = a.xhr(), k, l;
        a.username ? n.open(a.type, a.url, a.async, a.username, a.password) : n.open(a.type, a.url, a.async);
        if (a.xhrFields) {
          for (l in a.xhrFields) {
            n[l] = a.xhrFields[l];
          }
        }
        a.mimeType && n.overrideMimeType && n.overrideMimeType(a.mimeType);
        a.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (l in f) {
            n.setRequestHeader(l, f[l]);
          }
        } catch (t) {
        }
        n.send(a.hasContent && a.data || null);
        b = function(c, f) {
          var m, l, t, v, u;
          try {
            if (b && (f || 4 === n.readyState)) {
              if (b = g, k && (n.onreadystatechange = d.noop, va && delete N[k]), f) {
                4 !== n.readyState && n.abort();
              } else {
                m = n.status;
                t = n.getAllResponseHeaders();
                v = {};
                (u = n.responseXML) && u.documentElement && (v.xml = u);
                v.text = n.responseText;
                try {
                  l = n.statusText;
                } catch (w) {
                  l = "";
                }
                m || !a.isLocal || a.crossDomain ? 1223 === m && (m = 204) : m = v.text ? 200 : 404;
              }
            }
          } catch (y) {
            f || h(-1, y);
          }
          v && h(m, l, v, t);
        };
        a.async && 4 !== n.readyState ? (k = ++Yb, va && (N || (N = {}, d(c).unload(va)), N[k] = b), n.onreadystatechange = b) : b();
      }, abort:function() {
        b && b(0, 1);
      }};
    }
  });
  var ia = {}, G, Y, Zb = /^(?:toggle|show|hide)$/, $b = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, V, xa = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], ba, wa = c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame;
  d.fn.extend({show:function(a, b, c) {
    var f;
    if (a || 0 === a) {
      return this.animate(l("show", 3), a, b, c);
    }
    b = 0;
    for (c = this.length;b < c;b++) {
      a = this[b], a.style && (f = a.style.display, !d._data(a, "olddisplay") && "none" === f && (f = a.style.display = ""), "" === f && "none" === d.css(a, "display") && d._data(a, "olddisplay", h(a.nodeName)));
    }
    for (b = 0;b < c;b++) {
      if (a = this[b], a.style && (f = a.style.display, "" === f || "none" === f)) {
        a.style.display = d._data(a, "olddisplay") || "";
      }
    }
    return this;
  }, hide:function(a, b, c) {
    if (a || 0 === a) {
      return this.animate(l("hide", 3), a, b, c);
    }
    a = 0;
    for (b = this.length;a < b;a++) {
      this[a].style && (c = d.css(this[a], "display"), "none" !== c && !d._data(this[a], "olddisplay") && d._data(this[a], "olddisplay", c));
    }
    for (a = 0;a < b;a++) {
      this[a].style && (this[a].style.display = "none");
    }
    return this;
  }, _toggle:d.fn.toggle, toggle:function(a, b, c) {
    var f = "boolean" == typeof a;
    d.isFunction(a) && d.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || f ? this.each(function() {
      var b = f ? a : d(this).is(":hidden");
      d(this)[b ? "show" : "hide"]();
    }) : this.animate(l("toggle", 3), a, b, c);
    return this;
  }, fadeTo:function(a, b, d, c) {
    return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity:b}, a, d, c);
  }, animate:function(a, b, c, f) {
    var g = d.speed(b, c, f);
    return d.isEmptyObject(a) ? this.each(g.complete, [!1]) : this[!1 === g.queue ? "each" : "queue"](function() {
      !1 === g.queue && d._mark(this);
      var b = d.extend({}, g), e = 1 === this.nodeType, c = e && d(this).is(":hidden"), f, n, m, k, l, r, t, v;
      b.animatedProperties = {};
      for (m in a) {
        f = d.camelCase(m);
        m !== f && (a[f] = a[m], delete a[m]);
        n = a[f];
        if ("hide" === n && c || "show" === n && !c) {
          return b.complete.call(this);
        }
        e && ("height" === f || "width" === f) && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === d.css(this, "display") && "none" === d.css(this, "float") && (d.support.inlineBlockNeedsLayout ? (k = h(this.nodeName), "inline" === k ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"));
        b.animatedProperties[f] = d.isArray(n) ? n[1] : b.specialEasing && b.specialEasing[f] || b.easing || "swing";
      }
      null != b.overflow && (this.style.overflow = "hidden");
      for (m in a) {
        e = new d.fx(this, b, m), n = a[m], Zb.test(n) ? e["toggle" === n ? c ? "show" : "hide" : n]() : (l = $b.exec(n), r = e.cur(), l ? (t = parseFloat(l[2]), v = l[3] || (d.cssNumber[f] ? "" : "px"), "px" !== v && (d.style(this, m, (t || 1) + v), r *= (t || 1) / e.cur(), d.style(this, m, r + v)), l[1] && (t = ("-=" === l[1] ? -1 : 1) * t + r), e.custom(r, t, v)) : e.custom(r, n, ""));
      }
      return!0;
    });
  }, stop:function(a, b) {
    a && this.queue([]);
    this.each(function() {
      var a = d.timers, c = a.length;
      for (b || d._unmark(!0, this);c--;) {
        a[c].elem === this && (b && a[c](!0), a.splice(c, 1));
      }
    });
    b || this.dequeue();
    return this;
  }});
  d.each({slideDown:l("show", 1), slideUp:l("hide", 1), slideToggle:l("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, b) {
    d.fn[a] = function(a, d, c) {
      return this.animate(b, a, d, c);
    };
  });
  d.extend({speed:function(a, b, c) {
    var f = a && "object" == typeof a ? d.extend({}, a) : {complete:c || !c && b || d.isFunction(a) && a, duration:a, easing:c && b || b && !d.isFunction(b) && b};
    f.duration = d.fx.off ? 0 : "number" == typeof f.duration ? f.duration : f.duration in d.fx.speeds ? d.fx.speeds[f.duration] : d.fx.speeds._default;
    f.old = f.complete;
    f.complete = function(a) {
      !1 !== f.queue ? d.dequeue(this) : !1 !== a && d._unmark(this);
      d.isFunction(f.old) && f.old.call(this);
    };
    return f;
  }, easing:{linear:function(a, b, d, c) {
    return d + c * a;
  }, swing:function(a, b, d, c) {
    return(-Math.cos(a * Math.PI) / 2 + .5) * c + d;
  }}, timers:[], fx:function(a, b, d) {
    this.options = b;
    this.elem = a;
    this.prop = d;
    b.orig = b.orig || {};
  }});
  d.fx.prototype = {update:function() {
    this.options.step && this.options.step.call(this.elem, this.now, this);
    (d.fx.step[this.prop] || d.fx.step._default)(this);
  }, cur:function() {
    if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) {
      return this.elem[this.prop];
    }
    var a, b = d.css(this.elem, this.prop);
    return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a;
  }, custom:function(a, b, c) {
    function g(a) {
      return h.step(a);
    }
    var h = this, n = d.fx, k;
    this.startTime = ba || f();
    this.start = a;
    this.end = b;
    this.unit = c || this.unit || (d.cssNumber[this.prop] ? "" : "px");
    this.now = this.start;
    this.pos = this.state = 0;
    g.elem = this.elem;
    g() && d.timers.push(g) && !V && (wa ? (V = 1, k = function() {
      V && (wa(k), n.tick());
    }, wa(k)) : V = setInterval(n.tick, n.interval));
  }, show:function() {
    this.options.orig[this.prop] = d.style(this.elem, this.prop);
    this.options.show = !0;
    this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur());
    d(this.elem).show();
  }, hide:function() {
    this.options.orig[this.prop] = d.style(this.elem, this.prop);
    this.options.hide = !0;
    this.custom(this.cur(), 0);
  }, step:function(a) {
    var b = ba || f(), c = !0, g = this.elem, h = this.options, n, k;
    if (a || b >= h.duration + this.startTime) {
      this.now = this.end;
      this.pos = this.state = 1;
      this.update();
      h.animatedProperties[this.prop] = !0;
      for (n in h.animatedProperties) {
        !0 !== h.animatedProperties[n] && (c = !1);
      }
      if (c) {
        null != h.overflow && !d.support.shrinkWrapBlocks && d.each(["", "X", "Y"], function(a, b) {
          g.style["overflow" + b] = h.overflow[a];
        });
        h.hide && d(g).hide();
        if (h.hide || h.show) {
          for (var l in h.animatedProperties) {
            d.style(g, l, h.orig[l]);
          }
        }
        h.complete.call(g);
      }
      return!1;
    }
    Infinity == h.duration ? this.now = b : (k = b - this.startTime, this.state = k / h.duration, this.pos = d.easing[h.animatedProperties[this.prop]](this.state, k, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos);
    this.update();
    return!0;
  }};
  d.extend(d.fx, {tick:function() {
    for (var a = d.timers, b = a.length;b--;) {
      a[b]() || a.splice(b, 1);
    }
    a.length || d.fx.stop();
  }, interval:13, stop:function() {
    clearInterval(V);
    V = null;
  }, speeds:{slow:600, fast:200, _default:400}, step:{opacity:function(a) {
    d.style(a.elem, "opacity", a.now);
  }, _default:function(a) {
    a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = ("width" === a.prop || "height" === a.prop ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now;
  }}});
  d.expr && d.expr.filters && (d.expr.filters.animated = function(a) {
    return d.grep(d.timers, function(b) {
      return a === b.elem;
    }).length;
  });
  var ac = /^t(?:able|d|h)$/i, cb = /^(?:body|html)$/i;
  "getBoundingClientRect" in u.documentElement ? d.fn.offset = function(a) {
    var b = this[0], c;
    if (a) {
      return this.each(function(b) {
        d.offset.setOffset(this, a, b);
      });
    }
    if (!b || !b.ownerDocument) {
      return null;
    }
    if (b === b.ownerDocument.body) {
      return d.offset.bodyOffset(b);
    }
    try {
      c = b.getBoundingClientRect();
    } catch (f) {
    }
    var g = b.ownerDocument, h = g.documentElement;
    if (!c || !d.contains(h, b)) {
      return c ? {top:c.top, left:c.left} : {top:0, left:0};
    }
    b = g.body;
    g = k(g);
    return{top:c.top + (g.pageYOffset || d.support.boxModel && h.scrollTop || b.scrollTop) - (h.clientTop || b.clientTop || 0), left:c.left + (g.pageXOffset || d.support.boxModel && h.scrollLeft || b.scrollLeft) - (h.clientLeft || b.clientLeft || 0)};
  } : d.fn.offset = function(a) {
    var b = this[0];
    if (a) {
      return this.each(function(b) {
        d.offset.setOffset(this, a, b);
      });
    }
    if (!b || !b.ownerDocument) {
      return null;
    }
    if (b === b.ownerDocument.body) {
      return d.offset.bodyOffset(b);
    }
    d.offset.initialize();
    var c, f = b.offsetParent, g = b.ownerDocument, h = g.documentElement, n = g.body;
    c = (g = g.defaultView) ? g.getComputedStyle(b, null) : b.currentStyle;
    for (var k = b.offsetTop, l = b.offsetLeft;(b = b.parentNode) && b !== n && b !== h && (!d.offset.supportsFixedPosition || "fixed" !== c.position);) {
      c = g ? g.getComputedStyle(b, null) : b.currentStyle, k -= b.scrollTop, l -= b.scrollLeft, b === f && (k += b.offsetTop, l += b.offsetLeft, d.offset.doesNotAddBorder && (!d.offset.doesAddBorderForTableAndCells || !ac.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), f = b.offsetParent), d.offset.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 
      0);
    }
    if ("relative" === c.position || "static" === c.position) {
      k += n.offsetTop, l += n.offsetLeft;
    }
    d.offset.supportsFixedPosition && "fixed" === c.position && (k += Math.max(h.scrollTop, n.scrollTop), l += Math.max(h.scrollLeft, n.scrollLeft));
    return{top:k, left:l};
  };
  d.offset = {initialize:function() {
    var a = u.body, b = u.createElement("div"), c, f, g, h = parseFloat(d.css(a, "marginTop")) || 0;
    d.extend(b.style, {position:"absolute", top:0, left:0, margin:0, border:0, width:"1px", height:"1px", visibility:"hidden"});
    b.innerHTML = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    a.insertBefore(b, a.firstChild);
    c = b.firstChild;
    f = c.firstChild;
    g = c.nextSibling.firstChild.firstChild;
    this.doesNotAddBorder = 5 !== f.offsetTop;
    this.doesAddBorderForTableAndCells = 5 === g.offsetTop;
    f.style.position = "fixed";
    f.style.top = "20px";
    this.supportsFixedPosition = 20 === f.offsetTop || 15 === f.offsetTop;
    f.style.position = f.style.top = "";
    c.style.overflow = "hidden";
    c.style.position = "relative";
    this.subtractsBorderForOverflowNotVisible = -5 === f.offsetTop;
    this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h;
    a.removeChild(b);
    d.offset.initialize = d.noop;
  }, bodyOffset:function(a) {
    var b = a.offsetTop, c = a.offsetLeft;
    d.offset.initialize();
    d.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(d.css(a, "marginTop")) || 0, c += parseFloat(d.css(a, "marginLeft")) || 0);
    return{top:b, left:c};
  }, setOffset:function(a, b, c) {
    var f = d.css(a, "position");
    "static" === f && (a.style.position = "relative");
    var g = d(a), h = g.offset(), n = d.css(a, "top"), k = d.css(a, "left"), l = {}, t = {}, v, u;
    ("absolute" === f || "fixed" === f) && -1 < d.inArray("auto", [n, k]) ? (t = g.position(), v = t.top, u = t.left) : (v = parseFloat(n) || 0, u = parseFloat(k) || 0);
    d.isFunction(b) && (b = b.call(a, c, h));
    null != b.top && (l.top = b.top - h.top + v);
    null != b.left && (l.left = b.left - h.left + u);
    "using" in b ? b.using.call(a, l) : g.css(l);
  }};
  d.fn.extend({position:function() {
    if (!this[0]) {
      return null;
    }
    var a = this[0], b = this.offsetParent(), c = this.offset(), f = cb.test(b[0].nodeName) ? {top:0, left:0} : b.offset();
    c.top -= parseFloat(d.css(a, "marginTop")) || 0;
    c.left -= parseFloat(d.css(a, "marginLeft")) || 0;
    f.top += parseFloat(d.css(b[0], "borderTopWidth")) || 0;
    f.left += parseFloat(d.css(b[0], "borderLeftWidth")) || 0;
    return{top:c.top - f.top, left:c.left - f.left};
  }, offsetParent:function() {
    return this.map(function() {
      for (var a = this.offsetParent || u.body;a && !cb.test(a.nodeName) && "static" === d.css(a, "position");) {
        a = a.offsetParent;
      }
      return a;
    });
  }});
  d.each(["Left", "Top"], function(a, b) {
    var c = "scroll" + b;
    d.fn[c] = function(b) {
      var e, f;
      return b === g ? (e = this[0], e ? (f = k(e)) ? "pageXOffset" in f ? f[a ? "pageYOffset" : "pageXOffset"] : d.support.boxModel && f.document.documentElement[c] || f.document.body[c] : e[c] : null) : this.each(function() {
        (f = k(this)) ? f.scrollTo(a ? d(f).scrollLeft() : b, a ? b : d(f).scrollTop()) : this[c] = b;
      });
    };
  });
  d.each(["Height", "Width"], function(a, b) {
    var c = b.toLowerCase();
    d.fn["inner" + b] = function() {
      return this[0] ? parseFloat(d.css(this[0], c, "padding")) : null;
    };
    d.fn["outer" + b] = function(a) {
      return this[0] ? parseFloat(d.css(this[0], c, a ? "margin" : "border")) : null;
    };
    d.fn[c] = function(a) {
      var f = this[0];
      if (!f) {
        return null == a ? null : this;
      }
      if (d.isFunction(a)) {
        return this.each(function(b) {
          var f = d(this);
          f[c](a.call(this, b, f[c]()));
        });
      }
      if (d.isWindow(f)) {
        var h = f.document.documentElement["client" + b];
        return "CSS1Compat" === f.document.compatMode && h || f.document.body["client" + b] || h;
      }
      return 9 === f.nodeType ? Math.max(f.documentElement["client" + b], f.body["scroll" + b], f.documentElement["scroll" + b], f.body["offset" + b], f.documentElement["offset" + b]) : a === g ? (f = d.css(f, c), h = parseFloat(f), d.isNaN(h) ? f : h) : this.css(c, "string" == typeof a ? a : a + "px");
    };
  });
  c.jQuery = c.$ = d;
})(window);
/*
 http://www.gnu.org/licenses/gpl.html [GNU General Public License]
 @param {jQuery} {base64Encode:function(input))
 @param {jQuery} {base64Decode:function(input))
 @return string
*/
(function(c) {
  c.extend({base64Encode:function(c) {
    var k = "", h, l, b, f, n, t, v = 0;
    c = c.replace(/\x0d\x0a/g, "\n");
    l = "";
    for (b = 0;b < c.length;b++) {
      f = c.charCodeAt(b), 128 > f ? l += String.fromCharCode(f) : (127 < f && 2048 > f ? l += String.fromCharCode(f >> 6 | 192) : (l += String.fromCharCode(f >> 12 | 224), l += String.fromCharCode(f >> 6 & 63 | 128)), l += String.fromCharCode(f & 63 | 128));
    }
    for (c = l;v < c.length;) {
      h = c.charCodeAt(v++), l = c.charCodeAt(v++), b = c.charCodeAt(v++), f = h >> 2, h = (h & 3) << 4 | l >> 4, n = (l & 15) << 2 | b >> 6, t = b & 63, isNaN(l) ? n = t = 64 : isNaN(b) && (t = 64), k = k + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(n) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t)
      ;
    }
    return k;
  }, base64Decode:function(c) {
    var k = "", h, l, b, f, n, t = 0;
    for (c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");t < c.length;) {
      h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(t++)), l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(t++)), f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(t++)), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(c.charAt(t++)), h = h << 2 | l >> 4, l = (l & 15) << 4 | f >> 2, b = (f & 3) << 6 | n, k += String.fromCharCode(h), 64 != f && 
      (k += String.fromCharCode(l)), 64 != n && (k += String.fromCharCode(b));
    }
    c = k;
    k = "";
    for (n = c1 = c2 = f = 0;f < c.length;) {
      n = c.charCodeAt(f), 128 > n ? (k += String.fromCharCode(n), f++) : 191 < n && 224 > n ? (c2 = c.charCodeAt(f + 1), k += String.fromCharCode((n & 31) << 6 | c2 & 63), f += 2) : (c2 = c.charCodeAt(f + 1), c3 = c.charCodeAt(f + 2), k += String.fromCharCode((n & 15) << 12 | (c2 & 63) << 6 | c3 & 63), f += 3);
    }
    return k;
  }});
})(jQuery);
var EMAIL_PATTERN = /[a-zA-Z0-9]{1}[a-zA-Z0-9_%\-\.]*@[0-9a-zA-Z]{1}[0-9a-zA-Z\._\-%]*[^\.\-_]{1}\.[a-zA-Z]{2,}/gi;
function validate_email_string(c) {
  var g = "", k = !1, h = !1, l = "", b;
  for (b in c) {
    l = c[b];
    if ('"' == l || "'" == l) {
      k = !k;
    } else {
      if (("," == l || ";" == l) && !k) {
        h = check_email(g);
        if (!h) {
          break;
        }
        g = "";
        continue;
      }
    }
    g += l;
  }
  g = trim(g);
  0 < g.length && (h = check_email(g));
  return h;
}
function check_email(c) {
  for (var g = !1, k = !1, h = "", l = "", b = "", f = c.length - 1;-1 < f;f--) {
    l = c[f];
    if (!g) {
      if (">" == l && !k) {
        k = !0, h = "";
      } else {
        if ("<" == l && k) {
          if (k = !1, !g) {
            b = h + b;
            break;
          }
        } else {
          if (k) {
            h = l + h;
          } else {
            if ('"' != l || "'" != l) {
              b = l + b;
            }
          }
        }
      }
    }
    '"' != l && "'" != l || k || (g = !g);
  }
  if (k) {
    return!1;
  }
  b = trim(b);
  return b.match(EMAIL_PATTERN) ? !0 : !1;
}
function extract_email(c) {
  return(c = EMAIL_PATTERN.exec(c)) ? c[0].replace(" ", "") : "";
}
function trim(c, g) {
  return ltrim(rtrim(c, g), g);
}
function ltrim(c, g) {
  return c.replace(new RegExp("^[" + (g || "\\s") + "]+", "g"), "");
}
function rtrim(c, g) {
  return c.replace(new RegExp("[" + (g || "\\s") + "]+$", "g"), "");
}
;function bmmLang() {
  this.init();
}
bmmLang.prototype = {init:function() {
}, getString:function(c) {
  c = c.replace(/\./g, "_");
  return chrome.i18n.getMessage(c, "");
}, getMessage:function(c, g) {
  var k = this.getString(c);
  for (param in g) {
    g[param] && (k = k.replace(new RegExp("%" + param, "g"), g[param]));
  }
  return k;
}};
function bmmVisual() {
}
bmmVisual.prototype = {RequestPermission:function(c, g) {
  window.webkitNotifications.requestPermission(c, [g]);
}, notif:function(c) {
  if (0 < window.webkitNotifications.checkPermission()) {
    this.RequestPermission(this.notif, c);
  } else {
    var g = webkitNotifications.createNotification("http://www.brandmymail.com/static/images/gmail.jpg", "BrandMyMail Message", c);
    g.show();
    setTimeout(function() {
      g.cancel();
    }, "15000");
  }
}, display:function(c) {
  this.notif(c);
}, activationRequest:function(c) {
  if (0 < window.webkitNotifications.checkPermission()) {
    this.RequestPermission(this.notif, c);
  } else {
    var g = webkitNotifications.createHTMLNotification(chrome.extension.getURL("notauthenticated.html"));
    g.onclose = function() {
      bmmPrefs.update(function() {
        bmmPrefs.getValue("username") && bmmPrefs.getValue("userkey");
      });
    };
    g.show();
    setTimeout(function() {
      g.cancel();
    }, "15000");
  }
}, openNewBmmTab:function() {
  chrome.tabs.create({url:bmmPrefs.getHost() + "/activation"});
}, onCloseAlert:function(c, g) {
  $j("#bmm-alert-container", g).remove();
}, _create_dialog:function(c) {
  var g = this, k = $j("<div>", c).attr("id", "bmm-alert-container").bind("click", function(b) {
    g.onCloseAlert(b, c);
  }), h = $j("<div>", c).attr("id", "bmm-alert-window").attr("role", "dialog").addClass("bmm-dialog").addClass("ui-dialog").addClass("ui-widget").addClass("ui-widget-content").addClass("ui-corner-all").bind("click", function(b) {
    return!1;
  }).prependTo(k), l = $j("<div>", c).attr("id", "bmm-alert-title").addClass("ui-dialog-titlebar").addClass("ui-widget-header").addClass("ui-corner-all").addClass("ui-helper-clearfix").bind("click", function(b) {
    return!1;
  }).prependTo(h);
  $j("<span>", c).attr("id", "bmm-alert-title-span").addClass("ui-dialog-title").text(bmmLanguage.getString("bmm.dialog.title")).bind("click", function(b) {
    return!1;
  }).prependTo(l);
  l = $j("<a>", c).attr("id", "bmm-alert-title-bar").attr("role", "button").addClass("ui-dialog-titlebar-close").addClass("ui-corner-all").bind("click", function(b) {
    g.onCloseAlert(b, c);
  }).appendTo(l);
  $j("<span>", c).addClass("ui-icon").addClass("ui-icon-closethick").bind("click", function(b) {
    g.onCloseAlert(b, c);
  }).prependTo(l);
  $j("<div>", c).attr("id", "bmm-alert-content").addClass("bmm-dialog-content").addClass("ui-dialog-content").addClass("ui-widget-content").bind("click", function(b) {
    return!1;
  }).appendTo(h);
  return k;
}, message_dialog:function(c, g) {
  var k = this, h = this._create_dialog(c), l = h.find("div#bmm-alert-content");
  g || (g = "Undefined BrandMyMail server error. Try in a few minutes");
  $j("<p>", c).text(g).appendTo(l);
  var b = $j("<div>", c).addClass("dock_buttons").bind("click", function(b) {
    return!1;
  });
  $j("<input>", c).attr("type", "button").addClass("button color-2").val("CLOSE").bind("click", function(b) {
    k.onCloseAlert(b, c);
  }).appendTo(b);
  b.appendTo(l);
  h.appendTo($j("body", c));
}, account_not_authorized_dialog:function(c, g, k) {
  var h = this;
  k = this._create_dialog(c);
  var l = k.find("div#bmm-alert-content"), b = $j("<p>", c), f = $j("<div>", c);
  if (g) {
    var n = bmmPrefs.getHost() + "/settings", t = $j("<a>", c).attr("href", "#").text("settings").click(function() {
      window.open(n);
    });
    $j("<p>", c).html("Your BrandMyMail account is connected to your gmail account <b>" + g[0] + "</b>.").appendTo(f);
    $j("<p>", c).html("You can connect more Gmail accounts on your BrandMyMail ").append(t).append(" page.").appendTo(f);
  } else {
    f.text("You don't have gmail accounts configured for BrandMyMail");
  }
  g = $j("<div>", c).addClass("dock_buttons").bind("click", function(b) {
    return!1;
  });
  $j("<input>", c).attr("type", "button").addClass("button color-2").val("CLOSE").bind("click", function(b) {
    h.onCloseAlert(b, c);
  }).appendTo(g);
  g.appendTo(f);
  f.appendTo(b);
  b.appendTo(l);
  k.appendTo($j("body", c));
}, extension_out_of_date:function(c) {
  var g = this, k = this._create_dialog(c), h = k.find("div#bmm-alert-content"), l = $j("<form>", c).attr({action:bmmPrefs.getHost() + "/static/extension/chrome/bmm.crx", method:"GET"}), b = $j("<p>", c), f = $j("<div>", c).text("Your Chrome extension is out of date. ");
  $j("<a>", c).attr("href", bmmPrefs.getHost() + "/static/extension/chrome/bmm.crx").text("Download the new version here!").click(function(b) {
    var f = $j(this).attr("href");
    gBrowser.contentWindow.location = f;
    g.onCloseAlert(b, c);
  }).appendTo(f);
  f.appendTo(l);
  f = $j("<div>", c).addClass("dock_buttons").bind("click", function(b) {
    return!1;
  });
  $j("<input>", c).attr("type", "button").addClass("submit button color-1").val("DOWNLOAD").bind("click", function(b) {
    var f = $j(this).closest("form");
    b = document.createEvent("HTMLEvents");
    b.initEvent("submit", !0, !0);
    f.get(0).dispatchEvent(b);
    g.onCloseAlert(b, c);
  }).appendTo(f);
  $j("<input>", c).attr("type", "button").addClass("button color-2").val("NO, THANKS").bind("click", function(b) {
    g.onCloseAlert(b, c);
  }).appendTo(f);
  f.appendTo(l);
  l.appendTo(b);
  b.appendTo(h);
  k.appendTo($j("body", c));
}, bmmFailIcon:function() {
  this.setIcon("failed");
}, bmmReadyIcon:function() {
  bmmPrefs.isActivated() ? this.setIcon("ready") : this.setIcon("installed");
}, bmmServiceIcon:function() {
  bmmPrefs.isActivated() ? this.setIcon("active") : this.setIcon("installed");
}, setIcon:function(c) {
}};
function bmmPreferences(c) {
  this.init(c);
}
bmmPreferences.prototype = {_preferences:[], _bmm_version:"0", init:function(c) {
  this._preferences = c;
  console.log("BMM extension version: " + this.getValue("version"));
  this._bmm_version = this.getValue("version");
}, update:function(c) {
  var g = this;
  chrome.extension.sendRequest({action:"get"}, function(k) {
    g._preferences = k;
    c && c();
  });
}, isActivated:function() {
  return "" != this.getValue("username") && "" != this.getValue("userkey");
}, getValue:function(c) {
  c = this._preferences[c];
  return void 0 != c ? c : "";
}, setValue:function(c, g) {
  var k = this;
  chrome.extension.sendRequest({action:"set", name:c, data:g}, function(c) {
    k._preferences = c;
  });
}, hasNext:function(c) {
  c = $j(c);
  return!!(c.next().length || c[0].nextSibling && $j.trim(c[0].nextSibling.nodeValue));
}, save:function() {
}, getHost:function(c) {
  var g = this.getValue("mode");
  c = c ? "http://" : "https://";
  return "local" == g ? c + this.getValue("localhost") : "dev" == g ? c + this.getValue("devhost") : c + this.getValue("livehost");
}, clear:function() {
}, getVersion:function() {
  return this._bmm_version;
}, getToken:function(c, g) {
  var k = this;
  chrome.extension.sendRequest({action:"get_token", host:k.getHost()}, function(h) {
    !h.token && g ? g(h.error) : h.token && c && (k.expireToken(), c(h.token));
  });
}, setToken:function(c) {
  chrome.extension.sendRequest({action:"set_token", token:c}, function(c) {
  });
}, expireToken:function() {
  var c = this;
  chrome.extension.sendRequest({action:"expire_token"}, function(g) {
    c._preferences = g;
  });
}, validateEmailAddress:function(c, g) {
  var k = null;
  if (!c) {
    return!1;
  }
  $j.each(g, function(g, l) {
    if (null == k && l.toString().toLowerCase() == c.toString().toLowerCase()) {
      return k = g, !1;
    }
  });
  return null != k ? !0 : !1;
}};
function bmmStatistics() {
}
bmmStatistics.prototype = {is_debug:!0, doc:null, msgid:"", msgversion:1, host:"", linkID:"", init:function(c, g, k, h, l) {
  this.msgid = k;
  this.msgversion = h;
  this.host = l;
  this.doc = c;
  this.linkID = g;
  this.showPopup();
}, onClose:function(c) {
  this.stop();
}, stop:function() {
  $j("#bmm-container", this.doc).remove();
  this.sendID = this.doc = this.host = this.query = "";
  return!0;
}, showIframe:function(c) {
  c.origin !== this.host || "small" != c.data && "big" != c.data || ($j("#bmm-dialog", this.doc).removeClass("bmm_big"), $j("#bmm-dialog", this.doc).removeClass("bmm_small"), $j("#bmm-dialog", this.doc).addClass("bmm_" + c.data), $j("#bmm-loader", this.doc).remove(), $j("#bmmIframe", this.doc).show());
}, showPopup:function() {
  var c = this, g = $j("<div>", this.doc).attr("id", "bmm-container").bind("click", function(g) {
    c.onClose(g);
  }).prependTo($j("body", this.doc)), g = $j("<div>", this.doc).attr("id", "bmm-dialog").addClass("bmm_small").bind("click", function(c) {
    return!1;
  }).prependTo(g);
  $j("<iframe>", this.doc).attr("name", "bmmIframe").attr("id", "bmmIframe").hide().prependTo(g);
  window.addEventListener("message", function(g) {
    c.showIframe(g);
  }, !1);
  var k = $j("<div>", this.doc).attr("id", "bmm-loader").prependTo(g);
  $j("<img>", this.doc).attr({src:this.host + "/static/images/template_editor/loading.gif", width:"50"}).prependTo(k);
  k = $j("<form>", this.doc).attr("target", "bmmIframe").attr("method", "post").attr("action", this.host + "/services/statistics").prependTo(g);
  $j("<input>", this.doc).attr("type", "hidden").attr("name", "msgid").attr("value", this.msgid).appendTo(k);
  $j("<input>", this.doc).attr("type", "hidden").attr("name", "msgversion").attr("value", this.msgversion).appendTo(k);
  $j("<input>", this.doc).attr("type", "hidden").attr("name", "username").attr("value", bmmPrefs.getValue("username")).appendTo(k);
  $j("<input>", this.doc).attr("type", "hidden").attr("name", "userkey").attr("value", bmmPrefs.getValue("userkey")).appendTo(k);
  $j("<input>", this.doc).attr("type", "hidden").attr("name", "browser").attr("value", "chrome").appendTo(k);
  $j("<input>", this.doc).attr("type", "hidden").attr("name", "version").attr("value", bmmPrefs.getVersion()).appendTo(k);
  k.get(0).submit();
  var k = $j("<ul>", this.doc).attr("id", "bmm-stat-dialog-actions"), h = $j("<li>", this.doc).attr("id", "close_dialog_preview").addClass("button color-2").bind("click", function(g) {
    c.onClose(g);
  });
  $j("<a>", this.doc).text(bmmLanguage.getString("bmm.dialog.cancel")).appendTo(h);
  h.appendTo(k);
  k.appendTo(g);
}};
function bmmPreview() {
}
bmmPreview.prototype = {is_debug:!0, doc:null, query:"", host:"", sendID:"", sendCallback:null, init:function(c, g, k, h, l) {
  this.query = k;
  this.host = h;
  this.doc = c;
  this.sendID = g;
  this.sendCallback = l;
  this.showPopup();
}, onSend:function(c) {
  var g = document.createElement("currentBMMPreviewElement");
  g.setAttribute("sendID", this.sendID);
  document.documentElement.appendChild(g);
  c = document.createEvent("Event");
  c.initEvent("bmmClickButton", !0, !1);
  g.dispatchEvent(c);
  this.sendCallback && (console.log("calling send callback..."), this.sendCallback());
  this.stop();
}, onClose:function(c) {
  this.stop();
}, stop:function() {
  $j("#bmm-container", this.doc).remove();
  this.sendID = this.doc = this.host = this.query = "";
  return!0;
}, showIframe:function(c) {
  "null" !== c.origin || "big" !== c.data && "small" !== c.data || ($j("#bmm-dialog", this.doc).removeClass("bmm_big"), $j("#bmm-dialog", this.doc).removeClass("bmm_small"), "small" == c.data || "big" == c.data ? $j("#bmm-dialog", this.doc).addClass("bmm_" + c.data) : ($j("#bmm-dialog", this.doc).addClass("bmm_small"), $j("#send_and_close_dialog_preview", this.doc).unbind("click"), $j("#send_and_close_dialog_preview", this.doc).attr("disabled", "disabled")), $j("#bmm-loader", this.doc).remove(), 
  $j("#bmmIframe", this.doc).show());
}, showPopup:function() {
  var c = this, g = $j("<div>", this.doc).attr("id", "bmm-container").bind("click", function(b) {
    c.onClose(b);
  }).prependTo($j("body", this.doc)), g = $j("<div>", this.doc).attr("id", "bmm-dialog").addClass("bmm_small").bind("click", function(b) {
    return!1;
  }).prependTo(g), k = $j("<iframe>", this.doc).attr("name", "bmmIframe").attr("id", "bmmIframe").attr("src", chrome.extension.getURL("preview.html")).hide().prependTo(g);
  window.addEventListener("message", function(b) {
    c.showIframe(b);
  }, !1);
  var h = $j("<div>", this.doc).attr("id", "bmm-loader").prependTo(g);
  $j("<img/>", this.doc).attr({src:this.host + bmmPrefs.getValue("static_url") + "images/template_editor/loading.gif", width:"50"}).prependTo(h);
  var l = {host:this.host, browser:"chrome", version:bmmPrefs.getVersion()};
  "to cc bcc subject body email from template format".split(" ").forEach(function(b) {
    l[b] = this.query[b];
  }, this);
  ["username", "userkey"].forEach(function(b) {
    l[b] = bmmPrefs.getValue(b);
  });
  this.query.direction && (l.direction = this.query.direction);
  k.load(function() {
    k[0].contentWindow.postMessage(JSON.stringify(l), "*");
  });
  var h = $j("<ul>", this.doc).attr("id", "bmm-dialog-actions"), b = $j("<li>", this.doc).attr("id", "close_dialog_preview").addClass("button color-2").bind("click", function(b) {
    c.onClose(b);
  });
  $j("<a>", this.doc).text(bmmLanguage.getString("bmm.dialog.cancel")).appendTo(b);
  b.appendTo(h);
  b = $j("<li>", this.doc).attr("id", "send_and_close_dialog_preview").addClass("button color-1").bind("click", function(b) {
    c.onSend(b);
  });
  $j("<a>", this.doc).text(bmmLanguage.getString("bmm.dialog.send")).appendTo(b);
  b.appendTo(h);
  h.appendTo(g);
}};
(function(c, g, k) {
  function h(b, f) {
    var g = this;
    g.element = b;
    g.options = c.extend({}, l, f);
    g._defaults = l;
    g._name = "bmmGmailOldCompose";
    g.id = null;
    g.parent = null;
    g.i18n = null;
    g.prefs = null;
    g.listeners = [];
    g.components = {};
    var h = c(g.element), k = setInterval(function() {
      h.hasClass("bmm-instance") || (clearInterval(k), g.init());
    }, 250);
  }
  var l = {};
  h.prototype.init = function() {
    var b = this;
    b.parent = b.options.parent;
    b.prefs = b.options.prefs;
    b.i18n = b.options.i18n;
    b.id = b.options.id;
    b.addListener("ready", function() {
      b.ready();
    });
    var f = c(b.element);
    f.addClass("bmm-instance");
    var g = f.find("form");
    b.components.from = function() {
      return f.find("select[name=from]");
    };
    b.components.to = function() {
      return f.find("textarea[name=to]");
    };
    b.components.cc = function() {
      return f.find("textarea[name=cc]");
    };
    b.components.bcc = function() {
      return f.find("textarea[name=bcc]");
    };
    b.components.subject = function() {
      return f.find("input[name=subject]");
    };
    b.components.ishtml = function() {
      return g.find("input[name=ishtml]");
    };
    b.components.sendButtons = function() {
      return f.find(".Q4uFlf [role=button]:not(.bmm)");
    };
    b.components.sendButton = function() {
      return f.find(".Q4uFlf [role=button]:not(.bmm):first");
    };
    b.components.toolbar = function() {
      return f.find(".Q4uFlf");
    };
    b.components.trackElement = function() {
      return f.find(".G-atb");
    };
    b.components.trackElementBmm = function() {
      return f.find(".G-atb.bmm");
    };
    b.components.fieldsContainer = function() {
      return g.find("table.eA:first");
    };
    b.components.editor = function() {
      var b = g.find("textarea[form=nosend]");
      return b.is(":visible") ? b : f.find("iframe").contents().find("body");
    };
    b.components["bmm-buttonSend"] = function() {
      return c(b.element).find(".bmmSndBtn");
    };
    b.components["bmm-buttonPreview"] = function() {
      return c(b.element).find(".bmmPrvBtn");
    };
    b.components["bmm-templates-row"] = function() {
      return c(b.element).find(".bmm-templates-row");
    };
    b.components["bmm-template"] = function() {
      return c(b.element).find("select[name=template]");
    };
    b.components["bmm-iconEdit"] = function() {
      return c(b.element).find(".edit-template");
    };
    b.components["bmm-iconSignature"] = function() {
      return c(b.element).find(".add-signature");
    };
    b.components["bmm-iconLogo"] = function() {
      return c(b.element).find(".bmm-logo");
    };
    b.components["bmm-toolbar"] = function() {
      return c(b.element).find(".bmm-composer-container");
    };
    b.fireEvent("ready");
    b.removeListener("ready", b.ready);
  };
  h.prototype.ready = function() {
    var b = this;
    b.log("Ready");
    b.addListener("send", function() {
      b.sendEmail();
    });
    b.addListener("preview", function() {
      b.templatePreview();
    });
    b.addListener("select-template", function() {
      b.selectTemplate();
    });
    b.addListener("update-templates", function() {
      b.updateTemplates();
    });
    b.addListener("add-signature", function() {
      b.addSignature();
    });
    b.addListener("edit-template", function() {
      b.editTemplate();
    });
    b.addListener("click-logo", function() {
      b.parent.openHome();
    });
    b.addListener("destroy", function() {
      b.destroy();
    });
    var f = b.createButtons(), g = b.getComponent("toolbar");
    c.each(f, function(b, c) {
      g.prepend(c);
    });
    f = b.createToobar();
    b.log("Injecting Toolbar");
    b.getComponent("fieldsContainer").append(f);
    b.getComponent("sendButtons").removeClass("T-I-KE").addClass("T-I-ax7");
    b.getComponent("trackElement").addClass("bmm");
    f = b.getComponent("editor");
    switch(b.prefs.getValue("mode")) {
      case "local":
        f.css("background", "green");
        break;
      case "dev":
        f.css("background", "yellow");
    }
    b.fireEvent("select-template");
  };
  h.prototype.getComponent = function(b) {
    return this.components[b]();
  };
  h.prototype.getEditorMode = function() {
    return this.getComponent("editor").is("textarea") ? "text" : "html";
  };
  h.prototype.pasteAtStart = function(b) {
    this.getComponent("editor").prepend(b);
  };
  h.prototype.pasteAtEnd = function(b) {
    this.getComponent("editor").append(b);
  };
  h.prototype.pasteBeforeQuoted = function(b) {
    var f = this.getComponent("editor").find(".gmail_quote");
    0 < f.length ? (f = f.get(0), c(f).before(b)) : this.pasteAtStart(b);
  };
  h.prototype.updateTemplates = function() {
    this.log("Updating templates");
    var b = this.parent.params.templates, f = this.getComponent("bmm-template"), g = f.val(), b = this.parent.createTemplateList(b, g);
    f.find("option").remove();
    c.each(b, function(b, g) {
      c(g).appendTo(f);
    });
    this.fireEvent("select-template");
  };
  h.prototype.addSignature = function() {
    var b = this, c = b.getEditorMode(), g = b.getComponent("bmm-template").val(), h = b.getComponent("editor");
    "text" == c ? b.showDialog("Cannot add signature when using text mode, Please switch to Rich Text editor mode") : (b.parent.getSignature(g, function(c) {
      c = b.parent.wrapSignatureHtml(b.id, g, c);
      var f = h.find("div[id=BMM_SIGNATURE" + b.id + "]");
      f.length ? (b.log("Replacing Signature"), f.replaceWith(c)) : (b.log("Appending Signature"), 0 < h.find(".gmail_quote").length ? (b.pasteBeforeQuoted(b.createElement("br")), b.pasteBeforeQuoted(b.createElement("br")), b.pasteBeforeQuoted(c), b.pasteBeforeQuoted(b.createElement("br")), b.pasteBeforeQuoted(b.createElement("br"))) : (b.pasteAtEnd(b.createElement("br")), b.pasteAtEnd(b.createElement("br")), b.pasteAtEnd(c), b.pasteAtEnd(b.createElement("br")), b.pasteAtEnd(b.createElement("br"))));
    }), b.log("Adding signature from template: " + g));
  };
  h.prototype.editTemplate = function() {
    var b = this.getComponent("bmm-template").val();
    this.parent.editTemplate(this.id, b);
  };
  h.prototype.getFormFields = function() {
    var b = {}, f = this.getComponent("to"), g = this.getComponent("cc"), h = this.getComponent("bcc"), k = this.getComponent("editor");
    b.from = this.getComponent("from").val();
    b.from = b.from ? b.from : "";
    b.to = "";
    b.cc = "";
    b.bcc = "";
    c.each(f, function(f, g) {
      b.to += " " + c(g).val();
    });
    c.each(g, function(f, g) {
      b.cc += " " + c(g).val();
    });
    c.each(h, function(f, g) {
      b.bcc += " " + c(g).val();
    });
    b.subject = this.getComponent("subject").val();
    b.format = this.getEditorMode();
    b.body = "text" == b.format ? k.val() : k.html();
    b.email = this.parent.user_email();
    b.template = this.getComponent("bmm-template").val();
    "rtl" == c("body", this.parent.doc).attr("dir") && (b.direction = "rtl");
    return b;
  };
  h.prototype.sendEmail = function() {
    this.log("Sending email");
    var b = this.getFormFields(), c = this.getComponent("sendButton"), g = this.getComponent("to"), h = this.getComponent("cc"), k = this.getComponent("bcc"), l = this.getComponent("editor"), y = this.getEditorMode();
    "text" == y ? this.showDialog("Cannot send email when using text mode, Please switch to Rich Text editor mode") : this.parent.sendEmail(b, c, g, h, k, l, y);
  };
  h.prototype.templatePreview = function() {
    var b = this, c = b.getFormFields();
    b.log("Preview Template...");
    b.parent.showPreviewTest(c, function() {
      b.fireEvent("send");
    });
  };
  h.prototype.selectTemplate = function() {
    var b = this.parent.params.default_template, c = this.getComponent("bmm-template"), g = c.val();
    this.log("Template selected id: " + g);
    "new" == g ? (c.val(b), this.parent.newTemplate(this.id)) : this.parent.hasSignature(g) ? this.getComponent("bmm-iconSignature").css("visibility", "visible") : this.getComponent("bmm-iconSignature").css("visibility", "hidden");
  };
  h.prototype.showDialog = function(b) {
    this.parent.showMessage(b);
  };
  h.prototype.destroy = function() {
    var b = c(this.element);
    this.log("Destroying instance");
    this.getComponent("bmm-iconSignature").unbind().remove();
    this.getComponent("bmm-iconEdit").unbind().remove();
    this.getComponent("bmm-iconLogo").unbind().remove();
    this.getComponent("bmm-buttonSend").unbind().remove();
    this.getComponent("bmm-buttonPreview").unbind().remove();
    this.getComponent("bmm-template").unbind().remove();
    this.getComponent("bmm-templates-row").unbind().remove();
    this.getComponent("bmm-toolbar").unbind().remove();
    this.components = this.listeners = this.element = this.id = null;
    b.removeData("plugin_bmmGmailOldCompose").removeClass("bmm-instance");
  };
  h.prototype.createElement = function(b) {
    return c("<" + b + ">", this.element);
  };
  h.prototype.createButtons = function() {
    var b = this;
    b.log("Creating Buttons");
    var c = b.getComponent("sendButton").clone().unbind();
    c.removeAttr("id").text(b.i18n.getString("bmm.gmail.button.send")).click(function() {
      b.fireEvent("send");
    });
    var g = c.clone();
    g.text(b.i18n.getString("bmm.gmail.button.preview")).click(function() {
      b.fireEvent("preview");
    });
    b.styleButton(c, "send");
    b.styleButton(g, "preview");
    return[g, c];
  };
  h.prototype.createToobar = function() {
    var b = this;
    b.log("Creating toolbar");
    var f = b.parent.params.templates, g = b.parent.params.default_template, h = b.createElement("tr"), k = b.createElement("div");
    k.addClass("bmm-icon bmm-logo").attr("data-tooltip", b.i18n.getString("bmm.gmail.button.logo.tooltip")).click(function() {
      b.fireEvent("click-logo");
    });
    var l = b.createElement("div");
    l.addClass("divider");
    var y = b.createElement("div");
    y.addClass("bmm-icon add-signature").attr("data-tooltip", b.i18n.getString("bmm.gmail.button.signature.tooltip")).click(function() {
      b.fireEvent("add-signature");
    });
    var J = b.createElement("div");
    J.addClass("bmm-icon edit-template").attr("data-tooltip", b.i18n.getString("bmm.gmail.button.edit.tooltip")).click(function() {
      b.fireEvent("edit-template");
    });
    var A = b.createElement("select");
    A.attr("name", "template").click(function() {
      b.fireEvent("select-template");
    });
    f = b.parent.createTemplateList(f, g);
    c.each(f, function(b, f) {
      c(f).appendTo(A);
    });
    f = b.createElement("table");
    g = b.createElement("tr").appendTo(f);
    g.addClass("bmm-templates-row");
    b.createElement("td").append(A).appendTo(g);
    b.createElement("td").append(J).appendTo(g);
    b.createElement("td").append(y).appendTo(g);
    b.createElement("td").addClass("td-spacer").appendTo(g);
    b.createElement("td").append(l).appendTo(g);
    b.createElement("td").append(k).appendTo(g);
    k = b.createElement("td").appendTo(h);
    b.createElement("label").text(b.i18n.getString("bmm.gmail.template.label")).addClass("eD").appendTo(k);
    b.createElement("td").append(f).addClass("eC").appendTo(h).addClass("bmm-composer-container");
    return h;
  };
  h.prototype.isDead = function() {
    return "none" == this.getComponent("trackElementBmm").css("display") ? !0 : 0 == this.getComponent("bmm-toolbar").size();
  };
  h.prototype.styleButton = function(b, c) {
    "send" == c ? b.removeClass("T-I-atl").addClass("T-I-ax7 bmm bmmSndBtn") : "preview" == c && b.removeClass("T-I-atl T-I-KE").addClass("T-I-ax7 bmm bmmPrvBtn");
    b.bind("mouseover", function(c) {
      b.addClass("T-I-JW");
    }).bind("mouseleave", function(c) {
      b.removeClass("T-I-JW").attr("aria-pressed", "false");
    }).bind("mousedown", function(c) {
      b.addClass("T-I-Je T-I-JO").attr("aria-pressed", "true");
    }).bind("mouseup mouseleave", function(c) {
      b.removeClass("T-I-JO T-I-Je").attr("aria-pressed", "false");
    });
  };
  h.prototype.addListener = function(b, c) {
    this.listeners.push({name:b, fn:c});
  };
  h.prototype.removeListener = function(b, f) {
    var g = [];
    c.each(this.listeners, function(c, h) {
      h.name == b && h.fn == f || g.push(h);
    });
    this.listeners = g;
  };
  h.prototype.fireEvent = function(b, f) {
    c.each(this.listeners, c.proxy(function(c, g) {
      g.name == b && g.fn.call(this, f);
    }, this));
  };
  h.prototype.log = function(b) {
    this.parent.log("bmmGmailOldCompose instance " + this.id + " : " + b);
  };
  c.fn.bmmGmailOldCompose = function(b) {
    return this.each(function() {
      c.data(this, "plugin_bmmGmailOldCompose") || c.data(this, "plugin_bmmGmailOldCompose", new h(this, b));
    });
  };
})(jQuery, window);
(function(c, g, k) {
  function h(b, f) {
    this.element = b;
    this.options = c.extend({}, l, f);
    this._defaults = l;
    this._name = "bmmGmailNewCompose";
    this.prefs = this.i18n = this.parent = this.id = null;
    this.listeners = [];
    this.components = {};
    this.init();
  }
  var l = {};
  h.prototype.init = function() {
    var b = this;
    b.parent = b.options.parent;
    b.prefs = b.options.prefs;
    b.i18n = b.options.i18n;
    b.id = b.options.id;
    b.addListener("ready", function() {
      b.ready();
    });
    var f = c(b.element);
    f.addClass("bmm-instance");
    var g = f.find("form");
    b.components.from = function() {
      return g.find("input[name=from]");
    };
    b.components.to = function() {
      return g.find("input[name=to]");
    };
    b.components.cc = function() {
      return g.find("input[name=cc]");
    };
    b.components.bcc = function() {
      return g.find("input[name=bcc]");
    };
    b.components.subject = function() {
      return g.find("input[name=subjectbox]");
    };
    b.components.body = function() {
      return g.find("input[name=body]");
    };
    b.components.ishtml = function() {
      return g.find("input[name=ishtml]");
    };
    b.components.quotedText = function() {
      return g.find("input[name=uet]");
    };
    b.components.draft = function() {
      return g.find("input[name=draft]");
    };
    b.components.sendButtons = function() {
      return c(b.element).find(".n1tfz td:first div[role=button]");
    };
    b.components.sendButton = function() {
      return c(b.element).find(".n1tfz td:first div[role=button]:last");
    };
    b.components.toolbar = function() {
      return c(b.element).find("div.aDh");
    };
    b.components.moreOptionsMenu = function() {
      return c(b.element).find(".jQjAxd");
    };
    b.components.plainTextOption = function() {
      return c(b.element).find(".jQjAxd .J-Ks[role=menuitem]:last");
    };
    b.components.editor = function() {
      var b = f.find("div.editable"), c = b.find("iframe");
      return c.length ? c.contents().find("body") : b;
    };
    b.components["bmm-buttonSend"] = function() {
      return c(b.element).find(".bmmSndBtn");
    };
    b.components["bmm-buttonPreview"] = function() {
      return c(b.element).find(".bmmPrvBtn");
    };
    b.components["bmm-template"] = function() {
      return c(b.element).find("select[name=template]");
    };
    b.components["bmm-iconEdit"] = function() {
      return c(b.element).find(".edit-template");
    };
    b.components["bmm-iconSignature"] = function() {
      return c(b.element).find(".add-signature");
    };
    b.components["bmm-iconLogo"] = function() {
      return c(b.element).find(".bmm-logo");
    };
    b.components["bmm-toolbar"] = function() {
      return c(b.element).find(".bmm-composer-container");
    };
    b.editorModeOnStart = 0 < c(b.element).find("span.oG").text().length ? "text" : "html";
    b.log("Editor mode: " + b.editorModeOnStart);
    b.fireEvent("ready");
    b.removeListener("ready", b.ready);
  };
  h.prototype.ready = function() {
    var b = this;
    b.log("Ready");
    b.addListener("send", function() {
      b.sendEmail();
    });
    b.addListener("preview", function() {
      b.templatePreview();
    });
    b.addListener("select-template", function() {
      b.selectTemplate();
    });
    b.addListener("update-templates", function() {
      b.updateTemplates();
    });
    b.addListener("add-signature", function() {
      b.addSignature();
    });
    b.addListener("edit-template", function() {
      b.editTemplate();
    });
    b.addListener("click-logo", function() {
      b.parent.openHome();
    });
    b.addListener("destroy", function() {
      b.destroy();
    });
    var c = b.createToobar();
    b.log("Injecting Toolbar");
    b.getComponent("toolbar").append(c);
    b.getComponent("sendButtons").removeClass("T-I-atl").addClass("T-I-ax7");
    c = b.getComponent("editor");
    switch(b.prefs.getValue("mode")) {
      case "local":
        c.css("background", "green");
        break;
      case "dev":
        c.css("background", "yellow");
    }
    b.fireEvent("select-template");
  };
  h.prototype.getComponent = function(b) {
    return this.components[b]();
  };
  h.prototype.getEditorMode = function() {
    var b = "html", b = this.getComponent("plainTextOption");
    return 0 < this.getComponent("editor").find("div:first").length ? "html" : b = 1 == b.length ? "true" == b.attr("aria-checked") ? "text" : "false" : this.editorModeOnStart;
  };
  h.prototype.pasteAtStart = function(b) {
    this.getComponent("editor").prepend(b);
  };
  h.prototype.pasteAtEnd = function(b) {
    this.getComponent("editor").append(b);
  };
  h.prototype.pasteBeforeQuoted = function(b) {
    var f = this.getComponent("editor").find(".gmail_quote");
    0 < f.length ? (f = f.get(0), c(f).before(b)) : this.pasteAtStart(b);
  };
  h.prototype.updateTemplates = function() {
    this.log("Updating templates");
    var b = this.parent.params.templates, f = this.getComponent("bmm-template"), g = f.val(), b = this.parent.createTemplateList(b, g);
    f.find("option").remove();
    c.each(b, function(b, g) {
      c(g).appendTo(f);
    });
    this.fireEvent("select-template");
  };
  h.prototype.addSignature = function() {
    var b = this, c = b.getEditorMode(), g = b.getComponent("bmm-template").val(), h = b.getComponent("editor");
    "text" == c ? b.showDialog("Cannot add signature when using text mode, Please switch to Rich Text editor mode") : (b.parent.getSignature(g, function(c) {
      c = b.parent.wrapSignatureHtml(b.id, g, c);
      var f = h.find("#BMM_SIGNATURE" + b.id);
      f.length ? (b.log("Replacing Signature"), f.replaceWith(c)) : (b.log("Appending Signature"), 0 < h.find(".gmail_quote").length ? (b.pasteBeforeQuoted(b.createElement("br")), b.pasteBeforeQuoted(b.createElement("br")), b.pasteBeforeQuoted(c), b.pasteBeforeQuoted(b.createElement("br")), b.pasteBeforeQuoted(b.createElement("br"))) : (b.pasteAtEnd(b.createElement("br")), b.pasteAtEnd(b.createElement("br")), b.pasteAtEnd(c), b.pasteAtEnd(b.createElement("br")), b.pasteAtEnd(b.createElement("br"))));
    }), b.log("Adding signature from template: " + g));
  };
  h.prototype.editTemplate = function() {
    var b = this.getComponent("bmm-template").val();
    this.parent.editTemplate(this.id, b);
  };
  h.prototype.getFormFields = function() {
    var b = {}, f = this.getComponent("to"), g = this.getComponent("cc"), h = this.getComponent("bcc"), k = this.getComponent("editor");
    b.from = this.getComponent("from").val();
    b.to = "";
    b.cc = "";
    b.bcc = "";
    c.each(f, function(f, g) {
      b.to += " " + c(g).val();
    });
    c.each(g, function(f, g) {
      b.cc += " " + c(g).val();
    });
    c.each(h, function(f, g) {
      b.bcc += " " + c(g).val();
    });
    b.subject = this.getComponent("subject").val();
    b.format = this.getEditorMode();
    b.body = k.html() + this.getComponent("quotedText").val();
    b.email = this.parent.user_email();
    b.template = this.getComponent("bmm-template").val();
    "rtl" == c("body", this.parent.doc).attr("dir") && (b.direction = "rtl");
    return b;
  };
  h.prototype.sendEmail = function() {
    this.log("Sending email");
    var b = this.getFormFields(), c = this.getComponent("sendButton"), g = this.getComponent("to"), h = this.getComponent("cc"), k = this.getComponent("bcc"), l = this.getComponent("editor"), y = this.getEditorMode();
    "text" == y ? this.showDialog("Cannot send email when using text mode, Please switch to Rich Text editor mode") : this.parent.sendEmail(b, c, g, h, k, l, y);
  };
  h.prototype.templatePreview = function() {
    var b = this, c = b.getFormFields();
    c.format = "html";
    b.log("Preview Template...");
    b.parent.showPreviewTest(c, function() {
      b.fireEvent("send");
    });
  };
  h.prototype.selectTemplate = function() {
    var b = this.parent.params.default_template, c = this.getComponent("bmm-template"), g = c.val();
    this.log("Template selected id: " + g);
    "new" == g ? (c.val(b), this.parent.newTemplate(this.id)) : this.parent.hasSignature(g) ? this.getComponent("bmm-iconSignature").css("visibility", "visible") : this.getComponent("bmm-iconSignature").css("visibility", "hidden");
  };
  h.prototype.showDialog = function(b) {
    this.parent.showMessage(b);
  };
  h.prototype.destroy = function() {
    var b = c(this.element);
    this.log("Destroying instance");
    this.getComponent("bmm-iconSignature").unbind().remove();
    this.getComponent("bmm-iconEdit").unbind().remove();
    this.getComponent("bmm-iconLogo").unbind().remove();
    this.getComponent("bmm-buttonSend").unbind().remove();
    this.getComponent("bmm-buttonPreview").unbind().remove();
    this.getComponent("bmm-template").unbind().remove();
    this.getComponent("bmm-toolbar").unbind().remove();
    this.components = this.listeners = this.element = this.id = null;
    b.removeClass("bmm-instance").removeData("plugin_bmmGmailNewCompose");
  };
  h.prototype.createElement = function(b) {
    return c("<" + b + ">", this.element);
  };
  h.prototype.createToobar = function() {
    var b = this;
    b.log("Creating toolbar");
    var f = b.parent.params.templates, g = b.parent.params.default_template, h = b.createElement("div");
    h.addClass("bmm-composer-container");
    var k = b.getComponent("sendButton").clone().unbind();
    k.text(b.i18n.getString("bmm.gmail.button.send")).click(function() {
      b.fireEvent("send");
    });
    var l = k.clone();
    l.text(b.i18n.getString("bmm.gmail.button.preview")).click(function() {
      b.fireEvent("preview");
    });
    b.styleButton(k, "send");
    b.styleButton(l, "preview");
    var y = b.createElement("div");
    y.addClass("bmm-icon bmm-logo").attr("data-tooltip", b.i18n.getString("bmm.gmail.button.logo.tooltip")).click(function() {
      b.fireEvent("click-logo");
    });
    var J = b.createElement("div");
    J.addClass("divider");
    var A = b.createElement("div");
    A.addClass("bmm-icon add-signature").attr("data-tooltip", b.i18n.getString("bmm.gmail.button.signature.tooltip")).click(function() {
      b.fireEvent("add-signature");
    });
    var P = b.createElement("div");
    P.addClass("bmm-icon edit-template").attr("data-tooltip", b.i18n.getString("bmm.gmail.button.edit.tooltip")).click(function() {
      b.fireEvent("edit-template");
    });
    var K = b.createElement("select");
    K.attr("name", "template").click(function() {
      b.fireEvent("select-template");
    });
    f = b.parent.createTemplateList(f, g);
    c.each(f, function(b, f) {
      c(f).appendTo(K);
    });
    f = b.createElement("table").appendTo(h);
    f = b.createElement("tr").appendTo(f);
    b.createElement("td").append(k).appendTo(f);
    b.createElement("td").append(l).appendTo(f);
    b.createElement("td").addClass("td-spacer").appendTo(f);
    b.createElement("td").append(K).appendTo(f);
    b.createElement("td").append(P).appendTo(f);
    b.createElement("td").append(A).appendTo(f);
    b.createElement("td").append(J).appendTo(f);
    b.createElement("td").append(y).appendTo(f);
    return h;
  };
  h.prototype.isDead = function() {
    return 0 == c(this.element).closest("html").length;
  };
  h.prototype.styleButton = function(b, c) {
    "send" == c ? b.removeClass("T-I-atl").addClass("T-I-ax7 bmm bmmSndBtn") : "preview" == c && b.removeClass("T-I-atl").addClass("T-I-ax7 bmm bmmPrvBtn");
    b.bind("mouseover", function(c) {
      b.addClass("T-I-JW");
    }).bind("mouseleave", function(c) {
      b.removeClass("T-I-JW").attr("aria-pressed", "false");
    }).bind("mousedown", function(c) {
      b.addClass("T-I-Je T-I-JO").attr("aria-pressed", "true");
    }).bind("mouseup mouseleave", function(c) {
      b.removeClass("T-I-JO T-I-Je").attr("aria-pressed", "false");
    });
  };
  h.prototype.addListener = function(b, c) {
    this.listeners.push({name:b, fn:c});
  };
  h.prototype.removeListener = function(b, f) {
    var g = [];
    c.each(this.listeners, function(c, h) {
      h.name == b && h.fn == f || g.push(h);
    });
    this.listeners = g;
  };
  h.prototype.fireEvent = function(b, f) {
    c.each(this.listeners, c.proxy(function(c, g) {
      g.name == b && g.fn.call(this, f);
    }, this));
  };
  h.prototype.log = function(b) {
    this.parent.log("bmmGmailNewCompose instance " + this.id + " : " + b);
  };
  c.fn.bmmGmailNewCompose = function(b) {
    return this.each(function() {
      c.data(this, "plugin_bmmGmailNewCompose") || c.data(this, "plugin_bmmGmailNewCompose", new h(this, b));
    });
  };
})(jQuery, window);
(function(c, g, k) {
  function h(f, g) {
    this.element = f;
    this.options = c.extend({}, b, g);
    this._defaults = b;
    this._name = "bmmGmailProcessingEmail";
    this.prefs = this.i18n = this.parent = this.id = null;
    this.listeners = [];
    this.components = {};
    this.init();
  }
  var l = g.document, b = {};
  h.prototype.init = function() {
    var b = this, g = c(b.element);
    b.parent = b.options.parent;
    b.prefs = b.options.prefs;
    b.i18n = b.options.i18n;
    b.id = b.options.id;
    g.addClass("bmm-message-instance");
    b.addListener("ready", function() {
      b.ready();
    });
    b.addListener("toggle", function() {
      b.toggleBody();
    });
    b.addListener("notification", function() {
      b.newNotification();
    });
    b.components.gmailMessageBlockContainer = function() {
      return g.find("div.G2");
    };
    b.components.gmailMessageBlock = function() {
      return g.find("div.G2 div:first");
    };
    b.components.gmailMessageBody = function() {
      return g.find("div.ii:first");
    };
    b.components.gmailMessageRecipient = function() {
      return g.find("span[email]:first");
    };
    b.components.gmailNotification = function() {
      return c(b.parent.doc).find(".ata-asE:first");
    };
    b.components.gmailNotificationMessage = function() {
      return c(b.parent.doc).find(".ata-asE:first span:first");
    };
    b.components.gmailNotificationShowLink = function() {
      return c(b.parent.doc).find(".ata-asE:first span[id]:first");
    };
    b.components.messageBody = function() {
      return g.find(".bmm-body-container");
    };
    b.fireEvent("ready");
    b.removeListener("ready", b.ready);
  };
  h.prototype.ready = function() {
    var b = this, g = c(b.element);
    b.log("Ready");
    b.addListener("destroy", function() {
      b.destroy();
    });
    var h = b.createMessage();
    b.getComponent("gmailMessageBlock").hide();
    b.getComponent("gmailMessageBlockContainer").append(h);
    var h = b.getComponent("gmailNotification"), k = b.getComponent("gmailMessageRecipient").attr("name");
    h.attr("bmm-recipient-name", k);
    var w = function(g) {
      "email-received-notification" == g.originalEvent.animationName && (c(l).unbind("animationstart webkitAnimationStart", w), b.fireEvent("notification"));
    };
    c(l).bind("animationstart webkitAnimationStart", w);
    0 < b.getComponent("gmailNotificationShowLink").length && b.fireEvent("notification");
    switch(b.prefs.getValue("mode")) {
      case "local":
        g.css("background", "green");
        break;
      case "dev":
        g.css("background", "yellow");
    }
  };
  h.prototype.newNotification = function() {
    var b = this;
    b.log("Notification changed...");
    var g = b.getComponent("gmailNotification"), h = b.getComponent("gmailNotificationMessage"), k = b.getComponent("gmailNotificationShowLink"), l = g.attr("bmm-recipient-name");
    2 < g.find("span").length && l && (k.one("click", function() {
      c(b.element).hide();
      b.fireEvent("destroy");
    }), 0 <= h.html().indexOf(l) && k.click());
  };
  h.prototype.toggleBody = function() {
    this.getComponent("messageBody").toggle();
  };
  h.prototype.createMessage = function() {
    var b = this;
    b.log("Creating Message Info...");
    var c = b.createElement("div");
    c.addClass("bmm-spinner");
    var g = b.createElement("div");
    g.addClass("bmm-text").text("Your message is being processed by BrandMyMail...");
    var h = b.createElement("a");
    h.addClass("gt").text("<< show email text >>").attr("href", "#").click(function() {
      b.fireEvent("toggle");
    });
    var k = b.createElement("div");
    k.addClass("bmm-text-container").append(c).append(g);
    c = b.createElement("div");
    c.addClass("bmm-action-container").append(h);
    h = b.createElement("div");
    h.addClass("bmm-body-container").append(b.getComponent("gmailMessageBody").clone()).hide();
    g = b.createElement("div");
    g.addClass("bmm-message-container").append(k).append(c).append(h);
    return g;
  };
  h.prototype.destroy = function() {
    var b = c(this.element);
    this.log("Destroying instance");
    this.getComponent("messageBody").unbind().remove();
    this.getComponent("gmailNotification").unbind();
    this.components = this.listeners = this.element = this.id = null;
    b.removeClass("bmm-message-instance").removeData("plugin_bmmGmailProcessingEmail");
  };
  h.prototype.getComponent = function(b) {
    return this.components[b]();
  };
  h.prototype.createElement = function(b) {
    return c("<" + b + ">", this.element);
  };
  h.prototype.addListener = function(b, c) {
    this.listeners.push({name:b, fn:c});
  };
  h.prototype.removeListener = function(b, g) {
    var h = [];
    c.each(this.listeners, function(c, k) {
      k.name == b && k.fn == g || h.push(k);
    });
    this.listeners = h;
  };
  h.prototype.fireEvent = function(b, g) {
    c.each(this.listeners, c.proxy(function(c, h) {
      h.name == b && h.fn.call(this, g);
    }, this));
  };
  h.prototype.log = function(b) {
    this.parent.log("bmmGmailProcessingEmail instance " + this.id + " : " + b);
  };
  c.fn.bmmGmailProcessingEmail = function(b) {
    return this.each(function() {
      c.data(this, "plugin_bmmGmailProcessingEmail") || c.data(this, "plugin_bmmGmailProcessingEmail", new h(this, b));
    });
  };
})(jQuery, window);
function bmmGmail(c) {
  this.doc = c;
  var g = this;
  c = "username=" + encodeURIComponent(bmmPrefs.getValue("username"));
  c += "&userkey=" + encodeURIComponent(bmmPrefs.getValue("userkey"));
  c += "&browser=chrome&version=" + encodeURIComponent(bmmPrefs.getVersion());
  g.bmmInjectCSS(g.doc);
  $j.ajax({type:"POST", url:bmmPrefs.getHost() + "/services/init", data:c, dataType:"json", success:function(c) {
    g.params = c;
    g.authorized_accounts = g.params.authorized_accounts ? g.params.authorized_accounts : [];
    bmmPrefs.setValue("static_url", g.params.static_url ? g.params.static_url : "/static/");
    window.addEventListener("message", function(c) {
      g.updateTemplates(c);
    }, !1);
    g.init();
  }, error:function(c) {
    bmmPrefs.setValue("static_url", "/nocache/static/");
    403 == c.status ? bmmBrowser.activationRequest(bmmLanguage.getString("bmm.error.activation")) : 412 == c.status ? bmmBrowser.extension_out_of_date(g.doc) : bmmBrowser.display(c.responseText, g.doc);
  }});
}
bmmGmail.prototype = {doc:null, content:null, params:null, sendButtonID:"", canvas:null, attempts:0, blockattempts:0, blockcounter:1, idcounter:1, is_blocked_bmm:!1, selected_template:[], instances:{}, log:function(c) {
  console.log(c);
}, user_email:function() {
  var c = $j("#gb", self.canvas).find(".gb_o .gb_K .gb_O").text(), g = $j("#gb", self.canvas).find("div.gbpc>span.gbps2:last").not(".authenticated_as").text(), k = $j("#guser", self.canvas).find("span.bA:first").find("span.L4").text(), c = extract_email(c), g = extract_email(g), k = extract_email(k), h = extract_email(document.title);
  if (c) {
    return c;
  }
  if (g) {
    return g;
  }
  if (k) {
    return k;
  }
  if (h) {
    return h;
  }
}, createGMailProcessingEmailInstance:function(c) {
  c = $j(c);
  if (!c.data("plugin_bmmGmailProcessingEmail")) {
    var g = this.idcounter++;
    c.bmmGmailProcessingEmail({parent:this, id:g, prefs:bmmPrefs, i18n:bmmLanguage});
  }
}, createGMailComposeInstance:function(c, g) {
  var k = this, h = $j(c), l = [];
  $j.each(k.instances, function(b, c) {
    c.isDead() && (l.push(c.id), c.fireEvent("destroy"));
  });
  $j.each(l, function(b, c) {
    delete k.instances[c];
  });
  if ("old" == g) {
    var b = h.data("plugin_bmmGmailOldCompose");
    void 0 == b && (b = k.idcounter++, h.bmmGmailOldCompose({parent:k, id:b, prefs:bmmPrefs, i18n:bmmLanguage}), b = h.data("plugin_bmmGmailOldCompose"), k.instances[b.id] = b);
  }
  "new" == g && (b = h.data("plugin_bmmGmailNewCompose"), void 0 == b && (b = k.idcounter++, h.bmmGmailNewCompose({parent:k, id:b, prefs:bmmPrefs, i18n:bmmLanguage}), b = h.data("plugin_bmmGmailNewCompose"), k.instances[b.id] = b));
}, init:function(c) {
  this.blockattempts = this.attempts = 0;
  this.canvas = this.sendButton = this.content = null;
  bmmPrefs.getValue("mode");
  c = this.doc.getElementsByTagName("body")[0];
  var g = $j("iframe#canvas_frame", c);
  0 == g.size() && (g = $j("div.ata-asE", c).next("div"));
  1 == g.size() ? (this.content = this.canvas = g, this.listen()) : this.log("Could not load canvas");
}, listen:function() {
  var c = this;
  $j(document).bind("animationstart webkitAnimationStart", function(g) {
    var k = g.originalEvent.animationName;
    g = $j(g.target);
    "new-gmail-compose-dialog" == k ? c.createGMailComposeInstance(g.parent(), "new") : "classic-gmail-compose" == k ? (g.hasClass("G-atb") && (g = g.parents(".ar4.x")), c.createGMailComposeInstance(g.parent(), "old")) : "email-being-processed" == k && c.createGMailProcessingEmailInstance(g.parents(".Bk"));
  });
  c.bmmInjectAnalytics();
}, createTemplateList:function(c, g) {
  var k = [];
  $j.each(c, function(b, c) {
    var h = $j("<option>").attr("value", c.template_id).text(c.template_name);
    c.template_id == g && h.attr("selected", "selected");
    k.push(h);
  });
  var h = $j("<option>").attr("disabled", "true"), l = $j("<option>").attr("value", "new").text(bmmLanguage.getString("bmm.gmail.templates.options.new"));
  k.push(h);
  k.push(l);
  return k;
}, updateTemplates:function(c) {
  if (c.origin === bmmPrefs.getHost(!0) && "close" != c.action) {
    var g = this;
    c = JSON.parse(c.data);
    var k = c.form, h = c.id;
    c = "username=" + encodeURIComponent(bmmPrefs.getValue("username"));
    c += "&userkey=" + encodeURIComponent(bmmPrefs.getValue("userkey"));
    c += "&browser=chrome&version=" + encodeURIComponent(bmmPrefs.getVersion());
    $j.ajax({type:"POST", url:bmmPrefs.getHost() + "/services/init", data:c, success:function(c) {
      var b = g.content.find("#bmm" + k).find('select[name="template"]');
      if (c = c && c.templates ? c.templates : "") {
        g.params.templates = c;
        b.empty();
        c = g.createTemplateList(c, h);
        for (var f in c) {
          c[f].appendTo(b);
        }
        g.selected_template[k] = b.val();
        b.change();
        $j.each(g.instances, function(b, c) {
          c.fireEvent("update-templates");
        });
      }
    }});
  }
}, checkTemplateSignature:function(c, g) {
  for (var k = 0;k < c.length;k++) {
    if (c[k].template_id == g && c[k].signature) {
      return!0;
    }
  }
  return!1;
}, bmmInjectAnalytics:function() {
  var c = this.content.find("#bmm_analytics");
  0 >= c.length && (c = $j("<iframe>", this.doc).attr({id:"bmm_analytics", name:"bmm_analytics", src:bmmPrefs.getHost() + "/analytics/gmail.html"}).hide(), c.appendTo(this.content));
}, bmmDispatchAnalyticsEvent:function(c) {
  var g = this.content.find("#bmm_analytics");
  if (0 < g.length) {
    var k = g.attr("src"), k = k.split("#")[0];
    g.attr("src", k + "#" + c + "_" + (new Date).getTime());
  }
}, bmmInjectCSS:function(c) {
  0 >= $j("#bmmcss", c).length && $j("<link/>", c).attr({id:"bmmcss", rel:"stylesheet", type:"text/css", href:bmmPrefs.getHost() + bmmPrefs.getValue("static_url") + "css/extension/style.css"}).appendTo($j("head", c));
}, showMessage:function(c) {
  bmmBrowser.message_dialog(this.doc, c);
}, openHome:function() {
  window.open(bmmPrefs.getHost(!0));
}, editTemplate:function(c, g) {
  this.bmmDispatchAnalyticsEvent("gmailEditTemplate");
  window.open(bmmPrefs.getHost(!0) + "/templates/" + g + "/?mode=extension&form=" + c, "bmmEditTemplate" + g);
}, newTemplate:function(c) {
  this.bmmDispatchAnalyticsEvent("gmailCreateTemplate");
  window.open(bmmPrefs.getHost(!0) + "/templates/new?mode=extension&form=" + c, "bmmEditTemplatenew");
}, getSignature:function(c, g) {
  var k = "username=" + encodeURIComponent(bmmPrefs.getValue("username")), k = k + ("&userkey=" + encodeURIComponent(bmmPrefs.getValue("userkey"))), k = k + ("&browser=chrome&version=" + encodeURIComponent(bmmPrefs.getVersion()));
  $j.ajax({type:"POST", data:k, url:bmmPrefs.getHost() + "/services/get_template_signature/" + c + "/", success:function(c) {
    g && g(c.html);
  }, error:function(c, g, b) {
    400 <= c.status && 500 > c.status ? bmmBrowser.message_dialog(self.doc, c.responseText) : bmmBrowser.message_dialog(self.doc, "Cannot insert Signature. Please, contact us.");
  }});
}, showPreviewTest:function(c, g) {
  if (!bmmPrefs.isActivated()) {
    return bmmBrowser.display(bmmLanguage.getString("bmm_status_installed")), !0;
  }
  if (!bmmPrefs.validateEmailAddress(this.user_email(), this.authorized_accounts)) {
    return bmmBrowser.account_not_authorized_dialog(this.doc, this.authorized_accounts, this.user_email()), !0;
  }
  try {
    var k = new bmmPreview;
    this.bmmDispatchAnalyticsEvent("gmailPreview");
    k.init(this.doc, void 0, c, bmmPrefs.getHost(), g);
  } catch (h) {
    this.log(h);
  }
  return!1;
}, sendEmail:function(c, g, k, h, l, b, f) {
  var n = this;
  if (bmmPrefs.isActivated()) {
    if (bmmPrefs.validateEmailAddress(n.user_email(), n.authorized_accounts)) {
      return validate_email_string(c.to) || validate_email_string(c.cc) || validate_email_string(c.bcc) ? bmmPrefs.getToken(function(t) {
        var v = bmmPrefs.getValue("mode");
        k.val("local" == v || "dev" == v ? "DEV (In Progress...) <mails@dev.brandmymail.com>" : "BMM (In Progress...) <mails@brandmymail.com>");
        h.val("");
        l.val("");
        n.bmmDispatchAnalyticsEvent("gmailSent");
        t = [{key:"EXTVERSION", value:bmmPrefs.getVersion(), encode:!1}, {key:"EXTBROWSER", value:"chrome", encode:!1}, {key:"MAILTO", value:c.to, encode:!0}, {key:"MAILCC", value:c.cc, encode:!0}, {key:"MAILBCC", value:c.bcc, encode:!0}, {key:"SENDER", value:c.email, encode:!0}, {key:"TEMPLATE", value:c.template, encode:!1}, {key:"TOKEN", value:t, encode:!1}];
        n.addMarkupToBodyTest(t, b, f);
        n.simulateGmailClickTest(g);
        return!0;
      }, function(b) {
        412 == b.status ? bmmBrowser.extension_out_of_date(n.doc) : 100 <= b.status ? bmmBrowser.message_dialog(n.doc, b.responseText) : bmmBrowser.message_dialog(n.doc, bmmLanguage.getString("bmm.error.serverdown"));
        return!0;
      }) : n.simulateGmailClickTest(g), !0;
    }
    bmmBrowser.account_not_authorized_dialog(n.doc, n.authorized_accounts, n.user_email());
  } else {
    bmmBrowser.display(bmmLanguage.getString("bmm_status_installed"));
  }
}, addMarkupToBodyTest:function(c, g, k) {
  var h = "";
  if (!c) {
    return!1;
  }
  "text" == k && (h = g.html(), h = h.replace(/\x3c!--BMM_START--\x3e.+\x3c!--BMM_END--\x3e/gi, ""));
  "html" == k && (h = g.clone(), h.filter(function() {
    return 8 == this.nodeType && ("BMM_START" == this.data || "BMM_END" == this.data);
  }).remove(), h.find("a").filter(function() {
    var b = "", c = "";
    this && this.attr && (b = this.attr("name"), c = this.attr("class"));
    return "BMM_" == b.substring(0, 4) && "BMM_TMP" == c;
  }), h = h.html());
  var l = "\x3c!--BMM_START--\x3e";
  $j.each(c, function(b, c) {
    if (c.value) {
      var g = c.key, h = c.encode ? $j.base64Encode(c.value) : c.value;
      l += '<a name="BMM_' + g + "_" + h + '" class="BMM_TMP"></a>';
    }
  });
  l += "\x3c!--BMM_END--\x3e";
  "html" == k && (h = l + h, g.html(h));
  "text" == k && (c = $j("<div>").text(l).html(), g.html(l + c + h));
  return!0;
}, simulateGmailClickTest:function(c) {
  c = c[0];
  var g = function(c, g) {
    var l = document.createEvent("MouseEvents");
    l.initEvent.apply(l, Array.prototype.slice.call(arguments, 1));
    c.dispatchEvent(l);
  };
  g(c, "mouseover", !0, !0);
  g(c, "mousedown", !0, !0);
  g(c, "click", !0, !0);
  g(c, "mouseup", !0, !0);
}, wrapSignatureHtml:function(c, g, k) {
  var h = $j("<div>");
  h.attr("id", "BMM_SIGNATURE" + c).attr("class", "BMM_SIGNATURE_TEMPLATE_" + g).append(k);
  return h;
}, hasSignature:function(c) {
  for (var g = this.params.templates, k = 0;k < g.length;k++) {
    if (g[k].template_id == c) {
      return g[k].signature;
    }
  }
  return!1;
}};
var $j = jQuery.noConflict(!0), bmmLanguage, bmmPrefs, bmmBrowser, gmail;
chrome.extension.sendRequest({action:"get"}, function(c) {
  bmmLanguage = new bmmLang;
  bmmPrefs = new bmmPreferences(c);
  bmmBrowser = new bmmVisual;
  gmail = new bmmGmail(document);
});

