/*! For license information please see main.b6192b76.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      43: (e, t, n) => {
        e.exports = n(202);
      },
      153: (e, t, n) => {
        var r = n(43),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            a = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === a[r] && (a[r] = t[r]);
          return {
            $$typeof: o,
            type: e,
            key: u,
            ref: c,
            props: a,
            _owner: l.current,
          };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          k = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              S.call(t, o) && !C.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: k.current,
          };
        }
        function $(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var P = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, o, a, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === a ? "." + T(s, 0) : a),
              x(i)
                ? ((o = ""),
                  null != e && (o = e.replace(P, "$&/") + "/"),
                  R(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  ($(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(P, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + T((l = e[u]), u);
              s += R(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += R((l = l.value), t, o, (c = a + T(l, u++)), i);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function M(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            R(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var _ = { current: null },
          z = { transition: null },
          O = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: k,
          };
        function I() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: M,
          forEach: function (e, t, n) {
            M(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              M(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              M(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!$(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.act = I),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = m({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = k.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                S.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = $),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = I),
          (t.useCallback = function (e, t) {
            return _.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return _.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return _.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return _.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.current.useRef(e);
          }),
          (t.useState = function (e) {
            return _.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      219: (e, t, n) => {
        var r = n(763),
          o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          a = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          i = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          l = {};
        function s(e) {
          return r.isMemo(e) ? i : l[e.$$typeof] || o;
        }
        (l[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (l[r.Memo] = i);
        var u = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          d = Object.getOwnPropertySymbols,
          f = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" !== typeof n) {
            if (h) {
              var o = p(n);
              o && o !== h && e(t, o, r);
            }
            var i = c(n);
            d && (i = i.concat(d(n)));
            for (var l = s(t), m = s(n), g = 0; g < i.length; ++g) {
              var y = i[g];
              if (!a[y] && (!r || !r[y]) && (!m || !m[y]) && (!l || !l[y])) {
                var v = f(n, y);
                try {
                  u(t, y, v);
                } catch (b) {}
              }
            }
          }
          return t;
        };
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(0 < a(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, n))
                u < o && 0 > a(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < o && 0 > a(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(u)) (m = !0), z(S);
            else {
              var t = r(c);
              null !== t && O(x, t.startTime - e);
            }
        }
        function S(e, n) {
          (m = !1), g && ((g = !1), v($), ($ = -1)), (h = !0);
          var a = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !R()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (f.callback = l)
                    : f === r(u) && o(u),
                  w(n);
              } else o(u);
              f = r(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(c);
              null !== d && O(x, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          C = !1,
          E = null,
          $ = -1,
          P = 5,
          T = -1;
        function R() {
          return !(t.unstable_now() - T < P);
        }
        function M() {
          if (null !== E) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? k() : ((C = !1), (E = null));
            }
          } else C = !1;
        }
        if ("function" === typeof b)
          k = function () {
            b(M);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            _ = N.port2;
          (N.port1.onmessage = M),
            (k = function () {
              _.postMessage(null);
            });
        } else
          k = function () {
            y(M, 0);
          };
        function z(e) {
          (E = e), C || ((C = !0), k());
        }
        function O(e, n) {
          $ = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), z(S));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (P = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (g ? (v($), ($ = -1)) : (g = !0), O(x, a - i)))
                : ((e.sortIndex = l), n(u, e), m || h || ((m = !0), z(S))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      528: (e, t) => {
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var l = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.suspense_list"),
          f = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          h = Symbol.for("react.offscreen"),
          m = Symbol.for("react.client.reference");
        function g(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case o:
                  case i:
                  case a:
                  case c:
                  case d:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case u:
                      case p:
                      case f:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
        t.Hy = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === i ||
            e === a ||
            e === c ||
            e === d ||
            e === h ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === p ||
                e.$$typeof === f ||
                e.$$typeof === s ||
                e.$$typeof === l ||
                e.$$typeof === u ||
                e.$$typeof === m ||
                void 0 !== e.getModuleId))
          );
        };
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      730: (e, t, n) => {
        var r = n(43),
          o = n(853);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          s = {};
        function u(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var d = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          p =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = {},
          m = {};
        function g(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            y[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            y[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              y[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            y[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              y[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            y[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            y[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            y[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            y[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var o = y.hasOwnProperty(t) ? y[t] : null;
          (null !== o
            ? 0 !== o.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(h, e) &&
                      (p.test(e) ? (m[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, b);
            y[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, b);
              y[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, b);
            y[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            y[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            y[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          S = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          C = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          $ = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          R = Symbol.for("react.forward_ref"),
          M = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          z = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var O = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var I = Symbol.iterator;
        function A(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (I && e[I]) || e["@@iterator"])
            ? e
            : null;
        }
        var B,
          L = Object.assign;
        function j(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var F = !1;
        function D(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var o = u.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? j(e) : "";
        }
        function W(e) {
          switch (e.tag) {
            case 5:
              return j(e.type);
            case 16:
              return j("Lazy");
            case 13:
              return j("Suspense");
            case 19:
              return j("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = D(e.type, !1));
            case 11:
              return (e = D(e.type.render, !1));
            case 1:
              return (e = D(e.type, !0));
            default:
              return "";
          }
        }
        function V(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case C:
              return "Fragment";
            case k:
              return "Portal";
            case $:
              return "Profiler";
            case E:
              return "StrictMode";
            case M:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null)
                  ? t
                  : V(e.type) || "Memo";
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return V(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return V(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function U(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function K(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function G(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = K(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = K(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = U(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function J(e, t) {
          Z(e, t);
          var n = U(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? te(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              te(e, t.type, U(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function ee(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function te(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var ne = Array.isArray;
        function re(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + U(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function oe(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (ne(n)) {
                if (1 < n.length) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: U(n) };
        }
        function ie(e, t) {
          var n = U(t.value),
            r = U(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          de,
          fe =
            ((de = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return de(e, t);
                  });
                }
              : de);
        function pe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var he = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function ge(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (he.hasOwnProperty(e) && he[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ye(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = ge(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(he).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (he[t] = he[e]);
          });
        });
        var ve = L(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function be(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function we(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function Se(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ce = null,
          Ee = null;
        function $e(e) {
          if ((e = xo(e))) {
            if ("function" !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Ce ? (Ee ? Ee.push(e) : (Ee = [e])) : (Ce = e);
        }
        function Te() {
          if (Ce) {
            var e = Ce,
              t = Ee;
            if (((Ee = Ce = null), $e(e), t))
              for (e = 0; e < t.length; e++) $e(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Me() {}
        var Ne = !1;
        function _e(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Re(e, t, n);
          } finally {
            (Ne = !1), (null !== Ce || null !== Ee) && (Me(), Te());
          }
        }
        function ze(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ko(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Oe = !1;
        if (d)
          try {
            var Ie = {};
            Object.defineProperty(Ie, "passive", {
              get: function () {
                Oe = !0;
              },
            }),
              window.addEventListener("test", Ie, Ie),
              window.removeEventListener("test", Ie, Ie);
          } catch (de) {
            Oe = !1;
          }
        function Ae(e, t, n, r, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Be = !1,
          Le = null,
          je = !1,
          Fe = null,
          De = {
            onError: function (e) {
              (Be = !0), (Le = e);
            },
          };
        function We(e, t, n, r, o, a, i, l, s) {
          (Be = !1), (Le = null), Ae.apply(De, arguments);
        }
        function Ve(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ue(e) {
          if (Ve(e) !== e) throw Error(a(188));
        }
        function Ke(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ve(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ue(o), e;
                    if (i === r) return Ue(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ge(e)
            : null;
        }
        function Ge(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ge(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = o.unstable_scheduleCallback,
          qe = o.unstable_cancelCallback,
          Xe = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Ze = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          et = o.unstable_ImmediatePriority,
          tt = o.unstable_UserBlockingPriority,
          nt = o.unstable_NormalPriority,
          rt = o.unstable_LowPriority,
          ot = o.unstable_IdlePriority,
          at = null,
          it = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / ut) | 0)) | 0;
              },
          st = Math.log,
          ut = Math.LN2;
        var ct = 64,
          dt = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function pt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (r = ft(l)) : 0 !== (a &= i) && (r = ft(a));
          } else 0 !== (i = n & ~o) ? (r = ft(i)) : 0 !== a && (r = ft(a));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & o) &&
            ((o = r & -r) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function ht(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function gt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function yt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function bt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              o = 1 << r;
            (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
          }
        }
        var wt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var St,
          kt,
          Ct,
          Et,
          $t,
          Pt = !1,
          Tt = [],
          Rt = null,
          Mt = null,
          Nt = null,
          _t = new Map(),
          zt = new Map(),
          Ot = [],
          It =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function At(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Rt = null;
              break;
            case "dragenter":
            case "dragleave":
              Mt = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              _t.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zt.delete(t.pointerId);
          }
        }
        function Bt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = xo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Lt(e) {
          var t = wo(e.target);
          if (null !== t) {
            var n = Ve(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void $t(e.priority, function () {
                      Ct(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function jt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xo(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          jt(e) && n.delete(t);
        }
        function Dt() {
          (Pt = !1),
            null !== Rt && jt(Rt) && (Rt = null),
            null !== Mt && jt(Mt) && (Mt = null),
            null !== Nt && jt(Nt) && (Nt = null),
            _t.forEach(Ft),
            zt.forEach(Ft);
        }
        function Wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Dt)));
        }
        function Vt(e) {
          function t(t) {
            return Wt(t, e);
          }
          if (0 < Tt.length) {
            Wt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Rt && Wt(Rt, e),
              null !== Mt && Wt(Mt, e),
              null !== Nt && Wt(Nt, e),
              _t.forEach(t),
              zt.forEach(t),
              n = 0;
            n < Ot.length;
            n++
          )
            (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Ot.length && null === (n = Ot[0]).blockedOn; )
            Lt(n), null === n.blockedOn && Ot.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Ut = !0;
        function Kt(e, t, n, r) {
          var o = wt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (wt = 1), Qt(e, t, n, r);
          } finally {
            (wt = o), (Ht.transition = a);
          }
        }
        function Gt(e, t, n, r) {
          var o = wt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (wt = 4), Qt(e, t, n, r);
          } finally {
            (wt = o), (Ht.transition = a);
          }
        }
        function Qt(e, t, n, r) {
          if (Ut) {
            var o = Xt(e, t, n, r);
            if (null === o) Ur(e, t, r, qt, n), At(e, r);
            else if (
              (function (e, t, n, r, o) {
                switch (t) {
                  case "focusin":
                    return (Rt = Bt(Rt, e, t, n, r, o)), !0;
                  case "dragenter":
                    return (Mt = Bt(Mt, e, t, n, r, o)), !0;
                  case "mouseover":
                    return (Nt = Bt(Nt, e, t, n, r, o)), !0;
                  case "pointerover":
                    var a = o.pointerId;
                    return _t.set(a, Bt(_t.get(a) || null, e, t, n, r, o)), !0;
                  case "gotpointercapture":
                    return (
                      (a = o.pointerId),
                      zt.set(a, Bt(zt.get(a) || null, e, t, n, r, o)),
                      !0
                    );
                }
                return !1;
              })(o, e, t, n, r)
            )
              r.stopPropagation();
            else if ((At(e, r), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== o; ) {
                var a = xo(o);
                if (
                  (null !== a && St(a),
                  null === (a = Xt(e, t, n, r)) && Ur(e, t, r, qt, n),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && r.stopPropagation();
            } else Ur(e, t, r, null, n);
          }
        }
        var qt = null;
        function Xt(e, t, n, r) {
          if (((qt = null), null !== (e = wo((e = Se(r))))))
            if (null === (t = Ve(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case et:
                  return 1;
                case tt:
                  return 4;
                case nt:
                case rt:
                  return 16;
                case ot:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Jt = null,
          en = null;
        function tn() {
          if (en) return en;
          var e,
            t,
            n = Jt,
            r = n.length,
            o = "value" in Zt ? Zt.value : Zt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (en = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function nn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rn() {
          return !0;
        }
        function on() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? rn
                : on),
              (this.isPropagationStopped = on),
              this
            );
          }
          return (
            L(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = rn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rn));
              },
              persist: function () {},
              isPersistent: rn,
            }),
            t
          );
        }
        var ln,
          sn,
          un,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dn = an(cn),
          fn = L({}, cn, { view: 0, detail: 0 }),
          pn = an(fn),
          hn = L({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: $n,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (sn = e.screenY - un.screenY))
                      : (sn = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          mn = an(hn),
          gn = an(L({}, hn, { dataTransfer: 0 })),
          yn = an(L({}, fn, { relatedTarget: 0 })),
          vn = an(
            L({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = L({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          wn = an(bn),
          xn = an(L({}, cn, { data: 0 })),
          Sn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Cn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Cn[e]) && !!t[e];
        }
        function $n() {
          return En;
        }
        var Pn = L({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = Sn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = nn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: $n,
            charCode: function (e) {
              return "keypress" === e.type ? nn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? nn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Pn),
          Rn = an(
            L({}, hn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Mn = an(
            L({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: $n,
            })
          ),
          Nn = an(
            L({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          _n = L({}, hn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zn = an(_n),
          On = [9, 13, 27, 32],
          In = d && "CompositionEvent" in window,
          An = null;
        d && "documentMode" in document && (An = document.documentMode);
        var Bn = d && "TextEvent" in window && !An,
          Ln = d && (!In || (An && 8 < An && 11 >= An)),
          jn = String.fromCharCode(32),
          Fn = !1;
        function Dn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== On.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Wn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Vn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Un(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          Pe(r),
            0 < (t = Gr(t, "onChange")).length &&
              ((n = new dn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Gn = null,
          Qn = null;
        function qn(e) {
          jr(e, 0);
        }
        function Xn(e) {
          if (Q(So(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (d) {
          var Jn;
          if (d) {
            var er = "oninput" in document;
            if (!er) {
              var tr = document.createElement("div");
              tr.setAttribute("oninput", "return;"),
                (er = "function" === typeof tr.oninput);
            }
            Jn = er;
          } else Jn = !1;
          Zn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function nr() {
          Gn && (Gn.detachEvent("onpropertychange", rr), (Qn = Gn = null));
        }
        function rr(e) {
          if ("value" === e.propertyName && Xn(Qn)) {
            var t = [];
            Kn(t, Qn, e, Se(e)), _e(qn, t);
          }
        }
        function or(e, t, n) {
          "focusin" === e
            ? (nr(), (Qn = n), (Gn = t).attachEvent("onpropertychange", rr))
            : "focusout" === e && nr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Qn);
        }
        function ir(e, t) {
          if ("click" === e) return Xn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var o = n[r];
            if (!f.call(t, o) || !sr(e[o], t[o])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function dr(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function pr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = pr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && hr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = n.textContent.length,
                  a = Math.min(r.start, o);
                (r = void 0 === r.end ? a : Math.min(r.end, o)),
                  !e.extend && a > r && ((o = r), (r = a), (a = o)),
                  (o = dr(n, a));
                var i = dr(n, r);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var gr = d && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          vr = null,
          br = null,
          wr = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          wr ||
            null == yr ||
            yr !== q(r) ||
            ("selectionStart" in (r = yr) && hr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (br && ur(br, r)) ||
              ((br = r),
              0 < (r = Gr(vr, "onSelect")).length &&
                ((t = new dn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        function Sr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Sr("Animation", "AnimationEnd"),
            animationiteration: Sr("Animation", "AnimationIteration"),
            animationstart: Sr("Animation", "AnimationStart"),
            transitionend: Sr("Transition", "TransitionEnd"),
          },
          Cr = {},
          Er = {};
        function $r(e) {
          if (Cr[e]) return Cr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Cr[e] = n[t]);
          return e;
        }
        d &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Pr = $r("animationend"),
          Tr = $r("animationiteration"),
          Rr = $r("animationstart"),
          Mr = $r("transitionend"),
          Nr = new Map(),
          _r =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function zr(e, t) {
          Nr.set(e, t), u(t, [e]);
        }
        for (var Or = 0; Or < _r.length; Or++) {
          var Ir = _r[Or];
          zr(Ir.toLowerCase(), "on" + (Ir[0].toUpperCase() + Ir.slice(1)));
        }
        zr(Pr, "onAnimationEnd"),
          zr(Tr, "onAnimationIteration"),
          zr(Rr, "onAnimationStart"),
          zr("dblclick", "onDoubleClick"),
          zr("focusin", "onFocus"),
          zr("focusout", "onBlur"),
          zr(Mr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Ar =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Br = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Ar)
          );
        function Lr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, i, l, s, u) {
              if ((We.apply(this, arguments), Be)) {
                if (!Be) throw Error(a(198));
                var c = Le;
                (Be = !1), (Le = null), je || ((je = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function jr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped()))
                    break e;
                  Lr(o, l, u), (a = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (l = r[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  Lr(o, l, u), (a = s);
                }
            }
          }
          if (je) throw ((e = Fe), (je = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[yo];
          void 0 === n && (n = t[yo] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Dr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var Wr = "_reactListening" + Math.random().toString(36).slice(2);
        function Vr(e) {
          if (!e[Wr]) {
            (e[Wr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Br.has(t) || Dr(t, !1, e), Dr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Wr] || ((t[Wr] = !0), Dr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var o = Kt;
              break;
            case 4:
              o = Gt;
              break;
            default:
              o = Qt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Oe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Ur(e, t, n, r, o) {
          var a = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = wo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          _e(function () {
            var r = a,
              o = Se(n),
              i = [];
            e: {
              var l = Nr.get(e);
              if (void 0 !== l) {
                var s = dn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === nn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = yn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = gn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Mn;
                    break;
                  case Pr:
                  case Tr:
                  case Rr:
                    s = vn;
                    break;
                  case Mr:
                    s = Nn;
                    break;
                  case "scroll":
                    s = pn;
                    break;
                  case "wheel":
                    s = zn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = wn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Rn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = ze(h, f)) &&
                        c.push(Kr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!wo(u) && !u[go])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? wo(u)
                          : null) &&
                        (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = mn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Rn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? l : So(s)),
                  (p = null == u ? l : So(u)),
                  ((l = new c(m, h + "leave", s, n, o)).target = d),
                  (l.relatedTarget = p),
                  (m = null),
                  wo(o) === r &&
                    (((c = new c(f, h + "enter", u, n, o)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Qr(p)) h++;
                    for (p = 0, m = f; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (c = Qr(c)), h--;
                    for (; 0 < p - h; ) (f = Qr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Qr(c)), (f = Qr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(i, l, s, c, !1),
                  null !== u && null !== d && qr(i, d, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? So(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var g = Yn;
              else if (Un(l))
                if (Zn) g = lr;
                else {
                  g = ar;
                  var y = or;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (g = ir);
              switch (
                (g && (g = g(e, r))
                  ? Kn(i, g, n, o)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      te(l, "number", l.value)),
                (y = r ? So(r) : window),
                e)
              ) {
                case "focusin":
                  (Un(y) || "true" === y.contentEditable) &&
                    ((yr = y), (vr = r), (br = null));
                  break;
                case "focusout":
                  br = vr = yr = null;
                  break;
                case "mousedown":
                  wr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (wr = !1), xr(i, n, o);
                  break;
                case "selectionchange":
                  if (gr) break;
                case "keydown":
                case "keyup":
                  xr(i, n, o);
              }
              var v;
              if (In)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Dn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ln &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (v = tn())
                    : ((Jt = "value" in (Zt = o) ? Zt.value : Zt.textContent),
                      (Vn = !0))),
                0 < (y = Gr(r, b)).length &&
                  ((b = new xn(b, e, null, n, o)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Wn(n)) && (b.data = v))),
                (v = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Wn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), jn);
                        case "textInput":
                          return (e = t.data) === jn && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Vn)
                        return "compositionend" === e || (!In && Dn(e, t))
                          ? ((e = tn()), (en = Jt = Zt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ln && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Gr(r, "onBeforeInput")).length &&
                  ((o = new xn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            jr(i, t);
          });
        }
        function Kr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Gr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = ze(e, n)) && r.unshift(Kr(e, a, o)),
              null != (a = ze(e, t)) && r.push(Kr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = ze(n, a)) && i.unshift(Kr(n, s, l))
                : o || (null != (s = ze(n, a)) && i.push(Kr(n, s, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Xr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Yr, "");
        }
        function Jr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(a(425));
        }
        function eo() {}
        var to = null,
          no = null;
        function ro(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var oo = "function" === typeof setTimeout ? setTimeout : void 0,
          ao = "function" === typeof clearTimeout ? clearTimeout : void 0,
          io = "function" === typeof Promise ? Promise : void 0,
          lo =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof io
              ? function (e) {
                  return io.resolve(null).then(e).catch(so);
                }
              : oo;
        function so(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function uo(e, t) {
          var n = t,
            r = 0;
          do {
            var o = n.nextSibling;
            if ((e.removeChild(n), o && 8 === o.nodeType))
              if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void Vt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = o;
          } while (n);
          Vt(t);
        }
        function co(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function fo(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var po = Math.random().toString(36).slice(2),
          ho = "__reactFiber$" + po,
          mo = "__reactProps$" + po,
          go = "__reactContainer$" + po,
          yo = "__reactEvents$" + po,
          vo = "__reactListeners$" + po,
          bo = "__reactHandles$" + po;
        function wo(e) {
          var t = e[ho];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[go] || n[ho])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = fo(e); null !== e; ) {
                  if ((n = e[ho])) return n;
                  e = fo(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xo(e) {
          return !(e = e[ho] || e[go]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function So(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[mo] || null;
        }
        var Co = [],
          Eo = -1;
        function $o(e) {
          return { current: e };
        }
        function Po(e) {
          0 > Eo || ((e.current = Co[Eo]), (Co[Eo] = null), Eo--);
        }
        function To(e, t) {
          Eo++, (Co[Eo] = e.current), (e.current = t);
        }
        var Ro = {},
          Mo = $o(Ro),
          No = $o(!1),
          _o = Ro;
        function zo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ro;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function Oo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Io() {
          Po(No), Po(Mo);
        }
        function Ao(e, t, n) {
          if (Mo.current !== Ro) throw Error(a(168));
          To(Mo, t), To(No, n);
        }
        function Bo(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || "Unknown", o));
          return L({}, n, r);
        }
        function Lo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ro),
            (_o = Mo.current),
            To(Mo, e),
            To(No, No.current),
            !0
          );
        }
        function jo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = Bo(e, t, _o)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Po(No),
              Po(Mo),
              To(Mo, e))
            : Po(No),
            To(No, n);
        }
        var Fo = null,
          Do = !1,
          Wo = !1;
        function Vo(e) {
          null === Fo ? (Fo = [e]) : Fo.push(e);
        }
        function Ho() {
          if (!Wo && null !== Fo) {
            Wo = !0;
            var e = 0,
              t = wt;
            try {
              var n = Fo;
              for (wt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fo = null), (Do = !1);
            } catch (o) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), Qe(et, Ho), o);
            } finally {
              (wt = t), (Wo = !1);
            }
          }
          return null;
        }
        var Uo = [],
          Ko = 0,
          Go = null,
          Qo = 0,
          qo = [],
          Xo = 0,
          Yo = null,
          Zo = 1,
          Jo = "";
        function ea(e, t) {
          (Uo[Ko++] = Qo), (Uo[Ko++] = Go), (Go = e), (Qo = t);
        }
        function ta(e, t, n) {
          (qo[Xo++] = Zo), (qo[Xo++] = Jo), (qo[Xo++] = Yo), (Yo = e);
          var r = Zo;
          e = Jo;
          var o = 32 - lt(r) - 1;
          (r &= ~(1 << o)), (n += 1);
          var a = 32 - lt(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (o -= i),
              (Zo = (1 << (32 - lt(t) + o)) | (n << o) | r),
              (Jo = a + e);
          } else (Zo = (1 << a) | (n << o) | r), (Jo = e);
        }
        function na(e) {
          null !== e.return && (ea(e, 1), ta(e, 1, 0));
        }
        function ra(e) {
          for (; e === Go; )
            (Go = Uo[--Ko]), (Uo[Ko] = null), (Qo = Uo[--Ko]), (Uo[Ko] = null);
          for (; e === Yo; )
            (Yo = qo[--Xo]),
              (qo[Xo] = null),
              (Jo = qo[--Xo]),
              (qo[Xo] = null),
              (Zo = qo[--Xo]),
              (qo[Xo] = null);
        }
        var oa = null,
          aa = null,
          ia = !1,
          la = null;
        function sa(e, t) {
          var n = _u(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ua(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (oa = e), (aa = co(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (oa = e), (aa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Yo ? { id: Zo, overflow: Jo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = _u(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (oa = e),
                (aa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ca(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function da(e) {
          if (ia) {
            var t = aa;
            if (t) {
              var n = t;
              if (!ua(e, t)) {
                if (ca(e)) throw Error(a(418));
                t = co(n.nextSibling);
                var r = oa;
                t && ua(e, t)
                  ? sa(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ia = !1), (oa = e));
              }
            } else {
              if (ca(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ia = !1), (oa = e);
            }
          }
        }
        function fa(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          oa = e;
        }
        function pa(e) {
          if (e !== oa) return !1;
          if (!ia) return fa(e), (ia = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !ro(e.type, e.memoizedProps)),
            t && (t = aa))
          ) {
            if (ca(e)) throw (ha(), Error(a(418)));
            for (; t; ) sa(e, t), (t = co(t.nextSibling));
          }
          if ((fa(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      aa = co(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              aa = null;
            }
          } else aa = oa ? co(e.stateNode.nextSibling) : null;
          return !0;
        }
        function ha() {
          for (var e = aa; e; ) e = co(e.nextSibling);
        }
        function ma() {
          (aa = oa = null), (ia = !1);
        }
        function ga(e) {
          null === la ? (la = [e]) : la.push(e);
        }
        var ya = x.ReactCurrentBatchConfig;
        function va(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function ba(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function wa(e) {
          return (0, e._init)(e._payload);
        }
        function xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Ou(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Lu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var a = n.type;
            return a === C
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === z &&
                    wa(a) === t.type))
              ? (((r = o(t, n.props)).ref = va(e, t, n)), (r.return = e), r)
              : (((r = Iu(n.type, n.key, n.props, null, e.mode, r)).ref = va(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = ju(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Au(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Lu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case S:
                  return (
                    ((n = Iu(t.type, t.key, t.props, null, e.mode, n)).ref = va(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = ju(t, e.mode, n)).return = e), t;
                case z:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (ne(t) || A(t))
                return ((t = Au(t, e.mode, n, null)).return = e), t;
              ba(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== o ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case S:
                  return n.key === o ? u(e, t, n, r) : null;
                case k:
                  return n.key === o ? c(e, t, n, r) : null;
                case z:
                  return p(e, t, (o = n._init)(n._payload), r);
              }
              if (ne(n) || A(n)) return null !== o ? null : d(e, t, n, r, null);
              ba(e, n);
            }
            return null;
          }
          function h(e, t, n, r, o) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, o);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case S:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
                case z:
                  return h(e, t, n, (0, r._init)(r._payload), o);
              }
              if (ne(r) || A(r))
                return d(t, (e = e.get(n) || null), r, o, null);
              ba(t, r);
            }
            return null;
          }
          function m(o, a, l, s) {
            for (
              var u = null, c = null, d = a, m = (a = 0), g = null;
              null !== d && m < l.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var y = p(o, d, l[m], s);
              if (null === y) {
                null === d && (d = g);
                break;
              }
              e && d && null === y.alternate && t(o, d),
                (a = i(y, a, m)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (d = g);
            }
            if (m === l.length) return n(o, d), ia && ea(o, m), u;
            if (null === d) {
              for (; m < l.length; m++)
                null !== (d = f(o, l[m], s)) &&
                  ((a = i(d, a, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return ia && ea(o, m), u;
            }
            for (d = r(o, d); m < l.length; m++)
              null !== (g = h(d, o, m, l[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (a = i(g, a, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              ia && ea(o, m),
              u
            );
          }
          function g(o, l, s, u) {
            var c = A(s);
            if ("function" !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), m = l, g = (l = 0), y = null, v = s.next();
              null !== m && !v.done;
              g++, v = s.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(o, m, v.value, u);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(o, m),
                (l = i(b, l, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = y);
            }
            if (v.done) return n(o, m), ia && ea(o, g), c;
            if (null === m) {
              for (; !v.done; g++, v = s.next())
                null !== (v = f(o, v.value, u)) &&
                  ((l = i(v, l, g)),
                  null === d ? (c = v) : (d.sibling = v),
                  (d = v));
              return ia && ea(o, g), c;
            }
            for (m = r(o, m); !v.done; g++, v = s.next())
              null !== (v = h(m, o, g, v.value, u)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (l = i(v, l, g)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(o, e);
                }),
              ia && ea(o, g),
              c
            );
          }
          return function e(r, a, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === C &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case S:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === C) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((a = o(c, i.props.children)).return = r),
                              (r = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === z &&
                            wa(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((a = o(c, i.props)).ref = va(r, c, i)),
                            (a.return = r),
                            (r = a);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === C
                      ? (((a = Au(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = a))
                      : (((s = Iu(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = va(r, a, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case k:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          n(r, a.sibling),
                            ((a = o(a, i.children || [])).return = r),
                            (r = a);
                          break e;
                        }
                        n(r, a);
                        break;
                      }
                      t(r, a), (a = a.sibling);
                    }
                    ((a = ju(i, r.mode, s)).return = r), (r = a);
                  }
                  return l(r);
                case z:
                  return e(r, a, (c = i._init)(i._payload), s);
              }
              if (ne(i)) return m(r, a, i, s);
              if (A(i)) return g(r, a, i, s);
              ba(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (n(r, a.sibling), ((a = o(a, i)).return = r), (r = a))
                  : (n(r, a), ((a = Lu(i, r.mode, s)).return = r), (r = a)),
                l(r))
              : n(r, a);
          };
        }
        var Sa = xa(!0),
          ka = xa(!1),
          Ca = $o(null),
          Ea = null,
          $a = null,
          Pa = null;
        function Ta() {
          Pa = $a = Ea = null;
        }
        function Ra(e) {
          var t = Ca.current;
          Po(Ca), (e._currentValue = t);
        }
        function Ma(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Na(e, t) {
          (Ea = e),
            (Pa = $a = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wl = !0), (e.firstContext = null));
        }
        function _a(e) {
          var t = e._currentValue;
          if (Pa !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === $a)
            ) {
              if (null === Ea) throw Error(a(308));
              ($a = e), (Ea.dependencies = { lanes: 0, firstContext: e });
            } else $a = $a.next = e;
          return t;
        }
        var za = null;
        function Oa(e) {
          null === za ? (za = [e]) : za.push(e);
        }
        function Ia(e, t, n, r) {
          var o = t.interleaved;
          return (
            null === o
              ? ((n.next = n), Oa(t))
              : ((n.next = o.next), (o.next = n)),
            (t.interleaved = n),
            Aa(e, r)
          );
        }
        function Aa(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ba = !1;
        function La(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ja(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Fa(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Da(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Rs))) {
            var o = r.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (r.pending = t),
              Aa(e, n)
            );
          }
          return (
            null === (o = r.interleaved)
              ? ((t.next = t), Oa(r))
              : ((t.next = o.next), (o.next = t)),
            (r.interleaved = t),
            Aa(e, n)
          );
        }
        function Wa(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        function Va(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ha(e, t, n, r) {
          var o = e.updateQueue;
          Ba = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = l;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = L({}, d, f);
                      break e;
                    case 2:
                      Ba = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Bs |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ua(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var Ka = {},
          Ga = $o(Ka),
          Qa = $o(Ka),
          qa = $o(Ka);
        function Xa(e) {
          if (e === Ka) throw Error(a(174));
          return e;
        }
        function Ya(e, t) {
          switch ((To(qa, t), To(Qa, e), To(Ga, Ka), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Po(Ga), To(Ga, t);
        }
        function Za() {
          Po(Ga), Po(Qa), Po(qa);
        }
        function Ja(e) {
          Xa(qa.current);
          var t = Xa(Ga.current),
            n = ue(t, e.type);
          t !== n && (To(Qa, e), To(Ga, n));
        }
        function ei(e) {
          Qa.current === e && (Po(Ga), Po(Qa));
        }
        var ti = $o(0);
        function ni(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ri = [];
        function oi() {
          for (var e = 0; e < ri.length; e++)
            ri[e]._workInProgressVersionPrimary = null;
          ri.length = 0;
        }
        var ai = x.ReactCurrentDispatcher,
          ii = x.ReactCurrentBatchConfig,
          li = 0,
          si = null,
          ui = null,
          ci = null,
          di = !1,
          fi = !1,
          pi = 0,
          hi = 0;
        function mi() {
          throw Error(a(321));
        }
        function gi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function yi(e, t, n, r, o, i) {
          if (
            ((li = i),
            (si = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? el : tl),
            (e = n(r, o)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (pi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (ci = ui = null),
                (t.updateQueue = null),
                (ai.current = nl),
                (e = n(r, o));
            } while (fi);
          }
          if (
            ((ai.current = Ji),
            (t = null !== ui && null !== ui.next),
            (li = 0),
            (ci = ui = si = null),
            (di = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function vi() {
          var e = 0 !== pi;
          return (pi = 0), e;
        }
        function bi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e), ci
          );
        }
        function wi() {
          if (null === ui) {
            var e = si.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ui.next;
          var t = null === ci ? si.memoizedState : ci.next;
          if (null !== t) (ci = t), (ui = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ui = e).memoizedState,
              baseState: ui.baseState,
              baseQueue: ui.baseQueue,
              queue: ui.queue,
              next: null,
            }),
              null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e);
          }
          return ci;
        }
        function xi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Si(e) {
          var t = wi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ui,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (i = o.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((li & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = r)) : (u = u.next = f),
                  (si.lanes |= d),
                  (Bs |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = r) : (u.next = s),
              sr(r, t.memoizedState) || (wl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            o = e;
            do {
              (i = o.lane), (si.lanes |= i), (Bs |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = wi(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            sr(i, t.memoizedState) || (wl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Ci() {}
        function Ei(e, t) {
          var n = si,
            r = wi(),
            o = t(),
            i = !sr(r.memoizedState, o);
          if (
            (i && ((r.memoizedState = o), (wl = !0)),
            (r = r.queue),
            Bi(Ti.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ci && 1 & ci.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              _i(9, Pi.bind(null, n, r, o, t), void 0, null),
              null === Ms)
            )
              throw Error(a(349));
            0 !== (30 & li) || $i(n, t, o);
          }
          return o;
        }
        function $i(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Pi(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ri(t) && Mi(e);
        }
        function Ti(e, t, n) {
          return n(function () {
            Ri(t) && Mi(e);
          });
        }
        function Ri(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Mi(e) {
          var t = Aa(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Ni(e) {
          var t = bi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = qi.bind(null, si, e)),
            [t.memoizedState, e]
          );
        }
        function _i(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zi() {
          return wi().memoizedState;
        }
        function Oi(e, t, n, r) {
          var o = bi();
          (si.flags |= e),
            (o.memoizedState = _i(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Ii(e, t, n, r) {
          var o = wi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== ui) {
            var i = ui.memoizedState;
            if (((a = i.destroy), null !== r && gi(r, i.deps)))
              return void (o.memoizedState = _i(t, n, a, r));
          }
          (si.flags |= e), (o.memoizedState = _i(1 | t, n, a, r));
        }
        function Ai(e, t) {
          return Oi(8390656, 8, e, t);
        }
        function Bi(e, t) {
          return Ii(2048, 8, e, t);
        }
        function Li(e, t) {
          return Ii(4, 2, e, t);
        }
        function ji(e, t) {
          return Ii(4, 4, e, t);
        }
        function Fi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Di(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ii(4, 4, Fi.bind(null, t, e), n)
          );
        }
        function Wi() {}
        function Vi(e, t) {
          var n = wi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Hi(e, t) {
          var n = wi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && gi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ui(e, t, n) {
          return 0 === (21 & li)
            ? (e.baseState && ((e.baseState = !1), (wl = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = gt()), (si.lanes |= n), (Bs |= n), (e.baseState = !0)),
              t);
        }
        function Ki(e, t) {
          var n = wt;
          (wt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ii.transition;
          ii.transition = {};
          try {
            e(!1), t();
          } finally {
            (wt = n), (ii.transition = r);
          }
        }
        function Gi() {
          return wi().memoizedState;
        }
        function Qi(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Xi(e))
          )
            Yi(t, n);
          else if (null !== (n = Ia(e, t, n, r))) {
            ru(n, e, r, tu()), Zi(n, t, r);
          }
        }
        function qi(e, t, n) {
          var r = nu(e),
            o = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Xi(e)) Yi(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, n);
                if (((o.hasEagerState = !0), (o.eagerState = l), sr(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((o.next = o), Oa(t))
                      : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (n = Ia(e, t, o, r)) &&
              (ru(n, e, r, (o = tu())), Zi(n, t, r));
          }
        }
        function Xi(e) {
          var t = e.alternate;
          return e === si || (null !== t && t === si);
        }
        function Yi(e, t) {
          fi = di = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Zi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
          }
        }
        var Ji = {
            readContext: _a,
            useCallback: mi,
            useContext: mi,
            useEffect: mi,
            useImperativeHandle: mi,
            useInsertionEffect: mi,
            useLayoutEffect: mi,
            useMemo: mi,
            useReducer: mi,
            useRef: mi,
            useState: mi,
            useDebugValue: mi,
            useDeferredValue: mi,
            useTransition: mi,
            useMutableSource: mi,
            useSyncExternalStore: mi,
            useId: mi,
            unstable_isNewReconciler: !1,
          },
          el = {
            readContext: _a,
            useCallback: function (e, t) {
              return (bi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: _a,
            useEffect: Ai,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Oi(4194308, 4, Fi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Oi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Oi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = bi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = bi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Qi.bind(null, si, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (bi().memoizedState = e);
            },
            useState: Ni,
            useDebugValue: Wi,
            useDeferredValue: function (e) {
              return (bi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ni(!1),
                t = e[0];
              return (
                (e = Ki.bind(null, e[1])), (bi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = si,
                o = bi();
              if (ia) {
                if (void 0 === n) throw Error(a(407));
                n = n();
              } else {
                if (((n = t()), null === Ms)) throw Error(a(349));
                0 !== (30 & li) || $i(r, t, n);
              }
              o.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (o.queue = i),
                Ai(Ti.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                _i(9, Pi.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = bi(),
                t = Ms.identifierPrefix;
              if (ia) {
                var n = Jo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Zo & ~(1 << (32 - lt(Zo) - 1))).toString(32) + n)),
                  0 < (n = pi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = hi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          tl = {
            readContext: _a,
            useCallback: Vi,
            useContext: _a,
            useEffect: Bi,
            useImperativeHandle: Di,
            useInsertionEffect: Li,
            useLayoutEffect: ji,
            useMemo: Hi,
            useReducer: Si,
            useRef: zi,
            useState: function () {
              return Si(xi);
            },
            useDebugValue: Wi,
            useDeferredValue: function (e) {
              return Ui(wi(), ui.memoizedState, e);
            },
            useTransition: function () {
              return [Si(xi)[0], wi().memoizedState];
            },
            useMutableSource: Ci,
            useSyncExternalStore: Ei,
            useId: Gi,
            unstable_isNewReconciler: !1,
          },
          nl = {
            readContext: _a,
            useCallback: Vi,
            useContext: _a,
            useEffect: Bi,
            useImperativeHandle: Di,
            useInsertionEffect: Li,
            useLayoutEffect: ji,
            useMemo: Hi,
            useReducer: ki,
            useRef: zi,
            useState: function () {
              return ki(xi);
            },
            useDebugValue: Wi,
            useDeferredValue: function (e) {
              var t = wi();
              return null === ui
                ? (t.memoizedState = e)
                : Ui(t, ui.memoizedState, e);
            },
            useTransition: function () {
              return [ki(xi)[0], wi().memoizedState];
            },
            useMutableSource: Ci,
            useSyncExternalStore: Ei,
            useId: Gi,
            unstable_isNewReconciler: !1,
          };
        function rl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = L({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function ol(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : L({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var al = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ve(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Fa(r, o);
            (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Da(e, a, o)) && (ru(t, e, o, r), Wa(t, e, o));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              o = nu(e),
              a = Fa(r, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== n && null !== n && (a.callback = n),
              null !== (t = Da(e, a, o)) && (ru(t, e, o, r), Wa(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              o = Fa(n, r);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Da(e, o, r)) && (ru(t, e, r, n), Wa(t, e, r));
          },
        };
        function il(e, t, n, r, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(o, a);
        }
        function ll(e, t, n) {
          var r = !1,
            o = Ro,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = _a(a))
              : ((o = Oo(t) ? _o : Mo.current),
                (a = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? zo(e, o)
                  : Ro)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = al),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function sl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && al.enqueueReplaceState(t, t.state, null);
        }
        function ul(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = {}), La(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = _a(a))
            : ((a = Oo(t) ? _o : Mo.current), (o.context = zo(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (ol(e, t, a, n), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && al.enqueueReplaceState(o, o.state, null),
              Ha(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += W(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function dl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Fa(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Us || ((Us = !0), (Ks = r)), fl(0, t);
            }),
            n
          );
        }
        function ml(e, t, n) {
          (n = Fa(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var o = t.value;
            (n.payload = function () {
              return r(o);
            }),
              (n.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (n.callback = function () {
                fl(0, t),
                  "function" !== typeof r &&
                    (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function gl(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var o = new Set();
            r.set(t, o);
          } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o));
          o.has(n) || (o.add(n), (e = $u.bind(null, e, t, n)), t.then(e, e));
        }
        function yl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vl(e, t, n, r, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Fa(-1, 1)).tag = 2), Da(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var bl = x.ReactCurrentOwner,
          wl = !1;
        function xl(e, t, n, r) {
          t.child = null === e ? ka(t, null, n, r) : Sa(t, e.child, n, r);
        }
        function Sl(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            Na(t, o),
            (r = yi(e, t, n, r, a, o)),
            (n = vi()),
            null === e || wl
              ? (ia && n && na(t), (t.flags |= 1), xl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ul(e, t, o))
          );
        }
        function kl(e, t, n, r, o) {
          if (null === e) {
            var a = n.type;
            return "function" !== typeof a ||
              zu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Iu(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Cl(e, t, a, r, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return Ul(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Ou(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Cl(e, t, n, r, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (ur(a, r) && e.ref === t.ref) {
              if (((wl = !1), (t.pendingProps = r = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), Ul(e, t, o);
              0 !== (131072 & e.flags) && (wl = !0);
            }
          }
          return Pl(e, t, n, r, o);
        }
        function El(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                To(Os, zs),
                (zs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  To(Os, zs),
                  (zs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== a ? a.baseLanes : n),
                To(Os, zs),
                (zs |= r);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              To(Os, zs),
              (zs |= r);
          return xl(e, t, o, n), t.child;
        }
        function $l(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pl(e, t, n, r, o) {
          var a = Oo(n) ? _o : Mo.current;
          return (
            (a = zo(t, a)),
            Na(t, o),
            (n = yi(e, t, n, r, a, o)),
            (r = vi()),
            null === e || wl
              ? (ia && r && na(t), (t.flags |= 1), xl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Ul(e, t, o))
          );
        }
        function Tl(e, t, n, r, o) {
          if (Oo(n)) {
            var a = !0;
            Lo(t);
          } else a = !1;
          if ((Na(t, o), null === t.stateNode))
            Hl(e, t), ll(t, n, r), ul(t, n, r, o), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = _a(u))
              : (u = zo(t, (u = Oo(n) ? _o : Mo.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== r || s !== u) && sl(t, i, r, u)),
              (Ba = !1);
            var f = t.memoizedState;
            (i.state = f),
              Ha(t, r, i, o),
              (s = t.memoizedState),
              l !== r || f !== s || No.current || Ba
                ? ("function" === typeof c &&
                    (ol(t, n, c, r), (s = t.memoizedState)),
                  (l = Ba || il(t, n, l, r, f, s, u))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = u),
                  (r = l))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              ja(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : rl(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = _a(s))
                : (s = zo(t, (s = Oo(n) ? _o : Mo.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && sl(t, i, r, s)),
              (Ba = !1),
              (f = t.memoizedState),
              (i.state = f),
              Ha(t, r, i, o);
            var h = t.memoizedState;
            l !== d || f !== h || No.current || Ba
              ? ("function" === typeof p &&
                  (ol(t, n, p, r), (h = t.memoizedState)),
                (u = Ba || il(t, n, u, r, f, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = u))
              : ("function" !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Rl(e, t, n, r, a, o);
        }
        function Rl(e, t, n, r, o, a) {
          $l(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return o && jo(t, n, !1), Ul(e, t, a);
          (r = t.stateNode), (bl.current = t);
          var l =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Sa(t, e.child, null, a)),
                (t.child = Sa(t, null, l, a)))
              : xl(e, t, l, a),
            (t.memoizedState = r.state),
            o && jo(t, n, !0),
            t.child
          );
        }
        function Ml(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ao(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ao(0, t.context, !1),
            Ya(e, t.containerInfo);
        }
        function Nl(e, t, n, r, o) {
          return ma(), ga(o), (t.flags |= 256), xl(e, t, n, r), t.child;
        }
        var _l,
          zl,
          Ol,
          Il,
          Al = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Bl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ll(e, t, n) {
          var r,
            o = t.pendingProps,
            i = ti.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            To(ti, 1 & i),
            null === e)
          )
            return (
              da(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Bu(s, o, 0, null)),
                      (e = Au(e, o, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Bl(n)),
                      (t.memoizedState = Al),
                      e)
                    : jl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, o, i, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fl(e, t, l, (r = dl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (o = t.mode),
                    (r = Bu(
                      { mode: "visible", children: r.children },
                      o,
                      0,
                      null
                    )),
                    ((i = Au(i, o, l, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Sa(t, e.child, null, l),
                    (t.child.memoizedState = Bl(l)),
                    (t.memoizedState = Al),
                    i);
              if (0 === (1 & t.mode)) return Fl(e, t, l, null);
              if ("$!" === o.data) {
                if ((r = o.nextSibling && o.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Fl(e, t, l, (r = dl((i = Error(a(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), wl || s)) {
                if (null !== (r = Ms)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (r.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Aa(e, o), ru(r, e, o, -1));
                }
                return gu(), Fl(e, t, l, (r = dl(Error(a(421)))));
              }
              return "$?" === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Tu.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (aa = co(o.nextSibling)),
                  (oa = t),
                  (ia = !0),
                  (la = null),
                  null !== e &&
                    ((qo[Xo++] = Zo),
                    (qo[Xo++] = Jo),
                    (qo[Xo++] = Yo),
                    (Zo = e.id),
                    (Jo = e.overflow),
                    (Yo = t)),
                  (t = jl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, r, i, n);
          if (l) {
            (l = o.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var u = { mode: "hidden", children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0),
                  (o.pendingProps = u),
                  (t.deletions = null))
                : ((o = Ou(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (l = Ou(r, l))
                : ((l = Au(l, s, n, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Bl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Al),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Ou(l, { mode: "visible", children: o.children })),
            0 === (1 & t.mode) && (o.lanes = n),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function jl(e, t) {
          return (
            ((t = Bu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Fl(e, t, n, r) {
          return (
            null !== r && ga(r),
            Sa(t, e.child, null, n),
            ((e = jl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Dl(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Ma(e.return, t, n);
        }
        function Wl(e, t, n, r, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o));
        }
        function Vl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((xl(e, t, r.children, n), 0 !== (2 & (r = ti.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Dl(e, n, t);
                else if (19 === e.tag) Dl(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((To(ti, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === ni(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Wl(t, !1, o, n, a);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ni(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Wl(t, !0, n, null, a);
                break;
              case "together":
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ul(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Bs |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              n = Ou((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ou(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Kl(e, t) {
          if (!ia)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= 14680064 & o.subtreeFlags),
                (r |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags),
                (r |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Ql(e, t, n) {
          var r = t.pendingProps;
          switch ((ra(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gl(t), null;
            case 1:
            case 17:
              return Oo(t.type) && Io(), Gl(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Za(),
                Po(No),
                Po(Mo),
                oi(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (pa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== la && (lu(la), (la = null)))),
                zl(e, t),
                Gl(t),
                null
              );
            case 5:
              ei(t);
              var o = Xa(qa.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ol(e, t, n, r, o),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Gl(t), null;
                }
                if (((e = Xa(Ga.current)), pa(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[ho] = t), (r[mo] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Ar.length; o++) Fr(Ar[o], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      Y(r, i), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Fr("invalid", r);
                  }
                  for (var l in (be(n, i), (o = null), i))
                    if (i.hasOwnProperty(l)) {
                      var u = i[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (o = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      G(r), ee(r, i, !0);
                      break;
                    case "textarea":
                      G(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = eo);
                  }
                  (r = o), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[ho] = t),
                    (e[mo] = r),
                    _l(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = we(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (o = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (o = r);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < Ar.length; o++) Fr(Ar[o], e);
                        o = r;
                        break;
                      case "source":
                        Fr("error", e), (o = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (o = r);
                        break;
                      case "details":
                        Fr("toggle", e), (o = r);
                        break;
                      case "input":
                        Y(e, r), (o = X(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        o = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (o = L({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (o = oe(e, r)), Fr("invalid", e);
                    }
                    for (i in (be(n, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        "style" === i
                          ? ye(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && pe(e, c)
                            : "number" === typeof c && pe(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Fr("scroll", e)
                              : null != c && w(e, i, c, l));
                      }
                    switch (n) {
                      case "input":
                        G(e), ee(e, r, !1);
                        break;
                      case "textarea":
                        G(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + U(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? re(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              re(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = eo);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Il(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(a(166));
                if (((n = Xa(qa.current)), Xa(Ga.current), pa(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[ho] = t),
                    (i = r.nodeValue !== n) && null !== (e = oa))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[ho] = t),
                    (t.stateNode = r);
              }
              return Gl(t), null;
            case 13:
              if (
                (Po(ti),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ia &&
                  null !== aa &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  ha(), ma(), (t.flags |= 98560), (i = !1);
                else if (((i = pa(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(a(317));
                    i[ho] = t;
                  } else
                    ma(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Gl(t), (i = !1);
                } else null !== la && (lu(la), (la = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ti.current)
                        ? 0 === Is && (Is = 3)
                        : gu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return (
                Za(),
                zl(e, t),
                null === e && Vr(t.stateNode.containerInfo),
                Gl(t),
                null
              );
            case 10:
              return Ra(t.type._context), Gl(t), null;
            case 19:
              if ((Po(ti), null === (i = t.memoizedState))) return Gl(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Kl(i, !1);
                else {
                  if (0 !== Is || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ni(e))) {
                        for (
                          t.flags |= 128,
                            Kl(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return To(ti, (1 & ti.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ze() > Vs &&
                    ((t.flags |= 128),
                    (r = !0),
                    Kl(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ni(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Kl(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !ia)
                    )
                      return Gl(t), null;
                  } else
                    2 * Ze() - i.renderingStartTime > Vs &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Kl(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = ti.current),
                  To(ti, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zs) &&
                    (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function ql(e, t) {
          switch ((ra(t), t.tag)) {
            case 1:
              return (
                Oo(t.type) && Io(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Za(),
                Po(No),
                Po(Mo),
                oi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ei(t), null;
            case 13:
              if (
                (Po(ti),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                ma();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Po(ti), null;
            case 4:
              return Za(), null;
            case 10:
              return Ra(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (_l = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (zl = function () {}),
          (Ol = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), Xa(Ga.current);
              var a,
                i = null;
              switch (n) {
                case "input":
                  (o = X(e, o)), (r = X(e, r)), (i = []);
                  break;
                case "select":
                  (o = L({}, o, { value: void 0 })),
                    (r = L({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = oe(e, o)), (r = oe(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = eo);
              }
              for (c in (be(n, r), (n = null), o))
                if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ("style" === c) {
                    var l = o[c];
                    for (a in l)
                      l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != o ? o[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (a in l)
                        !l.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in u)
                        u.hasOwnProperty(a) &&
                          l[a] !== u[a] &&
                          (n || (n = {}), (n[a] = u[a]));
                    } else n || (i || (i = []), i.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (i = i || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (i = i || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            i || l === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Il = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xl = !1,
          Yl = !1,
          Zl = "function" === typeof WeakSet ? WeakSet : Set,
          Jl = null;
        function es(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function ts(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ns = !1;
        function rs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var o = (r = r.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ts(t, n, a);
              }
              o = o.next;
            } while (o !== r);
          }
        }
        function os(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[ho],
              delete t[mo],
              delete t[yo],
              delete t[vo],
              delete t[bo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = eo));
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, n) {
          for (n = n.child; null !== n; ) hs(e, t, n), (n = n.sibling);
        }
        function hs(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Yl || es(n, t);
            case 6:
              var r = ds,
                o = fs;
              (ds = null),
                ps(e, t, n),
                (fs = o),
                null !== (ds = r) &&
                  (fs
                    ? ((e = ds),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ds.removeChild(n.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? uo(e.parentNode, n)
                      : 1 === e.nodeType && uo(e, n),
                    Vt(e))
                  : uo(ds, n.stateNode));
              break;
            case 4:
              (r = ds),
                (o = fs),
                (ds = n.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, n),
                (ds = r),
                (fs = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                o = r = r.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i &&
                      (0 !== (2 & a) || 0 !== (4 & a)) &&
                      ts(n, t, i),
                    (o = o.next);
                } while (o !== r);
              }
              ps(e, t, n);
              break;
            case 1:
              if (
                !Yl &&
                (es(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              ps(e, t, n);
              break;
            case 21:
              ps(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yl = (r = Yl) || null !== n.memoizedState),
                  ps(e, t, n),
                  (Yl = r))
                : ps(e, t, n);
              break;
            default:
              ps(e, t, n);
          }
        }
        function ms(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zl()),
              t.forEach(function (t) {
                var r = Ru.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var o = n[r];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(a(160));
                hs(i, l, o), (ds = null), (fs = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ys(t, e), (t = t.sibling);
        }
        function ys(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gs(t, e), vs(e), 4 & r)) {
                try {
                  rs(3, e, e.return), os(3, e);
                } catch (g) {
                  Eu(e, e.return, g);
                }
                try {
                  rs(5, e, e.return);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 1:
              gs(t, e), vs(e), 512 & r && null !== n && es(n, n.return);
              break;
            case 5:
              if (
                (gs(t, e),
                vs(e),
                512 & r && null !== n && es(n, n.return),
                32 & e.flags)
              ) {
                var o = e.stateNode;
                try {
                  pe(o, "");
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              if (4 & r && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      Z(o, i),
                      we(s, l);
                    var c = we(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      "style" === d
                        ? ye(o, f)
                        : "dangerouslySetInnerHTML" === d
                        ? fe(o, f)
                        : "children" === d
                        ? pe(o, f)
                        : w(o, d, f, c);
                    }
                    switch (s) {
                      case "input":
                        J(o, i);
                        break;
                      case "textarea":
                        ie(o, i);
                        break;
                      case "select":
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? re(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? re(o, !!i.multiple, i.defaultValue, !0)
                              : re(o, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    o[mo] = i;
                  } catch (g) {
                    Eu(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gs(t, e), vs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (g) {
                  Eu(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gs(t, e),
                vs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Vt(t.containerInfo);
                } catch (g) {
                  Eu(e, e.return, g);
                }
              break;
            case 4:
            default:
              gs(t, e), vs(e);
              break;
            case 13:
              gs(t, e),
                vs(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate &&
                      null !== o.alternate.memoizedState) ||
                    (Ws = Ze())),
                4 & r && ms(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yl = (c = Yl) || d), gs(t, e), (Yl = c))
                  : gs(t, e),
                vs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Jl = e, d = e.child; null !== d; ) {
                    for (f = Jl = d; null !== Jl; ) {
                      switch (((h = (p = Jl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rs(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Eu(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            Ss(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jl = h)) : Ss(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? "function" === typeof (i = o.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ge("display", l)));
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                      } catch (g) {
                        Eu(e, e.return, g);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              gs(t, e), vs(e), 4 & r && ms(e);
            case 21:
          }
        }
        function vs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ls(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(a(160));
              }
              switch (r.tag) {
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (pe(o, ""), (r.flags &= -33)),
                    cs(e, ss(e), o);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bs(e, t, n) {
          (Jl = e), ws(e, t, n);
        }
        function ws(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jl; ) {
            var o = Jl,
              a = o.child;
            if (22 === o.tag && r) {
              var i = null !== o.memoizedState || Xl;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Yl;
                l = Xl;
                var u = Yl;
                if (((Xl = i), (Yl = s) && !u))
                  for (Jl = o; null !== Jl; )
                    (s = (i = Jl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? ks(o)
                        : null !== s
                        ? ((s.return = i), (Jl = s))
                        : ks(o);
                for (; null !== a; ) (Jl = a), ws(a, t, n), (a = a.sibling);
                (Jl = o), (Xl = l), (Yl = u);
              }
              xs(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Jl = a))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yl || os(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yl)
                        if (null === n) r.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : rl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            o,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && Ua(t, l, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ua(t, s, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var d = t.alternate;
                        if (null !== d) {
                          var f = d.memoizedState;
                          if (null !== f) {
                            var p = f.dehydrated;
                            null !== p && Vt(p);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Yl || (512 & t.flags && as(t));
              } catch (i) {
                Eu(t, t.return, i);
              }
            }
            if (t === e) {
              Jl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function Ss(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            if (t === e) {
              Jl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jl = n);
              break;
            }
            Jl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Jl; ) {
            var t = Jl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    os(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var o = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Jl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Jl = l);
              break;
            }
            Jl = t.return;
          }
        }
        var Cs,
          Es = Math.ceil,
          $s = x.ReactCurrentDispatcher,
          Ps = x.ReactCurrentOwner,
          Ts = x.ReactCurrentBatchConfig,
          Rs = 0,
          Ms = null,
          Ns = null,
          _s = 0,
          zs = 0,
          Os = $o(0),
          Is = 0,
          As = null,
          Bs = 0,
          Ls = 0,
          js = 0,
          Fs = null,
          Ds = null,
          Ws = 0,
          Vs = 1 / 0,
          Hs = null,
          Us = !1,
          Ks = null,
          Gs = null,
          Qs = !1,
          qs = null,
          Xs = 0,
          Ys = 0,
          Zs = null,
          Js = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Rs) ? Ze() : -1 !== Js ? Js : (Js = Ze());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Rs) && 0 !== _s
            ? _s & -_s
            : null !== ya.transition
            ? (0 === eu && (eu = gt()), eu)
            : 0 !== (e = wt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Ys) throw ((Ys = 0), (Zs = null), Error(a(185)));
          vt(e, n, r),
            (0 !== (2 & Rs) && e === Ms) ||
              (e === Ms && (0 === (2 & Rs) && (Ls |= n), 4 === Is && su(e, _s)),
              ou(e, r),
              1 === n &&
                0 === Rs &&
                0 === (1 & t.mode) &&
                ((Vs = Ze() + 500), Do && Ho()));
        }
        function ou(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - lt(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (o[i] = ht(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var r = pt(e, e === Ms ? _s : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Do = !0), Vo(e);
                  })(uu.bind(null, e))
                : Vo(uu.bind(null, e)),
                lo(function () {
                  0 === (6 & Rs) && Ho();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = et;
                  break;
                case 4:
                  n = tt;
                  break;
                case 16:
                default:
                  n = nt;
                  break;
                case 536870912:
                  n = ot;
              }
              n = Mu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Js = -1), (eu = 0), 0 !== (6 & Rs))) throw Error(a(327));
          var n = e.callbackNode;
          if (ku() && e.callbackNode !== n) return null;
          var r = pt(e, e === Ms ? _s : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var o = Rs;
            Rs |= 2;
            var i = mu();
            for (
              (Ms === e && _s === t) ||
              ((Hs = null), (Vs = Ze() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (s) {
                hu(e, s);
              }
            Ta(),
              ($s.current = i),
              (Rs = o),
              null !== Ns ? (t = 0) : ((Ms = null), (_s = 0), (t = Is));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = mt(e)) && ((r = o), (t = iu(e, o))),
              1 === t)
            )
              throw ((n = As), pu(e, 0), su(e, r), ou(e, Ze()), n);
            if (6 === t) su(e, r);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var o = n[r],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!sr(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (i = mt(e)) &&
                    ((r = i), (t = iu(e, i))),
                  1 === t))
              )
                throw ((n = As), pu(e, 0), su(e, r), ou(e, Ze()), n);
              switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  Su(e, Ds, Hs);
                  break;
                case 3:
                  if (
                    (su(e, r),
                    (130023424 & r) === r && 10 < (t = Ws + 500 - Ze()))
                  ) {
                    if (0 !== pt(e, 0)) break;
                    if (((o = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = oo(Su.bind(null, e, Ds, Hs), t);
                    break;
                  }
                  Su(e, Ds, Hs);
                  break;
                case 4:
                  if ((su(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, o = -1; 0 < r; ) {
                    var l = 31 - lt(r);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (r &= ~i);
                  }
                  if (
                    ((r = o),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = oo(Su.bind(null, e, Ds, Hs), r);
                    break;
                  }
                  Su(e, Ds, Hs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Ze()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = Fs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Ds), (Ds = n), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Ds ? (Ds = e) : Ds.push.apply(Ds, e);
        }
        function su(e, t) {
          for (
            t &= ~js,
              t &= ~Ls,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & Rs)) throw Error(a(327));
          ku();
          var t = pt(e, 0);
          if (0 === (1 & t)) return ou(e, Ze()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = As), pu(e, 0), su(e, t), ou(e, Ze()), n);
          if (6 === n) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Su(e, Ds, Hs),
            ou(e, Ze()),
            null
          );
        }
        function cu(e, t) {
          var n = Rs;
          Rs |= 1;
          try {
            return e(t);
          } finally {
            0 === (Rs = n) && ((Vs = Ze() + 500), Do && Ho());
          }
        }
        function du(e) {
          null !== qs && 0 === qs.tag && 0 === (6 & Rs) && ku();
          var t = Rs;
          Rs |= 1;
          var n = Ts.transition,
            r = wt;
          try {
            if (((Ts.transition = null), (wt = 1), e)) return e();
          } finally {
            (wt = r), (Ts.transition = n), 0 === (6 & (Rs = t)) && Ho();
          }
        }
        function fu() {
          (zs = Os.current), Po(Os);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), ao(n)), null !== Ns))
            for (n = Ns.return; null !== n; ) {
              var r = n;
              switch ((ra(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Io();
                  break;
                case 3:
                  Za(), Po(No), Po(Mo), oi();
                  break;
                case 5:
                  ei(r);
                  break;
                case 4:
                  Za();
                  break;
                case 13:
                case 19:
                  Po(ti);
                  break;
                case 10:
                  Ra(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ms = e),
            (Ns = e = Ou(e.current, null)),
            (_s = zs = t),
            (Is = 0),
            (As = null),
            (js = Ls = Bs = 0),
            (Ds = Fs = null),
            null !== za)
          ) {
            for (t = 0; t < za.length; t++)
              if (null !== (r = (n = za[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                  a = n.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (r.next = i);
                }
                n.pending = r;
              }
            za = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ns;
            try {
              if ((Ta(), (ai.current = Ji), di)) {
                for (var r = si.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                di = !1;
              }
              if (
                ((li = 0),
                (ci = ui = si = null),
                (fi = !1),
                (pi = 0),
                (Ps.current = null),
                null === n || null === n.return)
              ) {
                (Is = 1), (As = t), (Ns = null);
                break;
              }
              e: {
                var i = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = _s),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = yl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      vl(h, l, s, 0, t),
                      1 & h.mode && gl(i, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    gl(i, c, t), gu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (ia && 1 & s.mode) {
                  var y = yl(l);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      vl(y, l, s, 0, t),
                      ga(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Is && (Is = 2),
                  null === Fs ? (Fs = [i]) : Fs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Va(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gs || !Gs.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Va(i, ml(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xu(n);
            } catch (w) {
              (t = w), Ns === n && null !== n && (Ns = n = n.return);
              continue;
            }
            break;
          }
        }
        function mu() {
          var e = $s.current;
          return ($s.current = Ji), null === e ? Ji : e;
        }
        function gu() {
          (0 !== Is && 3 !== Is && 2 !== Is) || (Is = 4),
            null === Ms ||
              (0 === (268435455 & Bs) && 0 === (268435455 & Ls)) ||
              su(Ms, _s);
        }
        function yu(e, t) {
          var n = Rs;
          Rs |= 2;
          var r = mu();
          for ((Ms === e && _s === t) || ((Hs = null), pu(e, t)); ; )
            try {
              vu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((Ta(), (Rs = n), ($s.current = r), null !== Ns))
            throw Error(a(261));
          return (Ms = null), (_s = 0), Is;
        }
        function vu() {
          for (; null !== Ns; ) wu(Ns);
        }
        function bu() {
          for (; null !== Ns && !Xe(); ) wu(Ns);
        }
        function wu(e) {
          var t = Cs(e.alternate, e, zs);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Ns = t),
            (Ps.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Ql(n, t, zs))) return void (Ns = n);
            } else {
              if (null !== (n = ql(n, t)))
                return (n.flags &= 32767), void (Ns = n);
              if (null === e) return (Is = 6), void (Ns = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ns = t);
            Ns = t = e;
          } while (null !== t);
          0 === Is && (Is = 5);
        }
        function Su(e, t, n) {
          var r = wt,
            o = Ts.transition;
          try {
            (Ts.transition = null),
              (wt = 1),
              (function (e, t, n, r) {
                do {
                  ku();
                } while (null !== qs);
                if (0 !== (6 & Rs)) throw Error(a(327));
                n = e.finishedWork;
                var o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var o = 31 - lt(n),
                        a = 1 << o;
                      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
                    }
                  })(e, i),
                  e === Ms && ((Ns = Ms = null), (_s = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Qs ||
                    ((Qs = !0),
                    Mu(nt, function () {
                      return ku(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ts.transition), (Ts.transition = null);
                  var l = wt;
                  wt = 1;
                  var s = Rs;
                  (Rs |= 4),
                    (Ps.current = null),
                    (function (e, t) {
                      if (((to = Ut), hr((e = pr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var o = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (s = l + o),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = l + r),
                                    3 === f.nodeType &&
                                      (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === o && (s = l),
                                    p === i && ++d === r && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        no = { focusedElem: e, selectionRange: n },
                          Ut = !1,
                          Jl = t;
                        null !== Jl;

                      )
                        if (
                          ((e = (t = Jl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jl = e);
                        else
                          for (; null !== Jl; ) {
                            t = Jl;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : rl(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (x) {
                              Eu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jl = e);
                              break;
                            }
                            Jl = t.return;
                          }
                      (m = ns), (ns = !1);
                    })(e, n),
                    ys(n, e),
                    mr(no),
                    (Ut = !!to),
                    (no = to = null),
                    (e.current = n),
                    bs(n, e, o),
                    Ye(),
                    (Rs = s),
                    (wt = l),
                    (Ts.transition = i);
                } else e.current = n;
                if (
                  (Qs && ((Qs = !1), (qs = e), (Xs = o)),
                  (i = e.pendingLanes),
                  0 === i && (Gs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ou(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (o = t[n]),
                      r(o.value, { componentStack: o.stack, digest: o.digest });
                if (Us) throw ((Us = !1), (e = Ks), (Ks = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && ku(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zs
                      ? Ys++
                      : ((Ys = 0), (Zs = e))
                    : (Ys = 0),
                  Ho();
              })(e, t, n, r);
          } finally {
            (Ts.transition = o), (wt = r);
          }
          return null;
        }
        function ku() {
          if (null !== qs) {
            var e = xt(Xs),
              t = Ts.transition,
              n = wt;
            try {
              if (((Ts.transition = null), (wt = 16 > e ? 16 : e), null === qs))
                var r = !1;
              else {
                if (((e = qs), (qs = null), (Xs = 0), 0 !== (6 & Rs)))
                  throw Error(a(331));
                var o = Rs;
                for (Rs |= 4, Jl = e.current; null !== Jl; ) {
                  var i = Jl,
                    l = i.child;
                  if (0 !== (16 & Jl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Jl = c; null !== Jl; ) {
                          var d = Jl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jl = f);
                          else
                            for (; null !== Jl; ) {
                              var p = (d = Jl).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Jl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jl = p);
                                break;
                              }
                              Jl = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Jl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l)
                    (l.return = i), (Jl = l);
                  else
                    e: for (; null !== Jl; ) {
                      if (0 !== (2048 & (i = Jl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rs(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Jl = v);
                        break e;
                      }
                      Jl = i.return;
                    }
                }
                var b = e.current;
                for (Jl = b; null !== Jl; ) {
                  var w = (l = Jl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== w)
                    (w.return = l), (Jl = w);
                  else
                    e: for (l = b; null !== Jl; ) {
                      if (0 !== (2048 & (s = Jl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s);
                          }
                        } catch (S) {
                          Eu(s, s.return, S);
                        }
                      if (s === l) {
                        Jl = null;
                        break e;
                      }
                      var x = s.sibling;
                      if (null !== x) {
                        (x.return = s.return), (Jl = x);
                        break e;
                      }
                      Jl = s.return;
                    }
                }
                if (
                  ((Rs = o),
                  Ho(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (S) {}
                r = !0;
              }
              return r;
            } finally {
              (wt = n), (Ts.transition = t);
            }
          }
          return !1;
        }
        function Cu(e, t, n) {
          (e = Da(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), ou(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Cu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Cu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gs || !Gs.has(r)))
                ) {
                  (t = Da(t, (e = ml(t, (e = cl(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function $u(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ms === e &&
              (_s & n) === n &&
              (4 === Is ||
              (3 === Is && (130023424 & _s) === _s && 500 > Ze() - Ws)
                ? pu(e, 0)
                : (js |= n)),
            ou(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = dt), 0 === (130023424 & (dt <<= 1)) && (dt = 4194304)));
          var n = tu();
          null !== (e = Aa(e, t)) && (vt(e, t, n), ou(e, n));
        }
        function Tu(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function Ru(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                o = e.memoizedState;
              null !== o && (n = o.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function Mu(e, t) {
          return Qe(e, t);
        }
        function Nu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function _u(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ou(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = _u(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Iu(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" === typeof e)) zu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case C:
                return Au(n.children, o, i, t);
              case E:
                (l = 8), (o |= 8);
                break;
              case $:
                return (
                  ((e = _u(12, n, t, 2 | o)).elementType = $), (e.lanes = i), e
                );
              case M:
                return (
                  ((e = _u(13, n, t, o)).elementType = M), (e.lanes = i), e
                );
              case N:
                return (
                  ((e = _u(19, n, t, o)).elementType = N), (e.lanes = i), e
                );
              case O:
                return Bu(n, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case T:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case _:
                      l = 14;
                      break e;
                    case z:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = _u(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Au(e, t, n, r) {
          return ((e = _u(7, e, r, t)).lanes = n), e;
        }
        function Bu(e, t, n, r) {
          return (
            ((e = _u(22, e, r, t)).elementType = O),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Lu(e, t, n) {
          return ((e = _u(6, e, null, t)).lanes = n), e;
        }
        function ju(e, t, n) {
          return (
            ((t = _u(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Fu(e, t, n, r, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = yt(0)),
            (this.expirationTimes = yt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = yt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Du(e, t, n, r, o, a, i, l, s) {
          return (
            (e = new Fu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = _u(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            La(a),
            e
          );
        }
        function Wu(e) {
          if (!e) return Ro;
          e: {
            if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oo(n)) return Bo(e, n, t);
          }
          return t;
        }
        function Vu(e, t, n, r, o, a, i, l, s) {
          return (
            ((e = Du(n, r, !0, e, 0, a, 0, l, s)).context = Wu(null)),
            (n = e.current),
            ((a = Fa((r = tu()), (o = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Da(n, a, o),
            (e.current.lanes = o),
            vt(e, o, r),
            ou(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var o = t.current,
            a = tu(),
            i = nu(o);
          return (
            (n = Wu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Fa(a, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Da(o, t, i)) && (ru(e, o, i, a), Wa(e, o, i)),
            i
          );
        }
        function Uu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ku(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gu(e, t) {
          Ku(e, t), (e = e.alternate) && Ku(e, t);
        }
        Cs = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || No.current) wl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ml(t), ma();
                        break;
                      case 5:
                        Ja(t);
                        break;
                      case 1:
                        Oo(t.type) && Lo(t);
                        break;
                      case 4:
                        Ya(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          o = t.memoizedProps.value;
                        To(Ca, r._currentValue), (r._currentValue = o);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (To(ti, 1 & ti.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ll(e, t, n)
                            : (To(ti, 1 & ti.current),
                              null !== (e = Ul(e, t, n)) ? e.sibling : null);
                        To(ti, 1 & ti.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vl(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          To(ti, ti.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, n);
                    }
                    return Ul(e, t, n);
                  })(e, t, n)
                );
              wl = 0 !== (131072 & e.flags);
            }
          else (wl = !1), ia && 0 !== (1048576 & t.flags) && ta(t, Qo, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hl(e, t), (e = t.pendingProps);
              var o = zo(t, Mo.current);
              Na(t, n), (o = yi(null, t, r, e, o, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oo(r) ? ((i = !0), Lo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    La(t),
                    (o.updater = al),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    ul(t, r, e, n),
                    (t = Rl(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ia && i && na(t),
                    xl(null, t, o, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hl(e, t),
                  (e = t.pendingProps),
                  (r = (o = r._init)(r._payload)),
                  (t.type = r),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === _) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = rl(r, e)),
                  o)
                ) {
                  case 0:
                    t = Pl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Sl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = kl(null, t, r, rl(r.type, e), n);
                    break e;
                }
                throw Error(a(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Pl(e, t, r, (o = t.elementType === r ? o : rl(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Tl(e, t, r, (o = t.elementType === r ? o : rl(r, o)), n)
              );
            case 3:
              e: {
                if ((Ml(t), null === e)) throw Error(a(387));
                (r = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  ja(e, t),
                  Ha(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Nl(e, t, r, n, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (r !== o) {
                    t = Nl(e, t, r, n, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    aa = co(t.stateNode.containerInfo.firstChild),
                      oa = t,
                      ia = !0,
                      la = null,
                      n = ka(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ma(), r === o)) {
                    t = Ul(e, t, n);
                    break e;
                  }
                  xl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ja(t),
                null === e && da(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                ro(r, o)
                  ? (l = null)
                  : null !== i && ro(r, i) && (t.flags |= 32),
                $l(e, t),
                xl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && da(t), null;
            case 13:
              return Ll(e, t, n);
            case 4:
              return (
                Ya(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Sa(t, null, r, n)) : xl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Sl(e, t, r, (o = t.elementType === r ? o : rl(r, o)), n)
              );
            case 7:
              return xl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  To(Ca, r._currentValue),
                  (r._currentValue = l),
                  null !== i)
                )
                  if (sr(i.value, l)) {
                    if (i.children === o.children && !No.current) {
                      t = Ul(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === i.tag) {
                              (u = Fa(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= n),
                              null !== (u = i.alternate) && (u.lanes |= n),
                              Ma(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag)
                        l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Ma(l, n, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                xl(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = t.pendingProps.children),
                Na(t, n),
                (r = r((o = _a(o)))),
                (t.flags |= 1),
                xl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = rl((r = t.type), t.pendingProps)),
                kl(e, t, r, (o = rl(r.type, o)), n)
              );
            case 15:
              return Cl(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : rl(r, o)),
                Hl(e, t),
                (t.tag = 1),
                Oo(r) ? ((e = !0), Lo(t)) : (e = !1),
                Na(t, n),
                ll(t, r, o),
                ul(t, r, o, n),
                Rl(null, t, r, !0, e, n)
              );
            case 19:
              return Vl(e, t, n);
            case 22:
              return El(e, t, n);
          }
          throw Error(a(156, t.tag));
        };
        var Qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function ec(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var l = o;
              o = function () {
                var e = Uu(i);
                l.call(e);
              };
            }
            Hu(t, i, e, o);
          } else
            i = (function (e, t, n, r, o) {
              if (o) {
                if ("function" === typeof r) {
                  var a = r;
                  r = function () {
                    var e = Uu(i);
                    a.call(e);
                  };
                }
                var i = Vu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = i),
                  (e[go] = i.current),
                  Vr(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = Uu(s);
                  l.call(e);
                };
              }
              var s = Du(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = s),
                (e[go] = s.current),
                Vr(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, o, r);
          return Uu(i);
        }
        (Xu.prototype.render = qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Hu(e, t, null, null);
          }),
          (Xu.prototype.unmount = qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Hu(null, e, null, null);
                }),
                  (t[go] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Ot.length && 0 !== t && t < Ot[n].priority;
                n++
              );
              Ot.splice(n, 0, e), 0 === n && Lt(e);
            }
          }),
          (St = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (bt(t, 1 | n),
                    ou(t, Ze()),
                    0 === (6 & Rs) && ((Vs = Ze() + 500), Ho()));
                }
                break;
              case 13:
                du(function () {
                  var t = Aa(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Gu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Aa(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Gu(e, 134217728);
            }
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = Aa(e, t);
              if (null !== n) ru(n, e, t, tu());
              Gu(e, t);
            }
          }),
          (Et = function () {
            return wt;
          }),
          ($t = function (e, t) {
            var n = wt;
            try {
              return (wt = e), t();
            } finally {
              wt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = ko(r);
                      if (!o) throw Error(a(90));
                      Q(r), J(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && re(e, !!n.multiple, t, !1);
            }
          }),
          (Re = cu),
          (Me = du);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [xo, So, ko, Pe, Te, cu],
          },
          nc = {
            findFiberByHostInstance: wo,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ke(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (at = oc.inject(rc)), (it = oc);
            } catch (de) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Yu(t)) throw Error(a(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Yu(e)) throw Error(a(299));
            var n = !1,
              r = "",
              o = Qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Du(e, 1, !1, null, 0, n, 0, r, o)),
              (e[go] = t.current),
              Vr(8 === e.nodeType ? e.parentNode : e),
              new qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = Ke(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(a(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Yu(e)) throw Error(a(405));
            var r = (null != n && n.hydratedSources) || null,
              o = !1,
              i = "",
              l = Qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (o = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Vu(t, null, e, 1, null != n ? n : null, o, 0, i, l)),
              (e[go] = t.current),
              Vr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (o = (o = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(a(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[go] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      763: (e, t, n) => {
        e.exports = n(983);
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      983: (e, t) => {
        var n = "function" === typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          o = n ? Symbol.for("react.portal") : 60106,
          a = n ? Symbol.for("react.fragment") : 60107,
          i = n ? Symbol.for("react.strict_mode") : 60108,
          l = n ? Symbol.for("react.profiler") : 60114,
          s = n ? Symbol.for("react.provider") : 60109,
          u = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          d = n ? Symbol.for("react.concurrent_mode") : 60111,
          f = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          m = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          y = n ? Symbol.for("react.block") : 60121,
          v = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function x(e) {
          if ("object" === typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case d:
                  case a:
                  case l:
                  case i:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case u:
                      case f:
                      case g:
                      case m:
                      case s:
                        return e;
                      default:
                        return t;
                    }
                }
              case o:
                return t;
            }
          }
        }
        function S(e) {
          return x(e) === d;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = d),
          (t.ContextConsumer = u),
          (t.ContextProvider = s),
          (t.Element = r),
          (t.ForwardRef = f),
          (t.Fragment = a),
          (t.Lazy = g),
          (t.Memo = m),
          (t.Portal = o),
          (t.Profiler = l),
          (t.StrictMode = i),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return S(e) || x(e) === c;
          }),
          (t.isConcurrentMode = S),
          (t.isContextConsumer = function (e) {
            return x(e) === u;
          }),
          (t.isContextProvider = function (e) {
            return x(e) === s;
          }),
          (t.isElement = function (e) {
            return "object" === typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return x(e) === f;
          }),
          (t.isFragment = function (e) {
            return x(e) === a;
          }),
          (t.isLazy = function (e) {
            return x(e) === g;
          }),
          (t.isMemo = function (e) {
            return x(e) === m;
          }),
          (t.isPortal = function (e) {
            return x(e) === o;
          }),
          (t.isProfiler = function (e) {
            return x(e) === l;
          }),
          (t.isStrictMode = function (e) {
            return x(e) === i;
          }),
          (t.isSuspense = function (e) {
            return x(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" === typeof e ||
              "function" === typeof e ||
              e === a ||
              e === d ||
              e === l ||
              e === i ||
              e === p ||
              e === h ||
              ("object" === typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === m ||
                  e.$$typeof === s ||
                  e.$$typeof === u ||
                  e.$$typeof === f ||
                  e.$$typeof === v ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === y))
            );
          }),
          (t.typeOf = x);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, o) {
      if ((1 & o && (r = this(r)), 8 & o)) return r;
      if ("object" === typeof r && r) {
        if (4 & o && r.__esModule) return r;
        if (16 & o && "function" === typeof r.then) return r;
      }
      var a = Object.create(null);
      n.r(a);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & o && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(a, i), a;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var r = n(43),
    o = n.t(r, 2),
    a = n(391);
  function i(e) {
    var t,
      n,
      r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = i(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  const l = function () {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = i(e)) && (r && (r += " "), (r += t));
    return r;
  };
  function s(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    const r = {};
    for (const o in e) {
      const a = e[o];
      let i = "",
        l = !0;
      for (let e = 0; e < a.length; e += 1) {
        const r = a[e];
        r &&
          ((i += (!0 === l ? "" : " ") + t(r)),
          (l = !1),
          n && n[r] && (i += " " + n[r]));
      }
      r[o] = i;
    }
    return r;
  }
  var u = n(579);
  const c = r.createContext();
  const d = () => r.useContext(c) ?? !1;
  function f(e, t) {
    "function" === typeof e ? e(t) : e && (e.current = t);
  }
  function p() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return r.useMemo(
      () =>
        t.every((e) => null == e)
          ? null
          : (e) => {
              t.forEach((t) => {
                f(t, e);
              });
            },
      t
    );
  }
  function h(e) {
    return parseInt(r.version, 10) >= 19
      ? e?.props?.ref || null
      : e?.ref || null;
  }
  function m(e) {
    return (e && e.ownerDocument) || document;
  }
  const g = [
    "input",
    "select",
    "textarea",
    "a[href]",
    "button",
    "[tabindex]",
    "audio[controls]",
    "video[controls]",
    '[contenteditable]:not([contenteditable="false"])',
  ].join(",");
  function y(e) {
    const t = [],
      n = [];
    return (
      Array.from(e.querySelectorAll(g)).forEach((e, r) => {
        const o = (function (e) {
          const t = parseInt(e.getAttribute("tabindex") || "", 10);
          return Number.isNaN(t)
            ? "true" === e.contentEditable ||
              (("AUDIO" === e.nodeName ||
                "VIDEO" === e.nodeName ||
                "DETAILS" === e.nodeName) &&
                null === e.getAttribute("tabindex"))
              ? 0
              : e.tabIndex
            : t;
        })(e);
        -1 !== o &&
          (function (e) {
            return !(
              e.disabled ||
              ("INPUT" === e.tagName && "hidden" === e.type) ||
              (function (e) {
                if ("INPUT" !== e.tagName || "radio" !== e.type) return !1;
                if (!e.name) return !1;
                const t = (t) =>
                  e.ownerDocument.querySelector(`input[type="radio"]${t}`);
                let n = t(`[name="${e.name}"]:checked`);
                return n || (n = t(`[name="${e.name}"]`)), n !== e;
              })(e)
            );
          })(e) &&
          (0 === o
            ? t.push(e)
            : n.push({ documentOrder: r, tabIndex: o, node: e }));
      }),
      n
        .sort((e, t) =>
          e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex
        )
        .map((e) => e.node)
        .concat(t)
    );
  }
  function v() {
    return !0;
  }
  const b = function (e) {
    const {
        children: t,
        disableAutoFocus: n = !1,
        disableEnforceFocus: o = !1,
        disableRestoreFocus: a = !1,
        getTabbable: i = y,
        isEnabled: l = v,
        open: s,
      } = e,
      c = r.useRef(!1),
      d = r.useRef(null),
      f = r.useRef(null),
      g = r.useRef(null),
      b = r.useRef(null),
      w = r.useRef(!1),
      x = r.useRef(null),
      S = p(h(t), x),
      k = r.useRef(null);
    r.useEffect(() => {
      s && x.current && (w.current = !n);
    }, [n, s]),
      r.useEffect(() => {
        if (!s || !x.current) return;
        const e = m(x.current);
        return (
          x.current.contains(e.activeElement) ||
            (x.current.hasAttribute("tabIndex") ||
              x.current.setAttribute("tabIndex", "-1"),
            w.current && x.current.focus()),
          () => {
            a ||
              (g.current &&
                g.current.focus &&
                ((c.current = !0), g.current.focus()),
              (g.current = null));
          }
        );
      }, [s]),
      r.useEffect(() => {
        if (!s || !x.current) return;
        const e = m(x.current),
          t = (t) => {
            (k.current = t),
              !o &&
                l() &&
                "Tab" === t.key &&
                e.activeElement === x.current &&
                t.shiftKey &&
                ((c.current = !0), f.current && f.current.focus());
          },
          n = () => {
            const t = x.current;
            if (null === t) return;
            if (!e.hasFocus() || !l() || c.current)
              return void (c.current = !1);
            if (t.contains(e.activeElement)) return;
            if (
              o &&
              e.activeElement !== d.current &&
              e.activeElement !== f.current
            )
              return;
            if (e.activeElement !== b.current) b.current = null;
            else if (null !== b.current) return;
            if (!w.current) return;
            let n = [];
            if (
              ((e.activeElement !== d.current &&
                e.activeElement !== f.current) ||
                (n = i(x.current)),
              n.length > 0)
            ) {
              const e = Boolean(
                  k.current?.shiftKey && "Tab" === k.current?.key
                ),
                t = n[0],
                r = n[n.length - 1];
              "string" !== typeof t &&
                "string" !== typeof r &&
                (e ? r.focus() : t.focus());
            } else t.focus();
          };
        e.addEventListener("focusin", n), e.addEventListener("keydown", t, !0);
        const r = setInterval(() => {
          e.activeElement && "BODY" === e.activeElement.tagName && n();
        }, 50);
        return () => {
          clearInterval(r),
            e.removeEventListener("focusin", n),
            e.removeEventListener("keydown", t, !0);
        };
      }, [n, o, a, l, s, i]);
    const C = (e) => {
      null === g.current && (g.current = e.relatedTarget), (w.current = !0);
    };
    return (0, u.jsxs)(r.Fragment, {
      children: [
        (0, u.jsx)("div", {
          tabIndex: s ? 0 : -1,
          onFocus: C,
          ref: d,
          "data-testid": "sentinelStart",
        }),
        r.cloneElement(t, {
          ref: S,
          onFocus: (e) => {
            null === g.current && (g.current = e.relatedTarget),
              (w.current = !0),
              (b.current = e.target);
            const n = t.props.onFocus;
            n && n(e);
          },
        }),
        (0, u.jsx)("div", {
          tabIndex: s ? 0 : -1,
          onFocus: C,
          ref: f,
          "data-testid": "sentinelEnd",
        }),
      ],
    });
  };
  var w = n(950);
  const x = "undefined" !== typeof window ? r.useLayoutEffect : r.useEffect;
  const S = r.forwardRef(function (e, t) {
    const { children: n, container: o, disablePortal: a = !1 } = e,
      [i, l] = r.useState(null),
      s = p(r.isValidElement(n) ? h(n) : null, t);
    if (
      (x(() => {
        a ||
          l(
            (function (e) {
              return "function" === typeof e ? e() : e;
            })(o) || document.body
          );
      }, [o, a]),
      x(() => {
        if (i && !a)
          return (
            f(t, i),
            () => {
              f(t, null);
            }
          );
      }, [t, i, a]),
      a)
    ) {
      if (r.isValidElement(n)) {
        const e = { ref: s };
        return r.cloneElement(n, e);
      }
      return n;
    }
    return i ? w.createPortal(n, i) : i;
  });
  function k() {
    return (
      (k = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      k.apply(null, arguments)
    );
  }
  var C = (function () {
      function e(e) {
        var t = this;
        (this._insertTag = function (e) {
          var n;
          (n =
            0 === t.tags.length
              ? t.insertionPoint
                ? t.insertionPoint.nextSibling
                : t.prepend
                ? t.container.firstChild
                : t.before
              : t.tags[t.tags.length - 1].nextSibling),
            t.container.insertBefore(e, n),
            t.tags.push(e);
        }),
          (this.isSpeedy = void 0 === e.speedy || e.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = e.nonce),
          (this.key = e.key),
          (this.container = e.container),
          (this.prepend = e.prepend),
          (this.insertionPoint = e.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (e) {
          e.forEach(this._insertTag);
        }),
        (t.insert = function (e) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(
              (function (e) {
                var t = document.createElement("style");
                return (
                  t.setAttribute("data-emotion", e.key),
                  void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t
                );
              })(this)
            );
          var t = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var n = (function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            })(t);
            try {
              n.insertRule(e, n.cssRules.length);
            } catch (r) {}
          } else t.appendChild(document.createTextNode(e));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (e) {
            var t;
            return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    E = Math.abs,
    $ = String.fromCharCode,
    P = Object.assign;
  function T(e) {
    return e.trim();
  }
  function R(e, t, n) {
    return e.replace(t, n);
  }
  function M(e, t) {
    return e.indexOf(t);
  }
  function N(e, t) {
    return 0 | e.charCodeAt(t);
  }
  function _(e, t, n) {
    return e.slice(t, n);
  }
  function z(e) {
    return e.length;
  }
  function O(e) {
    return e.length;
  }
  function I(e, t) {
    return t.push(e), e;
  }
  var A = 1,
    B = 1,
    L = 0,
    j = 0,
    F = 0,
    D = "";
  function W(e, t, n, r, o, a, i) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: a,
      line: A,
      column: B,
      length: i,
      return: "",
    };
  }
  function V(e, t) {
    return P(W("", null, null, "", null, null, 0), e, { length: -e.length }, t);
  }
  function H() {
    return (F = j > 0 ? N(D, --j) : 0), B--, 10 === F && ((B = 1), A--), F;
  }
  function U() {
    return (F = j < L ? N(D, j++) : 0), B++, 10 === F && ((B = 1), A++), F;
  }
  function K() {
    return N(D, j);
  }
  function G() {
    return j;
  }
  function Q(e, t) {
    return _(D, e, t);
  }
  function q(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function X(e) {
    return (A = B = 1), (L = z((D = e))), (j = 0), [];
  }
  function Y(e) {
    return (D = ""), e;
  }
  function Z(e) {
    return T(Q(j - 1, te(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
  }
  function J(e) {
    for (; (F = K()) && F < 33; ) U();
    return q(e) > 2 || q(F) > 3 ? "" : " ";
  }
  function ee(e, t) {
    for (
      ;
      --t &&
      U() &&
      !(F < 48 || F > 102 || (F > 57 && F < 65) || (F > 70 && F < 97));

    );
    return Q(e, G() + (t < 6 && 32 == K() && 32 == U()));
  }
  function te(e) {
    for (; U(); )
      switch (F) {
        case e:
          return j;
        case 34:
        case 39:
          34 !== e && 39 !== e && te(F);
          break;
        case 40:
          41 === e && te(e);
          break;
        case 92:
          U();
      }
    return j;
  }
  function ne(e, t) {
    for (; U() && e + F !== 57 && (e + F !== 84 || 47 !== K()); );
    return "/*" + Q(t, j - 1) + "*" + $(47 === e ? e : U());
  }
  function re(e) {
    for (; !q(K()); ) U();
    return Q(e, j);
  }
  var oe = "-ms-",
    ae = "-moz-",
    ie = "-webkit-",
    le = "comm",
    se = "rule",
    ue = "decl",
    ce = "@keyframes";
  function de(e, t) {
    for (var n = "", r = O(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function fe(e, t, n, r) {
    switch (e.type) {
      case "@layer":
        if (e.children.length) break;
      case "@import":
      case ue:
        return (e.return = e.return || e.value);
      case le:
        return "";
      case ce:
        return (e.return = e.value + "{" + de(e.children, r) + "}");
      case se:
        e.value = e.props.join(",");
    }
    return z((n = de(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function pe(e) {
    return Y(he("", null, null, null, [""], (e = X(e)), 0, [0], e));
  }
  function he(e, t, n, r, o, a, i, l, s) {
    for (
      var u = 0,
        c = 0,
        d = i,
        f = 0,
        p = 0,
        h = 0,
        m = 1,
        g = 1,
        y = 1,
        v = 0,
        b = "",
        w = o,
        x = a,
        S = r,
        k = b;
      g;

    )
      switch (((h = v), (v = U()))) {
        case 40:
          if (108 != h && 58 == N(k, d - 1)) {
            -1 != M((k += R(Z(v), "&", "&\f")), "&\f") && (y = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          k += Z(v);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          k += J(h);
          break;
        case 92:
          k += ee(G() - 1, 7);
          continue;
        case 47:
          switch (K()) {
            case 42:
            case 47:
              I(ge(ne(U(), G()), t, n), s);
              break;
            default:
              k += "/";
          }
          break;
        case 123 * m:
          l[u++] = z(k) * y;
        case 125 * m:
        case 59:
        case 0:
          switch (v) {
            case 0:
            case 125:
              g = 0;
            case 59 + c:
              -1 == y && (k = R(k, /\f/g, "")),
                p > 0 &&
                  z(k) - d &&
                  I(
                    p > 32
                      ? ye(k + ";", r, n, d - 1)
                      : ye(R(k, " ", "") + ";", r, n, d - 2),
                    s
                  );
              break;
            case 59:
              k += ";";
            default:
              if (
                (I((S = me(k, t, n, u, c, o, l, b, (w = []), (x = []), d)), a),
                123 === v)
              )
                if (0 === c) he(k, t, S, S, w, a, d, l, x);
                else
                  switch (99 === f && 110 === N(k, 3) ? 100 : f) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      he(
                        e,
                        S,
                        S,
                        r && I(me(e, S, S, 0, 0, o, l, b, o, (w = []), d), x),
                        o,
                        x,
                        d,
                        l,
                        r ? w : x
                      );
                      break;
                    default:
                      he(k, S, S, S, [""], x, 0, l, x);
                  }
          }
          (u = c = p = 0), (m = y = 1), (b = k = ""), (d = i);
          break;
        case 58:
          (d = 1 + z(k)), (p = h);
        default:
          if (m < 1)
            if (123 == v) --m;
            else if (125 == v && 0 == m++ && 125 == H()) continue;
          switch (((k += $(v)), v * m)) {
            case 38:
              y = c > 0 ? 1 : ((k += "\f"), -1);
              break;
            case 44:
              (l[u++] = (z(k) - 1) * y), (y = 1);
              break;
            case 64:
              45 === K() && (k += Z(U())),
                (f = K()),
                (c = d = z((b = k += re(G())))),
                v++;
              break;
            case 45:
              45 === h && 2 == z(k) && (m = 0);
          }
      }
    return a;
  }
  function me(e, t, n, r, o, a, i, l, s, u, c) {
    for (
      var d = o - 1, f = 0 === o ? a : [""], p = O(f), h = 0, m = 0, g = 0;
      h < r;
      ++h
    )
      for (var y = 0, v = _(e, d + 1, (d = E((m = i[h])))), b = e; y < p; ++y)
        (b = T(m > 0 ? f[y] + " " + v : R(v, /&\f/g, f[y]))) && (s[g++] = b);
    return W(e, t, n, 0 === o ? se : l, s, u, c);
  }
  function ge(e, t, n) {
    return W(e, t, n, le, $(F), _(e, 2, -2), 0);
  }
  function ye(e, t, n, r) {
    return W(e, t, n, ue, _(e, 0, r), _(e, r + 1, -1), r);
  }
  var ve = function (e, t, n) {
      for (
        var r = 0, o = 0;
        (r = o), (o = K()), 38 === r && 12 === o && (t[n] = 1), !q(o);

      )
        U();
      return Q(e, j);
    },
    be = function (e, t) {
      return Y(
        (function (e, t) {
          var n = -1,
            r = 44;
          do {
            switch (q(r)) {
              case 0:
                38 === r && 12 === K() && (t[n] = 1), (e[n] += ve(j - 1, t, n));
                break;
              case 2:
                e[n] += Z(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === K() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += $(r);
            }
          } while ((r = U()));
          return e;
        })(X(e), t)
      );
    },
    we = new WeakMap(),
    xe = function (e) {
      if ("rule" === e.type && e.parent && !(e.length < 1)) {
        for (
          var t = e.value,
            n = e.parent,
            r = e.column === n.column && e.line === n.line;
          "rule" !== n.type;

        )
          if (!(n = n.parent)) return;
        if (
          (1 !== e.props.length || 58 === t.charCodeAt(0) || we.get(n)) &&
          !r
        ) {
          we.set(e, !0);
          for (
            var o = [], a = be(t, o), i = n.props, l = 0, s = 0;
            l < a.length;
            l++
          )
            for (var u = 0; u < i.length; u++, s++)
              e.props[s] = o[l]
                ? a[l].replace(/&\f/g, i[u])
                : i[u] + " " + a[l];
        }
      }
    },
    Se = function (e) {
      if ("decl" === e.type) {
        var t = e.value;
        108 === t.charCodeAt(0) &&
          98 === t.charCodeAt(2) &&
          ((e.return = ""), (e.value = ""));
      }
    };
  function ke(e, t) {
    switch (
      (function (e, t) {
        return 45 ^ N(e, 0)
          ? (((((((t << 2) ^ N(e, 0)) << 2) ^ N(e, 1)) << 2) ^ N(e, 2)) << 2) ^
              N(e, 3)
          : 0;
      })(e, t)
    ) {
      case 5103:
        return ie + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return ie + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return ie + e + ae + e + oe + e + e;
      case 6828:
      case 4268:
        return ie + e + oe + e + e;
      case 6165:
        return ie + e + oe + "flex-" + e + e;
      case 5187:
        return (
          ie +
          e +
          R(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + oe + "flex-$1$2") +
          e
        );
      case 5443:
        return ie + e + oe + "flex-item-" + R(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          ie +
          e +
          oe +
          "flex-line-pack" +
          R(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return ie + e + oe + R(e, "shrink", "negative") + e;
      case 5292:
        return ie + e + oe + R(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          ie +
          "box-" +
          R(e, "-grow", "") +
          ie +
          e +
          oe +
          R(e, "grow", "positive") +
          e
        );
      case 4554:
        return ie + R(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
      case 6187:
        return (
          R(
            R(R(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return R(e, /(image-set\([^]*)/, ie + "$1$`$1");
      case 4968:
        return (
          R(
            R(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + oe + "flex-pack:$3"),
            /s.+-b[^;]+/,
            "justify"
          ) +
          ie +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return R(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (z(e) - 1 - t > 6)
          switch (N(e, t + 1)) {
            case 109:
              if (45 !== N(e, t + 4)) break;
            case 102:
              return (
                R(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    ie +
                    "$2-$3$1" +
                    ae +
                    (108 == N(e, t + 3) ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~M(e, "stretch")
                ? ke(R(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (115 !== N(e, t + 1)) break;
      case 6444:
        switch (N(e, z(e) - 3 - (~M(e, "!important") && 10))) {
          case 107:
            return R(e, ":", ":" + ie) + e;
          case 101:
            return (
              R(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  ie +
                  (45 === N(e, 14) ? "inline-" : "") +
                  "box$3$1" +
                  ie +
                  "$2$3$1" +
                  oe +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (N(e, t + 11)) {
          case 114:
            return ie + e + oe + R(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return ie + e + oe + R(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return ie + e + oe + R(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return ie + e + oe + e + e;
    }
    return e;
  }
  var Ce = [
      function (e, t, n, r) {
        if (e.length > -1 && !e.return)
          switch (e.type) {
            case ue:
              e.return = ke(e.value, e.length);
              break;
            case ce:
              return de([V(e, { value: R(e.value, "@", "@" + ie) })], r);
            case se:
              if (e.length)
                return (function (e, t) {
                  return e.map(t).join("");
                })(e.props, function (t) {
                  switch (
                    (function (e, t) {
                      return (e = t.exec(e)) ? e[0] : e;
                    })(t, /(::plac\w+|:read-\w+)/)
                  ) {
                    case ":read-only":
                    case ":read-write":
                      return de(
                        [V(e, { props: [R(t, /:(read-\w+)/, ":-moz-$1")] })],
                        r
                      );
                    case "::placeholder":
                      return de(
                        [
                          V(e, {
                            props: [R(t, /:(plac\w+)/, ":" + ie + "input-$1")],
                          }),
                          V(e, { props: [R(t, /:(plac\w+)/, ":-moz-$1")] }),
                          V(e, {
                            props: [R(t, /:(plac\w+)/, oe + "input-$1")],
                          }),
                        ],
                        r
                      );
                  }
                  return "";
                });
          }
      },
    ],
    Ee = function (e) {
      var t = e.key;
      if ("css" === t) {
        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(n, function (e) {
          -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
            (document.head.appendChild(e), e.setAttribute("data-s", ""));
        });
      }
      var r,
        o,
        a = e.stylisPlugins || Ce,
        i = {},
        l = [];
      (r = e.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
          function (e) {
            for (
              var t = e.getAttribute("data-emotion").split(" "), n = 1;
              n < t.length;
              n++
            )
              i[t[n]] = !0;
            l.push(e);
          }
        );
      var s,
        u,
        c = [
          fe,
          ((u = function (e) {
            s.insert(e);
          }),
          function (e) {
            e.root || ((e = e.return) && u(e));
          }),
        ],
        d = (function (e) {
          var t = O(e);
          return function (n, r, o, a) {
            for (var i = "", l = 0; l < t; l++) i += e[l](n, r, o, a) || "";
            return i;
          };
        })([xe, Se].concat(a, c));
      o = function (e, t, n, r) {
        (s = n),
          (function (e) {
            de(pe(e), d);
          })(e ? e + "{" + t.styles + "}" : t.styles),
          r && (f.inserted[t.name] = !0);
      };
      var f = {
        key: t,
        sheet: new C({
          key: t,
          container: r,
          nonce: e.nonce,
          speedy: e.speedy,
          prepend: e.prepend,
          insertionPoint: e.insertionPoint,
        }),
        nonce: e.nonce,
        inserted: i,
        registered: {},
        insert: o,
      };
      return f.sheet.hydrate(l), f;
    };
  function $e(e, t, n) {
    var r = "";
    return (
      n.split(" ").forEach(function (n) {
        void 0 !== e[n] ? t.push(e[n] + ";") : n && (r += n + " ");
      }),
      r
    );
  }
  var Pe = function (e, t, n) {
      var r = e.key + "-" + t.name;
      !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles);
    },
    Te = function (e, t, n) {
      Pe(e, t, n);
      var r = e.key + "-" + t.name;
      if (void 0 === e.inserted[t.name]) {
        var o = t;
        do {
          e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
        } while (void 0 !== o);
      }
    };
  var Re = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  };
  function Me(e) {
    var t = Object.create(null);
    return function (n) {
      return void 0 === t[n] && (t[n] = e(n)), t[n];
    };
  }
  var Ne = /[A-Z]|^ms/g,
    _e = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    ze = function (e) {
      return 45 === e.charCodeAt(1);
    },
    Oe = function (e) {
      return null != e && "boolean" !== typeof e;
    },
    Ie = Me(function (e) {
      return ze(e) ? e : e.replace(Ne, "-$&").toLowerCase();
    }),
    Ae = function (e, t) {
      switch (e) {
        case "animation":
        case "animationName":
          if ("string" === typeof t)
            return t.replace(_e, function (e, t, n) {
              return (Le = { name: t, styles: n, next: Le }), t;
            });
      }
      return 1 === Re[e] || ze(e) || "number" !== typeof t || 0 === t
        ? t
        : t + "px";
    };
  function Be(e, t, n) {
    if (null == n) return "";
    var r = n;
    if (void 0 !== r.__emotion_styles) return r;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object":
        var o = n;
        if (1 === o.anim)
          return (Le = { name: o.name, styles: o.styles, next: Le }), o.name;
        var a = n;
        if (void 0 !== a.styles) {
          var i = a.next;
          if (void 0 !== i)
            for (; void 0 !== i; )
              (Le = { name: i.name, styles: i.styles, next: Le }), (i = i.next);
          return a.styles + ";";
        }
        return (function (e, t, n) {
          var r = "";
          if (Array.isArray(n))
            for (var o = 0; o < n.length; o++) r += Be(e, t, n[o]) + ";";
          else
            for (var a in n) {
              var i = n[a];
              if ("object" !== typeof i) {
                var l = i;
                null != t && void 0 !== t[l]
                  ? (r += a + "{" + t[l] + "}")
                  : Oe(l) && (r += Ie(a) + ":" + Ae(a, l) + ";");
              } else if (
                !Array.isArray(i) ||
                "string" !== typeof i[0] ||
                (null != t && void 0 !== t[i[0]])
              ) {
                var s = Be(e, t, i);
                switch (a) {
                  case "animation":
                  case "animationName":
                    r += Ie(a) + ":" + s + ";";
                    break;
                  default:
                    r += a + "{" + s + "}";
                }
              } else
                for (var u = 0; u < i.length; u++)
                  Oe(i[u]) && (r += Ie(a) + ":" + Ae(a, i[u]) + ";");
            }
          return r;
        })(e, t, n);
      case "function":
        if (void 0 !== e) {
          var l = Le,
            s = n(e);
          return (Le = l), Be(e, t, s);
        }
    }
    var u = n;
    if (null == t) return u;
    var c = t[u];
    return void 0 !== c ? c : u;
  }
  var Le,
    je = /label:\s*([^\s;{]+)\s*(;|$)/g;
  function Fe(e, t, n) {
    if (
      1 === e.length &&
      "object" === typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0];
    var r = !0,
      o = "";
    Le = void 0;
    var a = e[0];
    null == a || void 0 === a.raw
      ? ((r = !1), (o += Be(n, t, a)))
      : (o += a[0]);
    for (var i = 1; i < e.length; i++) {
      if (((o += Be(n, t, e[i])), r)) o += a[i];
    }
    je.lastIndex = 0;
    for (var l, s = ""; null !== (l = je.exec(o)); ) s += "-" + l[1];
    var u =
      (function (e) {
        for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
          (t =
            1540483477 *
              (65535 &
                (t =
                  (255 & e.charCodeAt(r)) |
                  ((255 & e.charCodeAt(++r)) << 8) |
                  ((255 & e.charCodeAt(++r)) << 16) |
                  ((255 & e.charCodeAt(++r)) << 24))) +
            ((59797 * (t >>> 16)) << 16)),
            (n =
              (1540483477 * (65535 & (t ^= t >>> 24)) +
                ((59797 * (t >>> 16)) << 16)) ^
              (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
        switch (o) {
          case 3:
            n ^= (255 & e.charCodeAt(r + 2)) << 16;
          case 2:
            n ^= (255 & e.charCodeAt(r + 1)) << 8;
          case 1:
            n =
              1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
              ((59797 * (n >>> 16)) << 16);
        }
        return (
          ((n =
            1540483477 * (65535 & (n ^= n >>> 13)) +
            ((59797 * (n >>> 16)) << 16)) ^
            (n >>> 15)) >>>
          0
        ).toString(36);
      })(o) + s;
    return { name: u, styles: o, next: Le };
  }
  var De = !!o.useInsertionEffect && o.useInsertionEffect,
    We =
      De ||
      function (e) {
        return e();
      },
    Ve =
      (De || r.useLayoutEffect,
      r.createContext(
        "undefined" !== typeof HTMLElement ? Ee({ key: "css" }) : null
      )),
    He =
      (Ve.Provider,
      function (e) {
        return (0, r.forwardRef)(function (t, n) {
          var o = (0, r.useContext)(Ve);
          return e(t, o, n);
        });
      }),
    Ue = r.createContext({});
  var Ke = {}.hasOwnProperty,
    Ge = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
    Qe = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        Pe(t, n, r),
        We(function () {
          return Te(t, n, r);
        }),
        null
      );
    },
    qe = He(function (e, t, n) {
      var o = e.css;
      "string" === typeof o &&
        void 0 !== t.registered[o] &&
        (o = t.registered[o]);
      var a = e[Ge],
        i = [o],
        l = "";
      "string" === typeof e.className
        ? (l = $e(t.registered, i, e.className))
        : null != e.className && (l = e.className + " ");
      var s = Fe(i, void 0, r.useContext(Ue));
      l += t.key + "-" + s.name;
      var u = {};
      for (var c in e)
        Ke.call(e, c) && "css" !== c && c !== Ge && (u[c] = e[c]);
      return (
        (u.className = l),
        n && (u.ref = n),
        r.createElement(
          r.Fragment,
          null,
          r.createElement(Qe, {
            cache: t,
            serialized: s,
            isStringTag: "string" === typeof a,
          }),
          r.createElement(a, u)
        )
      );
    }),
    Xe =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Ye = Me(function (e) {
      return (
        Xe.test(e) ||
        (111 === e.charCodeAt(0) &&
          110 === e.charCodeAt(1) &&
          e.charCodeAt(2) < 91)
      );
    }),
    Ze = function (e) {
      return "theme" !== e;
    },
    Je = function (e) {
      return "string" === typeof e && e.charCodeAt(0) > 96 ? Ye : Ze;
    },
    et = function (e, t, n) {
      var r;
      if (t) {
        var o = t.shouldForwardProp;
        r =
          e.__emotion_forwardProp && o
            ? function (t) {
                return e.__emotion_forwardProp(t) && o(t);
              }
            : o;
      }
      return "function" !== typeof r && n && (r = e.__emotion_forwardProp), r;
    },
    tt = function (e) {
      var t = e.cache,
        n = e.serialized,
        r = e.isStringTag;
      return (
        Pe(t, n, r),
        We(function () {
          return Te(t, n, r);
        }),
        null
      );
    },
    nt = function e(t, n) {
      var o,
        a,
        i = t.__emotion_real === t,
        l = (i && t.__emotion_base) || t;
      void 0 !== n && ((o = n.label), (a = n.target));
      var s = et(t, n, i),
        u = s || Je(l),
        c = !u("as");
      return function () {
        var d = arguments,
          f =
            i && void 0 !== t.__emotion_styles
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (void 0 !== o && f.push("label:" + o + ";"),
          null == d[0] || void 0 === d[0].raw)
        )
          f.push.apply(f, d);
        else {
          var p = d[0];
          f.push(p[0]);
          for (var h = d.length, m = 1; m < h; m++) f.push(d[m], p[m]);
        }
        var g = He(function (e, t, n) {
          var o = (c && e.as) || l,
            i = "",
            d = [],
            p = e;
          if (null == e.theme) {
            for (var h in ((p = {}), e)) p[h] = e[h];
            p.theme = r.useContext(Ue);
          }
          "string" === typeof e.className
            ? (i = $e(t.registered, d, e.className))
            : null != e.className && (i = e.className + " ");
          var m = Fe(f.concat(d), t.registered, p);
          (i += t.key + "-" + m.name), void 0 !== a && (i += " " + a);
          var g = c && void 0 === s ? Je(o) : u,
            y = {};
          for (var v in e) (c && "as" === v) || (g(v) && (y[v] = e[v]));
          return (
            (y.className = i),
            n && (y.ref = n),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(tt, {
                cache: t,
                serialized: m,
                isStringTag: "string" === typeof o,
              }),
              r.createElement(o, y)
            )
          );
        });
        return (
          (g.displayName =
            void 0 !== o
              ? o
              : "Styled(" +
                ("string" === typeof l
                  ? l
                  : l.displayName || l.name || "Component") +
                ")"),
          (g.defaultProps = t.defaultProps),
          (g.__emotion_real = g),
          (g.__emotion_base = l),
          (g.__emotion_styles = f),
          (g.__emotion_forwardProp = s),
          Object.defineProperty(g, "toString", {
            value: function () {
              return "." + a;
            },
          }),
          (g.withComponent = function (t, r) {
            return e(t, k({}, n, r, { shouldForwardProp: et(g, r, !0) })).apply(
              void 0,
              f
            );
          }),
          g
        );
      };
    }.bind(null);
  function rt(e, t) {
    return nt(e, t);
  }
  [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ].forEach(function (e) {
    nt[e] = nt(e);
  });
  const ot = [];
  function at(e) {
    return (ot[0] = e), Fe(ot);
  }
  var it = n(528);
  function lt(e) {
    if ("object" !== typeof e || null === e) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (null === t ||
        t === Object.prototype ||
        null === Object.getPrototypeOf(t)) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function st(e) {
    if (r.isValidElement(e) || (0, it.Hy)(e) || !lt(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = st(e[n]);
      }),
      t
    );
  }
  function ut(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2]
        ? arguments[2]
        : { clone: !0 };
    const o = n.clone ? { ...e } : e;
    return (
      lt(e) &&
        lt(t) &&
        Object.keys(t).forEach((a) => {
          r.isValidElement(t[a]) || (0, it.Hy)(t[a])
            ? (o[a] = t[a])
            : lt(t[a]) && Object.prototype.hasOwnProperty.call(e, a) && lt(e[a])
            ? (o[a] = ut(e[a], t[a], n))
            : n.clone
            ? (o[a] = lt(t[a]) ? st(t[a]) : t[a])
            : (o[a] = t[a]);
        }),
      o
    );
  }
  function ct(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
        ...o
      } = e,
      a = ((e) => {
        const t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
        return (
          t.sort((e, t) => e.val - t.val),
          t.reduce((e, t) => ({ ...e, [t.key]: t.val }), {})
        );
      })(t),
      i = Object.keys(a);
    function l(e) {
      return `@media (min-width:${"number" === typeof t[e] ? t[e] : e}${n})`;
    }
    function s(e) {
      return `@media (max-width:${
        ("number" === typeof t[e] ? t[e] : e) - r / 100
      }${n})`;
    }
    function u(e, o) {
      const a = i.indexOf(o);
      return `@media (min-width:${
        "number" === typeof t[e] ? t[e] : e
      }${n}) and (max-width:${
        (-1 !== a && "number" === typeof t[i[a]] ? t[i[a]] : o) - r / 100
      }${n})`;
    }
    return {
      keys: i,
      values: a,
      up: l,
      down: s,
      between: u,
      only: function (e) {
        return i.indexOf(e) + 1 < i.length ? u(e, i[i.indexOf(e) + 1]) : l(e);
      },
      not: function (e) {
        const t = i.indexOf(e);
        return 0 === t
          ? l(i[1])
          : t === i.length - 1
          ? s(i[t])
          : u(e, i[i.indexOf(e) + 1]).replace("@media", "@media not all and");
      },
      unit: n,
      ...o,
    };
  }
  const dt = { borderRadius: 4 },
    ft = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    pt = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${ft[e]}px)`,
    },
    ht = {
      containerQueries: (e) => ({
        up: (t) => {
          let n = "number" === typeof t ? t : ft[t] || t;
          return (
            "number" === typeof n && (n = `${n}px`),
            e
              ? `@container ${e} (min-width:${n})`
              : `@container (min-width:${n})`
          );
        },
      }),
    };
  function mt(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const e = r.breakpoints || pt;
      return t.reduce((r, o, a) => ((r[e.up(e.keys[a])] = n(t[a])), r), {});
    }
    if ("object" === typeof t) {
      const e = r.breakpoints || pt;
      return Object.keys(t).reduce((o, a) => {
        if (
          (function (e, t) {
            return (
              "@" === t ||
              (t.startsWith("@") &&
                (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/)))
            );
          })(e.keys, a)
        ) {
          const e = (function (e, t) {
            const n = t.match(/^@([^/]+)?\/?(.+)?$/);
            if (!n) return null;
            const [, r, o] = n,
              a = Number.isNaN(+r) ? r || 0 : +r;
            return e.containerQueries(o).up(a);
          })(r.containerQueries ? r : ht, a);
          e && (o[e] = n(t[a], a));
        } else if (Object.keys(e.values || ft).includes(a)) {
          o[e.up(a)] = n(t[a], a);
        } else {
          const e = a;
          o[e] = t[e];
        }
        return o;
      }, {});
    }
    return n(t);
  }
  function gt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const t = e.keys?.reduce((t, n) => ((t[e.up(n)] = {}), t), {});
    return t || {};
  }
  function yt(e, t) {
    return e.reduce((e, t) => {
      const n = e[t];
      return (!n || 0 === Object.keys(n).length) && delete e[t], e;
    }, t);
  }
  function vt(e) {
    const t = new URL(`https://mui.com/production-error/?code=${e}`);
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    return (
      r.forEach((e) => t.searchParams.append("args[]", e)),
      `Minified MUI error #${e}; visit ${t} for the full message.`
    );
  }
  function bt(e) {
    if ("string" !== typeof e) throw new Error(vt(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function wt(e, t) {
    let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    if (!t || "string" !== typeof t) return null;
    if (e && e.vars && n) {
      const n = `vars.${t}`
        .split(".")
        .reduce((e, t) => (e && e[t] ? e[t] : null), e);
      if (null != n) return n;
    }
    return t.split(".").reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
  }
  function xt(e, t, n) {
    let r,
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
    return (
      (r =
        "function" === typeof e
          ? e(n)
          : Array.isArray(e)
          ? e[n] || o
          : wt(e, n) || o),
      t && (r = t(r, o, e)),
      r
    );
  }
  const St = function (e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      a = (e) => {
        if (null == e[t]) return null;
        const a = e[t],
          i = wt(e.theme, r) || {};
        return mt(e, a, (e) => {
          let r = xt(i, o, e);
          return (
            e === r &&
              "string" === typeof e &&
              (r = xt(i, o, `${t}${"default" === e ? "" : bt(e)}`, e)),
            !1 === n ? r : { [n]: r }
          );
        });
      };
    return (a.propTypes = {}), (a.filterProps = [t]), a;
  };
  const kt = function (e, t) {
    return t ? ut(e, t, { clone: !1 }) : e;
  };
  const Ct = { m: "margin", p: "padding" },
    Et = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    $t = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    Pt = (function (e) {
      const t = {};
      return (n) => (void 0 === t[n] && (t[n] = e(n)), t[n]);
    })((e) => {
      if (e.length > 2) {
        if (!$t[e]) return [e];
        e = $t[e];
      }
      const [t, n] = e.split(""),
        r = Ct[t],
        o = Et[n] || "";
      return Array.isArray(o) ? o.map((e) => r + e) : [r + o];
    }),
    Tt = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
    ],
    Rt = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
    ],
    Mt = [...Tt, ...Rt];
  function Nt(e, t, n, r) {
    const o = wt(e, t, !0) ?? n;
    return "number" === typeof o || "string" === typeof o
      ? (e) =>
          "string" === typeof e
            ? e
            : "string" === typeof o
            ? `calc(${e} * ${o})`
            : o * e
      : Array.isArray(o)
      ? (e) => {
          if ("string" === typeof e) return e;
          const t = Math.abs(e);
          const n = o[t];
          return e >= 0 ? n : "number" === typeof n ? -n : `-${n}`;
        }
      : "function" === typeof o
      ? o
      : () => {};
  }
  function _t(e) {
    return Nt(e, "spacing", 8);
  }
  function zt(e, t) {
    return "string" === typeof t || null == t ? t : e(t);
  }
  function Ot(e, t, n, r) {
    if (!t.includes(n)) return null;
    const o = (function (e, t) {
      return (n) => e.reduce((e, r) => ((e[r] = zt(t, n)), e), {});
    })(Pt(n), r);
    return mt(e, e[n], o);
  }
  function It(e, t) {
    const n = _t(e.theme);
    return Object.keys(e)
      .map((r) => Ot(e, t, r, n))
      .reduce(kt, {});
  }
  function At(e) {
    return It(e, Tt);
  }
  function Bt(e) {
    return It(e, Rt);
  }
  function Lt(e) {
    return It(e, Mt);
  }
  (At.propTypes = {}),
    (At.filterProps = Tt),
    (Bt.propTypes = {}),
    (Bt.filterProps = Rt),
    (Lt.propTypes = {}),
    (Lt.filterProps = Mt);
  function jt() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : _t({ spacing: e });
    if (e.mui) return e;
    const n = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      return (0 === n.length ? [1] : n)
        .map((e) => {
          const n = t(e);
          return "number" === typeof n ? `${n}px` : n;
        })
        .join(" ");
    };
    return (n.mui = !0), n;
  }
  const Ft = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    const r = t.reduce(
        (e, t) => (
          t.filterProps.forEach((n) => {
            e[n] = t;
          }),
          e
        ),
        {}
      ),
      o = (e) =>
        Object.keys(e).reduce((t, n) => (r[n] ? kt(t, r[n](e)) : t), {});
    return (
      (o.propTypes = {}),
      (o.filterProps = t.reduce((e, t) => e.concat(t.filterProps), [])),
      o
    );
  };
  function Dt(e) {
    return "number" !== typeof e ? e : `${e}px solid`;
  }
  function Wt(e, t) {
    return St({ prop: e, themeKey: "borders", transform: t });
  }
  const Vt = Wt("border", Dt),
    Ht = Wt("borderTop", Dt),
    Ut = Wt("borderRight", Dt),
    Kt = Wt("borderBottom", Dt),
    Gt = Wt("borderLeft", Dt),
    Qt = Wt("borderColor"),
    qt = Wt("borderTopColor"),
    Xt = Wt("borderRightColor"),
    Yt = Wt("borderBottomColor"),
    Zt = Wt("borderLeftColor"),
    Jt = Wt("outline", Dt),
    en = Wt("outlineColor"),
    tn = (e) => {
      if (void 0 !== e.borderRadius && null !== e.borderRadius) {
        const t = Nt(e.theme, "shape.borderRadius", 4),
          n = (e) => ({ borderRadius: zt(t, e) });
        return mt(e, e.borderRadius, n);
      }
      return null;
    };
  (tn.propTypes = {}), (tn.filterProps = ["borderRadius"]);
  Ft(Vt, Ht, Ut, Kt, Gt, Qt, qt, Xt, Yt, Zt, tn, Jt, en);
  const nn = (e) => {
    if (void 0 !== e.gap && null !== e.gap) {
      const t = Nt(e.theme, "spacing", 8),
        n = (e) => ({ gap: zt(t, e) });
      return mt(e, e.gap, n);
    }
    return null;
  };
  (nn.propTypes = {}), (nn.filterProps = ["gap"]);
  const rn = (e) => {
    if (void 0 !== e.columnGap && null !== e.columnGap) {
      const t = Nt(e.theme, "spacing", 8),
        n = (e) => ({ columnGap: zt(t, e) });
      return mt(e, e.columnGap, n);
    }
    return null;
  };
  (rn.propTypes = {}), (rn.filterProps = ["columnGap"]);
  const on = (e) => {
    if (void 0 !== e.rowGap && null !== e.rowGap) {
      const t = Nt(e.theme, "spacing", 8),
        n = (e) => ({ rowGap: zt(t, e) });
      return mt(e, e.rowGap, n);
    }
    return null;
  };
  (on.propTypes = {}), (on.filterProps = ["rowGap"]);
  Ft(
    nn,
    rn,
    on,
    St({ prop: "gridColumn" }),
    St({ prop: "gridRow" }),
    St({ prop: "gridAutoFlow" }),
    St({ prop: "gridAutoColumns" }),
    St({ prop: "gridAutoRows" }),
    St({ prop: "gridTemplateColumns" }),
    St({ prop: "gridTemplateRows" }),
    St({ prop: "gridTemplateAreas" }),
    St({ prop: "gridArea" })
  );
  function an(e, t) {
    return "grey" === t ? t : e;
  }
  Ft(
    St({ prop: "color", themeKey: "palette", transform: an }),
    St({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: an,
    }),
    St({ prop: "backgroundColor", themeKey: "palette", transform: an })
  );
  function ln(e) {
    return e <= 1 && 0 !== e ? 100 * e + "%" : e;
  }
  const sn = St({ prop: "width", transform: ln }),
    un = (e) => {
      if (void 0 !== e.maxWidth && null !== e.maxWidth) {
        const t = (t) => {
          const n = e.theme?.breakpoints?.values?.[t] || ft[t];
          return n
            ? "px" !== e.theme?.breakpoints?.unit
              ? { maxWidth: `${n}${e.theme.breakpoints.unit}` }
              : { maxWidth: n }
            : { maxWidth: ln(t) };
        };
        return mt(e, e.maxWidth, t);
      }
      return null;
    };
  un.filterProps = ["maxWidth"];
  const cn = St({ prop: "minWidth", transform: ln }),
    dn = St({ prop: "height", transform: ln }),
    fn = St({ prop: "maxHeight", transform: ln }),
    pn = St({ prop: "minHeight", transform: ln }),
    hn =
      (St({ prop: "size", cssProperty: "width", transform: ln }),
      St({ prop: "size", cssProperty: "height", transform: ln }),
      Ft(sn, un, cn, dn, fn, pn, St({ prop: "boxSizing" })),
      {
        border: { themeKey: "borders", transform: Dt },
        borderTop: { themeKey: "borders", transform: Dt },
        borderRight: { themeKey: "borders", transform: Dt },
        borderBottom: { themeKey: "borders", transform: Dt },
        borderLeft: { themeKey: "borders", transform: Dt },
        borderColor: { themeKey: "palette" },
        borderTopColor: { themeKey: "palette" },
        borderRightColor: { themeKey: "palette" },
        borderBottomColor: { themeKey: "palette" },
        borderLeftColor: { themeKey: "palette" },
        outline: { themeKey: "borders", transform: Dt },
        outlineColor: { themeKey: "palette" },
        borderRadius: { themeKey: "shape.borderRadius", style: tn },
        color: { themeKey: "palette", transform: an },
        bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: an,
        },
        backgroundColor: { themeKey: "palette", transform: an },
        p: { style: Bt },
        pt: { style: Bt },
        pr: { style: Bt },
        pb: { style: Bt },
        pl: { style: Bt },
        px: { style: Bt },
        py: { style: Bt },
        padding: { style: Bt },
        paddingTop: { style: Bt },
        paddingRight: { style: Bt },
        paddingBottom: { style: Bt },
        paddingLeft: { style: Bt },
        paddingX: { style: Bt },
        paddingY: { style: Bt },
        paddingInline: { style: Bt },
        paddingInlineStart: { style: Bt },
        paddingInlineEnd: { style: Bt },
        paddingBlock: { style: Bt },
        paddingBlockStart: { style: Bt },
        paddingBlockEnd: { style: Bt },
        m: { style: At },
        mt: { style: At },
        mr: { style: At },
        mb: { style: At },
        ml: { style: At },
        mx: { style: At },
        my: { style: At },
        margin: { style: At },
        marginTop: { style: At },
        marginRight: { style: At },
        marginBottom: { style: At },
        marginLeft: { style: At },
        marginX: { style: At },
        marginY: { style: At },
        marginInline: { style: At },
        marginInlineStart: { style: At },
        marginInlineEnd: { style: At },
        marginBlock: { style: At },
        marginBlockStart: { style: At },
        marginBlockEnd: { style: At },
        displayPrint: {
          cssProperty: !1,
          transform: (e) => ({ "@media print": { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: nn },
        rowGap: { style: on },
        columnGap: { style: rn },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: "zIndex" },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: "shadows" },
        width: { transform: ln },
        maxWidth: { style: un },
        minWidth: { transform: ln },
        height: { transform: ln },
        maxHeight: { transform: ln },
        minHeight: { transform: ln },
        boxSizing: {},
        font: { themeKey: "font" },
        fontFamily: { themeKey: "typography" },
        fontSize: { themeKey: "typography" },
        fontStyle: { themeKey: "typography" },
        fontWeight: { themeKey: "typography" },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: "typography" },
      });
  const mn = (function () {
    function e(e, t, n, r) {
      const o = { [e]: t, theme: n },
        a = r[e];
      if (!a) return { [e]: t };
      const { cssProperty: i = e, themeKey: l, transform: s, style: u } = a;
      if (null == t) return null;
      if ("typography" === l && "inherit" === t) return { [e]: t };
      const c = wt(n, l) || {};
      if (u) return u(o);
      return mt(o, t, (t) => {
        let n = xt(c, s, t);
        return (
          t === n &&
            "string" === typeof t &&
            (n = xt(c, s, `${e}${"default" === t ? "" : bt(t)}`, t)),
          !1 === i ? n : { [i]: n }
        );
      });
    }
    return function t(n) {
      const { sx: r, theme: o = {} } = n || {};
      if (!r) return null;
      const a = o.unstable_sxConfig ?? hn;
      function i(n) {
        let r = n;
        if ("function" === typeof n) r = n(o);
        else if ("object" !== typeof n) return n;
        if (!r) return null;
        const i = gt(o.breakpoints),
          l = Object.keys(i);
        let s = i;
        return (
          Object.keys(r).forEach((n) => {
            const i = (function (e, t) {
              return "function" === typeof e ? e(t) : e;
            })(r[n], o);
            if (null !== i && void 0 !== i)
              if ("object" === typeof i)
                if (a[n]) s = kt(s, e(n, i, o, a));
                else {
                  const e = mt({ theme: o }, i, (e) => ({ [n]: e }));
                  !(function () {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    const r = t.reduce((e, t) => e.concat(Object.keys(t)), []),
                      o = new Set(r);
                    return t.every((e) => o.size === Object.keys(e).length);
                  })(e, i)
                    ? (s = kt(s, e))
                    : (s[n] = t({ sx: i, theme: o }));
                }
              else s = kt(s, e(n, i, o, a));
          }),
          (function (e, t) {
            if (!e.containerQueries) return t;
            const n = Object.keys(t)
              .filter((e) => e.startsWith("@container"))
              .sort((e, t) => {
                const n = /min-width:\s*([0-9.]+)/;
                return +(e.match(n)?.[1] || 0) - +(t.match(n)?.[1] || 0);
              });
            return n.length
              ? n.reduce(
                  (e, n) => {
                    const r = t[n];
                    return delete e[n], (e[n] = r), e;
                  },
                  { ...t }
                )
              : t;
          })(o, yt(l, s))
        );
      }
      return Array.isArray(r) ? r.map(i) : i(r);
    };
  })();
  mn.filterProps = ["sx"];
  const gn = mn;
  function yn(e, t) {
    const n = this;
    if (n.vars) {
      if (
        !n.colorSchemes?.[e] ||
        "function" !== typeof n.getColorSchemeSelector
      )
        return {};
      let r = n.getColorSchemeSelector(e);
      return "&" === r
        ? t
        : ((r.includes("data-") || r.includes(".")) &&
            (r = `*:where(${r.replace(/\s*&$/, "")}) &`),
          { [r]: t });
    }
    return n.palette.mode === e ? t : {};
  }
  const vn = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      breakpoints: t = {},
      palette: n = {},
      spacing: r,
      shape: o = {},
      ...a
    } = e;
    let i = ut(
      {
        breakpoints: ct(t),
        direction: "ltr",
        components: {},
        palette: { mode: "light", ...n },
        spacing: jt(r),
        shape: { ...dt, ...o },
      },
      a
    );
    (i = (function (e) {
      const t = (e, t) =>
        e.replace("@media", t ? `@container ${t}` : "@container");
      function n(n, r) {
        (n.up = function () {
          return t(e.breakpoints.up(...arguments), r);
        }),
          (n.down = function () {
            return t(e.breakpoints.down(...arguments), r);
          }),
          (n.between = function () {
            return t(e.breakpoints.between(...arguments), r);
          }),
          (n.only = function () {
            return t(e.breakpoints.only(...arguments), r);
          }),
          (n.not = function () {
            const n = t(e.breakpoints.not(...arguments), r);
            return n.includes("not all and")
              ? n
                  .replace("not all and ", "")
                  .replace("min-width:", "width<")
                  .replace("max-width:", "width>")
                  .replace("and", "or")
              : n;
          });
      }
      const r = {},
        o = (e) => (n(r, e), r);
      return n(o), { ...e, containerQueries: o };
    })(i)),
      (i.applyStyles = yn);
    for (
      var l = arguments.length, s = new Array(l > 1 ? l - 1 : 0), u = 1;
      u < l;
      u++
    )
      s[u - 1] = arguments[u];
    return (
      (i = s.reduce((e, t) => ut(e, t), i)),
      (i.unstable_sxConfig = { ...hn, ...a?.unstable_sxConfig }),
      (i.unstable_sx = function (e) {
        return gn({ sx: e, theme: this });
      }),
      i
    );
  };
  function bn(e) {
    const { variants: t, ...n } = e,
      r = { variants: t, style: at(n), isProcessed: !0 };
    return (
      r.style === n ||
        (t &&
          t.forEach((e) => {
            "function" !== typeof e.style && (e.style = at(e.style));
          })),
      r
    );
  }
  const wn = vn();
  function xn(e) {
    return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
  }
  function Sn(e) {
    return e ? (t, n) => n[e] : null;
  }
  function kn(e, t) {
    const n = "function" === typeof t ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((t) => kn(e, t));
    if (Array.isArray(n?.variants)) {
      let t;
      if (n.isProcessed) t = n.style;
      else {
        const { variants: e, ...r } = n;
        t = r;
      }
      return Cn(e, n.variants, [t]);
    }
    return n?.isProcessed ? n.style : n;
  }
  function Cn(e, t) {
    let n,
      r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    e: for (let o = 0; o < t.length; o += 1) {
      const a = t[o];
      if ("function" === typeof a.props) {
        if (
          ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
          !a.props(n))
        )
          continue;
      } else
        for (const t in a.props)
          if (e[t] !== a.props[t] && e.ownerState?.[t] !== a.props[t])
            continue e;
      "function" === typeof a.style
        ? ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
          r.push(a.style(n)))
        : r.push(a.style);
    }
    return r;
  }
  function En(e, t) {}
  function $n(e) {
    return e ? e.charAt(0).toLowerCase() + e.slice(1) : e;
  }
  const Pn = function (e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : Number.MIN_SAFE_INTEGER,
      n =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : Number.MAX_SAFE_INTEGER;
    return Math.max(t, Math.min(e, n));
  };
  function Tn(e) {
    return Pn(
      e,
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
    );
  }
  function Rn(e) {
    if (e.type) return e;
    if ("#" === e.charAt(0))
      return Rn(
        (function (e) {
          e = e.slice(1);
          const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
          let n = e.match(t);
          return (
            n && 1 === n[0].length && (n = n.map((e) => e + e)),
            n
              ? `rgb${4 === n.length ? "a" : ""}(${n
                  .map((e, t) =>
                    t < 3
                      ? parseInt(e, 16)
                      : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                  )
                  .join(", ")})`
              : ""
          );
        })(e)
      );
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
      throw new Error(vt(9, e));
    let r,
      o = e.substring(t + 1, e.length - 1);
    if ("color" === n) {
      if (
        ((o = o.split(" ")),
        (r = o.shift()),
        4 === o.length && "/" === o[3].charAt(0) && (o[3] = o[3].slice(1)),
        !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
          r
        ))
      )
        throw new Error(vt(10, r));
    } else o = o.split(",");
    return (
      (o = o.map((e) => parseFloat(e))), { type: n, values: o, colorSpace: r }
    );
  }
  const Mn = (e, t) => {
    try {
      return ((e) => {
        const t = Rn(e);
        return t.values
          .slice(0, 3)
          .map((e, n) => (t.type.includes("hsl") && 0 !== n ? `${e}%` : e))
          .join(" ");
      })(e);
    } catch (n) {
      return e;
    }
  };
  function Nn(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
      t.includes("rgb")
        ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
        : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      (r = t.includes("color") ? `${n} ${r.join(" ")}` : `${r.join(", ")}`),
      `${t}(${r})`
    );
  }
  function _n(e) {
    e = Rn(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      a = r * Math.min(o, 1 - o),
      i = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (e + n / 30) % 12;
        return o - a * Math.max(Math.min(t - 3, 9 - t, 1), -1);
      };
    let l = "rgb";
    const s = [
      Math.round(255 * i(0)),
      Math.round(255 * i(8)),
      Math.round(255 * i(4)),
    ];
    return (
      "hsla" === e.type && ((l += "a"), s.push(t[3])),
      Nn({ type: l, values: s })
    );
  }
  function zn(e) {
    let t =
      "hsl" === (e = Rn(e)).type || "hsla" === e.type
        ? Rn(_n(e)).values
        : e.values;
    return (
      (t = t.map(
        (t) => (
          "color" !== e.type && (t /= 255),
          t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
        )
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function On(e, t) {
    return (
      (e = Rn(e)),
      (t = Tn(t)),
      ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
      "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      Nn(e)
    );
  }
  function In(e, t, n) {
    try {
      return On(e, t);
    } catch (r) {
      return e;
    }
  }
  function An(e, t) {
    if (((e = Rn(e)), (t = Tn(t)), e.type.includes("hsl")))
      e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return Nn(e);
  }
  function Bn(e, t, n) {
    try {
      return An(e, t);
    } catch (r) {
      return e;
    }
  }
  function Ln(e, t) {
    if (((e = Rn(e)), (t = Tn(t)), e.type.includes("hsl")))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return Nn(e);
  }
  function jn(e, t, n) {
    try {
      return Ln(e, t);
    } catch (r) {
      return e;
    }
  }
  function Fn(e, t, n) {
    try {
      return (function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.15;
        return zn(e) > 0.5 ? An(e, t) : Ln(e, t);
      })(e, t);
    } catch (r) {
      return e;
    }
  }
  const Dn = { black: "#000", white: "#fff" },
    Wn = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    Vn = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    },
    Hn = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    Un = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    },
    Kn = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    },
    Gn = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    },
    Qn = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    };
  function qn() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: Dn.white, default: Dn.white },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    };
  }
  const Xn = qn();
  function Yn() {
    return {
      text: {
        primary: Dn.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: Dn.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
  }
  const Zn = Yn();
  function Jn(e, t, n, r) {
    const o = r.light || r,
      a = r.dark || 1.5 * r;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : "light" === t
        ? (e.light = Ln(e.main, o))
        : "dark" === t && (e.dark = An(e.main, a)));
  }
  function er(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
        ...o
      } = e,
      a =
        e.primary ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Kn[200], light: Kn[50], dark: Kn[400] }
            : { main: Kn[700], light: Kn[400], dark: Kn[800] };
        })(t),
      i =
        e.secondary ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Vn[200], light: Vn[50], dark: Vn[400] }
            : { main: Vn[500], light: Vn[300], dark: Vn[700] };
        })(t),
      l =
        e.error ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Hn[500], light: Hn[300], dark: Hn[700] }
            : { main: Hn[700], light: Hn[400], dark: Hn[800] };
        })(t),
      s =
        e.info ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Gn[400], light: Gn[300], dark: Gn[700] }
            : { main: Gn[700], light: Gn[500], dark: Gn[900] };
        })(t),
      u =
        e.success ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Qn[400], light: Qn[300], dark: Qn[700] }
            : { main: Qn[800], light: Qn[500], dark: Qn[900] };
        })(t),
      c =
        e.warning ||
        (function () {
          return "dark" ===
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "light")
            ? { main: Un[400], light: Un[300], dark: Un[700] }
            : { main: "#ed6c02", light: Un[500], dark: Un[900] };
        })(t);
    function d(e) {
      const t =
        (function (e, t) {
          const n = zn(e),
            r = zn(t);
          return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
        })(e, Zn.text.primary) >= n
          ? Zn.text.primary
          : Xn.text.primary;
      return t;
    }
    const f = (e) => {
      let {
        color: t,
        name: n,
        mainShade: o = 500,
        lightShade: a = 300,
        darkShade: i = 700,
      } = e;
      if (
        ((t = { ...t }),
        !t.main && t[o] && (t.main = t[o]),
        !t.hasOwnProperty("main"))
      )
        throw new Error(vt(11, n ? ` (${n})` : "", o));
      if ("string" !== typeof t.main)
        throw new Error(vt(12, n ? ` (${n})` : "", JSON.stringify(t.main)));
      return (
        Jn(t, "light", a, r),
        Jn(t, "dark", i, r),
        t.contrastText || (t.contrastText = d(t.main)),
        t
      );
    };
    let p;
    "light" === t ? (p = qn()) : "dark" === t && (p = Yn());
    return ut(
      {
        common: { ...Dn },
        mode: t,
        primary: f({ color: a, name: "primary" }),
        secondary: f({
          color: i,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: f({ color: l, name: "error" }),
        warning: f({ color: c, name: "warning" }),
        info: f({ color: s, name: "info" }),
        success: f({ color: u, name: "success" }),
        grey: Wn,
        contrastThreshold: n,
        getContrastText: d,
        augmentColor: f,
        tonalOffset: r,
        ...p,
      },
      o
    );
  }
  function tr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    function t() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      if (!r.length) return "";
      const a = r[0];
      return "string" !== typeof a ||
        a.match(
          /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
        )
        ? `, ${a}`
        : `, var(--${e ? `${e}-` : ""}${a}${t(...r.slice(1))})`;
    }
    return function (n) {
      for (
        var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1;
        a < r;
        a++
      )
        o[a - 1] = arguments[a];
      return `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
    };
  }
  function nr(e) {
    const t = {};
    return (
      Object.entries(e).forEach((e) => {
        const [n, r] = e;
        "object" === typeof r &&
          (t[n] = `${r.fontStyle ? `${r.fontStyle} ` : ""}${
            r.fontVariant ? `${r.fontVariant} ` : ""
          }${r.fontWeight ? `${r.fontWeight} ` : ""}${
            r.fontStretch ? `${r.fontStretch} ` : ""
          }${r.fontSize || ""}${r.lineHeight ? `/${r.lineHeight} ` : ""}${
            r.fontFamily || ""
          }`);
      }),
      t
    );
  }
  const rr = function (e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
      o = e;
    t.forEach((e, a) => {
      a === t.length - 1
        ? Array.isArray(o)
          ? (o[Number(e)] = n)
          : o && "object" === typeof o && (o[e] = n)
        : o &&
          "object" === typeof o &&
          (o[e] || (o[e] = r.includes(e) ? [] : {}), (o = o[e]));
    });
  };
  function or(e, t) {
    const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
      o = {},
      a = {},
      i = {};
    var l, s;
    return (
      (l = (e, t, l) => {
        if (
          ("string" === typeof t || "number" === typeof t) &&
          (!r || !r(e, t))
        ) {
          const r = `--${n ? `${n}-` : ""}${e.join("-")}`,
            s = ((e, t) =>
              "number" === typeof t
                ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((t) =>
                    e.includes(t)
                  ) || e[e.length - 1].toLowerCase().includes("opacity")
                  ? t
                  : `${t}px`
                : t)(e, t);
          Object.assign(o, { [r]: s }),
            rr(a, e, `var(${r})`, l),
            rr(i, e, `var(${r}, ${s})`, l);
        }
      }),
      (s = (e) => "vars" === e[0]),
      (function e(t) {
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        Object.entries(t).forEach((t) => {
          let [o, a] = t;
          (!s || (s && !s([...n, o]))) &&
            void 0 !== a &&
            null !== a &&
            ("object" === typeof a && Object.keys(a).length > 0
              ? e(a, [...n, o], Array.isArray(a) ? [...r, o] : r)
              : l([...n, o], a, r));
        });
      })(e),
      { css: o, vars: a, varsWithDefaults: i }
    );
  }
  const ar = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    const {
        getSelector: n = g,
        disableCssColorScheme: r,
        colorSchemeSelector: o,
      } = t,
      {
        colorSchemes: a = {},
        components: i,
        defaultColorScheme: l = "light",
        ...s
      } = e,
      { vars: u, css: c, varsWithDefaults: d } = or(s, t);
    let f = d;
    const p = {},
      { [l]: h, ...m } = a;
    if (
      (Object.entries(m || {}).forEach((e) => {
        let [n, r] = e;
        const { vars: o, css: a, varsWithDefaults: i } = or(r, t);
        (f = ut(f, i)), (p[n] = { css: a, vars: o });
      }),
      h)
    ) {
      const { css: e, vars: n, varsWithDefaults: r } = or(h, t);
      (f = ut(f, r)), (p[l] = { css: e, vars: n });
    }
    function g(t, n) {
      let r = o;
      if (
        ("class" === o && (r = ".%s"),
        "data" === o && (r = "[data-%s]"),
        o?.startsWith("data-") && !o.includes("%s") && (r = `[${o}="%s"]`),
        t)
      ) {
        if ("media" === r) {
          if (e.defaultColorScheme === t) return ":root";
          const r = a[t]?.palette?.mode || t;
          return { [`@media (prefers-color-scheme: ${r})`]: { ":root": n } };
        }
        if (r)
          return e.defaultColorScheme === t
            ? `:root, ${r.replace("%s", String(t))}`
            : r.replace("%s", String(t));
      }
      return ":root";
    }
    return {
      vars: f,
      generateThemeVars: () => {
        let e = { ...u };
        return (
          Object.entries(p).forEach((t) => {
            let [, { vars: n }] = t;
            e = ut(e, n);
          }),
          e
        );
      },
      generateStyleSheets: () => {
        const t = [],
          o = e.defaultColorScheme || "light";
        function i(e, n) {
          Object.keys(n).length &&
            t.push("string" === typeof e ? { [e]: { ...n } } : e);
        }
        i(n(void 0, { ...c }), c);
        const { [o]: l, ...s } = p;
        if (l) {
          const { css: e } = l,
            t = a[o]?.palette?.mode,
            s = !r && t ? { colorScheme: t, ...e } : { ...e };
          i(n(o, { ...s }), s);
        }
        return (
          Object.entries(s).forEach((e) => {
            let [t, { css: o }] = e;
            const l = a[t]?.palette?.mode,
              s = !r && l ? { colorScheme: l, ...o } : { ...o };
            i(n(t, { ...s }), s);
          }),
          t
        );
      },
    };
  };
  function ir(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
      ...t,
    };
  }
  const lr = { textTransform: "uppercase" },
    sr = '"Roboto", "Helvetica", "Arial", sans-serif';
  function ur(e, t) {
    const {
      fontFamily: n = sr,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: a = 400,
      fontWeightMedium: i = 500,
      fontWeightBold: l = 700,
      htmlFontSize: s = 16,
      allVariants: u,
      pxToRem: c,
      ...d
    } = "function" === typeof t ? t(e) : t;
    const f = r / 14,
      p = c || ((e) => (e / s) * f + "rem"),
      h = (e, t, r, o, a) => {
        return {
          fontFamily: n,
          fontWeight: e,
          fontSize: p(t),
          lineHeight: r,
          ...(n === sr
            ? { letterSpacing: ((i = o / t), Math.round(1e5 * i) / 1e5) + "em" }
            : {}),
          ...a,
          ...u,
        };
        var i;
      },
      m = {
        h1: h(o, 96, 1.167, -1.5),
        h2: h(o, 60, 1.2, -0.5),
        h3: h(a, 48, 1.167, 0),
        h4: h(a, 34, 1.235, 0.25),
        h5: h(a, 24, 1.334, 0),
        h6: h(i, 20, 1.6, 0.15),
        subtitle1: h(a, 16, 1.75, 0.15),
        subtitle2: h(i, 14, 1.57, 0.1),
        body1: h(a, 16, 1.5, 0.15),
        body2: h(a, 14, 1.43, 0.15),
        button: h(i, 14, 1.75, 0.4, lr),
        caption: h(a, 12, 1.66, 0.4),
        overline: h(a, 12, 2.66, 1, lr),
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
        },
      };
    return ut(
      {
        htmlFontSize: s,
        pxToRem: p,
        fontFamily: n,
        fontSize: r,
        fontWeightLight: o,
        fontWeightRegular: a,
        fontWeightMedium: i,
        fontWeightBold: l,
        ...m,
      },
      d,
      { clone: !1 }
    );
  }
  function cr() {
    return [
      `${arguments.length <= 0 ? void 0 : arguments[0]}px ${
        arguments.length <= 1 ? void 0 : arguments[1]
      }px ${arguments.length <= 2 ? void 0 : arguments[2]}px ${
        arguments.length <= 3 ? void 0 : arguments[3]
      }px rgba(0,0,0,0.2)`,
      `${arguments.length <= 4 ? void 0 : arguments[4]}px ${
        arguments.length <= 5 ? void 0 : arguments[5]
      }px ${arguments.length <= 6 ? void 0 : arguments[6]}px ${
        arguments.length <= 7 ? void 0 : arguments[7]
      }px rgba(0,0,0,0.14)`,
      `${arguments.length <= 8 ? void 0 : arguments[8]}px ${
        arguments.length <= 9 ? void 0 : arguments[9]
      }px ${arguments.length <= 10 ? void 0 : arguments[10]}px ${
        arguments.length <= 11 ? void 0 : arguments[11]
      }px rgba(0,0,0,0.12)`,
    ].join(",");
  }
  const dr = [
      "none",
      cr(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      cr(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      cr(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      cr(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      cr(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      cr(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      cr(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      cr(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      cr(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      cr(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      cr(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      cr(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      cr(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      cr(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      cr(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      cr(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      cr(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      cr(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      cr(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      cr(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      cr(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      cr(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      cr(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      cr(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    fr = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    pr = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function hr(e) {
    return `${Math.round(e)}ms`;
  }
  function mr(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round(10 * (4 + 15 * t ** 0.25 + t / 5)), 3e3);
  }
  function gr(e) {
    const t = { ...fr, ...e.easing },
      n = { ...pr, ...e.duration };
    return {
      getAutoHeightDuration: mr,
      create: function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : ["all"],
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          duration: o = n.standard,
          easing: a = t.easeInOut,
          delay: i = 0,
          ...l
        } = r;
        return (Array.isArray(e) ? e : [e])
          .map(
            (e) =>
              `${e} ${"string" === typeof o ? o : hr(o)} ${a} ${
                "string" === typeof i ? i : hr(i)
              }`
          )
          .join(",");
      },
      ...e,
      easing: t,
      duration: n,
    };
  }
  const yr = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };
  function vr() {
    const e = {
      ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
    };
    return (
      (function e(t) {
        const n = Object.entries(t);
        for (let o = 0; o < n.length; o++) {
          const [a, i] = n[o];
          (!lt((r = i)) &&
            "undefined" !== typeof r &&
            "string" !== typeof r &&
            "boolean" !== typeof r &&
            "number" !== typeof r &&
            !Array.isArray(r)) ||
          a.startsWith("unstable_")
            ? delete t[a]
            : lt(i) && ((t[a] = { ...i }), e(t[a]));
        }
        var r;
      })(e),
      `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';\n\nconst theme = ${JSON.stringify(
        e,
        null,
        2
      )};\n\ntheme.breakpoints = createBreakpoints(theme.breakpoints || {});\ntheme.transitions = createTransitions(theme.transitions || {});\n\nexport default theme;`
    );
  }
  function br() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
      breakpoints: t,
      mixins: n = {},
      spacing: r,
      palette: o = {},
      transitions: a = {},
      typography: i = {},
      shape: l,
      ...s
    } = e;
    if (e.vars) throw new Error(vt(20));
    const u = er(o),
      c = vn(e);
    let d = ut(c, {
      mixins: ir(c.breakpoints, n),
      palette: u,
      shadows: dr.slice(),
      typography: ur(u, i),
      transitions: gr(a),
      zIndex: { ...yr },
    });
    d = ut(d, s);
    for (
      var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), h = 1;
      h < f;
      h++
    )
      p[h - 1] = arguments[h];
    return (
      (d = p.reduce((e, t) => ut(e, t), d)),
      (d.unstable_sxConfig = { ...hn, ...s?.unstable_sxConfig }),
      (d.unstable_sx = function (e) {
        return gn({ sx: e, theme: this });
      }),
      (d.toRuntimeSource = vr),
      d
    );
  }
  const wr = br;
  function xr(e) {
    let t;
    return (
      (t = e < 1 ? 5.11916 * e ** 2 : 4.5 * Math.log(e + 1) + 2),
      Math.round(10 * t) / 1e3
    );
  }
  const Sr = [...Array(25)].map((e, t) => {
    if (0 === t) return "none";
    const n = xr(t);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
  function kr(e) {
    return {
      inputPlaceholder: "dark" === e ? 0.5 : 0.42,
      inputUnderline: "dark" === e ? 0.7 : 0.42,
      switchTrackDisabled: "dark" === e ? 0.2 : 0.12,
      switchTrack: "dark" === e ? 0.3 : 0.38,
    };
  }
  function Cr(e) {
    return "dark" === e ? Sr : [];
  }
  function Er(e) {
    return (
      !!e[0].match(
        /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
      ) ||
      !!e[0].match(/sxConfig$/) ||
      ("palette" === e[0] &&
        !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
    );
  }
  const $r = (e) => [
      ...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`),
      `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
      `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
    ],
    Pr = (e) => (t, n) => {
      const r = e.rootSelector || ":root",
        o = e.colorSchemeSelector;
      let a = o;
      if (
        ("class" === o && (a = ".%s"),
        "data" === o && (a = "[data-%s]"),
        o?.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`),
        e.defaultColorScheme === t)
      ) {
        if ("dark" === t) {
          const o = {};
          return (
            $r(e.cssVarPrefix).forEach((e) => {
              (o[e] = n[e]), delete n[e];
            }),
            "media" === a
              ? { [r]: n, "@media (prefers-color-scheme: dark)": { [r]: o } }
              : a
              ? { [a.replace("%s", t)]: o, [`${r}, ${a.replace("%s", t)}`]: n }
              : { [r]: { ...n, ...o } }
          );
        }
        if (a && "media" !== a) return `${r}, ${a.replace("%s", String(t))}`;
      } else if (t) {
        if ("media" === a)
          return {
            [`@media (prefers-color-scheme: ${String(t)})`]: { [r]: n },
          };
        if (a) return a.replace("%s", String(t));
      }
      return r;
    };
  function Tr(e, t, n) {
    !e[t] && n && (e[t] = n);
  }
  function Rr(e) {
    return "string" === typeof e && e.startsWith("hsl") ? _n(e) : e;
  }
  function Mr(e, t) {
    `${t}Channel` in e || (e[`${t}Channel`] = Mn(Rr(e[t])));
  }
  const Nr = (e) => {
    try {
      return e();
    } catch (t) {}
  };
  function _r(e, t, n, r) {
    if (!t) return;
    t = !0 === t ? {} : t;
    const o = "dark" === r ? "dark" : "light";
    if (!n)
      return void (e[r] = (function (e) {
        const {
            palette: t = { mode: "light" },
            opacity: n,
            overlays: r,
            ...o
          } = e,
          a = er(t);
        return {
          palette: a,
          opacity: { ...kr(a.mode), ...n },
          overlays: r || Cr(a.mode),
          ...o,
        };
      })({ ...t, palette: { mode: o, ...t?.palette } }));
    const { palette: a, ...i } = wr({
      ...n,
      palette: { mode: o, ...t?.palette },
    });
    return (
      (e[r] = {
        ...t,
        palette: a,
        opacity: { ...kr(o), ...t?.opacity },
        overlays: t?.overlays || Cr(o),
      }),
      i
    );
  }
  function zr() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
        colorSchemes: t = { light: !0 },
        defaultColorScheme: n,
        disableCssColorScheme: r = !1,
        cssVarPrefix: o = "mui",
        shouldSkipGeneratingVar: a = Er,
        colorSchemeSelector: i = t.light && t.dark ? "media" : void 0,
        rootSelector: l = ":root",
        ...s
      } = e,
      u = Object.keys(t)[0],
      c = n || (t.light && "light" !== u ? "light" : u),
      d = (function () {
        return tr(
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mui"
        );
      })(o),
      { [c]: f, light: p, dark: h, ...m } = t,
      g = { ...m };
    let y = f;
    if (
      ((("dark" === c && !("dark" in t)) ||
        ("light" === c && !("light" in t))) &&
        (y = !0),
      !y)
    )
      throw new Error(vt(21, c));
    const v = _r(g, y, s, c);
    p && !g.light && _r(g, p, void 0, "light"),
      h && !g.dark && _r(g, h, void 0, "dark");
    let b = {
      defaultColorScheme: c,
      ...v,
      cssVarPrefix: o,
      colorSchemeSelector: i,
      rootSelector: l,
      getCssVar: d,
      colorSchemes: g,
      font: { ...nr(v.typography), ...v.font },
      spacing:
        ((w = s.spacing),
        "number" === typeof w
          ? `${w}px`
          : "string" === typeof w || "function" === typeof w || Array.isArray(w)
          ? w
          : "8px"),
    };
    var w;
    Object.keys(b.colorSchemes).forEach((e) => {
      const t = b.colorSchemes[e].palette,
        n = (e) => {
          const n = e.split("-"),
            r = n[1],
            o = n[2];
          return d(e, t[r][o]);
        };
      var r;
      if (
        ("light" === t.mode &&
          (Tr(t.common, "background", "#fff"),
          Tr(t.common, "onBackground", "#000")),
        "dark" === t.mode &&
          (Tr(t.common, "background", "#000"),
          Tr(t.common, "onBackground", "#fff")),
        (r = t),
        [
          "Alert",
          "AppBar",
          "Avatar",
          "Button",
          "Chip",
          "FilledInput",
          "LinearProgress",
          "Skeleton",
          "Slider",
          "SnackbarContent",
          "SpeedDialAction",
          "StepConnector",
          "StepContent",
          "Switch",
          "TableCell",
          "Tooltip",
        ].forEach((e) => {
          r[e] || (r[e] = {});
        }),
        "light" === t.mode)
      ) {
        Tr(t.Alert, "errorColor", Bn(t.error.light, 0.6)),
          Tr(t.Alert, "infoColor", Bn(t.info.light, 0.6)),
          Tr(t.Alert, "successColor", Bn(t.success.light, 0.6)),
          Tr(t.Alert, "warningColor", Bn(t.warning.light, 0.6)),
          Tr(t.Alert, "errorFilledBg", n("palette-error-main")),
          Tr(t.Alert, "infoFilledBg", n("palette-info-main")),
          Tr(t.Alert, "successFilledBg", n("palette-success-main")),
          Tr(t.Alert, "warningFilledBg", n("palette-warning-main")),
          Tr(
            t.Alert,
            "errorFilledColor",
            Nr(() => t.getContrastText(t.error.main))
          ),
          Tr(
            t.Alert,
            "infoFilledColor",
            Nr(() => t.getContrastText(t.info.main))
          ),
          Tr(
            t.Alert,
            "successFilledColor",
            Nr(() => t.getContrastText(t.success.main))
          ),
          Tr(
            t.Alert,
            "warningFilledColor",
            Nr(() => t.getContrastText(t.warning.main))
          ),
          Tr(t.Alert, "errorStandardBg", jn(t.error.light, 0.9)),
          Tr(t.Alert, "infoStandardBg", jn(t.info.light, 0.9)),
          Tr(t.Alert, "successStandardBg", jn(t.success.light, 0.9)),
          Tr(t.Alert, "warningStandardBg", jn(t.warning.light, 0.9)),
          Tr(t.Alert, "errorIconColor", n("palette-error-main")),
          Tr(t.Alert, "infoIconColor", n("palette-info-main")),
          Tr(t.Alert, "successIconColor", n("palette-success-main")),
          Tr(t.Alert, "warningIconColor", n("palette-warning-main")),
          Tr(t.AppBar, "defaultBg", n("palette-grey-100")),
          Tr(t.Avatar, "defaultBg", n("palette-grey-400")),
          Tr(t.Button, "inheritContainedBg", n("palette-grey-300")),
          Tr(t.Button, "inheritContainedHoverBg", n("palette-grey-A100")),
          Tr(t.Chip, "defaultBorder", n("palette-grey-400")),
          Tr(t.Chip, "defaultAvatarColor", n("palette-grey-700")),
          Tr(t.Chip, "defaultIconColor", n("palette-grey-700")),
          Tr(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
          Tr(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
          Tr(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
          Tr(t.LinearProgress, "primaryBg", jn(t.primary.main, 0.62)),
          Tr(t.LinearProgress, "secondaryBg", jn(t.secondary.main, 0.62)),
          Tr(t.LinearProgress, "errorBg", jn(t.error.main, 0.62)),
          Tr(t.LinearProgress, "infoBg", jn(t.info.main, 0.62)),
          Tr(t.LinearProgress, "successBg", jn(t.success.main, 0.62)),
          Tr(t.LinearProgress, "warningBg", jn(t.warning.main, 0.62)),
          Tr(
            t.Skeleton,
            "bg",
            `rgba(${n("palette-text-primaryChannel")} / 0.11)`
          ),
          Tr(t.Slider, "primaryTrack", jn(t.primary.main, 0.62)),
          Tr(t.Slider, "secondaryTrack", jn(t.secondary.main, 0.62)),
          Tr(t.Slider, "errorTrack", jn(t.error.main, 0.62)),
          Tr(t.Slider, "infoTrack", jn(t.info.main, 0.62)),
          Tr(t.Slider, "successTrack", jn(t.success.main, 0.62)),
          Tr(t.Slider, "warningTrack", jn(t.warning.main, 0.62));
        const e = Fn(t.background.default, 0.8);
        Tr(t.SnackbarContent, "bg", e),
          Tr(
            t.SnackbarContent,
            "color",
            Nr(() => t.getContrastText(e))
          ),
          Tr(t.SpeedDialAction, "fabHoverBg", Fn(t.background.paper, 0.15)),
          Tr(t.StepConnector, "border", n("palette-grey-400")),
          Tr(t.StepContent, "border", n("palette-grey-400")),
          Tr(t.Switch, "defaultColor", n("palette-common-white")),
          Tr(t.Switch, "defaultDisabledColor", n("palette-grey-100")),
          Tr(t.Switch, "primaryDisabledColor", jn(t.primary.main, 0.62)),
          Tr(t.Switch, "secondaryDisabledColor", jn(t.secondary.main, 0.62)),
          Tr(t.Switch, "errorDisabledColor", jn(t.error.main, 0.62)),
          Tr(t.Switch, "infoDisabledColor", jn(t.info.main, 0.62)),
          Tr(t.Switch, "successDisabledColor", jn(t.success.main, 0.62)),
          Tr(t.Switch, "warningDisabledColor", jn(t.warning.main, 0.62)),
          Tr(t.TableCell, "border", jn(In(t.divider, 1), 0.88)),
          Tr(t.Tooltip, "bg", In(t.grey[700], 0.92));
      }
      if ("dark" === t.mode) {
        Tr(t.Alert, "errorColor", jn(t.error.light, 0.6)),
          Tr(t.Alert, "infoColor", jn(t.info.light, 0.6)),
          Tr(t.Alert, "successColor", jn(t.success.light, 0.6)),
          Tr(t.Alert, "warningColor", jn(t.warning.light, 0.6)),
          Tr(t.Alert, "errorFilledBg", n("palette-error-dark")),
          Tr(t.Alert, "infoFilledBg", n("palette-info-dark")),
          Tr(t.Alert, "successFilledBg", n("palette-success-dark")),
          Tr(t.Alert, "warningFilledBg", n("palette-warning-dark")),
          Tr(
            t.Alert,
            "errorFilledColor",
            Nr(() => t.getContrastText(t.error.dark))
          ),
          Tr(
            t.Alert,
            "infoFilledColor",
            Nr(() => t.getContrastText(t.info.dark))
          ),
          Tr(
            t.Alert,
            "successFilledColor",
            Nr(() => t.getContrastText(t.success.dark))
          ),
          Tr(
            t.Alert,
            "warningFilledColor",
            Nr(() => t.getContrastText(t.warning.dark))
          ),
          Tr(t.Alert, "errorStandardBg", Bn(t.error.light, 0.9)),
          Tr(t.Alert, "infoStandardBg", Bn(t.info.light, 0.9)),
          Tr(t.Alert, "successStandardBg", Bn(t.success.light, 0.9)),
          Tr(t.Alert, "warningStandardBg", Bn(t.warning.light, 0.9)),
          Tr(t.Alert, "errorIconColor", n("palette-error-main")),
          Tr(t.Alert, "infoIconColor", n("palette-info-main")),
          Tr(t.Alert, "successIconColor", n("palette-success-main")),
          Tr(t.Alert, "warningIconColor", n("palette-warning-main")),
          Tr(t.AppBar, "defaultBg", n("palette-grey-900")),
          Tr(t.AppBar, "darkBg", n("palette-background-paper")),
          Tr(t.AppBar, "darkColor", n("palette-text-primary")),
          Tr(t.Avatar, "defaultBg", n("palette-grey-600")),
          Tr(t.Button, "inheritContainedBg", n("palette-grey-800")),
          Tr(t.Button, "inheritContainedHoverBg", n("palette-grey-700")),
          Tr(t.Chip, "defaultBorder", n("palette-grey-700")),
          Tr(t.Chip, "defaultAvatarColor", n("palette-grey-300")),
          Tr(t.Chip, "defaultIconColor", n("palette-grey-300")),
          Tr(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
          Tr(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
          Tr(t.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
          Tr(t.LinearProgress, "primaryBg", Bn(t.primary.main, 0.5)),
          Tr(t.LinearProgress, "secondaryBg", Bn(t.secondary.main, 0.5)),
          Tr(t.LinearProgress, "errorBg", Bn(t.error.main, 0.5)),
          Tr(t.LinearProgress, "infoBg", Bn(t.info.main, 0.5)),
          Tr(t.LinearProgress, "successBg", Bn(t.success.main, 0.5)),
          Tr(t.LinearProgress, "warningBg", Bn(t.warning.main, 0.5)),
          Tr(
            t.Skeleton,
            "bg",
            `rgba(${n("palette-text-primaryChannel")} / 0.13)`
          ),
          Tr(t.Slider, "primaryTrack", Bn(t.primary.main, 0.5)),
          Tr(t.Slider, "secondaryTrack", Bn(t.secondary.main, 0.5)),
          Tr(t.Slider, "errorTrack", Bn(t.error.main, 0.5)),
          Tr(t.Slider, "infoTrack", Bn(t.info.main, 0.5)),
          Tr(t.Slider, "successTrack", Bn(t.success.main, 0.5)),
          Tr(t.Slider, "warningTrack", Bn(t.warning.main, 0.5));
        const e = Fn(t.background.default, 0.98);
        Tr(t.SnackbarContent, "bg", e),
          Tr(
            t.SnackbarContent,
            "color",
            Nr(() => t.getContrastText(e))
          ),
          Tr(t.SpeedDialAction, "fabHoverBg", Fn(t.background.paper, 0.15)),
          Tr(t.StepConnector, "border", n("palette-grey-600")),
          Tr(t.StepContent, "border", n("palette-grey-600")),
          Tr(t.Switch, "defaultColor", n("palette-grey-300")),
          Tr(t.Switch, "defaultDisabledColor", n("palette-grey-600")),
          Tr(t.Switch, "primaryDisabledColor", Bn(t.primary.main, 0.55)),
          Tr(t.Switch, "secondaryDisabledColor", Bn(t.secondary.main, 0.55)),
          Tr(t.Switch, "errorDisabledColor", Bn(t.error.main, 0.55)),
          Tr(t.Switch, "infoDisabledColor", Bn(t.info.main, 0.55)),
          Tr(t.Switch, "successDisabledColor", Bn(t.success.main, 0.55)),
          Tr(t.Switch, "warningDisabledColor", Bn(t.warning.main, 0.55)),
          Tr(t.TableCell, "border", Bn(In(t.divider, 1), 0.68)),
          Tr(t.Tooltip, "bg", In(t.grey[700], 0.92));
      }
      Mr(t.background, "default"),
        Mr(t.background, "paper"),
        Mr(t.common, "background"),
        Mr(t.common, "onBackground"),
        Mr(t, "divider"),
        Object.keys(t).forEach((e) => {
          const n = t[e];
          "tonalOffset" !== e &&
            n &&
            "object" === typeof n &&
            (n.main && Tr(t[e], "mainChannel", Mn(Rr(n.main))),
            n.light && Tr(t[e], "lightChannel", Mn(Rr(n.light))),
            n.dark && Tr(t[e], "darkChannel", Mn(Rr(n.dark))),
            n.contrastText &&
              Tr(t[e], "contrastTextChannel", Mn(Rr(n.contrastText))),
            "text" === e && (Mr(t[e], "primary"), Mr(t[e], "secondary")),
            "action" === e &&
              (n.active && Mr(t[e], "active"),
              n.selected && Mr(t[e], "selected")));
        });
    });
    for (
      var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), k = 1;
      k < x;
      k++
    )
      S[k - 1] = arguments[k];
    b = S.reduce((e, t) => ut(e, t), b);
    const C = {
        prefix: o,
        disableCssColorScheme: r,
        shouldSkipGeneratingVar: a,
        getSelector: Pr(b),
      },
      { vars: E, generateThemeVars: $, generateStyleSheets: P } = ar(b, C);
    return (
      (b.vars = E),
      Object.entries(b.colorSchemes[b.defaultColorScheme]).forEach((e) => {
        let [t, n] = e;
        b[t] = n;
      }),
      (b.generateThemeVars = $),
      (b.generateStyleSheets = P),
      (b.generateSpacing = function () {
        return jt(s.spacing, _t(this));
      }),
      (b.getColorSchemeSelector = (function (e) {
        return function (t) {
          return "media" === e
            ? `@media (prefers-color-scheme: ${t})`
            : e
            ? e.startsWith("data-") && !e.includes("%s")
              ? `[${e}="${t}"] &`
              : "class" === e
              ? `.${t} &`
              : "data" === e
              ? `[data-${t}] &`
              : `${e.replace("%s", t)} &`
            : "&";
        };
      })(i)),
      (b.spacing = b.generateSpacing()),
      (b.shouldSkipGeneratingVar = a),
      (b.unstable_sxConfig = { ...hn, ...s?.unstable_sxConfig }),
      (b.unstable_sx = function (e) {
        return gn({ sx: e, theme: this });
      }),
      (b.toRuntimeSource = vr),
      b
    );
  }
  function Or(e, t, n) {
    e.colorSchemes &&
      n &&
      (e.colorSchemes[t] = {
        ...(!0 !== n && n),
        palette: er({ ...(!0 === n ? {} : n.palette), mode: t }),
      });
  }
  function Ir() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    const {
        palette: t,
        cssVariables: n = !1,
        colorSchemes: r = t ? void 0 : { light: !0 },
        defaultColorScheme: o = t?.mode,
        ...a
      } = e,
      i = o || "light",
      l = r?.[i],
      s = {
        ...r,
        ...(t
          ? { [i]: { ...("boolean" !== typeof l && l), palette: t } }
          : void 0),
      };
    for (
      var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), d = 1;
      d < u;
      d++
    )
      c[d - 1] = arguments[d];
    if (!1 === n) {
      if (!("colorSchemes" in e)) return wr(e, ...c);
      let n = t;
      "palette" in e ||
        (s[i] &&
          (!0 !== s[i]
            ? (n = s[i].palette)
            : "dark" === i && (n = { mode: "dark" })));
      const r = wr({ ...e, palette: n }, ...c);
      return (
        (r.defaultColorScheme = i),
        (r.colorSchemes = s),
        "light" === r.palette.mode &&
          ((r.colorSchemes.light = {
            ...(!0 !== s.light && s.light),
            palette: r.palette,
          }),
          Or(r, "dark", s.dark)),
        "dark" === r.palette.mode &&
          ((r.colorSchemes.dark = {
            ...(!0 !== s.dark && s.dark),
            palette: r.palette,
          }),
          Or(r, "light", s.light)),
        r
      );
    }
    return (
      t || "light" in s || "light" !== i || (s.light = !0),
      zr(
        {
          ...a,
          colorSchemes: s,
          defaultColorScheme: i,
          ...("boolean" !== typeof n && n),
        },
        ...c
      )
    );
  }
  const Ar = Ir(),
    Br = "$$material";
  const Lr = function (e) {
      return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
    },
    jr = (e) => Lr(e) && "classes" !== e,
    Fr = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        themeId: t,
        defaultTheme: n = wn,
        rootShouldForwardProp: r = xn,
        slotShouldForwardProp: o = xn,
      } = e;
      function a(e) {
        !(function (e, t, n) {
          e.theme = (function (e) {
            for (const t in e) return !1;
            return !0;
          })(e.theme)
            ? n
            : e.theme[t] || e.theme;
        })(e, t, n);
      }
      return function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !(function (e, t) {
          Array.isArray(e.__emotion_styles) &&
            (e.__emotion_styles = t(e.__emotion_styles));
        })(e, (e) => e.filter((e) => e !== gn));
        const {
            name: n,
            slot: i,
            skipVariantsResolver: l,
            skipSx: s,
            overridesResolver: u = Sn($n(i)),
            ...c
          } = t,
          d = void 0 !== l ? l : (i && "Root" !== i && "root" !== i) || !1,
          f = s || !1;
        let p = xn;
        "Root" === i || "root" === i
          ? (p = r)
          : i
          ? (p = o)
          : (function (e) {
              return "string" === typeof e && e.charCodeAt(0) > 96;
            })(e) && (p = void 0);
        const h = rt(e, { shouldForwardProp: p, label: En(n, i), ...c }),
          m = (e) => {
            if ("function" === typeof e && e.__emotion_real !== e)
              return function (t) {
                return kn(t, e);
              };
            if (lt(e)) {
              const t = bn(e);
              return t.variants
                ? function (e) {
                    return kn(e, t);
                  }
                : t.style;
            }
            return e;
          },
          g = function () {
            const t = [];
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            const l = o.map(m),
              s = [];
            if (
              (t.push(a),
              n &&
                u &&
                s.push(function (e) {
                  const t = e.theme,
                    r = t.components?.[n]?.styleOverrides;
                  if (!r) return null;
                  const o = {};
                  for (const n in r) o[n] = kn(e, r[n]);
                  return u(e, o);
                }),
              n &&
                !d &&
                s.push(function (e) {
                  const t = e.theme,
                    r = t?.components?.[n]?.variants;
                  return r ? Cn(e, r) : null;
                }),
              f || s.push(gn),
              Array.isArray(l[0]))
            ) {
              const e = l.shift(),
                n = new Array(t.length).fill(""),
                r = new Array(s.length).fill("");
              let o;
              (o = [...n, ...e, ...r]),
                (o.raw = [...n, ...e.raw, ...r]),
                t.unshift(o);
            }
            const c = [...t, ...l, ...s],
              p = h(...c);
            return e.muiName && (p.muiName = e.muiName), p;
          };
        return h.withConfig && (g.withConfig = h.withConfig), g;
      };
    })({ themeId: Br, defaultTheme: Ar, rootShouldForwardProp: jr }),
    Dr = Fr,
    Wr = { theme: void 0 };
  const Vr = function (e) {
    let t, n;
    return function (r) {
      let o = t;
      return (
        (void 0 !== o && r.theme === n) ||
          ((Wr.theme = r.theme), (o = bn(e(Wr))), (t = o), (n = r.theme)),
        o
      );
    };
  };
  function Hr(e, t) {
    const n = { ...t };
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const o = r;
        if ("components" === o || "slots" === o) n[o] = { ...e[o], ...n[o] };
        else if ("componentsProps" === o || "slotProps" === o) {
          const r = e[o],
            a = t[o];
          if (a)
            if (r) {
              n[o] = { ...a };
              for (const e in r)
                if (Object.prototype.hasOwnProperty.call(r, e)) {
                  const t = e;
                  n[o][t] = Hr(r[t], a[t]);
                }
            } else n[o] = a;
          else n[o] = r || {};
        } else void 0 === n[o] && (n[o] = e[o]);
      }
    return n;
  }
  const Ur = r.createContext(void 0);
  function Kr(e) {
    let { props: t, name: n } = e;
    return (function (e) {
      const { theme: t, name: n, props: r } = e;
      if (!t || !t.components || !t.components[n]) return r;
      const o = t.components[n];
      return o.defaultProps
        ? Hr(o.defaultProps, r)
        : o.styleOverrides || o.variants
        ? r
        : Hr(o, r);
    })({ props: t, name: n, theme: { components: r.useContext(Ur) } });
  }
  function Gr(e) {
    return Kr(e);
  }
  const Qr = function (e) {
    return "string" === typeof e;
  };
  const qr = function (e, t, n) {
    return void 0 === e || Qr(e)
      ? t
      : { ...t, ownerState: { ...t.ownerState, ...n } };
  };
  const Xr = function (e, t, n) {
    return "function" === typeof e ? e(t, n) : e;
  };
  const Yr = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
    if (void 0 === e) return {};
    const n = {};
    return (
      Object.keys(e)
        .filter(
          (n) =>
            n.match(/^on[A-Z]/) && "function" === typeof e[n] && !t.includes(n)
        )
        .forEach((t) => {
          n[t] = e[t];
        }),
      n
    );
  };
  const Zr = function (e) {
    if (void 0 === e) return {};
    const t = {};
    return (
      Object.keys(e)
        .filter((t) => !(t.match(/^on[A-Z]/) && "function" === typeof e[t]))
        .forEach((n) => {
          t[n] = e[n];
        }),
      t
    );
  };
  const Jr = function (e) {
    const {
      getSlotProps: t,
      additionalProps: n,
      externalSlotProps: r,
      externalForwardedProps: o,
      className: a,
    } = e;
    if (!t) {
      const e = l(n?.className, a, o?.className, r?.className),
        t = { ...n?.style, ...o?.style, ...r?.style },
        i = { ...n, ...o, ...r };
      return (
        e.length > 0 && (i.className = e),
        Object.keys(t).length > 0 && (i.style = t),
        { props: i, internalRef: void 0 }
      );
    }
    const i = Yr({ ...o, ...r }),
      s = Zr(r),
      u = Zr(o),
      c = t(i),
      d = l(c?.className, n?.className, a, o?.className, r?.className),
      f = { ...c?.style, ...n?.style, ...o?.style, ...r?.style },
      p = { ...c, ...n, ...u, ...s };
    return (
      d.length > 0 && (p.className = d),
      Object.keys(f).length > 0 && (p.style = f),
      { props: p, internalRef: c.ref }
    );
  };
  function eo(e, t) {
    const {
        className: n,
        elementType: r,
        ownerState: o,
        externalForwardedProps: a,
        internalForwardedProps: i,
        shouldForwardComponentProp: l = !1,
        ...s
      } = t,
      {
        component: u,
        slots: c = { [e]: void 0 },
        slotProps: d = { [e]: void 0 },
        ...f
      } = a,
      h = c[e] || r,
      m = Xr(d[e], o),
      {
        props: { component: g, ...y },
        internalRef: v,
      } = Jr({
        className: n,
        ...s,
        externalForwardedProps: "root" === e ? f : void 0,
        externalSlotProps: m,
      }),
      b = p(v, m?.ref, t.ref),
      w = "root" === e ? g || u : g;
    return [
      h,
      qr(
        h,
        {
          ...("root" === e && !u && !c[e] && i),
          ...("root" !== e && !c[e] && i),
          ...y,
          ...(w && !l && { as: w }),
          ...(w && l && { component: w }),
          ref: b,
        },
        o
      ),
    ];
  }
  function to(e, t) {
    if (null == e) return {};
    var n = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (-1 !== t.indexOf(r)) continue;
        n[r] = e[r];
      }
    return n;
  }
  function no(e, t) {
    return (
      (no = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      no(e, t)
    );
  }
  function ro(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      no(e, t);
  }
  const oo = !1,
    ao = r.createContext(null);
  var io = "unmounted",
    lo = "exited",
    so = "entering",
    uo = "entered",
    co = "exiting",
    fo = (function (e) {
      function t(t, n) {
        var r;
        r = e.call(this, t, n) || this;
        var o,
          a = n && !n.isMounting ? t.enter : t.appear;
        return (
          (r.appearStatus = null),
          t.in
            ? a
              ? ((o = lo), (r.appearStatus = so))
              : (o = uo)
            : (o = t.unmountOnExit || t.mountOnEnter ? io : lo),
          (r.state = { status: o }),
          (r.nextCallback = null),
          r
        );
      }
      ro(t, e),
        (t.getDerivedStateFromProps = function (e, t) {
          return e.in && t.status === io ? { status: lo } : null;
        });
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          this.updateStatus(!0, this.appearStatus);
        }),
        (n.componentDidUpdate = function (e) {
          var t = null;
          if (e !== this.props) {
            var n = this.state.status;
            this.props.in
              ? n !== so && n !== uo && (t = so)
              : (n !== so && n !== uo) || (t = co);
          }
          this.updateStatus(!1, t);
        }),
        (n.componentWillUnmount = function () {
          this.cancelNextCallback();
        }),
        (n.getTimeouts = function () {
          var e,
            t,
            n,
            r = this.props.timeout;
          return (
            (e = t = n = r),
            null != r &&
              "number" !== typeof r &&
              ((e = r.exit),
              (t = r.enter),
              (n = void 0 !== r.appear ? r.appear : t)),
            { exit: e, enter: t, appear: n }
          );
        }),
        (n.updateStatus = function (e, t) {
          if ((void 0 === e && (e = !1), null !== t))
            if ((this.cancelNextCallback(), t === so)) {
              if (this.props.unmountOnExit || this.props.mountOnEnter) {
                var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : w.findDOMNode(this);
                n &&
                  (function (e) {
                    e.scrollTop;
                  })(n);
              }
              this.performEnter(e);
            } else this.performExit();
          else
            this.props.unmountOnExit &&
              this.state.status === lo &&
              this.setState({ status: io });
        }),
        (n.performEnter = function (e) {
          var t = this,
            n = this.props.enter,
            r = this.context ? this.context.isMounting : e,
            o = this.props.nodeRef ? [r] : [w.findDOMNode(this), r],
            a = o[0],
            i = o[1],
            l = this.getTimeouts(),
            s = r ? l.appear : l.enter;
          (!e && !n) || oo
            ? this.safeSetState({ status: uo }, function () {
                t.props.onEntered(a);
              })
            : (this.props.onEnter(a, i),
              this.safeSetState({ status: so }, function () {
                t.props.onEntering(a, i),
                  t.onTransitionEnd(s, function () {
                    t.safeSetState({ status: uo }, function () {
                      t.props.onEntered(a, i);
                    });
                  });
              }));
        }),
        (n.performExit = function () {
          var e = this,
            t = this.props.exit,
            n = this.getTimeouts(),
            r = this.props.nodeRef ? void 0 : w.findDOMNode(this);
          t && !oo
            ? (this.props.onExit(r),
              this.safeSetState({ status: co }, function () {
                e.props.onExiting(r),
                  e.onTransitionEnd(n.exit, function () {
                    e.safeSetState({ status: lo }, function () {
                      e.props.onExited(r);
                    });
                  });
              }))
            : this.safeSetState({ status: lo }, function () {
                e.props.onExited(r);
              });
        }),
        (n.cancelNextCallback = function () {
          null !== this.nextCallback &&
            (this.nextCallback.cancel(), (this.nextCallback = null));
        }),
        (n.safeSetState = function (e, t) {
          (t = this.setNextCallback(t)), this.setState(e, t);
        }),
        (n.setNextCallback = function (e) {
          var t = this,
            n = !0;
          return (
            (this.nextCallback = function (r) {
              n && ((n = !1), (t.nextCallback = null), e(r));
            }),
            (this.nextCallback.cancel = function () {
              n = !1;
            }),
            this.nextCallback
          );
        }),
        (n.onTransitionEnd = function (e, t) {
          this.setNextCallback(t);
          var n = this.props.nodeRef
              ? this.props.nodeRef.current
              : w.findDOMNode(this),
            r = null == e && !this.props.addEndListener;
          if (n && !r) {
            if (this.props.addEndListener) {
              var o = this.props.nodeRef
                  ? [this.nextCallback]
                  : [n, this.nextCallback],
                a = o[0],
                i = o[1];
              this.props.addEndListener(a, i);
            }
            null != e && setTimeout(this.nextCallback, e);
          } else setTimeout(this.nextCallback, 0);
        }),
        (n.render = function () {
          var e = this.state.status;
          if (e === io) return null;
          var t = this.props,
            n = t.children,
            o =
              (t.in,
              t.mountOnEnter,
              t.unmountOnExit,
              t.appear,
              t.enter,
              t.exit,
              t.timeout,
              t.addEndListener,
              t.onEnter,
              t.onEntering,
              t.onEntered,
              t.onExit,
              t.onExiting,
              t.onExited,
              t.nodeRef,
              to(t, [
                "children",
                "in",
                "mountOnEnter",
                "unmountOnExit",
                "appear",
                "enter",
                "exit",
                "timeout",
                "addEndListener",
                "onEnter",
                "onEntering",
                "onEntered",
                "onExit",
                "onExiting",
                "onExited",
                "nodeRef",
              ]));
          return r.createElement(
            ao.Provider,
            { value: null },
            "function" === typeof n
              ? n(e, o)
              : r.cloneElement(r.Children.only(n), o)
          );
        }),
        t
      );
    })(r.Component);
  function po() {}
  (fo.contextType = ao),
    (fo.propTypes = {}),
    (fo.defaultProps = {
      in: !1,
      mountOnEnter: !1,
      unmountOnExit: !1,
      appear: !1,
      enter: !0,
      exit: !0,
      onEnter: po,
      onEntering: po,
      onEntered: po,
      onExit: po,
      onExiting: po,
      onExited: po,
    }),
    (fo.UNMOUNTED = io),
    (fo.EXITED = lo),
    (fo.ENTERING = so),
    (fo.ENTERED = uo),
    (fo.EXITING = co);
  const ho = fo;
  const mo = function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      const t = r.useContext(Ue);
      return t && ((n = t), 0 !== Object.keys(n).length) ? t : e;
      var n;
    },
    go = vn();
  const yo = function () {
    return mo(
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : go
    );
  };
  function vo() {
    const e = yo(Ar);
    return e[Br] || e;
  }
  const bo = (e) => e.scrollTop;
  function wo(e, t) {
    const { timeout: n, easing: r, style: o = {} } = e;
    return {
      duration:
        o.transitionDuration ?? ("number" === typeof n ? n : n[t.mode] || 0),
      easing:
        o.transitionTimingFunction ?? ("object" === typeof r ? r[t.mode] : r),
      delay: o.transitionDelay,
    };
  }
  const xo = p,
    So = { entering: { opacity: 1 }, entered: { opacity: 1 } },
    ko = r.forwardRef(function (e, t) {
      const n = vo(),
        o = {
          enter: n.transitions.duration.enteringScreen,
          exit: n.transitions.duration.leavingScreen,
        },
        {
          addEndListener: a,
          appear: i = !0,
          children: l,
          easing: s,
          in: c,
          onEnter: d,
          onEntered: f,
          onEntering: p,
          onExit: m,
          onExited: g,
          onExiting: y,
          style: v,
          timeout: b = o,
          TransitionComponent: w = ho,
          ...x
        } = e,
        S = r.useRef(null),
        k = xo(S, h(l), t),
        C = (e) => (t) => {
          if (e) {
            const n = S.current;
            void 0 === t ? e(n) : e(n, t);
          }
        },
        E = C(p),
        $ = C((e, t) => {
          bo(e);
          const r = wo({ style: v, timeout: b, easing: s }, { mode: "enter" });
          (e.style.webkitTransition = n.transitions.create("opacity", r)),
            (e.style.transition = n.transitions.create("opacity", r)),
            d && d(e, t);
        }),
        P = C(f),
        T = C(y),
        R = C((e) => {
          const t = wo({ style: v, timeout: b, easing: s }, { mode: "exit" });
          (e.style.webkitTransition = n.transitions.create("opacity", t)),
            (e.style.transition = n.transitions.create("opacity", t)),
            m && m(e);
        }),
        M = C(g);
      return (0, u.jsx)(w, {
        appear: i,
        in: c,
        nodeRef: S,
        onEnter: $,
        onEntered: P,
        onEntering: E,
        onExit: R,
        onExited: M,
        onExiting: T,
        addEndListener: (e) => {
          a && a(S.current, e);
        },
        timeout: b,
        ...x,
        children: (e, t) => {
          let { ownerState: n, ...o } = t;
          return r.cloneElement(l, {
            style: {
              opacity: 0,
              visibility: "exited" !== e || c ? void 0 : "hidden",
              ...So[e],
              ...v,
              ...l.props.style,
            },
            ref: k,
            ...o,
          });
        },
      });
    }),
    Co = ko,
    Eo = (e) => e,
    $o = (() => {
      let e = Eo;
      return {
        configure(t) {
          e = t;
        },
        generate: (t) => e(t),
        reset() {
          e = Eo;
        },
      };
    })(),
    Po = {
      active: "active",
      checked: "checked",
      completed: "completed",
      disabled: "disabled",
      error: "error",
      expanded: "expanded",
      focused: "focused",
      focusVisible: "focusVisible",
      open: "open",
      readOnly: "readOnly",
      required: "required",
      selected: "selected",
    };
  function To(e, t) {
    const n = Po[t];
    return n
      ? `${
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui"
        }-${n}`
      : `${$o.generate(e)}-${t}`;
  }
  function Ro(e, t) {
    let n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Mui";
    const r = {};
    return (
      t.forEach((t) => {
        r[t] = To(e, t, n);
      }),
      r
    );
  }
  function Mo(e) {
    return To("MuiBackdrop", e);
  }
  Ro("MuiBackdrop", ["root", "invisible"]);
  const No = Dr("div", {
      name: "MuiBackdrop",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.invisible && t.invisible];
      },
    })({
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      WebkitTapHighlightColor: "transparent",
      variants: [
        { props: { invisible: !0 }, style: { backgroundColor: "transparent" } },
      ],
    }),
    _o = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiBackdrop" }),
        {
          children: r,
          className: o,
          component: a = "div",
          invisible: i = !1,
          open: c,
          components: d = {},
          componentsProps: f = {},
          slotProps: p = {},
          slots: h = {},
          TransitionComponent: m,
          transitionDuration: g,
          ...y
        } = n,
        v = { ...n, component: a, invisible: i },
        b = ((e) => {
          const { classes: t, invisible: n } = e;
          return s({ root: ["root", n && "invisible"] }, Mo, t);
        })(v),
        w = {
          slots: { transition: m, root: d.Root, ...h },
          slotProps: { ...f, ...p },
        },
        [x, S] = eo("root", {
          elementType: No,
          externalForwardedProps: w,
          className: l(b.root, o),
          ownerState: v,
        }),
        [k, C] = eo("transition", {
          elementType: Co,
          externalForwardedProps: w,
          ownerState: v,
        });
      return (0,
      u.jsx)(k, { in: c, timeout: g, ...y, ...C, children: (0, u.jsx)(x, { "aria-hidden": !0, ...S, classes: b, ref: t, children: r }) });
    });
  const zo = function (e) {
    const t = r.useRef(e);
    return (
      x(() => {
        t.current = e;
      }),
      r.useRef(function () {
        return (0, t.current)(...arguments);
      }).current
    );
  };
  function Oo() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.reduce(
      (e, t) =>
        null == t
          ? e
          : function () {
              for (
                var n = arguments.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = arguments[o];
              e.apply(this, r), t.apply(this, r);
            },
      () => {}
    );
  }
  function Io(e) {
    return m(e).defaultView || window;
  }
  function Ao() {
    let e =
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
    const t = e.document.documentElement.clientWidth;
    return e.innerWidth - t;
  }
  function Bo(e, t) {
    t
      ? e.setAttribute("aria-hidden", "true")
      : e.removeAttribute("aria-hidden");
  }
  function Lo(e) {
    return parseInt(Io(e).getComputedStyle(e).paddingRight, 10) || 0;
  }
  function jo(e, t, n, r, o) {
    const a = [t, n, ...r];
    [].forEach.call(e.children, (e) => {
      const t = !a.includes(e),
        n = !(function (e) {
          const t = [
              "TEMPLATE",
              "SCRIPT",
              "STYLE",
              "LINK",
              "MAP",
              "META",
              "NOSCRIPT",
              "PICTURE",
              "COL",
              "COLGROUP",
              "PARAM",
              "SLOT",
              "SOURCE",
              "TRACK",
            ].includes(e.tagName),
            n = "INPUT" === e.tagName && "hidden" === e.getAttribute("type");
          return t || n;
        })(e);
      t && n && Bo(e, o);
    });
  }
  function Fo(e, t) {
    let n = -1;
    return e.some((e, r) => !!t(e) && ((n = r), !0)), n;
  }
  function Do(e, t) {
    const n = [],
      r = e.container;
    if (!t.disableScrollLock) {
      if (
        (function (e) {
          const t = m(e);
          return t.body === e
            ? Io(e).innerWidth > t.documentElement.clientWidth
            : e.scrollHeight > e.clientHeight;
        })(r)
      ) {
        const e = Ao(Io(r));
        n.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r,
        }),
          (r.style.paddingRight = `${Lo(r) + e}px`);
        const t = m(r).querySelectorAll(".mui-fixed");
        [].forEach.call(t, (t) => {
          n.push({
            value: t.style.paddingRight,
            property: "padding-right",
            el: t,
          }),
            (t.style.paddingRight = `${Lo(t) + e}px`);
        });
      }
      let e;
      if (r.parentNode instanceof DocumentFragment) e = m(r).body;
      else {
        const t = r.parentElement,
          n = Io(r);
        e =
          "HTML" === t?.nodeName && "scroll" === n.getComputedStyle(t).overflowY
            ? t
            : r;
      }
      n.push(
        { value: e.style.overflow, property: "overflow", el: e },
        { value: e.style.overflowX, property: "overflow-x", el: e },
        { value: e.style.overflowY, property: "overflow-y", el: e }
      ),
        (e.style.overflow = "hidden");
    }
    return () => {
      n.forEach((e) => {
        let { value: t, el: n, property: r } = e;
        t ? n.style.setProperty(r, t) : n.style.removeProperty(r);
      });
    };
  }
  const Wo = () => {},
    Vo = new (class {
      constructor() {
        (this.modals = []), (this.containers = []);
      }
      add(e, t) {
        let n = this.modals.indexOf(e);
        if (-1 !== n) return n;
        (n = this.modals.length),
          this.modals.push(e),
          e.modalRef && Bo(e.modalRef, !1);
        const r = (function (e) {
          const t = [];
          return (
            [].forEach.call(e.children, (e) => {
              "true" === e.getAttribute("aria-hidden") && t.push(e);
            }),
            t
          );
        })(t);
        jo(t, e.mount, e.modalRef, r, !0);
        const o = Fo(this.containers, (e) => e.container === t);
        return -1 !== o
          ? (this.containers[o].modals.push(e), n)
          : (this.containers.push({
              modals: [e],
              container: t,
              restore: null,
              hiddenSiblings: r,
            }),
            n);
      }
      mount(e, t) {
        const n = Fo(this.containers, (t) => t.modals.includes(e)),
          r = this.containers[n];
        r.restore || (r.restore = Do(r, t));
      }
      remove(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const n = this.modals.indexOf(e);
        if (-1 === n) return n;
        const r = Fo(this.containers, (t) => t.modals.includes(e)),
          o = this.containers[r];
        if (
          (o.modals.splice(o.modals.indexOf(e), 1),
          this.modals.splice(n, 1),
          0 === o.modals.length)
        )
          o.restore && o.restore(),
            e.modalRef && Bo(e.modalRef, t),
            jo(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1),
            this.containers.splice(r, 1);
        else {
          const e = o.modals[o.modals.length - 1];
          e.modalRef && Bo(e.modalRef, !1);
        }
        return n;
      }
      isTopModal(e) {
        return (
          this.modals.length > 0 && this.modals[this.modals.length - 1] === e
        );
      }
    })();
  const Ho = function (e) {
    const {
        container: t,
        disableEscapeKeyDown: n = !1,
        disableScrollLock: o = !1,
        closeAfterTransition: a = !1,
        onTransitionEnter: i,
        onTransitionExited: l,
        children: s,
        onClose: u,
        open: c,
        rootRef: d,
      } = e,
      f = r.useRef({}),
      h = r.useRef(null),
      g = r.useRef(null),
      y = p(g, d),
      [v, b] = r.useState(!c),
      w = (function (e) {
        return !!e && e.props.hasOwnProperty("in");
      })(s);
    let x = !0;
    ("false" !== e["aria-hidden"] && !1 !== e["aria-hidden"]) || (x = !1);
    const S = () => (
        (f.current.modalRef = g.current),
        (f.current.mount = h.current),
        f.current
      ),
      k = () => {
        Vo.mount(S(), { disableScrollLock: o }),
          g.current && (g.current.scrollTop = 0);
      },
      C = zo(() => {
        const e =
          (function (e) {
            return "function" === typeof e ? e() : e;
          })(t) || m(h.current).body;
        Vo.add(S(), e), g.current && k();
      }),
      E = () => Vo.isTopModal(S()),
      $ = zo((e) => {
        (h.current = e), e && (c && E() ? k() : g.current && Bo(g.current, x));
      }),
      P = r.useCallback(() => {
        Vo.remove(S(), x);
      }, [x]);
    r.useEffect(
      () => () => {
        P();
      },
      [P]
    ),
      r.useEffect(() => {
        c ? C() : (w && a) || P();
      }, [c, P, w, a, C]);
    const T = (e) => (t) => {
        e.onKeyDown?.(t),
          "Escape" === t.key &&
            229 !== t.which &&
            E() &&
            (n || (t.stopPropagation(), u && u(t, "escapeKeyDown")));
      },
      R = (e) => (t) => {
        e.onClick?.(t),
          t.target === t.currentTarget && u && u(t, "backdropClick");
      };
    return {
      getRootProps: function () {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const n = Yr(e);
        delete n.onTransitionEnter, delete n.onTransitionExited;
        const r = { ...n, ...t };
        return { role: "presentation", ...r, onKeyDown: T(r), ref: y };
      },
      getBackdropProps: function () {
        const e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return { "aria-hidden": !0, ...e, onClick: R(e), open: c };
      },
      getTransitionProps: () => ({
        onEnter: Oo(() => {
          b(!1), i && i();
        }, s?.props.onEnter ?? Wo),
        onExited: Oo(() => {
          b(!0), l && l(), a && P();
        }, s?.props.onExited ?? Wo),
      }),
      rootRef: y,
      portalRef: $,
      isTopModal: E,
      exited: v,
      hasTransition: w,
    };
  };
  function Uo(e) {
    return To("MuiModal", e);
  }
  Ro("MuiModal", ["root", "hidden", "backdrop"]);
  const Ko = Dr("div", {
      name: "MuiModal",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, !n.open && n.exited && t.hidden];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          position: "fixed",
          zIndex: (t.vars || t).zIndex.modal,
          right: 0,
          bottom: 0,
          top: 0,
          left: 0,
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.open && t.exited;
              },
              style: { visibility: "hidden" },
            },
          ],
        };
      })
    ),
    Go = Dr(_o, {
      name: "MuiModal",
      slot: "Backdrop",
      overridesResolver: (e, t) => t.backdrop,
    })({ zIndex: -1 }),
    Qo = r.forwardRef(function (e, t) {
      const n = Gr({ name: "MuiModal", props: e }),
        {
          BackdropComponent: o = Go,
          BackdropProps: a,
          classes: i,
          className: c,
          closeAfterTransition: d = !1,
          children: f,
          container: p,
          component: h,
          components: m = {},
          componentsProps: g = {},
          disableAutoFocus: y = !1,
          disableEnforceFocus: v = !1,
          disableEscapeKeyDown: w = !1,
          disablePortal: x = !1,
          disableRestoreFocus: k = !1,
          disableScrollLock: C = !1,
          hideBackdrop: E = !1,
          keepMounted: $ = !1,
          onBackdropClick: P,
          onClose: T,
          onTransitionEnter: R,
          onTransitionExited: M,
          open: N,
          slotProps: _ = {},
          slots: z = {},
          theme: O,
          ...I
        } = n,
        A = {
          ...n,
          closeAfterTransition: d,
          disableAutoFocus: y,
          disableEnforceFocus: v,
          disableEscapeKeyDown: w,
          disablePortal: x,
          disableRestoreFocus: k,
          disableScrollLock: C,
          hideBackdrop: E,
          keepMounted: $,
        },
        {
          getRootProps: B,
          getBackdropProps: L,
          getTransitionProps: j,
          portalRef: F,
          isTopModal: D,
          exited: W,
          hasTransition: V,
        } = Ho({ ...A, rootRef: t }),
        H = { ...A, exited: W },
        U = ((e) => {
          const { open: t, exited: n, classes: r } = e;
          return s(
            { root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] },
            Uo,
            r
          );
        })(H),
        K = {};
      if ((void 0 === f.props.tabIndex && (K.tabIndex = "-1"), V)) {
        const { onEnter: e, onExited: t } = j();
        (K.onEnter = e), (K.onExited = t);
      }
      const G = {
          ...I,
          slots: { root: m.Root, backdrop: m.Backdrop, ...z },
          slotProps: { ...g, ..._ },
        },
        [Q, q] = eo("root", {
          elementType: Ko,
          externalForwardedProps: G,
          getSlotProps: B,
          additionalProps: { ref: t, as: h },
          ownerState: H,
          className: l(c, U?.root, !H.open && H.exited && U?.hidden),
        }),
        [X, Y] = eo("backdrop", {
          elementType: o,
          externalForwardedProps: G,
          additionalProps: a,
          getSlotProps: (e) =>
            L({
              ...e,
              onClick: (t) => {
                P && P(t), e?.onClick && e.onClick(t);
              },
            }),
          className: l(a?.className, U?.backdrop),
          ownerState: H,
        }),
        Z = xo(a?.ref, Y.ref);
      return $ || N || (V && !W)
        ? (0, u.jsx)(S, {
            ref: F,
            container: p,
            disablePortal: x,
            children: (0, u.jsxs)(Q, {
              ...q,
              children: [
                !E && o ? (0, u.jsx)(X, { ...Y, ref: Z }) : null,
                (0, u.jsx)(b, {
                  disableEnforceFocus: v,
                  disableAutoFocus: y,
                  disableRestoreFocus: k,
                  isEnabled: D,
                  open: N,
                  children: r.cloneElement(f, K),
                }),
              ],
            }),
          })
        : null;
    }),
    qo = Qo;
  const Xo = function (e) {
      let t,
        n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 166;
      function r() {
        for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
          o[a] = arguments[a];
        clearTimeout(t),
          (t = setTimeout(() => {
            e.apply(this, o);
          }, n));
      }
      return (
        (r.clear = () => {
          clearTimeout(t);
        }),
        r
      );
    },
    Yo = Io;
  function Zo(e) {
    return To("MuiPaper", e);
  }
  Ro("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24",
  ]);
  const Jo = Dr("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          !n.square && t.rounded,
          "elevation" === n.variant && t[`elevation${n.elevation}`],
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          backgroundColor: (t.vars || t).palette.background.paper,
          color: (t.vars || t).palette.text.primary,
          transition: t.transitions.create("box-shadow"),
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.square;
              },
              style: { borderRadius: t.shape.borderRadius },
            },
            {
              props: { variant: "outlined" },
              style: { border: `1px solid ${(t.vars || t).palette.divider}` },
            },
            {
              props: { variant: "elevation" },
              style: {
                boxShadow: "var(--Paper-shadow)",
                backgroundImage: "var(--Paper-overlay)",
              },
            },
          ],
        };
      })
    ),
    ea = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiPaper" }),
        r = vo(),
        {
          className: o,
          component: a = "div",
          elevation: i = 1,
          square: c = !1,
          variant: d = "elevation",
          ...f
        } = n,
        p = { ...n, component: a, elevation: i, square: c, variant: d },
        h = ((e) => {
          const { square: t, elevation: n, variant: r, classes: o } = e;
          return s(
            {
              root: [
                "root",
                r,
                !t && "rounded",
                "elevation" === r && `elevation${n}`,
              ],
            },
            Zo,
            o
          );
        })(p);
      return (0,
      u.jsx)(Jo, { as: a, ownerState: p, className: l(h.root, o), ref: t, ...f, style: { ...("elevation" === d && { "--Paper-shadow": (r.vars || r).shadows[i], ...(r.vars && { "--Paper-overlay": r.vars.overlays?.[i] }), ...(!r.vars && "dark" === r.palette.mode && { "--Paper-overlay": `linear-gradient(${On("#fff", xr(i))}, ${On("#fff", xr(i))})` }) }), ...f.style } });
    }),
    ta = bt;
  Ro("MuiDrawer", [
    "root",
    "docked",
    "paper",
    "anchorLeft",
    "anchorRight",
    "anchorTop",
    "anchorBottom",
    "paperAnchorLeft",
    "paperAnchorRight",
    "paperAnchorTop",
    "paperAnchorBottom",
    "paperAnchorDockedLeft",
    "paperAnchorDockedRight",
    "paperAnchorDockedTop",
    "paperAnchorDockedBottom",
    "modal",
  ]);
  const na = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      ("permanent" === n.variant || "persistent" === n.variant) && t.docked,
      t.modal,
    ];
  };
  Dr(qo, { name: "MuiDrawer", slot: "Root", overridesResolver: na })(
    Vr((e) => {
      let { theme: t } = e;
      return { zIndex: (t.vars || t).zIndex.drawer };
    })
  ),
    Dr("div", {
      shouldForwardProp: jr,
      name: "MuiDrawer",
      slot: "Docked",
      skipVariantsResolver: !1,
      overridesResolver: na,
    })({ flex: "0 0 auto" }),
    Dr(ea, {
      name: "MuiDrawer",
      slot: "Paper",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.paper,
          t[`paperAnchor${ta(n.anchor)}`],
          "temporary" !== n.variant && t[`paperAnchorDocked${ta(n.anchor)}`],
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          flex: "1 0 auto",
          zIndex: (t.vars || t).zIndex.drawer,
          WebkitOverflowScrolling: "touch",
          position: "fixed",
          top: 0,
          outline: 0,
          variants: [
            { props: { anchor: "left" }, style: { left: 0 } },
            {
              props: { anchor: "top" },
              style: {
                top: 0,
                left: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
              },
            },
            { props: { anchor: "right" }, style: { right: 0 } },
            {
              props: { anchor: "bottom" },
              style: {
                top: "auto",
                left: 0,
                bottom: 0,
                right: 0,
                height: "auto",
                maxHeight: "100%",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "left" === t.anchor && "temporary" !== t.variant;
              },
              style: {
                borderRight: `1px solid ${(t.vars || t).palette.divider}`,
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "top" === t.anchor && "temporary" !== t.variant;
              },
              style: {
                borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "right" === t.anchor && "temporary" !== t.variant;
              },
              style: {
                borderLeft: `1px solid ${(t.vars || t).palette.divider}`,
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "bottom" === t.anchor && "temporary" !== t.variant;
              },
              style: {
                borderTop: `1px solid ${(t.vars || t).palette.divider}`,
              },
            },
          ],
        };
      })
    );
  function ra(e) {
    return To("MuiSvgIcon", e);
  }
  Ro("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
  ]);
  const oa = Dr("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          "inherit" !== n.color && t[`color${ta(n.color)}`],
          t[`fontSize${ta(n.fontSize)}`],
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          flexShrink: 0,
          transition: t.transitions?.create?.("fill", {
            duration: (t.vars ?? t).transitions?.duration?.shorter,
          }),
          variants: [
            { props: (e) => !e.hasSvgAsChild, style: { fill: "currentColor" } },
            { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
            {
              props: { fontSize: "small" },
              style: { fontSize: t.typography?.pxToRem?.(20) || "1.25rem" },
            },
            {
              props: { fontSize: "medium" },
              style: { fontSize: t.typography?.pxToRem?.(24) || "1.5rem" },
            },
            {
              props: { fontSize: "large" },
              style: { fontSize: t.typography?.pxToRem?.(35) || "2.1875rem" },
            },
            ...Object.entries((t.vars ?? t).palette)
              .filter((e) => {
                let [, t] = e;
                return t && t.main;
              })
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars ?? t).palette?.[n]?.main },
                };
              }),
            {
              props: { color: "action" },
              style: { color: (t.vars ?? t).palette?.action?.active },
            },
            {
              props: { color: "disabled" },
              style: { color: (t.vars ?? t).palette?.action?.disabled },
            },
            { props: { color: "inherit" }, style: { color: void 0 } },
          ],
        };
      })
    ),
    aa = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiSvgIcon" }),
        {
          children: o,
          className: a,
          color: i = "inherit",
          component: c = "svg",
          fontSize: d = "medium",
          htmlColor: f,
          inheritViewBox: p = !1,
          titleAccess: h,
          viewBox: m = "0 0 24 24",
          ...g
        } = n,
        y = r.isValidElement(o) && "svg" === o.type,
        v = {
          ...n,
          color: i,
          component: c,
          fontSize: d,
          instanceFontSize: e.fontSize,
          inheritViewBox: p,
          viewBox: m,
          hasSvgAsChild: y,
        },
        b = {};
      p || (b.viewBox = m);
      const w = ((e) => {
        const { color: t, fontSize: n, classes: r } = e;
        return s(
          {
            root: [
              "root",
              "inherit" !== t && `color${ta(t)}`,
              `fontSize${ta(n)}`,
            ],
          },
          ra,
          r
        );
      })(v);
      return (0,
      u.jsxs)(oa, { as: c, className: l(w.root, a), focusable: "false", color: f, "aria-hidden": !h || void 0, role: h ? "img" : void 0, ref: t, ...b, ...g, ...(y && o.props), ownerState: v, children: [y ? o.props.children : o, h ? (0, u.jsx)("title", { children: h }) : null] });
    });
  aa.muiName = "SvgIcon";
  const ia = aa;
  function la(e, t) {
    function n(n, r) {
      return (0, u.jsx)(ia, {
        "data-testid": `${t}Icon`,
        ref: r,
        ...n,
        children: e,
      });
    }
    return (n.muiName = ia.muiName), r.memo(r.forwardRef(n));
  }
  const sa = la(
      (0, u.jsx)("path", { d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z" }),
      "Menu"
    ),
    ua = m;
  const ca = r.createContext({});
  function da(e) {
    return To("MuiList", e);
  }
  Ro("MuiList", ["root", "padding", "dense", "subheader"]);
  const fa = Dr("ul", {
      name: "MuiList",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          !n.disablePadding && t.padding,
          n.dense && t.dense,
          n.subheader && t.subheader,
        ];
      },
    })({
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative",
      variants: [
        {
          props: (e) => {
            let { ownerState: t } = e;
            return !t.disablePadding;
          },
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.subheader;
          },
          style: { paddingTop: 0 },
        },
      ],
    }),
    pa = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiList" }),
        {
          children: o,
          className: a,
          component: i = "ul",
          dense: c = !1,
          disablePadding: d = !1,
          subheader: f,
          ...p
        } = n,
        h = r.useMemo(() => ({ dense: c }), [c]),
        m = { ...n, component: i, dense: c, disablePadding: d },
        g = ((e) => {
          const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
          return s(
            { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
            da,
            t
          );
        })(m);
      return (0,
      u.jsx)(ca.Provider, { value: h, children: (0, u.jsxs)(fa, { as: i, className: l(g.root, a), ref: t, ownerState: m, ...p, children: [f, o] }) });
    }),
    ha = Ao,
    ma = x;
  function ga(e, t, n) {
    return e === t
      ? e.firstChild
      : t && t.nextElementSibling
      ? t.nextElementSibling
      : n
      ? null
      : e.firstChild;
  }
  function ya(e, t, n) {
    return e === t
      ? n
        ? e.firstChild
        : e.lastChild
      : t && t.previousElementSibling
      ? t.previousElementSibling
      : n
      ? null
      : e.lastChild;
  }
  function va(e, t) {
    if (void 0 === t) return !0;
    let n = e.innerText;
    return (
      void 0 === n && (n = e.textContent),
      (n = n.trim().toLowerCase()),
      0 !== n.length &&
        (t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join("")))
    );
  }
  function ba(e, t, n, r, o, a) {
    let i = !1,
      l = o(e, t, !!t && n);
    for (; l; ) {
      if (l === e.firstChild) {
        if (i) return !1;
        i = !0;
      }
      const t =
        !r && (l.disabled || "true" === l.getAttribute("aria-disabled"));
      if (l.hasAttribute("tabindex") && va(l, a) && !t) return l.focus(), !0;
      l = o(e, l, n);
    }
    return !1;
  }
  const wa = r.forwardRef(function (e, t) {
    const {
        actions: n,
        autoFocus: o = !1,
        autoFocusItem: a = !1,
        children: i,
        className: l,
        disabledItemsFocusable: s = !1,
        disableListWrap: c = !1,
        onKeyDown: d,
        variant: f = "selectedMenu",
        ...p
      } = e,
      h = r.useRef(null),
      m = r.useRef({
        keys: [],
        repeating: !0,
        previousKeyMatched: !0,
        lastTime: null,
      });
    ma(() => {
      o && h.current.focus();
    }, [o]),
      r.useImperativeHandle(
        n,
        () => ({
          adjustStyleForScrollbar: (e, t) => {
            let { direction: n } = t;
            const r = !h.current.style.width;
            if (e.clientHeight < h.current.clientHeight && r) {
              const t = `${ha(Yo(e))}px`;
              (h.current.style["rtl" === n ? "paddingLeft" : "paddingRight"] =
                t),
                (h.current.style.width = `calc(100% + ${t})`);
            }
            return h.current;
          },
        }),
        []
      );
    const g = xo(h, t);
    let y = -1;
    r.Children.forEach(i, (e, t) => {
      r.isValidElement(e)
        ? (e.props.disabled ||
            ((("selectedMenu" === f && e.props.selected) || -1 === y) &&
              (y = t)),
          y === t &&
            (e.props.disabled ||
              e.props.muiSkipListHighlight ||
              e.type.muiSkipListHighlight) &&
            ((y += 1), y >= i.length && (y = -1)))
        : y === t && ((y += 1), y >= i.length && (y = -1));
    });
    const v = r.Children.map(i, (e, t) => {
      if (t === y) {
        const t = {};
        return (
          a && (t.autoFocus = !0),
          void 0 === e.props.tabIndex &&
            "selectedMenu" === f &&
            (t.tabIndex = 0),
          r.cloneElement(e, t)
        );
      }
      return e;
    });
    return (0, u.jsx)(pa, {
      role: "menu",
      ref: g,
      className: l,
      onKeyDown: (e) => {
        const t = h.current,
          n = e.key;
        if (e.ctrlKey || e.metaKey || e.altKey) return void (d && d(e));
        const r = ua(t).activeElement;
        if ("ArrowDown" === n) e.preventDefault(), ba(t, r, c, s, ga);
        else if ("ArrowUp" === n) e.preventDefault(), ba(t, r, c, s, ya);
        else if ("Home" === n) e.preventDefault(), ba(t, null, c, s, ga);
        else if ("End" === n) e.preventDefault(), ba(t, null, c, s, ya);
        else if (1 === n.length) {
          const o = m.current,
            a = n.toLowerCase(),
            i = performance.now();
          o.keys.length > 0 &&
            (i - o.lastTime > 500
              ? ((o.keys = []), (o.repeating = !0), (o.previousKeyMatched = !0))
              : o.repeating && a !== o.keys[0] && (o.repeating = !1)),
            (o.lastTime = i),
            o.keys.push(a);
          const l = r && !o.repeating && va(r, o);
          o.previousKeyMatched && (l || ba(t, r, !1, s, ga, o))
            ? e.preventDefault()
            : (o.previousKeyMatched = !1);
        }
        d && d(e);
      },
      tabIndex: o ? 0 : -1,
      ...p,
      children: v,
    });
  });
  function xa(e) {
    try {
      return e.matches(":focus-visible");
    } catch (t) {
      0;
    }
    return !1;
  }
  const Sa = zo,
    ka = {};
  function Ca(e, t) {
    const n = r.useRef(ka);
    return n.current === ka && (n.current = e(t)), n;
  }
  class Ea {
    static create() {
      return new Ea();
    }
    static use() {
      const e = Ca(Ea.create).current,
        [t, n] = r.useState(!1);
      return (
        (e.shouldMount = t),
        (e.setShouldMount = n),
        r.useEffect(e.mountEffect, [t]),
        e
      );
    }
    constructor() {
      (this.ref = { current: null }),
        (this.mounted = null),
        (this.didMount = !1),
        (this.shouldMount = !1),
        (this.setShouldMount = null);
    }
    mount() {
      return (
        this.mounted ||
          ((this.mounted = (function () {
            let e, t;
            const n = new Promise((n, r) => {
              (e = n), (t = r);
            });
            return (n.resolve = e), (n.reject = t), n;
          })()),
          (this.shouldMount = !0),
          this.setShouldMount(this.shouldMount)),
        this.mounted
      );
    }
    mountEffect = () => {
      this.shouldMount &&
        !this.didMount &&
        null !== this.ref.current &&
        ((this.didMount = !0), this.mounted.resolve());
    };
    start() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this.mount().then(() => this.ref.current?.start(...t));
    }
    stop() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this.mount().then(() => this.ref.current?.stop(...t));
    }
    pulsate() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      this.mount().then(() => this.ref.current?.pulsate(...t));
    }
  }
  function $a(e, t) {
    var n = Object.create(null);
    return (
      e &&
        r.Children.map(e, function (e) {
          return e;
        }).forEach(function (e) {
          n[e.key] = (function (e) {
            return t && (0, r.isValidElement)(e) ? t(e) : e;
          })(e);
        }),
      n
    );
  }
  function Pa(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
  }
  function Ta(e, t, n) {
    var o = $a(e.children),
      a = (function (e, t) {
        function n(n) {
          return n in t ? t[n] : e[n];
        }
        (e = e || {}), (t = t || {});
        var r,
          o = Object.create(null),
          a = [];
        for (var i in e)
          i in t ? a.length && ((o[i] = a), (a = [])) : a.push(i);
        var l = {};
        for (var s in t) {
          if (o[s])
            for (r = 0; r < o[s].length; r++) {
              var u = o[s][r];
              l[o[s][r]] = n(u);
            }
          l[s] = n(s);
        }
        for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]);
        return l;
      })(t, o);
    return (
      Object.keys(a).forEach(function (i) {
        var l = a[i];
        if ((0, r.isValidElement)(l)) {
          var s = i in t,
            u = i in o,
            c = t[i],
            d = (0, r.isValidElement)(c) && !c.props.in;
          !u || (s && !d)
            ? u || !s || d
              ? u &&
                s &&
                (0, r.isValidElement)(c) &&
                (a[i] = (0, r.cloneElement)(l, {
                  onExited: n.bind(null, l),
                  in: c.props.in,
                  exit: Pa(l, "exit", e),
                  enter: Pa(l, "enter", e),
                }))
              : (a[i] = (0, r.cloneElement)(l, { in: !1 }))
            : (a[i] = (0, r.cloneElement)(l, {
                onExited: n.bind(null, l),
                in: !0,
                exit: Pa(l, "exit", e),
                enter: Pa(l, "enter", e),
              }));
        }
      }),
      a
    );
  }
  var Ra =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    Ma = (function (e) {
      function t(t, n) {
        var r,
          o = (r = e.call(this, t, n) || this).handleExited.bind(
            (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(r)
          );
        return (
          (r.state = {
            contextValue: { isMounting: !0 },
            handleExited: o,
            firstRender: !0,
          }),
          r
        );
      }
      ro(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          (this.mounted = !0),
            this.setState({ contextValue: { isMounting: !1 } });
        }),
        (n.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (t.getDerivedStateFromProps = function (e, t) {
          var n,
            o,
            a = t.children,
            i = t.handleExited;
          return {
            children: t.firstRender
              ? ((n = e),
                (o = i),
                $a(n.children, function (e) {
                  return (0,
                  r.cloneElement)(e, { onExited: o.bind(null, e), in: !0, appear: Pa(e, "appear", n), enter: Pa(e, "enter", n), exit: Pa(e, "exit", n) });
                }))
              : Ta(e, a, i),
            firstRender: !1,
          };
        }),
        (n.handleExited = function (e, t) {
          var n = $a(this.props.children);
          e.key in n ||
            (e.props.onExited && e.props.onExited(t),
            this.mounted &&
              this.setState(function (t) {
                var n = k({}, t.children);
                return delete n[e.key], { children: n };
              }));
        }),
        (n.render = function () {
          var e = this.props,
            t = e.component,
            n = e.childFactory,
            o = to(e, ["component", "childFactory"]),
            a = this.state.contextValue,
            i = Ra(this.state.children).map(n);
          return (
            delete o.appear,
            delete o.enter,
            delete o.exit,
            null === t
              ? r.createElement(ao.Provider, { value: a }, i)
              : r.createElement(
                  ao.Provider,
                  { value: a },
                  r.createElement(t, o, i)
                )
          );
        }),
        t
      );
    })(r.Component);
  (Ma.propTypes = {}),
    (Ma.defaultProps = {
      component: "div",
      childFactory: function (e) {
        return e;
      },
    });
  const Na = Ma,
    _a = [];
  class za {
    static create() {
      return new za();
    }
    currentId = null;
    start(e, t) {
      this.clear(),
        (this.currentId = setTimeout(() => {
          (this.currentId = null), t();
        }, e));
    }
    clear = () => {
      null !== this.currentId &&
        (clearTimeout(this.currentId), (this.currentId = null));
    };
    disposeEffect = () => this.clear;
  }
  function Oa() {
    const e = Ca(za.create).current;
    var t;
    return (t = e.disposeEffect), r.useEffect(t, _a), e;
  }
  n(219);
  var Ia = function (e, t) {
    var n = arguments;
    if (null == t || !Ke.call(t, "css"))
      return r.createElement.apply(void 0, n);
    var o = n.length,
      a = new Array(o);
    (a[0] = qe),
      (a[1] = (function (e, t) {
        var n = {};
        for (var r in t) Ke.call(t, r) && (n[r] = t[r]);
        return (n[Ge] = e), n;
      })(e, t));
    for (var i = 2; i < o; i++) a[i] = n[i];
    return r.createElement.apply(null, a);
  };
  !(function (e) {
    var t;
    t || (t = e.JSX || (e.JSX = {}));
  })(Ia || (Ia = {}));
  function Aa() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Fe(t);
  }
  function Ba() {
    var e = Aa.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  }
  const La = function (e) {
    const {
        className: t,
        classes: n,
        pulsate: o = !1,
        rippleX: a,
        rippleY: i,
        rippleSize: s,
        in: c,
        onExited: d,
        timeout: f,
      } = e,
      [p, h] = r.useState(!1),
      m = l(t, n.ripple, n.rippleVisible, o && n.ripplePulsate),
      g = { width: s, height: s, top: -s / 2 + i, left: -s / 2 + a },
      y = l(n.child, p && n.childLeaving, o && n.childPulsate);
    return (
      c || p || h(!0),
      r.useEffect(() => {
        if (!c && null != d) {
          const e = setTimeout(d, f);
          return () => {
            clearTimeout(e);
          };
        }
      }, [d, c, f]),
      (0, u.jsx)("span", {
        className: m,
        style: g,
        children: (0, u.jsx)("span", { className: y }),
      })
    );
  };
  const ja = Ro("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    Fa = Ba`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
    Da = Ba`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
    Wa = Ba`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
    Va = Dr("span", { name: "MuiTouchRipple", slot: "Root" })({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
    }),
    Ha = Dr(La, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${ja.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Fa};
    animation-duration: ${550}ms;
    animation-timing-function: ${(e) => {
      let { theme: t } = e;
      return t.transitions.easing.easeInOut;
    }};
  }

  &.${ja.ripplePulsate} {
    animation-duration: ${(e) => {
      let { theme: t } = e;
      return t.transitions.duration.shorter;
    }}ms;
  }

  & .${ja.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ja.childLeaving} {
    opacity: 0;
    animation-name: ${Da};
    animation-duration: ${550}ms;
    animation-timing-function: ${(e) => {
      let { theme: t } = e;
      return t.transitions.easing.easeInOut;
    }};
  }

  & .${ja.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Wa};
    animation-duration: 2500ms;
    animation-timing-function: ${(e) => {
      let { theme: t } = e;
      return t.transitions.easing.easeInOut;
    }};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
    Ua = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiTouchRipple" }),
        { center: o = !1, classes: a = {}, className: i, ...s } = n,
        [c, d] = r.useState([]),
        f = r.useRef(0),
        p = r.useRef(null);
      r.useEffect(() => {
        p.current && (p.current(), (p.current = null));
      }, [c]);
      const h = r.useRef(!1),
        m = Oa(),
        g = r.useRef(null),
        y = r.useRef(null),
        v = r.useCallback(
          (e) => {
            const {
              pulsate: t,
              rippleX: n,
              rippleY: r,
              rippleSize: o,
              cb: i,
            } = e;
            d((e) => [
              ...e,
              (0, u.jsx)(
                Ha,
                {
                  classes: {
                    ripple: l(a.ripple, ja.ripple),
                    rippleVisible: l(a.rippleVisible, ja.rippleVisible),
                    ripplePulsate: l(a.ripplePulsate, ja.ripplePulsate),
                    child: l(a.child, ja.child),
                    childLeaving: l(a.childLeaving, ja.childLeaving),
                    childPulsate: l(a.childPulsate, ja.childPulsate),
                  },
                  timeout: 550,
                  pulsate: t,
                  rippleX: n,
                  rippleY: r,
                  rippleSize: o,
                },
                f.current
              ),
            ]),
              (f.current += 1),
              (p.current = i);
          },
          [a]
        ),
        b = r.useCallback(
          function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : () => {};
            const {
              pulsate: r = !1,
              center: a = o || t.pulsate,
              fakeElement: i = !1,
            } = t;
            if ("mousedown" === e?.type && h.current)
              return void (h.current = !1);
            "touchstart" === e?.type && (h.current = !0);
            const l = i ? null : y.current,
              s = l
                ? l.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let u, c, d;
            if (
              a ||
              void 0 === e ||
              (0 === e.clientX && 0 === e.clientY) ||
              (!e.clientX && !e.touches)
            )
              (u = Math.round(s.width / 2)), (c = Math.round(s.height / 2));
            else {
              const { clientX: t, clientY: n } =
                e.touches && e.touches.length > 0 ? e.touches[0] : e;
              (u = Math.round(t - s.left)), (c = Math.round(n - s.top));
            }
            if (a)
              (d = Math.sqrt((2 * s.width ** 2 + s.height ** 2) / 3)),
                d % 2 === 0 && (d += 1);
            else {
              const e =
                  2 * Math.max(Math.abs((l ? l.clientWidth : 0) - u), u) + 2,
                t = 2 * Math.max(Math.abs((l ? l.clientHeight : 0) - c), c) + 2;
              d = Math.sqrt(e ** 2 + t ** 2);
            }
            e?.touches
              ? null === g.current &&
                ((g.current = () => {
                  v({
                    pulsate: r,
                    rippleX: u,
                    rippleY: c,
                    rippleSize: d,
                    cb: n,
                  });
                }),
                m.start(80, () => {
                  g.current && (g.current(), (g.current = null));
                }))
              : v({ pulsate: r, rippleX: u, rippleY: c, rippleSize: d, cb: n });
          },
          [o, v, m]
        ),
        w = r.useCallback(() => {
          b({}, { pulsate: !0 });
        }, [b]),
        x = r.useCallback(
          (e, t) => {
            if ((m.clear(), "touchend" === e?.type && g.current))
              return (
                g.current(),
                (g.current = null),
                void m.start(0, () => {
                  x(e, t);
                })
              );
            (g.current = null),
              d((e) => (e.length > 0 ? e.slice(1) : e)),
              (p.current = t);
          },
          [m]
        );
      return (
        r.useImperativeHandle(t, () => ({ pulsate: w, start: b, stop: x }), [
          w,
          b,
          x,
        ]),
        (0, u.jsx)(Va, {
          className: l(ja.root, a.root, i),
          ref: y,
          ...s,
          children: (0, u.jsx)(Na, { component: null, exit: !0, children: c }),
        })
      );
    });
  function Ka(e) {
    return To("MuiButtonBase", e);
  }
  const Ga = Ro("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    Qa = Dr("button", {
      name: "MuiButtonBase",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: 0,
      border: 0,
      margin: 0,
      borderRadius: 0,
      padding: 0,
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      WebkitAppearance: "none",
      textDecoration: "none",
      color: "inherit",
      "&::-moz-focus-inner": { borderStyle: "none" },
      [`&.${Ga.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    });
  function qa(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return Sa((o) => (n && n(o), r || e[t](o), !0));
  }
  const Xa = r.forwardRef(function (e, t) {
    const n = Gr({ props: e, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: a = !1,
        children: i,
        className: c,
        component: d = "button",
        disabled: f = !1,
        disableRipple: p = !1,
        disableTouchRipple: h = !1,
        focusRipple: m = !1,
        focusVisibleClassName: g,
        LinkComponent: y = "a",
        onBlur: v,
        onClick: b,
        onContextMenu: w,
        onDragLeave: x,
        onFocus: S,
        onFocusVisible: k,
        onKeyDown: C,
        onKeyUp: E,
        onMouseDown: $,
        onMouseLeave: P,
        onMouseUp: T,
        onTouchEnd: R,
        onTouchMove: M,
        onTouchStart: N,
        tabIndex: _ = 0,
        TouchRippleProps: z,
        touchRippleRef: O,
        type: I,
        ...A
      } = n,
      B = r.useRef(null),
      L = Ea.use(),
      j = xo(L.ref, O),
      [F, D] = r.useState(!1);
    f && F && D(!1),
      r.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            D(!0), B.current.focus();
          },
        }),
        []
      );
    const W = L.shouldMount && !p && !f;
    r.useEffect(() => {
      F && m && !p && L.pulsate();
    }, [p, m, F, L]);
    const V = qa(L, "start", $, h),
      H = qa(L, "stop", w, h),
      U = qa(L, "stop", x, h),
      K = qa(L, "stop", T, h),
      G = qa(
        L,
        "stop",
        (e) => {
          F && e.preventDefault(), P && P(e);
        },
        h
      ),
      Q = qa(L, "start", N, h),
      q = qa(L, "stop", R, h),
      X = qa(L, "stop", M, h),
      Y = qa(
        L,
        "stop",
        (e) => {
          xa(e.target) || D(!1), v && v(e);
        },
        !1
      ),
      Z = Sa((e) => {
        B.current || (B.current = e.currentTarget),
          xa(e.target) && (D(!0), k && k(e)),
          S && S(e);
      }),
      J = () => {
        const e = B.current;
        return d && "button" !== d && !("A" === e.tagName && e.href);
      },
      ee = Sa((e) => {
        m &&
          !e.repeat &&
          F &&
          " " === e.key &&
          L.stop(e, () => {
            L.start(e);
          }),
          e.target === e.currentTarget &&
            J() &&
            " " === e.key &&
            e.preventDefault(),
          C && C(e),
          e.target === e.currentTarget &&
            J() &&
            "Enter" === e.key &&
            !f &&
            (e.preventDefault(), b && b(e));
      }),
      te = Sa((e) => {
        m &&
          " " === e.key &&
          F &&
          !e.defaultPrevented &&
          L.stop(e, () => {
            L.pulsate(e);
          }),
          E && E(e),
          b &&
            e.target === e.currentTarget &&
            J() &&
            " " === e.key &&
            !e.defaultPrevented &&
            b(e);
      });
    let ne = d;
    "button" === ne && (A.href || A.to) && (ne = y);
    const re = {};
    "button" === ne
      ? ((re.type = void 0 === I ? "button" : I), (re.disabled = f))
      : (A.href || A.to || (re.role = "button"),
        f && (re["aria-disabled"] = f));
    const oe = xo(t, B),
      ae = {
        ...n,
        centerRipple: a,
        component: d,
        disabled: f,
        disableRipple: p,
        disableTouchRipple: h,
        focusRipple: m,
        tabIndex: _,
        focusVisible: F,
      },
      ie = ((e) => {
        const {
            disabled: t,
            focusVisible: n,
            focusVisibleClassName: r,
            classes: o,
          } = e,
          a = s(
            { root: ["root", t && "disabled", n && "focusVisible"] },
            Ka,
            o
          );
        return n && r && (a.root += ` ${r}`), a;
      })(ae);
    return (0,
    u.jsxs)(Qa, { as: ne, className: l(ie.root, c), ownerState: ae, onBlur: Y, onClick: b, onContextMenu: H, onFocus: Z, onKeyDown: ee, onKeyUp: te, onMouseDown: V, onMouseLeave: G, onMouseUp: K, onDragLeave: U, onTouchEnd: q, onTouchMove: X, onTouchStart: Q, ref: oe, tabIndex: f ? -1 : _, type: I, ...re, ...A, children: [i, W ? (0, u.jsx)(Ua, { ref: j, center: a, ...z }) : null] });
  });
  function Ya(e) {
    return To("MuiDivider", e);
  }
  const Za = Ro("MuiDivider", [
    "root",
    "absolute",
    "fullWidth",
    "inset",
    "middle",
    "flexItem",
    "light",
    "vertical",
    "withChildren",
    "withChildrenVertical",
    "textAlignRight",
    "textAlignLeft",
    "wrapper",
    "wrapperVertical",
  ]);
  function Ja(e) {
    return To("MuiListItemIcon", e);
  }
  const ei = Ro("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
  function ti(e) {
    return To("MuiListItemText", e);
  }
  const ni = Ro("MuiListItemText", [
    "root",
    "multiline",
    "dense",
    "inset",
    "primary",
    "secondary",
  ]);
  function ri(e) {
    return To("MuiMenuItem", e);
  }
  const oi = Ro("MuiMenuItem", [
      "root",
      "focusVisible",
      "dense",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    ai = Dr(Xa, {
      shouldForwardProp: (e) => jr(e) || "classes" === e,
      name: "MuiMenuItem",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.dense && t.dense,
          n.divider && t.divider,
          !n.disableGutters && t.gutters,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          ...t.typography.body1,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          position: "relative",
          textDecoration: "none",
          minHeight: 48,
          paddingTop: 6,
          paddingBottom: 6,
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (t.vars || t).palette.action.hover,
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
          [`&.${oi.selected}`]: {
            backgroundColor: t.vars
              ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
              : On(t.palette.primary.main, t.palette.action.selectedOpacity),
            [`&.${oi.focusVisible}`]: {
              backgroundColor: t.vars
                ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`
                : On(
                    t.palette.primary.main,
                    t.palette.action.selectedOpacity +
                      t.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${oi.selected}:hover`]: {
            backgroundColor: t.vars
              ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`
              : On(
                  t.palette.primary.main,
                  t.palette.action.selectedOpacity +
                    t.palette.action.hoverOpacity
                ),
            "@media (hover: none)": {
              backgroundColor: t.vars
                ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`
                : On(t.palette.primary.main, t.palette.action.selectedOpacity),
            },
          },
          [`&.${oi.focusVisible}`]: {
            backgroundColor: (t.vars || t).palette.action.focus,
          },
          [`&.${oi.disabled}`]: {
            opacity: (t.vars || t).palette.action.disabledOpacity,
          },
          [`& + .${Za.root}`]: {
            marginTop: t.spacing(1),
            marginBottom: t.spacing(1),
          },
          [`& + .${Za.inset}`]: { marginLeft: 52 },
          [`& .${ni.root}`]: { marginTop: 0, marginBottom: 0 },
          [`& .${ni.inset}`]: { paddingLeft: 36 },
          [`& .${ei.root}`]: { minWidth: 36 },
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableGutters;
              },
              style: { paddingLeft: 16, paddingRight: 16 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.divider;
              },
              style: {
                borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
                backgroundClip: "padding-box",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.dense;
              },
              style: { [t.breakpoints.up("sm")]: { minHeight: "auto" } },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.dense;
              },
              style: {
                minHeight: 32,
                paddingTop: 4,
                paddingBottom: 4,
                ...t.typography.body2,
                [`& .${ei.root} svg`]: { fontSize: "1.25rem" },
              },
            },
          ],
        };
      })
    ),
    ii = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiMenuItem" }),
        {
          autoFocus: o = !1,
          component: a = "li",
          dense: i = !1,
          divider: c = !1,
          disableGutters: d = !1,
          focusVisibleClassName: f,
          role: p = "menuitem",
          tabIndex: h,
          className: m,
          ...g
        } = n,
        y = r.useContext(ca),
        v = r.useMemo(
          () => ({ dense: i || y.dense || !1, disableGutters: d }),
          [y.dense, i, d]
        ),
        b = r.useRef(null);
      ma(() => {
        o && b.current && b.current.focus();
      }, [o]);
      const w = { ...n, dense: v.dense, divider: c, disableGutters: d },
        x = ((e) => {
          const {
              disabled: t,
              dense: n,
              divider: r,
              disableGutters: o,
              selected: a,
              classes: i,
            } = e,
            l = s(
              {
                root: [
                  "root",
                  n && "dense",
                  t && "disabled",
                  !o && "gutters",
                  r && "divider",
                  a && "selected",
                ],
              },
              ri,
              i
            );
          return { ...i, ...l };
        })(n),
        S = xo(b, t);
      let k;
      return (
        n.disabled || (k = void 0 !== h ? h : -1),
        (0, u.jsx)(ca.Provider, {
          value: v,
          children: (0, u.jsx)(ai, {
            ref: S,
            role: p,
            tabIndex: k,
            component: a,
            focusVisibleClassName: l(x.focusVisible, f),
            className: l(x.root, m),
            ...g,
            ownerState: w,
            classes: x,
          }),
        })
      );
    });
  function li(e) {
    return To("MuiTypography", e);
  }
  const si = Ro("MuiTypography", [
    "root",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "inherit",
    "button",
    "caption",
    "overline",
    "alignLeft",
    "alignRight",
    "alignCenter",
    "alignJustify",
    "noWrap",
    "gutterBottom",
    "paragraph",
  ]);
  function ui(e) {
    const { sx: t, ...n } = e,
      { systemProps: r, otherProps: o } = ((e) => {
        const t = { systemProps: {}, otherProps: {} },
          n = e?.theme?.unstable_sxConfig ?? hn;
        return (
          Object.keys(e).forEach((r) => {
            n[r] ? (t.systemProps[r] = e[r]) : (t.otherProps[r] = e[r]);
          }),
          t
        );
      })(n);
    let a;
    return (
      (a = Array.isArray(t)
        ? [r, ...t]
        : "function" === typeof t
        ? function () {
            const e = t(...arguments);
            return lt(e) ? { ...r, ...e } : r;
          }
        : { ...r, ...t }),
      { ...o, sx: a }
    );
  }
  function ci() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (t) => {
      let [, n] = t;
      return (
        n &&
        (function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          if (
            !(function (e) {
              return "string" === typeof e.main;
            })(e)
          )
            return !1;
          for (const n of t)
            if (!e.hasOwnProperty(n) || "string" !== typeof e[n]) return !1;
          return !0;
        })(n, e)
      );
    };
  }
  const di = {
      primary: !0,
      secondary: !0,
      error: !0,
      info: !0,
      success: !0,
      warning: !0,
      textPrimary: !0,
      textSecondary: !0,
      textDisabled: !0,
    },
    fi = ui,
    pi = Dr("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.variant && t[n.variant],
          "inherit" !== n.align && t[`align${ta(n.align)}`],
          n.noWrap && t.noWrap,
          n.gutterBottom && t.gutterBottom,
          n.paragraph && t.paragraph,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          margin: 0,
          variants: [
            {
              props: { variant: "inherit" },
              style: {
                font: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
              },
            },
            ...Object.entries(t.typography)
              .filter((e) => {
                let [t, n] = e;
                return "inherit" !== t && n && "object" === typeof n;
              })
              .map((e) => {
                let [t, n] = e;
                return { props: { variant: t }, style: n };
              }),
            ...Object.entries(t.palette)
              .filter(ci())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars || t).palette[n].main },
                };
              }),
            ...Object.entries(t.palette?.text || {})
              .filter((e) => {
                let [, t] = e;
                return "string" === typeof t;
              })
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: `text${ta(n)}` },
                  style: { color: (t.vars || t).palette.text[n] },
                };
              }),
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "inherit" !== t.align;
              },
              style: { textAlign: "var(--Typography-textAlign)" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.noWrap;
              },
              style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.gutterBottom;
              },
              style: { marginBottom: "0.35em" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.paragraph;
              },
              style: { marginBottom: 16 },
            },
          ],
        };
      })
    ),
    hi = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p",
    },
    mi = r.forwardRef(function (e, t) {
      const { color: n, ...r } = Gr({ props: e, name: "MuiTypography" }),
        o = fi({ ...r, ...(!di[n] && { color: n }) }),
        {
          align: a = "inherit",
          className: i,
          component: c,
          gutterBottom: d = !1,
          noWrap: f = !1,
          paragraph: p = !1,
          variant: h = "body1",
          variantMapping: m = hi,
          ...g
        } = o,
        y = {
          ...o,
          align: a,
          color: n,
          className: i,
          component: c,
          gutterBottom: d,
          noWrap: f,
          paragraph: p,
          variant: h,
          variantMapping: m,
        },
        v = c || (p ? "p" : m[h] || hi[h]) || "span",
        b = ((e) => {
          const {
            align: t,
            gutterBottom: n,
            noWrap: r,
            paragraph: o,
            variant: a,
            classes: i,
          } = e;
          return s(
            {
              root: [
                "root",
                a,
                "inherit" !== e.align && `align${ta(t)}`,
                n && "gutterBottom",
                r && "noWrap",
                o && "paragraph",
              ],
            },
            li,
            i
          );
        })(y);
      return (0,
      u.jsx)(pi, { as: v, ref: t, className: l(b.root, i), ...g, ownerState: y, style: { ...("inherit" !== a && { "--Typography-textAlign": a }), ...g.style } });
    }),
    gi = mi,
    yi = Dr("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${ni.primary}`]: t.primary },
          { [`& .${ni.secondary}`]: t.secondary },
          t.root,
          n.inset && t.inset,
          n.primary && n.secondary && t.multiline,
          n.dense && t.dense,
        ];
      },
    })({
      flex: "1 1 auto",
      minWidth: 0,
      marginTop: 4,
      marginBottom: 4,
      [`.${si.root}:where(& .${ni.primary})`]: { display: "block" },
      [`.${si.root}:where(& .${ni.secondary})`]: { display: "block" },
      variants: [
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.primary && t.secondary;
          },
          style: { marginTop: 6, marginBottom: 6 },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.inset;
          },
          style: { paddingLeft: 56 },
        },
      ],
    }),
    vi = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiListItemText" }),
        {
          children: o,
          className: a,
          disableTypography: i = !1,
          inset: c = !1,
          primary: d,
          primaryTypographyProps: f,
          secondary: p,
          secondaryTypographyProps: h,
          slots: m = {},
          slotProps: g = {},
          ...y
        } = n,
        { dense: v } = r.useContext(ca);
      let b = null != d ? d : o,
        w = p;
      const x = {
          ...n,
          disableTypography: i,
          inset: c,
          primary: !!b,
          secondary: !!w,
          dense: v,
        },
        S = ((e) => {
          const {
            classes: t,
            inset: n,
            primary: r,
            secondary: o,
            dense: a,
          } = e;
          return s(
            {
              root: ["root", n && "inset", a && "dense", r && o && "multiline"],
              primary: ["primary"],
              secondary: ["secondary"],
            },
            ti,
            t
          );
        })(x),
        k = { slots: m, slotProps: { primary: f, secondary: h, ...g } },
        [C, E] = eo("primary", {
          className: S.primary,
          elementType: gi,
          externalForwardedProps: k,
          ownerState: x,
        }),
        [$, P] = eo("secondary", {
          className: S.secondary,
          elementType: gi,
          externalForwardedProps: k,
          ownerState: x,
        });
      return (
        null == b ||
          b.type === gi ||
          i ||
          (b = (0, u.jsx)(C, {
            variant: v ? "body2" : "body1",
            component: E?.variant ? void 0 : "span",
            ...E,
            children: b,
          })),
        null == w ||
          w.type === gi ||
          i ||
          (w = (0, u.jsx)($, {
            variant: "body2",
            color: "textSecondary",
            ...P,
            children: w,
          })),
        (0, u.jsxs)(yi, {
          className: l(S.root, a),
          ownerState: x,
          ref: t,
          ...y,
          children: [b, w],
        })
      );
    }),
    bi = Dr("div", {
      name: "MuiListItemIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, "flex-start" === n.alignItems && t.alignItemsFlexStart];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          minWidth: 56,
          color: (t.vars || t).palette.action.active,
          flexShrink: 0,
          display: "inline-flex",
          variants: [
            { props: { alignItems: "flex-start" }, style: { marginTop: 8 } },
          ],
        };
      })
    ),
    wi = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiListItemIcon" }),
        { className: o, ...a } = n,
        i = r.useContext(ca),
        c = { ...n, alignItems: i.alignItems },
        d = ((e) => {
          const { alignItems: t, classes: n } = e;
          return s(
            { root: ["root", "flex-start" === t && "alignItemsFlexStart"] },
            Ja,
            n
          );
        })(c);
      return (0,
      u.jsx)(bi, { className: l(d.root, o), ownerState: c, ref: t, ...a });
    }),
    xi = la(
      (0, u.jsx)("path", {
        d: "M8.4 18.2c.38.5.6 1.12.6 1.8 0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.44 0 .85.09 1.23.26l1.41-1.77c-.92-1.03-1.29-2.39-1.09-3.69l-2.03-.68c-.54.83-1.46 1.38-2.52 1.38-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3c0 .07 0 .14-.01.21l2.03.68c.64-1.21 1.82-2.09 3.22-2.32V5.91C9.96 5.57 9 4.4 9 3c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.4-.96 2.57-2.25 2.91v2.16c1.4.23 2.58 1.11 3.22 2.32L18 9.71V9.5c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-1.06 0-1.98-.55-2.52-1.37l-2.03.68c.2 1.29-.16 2.65-1.09 3.69l1.41 1.77Q17.34 17 18 17c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3c0-.68.22-1.3.6-1.8l-1.41-1.77c-1.35.75-3.01.76-4.37 0z",
      }),
      "Hub"
    ),
    Si = la(
      (0, u.jsx)("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
      "Home"
    ),
    ki = la(
      (0, u.jsx)("path", {
        d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41zm-6.78.66h5v1.5h-5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2zm6.5 1.25h-5v-1.5h5zm0-2.5h-5v-1.5h5z",
      }),
      "Calculate"
    ),
    Ci = (e) => {
      let { onClick: t, isOpen: n } = e;
      return (0, u.jsx)(sa, {
        onClick: () => t(!n),
        sx: { position: "absolute", top: 10, left: 10 },
      });
    },
    Ei = (e) => {
      let { isOpen: t, onClick: n } = e;
      return (0, u.jsx)(u.Fragment, {
        children: t
          ? (0, u.jsx)(ea, {
              sx: {
                width: 320,
                maxWidth: "100%",
                position: "absolute",
                zIndex: 100,
                top: 40,
                left: 10,
              },
              children: (0, u.jsxs)(wa, {
                children: [
                  (0, u.jsxs)(ii, {
                    onClick: () => n("Home"),
                    children: [
                      (0, u.jsx)(wi, {
                        children: (0, u.jsx)(Si, { fontSize: "small" }),
                      }),
                      (0, u.jsx)(vi, { children: "Home" }),
                    ],
                  }),
                  (0, u.jsxs)(ii, {
                    onClick: () => n("MolarityPractice"),
                    children: [
                      (0, u.jsx)(wi, {
                        children: (0, u.jsx)(ki, { fontSize: "small" }),
                      }),
                      (0, u.jsx)(vi, { children: "Molarity Conversion" }),
                    ],
                  }),
                  (0, u.jsxs)(ii, {
                    onClick: () => n("MoleculeGenerator"),
                    children: [
                      (0, u.jsx)(wi, {
                        children: (0, u.jsx)(xi, { fontSize: "small" }),
                      }),
                      (0, u.jsx)(vi, { children: "Molecule Generator" }),
                    ],
                  }),
                ],
              }),
            })
          : null,
      });
    };
  const $i = Ro("MuiBox", ["root"]),
    Pi = Ir(),
    Ti = (function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
          themeId: t,
          defaultTheme: n,
          defaultClassName: o = "MuiBox-root",
          generateClassName: a,
        } = e,
        i = rt("div", {
          shouldForwardProp: (e) => "theme" !== e && "sx" !== e && "as" !== e,
        })(gn);
      return r.forwardRef(function (e, r) {
        const s = yo(n),
          { className: c, component: d = "div", ...f } = ui(e);
        return (0,
        u.jsx)(i, { as: d, ref: r, className: l(c, a ? a(o) : o), theme: (t && s[t]) || s, ...f });
      });
    })({
      themeId: Br,
      defaultTheme: Pi,
      defaultClassName: $i.root,
      generateClassName: $o.generate,
    }),
    Ri = Ti,
    Mi = function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return 1 === t && 1 === e
        ? 1
        : Math.floor(Math.random() * (e - t + 1) + t);
    },
    Ni = {
      getRandomInt: Mi,
      getRandomSelection: function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = Object.keys(e),
          n = t.length;
        return e[t[Mi(n) - 1]];
      },
      substances: {
        AgNO3: {
          atomicMass: { Ag: 108, N: 14, O: 16, total: 170 },
          key: "AgNO3",
          displayKey: "AgNO<sub>3</sub>",
          name: "silver nitrate",
        },
        C6H12O6: {
          atomicMass: { C: 12, H: 1, O: 16, total: 180 },
          key: "C6H12O6",
          displayKey: "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>",
          name: "glucose",
        },
        CCl4: {
          atomicMass: { C: 12, Cl: 35.5, total: 154 },
          key: "CCl4",
          displayKey: "CCl<sub>4</sub>",
          name: "carbon chloride",
        },
        CH4: {
          atomicMass: { C: 12, H: 1, total: 16 },
          key: "CH4",
          displayKey: "CH<sub>4</sub>",
          name: "methane",
        },
        CO2: {
          atomicMass: { C: 12, O: 16, total: 44 },
          key: "CO2",
          displayKey: "CO<sub>2</sub>",
          name: "carbon dioxide",
        },
        H2O: {
          atomicMass: { H: 1, O: 16, total: 18 },
          key: "H2O",
          displayKey: "H<sub>2</sub>O",
          name: "water",
        },
        KCl: {
          atomicMass: { K: 39, Cl: 35.5, total: 74.5 },
          key: "KCl",
          displayKey: "KCl",
          name: "potassium chloride",
        },
        KOH: {
          atomicMass: { H: 1, K: 39, O: 16, total: 56 },
          key: "KOH",
          displayKey: "KOH",
          name: "potassium hydroxide",
        },
        N2: {
          atomicMass: { N: 14, total: 28 },
          key: "N2",
          displayKey: "N<sub>2</sub>",
          name: "nitrogen",
        },
        NaCl: {
          atomicMass: { Cl: 35.5, Na: 23, total: 58.5 },
          key: "NaCl",
          displayKey: "NaCl",
          name: "hydrochloric acid",
        },
        NaOH: {
          atomicMass: { H: 1, Na: 23, O: 16, total: 40 },
          key: "NaOH",
          displayKey: "NaOH",
          name: "sodium hydroxide",
        },
        O2: {
          atomicMass: { O: 16, total: 32 },
          key: "O2",
          displayKey: "O<sub>2</sub>",
          name: "oxygen",
        },
      },
    },
    _i = {
      concentration: "M",
      mass: "g",
      gfm: "g",
      moles: "moles",
      volume: "L",
      volumeMils: "mL",
    },
    zi = () => {
      const e = Ni.getRandomSelection(Ni.substances),
        t = parseFloat((Ni.getRandomInt(1e3) / 10).toFixed(4)),
        n = parseFloat((t / e.atomicMass.total).toFixed(4)),
        r = Ni.getRandomInt(50) / 10;
      return {
        substance: e,
        mass: t,
        moles: n,
        volume: r,
        volumeMils: r < 1 ? 1e3 * r : null,
        concentration: parseFloat((n / r).toFixed(4)),
        gfm: e.atomicMass.total,
        question: `How many moles are there in ${t} grams of ${e.name} (${e.displayKey})?`,
        hint: `The formula mass for ${e.displayKey} is ${e.atomicMass.total}.`,
        answer: `${n} moles (to 2 d.p.)`,
        explanation: `To find the number of moles, we must divide the substance weight by the atomic mass. In this case, that gives us ${t} / ${e.atomicMass.total} = ${n} moles.`,
      };
    },
    Oi = (e) => (e < 1 ? `${1e3 * e} ${_i.volumeMils}` : `${e} ${_i.volume}`),
    Ii = (e) => {
      const t = ["mass", "moles"],
        n = t[Ni.getRandomInt(1, 0)],
        r = ["volume", "concentration"],
        o = r[Ni.getRandomInt(1, 0)],
        a = r.find((e) => e !== o),
        i = t.find((e) => e !== n),
        l = 1 === Ni.getRandomInt(2, 1) ? a : i,
        s = `Given ${e[n]} ${_i[n]} of ${e.substance.displayKey}, calculate the ${l} of ${e.substance.displayKey} when you have ${e[o]} ${_i[o]}.`,
        u = `The GFM for ${e.substance.displayKey} is ${e.gfm} ${_i.gfm}.`,
        c = "volume" === l ? `${Oi(e[l])}` : `${e[l]} ${_i[l]}`,
        d = ((e) => {
          let {
              randomNeeded: t,
              firstProvidedInfo: n,
              secondProvidedInfo: r,
              calculation: o,
            } = e,
            a = "";
          "mass" === t
            ? (a = `<ol>\n      <li>First we need to rearrange the equation <strong>n=m/GFM</strong> for mass to <strong>m=n*GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass.</li>\n      <li>We know the Gram Formula Mass for ${o.substance.displayKey} is ${o.gfm} ${_i.gfm}, so let substitute in for what we know, giving us <strong>m = ${o[n]} * ${o.gfm} = ${o[t]} ${_i[t]}</strong>.</li>\n      </ol>`)
            : "moles" === t
            ? (a = `<ol>\n      <li>We will use the equation <strong>n=m/GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass.</li>\n      <li>We know the Gram Formula Mass for ${o.substance.displayKey} is ${o.gfm} ${_i.gfm}, so let substitute in for what we know, giving us <strong>n = ${o[n]} / ${o.gfm} = ${o[t]} ${_i[t]}</strong>.</li>\n      </ol>`)
            : "concentration" === t
            ? (a = `<ol>${
                "moles" === n
                  ? `<li>We will use the equation <strong>C=n/V</strong>, where C=concentration, n=number of moles and V=volume.</li>\n    <li>We then substitute in for what we know, giving us <strong>C = ${o[n]} / ${o[r]} = ${o[t]} ${_i[t]}</strong>.</li>`
                  : `<li>To calculate concentration, we need to use the equation <strong>C=n/V</strong>, where C=concentration, n=number of moles and V=volume. We have volume, but we don't have the number of moles yet.</li>\n    <li>Instead, we will need to first use <strong>n=m/GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass to get that information.</li>\n    <li>We know the Gram Formula Mass for ${o.substance.displayKey} is ${o.gfm} ${_i.gfm}, so let substitute in for what we know, giving us <strong>n = ${o[n]} / ${o.gfm} = ${o.moles} ${_i.moles}</strong>.</li>\n    <li>Now that we have the number of moles, will use the equation <strong>C=n/V</strong>, and we can now substitute in for what we know, giving us <strong>C = ${o.moles} / ${o[r]} = ${o[t]} ${_i[t]}</strong>.</li>`
              }</ol>`)
            : "volume" === t &&
              (a = `<ol>${
                "moles" === n
                  ? `<li>We will use the equation <strong>C=n/V</strong>, rearranged to <strong>V=n/C</strong>, where C=concentration, n=number of moles and V=volume.</li>\n    <li>We then substitute in for what we know, giving us <strong>V = ${
                      o[n]
                    } / ${o[r]} = ${Oi(o[t])}</strong>.</li>`
                  : `<li>To calculate volume, we need to use the equation <strong>C=n/V</strong>, rearranged to <strong>V=n/C</strong>, where C=concentration, n=number of moles and V=volume. We have the concentration, but we don't have the number of moles yet.</li>\n    <li>Instead, we will need to first use <strong>n=m/GFM</strong>, where m=mass, n=number of moles and GFM is Gram Formula Mass to get that information.</li>\n    <li>We know the Gram Formula Mass for ${
                      o.substance.displayKey
                    } is ${o.gfm} ${
                      _i.gfm
                    }, so let substitute in for what we know, giving us <strong>n = ${
                      o[n]
                    } / ${o.gfm} = ${o.moles} ${
                      _i.moles
                    }</strong>.</li>\n    <li>Now that we have the number of moles, will use the equation <strong>V=n/C</strong>, and we can now substitute in for what we know, giving us <strong>V = ${
                      o.moles
                    } / ${o[r]} = ${Oi(o[t])}</strong>.</li>`
              }</ol>`);
          return a;
        })({
          randomNeeded: l,
          firstProvidedInfo: n,
          secondProvidedInfo: o,
          calculation: e,
        });
      return {
        ...e,
        advancedQuestion: s,
        advancedHint: u,
        advancedAnswer: c,
        advancedExplanation: d,
      };
    };
  function Ai(e) {
    return To("MuiButtonGroup", e);
  }
  const Bi = Ro("MuiButtonGroup", [
    "root",
    "contained",
    "outlined",
    "text",
    "disableElevation",
    "disabled",
    "firstButton",
    "fullWidth",
    "horizontal",
    "vertical",
    "colorPrimary",
    "colorSecondary",
    "grouped",
    "groupedHorizontal",
    "groupedVertical",
    "groupedText",
    "groupedTextHorizontal",
    "groupedTextVertical",
    "groupedTextPrimary",
    "groupedTextSecondary",
    "groupedOutlined",
    "groupedOutlinedHorizontal",
    "groupedOutlinedVertical",
    "groupedOutlinedPrimary",
    "groupedOutlinedSecondary",
    "groupedContained",
    "groupedContainedHorizontal",
    "groupedContainedVertical",
    "groupedContainedPrimary",
    "groupedContainedSecondary",
    "lastButton",
    "middleButton",
  ]);
  const Li = r.createContext({});
  const ji = r.createContext(void 0),
    Fi = Dr("div", {
      name: "MuiButtonGroup",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Bi.grouped}`]: t.grouped },
          { [`& .${Bi.grouped}`]: t[`grouped${ta(n.orientation)}`] },
          { [`& .${Bi.grouped}`]: t[`grouped${ta(n.variant)}`] },
          {
            [`& .${Bi.grouped}`]:
              t[`grouped${ta(n.variant)}${ta(n.orientation)}`],
          },
          { [`& .${Bi.grouped}`]: t[`grouped${ta(n.variant)}${ta(n.color)}`] },
          { [`& .${Bi.firstButton}`]: t.firstButton },
          { [`& .${Bi.lastButton}`]: t.lastButton },
          { [`& .${Bi.middleButton}`]: t.middleButton },
          t.root,
          t[n.variant],
          !0 === n.disableElevation && t.disableElevation,
          n.fullWidth && t.fullWidth,
          "vertical" === n.orientation && t.vertical,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          display: "inline-flex",
          borderRadius: (t.vars || t).shape.borderRadius,
          variants: [
            {
              props: { variant: "contained" },
              style: { boxShadow: (t.vars || t).shadows[2] },
            },
            { props: { disableElevation: !0 }, style: { boxShadow: "none" } },
            { props: { fullWidth: !0 }, style: { width: "100%" } },
            {
              props: { orientation: "vertical" },
              style: {
                flexDirection: "column",
                [`& .${Bi.lastButton},& .${Bi.middleButton}`]: {
                  borderTopRightRadius: 0,
                  borderTopLeftRadius: 0,
                },
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              },
            },
            {
              props: { orientation: "horizontal" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                },
                [`& .${Bi.lastButton},& .${Bi.middleButton}`]: {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              },
            },
            {
              props: { variant: "text", orientation: "horizontal" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderRight: t.vars
                    ? `1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`
                    : "1px solid " +
                      ("light" === t.palette.mode
                        ? "rgba(0, 0, 0, 0.23)"
                        : "rgba(255, 255, 255, 0.23)"),
                  [`&.${Bi.disabled}`]: {
                    borderRight: `1px solid ${
                      (t.vars || t).palette.action.disabled
                    }`,
                  },
                },
              },
            },
            {
              props: { variant: "text", orientation: "vertical" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderBottom: t.vars
                    ? `1px solid rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)`
                    : "1px solid " +
                      ("light" === t.palette.mode
                        ? "rgba(0, 0, 0, 0.23)"
                        : "rgba(255, 255, 255, 0.23)"),
                  [`&.${Bi.disabled}`]: {
                    borderBottom: `1px solid ${
                      (t.vars || t).palette.action.disabled
                    }`,
                  },
                },
              },
            },
            ...Object.entries(t.palette)
              .filter(ci())
              .flatMap((e) => {
                let [n] = e;
                return [
                  {
                    props: { variant: "text", color: n },
                    style: {
                      [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                        borderColor: t.vars
                          ? `rgba(${t.vars.palette[n].mainChannel} / 0.5)`
                          : On(t.palette[n].main, 0.5),
                      },
                    },
                  },
                ];
              }),
            {
              props: { variant: "outlined", orientation: "horizontal" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderRightColor: "transparent",
                  "&:hover": { borderRightColor: "currentColor" },
                },
                [`& .${Bi.lastButton},& .${Bi.middleButton}`]: {
                  marginLeft: -1,
                },
              },
            },
            {
              props: { variant: "outlined", orientation: "vertical" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderBottomColor: "transparent",
                  "&:hover": { borderBottomColor: "currentColor" },
                },
                [`& .${Bi.lastButton},& .${Bi.middleButton}`]: {
                  marginTop: -1,
                },
              },
            },
            {
              props: { variant: "contained", orientation: "horizontal" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderRight: `1px solid ${(t.vars || t).palette.grey[400]}`,
                  [`&.${Bi.disabled}`]: {
                    borderRight: `1px solid ${
                      (t.vars || t).palette.action.disabled
                    }`,
                  },
                },
              },
            },
            {
              props: { variant: "contained", orientation: "vertical" },
              style: {
                [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                  borderBottom: `1px solid ${(t.vars || t).palette.grey[400]}`,
                  [`&.${Bi.disabled}`]: {
                    borderBottom: `1px solid ${
                      (t.vars || t).palette.action.disabled
                    }`,
                  },
                },
              },
            },
            ...Object.entries(t.palette)
              .filter(ci(["dark"]))
              .map((e) => {
                let [n] = e;
                return {
                  props: { variant: "contained", color: n },
                  style: {
                    [`& .${Bi.firstButton},& .${Bi.middleButton}`]: {
                      borderColor: (t.vars || t).palette[n].dark,
                    },
                  },
                };
              }),
          ],
          [`& .${Bi.grouped}`]: {
            minWidth: 40,
            boxShadow: "none",
            props: { variant: "contained" },
            style: { "&:hover": { boxShadow: "none" } },
          },
        };
      })
    ),
    Di = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiButtonGroup" }),
        {
          children: o,
          className: a,
          color: i = "primary",
          component: c = "div",
          disabled: d = !1,
          disableElevation: f = !1,
          disableFocusRipple: p = !1,
          disableRipple: h = !1,
          fullWidth: m = !1,
          orientation: g = "horizontal",
          size: y = "medium",
          variant: v = "outlined",
          ...b
        } = n,
        w = {
          ...n,
          color: i,
          component: c,
          disabled: d,
          disableElevation: f,
          disableFocusRipple: p,
          disableRipple: h,
          fullWidth: m,
          orientation: g,
          size: y,
          variant: v,
        },
        x = ((e) => {
          const {
            classes: t,
            color: n,
            disabled: r,
            disableElevation: o,
            fullWidth: a,
            orientation: i,
            variant: l,
          } = e;
          return s(
            {
              root: [
                "root",
                l,
                i,
                a && "fullWidth",
                o && "disableElevation",
                `color${ta(n)}`,
              ],
              grouped: [
                "grouped",
                `grouped${ta(i)}`,
                `grouped${ta(l)}`,
                `grouped${ta(l)}${ta(i)}`,
                `grouped${ta(l)}${ta(n)}`,
                r && "disabled",
              ],
              firstButton: ["firstButton"],
              lastButton: ["lastButton"],
              middleButton: ["middleButton"],
            },
            Ai,
            t
          );
        })(w),
        S = r.useMemo(
          () => ({
            className: x.grouped,
            color: i,
            disabled: d,
            disableElevation: f,
            disableFocusRipple: p,
            disableRipple: h,
            fullWidth: m,
            size: y,
            variant: v,
          }),
          [i, d, f, p, h, m, y, v, x.grouped]
        ),
        k = (function (e) {
          return r.Children.toArray(e).filter((e) => r.isValidElement(e));
        })(o),
        C = k.length,
        E = (e) => {
          const t = 0 === e,
            n = e === C - 1;
          return t && n
            ? ""
            : t
            ? x.firstButton
            : n
            ? x.lastButton
            : x.middleButton;
        };
      return (0,
      u.jsx)(Fi, { as: c, role: "group", className: l(x.root, a), ref: t, ownerState: w, ...b, children: (0, u.jsx)(Li.Provider, { value: S, children: k.map((e, t) => (0, u.jsx)(ji.Provider, { value: E(t), children: e }, t)) }) });
    }),
    Wi = Di;
  let Vi = 0;
  const Hi = { ...o }.useId;
  const Ui = function (e) {
    if (void 0 !== Hi) {
      const t = Hi();
      return e ?? t;
    }
    return (function (e) {
      const [t, n] = r.useState(e),
        o = e || t;
      return (
        r.useEffect(() => {
          null == t && ((Vi += 1), n(`mui-${Vi}`));
        }, [t]),
        o
      );
    })(e);
  };
  function Ki(e) {
    return To("MuiCircularProgress", e);
  }
  Ro("MuiCircularProgress", [
    "root",
    "determinate",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "svg",
    "circle",
    "circleDeterminate",
    "circleIndeterminate",
    "circleDisableShrink",
  ]);
  const Gi = 44,
    Qi = Ba`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
    qi = Ba`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
    Xi =
      "string" !== typeof Qi
        ? Aa`
        animation: ${Qi} 1.4s linear infinite;
      `
        : null,
    Yi =
      "string" !== typeof qi
        ? Aa`
        animation: ${qi} 1.4s ease-in-out infinite;
      `
        : null,
    Zi = Dr("span", {
      name: "MuiCircularProgress",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, t[n.variant], t[`color${ta(n.color)}`]];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          display: "inline-block",
          variants: [
            {
              props: { variant: "determinate" },
              style: { transition: t.transitions.create("transform") },
            },
            {
              props: { variant: "indeterminate" },
              style: Xi || { animation: `${Qi} 1.4s linear infinite` },
            },
            ...Object.entries(t.palette)
              .filter(ci())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: { color: (t.vars || t).palette[n].main },
                };
              }),
          ],
        };
      })
    ),
    Ji = Dr("svg", {
      name: "MuiCircularProgress",
      slot: "Svg",
      overridesResolver: (e, t) => t.svg,
    })({ display: "block" }),
    el = Dr("circle", {
      name: "MuiCircularProgress",
      slot: "Circle",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.circle,
          t[`circle${ta(n.variant)}`],
          n.disableShrink && t.circleDisableShrink,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          stroke: "currentColor",
          variants: [
            {
              props: { variant: "determinate" },
              style: { transition: t.transitions.create("stroke-dashoffset") },
            },
            {
              props: { variant: "indeterminate" },
              style: { strokeDasharray: "80px, 200px", strokeDashoffset: 0 },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "indeterminate" === t.variant && !t.disableShrink;
              },
              style: Yi || { animation: `${qi} 1.4s ease-in-out infinite` },
            },
          ],
        };
      })
    ),
    tl = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiCircularProgress" }),
        {
          className: r,
          color: o = "primary",
          disableShrink: a = !1,
          size: i = 40,
          style: c,
          thickness: d = 3.6,
          value: f = 0,
          variant: p = "indeterminate",
          ...h
        } = n,
        m = {
          ...n,
          color: o,
          disableShrink: a,
          size: i,
          thickness: d,
          value: f,
          variant: p,
        },
        g = ((e) => {
          const { classes: t, variant: n, color: r, disableShrink: o } = e;
          return s(
            {
              root: ["root", n, `color${ta(r)}`],
              svg: ["svg"],
              circle: ["circle", `circle${ta(n)}`, o && "circleDisableShrink"],
            },
            Ki,
            t
          );
        })(m),
        y = {},
        v = {},
        b = {};
      if ("determinate" === p) {
        const e = 2 * Math.PI * ((Gi - d) / 2);
        (y.strokeDasharray = e.toFixed(3)),
          (b["aria-valuenow"] = Math.round(f)),
          (y.strokeDashoffset = `${(((100 - f) / 100) * e).toFixed(3)}px`),
          (v.transform = "rotate(-90deg)");
      }
      return (0,
      u.jsx)(Zi, { className: l(g.root, r), style: { width: i, height: i, ...v, ...c }, ownerState: m, ref: t, role: "progressbar", ...b, ...h, children: (0, u.jsx)(Ji, { className: g.svg, ownerState: m, viewBox: "22 22 44 44", children: (0, u.jsx)(el, { className: g.circle, style: y, ownerState: m, cx: Gi, cy: Gi, r: (Gi - d) / 2, fill: "none", strokeWidth: d }) }) });
    }),
    nl = tl;
  function rl(e) {
    return To("MuiButton", e);
  }
  const ol = Ro("MuiButton", [
      "root",
      "text",
      "textInherit",
      "textPrimary",
      "textSecondary",
      "textSuccess",
      "textError",
      "textInfo",
      "textWarning",
      "outlined",
      "outlinedInherit",
      "outlinedPrimary",
      "outlinedSecondary",
      "outlinedSuccess",
      "outlinedError",
      "outlinedInfo",
      "outlinedWarning",
      "contained",
      "containedInherit",
      "containedPrimary",
      "containedSecondary",
      "containedSuccess",
      "containedError",
      "containedInfo",
      "containedWarning",
      "disableElevation",
      "focusVisible",
      "disabled",
      "colorInherit",
      "colorPrimary",
      "colorSecondary",
      "colorSuccess",
      "colorError",
      "colorInfo",
      "colorWarning",
      "textSizeSmall",
      "textSizeMedium",
      "textSizeLarge",
      "outlinedSizeSmall",
      "outlinedSizeMedium",
      "outlinedSizeLarge",
      "containedSizeSmall",
      "containedSizeMedium",
      "containedSizeLarge",
      "sizeMedium",
      "sizeSmall",
      "sizeLarge",
      "fullWidth",
      "startIcon",
      "endIcon",
      "icon",
      "iconSizeSmall",
      "iconSizeMedium",
      "iconSizeLarge",
      "loading",
      "loadingWrapper",
      "loadingIconPlaceholder",
      "loadingIndicator",
      "loadingPositionCenter",
      "loadingPositionStart",
      "loadingPositionEnd",
    ]),
    al = [
      {
        props: { size: "small" },
        style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
      },
      {
        props: { size: "medium" },
        style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
      },
      {
        props: { size: "large" },
        style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
      },
    ],
    il = Dr(Xa, {
      shouldForwardProp: (e) => jr(e) || "classes" === e,
      name: "MuiButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${ta(n.color)}`],
          t[`size${ta(n.size)}`],
          t[`${n.variant}Size${ta(n.size)}`],
          "inherit" === n.color && t.colorInherit,
          n.disableElevation && t.disableElevation,
          n.fullWidth && t.fullWidth,
          n.loading && t.loading,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        const n =
            "light" === t.palette.mode
              ? t.palette.grey[300]
              : t.palette.grey[800],
          r =
            "light" === t.palette.mode
              ? t.palette.grey.A100
              : t.palette.grey[700];
        return {
          ...t.typography.button,
          minWidth: 64,
          padding: "6px 16px",
          border: 0,
          borderRadius: (t.vars || t).shape.borderRadius,
          transition: t.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: t.transitions.duration.short }
          ),
          "&:hover": { textDecoration: "none" },
          [`&.${ol.disabled}`]: {
            color: (t.vars || t).palette.action.disabled,
          },
          variants: [
            {
              props: { variant: "contained" },
              style: {
                color: "var(--variant-containedColor)",
                backgroundColor: "var(--variant-containedBg)",
                boxShadow: (t.vars || t).shadows[2],
                "&:hover": {
                  boxShadow: (t.vars || t).shadows[4],
                  "@media (hover: none)": {
                    boxShadow: (t.vars || t).shadows[2],
                  },
                },
                "&:active": { boxShadow: (t.vars || t).shadows[8] },
                [`&.${ol.focusVisible}`]: {
                  boxShadow: (t.vars || t).shadows[6],
                },
                [`&.${ol.disabled}`]: {
                  color: (t.vars || t).palette.action.disabled,
                  boxShadow: (t.vars || t).shadows[0],
                  backgroundColor: (t.vars || t).palette.action
                    .disabledBackground,
                },
              },
            },
            {
              props: { variant: "outlined" },
              style: {
                padding: "5px 15px",
                border: "1px solid currentColor",
                borderColor: "var(--variant-outlinedBorder, currentColor)",
                backgroundColor: "var(--variant-outlinedBg)",
                color: "var(--variant-outlinedColor)",
                [`&.${ol.disabled}`]: {
                  border: `1px solid ${
                    (t.vars || t).palette.action.disabledBackground
                  }`,
                },
              },
            },
            {
              props: { variant: "text" },
              style: {
                padding: "6px 8px",
                color: "var(--variant-textColor)",
                backgroundColor: "var(--variant-textBg)",
              },
            },
            ...Object.entries(t.palette)
              .filter(ci())
              .map((e) => {
                let [n] = e;
                return {
                  props: { color: n },
                  style: {
                    "--variant-textColor": (t.vars || t).palette[n].main,
                    "--variant-outlinedColor": (t.vars || t).palette[n].main,
                    "--variant-outlinedBorder": t.vars
                      ? `rgba(${t.vars.palette[n].mainChannel} / 0.5)`
                      : On(t.palette[n].main, 0.5),
                    "--variant-containedColor": (t.vars || t).palette[n]
                      .contrastText,
                    "--variant-containedBg": (t.vars || t).palette[n].main,
                    "@media (hover: hover)": {
                      "&:hover": {
                        "--variant-containedBg": (t.vars || t).palette[n].dark,
                        "--variant-textBg": t.vars
                          ? `rgba(${t.vars.palette[n].mainChannel} / ${t.vars.palette.action.hoverOpacity})`
                          : On(
                              t.palette[n].main,
                              t.palette.action.hoverOpacity
                            ),
                        "--variant-outlinedBorder": (t.vars || t).palette[n]
                          .main,
                        "--variant-outlinedBg": t.vars
                          ? `rgba(${t.vars.palette[n].mainChannel} / ${t.vars.palette.action.hoverOpacity})`
                          : On(
                              t.palette[n].main,
                              t.palette.action.hoverOpacity
                            ),
                      },
                    },
                  },
                };
              }),
            {
              props: { color: "inherit" },
              style: {
                color: "inherit",
                borderColor: "currentColor",
                "--variant-containedBg": t.vars
                  ? t.vars.palette.Button.inheritContainedBg
                  : n,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": t.vars
                      ? t.vars.palette.Button.inheritContainedHoverBg
                      : r,
                    "--variant-textBg": t.vars
                      ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`
                      : On(
                          t.palette.text.primary,
                          t.palette.action.hoverOpacity
                        ),
                    "--variant-outlinedBg": t.vars
                      ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`
                      : On(
                          t.palette.text.primary,
                          t.palette.action.hoverOpacity
                        ),
                  },
                },
              },
            },
            {
              props: { size: "small", variant: "text" },
              style: { padding: "4px 5px", fontSize: t.typography.pxToRem(13) },
            },
            {
              props: { size: "large", variant: "text" },
              style: {
                padding: "8px 11px",
                fontSize: t.typography.pxToRem(15),
              },
            },
            {
              props: { size: "small", variant: "outlined" },
              style: { padding: "3px 9px", fontSize: t.typography.pxToRem(13) },
            },
            {
              props: { size: "large", variant: "outlined" },
              style: {
                padding: "7px 21px",
                fontSize: t.typography.pxToRem(15),
              },
            },
            {
              props: { size: "small", variant: "contained" },
              style: {
                padding: "4px 10px",
                fontSize: t.typography.pxToRem(13),
              },
            },
            {
              props: { size: "large", variant: "contained" },
              style: {
                padding: "8px 22px",
                fontSize: t.typography.pxToRem(15),
              },
            },
            {
              props: { disableElevation: !0 },
              style: {
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                [`&.${ol.focusVisible}`]: { boxShadow: "none" },
                "&:active": { boxShadow: "none" },
                [`&.${ol.disabled}`]: { boxShadow: "none" },
              },
            },
            { props: { fullWidth: !0 }, style: { width: "100%" } },
            {
              props: { loadingPosition: "center" },
              style: {
                transition: t.transitions.create(
                  ["background-color", "box-shadow", "border-color"],
                  { duration: t.transitions.duration.short }
                ),
                [`&.${ol.loading}`]: { color: "transparent" },
              },
            },
          ],
        };
      })
    ),
    ll = Dr("span", {
      name: "MuiButton",
      slot: "StartIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.startIcon,
          n.loading && t.startIconLoadingStart,
          t[`iconSize${ta(n.size)}`],
        ];
      },
    })((e) => {
      let { theme: t } = e;
      return {
        display: "inherit",
        marginRight: 8,
        marginLeft: -4,
        variants: [
          { props: { size: "small" }, style: { marginLeft: -2 } },
          {
            props: { loadingPosition: "start", loading: !0 },
            style: {
              transition: t.transitions.create(["opacity"], {
                duration: t.transitions.duration.short,
              }),
              opacity: 0,
            },
          },
          {
            props: { loadingPosition: "start", loading: !0, fullWidth: !0 },
            style: { marginRight: -8 },
          },
          ...al,
        ],
      };
    }),
    sl = Dr("span", {
      name: "MuiButton",
      slot: "EndIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.endIcon,
          n.loading && t.endIconLoadingEnd,
          t[`iconSize${ta(n.size)}`],
        ];
      },
    })((e) => {
      let { theme: t } = e;
      return {
        display: "inherit",
        marginRight: -4,
        marginLeft: 8,
        variants: [
          { props: { size: "small" }, style: { marginRight: -2 } },
          {
            props: { loadingPosition: "end", loading: !0 },
            style: {
              transition: t.transitions.create(["opacity"], {
                duration: t.transitions.duration.short,
              }),
              opacity: 0,
            },
          },
          {
            props: { loadingPosition: "end", loading: !0, fullWidth: !0 },
            style: { marginLeft: -8 },
          },
          ...al,
        ],
      };
    }),
    ul = Dr("span", {
      name: "MuiButton",
      slot: "LoadingIndicator",
      overridesResolver: (e, t) => t.loadingIndicator,
    })((e) => {
      let { theme: t } = e;
      return {
        display: "none",
        position: "absolute",
        visibility: "visible",
        variants: [
          { props: { loading: !0 }, style: { display: "flex" } },
          { props: { loadingPosition: "start" }, style: { left: 14 } },
          {
            props: { loadingPosition: "start", size: "small" },
            style: { left: 10 },
          },
          {
            props: { variant: "text", loadingPosition: "start" },
            style: { left: 6 },
          },
          {
            props: { loadingPosition: "center" },
            style: {
              left: "50%",
              transform: "translate(-50%)",
              color: (t.vars || t).palette.action.disabled,
            },
          },
          { props: { loadingPosition: "end" }, style: { right: 14 } },
          {
            props: { loadingPosition: "end", size: "small" },
            style: { right: 10 },
          },
          {
            props: { variant: "text", loadingPosition: "end" },
            style: { right: 6 },
          },
          {
            props: { loadingPosition: "start", fullWidth: !0 },
            style: { position: "relative", left: -10 },
          },
          {
            props: { loadingPosition: "end", fullWidth: !0 },
            style: { position: "relative", right: -10 },
          },
        ],
      };
    }),
    cl = Dr("span", {
      name: "MuiButton",
      slot: "LoadingIconPlaceholder",
      overridesResolver: (e, t) => t.loadingIconPlaceholder,
    })({ display: "inline-block", width: "1em", height: "1em" }),
    dl = r.forwardRef(function (e, t) {
      const n = r.useContext(Li),
        o = r.useContext(ji),
        a = Gr({ props: Hr(n, e), name: "MuiButton" }),
        {
          children: i,
          color: c = "primary",
          component: d = "button",
          className: f,
          disabled: p = !1,
          disableElevation: h = !1,
          disableFocusRipple: m = !1,
          endIcon: g,
          focusVisibleClassName: y,
          fullWidth: v = !1,
          id: b,
          loading: w = null,
          loadingIndicator: x,
          loadingPosition: S = "center",
          size: k = "medium",
          startIcon: C,
          type: E,
          variant: $ = "text",
          ...P
        } = a,
        T = Ui(b),
        R =
          x ??
          (0, u.jsx)(nl, { "aria-labelledby": T, color: "inherit", size: 16 }),
        M = {
          ...a,
          color: c,
          component: d,
          disabled: p,
          disableElevation: h,
          disableFocusRipple: m,
          fullWidth: v,
          loading: w,
          loadingIndicator: R,
          loadingPosition: S,
          size: k,
          type: E,
          variant: $,
        },
        N = ((e) => {
          const {
              color: t,
              disableElevation: n,
              fullWidth: r,
              size: o,
              variant: a,
              loading: i,
              loadingPosition: l,
              classes: u,
            } = e,
            c = s(
              {
                root: [
                  "root",
                  i && "loading",
                  a,
                  `${a}${ta(t)}`,
                  `size${ta(o)}`,
                  `${a}Size${ta(o)}`,
                  `color${ta(t)}`,
                  n && "disableElevation",
                  r && "fullWidth",
                  i && `loadingPosition${ta(l)}`,
                ],
                startIcon: ["icon", "startIcon", `iconSize${ta(o)}`],
                endIcon: ["icon", "endIcon", `iconSize${ta(o)}`],
                loadingIndicator: ["loadingIndicator"],
                loadingWrapper: ["loadingWrapper"],
              },
              rl,
              u
            );
          return { ...u, ...c };
        })(M),
        _ =
          (C || (w && "start" === S)) &&
          (0, u.jsx)(ll, {
            className: N.startIcon,
            ownerState: M,
            children:
              C ||
              (0, u.jsx)(cl, {
                className: N.loadingIconPlaceholder,
                ownerState: M,
              }),
          }),
        z =
          (g || (w && "end" === S)) &&
          (0, u.jsx)(sl, {
            className: N.endIcon,
            ownerState: M,
            children:
              g ||
              (0, u.jsx)(cl, {
                className: N.loadingIconPlaceholder,
                ownerState: M,
              }),
          }),
        O = o || "",
        I =
          "boolean" === typeof w
            ? (0, u.jsx)("span", {
                className: N.loadingWrapper,
                style: { display: "contents" },
                children:
                  w &&
                  (0, u.jsx)(ul, {
                    className: N.loadingIndicator,
                    ownerState: M,
                    children: R,
                  }),
              })
            : null;
      return (0,
      u.jsxs)(il, { ownerState: M, className: l(n.className, N.root, f, O), component: d, disabled: p || w, focusRipple: !m, focusVisibleClassName: l(N.focusVisible, y), ref: t, type: E, id: w ? T : b, ...P, classes: N, children: [_, "end" !== S && I, i, "end" === S && I, z] });
    }),
    fl = dl;
  function pl(e) {
    return To("MuiCard", e);
  }
  Ro("MuiCard", ["root"]);
  const hl = Dr(ea, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ overflow: "hidden" }),
    ml = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiCard" }),
        { className: r, raised: o = !1, ...a } = n,
        i = { ...n, raised: o },
        c = ((e) => {
          const { classes: t } = e;
          return s({ root: ["root"] }, pl, t);
        })(i);
      return (0,
      u.jsx)(hl, { className: l(c.root, r), elevation: o ? 8 : void 0, ref: t, ownerState: i, ...a });
    });
  function gl(e) {
    return To("MuiCardContent", e);
  }
  Ro("MuiCardContent", ["root"]);
  const yl = Dr("div", {
      name: "MuiCardContent",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ padding: 16, "&:last-child": { paddingBottom: 24 } }),
    vl = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiCardContent" }),
        { className: r, component: o = "div", ...a } = n,
        i = { ...n, component: o },
        c = ((e) => {
          const { classes: t } = e;
          return s({ root: ["root"] }, gl, t);
        })(i);
      return (0,
      u.jsx)(yl, { as: o, className: l(c.root, r), ownerState: i, ref: t, ...a });
    }),
    bl = Dr("div", {
      name: "MuiDivider",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.absolute && t.absolute,
          t[n.variant],
          n.light && t.light,
          "vertical" === n.orientation && t.vertical,
          n.flexItem && t.flexItem,
          n.children && t.withChildren,
          n.children && "vertical" === n.orientation && t.withChildrenVertical,
          "right" === n.textAlign &&
            "vertical" !== n.orientation &&
            t.textAlignRight,
          "left" === n.textAlign &&
            "vertical" !== n.orientation &&
            t.textAlignLeft,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: "solid",
          borderColor: (t.vars || t).palette.divider,
          borderBottomWidth: "thin",
          variants: [
            {
              props: { absolute: !0 },
              style: {
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
              },
            },
            {
              props: { light: !0 },
              style: {
                borderColor: t.vars
                  ? `rgba(${t.vars.palette.dividerChannel} / 0.08)`
                  : On(t.palette.divider, 0.08),
              },
            },
            { props: { variant: "inset" }, style: { marginLeft: 72 } },
            {
              props: { variant: "middle", orientation: "horizontal" },
              style: { marginLeft: t.spacing(2), marginRight: t.spacing(2) },
            },
            {
              props: { variant: "middle", orientation: "vertical" },
              style: { marginTop: t.spacing(1), marginBottom: t.spacing(1) },
            },
            {
              props: { orientation: "vertical" },
              style: {
                height: "100%",
                borderBottomWidth: 0,
                borderRightWidth: "thin",
              },
            },
            {
              props: { flexItem: !0 },
              style: { alignSelf: "stretch", height: "auto" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !!t.children;
              },
              style: {
                display: "flex",
                textAlign: "center",
                border: 0,
                borderTopStyle: "solid",
                borderLeftStyle: "solid",
                "&::before, &::after": { content: '""', alignSelf: "center" },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.children && "vertical" !== t.orientation;
              },
              style: {
                "&::before, &::after": {
                  width: "100%",
                  borderTop: `thin solid ${(t.vars || t).palette.divider}`,
                  borderTopStyle: "inherit",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "vertical" === t.orientation && t.children;
              },
              style: {
                flexDirection: "column",
                "&::before, &::after": {
                  height: "100%",
                  borderLeft: `thin solid ${(t.vars || t).palette.divider}`,
                  borderLeftStyle: "inherit",
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "right" === t.textAlign && "vertical" !== t.orientation;
              },
              style: {
                "&::before": { width: "90%" },
                "&::after": { width: "10%" },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return "left" === t.textAlign && "vertical" !== t.orientation;
              },
              style: {
                "&::before": { width: "10%" },
                "&::after": { width: "90%" },
              },
            },
          ],
        };
      })
    ),
    wl = Dr("span", {
      name: "MuiDivider",
      slot: "Wrapper",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.wrapper, "vertical" === n.orientation && t.wrapperVertical];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          display: "inline-block",
          paddingLeft: `calc(${t.spacing(1)} * 1.2)`,
          paddingRight: `calc(${t.spacing(1)} * 1.2)`,
          whiteSpace: "nowrap",
          variants: [
            {
              props: { orientation: "vertical" },
              style: {
                paddingTop: `calc(${t.spacing(1)} * 1.2)`,
                paddingBottom: `calc(${t.spacing(1)} * 1.2)`,
              },
            },
          ],
        };
      })
    ),
    xl = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiDivider" }),
        {
          absolute: r = !1,
          children: o,
          className: a,
          orientation: i = "horizontal",
          component: c = o || "vertical" === i ? "div" : "hr",
          flexItem: d = !1,
          light: f = !1,
          role: p = "hr" !== c ? "separator" : void 0,
          textAlign: h = "center",
          variant: m = "fullWidth",
          ...g
        } = n,
        y = {
          ...n,
          absolute: r,
          component: c,
          flexItem: d,
          light: f,
          orientation: i,
          role: p,
          textAlign: h,
          variant: m,
        },
        v = ((e) => {
          const {
            absolute: t,
            children: n,
            classes: r,
            flexItem: o,
            light: a,
            orientation: i,
            textAlign: l,
            variant: u,
          } = e;
          return s(
            {
              root: [
                "root",
                t && "absolute",
                u,
                a && "light",
                "vertical" === i && "vertical",
                o && "flexItem",
                n && "withChildren",
                n && "vertical" === i && "withChildrenVertical",
                "right" === l && "vertical" !== i && "textAlignRight",
                "left" === l && "vertical" !== i && "textAlignLeft",
              ],
              wrapper: ["wrapper", "vertical" === i && "wrapperVertical"],
            },
            Ya,
            r
          );
        })(y);
      return (0,
      u.jsx)(bl, { as: c, className: l(v.root, a), role: p, ref: t, ownerState: y, "aria-orientation": "separator" !== p || ("hr" === c && "vertical" !== i) ? void 0 : i, ...g, children: o ? (0, u.jsx)(wl, { className: v.wrapper, ownerState: y, children: o }) : null });
    });
  xl && (xl.muiSkipListHighlight = !0);
  const Sl = xl,
    kl = la(
      (0, u.jsx)("path", {
        d: "M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7",
      }),
      "Lightbulb"
    ),
    Cl = la(
      (0, u.jsx)("path", { d: "m6 18 8.5-6L6 6zM16 6v12h2V6z" }),
      "SkipNext"
    ),
    El = (e) => {
      let {
        answerVisible: t,
        calculation: n,
        hintVisible: r,
        newCalculation: o,
        toggleAnswerVisible: a,
        toggleHintVisible: i,
      } = e;
      return (0, u.jsxs)("div", {
        style: { paddingTop: 30 },
        children: [
          (0, u.jsxs)(Wi, {
            color: "secondary",
            children: [
              (0, u.jsx)(fl, {
                variant: "outlined",
                startIcon: (0, u.jsx)(kl, {}),
                onClick: () => i(!r),
                children: "Hint",
              }),
              (0, u.jsx)(fl, {
                variant: "outlined",
                onClick: a,
                children: "Answer",
              }),
              (0, u.jsx)(fl, {
                variant: "outlined",
                endIcon: (0, u.jsx)(Cl, {}),
                onClick: o,
                children: "Next",
              }),
            ],
          }),
          (0, u.jsx)(ml, {
            variant: "outlined",
            sx: { marginTop: 2 },
            children: (0, u.jsxs)(vl, {
              children: [
                (0, u.jsx)(gi, {
                  variant: "h5",
                  component: "h2",
                  gutterBottom: !0,
                  children: n
                    ? (0, u.jsx)("span", {
                        dangerouslySetInnerHTML: { __html: n.question },
                      })
                    : null,
                }),
                r
                  ? (0, u.jsx)(gi, {
                      variant: "subtitle2",
                      gutterBottom: !0,
                      sx: { color: "text.secondary" },
                      children: n
                        ? (0, u.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: n.hint },
                          })
                        : null,
                    })
                  : null,
                t
                  ? (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsx)(Sl, {
                          sx: { marginTop: 2, marginBottom: 2 },
                        }),
                        (0, u.jsx)(gi, {
                          variant: "h4",
                          color: "error",
                          gutterBottom: !0,
                          children: n
                            ? (0, u.jsx)("span", {
                                dangerouslySetInnerHTML: { __html: n.answer },
                              })
                            : null,
                        }),
                        (0, u.jsx)(gi, {
                          variant: "body2",
                          sx: { color: "text.secondary" },
                          gutterBottom: !0,
                          children: n
                            ? (0, u.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html: n.explanation,
                                },
                              })
                            : null,
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          }),
        ],
      });
    },
    $l = (e) => {
      let {
        answerVisible: t,
        calculation: n,
        hintVisible: o,
        newCalculation: a,
        toggleAnswerVisible: i,
        toggleHintVisible: l,
      } = e;
      const [s, c] = (0, r.useState)(Ii(n));
      return (
        (0, r.useEffect)(() => {
          c(Ii(n));
        }, [n]),
        (0, u.jsxs)("div", {
          style: { paddingTop: 30 },
          children: [
            (0, u.jsxs)(Wi, {
              color: "secondary",
              children: [
                (0, u.jsx)(fl, {
                  variant: "outlined",
                  startIcon: (0, u.jsx)(kl, {}),
                  onClick: () => l(!o),
                  children: "Hint",
                }),
                (0, u.jsx)(fl, {
                  variant: "outlined",
                  onClick: i,
                  children: "Answer",
                }),
                (0, u.jsx)(fl, {
                  variant: "outlined",
                  endIcon: (0, u.jsx)(Cl, {}),
                  onClick: a,
                  children: "Next",
                }),
              ],
            }),
            (0, u.jsx)(ml, {
              variant: "outlined",
              sx: { marginTop: 2 },
              children: (0, u.jsxs)(vl, {
                children: [
                  (0, u.jsx)(gi, {
                    variant: "h5",
                    component: "h2",
                    gutterBottom: !0,
                    children: s
                      ? (0, u.jsx)("span", {
                          dangerouslySetInnerHTML: {
                            __html: s.advancedQuestion,
                          },
                        })
                      : null,
                  }),
                  o
                    ? (0, u.jsx)(gi, {
                        variant: "subtitle2",
                        gutterBottom: !0,
                        sx: { color: "text.secondary" },
                        children: s
                          ? (0, u.jsx)("span", {
                              dangerouslySetInnerHTML: {
                                __html: s.advancedHint,
                              },
                            })
                          : null,
                      })
                    : null,
                  t
                    ? (0, u.jsxs)(u.Fragment, {
                        children: [
                          (0, u.jsx)(Sl, {
                            sx: { marginTop: 2, marginBottom: 2 },
                          }),
                          (0, u.jsx)(gi, {
                            variant: "h4",
                            color: "error",
                            gutterBottom: !0,
                            children: s
                              ? (0, u.jsx)("span", {
                                  dangerouslySetInnerHTML: {
                                    __html: s.advancedAnswer,
                                  },
                                })
                              : null,
                          }),
                          (0, u.jsx)(gi, {
                            variant: "body2",
                            sx: { color: "text.secondary" },
                            gutterBottom: !0,
                            children: s
                              ? (0, u.jsx)("span", {
                                  dangerouslySetInnerHTML: {
                                    __html: s.advancedExplanation,
                                  },
                                })
                              : null,
                          }),
                        ],
                      })
                    : null,
                ],
              }),
            }),
          ],
        })
      );
    };
  const Pl = function (e) {
    const {
        elementType: t,
        externalSlotProps: n,
        ownerState: r,
        skipResolvingSlotProps: o = !1,
        ...a
      } = e,
      i = o ? {} : Xr(n, r),
      { props: l, internalRef: s } = Jr({ ...a, externalSlotProps: i }),
      u = p(s, i?.ref, e.additionalProps?.ref);
    return qr(t, { ...l, ref: u }, r);
  };
  function Tl(e) {
    return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
  }
  const Rl = {
    width: 99,
    height: 99,
    position: "absolute",
    top: -9999,
    overflow: "scroll",
  };
  const Ml = la(
      (0, u.jsx)("path", {
        d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z",
      }),
      "KeyboardArrowLeft"
    ),
    Nl = la(
      (0, u.jsx)("path", {
        d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z",
      }),
      "KeyboardArrowRight"
    );
  function _l(e) {
    return To("MuiTabScrollButton", e);
  }
  const zl = Ro("MuiTabScrollButton", [
      "root",
      "vertical",
      "horizontal",
      "disabled",
    ]),
    Ol = Dr(Xa, {
      name: "MuiTabScrollButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.orientation && t[n.orientation]];
      },
    })({
      width: 40,
      flexShrink: 0,
      opacity: 0.8,
      [`&.${zl.disabled}`]: { opacity: 0 },
      variants: [
        {
          props: { orientation: "vertical" },
          style: {
            width: "100%",
            height: 40,
            "& svg": { transform: "var(--TabScrollButton-svgRotate)" },
          },
        },
      ],
    }),
    Il = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiTabScrollButton" }),
        {
          className: r,
          slots: o = {},
          slotProps: a = {},
          direction: i,
          orientation: c,
          disabled: f,
          ...p
        } = n,
        h = d(),
        m = { isRtl: h, ...n },
        g = ((e) => {
          const { classes: t, orientation: n, disabled: r } = e;
          return s({ root: ["root", n, r && "disabled"] }, _l, t);
        })(m),
        y = o.StartScrollButtonIcon ?? Ml,
        v = o.EndScrollButtonIcon ?? Nl,
        b = Pl({
          elementType: y,
          externalSlotProps: a.startScrollButtonIcon,
          additionalProps: { fontSize: "small" },
          ownerState: m,
        }),
        w = Pl({
          elementType: v,
          externalSlotProps: a.endScrollButtonIcon,
          additionalProps: { fontSize: "small" },
          ownerState: m,
        });
      return (0,
      u.jsx)(Ol, { component: "div", className: l(g.root, r), ref: t, role: null, ownerState: m, tabIndex: null, ...p, style: { ...p.style, ...("vertical" === c && { "--TabScrollButton-svgRotate": `rotate(${h ? -90 : 90}deg)` }) }, children: "left" === i ? (0, u.jsx)(y, { ...b }) : (0, u.jsx)(v, { ...w }) });
    });
  function Al(e) {
    return To("MuiTabs", e);
  }
  const Bl = Ro("MuiTabs", [
      "root",
      "vertical",
      "flexContainer",
      "flexContainerVertical",
      "centered",
      "scroller",
      "fixed",
      "scrollableX",
      "scrollableY",
      "hideScrollbar",
      "scrollButtons",
      "scrollButtonsHideMobile",
      "indicator",
    ]),
    Ll = (e, t) =>
      e === t
        ? e.firstChild
        : t && t.nextElementSibling
        ? t.nextElementSibling
        : e.firstChild,
    jl = (e, t) =>
      e === t
        ? e.lastChild
        : t && t.previousElementSibling
        ? t.previousElementSibling
        : e.lastChild,
    Fl = (e, t, n) => {
      let r = !1,
        o = n(e, t);
      for (; o; ) {
        if (o === e.firstChild) {
          if (r) return;
          r = !0;
        }
        const t = o.disabled || "true" === o.getAttribute("aria-disabled");
        if (o.hasAttribute("tabindex") && !t) return void o.focus();
        o = n(e, o);
      }
    },
    Dl = Dr("div", {
      name: "MuiTabs",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${Bl.scrollButtons}`]: t.scrollButtons },
          {
            [`& .${Bl.scrollButtons}`]:
              n.scrollButtonsHideMobile && t.scrollButtonsHideMobile,
          },
          t.root,
          n.vertical && t.vertical,
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          overflow: "hidden",
          minHeight: 48,
          WebkitOverflowScrolling: "touch",
          display: "flex",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.vertical;
              },
              style: { flexDirection: "column" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.scrollButtonsHideMobile;
              },
              style: {
                [`& .${Bl.scrollButtons}`]: {
                  [t.breakpoints.down("sm")]: { display: "none" },
                },
              },
            },
          ],
        };
      })
    ),
    Wl = Dr("div", {
      name: "MuiTabs",
      slot: "Scroller",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.scroller,
          n.fixed && t.fixed,
          n.hideScrollbar && t.hideScrollbar,
          n.scrollableX && t.scrollableX,
          n.scrollableY && t.scrollableY,
        ];
      },
    })({
      position: "relative",
      display: "inline-block",
      flex: "1 1 auto",
      whiteSpace: "nowrap",
      variants: [
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.fixed;
          },
          style: { overflowX: "hidden", width: "100%" },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.hideScrollbar;
          },
          style: {
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.scrollableX;
          },
          style: { overflowX: "auto", overflowY: "hidden" },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.scrollableY;
          },
          style: { overflowY: "auto", overflowX: "hidden" },
        },
      ],
    }),
    Vl = Dr("div", {
      name: "MuiTabs",
      slot: "FlexContainer",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.flexContainer,
          n.vertical && t.flexContainerVertical,
          n.centered && t.centered,
        ];
      },
    })({
      display: "flex",
      variants: [
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.vertical;
          },
          style: { flexDirection: "column" },
        },
        {
          props: (e) => {
            let { ownerState: t } = e;
            return t.centered;
          },
          style: { justifyContent: "center" },
        },
      ],
    }),
    Hl = Dr("span", {
      name: "MuiTabs",
      slot: "Indicator",
      overridesResolver: (e, t) => t.indicator,
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          position: "absolute",
          height: 2,
          bottom: 0,
          width: "100%",
          transition: t.transitions.create(),
          variants: [
            {
              props: { indicatorColor: "primary" },
              style: { backgroundColor: (t.vars || t).palette.primary.main },
            },
            {
              props: { indicatorColor: "secondary" },
              style: { backgroundColor: (t.vars || t).palette.secondary.main },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.vertical;
              },
              style: { height: "100%", width: 2, right: 0 },
            },
          ],
        };
      })
    ),
    Ul = Dr(function (e) {
      const { onChange: t, ...n } = e,
        o = r.useRef(),
        a = r.useRef(null),
        i = () => {
          o.current = a.current.offsetHeight - a.current.clientHeight;
        };
      return (
        ma(() => {
          const e = Xo(() => {
              const e = o.current;
              i(), e !== o.current && t(o.current);
            }),
            n = Yo(a.current);
          return (
            n.addEventListener("resize", e),
            () => {
              e.clear(), n.removeEventListener("resize", e);
            }
          );
        }, [t]),
        r.useEffect(() => {
          i(), t(o.current);
        }, [t]),
        (0, u.jsx)("div", { style: Rl, ...n, ref: a })
      );
    })({
      overflowX: "auto",
      overflowY: "hidden",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" },
    }),
    Kl = {};
  const Gl = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiTabs" }),
        o = vo(),
        a = d(),
        {
          "aria-label": i,
          "aria-labelledby": c,
          action: f,
          centered: p = !1,
          children: h,
          className: m,
          component: g = "div",
          allowScrollButtonsMobile: y = !1,
          indicatorColor: v = "primary",
          onChange: b,
          orientation: w = "horizontal",
          ScrollButtonComponent: x = Il,
          scrollButtons: S = "auto",
          selectionFollowsFocus: k,
          slots: C = {},
          slotProps: E = {},
          TabIndicatorProps: $ = {},
          TabScrollButtonProps: P = {},
          textColor: T = "primary",
          value: R,
          variant: M = "standard",
          visibleScrollbar: N = !1,
          ..._
        } = n,
        z = "scrollable" === M,
        O = "vertical" === w,
        I = O ? "scrollTop" : "scrollLeft",
        A = O ? "top" : "left",
        B = O ? "bottom" : "right",
        L = O ? "clientHeight" : "clientWidth",
        j = O ? "height" : "width",
        F = {
          ...n,
          component: g,
          allowScrollButtonsMobile: y,
          indicatorColor: v,
          orientation: w,
          vertical: O,
          scrollButtons: S,
          textColor: T,
          variant: M,
          visibleScrollbar: N,
          fixed: !z,
          hideScrollbar: z && !N,
          scrollableX: z && !O,
          scrollableY: z && O,
          centered: p && !z,
          scrollButtonsHideMobile: !y,
        },
        D = ((e) => {
          const {
            vertical: t,
            fixed: n,
            hideScrollbar: r,
            scrollableX: o,
            scrollableY: a,
            centered: i,
            scrollButtonsHideMobile: l,
            classes: u,
          } = e;
          return s(
            {
              root: ["root", t && "vertical"],
              scroller: [
                "scroller",
                n && "fixed",
                r && "hideScrollbar",
                o && "scrollableX",
                a && "scrollableY",
              ],
              flexContainer: [
                "flexContainer",
                t && "flexContainerVertical",
                i && "centered",
              ],
              indicator: ["indicator"],
              scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
              scrollableX: [o && "scrollableX"],
              hideScrollbar: [r && "hideScrollbar"],
            },
            Al,
            u
          );
        })(F),
        W = Pl({
          elementType: C.StartScrollButtonIcon,
          externalSlotProps: E.startScrollButtonIcon,
          ownerState: F,
        }),
        V = Pl({
          elementType: C.EndScrollButtonIcon,
          externalSlotProps: E.endScrollButtonIcon,
          ownerState: F,
        });
      const [H, U] = r.useState(!1),
        [K, G] = r.useState(Kl),
        [Q, q] = r.useState(!1),
        [X, Y] = r.useState(!1),
        [Z, J] = r.useState(!1),
        [ee, te] = r.useState({ overflow: "hidden", scrollbarWidth: 0 }),
        ne = new Map(),
        re = r.useRef(null),
        oe = r.useRef(null),
        ae = () => {
          const e = re.current;
          let t, n;
          if (e) {
            const n = e.getBoundingClientRect();
            t = {
              clientWidth: e.clientWidth,
              scrollLeft: e.scrollLeft,
              scrollTop: e.scrollTop,
              scrollWidth: e.scrollWidth,
              top: n.top,
              bottom: n.bottom,
              left: n.left,
              right: n.right,
            };
          }
          if (e && !1 !== R) {
            const e = oe.current.children;
            if (e.length > 0) {
              const t = e[ne.get(R)];
              0, (n = t ? t.getBoundingClientRect() : null);
            }
          }
          return { tabsMeta: t, tabMeta: n };
        },
        ie = Sa(() => {
          const { tabsMeta: e, tabMeta: t } = ae();
          let n,
            r = 0;
          O
            ? ((n = "top"), t && e && (r = t.top - e.top + e.scrollTop))
            : ((n = a ? "right" : "left"),
              t && e && (r = (a ? -1 : 1) * (t[n] - e[n] + e.scrollLeft)));
          const o = { [n]: r, [j]: t ? t[j] : 0 };
          if ("number" !== typeof K[n] || "number" !== typeof K[j]) G(o);
          else {
            const e = Math.abs(K[n] - o[n]),
              t = Math.abs(K[j] - o[j]);
            (e >= 1 || t >= 1) && G(o);
          }
        }),
        le = function (e) {
          let { animation: t = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          t
            ? (function (e, t, n) {
                let r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {},
                  o =
                    arguments.length > 4 && void 0 !== arguments[4]
                      ? arguments[4]
                      : () => {};
                const { ease: a = Tl, duration: i = 300 } = r;
                let l = null;
                const s = t[e];
                let u = !1;
                const c = () => {
                    u = !0;
                  },
                  d = (r) => {
                    if (u) return void o(new Error("Animation cancelled"));
                    null === l && (l = r);
                    const c = Math.min(1, (r - l) / i);
                    (t[e] = a(c) * (n - s) + s),
                      c >= 1
                        ? requestAnimationFrame(() => {
                            o(null);
                          })
                        : requestAnimationFrame(d);
                  };
                s === n
                  ? o(new Error("Element already at target position"))
                  : requestAnimationFrame(d);
              })(I, re.current, e, {
                duration: o.transitions.duration.standard,
              })
            : (re.current[I] = e);
        },
        se = (e) => {
          let t = re.current[I];
          (t += O ? e : e * (a ? -1 : 1)), le(t);
        },
        ue = () => {
          const e = re.current[L];
          let t = 0;
          const n = Array.from(oe.current.children);
          for (let r = 0; r < n.length; r += 1) {
            const o = n[r];
            if (t + o[L] > e) {
              0 === r && (t = e);
              break;
            }
            t += o[L];
          }
          return t;
        },
        ce = () => {
          se(-1 * ue());
        },
        de = () => {
          se(ue());
        },
        fe = r.useCallback((e) => {
          te({ overflow: null, scrollbarWidth: e });
        }, []),
        pe = Sa((e) => {
          const { tabsMeta: t, tabMeta: n } = ae();
          if (n && t)
            if (n[A] < t[A]) {
              const r = t[I] + (n[A] - t[A]);
              le(r, { animation: e });
            } else if (n[B] > t[B]) {
              const r = t[I] + (n[B] - t[B]);
              le(r, { animation: e });
            }
        }),
        he = Sa(() => {
          z && !1 !== S && J(!Z);
        });
      r.useEffect(() => {
        const e = Xo(() => {
          re.current && ie();
        });
        let t;
        const n = (n) => {
            n.forEach((e) => {
              e.removedNodes.forEach((e) => {
                t?.unobserve(e);
              }),
                e.addedNodes.forEach((e) => {
                  t?.observe(e);
                });
            }),
              e(),
              he();
          },
          r = Yo(re.current);
        let o;
        return (
          r.addEventListener("resize", e),
          "undefined" !== typeof ResizeObserver &&
            ((t = new ResizeObserver(e)),
            Array.from(oe.current.children).forEach((e) => {
              t.observe(e);
            })),
          "undefined" !== typeof MutationObserver &&
            ((o = new MutationObserver(n)),
            o.observe(oe.current, { childList: !0 })),
          () => {
            e.clear(),
              r.removeEventListener("resize", e),
              o?.disconnect(),
              t?.disconnect();
          }
        );
      }, [ie, he]),
        r.useEffect(() => {
          const e = Array.from(oe.current.children),
            t = e.length;
          if (
            "undefined" !== typeof IntersectionObserver &&
            t > 0 &&
            z &&
            !1 !== S
          ) {
            const n = e[0],
              r = e[t - 1],
              o = { root: re.current, threshold: 0.99 },
              a = new IntersectionObserver((e) => {
                q(!e[0].isIntersecting);
              }, o);
            a.observe(n);
            const i = new IntersectionObserver((e) => {
              Y(!e[0].isIntersecting);
            }, o);
            return (
              i.observe(r),
              () => {
                a.disconnect(), i.disconnect();
              }
            );
          }
        }, [z, S, Z, h?.length]),
        r.useEffect(() => {
          U(!0);
        }, []),
        r.useEffect(() => {
          ie();
        }),
        r.useEffect(() => {
          pe(Kl !== K);
        }, [pe, K]),
        r.useImperativeHandle(
          f,
          () => ({ updateIndicator: ie, updateScrollButtons: he }),
          [ie, he]
        );
      const me = (0, u.jsx)(Hl, {
        ...$,
        className: l(D.indicator, $.className),
        ownerState: F,
        style: { ...K, ...$.style },
      });
      let ge = 0;
      const ye = r.Children.map(h, (e) => {
          if (!r.isValidElement(e)) return null;
          const t = void 0 === e.props.value ? ge : e.props.value;
          ne.set(t, ge);
          const n = t === R;
          return (
            (ge += 1),
            r.cloneElement(e, {
              fullWidth: "fullWidth" === M,
              indicator: n && !H && me,
              selected: n,
              selectionFollowsFocus: k,
              onChange: b,
              textColor: T,
              value: t,
              ...(1 !== ge || !1 !== R || e.props.tabIndex
                ? {}
                : { tabIndex: 0 }),
            })
          );
        }),
        ve = (() => {
          const e = {};
          e.scrollbarSizeListener = z
            ? (0, u.jsx)(Ul, {
                onChange: fe,
                className: l(D.scrollableX, D.hideScrollbar),
              })
            : null;
          const t = z && (("auto" === S && (Q || X)) || !0 === S);
          return (
            (e.scrollButtonStart = t
              ? (0, u.jsx)(x, {
                  slots: { StartScrollButtonIcon: C.StartScrollButtonIcon },
                  slotProps: { startScrollButtonIcon: W },
                  orientation: w,
                  direction: a ? "right" : "left",
                  onClick: ce,
                  disabled: !Q,
                  ...P,
                  className: l(D.scrollButtons, P.className),
                })
              : null),
            (e.scrollButtonEnd = t
              ? (0, u.jsx)(x, {
                  slots: { EndScrollButtonIcon: C.EndScrollButtonIcon },
                  slotProps: { endScrollButtonIcon: V },
                  orientation: w,
                  direction: a ? "left" : "right",
                  onClick: de,
                  disabled: !X,
                  ...P,
                  className: l(D.scrollButtons, P.className),
                })
              : null),
            e
          );
        })();
      return (0, u.jsxs)(Dl, {
        className: l(D.root, m),
        ownerState: F,
        ref: t,
        as: g,
        ..._,
        children: [
          ve.scrollButtonStart,
          ve.scrollbarSizeListener,
          (0, u.jsxs)(Wl, {
            className: D.scroller,
            ownerState: F,
            style: {
              overflow: ee.overflow,
              [O ? "margin" + (a ? "Left" : "Right") : "marginBottom"]: N
                ? void 0
                : -ee.scrollbarWidth,
            },
            ref: re,
            children: [
              (0, u.jsx)(Vl, {
                "aria-label": i,
                "aria-labelledby": c,
                "aria-orientation": "vertical" === w ? "vertical" : null,
                className: D.flexContainer,
                ownerState: F,
                onKeyDown: (e) => {
                  const t = oe.current,
                    n = ua(t).activeElement;
                  if ("tab" !== n.getAttribute("role")) return;
                  let r = "horizontal" === w ? "ArrowLeft" : "ArrowUp",
                    o = "horizontal" === w ? "ArrowRight" : "ArrowDown";
                  switch (
                    ("horizontal" === w &&
                      a &&
                      ((r = "ArrowRight"), (o = "ArrowLeft")),
                    e.key)
                  ) {
                    case r:
                      e.preventDefault(), Fl(t, n, jl);
                      break;
                    case o:
                      e.preventDefault(), Fl(t, n, Ll);
                      break;
                    case "Home":
                      e.preventDefault(), Fl(t, null, Ll);
                      break;
                    case "End":
                      e.preventDefault(), Fl(t, null, jl);
                  }
                },
                ref: oe,
                role: "tablist",
                children: ye,
              }),
              H && me,
            ],
          }),
          ve.scrollButtonEnd,
        ],
      });
    }),
    Ql = Gl;
  function ql(e) {
    return To("MuiTab", e);
  }
  const Xl = Ro("MuiTab", [
      "root",
      "labelIcon",
      "textColorInherit",
      "textColorPrimary",
      "textColorSecondary",
      "selected",
      "disabled",
      "fullWidth",
      "wrapped",
      "iconWrapper",
      "icon",
    ]),
    Yl = Dr(Xa, {
      name: "MuiTab",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.label && n.icon && t.labelIcon,
          t[`textColor${ta(n.textColor)}`],
          n.fullWidth && t.fullWidth,
          n.wrapped && t.wrapped,
          { [`& .${Xl.iconWrapper}`]: t.iconWrapper },
          { [`& .${Xl.icon}`]: t.icon },
        ];
      },
    })(
      Vr((e) => {
        let { theme: t } = e;
        return {
          ...t.typography.button,
          maxWidth: 360,
          minWidth: 90,
          position: "relative",
          minHeight: 48,
          flexShrink: 0,
          padding: "12px 16px",
          overflow: "hidden",
          whiteSpace: "normal",
          textAlign: "center",
          lineHeight: 1.25,
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return (
                  t.label &&
                  ("top" === t.iconPosition || "bottom" === t.iconPosition)
                );
              },
              style: { flexDirection: "column" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return (
                  t.label &&
                  "top" !== t.iconPosition &&
                  "bottom" !== t.iconPosition
                );
              },
              style: { flexDirection: "row" },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.icon && t.label;
              },
              style: { minHeight: 72, paddingTop: 9, paddingBottom: 9 },
            },
            {
              props: (e) => {
                let { ownerState: t, iconPosition: n } = e;
                return t.icon && t.label && "top" === n;
              },
              style: { [`& > .${Xl.icon}`]: { marginBottom: 6 } },
            },
            {
              props: (e) => {
                let { ownerState: t, iconPosition: n } = e;
                return t.icon && t.label && "bottom" === n;
              },
              style: { [`& > .${Xl.icon}`]: { marginTop: 6 } },
            },
            {
              props: (e) => {
                let { ownerState: t, iconPosition: n } = e;
                return t.icon && t.label && "start" === n;
              },
              style: { [`& > .${Xl.icon}`]: { marginRight: t.spacing(1) } },
            },
            {
              props: (e) => {
                let { ownerState: t, iconPosition: n } = e;
                return t.icon && t.label && "end" === n;
              },
              style: { [`& > .${Xl.icon}`]: { marginLeft: t.spacing(1) } },
            },
            {
              props: { textColor: "inherit" },
              style: {
                color: "inherit",
                opacity: 0.6,
                [`&.${Xl.selected}`]: { opacity: 1 },
                [`&.${Xl.disabled}`]: {
                  opacity: (t.vars || t).palette.action.disabledOpacity,
                },
              },
            },
            {
              props: { textColor: "primary" },
              style: {
                color: (t.vars || t).palette.text.secondary,
                [`&.${Xl.selected}`]: {
                  color: (t.vars || t).palette.primary.main,
                },
                [`&.${Xl.disabled}`]: {
                  color: (t.vars || t).palette.text.disabled,
                },
              },
            },
            {
              props: { textColor: "secondary" },
              style: {
                color: (t.vars || t).palette.text.secondary,
                [`&.${Xl.selected}`]: {
                  color: (t.vars || t).palette.secondary.main,
                },
                [`&.${Xl.disabled}`]: {
                  color: (t.vars || t).palette.text.disabled,
                },
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.fullWidth;
              },
              style: {
                flexShrink: 1,
                flexGrow: 1,
                flexBasis: 0,
                maxWidth: "none",
              },
            },
            {
              props: (e) => {
                let { ownerState: t } = e;
                return t.wrapped;
              },
              style: { fontSize: t.typography.pxToRem(12) },
            },
          ],
        };
      })
    ),
    Zl = r.forwardRef(function (e, t) {
      const n = Gr({ props: e, name: "MuiTab" }),
        {
          className: o,
          disabled: a = !1,
          disableFocusRipple: i = !1,
          fullWidth: c,
          icon: d,
          iconPosition: f = "top",
          indicator: p,
          label: h,
          onChange: m,
          onClick: g,
          onFocus: y,
          selected: v,
          selectionFollowsFocus: b,
          textColor: w = "inherit",
          value: x,
          wrapped: S = !1,
          ...k
        } = n,
        C = {
          ...n,
          disabled: a,
          disableFocusRipple: i,
          selected: v,
          icon: !!d,
          iconPosition: f,
          label: !!h,
          fullWidth: c,
          textColor: w,
          wrapped: S,
        },
        E = ((e) => {
          const {
            classes: t,
            textColor: n,
            fullWidth: r,
            wrapped: o,
            icon: a,
            label: i,
            selected: l,
            disabled: u,
          } = e;
          return s(
            {
              root: [
                "root",
                a && i && "labelIcon",
                `textColor${ta(n)}`,
                r && "fullWidth",
                o && "wrapped",
                l && "selected",
                u && "disabled",
              ],
              icon: ["iconWrapper", "icon"],
            },
            ql,
            t
          );
        })(C),
        $ =
          d && h && r.isValidElement(d)
            ? r.cloneElement(d, { className: l(E.icon, d.props.className) })
            : d;
      return (0, u.jsxs)(Yl, {
        focusRipple: !i,
        className: l(E.root, o),
        ref: t,
        role: "tab",
        "aria-selected": v,
        disabled: a,
        onClick: (e) => {
          !v && m && m(e, x), g && g(e);
        },
        onFocus: (e) => {
          b && !v && m && m(e, x), y && y(e);
        },
        ownerState: C,
        tabIndex: v ? 0 : -1,
        ...k,
        children: [
          "top" === f || "start" === f
            ? (0, u.jsxs)(r.Fragment, { children: [$, h] })
            : (0, u.jsxs)(r.Fragment, { children: [h, $] }),
          p,
        ],
      });
    }),
    Jl = (e) => {
      let {} = e;
      return (0, u.jsx)("div", {
        className: "view-wrapper",
        children: (0, u.jsx)(Ri, {
          sx: { width: "100%", maxWidth: 500 },
          children: (0, u.jsx)(gi, {
            variant: "h5",
            component: "h1",
            gutterBottom: !0,
            children: "Home",
          }),
        }),
      });
    },
    es = (e) => {
      let {} = e;
      return (0, u.jsx)("div", {
        className: "view-wrapper",
        children: (0, u.jsx)(Ri, {
          sx: { width: "100%", maxWidth: 500 },
          children: (0, u.jsx)(gi, {
            variant: "h5",
            component: "h1",
            gutterBottom: !0,
            children: "Molecule Generator",
          }),
        }),
      });
    },
    ts = (e) => {
      let {} = e;
      const [t, n] = (0, r.useState)(zi()),
        [o, a] = (0, r.useState)(!1),
        i = (e) => a(null !== e && void 0 !== e ? e : !o),
        [l, s] = (0, r.useState)(!1),
        c = (e) => s(null !== e && void 0 !== e ? e : !l),
        [d, f] = (0, r.useState)(0),
        p = (e) => f(e),
        h = {
          calculation: t,
          newCalculation: () => {
            i(!1), c(!1), n(zi());
          },
          answerVisible: l,
          hintVisible: o,
          toggleAnswerVisible: c,
          toggleHintVisible: i,
        };
      return (0, u.jsxs)("div", {
        className: "view-wrapper",
        children: [
          (0, u.jsx)(Ri, {
            sx: { width: "100%", maxWidth: 500 },
            children: (0, u.jsx)(gi, {
              variant: "h5",
              component: "h1",
              gutterBottom: !0,
              children: "Molarity Practice",
            }),
          }),
          (0, u.jsxs)(Ri, {
            sx: { width: "100%" },
            children: [
              (0, u.jsx)(Ri, {
                sx: { borderBottom: 1, borderColor: "divider" },
                children: (0, u.jsxs)(Ql, {
                  value: d,
                  children: [
                    (0, u.jsx)(Zl, { label: "Easy", onClick: () => p(0) }),
                    (0, u.jsx)(Zl, { label: "Harder", onClick: () => p(1) }),
                  ],
                }),
              }),
              0 === d ? (0, u.jsx)(El, { ...h }) : null,
              1 === d ? (0, u.jsx)($l, { ...h }) : null,
            ],
          }),
        ],
      });
    };
  const ns = function () {
    const [e, t] = (0, r.useState)(!1),
      n = (e) => t(e),
      [o, a] = (0, r.useState)("Home");
    return (0, u.jsxs)("div", {
      className: "App",
      children: [
        (0, u.jsx)(Ci, { onClick: n, isOpen: e }),
        (0, u.jsx)(Ei, {
          isOpen: e,
          onClick: (e) => {
            e !== o && a(e), n(!1);
          },
        }),
        "Home" === o ? (0, u.jsx)(Jl, {}) : null,
        "MoleculeGenerator" === o ? (0, u.jsx)(es, {}) : null,
        "MolarityPractice" === o ? (0, u.jsx)(ts, {}) : null,
      ],
    });
  };
  a.createRoot(document.getElementById("root")).render(
    (0, u.jsx)(r.StrictMode, { children: (0, u.jsx)(ns, {}) })
  );
})();
//# sourceMappingURL=main.b6192b76.js.map
