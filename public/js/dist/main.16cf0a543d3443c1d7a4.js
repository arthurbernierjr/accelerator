/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Test {
  constructor() {
    _defineProperty(this, "main", () => {
      console.log('no other instructors got swagger like us');
    });
  }
}
// test
const test = new Test();
test.main();
window.highlightSyntax = () => {
  /* PrismJS 1.25.0
  https://prismjs.com/download.html#themes=prism-twilight&languages=markup+css+clike+javascript+c+coffeescript+crystal+ejs+git+go+haskell+kotlin+less+markup-templating+mongodb+objectivec+purescript+jsx+tsx+reason+ruby+sass+scss+solidity+typescript&plugins=line-numbers */
  var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
      var c = /\blang(?:uage)?-([\w-]+)\b/i,
        n = 0,
        e = {},
        M = {
          manual: u.Prism && u.Prism.manual,
          disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
          util: {
            encode: function e(n) {
              return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
            },
            type: function type(e) {
              return Object.prototype.toString.call(e).slice(8, -1);
            },
            objId: function objId(e) {
              return e.__id || Object.defineProperty(e, "__id", {
                value: ++n
              }), e.__id;
            },
            clone: function t(e, r) {
              var a, n;
              switch (r = r || {}, M.util.type(e)) {
                case "Object":
                  if (n = M.util.objId(e), r[n]) return r[n];
                  for (var i in a = {}, r[n] = a, e) e.hasOwnProperty(i) && (a[i] = t(e[i], r));
                  return a;
                case "Array":
                  return n = M.util.objId(e), r[n] ? r[n] : (a = [], r[n] = a, e.forEach(function (e, n) {
                    a[n] = t(e, r);
                  }), a);
                default:
                  return e;
              }
            },
            getLanguage: function getLanguage(e) {
              for (; e && !c.test(e.className);) e = e.parentElement;
              return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
            },
            currentScript: function currentScript() {
              if ("undefined" == typeof document) return null;
              if ("currentScript" in document) return document.currentScript;
              try {
                throw new Error();
              } catch (e) {
                var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                if (n) {
                  var t = document.getElementsByTagName("script");
                  for (var r in t) if (t[r].src == n) return t[r];
                }
                return null;
              }
            },
            isActive: function isActive(e, n, t) {
              for (var r = "no-" + n; e;) {
                var a = e.classList;
                if (a.contains(n)) return !0;
                if (a.contains(r)) return !1;
                e = e.parentElement;
              }
              return !!t;
            }
          },
          languages: {
            plain: e,
            plaintext: e,
            text: e,
            txt: e,
            extend: function extend(e, n) {
              var t = M.util.clone(M.languages[e]);
              for (var r in n) t[r] = n[r];
              return t;
            },
            insertBefore: function insertBefore(t, e, n, r) {
              var a = (r = r || M.languages)[t],
                i = {};
              for (var l in a) if (a.hasOwnProperty(l)) {
                if (l == e) for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
                n.hasOwnProperty(l) || (i[l] = a[l]);
              }
              var s = r[t];
              return r[t] = i, M.languages.DFS(M.languages, function (e, n) {
                n === s && e != t && (this[e] = i);
              }), i;
            },
            DFS: function e(n, t, r, a) {
              a = a || {};
              var i = M.util.objId;
              for (var l in n) if (n.hasOwnProperty(l)) {
                t.call(n, l, n[l], r || l);
                var o = n[l],
                  s = M.util.type(o);
                "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, t, l, a)) : (a[i(o)] = !0, e(o, t, null, a));
              }
            }
          },
          plugins: {},
          highlightAll: function highlightAll(e, n) {
            M.highlightAllUnder(document, e, n);
          },
          highlightAllUnder: function highlightAllUnder(e, n, t) {
            var r = {
              callback: t,
              container: e,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            M.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), M.hooks.run("before-all-elements-highlight", r);
            for (var a, i = 0; a = r.elements[i++];) M.highlightElement(a, !0 === n, r.callback);
          },
          highlightElement: function highlightElement(e, n, t) {
            var r = M.util.getLanguage(e),
              a = M.languages[r];
            e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r;
            var i = e.parentElement;
            i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + r);
            var l = {
              element: e,
              language: r,
              grammar: a,
              code: e.textContent
            };
            function o(e) {
              l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), t && t.call(l.element);
            }
            if (M.hooks.run("before-sanity-check", l), (i = l.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), !l.code) return M.hooks.run("complete", l), void (t && t.call(l.element));
            if (M.hooks.run("before-highlight", l), l.grammar) {
              if (n && u.Worker) {
                var s = new Worker(M.filename);
                s.onmessage = function (e) {
                  o(e.data);
                }, s.postMessage(JSON.stringify({
                  language: l.language,
                  code: l.code,
                  immediateClose: !0
                }));
              } else o(M.highlight(l.code, l.grammar, l.language));
            } else o(M.util.encode(l.code));
          },
          highlight: function highlight(e, n, t) {
            var r = {
              code: e,
              grammar: n,
              language: t
            };
            return M.hooks.run("before-tokenize", r), r.tokens = M.tokenize(r.code, r.grammar), M.hooks.run("after-tokenize", r), W.stringify(M.util.encode(r.tokens), r.language);
          },
          tokenize: function tokenize(e, n) {
            var t = n.rest;
            if (t) {
              for (var r in t) n[r] = t[r];
              delete n.rest;
            }
            var a = new i();
            return I(a, a.head, e), function e(n, t, r, a, i, l) {
              for (var o in r) if (r.hasOwnProperty(o) && r[o]) {
                var s = r[o];
                s = Array.isArray(s) ? s : [s];
                for (var u = 0; u < s.length; ++u) {
                  if (l && l.cause == o + "," + u) return;
                  var c = s[u],
                    g = c.inside,
                    f = !!c.lookbehind,
                    h = !!c.greedy,
                    d = c.alias;
                  if (h && !c.pattern.global) {
                    var p = c.pattern.toString().match(/[imsuy]*$/)[0];
                    c.pattern = RegExp(c.pattern.source, p + "g");
                  }
                  for (var v = c.pattern || c, m = a.next, y = i; m !== t.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                    var b = m.value;
                    if (t.length > n.length) return;
                    if (!(b instanceof W)) {
                      var k,
                        x = 1;
                      if (h) {
                        if (!(k = z(v, y, n, f)) || k.index >= n.length) break;
                        var w = k.index,
                          A = k.index + k[0].length,
                          P = y;
                        for (P += m.value.length; P <= w;) m = m.next, P += m.value.length;
                        if (P -= m.value.length, y = P, m.value instanceof W) continue;
                        for (var E = m; E !== t.tail && (P < A || "string" == typeof E.value); E = E.next) x++, P += E.value.length;
                        x--, b = n.slice(y, P), k.index -= y;
                      } else if (!(k = z(v, 0, b, f))) continue;
                      var w = k.index,
                        S = k[0],
                        O = b.slice(0, w),
                        L = b.slice(w + S.length),
                        N = y + b.length;
                      l && N > l.reach && (l.reach = N);
                      var j = m.prev;
                      O && (j = I(t, j, O), y += O.length), q(t, j, x);
                      var C = new W(o, g ? M.tokenize(S, g) : S, d, S);
                      if (m = I(t, j, C), L && I(t, m, L), 1 < x) {
                        var _ = {
                          cause: o + "," + u,
                          reach: N
                        };
                        e(n, t, r, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach);
                      }
                    }
                  }
                }
              }
            }(e, a, n, a.head, 0), function (e) {
              var n = [],
                t = e.head.next;
              for (; t !== e.tail;) n.push(t.value), t = t.next;
              return n;
            }(a);
          },
          hooks: {
            all: {},
            add: function add(e, n) {
              var t = M.hooks.all;
              t[e] = t[e] || [], t[e].push(n);
            },
            run: function run(e, n) {
              var t = M.hooks.all[e];
              if (t && t.length) for (var r, a = 0; r = t[a++];) r(n);
            }
          },
          Token: W
        };
      function W(e, n, t, r) {
        this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length;
      }
      function z(e, n, t, r) {
        e.lastIndex = n;
        var a = e.exec(t);
        if (a && r && a[1]) {
          var i = a[1].length;
          a.index += i, a[0] = a[0].slice(i);
        }
        return a;
      }
      function i() {
        var e = {
            value: null,
            prev: null,
            next: null
          },
          n = {
            value: null,
            prev: e,
            next: null
          };
        e.next = n, this.head = e, this.tail = n, this.length = 0;
      }
      function I(e, n, t) {
        var r = n.next,
          a = {
            value: t,
            prev: n,
            next: r
          };
        return n.next = a, r.prev = a, e.length++, a;
      }
      function q(e, n, t) {
        for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
        (n.next = r).prev = n, e.length -= a;
      }
      if (u.Prism = M, W.stringify = function n(e, t) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) {
          var r = "";
          return e.forEach(function (e) {
            r += n(e, t);
          }), r;
        }
        var a = {
            type: e.type,
            content: n(e.content, t),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t
          },
          i = e.alias;
        i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
        var l = "";
        for (var o in a.attributes) l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
        return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";
      }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
        var n = JSON.parse(e.data),
          t = n.language,
          r = n.code,
          a = n.immediateClose;
        u.postMessage(M.highlight(r, M.languages[t], t)), a && u.close();
      }, !1)), M;
      var t = M.util.currentScript();
      function r() {
        M.manual || M.highlightAll();
      }
      if (t && (M.filename = t.src, t.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
        var a = document.readyState;
        "loading" === a || "interactive" === a && t && t.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16);
      }
      return M;
    }(_self);
   true && module.exports && (module.exports = Prism), "undefined" != typeof __webpack_require__.g && (__webpack_require__.g.Prism = Prism);
  Prism.languages.markup = {
    comment: {
      pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
      greedy: !0
    },
    prolog: {
      pattern: /<\?[\s\S]+?\?>/,
      greedy: !0
    },
    doctype: {
      pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: {
          pattern: /"[^"]*"|'[^']*'/,
          greedy: !0
        },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: {
      pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
      greedy: !0
    },
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: [{
      pattern: /&[\da-z]{1,8};/i,
      alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
  }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
  }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function value(a, e) {
      var s = {};
      s["language-" + e] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: Prism.languages[e]
      }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
      var t = {
        "included-cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: s
        }
      };
      t["language-" + e] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[e]
      };
      var n = {};
      n[a] = {
        pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, function () {
          return a;
        }), "i"),
        lookbehind: !0,
        greedy: !0,
        inside: t
      }, Prism.languages.insertBefore("markup", "cdata", n);
    }
  }), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function value(a, e) {
      Prism.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [e, "language-" + e],
                inside: Prism.languages[e]
              },
              punctuation: [{
                pattern: /^=/,
                alias: "attr-equals"
              }, /"|'/]
            }
          }
        }
      });
    }
  }), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml;
  !function (s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector"
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: {
            pattern: RegExp("^" + e.source + "$"),
            alias: "url"
          }
        }
      },
      selector: {
        pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
        lookbehind: !0
      },
      string: {
        pattern: e,
        greedy: !0
      },
      property: {
        pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: {
        pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
        lookbehind: !0
      },
      punctuation: /[(){};:,]/
    }, s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"));
  }(Prism);
  Prism.languages.clike = {
    comment: [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: !0,
      greedy: !0
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: !0,
      greedy: !0
    }],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
  Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
      lookbehind: !0
    }],
    keyword: [{
      pattern: /((?:^|\})\s*)catch\b/,
      lookbehind: !0
    }, {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: Prism.languages.regex
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/
      }
    },
    "function-variable": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function"
    },
    parameter: [{
      pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }, {
      pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
      lookbehind: !0,
      inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  }), Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
      pattern: /^#!.*/,
      greedy: !0,
      alias: "comment"
    },
    "template-string": {
      pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")), Prism.languages.js = Prism.languages.javascript;
  Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
      pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
      greedy: !0
    },
    "class-name": {
      pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
      lookbehind: !0
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
  }), Prism.languages.insertBefore("c", "string", {
    macro: {
      pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: !0,
      greedy: !0,
      alias: "property",
      inside: {
        string: [{
          pattern: /^(#\s*include\s*)<[^>]+>/,
          lookbehind: !0
        }, Prism.languages.c.string],
        comment: Prism.languages.c.comment,
        "macro-name": [{
          pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
          lookbehind: !0
        }, {
          pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
          lookbehind: !0,
          alias: "function"
        }],
        directive: {
          pattern: /^(#\s*)[a-z]+/,
          lookbehind: !0,
          alias: "keyword"
        },
        "directive-hash": /^#/,
        punctuation: /##|\\(?=[\r\n])/,
        expression: {
          pattern: /\S[\s\S]*/,
          inside: Prism.languages.c
        }
      }
    },
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
  }), delete Prism.languages.c.boolean;
  !function (e) {
    var t = /#(?!\{).+/,
      n = {
        pattern: /#\{[^}]+\}/,
        alias: "variable"
      };
    e.languages.coffeescript = e.languages.extend("javascript", {
      comment: t,
      string: [{
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: !0
      }, {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: !0,
        inside: {
          interpolation: n
        }
      }],
      keyword: /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
      "class-member": {
        pattern: /@(?!\d)\w+/,
        alias: "variable"
      }
    }), e.languages.insertBefore("coffeescript", "comment", {
      "multiline-comment": {
        pattern: /###[\s\S]+?###/,
        alias: "comment"
      },
      "block-regex": {
        pattern: /\/{3}[\s\S]*?\/{3}/,
        alias: "regex",
        inside: {
          comment: t,
          interpolation: n
        }
      }
    }), e.languages.insertBefore("coffeescript", "string", {
      "inline-javascript": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: {
          delimiter: {
            pattern: /^`|`$/,
            alias: "punctuation"
          },
          script: {
            pattern: /[\s\S]+/,
            alias: "language-javascript",
            inside: e.languages.javascript
          }
        }
      },
      "multiline-string": [{
        pattern: /'''[\s\S]*?'''/,
        greedy: !0,
        alias: "string"
      }, {
        pattern: /"""[\s\S]*?"""/,
        greedy: !0,
        alias: "string",
        inside: {
          interpolation: n
        }
      }]
    }), e.languages.insertBefore("coffeescript", "keyword", {
      property: /(?!\d)\w+(?=\s*:(?!:))/
    }), delete e.languages.coffeescript["template-string"], e.languages.coffee = e.languages.coffeescript;
  }(Prism);
  !function (e) {
    e.languages.ruby = e.languages.extend("clike", {
      comment: [/#.*/, {
        pattern: /^=begin\s[\s\S]*?^=end/m,
        greedy: !0
      }],
      "class-name": {
        pattern: /(\b(?:class)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:BEGIN|END|alias|and|begin|break|case|class|def|define_method|defined|do|each|else|elsif|end|ensure|extend|for|if|in|include|module|new|next|nil|not|or|prepend|private|protected|public|raise|redo|require|rescue|retry|return|self|super|then|throw|undef|unless|until|when|while|yield)\b/
    });
    var n = {
      pattern: /#\{[^}]+\}/,
      inside: {
        delimiter: {
          pattern: /^#\{|\}$/,
          alias: "tag"
        },
        rest: e.languages.ruby
      }
    };
    delete e.languages.ruby.function, e.languages.insertBefore("ruby", "keyword", {
      regex: [{
        pattern: RegExp("%r(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")[egimnosux]{0,6}"),
        greedy: !0,
        inside: {
          interpolation: n
        }
      }, {
        pattern: /(^|[^/])\/(?!\/)(?:\[[^\r\n\]]+\]|\\.|[^[/\\\r\n])+\/[egimnosux]{0,6}(?=\s*(?:$|[\r\n,.;})#]))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          interpolation: n
        }
      }],
      variable: /[@$]+[a-zA-Z_]\w*(?:[?!]|\b)/,
      symbol: {
        pattern: /(^|[^:]):[a-zA-Z_]\w*(?:[?!]|\b)/,
        lookbehind: !0
      },
      "method-definition": {
        pattern: /(\bdef\s+)[\w.]+/,
        lookbehind: !0,
        inside: {
          function: /\w+$/,
          rest: e.languages.ruby
        }
      }
    }), e.languages.insertBefore("ruby", "number", {
      builtin: /\b(?:Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Fixnum|Float|Hash|IO|Integer|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|Stat|String|Struct|Symbol|TMS|Thread|ThreadGroup|Time|TrueClass)\b/,
      constant: /\b[A-Z]\w*(?:[?!]|\b)/
    }), e.languages.ruby.string = [{
      pattern: RegExp("%[qQiIwWxs]?(?:" + ["([^a-zA-Z0-9\\s{(\\[<])(?:(?!\\1)[^\\\\]|\\\\[^])*\\1", "\\((?:[^()\\\\]|\\\\[^])*\\)", "\\{(?:[^#{}\\\\]|#(?:\\{[^}]+\\})?|\\\\[^])*\\}", "\\[(?:[^\\[\\]\\\\]|\\\\[^])*\\]", "<(?:[^<>\\\\]|\\\\[^])*>"].join("|") + ")"),
      greedy: !0,
      inside: {
        interpolation: n
      }
    }, {
      pattern: /("|')(?:#\{[^}]+\}|#(?!\{)|\\(?:\r\n|[\s\S])|(?!\1)[^\\#\r\n])*\1/,
      greedy: !0,
      inside: {
        interpolation: n
      }
    }, {
      pattern: /<<[-~]?([a-z_]\w*)[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<[-~]?[a-z_]\w*|[a-z_]\w*$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<[-~]?/
          }
        },
        interpolation: n
      }
    }, {
      pattern: /<<[-~]?'([a-z_]\w*)'[\r\n](?:.*[\r\n])*?[\t ]*\1/i,
      alias: "heredoc-string",
      greedy: !0,
      inside: {
        delimiter: {
          pattern: /^<<[-~]?'[a-z_]\w*'|[a-z_]\w*$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<[-~]?'|'$/
          }
        }
      }
    }], e.languages.rb = e.languages.ruby;
  }(Prism);
  !function (e) {
    e.languages.crystal = e.languages.extend("ruby", {
      keyword: [/\b(?:__DIR__|__END_LINE__|__FILE__|__LINE__|abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|require|rescue|return|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield)\b/, {
        pattern: /(\.\s*)(?:is_a|responds_to)\?/,
        lookbehind: !0
      }],
      number: /\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/
    }), e.languages.insertBefore("crystal", "string", {
      attribute: {
        pattern: /@\[.+?\]/,
        alias: "attr-name",
        inside: {
          delimiter: {
            pattern: /^@\[|\]$/,
            alias: "tag"
          },
          rest: e.languages.crystal
        }
      },
      expansion: [{
        pattern: /\{\{.+?\}\}/,
        inside: {
          delimiter: {
            pattern: /^\{\{|\}\}$/,
            alias: "tag"
          },
          rest: e.languages.crystal
        }
      }, {
        pattern: /\{%.+?%\}/,
        inside: {
          delimiter: {
            pattern: /^\{%|%\}$/,
            alias: "tag"
          },
          rest: e.languages.crystal
        }
      }]
    });
  }(Prism);
  !function (h) {
    function v(e, n) {
      return "___" + e.toUpperCase() + n + "___";
    }
    Object.defineProperties(h.languages["markup-templating"] = {}, {
      buildPlaceholders: {
        value: function value(a, r, e, o) {
          if (a.language === r) {
            var c = a.tokenStack = [];
            a.code = a.code.replace(e, function (e) {
              if ("function" == typeof o && !o(e)) return e;
              for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));) ++t;
              return c[t] = e, n;
            }), a.grammar = h.languages.markup;
          }
        }
      },
      tokenizePlaceholders: {
        value: function value(p, k) {
          if (p.language === k && p.tokenStack) {
            p.grammar = h.languages[k];
            var m = 0,
              d = Object.keys(p.tokenStack);
            !function e(n) {
              for (var t = 0; t < n.length && !(m >= d.length); t++) {
                var a = n[t];
                if ("string" == typeof a || a.content && "string" == typeof a.content) {
                  var r = d[m],
                    o = p.tokenStack[r],
                    c = "string" == typeof a ? a : a.content,
                    i = v(k, r),
                    u = c.indexOf(i);
                  if (-1 < u) {
                    ++m;
                    var g = c.substring(0, u),
                      l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
                      s = c.substring(u + i.length),
                      f = [];
                    g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;
                  }
                } else a.content && e(a.content);
              }
              return n;
            }(p.tokens);
          }
        }
      }
    });
  }(Prism);
  !function (e) {
    e.languages.ejs = {
      delimiter: {
        pattern: /^<%[-_=]?|[-_]?%>$/,
        alias: "punctuation"
      },
      comment: /^#[\s\S]*/,
      "language-javascript": {
        pattern: /[\s\S]+/,
        inside: e.languages.javascript
      }
    }, e.hooks.add("before-tokenize", function (a) {
      e.languages["markup-templating"].buildPlaceholders(a, "ejs", /<%(?!%)[\s\S]+?%>/g);
    }), e.hooks.add("after-tokenize", function (a) {
      e.languages["markup-templating"].tokenizePlaceholders(a, "ejs");
    }), e.languages.eta = e.languages.ejs;
  }(Prism);
  Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    command: {
      pattern: /^.*\$ git .*$/m,
      inside: {
        parameter: /\s--?\w+/m
      }
    },
    coord: /^@@.*@@$/m,
    "commit-sha1": /^commit \w{40}$/m
  };
  Prism.languages.go = Prism.languages.extend("clike", {
    string: {
      pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: !0
    },
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    boolean: /\b(?:_|false|iota|nil|true)\b/,
    number: /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    builtin: /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
  }), delete Prism.languages.go["class-name"];
  Prism.languages.haskell = {
    comment: {
      pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\/])(?:--(?:(?=.)[^-!#$%*+=?&@|~.:<>^\\\/].*|$)|\{-[\s\S]*?-\})/m,
      lookbehind: !0
    },
    char: {
      pattern: /'(?:[^\\']|\\(?:[abfnrtv\\"'&]|\^[A-Z@[\]^_]|ACK|BEL|BS|CAN|CR|DC1|DC2|DC3|DC4|DEL|DLE|EM|ENQ|EOT|ESC|ETB|ETX|FF|FS|GS|HT|LF|NAK|NUL|RS|SI|SO|SOH|SP|STX|SUB|SYN|US|VT|\d+|o[0-7]+|x[0-9a-fA-F]+))'/,
      alias: "string"
    },
    string: {
      pattern: /"(?:[^\\"]|\\(?:\S|\s+\\))*"/,
      greedy: !0
    },
    keyword: /\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b/,
    "import-statement": {
      pattern: /(^[\t ]*)import\s+(?:qualified\s+)?(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*(?:\s+as\s+(?:[A-Z][\w']*)(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
      lookbehind: !0,
      inside: {
        keyword: /\b(?:as|hiding|import|qualified)\b/,
        punctuation: /\./
      }
    },
    builtin: /\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\b/,
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0o[0-7]+|0x[0-9a-f]+)\b/i,
    operator: [{
      pattern: /`(?:[A-Z][\w']*\.)*[_a-z][\w']*`/,
      greedy: !0
    }, {
      pattern: /(\s)\.(?=\s)/,
      lookbehind: !0
    }, /[-!#$%*+=?&@|~:<>^\\\/][-!#$%*+=?&@|~.:<>^\\\/]*|\.[-!#$%*+=?&@|~.:<>^\\\/]+/],
    hvariable: {
      pattern: /\b(?:[A-Z][\w']*\.)*[_a-z][\w']*/,
      inside: {
        punctuation: /\./
      }
    },
    constant: {
      pattern: /\b(?:[A-Z][\w']*\.)*[A-Z][\w']*/,
      inside: {
        punctuation: /\./
      }
    },
    punctuation: /[{}[\];(),.:]/
  }, Prism.languages.hs = Prism.languages.haskell;
  !function (e) {
    e.languages.kotlin = e.languages.extend("clike", {
      keyword: {
        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: !0
      },
      function: [{
        pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,
        greedy: !0
      }, {
        pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,
        lookbehind: !0,
        greedy: !0
      }],
      number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    }), delete e.languages.kotlin["class-name"], e.languages.insertBefore("kotlin", "string", {
      "raw-string": {
        pattern: /("""|''')[\s\S]*?\1/,
        alias: "string"
      }
    }), e.languages.insertBefore("kotlin", "keyword", {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: "builtin"
      }
    }), e.languages.insertBefore("kotlin", "function", {
      label: {
        pattern: /\b\w+@|@\w+\b/,
        alias: "symbol"
      }
    });
    var n = [{
      pattern: /\$\{[^}]+\}/,
      inside: {
        delimiter: {
          pattern: /^\$\{|\}$/,
          alias: "variable"
        },
        rest: e.languages.kotlin
      }
    }, {
      pattern: /\$\w+/,
      alias: "variable"
    }];
    e.languages.kotlin.string.inside = e.languages.kotlin["raw-string"].inside = {
      interpolation: n
    }, e.languages.kt = e.languages.kotlin, e.languages.kts = e.languages.kotlin;
  }(Prism);
  Prism.languages.less = Prism.languages.extend("css", {
    comment: [/\/\*[\s\S]*?\*\//, {
      pattern: /(^|[^\\])\/\/.*/,
      lookbehind: !0
    }],
    atrule: {
      pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        punctuation: /[:()]/
      }
    },
    selector: {
      pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
      inside: {
        variable: /@+[\w-]+/
      }
    },
    property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
    operator: /[+\-*\/]/
  }), Prism.languages.insertBefore("less", "property", {
    variable: [{
      pattern: /@[\w-]+\s*:/,
      inside: {
        punctuation: /:/
      }
    }, /@@?[\w-]+/],
    "mixin-usage": {
      pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
      lookbehind: !0,
      alias: "function"
    }
  });
  !function ($) {
    var e = ["$eq", "$gt", "$gte", "$in", "$lt", "$lte", "$ne", "$nin", "$and", "$not", "$nor", "$or", "$exists", "$type", "$expr", "$jsonSchema", "$mod", "$regex", "$text", "$where", "$geoIntersects", "$geoWithin", "$near", "$nearSphere", "$all", "$elemMatch", "$size", "$bitsAllClear", "$bitsAllSet", "$bitsAnyClear", "$bitsAnySet", "$comment", "$elemMatch", "$meta", "$slice", "$currentDate", "$inc", "$min", "$max", "$mul", "$rename", "$set", "$setOnInsert", "$unset", "$addToSet", "$pop", "$pull", "$push", "$pullAll", "$each", "$position", "$slice", "$sort", "$bit", "$addFields", "$bucket", "$bucketAuto", "$collStats", "$count", "$currentOp", "$facet", "$geoNear", "$graphLookup", "$group", "$indexStats", "$limit", "$listLocalSessions", "$listSessions", "$lookup", "$match", "$merge", "$out", "$planCacheStats", "$project", "$redact", "$replaceRoot", "$replaceWith", "$sample", "$set", "$skip", "$sort", "$sortByCount", "$unionWith", "$unset", "$unwind", "$abs", "$accumulator", "$acos", "$acosh", "$add", "$addToSet", "$allElementsTrue", "$and", "$anyElementTrue", "$arrayElemAt", "$arrayToObject", "$asin", "$asinh", "$atan", "$atan2", "$atanh", "$avg", "$binarySize", "$bsonSize", "$ceil", "$cmp", "$concat", "$concatArrays", "$cond", "$convert", "$cos", "$dateFromParts", "$dateToParts", "$dateFromString", "$dateToString", "$dayOfMonth", "$dayOfWeek", "$dayOfYear", "$degreesToRadians", "$divide", "$eq", "$exp", "$filter", "$first", "$floor", "$function", "$gt", "$gte", "$hour", "$ifNull", "$in", "$indexOfArray", "$indexOfBytes", "$indexOfCP", "$isArray", "$isNumber", "$isoDayOfWeek", "$isoWeek", "$isoWeekYear", "$last", "$last", "$let", "$literal", "$ln", "$log", "$log10", "$lt", "$lte", "$ltrim", "$map", "$max", "$mergeObjects", "$meta", "$min", "$millisecond", "$minute", "$mod", "$month", "$multiply", "$ne", "$not", "$objectToArray", "$or", "$pow", "$push", "$radiansToDegrees", "$range", "$reduce", "$regexFind", "$regexFindAll", "$regexMatch", "$replaceOne", "$replaceAll", "$reverseArray", "$round", "$rtrim", "$second", "$setDifference", "$setEquals", "$setIntersection", "$setIsSubset", "$setUnion", "$size", "$sin", "$slice", "$split", "$sqrt", "$stdDevPop", "$stdDevSamp", "$strcasecmp", "$strLenBytes", "$strLenCP", "$substr", "$substrBytes", "$substrCP", "$subtract", "$sum", "$switch", "$tan", "$toBool", "$toDate", "$toDecimal", "$toDouble", "$toInt", "$toLong", "$toObjectId", "$toString", "$toLower", "$toUpper", "$trim", "$trunc", "$type", "$week", "$year", "$zip", "$comment", "$explain", "$hint", "$max", "$maxTimeMS", "$min", "$orderby", "$query", "$returnKey", "$showDiskLoc", "$natural"],
      t = "(?:" + (e = e.map(function ($) {
        return $.replace("$", "\\$");
      })).join("|") + ")\\b";
    $.languages.mongodb = $.languages.extend("javascript", {}), $.languages.insertBefore("mongodb", "string", {
      property: {
        pattern: /(?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)(?=\s*:)/,
        greedy: !0,
        inside: {
          keyword: RegExp("^(['\"])?" + t + "(?:\\1)?$")
        }
      }
    }), $.languages.mongodb.string.inside = {
      url: {
        pattern: /https?:\/\/[-\w@:%.+~#=]{1,256}\.[a-z0-9()]{1,6}\b[-\w()@:%+.~#?&/=]*/i,
        greedy: !0
      },
      entity: {
        pattern: /\b(?:(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\.){3}(?:[01]?[0-9][0-9]?|2[0-4][0-9]|25[0-5])\b/,
        greedy: !0
      }
    }, $.languages.insertBefore("mongodb", "constant", {
      builtin: {
        pattern: RegExp("\\b(?:" + ["ObjectId", "Code", "BinData", "DBRef", "Timestamp", "NumberLong", "NumberDecimal", "MaxKey", "MinKey", "RegExp", "ISODate", "UUID"].join("|") + ")\\b"),
        alias: "keyword"
      }
    });
  }(Prism);
  Prism.languages.objectivec = Prism.languages.extend("c", {
    string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    keyword: /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  }), delete Prism.languages.objectivec["class-name"], Prism.languages.objc = Prism.languages.objectivec;
  Prism.languages.purescript = Prism.languages.extend("haskell", {
    keyword: /\b(?:ado|case|class|data|derive|do|else|forall|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\b|∀/,
    "import-statement": {
      pattern: /(^[\t ]*)import\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*(?:\s+as\s+[A-Z][\w']*(?:\.[A-Z][\w']*)*)?(?:\s+hiding\b)?/m,
      lookbehind: !0,
      inside: {
        keyword: /\b(?:as|hiding|import)\b/,
        punctuation: /\./
      }
    },
    builtin: /\b(?:absurd|add|ap|append|apply|between|bind|bottom|clamp|compare|comparing|compose|conj|const|degree|discard|disj|div|eq|flap|flip|gcd|identity|ifM|join|lcm|liftA1|liftM1|map|max|mempty|min|mod|mul|negate|not|notEq|one|otherwise|recip|show|sub|top|unit|unless|unlessM|void|when|whenM|zero)\b/,
    operator: [Prism.languages.haskell.operator[0], Prism.languages.haskell.operator[2], /[\xa2-\xa6\xa8\xa9\xac\xae-\xb1\xb4\xb8\xd7\xf7\u02c2-\u02c5\u02d2-\u02df\u02e5-\u02eb\u02ed\u02ef-\u02ff\u0375\u0384\u0385\u03f6\u0482\u058d-\u058f\u0606-\u0608\u060b\u060e\u060f\u06de\u06e9\u06fd\u06fe\u07f6\u07fe\u07ff\u09f2\u09f3\u09fa\u09fb\u0af1\u0b70\u0bf3-\u0bfa\u0c7f\u0d4f\u0d79\u0e3f\u0f01-\u0f03\u0f13\u0f15-\u0f17\u0f1a-\u0f1f\u0f34\u0f36\u0f38\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce\u0fcf\u0fd5-\u0fd8\u109e\u109f\u1390-\u1399\u166d\u17db\u1940\u19de-\u19ff\u1b61-\u1b6a\u1b74-\u1b7c\u1fbd\u1fbf-\u1fc1\u1fcd-\u1fcf\u1fdd-\u1fdf\u1fed-\u1fef\u1ffd\u1ffe\u2044\u2052\u207a-\u207c\u208a-\u208c\u20a0-\u20bf\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211e-\u2123\u2125\u2127\u2129\u212e\u213a\u213b\u2140-\u2144\u214a-\u214d\u214f\u218a\u218b\u2190-\u2307\u230c-\u2328\u232b-\u2426\u2440-\u244a\u249c-\u24e9\u2500-\u2767\u2794-\u27c4\u27c7-\u27e5\u27f0-\u2982\u2999-\u29d7\u29dc-\u29fb\u29fe-\u2b73\u2b76-\u2b95\u2b97-\u2bff\u2ce5-\u2cea\u2e50\u2e51\u2e80-\u2e99\u2e9b-\u2ef3\u2f00-\u2fd5\u2ff0-\u2ffb\u3004\u3012\u3013\u3020\u3036\u3037\u303e\u303f\u309b\u309c\u3190\u3191\u3196-\u319f\u31c0-\u31e3\u3200-\u321e\u322a-\u3247\u3250\u3260-\u327f\u328a-\u32b0\u32c0-\u33ff\u4dc0-\u4dff\ua490-\ua4c6\ua700-\ua716\ua720\ua721\ua789\ua78a\ua828-\ua82b\ua836-\ua839\uaa77-\uaa79\uab5b\uab6a\uab6b\ufb29\ufbb2-\ufbc1\ufdfc\ufdfd\ufe62\ufe64-\ufe66\ufe69\uff04\uff0b\uff1c-\uff1e\uff3e\uff40\uff5c\uff5e\uffe0-\uffe6\uffe8-\uffee\ufffc\ufffd]/]
  }), Prism.languages.purs = Prism.languages.purescript;
  !function (i) {
    var t = i.util.clone(i.languages.javascript),
      e = "(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";
    function n(t, n) {
      return t = t.replace(/<S>/g, function () {
        return "(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)";
      }).replace(/<BRACES>/g, function () {
        return "(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})";
      }).replace(/<SPREAD>/g, function () {
        return e;
      }), RegExp(t, n);
    }
    e = n(e).source, i.languages.jsx = i.languages.extend("markup", t), i.languages.jsx.tag.pattern = n("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"), i.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, i.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i, i.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, i.languages.jsx.tag.inside.comment = t.comment, i.languages.insertBefore("inside", "attr-name", {
      spread: {
        pattern: n("<SPREAD>"),
        inside: i.languages.jsx
      }
    }, i.languages.jsx.tag), i.languages.insertBefore("inside", "special-attr", {
      script: {
        pattern: n("=<BRACES>"),
        inside: {
          "script-punctuation": {
            pattern: /^=(?=\{)/,
            alias: "punctuation"
          },
          rest: i.languages.jsx
        },
        alias: "language-javascript"
      }
    }, i.languages.jsx.tag);
    var o = function o(t) {
        return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(o).join("") : "";
      },
      r = function r(t) {
        for (var n = [], e = 0; e < t.length; e++) {
          var a = t[e],
            s = !1;
          if ("string" != typeof a && ("tag" === a.type && a.content[0] && "tag" === a.content[0].type ? "</" === a.content[0].content[0].content ? 0 < n.length && n[n.length - 1].tagName === o(a.content[0].content[1]) && n.pop() : "/>" === a.content[a.content.length - 1].content || n.push({
            tagName: o(a.content[0].content[1]),
            openedBraces: 0
          }) : 0 < n.length && "punctuation" === a.type && "{" === a.content ? n[n.length - 1].openedBraces++ : 0 < n.length && 0 < n[n.length - 1].openedBraces && "punctuation" === a.type && "}" === a.content ? n[n.length - 1].openedBraces-- : s = !0), (s || "string" == typeof a) && 0 < n.length && 0 === n[n.length - 1].openedBraces) {
            var g = o(a);
            e < t.length - 1 && ("string" == typeof t[e + 1] || "plain-text" === t[e + 1].type) && (g += o(t[e + 1]), t.splice(e + 1, 1)), 0 < e && ("string" == typeof t[e - 1] || "plain-text" === t[e - 1].type) && (g = o(t[e - 1]) + g, t.splice(e - 1, 1), e--), t[e] = new i.Token("plain-text", g, null, g);
          }
          a.content && "string" != typeof a.content && r(a.content);
        }
      };
    i.hooks.add("after-tokenize", function (t) {
      "jsx" !== t.language && "tsx" !== t.language || r(t.tokens);
    });
  }(Prism);
  !function (e) {
    e.languages.typescript = e.languages.extend("javascript", {
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    }), e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/), delete e.languages.typescript.parameter;
    var s = e.languages.extend("typescript", {});
    delete s["class-name"], e.languages.typescript["class-name"].inside = s, e.languages.insertBefore("typescript", "function", {
      decorator: {
        pattern: /@[$\w\xA0-\uFFFF]+/,
        inside: {
          at: {
            pattern: /^@/,
            alias: "operator"
          },
          function: /^[\s\S]+/
        }
      },
      "generic-function": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
        greedy: !0,
        inside: {
          function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
          generic: {
            pattern: /<[\s\S]+/,
            alias: "class-name",
            inside: s
          }
        }
      }
    }), e.languages.ts = e.languages.typescript;
  }(Prism);
  !function (e) {
    var a = e.util.clone(e.languages.typescript);
    e.languages.tsx = e.languages.extend("jsx", a), delete e.languages.tsx.parameter;
    var t = e.languages.tsx.tag;
    t.pattern = RegExp("(^|[^\\w$]|(?=</))(?:" + t.pattern.source + ")", t.pattern.flags), t.lookbehind = !0;
  }(Prism);
  Prism.languages.reason = Prism.languages.extend("clike", {
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
      greedy: !0
    },
    "class-name": /\b[A-Z]\w*/,
    keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
  }), Prism.languages.insertBefore("reason", "class-name", {
    character: {
      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
      alias: "string"
    },
    constructor: {
      pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
      alias: "variable"
    },
    label: {
      pattern: /\b[a-z]\w*(?=::)/,
      alias: "symbol"
    }
  }), delete Prism.languages.reason.function;
  !function (e) {
    e.languages.sass = e.languages.extend("css", {
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
        lookbehind: !0,
        greedy: !0
      }
    }), e.languages.insertBefore("sass", "atrule", {
      "atrule-line": {
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/m
        }
      }
    }), delete e.languages.sass.atrule;
    var r = /\$[-\w]+|#\{\$[-\w]+\}/,
      t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
        pattern: /(\s)-(?=\s)/,
        lookbehind: !0
      }];
    e.languages.insertBefore("sass", "property", {
      "variable-line": {
        pattern: /^[ \t]*\$.+/m,
        greedy: !0,
        inside: {
          punctuation: /:/,
          variable: r,
          operator: t
        }
      },
      "property-line": {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
        greedy: !0,
        inside: {
          property: [/[^:\s]+(?=\s*:)/, {
            pattern: /(:)[^:\s]+/,
            lookbehind: !0
          }],
          punctuation: /:/,
          variable: r,
          operator: t,
          important: e.languages.sass.important
        }
      }
    }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0
      }
    });
  }(Prism);
  Prism.languages.scss = Prism.languages.extend("css", {
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    },
    atrule: {
      pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/m,
      inside: {
        parent: {
          pattern: /&/,
          alias: "important"
        },
        placeholder: /%[-\w]+/,
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    },
    property: {
      pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
      inside: {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
      }
    }
  }), Prism.languages.insertBefore("scss", "atrule", {
    keyword: [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
      pattern: /( )(?:from|through)(?= )/,
      lookbehind: !0
    }]
  }), Prism.languages.insertBefore("scss", "important", {
    variable: /\$[-\w]+|#\{\$[-\w]+\}/
  }), Prism.languages.insertBefore("scss", "function", {
    "module-modifier": {
      pattern: /\b(?:as|hide|show|with)\b/i,
      alias: "keyword"
    },
    placeholder: {
      pattern: /%[-\w]+/,
      alias: "selector"
    },
    statement: {
      pattern: /\B!(?:default|optional)\b/i,
      alias: "keyword"
    },
    boolean: /\b(?:false|true)\b/,
    null: {
      pattern: /\bnull\b/,
      alias: "keyword"
    },
    operator: {
      pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
      lookbehind: !0
    }
  }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
  Prism.languages.solidity = Prism.languages.extend("clike", {
    "class-name": {
      pattern: /(\b(?:contract|enum|interface|library|new|struct|using)\s+)(?!\d)[\w$]+/,
      lookbehind: !0
    },
    keyword: /\b(?:_|anonymous|as|assembly|assert|break|calldata|case|constant|constructor|continue|contract|default|delete|do|else|emit|enum|event|external|for|from|function|if|import|indexed|inherited|interface|internal|is|let|library|mapping|memory|modifier|new|payable|pragma|private|public|pure|require|returns?|revert|selfdestruct|solidity|storage|struct|suicide|switch|this|throw|using|var|view|while)\b/,
    operator: /=>|->|:=|=:|\*\*|\+\+|--|\|\||&&|<<=?|>>=?|[-+*/%^&|<>!=]=?|[~?]/
  }), Prism.languages.insertBefore("solidity", "keyword", {
    builtin: /\b(?:address|bool|byte|u?int(?:8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?|string|bytes(?:[1-9]|[12]\d|3[0-2])?)\b/
  }), Prism.languages.insertBefore("solidity", "number", {
    version: {
      pattern: /([<>]=?|\^)\d+\.\d+\.\d+\b/,
      lookbehind: !0,
      alias: "number"
    }
  }), Prism.languages.sol = Prism.languages.solidity;
  !function () {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
      var o = "line-numbers",
        a = /\n(?!$)/g,
        e = Prism.plugins.lineNumbers = {
          getLine: function getLine(e, n) {
            if ("PRE" === e.tagName && e.classList.contains(o)) {
              var t = e.querySelector(".line-numbers-rows");
              if (t) {
                var i = parseInt(e.getAttribute("data-start"), 10) || 1,
                  r = i + (t.children.length - 1);
                n < i && (n = i), r < n && (n = r);
                var s = n - i;
                return t.children[s];
              }
            }
          },
          resize: function resize(e) {
            u([e]);
          },
          assumeViewportIndependence: !0
        },
        n = void 0;
      window.addEventListener("resize", function () {
        e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))));
      }), Prism.hooks.add("complete", function (e) {
        if (e.code) {
          var n = e.element,
            t = n.parentNode;
          if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
            n.classList.remove(o), t.classList.add(o);
            var i,
              r = e.code.match(a),
              s = r ? r.length + 1 : 1,
              l = new Array(s + 1).join("<span></span>");
            (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e);
          }
        }
      }), Prism.hooks.add("line-numbers", function (e) {
        e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
      });
    }
    function u(e) {
      if (0 != (e = e.filter(function (e) {
        var n = function (e) {
          return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
        }(e)["white-space"];
        return "pre-wrap" === n || "pre-line" === n;
      })).length) {
        var n = e.map(function (e) {
          var n = e.querySelector("code"),
            t = e.querySelector(".line-numbers-rows");
          if (n && t) {
            var i = e.querySelector(".line-numbers-sizer"),
              r = n.textContent.split(a);
            i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
            var s = i.getBoundingClientRect().height;
            return i.innerHTML = "", {
              element: e,
              lines: r,
              lineHeights: [],
              oneLinerHeight: s,
              sizer: i
            };
          }
        }).filter(Boolean);
        n.forEach(function (e) {
          var i = e.sizer,
            n = e.lines,
            r = e.lineHeights,
            s = e.oneLinerHeight;
          r[n.length - 1] = void 0, n.forEach(function (e, n) {
            if (e && 1 < e.length) {
              var t = i.appendChild(document.createElement("span"));
              t.style.display = "block", t.textContent = e;
            } else r[n] = s;
          });
        }), n.forEach(function (e) {
          for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height);
        }), n.forEach(function (e) {
          var n = e.sizer,
            t = e.element.querySelector(".line-numbers-rows");
          n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function (e, n) {
            t.children[n].style.height = e + "px";
          });
        });
      }
    }
  }();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.fc200a2b6adbc03d39bae9a7551082c8.js.map