import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Prism from 'prismjs';

// Ensure you import the necessary Prism CSS

// Prism's line numbers plugin
import 'prismjs/plugins/line-numbers/prism-line-numbers';

// Your Prism code for line numbers
const prismLineNumbers = () => {
  if (typeof Prism !== 'undefined' && typeof document !== 'undefined') {
    var o = 'line-numbers',
      a = /\n(?!$)/g,
      e = Prism.plugins.lineNumbers = {
        getLine: function (e, n) {
          if ('PRE' === e.tagName && e.classList.contains(o)) {
            var t = e.querySelector('.line-numbers-rows');
            if (t) {
              var i = parseInt(e.getAttribute('data-start'), 10) || 1,
                r = i + (t.children.length - 1);
              n < i && (n = i), r < n && (n = r);
              var s = n - i;
              return t.children[s];
            }
          }
        },
        resize: function (e) {
          u([e]);
        },
        assumeViewportIndependence: !0
      },
      n = void 0;
    window.addEventListener('resize', function () {
      e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll('pre.' + o))));
    });
    Prism.hooks.add('complete', function (e) {
      if (e.code) {
        var n = e.element,
          t = n.parentNode;
        if (t && /pre/i.test(t.nodeName) && !n.querySelector('.line-numbers-rows') && Prism.util.isActive(n, o)) {
          n.classList.remove(o), t.classList.add(o);
          var i, r = e.code.match(a),
            s = r ? r.length + 1 : 1,
            l = new Array(s + 1).join('<span></span>');
          (i = document.createElement('span')).setAttribute('aria-hidden', 'true'), i.className = 'line-numbers-rows', i.innerHTML = l, t.hasAttribute('data-start') && (t.style.counterReset = 'linenumber ' + (parseInt(t.getAttribute('data-start'), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run('line-numbers', e);
        }
      }
    });
    Prism.hooks.add('line-numbers', function (e) {
      e.plugins = e.plugins || {};
      e.plugins['line-numbers'] = !0;
    });

    function u(e) {
      if (0 != (e = e.filter(function (e) {
        var n = function (e) {
          return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
        }(e)['white-space'];
        return 'pre-wrap' === n || 'pre-line' === n;
      })).length) {
        var n = e.map(function (e) {
          var n = e.querySelector('code'),
            t = e.querySelector('.line-numbers-rows');
          if (n && t) {
            var i = e.querySelector('.line-numbers-sizer'),
              r = n.textContent.split(a);
            i || ((i = document.createElement('span')).className = 'line-numbers-sizer', n.appendChild(i)), i.innerHTML = '0', i.style.display = 'block';
            var s = i.getBoundingClientRect().height;
            return i.innerHTML = '', { element: e, lines: r, lineHeights: [], oneLinerHeight: s, sizer: i };
          }
        }).filter(Boolean);
        n.forEach(function (e) {
          var i = e.sizer,
            n = e.lines,
            r = e.lineHeights,
            s = e.oneLinerHeight;
          r[n.length - 1] = void 0, n.forEach(function (e, n) {
            if (e && 1 < e.length) {
              var t = i.appendChild(document.createElement('span'));
              t.style.display = 'block', t.textContent = e;
            } else r[n] = s;
          });
        }), n.forEach(function (e) {
          for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height);
        }), n.forEach(function (e) {
          var n = e.sizer,
            t = e.element.querySelector('.line-numbers-rows');
          n.style.display = 'none', n.innerHTML = '', e.lineHeights.forEach(function (e, n) {
            t.children[n].style.height = e + 'px';
          });
        });
      }
    }
  }
};

const PrismHighlighter = () => {
  const location = useLocation();

  useEffect(() => {
    window.setTimeout(() => {
        prismLineNumbers();
    },1000)
    
  }, [location]);

  return null;
};

export default PrismHighlighter;
