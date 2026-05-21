function Mv(s, c) {
  for (var u = 0; u < c.length; u++) {
    const r = c[u];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const f in r)
        if (f !== "default" && !(f in s)) {
          const m = Object.getOwnPropertyDescriptor(r, f);
          m &&
            Object.defineProperty(
              s,
              f,
              m.get ? m : { enumerable: !0, get: () => r[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(s, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const c = document.createElement("link").relList;
  if (c && c.supports && c.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) r(f);
  new MutationObserver(f => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && r(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(f) {
    const m = {};
    return (
      f.integrity && (m.integrity = f.integrity),
      f.referrerPolicy && (m.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (m.credentials = "omit")
          : (m.credentials = "same-origin"),
      m
    );
  }
  function r(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = u(f);
    fetch(f.href, m);
  }
})();
function fp(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var Jr = { exports: {} },
  Ys = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wg;
function Dv() {
  if (wg) return Ys;
  wg = 1;
  var s = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.fragment");
  function u(r, f, m) {
    var x = null;
    if (
      (m !== void 0 && (x = "" + m),
      f.key !== void 0 && (x = "" + f.key),
      "key" in f)
    ) {
      m = {};
      for (var y in f) y !== "key" && (m[y] = f[y]);
    } else m = f;
    return (
      (f = m.ref),
      { $$typeof: s, type: r, key: x, ref: f !== void 0 ? f : null, props: m }
    );
  }
  return ((Ys.Fragment = c), (Ys.jsx = u), (Ys.jsxs = u), Ys);
}
var Ng;
function _v() {
  return (Ng || ((Ng = 1), (Jr.exports = Dv())), Jr.exports);
}
var o = _v(),
  Wr = { exports: {} },
  qs = {},
  $r = { exports: {} },
  Pr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg;
function Bv() {
  return (
    Sg ||
      ((Sg = 1),
      (function (s) {
        function c(S, U) {
          var D = S.length;
          S.push(U);
          e: for (; 0 < D; ) {
            var ie = (D - 1) >>> 1,
              re = S[ie];
            if (0 < f(re, U)) ((S[ie] = U), (S[D] = re), (D = ie));
            else break e;
          }
        }
        function u(S) {
          return S.length === 0 ? null : S[0];
        }
        function r(S) {
          if (S.length === 0) return null;
          var U = S[0],
            D = S.pop();
          if (D !== U) {
            S[0] = D;
            e: for (var ie = 0, re = S.length, w = re >>> 1; ie < w; ) {
              var H = 2 * (ie + 1) - 1,
                R = S[H],
                X = H + 1,
                W = S[X];
              if (0 > f(R, D))
                X < re && 0 > f(W, R)
                  ? ((S[ie] = W), (S[X] = D), (ie = X))
                  : ((S[ie] = R), (S[H] = D), (ie = H));
              else if (X < re && 0 > f(W, D))
                ((S[ie] = W), (S[X] = D), (ie = X));
              else break e;
            }
          }
          return U;
        }
        function f(S, U) {
          var D = S.sortIndex - U.sortIndex;
          return D !== 0 ? D : S.id - U.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          s.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            y = x.now();
          s.unstable_now = function () {
            return x.now() - y;
          };
        }
        var v = [],
          h = [],
          j = 1,
          p = null,
          E = 3,
          C = !1,
          M = !1,
          Y = !1,
          V = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function P(S) {
          for (var U = u(h); U !== null; ) {
            if (U.callback === null) r(h);
            else if (U.startTime <= S)
              (r(h), (U.sortIndex = U.expirationTime), c(v, U));
            else break;
            U = u(h);
          }
        }
        function ee(S) {
          if (((Y = !1), P(S), !M))
            if (u(v) !== null) ((M = !0), se || ((se = !0), he()));
            else {
              var U = u(h);
              U !== null && je(ee, U.startTime - S);
            }
        }
        var se = !1,
          Q = -1,
          Z = 5,
          ge = -1;
        function we() {
          return V ? !0 : !(s.unstable_now() - ge < Z);
        }
        function Oe() {
          if (((V = !1), se)) {
            var S = s.unstable_now();
            ge = S;
            var U = !0;
            try {
              e: {
                ((M = !1), Y && ((Y = !1), I(Q), (Q = -1)), (C = !0));
                var D = E;
                try {
                  t: {
                    for (
                      P(S), p = u(v);
                      p !== null && !(p.expirationTime > S && we());

                    ) {
                      var ie = p.callback;
                      if (typeof ie == "function") {
                        ((p.callback = null), (E = p.priorityLevel));
                        var re = ie(p.expirationTime <= S);
                        if (((S = s.unstable_now()), typeof re == "function")) {
                          ((p.callback = re), P(S), (U = !0));
                          break t;
                        }
                        (p === u(v) && r(v), P(S));
                      } else r(v);
                      p = u(v);
                    }
                    if (p !== null) U = !0;
                    else {
                      var w = u(h);
                      (w !== null && je(ee, w.startTime - S), (U = !1));
                    }
                  }
                  break e;
                } finally {
                  ((p = null), (E = D), (C = !1));
                }
                U = void 0;
              }
            } finally {
              U ? he() : (se = !1);
            }
          }
        }
        var he;
        if (typeof J == "function")
          he = function () {
            J(Oe);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            ye = xe.port2;
          ((xe.port1.onmessage = Oe),
            (he = function () {
              ye.postMessage(null);
            }));
        } else
          he = function () {
            G(Oe, 0);
          };
        function je(S, U) {
          Q = G(function () {
            S(s.unstable_now());
          }, U);
        }
        ((s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (s.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Z = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (s.unstable_next = function (S) {
            switch (E) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = E;
            }
            var D = E;
            E = U;
            try {
              return S();
            } finally {
              E = D;
            }
          }),
          (s.unstable_requestPaint = function () {
            V = !0;
          }),
          (s.unstable_runWithPriority = function (S, U) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var D = E;
            E = S;
            try {
              return U();
            } finally {
              E = D;
            }
          }),
          (s.unstable_scheduleCallback = function (S, U, D) {
            var ie = s.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? ie + D : ie))
                : (D = ie),
              S)
            ) {
              case 1:
                var re = -1;
                break;
              case 2:
                re = 250;
                break;
              case 5:
                re = 1073741823;
                break;
              case 4:
                re = 1e4;
                break;
              default:
                re = 5e3;
            }
            return (
              (re = D + re),
              (S = {
                id: j++,
                callback: U,
                priorityLevel: S,
                startTime: D,
                expirationTime: re,
                sortIndex: -1,
              }),
              D > ie
                ? ((S.sortIndex = D),
                  c(h, S),
                  u(v) === null &&
                    S === u(h) &&
                    (Y ? (I(Q), (Q = -1)) : (Y = !0), je(ee, D - ie)))
                : ((S.sortIndex = re),
                  c(v, S),
                  M || C || ((M = !0), se || ((se = !0), he()))),
              S
            );
          }),
          (s.unstable_shouldYield = we),
          (s.unstable_wrapCallback = function (S) {
            var U = E;
            return function () {
              var D = E;
              E = U;
              try {
                return S.apply(this, arguments);
              } finally {
                E = D;
              }
            };
          }));
      })(Pr)),
    Pr
  );
}
var Ag;
function Rv() {
  return (Ag || ((Ag = 1), ($r.exports = Bv())), $r.exports);
}
var Fr = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eg;
function Hv() {
  if (Eg) return me;
  Eg = 1;
  var s = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    E = Symbol.iterator;
  function C(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (E && w[E]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Y = Object.assign,
    V = {};
  function G(w, H, R) {
    ((this.props = w),
      (this.context = H),
      (this.refs = V),
      (this.updater = R || M));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (w, H) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, w, H, "setState");
    }),
    (G.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function I() {}
  I.prototype = G.prototype;
  function J(w, H, R) {
    ((this.props = w),
      (this.context = H),
      (this.refs = V),
      (this.updater = R || M));
  }
  var P = (J.prototype = new I());
  ((P.constructor = J), Y(P, G.prototype), (P.isPureReactComponent = !0));
  var ee = Array.isArray;
  function se() {}
  var Q = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function ge(w, H, R) {
    var X = R.ref;
    return {
      $$typeof: s,
      type: w,
      key: H,
      ref: X !== void 0 ? X : null,
      props: R,
    };
  }
  function we(w, H) {
    return ge(w.type, H, w.props);
  }
  function Oe(w) {
    return typeof w == "object" && w !== null && w.$$typeof === s;
  }
  function he(w) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (R) {
        return H[R];
      })
    );
  }
  var xe = /\/+/g;
  function ye(w, H) {
    return typeof w == "object" && w !== null && w.key != null
      ? he("" + w.key)
      : H.toString(36);
  }
  function je(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(se, se)
            : ((w.status = "pending"),
              w.then(
                function (H) {
                  w.status === "pending" &&
                    ((w.status = "fulfilled"), (w.value = H));
                },
                function (H) {
                  w.status === "pending" &&
                    ((w.status = "rejected"), (w.reason = H));
                }
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function S(w, H, R, X, W) {
    var oe = typeof w;
    (oe === "undefined" || oe === "boolean") && (w = null);
    var ae = !1;
    if (w === null) ae = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ae = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case s:
            case c:
              ae = !0;
              break;
            case j:
              return ((ae = w._init), S(ae(w._payload), H, R, X, W));
          }
      }
    if (ae)
      return (
        (W = W(w)),
        (ae = X === "" ? "." + ye(w, 0) : X),
        ee(W)
          ? ((R = ""),
            ae != null && (R = ae.replace(xe, "$&/") + "/"),
            S(W, H, R, "", function (at) {
              return at;
            }))
          : W != null &&
            (Oe(W) &&
              (W = we(
                W,
                R +
                  (W.key == null || (w && w.key === W.key)
                    ? ""
                    : ("" + W.key).replace(xe, "$&/") + "/") +
                  ae
              )),
            H.push(W)),
        1
      );
    ae = 0;
    var de = X === "" ? "." : X + ":";
    if (ee(w))
      for (var ke = 0; ke < w.length; ke++)
        ((X = w[ke]), (oe = de + ye(X, ke)), (ae += S(X, H, R, oe, W)));
    else if (((ke = C(w)), typeof ke == "function"))
      for (w = ke.call(w), ke = 0; !(X = w.next()).done; )
        ((X = X.value), (oe = de + ye(X, ke++)), (ae += S(X, H, R, oe, W)));
    else if (oe === "object") {
      if (typeof w.then == "function") return S(je(w), H, R, X, W);
      throw (
        (H = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return ae;
  }
  function U(w, H, R) {
    if (w == null) return w;
    var X = [],
      W = 0;
    return (
      S(w, X, "", "", function (oe) {
        return H.call(R, oe, W++);
      }),
      X
    );
  }
  function D(w) {
    if (w._status === -1) {
      var H = w._result;
      ((H = H()),
        H.then(
          function (R) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = R));
          },
          function (R) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = R));
          }
        ),
        w._status === -1 && ((w._status = 0), (w._result = H)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ie =
      typeof reportError == "function"
        ? reportError
        : function (w) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof w == "object" &&
                  w !== null &&
                  typeof w.message == "string"
                    ? String(w.message)
                    : String(w),
                error: w,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", w);
              return;
            }
            console.error(w);
          },
    re = {
      map: U,
      forEach: function (w, H, R) {
        U(
          w,
          function () {
            H.apply(this, arguments);
          },
          R
        );
      },
      count: function (w) {
        var H = 0;
        return (
          U(w, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (w) {
        return (
          U(w, function (H) {
            return H;
          }) || []
        );
      },
      only: function (w) {
        if (!Oe(w))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return w;
      },
    };
  return (
    (me.Activity = p),
    (me.Children = re),
    (me.Component = G),
    (me.Fragment = u),
    (me.Profiler = f),
    (me.PureComponent = J),
    (me.StrictMode = r),
    (me.Suspense = v),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return Q.H.useMemoCache(w);
      },
    }),
    (me.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (me.cacheSignal = function () {
      return null;
    }),
    (me.cloneElement = function (w, H, R) {
      if (w == null)
        throw Error(
          "The argument must be a React element, but you passed " + w + "."
        );
      var X = Y({}, w.props),
        W = w.key;
      if (H != null)
        for (oe in (H.key !== void 0 && (W = "" + H.key), H))
          !Z.call(H, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && H.ref === void 0) ||
            (X[oe] = H[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) X.children = R;
      else if (1 < oe) {
        for (var ae = Array(oe), de = 0; de < oe; de++)
          ae[de] = arguments[de + 2];
        X.children = ae;
      }
      return ge(w.type, W, X);
    }),
    (me.createContext = function (w) {
      return (
        (w = {
          $$typeof: x,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: m, _context: w }),
        w
      );
    }),
    (me.createElement = function (w, H, R) {
      var X,
        W = {},
        oe = null;
      if (H != null)
        for (X in (H.key !== void 0 && (oe = "" + H.key), H))
          Z.call(H, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (W[X] = H[X]);
      var ae = arguments.length - 2;
      if (ae === 1) W.children = R;
      else if (1 < ae) {
        for (var de = Array(ae), ke = 0; ke < ae; ke++)
          de[ke] = arguments[ke + 2];
        W.children = de;
      }
      if (w && w.defaultProps)
        for (X in ((ae = w.defaultProps), ae))
          W[X] === void 0 && (W[X] = ae[X]);
      return ge(w, oe, W);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (w) {
      return { $$typeof: y, render: w };
    }),
    (me.isValidElement = Oe),
    (me.lazy = function (w) {
      return { $$typeof: j, _payload: { _status: -1, _result: w }, _init: D };
    }),
    (me.memo = function (w, H) {
      return { $$typeof: h, type: w, compare: H === void 0 ? null : H };
    }),
    (me.startTransition = function (w) {
      var H = Q.T,
        R = {};
      Q.T = R;
      try {
        var X = w(),
          W = Q.S;
        (W !== null && W(R, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(se, ie));
      } catch (oe) {
        ie(oe);
      } finally {
        (H !== null && R.types !== null && (H.types = R.types), (Q.T = H));
      }
    }),
    (me.unstable_useCacheRefresh = function () {
      return Q.H.useCacheRefresh();
    }),
    (me.use = function (w) {
      return Q.H.use(w);
    }),
    (me.useActionState = function (w, H, R) {
      return Q.H.useActionState(w, H, R);
    }),
    (me.useCallback = function (w, H) {
      return Q.H.useCallback(w, H);
    }),
    (me.useContext = function (w) {
      return Q.H.useContext(w);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (w, H) {
      return Q.H.useDeferredValue(w, H);
    }),
    (me.useEffect = function (w, H) {
      return Q.H.useEffect(w, H);
    }),
    (me.useEffectEvent = function (w) {
      return Q.H.useEffectEvent(w);
    }),
    (me.useId = function () {
      return Q.H.useId();
    }),
    (me.useImperativeHandle = function (w, H, R) {
      return Q.H.useImperativeHandle(w, H, R);
    }),
    (me.useInsertionEffect = function (w, H) {
      return Q.H.useInsertionEffect(w, H);
    }),
    (me.useLayoutEffect = function (w, H) {
      return Q.H.useLayoutEffect(w, H);
    }),
    (me.useMemo = function (w, H) {
      return Q.H.useMemo(w, H);
    }),
    (me.useOptimistic = function (w, H) {
      return Q.H.useOptimistic(w, H);
    }),
    (me.useReducer = function (w, H, R) {
      return Q.H.useReducer(w, H, R);
    }),
    (me.useRef = function (w) {
      return Q.H.useRef(w);
    }),
    (me.useState = function (w) {
      return Q.H.useState(w);
    }),
    (me.useSyncExternalStore = function (w, H, R) {
      return Q.H.useSyncExternalStore(w, H, R);
    }),
    (me.useTransition = function () {
      return Q.H.useTransition();
    }),
    (me.version = "19.2.1"),
    me
  );
}
var kg;
function Eo() {
  return (kg || ((kg = 1), (Fr.exports = Hv())), Fr.exports);
}
var Ir = { exports: {} },
  ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg;
function Uv() {
  if (Tg) return ft;
  Tg = 1;
  var s = Eo();
  function c(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        h += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var r = {
      d: {
        f: u,
        r: function () {
          throw Error(c(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function m(v, h, j) {
    var p =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: p == null ? null : "" + p,
      children: v,
      containerInfo: h,
      implementation: j,
    };
  }
  var x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, h) {
    if (v === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ft.createPortal = function (v, h) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(c(299));
      return m(v, h, null, j);
    }),
    (ft.flushSync = function (v) {
      var h = x.T,
        j = r.p;
      try {
        if (((x.T = null), (r.p = 2), v)) return v();
      } finally {
        ((x.T = h), (r.p = j), r.d.f());
      }
    }),
    (ft.preconnect = function (v, h) {
      typeof v == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        r.d.C(v, h));
    }),
    (ft.prefetchDNS = function (v) {
      typeof v == "string" && r.d.D(v);
    }),
    (ft.preinit = function (v, h) {
      if (typeof v == "string" && h && typeof h.as == "string") {
        var j = h.as,
          p = y(j, h.crossOrigin),
          E = typeof h.integrity == "string" ? h.integrity : void 0,
          C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        j === "style"
          ? r.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: p,
              integrity: E,
              fetchPriority: C,
            })
          : j === "script" &&
            r.d.X(v, {
              crossOrigin: p,
              integrity: E,
              fetchPriority: C,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (ft.preinitModule = function (v, h) {
      if (typeof v == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var j = y(h.as, h.crossOrigin);
            r.d.M(v, {
              crossOrigin: j,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && r.d.M(v);
    }),
    (ft.preload = function (v, h) {
      if (
        typeof v == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var j = h.as,
          p = y(j, h.crossOrigin);
        r.d.L(v, j, {
          crossOrigin: p,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (ft.preloadModule = function (v, h) {
      if (typeof v == "string")
        if (h) {
          var j = y(h.as, h.crossOrigin);
          r.d.m(v, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: j,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else r.d.m(v);
    }),
    (ft.requestFormReset = function (v) {
      r.d.r(v);
    }),
    (ft.unstable_batchedUpdates = function (v, h) {
      return v(h);
    }),
    (ft.useFormState = function (v, h, j) {
      return x.H.useFormState(v, h, j);
    }),
    (ft.useFormStatus = function () {
      return x.H.useHostTransitionStatus();
    }),
    (ft.version = "19.2.1"),
    ft
  );
}
var Og;
function mp() {
  if (Og) return Ir.exports;
  Og = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return (s(), (Ir.exports = Uv()), Ir.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cg;
function Lv() {
  if (Cg) return qs;
  Cg = 1;
  var s = Rv(),
    c = Eo(),
    u = mp();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function m(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function x(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (m(e) !== e) throw Error(r(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return (v(l), e);
          if (i === a) return (v(l), t);
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) ((n = l), (a = i));
      else {
        for (var d = !1, g = l.child; g; ) {
          if (g === n) {
            ((d = !0), (n = l), (a = i));
            break;
          }
          if (g === a) {
            ((d = !0), (a = l), (n = i));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = i.child; g; ) {
            if (g === n) {
              ((d = !0), (n = i), (a = l));
              break;
            }
            if (g === a) {
              ((d = !0), (a = i), (n = l));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? e : t;
  }
  function j(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = j(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var p = Object.assign,
    E = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    V = Symbol.for("react.strict_mode"),
    G = Symbol.for("react.profiler"),
    I = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    P = Symbol.for("react.forward_ref"),
    ee = Symbol.for("react.suspense"),
    se = Symbol.for("react.suspense_list"),
    Q = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    ge = Symbol.for("react.activity"),
    we = Symbol.for("react.memo_cache_sentinel"),
    Oe = Symbol.iterator;
  function he(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Oe && e[Oe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Symbol.for("react.client.reference");
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Y:
        return "Fragment";
      case G:
        return "Profiler";
      case V:
        return "StrictMode";
      case ee:
        return "Suspense";
      case se:
        return "SuspenseList";
      case ge:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case J:
          return e.displayName || "Context";
        case I:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Q:
          return (
            (t = e.displayName || null),
            t !== null ? t : ye(e.type) || "Memo"
          );
        case Z:
          ((t = e._payload), (e = e._init));
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  var je = Array.isArray,
    S = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    ie = [],
    re = -1;
  function w(e) {
    return { current: e };
  }
  function H(e) {
    0 > re || ((e.current = ie[re]), (ie[re] = null), re--);
  }
  function R(e, t) {
    (re++, (ie[re] = e.current), (e.current = t));
  }
  var X = w(null),
    W = w(null),
    oe = w(null),
    ae = w(null);
  function de(e, t) {
    switch ((R(oe, t), R(W, e), R(X, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Qm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Qm(t)), (e = Zm(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (H(X), R(X, e));
  }
  function ke() {
    (H(X), H(W), H(oe));
  }
  function at(e) {
    e.memoizedState !== null && R(ae, e);
    var t = X.current,
      n = Zm(t, e.type);
    t !== n && (R(W, e), R(X, n));
  }
  function gt(e) {
    (W.current === e && (H(X), H(W)),
      ae.current === e && (H(ae), (Rs._currentValue = D)));
  }
  var lt, yn;
  function $t(e) {
    if (lt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((lt = (t && t[1]) || ""),
          (yn =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      lt +
      e +
      yn
    );
  }
  var Ql = !1;
  function Ka(e, t) {
    if (!e || Ql) return "";
    Ql = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (_) {
                  var O = _;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (_) {
                  O = _;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                O = _;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (_) {
            if (_ && O && typeof _.stack == "string") return [_.stack, O.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        d = i[0],
        g = i[1];
      if (d && g) {
        var b = d.split(`
`),
          T = g.split(`
`);
        for (
          l = a = 0;
          a < b.length && !b[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; l < T.length && !T[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (a === b.length || l === T.length)
          for (
            a = b.length - 1, l = T.length - 1;
            1 <= a && 0 <= l && b[a] !== T[l];

          )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (b[a] !== T[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || b[a] !== T[l])) {
                  var B =
                    `
` + b[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", e.displayName)),
                    B
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((Ql = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : "") ? $t(n) : "";
  }
  function ba(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $t(e.type);
      case 16:
        return $t("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? $t("Suspense Fallback")
          : $t("Suspense");
      case 19:
        return $t("SuspenseList");
      case 0:
      case 15:
        return Ka(e.type, !1);
      case 11:
        return Ka(e.type.render, !1);
      case 1:
        return Ka(e.type, !0);
      case 31:
        return $t("Activity");
      default:
        return "";
    }
  }
  function Zl(e) {
    try {
      var t = "",
        n = null;
      do ((t += ba(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Ct = Object.prototype.hasOwnProperty,
    Kl = s.unstable_scheduleCallback,
    Jl = s.unstable_cancelCallback,
    pt = s.unstable_shouldYield,
    Vn = s.unstable_requestPaint,
    ht = s.unstable_now,
    Ro = s.unstable_getCurrentPriorityLevel,
    ja = s.unstable_ImmediatePriority,
    Js = s.unstable_UserBlockingPriority,
    wa = s.unstable_NormalPriority,
    Wl = s.unstable_LowPriority,
    bn = s.unstable_IdlePriority,
    Ws = s.log,
    Xn = s.unstable_setDisableYieldValue,
    Na = null,
    xt = null;
  function Pt(e) {
    if (
      (typeof Ws == "function" && Xn(e),
      xt && typeof xt.setStrictMode == "function")
    )
      try {
        xt.setStrictMode(Na, e);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : on,
    Ho = Math.log,
    $l = Math.LN2;
  function on(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ho(e) / $l) | 0)) | 0);
  }
  var Ja = 256,
    Wa = 262144,
    Sa = 4194304;
  function cn(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function fe(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      i = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return (
      g !== 0
        ? ((a = g & ~i),
          a !== 0
            ? (l = cn(a))
            : ((d &= g),
              d !== 0
                ? (l = cn(d))
                : n || ((n = g & ~e), n !== 0 && (l = cn(n)))))
        : ((g = a & ~i),
          g !== 0
            ? (l = cn(g))
            : d !== 0
              ? (l = cn(d))
              : n || ((n = a & ~e), n !== 0 && (l = cn(n)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            (t & i) === 0 &&
            ((i = l & -l),
            (n = t & -t),
            i >= n || (i === 32 && (n & 4194048) !== 0))
          ? t
          : l
    );
  }
  function qe(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function et(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function dt() {
    var e = Sa;
    return ((Sa <<= 1), (Sa & 62914560) === 0 && (Sa = 4194304), e);
  }
  function Qn(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ve(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function yt(e, t, n, a, l, i) {
    var d = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var g = e.entanglements,
      b = e.expirationTimes,
      T = e.hiddenUpdates;
    for (n = d & ~n; 0 < n; ) {
      var B = 31 - ut(n),
        q = 1 << B;
      ((g[B] = 0), (b[B] = -1));
      var O = T[B];
      if (O !== null)
        for (T[B] = null, B = 0; B < O.length; B++) {
          var _ = O[B];
          _ !== null && (_.lane &= -536870913);
        }
      n &= ~q;
    }
    (a !== 0 && Aa(e, a, 0),
      i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t)));
  }
  function Aa(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var a = 31 - ut(t);
    ((e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function bt(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var a = 31 - ut(n),
        l = 1 << a;
      ((l & t) | (e[a] & t) && (e[a] |= t), (n &= ~l));
    }
  }
  function jt(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : $a(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function $a(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ft(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Uo() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : pg(e.type));
  }
  function Cu(e, t) {
    var n = U.p;
    try {
      return ((U.p = e), t());
    } finally {
      U.p = n;
    }
  }
  var Zn = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + Zn,
    wt = "__reactProps$" + Zn,
    Pa = "__reactContainer$" + Zn,
    Lo = "__reactEvents$" + Zn,
    jh = "__reactListeners$" + Zn,
    wh = "__reactHandles$" + Zn,
    zu = "__reactResources$" + Zn,
    Pl = "__reactMarker$" + Zn;
  function Yo(e) {
    (delete e[st], delete e[wt], delete e[Lo], delete e[jh], delete e[wh]);
  }
  function Fa(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Pa] || n[st])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Im(e); e !== null; ) {
            if ((n = e[st])) return n;
            e = Im(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ia(e) {
    if ((e = e[st] || e[Pa])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Fl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function el(e) {
    var t = e[zu];
    return (
      t ||
        (t = e[zu] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function tt(e) {
    e[Pl] = !0;
  }
  var Mu = new Set(),
    Du = {};
  function Ea(e, t) {
    (tl(e, t), tl(e + "Capture", t));
  }
  function tl(e, t) {
    for (Du[e] = t, e = 0; e < t.length; e++) Mu.add(t[e]);
  }
  var Nh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    _u = {},
    Bu = {};
  function Sh(e) {
    return Ct.call(Bu, e)
      ? !0
      : Ct.call(_u, e)
        ? !1
        : Nh.test(e)
          ? (Bu[e] = !0)
          : ((_u[e] = !0), !1);
  }
  function $s(e, t, n) {
    if (Sh(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function Ps(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function jn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ru(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ah(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var l = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (d) {
            ((n = "" + d), i.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (d) {
            n = "" + d;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function qo(e) {
    if (!e._valueTracker) {
      var t = Ru(e) ? "checked" : "value";
      e._valueTracker = Ah(e, t, "" + e[t]);
    }
  }
  function Hu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = Ru(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fs(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Eh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(Eh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Go(e, t, n, a, l, i, d, g) {
    ((e.name = ""),
      d != null &&
      typeof d != "function" &&
      typeof d != "symbol" &&
      typeof d != "boolean"
        ? (e.type = d)
        : e.removeAttribute("type"),
      t != null
        ? d === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + Yt(t))
          : e.value !== "" + Yt(t) && (e.value = "" + Yt(t))
        : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
      t != null
        ? Vo(e, d, Yt(t))
        : n != null
          ? Vo(e, d, Yt(n))
          : a != null && e.removeAttribute("value"),
      l == null && i != null && (e.defaultChecked = !!i),
      l != null &&
        (e.checked = l && typeof l != "function" && typeof l != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + Yt(g))
        : e.removeAttribute("name"));
  }
  function Uu(e, t, n, a, l, i, d, g) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || n != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) {
        qo(e);
        return;
      }
      ((n = n != null ? "" + Yt(n) : ""),
        (t = t != null ? "" + Yt(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? l),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = g ? e.checked : !!a),
      (e.defaultChecked = !!a),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      qo(e));
  }
  function Vo(e, t, n) {
    (t === "number" && Fs(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function nl(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), a && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lu(e, t, n) {
    if (
      t != null &&
      ((t = "" + Yt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Yt(n) : "";
  }
  function Yu(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (je(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (t = n));
    }
    ((n = Yt(t)),
      (e.defaultValue = n),
      (a = e.textContent),
      a === n && a !== "" && a !== null && (e.value = a),
      qo(e));
  }
  function al(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var kh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qu(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || kh.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Gu(e, t, n) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var l in t)
        ((a = t[l]), t.hasOwnProperty(l) && n[l] !== a && qu(e, l, a));
    } else for (var i in t) t.hasOwnProperty(i) && qu(e, i, t[i]);
  }
  function Xo(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Th = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Oh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Is(e) {
    return Oh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function wn() {}
  var Qo = null;
  function Zo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ll = null,
    sl = null;
  function Vu(e) {
    var t = Ia(e);
    if (t && (e = t.stateNode)) {
      var n = e[wt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Go(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name
            ),
            (t = n.name),
            n.type === "radio" && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + qt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[wt] || null;
                if (!l) throw Error(r(90));
                Go(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((a = n[t]), a.form === e.form && Hu(a));
          }
          break e;
        case "textarea":
          Lu(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && nl(e, !!n.multiple, t, !1));
      }
    }
  }
  var Ko = !1;
  function Xu(e, t, n) {
    if (Ko) return e(t, n);
    Ko = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Ko = !1),
        (ll !== null || sl !== null) &&
          (Yi(), ll && ((t = ll), (e = sl), (sl = ll = null), Vu(t), e)))
      )
        for (t = 0; t < e.length; t++) Vu(e[t]);
    }
  }
  function Il(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[wt] || null;
    if (a === null) return null;
    n = a[t];
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
        ((a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(r(231, t, typeof n));
    return n;
  }
  var Nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Jo = !1;
  if (Nn)
    try {
      var es = {};
      (Object.defineProperty(es, "passive", {
        get: function () {
          Jo = !0;
        },
      }),
        window.addEventListener("test", es, es),
        window.removeEventListener("test", es, es));
    } catch {
      Jo = !1;
    }
  var Kn = null,
    Wo = null,
    ei = null;
  function Qu() {
    if (ei) return ei;
    var e,
      t = Wo,
      n = t.length,
      a,
      l = "value" in Kn ? Kn.value : Kn.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === l[i - a]; a++);
    return (ei = l.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ti(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ni() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function Nt(e) {
    function t(n, a, l, i, d) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = d),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((n = e[g]), (this[g] = n ? n(i) : i[g]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? ni
          : Zu),
        (this.isPropagationStopped = Zu),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ni));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ni));
        },
        persist: function () {},
        isPersistent: ni,
      }),
      t
    );
  }
  var ka = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ai = Nt(ka),
    ts = p({}, ka, { view: 0, detail: 0 }),
    Ch = Nt(ts),
    $o,
    Po,
    ns,
    li = p({}, ts, {
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
      getModifierState: Io,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ns &&
              (ns && e.type === "mousemove"
                ? (($o = e.screenX - ns.screenX), (Po = e.screenY - ns.screenY))
                : (Po = $o = 0),
              (ns = e)),
            $o);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Po;
      },
    }),
    Ku = Nt(li),
    zh = p({}, li, { dataTransfer: 0 }),
    Mh = Nt(zh),
    Dh = p({}, ts, { relatedTarget: 0 }),
    Fo = Nt(Dh),
    _h = p({}, ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bh = Nt(_h),
    Rh = p({}, ka, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hh = Nt(Rh),
    Uh = p({}, ka, { data: 0 }),
    Ju = Nt(Uh),
    Lh = {
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
    Yh = {
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
    qh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Gh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = qh[e])
        ? !!t[e]
        : !1;
  }
  function Io() {
    return Gh;
  }
  var Vh = p({}, ts, {
      key: function (e) {
        if (e.key) {
          var t = Lh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ti(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Yh[e.keyCode] || "Unidentified"
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
      getModifierState: Io,
      charCode: function (e) {
        return e.type === "keypress" ? ti(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? ti(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Xh = Nt(Vh),
    Qh = p({}, li, {
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
    }),
    Wu = Nt(Qh),
    Zh = p({}, ts, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Io,
    }),
    Kh = Nt(Zh),
    Jh = p({}, ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wh = Nt(Jh),
    $h = p({}, li, {
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
    Ph = Nt($h),
    Fh = p({}, ka, { newState: 0, oldState: 0 }),
    Ih = Nt(Fh),
    ex = [9, 13, 27, 32],
    ec = Nn && "CompositionEvent" in window,
    as = null;
  Nn && "documentMode" in document && (as = document.documentMode);
  var tx = Nn && "TextEvent" in window && !as,
    $u = Nn && (!ec || (as && 8 < as && 11 >= as)),
    Pu = " ",
    Fu = !1;
  function Iu(e, t) {
    switch (e) {
      case "keyup":
        return ex.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ed(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var il = !1;
  function nx(e, t) {
    switch (e) {
      case "compositionend":
        return ed(t);
      case "keypress":
        return t.which !== 32 ? null : ((Fu = !0), Pu);
      case "textInput":
        return ((e = t.data), e === Pu && Fu ? null : e);
      default:
        return null;
    }
  }
  function ax(e, t) {
    if (il)
      return e === "compositionend" || (!ec && Iu(e, t))
        ? ((e = Qu()), (ei = Wo = Kn = null), (il = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $u && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lx = {
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
  function td(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lx[e.type] : t === "textarea";
  }
  function nd(e, t, n, a) {
    (ll ? (sl ? sl.push(a) : (sl = [a])) : (ll = a),
      (t = Ki(t, "onChange")),
      0 < t.length &&
        ((n = new ai("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var ls = null,
    ss = null;
  function sx(e) {
    Lm(e, 0);
  }
  function si(e) {
    var t = Fl(e);
    if (Hu(t)) return e;
  }
  function ad(e, t) {
    if (e === "change") return t;
  }
  var ld = !1;
  if (Nn) {
    var tc;
    if (Nn) {
      var nc = "oninput" in document;
      if (!nc) {
        var sd = document.createElement("div");
        (sd.setAttribute("oninput", "return;"),
          (nc = typeof sd.oninput == "function"));
      }
      tc = nc;
    } else tc = !1;
    ld = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function id() {
    ls && (ls.detachEvent("onpropertychange", od), (ss = ls = null));
  }
  function od(e) {
    if (e.propertyName === "value" && si(ss)) {
      var t = [];
      (nd(t, ss, e, Zo(e)), Xu(sx, t));
    }
  }
  function ix(e, t, n) {
    e === "focusin"
      ? (id(), (ls = t), (ss = n), ls.attachEvent("onpropertychange", od))
      : e === "focusout" && id();
  }
  function ox(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return si(ss);
  }
  function cx(e, t) {
    if (e === "click") return si(t);
  }
  function rx(e, t) {
    if (e === "input" || e === "change") return si(t);
  }
  function ux(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var zt = typeof Object.is == "function" ? Object.is : ux;
  function is(e, t) {
    if (zt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!Ct.call(t, l) || !zt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function cd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rd(e, t) {
    var n = cd(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = e + n.textContent.length), e <= t && a >= t))
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = cd(n);
    }
  }
  function ud(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ud(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function dd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Fs(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fs(e.document);
    }
    return t;
  }
  function ac(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var dx = Nn && "documentMode" in document && 11 >= document.documentMode,
    ol = null,
    lc = null,
    os = null,
    sc = !1;
  function fd(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sc ||
      ol == null ||
      ol !== Fs(a) ||
      ((a = ol),
      "selectionStart" in a && ac(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (os && is(os, a)) ||
        ((os = a),
        (a = Ki(lc, "onSelect")),
        0 < a.length &&
          ((t = new ai("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: a }),
          (t.target = ol))));
  }
  function Ta(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var cl = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionrun: Ta("Transition", "TransitionRun"),
      transitionstart: Ta("Transition", "TransitionStart"),
      transitioncancel: Ta("Transition", "TransitionCancel"),
      transitionend: Ta("Transition", "TransitionEnd"),
    },
    ic = {},
    md = {};
  Nn &&
    ((md = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete cl.animationend.animation,
      delete cl.animationiteration.animation,
      delete cl.animationstart.animation),
    "TransitionEvent" in window || delete cl.transitionend.transition);
  function Oa(e) {
    if (ic[e]) return ic[e];
    if (!cl[e]) return e;
    var t = cl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in md) return (ic[e] = t[n]);
    return e;
  }
  var gd = Oa("animationend"),
    pd = Oa("animationiteration"),
    hd = Oa("animationstart"),
    fx = Oa("transitionrun"),
    mx = Oa("transitionstart"),
    gx = Oa("transitioncancel"),
    xd = Oa("transitionend"),
    vd = new Map(),
    oc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  oc.push("scrollEnd");
  function It(e, t) {
    (vd.set(e, t), Ea(t, [e]));
  }
  var ii =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Gt = [],
    rl = 0,
    cc = 0;
  function oi() {
    for (var e = rl, t = (cc = rl = 0); t < e; ) {
      var n = Gt[t];
      Gt[t++] = null;
      var a = Gt[t];
      Gt[t++] = null;
      var l = Gt[t];
      Gt[t++] = null;
      var i = Gt[t];
      if (((Gt[t++] = null), a !== null && l !== null)) {
        var d = a.pending;
        (d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
          (a.pending = l));
      }
      i !== 0 && yd(n, l, i);
    }
  }
  function ci(e, t, n, a) {
    ((Gt[rl++] = e),
      (Gt[rl++] = t),
      (Gt[rl++] = n),
      (Gt[rl++] = a),
      (cc |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function rc(e, t, n, a) {
    return (ci(e, t, n, a), ri(e));
  }
  function Ca(e, t) {
    return (ci(e, null, null, t), ri(e));
  }
  function yd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      ((i.childLanes |= n),
        (a = i.alternate),
        a !== null && (a.childLanes |= n),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3
      ? ((i = e.stateNode),
        l &&
          t !== null &&
          ((l = 31 - ut(n)),
          (e = i.hiddenUpdates),
          (a = e[l]),
          a === null ? (e[l] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        i)
      : null;
  }
  function ri(e) {
    if (50 < Os) throw ((Os = 0), (vr = null), Error(r(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ul = {};
  function px(e, t, n, a) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Mt(e, t, n, a) {
    return new px(e, t, n, a);
  }
  function uc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Mt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function bd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function ui(e, t, n, a, l, i) {
    var d = 0;
    if (((a = e), typeof e == "function")) uc(e) && (d = 1);
    else if (typeof e == "string")
      d = bv(e, n, X.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ge:
          return (
            (e = Mt(31, n, t, l)),
            (e.elementType = ge),
            (e.lanes = i),
            e
          );
        case Y:
          return za(n.children, l, i, t);
        case V:
          ((d = 8), (l |= 24));
          break;
        case G:
          return (
            (e = Mt(12, n, t, l | 2)),
            (e.elementType = G),
            (e.lanes = i),
            e
          );
        case ee:
          return (
            (e = Mt(13, n, t, l)),
            (e.elementType = ee),
            (e.lanes = i),
            e
          );
        case se:
          return (
            (e = Mt(19, n, t, l)),
            (e.elementType = se),
            (e.lanes = i),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                d = 10;
                break e;
              case I:
                d = 9;
                break e;
              case P:
                d = 11;
                break e;
              case Q:
                d = 14;
                break e;
              case Z:
                ((d = 16), (a = null));
                break e;
            }
          ((d = 29),
            (n = Error(r(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = Mt(d, n, t, l)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = i),
      t
    );
  }
  function za(e, t, n, a) {
    return ((e = Mt(7, e, a, t)), (e.lanes = n), e);
  }
  function dc(e, t, n) {
    return ((e = Mt(6, e, null, t)), (e.lanes = n), e);
  }
  function jd(e) {
    var t = Mt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function fc(e, t, n) {
    return (
      (t = Mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var wd = new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = wd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Zl(t) }), wd.set(e, t), t);
    }
    return { value: e, source: t, stack: Zl(t) };
  }
  var dl = [],
    fl = 0,
    di = null,
    cs = 0,
    Xt = [],
    Qt = 0,
    Jn = null,
    rn = 1,
    un = "";
  function An(e, t) {
    ((dl[fl++] = cs), (dl[fl++] = di), (di = e), (cs = t));
  }
  function Nd(e, t, n) {
    ((Xt[Qt++] = rn), (Xt[Qt++] = un), (Xt[Qt++] = Jn), (Jn = e));
    var a = rn;
    e = un;
    var l = 32 - ut(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var i = 32 - ut(t) + l;
    if (30 < i) {
      var d = l - (l % 5);
      ((i = (a & ((1 << d) - 1)).toString(32)),
        (a >>= d),
        (l -= d),
        (rn = (1 << (32 - ut(t) + l)) | (n << l) | a),
        (un = i + e));
    } else ((rn = (1 << i) | (n << l) | a), (un = e));
  }
  function mc(e) {
    e.return !== null && (An(e, 1), Nd(e, 1, 0));
  }
  function gc(e) {
    for (; e === di; )
      ((di = dl[--fl]), (dl[fl] = null), (cs = dl[--fl]), (dl[fl] = null));
    for (; e === Jn; )
      ((Jn = Xt[--Qt]),
        (Xt[Qt] = null),
        (un = Xt[--Qt]),
        (Xt[Qt] = null),
        (rn = Xt[--Qt]),
        (Xt[Qt] = null));
  }
  function Sd(e, t) {
    ((Xt[Qt++] = rn),
      (Xt[Qt++] = un),
      (Xt[Qt++] = Jn),
      (rn = t.id),
      (un = t.overflow),
      (Jn = e));
  }
  var it = null,
    Le = null,
    Te = !1,
    Wn = null,
    Zt = !1,
    pc = Error(r(519));
  function $n(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (rs(Vt(t, e)), pc);
  }
  function Ad(e) {
    var t = e.stateNode,
      n = e.type,
      a = e.memoizedProps;
    switch (((t[st] = e), (t[wt] = a), n)) {
      case "dialog":
        (Se("cancel", t), Se("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Se("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < zs.length; n++) Se(zs[n], t);
        break;
      case "source":
        Se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Se("error", t), Se("load", t));
        break;
      case "details":
        Se("toggle", t);
        break;
      case "input":
        (Se("invalid", t),
          Uu(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ));
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        (Se("invalid", t), Yu(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Vm(t.textContent, n)
        ? (a.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          a.onScroll != null && Se("scroll", t),
          a.onScrollEnd != null && Se("scrollend", t),
          a.onClick != null && (t.onclick = wn),
          (t = !0))
        : (t = !1),
      t || $n(e, !0));
  }
  function Ed(e) {
    for (it = e.return; it; )
      switch (it.tag) {
        case 5:
        case 31:
        case 13:
          Zt = !1;
          return;
        case 27:
        case 3:
          Zt = !0;
          return;
        default:
          it = it.return;
      }
  }
  function ml(e) {
    if (e !== it) return !1;
    if (!Te) return (Ed(e), (Te = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Dr(e.type, e.memoizedProps))),
        (n = !n)),
      n && Le && $n(e),
      Ed(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      Le = Fm(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(r(317));
      Le = Fm(e);
    } else
      t === 27
        ? ((t = Le), ua(e.type) ? ((e = Ur), (Ur = null), (Le = e)) : (Le = t))
        : (Le = it ? Jt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ma() {
    ((Le = it = null), (Te = !1));
  }
  function hc() {
    var e = Wn;
    return (
      e !== null &&
        (kt === null ? (kt = e) : kt.push.apply(kt, e), (Wn = null)),
      e
    );
  }
  function rs(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  var xc = w(null),
    Da = null,
    En = null;
  function Pn(e, t, n) {
    (R(xc, t._currentValue), (t._currentValue = n));
  }
  function kn(e) {
    ((e._currentValue = xc.current), H(xc));
  }
  function vc(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function yc(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var d = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var g = i;
          i = l;
          for (var b = 0; b < t.length; b++)
            if (g.context === t[b]) {
              ((i.lanes |= n),
                (g = i.alternate),
                g !== null && (g.lanes |= n),
                vc(i.return, n, e),
                a || (d = null));
              break e;
            }
          i = g.next;
        }
      } else if (l.tag === 18) {
        if (((d = l.return), d === null)) throw Error(r(341));
        ((d.lanes |= n),
          (i = d.alternate),
          i !== null && (i.lanes |= n),
          vc(d, n, e),
          (d = null));
      } else d = l.child;
      if (d !== null) d.return = l;
      else
        for (d = l; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((l = d.sibling), l !== null)) {
            ((l.return = d.return), (d = l));
            break;
          }
          d = d.return;
        }
      l = d;
    }
  }
  function gl(e, t, n, a) {
    e = null;
    for (var l = t, i = !1; l !== null; ) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var d = l.alternate;
        if (d === null) throw Error(r(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = l.type;
          zt(l.pendingProps.value, d.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (l === ae.current) {
        if (((d = l.alternate), d === null)) throw Error(r(387));
        d.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(Rs) : (e = [Rs]));
      }
      l = l.return;
    }
    (e !== null && yc(t, e, n, a), (t.flags |= 262144));
  }
  function fi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!zt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function _a(e) {
    ((Da = e),
      (En = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function ot(e) {
    return kd(Da, e);
  }
  function mi(e, t) {
    return (Da === null && _a(e), kd(e, t));
  }
  function kd(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), En === null)) {
      if (e === null) throw Error(r(308));
      ((En = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else En = En.next = t;
    return n;
  }
  var hx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    xx = s.unstable_scheduleCallback,
    vx = s.unstable_NormalPriority,
    Je = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function bc() {
    return { controller: new hx(), data: new Map(), refCount: 0 };
  }
  function us(e) {
    (e.refCount--,
      e.refCount === 0 &&
        xx(vx, function () {
          e.controller.abort();
        }));
  }
  var ds = null,
    jc = 0,
    pl = 0,
    hl = null;
  function yx(e, t) {
    if (ds === null) {
      var n = (ds = []);
      ((jc = 0),
        (pl = Sr()),
        (hl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (jc++, t.then(Td, Td), t);
  }
  function Td() {
    if (--jc === 0 && ds !== null) {
      hl !== null && (hl.status = "fulfilled");
      var e = ds;
      ((ds = null), (pl = 0), (hl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function bx(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var l = 0; l < n.length; l++) (0, n[l])(t);
        },
        function (l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        }
      ),
      a
    );
  }
  var Od = S.S;
  S.S = function (e, t) {
    ((mm = ht()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        yx(e, t),
      Od !== null && Od(e, t));
  };
  var Ba = w(null);
  function wc() {
    var e = Ba.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function gi(e, t) {
    t === null ? R(Ba, Ba.current) : R(Ba, t.pool);
  }
  function Cd() {
    var e = wc();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var xl = Error(r(460)),
    Nc = Error(r(474)),
    pi = Error(r(542)),
    hi = { then: function () {} };
  function zd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Md(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(wn, wn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), _d(e), e);
      default:
        if (typeof t.status == "string") t.then(wn, wn);
        else {
          if (((e = Ue), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "fulfilled"), (l.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "rejected"), (l.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), _d(e), e);
        }
        throw ((Ha = t), xl);
    }
  }
  function Ra(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Ha = n), xl)
        : n;
    }
  }
  var Ha = null;
  function Dd() {
    if (Ha === null) throw Error(r(459));
    var e = Ha;
    return ((Ha = null), e);
  }
  function _d(e) {
    if (e === xl || e === pi) throw Error(r(483));
  }
  var vl = null,
    fs = 0;
  function xi(e) {
    var t = fs;
    return ((fs += 1), vl === null && (vl = []), Md(vl, e, t));
  }
  function ms(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function vi(e, t) {
    throw t.$$typeof === E
      ? Error(r(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Bd(e) {
    function t(A, N) {
      if (e) {
        var k = A.deletions;
        k === null ? ((A.deletions = [N]), (A.flags |= 16)) : k.push(N);
      }
    }
    function n(A, N) {
      if (!e) return null;
      for (; N !== null; ) (t(A, N), (N = N.sibling));
      return null;
    }
    function a(A) {
      for (var N = new Map(); A !== null; )
        (A.key !== null ? N.set(A.key, A) : N.set(A.index, A), (A = A.sibling));
      return N;
    }
    function l(A, N) {
      return ((A = Sn(A, N)), (A.index = 0), (A.sibling = null), A);
    }
    function i(A, N, k) {
      return (
        (A.index = k),
        e
          ? ((k = A.alternate),
            k !== null
              ? ((k = k.index), k < N ? ((A.flags |= 67108866), N) : k)
              : ((A.flags |= 67108866), N))
          : ((A.flags |= 1048576), N)
      );
    }
    function d(A) {
      return (e && A.alternate === null && (A.flags |= 67108866), A);
    }
    function g(A, N, k, L) {
      return N === null || N.tag !== 6
        ? ((N = dc(k, A.mode, L)), (N.return = A), N)
        : ((N = l(N, k)), (N.return = A), N);
    }
    function b(A, N, k, L) {
      var ce = k.type;
      return ce === Y
        ? B(A, N, k.props.children, L, k.key)
        : N !== null &&
            (N.elementType === ce ||
              (typeof ce == "object" &&
                ce !== null &&
                ce.$$typeof === Z &&
                Ra(ce) === N.type))
          ? ((N = l(N, k.props)), ms(N, k), (N.return = A), N)
          : ((N = ui(k.type, k.key, k.props, null, A.mode, L)),
            ms(N, k),
            (N.return = A),
            N);
    }
    function T(A, N, k, L) {
      return N === null ||
        N.tag !== 4 ||
        N.stateNode.containerInfo !== k.containerInfo ||
        N.stateNode.implementation !== k.implementation
        ? ((N = fc(k, A.mode, L)), (N.return = A), N)
        : ((N = l(N, k.children || [])), (N.return = A), N);
    }
    function B(A, N, k, L, ce) {
      return N === null || N.tag !== 7
        ? ((N = za(k, A.mode, L, ce)), (N.return = A), N)
        : ((N = l(N, k)), (N.return = A), N);
    }
    function q(A, N, k) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((N = dc("" + N, A.mode, k)), (N.return = A), N);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case C:
            return (
              (k = ui(N.type, N.key, N.props, null, A.mode, k)),
              ms(k, N),
              (k.return = A),
              k
            );
          case M:
            return ((N = fc(N, A.mode, k)), (N.return = A), N);
          case Z:
            return ((N = Ra(N)), q(A, N, k));
        }
        if (je(N) || he(N))
          return ((N = za(N, A.mode, k, null)), (N.return = A), N);
        if (typeof N.then == "function") return q(A, xi(N), k);
        if (N.$$typeof === J) return q(A, mi(A, N), k);
        vi(A, N);
      }
      return null;
    }
    function O(A, N, k, L) {
      var ce = N !== null ? N.key : null;
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return ce !== null ? null : g(A, N, "" + k, L);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case C:
            return k.key === ce ? b(A, N, k, L) : null;
          case M:
            return k.key === ce ? T(A, N, k, L) : null;
          case Z:
            return ((k = Ra(k)), O(A, N, k, L));
        }
        if (je(k) || he(k)) return ce !== null ? null : B(A, N, k, L, null);
        if (typeof k.then == "function") return O(A, N, xi(k), L);
        if (k.$$typeof === J) return O(A, N, mi(A, k), L);
        vi(A, k);
      }
      return null;
    }
    function _(A, N, k, L, ce) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((A = A.get(k) || null), g(N, A, "" + L, ce));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case C:
            return (
              (A = A.get(L.key === null ? k : L.key) || null),
              b(N, A, L, ce)
            );
          case M:
            return (
              (A = A.get(L.key === null ? k : L.key) || null),
              T(N, A, L, ce)
            );
          case Z:
            return ((L = Ra(L)), _(A, N, k, L, ce));
        }
        if (je(L) || he(L))
          return ((A = A.get(k) || null), B(N, A, L, ce, null));
        if (typeof L.then == "function") return _(A, N, k, xi(L), ce);
        if (L.$$typeof === J) return _(A, N, k, mi(N, L), ce);
        vi(N, L);
      }
      return null;
    }
    function F(A, N, k, L) {
      for (
        var ce = null, Ce = null, le = N, ve = (N = 0), Ee = null;
        le !== null && ve < k.length;
        ve++
      ) {
        le.index > ve ? ((Ee = le), (le = null)) : (Ee = le.sibling);
        var ze = O(A, le, k[ve], L);
        if (ze === null) {
          le === null && (le = Ee);
          break;
        }
        (e && le && ze.alternate === null && t(A, le),
          (N = i(ze, N, ve)),
          Ce === null ? (ce = ze) : (Ce.sibling = ze),
          (Ce = ze),
          (le = Ee));
      }
      if (ve === k.length) return (n(A, le), Te && An(A, ve), ce);
      if (le === null) {
        for (; ve < k.length; ve++)
          ((le = q(A, k[ve], L)),
            le !== null &&
              ((N = i(le, N, ve)),
              Ce === null ? (ce = le) : (Ce.sibling = le),
              (Ce = le)));
        return (Te && An(A, ve), ce);
      }
      for (le = a(le); ve < k.length; ve++)
        ((Ee = _(le, A, ve, k[ve], L)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              le.delete(Ee.key === null ? ve : Ee.key),
            (N = i(Ee, N, ve)),
            Ce === null ? (ce = Ee) : (Ce.sibling = Ee),
            (Ce = Ee)));
      return (
        e &&
          le.forEach(function (pa) {
            return t(A, pa);
          }),
        Te && An(A, ve),
        ce
      );
    }
    function ue(A, N, k, L) {
      if (k == null) throw Error(r(151));
      for (
        var ce = null,
          Ce = null,
          le = N,
          ve = (N = 0),
          Ee = null,
          ze = k.next();
        le !== null && !ze.done;
        ve++, ze = k.next()
      ) {
        le.index > ve ? ((Ee = le), (le = null)) : (Ee = le.sibling);
        var pa = O(A, le, ze.value, L);
        if (pa === null) {
          le === null && (le = Ee);
          break;
        }
        (e && le && pa.alternate === null && t(A, le),
          (N = i(pa, N, ve)),
          Ce === null ? (ce = pa) : (Ce.sibling = pa),
          (Ce = pa),
          (le = Ee));
      }
      if (ze.done) return (n(A, le), Te && An(A, ve), ce);
      if (le === null) {
        for (; !ze.done; ve++, ze = k.next())
          ((ze = q(A, ze.value, L)),
            ze !== null &&
              ((N = i(ze, N, ve)),
              Ce === null ? (ce = ze) : (Ce.sibling = ze),
              (Ce = ze)));
        return (Te && An(A, ve), ce);
      }
      for (le = a(le); !ze.done; ve++, ze = k.next())
        ((ze = _(le, A, ve, ze.value, L)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              le.delete(ze.key === null ? ve : ze.key),
            (N = i(ze, N, ve)),
            Ce === null ? (ce = ze) : (Ce.sibling = ze),
            (Ce = ze)));
      return (
        e &&
          le.forEach(function (zv) {
            return t(A, zv);
          }),
        Te && An(A, ve),
        ce
      );
    }
    function He(A, N, k, L) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === Y &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case C:
            e: {
              for (var ce = k.key; N !== null; ) {
                if (N.key === ce) {
                  if (((ce = k.type), ce === Y)) {
                    if (N.tag === 7) {
                      (n(A, N.sibling),
                        (L = l(N, k.props.children)),
                        (L.return = A),
                        (A = L));
                      break e;
                    }
                  } else if (
                    N.elementType === ce ||
                    (typeof ce == "object" &&
                      ce !== null &&
                      ce.$$typeof === Z &&
                      Ra(ce) === N.type)
                  ) {
                    (n(A, N.sibling),
                      (L = l(N, k.props)),
                      ms(L, k),
                      (L.return = A),
                      (A = L));
                    break e;
                  }
                  n(A, N);
                  break;
                } else t(A, N);
                N = N.sibling;
              }
              k.type === Y
                ? ((L = za(k.props.children, A.mode, L, k.key)),
                  (L.return = A),
                  (A = L))
                : ((L = ui(k.type, k.key, k.props, null, A.mode, L)),
                  ms(L, k),
                  (L.return = A),
                  (A = L));
            }
            return d(A);
          case M:
            e: {
              for (ce = k.key; N !== null; ) {
                if (N.key === ce)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === k.containerInfo &&
                    N.stateNode.implementation === k.implementation
                  ) {
                    (n(A, N.sibling),
                      (L = l(N, k.children || [])),
                      (L.return = A),
                      (A = L));
                    break e;
                  } else {
                    n(A, N);
                    break;
                  }
                else t(A, N);
                N = N.sibling;
              }
              ((L = fc(k, A.mode, L)), (L.return = A), (A = L));
            }
            return d(A);
          case Z:
            return ((k = Ra(k)), He(A, N, k, L));
        }
        if (je(k)) return F(A, N, k, L);
        if (he(k)) {
          if (((ce = he(k)), typeof ce != "function")) throw Error(r(150));
          return ((k = ce.call(k)), ue(A, N, k, L));
        }
        if (typeof k.then == "function") return He(A, N, xi(k), L);
        if (k.$$typeof === J) return He(A, N, mi(A, k), L);
        vi(A, k);
      }
      return (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
        ? ((k = "" + k),
          N !== null && N.tag === 6
            ? (n(A, N.sibling), (L = l(N, k)), (L.return = A), (A = L))
            : (n(A, N), (L = dc(k, A.mode, L)), (L.return = A), (A = L)),
          d(A))
        : n(A, N);
    }
    return function (A, N, k, L) {
      try {
        fs = 0;
        var ce = He(A, N, k, L);
        return ((vl = null), ce);
      } catch (le) {
        if (le === xl || le === pi) throw le;
        var Ce = Mt(29, le, null, A.mode);
        return ((Ce.lanes = L), (Ce.return = A), Ce);
      } finally {
      }
    };
  }
  var Ua = Bd(!0),
    Rd = Bd(!1),
    Fn = !1;
  function Sc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ac(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function In(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (Me & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (a.pending = t),
        (t = ri(e)),
        yd(e, null, n),
        t
      );
    }
    return (ci(e, a, t, n), ri(e));
  }
  function gs(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), bt(e, n));
    }
  }
  function Ec(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (i === null ? (l = i = d) : (i = i.next = d), (n = n.next));
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var kc = !1;
  function ps() {
    if (kc) {
      var e = hl;
      if (e !== null) throw e;
    }
  }
  function hs(e, t, n, a) {
    kc = !1;
    var l = e.updateQueue;
    Fn = !1;
    var i = l.firstBaseUpdate,
      d = l.lastBaseUpdate,
      g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var b = g,
        T = b.next;
      ((b.next = null), d === null ? (i = T) : (d.next = T), (d = b));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (g = B.lastBaseUpdate),
        g !== d &&
          (g === null ? (B.firstBaseUpdate = T) : (g.next = T),
          (B.lastBaseUpdate = b)));
    }
    if (i !== null) {
      var q = l.baseState;
      ((d = 0), (B = T = b = null), (g = i));
      do {
        var O = g.lane & -536870913,
          _ = O !== g.lane;
        if (_ ? (Ae & O) === O : (a & O) === O) {
          (O !== 0 && O === pl && (kc = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var F = e,
              ue = g;
            O = t;
            var He = n;
            switch (ue.tag) {
              case 1:
                if (((F = ue.payload), typeof F == "function")) {
                  q = F.call(He, q, O);
                  break e;
                }
                q = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = ue.payload),
                  (O = typeof F == "function" ? F.call(He, q, O) : F),
                  O == null)
                )
                  break e;
                q = p({}, q, O);
                break e;
              case 2:
                Fn = !0;
            }
          }
          ((O = g.callback),
            O !== null &&
              ((e.flags |= 64),
              _ && (e.flags |= 8192),
              (_ = l.callbacks),
              _ === null ? (l.callbacks = [O]) : _.push(O)));
        } else
          ((_ = {
            lane: O,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            B === null ? ((T = B = _), (b = q)) : (B = B.next = _),
            (d |= O));
        if (((g = g.next), g === null)) {
          if (((g = l.shared.pending), g === null)) break;
          ((_ = g),
            (g = _.next),
            (_.next = null),
            (l.lastBaseUpdate = _),
            (l.shared.pending = null));
        }
      } while (!0);
      (B === null && (b = q),
        (l.baseState = b),
        (l.firstBaseUpdate = T),
        (l.lastBaseUpdate = B),
        i === null && (l.shared.lanes = 0),
        (sa |= d),
        (e.lanes = d),
        (e.memoizedState = q));
    }
  }
  function Hd(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function Ud(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Hd(n[e], t);
  }
  var yl = w(null),
    yi = w(0);
  function Ld(e, t) {
    ((e = Rn), R(yi, e), R(yl, t), (Rn = e | t.baseLanes));
  }
  function Tc() {
    (R(yi, Rn), R(yl, yl.current));
  }
  function Oc() {
    ((Rn = yi.current), H(yl), H(yi));
  }
  var Dt = w(null),
    Kt = null;
  function ta(e) {
    var t = e.alternate;
    (R(Ze, Ze.current & 1),
      R(Dt, e),
      Kt === null &&
        (t === null || yl.current !== null || t.memoizedState !== null) &&
        (Kt = e));
  }
  function Cc(e) {
    (R(Ze, Ze.current), R(Dt, e), Kt === null && (Kt = e));
  }
  function Yd(e) {
    e.tag === 22
      ? (R(Ze, Ze.current), R(Dt, e), Kt === null && (Kt = e))
      : na();
  }
  function na() {
    (R(Ze, Ze.current), R(Dt, Dt.current));
  }
  function _t(e) {
    (H(Dt), Kt === e && (Kt = null), H(Ze));
  }
  var Ze = w(0);
  function bi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Rr(n) || Hr(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Tn = 0,
    pe = null,
    Be = null,
    We = null,
    ji = !1,
    bl = !1,
    La = !1,
    wi = 0,
    xs = 0,
    jl = null,
    jx = 0;
  function Xe() {
    throw Error(r(321));
  }
  function zc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function Mc(e, t, n, a, l, i) {
    return (
      (Tn = i),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = e === null || e.memoizedState === null ? Sf : Kc),
      (La = !1),
      (i = n(a, l)),
      (La = !1),
      bl && (i = Gd(t, n, a, l)),
      qd(e),
      i
    );
  }
  function qd(e) {
    S.H = bs;
    var t = Be !== null && Be.next !== null;
    if (((Tn = 0), (We = Be = pe = null), (ji = !1), (xs = 0), (jl = null), t))
      throw Error(r(300));
    e === null ||
      $e ||
      ((e = e.dependencies), e !== null && fi(e) && ($e = !0));
  }
  function Gd(e, t, n, a) {
    pe = e;
    var l = 0;
    do {
      if ((bl && (jl = null), (xs = 0), (bl = !1), 25 <= l))
        throw Error(r(301));
      if (((l += 1), (We = Be = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((S.H = Af), (i = t(n, a)));
    } while (bl);
    return i;
  }
  function wx() {
    var e = S.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? vs(t) : t),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function Dc() {
    var e = wi !== 0;
    return ((wi = 0), e);
  }
  function _c(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Bc(e) {
    if (ji) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ji = !1;
    }
    ((Tn = 0), (We = Be = pe = null), (bl = !1), (xs = wi = 0), (jl = null));
  }
  function vt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (We === null ? (pe.memoizedState = We = e) : (We = We.next = e), We);
  }
  function Ke() {
    if (Be === null) {
      var e = pe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Be.next;
    var t = We === null ? pe.memoizedState : We.next;
    if (t !== null) ((We = t), (Be = e));
    else {
      if (e === null)
        throw pe.alternate === null ? Error(r(467)) : Error(r(310));
      ((Be = e),
        (e = {
          memoizedState: Be.memoizedState,
          baseState: Be.baseState,
          baseQueue: Be.baseQueue,
          queue: Be.queue,
          next: null,
        }),
        We === null ? (pe.memoizedState = We = e) : (We = We.next = e));
    }
    return We;
  }
  function Ni() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function vs(e) {
    var t = xs;
    return (
      (xs += 1),
      jl === null && (jl = []),
      (e = Md(jl, e, t)),
      (t = pe),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? Sf : Kc)),
      e
    );
  }
  function Si(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return vs(e);
      if (e.$$typeof === J) return ot(e);
    }
    throw Error(r(438, String(e)));
  }
  function Rc(e) {
    var t = null,
      n = pe.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var a = pe.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Ni()), (pe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = we;
    return (t.index++, n);
  }
  function On(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ai(e) {
    var t = Ke();
    return Hc(t, Be, e);
  }
  function Hc(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (l !== null) {
        var d = l.next;
        ((l.next = i.next), (i.next = d));
      }
      ((t.baseQueue = l = i), (a.pending = null));
    }
    if (((i = e.baseState), l === null)) e.memoizedState = i;
    else {
      t = l.next;
      var g = (d = null),
        b = null,
        T = t,
        B = !1;
      do {
        var q = T.lane & -536870913;
        if (q !== T.lane ? (Ae & q) === q : (Tn & q) === q) {
          var O = T.revertLane;
          if (O === 0)
            (b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: T.action,
                  hasEagerState: T.hasEagerState,
                  eagerState: T.eagerState,
                  next: null,
                }),
              q === pl && (B = !0));
          else if ((Tn & O) === O) {
            ((T = T.next), O === pl && (B = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: T.revertLane,
              gesture: null,
              action: T.action,
              hasEagerState: T.hasEagerState,
              eagerState: T.eagerState,
              next: null,
            }),
              b === null ? ((g = b = q), (d = i)) : (b = b.next = q),
              (pe.lanes |= O),
              (sa |= O));
          ((q = T.action),
            La && n(i, q),
            (i = T.hasEagerState ? T.eagerState : n(i, q)));
        } else
          ((O = {
            lane: q,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            b === null ? ((g = b = O), (d = i)) : (b = b.next = O),
            (pe.lanes |= q),
            (sa |= q));
        T = T.next;
      } while (T !== null && T !== t);
      if (
        (b === null ? (d = i) : (b.next = g),
        !zt(i, e.memoizedState) && (($e = !0), B && ((n = hl), n !== null)))
      )
        throw n;
      ((e.memoizedState = i),
        (e.baseState = d),
        (e.baseQueue = b),
        (a.lastRenderedState = i));
    }
    return (l === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Uc(e) {
    var t = Ke(),
      n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var d = (l = l.next);
      do ((i = e(i, d.action)), (d = d.next));
      while (d !== l);
      (zt(i, t.memoizedState) || ($e = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, a];
  }
  function Vd(e, t, n) {
    var a = pe,
      l = Ke(),
      i = Te;
    if (i) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = t();
    var d = !zt((Be || l).memoizedState, n);
    if (
      (d && ((l.memoizedState = n), ($e = !0)),
      (l = l.queue),
      qc(Zd.bind(null, a, l, e), [e]),
      l.getSnapshot !== t || d || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        wl(9, { destroy: void 0 }, Qd.bind(null, a, l, n, t), null),
        Ue === null)
      )
        throw Error(r(349));
      i || (Tn & 127) !== 0 || Xd(a, t, n);
    }
    return n;
  }
  function Xd(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = Ni()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Qd(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Kd(t) && Jd(e));
  }
  function Zd(e, t, n) {
    return n(function () {
      Kd(t) && Jd(e);
    });
  }
  function Kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function Jd(e) {
    var t = Ca(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function Lc(e) {
    var t = vt();
    if (typeof e == "function") {
      var n = e;
      if (((e = n()), La)) {
        Pt(!0);
        try {
          n();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Wd(e, t, n, a) {
    return ((e.baseState = n), Hc(e, Be, typeof a == "function" ? a : On));
  }
  function Nx(e, t, n, a, l) {
    if (Ti(e)) throw Error(r(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (d) {
          i.listeners.push(d);
        },
      };
      (S.T !== null ? n(!0) : (i.isTransition = !1),
        a(i),
        (n = t.pending),
        n === null
          ? ((i.next = t.pending = i), $d(t, i))
          : ((i.next = n.next), (t.pending = n.next = i)));
    }
  }
  function $d(e, t) {
    var n = t.action,
      a = t.payload,
      l = e.state;
    if (t.isTransition) {
      var i = S.T,
        d = {};
      S.T = d;
      try {
        var g = n(l, a),
          b = S.S;
        (b !== null && b(d, g), Pd(e, t, g));
      } catch (T) {
        Yc(e, t, T);
      } finally {
        (i !== null && d.types !== null && (i.types = d.types), (S.T = i));
      }
    } else
      try {
        ((i = n(l, a)), Pd(e, t, i));
      } catch (T) {
        Yc(e, t, T);
      }
  }
  function Pd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            Fd(e, t, a);
          },
          function (a) {
            return Yc(e, t, a);
          }
        )
      : Fd(e, t, n);
  }
  function Fd(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      Id(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), $d(e, n))));
  }
  function Yc(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = n), Id(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function Id(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ef(e, t) {
    return t;
  }
  function tf(e, t) {
    if (Te) {
      var n = Ue.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (Te) {
            if (Le) {
              t: {
                for (var l = Le, i = Zt; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (((l = Jt(l.nextSibling)), l === null)) {
                    l = null;
                    break t;
                  }
                }
                ((i = l.data), (l = i === "F!" || i === "F" ? l : null));
              }
              if (l) {
                ((Le = Jt(l.nextSibling)), (a = l.data === "F!"));
                break e;
              }
            }
            $n(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return (
      (n = vt()),
      (n.memoizedState = n.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ef,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = jf.bind(null, pe, a)),
      (a.dispatch = n),
      (a = Lc(!1)),
      (i = Zc.bind(null, pe, !1, a.queue)),
      (a = vt()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = l),
      (n = Nx.bind(null, pe, l, i, n)),
      (l.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function nf(e) {
    var t = Ke();
    return af(t, Be, e);
  }
  function af(e, t, n) {
    if (
      ((t = Hc(e, t, ef)[0]),
      (e = Ai(On)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = vs(t);
      } catch (d) {
        throw d === xl ? pi : d;
      }
    else a = t;
    t = Ke();
    var l = t.queue,
      i = l.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048),
        wl(9, { destroy: void 0 }, Sx.bind(null, l, n), null)),
      [a, i, e]
    );
  }
  function Sx(e, t) {
    e.action = t;
  }
  function lf(e) {
    var t = Ke(),
      n = Be;
    if (n !== null) return af(t, n, e);
    (Ke(), (t = t.memoizedState), (n = Ke()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = e), [t, a, !1]);
  }
  function wl(e, t, n, a) {
    return (
      (e = { tag: e, create: n, deps: a, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = Ni()), (pe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function sf() {
    return Ke().memoizedState;
  }
  function Ei(e, t, n, a) {
    var l = vt();
    ((pe.flags |= e),
      (l.memoizedState = wl(
        1 | t,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a
      )));
  }
  function ki(e, t, n, a) {
    var l = Ke();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Be !== null && a !== null && zc(a, Be.memoizedState.deps)
      ? (l.memoizedState = wl(t, i, n, a))
      : ((pe.flags |= e), (l.memoizedState = wl(1 | t, i, n, a)));
  }
  function of(e, t) {
    Ei(8390656, 8, e, t);
  }
  function qc(e, t) {
    ki(2048, 8, e, t);
  }
  function Ax(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = Ni()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function cf(e) {
    var t = Ke().memoizedState;
    return (
      Ax({ ref: t, nextImpl: e }),
      function () {
        if ((Me & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function rf(e, t) {
    return ki(4, 2, e, t);
  }
  function uf(e, t) {
    return ki(4, 4, e, t);
  }
  function df(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function () {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ff(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), ki(4, 4, df.bind(null, t, e), n));
  }
  function Gc() {}
  function mf(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && zc(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function gf(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && zc(t, a[1])) return a[0];
    if (((a = e()), La)) {
      Pt(!0);
      try {
        e();
      } finally {
        Pt(!1);
      }
    }
    return ((n.memoizedState = [a, t]), a);
  }
  function Vc(e, t, n) {
    return n === void 0 || ((Tn & 1073741824) !== 0 && (Ae & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = pm()), (pe.lanes |= e), (sa |= e), n);
  }
  function pf(e, t, n, a) {
    return zt(n, t)
      ? n
      : yl.current !== null
        ? ((e = Vc(e, n, a)), zt(e, t) || ($e = !0), e)
        : (Tn & 42) === 0 || ((Tn & 1073741824) !== 0 && (Ae & 261930) === 0)
          ? (($e = !0), (e.memoizedState = n))
          : ((e = pm()), (pe.lanes |= e), (sa |= e), t);
  }
  function hf(e, t, n, a, l) {
    var i = U.p;
    U.p = i !== 0 && 8 > i ? i : 8;
    var d = S.T,
      g = {};
    ((S.T = g), Zc(e, !1, t, n));
    try {
      var b = l(),
        T = S.S;
      if (
        (T !== null && T(g, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var B = bx(b, a);
        ys(e, t, B, Ht(e));
      } else ys(e, t, a, Ht(e));
    } catch (q) {
      ys(e, t, { then: function () {}, status: "rejected", reason: q }, Ht());
    } finally {
      ((U.p = i),
        d !== null && g.types !== null && (d.types = g.types),
        (S.T = d));
    }
  }
  function Ex() {}
  function Xc(e, t, n, a) {
    if (e.tag !== 5) throw Error(r(476));
    var l = xf(e).queue;
    hf(
      e,
      l,
      t,
      D,
      n === null
        ? Ex
        : function () {
            return (vf(e), n(a));
          }
    );
  }
  function xf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: D,
      baseState: D,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: D,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: On,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function vf(e) {
    var t = xf(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ys(e, t.next.queue, {}, Ht()));
  }
  function Qc() {
    return ot(Rs);
  }
  function yf() {
    return Ke().memoizedState;
  }
  function bf() {
    return Ke().memoizedState;
  }
  function kx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ht();
          e = In(n);
          var a = ea(t, e, n);
          (a !== null && (Tt(a, t, n), gs(a, t, n)),
            (t = { cache: bc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Tx(e, t, n) {
    var a = Ht();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ti(e)
        ? wf(t, n)
        : ((n = rc(e, t, n, a)), n !== null && (Tt(n, e, a), Nf(n, t, a))));
  }
  function jf(e, t, n) {
    var a = Ht();
    ys(e, t, n, a);
  }
  function ys(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ti(e)) wf(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = i(d, n);
          if (((l.hasEagerState = !0), (l.eagerState = g), zt(g, d)))
            return (ci(e, t, l, 0), Ue === null && oi(), !1);
        } catch {
        } finally {
        }
      if (((n = rc(e, t, l, a)), n !== null))
        return (Tt(n, e, a), Nf(n, t, a), !0);
    }
    return !1;
  }
  function Zc(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Sr(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ti(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = rc(e, n, a, 2)), t !== null && Tt(t, e, 2));
  }
  function Ti(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function wf(e, t) {
    bl = ji = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Nf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), bt(e, n));
    }
  }
  var bs = {
    readContext: ot,
    use: Si,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useLayoutEffect: Xe,
    useInsertionEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    useHostTransitionStatus: Xe,
    useFormState: Xe,
    useActionState: Xe,
    useOptimistic: Xe,
    useMemoCache: Xe,
    useCacheRefresh: Xe,
  };
  bs.useEffectEvent = Xe;
  var Sf = {
      readContext: ot,
      use: Si,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ot,
      useEffect: of,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Ei(4194308, 4, df.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ei(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ei(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = vt();
        t = t === void 0 ? null : t;
        var a = e();
        if (La) {
          Pt(!0);
          try {
            e();
          } finally {
            Pt(!1);
          }
        }
        return ((n.memoizedState = [a, t]), a);
      },
      useReducer: function (e, t, n) {
        var a = vt();
        if (n !== void 0) {
          var l = n(t);
          if (La) {
            Pt(!0);
            try {
              n(t);
            } finally {
              Pt(!1);
            }
          }
        } else l = t;
        return (
          (a.memoizedState = a.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (a.queue = e),
          (e = e.dispatch = Tx.bind(null, pe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Lc(e);
        var t = e.queue,
          n = jf.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Gc,
      useDeferredValue: function (e, t) {
        var n = vt();
        return Vc(n, e, t);
      },
      useTransition: function () {
        var e = Lc(!1);
        return (
          (e = hf.bind(null, pe, e.queue, !0, !1)),
          (vt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = pe,
          l = vt();
        if (Te) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = t()), Ue === null)) throw Error(r(349));
          (Ae & 127) !== 0 || Xd(a, t, n);
        }
        l.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (l.queue = i),
          of(Zd.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          wl(9, { destroy: void 0 }, Qd.bind(null, a, i, n, t), null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = Ue.identifierPrefix;
        if (Te) {
          var n = un,
            a = rn;
          ((n = (a & ~(1 << (32 - ut(a) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = wi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = jx++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Qc,
      useFormState: tf,
      useActionState: tf,
      useOptimistic: function (e) {
        var t = vt();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = Zc.bind(null, pe, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Rc,
      useCacheRefresh: function () {
        return (vt().memoizedState = kx.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = vt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Me & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Kc = {
      readContext: ot,
      use: Si,
      useCallback: mf,
      useContext: ot,
      useEffect: qc,
      useImperativeHandle: ff,
      useInsertionEffect: rf,
      useLayoutEffect: uf,
      useMemo: gf,
      useReducer: Ai,
      useRef: sf,
      useState: function () {
        return Ai(On);
      },
      useDebugValue: Gc,
      useDeferredValue: function (e, t) {
        var n = Ke();
        return pf(n, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ai(On)[0],
          t = Ke().memoizedState;
        return [typeof e == "boolean" ? e : vs(e), t];
      },
      useSyncExternalStore: Vd,
      useId: yf,
      useHostTransitionStatus: Qc,
      useFormState: nf,
      useActionState: nf,
      useOptimistic: function (e, t) {
        var n = Ke();
        return Wd(n, Be, e, t);
      },
      useMemoCache: Rc,
      useCacheRefresh: bf,
    };
  Kc.useEffectEvent = cf;
  var Af = {
    readContext: ot,
    use: Si,
    useCallback: mf,
    useContext: ot,
    useEffect: qc,
    useImperativeHandle: ff,
    useInsertionEffect: rf,
    useLayoutEffect: uf,
    useMemo: gf,
    useReducer: Uc,
    useRef: sf,
    useState: function () {
      return Uc(On);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e, t) {
      var n = Ke();
      return Be === null ? Vc(n, e, t) : pf(n, Be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Uc(On)[0],
        t = Ke().memoizedState;
      return [typeof e == "boolean" ? e : vs(e), t];
    },
    useSyncExternalStore: Vd,
    useId: yf,
    useHostTransitionStatus: Qc,
    useFormState: lf,
    useActionState: lf,
    useOptimistic: function (e, t) {
      var n = Ke();
      return Be !== null
        ? Wd(n, Be, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: bf,
  };
  Af.useEffectEvent = cf;
  function Jc(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : p({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Wc = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ht(),
        l = In(a);
      ((l.payload = t),
        n != null && (l.callback = n),
        (t = ea(e, l, a)),
        t !== null && (Tt(t, e, a), gs(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ht(),
        l = In(a);
      ((l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = ea(e, l, a)),
        t !== null && (Tt(t, e, a), gs(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ht(),
        a = In(n);
      ((a.tag = 2),
        t != null && (a.callback = t),
        (t = ea(e, a, n)),
        t !== null && (Tt(t, e, n), gs(t, e, n)));
    },
  };
  function Ef(e, t, n, a, l, i, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !is(n, a) || !is(l, i)
          : !0
    );
  }
  function kf(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Wc.enqueueReplaceState(t, t.state, null));
  }
  function Ya(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = p({}, n));
      for (var l in e) n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Tf(e) {
    ii(e);
  }
  function Of(e) {
    console.error(e);
  }
  function Cf(e) {
    ii(e);
  }
  function Oi(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function zf(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function $c(e, t, n) {
    return (
      (n = In(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Oi(e, t);
      }),
      n
    );
  }
  function Mf(e) {
    return ((e = In(e)), (e.tag = 3), e);
  }
  function Df(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      ((e.payload = function () {
        return l(i);
      }),
        (e.callback = function () {
          zf(t, n, a);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (zf(t, n, a),
          typeof l != "function" &&
            (ia === null ? (ia = new Set([this])) : ia.add(this)));
        var g = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Ox(e, t, n, a, l) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && gl(t, n, l, !0),
        (n = Dt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Kt === null ? qi() : n.alternate === null && Qe === 0 && (Qe = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === hi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  jr(e, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === hi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
                  jr(e, a, l)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return (jr(e, a, l), qi(), !1);
    }
    if (Te)
      return (
        (t = Dt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            a !== pc && ((e = Error(r(422), { cause: a })), rs(Vt(e, n))))
          : (a !== pc && ((t = Error(r(423), { cause: a })), rs(Vt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (a = Vt(a, n)),
            (l = $c(e.stateNode, a, l)),
            Ec(e, l),
            Qe !== 4 && (Qe = 2)),
        !1
      );
    var i = Error(r(520), { cause: a });
    if (
      ((i = Vt(i, n)),
      Ts === null ? (Ts = [i]) : Ts.push(i),
      Qe !== 4 && (Qe = 2),
      t === null)
    )
      return !0;
    ((a = Vt(a, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = l & -l),
            (n.lanes |= e),
            (e = $c(n.stateNode, a, e)),
            Ec(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (i = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (ia === null || !ia.has(i)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Mf(l)),
              Df(l, e, n, a),
              Ec(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Pc = Error(r(461)),
    $e = !1;
  function ct(e, t, n, a) {
    t.child = e === null ? Rd(t, null, n, a) : Ua(t, e.child, n, a);
  }
  function _f(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var g in a) g !== "ref" && (d[g] = a[g]);
    } else d = a;
    return (
      _a(t),
      (a = Mc(e, t, n, d, i, l)),
      (g = Dc()),
      e !== null && !$e
        ? (_c(e, t, l), Cn(e, t, l))
        : (Te && g && mc(t), (t.flags |= 1), ct(e, t, a, l), t.child)
    );
  }
  function Bf(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !uc(i) &&
        i.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = i), Rf(e, t, i, a, l))
        : ((e = ui(n.type, null, a, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !sr(e, l))) {
      var d = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : is), n(d, a) && e.ref === t.ref)
      )
        return Cn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = Sn(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rf(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (is(i, a) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = a = i), sr(e, l)))
          (e.flags & 131072) !== 0 && ($e = !0);
        else return ((t.lanes = e.lanes), Cn(e, t, l));
    }
    return Fc(e, t, n, a, l);
  }
  function Hf(e, t, n, a) {
    var l = a.children,
      i = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | n : n), e !== null)) {
          for (a = t.child = e.child, l = 0; a !== null; )
            ((l = l | a.lanes | a.childLanes), (a = a.sibling));
          a = l & ~i;
        } else ((a = 0), (t.child = null));
        return Uf(e, t, i, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gi(t, i !== null ? i.cachePool : null),
          i !== null ? Ld(t, i) : Tc(),
          Yd(t));
      else
        return (
          (a = t.lanes = 536870912),
          Uf(e, t, i !== null ? i.baseLanes | n : n, n, a)
        );
    } else
      i !== null
        ? (gi(t, i.cachePool), Ld(t, i), na(), (t.memoizedState = null))
        : (e !== null && gi(t, null), Tc(), na());
    return (ct(e, t, l, n), t.child);
  }
  function js(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Uf(e, t, n, a, l) {
    var i = wc();
    return (
      (i = i === null ? null : { parent: Je._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && gi(t, null),
      Tc(),
      Yd(t),
      e !== null && gl(e, t, a, !0),
      (t.childLanes = l),
      null
    );
  }
  function Ci(e, t) {
    return (
      (t = Mi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Lf(e, t, n) {
    return (
      Ua(t, e.child, null, n),
      (e = Ci(t, t.pendingProps)),
      (e.flags |= 2),
      _t(t),
      (t.memoizedState = null),
      e
    );
  }
  function Cx(e, t, n) {
    var a = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Te) {
        if (a.mode === "hidden")
          return ((e = Ci(t, a)), (t.lanes = 536870912), js(null, e));
        if (
          (Cc(t),
          (e = Le)
            ? ((e = Pm(e, Zt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Jn !== null ? { id: rn, overflow: un } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = jd(e)),
                (n.return = t),
                (t.child = n),
                (it = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw $n(t);
        return ((t.lanes = 536870912), null);
      }
      return Ci(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var d = i.dehydrated;
      if ((Cc(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = Lf(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        ($e || gl(e, t, n, !1), (l = (n & e.childLanes) !== 0), $e || l)
      ) {
        if (
          ((a = Ue),
          a !== null && ((d = jt(a, n)), d !== 0 && d !== i.retryLane))
        )
          throw ((i.retryLane = d), Ca(e, d), Tt(a, e, d), Pc);
        (qi(), (t = Lf(e, t, n)));
      } else
        ((e = i.treeContext),
          (Le = Jt(d.nextSibling)),
          (it = t),
          (Te = !0),
          (Wn = null),
          (Zt = !1),
          e !== null && Sd(t, e),
          (t = Ci(t, a)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Sn(e.child, { mode: a.mode, children: a.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function zi(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Fc(e, t, n, a, l) {
    return (
      _a(t),
      (n = Mc(e, t, n, a, void 0, l)),
      (a = Dc()),
      e !== null && !$e
        ? (_c(e, t, l), Cn(e, t, l))
        : (Te && a && mc(t), (t.flags |= 1), ct(e, t, n, l), t.child)
    );
  }
  function Yf(e, t, n, a, l, i) {
    return (
      _a(t),
      (t.updateQueue = null),
      (n = Gd(t, a, n, l)),
      qd(e),
      (a = Dc()),
      e !== null && !$e
        ? (_c(e, t, i), Cn(e, t, i))
        : (Te && a && mc(t), (t.flags |= 1), ct(e, t, n, i), t.child)
    );
  }
  function qf(e, t, n, a, l) {
    if ((_a(t), t.stateNode === null)) {
      var i = ul,
        d = n.contextType;
      (typeof d == "object" && d !== null && (i = ot(d)),
        (i = new n(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Wc),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Sc(t),
        (d = n.contextType),
        (i.context = typeof d == "object" && d !== null ? ot(d) : ul),
        (i.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && (Jc(t, n, d, a), (i.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((d = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          d !== i.state && Wc.enqueueReplaceState(i, i.state, null),
          hs(t, a, i, l),
          ps(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0));
    } else if (e === null) {
      i = t.stateNode;
      var g = t.memoizedProps,
        b = Ya(n, g);
      i.props = b;
      var T = i.context,
        B = n.contextType;
      ((d = ul), typeof B == "object" && B !== null && (d = ot(B)));
      var q = n.getDerivedStateFromProps;
      ((B =
        typeof q == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        B ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((g || T !== d) && kf(t, i, a, d)),
        (Fn = !1));
      var O = t.memoizedState;
      ((i.state = O),
        hs(t, a, i, l),
        ps(),
        (T = t.memoizedState),
        g || O !== T || Fn
          ? (typeof q == "function" && (Jc(t, n, q, a), (T = t.memoizedState)),
            (b = Fn || Ef(t, n, b, a, O, T, d))
              ? (B ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = T)),
            (i.props = a),
            (i.state = T),
            (i.context = d),
            (a = b))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1)));
    } else {
      ((i = t.stateNode),
        Ac(e, t),
        (d = t.memoizedProps),
        (B = Ya(n, d)),
        (i.props = B),
        (q = t.pendingProps),
        (O = i.context),
        (T = n.contextType),
        (b = ul),
        typeof T == "object" && T !== null && (b = ot(T)),
        (g = n.getDerivedStateFromProps),
        (T =
          typeof g == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d !== q || O !== b) && kf(t, i, a, b)),
        (Fn = !1),
        (O = t.memoizedState),
        (i.state = O),
        hs(t, a, i, l),
        ps());
      var _ = t.memoizedState;
      d !== q ||
      O !== _ ||
      Fn ||
      (e !== null && e.dependencies !== null && fi(e.dependencies))
        ? (typeof g == "function" && (Jc(t, n, g, a), (_ = t.memoizedState)),
          (B =
            Fn ||
            Ef(t, n, B, a, O, _, b) ||
            (e !== null && e.dependencies !== null && fi(e.dependencies)))
            ? (T ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, _, b),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, _, b)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (d === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = _)),
          (i.props = a),
          (i.state = _),
          (i.context = b),
          (a = B))
        : (typeof i.componentDidUpdate != "function" ||
            (d === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      zi(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ua(t, e.child, null, l)),
              (t.child = Ua(t, null, n, l)))
            : ct(e, t, n, l),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Cn(e, t, l)),
      e
    );
  }
  function Gf(e, t, n, a) {
    return (Ma(), (t.flags |= 256), ct(e, t, n, a), t.child);
  }
  var Ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function er(e) {
    return { baseLanes: e, cachePool: Cd() };
  }
  function tr(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Rt), e);
  }
  function Vf(e, t, n) {
    var a = t.pendingProps,
      l = !1,
      i = (t.flags & 128) !== 0,
      d;
    if (
      ((d = i) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
      d && ((l = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (l ? ta(t) : na(),
          (e = Le)
            ? ((e = Pm(e, Zt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Jn !== null ? { id: rn, overflow: un } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = jd(e)),
                (n.return = t),
                (t.child = n),
                (it = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw $n(t);
        return (Hr(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var g = a.children;
      return (
        (a = a.fallback),
        l
          ? (na(),
            (l = t.mode),
            (g = Mi({ mode: "hidden", children: g }, l)),
            (a = za(a, l, n, null)),
            (g.return = t),
            (a.return = t),
            (g.sibling = a),
            (t.child = g),
            (a = t.child),
            (a.memoizedState = er(n)),
            (a.childLanes = tr(e, d, n)),
            (t.memoizedState = Ic),
            js(null, a))
          : (ta(t), nr(t, g))
      );
    }
    var b = e.memoizedState;
    if (b !== null && ((g = b.dehydrated), g !== null)) {
      if (i)
        t.flags & 256
          ? (ta(t), (t.flags &= -257), (t = ar(e, t, n)))
          : t.memoizedState !== null
            ? (na(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (na(),
              (g = a.fallback),
              (l = t.mode),
              (a = Mi({ mode: "visible", children: a.children }, l)),
              (g = za(g, l, n, null)),
              (g.flags |= 2),
              (a.return = t),
              (g.return = t),
              (a.sibling = g),
              (t.child = a),
              Ua(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = er(n)),
              (a.childLanes = tr(e, d, n)),
              (t.memoizedState = Ic),
              (t = js(null, a)));
      else if ((ta(t), Hr(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var T = d.dgst;
        ((d = T),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = d),
          rs({ value: a, source: null, stack: null }),
          (t = ar(e, t, n)));
      } else if (
        ($e || gl(e, t, n, !1), (d = (n & e.childLanes) !== 0), $e || d)
      ) {
        if (
          ((d = Ue),
          d !== null && ((a = jt(d, n)), a !== 0 && a !== b.retryLane))
        )
          throw ((b.retryLane = a), Ca(e, a), Tt(d, e, a), Pc);
        (Rr(g) || qi(), (t = ar(e, t, n)));
      } else
        Rr(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = b.treeContext),
            (Le = Jt(g.nextSibling)),
            (it = t),
            (Te = !0),
            (Wn = null),
            (Zt = !1),
            e !== null && Sd(t, e),
            (t = nr(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (na(),
        (g = a.fallback),
        (l = t.mode),
        (b = e.child),
        (T = b.sibling),
        (a = Sn(b, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = b.subtreeFlags & 65011712),
        T !== null ? (g = Sn(T, g)) : ((g = za(g, l, n, null)), (g.flags |= 2)),
        (g.return = t),
        (a.return = t),
        (a.sibling = g),
        (t.child = a),
        js(null, a),
        (a = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = er(n))
          : ((l = g.cachePool),
            l !== null
              ? ((b = Je._currentValue),
                (l = l.parent !== b ? { parent: b, pool: b } : l))
              : (l = Cd()),
            (g = { baseLanes: g.baseLanes | n, cachePool: l })),
        (a.memoizedState = g),
        (a.childLanes = tr(e, d, n)),
        (t.memoizedState = Ic),
        js(e.child, a))
      : (ta(t),
        (n = e.child),
        (e = n.sibling),
        (n = Sn(n, { mode: "visible", children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function nr(e, t) {
    return (
      (t = Mi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mi(e, t) {
    return ((e = Mt(22, e, null, t)), (e.lanes = 0), e);
  }
  function ar(e, t, n) {
    return (
      Ua(t, e.child, null, n),
      (e = nr(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Xf(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), vc(e.return, t, n));
  }
  function lr(e, t, n, a, l, i) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
          treeForkCount: i,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = a),
        (d.tail = n),
        (d.tailMode = l),
        (d.treeForkCount = i));
  }
  function Qf(e, t, n) {
    var a = t.pendingProps,
      l = a.revealOrder,
      i = a.tail;
    a = a.children;
    var d = Ze.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      R(Ze, d),
      ct(e, t, a, n),
      (a = Te ? cs : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xf(e, n, t);
        else if (e.tag === 19) Xf(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate),
            e !== null && bi(e) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          lr(t, !1, l, n, i, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && bi(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        lr(t, !0, n, null, i, a);
        break;
      case "together":
        lr(t, !1, null, null, void 0, a);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Cn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (sa |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((gl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = Sn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function sr(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && fi(e)));
  }
  function zx(e, t, n) {
    switch (t.tag) {
      case 3:
        (de(t, t.stateNode.containerInfo),
          Pn(t, Je, e.memoizedState.cache),
          Ma());
        break;
      case 27:
      case 5:
        at(t);
        break;
      case 4:
        de(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Cc(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ta(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Vf(e, t, n)
              : (ta(t), (e = Cn(e, t, n)), e !== null ? e.sibling : null);
        ta(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (gl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          l)
        ) {
          if (a) return Qf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          R(Ze, Ze.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Hf(e, t, n, t.pendingProps));
      case 24:
        Pn(t, Je, e.memoizedState.cache);
    }
    return Cn(e, t, n);
  }
  function Zf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) $e = !0;
      else {
        if (!sr(e, n) && (t.flags & 128) === 0) return (($e = !1), zx(e, t, n));
        $e = (e.flags & 131072) !== 0;
      }
    else (($e = !1), Te && (t.flags & 1048576) !== 0 && Nd(t, cs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ra(t.elementType)), (t.type = e), typeof e == "function"))
            uc(e)
              ? ((a = Ya(e, a)), (t.tag = 1), (t = qf(null, t, e, a, n)))
              : ((t.tag = 0), (t = Fc(null, t, e, a, n)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === P) {
                ((t.tag = 11), (t = _f(null, t, e, a, n)));
                break e;
              } else if (l === Q) {
                ((t.tag = 14), (t = Bf(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ye(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Fc(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (l = Ya(a, t.pendingProps)), qf(e, t, a, l, n));
      case 3:
        e: {
          if ((de(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          ((l = i.element), Ac(e, t), hs(t, a, null, n));
          var d = t.memoizedState;
          if (
            ((a = d.cache),
            Pn(t, Je, a),
            a !== i.cache && yc(t, [Je], n, !0),
            ps(),
            (a = d.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = Gf(e, t, a, n);
              break e;
            } else if (a !== l) {
              ((l = Vt(Error(r(424)), t)), rs(l), (t = Gf(e, t, a, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                Le = Jt(e.firstChild),
                  it = t,
                  Te = !0,
                  Wn = null,
                  Zt = !0,
                  n = Rd(t, null, a, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ma(), a === l)) {
              t = Cn(e, t, n);
              break e;
            }
            ct(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          zi(e, t),
          e === null
            ? (n = ag(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Te ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Ji(oe.current).createElement(n)),
                (a[st] = t),
                (a[wt] = e),
                rt(a, n, e),
                tt(a),
                (t.stateNode = a))
            : (t.memoizedState = ag(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          at(t),
          e === null &&
            Te &&
            ((a = t.stateNode = eg(t.type, t.pendingProps, oe.current)),
            (it = t),
            (Zt = !0),
            (l = Le),
            ua(t.type) ? ((Ur = l), (Le = Jt(a.firstChild))) : (Le = l)),
          ct(e, t, t.pendingProps.children, n),
          zi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((l = a = Le) &&
              ((a = ov(a, t.type, t.pendingProps, Zt)),
              a !== null
                ? ((t.stateNode = a),
                  (it = t),
                  (Le = Jt(a.firstChild)),
                  (Zt = !1),
                  (l = !0))
                : (l = !1)),
            l || $n(t)),
          at(t),
          (l = t.type),
          (i = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (a = i.children),
          Dr(l, i) ? (a = null) : d !== null && Dr(l, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((l = Mc(e, t, wx, null, null, n)), (Rs._currentValue = l)),
          zi(e, t),
          ct(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = n = Le) &&
              ((n = cv(n, t.pendingProps, Zt)),
              n !== null
                ? ((t.stateNode = n), (it = t), (Le = null), (e = !0))
                : (e = !1)),
            e || $n(t)),
          null
        );
      case 13:
        return Vf(e, t, n);
      case 4:
        return (
          de(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ua(t, null, a, n)) : ct(e, t, a, n),
          t.child
        );
      case 11:
        return _f(e, t, t.type, t.pendingProps, n);
      case 7:
        return (ct(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ct(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ct(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Pn(t, t.type, a.value),
          ct(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (l = t.type._context),
          (a = t.pendingProps.children),
          _a(t),
          (l = ot(l)),
          (a = a(l)),
          (t.flags |= 1),
          ct(e, t, a, n),
          t.child
        );
      case 14:
        return Bf(e, t, t.type, t.pendingProps, n);
      case 15:
        return Rf(e, t, t.type, t.pendingProps, n);
      case 19:
        return Qf(e, t, n);
      case 31:
        return Cx(e, t, n);
      case 22:
        return Hf(e, t, n, t.pendingProps);
      case 24:
        return (
          _a(t),
          (a = ot(Je)),
          e === null
            ? ((l = wc()),
              l === null &&
                ((l = Ue),
                (i = bc()),
                (l.pooledCache = i),
                i.refCount++,
                i !== null && (l.pooledCacheLanes |= n),
                (l = i)),
              (t.memoizedState = { parent: a, cache: l }),
              Sc(t),
              Pn(t, Je, l))
            : ((e.lanes & n) !== 0 && (Ac(e, t), hs(t, null, null, n), ps()),
              (l = e.memoizedState),
              (i = t.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (t.memoizedState = l),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = l),
                  Pn(t, Je, a))
                : ((a = i.cache),
                  Pn(t, Je, a),
                  a !== l.cache && yc(t, [Je], n, !0))),
          ct(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function zn(e) {
    e.flags |= 4;
  }
  function ir(e, t, n, a, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ym()) e.flags |= 8192;
        else throw ((Ha = hi), Nc);
    } else e.flags &= -16777217;
  }
  function Kf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !cg(t)))
      if (ym()) e.flags |= 8192;
      else throw ((Ha = hi), Nc);
  }
  function Di(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? dt() : 536870912), (e.lanes |= t), (El |= t)));
  }
  function ws(e, t) {
    if (!Te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 65011712),
          (a |= l.flags & 65011712),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function Mx(e, t, n) {
    var a = t.pendingProps;
    switch ((gc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ye(t), null);
      case 1:
        return (Ye(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          kn(Je),
          ke(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ml(t)
              ? zn(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), hc())),
          Ye(t),
          null
        );
      case 26:
        var l = t.type,
          i = t.memoizedState;
        return (
          e === null
            ? (zn(t),
              i !== null ? (Ye(t), Kf(t, i)) : (Ye(t), ir(t, l, null, a, n)))
            : i
              ? i !== e.memoizedState
                ? (zn(t), Ye(t), Kf(t, i))
                : (Ye(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && zn(t),
                Ye(t),
                ir(t, l, e, a, n)),
          null
        );
      case 27:
        if (
          (gt(t),
          (n = oe.current),
          (l = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ye(t), null);
          }
          ((e = X.current),
            ml(t) ? Ad(t) : ((e = eg(l, a, n)), (t.stateNode = e), zn(t)));
        }
        return (Ye(t), null);
      case 5:
        if ((gt(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ye(t), null);
          }
          if (((i = X.current), ml(t))) Ad(t);
          else {
            var d = Ji(oe.current);
            switch (i) {
              case 1:
                i = d.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                i = d.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    i = d.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    i = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    ((i = d.createElement("div")),
                      (i.innerHTML = "<script><\/script>"),
                      (i = i.removeChild(i.firstChild)));
                    break;
                  case "select":
                    ((i =
                      typeof a.is == "string"
                        ? d.createElement("select", { is: a.is })
                        : d.createElement("select")),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size));
                    break;
                  default:
                    i =
                      typeof a.is == "string"
                        ? d.createElement(l, { is: a.is })
                        : d.createElement(l);
                }
            }
            ((i[st] = t), (i[wt] = a));
            e: for (d = t.child; d !== null; ) {
              if (d.tag === 5 || d.tag === 6) i.appendChild(d.stateNode);
              else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === t) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === t) break e;
                d = d.return;
              }
              ((d.sibling.return = d.return), (d = d.sibling));
            }
            t.stateNode = i;
            e: switch ((rt(i, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && zn(t);
          }
        }
        return (
          Ye(t),
          ir(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = oe.current), ml(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (l = it),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((e[st] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Vm(e.nodeValue, n)
              )),
              e || $n(t, !0));
          } else
            ((e = Ji(e).createTextNode(a)), (e[st] = t), (t.stateNode = e));
        }
        return (Ye(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((a = ml(t)), n !== null)) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[st] = t;
            } else
              (Ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (e = !1));
          } else
            ((n = hc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (Ye(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = ml(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(r(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(r(317));
              l[st] = t;
            } else
              (Ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (l = !1));
          } else
            ((l = hc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
        }
        return (
          _t(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (l = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (l = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== l && (a.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Di(t, t.updateQueue),
              Ye(t),
              null)
        );
      case 4:
        return (ke(), e === null && Tr(t.stateNode.containerInfo), Ye(t), null);
      case 10:
        return (kn(t.type), Ye(t), null);
      case 19:
        if ((H(Ze), (a = t.memoizedState), a === null)) return (Ye(t), null);
        if (((l = (t.flags & 128) !== 0), (i = a.rendering), i === null))
          if (l) ws(a, !1);
          else {
            if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = bi(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      ws(a, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Di(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (bd(n, e), (n = n.sibling));
                  return (
                    R(Ze, (Ze.current & 1) | 2),
                    Te && An(t, a.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            a.tail !== null &&
              ht() > Ui &&
              ((t.flags |= 128), (l = !0), ws(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = bi(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Di(t, e),
                ws(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !i.alternate &&
                  !Te)
              )
                return (Ye(t), null);
            } else
              2 * ht() - a.renderingStartTime > Ui &&
                n !== 536870912 &&
                ((t.flags |= 128), (l = !0), ws(a, !1), (t.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = a.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((e = a.tail),
            (a.rendering = e),
            (a.tail = e.sibling),
            (a.renderingStartTime = ht()),
            (e.sibling = null),
            (n = Ze.current),
            R(Ze, l ? (n & 1) | 2 : n & 1),
            Te && An(t, a.treeForkCount),
            e)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          _t(t),
          Oc(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ye(t),
          (n = t.updateQueue),
          n !== null && Di(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== n && (t.flags |= 2048),
          e !== null && H(Ba),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          kn(Je),
          Ye(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Dx(e, t) {
    switch ((gc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kn(Je),
          ke(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (gt(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((_t(t), t.alternate === null)) throw Error(r(340));
          Ma();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (_t(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Ma();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (H(Ze), null);
      case 4:
        return (ke(), null);
      case 10:
        return (kn(t.type), null);
      case 22:
      case 23:
        return (
          _t(t),
          Oc(),
          e !== null && H(Ba),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (kn(Je), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jf(e, t) {
    switch ((gc(t), t.tag)) {
      case 3:
        (kn(Je), ke());
        break;
      case 26:
      case 27:
      case 5:
        gt(t);
        break;
      case 4:
        ke();
        break;
      case 31:
        t.memoizedState !== null && _t(t);
        break;
      case 13:
        _t(t);
        break;
      case 19:
        H(Ze);
        break;
      case 10:
        kn(t.type);
        break;
      case 22:
      case 23:
        (_t(t), Oc(), e !== null && H(Ba));
        break;
      case 24:
        kn(Je);
    }
  }
  function Ns(e, t) {
    try {
      var n = t.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var i = n.create,
              d = n.inst;
            ((a = i()), (d.destroy = a));
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (g) {
      _e(t, t.return, g);
    }
  }
  function aa(e, t, n) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (l = t));
              var b = n,
                T = g;
              try {
                T();
              } catch (B) {
                _e(l, b, B);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (B) {
      _e(t, t.return, B);
    }
  }
  function Wf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ud(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function $f(e, t, n) {
    ((n.props = Ya(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function Ss(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
      }
    } catch (l) {
      _e(e, t, l);
    }
  }
  function dn(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          _e(e, t, l);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          _e(e, t, l);
        }
      else n.current = null;
  }
  function Pf(e) {
    var t = e.type,
      n = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function or(e, t, n) {
    try {
      var a = e.stateNode;
      (tv(a, e.type, n, t), (a[wt] = t));
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function Ff(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ua(e.type)) ||
      e.tag === 4
    );
  }
  function cr(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ff(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && ua(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function rr(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = wn)));
    else if (
      a !== 4 &&
      (a === 27 && ua(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (rr(e, t, n), e = e.sibling; e !== null; )
        (rr(e, t, n), (e = e.sibling));
  }
  function _i(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      a !== 4 &&
      (a === 27 && ua(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (_i(e, t, n), e = e.sibling; e !== null; )
        (_i(e, t, n), (e = e.sibling));
  }
  function If(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      (rt(t, a, n), (t[st] = e), (t[wt] = n));
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var Mn = !1,
    Pe = !1,
    ur = !1,
    em = typeof WeakSet == "function" ? WeakSet : Set,
    nt = null;
  function _x(e, t) {
    if (((e = e.containerInfo), (zr = to), (e = dd(e)), ac(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, i.nodeType);
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              g = -1,
              b = -1,
              T = 0,
              B = 0,
              q = e,
              O = null;
            t: for (;;) {
              for (
                var _;
                q !== n || (l !== 0 && q.nodeType !== 3) || (g = d + l),
                  q !== i || (a !== 0 && q.nodeType !== 3) || (b = d + a),
                  q.nodeType === 3 && (d += q.nodeValue.length),
                  (_ = q.firstChild) !== null;

              )
                ((O = q), (q = _));
              for (;;) {
                if (q === e) break t;
                if (
                  (O === n && ++T === l && (g = d),
                  O === i && ++B === a && (b = d),
                  (_ = q.nextSibling) !== null)
                )
                  break;
                ((q = O), (O = q.parentNode));
              }
              q = _;
            }
            n = g === -1 || b === -1 ? null : { start: g, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Mr = { focusedElem: e, selectionRange: n }, to = !1, nt = t;
      nt !== null;

    )
      if (
        ((t = nt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (nt = e));
      else
        for (; nt !== null; ) {
          switch (((t = nt), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((l = e[n]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (n = t),
                  (l = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = n.stateNode));
                try {
                  var F = Ya(n.type, l);
                  ((e = a.getSnapshotBeforeUpdate(F, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ue) {
                  _e(n, n.return, ue);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Br(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Br(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (nt = e));
            break;
          }
          nt = t.return;
        }
  }
  function tm(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (_n(e, n), a & 4 && Ns(5, n));
        break;
      case 1:
        if ((_n(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              _e(n, n.return, d);
            }
          else {
            var l = Ya(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              _e(n, n.return, d);
            }
          }
        (a & 64 && Wf(n), a & 512 && Ss(n, n.return));
        break;
      case 3:
        if ((_n(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Ud(e, t);
          } catch (d) {
            _e(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && If(n);
      case 26:
      case 5:
        (_n(e, n), t === null && a & 4 && Pf(n), a & 512 && Ss(n, n.return));
        break;
      case 12:
        _n(e, n);
        break;
      case 31:
        (_n(e, n), a & 4 && lm(e, n));
        break;
      case 13:
        (_n(e, n),
          a & 4 && sm(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Vx.bind(null, n)), rv(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Mn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Pe), (l = Mn));
          var i = Pe;
          ((Mn = a),
            (Pe = t) && !i ? Bn(e, n, (n.subtreeFlags & 8772) !== 0) : _n(e, n),
            (Mn = l),
            (Pe = i));
        }
        break;
      case 30:
        break;
      default:
        _n(e, n);
    }
  }
  function nm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), nm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Yo(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ge = null,
    St = !1;
  function Dn(e, t, n) {
    for (n = n.child; n !== null; ) (am(e, t, n), (n = n.sibling));
  }
  function am(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Na, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Pe || dn(n, t),
          Dn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Pe || dn(n, t);
        var a = Ge,
          l = St;
        (ua(n.type) && ((Ge = n.stateNode), (St = !1)),
          Dn(e, t, n),
          Ds(n.stateNode),
          (Ge = a),
          (St = l));
        break;
      case 5:
        Pe || dn(n, t);
      case 6:
        if (
          ((a = Ge),
          (l = St),
          (Ge = null),
          Dn(e, t, n),
          (Ge = a),
          (St = l),
          Ge !== null)
        )
          if (St)
            try {
              (Ge.nodeType === 9
                ? Ge.body
                : Ge.nodeName === "HTML"
                  ? Ge.ownerDocument.body
                  : Ge
              ).removeChild(n.stateNode);
            } catch (i) {
              _e(n, t, i);
            }
          else
            try {
              Ge.removeChild(n.stateNode);
            } catch (i) {
              _e(n, t, i);
            }
        break;
      case 18:
        Ge !== null &&
          (St
            ? ((e = Ge),
              Wm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              _l(e))
            : Wm(Ge, n.stateNode));
        break;
      case 4:
        ((a = Ge),
          (l = St),
          (Ge = n.stateNode.containerInfo),
          (St = !0),
          Dn(e, t, n),
          (Ge = a),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (aa(2, n, t), Pe || aa(4, n, t), Dn(e, t, n));
        break;
      case 1:
        (Pe ||
          (dn(n, t),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && $f(n, t, a)),
          Dn(e, t, n));
        break;
      case 21:
        Dn(e, t, n);
        break;
      case 22:
        ((Pe = (a = Pe) || n.memoizedState !== null), Dn(e, t, n), (Pe = a));
        break;
      default:
        Dn(e, t, n);
    }
  }
  function lm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        _l(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function sm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        _l(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Bx(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new em()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new em()),
          t
        );
      default:
        throw Error(r(435, e.tag));
    }
  }
  function Bi(e, t) {
    var n = Bx(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Xx.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function At(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          i = e,
          d = t,
          g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ua(g.type)) {
                ((Ge = g.stateNode), (St = !1));
                break e;
              }
              break;
            case 5:
              ((Ge = g.stateNode), (St = !1));
              break e;
            case 3:
            case 4:
              ((Ge = g.stateNode.containerInfo), (St = !0));
              break e;
          }
          g = g.return;
        }
        if (Ge === null) throw Error(r(160));
        (am(i, d, l),
          (Ge = null),
          (St = !1),
          (i = l.alternate),
          i !== null && (i.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (im(t, e), (t = t.sibling));
  }
  var en = null;
  function im(e, t) {
    var n = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (At(t, e),
          Et(e),
          a & 4 && (aa(3, e, e.return), Ns(3, e), aa(5, e, e.return)));
        break;
      case 1:
        (At(t, e),
          Et(e),
          a & 512 && (Pe || n === null || dn(n, n.return)),
          a & 64 &&
            Mn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = en;
        if (
          (At(t, e),
          Et(e),
          a & 512 && (Pe || n === null || dn(n, n.return)),
          a & 4)
        ) {
          var i = n !== null ? n.memoizedState : null;
          if (((a = e.memoizedState), n === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type),
                    (n = e.memoizedProps),
                    (l = l.ownerDocument || l));
                  t: switch (a) {
                    case "title":
                      ((i = l.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Pl] ||
                          i[st] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = l.createElement(a)),
                          l.head.insertBefore(
                            i,
                            l.querySelector("head > title")
                          )),
                        rt(i, a, n),
                        (i[st] = e),
                        tt(i),
                        (a = i));
                      break e;
                    case "link":
                      var d = ig("link", "href", l).get(a + (n.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((i = d[g]),
                            i.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              i.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              i.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              i.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((i = l.createElement(a)),
                        rt(i, a, n),
                        l.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (d = ig("meta", "content", l).get(
                          a + (n.content || "")
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((i = d[g]),
                            i.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              i.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              i.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              i.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((i = l.createElement(a)),
                        rt(i, a, n),
                        l.head.appendChild(i));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((i[st] = e), tt(i), (a = i));
                }
                e.stateNode = a;
              } else og(l, e.type, e.stateNode);
            else e.stateNode = sg(l, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : i.count--,
                a === null
                  ? og(l, e.type, e.stateNode)
                  : sg(l, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                or(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (At(t, e),
          Et(e),
          a & 512 && (Pe || n === null || dn(n, n.return)),
          n !== null && a & 4 && or(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (At(t, e),
          Et(e),
          a & 512 && (Pe || n === null || dn(n, n.return)),
          e.flags & 32)
        ) {
          l = e.stateNode;
          try {
            al(l, "");
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), or(e, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (ur = !0));
        break;
      case 6:
        if ((At(t, e), Et(e), a & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((a = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = a;
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        break;
      case 3:
        if (
          ((Pi = null),
          (l = en),
          (en = Wi(t.containerInfo)),
          At(t, e),
          (en = l),
          Et(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            _l(t.containerInfo);
          } catch (F) {
            _e(e, e.return, F);
          }
        ur && ((ur = !1), om(e));
        break;
      case 4:
        ((a = en),
          (en = Wi(e.stateNode.containerInfo)),
          At(t, e),
          Et(e),
          (en = a));
        break;
      case 12:
        (At(t, e), Et(e));
        break;
      case 31:
        (At(t, e),
          Et(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Bi(e, a))));
        break;
      case 13:
        (At(t, e),
          Et(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Hi = ht()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Bi(e, a))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null,
          T = Mn,
          B = Pe;
        if (
          ((Mn = T || l),
          (Pe = B || b),
          At(t, e),
          (Pe = B),
          (Mn = T),
          Et(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (n === null || b || Mn || Pe || qa(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                b = n = t;
                try {
                  if (((i = b.stateNode), l))
                    ((d = i.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    g = b.stateNode;
                    var q = b.memoizedProps.style,
                      O =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    g.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (F) {
                  _e(b, b.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = l ? "" : b.memoizedProps;
                } catch (F) {
                  _e(b, b.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                b = t;
                try {
                  var _ = b.stateNode;
                  l ? $m(_, !0) : $m(b.stateNode, !1);
                } catch (F) {
                  _e(b, b.return, F);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Bi(e, n))));
        break;
      case 19:
        (At(t, e),
          Et(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), Bi(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (At(t, e), Et(e));
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Ff(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              i = cr(e);
            _i(e, i, l);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (al(d, ""), (n.flags &= -33));
            var g = cr(e);
            _i(e, g, d);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo,
              T = cr(e);
            rr(e, T, b);
            break;
          default:
            throw Error(r(161));
        }
      } catch (B) {
        _e(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function om(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (om(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function _n(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (tm(e, t.alternate, t), (t = t.sibling));
  }
  function qa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (aa(4, t, t.return), qa(t));
          break;
        case 1:
          dn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == "function" && $f(t, t.return, n),
            qa(t));
          break;
        case 27:
          Ds(t.stateNode);
        case 26:
        case 5:
          (dn(t, t.return), qa(t));
          break;
        case 22:
          t.memoizedState === null && qa(t);
          break;
        case 30:
          qa(t);
          break;
        default:
          qa(t);
      }
      e = e.sibling;
    }
  }
  function Bn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        l = e,
        i = t,
        d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Bn(l, i, n), Ns(4, i));
          break;
        case 1:
          if (
            (Bn(l, i, n),
            (a = i),
            (l = a.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (T) {
              _e(a, a.return, T);
            }
          if (((a = i), (l = a.updateQueue), l !== null)) {
            var g = a.stateNode;
            try {
              var b = l.shared.hiddenCallbacks;
              if (b !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < b.length; l++)
                  Hd(b[l], g);
            } catch (T) {
              _e(a, a.return, T);
            }
          }
          (n && d & 64 && Wf(i), Ss(i, i.return));
          break;
        case 27:
          If(i);
        case 26:
        case 5:
          (Bn(l, i, n), n && a === null && d & 4 && Pf(i), Ss(i, i.return));
          break;
        case 12:
          Bn(l, i, n);
          break;
        case 31:
          (Bn(l, i, n), n && d & 4 && lm(l, i));
          break;
        case 13:
          (Bn(l, i, n), n && d & 4 && sm(l, i));
          break;
        case 22:
          (i.memoizedState === null && Bn(l, i, n), Ss(i, i.return));
          break;
        case 30:
          break;
        default:
          Bn(l, i, n);
      }
      t = t.sibling;
    }
  }
  function dr(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && us(n)));
  }
  function fr(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && us(e)));
  }
  function tn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (cm(e, t, n, a), (t = t.sibling));
  }
  function cm(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (tn(e, t, n, a), l & 2048 && Ns(9, t));
        break;
      case 1:
        tn(e, t, n, a);
        break;
      case 3:
        (tn(e, t, n, a),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && us(e))));
        break;
      case 12:
        if (l & 2048) {
          (tn(e, t, n, a), (e = t.stateNode));
          try {
            var i = t.memoizedProps,
              d = i.id,
              g = i.onPostCommit;
            typeof g == "function" &&
              g(
                d,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (b) {
            _e(t, t.return, b);
          }
        } else tn(e, t, n, a);
        break;
      case 31:
        tn(e, t, n, a);
        break;
      case 13:
        tn(e, t, n, a);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? tn(e, t, n, a)
              : As(e, t)
            : i._visibility & 2
              ? tn(e, t, n, a)
              : ((i._visibility |= 2),
                Nl(e, t, n, a, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && dr(d, t));
        break;
      case 24:
        (tn(e, t, n, a), l & 2048 && fr(t.alternate, t));
        break;
      default:
        tn(e, t, n, a);
    }
  }
  function Nl(e, t, n, a, l) {
    for (
      l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var i = e,
        d = t,
        g = n,
        b = a,
        T = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(i, d, g, b, l), Ns(8, d));
          break;
        case 23:
          break;
        case 22:
          var B = d.stateNode;
          (d.memoizedState !== null
            ? B._visibility & 2
              ? Nl(i, d, g, b, l)
              : As(i, d)
            : ((B._visibility |= 2), Nl(i, d, g, b, l)),
            l && T & 2048 && dr(d.alternate, d));
          break;
        case 24:
          (Nl(i, d, g, b, l), l && T & 2048 && fr(d.alternate, d));
          break;
        default:
          Nl(i, d, g, b, l);
      }
      t = t.sibling;
    }
  }
  function As(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (As(n, a), l & 2048 && dr(a.alternate, a));
            break;
          case 24:
            (As(n, a), l & 2048 && fr(a.alternate, a));
            break;
          default:
            As(n, a);
        }
        t = t.sibling;
      }
  }
  var Es = 8192;
  function Sl(e, t, n) {
    if (e.subtreeFlags & Es)
      for (e = e.child; e !== null; ) (rm(e, t, n), (e = e.sibling));
  }
  function rm(e, t, n) {
    switch (e.tag) {
      case 26:
        (Sl(e, t, n),
          e.flags & Es &&
            e.memoizedState !== null &&
            jv(n, en, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Sl(e, t, n);
        break;
      case 3:
      case 4:
        var a = en;
        ((en = Wi(e.stateNode.containerInfo)), Sl(e, t, n), (en = a));
        break;
      case 22:
        e.memoizedState === null &&
          ((a = e.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Es), (Es = 16777216), Sl(e, t, n), (Es = a))
            : Sl(e, t, n));
        break;
      default:
        Sl(e, t, n);
    }
  }
  function um(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ks(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((nt = a), fm(a, e));
        }
      um(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (dm(e), (e = e.sibling));
  }
  function dm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ks(e), e.flags & 2048 && aa(9, e, e.return));
        break;
      case 3:
        ks(e);
        break;
      case 12:
        ks(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ri(e))
          : ks(e);
        break;
      default:
        ks(e);
    }
  }
  function Ri(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ((nt = a), fm(a, e));
        }
      um(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (aa(8, t, t.return), Ri(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Ri(t)));
          break;
        default:
          Ri(t);
      }
      e = e.sibling;
    }
  }
  function fm(e, t) {
    for (; nt !== null; ) {
      var n = nt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          aa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          us(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (nt = a));
      else
        e: for (n = e; nt !== null; ) {
          a = nt;
          var l = a.sibling,
            i = a.return;
          if ((nm(a), a === n)) {
            nt = null;
            break e;
          }
          if (l !== null) {
            ((l.return = i), (nt = l));
            break e;
          }
          nt = i;
        }
    }
  }
  var Rx = {
      getCacheForType: function (e) {
        var t = ot(Je),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return ot(Je).controller.signal;
      },
    },
    Hx = typeof WeakMap == "function" ? WeakMap : Map,
    Me = 0,
    Ue = null,
    Ne = null,
    Ae = 0,
    De = 0,
    Bt = null,
    la = !1,
    Al = !1,
    mr = !1,
    Rn = 0,
    Qe = 0,
    sa = 0,
    Ga = 0,
    gr = 0,
    Rt = 0,
    El = 0,
    Ts = null,
    kt = null,
    pr = !1,
    Hi = 0,
    mm = 0,
    Ui = 1 / 0,
    Li = null,
    ia = null,
    Fe = 0,
    oa = null,
    kl = null,
    Hn = 0,
    hr = 0,
    xr = null,
    gm = null,
    Os = 0,
    vr = null;
  function Ht() {
    return (Me & 2) !== 0 && Ae !== 0 ? Ae & -Ae : S.T !== null ? Sr() : Uo();
  }
  function pm() {
    if (Rt === 0)
      if ((Ae & 536870912) === 0 || Te) {
        var e = Wa;
        ((Wa <<= 1), (Wa & 3932160) === 0 && (Wa = 262144), (Rt = e));
      } else Rt = 536870912;
    return ((e = Dt.current), e !== null && (e.flags |= 32), Rt);
  }
  function Tt(e, t, n) {
    (((e === Ue && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) &&
      (Tl(e, 0), ca(e, Ae, Rt, !1)),
      Ve(e, n),
      ((Me & 2) === 0 || e !== Ue) &&
        (e === Ue &&
          ((Me & 2) === 0 && (Ga |= n), Qe === 4 && ca(e, Ae, Rt, !1)),
        fn(e)));
  }
  function hm(e, t, n) {
    if ((Me & 6) !== 0) throw Error(r(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || qe(e, t),
      l = a ? Yx(e, t) : br(e, t, !0),
      i = a;
    do {
      if (l === 0) {
        Al && !a && ca(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), i && !Ux(n))) {
          ((l = br(e, t, !1)), (i = !1));
          continue;
        }
        if (l === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              l = Ts;
              var b = g.current.memoizedState.isDehydrated;
              if ((b && (Tl(g, d).flags |= 256), (d = br(g, d, !1)), d !== 2)) {
                if (mr && !b) {
                  ((g.errorRecoveryDisabledLanes |= i), (Ga |= i), (l = 4));
                  break e;
                }
                ((i = kt),
                  (kt = l),
                  i !== null &&
                    (kt === null ? (kt = i) : kt.push.apply(kt, i)));
              }
              l = d;
            }
            if (((i = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (Tl(e, 0), ca(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (i = l), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ca(a, t, Rt, !la);
              break e;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((l = Hi + 300 - ht()), 10 < l)) {
            if ((ca(a, t, Rt, !la), fe(a, 0, !0) !== 0)) break e;
            ((Hn = t),
              (a.timeoutHandle = Km(
                xm.bind(
                  null,
                  a,
                  n,
                  kt,
                  Li,
                  pr,
                  t,
                  Rt,
                  Ga,
                  El,
                  la,
                  i,
                  "Throttled",
                  -0,
                  0
                ),
                l
              )));
            break e;
          }
          xm(a, n, kt, Li, pr, t, Rt, Ga, El, la, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    fn(e);
  }
  function xm(e, t, n, a, l, i, d, g, b, T, B, q, O, _) {
    if (
      ((e.timeoutHandle = -1),
      (q = t.subtreeFlags),
      q & 8192 || (q & 16785408) === 16785408)
    ) {
      ((q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: wn,
      }),
        rm(t, i, q));
      var F =
        (i & 62914560) === i ? Hi - ht() : (i & 4194048) === i ? mm - ht() : 0;
      if (((F = wv(q, F)), F !== null)) {
        ((Hn = i),
          (e.cancelPendingCommit = F(
            Am.bind(null, e, t, i, n, a, l, d, g, b, B, q, null, O, _)
          )),
          ca(e, i, d, !T));
        return;
      }
    }
    Am(e, t, i, n, a, l, d, g, b);
  }
  function Ux(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!zt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ca(e, t, n, a) {
    ((t &= ~gr),
      (t &= ~Ga),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var l = t; 0 < l; ) {
      var i = 31 - ut(l),
        d = 1 << i;
      ((a[i] = -1), (l &= ~d));
    }
    n !== 0 && Aa(e, n, t);
  }
  function Yi() {
    return (Me & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function yr() {
    if (Ne !== null) {
      if (De === 0) var e = Ne.return;
      else ((e = Ne), (En = Da = null), Bc(e), (vl = null), (fs = 0), (e = Ne));
      for (; e !== null; ) (Jf(e.alternate, e), (e = e.return));
      Ne = null;
    }
  }
  function Tl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), lv(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Hn = 0),
      yr(),
      (Ue = e),
      (Ne = n = Sn(e.current, null)),
      (Ae = t),
      (De = 0),
      (Bt = null),
      (la = !1),
      (Al = qe(e, t)),
      (mr = !1),
      (El = Rt = gr = Ga = sa = Qe = 0),
      (kt = Ts = null),
      (pr = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - ut(a),
          i = 1 << l;
        ((t |= e[l]), (a &= ~i));
      }
    return ((Rn = t), oi(), n);
  }
  function vm(e, t) {
    ((pe = null),
      (S.H = bs),
      t === xl || t === pi
        ? ((t = Dd()), (De = 3))
        : t === Nc
          ? ((t = Dd()), (De = 4))
          : (De =
              t === Pc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Bt = t),
      Ne === null && ((Qe = 1), Oi(e, Vt(t, e.current))));
  }
  function ym() {
    var e = Dt.current;
    return e === null
      ? !0
      : (Ae & 4194048) === Ae
        ? Kt === null
        : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0
          ? e === Kt
          : !1;
  }
  function bm() {
    var e = S.H;
    return ((S.H = bs), e === null ? bs : e);
  }
  function jm() {
    var e = S.A;
    return ((S.A = Rx), e);
  }
  function qi() {
    ((Qe = 4),
      la || ((Ae & 4194048) !== Ae && Dt.current !== null) || (Al = !0),
      ((sa & 134217727) === 0 && (Ga & 134217727) === 0) ||
        Ue === null ||
        ca(Ue, Ae, Rt, !1));
  }
  function br(e, t, n) {
    var a = Me;
    Me |= 2;
    var l = bm(),
      i = jm();
    ((Ue !== e || Ae !== t) && ((Li = null), Tl(e, t)), (t = !1));
    var d = Qe;
    e: do
      try {
        if (De !== 0 && Ne !== null) {
          var g = Ne,
            b = Bt;
          switch (De) {
            case 8:
              (yr(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dt.current === null && (t = !0);
              var T = De;
              if (((De = 0), (Bt = null), Ol(e, g, b, T), n && Al)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((T = De), (De = 0), (Bt = null), Ol(e, g, b, T));
          }
        }
        (Lx(), (d = Qe));
        break;
      } catch (B) {
        vm(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (En = Da = null),
      (Me = a),
      (S.H = l),
      (S.A = i),
      Ne === null && ((Ue = null), (Ae = 0), oi()),
      d
    );
  }
  function Lx() {
    for (; Ne !== null; ) wm(Ne);
  }
  function Yx(e, t) {
    var n = Me;
    Me |= 2;
    var a = bm(),
      l = jm();
    Ue !== e || Ae !== t
      ? ((Li = null), (Ui = ht() + 500), Tl(e, t))
      : (Al = qe(e, t));
    e: do
      try {
        if (De !== 0 && Ne !== null) {
          t = Ne;
          var i = Bt;
          t: switch (De) {
            case 1:
              ((De = 0), (Bt = null), Ol(e, t, i, 1));
              break;
            case 2:
            case 9:
              if (zd(i)) {
                ((De = 0), (Bt = null), Nm(t));
                break;
              }
              ((t = function () {
                ((De !== 2 && De !== 9) || Ue !== e || (De = 7), fn(e));
              }),
                i.then(t, t));
              break e;
            case 3:
              De = 7;
              break e;
            case 4:
              De = 5;
              break e;
            case 7:
              zd(i)
                ? ((De = 0), (Bt = null), Nm(t))
                : ((De = 0), (Bt = null), Ol(e, t, i, 7));
              break;
            case 5:
              var d = null;
              switch (Ne.tag) {
                case 26:
                  d = Ne.memoizedState;
                case 5:
                case 27:
                  var g = Ne;
                  if (d ? cg(d) : g.stateNode.complete) {
                    ((De = 0), (Bt = null));
                    var b = g.sibling;
                    if (b !== null) Ne = b;
                    else {
                      var T = g.return;
                      T !== null ? ((Ne = T), Gi(T)) : (Ne = null);
                    }
                    break t;
                  }
              }
              ((De = 0), (Bt = null), Ol(e, t, i, 5));
              break;
            case 6:
              ((De = 0), (Bt = null), Ol(e, t, i, 6));
              break;
            case 8:
              (yr(), (Qe = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        qx();
        break;
      } catch (B) {
        vm(e, B);
      }
    while (!0);
    return (
      (En = Da = null),
      (S.H = a),
      (S.A = l),
      (Me = n),
      Ne !== null ? 0 : ((Ue = null), (Ae = 0), oi(), Qe)
    );
  }
  function qx() {
    for (; Ne !== null && !pt(); ) wm(Ne);
  }
  function wm(e) {
    var t = Zf(e.alternate, e, Rn);
    ((e.memoizedProps = e.pendingProps), t === null ? Gi(e) : (Ne = t));
  }
  function Nm(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Yf(n, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = Yf(n, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        Bc(t);
      default:
        (Jf(n, t), (t = Ne = bd(t, Rn)), (t = Zf(n, t, Rn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Gi(e) : (Ne = t));
  }
  function Ol(e, t, n, a) {
    ((En = Da = null), Bc(t), (vl = null), (fs = 0));
    var l = t.return;
    try {
      if (Ox(e, l, t, n, Ae)) {
        ((Qe = 1), Oi(e, Vt(n, e.current)), (Ne = null));
        return;
      }
    } catch (i) {
      if (l !== null) throw ((Ne = l), i);
      ((Qe = 1), Oi(e, Vt(n, e.current)), (Ne = null));
      return;
    }
    t.flags & 32768
      ? (Te || a === 1
          ? (e = !0)
          : Al || (Ae & 536870912) !== 0
            ? (e = !1)
            : ((la = e = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = Dt.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Sm(t, e))
      : Gi(t);
  }
  function Gi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sm(t, la);
        return;
      }
      e = t.return;
      var n = Mx(t.alternate, t, Rn);
      if (n !== null) {
        Ne = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ne = t;
        return;
      }
      Ne = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Sm(e, t) {
    do {
      var n = Dx(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Ne = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ne = e;
        return;
      }
      Ne = e = n;
    } while (e !== null);
    ((Qe = 6), (Ne = null));
  }
  function Am(e, t, n, a, l, i, d, g, b) {
    e.cancelPendingCommit = null;
    do Vi();
    while (Fe !== 0);
    if ((Me & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= cc),
        yt(e, n, i, d, g, b),
        e === Ue && ((Ne = Ue = null), (Ae = 0)),
        (kl = t),
        (oa = e),
        (Hn = n),
        (hr = i),
        (xr = l),
        (gm = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Qx(wa, function () {
              return (Cm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = S.T), (S.T = null), (l = U.p), (U.p = 2), (d = Me), (Me |= 4));
        try {
          _x(e, t, n);
        } finally {
          ((Me = d), (U.p = l), (S.T = a));
        }
      }
      ((Fe = 1), Em(), km(), Tm());
    }
  }
  function Em() {
    if (Fe === 1) {
      Fe = 0;
      var e = oa,
        t = kl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = S.T), (S.T = null));
        var a = U.p;
        U.p = 2;
        var l = Me;
        Me |= 4;
        try {
          im(t, e);
          var i = Mr,
            d = dd(e.containerInfo),
            g = i.focusedElem,
            b = i.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            ud(g.ownerDocument.documentElement, g)
          ) {
            if (b !== null && ac(g)) {
              var T = b.start,
                B = b.end;
              if ((B === void 0 && (B = T), "selectionStart" in g))
                ((g.selectionStart = T),
                  (g.selectionEnd = Math.min(B, g.value.length)));
              else {
                var q = g.ownerDocument || document,
                  O = (q && q.defaultView) || window;
                if (O.getSelection) {
                  var _ = O.getSelection(),
                    F = g.textContent.length,
                    ue = Math.min(b.start, F),
                    He = b.end === void 0 ? ue : Math.min(b.end, F);
                  !_.extend && ue > He && ((d = He), (He = ue), (ue = d));
                  var A = rd(g, ue),
                    N = rd(g, He);
                  if (
                    A &&
                    N &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== A.node ||
                      _.anchorOffset !== A.offset ||
                      _.focusNode !== N.node ||
                      _.focusOffset !== N.offset)
                  ) {
                    var k = q.createRange();
                    (k.setStart(A.node, A.offset),
                      _.removeAllRanges(),
                      ue > He
                        ? (_.addRange(k), _.extend(N.node, N.offset))
                        : (k.setEnd(N.node, N.offset), _.addRange(k)));
                  }
                }
              }
            }
            for (q = [], _ = g; (_ = _.parentNode); )
              _.nodeType === 1 &&
                q.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < q.length;
              g++
            ) {
              var L = q[g];
              ((L.element.scrollLeft = L.left), (L.element.scrollTop = L.top));
            }
          }
          ((to = !!zr), (Mr = zr = null));
        } finally {
          ((Me = l), (U.p = a), (S.T = n));
        }
      }
      ((e.current = t), (Fe = 2));
    }
  }
  function km() {
    if (Fe === 2) {
      Fe = 0;
      var e = oa,
        t = kl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = S.T), (S.T = null));
        var a = U.p;
        U.p = 2;
        var l = Me;
        Me |= 4;
        try {
          tm(e, t.alternate, t);
        } finally {
          ((Me = l), (U.p = a), (S.T = n));
        }
      }
      Fe = 3;
    }
  }
  function Tm() {
    if (Fe === 4 || Fe === 3) {
      ((Fe = 0), Vn());
      var e = oa,
        t = kl,
        n = Hn,
        a = gm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Fe = 5)
        : ((Fe = 0), (kl = oa = null), Om(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (ia = null),
        Ft(n),
        (t = t.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(Na, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = S.T), (l = U.p), (U.p = 2), (S.T = null));
        try {
          for (var i = e.onRecoverableError, d = 0; d < a.length; d++) {
            var g = a[d];
            i(g.value, { componentStack: g.stack });
          }
        } finally {
          ((S.T = t), (U.p = l));
        }
      }
      ((Hn & 3) !== 0 && Vi(),
        fn(e),
        (l = e.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0
          ? e === vr
            ? Os++
            : ((Os = 0), (vr = e))
          : (Os = 0),
        Cs(0));
    }
  }
  function Om(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), us(t)));
  }
  function Vi() {
    return (Em(), km(), Tm(), Cm());
  }
  function Cm() {
    if (Fe !== 5) return !1;
    var e = oa,
      t = hr;
    hr = 0;
    var n = Ft(Hn),
      a = S.T,
      l = U.p;
    try {
      ((U.p = 32 > n ? 32 : n), (S.T = null), (n = xr), (xr = null));
      var i = oa,
        d = Hn;
      if (((Fe = 0), (kl = oa = null), (Hn = 0), (Me & 6) !== 0))
        throw Error(r(331));
      var g = Me;
      if (
        ((Me |= 4),
        dm(i.current),
        cm(i, i.current, d, n),
        (Me = g),
        Cs(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(Na, i);
        } catch {}
      return !0;
    } finally {
      ((U.p = l), (S.T = a), Om(e, t));
    }
  }
  function zm(e, t, n) {
    ((t = Vt(n, t)),
      (t = $c(e.stateNode, t, 2)),
      (e = ea(e, t, 2)),
      e !== null && (Ve(e, 2), fn(e)));
  }
  function _e(e, t, n) {
    if (e.tag === 3) zm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          zm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ia === null || !ia.has(a)))
          ) {
            ((e = Vt(n, e)),
              (n = Mf(2)),
              (a = ea(t, n, 2)),
              a !== null && (Df(n, a, t, e), Ve(a, 2), fn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function jr(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Hx();
      var l = new Set();
      a.set(t, l);
    } else ((l = a.get(t)), l === void 0 && ((l = new Set()), a.set(t, l)));
    l.has(n) ||
      ((mr = !0), l.add(n), (e = Gx.bind(null, e, t, n)), t.then(e, e));
  }
  function Gx(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ue === e &&
        (Ae & n) === n &&
        (Qe === 4 || (Qe === 3 && (Ae & 62914560) === Ae && 300 > ht() - Hi)
          ? (Me & 2) === 0 && Tl(e, 0)
          : (gr |= n),
        El === Ae && (El = 0)),
      fn(e));
  }
  function Mm(e, t) {
    (t === 0 && (t = dt()), (e = Ca(e, t)), e !== null && (Ve(e, t), fn(e)));
  }
  function Vx(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Mm(e, n));
  }
  function Xx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(t), Mm(e, n));
  }
  function Qx(e, t) {
    return Kl(e, t);
  }
  var Xi = null,
    Cl = null,
    wr = !1,
    Qi = !1,
    Nr = !1,
    ra = 0;
  function fn(e) {
    (e !== Cl &&
      e.next === null &&
      (Cl === null ? (Xi = Cl = e) : (Cl = Cl.next = e)),
      (Qi = !0),
      wr || ((wr = !0), Kx()));
  }
  function Cs(e, t) {
    if (!Nr && Qi) {
      Nr = !0;
      do
        for (var n = !1, a = Xi; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var d = a.suspendedLanes,
                g = a.pingedLanes;
              ((i = (1 << (31 - ut(42 | e) + 1)) - 1),
                (i &= l & ~(d & ~g)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((n = !0), Rm(a, i));
          } else
            ((i = Ae),
              (i = fe(
                a,
                a === Ue ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || qe(a, i) || ((n = !0), Rm(a, i)));
          a = a.next;
        }
      while (n);
      Nr = !1;
    }
  }
  function Zx() {
    Dm();
  }
  function Dm() {
    Qi = wr = !1;
    var e = 0;
    ra !== 0 && av() && (e = ra);
    for (var t = ht(), n = null, a = Xi; a !== null; ) {
      var l = a.next,
        i = _m(a, t);
      (i === 0
        ? ((a.next = null),
          n === null ? (Xi = l) : (n.next = l),
          l === null && (Cl = n))
        : ((n = a), (e !== 0 || (i & 3) !== 0) && (Qi = !0)),
        (a = l));
    }
    ((Fe !== 0 && Fe !== 5) || Cs(e), ra !== 0 && (ra = 0));
  }
  function _m(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var d = 31 - ut(i),
        g = 1 << d,
        b = l[d];
      (b === -1
        ? ((g & n) === 0 || (g & a) !== 0) && (l[d] = et(g, t))
        : b <= t && (e.expiredLanes |= g),
        (i &= ~g));
    }
    if (
      ((t = Ue),
      (n = Ae),
      (n = fe(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      n === 0 ||
        (e === t && (De === 2 || De === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Jl(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || qe(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((a !== null && Jl(a), Ft(n))) {
        case 2:
        case 8:
          n = Js;
          break;
        case 32:
          n = wa;
          break;
        case 268435456:
          n = bn;
          break;
        default:
          n = wa;
      }
      return (
        (a = Bm.bind(null, e)),
        (n = Kl(n, a)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      a !== null && a !== null && Jl(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Bm(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Vi() && e.callbackNode !== n) return null;
    var a = Ae;
    return (
      (a = fe(
        e,
        e === Ue ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (hm(e, a, t),
          _m(e, ht()),
          e.callbackNode != null && e.callbackNode === n
            ? Bm.bind(null, e)
            : null)
    );
  }
  function Rm(e, t) {
    if (Vi()) return null;
    hm(e, t, !0);
  }
  function Kx() {
    sv(function () {
      (Me & 6) !== 0 ? Kl(ja, Zx) : Dm();
    });
  }
  function Sr() {
    if (ra === 0) {
      var e = pl;
      (e === 0 && ((e = Ja), (Ja <<= 1), (Ja & 261888) === 0 && (Ja = 256)),
        (ra = e));
    }
    return ra;
  }
  function Hm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Is("" + e);
  }
  function Um(e, t) {
    var n = t.ownerDocument.createElement("input");
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute("form", e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Jx(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Hm((l[wt] || null).action),
        d = a.submitter;
      d &&
        ((t = (t = d[wt] || null)
          ? Hm(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((i = t), (d = null)));
      var g = new ai("action", "action", null, a, l);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ra !== 0) {
                  var b = d ? Um(l, d) : new FormData(l);
                  Xc(
                    n,
                    { pending: !0, data: b, method: l.method, action: i },
                    null,
                    b
                  );
                }
              } else
                typeof i == "function" &&
                  (g.preventDefault(),
                  (b = d ? Um(l, d) : new FormData(l)),
                  Xc(
                    n,
                    { pending: !0, data: b, method: l.method, action: i },
                    i,
                    b
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Ar = 0; Ar < oc.length; Ar++) {
    var Er = oc[Ar],
      Wx = Er.toLowerCase(),
      $x = Er[0].toUpperCase() + Er.slice(1);
    It(Wx, "on" + $x);
  }
  (It(gd, "onAnimationEnd"),
    It(pd, "onAnimationIteration"),
    It(hd, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It(fx, "onTransitionRun"),
    It(mx, "onTransitionStart"),
    It(gx, "onTransitionCancel"),
    It(xd, "onTransitionEnd"),
    tl("onMouseEnter", ["mouseout", "mouseover"]),
    tl("onMouseLeave", ["mouseout", "mouseover"]),
    tl("onPointerEnter", ["pointerout", "pointerover"]),
    tl("onPointerLeave", ["pointerout", "pointerover"]),
    Ea(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ea(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ea(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ea(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ea(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    ));
  var zs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Px = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zs)
    );
  function Lm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var g = a[d],
              b = g.instance,
              T = g.currentTarget;
            if (((g = g.listener), b !== i && l.isPropagationStopped()))
              break e;
            ((i = g), (l.currentTarget = T));
            try {
              i(l);
            } catch (B) {
              ii(B);
            }
            ((l.currentTarget = null), (i = b));
          }
        else
          for (d = 0; d < a.length; d++) {
            if (
              ((g = a[d]),
              (b = g.instance),
              (T = g.currentTarget),
              (g = g.listener),
              b !== i && l.isPropagationStopped())
            )
              break e;
            ((i = g), (l.currentTarget = T));
            try {
              i(l);
            } catch (B) {
              ii(B);
            }
            ((l.currentTarget = null), (i = b));
          }
      }
    }
  }
  function Se(e, t) {
    var n = t[Lo];
    n === void 0 && (n = t[Lo] = new Set());
    var a = e + "__bubble";
    n.has(a) || (Ym(t, e, 2, !1), n.add(a));
  }
  function kr(e, t, n) {
    var a = 0;
    (t && (a |= 4), Ym(n, e, a, t));
  }
  var Zi = "_reactListening" + Math.random().toString(36).slice(2);
  function Tr(e) {
    if (!e[Zi]) {
      ((e[Zi] = !0),
        Mu.forEach(function (n) {
          n !== "selectionchange" && (Px.has(n) || kr(n, !1, e), kr(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Zi] || ((t[Zi] = !0), kr("selectionchange", !1, t));
    }
  }
  function Ym(e, t, n, a) {
    switch (pg(t)) {
      case 2:
        var l = Av;
        break;
      case 8:
        l = Ev;
        break;
      default:
        l = Vr;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Jo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function Or(e, t, n, a, l) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var g = a.stateNode.containerInfo;
          if (g === l) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var b = d.tag;
              if ((b === 3 || b === 4) && d.stateNode.containerInfo === l)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Fa(g)), d === null)) return;
            if (((b = d.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              a = i = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Xu(function () {
      var T = i,
        B = Zo(n),
        q = [];
      e: {
        var O = vd.get(e);
        if (O !== void 0) {
          var _ = ai,
            F = e;
          switch (e) {
            case "keypress":
              if (ti(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Xh;
              break;
            case "focusin":
              ((F = "focus"), (_ = Fo));
              break;
            case "focusout":
              ((F = "blur"), (_ = Fo));
              break;
            case "beforeblur":
            case "afterblur":
              _ = Fo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Mh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = Kh;
              break;
            case gd:
            case pd:
            case hd:
              _ = Bh;
              break;
            case xd:
              _ = Wh;
              break;
            case "scroll":
            case "scrollend":
              _ = Ch;
              break;
            case "wheel":
              _ = Ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Hh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Wu;
              break;
            case "toggle":
            case "beforetoggle":
              _ = Ih;
          }
          var ue = (t & 4) !== 0,
            He = !ue && (e === "scroll" || e === "scrollend"),
            A = ue ? (O !== null ? O + "Capture" : null) : O;
          ue = [];
          for (var N = T, k; N !== null; ) {
            var L = N;
            if (
              ((k = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                k === null ||
                A === null ||
                ((L = Il(N, A)), L != null && ue.push(Ms(N, L, k))),
              He)
            )
              break;
            N = N.return;
          }
          0 < ue.length &&
            ((O = new _(O, F, null, n, B)),
            q.push({ event: O, listeners: ue }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            O &&
              n !== Qo &&
              (F = n.relatedTarget || n.fromElement) &&
              (Fa(F) || F[Pa]))
          )
            break e;
          if (
            (_ || O) &&
            ((O =
              B.window === B
                ? B
                : (O = B.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            _
              ? ((F = n.relatedTarget || n.toElement),
                (_ = T),
                (F = F ? Fa(F) : null),
                F !== null &&
                  ((He = m(F)),
                  (ue = F.tag),
                  F !== He || (ue !== 5 && ue !== 27 && ue !== 6)) &&
                  (F = null))
              : ((_ = null), (F = T)),
            _ !== F)
          ) {
            if (
              ((ue = Ku),
              (L = "onMouseLeave"),
              (A = "onMouseEnter"),
              (N = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ue = Wu),
                (L = "onPointerLeave"),
                (A = "onPointerEnter"),
                (N = "pointer")),
              (He = _ == null ? O : Fl(_)),
              (k = F == null ? O : Fl(F)),
              (O = new ue(L, N + "leave", _, n, B)),
              (O.target = He),
              (O.relatedTarget = k),
              (L = null),
              Fa(B) === T &&
                ((ue = new ue(A, N + "enter", F, n, B)),
                (ue.target = k),
                (ue.relatedTarget = He),
                (L = ue)),
              (He = L),
              _ && F)
            )
              t: {
                for (ue = Fx, A = _, N = F, k = 0, L = A; L; L = ue(L)) k++;
                L = 0;
                for (var ce = N; ce; ce = ue(ce)) L++;
                for (; 0 < k - L; ) ((A = ue(A)), k--);
                for (; 0 < L - k; ) ((N = ue(N)), L--);
                for (; k--; ) {
                  if (A === N || (N !== null && A === N.alternate)) {
                    ue = A;
                    break t;
                  }
                  ((A = ue(A)), (N = ue(N)));
                }
                ue = null;
              }
            else ue = null;
            (_ !== null && qm(q, O, _, ue, !1),
              F !== null && He !== null && qm(q, He, F, ue, !0));
          }
        }
        e: {
          if (
            ((O = T ? Fl(T) : window),
            (_ = O.nodeName && O.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && O.type === "file"))
          )
            var Ce = ad;
          else if (td(O))
            if (ld) Ce = rx;
            else {
              Ce = ox;
              var le = ix;
            }
          else
            ((_ = O.nodeName),
              !_ ||
              _.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? T && Xo(T.elementType) && (Ce = ad)
                : (Ce = cx));
          if (Ce && (Ce = Ce(e, T))) {
            nd(q, Ce, n, B);
            break e;
          }
          (le && le(e, O, T),
            e === "focusout" &&
              T &&
              O.type === "number" &&
              T.memoizedProps.value != null &&
              Vo(O, "number", O.value));
        }
        switch (((le = T ? Fl(T) : window), e)) {
          case "focusin":
            (td(le) || le.contentEditable === "true") &&
              ((ol = le), (lc = T), (os = null));
            break;
          case "focusout":
            os = lc = ol = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((sc = !1), fd(q, n, B));
            break;
          case "selectionchange":
            if (dx) break;
          case "keydown":
          case "keyup":
            fd(q, n, B);
        }
        var ve;
        if (ec)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          il
            ? Iu(e, n) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ee = "onCompositionStart");
        (Ee &&
          ($u &&
            n.locale !== "ko" &&
            (il || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && il && (ve = Qu())
              : ((Kn = B),
                (Wo = "value" in Kn ? Kn.value : Kn.textContent),
                (il = !0))),
          (le = Ki(T, Ee)),
          0 < le.length &&
            ((Ee = new Ju(Ee, e, null, n, B)),
            q.push({ event: Ee, listeners: le }),
            ve
              ? (Ee.data = ve)
              : ((ve = ed(n)), ve !== null && (Ee.data = ve)))),
          (ve = tx ? nx(e, n) : ax(e, n)) &&
            ((Ee = Ki(T, "onBeforeInput")),
            0 < Ee.length &&
              ((le = new Ju("onBeforeInput", "beforeinput", null, n, B)),
              q.push({ event: le, listeners: Ee }),
              (le.data = ve))),
          Jx(q, e, T, n, B));
      }
      Lm(q, t);
    });
  }
  function Ms(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ki(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          i === null ||
          ((l = Il(e, n)),
          l != null && a.unshift(Ms(e, l, i)),
          (l = Il(e, t)),
          l != null && a.push(Ms(e, l, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Fx(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function qm(e, t, n, a, l) {
    for (var i = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n,
        b = g.alternate,
        T = g.stateNode;
      if (((g = g.tag), b !== null && b === a)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        T === null ||
        ((b = T),
        l
          ? ((T = Il(n, i)), T != null && d.unshift(Ms(n, T, b)))
          : l || ((T = Il(n, i)), T != null && d.push(Ms(n, T, b)))),
        (n = n.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Ix = /\r\n?/g,
    ev = /\u0000|\uFFFD/g;
  function Gm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ix,
        `
`
      )
      .replace(ev, "");
  }
  function Vm(e, t) {
    return ((t = Gm(t)), Gm(e) === t);
  }
  function Re(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || al(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            al(e, "" + a);
        break;
      case "className":
        Ps(e, "class", a);
        break;
      case "tabIndex":
        Ps(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ps(e, n, a);
        break;
      case "style":
        Gu(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          Ps(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(n);
          break;
        }
        ((a = Is("" + a)), e.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (n === "formAction"
              ? (t !== "input" && Re(e, t, "name", l.name, l, null),
                Re(e, t, "formEncType", l.formEncType, l, null),
                Re(e, t, "formMethod", l.formMethod, l, null),
                Re(e, t, "formTarget", l.formTarget, l, null))
              : (Re(e, t, "encType", l.encType, l, null),
                Re(e, t, "method", l.method, l, null),
                Re(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        ((a = Is("" + a)), e.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (e.onclick = wn);
        break;
      case "onScroll":
        a != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((n = Is("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "" + a)
          : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(n, "")
          : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? e.setAttribute(n, a)
            : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(n, a)
          : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(n)
          : e.setAttribute(n, a);
        break;
      case "popover":
        (Se("beforetoggle", e), Se("toggle", e), $s(e, "popover", a));
        break;
      case "xlinkActuate":
        jn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        jn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        jn(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        jn(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        jn(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        jn(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        jn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        jn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        jn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        $s(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Th.get(n) || n), $s(e, n, a));
    }
  }
  function Cr(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        Gu(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(r(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? al(e, a)
          : (typeof a == "number" || typeof a == "bigint") && al(e, "" + a);
        break;
      case "onScroll":
        a != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && Se("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = wn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Du.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (t = n.slice(2, l ? n.length - 7 : void 0)),
              (i = e[wt] || null),
              (i = i != null ? i[n] : null),
              typeof i == "function" && e.removeEventListener(t, i, l),
              typeof a == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, l));
              break e;
            }
            n in e
              ? (e[n] = a)
              : a === !0
                ? e.setAttribute(n, "")
                : $s(e, n, a);
          }
    }
  }
  function rt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Se("error", e), Se("load", e));
        var a = !1,
          l = !1,
          i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var d = n[i];
            if (d != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Re(e, t, i, d, n, null);
              }
          }
        (l && Re(e, t, "srcSet", n.srcSet, n, null),
          a && Re(e, t, "src", n.src, n, null));
        return;
      case "input":
        Se("invalid", e);
        var g = (i = d = l = null),
          b = null,
          T = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var B = n[a];
            if (B != null)
              switch (a) {
                case "name":
                  l = B;
                  break;
                case "type":
                  d = B;
                  break;
                case "checked":
                  b = B;
                  break;
                case "defaultChecked":
                  T = B;
                  break;
                case "value":
                  i = B;
                  break;
                case "defaultValue":
                  g = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(r(137, t));
                  break;
                default:
                  Re(e, t, a, B, n, null);
              }
          }
        Uu(e, i, g, b, T, d, l, !1);
        return;
      case "select":
        (Se("invalid", e), (a = d = i = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((g = n[l]), g != null))
            switch (l) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                a = g;
              default:
                Re(e, t, l, g, n, null);
            }
        ((t = i),
          (n = d),
          (e.multiple = !!a),
          t != null ? nl(e, !!a, t, !1) : n != null && nl(e, !!a, n, !0));
        return;
      case "textarea":
        (Se("invalid", e), (i = l = a = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                l = g;
                break;
              case "children":
                i = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                Re(e, t, d, g, n, null);
            }
        Yu(e, a, l, i);
        return;
      case "option":
        for (b in n)
          if (n.hasOwnProperty(b) && ((a = n[b]), a != null))
            switch (b) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Re(e, t, b, a, n, null);
            }
        return;
      case "dialog":
        (Se("beforetoggle", e),
          Se("toggle", e),
          Se("cancel", e),
          Se("close", e));
        break;
      case "iframe":
      case "object":
        Se("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < zs.length; a++) Se(zs[a], e);
        break;
      case "image":
        (Se("error", e), Se("load", e));
        break;
      case "details":
        Se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Se("error", e), Se("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (T in n)
          if (n.hasOwnProperty(T) && ((a = n[T]), a != null))
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Re(e, t, T, a, n, null);
            }
        return;
      default:
        if (Xo(t)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((a = n[B]), a !== void 0 && Cr(e, t, B, a, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((a = n[g]), a != null && Re(e, t, g, a, n, null));
  }
  function tv(e, t, n, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          i = null,
          d = null,
          g = null,
          b = null,
          T = null,
          B = null;
        for (_ in n) {
          var q = n[_];
          if (n.hasOwnProperty(_) && q != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = q;
              default:
                a.hasOwnProperty(_) || Re(e, t, _, null, a, q);
            }
        }
        for (var O in a) {
          var _ = a[O];
          if (((q = n[O]), a.hasOwnProperty(O) && (_ != null || q != null)))
            switch (O) {
              case "type":
                i = _;
                break;
              case "name":
                l = _;
                break;
              case "checked":
                T = _;
                break;
              case "defaultChecked":
                B = _;
                break;
              case "value":
                d = _;
                break;
              case "defaultValue":
                g = _;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(r(137, t));
                break;
              default:
                _ !== q && Re(e, t, O, _, a, q);
            }
        }
        Go(e, d, g, b, T, B, i, l);
        return;
      case "select":
        _ = d = g = O = null;
        for (i in n)
          if (((b = n[i]), n.hasOwnProperty(i) && b != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                _ = b;
              default:
                a.hasOwnProperty(i) || Re(e, t, i, null, a, b);
            }
        for (l in a)
          if (
            ((i = a[l]),
            (b = n[l]),
            a.hasOwnProperty(l) && (i != null || b != null))
          )
            switch (l) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                g = i;
                break;
              case "multiple":
                d = i;
              default:
                i !== b && Re(e, t, l, i, a, b);
            }
        ((t = g),
          (n = d),
          (a = _),
          O != null
            ? nl(e, !!n, O, !1)
            : !!a != !!n &&
              (t != null ? nl(e, !!n, t, !0) : nl(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        _ = O = null;
        for (g in n)
          if (
            ((l = n[g]),
            n.hasOwnProperty(g) && l != null && !a.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, g, null, a, l);
            }
        for (d in a)
          if (
            ((l = a[d]),
            (i = n[d]),
            a.hasOwnProperty(d) && (l != null || i != null))
          )
            switch (d) {
              case "value":
                O = l;
                break;
              case "defaultValue":
                _ = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(r(91));
                break;
              default:
                l !== i && Re(e, t, d, l, a, i);
            }
        Lu(e, O, _);
        return;
      case "option":
        for (var F in n)
          if (
            ((O = n[F]),
            n.hasOwnProperty(F) && O != null && !a.hasOwnProperty(F))
          )
            switch (F) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Re(e, t, F, null, a, O);
            }
        for (b in a)
          if (
            ((O = a[b]),
            (_ = n[b]),
            a.hasOwnProperty(b) && O !== _ && (O != null || _ != null))
          )
            switch (b) {
              case "selected":
                e.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                Re(e, t, b, O, a, _);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ue in n)
          ((O = n[ue]),
            n.hasOwnProperty(ue) &&
              O != null &&
              !a.hasOwnProperty(ue) &&
              Re(e, t, ue, null, a, O));
        for (T in a)
          if (
            ((O = a[T]),
            (_ = n[T]),
            a.hasOwnProperty(T) && O !== _ && (O != null || _ != null))
          )
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, t));
                break;
              default:
                Re(e, t, T, O, a, _);
            }
        return;
      default:
        if (Xo(t)) {
          for (var He in n)
            ((O = n[He]),
              n.hasOwnProperty(He) &&
                O !== void 0 &&
                !a.hasOwnProperty(He) &&
                Cr(e, t, He, void 0, a, O));
          for (B in a)
            ((O = a[B]),
              (_ = n[B]),
              !a.hasOwnProperty(B) ||
                O === _ ||
                (O === void 0 && _ === void 0) ||
                Cr(e, t, B, O, a, _));
          return;
        }
    }
    for (var A in n)
      ((O = n[A]),
        n.hasOwnProperty(A) &&
          O != null &&
          !a.hasOwnProperty(A) &&
          Re(e, t, A, null, a, O));
    for (q in a)
      ((O = a[q]),
        (_ = n[q]),
        !a.hasOwnProperty(q) ||
          O === _ ||
          (O == null && _ == null) ||
          Re(e, t, q, O, a, _));
  }
  function Xm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function nv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          i = l.transferSize,
          d = l.initiatorType,
          g = l.duration;
        if (i && g && Xm(d)) {
          for (d = 0, g = l.responseEnd, a += 1; a < n.length; a++) {
            var b = n[a],
              T = b.startTime;
            if (T > g) break;
            var B = b.transferSize,
              q = b.initiatorType;
            B &&
              Xm(q) &&
              ((b = b.responseEnd), (d += B * (b < g ? 1 : (g - T) / (b - T))));
          }
          if ((--a, (t += (8 * (i + d)) / (l.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var zr = null,
    Mr = null;
  function Ji(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Qm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Dr(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _r = null;
  function av() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === _r
        ? !1
        : ((_r = e), !0)
      : ((_r = null), !1);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0,
    lv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jm = typeof Promise == "function" ? Promise : void 0,
    sv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Jm < "u"
          ? function (e) {
              return Jm.resolve(null).then(e).catch(iv);
            }
          : Km;
  function iv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ua(e) {
    return e === "head";
  }
  function Wm(e, t) {
    var n = t,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (e.removeChild(l), _l(t));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") Ds(e.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = e.ownerDocument.head), Ds(n));
          for (var i = n.firstChild; i; ) {
            var d = i.nextSibling,
              g = i.nodeName;
            (i[Pl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(i),
              (i = d));
          }
        } else n === "body" && Ds(e.ownerDocument.body);
      n = l;
    } while (n);
    _l(t);
  }
  function $m(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (e === 0) break;
          e--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || e++;
      n = a;
    } while (n);
  }
  function Br(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Br(n), Yo(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function ov(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[Pl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== l.rel ||
                e.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                e.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (l.src == null ? null : l.src) ||
                  e.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  e.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Jt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function cv(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !n) ||
        ((e = Jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Pm(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Rr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Hr(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function rv(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading") t();
    else {
      var a = function () {
        (t(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a));
    }
  }
  function Jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Ur = null;
  function Fm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0) return Jt(e.nextSibling);
          t--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Im(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else (n !== "/$" && n !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function eg(e, t, n) {
    switch (((t = Ji(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(r(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(r(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Ds(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Yo(e);
  }
  var Wt = new Map(),
    tg = new Set();
  function Wi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Un = U.d;
  U.d = { f: uv, r: dv, D: fv, C: mv, L: gv, m: pv, X: xv, S: hv, M: vv };
  function uv() {
    var e = Un.f(),
      t = Yi();
    return e || t;
  }
  function dv(e) {
    var t = Ia(e);
    t !== null && t.tag === 5 && t.type === "form" ? vf(t) : Un.r(e);
  }
  var zl = typeof document > "u" ? null : document;
  function ng(e, t, n) {
    var a = zl;
    if (a && typeof t == "string" && t) {
      var l = qt(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        tg.has(l) ||
          (tg.add(l),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(l) === null &&
            ((t = a.createElement("link")),
            rt(t, "link", e),
            tt(t),
            a.head.appendChild(t))));
    }
  }
  function fv(e) {
    (Un.D(e), ng("dns-prefetch", e, null));
  }
  function mv(e, t) {
    (Un.C(e, t), ng("preconnect", e, t));
  }
  function gv(e, t, n) {
    Un.L(e, t, n);
    var a = zl;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + qt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + qt(n.imageSizes) + '"]'))
        : (l += '[href="' + qt(e) + '"]');
      var i = l;
      switch (t) {
        case "style":
          i = Ml(e);
          break;
        case "script":
          i = Dl(e);
      }
      Wt.has(i) ||
        ((e = p(
          {
            rel: "preload",
            href: t === "image" && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n
        )),
        Wt.set(i, e),
        a.querySelector(l) !== null ||
          (t === "style" && a.querySelector(_s(i))) ||
          (t === "script" && a.querySelector(Bs(i))) ||
          ((t = a.createElement("link")),
          rt(t, "link", e),
          tt(t),
          a.head.appendChild(t)));
    }
  }
  function pv(e, t) {
    Un.m(e, t);
    var n = zl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        l =
          'link[rel="modulepreload"][as="' + qt(a) + '"][href="' + qt(e) + '"]',
        i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Dl(e);
      }
      if (
        !Wt.has(i) &&
        ((e = p({ rel: "modulepreload", href: e }, t)),
        Wt.set(i, e),
        n.querySelector(l) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Bs(i))) return;
        }
        ((a = n.createElement("link")),
          rt(a, "link", e),
          tt(a),
          n.head.appendChild(a));
      }
    }
  }
  function hv(e, t, n) {
    Un.S(e, t, n);
    var a = zl;
    if (a && e) {
      var l = el(a).hoistableStyles,
        i = Ml(e);
      t = t || "default";
      var d = l.get(i);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = a.querySelector(_s(i)))) g.loading = 5;
        else {
          ((e = p({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Wt.get(i)) && Lr(e, n));
          var b = (d = a.createElement("link"));
          (tt(b),
            rt(b, "link", e),
            (b._p = new Promise(function (T, B) {
              ((b.onload = T), (b.onerror = B));
            })),
            b.addEventListener("load", function () {
              g.loading |= 1;
            }),
            b.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            $i(d, t, a));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: g }),
          l.set(i, d));
      }
    }
  }
  function xv(e, t) {
    Un.X(e, t);
    var n = zl;
    if (n && e) {
      var a = el(n).hoistableScripts,
        l = Dl(e),
        i = a.get(l);
      i ||
        ((i = n.querySelector(Bs(l))),
        i ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Wt.get(l)) && Yr(e, t),
          (i = n.createElement("script")),
          tt(i),
          rt(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(l, i));
    }
  }
  function vv(e, t) {
    Un.M(e, t);
    var n = zl;
    if (n && e) {
      var a = el(n).hoistableScripts,
        l = Dl(e),
        i = a.get(l);
      i ||
        ((i = n.querySelector(Bs(l))),
        i ||
          ((e = p({ src: e, async: !0, type: "module" }, t)),
          (t = Wt.get(l)) && Yr(e, t),
          (i = n.createElement("script")),
          tt(i),
          rt(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(l, i));
    }
  }
  function ag(e, t, n, a) {
    var l = (l = oe.current) ? Wi(l) : null;
    if (!l) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Ml(n.href)),
            (n = el(l).hoistableStyles),
            (a = n.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          e = Ml(n.href);
          var i = el(l).hoistableStyles,
            d = i.get(e);
          if (
            (d ||
              ((l = l.ownerDocument || l),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, d),
              (i = l.querySelector(_s(e))) &&
                !i._p &&
                ((d.instance = i), (d.state.loading = 5)),
              Wt.has(e) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Wt.set(e, n),
                i || yv(l, e, n, d.state))),
            t && a === null)
          )
            throw Error(r(528, ""));
          return d;
        }
        if (t && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = n.async),
          (n = n.src),
          typeof n == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Dl(n)),
              (n = el(l).hoistableScripts),
              (a = n.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, e));
    }
  }
  function Ml(e) {
    return 'href="' + qt(e) + '"';
  }
  function _s(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function lg(e) {
    return p({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function yv(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        rt(t, "link", n),
        tt(t),
        e.head.appendChild(t));
  }
  function Dl(e) {
    return '[src="' + qt(e) + '"]';
  }
  function Bs(e) {
    return "script[async]" + e;
  }
  function sg(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + qt(n.href) + '"]');
          if (a) return ((t.instance = a), tt(a), a);
          var l = p({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            tt(a),
            rt(a, "style", l),
            $i(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          l = Ml(n.href);
          var i = e.querySelector(_s(l));
          if (i) return ((t.state.loading |= 4), (t.instance = i), tt(i), i);
          ((a = lg(n)),
            (l = Wt.get(l)) && Lr(a, l),
            (i = (e.ownerDocument || e).createElement("link")),
            tt(i));
          var d = i;
          return (
            (d._p = new Promise(function (g, b) {
              ((d.onload = g), (d.onerror = b));
            })),
            rt(i, "link", a),
            (t.state.loading |= 4),
            $i(i, n.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Dl(n.src)),
            (l = e.querySelector(Bs(i)))
              ? ((t.instance = l), tt(l), l)
              : ((a = n),
                (l = Wt.get(i)) && ((a = p({}, n)), Yr(a, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement("script")),
                tt(l),
                rt(l, "link", a),
                e.head.appendChild(l),
                (t.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), $i(a, n.precedence, e));
    return t.instance;
  }
  function $i(e, t, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        l = a.length ? a[a.length - 1] : null,
        i = l,
        d = 0;
      d < a.length;
      d++
    ) {
      var g = a[d];
      if (g.dataset.precedence === t) i = g;
      else if (i !== l) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Lr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Yr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Pi = null;
  function ig(e, t, n) {
    if (Pi === null) {
      var a = new Map(),
        l = (Pi = new Map());
      l.set(n, a);
    } else ((l = Pi), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), l = 0;
      l < n.length;
      l++
    ) {
      var i = n[l];
      if (
        !(
          i[Pl] ||
          i[st] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var d = i.getAttribute(t) || "";
        d = e + d;
        var g = a.get(d);
        g ? g.push(i) : a.set(d, [i]);
      }
    }
    return a;
  }
  function og(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function bv(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function cg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function jv(e, t, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Ml(a.href),
          i = t.querySelector(_s(l));
        if (i) {
          ((t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Fi.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = i),
            tt(i));
          return;
        }
        ((i = t.ownerDocument || t),
          (a = lg(a)),
          (l = Wt.get(l)) && Lr(a, l),
          (i = i.createElement("link")),
          tt(i));
        var d = i;
        ((d._p = new Promise(function (g, b) {
          ((d.onload = g), (d.onerror = b));
        })),
          rt(i, "link", a),
          (n.instance = i));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Fi.bind(e)),
          t.addEventListener("load", n),
          t.addEventListener("error", n)));
    }
  }
  var qr = 0;
  function wv(e, t) {
    return (
      e.stylesheets && e.count === 0 && eo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((e.stylesheets && eo(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                ((e.unsuspend = null), i());
              }
            }, 6e4 + t);
            0 < e.imgBytes && qr === 0 && (qr = 62500 * nv());
            var l = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && eo(e, e.stylesheets), e.unsuspend))
                ) {
                  var i = e.unsuspend;
                  ((e.unsuspend = null), i());
                }
              },
              (e.imgBytes > qr ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Fi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) eo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ii = null;
  function eo(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ii = new Map()),
        t.forEach(Nv, e),
        (Ii = null),
        Fi.call(e)));
  }
  function Nv(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ii.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Ii.set(e, n));
        for (
          var l = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < l.length;
          i++
        ) {
          var d = l[i];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (a = d));
        }
        a && n.set(null, a);
      }
      ((l = t.instance),
        (d = l.getAttribute("data-precedence")),
        (i = n.get(d) || a),
        i === a && n.set(null, l),
        n.set(d, l),
        this.count++,
        (a = Fi.bind(this)),
        l.addEventListener("load", a),
        l.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(l, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(l, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Rs = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: D,
    _currentValue2: D,
    _threadCount: 0,
  };
  function Sv(e, t, n, a, l, i, d, g, b) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Qn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qn(0)),
      (this.hiddenUpdates = Qn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = i),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map()));
  }
  function rg(e, t, n, a, l, i, d, g, b, T, B, q) {
    return (
      (e = new Sv(e, t, n, d, b, T, B, q, g)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = Mt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = bc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Sc(i),
      e
    );
  }
  function ug(e) {
    return e ? ((e = ul), e) : ul;
  }
  function dg(e, t, n, a, l, i) {
    ((l = ug(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = In(t)),
      (a.payload = { element: n }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (n = ea(e, a, t)),
      n !== null && (Tt(n, e, t), gs(n, e, t)));
  }
  function fg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Gr(e, t) {
    (fg(e, t), (e = e.alternate) && fg(e, t));
  }
  function mg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ca(e, 67108864);
      (t !== null && Tt(t, e, 67108864), Gr(e, 67108864));
    }
  }
  function gg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = $a(t);
      var n = Ca(e, t);
      (n !== null && Tt(n, e, t), Gr(e, t));
    }
  }
  var to = !0;
  function Av(e, t, n, a) {
    var l = S.T;
    S.T = null;
    var i = U.p;
    try {
      ((U.p = 2), Vr(e, t, n, a));
    } finally {
      ((U.p = i), (S.T = l));
    }
  }
  function Ev(e, t, n, a) {
    var l = S.T;
    S.T = null;
    var i = U.p;
    try {
      ((U.p = 8), Vr(e, t, n, a));
    } finally {
      ((U.p = i), (S.T = l));
    }
  }
  function Vr(e, t, n, a) {
    if (to) {
      var l = Xr(a);
      if (l === null) (Or(e, t, a, no, n), hg(e, a));
      else if (Tv(l, e, t, n, a)) a.stopPropagation();
      else if ((hg(e, a), t & 4 && -1 < kv.indexOf(e))) {
        for (; l !== null; ) {
          var i = Ia(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var d = cn(i.pendingLanes);
                  if (d !== 0) {
                    var g = i;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var b = 1 << (31 - ut(d));
                      ((g.entanglements[1] |= b), (d &= ~b));
                    }
                    (fn(i), (Me & 6) === 0 && ((Ui = ht() + 500), Cs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = Ca(i, 2)), g !== null && Tt(g, i, 2), Yi(), Gr(i, 2));
            }
          if (((i = Xr(a)), i === null && Or(e, t, a, no, n), i === l)) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else Or(e, t, a, null, n);
    }
  }
  function Xr(e) {
    return ((e = Zo(e)), Qr(e));
  }
  var no = null;
  function Qr(e) {
    if (((no = null), (e = Fa(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = x(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((no = e), null);
  }
  function pg(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ro()) {
          case ja:
            return 2;
          case Js:
            return 8;
          case wa:
          case Wl:
            return 32;
          case bn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Zr = !1,
    da = null,
    fa = null,
    ma = null,
    Hs = new Map(),
    Us = new Map(),
    ga = [],
    kv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function hg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        da = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        ma = null;
        break;
      case "pointerover":
      case "pointerout":
        Hs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Us.delete(t.pointerId);
    }
  }
  function Ls(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = Ia(t)), t !== null && mg(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Tv(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return ((da = Ls(da, e, t, n, a, l)), !0);
      case "dragenter":
        return ((fa = Ls(fa, e, t, n, a, l)), !0);
      case "mouseover":
        return ((ma = Ls(ma, e, t, n, a, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Hs.set(i, Ls(Hs.get(i) || null, e, t, n, a, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Us.set(i, Ls(Us.get(i) || null, e, t, n, a, l)),
          !0
        );
    }
    return !1;
  }
  function xg(e) {
    var t = Fa(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = x(n)), t !== null)) {
            ((e.blockedOn = t),
              Cu(e.priority, function () {
                gg(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = y(n)), t !== null)) {
            ((e.blockedOn = t),
              Cu(e.priority, function () {
                gg(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ao(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Xr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Qo = a), n.target.dispatchEvent(a), (Qo = null));
      } else return ((t = Ia(n)), t !== null && mg(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function vg(e, t, n) {
    ao(e) && n.delete(t);
  }
  function Ov() {
    ((Zr = !1),
      da !== null && ao(da) && (da = null),
      fa !== null && ao(fa) && (fa = null),
      ma !== null && ao(ma) && (ma = null),
      Hs.forEach(vg),
      Us.forEach(vg));
  }
  function lo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zr ||
        ((Zr = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Ov)));
  }
  var so = null;
  function yg(e) {
    so !== e &&
      ((so = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        so === e && (so = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            l = e[t + 2];
          if (typeof a != "function") {
            if (Qr(a || n) === null) continue;
            break;
          }
          var i = Ia(n);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Xc(i, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function _l(e) {
    function t(b) {
      return lo(b, e);
    }
    (da !== null && lo(da, e),
      fa !== null && lo(fa, e),
      ma !== null && lo(ma, e),
      Hs.forEach(t),
      Us.forEach(t));
    for (var n = 0; n < ga.length; n++) {
      var a = ga[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ga.length && ((n = ga[0]), n.blockedOn === null); )
      (xg(n), n.blockedOn === null && ga.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          i = n[a + 1],
          d = l[wt] || null;
        if (typeof i == "function") d || yg(n);
        else if (d) {
          var g = null;
          if (i && i.hasAttribute("formAction")) {
            if (((l = i), (d = i[wt] || null))) g = d.formAction;
            else if (Qr(l) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (n[a + 1] = g) : (n.splice(a, 3), (a -= 3)),
            yg(n));
        }
      }
  }
  function bg() {
    function e(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (l = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (l !== null && (l(), (l = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function Kr(e) {
    this._internalRoot = e;
  }
  ((io.prototype.render = Kr.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var n = t.current,
        a = Ht();
      dg(n, a, e, t, null, null);
    }),
    (io.prototype.unmount = Kr.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (dg(e.current, 2, null, e, null, null), Yi(), (t[Pa] = null));
        }
      }));
  function io(e) {
    this._internalRoot = e;
  }
  io.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ga.length && t !== 0 && t < ga[n].priority; n++);
      (ga.splice(n, 0, e), n === 0 && xg(e));
    }
  };
  var jg = c.version;
  if (jg !== "19.2.1") throw Error(r(527, jg, "19.2.1"));
  U.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(r(188))
        : ((e = Object.keys(e).join(",")), Error(r(268, e)));
    return (
      (e = h(t)),
      (e = e !== null ? j(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Cv = {
    bundleType: 0,
    version: "19.2.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!oo.isDisabled && oo.supportsFiber)
      try {
        ((Na = oo.inject(Cv)), (xt = oo));
      } catch {}
  }
  return (
    (qs.createRoot = function (e, t) {
      if (!f(e)) throw Error(r(299));
      var n = !1,
        a = "",
        l = Tf,
        i = Of,
        d = Cf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = rg(e, 1, !1, null, null, n, a, null, l, i, d, bg)),
        (e[Pa] = t.current),
        Tr(e),
        new Kr(t)
      );
    }),
    (qs.hydrateRoot = function (e, t, n) {
      if (!f(e)) throw Error(r(299));
      var a = !1,
        l = "",
        i = Tf,
        d = Of,
        g = Cf,
        b = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (i = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (b = n.formState)),
        (t = rg(e, 1, !0, t, n ?? null, a, l, b, i, d, g, bg)),
        (t.context = ug(null)),
        (n = t.current),
        (a = Ht()),
        (a = $a(a)),
        (l = In(a)),
        (l.callback = null),
        ea(n, l, a),
        (n = a),
        (t.current.lanes = n),
        Ve(t, n),
        fn(t),
        (e[Pa] = t.current),
        Tr(e),
        new io(t)
      );
    }),
    (qs.version = "19.2.1"),
    qs
  );
}
var zg;
function Yv() {
  if (zg) return Wr.exports;
  zg = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (c) {
        console.error(c);
      }
  }
  return (s(), (Wr.exports = Lv()), Wr.exports);
}
var qv = Yv(),
  z = Eo();
const K = fp(z),
  Gv = Mv({ __proto__: null, default: K }, [z]);
var Vv = (s, c, u, r, f, m, x, y) => {
    let v = document.documentElement,
      h = ["light", "dark"];
    function j(C) {
      ((Array.isArray(s) ? s : [s]).forEach(M => {
        let Y = M === "class",
          V = Y && m ? f.map(G => m[G] || G) : f;
        Y
          ? (v.classList.remove(...V), v.classList.add(m && m[C] ? m[C] : C))
          : v.setAttribute(M, C);
      }),
        p(C));
    }
    function p(C) {
      y && h.includes(C) && (v.style.colorScheme = C);
    }
    function E() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (r) j(r);
    else
      try {
        let C = localStorage.getItem(c) || u,
          M = x && C === "system" ? E() : C;
        j(M);
      } catch {}
  },
  Xv = z.createContext(void 0),
  Qv = { setTheme: s => {}, themes: [] },
  Zv = () => {
    var s;
    return (s = z.useContext(Xv)) != null ? s : Qv;
  };
z.memo(
  ({
    forcedTheme: s,
    storageKey: c,
    attribute: u,
    enableSystem: r,
    enableColorScheme: f,
    defaultTheme: m,
    value: x,
    themes: y,
    nonce: v,
    scriptProps: h,
  }) => {
    let j = JSON.stringify([u, c, m, s, y, x, r, f]).slice(1, -1);
    return z.createElement("script", {
      ...h,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? v : "",
      dangerouslySetInnerHTML: { __html: `(${Vv.toString()})(${j})` },
    });
  }
);
var xu = mp();
const Kv = fp(xu);
function Jv(s) {
  if (typeof document > "u") return;
  let c = document.head || document.getElementsByTagName("head")[0],
    u = document.createElement("style");
  ((u.type = "text/css"),
    c.appendChild(u),
    u.styleSheet
      ? (u.styleSheet.cssText = s)
      : u.appendChild(document.createTextNode(s)));
}
const Wv = s => {
    switch (s) {
      case "success":
        return Fv;
      case "info":
        return ey;
      case "warning":
        return Iv;
      case "error":
        return ty;
      default:
        return null;
    }
  },
  $v = Array(12).fill(0),
  Pv = ({ visible: s, className: c }) =>
    K.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", c].filter(Boolean).join(" "),
        "data-visible": s,
      },
      K.createElement(
        "div",
        { className: "sonner-spinner" },
        $v.map((u, r) =>
          K.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  Fv = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Iv = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  ey = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  ty = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    K.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  ny = K.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    K.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    K.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  ay = () => {
    const [s, c] = K.useState(document.hidden);
    return (
      K.useEffect(() => {
        const u = () => {
          c(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", u),
          () => window.removeEventListener("visibilitychange", u)
        );
      }, []),
      s
    );
  };
let ou = 1;
class ly {
  constructor() {
    ((this.subscribe = c => (
      this.subscribers.push(c),
      () => {
        const u = this.subscribers.indexOf(c);
        this.subscribers.splice(u, 1);
      }
    )),
      (this.publish = c => {
        this.subscribers.forEach(u => u(c));
      }),
      (this.addToast = c => {
        (this.publish(c), (this.toasts = [...this.toasts, c]));
      }),
      (this.create = c => {
        var u;
        const { message: r, ...f } = c,
          m =
            typeof c?.id == "number" ||
            ((u = c.id) == null ? void 0 : u.length) > 0
              ? c.id
              : ou++,
          x = this.toasts.find(v => v.id === m),
          y = c.dismissible === void 0 ? !0 : c.dismissible;
        return (
          this.dismissedToasts.has(m) && this.dismissedToasts.delete(m),
          x
            ? (this.toasts = this.toasts.map(v =>
                v.id === m
                  ? (this.publish({ ...v, ...c, id: m, title: r }),
                    { ...v, ...c, id: m, dismissible: y, title: r })
                  : v
              ))
            : this.addToast({ title: r, ...f, dismissible: y, id: m }),
          m
        );
      }),
      (this.dismiss = c => (
        c
          ? (this.dismissedToasts.add(c),
            requestAnimationFrame(() =>
              this.subscribers.forEach(u => u({ id: c, dismiss: !0 }))
            ))
          : this.toasts.forEach(u => {
              this.subscribers.forEach(r => r({ id: u.id, dismiss: !0 }));
            }),
        c
      )),
      (this.message = (c, u) => this.create({ ...u, message: c })),
      (this.error = (c, u) => this.create({ ...u, message: c, type: "error" })),
      (this.success = (c, u) =>
        this.create({ ...u, type: "success", message: c })),
      (this.info = (c, u) => this.create({ ...u, type: "info", message: c })),
      (this.warning = (c, u) =>
        this.create({ ...u, type: "warning", message: c })),
      (this.loading = (c, u) =>
        this.create({ ...u, type: "loading", message: c })),
      (this.promise = (c, u) => {
        if (!u) return;
        let r;
        u.loading !== void 0 &&
          (r = this.create({
            ...u,
            promise: c,
            type: "loading",
            message: u.loading,
            description:
              typeof u.description != "function" ? u.description : void 0,
          }));
        const f = Promise.resolve(c instanceof Function ? c() : c);
        let m = r !== void 0,
          x;
        const y = f
            .then(async h => {
              if (((x = ["resolve", h]), K.isValidElement(h)))
                ((m = !1), this.create({ id: r, type: "default", message: h }));
              else if (iy(h) && !h.ok) {
                m = !1;
                const p =
                    typeof u.error == "function"
                      ? await u.error(`HTTP error! status: ${h.status}`)
                      : u.error,
                  E =
                    typeof u.description == "function"
                      ? await u.description(`HTTP error! status: ${h.status}`)
                      : u.description,
                  M =
                    typeof p == "object" && !K.isValidElement(p)
                      ? p
                      : { message: p };
                this.create({ id: r, type: "error", description: E, ...M });
              } else if (h instanceof Error) {
                m = !1;
                const p =
                    typeof u.error == "function" ? await u.error(h) : u.error,
                  E =
                    typeof u.description == "function"
                      ? await u.description(h)
                      : u.description,
                  M =
                    typeof p == "object" && !K.isValidElement(p)
                      ? p
                      : { message: p };
                this.create({ id: r, type: "error", description: E, ...M });
              } else if (u.success !== void 0) {
                m = !1;
                const p =
                    typeof u.success == "function"
                      ? await u.success(h)
                      : u.success,
                  E =
                    typeof u.description == "function"
                      ? await u.description(h)
                      : u.description,
                  M =
                    typeof p == "object" && !K.isValidElement(p)
                      ? p
                      : { message: p };
                this.create({ id: r, type: "success", description: E, ...M });
              }
            })
            .catch(async h => {
              if (((x = ["reject", h]), u.error !== void 0)) {
                m = !1;
                const j =
                    typeof u.error == "function" ? await u.error(h) : u.error,
                  p =
                    typeof u.description == "function"
                      ? await u.description(h)
                      : u.description,
                  C =
                    typeof j == "object" && !K.isValidElement(j)
                      ? j
                      : { message: j };
                this.create({ id: r, type: "error", description: p, ...C });
              }
            })
            .finally(() => {
              (m && (this.dismiss(r), (r = void 0)),
                u.finally == null || u.finally.call(u));
            }),
          v = () =>
            new Promise((h, j) =>
              y.then(() => (x[0] === "reject" ? j(x[1]) : h(x[1]))).catch(j)
            );
        return typeof r != "string" && typeof r != "number"
          ? { unwrap: v }
          : Object.assign(r, { unwrap: v });
      }),
      (this.custom = (c, u) => {
        const r = u?.id || ou++;
        return (this.create({ jsx: c(r), id: r, ...u }), r);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter(c => !this.dismissedToasts.has(c.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const Ot = new ly(),
  sy = (s, c) => {
    const u = c?.id || ou++;
    return (Ot.addToast({ title: s, ...c, id: u }), u);
  },
  iy = s =>
    s &&
    typeof s == "object" &&
    "ok" in s &&
    typeof s.ok == "boolean" &&
    "status" in s &&
    typeof s.status == "number",
  oy = sy,
  cy = () => Ot.toasts,
  ry = () => Ot.getActiveToasts();
Object.assign(
  oy,
  {
    success: Ot.success,
    info: Ot.info,
    warning: Ot.warning,
    error: Ot.error,
    custom: Ot.custom,
    message: Ot.message,
    promise: Ot.promise,
    dismiss: Ot.dismiss,
    loading: Ot.loading,
  },
  { getHistory: cy, getToasts: ry }
);
Jv(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function co(s) {
  return s.label !== void 0;
}
const uy = 3,
  dy = "24px",
  fy = "16px",
  Mg = 4e3,
  my = 356,
  gy = 14,
  py = 45,
  hy = 200;
function mn(...s) {
  return s.filter(Boolean).join(" ");
}
function xy(s) {
  const [c, u] = s.split("-"),
    r = [];
  return (c && r.push(c), u && r.push(u), r);
}
const vy = s => {
  var c, u, r, f, m, x, y, v, h;
  const {
      invert: j,
      toast: p,
      unstyled: E,
      interacting: C,
      setHeights: M,
      visibleToasts: Y,
      heights: V,
      index: G,
      toasts: I,
      expanded: J,
      removeToast: P,
      defaultRichColors: ee,
      closeButton: se,
      style: Q,
      cancelButtonStyle: Z,
      actionButtonStyle: ge,
      className: we = "",
      descriptionClassName: Oe = "",
      duration: he,
      position: xe,
      gap: ye,
      expandByDefault: je,
      classNames: S,
      icons: U,
      closeButtonAriaLabel: D = "Close toast",
    } = s,
    [ie, re] = K.useState(null),
    [w, H] = K.useState(null),
    [R, X] = K.useState(!1),
    [W, oe] = K.useState(!1),
    [ae, de] = K.useState(!1),
    [ke, at] = K.useState(!1),
    [gt, lt] = K.useState(!1),
    [yn, $t] = K.useState(0),
    [Ql, Ka] = K.useState(0),
    ba = K.useRef(p.duration || he || Mg),
    Zl = K.useRef(null),
    Ct = K.useRef(null),
    Kl = G === 0,
    Jl = G + 1 <= Y,
    pt = p.type,
    Vn = p.dismissible !== !1,
    ht = p.className || "",
    Ro = p.descriptionClassName || "",
    ja = K.useMemo(
      () => V.findIndex(fe => fe.toastId === p.id) || 0,
      [V, p.id]
    ),
    Js = K.useMemo(() => {
      var fe;
      return (fe = p.closeButton) != null ? fe : se;
    }, [p.closeButton, se]),
    wa = K.useMemo(() => p.duration || he || Mg, [p.duration, he]),
    Wl = K.useRef(0),
    bn = K.useRef(0),
    Ws = K.useRef(0),
    Xn = K.useRef(null),
    [Na, xt] = xe.split("-"),
    Pt = K.useMemo(
      () => V.reduce((fe, qe, et) => (et >= ja ? fe : fe + qe.height), 0),
      [V, ja]
    ),
    ut = ay(),
    Ho = p.invert || j,
    $l = pt === "loading";
  ((bn.current = K.useMemo(() => ja * ye + Pt, [ja, Pt])),
    K.useEffect(() => {
      ba.current = wa;
    }, [wa]),
    K.useEffect(() => {
      X(!0);
    }, []),
    K.useEffect(() => {
      const fe = Ct.current;
      if (fe) {
        const qe = fe.getBoundingClientRect().height;
        return (
          Ka(qe),
          M(et => [{ toastId: p.id, height: qe, position: p.position }, ...et]),
          () => M(et => et.filter(dt => dt.toastId !== p.id))
        );
      }
    }, [M, p.id]),
    K.useLayoutEffect(() => {
      if (!R) return;
      const fe = Ct.current,
        qe = fe.style.height;
      fe.style.height = "auto";
      const et = fe.getBoundingClientRect().height;
      ((fe.style.height = qe),
        Ka(et),
        M(dt =>
          dt.find(Ve => Ve.toastId === p.id)
            ? dt.map(Ve => (Ve.toastId === p.id ? { ...Ve, height: et } : Ve))
            : [{ toastId: p.id, height: et, position: p.position }, ...dt]
        ));
    }, [R, p.title, p.description, M, p.id, p.jsx, p.action, p.cancel]));
  const on = K.useCallback(() => {
    (oe(!0),
      $t(bn.current),
      M(fe => fe.filter(qe => qe.toastId !== p.id)),
      setTimeout(() => {
        P(p);
      }, hy));
  }, [p, P, M, bn]);
  (K.useEffect(() => {
    if (
      (p.promise && pt === "loading") ||
      p.duration === 1 / 0 ||
      p.type === "loading"
    )
      return;
    let fe;
    return (
      J || C || ut
        ? (() => {
            if (Ws.current < Wl.current) {
              const dt = new Date().getTime() - Wl.current;
              ba.current = ba.current - dt;
            }
            Ws.current = new Date().getTime();
          })()
        : (() => {
            ba.current !== 1 / 0 &&
              ((Wl.current = new Date().getTime()),
              (fe = setTimeout(() => {
                (p.onAutoClose == null || p.onAutoClose.call(p, p), on());
              }, ba.current)));
          })(),
      () => clearTimeout(fe)
    );
  }, [J, C, p, pt, ut, on]),
    K.useEffect(() => {
      p.delete && (on(), p.onDismiss == null || p.onDismiss.call(p, p));
    }, [on, p.delete]));
  function Ja() {
    var fe;
    if (U?.loading) {
      var qe;
      return K.createElement(
        "div",
        {
          className: mn(
            S?.loader,
            p == null || (qe = p.classNames) == null ? void 0 : qe.loader,
            "sonner-loader"
          ),
          "data-visible": pt === "loading",
        },
        U.loading
      );
    }
    return K.createElement(Pv, {
      className: mn(
        S?.loader,
        p == null || (fe = p.classNames) == null ? void 0 : fe.loader
      ),
      visible: pt === "loading",
    });
  }
  const Wa = p.icon || U?.[pt] || Wv(pt);
  var Sa, cn;
  return K.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Ct,
      className: mn(
        we,
        ht,
        S?.toast,
        p == null || (c = p.classNames) == null ? void 0 : c.toast,
        S?.default,
        S?.[pt],
        p == null || (u = p.classNames) == null ? void 0 : u[pt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Sa = p.richColors) != null ? Sa : ee,
      "data-styled": !(p.jsx || p.unstyled || E),
      "data-mounted": R,
      "data-promise": !!p.promise,
      "data-swiped": gt,
      "data-removed": W,
      "data-visible": Jl,
      "data-y-position": Na,
      "data-x-position": xt,
      "data-index": G,
      "data-front": Kl,
      "data-swiping": ae,
      "data-dismissible": Vn,
      "data-type": pt,
      "data-invert": Ho,
      "data-swipe-out": ke,
      "data-swipe-direction": w,
      "data-expanded": !!(J || (je && R)),
      "data-testid": p.testId,
      style: {
        "--index": G,
        "--toasts-before": G,
        "--z-index": I.length - G,
        "--offset": `${W ? yn : bn.current}px`,
        "--initial-height": je ? "auto" : `${Ql}px`,
        ...Q,
        ...p.style,
      },
      onDragEnd: () => {
        (de(!1), re(null), (Xn.current = null));
      },
      onPointerDown: fe => {
        fe.button !== 2 &&
          ($l ||
            !Vn ||
            ((Zl.current = new Date()),
            $t(bn.current),
            fe.target.setPointerCapture(fe.pointerId),
            fe.target.tagName !== "BUTTON" &&
              (de(!0), (Xn.current = { x: fe.clientX, y: fe.clientY }))));
      },
      onPointerUp: () => {
        var fe, qe, et;
        if (ke || !Vn) return;
        Xn.current = null;
        const dt = Number(
            ((fe = Ct.current) == null
              ? void 0
              : fe.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Qn = Number(
            ((qe = Ct.current) == null
              ? void 0
              : qe.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Ve =
            new Date().getTime() -
            ((et = Zl.current) == null ? void 0 : et.getTime()),
          yt = ie === "x" ? dt : Qn,
          Aa = Math.abs(yt) / Ve;
        if (Math.abs(yt) >= py || Aa > 0.11) {
          ($t(bn.current),
            p.onDismiss == null || p.onDismiss.call(p, p),
            H(
              ie === "x" ? (dt > 0 ? "right" : "left") : Qn > 0 ? "down" : "up"
            ),
            on(),
            at(!0));
          return;
        } else {
          var bt, jt;
          ((bt = Ct.current) == null ||
            bt.style.setProperty("--swipe-amount-x", "0px"),
            (jt = Ct.current) == null ||
              jt.style.setProperty("--swipe-amount-y", "0px"));
        }
        (lt(!1), de(!1), re(null));
      },
      onPointerMove: fe => {
        var qe, et, dt;
        if (
          !Xn.current ||
          !Vn ||
          ((qe = window.getSelection()) == null
            ? void 0
            : qe.toString().length) > 0
        )
          return;
        const Ve = fe.clientY - Xn.current.y,
          yt = fe.clientX - Xn.current.x;
        var Aa;
        const bt = (Aa = s.swipeDirections) != null ? Aa : xy(xe);
        !ie &&
          (Math.abs(yt) > 1 || Math.abs(Ve) > 1) &&
          re(Math.abs(yt) > Math.abs(Ve) ? "x" : "y");
        let jt = { x: 0, y: 0 };
        const $a = Ft => 1 / (1.5 + Math.abs(Ft) / 20);
        if (ie === "y") {
          if (bt.includes("top") || bt.includes("bottom"))
            if (
              (bt.includes("top") && Ve < 0) ||
              (bt.includes("bottom") && Ve > 0)
            )
              jt.y = Ve;
            else {
              const Ft = Ve * $a(Ve);
              jt.y = Math.abs(Ft) < Math.abs(Ve) ? Ft : Ve;
            }
        } else if (ie === "x" && (bt.includes("left") || bt.includes("right")))
          if (
            (bt.includes("left") && yt < 0) ||
            (bt.includes("right") && yt > 0)
          )
            jt.x = yt;
          else {
            const Ft = yt * $a(yt);
            jt.x = Math.abs(Ft) < Math.abs(yt) ? Ft : yt;
          }
        ((Math.abs(jt.x) > 0 || Math.abs(jt.y) > 0) && lt(!0),
          (et = Ct.current) == null ||
            et.style.setProperty("--swipe-amount-x", `${jt.x}px`),
          (dt = Ct.current) == null ||
            dt.style.setProperty("--swipe-amount-y", `${jt.y}px`));
      },
    },
    Js && !p.jsx && pt !== "loading"
      ? K.createElement(
          "button",
          {
            "aria-label": D,
            "data-disabled": $l,
            "data-close-button": !0,
            onClick:
              $l || !Vn
                ? () => {}
                : () => {
                    (on(), p.onDismiss == null || p.onDismiss.call(p, p));
                  },
            className: mn(
              S?.closeButton,
              p == null || (r = p.classNames) == null ? void 0 : r.closeButton
            ),
          },
          (cn = U?.close) != null ? cn : ny
        )
      : null,
    (pt || p.icon || p.promise) &&
      p.icon !== null &&
      (U?.[pt] !== null || p.icon)
      ? K.createElement(
          "div",
          {
            "data-icon": "",
            className: mn(
              S?.icon,
              p == null || (f = p.classNames) == null ? void 0 : f.icon
            ),
          },
          p.promise || (p.type === "loading" && !p.icon)
            ? p.icon || Ja()
            : null,
          p.type !== "loading" ? Wa : null
        )
      : null,
    K.createElement(
      "div",
      {
        "data-content": "",
        className: mn(
          S?.content,
          p == null || (m = p.classNames) == null ? void 0 : m.content
        ),
      },
      K.createElement(
        "div",
        {
          "data-title": "",
          className: mn(
            S?.title,
            p == null || (x = p.classNames) == null ? void 0 : x.title
          ),
        },
        p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title
      ),
      p.description
        ? K.createElement(
            "div",
            {
              "data-description": "",
              className: mn(
                Oe,
                Ro,
                S?.description,
                p == null || (y = p.classNames) == null ? void 0 : y.description
              ),
            },
            typeof p.description == "function" ? p.description() : p.description
          )
        : null
    ),
    K.isValidElement(p.cancel)
      ? p.cancel
      : p.cancel && co(p.cancel)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: p.cancelButtonStyle || Z,
              onClick: fe => {
                co(p.cancel) &&
                  Vn &&
                  (p.cancel.onClick == null ||
                    p.cancel.onClick.call(p.cancel, fe),
                  on());
              },
              className: mn(
                S?.cancelButton,
                p == null || (v = p.classNames) == null
                  ? void 0
                  : v.cancelButton
              ),
            },
            p.cancel.label
          )
        : null,
    K.isValidElement(p.action)
      ? p.action
      : p.action && co(p.action)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: p.actionButtonStyle || ge,
              onClick: fe => {
                co(p.action) &&
                  (p.action.onClick == null ||
                    p.action.onClick.call(p.action, fe),
                  !fe.defaultPrevented && on());
              },
              className: mn(
                S?.actionButton,
                p == null || (h = p.classNames) == null
                  ? void 0
                  : h.actionButton
              ),
            },
            p.action.label
          )
        : null
  );
};
function Dg() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const s = document.documentElement.getAttribute("dir");
  return s === "auto" || !s
    ? window.getComputedStyle(document.documentElement).direction
    : s;
}
function yy(s, c) {
  const u = {};
  return (
    [s, c].forEach((r, f) => {
      const m = f === 1,
        x = m ? "--mobile-offset" : "--offset",
        y = m ? fy : dy;
      function v(h) {
        ["top", "right", "bottom", "left"].forEach(j => {
          u[`${x}-${j}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? v(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach(h => {
              r[h] === void 0
                ? (u[`${x}-${h}`] = y)
                : (u[`${x}-${h}`] =
                    typeof r[h] == "number" ? `${r[h]}px` : r[h]);
            })
          : v(y);
    }),
    u
  );
}
const by = K.forwardRef(function (c, u) {
    const {
        id: r,
        invert: f,
        position: m = "bottom-right",
        hotkey: x = ["altKey", "KeyT"],
        expand: y,
        closeButton: v,
        className: h,
        offset: j,
        mobileOffset: p,
        theme: E = "light",
        richColors: C,
        duration: M,
        style: Y,
        visibleToasts: V = uy,
        toastOptions: G,
        dir: I = Dg(),
        gap: J = gy,
        icons: P,
        containerAriaLabel: ee = "Notifications",
      } = c,
      [se, Q] = K.useState([]),
      Z = K.useMemo(
        () =>
          r ? se.filter(R => R.toasterId === r) : se.filter(R => !R.toasterId),
        [se, r]
      ),
      ge = K.useMemo(
        () =>
          Array.from(
            new Set([m].concat(Z.filter(R => R.position).map(R => R.position)))
          ),
        [Z, m]
      ),
      [we, Oe] = K.useState([]),
      [he, xe] = K.useState(!1),
      [ye, je] = K.useState(!1),
      [S, U] = K.useState(
        E !== "system"
          ? E
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
      ),
      D = K.useRef(null),
      ie = x.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      re = K.useRef(null),
      w = K.useRef(!1),
      H = K.useCallback(R => {
        Q(X => {
          var W;
          return (
            ((W = X.find(oe => oe.id === R.id)) != null && W.delete) ||
              Ot.dismiss(R.id),
            X.filter(({ id: oe }) => oe !== R.id)
          );
        });
      }, []);
    return (
      K.useEffect(
        () =>
          Ot.subscribe(R => {
            if (R.dismiss) {
              requestAnimationFrame(() => {
                Q(X => X.map(W => (W.id === R.id ? { ...W, delete: !0 } : W)));
              });
              return;
            }
            setTimeout(() => {
              Kv.flushSync(() => {
                Q(X => {
                  const W = X.findIndex(oe => oe.id === R.id);
                  return W !== -1
                    ? [...X.slice(0, W), { ...X[W], ...R }, ...X.slice(W + 1)]
                    : [R, ...X];
                });
              });
            });
          }),
        [se]
      ),
      K.useEffect(() => {
        if (E !== "system") {
          U(E);
          return;
        }
        if (
          (E === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? U("dark")
              : U("light")),
          typeof window > "u")
        )
          return;
        const R = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          R.addEventListener("change", ({ matches: X }) => {
            U(X ? "dark" : "light");
          });
        } catch {
          R.addListener(({ matches: W }) => {
            try {
              U(W ? "dark" : "light");
            } catch (oe) {
              console.error(oe);
            }
          });
        }
      }, [E]),
      K.useEffect(() => {
        se.length <= 1 && xe(!1);
      }, [se]),
      K.useEffect(() => {
        const R = X => {
          var W;
          if (x.every(de => X[de] || X.code === de)) {
            var ae;
            (xe(!0), (ae = D.current) == null || ae.focus());
          }
          X.code === "Escape" &&
            (document.activeElement === D.current ||
              ((W = D.current) != null &&
                W.contains(document.activeElement))) &&
            xe(!1);
        };
        return (
          document.addEventListener("keydown", R),
          () => document.removeEventListener("keydown", R)
        );
      }, [x]),
      K.useEffect(() => {
        if (D.current)
          return () => {
            re.current &&
              (re.current.focus({ preventScroll: !0 }),
              (re.current = null),
              (w.current = !1));
          };
      }, [D.current]),
      K.createElement(
        "section",
        {
          ref: u,
          "aria-label": `${ee} ${ie}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        ge.map((R, X) => {
          var W;
          const [oe, ae] = R.split("-");
          return Z.length
            ? K.createElement(
                "ol",
                {
                  key: R,
                  dir: I === "auto" ? Dg() : I,
                  tabIndex: -1,
                  ref: D,
                  className: h,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": S,
                  "data-y-position": oe,
                  "data-x-position": ae,
                  style: {
                    "--front-toast-height": `${((W = we[0]) == null ? void 0 : W.height) || 0}px`,
                    "--width": `${my}px`,
                    "--gap": `${J}px`,
                    ...Y,
                    ...yy(j, p),
                  },
                  onBlur: de => {
                    w.current &&
                      !de.currentTarget.contains(de.relatedTarget) &&
                      ((w.current = !1),
                      re.current &&
                        (re.current.focus({ preventScroll: !0 }),
                        (re.current = null)));
                  },
                  onFocus: de => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      w.current ||
                      ((w.current = !0), (re.current = de.relatedTarget));
                  },
                  onMouseEnter: () => xe(!0),
                  onMouseMove: () => xe(!0),
                  onMouseLeave: () => {
                    ye || xe(!1);
                  },
                  onDragEnd: () => xe(!1),
                  onPointerDown: de => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      je(!0);
                  },
                  onPointerUp: () => je(!1),
                },
                Z.filter(
                  de => (!de.position && X === 0) || de.position === R
                ).map((de, ke) => {
                  var at, gt;
                  return K.createElement(vy, {
                    key: de.id,
                    icons: P,
                    index: ke,
                    toast: de,
                    defaultRichColors: C,
                    duration: (at = G?.duration) != null ? at : M,
                    className: G?.className,
                    descriptionClassName: G?.descriptionClassName,
                    invert: f,
                    visibleToasts: V,
                    closeButton: (gt = G?.closeButton) != null ? gt : v,
                    interacting: ye,
                    position: R,
                    style: G?.style,
                    unstyled: G?.unstyled,
                    classNames: G?.classNames,
                    cancelButtonStyle: G?.cancelButtonStyle,
                    actionButtonStyle: G?.actionButtonStyle,
                    closeButtonAriaLabel: G?.closeButtonAriaLabel,
                    removeToast: H,
                    toasts: Z.filter(lt => lt.position == de.position),
                    heights: we.filter(lt => lt.position == de.position),
                    setHeights: Oe,
                    expandByDefault: y,
                    gap: J,
                    expanded: he,
                    swipeDirections: c.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  }),
  jy = ({ ...s }) => {
    const { theme: c = "system" } = Zv();
    return o.jsx(by, {
      "data-loc": "client/src/components/ui/sonner.tsx:8",
      theme: c,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...s,
    });
  };
function Yn(s, c, { checkForDefaultPrevented: u = !0 } = {}) {
  return function (f) {
    if ((s?.(f), u === !1 || !f.defaultPrevented)) return c?.(f);
  };
}
function _g(s, c) {
  if (typeof s == "function") return s(c);
  s != null && (s.current = c);
}
function gp(...s) {
  return c => {
    let u = !1;
    const r = s.map(f => {
      const m = _g(f, c);
      return (!u && typeof m == "function" && (u = !0), m);
    });
    if (u)
      return () => {
        for (let f = 0; f < r.length; f++) {
          const m = r[f];
          typeof m == "function" ? m() : _g(s[f], null);
        }
      };
  };
}
function Qa(...s) {
  return z.useCallback(gp(...s), s);
}
function pp(s, c = []) {
  let u = [];
  function r(m, x) {
    const y = z.createContext(x),
      v = u.length;
    u = [...u, x];
    const h = p => {
      const { scope: E, children: C, ...M } = p,
        Y = E?.[s]?.[v] || y,
        V = z.useMemo(() => M, Object.values(M));
      return o.jsx(Y.Provider, { value: V, children: C });
    };
    h.displayName = m + "Provider";
    function j(p, E) {
      const C = E?.[s]?.[v] || y,
        M = z.useContext(C);
      if (M) return M;
      if (x !== void 0) return x;
      throw new Error(`\`${p}\` must be used within \`${m}\``);
    }
    return [h, j];
  }
  const f = () => {
    const m = u.map(x => z.createContext(x));
    return function (y) {
      const v = y?.[s] || m;
      return z.useMemo(() => ({ [`__scope${s}`]: { ...y, [s]: v } }), [y, v]);
    };
  };
  return ((f.scopeName = s), [r, wy(f, ...c)]);
}
function wy(...s) {
  const c = s[0];
  if (s.length === 1) return c;
  const u = () => {
    const r = s.map(f => ({ useScope: f(), scopeName: f.scopeName }));
    return function (m) {
      const x = r.reduce((y, { useScope: v, scopeName: h }) => {
        const p = v(m)[`__scope${h}`];
        return { ...y, ...p };
      }, {});
      return z.useMemo(() => ({ [`__scope${c.scopeName}`]: x }), [x]);
    };
  };
  return ((u.scopeName = c.scopeName), u);
}
function hp(s) {
  const c = Sy(s),
    u = z.forwardRef((r, f) => {
      const { children: m, ...x } = r,
        y = z.Children.toArray(m),
        v = y.find(Ey);
      if (v) {
        const h = v.props.children,
          j = y.map(p =>
            p === v
              ? z.Children.count(h) > 1
                ? z.Children.only(null)
                : z.isValidElement(h)
                  ? h.props.children
                  : null
              : p
          );
        return o.jsx(c, {
          ...x,
          ref: f,
          children: z.isValidElement(h) ? z.cloneElement(h, void 0, j) : null,
        });
      }
      return o.jsx(c, { ...x, ref: f, children: m });
    });
  return ((u.displayName = `${s}.Slot`), u);
}
var Ny = hp("Slot");
function Sy(s) {
  const c = z.forwardRef((u, r) => {
    const { children: f, ...m } = u;
    if (z.isValidElement(f)) {
      const x = Ty(f),
        y = ky(m, f.props);
      return (
        f.type !== z.Fragment && (y.ref = r ? gp(r, x) : x),
        z.cloneElement(f, y)
      );
    }
    return z.Children.count(f) > 1 ? z.Children.only(null) : null;
  });
  return ((c.displayName = `${s}.SlotClone`), c);
}
var xp = Symbol("radix.slottable");
function Ay(s) {
  const c = ({ children: u }) => o.jsx(o.Fragment, { children: u });
  return ((c.displayName = `${s}.Slottable`), (c.__radixId = xp), c);
}
function Ey(s) {
  return (
    z.isValidElement(s) &&
    typeof s.type == "function" &&
    "__radixId" in s.type &&
    s.type.__radixId === xp
  );
}
function ky(s, c) {
  const u = { ...c };
  for (const r in c) {
    const f = s[r],
      m = c[r];
    /^on[A-Z]/.test(r)
      ? f && m
        ? (u[r] = (...y) => {
            const v = m(...y);
            return (f(...y), v);
          })
        : f && (u[r] = f)
      : r === "style"
        ? (u[r] = { ...f, ...m })
        : r === "className" && (u[r] = [f, m].filter(Boolean).join(" "));
  }
  return { ...s, ...u };
}
function Ty(s) {
  let c = Object.getOwnPropertyDescriptor(s.props, "ref")?.get,
    u = c && "isReactWarning" in c && c.isReactWarning;
  return u
    ? s.ref
    : ((c = Object.getOwnPropertyDescriptor(s, "ref")?.get),
      (u = c && "isReactWarning" in c && c.isReactWarning),
      u ? s.props.ref : s.props.ref || s.ref);
}
var Oy = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Za = Oy.reduce((s, c) => {
    const u = hp(`Primitive.${c}`),
      r = z.forwardRef((f, m) => {
        const { asChild: x, ...y } = f,
          v = x ? u : c;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          o.jsx(v, { ...y, ref: m })
        );
      });
    return ((r.displayName = `Primitive.${c}`), { ...s, [c]: r });
  }, {});
function Cy(s, c) {
  s && xu.flushSync(() => s.dispatchEvent(c));
}
function ko(s) {
  const c = z.useRef(s);
  return (
    z.useEffect(() => {
      c.current = s;
    }),
    z.useMemo(
      () =>
        (...u) =>
          c.current?.(...u),
      []
    )
  );
}
function zy(s, c = globalThis?.document) {
  const u = ko(s);
  z.useEffect(() => {
    const r = f => {
      f.key === "Escape" && u(f);
    };
    return (
      c.addEventListener("keydown", r, { capture: !0 }),
      () => c.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [u, c]);
}
var My = "DismissableLayer",
  cu = "dismissableLayer.update",
  Dy = "dismissableLayer.pointerDownOutside",
  _y = "dismissableLayer.focusOutside",
  Bg,
  vp = z.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  yp = z.forwardRef((s, c) => {
    const {
        disableOutsidePointerEvents: u = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: f,
        onFocusOutside: m,
        onInteractOutside: x,
        onDismiss: y,
        ...v
      } = s,
      h = z.useContext(vp),
      [j, p] = z.useState(null),
      E = j?.ownerDocument ?? globalThis?.document,
      [, C] = z.useState({}),
      M = Qa(c, Q => p(Q)),
      Y = Array.from(h.layers),
      [V] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      G = Y.indexOf(V),
      I = j ? Y.indexOf(j) : -1,
      J = h.layersWithOutsidePointerEventsDisabled.size > 0,
      P = I >= G,
      ee = Hy(Q => {
        const Z = Q.target,
          ge = [...h.branches].some(we => we.contains(Z));
        !P || ge || (f?.(Q), x?.(Q), Q.defaultPrevented || y?.());
      }, E),
      se = Uy(Q => {
        const Z = Q.target;
        [...h.branches].some(we => we.contains(Z)) ||
          (m?.(Q), x?.(Q), Q.defaultPrevented || y?.());
      }, E);
    return (
      zy(Q => {
        I === h.layers.size - 1 &&
          (r?.(Q), !Q.defaultPrevented && y && (Q.preventDefault(), y()));
      }, E),
      z.useEffect(() => {
        if (j)
          return (
            u &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Bg = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(j)),
            h.layers.add(j),
            Rg(),
            () => {
              u &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Bg);
            }
          );
      }, [j, E, u, h]),
      z.useEffect(
        () => () => {
          j &&
            (h.layers.delete(j),
            h.layersWithOutsidePointerEventsDisabled.delete(j),
            Rg());
        },
        [j, h]
      ),
      z.useEffect(() => {
        const Q = () => C({});
        return (
          document.addEventListener(cu, Q),
          () => document.removeEventListener(cu, Q)
        );
      }, []),
      o.jsx(Za.div, {
        ...v,
        ref: M,
        style: {
          pointerEvents: J ? (P ? "auto" : "none") : void 0,
          ...s.style,
        },
        onFocusCapture: Yn(s.onFocusCapture, se.onFocusCapture),
        onBlurCapture: Yn(s.onBlurCapture, se.onBlurCapture),
        onPointerDownCapture: Yn(
          s.onPointerDownCapture,
          ee.onPointerDownCapture
        ),
      })
    );
  });
yp.displayName = My;
var By = "DismissableLayerBranch",
  Ry = z.forwardRef((s, c) => {
    const u = z.useContext(vp),
      r = z.useRef(null),
      f = Qa(c, r);
    return (
      z.useEffect(() => {
        const m = r.current;
        if (m)
          return (
            u.branches.add(m),
            () => {
              u.branches.delete(m);
            }
          );
      }, [u.branches]),
      o.jsx(Za.div, { ...s, ref: f })
    );
  });
Ry.displayName = By;
function Hy(s, c = globalThis?.document) {
  const u = ko(s),
    r = z.useRef(!1),
    f = z.useRef(() => {});
  return (
    z.useEffect(() => {
      const m = y => {
          if (y.target && !r.current) {
            let v = function () {
              bp(Dy, u, h, { discrete: !0 });
            };
            const h = { originalEvent: y };
            y.pointerType === "touch"
              ? (c.removeEventListener("click", f.current),
                (f.current = v),
                c.addEventListener("click", f.current, { once: !0 }))
              : v();
          } else c.removeEventListener("click", f.current);
          r.current = !1;
        },
        x = window.setTimeout(() => {
          c.addEventListener("pointerdown", m);
        }, 0);
      return () => {
        (window.clearTimeout(x),
          c.removeEventListener("pointerdown", m),
          c.removeEventListener("click", f.current));
      };
    }, [c, u]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Uy(s, c = globalThis?.document) {
  const u = ko(s),
    r = z.useRef(!1);
  return (
    z.useEffect(() => {
      const f = m => {
        m.target &&
          !r.current &&
          bp(_y, u, { originalEvent: m }, { discrete: !1 });
      };
      return (
        c.addEventListener("focusin", f),
        () => c.removeEventListener("focusin", f)
      );
    }, [c, u]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Rg() {
  const s = new CustomEvent(cu);
  document.dispatchEvent(s);
}
function bp(s, c, u, { discrete: r }) {
  const f = u.originalEvent.target,
    m = new CustomEvent(s, { bubbles: !1, cancelable: !0, detail: u });
  (c && f.addEventListener(s, c, { once: !0 }),
    r ? Cy(f, m) : f.dispatchEvent(m));
}
var Vs = globalThis?.document ? z.useLayoutEffect : () => {};
const Ly = ["top", "right", "bottom", "left"],
  xa = Math.min,
  Ut = Math.max,
  jo = Math.round,
  ro = Math.floor,
  hn = s => ({ x: s, y: s }),
  Yy = { left: "right", right: "left", bottom: "top", top: "bottom" },
  qy = { start: "end", end: "start" };
function ru(s, c, u) {
  return Ut(s, xa(c, u));
}
function qn(s, c) {
  return typeof s == "function" ? s(c) : s;
}
function Gn(s) {
  return s.split("-")[0];
}
function ql(s) {
  return s.split("-")[1];
}
function vu(s) {
  return s === "x" ? "y" : "x";
}
function yu(s) {
  return s === "y" ? "height" : "width";
}
const Gy = new Set(["top", "bottom"]);
function pn(s) {
  return Gy.has(Gn(s)) ? "y" : "x";
}
function bu(s) {
  return vu(pn(s));
}
function Vy(s, c, u) {
  u === void 0 && (u = !1);
  const r = ql(s),
    f = bu(s),
    m = yu(f);
  let x =
    f === "x"
      ? r === (u ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (c.reference[m] > c.floating[m] && (x = wo(x)), [x, wo(x)]);
}
function Xy(s) {
  const c = wo(s);
  return [uu(s), c, uu(c)];
}
function uu(s) {
  return s.replace(/start|end/g, c => qy[c]);
}
const Hg = ["left", "right"],
  Ug = ["right", "left"],
  Qy = ["top", "bottom"],
  Zy = ["bottom", "top"];
function Ky(s, c, u) {
  switch (s) {
    case "top":
    case "bottom":
      return u ? (c ? Ug : Hg) : c ? Hg : Ug;
    case "left":
    case "right":
      return c ? Qy : Zy;
    default:
      return [];
  }
}
function Jy(s, c, u, r) {
  const f = ql(s);
  let m = Ky(Gn(s), u === "start", r);
  return (
    f && ((m = m.map(x => x + "-" + f)), c && (m = m.concat(m.map(uu)))),
    m
  );
}
function wo(s) {
  return s.replace(/left|right|bottom|top/g, c => Yy[c]);
}
function Wy(s) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...s };
}
function jp(s) {
  return typeof s != "number"
    ? Wy(s)
    : { top: s, right: s, bottom: s, left: s };
}
function No(s) {
  const { x: c, y: u, width: r, height: f } = s;
  return {
    width: r,
    height: f,
    top: u,
    left: c,
    right: c + r,
    bottom: u + f,
    x: c,
    y: u,
  };
}
function Lg(s, c, u) {
  let { reference: r, floating: f } = s;
  const m = pn(c),
    x = bu(c),
    y = yu(x),
    v = Gn(c),
    h = m === "y",
    j = r.x + r.width / 2 - f.width / 2,
    p = r.y + r.height / 2 - f.height / 2,
    E = r[y] / 2 - f[y] / 2;
  let C;
  switch (v) {
    case "top":
      C = { x: j, y: r.y - f.height };
      break;
    case "bottom":
      C = { x: j, y: r.y + r.height };
      break;
    case "right":
      C = { x: r.x + r.width, y: p };
      break;
    case "left":
      C = { x: r.x - f.width, y: p };
      break;
    default:
      C = { x: r.x, y: r.y };
  }
  switch (ql(c)) {
    case "start":
      C[x] -= E * (u && h ? -1 : 1);
      break;
    case "end":
      C[x] += E * (u && h ? -1 : 1);
      break;
  }
  return C;
}
const $y = async (s, c, u) => {
  const {
      placement: r = "bottom",
      strategy: f = "absolute",
      middleware: m = [],
      platform: x,
    } = u,
    y = m.filter(Boolean),
    v = await (x.isRTL == null ? void 0 : x.isRTL(c));
  let h = await x.getElementRects({ reference: s, floating: c, strategy: f }),
    { x: j, y: p } = Lg(h, r, v),
    E = r,
    C = {},
    M = 0;
  for (let Y = 0; Y < y.length; Y++) {
    const { name: V, fn: G } = y[Y],
      {
        x: I,
        y: J,
        data: P,
        reset: ee,
      } = await G({
        x: j,
        y: p,
        initialPlacement: r,
        placement: E,
        strategy: f,
        middlewareData: C,
        rects: h,
        platform: x,
        elements: { reference: s, floating: c },
      });
    ((j = I ?? j),
      (p = J ?? p),
      (C = { ...C, [V]: { ...C[V], ...P } }),
      ee &&
        M <= 50 &&
        (M++,
        typeof ee == "object" &&
          (ee.placement && (E = ee.placement),
          ee.rects &&
            (h =
              ee.rects === !0
                ? await x.getElementRects({
                    reference: s,
                    floating: c,
                    strategy: f,
                  })
                : ee.rects),
          ({ x: j, y: p } = Lg(h, E, v))),
        (Y = -1)));
  }
  return { x: j, y: p, placement: E, strategy: f, middlewareData: C };
};
async function Xs(s, c) {
  var u;
  c === void 0 && (c = {});
  const { x: r, y: f, platform: m, rects: x, elements: y, strategy: v } = s,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: j = "viewport",
      elementContext: p = "floating",
      altBoundary: E = !1,
      padding: C = 0,
    } = qn(c, s),
    M = jp(C),
    V = y[E ? (p === "floating" ? "reference" : "floating") : p],
    G = No(
      await m.getClippingRect({
        element:
          (u = await (m.isElement == null ? void 0 : m.isElement(V))) == null ||
          u
            ? V
            : V.contextElement ||
              (await (m.getDocumentElement == null
                ? void 0
                : m.getDocumentElement(y.floating))),
        boundary: h,
        rootBoundary: j,
        strategy: v,
      })
    ),
    I =
      p === "floating"
        ? { x: r, y: f, width: x.floating.width, height: x.floating.height }
        : x.reference,
    J = await (m.getOffsetParent == null
      ? void 0
      : m.getOffsetParent(y.floating)),
    P = (await (m.isElement == null ? void 0 : m.isElement(J)))
      ? (await (m.getScale == null ? void 0 : m.getScale(J))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    ee = No(
      m.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await m.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: y,
            rect: I,
            offsetParent: J,
            strategy: v,
          })
        : I
    );
  return {
    top: (G.top - ee.top + M.top) / P.y,
    bottom: (ee.bottom - G.bottom + M.bottom) / P.y,
    left: (G.left - ee.left + M.left) / P.x,
    right: (ee.right - G.right + M.right) / P.x,
  };
}
const Py = s => ({
    name: "arrow",
    options: s,
    async fn(c) {
      const {
          x: u,
          y: r,
          placement: f,
          rects: m,
          platform: x,
          elements: y,
          middlewareData: v,
        } = c,
        { element: h, padding: j = 0 } = qn(s, c) || {};
      if (h == null) return {};
      const p = jp(j),
        E = { x: u, y: r },
        C = bu(f),
        M = yu(C),
        Y = await x.getDimensions(h),
        V = C === "y",
        G = V ? "top" : "left",
        I = V ? "bottom" : "right",
        J = V ? "clientHeight" : "clientWidth",
        P = m.reference[M] + m.reference[C] - E[C] - m.floating[M],
        ee = E[C] - m.reference[C],
        se = await (x.getOffsetParent == null ? void 0 : x.getOffsetParent(h));
      let Q = se ? se[J] : 0;
      (!Q || !(await (x.isElement == null ? void 0 : x.isElement(se)))) &&
        (Q = y.floating[J] || m.floating[M]);
      const Z = P / 2 - ee / 2,
        ge = Q / 2 - Y[M] / 2 - 1,
        we = xa(p[G], ge),
        Oe = xa(p[I], ge),
        he = we,
        xe = Q - Y[M] - Oe,
        ye = Q / 2 - Y[M] / 2 + Z,
        je = ru(he, ye, xe),
        S =
          !v.arrow &&
          ql(f) != null &&
          ye !== je &&
          m.reference[M] / 2 - (ye < he ? we : Oe) - Y[M] / 2 < 0,
        U = S ? (ye < he ? ye - he : ye - xe) : 0;
      return {
        [C]: E[C] + U,
        data: {
          [C]: je,
          centerOffset: ye - je - U,
          ...(S && { alignmentOffset: U }),
        },
        reset: S,
      };
    },
  }),
  Fy = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        name: "flip",
        options: s,
        async fn(c) {
          var u, r;
          const {
              placement: f,
              middlewareData: m,
              rects: x,
              initialPlacement: y,
              platform: v,
              elements: h,
            } = c,
            {
              mainAxis: j = !0,
              crossAxis: p = !0,
              fallbackPlacements: E,
              fallbackStrategy: C = "bestFit",
              fallbackAxisSideDirection: M = "none",
              flipAlignment: Y = !0,
              ...V
            } = qn(s, c);
          if ((u = m.arrow) != null && u.alignmentOffset) return {};
          const G = Gn(f),
            I = pn(y),
            J = Gn(y) === y,
            P = await (v.isRTL == null ? void 0 : v.isRTL(h.floating)),
            ee = E || (J || !Y ? [wo(y)] : Xy(y)),
            se = M !== "none";
          !E && se && ee.push(...Jy(y, Y, M, P));
          const Q = [y, ...ee],
            Z = await Xs(c, V),
            ge = [];
          let we = ((r = m.flip) == null ? void 0 : r.overflows) || [];
          if ((j && ge.push(Z[G]), p)) {
            const ye = Vy(f, x, P);
            ge.push(Z[ye[0]], Z[ye[1]]);
          }
          if (
            ((we = [...we, { placement: f, overflows: ge }]),
            !ge.every(ye => ye <= 0))
          ) {
            var Oe, he;
            const ye = (((Oe = m.flip) == null ? void 0 : Oe.index) || 0) + 1,
              je = Q[ye];
            if (
              je &&
              (!(p === "alignment" ? I !== pn(je) : !1) ||
                we.every(D =>
                  pn(D.placement) === I ? D.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: ye, overflows: we },
                reset: { placement: je },
              };
            let S =
              (he = we
                .filter(U => U.overflows[0] <= 0)
                .sort((U, D) => U.overflows[1] - D.overflows[1])[0]) == null
                ? void 0
                : he.placement;
            if (!S)
              switch (C) {
                case "bestFit": {
                  var xe;
                  const U =
                    (xe = we
                      .filter(D => {
                        if (se) {
                          const ie = pn(D.placement);
                          return ie === I || ie === "y";
                        }
                        return !0;
                      })
                      .map(D => [
                        D.placement,
                        D.overflows
                          .filter(ie => ie > 0)
                          .reduce((ie, re) => ie + re, 0),
                      ])
                      .sort((D, ie) => D[1] - ie[1])[0]) == null
                      ? void 0
                      : xe[0];
                  U && (S = U);
                  break;
                }
                case "initialPlacement":
                  S = y;
                  break;
              }
            if (f !== S) return { reset: { placement: S } };
          }
          return {};
        },
      }
    );
  };
function Yg(s, c) {
  return {
    top: s.top - c.height,
    right: s.right - c.width,
    bottom: s.bottom - c.height,
    left: s.left - c.width,
  };
}
function qg(s) {
  return Ly.some(c => s[c] >= 0);
}
const Iy = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        name: "hide",
        options: s,
        async fn(c) {
          const { rects: u } = c,
            { strategy: r = "referenceHidden", ...f } = qn(s, c);
          switch (r) {
            case "referenceHidden": {
              const m = await Xs(c, { ...f, elementContext: "reference" }),
                x = Yg(m, u.reference);
              return {
                data: { referenceHiddenOffsets: x, referenceHidden: qg(x) },
              };
            }
            case "escaped": {
              const m = await Xs(c, { ...f, altBoundary: !0 }),
                x = Yg(m, u.floating);
              return { data: { escapedOffsets: x, escaped: qg(x) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  wp = new Set(["left", "top"]);
async function e0(s, c) {
  const { placement: u, platform: r, elements: f } = s,
    m = await (r.isRTL == null ? void 0 : r.isRTL(f.floating)),
    x = Gn(u),
    y = ql(u),
    v = pn(u) === "y",
    h = wp.has(x) ? -1 : 1,
    j = m && v ? -1 : 1,
    p = qn(c, s);
  let {
    mainAxis: E,
    crossAxis: C,
    alignmentAxis: M,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    y && typeof M == "number" && (C = y === "end" ? M * -1 : M),
    v ? { x: C * j, y: E * h } : { x: E * h, y: C * j }
  );
}
const t0 = function (s) {
    return (
      s === void 0 && (s = 0),
      {
        name: "offset",
        options: s,
        async fn(c) {
          var u, r;
          const { x: f, y: m, placement: x, middlewareData: y } = c,
            v = await e0(c, s);
          return x === ((u = y.offset) == null ? void 0 : u.placement) &&
            (r = y.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: f + v.x, y: m + v.y, data: { ...v, placement: x } };
        },
      }
    );
  },
  n0 = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        name: "shift",
        options: s,
        async fn(c) {
          const { x: u, y: r, placement: f } = c,
            {
              mainAxis: m = !0,
              crossAxis: x = !1,
              limiter: y = {
                fn: V => {
                  let { x: G, y: I } = V;
                  return { x: G, y: I };
                },
              },
              ...v
            } = qn(s, c),
            h = { x: u, y: r },
            j = await Xs(c, v),
            p = pn(Gn(f)),
            E = vu(p);
          let C = h[E],
            M = h[p];
          if (m) {
            const V = E === "y" ? "top" : "left",
              G = E === "y" ? "bottom" : "right",
              I = C + j[V],
              J = C - j[G];
            C = ru(I, C, J);
          }
          if (x) {
            const V = p === "y" ? "top" : "left",
              G = p === "y" ? "bottom" : "right",
              I = M + j[V],
              J = M - j[G];
            M = ru(I, M, J);
          }
          const Y = y.fn({ ...c, [E]: C, [p]: M });
          return {
            ...Y,
            data: { x: Y.x - u, y: Y.y - r, enabled: { [E]: m, [p]: x } },
          };
        },
      }
    );
  },
  a0 = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        options: s,
        fn(c) {
          const { x: u, y: r, placement: f, rects: m, middlewareData: x } = c,
            { offset: y = 0, mainAxis: v = !0, crossAxis: h = !0 } = qn(s, c),
            j = { x: u, y: r },
            p = pn(f),
            E = vu(p);
          let C = j[E],
            M = j[p];
          const Y = qn(y, c),
            V =
              typeof Y == "number"
                ? { mainAxis: Y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...Y };
          if (v) {
            const J = E === "y" ? "height" : "width",
              P = m.reference[E] - m.floating[J] + V.mainAxis,
              ee = m.reference[E] + m.reference[J] - V.mainAxis;
            C < P ? (C = P) : C > ee && (C = ee);
          }
          if (h) {
            var G, I;
            const J = E === "y" ? "width" : "height",
              P = wp.has(Gn(f)),
              ee =
                m.reference[p] -
                m.floating[J] +
                ((P && ((G = x.offset) == null ? void 0 : G[p])) || 0) +
                (P ? 0 : V.crossAxis),
              se =
                m.reference[p] +
                m.reference[J] +
                (P ? 0 : ((I = x.offset) == null ? void 0 : I[p]) || 0) -
                (P ? V.crossAxis : 0);
            M < ee ? (M = ee) : M > se && (M = se);
          }
          return { [E]: C, [p]: M };
        },
      }
    );
  },
  l0 = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        name: "size",
        options: s,
        async fn(c) {
          var u, r;
          const { placement: f, rects: m, platform: x, elements: y } = c,
            { apply: v = () => {}, ...h } = qn(s, c),
            j = await Xs(c, h),
            p = Gn(f),
            E = ql(f),
            C = pn(f) === "y",
            { width: M, height: Y } = m.floating;
          let V, G;
          p === "top" || p === "bottom"
            ? ((V = p),
              (G =
                E ===
                ((await (x.isRTL == null ? void 0 : x.isRTL(y.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((G = p), (V = E === "end" ? "top" : "bottom"));
          const I = Y - j.top - j.bottom,
            J = M - j.left - j.right,
            P = xa(Y - j[V], I),
            ee = xa(M - j[G], J),
            se = !c.middlewareData.shift;
          let Q = P,
            Z = ee;
          if (
            ((u = c.middlewareData.shift) != null && u.enabled.x && (Z = J),
            (r = c.middlewareData.shift) != null && r.enabled.y && (Q = I),
            se && !E)
          ) {
            const we = Ut(j.left, 0),
              Oe = Ut(j.right, 0),
              he = Ut(j.top, 0),
              xe = Ut(j.bottom, 0);
            C
              ? (Z =
                  M -
                  2 * (we !== 0 || Oe !== 0 ? we + Oe : Ut(j.left, j.right)))
              : (Q =
                  Y -
                  2 * (he !== 0 || xe !== 0 ? he + xe : Ut(j.top, j.bottom)));
          }
          await v({ ...c, availableWidth: Z, availableHeight: Q });
          const ge = await x.getDimensions(y.floating);
          return M !== ge.width || Y !== ge.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function To() {
  return typeof window < "u";
}
function Gl(s) {
  return Np(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function Lt(s) {
  var c;
  return (
    (s == null || (c = s.ownerDocument) == null ? void 0 : c.defaultView) ||
    window
  );
}
function vn(s) {
  var c;
  return (c = (Np(s) ? s.ownerDocument : s.document) || window.document) == null
    ? void 0
    : c.documentElement;
}
function Np(s) {
  return To() ? s instanceof Node || s instanceof Lt(s).Node : !1;
}
function nn(s) {
  return To() ? s instanceof Element || s instanceof Lt(s).Element : !1;
}
function xn(s) {
  return To() ? s instanceof HTMLElement || s instanceof Lt(s).HTMLElement : !1;
}
function Gg(s) {
  return !To() || typeof ShadowRoot > "u"
    ? !1
    : s instanceof ShadowRoot || s instanceof Lt(s).ShadowRoot;
}
const s0 = new Set(["inline", "contents"]);
function Zs(s) {
  const { overflow: c, overflowX: u, overflowY: r, display: f } = an(s);
  return /auto|scroll|overlay|hidden|clip/.test(c + r + u) && !s0.has(f);
}
const i0 = new Set(["table", "td", "th"]);
function o0(s) {
  return i0.has(Gl(s));
}
const c0 = [":popover-open", ":modal"];
function Oo(s) {
  return c0.some(c => {
    try {
      return s.matches(c);
    } catch {
      return !1;
    }
  });
}
const r0 = ["transform", "translate", "scale", "rotate", "perspective"],
  u0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  d0 = ["paint", "layout", "strict", "content"];
function ju(s) {
  const c = wu(),
    u = nn(s) ? an(s) : s;
  return (
    r0.some(r => (u[r] ? u[r] !== "none" : !1)) ||
    (u.containerType ? u.containerType !== "normal" : !1) ||
    (!c && (u.backdropFilter ? u.backdropFilter !== "none" : !1)) ||
    (!c && (u.filter ? u.filter !== "none" : !1)) ||
    u0.some(r => (u.willChange || "").includes(r)) ||
    d0.some(r => (u.contain || "").includes(r))
  );
}
function f0(s) {
  let c = va(s);
  for (; xn(c) && !Ll(c); ) {
    if (ju(c)) return c;
    if (Oo(c)) return null;
    c = va(c);
  }
  return null;
}
function wu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const m0 = new Set(["html", "body", "#document"]);
function Ll(s) {
  return m0.has(Gl(s));
}
function an(s) {
  return Lt(s).getComputedStyle(s);
}
function Co(s) {
  return nn(s)
    ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop }
    : { scrollLeft: s.scrollX, scrollTop: s.scrollY };
}
function va(s) {
  if (Gl(s) === "html") return s;
  const c = s.assignedSlot || s.parentNode || (Gg(s) && s.host) || vn(s);
  return Gg(c) ? c.host : c;
}
function Sp(s) {
  const c = va(s);
  return Ll(c)
    ? s.ownerDocument
      ? s.ownerDocument.body
      : s.body
    : xn(c) && Zs(c)
      ? c
      : Sp(c);
}
function Qs(s, c, u) {
  var r;
  (c === void 0 && (c = []), u === void 0 && (u = !0));
  const f = Sp(s),
    m = f === ((r = s.ownerDocument) == null ? void 0 : r.body),
    x = Lt(f);
  if (m) {
    const y = du(x);
    return c.concat(
      x,
      x.visualViewport || [],
      Zs(f) ? f : [],
      y && u ? Qs(y) : []
    );
  }
  return c.concat(f, Qs(f, [], u));
}
function du(s) {
  return s.parent && Object.getPrototypeOf(s.parent) ? s.frameElement : null;
}
function Ap(s) {
  const c = an(s);
  let u = parseFloat(c.width) || 0,
    r = parseFloat(c.height) || 0;
  const f = xn(s),
    m = f ? s.offsetWidth : u,
    x = f ? s.offsetHeight : r,
    y = jo(u) !== m || jo(r) !== x;
  return (y && ((u = m), (r = x)), { width: u, height: r, $: y });
}
function Nu(s) {
  return nn(s) ? s : s.contextElement;
}
function Hl(s) {
  const c = Nu(s);
  if (!xn(c)) return hn(1);
  const u = c.getBoundingClientRect(),
    { width: r, height: f, $: m } = Ap(c);
  let x = (m ? jo(u.width) : u.width) / r,
    y = (m ? jo(u.height) : u.height) / f;
  return (
    (!x || !Number.isFinite(x)) && (x = 1),
    (!y || !Number.isFinite(y)) && (y = 1),
    { x, y }
  );
}
const g0 = hn(0);
function Ep(s) {
  const c = Lt(s);
  return !wu() || !c.visualViewport
    ? g0
    : { x: c.visualViewport.offsetLeft, y: c.visualViewport.offsetTop };
}
function p0(s, c, u) {
  return (c === void 0 && (c = !1), !u || (c && u !== Lt(s)) ? !1 : c);
}
function Xa(s, c, u, r) {
  (c === void 0 && (c = !1), u === void 0 && (u = !1));
  const f = s.getBoundingClientRect(),
    m = Nu(s);
  let x = hn(1);
  c && (r ? nn(r) && (x = Hl(r)) : (x = Hl(s)));
  const y = p0(m, u, r) ? Ep(m) : hn(0);
  let v = (f.left + y.x) / x.x,
    h = (f.top + y.y) / x.y,
    j = f.width / x.x,
    p = f.height / x.y;
  if (m) {
    const E = Lt(m),
      C = r && nn(r) ? Lt(r) : r;
    let M = E,
      Y = du(M);
    for (; Y && r && C !== M; ) {
      const V = Hl(Y),
        G = Y.getBoundingClientRect(),
        I = an(Y),
        J = G.left + (Y.clientLeft + parseFloat(I.paddingLeft)) * V.x,
        P = G.top + (Y.clientTop + parseFloat(I.paddingTop)) * V.y;
      ((v *= V.x),
        (h *= V.y),
        (j *= V.x),
        (p *= V.y),
        (v += J),
        (h += P),
        (M = Lt(Y)),
        (Y = du(M)));
    }
  }
  return No({ width: j, height: p, x: v, y: h });
}
function zo(s, c) {
  const u = Co(s).scrollLeft;
  return c ? c.left + u : Xa(vn(s)).left + u;
}
function kp(s, c) {
  const u = s.getBoundingClientRect(),
    r = u.left + c.scrollLeft - zo(s, u),
    f = u.top + c.scrollTop;
  return { x: r, y: f };
}
function h0(s) {
  let { elements: c, rect: u, offsetParent: r, strategy: f } = s;
  const m = f === "fixed",
    x = vn(r),
    y = c ? Oo(c.floating) : !1;
  if (r === x || (y && m)) return u;
  let v = { scrollLeft: 0, scrollTop: 0 },
    h = hn(1);
  const j = hn(0),
    p = xn(r);
  if (
    (p || (!p && !m)) &&
    ((Gl(r) !== "body" || Zs(x)) && (v = Co(r)), xn(r))
  ) {
    const C = Xa(r);
    ((h = Hl(r)), (j.x = C.x + r.clientLeft), (j.y = C.y + r.clientTop));
  }
  const E = x && !p && !m ? kp(x, v) : hn(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - v.scrollLeft * h.x + j.x + E.x,
    y: u.y * h.y - v.scrollTop * h.y + j.y + E.y,
  };
}
function x0(s) {
  return Array.from(s.getClientRects());
}
function v0(s) {
  const c = vn(s),
    u = Co(s),
    r = s.ownerDocument.body,
    f = Ut(c.scrollWidth, c.clientWidth, r.scrollWidth, r.clientWidth),
    m = Ut(c.scrollHeight, c.clientHeight, r.scrollHeight, r.clientHeight);
  let x = -u.scrollLeft + zo(s);
  const y = -u.scrollTop;
  return (
    an(r).direction === "rtl" && (x += Ut(c.clientWidth, r.clientWidth) - f),
    { width: f, height: m, x, y }
  );
}
const Vg = 25;
function y0(s, c) {
  const u = Lt(s),
    r = vn(s),
    f = u.visualViewport;
  let m = r.clientWidth,
    x = r.clientHeight,
    y = 0,
    v = 0;
  if (f) {
    ((m = f.width), (x = f.height));
    const j = wu();
    (!j || (j && c === "fixed")) && ((y = f.offsetLeft), (v = f.offsetTop));
  }
  const h = zo(r);
  if (h <= 0) {
    const j = r.ownerDocument,
      p = j.body,
      E = getComputedStyle(p),
      C =
        (j.compatMode === "CSS1Compat" &&
          parseFloat(E.marginLeft) + parseFloat(E.marginRight)) ||
        0,
      M = Math.abs(r.clientWidth - p.clientWidth - C);
    M <= Vg && (m -= M);
  } else h <= Vg && (m += h);
  return { width: m, height: x, x: y, y: v };
}
const b0 = new Set(["absolute", "fixed"]);
function j0(s, c) {
  const u = Xa(s, !0, c === "fixed"),
    r = u.top + s.clientTop,
    f = u.left + s.clientLeft,
    m = xn(s) ? Hl(s) : hn(1),
    x = s.clientWidth * m.x,
    y = s.clientHeight * m.y,
    v = f * m.x,
    h = r * m.y;
  return { width: x, height: y, x: v, y: h };
}
function Xg(s, c, u) {
  let r;
  if (c === "viewport") r = y0(s, u);
  else if (c === "document") r = v0(vn(s));
  else if (nn(c)) r = j0(c, u);
  else {
    const f = Ep(s);
    r = { x: c.x - f.x, y: c.y - f.y, width: c.width, height: c.height };
  }
  return No(r);
}
function Tp(s, c) {
  const u = va(s);
  return u === c || !nn(u) || Ll(u)
    ? !1
    : an(u).position === "fixed" || Tp(u, c);
}
function w0(s, c) {
  const u = c.get(s);
  if (u) return u;
  let r = Qs(s, [], !1).filter(y => nn(y) && Gl(y) !== "body"),
    f = null;
  const m = an(s).position === "fixed";
  let x = m ? va(s) : s;
  for (; nn(x) && !Ll(x); ) {
    const y = an(x),
      v = ju(x);
    (!v && y.position === "fixed" && (f = null),
      (
        m
          ? !v && !f
          : (!v && y.position === "static" && !!f && b0.has(f.position)) ||
            (Zs(x) && !v && Tp(s, x))
      )
        ? (r = r.filter(j => j !== x))
        : (f = y),
      (x = va(x)));
  }
  return (c.set(s, r), r);
}
function N0(s) {
  let { element: c, boundary: u, rootBoundary: r, strategy: f } = s;
  const x = [
      ...(u === "clippingAncestors"
        ? Oo(c)
          ? []
          : w0(c, this._c)
        : [].concat(u)),
      r,
    ],
    y = x[0],
    v = x.reduce(
      (h, j) => {
        const p = Xg(c, j, f);
        return (
          (h.top = Ut(p.top, h.top)),
          (h.right = xa(p.right, h.right)),
          (h.bottom = xa(p.bottom, h.bottom)),
          (h.left = Ut(p.left, h.left)),
          h
        );
      },
      Xg(c, y, f)
    );
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function S0(s) {
  const { width: c, height: u } = Ap(s);
  return { width: c, height: u };
}
function A0(s, c, u) {
  const r = xn(c),
    f = vn(c),
    m = u === "fixed",
    x = Xa(s, !0, m, c);
  let y = { scrollLeft: 0, scrollTop: 0 };
  const v = hn(0);
  function h() {
    v.x = zo(f);
  }
  if (r || (!r && !m))
    if (((Gl(c) !== "body" || Zs(f)) && (y = Co(c)), r)) {
      const C = Xa(c, !0, m, c);
      ((v.x = C.x + c.clientLeft), (v.y = C.y + c.clientTop));
    } else f && h();
  m && !r && f && h();
  const j = f && !r && !m ? kp(f, y) : hn(0),
    p = x.left + y.scrollLeft - v.x - j.x,
    E = x.top + y.scrollTop - v.y - j.y;
  return { x: p, y: E, width: x.width, height: x.height };
}
function eu(s) {
  return an(s).position === "static";
}
function Qg(s, c) {
  if (!xn(s) || an(s).position === "fixed") return null;
  if (c) return c(s);
  let u = s.offsetParent;
  return (vn(s) === u && (u = u.ownerDocument.body), u);
}
function Op(s, c) {
  const u = Lt(s);
  if (Oo(s)) return u;
  if (!xn(s)) {
    let f = va(s);
    for (; f && !Ll(f); ) {
      if (nn(f) && !eu(f)) return f;
      f = va(f);
    }
    return u;
  }
  let r = Qg(s, c);
  for (; r && o0(r) && eu(r); ) r = Qg(r, c);
  return r && Ll(r) && eu(r) && !ju(r) ? u : r || f0(s) || u;
}
const E0 = async function (s) {
  const c = this.getOffsetParent || Op,
    u = this.getDimensions,
    r = await u(s.floating);
  return {
    reference: A0(s.reference, await c(s.floating), s.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function k0(s) {
  return an(s).direction === "rtl";
}
const T0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: h0,
  getDocumentElement: vn,
  getClippingRect: N0,
  getOffsetParent: Op,
  getElementRects: E0,
  getClientRects: x0,
  getDimensions: S0,
  getScale: Hl,
  isElement: nn,
  isRTL: k0,
};
function Cp(s, c) {
  return (
    s.x === c.x && s.y === c.y && s.width === c.width && s.height === c.height
  );
}
function O0(s, c) {
  let u = null,
    r;
  const f = vn(s);
  function m() {
    var y;
    (clearTimeout(r), (y = u) == null || y.disconnect(), (u = null));
  }
  function x(y, v) {
    (y === void 0 && (y = !1), v === void 0 && (v = 1), m());
    const h = s.getBoundingClientRect(),
      { left: j, top: p, width: E, height: C } = h;
    if ((y || c(), !E || !C)) return;
    const M = ro(p),
      Y = ro(f.clientWidth - (j + E)),
      V = ro(f.clientHeight - (p + C)),
      G = ro(j),
      J = {
        rootMargin: -M + "px " + -Y + "px " + -V + "px " + -G + "px",
        threshold: Ut(0, xa(1, v)) || 1,
      };
    let P = !0;
    function ee(se) {
      const Q = se[0].intersectionRatio;
      if (Q !== v) {
        if (!P) return x();
        Q
          ? x(!1, Q)
          : (r = setTimeout(() => {
              x(!1, 1e-7);
            }, 1e3));
      }
      (Q === 1 && !Cp(h, s.getBoundingClientRect()) && x(), (P = !1));
    }
    try {
      u = new IntersectionObserver(ee, { ...J, root: f.ownerDocument });
    } catch {
      u = new IntersectionObserver(ee, J);
    }
    u.observe(s);
  }
  return (x(!0), m);
}
function C0(s, c, u, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: m = !0,
      elementResize: x = typeof ResizeObserver == "function",
      layoutShift: y = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = r,
    h = Nu(s),
    j = f || m ? [...(h ? Qs(h) : []), ...Qs(c)] : [];
  j.forEach(G => {
    (f && G.addEventListener("scroll", u, { passive: !0 }),
      m && G.addEventListener("resize", u));
  });
  const p = h && y ? O0(h, u) : null;
  let E = -1,
    C = null;
  x &&
    ((C = new ResizeObserver(G => {
      let [I] = G;
      (I &&
        I.target === h &&
        C &&
        (C.unobserve(c),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var J;
          (J = C) == null || J.observe(c);
        }))),
        u());
    })),
    h && !v && C.observe(h),
    C.observe(c));
  let M,
    Y = v ? Xa(s) : null;
  v && V();
  function V() {
    const G = Xa(s);
    (Y && !Cp(Y, G) && u(), (Y = G), (M = requestAnimationFrame(V)));
  }
  return (
    u(),
    () => {
      var G;
      (j.forEach(I => {
        (f && I.removeEventListener("scroll", u),
          m && I.removeEventListener("resize", u));
      }),
        p?.(),
        (G = C) == null || G.disconnect(),
        (C = null),
        v && cancelAnimationFrame(M));
    }
  );
}
const z0 = t0,
  M0 = n0,
  D0 = Fy,
  _0 = l0,
  B0 = Iy,
  Zg = Py,
  R0 = a0,
  H0 = (s, c, u) => {
    const r = new Map(),
      f = { platform: T0, ...u },
      m = { ...f.platform, _c: r };
    return $y(s, c, { ...f, platform: m });
  };
var U0 = typeof document < "u",
  L0 = function () {},
  bo = U0 ? z.useLayoutEffect : L0;
function So(s, c) {
  if (s === c) return !0;
  if (typeof s != typeof c) return !1;
  if (typeof s == "function" && s.toString() === c.toString()) return !0;
  let u, r, f;
  if (s && c && typeof s == "object") {
    if (Array.isArray(s)) {
      if (((u = s.length), u !== c.length)) return !1;
      for (r = u; r-- !== 0; ) if (!So(s[r], c[r])) return !1;
      return !0;
    }
    if (((f = Object.keys(s)), (u = f.length), u !== Object.keys(c).length))
      return !1;
    for (r = u; r-- !== 0; ) if (!{}.hasOwnProperty.call(c, f[r])) return !1;
    for (r = u; r-- !== 0; ) {
      const m = f[r];
      if (!(m === "_owner" && s.$$typeof) && !So(s[m], c[m])) return !1;
    }
    return !0;
  }
  return s !== s && c !== c;
}
function zp(s) {
  return typeof window > "u"
    ? 1
    : (s.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kg(s, c) {
  const u = zp(s);
  return Math.round(c * u) / u;
}
function tu(s) {
  const c = z.useRef(s);
  return (
    bo(() => {
      c.current = s;
    }),
    c
  );
}
function Y0(s) {
  s === void 0 && (s = {});
  const {
      placement: c = "bottom",
      strategy: u = "absolute",
      middleware: r = [],
      platform: f,
      elements: { reference: m, floating: x } = {},
      transform: y = !0,
      whileElementsMounted: v,
      open: h,
    } = s,
    [j, p] = z.useState({
      x: 0,
      y: 0,
      strategy: u,
      placement: c,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, C] = z.useState(r);
  So(E, r) || C(r);
  const [M, Y] = z.useState(null),
    [V, G] = z.useState(null),
    I = z.useCallback(D => {
      D !== se.current && ((se.current = D), Y(D));
    }, []),
    J = z.useCallback(D => {
      D !== Q.current && ((Q.current = D), G(D));
    }, []),
    P = m || M,
    ee = x || V,
    se = z.useRef(null),
    Q = z.useRef(null),
    Z = z.useRef(j),
    ge = v != null,
    we = tu(v),
    Oe = tu(f),
    he = tu(h),
    xe = z.useCallback(() => {
      if (!se.current || !Q.current) return;
      const D = { placement: c, strategy: u, middleware: E };
      (Oe.current && (D.platform = Oe.current),
        H0(se.current, Q.current, D).then(ie => {
          const re = { ...ie, isPositioned: he.current !== !1 };
          ye.current &&
            !So(Z.current, re) &&
            ((Z.current = re),
            xu.flushSync(() => {
              p(re);
            }));
        }));
    }, [E, c, u, Oe, he]);
  bo(() => {
    h === !1 &&
      Z.current.isPositioned &&
      ((Z.current.isPositioned = !1), p(D => ({ ...D, isPositioned: !1 })));
  }, [h]);
  const ye = z.useRef(!1);
  (bo(
    () => (
      (ye.current = !0),
      () => {
        ye.current = !1;
      }
    ),
    []
  ),
    bo(() => {
      if ((P && (se.current = P), ee && (Q.current = ee), P && ee)) {
        if (we.current) return we.current(P, ee, xe);
        xe();
      }
    }, [P, ee, xe, we, ge]));
  const je = z.useMemo(
      () => ({ reference: se, floating: Q, setReference: I, setFloating: J }),
      [I, J]
    ),
    S = z.useMemo(() => ({ reference: P, floating: ee }), [P, ee]),
    U = z.useMemo(() => {
      const D = { position: u, left: 0, top: 0 };
      if (!S.floating) return D;
      const ie = Kg(S.floating, j.x),
        re = Kg(S.floating, j.y);
      return y
        ? {
            ...D,
            transform: "translate(" + ie + "px, " + re + "px)",
            ...(zp(S.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: u, left: ie, top: re };
    }, [u, y, S.floating, j.x, j.y]);
  return z.useMemo(
    () => ({ ...j, update: xe, refs: je, elements: S, floatingStyles: U }),
    [j, xe, je, S, U]
  );
}
const q0 = s => {
    function c(u) {
      return {}.hasOwnProperty.call(u, "current");
    }
    return {
      name: "arrow",
      options: s,
      fn(u) {
        const { element: r, padding: f } = typeof s == "function" ? s(u) : s;
        return r && c(r)
          ? r.current != null
            ? Zg({ element: r.current, padding: f }).fn(u)
            : {}
          : r
            ? Zg({ element: r, padding: f }).fn(u)
            : {};
      },
    };
  },
  G0 = (s, c) => ({ ...z0(s), options: [s, c] }),
  V0 = (s, c) => ({ ...M0(s), options: [s, c] }),
  X0 = (s, c) => ({ ...R0(s), options: [s, c] }),
  Q0 = (s, c) => ({ ...D0(s), options: [s, c] }),
  Z0 = (s, c) => ({ ..._0(s), options: [s, c] }),
  K0 = (s, c) => ({ ...B0(s), options: [s, c] }),
  J0 = (s, c) => ({ ...q0(s), options: [s, c] });
var W0 = "Arrow",
  Mp = z.forwardRef((s, c) => {
    const { children: u, width: r = 10, height: f = 5, ...m } = s;
    return o.jsx(Za.svg, {
      ...m,
      ref: c,
      width: r,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: s.asChild ? u : o.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Mp.displayName = W0;
var $0 = Mp;
function P0(s) {
  const [c, u] = z.useState(void 0);
  return (
    Vs(() => {
      if (s) {
        u({ width: s.offsetWidth, height: s.offsetHeight });
        const r = new ResizeObserver(f => {
          if (!Array.isArray(f) || !f.length) return;
          const m = f[0];
          let x, y;
          if ("borderBoxSize" in m) {
            const v = m.borderBoxSize,
              h = Array.isArray(v) ? v[0] : v;
            ((x = h.inlineSize), (y = h.blockSize));
          } else ((x = s.offsetWidth), (y = s.offsetHeight));
          u({ width: x, height: y });
        });
        return (r.observe(s, { box: "border-box" }), () => r.unobserve(s));
      } else u(void 0);
    }, [s]),
    c
  );
}
var Dp = "Popper",
  [_p, Bp] = pp(Dp),
  [V2, Rp] = _p(Dp),
  Hp = "PopperAnchor",
  Up = z.forwardRef((s, c) => {
    const { __scopePopper: u, virtualRef: r, ...f } = s,
      m = Rp(Hp, u),
      x = z.useRef(null),
      y = Qa(c, x),
      v = z.useRef(null);
    return (
      z.useEffect(() => {
        const h = v.current;
        ((v.current = r?.current || x.current),
          h !== v.current && m.onAnchorChange(v.current));
      }),
      r ? null : o.jsx(Za.div, { ...f, ref: y })
    );
  });
Up.displayName = Hp;
var Su = "PopperContent",
  [F0, I0] = _p(Su),
  Lp = z.forwardRef((s, c) => {
    const {
        __scopePopper: u,
        side: r = "bottom",
        sideOffset: f = 0,
        align: m = "center",
        alignOffset: x = 0,
        arrowPadding: y = 0,
        avoidCollisions: v = !0,
        collisionBoundary: h = [],
        collisionPadding: j = 0,
        sticky: p = "partial",
        hideWhenDetached: E = !1,
        updatePositionStrategy: C = "optimized",
        onPlaced: M,
        ...Y
      } = s,
      V = Rp(Su, u),
      [G, I] = z.useState(null),
      J = Qa(c, ae => I(ae)),
      [P, ee] = z.useState(null),
      se = P0(P),
      Q = se?.width ?? 0,
      Z = se?.height ?? 0,
      ge = r + (m !== "center" ? "-" + m : ""),
      we =
        typeof j == "number"
          ? j
          : { top: 0, right: 0, bottom: 0, left: 0, ...j },
      Oe = Array.isArray(h) ? h : [h],
      he = Oe.length > 0,
      xe = { padding: we, boundary: Oe.filter(tb), altBoundary: he },
      {
        refs: ye,
        floatingStyles: je,
        placement: S,
        isPositioned: U,
        middlewareData: D,
      } = Y0({
        strategy: "fixed",
        placement: ge,
        whileElementsMounted: (...ae) =>
          C0(...ae, { animationFrame: C === "always" }),
        elements: { reference: V.anchor },
        middleware: [
          G0({ mainAxis: f + Z, alignmentAxis: x }),
          v &&
            V0({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? X0() : void 0,
              ...xe,
            }),
          v && Q0({ ...xe }),
          Z0({
            ...xe,
            apply: ({
              elements: ae,
              rects: de,
              availableWidth: ke,
              availableHeight: at,
            }) => {
              const { width: gt, height: lt } = de.reference,
                yn = ae.floating.style;
              (yn.setProperty("--radix-popper-available-width", `${ke}px`),
                yn.setProperty("--radix-popper-available-height", `${at}px`),
                yn.setProperty("--radix-popper-anchor-width", `${gt}px`),
                yn.setProperty("--radix-popper-anchor-height", `${lt}px`));
            },
          }),
          P && J0({ element: P, padding: y }),
          nb({ arrowWidth: Q, arrowHeight: Z }),
          E && K0({ strategy: "referenceHidden", ...xe }),
        ],
      }),
      [ie, re] = Gp(S),
      w = ko(M);
    Vs(() => {
      U && w?.();
    }, [U, w]);
    const H = D.arrow?.x,
      R = D.arrow?.y,
      X = D.arrow?.centerOffset !== 0,
      [W, oe] = z.useState();
    return (
      Vs(() => {
        G && oe(window.getComputedStyle(G).zIndex);
      }, [G]),
      o.jsx("div", {
        ref: ye.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...je,
          transform: U ? je.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: W,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y,
          ].join(" "),
          ...(D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: s.dir,
        children: o.jsx(F0, {
          scope: u,
          placedSide: ie,
          onArrowChange: ee,
          arrowX: H,
          arrowY: R,
          shouldHideArrow: X,
          children: o.jsx(Za.div, {
            "data-side": ie,
            "data-align": re,
            ...Y,
            ref: J,
            style: { ...Y.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Lp.displayName = Su;
var Yp = "PopperArrow",
  eb = { top: "bottom", right: "left", bottom: "top", left: "right" },
  qp = z.forwardRef(function (c, u) {
    const { __scopePopper: r, ...f } = c,
      m = I0(Yp, r),
      x = eb[m.placedSide];
    return o.jsx("span", {
      ref: m.onArrowChange,
      style: {
        position: "absolute",
        left: m.arrowX,
        top: m.arrowY,
        [x]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[m.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[m.placedSide],
        visibility: m.shouldHideArrow ? "hidden" : void 0,
      },
      children: o.jsx($0, {
        ...f,
        ref: u,
        style: { ...f.style, display: "block" },
      }),
    });
  });
qp.displayName = Yp;
function tb(s) {
  return s !== null;
}
var nb = s => ({
  name: "transformOrigin",
  options: s,
  fn(c) {
    const { placement: u, rects: r, middlewareData: f } = c,
      x = f.arrow?.centerOffset !== 0,
      y = x ? 0 : s.arrowWidth,
      v = x ? 0 : s.arrowHeight,
      [h, j] = Gp(u),
      p = { start: "0%", center: "50%", end: "100%" }[j],
      E = (f.arrow?.x ?? 0) + y / 2,
      C = (f.arrow?.y ?? 0) + v / 2;
    let M = "",
      Y = "";
    return (
      h === "bottom"
        ? ((M = x ? p : `${E}px`), (Y = `${-v}px`))
        : h === "top"
          ? ((M = x ? p : `${E}px`), (Y = `${r.floating.height + v}px`))
          : h === "right"
            ? ((M = `${-v}px`), (Y = x ? p : `${C}px`))
            : h === "left" &&
              ((M = `${r.floating.width + v}px`), (Y = x ? p : `${C}px`)),
      { data: { x: M, y: Y } }
    );
  },
});
function Gp(s) {
  const [c, u = "center"] = s.split("-");
  return [c, u];
}
var ab = Up,
  lb = Lp,
  sb = qp;
function ib(s, c) {
  return z.useReducer((u, r) => c[u][r] ?? u, s);
}
var Vp = s => {
  const { present: c, children: u } = s,
    r = ob(c),
    f =
      typeof u == "function" ? u({ present: r.isPresent }) : z.Children.only(u),
    m = Qa(r.ref, cb(f));
  return typeof u == "function" || r.isPresent
    ? z.cloneElement(f, { ref: m })
    : null;
};
Vp.displayName = "Presence";
function ob(s) {
  const [c, u] = z.useState(),
    r = z.useRef(null),
    f = z.useRef(s),
    m = z.useRef("none"),
    x = s ? "mounted" : "unmounted",
    [y, v] = ib(x, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    z.useEffect(() => {
      const h = uo(r.current);
      m.current = y === "mounted" ? h : "none";
    }, [y]),
    Vs(() => {
      const h = r.current,
        j = f.current;
      if (j !== s) {
        const E = m.current,
          C = uo(h);
        (s
          ? v("MOUNT")
          : C === "none" || h?.display === "none"
            ? v("UNMOUNT")
            : v(j && E !== C ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = s));
      }
    }, [s, v]),
    Vs(() => {
      if (c) {
        let h;
        const j = c.ownerDocument.defaultView ?? window,
          p = C => {
            const Y = uo(r.current).includes(CSS.escape(C.animationName));
            if (C.target === c && Y && (v("ANIMATION_END"), !f.current)) {
              const V = c.style.animationFillMode;
              ((c.style.animationFillMode = "forwards"),
                (h = j.setTimeout(() => {
                  c.style.animationFillMode === "forwards" &&
                    (c.style.animationFillMode = V);
                })));
            }
          },
          E = C => {
            C.target === c && (m.current = uo(r.current));
          };
        return (
          c.addEventListener("animationstart", E),
          c.addEventListener("animationcancel", p),
          c.addEventListener("animationend", p),
          () => {
            (j.clearTimeout(h),
              c.removeEventListener("animationstart", E),
              c.removeEventListener("animationcancel", p),
              c.removeEventListener("animationend", p));
          }
        );
      } else v("ANIMATION_END");
    }, [c, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(y),
      ref: z.useCallback(h => {
        ((r.current = h ? getComputedStyle(h) : null), u(h));
      }, []),
    }
  );
}
function uo(s) {
  return s?.animationName || "none";
}
function cb(s) {
  let c = Object.getOwnPropertyDescriptor(s.props, "ref")?.get,
    u = c && "isReactWarning" in c && c.isReactWarning;
  return u
    ? s.ref
    : ((c = Object.getOwnPropertyDescriptor(s, "ref")?.get),
      (u = c && "isReactWarning" in c && c.isReactWarning),
      u ? s.props.ref : s.props.ref || s.ref);
}
var rb = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  ub = "VisuallyHidden",
  Xp = z.forwardRef((s, c) =>
    o.jsx(Za.span, { ...s, ref: c, style: { ...rb, ...s.style } })
  );
Xp.displayName = ub;
var db = Xp,
  [Mo] = pp("Tooltip", [Bp]),
  Au = Bp(),
  Qp = "TooltipProvider",
  fb = 700,
  Jg = "tooltip.open",
  [mb, Zp] = Mo(Qp),
  Kp = s => {
    const {
        __scopeTooltip: c,
        delayDuration: u = fb,
        skipDelayDuration: r = 300,
        disableHoverableContent: f = !1,
        children: m,
      } = s,
      x = z.useRef(!0),
      y = z.useRef(!1),
      v = z.useRef(0);
    return (
      z.useEffect(() => {
        const h = v.current;
        return () => window.clearTimeout(h);
      }, []),
      o.jsx(mb, {
        scope: c,
        isOpenDelayedRef: x,
        delayDuration: u,
        onOpen: z.useCallback(() => {
          (window.clearTimeout(v.current), (x.current = !1));
        }, []),
        onClose: z.useCallback(() => {
          (window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => (x.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: y,
        onPointerInTransitChange: z.useCallback(h => {
          y.current = h;
        }, []),
        disableHoverableContent: f,
        children: m,
      })
    );
  };
Kp.displayName = Qp;
var Jp = "Tooltip",
  [X2, Do] = Mo(Jp),
  fu = "TooltipTrigger",
  gb = z.forwardRef((s, c) => {
    const { __scopeTooltip: u, ...r } = s,
      f = Do(fu, u),
      m = Zp(fu, u),
      x = Au(u),
      y = z.useRef(null),
      v = Qa(c, y, f.onTriggerChange),
      h = z.useRef(!1),
      j = z.useRef(!1),
      p = z.useCallback(() => (h.current = !1), []);
    return (
      z.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      o.jsx(ab, {
        asChild: !0,
        ...x,
        children: o.jsx(Za.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...r,
          ref: v,
          onPointerMove: Yn(s.onPointerMove, E => {
            E.pointerType !== "touch" &&
              !j.current &&
              !m.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (j.current = !0));
          }),
          onPointerLeave: Yn(s.onPointerLeave, () => {
            (f.onTriggerLeave(), (j.current = !1));
          }),
          onPointerDown: Yn(s.onPointerDown, () => {
            (f.open && f.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", p, { once: !0 }));
          }),
          onFocus: Yn(s.onFocus, () => {
            h.current || f.onOpen();
          }),
          onBlur: Yn(s.onBlur, f.onClose),
          onClick: Yn(s.onClick, f.onClose),
        }),
      })
    );
  });
gb.displayName = fu;
var pb = "TooltipPortal",
  [Q2, hb] = Mo(pb, { forceMount: void 0 }),
  Yl = "TooltipContent",
  xb = z.forwardRef((s, c) => {
    const u = hb(Yl, s.__scopeTooltip),
      { forceMount: r = u.forceMount, side: f = "top", ...m } = s,
      x = Do(Yl, s.__scopeTooltip);
    return o.jsx(Vp, {
      present: r || x.open,
      children: x.disableHoverableContent
        ? o.jsx(Wp, { side: f, ...m, ref: c })
        : o.jsx(vb, { side: f, ...m, ref: c }),
    });
  }),
  vb = z.forwardRef((s, c) => {
    const u = Do(Yl, s.__scopeTooltip),
      r = Zp(Yl, s.__scopeTooltip),
      f = z.useRef(null),
      m = Qa(c, f),
      [x, y] = z.useState(null),
      { trigger: v, onClose: h } = u,
      j = f.current,
      { onPointerInTransitChange: p } = r,
      E = z.useCallback(() => {
        (y(null), p(!1));
      }, [p]),
      C = z.useCallback(
        (M, Y) => {
          const V = M.currentTarget,
            G = { x: M.clientX, y: M.clientY },
            I = Nb(G, V.getBoundingClientRect()),
            J = Sb(G, I),
            P = Ab(Y.getBoundingClientRect()),
            ee = kb([...J, ...P]);
          (y(ee), p(!0));
        },
        [p]
      );
    return (
      z.useEffect(() => () => E(), [E]),
      z.useEffect(() => {
        if (v && j) {
          const M = V => C(V, j),
            Y = V => C(V, v);
          return (
            v.addEventListener("pointerleave", M),
            j.addEventListener("pointerleave", Y),
            () => {
              (v.removeEventListener("pointerleave", M),
                j.removeEventListener("pointerleave", Y));
            }
          );
        }
      }, [v, j, C, E]),
      z.useEffect(() => {
        if (x) {
          const M = Y => {
            const V = Y.target,
              G = { x: Y.clientX, y: Y.clientY },
              I = v?.contains(V) || j?.contains(V),
              J = !Eb(G, x);
            I ? E() : J && (E(), h());
          };
          return (
            document.addEventListener("pointermove", M),
            () => document.removeEventListener("pointermove", M)
          );
        }
      }, [v, j, x, h, E]),
      o.jsx(Wp, { ...s, ref: m })
    );
  }),
  [yb, bb] = Mo(Jp, { isInside: !1 }),
  jb = Ay("TooltipContent"),
  Wp = z.forwardRef((s, c) => {
    const {
        __scopeTooltip: u,
        children: r,
        "aria-label": f,
        onEscapeKeyDown: m,
        onPointerDownOutside: x,
        ...y
      } = s,
      v = Do(Yl, u),
      h = Au(u),
      { onClose: j } = v;
    return (
      z.useEffect(
        () => (
          document.addEventListener(Jg, j),
          () => document.removeEventListener(Jg, j)
        ),
        [j]
      ),
      z.useEffect(() => {
        if (v.trigger) {
          const p = E => {
            E.target?.contains(v.trigger) && j();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [v.trigger, j]),
      o.jsx(yp, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: m,
        onPointerDownOutside: x,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: j,
        children: o.jsxs(lb, {
          "data-state": v.stateAttribute,
          ...h,
          ...y,
          ref: c,
          style: {
            ...y.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            o.jsx(jb, { children: r }),
            o.jsx(yb, {
              scope: u,
              isInside: !0,
              children: o.jsx(db, {
                id: v.contentId,
                role: "tooltip",
                children: f || r,
              }),
            }),
          ],
        }),
      })
    );
  });
xb.displayName = Yl;
var $p = "TooltipArrow",
  wb = z.forwardRef((s, c) => {
    const { __scopeTooltip: u, ...r } = s,
      f = Au(u);
    return bb($p, u).isInside ? null : o.jsx(sb, { ...f, ...r, ref: c });
  });
wb.displayName = $p;
function Nb(s, c) {
  const u = Math.abs(c.top - s.y),
    r = Math.abs(c.bottom - s.y),
    f = Math.abs(c.right - s.x),
    m = Math.abs(c.left - s.x);
  switch (Math.min(u, r, f, m)) {
    case m:
      return "left";
    case f:
      return "right";
    case u:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Sb(s, c, u = 5) {
  const r = [];
  switch (c) {
    case "top":
      r.push({ x: s.x - u, y: s.y + u }, { x: s.x + u, y: s.y + u });
      break;
    case "bottom":
      r.push({ x: s.x - u, y: s.y - u }, { x: s.x + u, y: s.y - u });
      break;
    case "left":
      r.push({ x: s.x + u, y: s.y - u }, { x: s.x + u, y: s.y + u });
      break;
    case "right":
      r.push({ x: s.x - u, y: s.y - u }, { x: s.x - u, y: s.y + u });
      break;
  }
  return r;
}
function Ab(s) {
  const { top: c, right: u, bottom: r, left: f } = s;
  return [
    { x: f, y: c },
    { x: u, y: c },
    { x: u, y: r },
    { x: f, y: r },
  ];
}
function Eb(s, c) {
  const { x: u, y: r } = s;
  let f = !1;
  for (let m = 0, x = c.length - 1; m < c.length; x = m++) {
    const y = c[m],
      v = c[x],
      h = y.x,
      j = y.y,
      p = v.x,
      E = v.y;
    j > r != E > r && u < ((p - h) * (r - j)) / (E - j) + h && (f = !f);
  }
  return f;
}
function kb(s) {
  const c = s.slice();
  return (
    c.sort((u, r) =>
      u.x < r.x ? -1 : u.x > r.x ? 1 : u.y < r.y ? -1 : u.y > r.y ? 1 : 0
    ),
    Tb(c)
  );
}
function Tb(s) {
  if (s.length <= 1) return s.slice();
  const c = [];
  for (let r = 0; r < s.length; r++) {
    const f = s[r];
    for (; c.length >= 2; ) {
      const m = c[c.length - 1],
        x = c[c.length - 2];
      if ((m.x - x.x) * (f.y - x.y) >= (m.y - x.y) * (f.x - x.x)) c.pop();
      else break;
    }
    c.push(f);
  }
  c.pop();
  const u = [];
  for (let r = s.length - 1; r >= 0; r--) {
    const f = s[r];
    for (; u.length >= 2; ) {
      const m = u[u.length - 1],
        x = u[u.length - 2];
      if ((m.x - x.x) * (f.y - x.y) >= (m.y - x.y) * (f.x - x.x)) u.pop();
      else break;
    }
    u.push(f);
  }
  return (
    u.pop(),
    c.length === 1 && u.length === 1 && c[0].x === u[0].x && c[0].y === u[0].y
      ? c
      : c.concat(u)
  );
}
var Ob = Kp;
function Pp(s) {
  var c,
    u,
    r = "";
  if (typeof s == "string" || typeof s == "number") r += s;
  else if (typeof s == "object")
    if (Array.isArray(s)) {
      var f = s.length;
      for (c = 0; c < f; c++)
        s[c] && (u = Pp(s[c])) && (r && (r += " "), (r += u));
    } else for (u in s) s[u] && (r && (r += " "), (r += u));
  return r;
}
function Fp() {
  for (var s, c, u = 0, r = "", f = arguments.length; u < f; u++)
    (s = arguments[u]) && (c = Pp(s)) && (r && (r += " "), (r += c));
  return r;
}
const Eu = "-",
  Cb = s => {
    const c = Mb(s),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: r } = s;
    return {
      getClassGroupId: x => {
        const y = x.split(Eu);
        return (y[0] === "" && y.length !== 1 && y.shift(), Ip(y, c) || zb(x));
      },
      getConflictingClassGroupIds: (x, y) => {
        const v = u[x] || [];
        return y && r[x] ? [...v, ...r[x]] : v;
      },
    };
  },
  Ip = (s, c) => {
    if (s.length === 0) return c.classGroupId;
    const u = s[0],
      r = c.nextPart.get(u),
      f = r ? Ip(s.slice(1), r) : void 0;
    if (f) return f;
    if (c.validators.length === 0) return;
    const m = s.join(Eu);
    return c.validators.find(({ validator: x }) => x(m))?.classGroupId;
  },
  Wg = /^\[(.+)\]$/,
  zb = s => {
    if (Wg.test(s)) {
      const c = Wg.exec(s)[1],
        u = c?.substring(0, c.indexOf(":"));
      if (u) return "arbitrary.." + u;
    }
  },
  Mb = s => {
    const { theme: c, classGroups: u } = s,
      r = { nextPart: new Map(), validators: [] };
    for (const f in u) mu(u[f], r, f, c);
    return r;
  },
  mu = (s, c, u, r) => {
    s.forEach(f => {
      if (typeof f == "string") {
        const m = f === "" ? c : $g(c, f);
        m.classGroupId = u;
        return;
      }
      if (typeof f == "function") {
        if (Db(f)) {
          mu(f(r), c, u, r);
          return;
        }
        c.validators.push({ validator: f, classGroupId: u });
        return;
      }
      Object.entries(f).forEach(([m, x]) => {
        mu(x, $g(c, m), u, r);
      });
    });
  },
  $g = (s, c) => {
    let u = s;
    return (
      c.split(Eu).forEach(r => {
        (u.nextPart.has(r) ||
          u.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(r)));
      }),
      u
    );
  },
  Db = s => s.isThemeGetter,
  _b = s => {
    if (s < 1) return { get: () => {}, set: () => {} };
    let c = 0,
      u = new Map(),
      r = new Map();
    const f = (m, x) => {
      (u.set(m, x), c++, c > s && ((c = 0), (r = u), (u = new Map())));
    };
    return {
      get(m) {
        let x = u.get(m);
        if (x !== void 0) return x;
        if ((x = r.get(m)) !== void 0) return (f(m, x), x);
      },
      set(m, x) {
        u.has(m) ? u.set(m, x) : f(m, x);
      },
    };
  },
  gu = "!",
  pu = ":",
  Bb = pu.length,
  Rb = s => {
    const { prefix: c, experimentalParseClassName: u } = s;
    let r = f => {
      const m = [];
      let x = 0,
        y = 0,
        v = 0,
        h;
      for (let M = 0; M < f.length; M++) {
        let Y = f[M];
        if (x === 0 && y === 0) {
          if (Y === pu) {
            (m.push(f.slice(v, M)), (v = M + Bb));
            continue;
          }
          if (Y === "/") {
            h = M;
            continue;
          }
        }
        Y === "[" ? x++ : Y === "]" ? x-- : Y === "(" ? y++ : Y === ")" && y--;
      }
      const j = m.length === 0 ? f : f.substring(v),
        p = Hb(j),
        E = p !== j,
        C = h && h > v ? h - v : void 0;
      return {
        modifiers: m,
        hasImportantModifier: E,
        baseClassName: p,
        maybePostfixModifierPosition: C,
      };
    };
    if (c) {
      const f = c + pu,
        m = r;
      r = x =>
        x.startsWith(f)
          ? m(x.substring(f.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: x,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (u) {
      const f = r;
      r = m => u({ className: m, parseClassName: f });
    }
    return r;
  },
  Hb = s =>
    s.endsWith(gu)
      ? s.substring(0, s.length - 1)
      : s.startsWith(gu)
        ? s.substring(1)
        : s,
  Ub = s => {
    const c = Object.fromEntries(s.orderSensitiveModifiers.map(r => [r, !0]));
    return r => {
      if (r.length <= 1) return r;
      const f = [];
      let m = [];
      return (
        r.forEach(x => {
          x[0] === "[" || c[x] ? (f.push(...m.sort(), x), (m = [])) : m.push(x);
        }),
        f.push(...m.sort()),
        f
      );
    };
  },
  Lb = s => ({
    cache: _b(s.cacheSize),
    parseClassName: Rb(s),
    sortModifiers: Ub(s),
    ...Cb(s),
  }),
  Yb = /\s+/,
  qb = (s, c) => {
    const {
        parseClassName: u,
        getClassGroupId: r,
        getConflictingClassGroupIds: f,
        sortModifiers: m,
      } = c,
      x = [],
      y = s.trim().split(Yb);
    let v = "";
    for (let h = y.length - 1; h >= 0; h -= 1) {
      const j = y[h],
        {
          isExternal: p,
          modifiers: E,
          hasImportantModifier: C,
          baseClassName: M,
          maybePostfixModifierPosition: Y,
        } = u(j);
      if (p) {
        v = j + (v.length > 0 ? " " + v : v);
        continue;
      }
      let V = !!Y,
        G = r(V ? M.substring(0, Y) : M);
      if (!G) {
        if (!V) {
          v = j + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((G = r(M)), !G)) {
          v = j + (v.length > 0 ? " " + v : v);
          continue;
        }
        V = !1;
      }
      const I = m(E).join(":"),
        J = C ? I + gu : I,
        P = J + G;
      if (x.includes(P)) continue;
      x.push(P);
      const ee = f(G, V);
      for (let se = 0; se < ee.length; ++se) {
        const Q = ee[se];
        x.push(J + Q);
      }
      v = j + (v.length > 0 ? " " + v : v);
    }
    return v;
  };
function Gb() {
  let s = 0,
    c,
    u,
    r = "";
  for (; s < arguments.length; )
    (c = arguments[s++]) && (u = eh(c)) && (r && (r += " "), (r += u));
  return r;
}
const eh = s => {
  if (typeof s == "string") return s;
  let c,
    u = "";
  for (let r = 0; r < s.length; r++)
    s[r] && (c = eh(s[r])) && (u && (u += " "), (u += c));
  return u;
};
function Vb(s, ...c) {
  let u,
    r,
    f,
    m = x;
  function x(v) {
    const h = c.reduce((j, p) => p(j), s());
    return ((u = Lb(h)), (r = u.cache.get), (f = u.cache.set), (m = y), y(v));
  }
  function y(v) {
    const h = r(v);
    if (h) return h;
    const j = qb(v, u);
    return (f(v, j), j);
  }
  return function () {
    return m(Gb.apply(null, arguments));
  };
}
const Ie = s => {
    const c = u => u[s] || [];
    return ((c.isThemeGetter = !0), c);
  },
  th = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  nh = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Xb = /^\d+\/\d+$/,
  Qb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Zb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Kb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Jb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Wb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Bl = s => Xb.test(s),
  be = s => !!s && !Number.isNaN(Number(s)),
  ha = s => !!s && Number.isInteger(Number(s)),
  nu = s => s.endsWith("%") && be(s.slice(0, -1)),
  Ln = s => Qb.test(s),
  $b = () => !0,
  Pb = s => Zb.test(s) && !Kb.test(s),
  ah = () => !1,
  Fb = s => Jb.test(s),
  Ib = s => Wb.test(s),
  e1 = s => !te(s) && !ne(s),
  t1 = s => Vl(s, ih, ah),
  te = s => th.test(s),
  Va = s => Vl(s, oh, Pb),
  au = s => Vl(s, i1, be),
  Pg = s => Vl(s, lh, ah),
  n1 = s => Vl(s, sh, Ib),
  fo = s => Vl(s, ch, Fb),
  ne = s => nh.test(s),
  Gs = s => Xl(s, oh),
  a1 = s => Xl(s, o1),
  Fg = s => Xl(s, lh),
  l1 = s => Xl(s, ih),
  s1 = s => Xl(s, sh),
  mo = s => Xl(s, ch, !0),
  Vl = (s, c, u) => {
    const r = th.exec(s);
    return r ? (r[1] ? c(r[1]) : u(r[2])) : !1;
  },
  Xl = (s, c, u = !1) => {
    const r = nh.exec(s);
    return r ? (r[1] ? c(r[1]) : u) : !1;
  },
  lh = s => s === "position" || s === "percentage",
  sh = s => s === "image" || s === "url",
  ih = s => s === "length" || s === "size" || s === "bg-size",
  oh = s => s === "length",
  i1 = s => s === "number",
  o1 = s => s === "family-name",
  ch = s => s === "shadow",
  c1 = () => {
    const s = Ie("color"),
      c = Ie("font"),
      u = Ie("text"),
      r = Ie("font-weight"),
      f = Ie("tracking"),
      m = Ie("leading"),
      x = Ie("breakpoint"),
      y = Ie("container"),
      v = Ie("spacing"),
      h = Ie("radius"),
      j = Ie("shadow"),
      p = Ie("inset-shadow"),
      E = Ie("text-shadow"),
      C = Ie("drop-shadow"),
      M = Ie("blur"),
      Y = Ie("perspective"),
      V = Ie("aspect"),
      G = Ie("ease"),
      I = Ie("animate"),
      J = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      P = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      ee = () => [...P(), ne, te],
      se = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      Z = () => [ne, te, v],
      ge = () => [Bl, "full", "auto", ...Z()],
      we = () => [ha, "none", "subgrid", ne, te],
      Oe = () => ["auto", { span: ["full", ha, ne, te] }, ha, ne, te],
      he = () => [ha, "auto", ne, te],
      xe = () => ["auto", "min", "max", "fr", ne, te],
      ye = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      je = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      S = () => ["auto", ...Z()],
      U = () => [
        Bl,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...Z(),
      ],
      D = () => [s, ne, te],
      ie = () => [...P(), Fg, Pg, { position: [ne, te] }],
      re = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      w = () => ["auto", "cover", "contain", l1, t1, { size: [ne, te] }],
      H = () => [nu, Gs, Va],
      R = () => ["", "none", "full", h, ne, te],
      X = () => ["", be, Gs, Va],
      W = () => ["solid", "dashed", "dotted", "double"],
      oe = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      ae = () => [be, nu, Fg, Pg],
      de = () => ["", "none", M, ne, te],
      ke = () => ["none", be, ne, te],
      at = () => ["none", be, ne, te],
      gt = () => [be, ne, te],
      lt = () => [Bl, "full", ...Z()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ln],
        breakpoint: [Ln],
        color: [$b],
        container: [Ln],
        "drop-shadow": [Ln],
        ease: ["in", "out", "in-out"],
        font: [e1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ln],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ln],
        shadow: [Ln],
        spacing: ["px", be],
        text: [Ln],
        "text-shadow": [Ln],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Bl, te, ne, V] }],
        container: ["container"],
        columns: [{ columns: [be, te, ne, y] }],
        "break-after": [{ "break-after": J() }],
        "break-before": [{ "break-before": J() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: ee() }],
        overflow: [{ overflow: se() }],
        "overflow-x": [{ "overflow-x": se() }],
        "overflow-y": [{ "overflow-y": se() }],
        overscroll: [{ overscroll: Q() }],
        "overscroll-x": [{ "overscroll-x": Q() }],
        "overscroll-y": [{ "overscroll-y": Q() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: ge() }],
        "inset-x": [{ "inset-x": ge() }],
        "inset-y": [{ "inset-y": ge() }],
        start: [{ start: ge() }],
        end: [{ end: ge() }],
        top: [{ top: ge() }],
        right: [{ right: ge() }],
        bottom: [{ bottom: ge() }],
        left: [{ left: ge() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [ha, "auto", ne, te] }],
        basis: [{ basis: [Bl, "full", "auto", y, ...Z()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [be, Bl, "auto", "initial", "none", te] }],
        grow: [{ grow: ["", be, ne, te] }],
        shrink: [{ shrink: ["", be, ne, te] }],
        order: [{ order: [ha, "first", "last", "none", ne, te] }],
        "grid-cols": [{ "grid-cols": we() }],
        "col-start-end": [{ col: Oe() }],
        "col-start": [{ "col-start": he() }],
        "col-end": [{ "col-end": he() }],
        "grid-rows": [{ "grid-rows": we() }],
        "row-start-end": [{ row: Oe() }],
        "row-start": [{ "row-start": he() }],
        "row-end": [{ "row-end": he() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": xe() }],
        "auto-rows": [{ "auto-rows": xe() }],
        gap: [{ gap: Z() }],
        "gap-x": [{ "gap-x": Z() }],
        "gap-y": [{ "gap-y": Z() }],
        "justify-content": [{ justify: [...ye(), "normal"] }],
        "justify-items": [{ "justify-items": [...je(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...je()] }],
        "align-content": [{ content: ["normal", ...ye()] }],
        "align-items": [{ items: [...je(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...je(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ye() }],
        "place-items": [{ "place-items": [...je(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...je()] }],
        p: [{ p: Z() }],
        px: [{ px: Z() }],
        py: [{ py: Z() }],
        ps: [{ ps: Z() }],
        pe: [{ pe: Z() }],
        pt: [{ pt: Z() }],
        pr: [{ pr: Z() }],
        pb: [{ pb: Z() }],
        pl: [{ pl: Z() }],
        m: [{ m: S() }],
        mx: [{ mx: S() }],
        my: [{ my: S() }],
        ms: [{ ms: S() }],
        me: [{ me: S() }],
        mt: [{ mt: S() }],
        mr: [{ mr: S() }],
        mb: [{ mb: S() }],
        ml: [{ ml: S() }],
        "space-x": [{ "space-x": Z() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": Z() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: U() }],
        w: [{ w: [y, "screen", ...U()] }],
        "min-w": [{ "min-w": [y, "screen", "none", ...U()] }],
        "max-w": [
          { "max-w": [y, "screen", "none", "prose", { screen: [x] }, ...U()] },
        ],
        h: [{ h: ["screen", "lh", ...U()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...U()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...U()] }],
        "font-size": [{ text: ["base", u, Gs, Va] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, ne, au] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              nu,
              te,
            ],
          },
        ],
        "font-family": [{ font: [a1, te, c] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, ne, te] }],
        "line-clamp": [{ "line-clamp": [be, "none", ne, au] }],
        leading: [{ leading: [m, ...Z()] }],
        "list-image": [{ "list-image": ["none", ne, te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ne, te] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: D() }],
        "text-color": [{ text: D() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [be, "from-font", "auto", ne, Va] },
        ],
        "text-decoration-color": [{ decoration: D() }],
        "underline-offset": [{ "underline-offset": [be, "auto", ne, te] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: Z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              ne,
              te,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", ne, te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ie() }],
        "bg-repeat": [{ bg: re() }],
        "bg-size": [{ bg: w() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  ha,
                  ne,
                  te,
                ],
                radial: ["", ne, te],
                conic: [ha, ne, te],
              },
              s1,
              n1,
            ],
          },
        ],
        "bg-color": [{ bg: D() }],
        "gradient-from-pos": [{ from: H() }],
        "gradient-via-pos": [{ via: H() }],
        "gradient-to-pos": [{ to: H() }],
        "gradient-from": [{ from: D() }],
        "gradient-via": [{ via: D() }],
        "gradient-to": [{ to: D() }],
        rounded: [{ rounded: R() }],
        "rounded-s": [{ "rounded-s": R() }],
        "rounded-e": [{ "rounded-e": R() }],
        "rounded-t": [{ "rounded-t": R() }],
        "rounded-r": [{ "rounded-r": R() }],
        "rounded-b": [{ "rounded-b": R() }],
        "rounded-l": [{ "rounded-l": R() }],
        "rounded-ss": [{ "rounded-ss": R() }],
        "rounded-se": [{ "rounded-se": R() }],
        "rounded-ee": [{ "rounded-ee": R() }],
        "rounded-es": [{ "rounded-es": R() }],
        "rounded-tl": [{ "rounded-tl": R() }],
        "rounded-tr": [{ "rounded-tr": R() }],
        "rounded-br": [{ "rounded-br": R() }],
        "rounded-bl": [{ "rounded-bl": R() }],
        "border-w": [{ border: X() }],
        "border-w-x": [{ "border-x": X() }],
        "border-w-y": [{ "border-y": X() }],
        "border-w-s": [{ "border-s": X() }],
        "border-w-e": [{ "border-e": X() }],
        "border-w-t": [{ "border-t": X() }],
        "border-w-r": [{ "border-r": X() }],
        "border-w-b": [{ "border-b": X() }],
        "border-w-l": [{ "border-l": X() }],
        "divide-x": [{ "divide-x": X() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": X() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...W(), "hidden", "none"] }],
        "divide-style": [{ divide: [...W(), "hidden", "none"] }],
        "border-color": [{ border: D() }],
        "border-color-x": [{ "border-x": D() }],
        "border-color-y": [{ "border-y": D() }],
        "border-color-s": [{ "border-s": D() }],
        "border-color-e": [{ "border-e": D() }],
        "border-color-t": [{ "border-t": D() }],
        "border-color-r": [{ "border-r": D() }],
        "border-color-b": [{ "border-b": D() }],
        "border-color-l": [{ "border-l": D() }],
        "divide-color": [{ divide: D() }],
        "outline-style": [{ outline: [...W(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [be, ne, te] }],
        "outline-w": [{ outline: ["", be, Gs, Va] }],
        "outline-color": [{ outline: D() }],
        shadow: [{ shadow: ["", "none", j, mo, fo] }],
        "shadow-color": [{ shadow: D() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, mo, fo] }],
        "inset-shadow-color": [{ "inset-shadow": D() }],
        "ring-w": [{ ring: X() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: D() }],
        "ring-offset-w": [{ "ring-offset": [be, Va] }],
        "ring-offset-color": [{ "ring-offset": D() }],
        "inset-ring-w": [{ "inset-ring": X() }],
        "inset-ring-color": [{ "inset-ring": D() }],
        "text-shadow": [{ "text-shadow": ["none", E, mo, fo] }],
        "text-shadow-color": [{ "text-shadow": D() }],
        opacity: [{ opacity: [be, ne, te] }],
        "mix-blend": [
          { "mix-blend": [...oe(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": oe() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [be] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": ae() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ae() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ae() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ae() }],
        "mask-image-t-from-color": [{ "mask-t-from": D() }],
        "mask-image-t-to-color": [{ "mask-t-to": D() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ae() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ae() }],
        "mask-image-r-from-color": [{ "mask-r-from": D() }],
        "mask-image-r-to-color": [{ "mask-r-to": D() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ae() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ae() }],
        "mask-image-b-from-color": [{ "mask-b-from": D() }],
        "mask-image-b-to-color": [{ "mask-b-to": D() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ae() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ae() }],
        "mask-image-l-from-color": [{ "mask-l-from": D() }],
        "mask-image-l-to-color": [{ "mask-l-to": D() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ae() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ae() }],
        "mask-image-x-from-color": [{ "mask-x-from": D() }],
        "mask-image-x-to-color": [{ "mask-x-to": D() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ae() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ae() }],
        "mask-image-y-from-color": [{ "mask-y-from": D() }],
        "mask-image-y-to-color": [{ "mask-y-to": D() }],
        "mask-image-radial": [{ "mask-radial": [ne, te] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ae() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ae() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": D() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": D() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": P() }],
        "mask-image-conic-pos": [{ "mask-conic": [be] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": ae() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ae() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": D() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": D() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: ie() }],
        "mask-repeat": [{ mask: re() }],
        "mask-size": [{ mask: w() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ne, te] }],
        filter: [{ filter: ["", "none", ne, te] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [be, ne, te] }],
        contrast: [{ contrast: [be, ne, te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", C, mo, fo] }],
        "drop-shadow-color": [{ "drop-shadow": D() }],
        grayscale: [{ grayscale: ["", be, ne, te] }],
        "hue-rotate": [{ "hue-rotate": [be, ne, te] }],
        invert: [{ invert: ["", be, ne, te] }],
        saturate: [{ saturate: [be, ne, te] }],
        sepia: [{ sepia: ["", be, ne, te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ne, te] }],
        "backdrop-blur": [{ "backdrop-blur": de() }],
        "backdrop-brightness": [{ "backdrop-brightness": [be, ne, te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [be, ne, te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", be, ne, te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [be, ne, te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", be, ne, te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [be, ne, te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [be, ne, te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", be, ne, te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": Z() }],
        "border-spacing-x": [{ "border-spacing-x": Z() }],
        "border-spacing-y": [{ "border-spacing-y": Z() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              ne,
              te,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [be, "initial", ne, te] }],
        ease: [{ ease: ["linear", "initial", G, ne, te] }],
        delay: [{ delay: [be, ne, te] }],
        animate: [{ animate: ["none", I, ne, te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [Y, ne, te] }],
        "perspective-origin": [{ "perspective-origin": ee() }],
        rotate: [{ rotate: ke() }],
        "rotate-x": [{ "rotate-x": ke() }],
        "rotate-y": [{ "rotate-y": ke() }],
        "rotate-z": [{ "rotate-z": ke() }],
        scale: [{ scale: at() }],
        "scale-x": [{ "scale-x": at() }],
        "scale-y": [{ "scale-y": at() }],
        "scale-z": [{ "scale-z": at() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: gt() }],
        "skew-x": [{ "skew-x": gt() }],
        "skew-y": [{ "skew-y": gt() }],
        transform: [{ transform: [ne, te, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: ee() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: lt() }],
        "translate-x": [{ "translate-x": lt() }],
        "translate-y": [{ "translate-y": lt() }],
        "translate-z": [{ "translate-z": lt() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: D() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: D() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              ne,
              te,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": Z() }],
        "scroll-mx": [{ "scroll-mx": Z() }],
        "scroll-my": [{ "scroll-my": Z() }],
        "scroll-ms": [{ "scroll-ms": Z() }],
        "scroll-me": [{ "scroll-me": Z() }],
        "scroll-mt": [{ "scroll-mt": Z() }],
        "scroll-mr": [{ "scroll-mr": Z() }],
        "scroll-mb": [{ "scroll-mb": Z() }],
        "scroll-ml": [{ "scroll-ml": Z() }],
        "scroll-p": [{ "scroll-p": Z() }],
        "scroll-px": [{ "scroll-px": Z() }],
        "scroll-py": [{ "scroll-py": Z() }],
        "scroll-ps": [{ "scroll-ps": Z() }],
        "scroll-pe": [{ "scroll-pe": Z() }],
        "scroll-pt": [{ "scroll-pt": Z() }],
        "scroll-pr": [{ "scroll-pr": Z() }],
        "scroll-pb": [{ "scroll-pb": Z() }],
        "scroll-pl": [{ "scroll-pl": Z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", ne, te],
          },
        ],
        fill: [{ fill: ["none", ...D()] }],
        "stroke-w": [{ stroke: [be, Gs, Va, au] }],
        stroke: [{ stroke: ["none", ...D()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  r1 = Vb(c1);
function _o(...s) {
  return r1(Fp(s));
}
function u1({ delayDuration: s = 0, ...c }) {
  return o.jsx(Ob, {
    "data-loc": "client/src/components/ui/tooltip.tsx:11",
    "data-slot": "tooltip-provider",
    delayDuration: s,
    ...c,
  });
}
const Ig = s => (typeof s == "boolean" ? `${s}` : s === 0 ? "0" : s),
  ep = Fp,
  d1 = (s, c) => u => {
    var r;
    if (c?.variants == null) return ep(s, u?.class, u?.className);
    const { variants: f, defaultVariants: m } = c,
      x = Object.keys(f).map(h => {
        const j = u?.[h],
          p = m?.[h];
        if (j === null) return null;
        const E = Ig(j) || Ig(p);
        return f[h][E];
      }),
      y =
        u &&
        Object.entries(u).reduce((h, j) => {
          let [p, E] = j;
          return (E === void 0 || (h[p] = E), h);
        }, {}),
      v =
        c == null || (r = c.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((h, j) => {
              let { class: p, className: E, ...C } = j;
              return Object.entries(C).every(M => {
                let [Y, V] = M;
                return Array.isArray(V)
                  ? V.includes({ ...m, ...y }[Y])
                  : { ...m, ...y }[Y] === V;
              })
                ? [...h, p, E]
                : h;
            }, []);
    return ep(s, x, v, u?.class, u?.className);
  },
  f1 = d1(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  );
function m1({ className: s, variant: c, size: u, asChild: r = !1, ...f }) {
  const m = r ? Ny : "button";
  return o.jsx(m, {
    "data-loc": "client/src/components/ui/button.tsx:52",
    "data-slot": "button",
    className: _o(f1({ variant: c, size: u, className: s })),
    ...f,
  });
}
function g1({ className: s, ...c }) {
  return o.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:7",
    "data-slot": "card",
    className: _o(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      s
    ),
    ...c,
  });
}
function p1({ className: s, ...c }) {
  return o.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:66",
    "data-slot": "card-content",
    className: _o("px-6", s),
    ...c,
  });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = s => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  rh = (...s) => s.filter((c, u, r) => !!c && r.indexOf(c) === u).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var x1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = z.forwardRef(
  (
    {
      color: s = "currentColor",
      size: c = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: r,
      className: f = "",
      children: m,
      iconNode: x,
      ...y
    },
    v
  ) =>
    z.createElement(
      "svg",
      {
        ref: v,
        ...x1,
        width: c,
        height: c,
        stroke: s,
        strokeWidth: r ? (Number(u) * 24) / Number(c) : u,
        className: rh("lucide", f),
        ...y,
      },
      [
        ...x.map(([h, j]) => z.createElement(h, j)),
        ...(Array.isArray(m) ? m : [m]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mt = (s, c) => {
  const u = z.forwardRef(({ className: r, ...f }, m) =>
    z.createElement(v1, {
      ref: m,
      iconNode: c,
      className: rh(`lucide-${h1(s)}`, r),
      ...f,
    })
  );
  return ((u.displayName = `${s}`), u);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lu = mt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = mt("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const b1 = mt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = mt("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = mt("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = mt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = mt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = mt("Dumbbell", [
  ["path", { d: "M14.4 14.4 9.6 9.6", key: "ic80wn" }],
  [
    "path",
    {
      d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",
      key: "nnl7wr",
    },
  ],
  ["path", { d: "m21.5 21.5-1.4-1.4", key: "1f1ice" }],
  ["path", { d: "M3.9 3.9 2.5 2.5", key: "1evmna" }],
  [
    "path",
    {
      d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",
      key: "yhosts",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = mt("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ln = mt("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = mt("MapPin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z",
    },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = mt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sn = mt("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = mt("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = mt("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = mt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function M1(s, c) {
  if (s instanceof RegExp) return { keys: !1, pattern: s };
  var u,
    r,
    f,
    m,
    x = [],
    y = "",
    v = s.split("/");
  for (v[0] || v.shift(); (f = v.shift()); )
    ((u = f[0]),
      u === "*"
        ? (x.push(u), (y += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : u === ":"
          ? ((r = f.indexOf("?", 1)),
            (m = f.indexOf(".", 1)),
            x.push(f.substring(1, ~r ? r : ~m ? m : f.length)),
            (y += ~r && !~m ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~m && (y += (~r ? "?" : "") + "\\" + f.substring(m)))
          : (y += "/" + f));
  return {
    keys: x,
    pattern: new RegExp("^" + y + (c ? "(?=$|/)" : "/?$"), "i"),
  };
}
var su = { exports: {} },
  iu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tp;
function D1() {
  if (tp) return iu;
  tp = 1;
  var s = Eo();
  function c(p, E) {
    return (p === E && (p !== 0 || 1 / p === 1 / E)) || (p !== p && E !== E);
  }
  var u = typeof Object.is == "function" ? Object.is : c,
    r = s.useState,
    f = s.useEffect,
    m = s.useLayoutEffect,
    x = s.useDebugValue;
  function y(p, E) {
    var C = E(),
      M = r({ inst: { value: C, getSnapshot: E } }),
      Y = M[0].inst,
      V = M[1];
    return (
      m(
        function () {
          ((Y.value = C), (Y.getSnapshot = E), v(Y) && V({ inst: Y }));
        },
        [p, C, E]
      ),
      f(
        function () {
          return (
            v(Y) && V({ inst: Y }),
            p(function () {
              v(Y) && V({ inst: Y });
            })
          );
        },
        [p]
      ),
      x(C),
      C
    );
  }
  function v(p) {
    var E = p.getSnapshot;
    p = p.value;
    try {
      var C = E();
      return !u(p, C);
    } catch {
      return !0;
    }
  }
  function h(p, E) {
    return E();
  }
  var j =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : y;
  return (
    (iu.useSyncExternalStore =
      s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : j),
    iu
  );
}
var np;
function _1() {
  return (np || ((np = 1), (su.exports = D1())), su.exports);
}
var B1 = _1();
const R1 = Gv.useInsertionEffect,
  H1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  U1 = H1 ? z.useLayoutEffect : z.useEffect,
  L1 = R1 || U1,
  uh = s => {
    const c = z.useRef([s, (...u) => c[0](...u)]).current;
    return (
      L1(() => {
        c[0] = s;
      }),
      c[1]
    );
  },
  Y1 = "popstate",
  ku = "pushState",
  Tu = "replaceState",
  q1 = "hashchange",
  ap = [Y1, ku, Tu, q1],
  G1 = s => {
    for (const c of ap) addEventListener(c, s);
    return () => {
      for (const c of ap) removeEventListener(c, s);
    };
  },
  dh = (s, c) => B1.useSyncExternalStore(G1, s, c),
  V1 = () => location.search,
  X1 = ({ ssrSearch: s = "" } = {}) => dh(V1, () => s),
  lp = () => location.pathname,
  Q1 = ({ ssrPath: s } = {}) => dh(lp, s ? () => s : lp),
  Z1 = (s, { replace: c = !1, state: u = null } = {}) =>
    history[c ? Tu : ku](u, "", s),
  K1 = (s = {}) => [Q1(s), Z1],
  sp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[sp] > "u") {
  for (const s of [ku, Tu]) {
    const c = history[s];
    history[s] = function () {
      const u = c.apply(this, arguments),
        r = new Event(s);
      return ((r.arguments = arguments), dispatchEvent(r), u);
    };
  }
  Object.defineProperty(window, sp, { value: !0 });
}
const J1 = (s, c) =>
    c.toLowerCase().indexOf(s.toLowerCase())
      ? "~" + c
      : c.slice(s.length) || "/",
  fh = (s = "") => (s === "/" ? "" : s),
  W1 = (s, c) => (s[0] === "~" ? s.slice(1) : fh(c) + s),
  $1 = (s = "", c) => J1(ip(fh(s)), ip(c)),
  ip = s => {
    try {
      return decodeURI(s);
    } catch {
      return s;
    }
  },
  mh = {
    hook: K1,
    searchHook: X1,
    parser: M1,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: s => s,
  },
  gh = z.createContext(mh),
  Ks = () => z.useContext(gh),
  ph = {},
  hh = z.createContext(ph),
  P1 = () => z.useContext(hh),
  Bo = s => {
    const [c, u] = s.hook(s);
    return [$1(s.base, c), uh((r, f) => u(W1(r, s.base), f))];
  },
  F1 = () => Bo(Ks()),
  xh = (s, c, u, r) => {
    const { pattern: f, keys: m } =
        c instanceof RegExp ? { keys: !1, pattern: c } : s(c || "*", r),
      x = f.exec(u) || [],
      [y, ...v] = x;
    return y !== void 0
      ? [
          !0,
          (() => {
            const h =
              m !== !1
                ? Object.fromEntries(m.map((p, E) => [p, v[E]]))
                : x.groups;
            let j = { ...v };
            return (h && Object.assign(j, h), j);
          })(),
          ...(r ? [y] : []),
        ]
      : [!1, null];
  },
  I1 = ({ children: s, ...c }) => {
    const u = Ks(),
      r = c.hook ? mh : u;
    let f = r;
    const [m, x] = c.ssrPath?.split("?") ?? [];
    (x && ((c.ssrSearch = x), (c.ssrPath = m)),
      (c.hrefs = c.hrefs ?? c.hook?.hrefs));
    let y = z.useRef({}),
      v = y.current,
      h = v;
    for (let j in r) {
      const p = j === "base" ? r[j] + (c[j] || "") : c[j] || r[j];
      (v === h && p !== h[j] && (y.current = h = { ...h }),
        (h[j] = p),
        (p !== r[j] || p !== f[j]) && (f = h));
    }
    return z.createElement(gh.Provider, { value: f, children: s });
  },
  op = ({ children: s, component: c }, u) =>
    c ? z.createElement(c, { params: u }) : typeof s == "function" ? s(u) : s,
  e2 = s => {
    let c = z.useRef(ph);
    const u = c.current;
    return (c.current =
      Object.keys(s).length !== Object.keys(u).length ||
      Object.entries(s).some(([r, f]) => f !== u[r])
        ? s
        : u);
  },
  gn = ({ path: s, nest: c, match: u, ...r }) => {
    const f = Ks(),
      [m] = Bo(f),
      [x, y, v] = u ?? xh(f.parser, s, m, c),
      h = e2({ ...P1(), ...y });
    if (!x) return null;
    const j = v ? z.createElement(I1, { base: v }, op(r, h)) : op(r, h);
    return z.createElement(hh.Provider, { value: h, children: j });
  },
  $ = z.forwardRef((s, c) => {
    const u = Ks(),
      [r, f] = Bo(u),
      {
        to: m = "",
        href: x = m,
        onClick: y,
        asChild: v,
        children: h,
        className: j,
        replace: p,
        state: E,
        ...C
      } = s,
      M = uh(V => {
        V.ctrlKey ||
          V.metaKey ||
          V.altKey ||
          V.shiftKey ||
          V.button !== 0 ||
          (y?.(V), V.defaultPrevented || (V.preventDefault(), f(x, s)));
      }),
      Y = u.hrefs(x[0] === "~" ? x.slice(1) : u.base + x, u);
    return v && z.isValidElement(h)
      ? z.cloneElement(h, { onClick: M, href: Y })
      : z.createElement("a", {
          ...C,
          onClick: M,
          href: Y,
          className: j?.call ? j(r === x) : j,
          children: h,
          ref: c,
        });
  }),
  hu = s =>
    Array.isArray(s)
      ? s.flatMap(c => hu(c && c.type === z.Fragment ? c.props.children : c))
      : [s],
  t2 = ({ children: s, location: c }) => {
    const u = Ks(),
      [r] = Bo(u);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      hu(s).forEach(m => {
        if (z.isValidElement(m) && m.props.path) {
          const x = m.props.path;
          window.__WOUTER_ROUTES__.includes(x) ||
            window.__WOUTER_ROUTES__.push(x);
        }
      }));
    for (const f of hu(s)) {
      let m = 0;
      if (
        z.isValidElement(f) &&
        (m = xh(u.parser, f.props.path, c || r, f.props.nest))[0]
      )
        return z.cloneElement(f, { match: m });
    }
    return null;
  };
function cp() {
  const [, s] = F1(),
    c = () => {
      s("/");
    };
  return o.jsx("div", {
    "data-loc": "client/src/pages/NotFound.tsx:14",
    className:
      "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
    children: o.jsx(g1, {
      "data-loc": "client/src/pages/NotFound.tsx:15",
      className:
        "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
      children: o.jsxs(p1, {
        "data-loc": "client/src/pages/NotFound.tsx:16",
        className: "pt-8 pb-8 text-center",
        children: [
          o.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:17",
            className: "flex justify-center mb-6",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/NotFound.tsx:18",
              className: "relative",
              children: [
                o.jsx("div", {
                  "data-loc": "client/src/pages/NotFound.tsx:19",
                  className:
                    "absolute inset-0 bg-red-100 rounded-full animate-pulse",
                }),
                o.jsx(j1, {
                  "data-loc": "client/src/pages/NotFound.tsx:20",
                  className: "relative h-16 w-16 text-red-500",
                }),
              ],
            }),
          }),
          o.jsx("h1", {
            "data-loc": "client/src/pages/NotFound.tsx:24",
            className: "text-4xl font-bold text-slate-900 mb-2",
            children: "404",
          }),
          o.jsx("h2", {
            "data-loc": "client/src/pages/NotFound.tsx:26",
            className: "text-xl font-semibold text-slate-700 mb-4",
            children: "Page Not Found",
          }),
          o.jsxs("p", {
            "data-loc": "client/src/pages/NotFound.tsx:30",
            className: "text-slate-600 mb-8 leading-relaxed",
            children: [
              "Sorry, the page you are looking for doesn't exist.",
              o.jsx("br", { "data-loc": "client/src/pages/NotFound.tsx:32" }),
              "It may have been moved or deleted.",
            ],
          }),
          o.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:36",
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: o.jsxs(m1, {
              "data-loc": "client/src/pages/NotFound.tsx:37",
              onClick: c,
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                o.jsx(E1, {
                  "data-loc": "client/src/pages/NotFound.tsx:41",
                  className: "w-4 h-4 mr-2",
                }),
                "Go Home",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
var Ao = {},
  n2 = () => {
    window.va ||
      (window.va = function (...c) {
        (window.vaq || (window.vaq = []), window.vaq.push(c));
      });
  },
  a2 = "@vercel/analytics",
  l2 = "2.0.1";
function vh() {
  return typeof window < "u";
}
function yh() {
  try {
    const s = "production";
  } catch {}
  return "production";
}
function s2(s = "auto") {
  if (s === "auto") {
    window.vam = yh();
    return;
  }
  window.vam = s;
}
function i2() {
  return (vh() ? window.vam : yh()) || "production";
}
function Ou() {
  return i2() === "development";
}
function o2(s) {
  return s.scriptSrc
    ? Rl(s.scriptSrc)
    : Ou()
      ? "https://va.vercel-scripts.com/v1/script.debug.js"
      : s.basePath
        ? Rl(`${s.basePath}/insights/script.js`)
        : "/_vercel/insights/script.js";
}
function c2(s, c) {
  var u;
  let r = s;
  if (c)
    try {
      r = { ...((u = JSON.parse(c)) == null ? void 0 : u.analytics), ...s };
    } catch {}
  s2(r.mode);
  const f = { sdkn: a2 + (r.framework ? `/${r.framework}` : ""), sdkv: l2 };
  return (
    r.disableAutoTrack && (f.disableAutoTrack = "1"),
    r.viewEndpoint && (f.viewEndpoint = Rl(r.viewEndpoint)),
    r.eventEndpoint && (f.eventEndpoint = Rl(r.eventEndpoint)),
    r.sessionEndpoint && (f.sessionEndpoint = Rl(r.sessionEndpoint)),
    Ou() && r.debug === !1 && (f.debug = "false"),
    r.dsn && (f.dsn = r.dsn),
    r.endpoint
      ? (f.endpoint = r.endpoint)
      : r.basePath && (f.endpoint = Rl(`${r.basePath}/insights`)),
    { beforeSend: r.beforeSend, src: o2(r), dataset: f }
  );
}
function Rl(s) {
  return s.startsWith("http://") ||
    s.startsWith("https://") ||
    s.startsWith("/")
    ? s
    : `/${s}`;
}
function r2(s = { debug: !0 }, c) {
  var u;
  if (!vh()) return;
  const { beforeSend: r, src: f, dataset: m } = c2(s, c);
  if (
    (n2(),
    r && ((u = window.va) == null || u.call(window, "beforeSend", r)),
    document.head.querySelector(`script[src*="${f}"]`))
  )
    return;
  const x = document.createElement("script");
  x.src = f;
  for (const [y, v] of Object.entries(m)) x.dataset[y] = v;
  ((x.defer = !0),
    (x.onerror = () => {
      const y = Ou()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${f}. ${y}`
      );
    }),
    document.head.appendChild(x));
}
function u2({ route: s, path: c }) {
  var u;
  (u = window.va) == null || u.call(window, "pageview", { route: s, path: c });
}
function d2() {
  if (!(typeof process > "u" || typeof Ao > "u"))
    return Ao.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function f2() {
  if (!(typeof process > "u" || typeof Ao > "u"))
    return Ao.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
function m2(s) {
  return (
    z.useEffect(() => {
      var c;
      s.beforeSend &&
        ((c = window.va) == null || c.call(window, "beforeSend", s.beforeSend));
    }, [s.beforeSend]),
    z.useEffect(() => {
      r2(
        {
          framework: s.framework || "react",
          basePath: s.basePath ?? d2(),
          ...(s.route !== void 0 && { disableAutoTrack: !0 }),
          ...s,
        },
        s.configString ?? f2()
      );
    }, []),
    z.useEffect(() => {
      s.route && s.path && u2({ route: s.route, path: s.path });
    }, [s.route, s.path]),
    null
  );
}
class g2 extends z.Component {
  constructor(c) {
    (super(c), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(c) {
    return { hasError: !0, error: c };
  }
  render() {
    return this.state.hasError
      ? o.jsx("div", {
          "data-loc": "client/src/components/ErrorBoundary.tsx:27",
          className:
            "flex items-center justify-center min-h-screen p-8 bg-background",
          children: o.jsxs("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:28",
            className: "flex flex-col items-center w-full max-w-2xl p-8",
            children: [
              o.jsx(C1, {
                "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                size: 48,
                className: "text-destructive mb-6 flex-shrink-0",
              }),
              o.jsx("h2", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                className: "text-xl mb-4",
                children: "An unexpected error occurred.",
              }),
              o.jsx("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                children: o.jsx("pre", {
                  "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                  className:
                    "text-sm text-muted-foreground whitespace-break-spaces",
                  children: this.state.error?.stack,
                }),
              }),
              o.jsxs("button", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                onClick: () => window.location.reload(),
                className: _o(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer"
                ),
                children: [
                  o.jsx(O1, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                    size: 16,
                  }),
                  "Reload Page",
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const p2 = z.createContext(void 0);
function h2({ children: s, defaultTheme: c = "light", switchable: u = !1 }) {
  const [r, f] = z.useState(() => (u && localStorage.getItem("theme")) || c);
  z.useEffect(() => {
    const x = document.documentElement;
    (r === "dark" ? x.classList.add("dark") : x.classList.remove("dark"),
      u && localStorage.setItem("theme", r));
  }, [r, u]);
  const m = u
    ? () => {
        f(x => (x === "light" ? "dark" : "light"));
      }
    : void 0;
  return o.jsx(p2.Provider, {
    "data-loc": "client/src/contexts/ThemeContext.tsx:52",
    value: { theme: r, toggleTheme: m, switchable: u },
    children: s,
  });
}
const rp = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  up = [
    { label: "Home", href: "/" },
    { label: "Behandelingen", href: "/behandelingen" },
    { label: "Over Mij", href: "/over-mij" },
    { label: "Arrangementen", href: "/arrangementen" },
    { label: "Workshops & Opleidingen", href: "/workshops" },
    { label: "Personal Training", href: "/personal-training" },
    { label: "Contact", href: "/contact" },
    { label: "Info", href: "/info" },
  ];
function ya() {
  const [s, c] = z.useState(!1),
    u = () => {
      (c(!1), window.scrollTo(0, 0));
    };
  return o.jsxs("header", {
    "data-loc": "client/src/components/Navigation.tsx:34",
    className: "sticky top-0 z-50 bg-white shadow-sm",
    children: [
      o.jsxs("div", {
        "data-loc": "client/src/components/Navigation.tsx:35",
        className: "container py-4 flex justify-between items-center",
        children: [
          o.jsx($, {
            "data-loc": "client/src/components/Navigation.tsx:37",
            href: "/",
            children: o.jsx("a", {
              "data-loc": "client/src/components/Navigation.tsx:38",
              className: "font-display text-2xl font-bold",
              style: { color: "#3E3A37" },
              children: "Balanergy",
            }),
          }),
          o.jsx("nav", {
            "data-loc": "client/src/components/Navigation.tsx:44",
            className: "hidden lg:flex gap-6 items-center",
            children: up.map(r =>
              o.jsx(
                $,
                {
                  "data-loc": "client/src/components/Navigation.tsx:46",
                  href: r.href,
                  children: o.jsx("a", {
                    "data-loc": "client/src/components/Navigation.tsx:47",
                    className:
                      "font-body text-sm font-medium hover:opacity-70 transition-opacity",
                    style: { color: "#6B6560" },
                    onClick: u,
                    children: r.label,
                  }),
                },
                r.href
              )
            ),
          }),
          o.jsx("a", {
            "data-loc": "client/src/components/Navigation.tsx:59",
            href: rp,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "hidden lg:inline-block px-4 py-2 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
            style: { backgroundColor: "#8DA089" },
            children: "BOEK NU",
          }),
          o.jsx("button", {
            "data-loc": "client/src/components/Navigation.tsx:70",
            onClick: () => c(!s),
            className: "lg:hidden p-2",
            "aria-label": "Toggle menu",
            children: s
              ? o.jsx(z1, {
                  "data-loc": "client/src/components/Navigation.tsx:76",
                  size: 24,
                  style: { color: "#3E3A37" },
                })
              : o.jsx(T1, {
                  "data-loc": "client/src/components/Navigation.tsx:78",
                  size: 24,
                  style: { color: "#3E3A37" },
                }),
          }),
        ],
      }),
      s &&
        o.jsx("div", {
          "data-loc": "client/src/components/Navigation.tsx:85",
          className: "lg:hidden border-t",
          style: { borderColor: "#E8D5C4", backgroundColor: "#FCF9F5" },
          children: o.jsxs("nav", {
            "data-loc": "client/src/components/Navigation.tsx:89",
            className: "container py-4 flex flex-col gap-3",
            children: [
              up.map(r =>
                o.jsx(
                  $,
                  {
                    "data-loc": "client/src/components/Navigation.tsx:91",
                    href: r.href,
                    children: o.jsx("a", {
                      "data-loc": "client/src/components/Navigation.tsx:92",
                      className:
                        "font-body text-sm font-medium py-2 hover:opacity-70 transition-opacity block",
                      style: { color: "#6B6560" },
                      onClick: u,
                      children: r.label,
                    }),
                  },
                  r.href
                )
              ),
              o.jsx("a", {
                "data-loc": "client/src/components/Navigation.tsx:101",
                href: rp,
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "w-full py-2 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90 mt-2",
                style: { backgroundColor: "#8DA089" },
                onClick: u,
                children: "BOEK NU",
              }),
            ],
          }),
        }),
    ],
  });
}
const dp = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  x2 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/hero-massage-7TjQGLyDBijKFozQs3yYZd.webp",
  v2 = [
    {
      name: "Claudia S.",
      rating: 5,
      text: "Wil je alle aandacht en tijd voor jezelf? Wil je stretchen en ontspannen? Balanergy heeft het allemaal. De Thaise yogamassage is zeer aan te bevelen.",
    },
    {
      name: "Gerbrig N.",
      rating: 5,
      text: "Vandaag had ik een heerlijke massage met Mascha van Balanergy. Zeer aan te bevelen! Mascha is erg enthousiast, lief en kundig. Ik voelde me volledig ontspannen en blij en zal zeker nog een afspraak inplannen!",
    },
    {
      name: "Angelique J.",
      rating: 5,
      text: "Bij Mascha kun je je massage precies zo laten doen als je wilt. Ze geeft fantastische massages; mijn lichaam voelt zich klaar om de wereld weer aan te gaan.",
    },
  ];
function y2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Home.tsx:34",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Home.tsx:35" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Home.tsx:38",
        className: "flex-1",
        children: [
          o.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:40",
            className: "relative h-screen flex items-center overflow-hidden",
            style: {
              backgroundImage: `url('${x2}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
            children: [
              o.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:47",
                className: "absolute inset-0",
                style: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
              }),
              o.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:48",
                className: "container relative z-10",
                children: o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:49",
                  className: "max-w-2xl",
                  children: [
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:50",
                      className:
                        "font-body text-sm font-semibold uppercase tracking-widest mb-4",
                      style: { color: "#E8D5C4" },
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie",
                    }),
                    o.jsxs("h1", {
                      "data-loc": "client/src/pages/Home.tsx:53",
                      className:
                        "font-display text-5xl md:text-6xl font-bold mb-6 leading-tight",
                      style: { color: "white" },
                      children: [
                        "Breng je energie",
                        o.jsx("br", {
                          "data-loc": "client/src/pages/Home.tsx:54",
                        }),
                        o.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:55",
                          style: { fontStyle: "italic", color: "#E8D5C4" },
                          children: "weer in balans",
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:57",
                      className: "font-body text-lg mb-8 max-w-xl",
                      style: { color: "#F5F1ED" },
                      children:
                        "Balanergy is de praktijk van Mascha Kwakkel in IJsselmuiden — centraal gelegen tussen Kampen en Zwolle. Hier staat jouw lichaam en geest centraal.",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:60",
                      className: "flex flex-col gap-4 justify-start",
                      children: [
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Home.tsx:61",
                          href: dp,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-block px-6 py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90",
                          style: { backgroundColor: "#C69C6D", width: "200px" },
                          children: "AFSPRAAK BOEKEN",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Home.tsx:70",
                          href: "/behandelingen",
                          children: o.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:71",
                            className:
                              "px-6 py-3 rounded font-body text-sm font-semibold border-2 text-center transition-all hover:opacity-90 w-full sm:w-auto",
                            style: { borderColor: "white", color: "white" },
                            children: "BEKIJK BEHANDELINGEN",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:81",
            className: "py-16 md:py-24",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:82",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:83",
                className: "max-w-3xl",
                children: [
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:84",
                    className:
                      "font-body text-xs font-semibold uppercase tracking-widest mb-4",
                    style: { color: "#8DA089" },
                    children: "Welkom bij Balanergy",
                  }),
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:87",
                    className:
                      "font-display text-4xl md:text-5xl font-bold mb-8",
                    style: { color: "#3E3A37" },
                    children: "Meer dan een massage",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:90",
                    className: "space-y-4 font-body text-lg leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:91",
                        children:
                          "Balanergy biedt Thaise yogamassage, ontspanningsmassages, anti-stress massages, sportmassage en voetreflexologie — maar ook technieklessen yoga en Personal Training in IJsselmuiden.",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:94",
                        children:
                          "Balanergy is er om jouw fysieke en mentale gezondheid te versterken en je ontspanning te waarborgen, door door te gaan waar de gemiddelde massage eindigt.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:103",
            className: "py-16",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:104",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:105",
                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                children: [
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:106",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:107",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "10+",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:110",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Jaar ervaring",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:114",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:115",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "3×",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:118",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Opleiding in Thailand",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:122",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:123",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "15+",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:126",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Opleidingen & cursussen",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:130",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:131",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "100%",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:134",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Persoonlijke aanpak",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:143",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:144",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:145",
                  className: "font-display text-4xl font-bold mb-12",
                  style: { color: "#3E3A37" },
                  children: "Onze Diensten",
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:148",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
                  children: [
                    o.jsx($, {
                      "data-loc": "client/src/pages/Home.tsx:149",
                      href: "/behandelingen",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:150",
                        className:
                          "group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer",
                        onClick: () => window.scrollTo(0, 0),
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:151",
                            className: "font-display text-2xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Behandelingen",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:154",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children:
                              "Ontdek onze volledige aanbod van massages en behandelingen met prijzen.",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:157",
                            className: "flex items-center gap-2",
                            style: { color: "#8DA089" },
                            children: [
                              o.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:158",
                                className: "font-body text-sm font-semibold",
                                children: "Bekijk meer",
                              }),
                              o.jsx(lu, {
                                "data-loc": "client/src/pages/Home.tsx:159",
                                size: 16,
                                className:
                                  "group-hover:translate-x-1 transition-transform",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Home.tsx:163",
                      href: "/arrangementen",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:164",
                        className:
                          "group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer",
                        onClick: () => window.scrollTo(0, 0),
                        style: { height: "195px" },
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:165",
                            className: "font-display text-2xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Arrangementen",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:168",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children:
                              "Ontdek onze speciale arrangementen, seizoensgebonden aanbiedingen en acties.",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:171",
                            className: "flex items-center gap-2",
                            style: { color: "#8DA089" },
                            children: [
                              o.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:172",
                                className: "font-body text-sm font-semibold",
                                children: "Bekijk meer",
                              }),
                              o.jsx(lu, {
                                "data-loc": "client/src/pages/Home.tsx:173",
                                size: 16,
                                className:
                                  "group-hover:translate-x-1 transition-transform",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Home.tsx:177",
                      href: "/workshops",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:178",
                        className:
                          "group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer",
                        onClick: () => window.scrollTo(0, 0),
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:179",
                            className: "font-display text-2xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Workshops & Opleidingen",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:182",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children:
                              "Leer technieken en verdiep je kennis met onze workshops.",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:185",
                            className: "flex items-center gap-2",
                            style: { color: "#8DA089" },
                            children: [
                              o.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:186",
                                className: "font-body text-sm font-semibold",
                                children: "Bekijk meer",
                              }),
                              o.jsx(lu, {
                                "data-loc": "client/src/pages/Home.tsx:187",
                                size: 16,
                                className:
                                  "group-hover:translate-x-1 transition-transform",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:196",
            className: "py-16 md:py-24",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:197",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:198",
                  className: "font-display text-4xl font-bold mb-12",
                  style: { color: "#3E3A37" },
                  children: "Wat cliënten zeggen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:201",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                  children: v2.map((s, c) =>
                    o.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/Home.tsx:203",
                        className: "bg-white p-8 rounded-lg shadow-sm",
                        children: [
                          o.jsx("div", {
                            "data-loc": "client/src/pages/Home.tsx:204",
                            className: "flex gap-1 mb-4",
                            children: [...Array(s.rating)].map((u, r) =>
                              o.jsx(
                                "span",
                                {
                                  "data-loc": "client/src/pages/Home.tsx:206",
                                  style: { color: "#C69C6D" },
                                  children: "★",
                                },
                                r
                              )
                            ),
                          }),
                          o.jsxs("p", {
                            "data-loc": "client/src/pages/Home.tsx:211",
                            className:
                              "font-body text-base mb-6 leading-relaxed",
                            style: { color: "#6B6560" },
                            children: ['"', s.text, '"'],
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:214",
                            className: "font-body text-sm font-semibold",
                            style: { color: "#3E3A37" },
                            children: s.name,
                          }),
                        ],
                      },
                      c
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:224",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:225",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:226",
                  className: "font-display text-4xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Klaar om je afspraak in te boeken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:229",
                  className: "font-body text-lg mb-8",
                  style: { color: "#6B6560" },
                  children:
                    "Kies je behandeling en boek direct online via onze agenda, of neem contact met ons op",
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:232",
                  className: "flex flex-col gap-4 justify-start",
                  children: [
                    o.jsx("a", {
                      "data-loc": "client/src/pages/Home.tsx:233",
                      href: dp,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                      style: { backgroundColor: "#8DA089", width: "175px" },
                      children: "ONLINE AGENDA",
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Home.tsx:242",
                      href: "/contact",
                      children: o.jsx("a", {
                        "data-loc": "client/src/pages/Home.tsx:243",
                        className:
                          "px-8 py-3 rounded font-body text-sm font-semibold border-2 transition-all hover:opacity-90 w-full sm:w-auto",
                        style: { borderColor: "#8DA089", color: "#8DA089" },
                        children: "CONTACTEER ONS",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/Home.tsx:253",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:254",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:255",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:256",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Home.tsx:257",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:258",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:262",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:263",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Home.tsx:264",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:265",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:265",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:266",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:266",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:267",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:267",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:268",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:268",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:269",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:269",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:270",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:270",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:271",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:271",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:272",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:272",
                            href: "/info",
                            className: "opacity-80 hover:opacity-100",
                            children: "Info",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:275",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:276",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:277",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:278",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/Home.tsx:279",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Home.tsx:280",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:282",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/Home.tsx:283",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Home.tsx:284",
                              href: "mailto:balanergy@hotmail.com",
                              className: "opacity-80 hover:opacity-100",
                              children: "balanergy@hotmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:289",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:290",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Ul({
  title: s,
  subtitle: c,
  description: u,
  fullDescription: r,
  prices: f,
  note: m,
  tag: x,
}) {
  const [y, v] = z.useState(!1);
  return o.jsxs("div", {
    "data-loc": "client/src/components/ExpandableCard.tsx:26",
    className:
      "bg-white rounded-lg shadow-sm overflow-hidden flex flex-col relative h-full",
    style: { borderTop: "1px solid rgba(198,156,109,0.15)" },
    children: [
      x &&
        o.jsx("div", {
          "data-loc": "client/src/components/ExpandableCard.tsx:33",
          className: "absolute top-4 right-4 z-10",
          children: o.jsx("span", {
            "data-loc": "client/src/components/ExpandableCard.tsx:34",
            className: "inline-block px-3 py-1 rounded text-xs font-semibold",
            style: { backgroundColor: "#C69C6D", color: "white" },
            children: x,
          }),
        }),
      o.jsxs("div", {
        "data-loc": "client/src/components/ExpandableCard.tsx:39",
        className: "p-6 flex flex-col",
        children: [
          o.jsx("h3", {
            "data-loc": "client/src/components/ExpandableCard.tsx:40",
            className: "font-display text-xl font-bold mb-1",
            style: { color: "#3E3A37" },
            children: s,
          }),
          o.jsx("p", {
            "data-loc": "client/src/components/ExpandableCard.tsx:43",
            className: "font-body text-xs font-semibold mb-3",
            style: { color: "#8DA089" },
            children: c,
          }),
          o.jsx("p", {
            "data-loc": "client/src/components/ExpandableCard.tsx:46",
            className: "font-body text-sm leading-relaxed mb-6",
            style: { color: "#6B6560", height: "6.5em", overflow: "hidden" },
            children: u,
          }),
          r &&
            o.jsxs("div", {
              "data-loc": "client/src/components/ExpandableCard.tsx:52",
              className: "mb-4 w-full",
              children: [
                o.jsxs("button", {
                  "data-loc": "client/src/components/ExpandableCard.tsx:53",
                  onClick: () => v(!y),
                  className:
                    "flex items-center gap-2 font-body text-sm font-semibold transition-all w-full",
                  style: { color: "#8DA089" },
                  children: [
                    o.jsx("span", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:58",
                      children: y ? "Lees minder" : "Lees meer",
                    }),
                    o.jsx(b1, {
                      "data-loc": "client/src/components/ExpandableCard.tsx:59",
                      size: 16,
                      style: {
                        transform: y ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      },
                    }),
                  ],
                }),
                y &&
                  o.jsx("div", {
                    "data-loc": "client/src/components/ExpandableCard.tsx:69",
                    className: "mt-4 p-4 rounded bg-white border",
                    style: {
                      borderColor: "rgba(141,160,137,0.2)",
                      backgroundColor: "rgba(141,160,137,0.05)",
                    },
                    children: o.jsx("p", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:73",
                      className:
                        "font-body text-sm leading-relaxed whitespace-pre-wrap",
                      style: { color: "#6B6560" },
                      children: r,
                    }),
                  }),
              ],
            }),
        ],
      }),
      o.jsx("div", {
        "data-loc": "client/src/components/ExpandableCard.tsx:83",
        className: "border-t",
        style: { borderColor: "rgba(141,160,137,0.2)" },
      }),
      o.jsxs("div", {
        "data-loc": "client/src/components/ExpandableCard.tsx:86",
        className: "p-6",
        children: [
          o.jsx("div", {
            "data-loc": "client/src/components/ExpandableCard.tsx:87",
            className: "space-y-2 mb-3",
            children: f.map((h, j) =>
              o.jsxs(
                "div",
                {
                  "data-loc": "client/src/components/ExpandableCard.tsx:89",
                  className: "flex justify-between font-body text-sm",
                  children: [
                    o.jsx("span", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:90",
                      style: { color: "#6B6560" },
                      children: h.duration,
                    }),
                    o.jsx("span", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:91",
                      style: { color: "#8DA089", fontWeight: "600" },
                      children: h.price,
                    }),
                  ],
                },
                j
              )
            ),
          }),
          m &&
            o.jsx("p", {
              "data-loc": "client/src/components/ExpandableCard.tsx:96",
              className: "font-body text-xs mb-4 italic",
              style: { color: "#C69C6D" },
              children: m,
            }),
          o.jsx("a", {
            "data-loc": "client/src/components/ExpandableCard.tsx:100",
            href: "https://www.supersaas.nl/schedule/balanergy/Balanergy",
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "inline-block px-6 py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90",
            style: { backgroundColor: "#8DA089" },
            children: "BOEK NU",
          }),
        ],
      }),
    ],
  });
}
const b2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  j2 = [
    {
      id: "ontspanning",
      title: "Ontspanningsmassage",
      subtitle: "Ontspanning",
      description:
        "Diepe ontspanningsmassage met essentiële oliën. Minimaal 45 minuten voor ware ontspanning. Kan steviger uitgevoerd worden als je dat wilt.",
      fullDescription: `Ontspanningsmassages hebben als doel tot een diepe ontspanning komen en alles even kunnen loslaten. Er wordt gemasseerd met een essentiële olie naar keuze (gemengd met een basisolie).

Een ontspanningsmassage wordt aangeboden vanaf minimaal 45 minuten, omdat écht loslaten en ontspannen nauwelijks lukt in 30 minuten. Een ontspanningsmassage kan beslist ook steviger worden uitgevoerd voor wie dat prettig vindt, ontspanning kent vele vormen. Wil je graag dat eventuele knopen of triggerpoints ook worden aangepakt tijdens je massage en behandeld worden met magnesiumolie en/of Thaise balsems? Boek dan een combinatie massage.`,
      prices: [
        { duration: "45 min", price: "€ 45,-" },
        { duration: "60 min", price: "€ 55,-" },
        { duration: "75 min", price: "€ 65,-" },
        { duration: "90 min", price: "€ 75,-" },
        { duration: "120 min", price: "€ 95,-" },
      ],
    },
    {
      id: "sportmassage",
      title: "Sportmassage",
      subtitle: "Klachtgericht",
      description:
        "Voor pijn, blessures en overbelasting van specifieke lichaamsdelen. Niet alleen voor sporters—voor iedereen met bewegingsklachten zoals hoofdpijn, rugpijn en nek-/schouderklachten.",
      fullDescription:
        "Een sportmassage richt zich op één of meer klachten in de vorm van pijn, blessures of overbelasting van specifieke lichaamsdelen, wat niet voorbehouden is aan sporters, maar voor iedereen met klachten in het bewegingsapparaat. Hierbij kan gedacht worden aan hoofdpijn, onderrugklachten, bekkenklachten, nek- en schouderklachten. Deze massage is vaak steviger dan de ontspannende massage en er wordt gewerkt met andere petrissage, frictie en tapotage technieken en elementen uit de Thaise acupressuur massage om dieper te kunnen inwerken op het spierweefsel. Er wordt onder meer gewerkt met een speciale massagebalsem of magnesiumolie voor overbelaste of pijnlijke spieren om het effect van de massage nog verder te versterken. Ook als je geen concrete klachten hebt, is een massage nooit overbodige luxe, doordat je je lichaam en hoofd ermee in balans kunt houden en daarmee preventief werkt.",
      prices: [
        { duration: "30 min", price: "€ 35,-" },
        { duration: "45 min", price: "€ 45,-" },
        { duration: "60 min", price: "€ 55,-" },
        { duration: "75 min", price: "€ 65,-" },
        { duration: "90 min", price: "€ 75,-" },
        { duration: "120 min", price: "€ 95,-" },
      ],
    },
    {
      id: "combinatiemassage",
      title: "Combinatiemassage",
      subtitle: "Combinatie",
      description:
        "Mix van ontspannings- en sportmassage. Behandelt specifieke probleemgebieden terwijl je overall ontspanning behoudt. Minimaal 45 minuten.",
      fullDescription:
        "Bij een combinatiemassage wordt er een combi gemaakt tussen ontspanningsmassage en sportmassage. Hierbij kun je denken aan therapeutisch werk voor bijvoorbeeld rug, nek en schouders en een ontspannende massage van bijvoorbeeld voeten, hoofd, benen, armen. Omdat een deelmassage voor het behandelen van een specifieke klacht afhankelijk van het lichaamsdeel 15-45 minuten duurt, is het minimum voor een combinatiemassage 45 minuten.",
      prices: [
        { duration: "45 min", price: "€ 45,-" },
        { duration: "60 min", price: "€ 55,-" },
        { duration: "75 min", price: "€ 65,-" },
        { duration: "90 min", price: "€ 75,-" },
        { duration: "120 min", price: "€ 95,-" },
      ],
      tag: "Meest geboekt",
    },
    {
      id: "rugpijnmassage",
      title: "Rugpijnmassage",
      subtitle: "Gespecialiseerd",
      description:
        "Gespecialiseerde behandeling van boven- en onderrug met Thaise acupressuur en klachtgerichte massage. Gebruikt speciale Thaise balsem voor diep spierwerk.",
      fullDescription: `Balanergy biedt een speciale boven- en onderrugklachten-massage aan. Deze bestaat uit een intensieve behandeling van het onderrug-bekken-billen en benen gebied waarbij een combinatie plaatsvindt van Thaise acupressuurmassage en klachtgerichte (olie)massage. Er wordt gemasseerd met een speciale Thaise balsem die extra diep inwerkt op de spieren. De massage is intensief maar ook erg ontspannend omdat het een directe verlichting biedt. De behandeling onderscheidt zich van een fysiotherapie behandeling omdat de behandeling dus behalve functioneel ook nog steeds een ontspannende massage is.

Veel vrouwen (en zo nu en dan ook mannen) hebben vaak last van de onderrug. Dit kan veel oorzaken hebben, waaronder acute pijn door een overbelasting, stress, pijn door verweking van de spieren door bijvoorbeeld menstruatie of zwangerschap of langdurige idiopathische pijn. Pijn wordt onderverdeeld in drie tijdscategorieën, te weten acute pijn korter dan 6 weken, semi chronisch van 6 tot 12 weken of langer dan 12 weken, wat dan chronisch genoemd wordt. Voor alle varianten kan (regelmatige) massage verlichting bieden. Soms is het nodig of praktischer om je ook te verwijzen naar fysiotherapie, manuele therapie, muskuloskeletale geneeskunde of chiropractie die in combinatie met massages goede resultaten kunnen bieden, via onder andere dry needling, manipulaties of zachte standscorrecties.

De onderrug is een nogal breed begrip waarbij vaak het hele gebied rondom het heiligbeen, stuitje en de heupgordel bedoeld wordt. Het zal je dan wellicht ook niet verbazen dat veel onderrugklachten bij vrouwen feitelijk klachten zijn die hun oorsprong vinden in de spieren rondom het bekken en heiligbeen met andere woorden, in de billen dus! De billen bestaan uit meerdere grote spieren die samen eigenlijk het grootste gewicht van je lijf dragen en je rug ondersteunen om rechttop te blijven, samen met de spieren rondom de wervelkolom. Op zich geen wonder dus dat in ons drukke leven deze spieren en dan voornamelijk de grote bilspier (m.gluteus maximus) maar ook de middelgrote en kleine bilspier (m.gluteus medius en minimus) vaak erg geïrriteerd zijn, regelmatig in combinatie met de aanhechtingen in de liezen en diep van binnen de m.ilio psoas.

In de bovenrug geven de monnikskapspier (m.trapezius) en meerdere oppervlakkige en diepliggende spieren zoals de m.erector spinae, m. supraspinatus en m. levator scapula, vaak klachten in bovenrug en nek. Veel mensen zetten stress lichamelijk vast door de schouders (vaak ongemerkt) op te trekken, waardoor er teveel spanning op het gebied komt. Ook klachten in de nek en bovenrug kunnen bij de bovenrug-massage goed behandeld worden, deze klachten ontstaan tegenwoordig vaak door beeldschermgebruik op de bank of tafel, waarbij je teveel naar beneden kijkt.

Bij de opmerking kun je aangeven of je een onderrug- of bovenrug-massage nodig hebt, of eventueel een combinatie. Deze klachten zijn vaak niet gisteren ontstaan, dus na een eerste behandeling zul je zeker verlichting voelen, maar om problemen blijvend op te lossen en daarna bij te houden, zijn vaak een aantal behandelingen meer nodig. Ik adviseer daarom om te starten met 3 a 4 behandelingen kort op elkaar, om daarna het klachtengebied bij te houden door eens in de 4 tot 6 weken de rug opnieuw los te laten werken. Let op: wil je graag in kuurverband gemasseerd worden, plan je eerste behandeling dan in overleg tijdig in zodat er voldoende ruimte is in de agenda om een aantal behandelingen relatief kort na elkaar te plannen.`,
      prices: [
        { duration: "30 min", price: "€ 35,-" },
        { duration: "45 min", price: "€ 45,-" },
      ],
    },
    {
      id: "hoofdpijnmassages",
      title: "Hoofdpijnmassages",
      subtitle: "Gespecialiseerd",
      description:
        "Drie gespecialiseerde typen: stress-/spanningsmigraine, nek-/schouder-gerelateerde hoofdpijn, en sinuscongestie-hoofdpijn met pepermuntolie en Thaise balsem.",
      fullDescription: `Regelmatig optredende hoofdpijn komt helaas vaak en veel voor en kan diverse oorzaken hebben, zoals hoofdpijn door spanning, door verstopte holtes, of hoofdpijn die veroorzaakt wordt door klachten vanuit de nek en/of schouders. Voor elk type heeft Balanergy een aparte massage ontwikkeld om deze klachten aan te pakken. 


Hoofdpijnmassage door stress en spanning:
Deze uiterst ontspannende massage wordt spanning in het lichaam die vaak in de bovenrug gaat vastzitten losgewerkt. Ook het hoofd, waar de spanning letterlijk en figuurlijk vandaan komt, wordt uitgebreid meegenomen. 


Hoofdpijnmassage door nek- en schouderklachten:
Bij deze massage worden westerse en Thaise technieken gecombineerd om het schouder- en nekgebied bij een aantal belangrijke spieren los te maken, waardoor knopen en strengen verminderen en daarmee de toevoer van zuurstofrijk bloed naar het hoofd bevorderd wordt.


Hoofdpijnmassage door verstopte holtes:
Bij deze massage wordt het hoofd, het gezicht en de bovenkant van de rug, nek en schouders gemasseerd. Door massage van het gezicht en dan met name bij de holtes krijg je meer lucht. Er wordt gemasseerd met pepermuntolie en Thaise balsem die het kunnen doorademen via de neus verbeteren.`,
      prices: [{ duration: "30 min", price: "€ 35,-" }],
    },
    {
      id: "thai",
      title: "Thaise Yogamassage",
      subtitle: "Thais",
      description:
        "Traditionele Thaise yogamassage met strekking en acupressuurtechnieken. Geschikt voor iedereen van 10 tot 100 jaar oud.",
      fullDescription: `Dit is de traditionele vorm van yogamassage, zoals die in Noord-Thailand ook het meest wordt gegeven, en deze vindt plaats op een comfortabele traditionele Thaise rolmatras van kapok katoen. Hiermee is er optimale bewegingsvrijheid om de yoga stretches te kunnen doen, in combinatie met acupressuur massage.

Hoe langer de tijdsduur, hoe meer tijd er per lichaamdsdeel is. Deze massage kan niet op locatie gegeven worden.`,
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "75 min", price: "€ 69,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
      tag: "Signature Dish!",
    },
    {
      id: "reflexology",
      title: "Voetreflexologie",
      subtitle: "Reflexologie",
      description:
        "Voetreflexologie en massage met Thaise en westerse technieken. Bij 60 minuten worden ook de onderbenen tot aan de knie gemasseerd.",
      fullDescription:
        "Voetreflexologie bij Balanergy kan voor 30 of 60 minuten. Hierbij kun je kiezen of je een reflexologie behandeling wilt, of een normale voetmassage. Bij een uur reflexologie en normale voetmassage worden ook de onderbenen tot en met de knie gemasseerd.",
      prices: [
        { duration: "30 min", price: "€ 35,-" },
        { duration: "60 min", price: "€ 55,-" },
      ],
    },
  ];
function w2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Behandelingen.tsx:122",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Behandelingen.tsx:123" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Behandelingen.tsx:126",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:128",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:129",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:130",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Behandelingen & Prijzen",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:133",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Van ontspannend tot therapeutisch — er is altijd een behandeling die op dit moment bij jou past",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:140",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:141",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:142",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Onze Behandelingen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:145",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: j2.map(s =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Behandelingen.tsx:147",
                        title: s.title,
                        subtitle: s.subtitle,
                        description: s.description,
                        fullDescription: s.fullDescription,
                        prices: s.prices,
                        tag: s.tag,
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:162",
            className: "py-12 bg-white",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:163",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Behandelingen.tsx:164",
                className: "bg-yellow-50 border-l-4 p-6",
                style: {
                  borderColor: "#C69C6D",
                  backgroundColor: "rgba(198,156,109,0.1)",
                },
                children: [
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Behandelingen.tsx:165",
                    className: "font-body text-base font-semibold mb-3",
                    style: { color: "#3E3A37" },
                    children: "⚠️ Annuleringsbeleid",
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/Behandelingen.tsx:168",
                    className: "font-body text-base leading-relaxed mb-3",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/Behandelingen.tsx:169",
                        children: "Let op:",
                      }),
                      " Vanwege de volle agenda worden afspraken die minder dan 24 uur van tevoren worden afgezegd, ongeacht de reden, in rekening gebracht.",
                    ],
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/Behandelingen.tsx:171",
                    className: "font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/Behandelingen.tsx:172",
                        children: "Uitzondering:",
                      }),
                      " Wanneer je iemand anders in jouw plaats laat komen voor dezelfde tijdsduur, dan geldt dit niet.",
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:179",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:180",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:181",
                  className: "font-display text-3xl md:text-4xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Klaar om je afspraak in te boeken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:184",
                  className: "font-body text-lg mb-8 max-w-2xl mx-auto",
                  style: { color: "#6B6560" },
                  children:
                    "Kies je behandeling en boek direct online via onze agenda",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:187",
                  href: b2,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                  style: { backgroundColor: "#8DA089" },
                  children: "ONLINE AGENDA",
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/Behandelingen.tsx:201",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Behandelingen.tsx:202",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:203",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:204",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:205",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:206",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:210",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:211",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:212",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:213",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:213",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:214",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:214",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:215",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:215",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:216",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:216",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:217",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:217",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:218",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:218",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:219",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:219",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:220",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:220",
                            href: "/info",
                            className: "opacity-80 hover:opacity-100",
                            children: "Info",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:223",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:224",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:225",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:226",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:227",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:228",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:230",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:231",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:232",
                              href: "mailto:balanergy@hotmail.com",
                              className: "opacity-80 hover:opacity-100",
                              children: "balanergy@hotmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:237",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Behandelingen.tsx:238",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const N2 = [
    {
      id: "thaise-actie",
      title: "Kom kennis maken met Thaise yogamassage",
      subtitle: "Actie",
      description: "Krijg een massage tegen dit scherpe actietarief!",
      fullDescription:
        "Per persoon eenmalig te boeken tegen dit scherpe actietarief.|||Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
      prices: [
        { duration: "60 min", price: "€ 52,50" },
        { duration: "90 min", price: "€ 72,50" },
      ],
      note: "Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
    },
    {
      id: "reflexologie-actie",
      title: "Kom kennis maken met voetreflexologie",
      subtitle: "Actie",
      description: "Boek een behandeling met Thaise en westerse technieken.",
      fullDescription:
        "Thaise en westerse technieken worden gecombineerd.|||Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
      prices: [{ duration: "45 min", price: "€ 42,50" }],
      note: "Niet cumuleerbaar met andere acties, kortingen of aanbiedingen.",
    },
    {
      id: "scrub-actie",
      title: "Scrub, achterkant lichaam",
      subtitle: "Actie",
      description: "Ontdoe je huid van dode huidcellen.",
      fullDescription:
        "Om je huid gezond en mooi te laten worden en houden, is het belangrijk deze zo nu en dan te ontdoen van dode huidcellen door deze te scrubben.|||Omdat je zelf niet bij je rug kunt kun je vanaf nu een scrub van de achterkant van je lichaam boeken (rug, billen indien gewenst, achterkant benen) voor slechts 6,95 extra bij je behandeling. Vermeld dit bij je boeking en krijg deze heerlijk scrub met een essentiële olie naar keuze bij je behandeling!|||Indien je via de online agenda reserveert voor een massage, vermeld dan in de opmerking erbij dat je ook graag een scrub behandeling wilt toevoegen.",
      prices: [{ duration: "Extra", price: "€ 6,95" }],
      note: "Voeg toe bij je boeking in de opmerkingen.",
    },
  ],
  S2 = [
    {
      id: "winter",
      title: "Winter arrangement",
      subtitle: "Tafel",
      description:
        "Stimulerende massage met westerse en oosterse technieken om je lichaam energie te geven. Start met scrub van rug, nek en schouders, gevolgd door massage van alle lichaamsdelen met aandacht voor voeten.",
      fullDescription:
        "Ben je toe aan je lijf voorbereiden op de winter? Dit arrangement maakt gebruik van een stevige maar rustige gegeven, stimulerende massage met zowel westerse als oosterse massagetechnieken met essentiële olie naar keuze om het lichaam energie te geven en op te peppen. Er wordt begonnen met een scrub van de rug, nek en schouders en achterkant van de benen, precies die delen waar je zelf minder makkelijk bij kunt. Daarna volgt een massage van rug, nek en schouders, gevolgd door de achterkant van de benen, armen en handen indien tijd over, het hoofd en ter afsluiting is er aandacht voor het meest belaste onderdeel van je lijf: je voeten! Na de behandeling zul je je energiek en verfrist voelen en ben je klaar voor de winter!",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "balsem-sinaasappel",
      title: "Balsem sinaasappel-kaneel arrangement",
      subtitle: "Tafel",
      description:
        "Start met voetbad in kaneel of sinaasappel etherische olie. Daarna balsem en verwarmde massage van rug, nek, schouders en bilspieren. Bij 90 minuten ook voor- en achterkant benen.",
      fullDescription:
        "Je behandeling start met een kaneel of sinaasappel etherische oliebad van je voeten. Hierna worden bij een uur rug, nek, schouders en indien gewenst de bilspieren ingesmeerd  met verwarmende therapeutische balsem, bij 90 minuten ook de voor- en achterkant van de benen. Daarna volgt de massage met verwarmde, etherische olie van rug, nek, schouders en bilspieren, aangevuld met een keuze uit voor- of achterkant benen, voeten, handen of hoofd. Bij 90 minuten komen al deze onderdelen aan de beurt en bepalen we in overleg waar jij behoefte aan hebt!",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "balsem-thais",
      title: "Balsem kaneel/sinaasappel arrangement Thais",
      subtitle: "Mat",
      description:
        "Warm voetbad met kaneel of sinaasappel olie, therapeutische balsem en Thaise massage met acupressuur en stretch technieken. Keuze tussen ontspannende of therapeutische massage.",
      fullDescription:
        "Deze massage start met een warm voetbad met essentiële naar keuze kaneel of sinaasappel olie. Vervolgens worden rug, nek, shoulders, indien gewenst bilspieren, en achterkant benen ingesmeerd met een verwarmende therapeutische balsem, waardoor de acupressuur en stretch massage technieken extra functioneel worden en je spieren nog beter loskomen.|||Hierna trek je een joggingbroek en shirt of vest met lange mouwen aan volgt een Thaise massage van 60 of 90 minuten, met keuze uit een ontspannende of therapeutische massage. Bij 60 minuten betekent dat voeten, benen, armen, handen, achterkant benen, bilspieren, rug, nek, en shoulders en als afsluiter een zittende houding waarin je shoulders gestrekt en gemasseerd worden.|||Bij 90 minuten wordt zijligging toegevoegd en krijg je ook een hoofdmassage. In overleg is de inhoud persoonlijk af te stemmen.",
      prices: [
        { duration: "60 min", price: "€ 62,50" },
        { duration: "90 min", price: "€ 82,50" },
      ],
    },
  ],
  A2 = [
    {
      id: "antistress",
      title: "Antistress massage",
      subtitle: "Tafel",
      description:
        "Ontspannende massage met focus op rug, nek, schouders, handen, voeten en hoofd. In overleg bepalen we waar jij het meest behoefte aan hebt. Inclusief miniflesje anti-stress olie om mee naar huis te nemen.",
      fullDescription:
        "Deze ontspannen massages hebben het zwaartepunt in delen van het lichaam die het meest baat hebben bij ontspanning, te weten uiteraard de rug, nek en schouders maar ook de handen, voeten en het hoofd. In overleg bepalen we ter plaatse waar jij op dat moment het meest behoefte aan hebt om tot een diepe ontspanning te komen. Na afloop krijg je een miniflesje massageolie met anti stress essentiële olie mee naar huis om het thuis nog eens over te kunnen doen ter overbrugging naar je volgende massage!",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "thai-western",
      title: "Thai Western massage",
      subtitle: "Mat & Tafel",
      description:
        "Combinatie van mat en tafel: voetbad, yogastretches op mat voor benen, heupen en rug, vervolgens massage op tafel van rug, nek, schouders en hoofd. Zowel ontspannend als therapeutisch.",
      fullDescription:
        "Na je voetbad wordt er bij 90 minuten gestart op de mat, waarbij je armen, handen, voeten, benen en rug gemasseerd worden in combinatie met yogastretches voor benen, heupen en rug, waarna de massage vervolgd wordt op de massagetafel en de rug, nek, schouders en hoofd gemasseerd worden. Deze massage is zowel ontspannend, therapeutisch als gecombineerd in te zetten.",
      prices: [
        { duration: "90 min", price: "€ 82,50" },
        { duration: "120 min", price: "€ 100,-" },
      ],
      tag: "Meest geboekt",
    },
    {
      id: "combi-thai-reflexologie",
      title: "Combi Thaise yogamassage en voetreflexologie",
      subtitle: "Mat",
      description:
        "Thaise yogamassage met 15-20 minuten voetreflexologie voor preventie en opsporing van aandoeningen. Warm voetenbad en kopje kruiden- of vruchtenthee. Bij 90 minuten hele lichaam en meer tijd per onderdeel.",
      fullDescription:
        "Heerlijke Thaise yogamassage met ongeveer 15 a 20 minuten voetreflexologie waarbij de belangrijkste reflexzones gestimuleerd worden ter opsporing en preventie van diverse aandoeningen en de rest Thaise yogamassage van de benen, armen, rug, handen, nek en schouders. Het arrangement start met een warm voetenbad. Bij 90 minuten komt het hele lichaam aan bod en is er meer tijd per onderdeel. Tijdens je voetbad geniet je van een kopje kruiden- of vruchtenthee naar keuze.",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "indian-summer",
      title: "Indian summer arrangement",
      subtitle: "Tafel",
      description:
        "Start met voetenbad en kopje kruiden- of vruchtenthee, daarna stevige scrub van rug en achterkant benen. Gevolgd door massage naar keuze: stevige of ontspannende. Bij 90 minuten hele lichaam.",
      fullDescription:
        "Dit arrangement start met een kort voetenbad met een kopje kruiden- of vruchtenthee naar keuze en daarna stevige scrub van de rug en achterkant van de benen. Hierna volgt een stevige of ontspannende (naar keuze) massage van de rug, nek en schouders en de achterkant van de benen en indien nodig/gewenst ook de bilspieren, en in rugligging naar keuze hoofd of voeten. Bij 90 minuten wordt het hele lichaam gemasseerd.",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "samui-zwangerschap",
      title: "Samui zwangerschapsarrangement",
      subtitle: "Tafel of Mat",
      description:
        "Speciaal ontworpen voor zwangeren (maar ook voor anderen): lavendelvoetbad met kruidenthee, ontspannende massage van hoofd, gezicht, nek, schouders, armen en voeten in veilige positie. Bij 90 minuten ook rug en benen in stabiele zijligging.",
      fullDescription:
        "Deze massage speciaal voor zwangeren (maar ook te boeken als je dat niet bent) start met een kort maar heerlijk warm voetenbad met wat lavendelolie om even heerlijk tot rust te komen, met een lekker kopje kruidenthee naar keuze erbij. Hierna volgt een ontspannende massage van het hoofd en de hoofdhuid, gezicht, nek en schouders in rugligging, gevolgd door een massage van de armen en handen en ter afsluiting de voeten. Er wordt gebruik gemaakt van een essentiële Aziatische bloemenolie naar keuze voor een heerlijke, oosterse geur met bijpassende muziek. Deze massage is heel geschikt voor onder andere zwangeren die niet meer op hun buik kunnen liggen. Bij 90 minuten wordt ook de rug en de benen gemasseerd, voor een zwangere gebeurt dit op de zij in stabiele zijligging op de prettig brede tafel, ondersteund door kussens.",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
  ];
function E2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Arrangementen.tsx:148",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Arrangementen.tsx:149" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Arrangementen.tsx:152",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:154",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:155",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:156",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Arrangementen & Acties",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:159",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Speciale combinaties en aanbiedingen voor een unieke ervaring",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:166",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:167",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:168",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Acties",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:171",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: N2.map(s =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Arrangementen.tsx:173",
                        title: s.title,
                        subtitle: s.subtitle,
                        description: s.description,
                        fullDescription: s.fullDescription,
                        prices: s.prices,
                        note: s.note,
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:188",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:189",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:190",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Seizoen Arrangementen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:193",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: S2.map(s =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Arrangementen.tsx:195",
                        title: s.title,
                        subtitle: s.subtitle,
                        description: s.description,
                        fullDescription: s.fullDescription,
                        prices: s.prices,
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:209",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:210",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:211",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Vaste Arrangementen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:214",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: A2.map(s =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Arrangementen.tsx:216",
                        title: s.title,
                        subtitle: s.subtitle,
                        description: s.description,
                        fullDescription: s.fullDescription,
                        prices: s.prices,
                        tag: s.tag,
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:231",
            className: "py-12 bg-white",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:232",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Arrangementen.tsx:233",
                className: "text-center",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Arrangementen.tsx:234",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Vragen over arrangementen?",
                  }),
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Arrangementen.tsx:237",
                    className: "font-body text-lg mb-8",
                    style: { color: "#6B6560" },
                    children:
                      "Neem contact op voor meer informatie of om een arrangement naar wens samen te stellen.",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Arrangementen.tsx:240",
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Arrangementen.tsx:241",
                        href: `tel:${go}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(sn, {
                            "data-loc":
                              "client/src/pages/Arrangementen.tsx:246",
                            size: 18,
                          }),
                          go,
                        ],
                      }),
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Arrangementen.tsx:249",
                        href: `mailto:${po}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(ln, {
                            "data-loc":
                              "client/src/pages/Arrangementen.tsx:254",
                            size: 18,
                          }),
                          po,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/Arrangementen.tsx:264",
        className: "bg-white border-t",
        style: { borderColor: "rgba(198,156,109,0.15)" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Arrangementen.tsx:265",
          className: "container py-12",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:266",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:267",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:268",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Navigatie",
                    }),
                    o.jsxs("nav", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:271",
                      className: "space-y-2",
                      children: [
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:272",
                          href: "/",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Home",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:275",
                          href: "/behandelingen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Behandelingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:278",
                          href: "/over-mij",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Over Mij",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:281",
                          href: "/arrangementen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Arrangementen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:284",
                          href: "/workshops",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Workshops & Opleidingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:287",
                          href: "/personal-training",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Personal Training",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:290",
                          href: "/contact",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Contact",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:296",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:297",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:300",
                      className: "space-y-2",
                      children: [
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Arrangementen.tsx:301",
                          href: `tel:${go}`,
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: go,
                        }),
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Arrangementen.tsx:304",
                          href: `mailto:${po}`,
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: po,
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:310",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:311",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Informatie",
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Arrangementen.tsx:314",
                      href: "/info",
                      className: "block font-body text-sm hover:underline",
                      style: { color: "#6B6560" },
                      children: "Algemene Informatie",
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:320",
              className: "border-t pt-8 text-center",
              style: { borderColor: "rgba(198,156,109,0.15)" },
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Arrangementen.tsx:321",
                className: "font-body text-sm",
                style: { color: "#8DA089" },
                children: "© 2024 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const go = "06-42874405",
  po = "balanergy@hotmail.com",
  k2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  T2 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";
function O2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/OverMij.tsx:16",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/OverMij.tsx:17" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/OverMij.tsx:20",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:22",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:23",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/OverMij.tsx:24",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Wie is Balanergy?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/OverMij.tsx:27",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Ontmoet Mascha Kwakkel, masseuse en oprichter van Balanergy",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:34",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:35",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:36",
                className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start",
                children: [
                  o.jsx("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:37",
                    className: "order-2 md:order-1",
                    children: o.jsx("img", {
                      "data-loc": "client/src/pages/OverMij.tsx:38",
                      src: T2,
                      alt: "Mascha Kwakkel",
                      className: "rounded-lg shadow-sm w-full h-auto",
                      style: { marginTop: "-75px" },
                    }),
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:45",
                    className: "order-1 md:order-2",
                    style: { marginTop: "-80px" },
                    children: [
                      o.jsx("h2", {
                        "data-loc": "client/src/pages/OverMij.tsx:46",
                        className: "font-display text-3xl font-bold mb-6",
                        style: { color: "#3E3A37" },
                        children: "Balanergy is Mascha Kwakkel",
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:49",
                        className:
                          "space-y-4 font-body text-base leading-relaxed",
                        style: { color: "#6B6560" },
                        children: [
                          o.jsx("p", {
                            "data-loc": "client/src/pages/OverMij.tsx:50",
                            children:
                              "Even voorstellen: Ik ben Mascha Kwakkel en woon met mijn man en kinderen in IJsselmuiden. Na jaren van leidinggevende- en coachende functies, wilde ik een andere kant van mezelf verder ontwikkelen waardoor ik meer op- en vanuit mijn gevoel kon werken. Dat werd iets wat ik al jaren graag ontving én gaf, vanuit de filosofie dat aanraking helend werkt: massage!",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/OverMij.tsx:53",
                            children:
                              "En wat gaat er vervolgens een wereld voor je open, want er is zo ontzettend veel mogelijk in de wondere wereld die massage heet! Ik ben begonnen bij de basis, met een opleiding klassieke ontspanningsmassage en het leren behandelen van specifieke klachten. Daarna volgde als snel voetreflexologie en de moeder aller massages, wat mij betreft: Traditionele Thaise yogamassage!",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:63",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:64",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:65",
                className: "max-w-3xl",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/OverMij.tsx:66",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Mijn Opleiding in Chiang Mai",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:69",
                    className: "space-y-4 font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:70",
                        children:
                          'Na vele jaren van deze verrukkelijke massages ondergaan in de 7 keer dat ik Thailand bezocht heb, wilde ik van deze eeuwenoude, helende, veelzijdige massage mijn "signature dish" maken. Ik heb de stoute schoenen aangetrokken en ben naar Chiang Mai, Thailand gereisd voor een opleiding Nuad Boran bij de internationale school ITM Chiang Mai. Het was enorm bijzonder om dit helemaal alleen te doen.',
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:73",
                        children:
                          "Alles kwam uiteindelijk bij elkaar met het besluit Balanergy op te richten, waarbij elke behandeling zich richt op een hernieuwde balans in jouw energie en tot rust komen, en waar alle elementen van functioneel, aangenaam, breed holistisch en esthetiek bij elkaar komen.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:82",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:83",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:84",
                className: "max-w-3xl",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/OverMij.tsx:85",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Mijn Filosofie",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:88",
                    className: "space-y-4 font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:89",
                        children:
                          "Mijn missie is daar waar ik kan helpen met helen. Ik werk holistisch: ik maak een inschatting van wie je bent, hoe je in elkaar zit, wat je thema's zijn en wat je uitstraalt — en pas per keer mijn behandeling daar op aan. Anderzijds kijk ik naar het totaalplaatje van spieren, pezen en bindweefsel, en integreer ik zenuwstelselkalmering, leefstijladviezen en omgaan met stress en mental load.",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:92",
                        children:
                          "Bij Balanergy sta jij centraal, met waar jij en jouw lijf op dat moment behoefte aan hebben. Ik bied een scala aan massages en personal yoga training in allerlei vormen, waardoor er altijd wel een is die op dit moment bij jou past.",
                      }),
                      o.jsx("blockquote", {
                        "data-loc": "client/src/pages/OverMij.tsx:95",
                        className: "italic text-lg py-4 px-6 rounded",
                        style: {
                          backgroundColor: "rgba(198,156,109,0.1)",
                          borderLeft: "4px solid #C69C6D",
                          color: "#3E3A37",
                        },
                        children:
                          '"Gun jezelf een stuk heling, ontspanning en herstel."',
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:107",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:108",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/OverMij.tsx:109",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Mijn Opleidingen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:112",
                  className: "bg-white p-8 rounded-lg shadow-sm",
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:113",
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:114",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/OverMij.tsx:115",
                            className: "font-display text-lg font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Thaise Massage & Voetreflexologie",
                          }),
                          o.jsxs("ul", {
                            "data-loc": "client/src/pages/OverMij.tsx:118",
                            className: "space-y-2 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:119",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:120",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:121",
                                    children:
                                      "2018 – Docentenopleiding Thaise Yogamassage Gevorderden",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:123",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:124",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:125",
                                    children:
                                      "2018 – Docentenopleiding Voetreflexologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:127",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:128",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:129",
                                    children:
                                      "2018 – Thaise Kruidenstempelmassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:131",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:132",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:133",
                                    children:
                                      "2016 – Docentenopleiding Thaise Yogamassage Beginners",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:135",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:136",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:137",
                                    children:
                                      "2016 – Opleiding Sen (Energielijnen)",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:139",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:140",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:141",
                                    children:
                                      "2015 – Basis en Gevorderden Opleiding Thaise Yogamassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:143",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:144",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:145",
                                    children:
                                      "2015 – Opleiding Thaise Voetreflexologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:147",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:148",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:149",
                                    children:
                                      "2015 – Opleiding Therapeutische Yogamassage",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:153",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/OverMij.tsx:154",
                            className: "font-display text-lg font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Yoga, Coaching & Specialisaties",
                          }),
                          o.jsxs("ul", {
                            "data-loc": "client/src/pages/OverMij.tsx:157",
                            className: "space-y-2 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:158",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:159",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:160",
                                    children: "2023 – Triggerpointherapie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:162",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:163",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:164",
                                    children: "2022 – Sportmassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:166",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:167",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:168",
                                    children: "2021 – Beweegcoach",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:170",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:171",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:172",
                                    children: "2021 – Trainingsleer",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:174",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:175",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:176",
                                    children: "2021 – Inspanningsfysiologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:178",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:179",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:180",
                                    children: "2021 – Functionele Anatomie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:182",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:183",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:184",
                                    children:
                                      "2019 – Docentenopleiding Power Yoga 2",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:186",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:187",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:188",
                                    children:
                                      "2018 – Docentenopleiding Power Yoga 1",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:190",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:191",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:192",
                                    children:
                                      "2015 – Docentenopleiding Kinderyoga",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:194",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:195",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:196",
                                    children:
                                      "2014 – Basisopleiding Ontspanningsmassage & Klachtgerichte Massage",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:206",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:207",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/OverMij.tsx:208",
                  className: "font-display text-2xl font-bold mb-4",
                  style: { color: "#3E3A37" },
                  children: "Klaar om kennis te maken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/OverMij.tsx:211",
                  className: "font-body text-lg mb-6",
                  style: { color: "#6B6560" },
                  children:
                    "Boek je eerste behandeling en ervaar zelf de Balanergy filosofie",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/OverMij.tsx:214",
                  href: k2,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                  style: { backgroundColor: "#8DA089" },
                  children: "BOEK JE AFSPRAAK",
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/OverMij.tsx:228",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/OverMij.tsx:229",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:230",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:231",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/OverMij.tsx:232",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/OverMij.tsx:233",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:237",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/OverMij.tsx:238",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/OverMij.tsx:239",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:240",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:240",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:241",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:241",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:242",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:242",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:243",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:243",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:244",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:244",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:245",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:245",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:246",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:246",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:249",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/OverMij.tsx:250",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/OverMij.tsx:251",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/OverMij.tsx:252",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/OverMij.tsx:253",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/OverMij.tsx:254",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/OverMij.tsx:256",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/OverMij.tsx:257",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/OverMij.tsx:258",
                              href: "mailto:balanergy@hotmail.com",
                              className: "opacity-80 hover:opacity-100",
                              children: "balanergy@hotmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:263",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/OverMij.tsx:264",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const C2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
function z2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Contact.tsx:15",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Contact.tsx:16" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Contact.tsx:19",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Contact.tsx:21",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:22",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Contact.tsx:23",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Contact & Locatie",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Contact.tsx:26",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children: "Kom langs in IJsselmuiden of neem contact op",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Contact.tsx:33",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:34",
              className: "container",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:35",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
                  children: [
                    o.jsx("div", {
                      "data-loc": "client/src/pages/Contact.tsx:37",
                      className: "bg-white p-8 rounded-lg shadow-sm",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:38",
                        className: "flex items-start gap-4 mb-4",
                        children: [
                          o.jsx(k1, {
                            "data-loc": "client/src/pages/Contact.tsx:39",
                            size: 32,
                            style: { color: "#8DA089" },
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:40",
                            children: [
                              o.jsx("h3", {
                                "data-loc": "client/src/pages/Contact.tsx:41",
                                className:
                                  "font-display text-xl font-bold mb-2",
                                style: { color: "#3E3A37" },
                                children: "Adres",
                              }),
                              o.jsxs("p", {
                                "data-loc": "client/src/pages/Contact.tsx:44",
                                className: "font-body text-base",
                                style: { color: "#6B6560" },
                                children: [
                                  "Kreeft 45",
                                  o.jsx("br", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:45",
                                  }),
                                  "8271KL IJsselmuiden",
                                  o.jsx("br", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:46",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:47",
                                    className: "text-sm opacity-80",
                                    children:
                                      "(Centraal tussen Kampen en Zwolle)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    o.jsx("div", {
                      "data-loc": "client/src/pages/Contact.tsx:56",
                      className: "bg-white p-8 rounded-lg shadow-sm",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:57",
                        className: "flex items-start gap-4 mb-4",
                        children: [
                          o.jsx(sn, {
                            "data-loc": "client/src/pages/Contact.tsx:58",
                            size: 32,
                            style: { color: "#8DA089" },
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:59",
                            children: [
                              o.jsx("h3", {
                                "data-loc": "client/src/pages/Contact.tsx:60",
                                className:
                                  "font-display text-xl font-bold mb-2",
                                style: { color: "#3E3A37" },
                                children: "Telefoon",
                              }),
                              o.jsx("a", {
                                "data-loc": "client/src/pages/Contact.tsx:63",
                                href: "tel:0642874405",
                                className:
                                  "font-body text-base font-semibold hover:opacity-70",
                                style: { color: "#8DA089" },
                                children: "06-42874405",
                              }),
                              o.jsx("p", {
                                "data-loc": "client/src/pages/Contact.tsx:70",
                                className: "font-body text-sm mt-2",
                                style: { color: "#6B6560" },
                                children: "Ook bereikbaar via WhatsApp",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    o.jsx("div", {
                      "data-loc": "client/src/pages/Contact.tsx:78",
                      className: "bg-white p-8 rounded-lg shadow-sm",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:79",
                        className: "flex items-start gap-4 mb-4",
                        children: [
                          o.jsx(ln, {
                            "data-loc": "client/src/pages/Contact.tsx:80",
                            size: 32,
                            style: { color: "#8DA089" },
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:81",
                            children: [
                              o.jsx("h3", {
                                "data-loc": "client/src/pages/Contact.tsx:82",
                                className:
                                  "font-display text-xl font-bold mb-2",
                                style: { color: "#3E3A37" },
                                children: "E-mail",
                              }),
                              o.jsx("a", {
                                "data-loc": "client/src/pages/Contact.tsx:85",
                                href: "mailto:balanergy@hotmail.com",
                                className:
                                  "font-body text-base font-semibold hover:opacity-70",
                                style: { color: "#8DA089" },
                                children: "balanergy@hotmail.com",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Contact.tsx:98",
                  className: "bg-white p-8 rounded-lg shadow-sm mb-12",
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/Contact.tsx:99",
                    className: "flex items-start gap-4 mb-4",
                    children: [
                      o.jsx(N1, {
                        "data-loc": "client/src/pages/Contact.tsx:100",
                        size: 32,
                        style: { color: "#8DA089" },
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:101",
                        className: "flex-1",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Contact.tsx:102",
                            className: "font-display text-xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Openingstijden",
                          }),
                          o.jsxs("p", {
                            "data-loc": "client/src/pages/Contact.tsx:105",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsx("strong", {
                                "data-loc": "client/src/pages/Contact.tsx:106",
                                children: "Op afspraak",
                              }),
                              " — Bekijk de online agenda voor beschikbaarheid.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Contact.tsx:113",
                  className: "bg-white p-8 rounded-lg shadow-sm",
                  style: { backgroundColor: "rgba(141,160,137,0.05)" },
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/Contact.tsx:114",
                    className: "flex items-start gap-4 mb-4",
                    children: [
                      o.jsx(y1, {
                        "data-loc": "client/src/pages/Contact.tsx:115",
                        size: 32,
                        style: { color: "#8DA089" },
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:116",
                        className: "flex-1",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Contact.tsx:117",
                            className: "font-display text-xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Afspraken Maken",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:120",
                            className: "space-y-4 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsx("p", {
                                "data-loc": "client/src/pages/Contact.tsx:121",
                                children: "Afspraken kunt u inboeken via:",
                              }),
                              o.jsxs("ul", {
                                "data-loc": "client/src/pages/Contact.tsx:124",
                                className: "space-y-3 ml-4",
                                children: [
                                  o.jsx("li", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:125",
                                    children:
                                      "✓ Online agenda (direct beschikbaarheid zien)",
                                  }),
                                  o.jsxs("li", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:126",
                                    children: [
                                      "✓ Telefonisch/app: ",
                                      o.jsx("a", {
                                        "data-loc":
                                          "client/src/pages/Contact.tsx:126",
                                        href: "tel:0642874405",
                                        className:
                                          "font-semibold hover:opacity-70",
                                        style: { color: "#8DA089" },
                                        children: "06-42874405",
                                      }),
                                    ],
                                  }),
                                  o.jsxs("li", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:127",
                                    children: [
                                      "✓ Via mail: ",
                                      o.jsx("a", {
                                        "data-loc":
                                          "client/src/pages/Contact.tsx:127",
                                        href: "mailto:balanergy@hotmail.com",
                                        className:
                                          "font-semibold hover:opacity-70",
                                        style: { color: "#8DA089" },
                                        children: "balanergy@hotmail.com",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              o.jsxs("p", {
                                "data-loc": "client/src/pages/Contact.tsx:129",
                                className: "mt-4",
                                children: [
                                  o.jsx("strong", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:130",
                                    children: "Tip:",
                                  }),
                                  " Heb je een specifieke voorkeur voor een dag of tijdstip? Plan dan bij voorkeur minimaal twee afspraken vooruit.",
                                ],
                              }),
                              o.jsxs("p", {
                                "data-loc": "client/src/pages/Contact.tsx:132",
                                className: "text-sm opacity-80 mt-4",
                                children: [
                                  o.jsx("strong", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:133",
                                    children: "Let op:",
                                  }),
                                  " Afspraken die minder dan 24 uur van tevoren worden afgezegd, worden ongeacht de reden in rekening gebracht. Betalen kan contant, via Tikkie of per factuur.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Contact.tsx:143",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:144",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Contact.tsx:145",
                  className: "font-display text-2xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Onze Locatie",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Contact.tsx:148",
                  className: "w-full h-96 rounded-lg shadow-sm overflow-hidden",
                  children: o.jsx("iframe", {
                    "data-loc": "client/src/pages/Contact.tsx:149",
                    width: "100%",
                    height: "100%",
                    style: { border: 0 },
                    loading: "lazy",
                    allowFullScreen: !0,
                    referrerPolicy: "no-referrer-when-downgrade",
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8649999999998!2d5.9!3d52.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7e5e5e5e5e5e5%3A0x0!2sKreeft%2045%2C%208271%20KL%20IJsselmuiden!5e0!3m2!1snl!2snl!4v1234567890",
                  }),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Contact.tsx:163",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:164",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Contact.tsx:165",
                  className: "font-display text-2xl font-bold mb-4",
                  style: { color: "#3E3A37" },
                  children: "Klaar om je afspraak in te boeken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Contact.tsx:168",
                  className: "font-body text-lg mb-6",
                  style: { color: "#6B6560" },
                  children: "Bekijk de beschikbaarheid en boek direct online",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/Contact.tsx:171",
                  href: C2,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                  style: { backgroundColor: "#8DA089" },
                  children: "ONLINE AGENDA",
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/Contact.tsx:185",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Contact.tsx:186",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:187",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:188",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Contact.tsx:189",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Contact.tsx:190",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:194",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Contact.tsx:195",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Contact.tsx:196",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:197",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:197",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:198",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:198",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:199",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:199",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:200",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:200",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:201",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:201",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:202",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:202",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:203",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:203",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:206",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Contact.tsx:207",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Contact.tsx:208",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Contact.tsx:209",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/Contact.tsx:210",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Contact.tsx:211",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Contact.tsx:213",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/Contact.tsx:214",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Contact.tsx:215",
                              href: "mailto:balanergy@hotmail.com",
                              className: "opacity-80 hover:opacity-100",
                              children: "balanergy@hotmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/Contact.tsx:220",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Contact.tsx:221",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const ho = "06-42874405",
  xo = "balanergy@hotmail.com",
  M2 = [
    {
      id: "ontspanning-hoofd",
      title: "Workshop ontspanningsmassage hoofd, handen en voeten",
      subtitle: "Workshop",
      description: "Leer de belangrijkste grepen en technieken.",
      fullDescription:
        "Je leert in vogelvlucht de belangrijkste grepen en technieken voor ontspanningsmassage van hoofd, handen en voeten, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.",
      prices: [
        { duration: "2 uur", price: "€75 per persoon / €140 voor 2 personen" },
      ],
    },
    {
      id: "ontspanning-heel",
      title: "Workshop ontspanningsmassage hele lichaam",
      subtitle: "Workshop",
      description:
        "Leer de belangrijkste grepen en technieken voor het hele lichaam.",
      fullDescription:
        "Je leert in vogelvlucht de belangrijkste grepen en technieken voor ontspanningsmassage van het hele lichaam, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.",
      prices: [{ duration: "5-6 uur", price: "€225 per persoon" }],
    },
    {
      id: "klachtgerichte",
      title: "Workshop klachtgerichte/sport massage",
      subtitle: "Workshop",
      description: "Leer klachtgerichte massage voor specifieke lichaamsdelen.",
      fullDescription: `Je leert in vogelvlucht de belangrijkste grepen en technieken voor klacht gerichte massage van de nek, shoulders, rug en bil- en bekkenspierenovenbenenen achterkant, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.

Geef bij je boeking duidelijk aan of de workshop voor 1 of 2 personen moet worden. Indien je alleen komt, dan neem je een model mee op wie je kunt oefenen.`,
      prices: [
        {
          duration: "3-3,5 uur",
          price: "€125 per persoon / €225 voor 2 personen",
        },
      ],
    },
  ],
  D2 = [
    {
      id: "thaise-level1",
      title: "Volledige opleiding Thaise yogamassage level 1",
      subtitle: "Opleiding",
      description: "Wil je Thaise yogamassage leren?",
      fullDescription: `Wil je Thaise yogamassage leren? Dat kan in duo's (of eventueel alleen, dan neem je een model mee), door de opleiding BalaneryThai Yoga massage te doen, volgens de principes en leermethoden van ITM Chiangmai. Iedereen kan zich aanmelden, zowel leken als (ervaren) masseurs.

De opleiding certificeert je om daarna in te stromen op level 2, het gevorderden level met nog meer houdingenm.|||Wat leer je? 64 basisposities van Thaise yogamassage level 1, voorkant posities van voeten tot gezicht, de belangrijkste energielijnen (Sen lijnen), stretches en acupressuur punten, diepe buikmassage (Hara werk), en het juiste gebruik van je lichaamgewicht.|||Wat krijg je? Een duidelijk lesboek, praktijkexamen met internationale certificering, 6 lessen van 2,5-3 uur in overleg, gratis Thaise yogamassage van 60 minuten, onbeperkt water en kruidenthee, en onbeperkte mogelijkheid tot vragen stellen na de opleiding.`,
      prices: [
        { duration: "6 lessen van 2,5-3 uur", price: "€699 per persoon" },
      ],
    },
    {
      id: "klachtgerichte-opleiding",
      title: "Volledige opleiding klachtgerichte massage",
      subtitle: "Opleiding",
      description: "Professionele klachtgerichte massagetraining.",
      fullDescription: `Volledige opleiding klachtgerichte massage, 7-8 ochtenden of middagen van 2 weekenddagen, dagdelen in overleg.

Kennismaking, inventarisatie kennis niveau, persoonlijke doelen, massage basics, do's and don'ts, contra indicaties, anamnesegespreken formulier, werkhouding, en uitgebreide anatomie van de belangrijkste botten en spieren.|||Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd, voeten, buik en borst, met herhalingsles en gelegenheid tot extra oefenen.

Afsluitend praktijkexamen, inclusief massageboek en diploma. Aan het einde heb je alles in huis om zelf een praktijk te gaan starten, inclusief gratis klachtgerichte massage van een uur!`,
      prices: [
        { duration: "7-8 ochtenden of middagen", price: "€650 per persoon" },
      ],
    },
    {
      id: "ontspanning-volledig",
      title: "Volledige opleiding ontspanningsmassage",
      subtitle: "Opleiding",
      description: "Volledige ontspanningsmassagetraining.",
      fullDescription: `Volledige opleiding ontspanningsmassage, 7-8 ochtenden of middagen van ongeveer 3-3,5 uur of 2 weekenddagen, dagdelen in overleg.

Kennismaking, inventarisatie kennis niveau, persoonlijke doelen, massage basics, do's and don'ts, contra-indicaties, werkhouding, en globale anatomie van de belangrijkste botten en spieren.

Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd en voeten, met herhalingsles en gelegenheid tot extra oefenen.

Afsluitend praktijkexamen, inclusief massageboek en diploma. Aan het einde heb je alles in huis om zelf een praktijk te gaan starten, inclusief gratis ontspanningsmassage van een uur!`,
      prices: [
        { duration: "7-8 ochtenden of middagen", price: "€650 per persoon" },
      ],
    },
  ];
function _2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Workshops.tsx:81",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Workshops.tsx:82" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Workshops.tsx:85",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:87",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:88",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Workshops.tsx:89",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Workshops & Opleidingen",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Workshops.tsx:92",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Leer massagetechnieken van een professioneel therapeut",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:99",
            className: "py-12",
            style: { marginTop: "-80px" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:100",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Workshops.tsx:101",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Workshops",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Workshops.tsx:104",
                  className: "font-body text-lg mb-8",
                  style: { color: "#6B6560" },
                  children:
                    "Onze workshops zijn korte, intensieve trainingen waarin je de basisprincipes en technieken van massage leert. Ze zijn perfect voor beginners die hun eerste stappen in de massagewereld willen zetten, maar ook een waardevolle aanvulling voor ervaren therapeuten die hun vaardigheden willen uitbreiden. Alle workshops zijn beschikbaar voor 1 of 2 personen. Indien je alleen komt, neem je een model mee om op te oefenen. Elke workshop eindigt met een handout met alle grepen en basale kennis om mee naar huis te nemen.",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:107",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: M2.map(s =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Workshops.tsx:109",
                        title: s.title,
                        subtitle: s.subtitle,
                        description: s.description,
                        fullDescription: s.fullDescription,
                        prices: s.prices,
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:123",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:124",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Workshops.tsx:125",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Volledige Opleidingen",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Workshops.tsx:128",
                  className: "font-body text-lg mb-8",
                  style: { color: "#6B6560" },
                  children:
                    "Onze volledige opleidingen zijn professionele trainingen met internationale certificering. Ze zijn ontworpen voor iedereen die een massagepraktijk wil starten of hun vaardigheden en kennis dieper wil verdiepen. Of je nu een beginner bent of al ervaring hebt, je leert alles wat je nodig hebt om zelfstandig te werken. Elke opleiding bevat theoretische kennis, praktische training, een praktijkexamen en een diploma. Daarnaast krijg je een gratis massagebehandeling en heb je onbeperkte mogelijkheid tot vragen stellen na de opleiding.",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:131",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: D2.map(s =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Workshops.tsx:133",
                        title: s.title,
                        subtitle: s.subtitle,
                        description: s.description,
                        fullDescription: s.fullDescription,
                        prices: s.prices,
                      },
                      s.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:147",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Workshops.tsx:148",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Workshops.tsx:149",
                className: "text-center",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Workshops.tsx:150",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Meer informatie?",
                  }),
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Workshops.tsx:153",
                    className: "font-body text-lg mb-8",
                    style: { color: "#6B6560" },
                    children:
                      "Heb je vragen over de workshops of opleidingen? Neem contact met ons op! We helpen je graag bij het kiezen van de juiste opleiding voor jouw doelen.",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Workshops.tsx:156",
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Workshops.tsx:157",
                        href: `tel:${ho}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(sn, {
                            "data-loc": "client/src/pages/Workshops.tsx:162",
                            size: 18,
                          }),
                          ho,
                        ],
                      }),
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Workshops.tsx:165",
                        href: `mailto:${xo}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(ln, {
                            "data-loc": "client/src/pages/Workshops.tsx:170",
                            size: 18,
                          }),
                          xo,
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/Workshops.tsx:180",
        className: "bg-white border-t",
        style: { borderColor: "rgba(198,156,109,0.15)" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Workshops.tsx:181",
          className: "container py-12",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:182",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:183",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Workshops.tsx:184",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Navigatie",
                    }),
                    o.jsxs("nav", {
                      "data-loc": "client/src/pages/Workshops.tsx:187",
                      className: "space-y-2",
                      children: [
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:188",
                          href: "/",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Home",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:191",
                          href: "/behandelingen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Behandelingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:194",
                          href: "/over-mij",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Over Mij",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:197",
                          href: "/arrangementen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Arrangementen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:200",
                          href: "/workshops",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Workshops & Opleidingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:203",
                          href: "/personal-training",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Personal Training",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:206",
                          href: "/contact",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Contact",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:212",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Workshops.tsx:213",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Workshops.tsx:216",
                      className: "space-y-2",
                      children: [
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Workshops.tsx:217",
                          href: `tel:${ho}`,
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: ho,
                        }),
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Workshops.tsx:220",
                          href: `mailto:${xo}`,
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: xo,
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:226",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Workshops.tsx:227",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Informatie",
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Workshops.tsx:230",
                      href: "/info",
                      className: "block font-body text-sm hover:underline",
                      style: { color: "#6B6560" },
                      children: "Algemene Informatie",
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/Workshops.tsx:236",
              className: "border-t pt-8 text-center",
              style: { borderColor: "rgba(198,156,109,0.15)" },
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Workshops.tsx:237",
                className: "font-body text-sm",
                style: { color: "#8DA089" },
                children: "© 2024 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const bh = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  vo = "06-42874405",
  yo = "balanergy@hotmail.com",
  B2 = [
    "Yoga of Body Balance op individueel afgestemde manier",
    "Leren welke houdingen bij jouw lichaam passen",
    "Directe feedback en correctie op je practice",
    "Specifieke fysieke of mentale doelen bereiken",
    "1 op 1 begeleiding in houding en ademhaling",
    "Voor beginners en gevorderden",
  ],
  R2 = [
    {
      title: "1 Losse Les",
      subtitle: "Personal Techniektraining, Yoga of Body Balance",
      duration: "60 minuten",
      price: "€39,-",
      description:
        "Eenmalige sessie voor kennismaking of aanvulling op je reguliere training.",
    },
    {
      title: "Serie van 2 Lessen",
      subtitle: "Personal Training",
      duration: "2 × 60 minuten",
      price: "€76,-",
      description:
        "Korte serie om je training op gang te brengen met persoonlijke begeleiding.",
    },
    {
      title: "Serie van 4 Lessen",
      subtitle: "Personal Training",
      duration: "4 × 60 minuten",
      price: "€150,-",
      description:
        "Volledige introductie met voortgang en aanpassingen naar jouw niveau.",
    },
    {
      title: "Serie van 6 Lessen",
      subtitle: "Personal Training",
      duration: "6 × 60 minuten",
      price: "€230,-",
      description:
        "Uitgebreide training met diepere focus op technieken en doelstellingen.",
    },
  ];
function H2({ title: s, subtitle: c, duration: u, price: r, description: f }) {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/PersonalTraining.tsx:58",
    className: "bg-white rounded-lg shadow-sm p-6 flex flex-col h-full",
    children: [
      o.jsxs("div", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:59",
        className: "mb-4",
        children: [
          o.jsx("h3", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:60",
            className: "font-display text-lg font-bold mb-1",
            style: { color: "#3E3A37" },
            children: s,
          }),
          o.jsx("p", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:63",
            className: "font-body text-xs font-semibold",
            style: { color: "#8DA089" },
            children: c,
          }),
        ],
      }),
      o.jsx("p", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:67",
        className: "font-body text-sm leading-relaxed mb-4 flex-1",
        style: { color: "#6B6560" },
        children: f,
      }),
      o.jsx("div", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:70",
        className: "border-t my-4",
        style: { borderColor: "rgba(141,160,137,0.2)" },
      }),
      o.jsxs("div", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:71",
        className: "flex justify-between items-center mb-4",
        children: [
          o.jsx("span", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:72",
            className: "font-body text-xs",
            style: { color: "#6B6560" },
            children: u,
          }),
          o.jsx("span", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:75",
            className: "font-display text-lg font-bold",
            style: { color: "#8DA089" },
            children: r,
          }),
        ],
      }),
      o.jsx("a", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:79",
        href: bh,
        target: "_blank",
        rel: "noopener noreferrer",
        className:
          "w-full py-2 rounded font-body text-xs font-semibold text-white text-center transition-opacity hover:opacity-90",
        style: { backgroundColor: "#8DA089" },
        children: "BOEK NU",
      }),
    ],
  });
}
function U2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/PersonalTraining.tsx:94",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/PersonalTraining.tsx:95" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:98",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:100",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:101",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:102",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Personal Training",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:105",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children: "Yoga en Body Balance op maat voor jou",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:112",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:113",
              className: "container max-w-3xl text-left",
              children: [
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:114",
                  className: "font-body text-base leading-relaxed mb-6",
                  style: { color: "#6B6560" },
                  children:
                    "Wil jij yoga of Body Balance op een individueel afgestemde manier leren? Bij Balanergy bieden we persoonlijke trainingen waarbij jij centraal staat. Of je nu beginner bent of al ervaring hebt, we passen het programma volledig aan jouw kennis, ervaring en persoonlijke doelen.",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:117",
                  className: "font-body text-base leading-relaxed",
                  style: { color: "#6B6560" },
                  children:
                    "Je krijgt 1 op 1 begeleiding met directe feedback en correctie op je practice. Alle trainingen zijn inclusief gebruik van een yogamat indien gewenst, en vinden plaats in de praktijkruimte van Balanergy.",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:124",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:125",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:126",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Waarom Personal Training?",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:129",
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: B2.map((s, c) =>
                    o.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:131",
                        className: "flex items-start gap-4",
                        children: [
                          o.jsx(w1, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:132",
                            size: 24,
                            style: { color: "#8DA089" },
                            className: "flex-shrink-0 mt-1",
                          }),
                          o.jsx("p", {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:133",
                            className: "font-body text-base",
                            style: { color: "#6B6560" },
                            children: s,
                          }),
                        ],
                      },
                      c
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:143",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:144",
              className: "container",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:145",
                  className: "flex items-center gap-3 mb-8",
                  children: [
                    o.jsx(A1, {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:146",
                      size: 24,
                      style: { color: "#C69C6D" },
                    }),
                    o.jsx("h2", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:147",
                      className: "font-display text-3xl font-bold",
                      style: { color: "#3E3A37" },
                      children: "Training Pakketten",
                    }),
                  ],
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:151",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                  children: R2.map((s, c) =>
                    o.jsx(
                      H2,
                      {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:153",
                        ...s,
                      },
                      c
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:160",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:161",
              className: "container max-w-3xl text-left",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:162",
                  className: "font-display text-2xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Hoe Werkt Het?",
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:165",
                  className: "space-y-6 mb-8",
                  children: [
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:166",
                      children: [
                        o.jsx("h3", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:167",
                          className: "font-body font-semibold text-lg mb-2",
                          style: { color: "#3E3A37" },
                          children: "Losse Lessen",
                        }),
                        o.jsx("p", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:170",
                          className: "font-body text-base",
                          style: { color: "#6B6560" },
                          children:
                            "Losse lessen in de praktijkruimte van Balanergy zijn online boekbaar via onze agenda.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:174",
                      children: [
                        o.jsx("h3", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:175",
                          className: "font-body font-semibold text-lg mb-2",
                          style: { color: "#3E3A37" },
                          children: "Trainingspakketten",
                        }),
                        o.jsx("p", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:178",
                          className: "font-body text-base",
                          style: { color: "#6B6560" },
                          children:
                            "Voor trainingspakketten of lessen op locatie, neem contact op via telefoon of email. We plannen dan samen een moment in dat bij jou past.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:182",
                      children: [
                        o.jsx("h3", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:183",
                          className: "font-body font-semibold text-lg mb-2",
                          style: { color: "#3E3A37" },
                          children: "Zakelijke Trainingen",
                        }),
                        o.jsx("p", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:186",
                          className: "font-body text-base",
                          style: { color: "#6B6560" },
                          children:
                            "Body Balance, Hatha yoga of Power Yoga lessen voor bedrijven zijn beschikbaar op aanvraag.",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:192",
                  className: "bg-yellow-50 border-l-4 p-6 mb-8",
                  style: {
                    borderColor: "#C69C6D",
                    backgroundColor: "rgba(198,156,109,0.1)",
                  },
                  children: [
                    o.jsx("p", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:193",
                      className: "font-body text-base font-semibold mb-2",
                      style: { color: "#3E3A37" },
                      children: "💡 Cadeau Idee",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:196",
                      className: "font-body text-base",
                      style: { color: "#6B6560" },
                      children:
                        "Personal Training is ook superleuk en origineel om cadeau te doen! Geef iemand de kans om op een persoonlijke manier fit en gezond te worden.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:201",
                  className: "space-y-4",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:202",
                      className: "font-body text-lg font-semibold",
                      style: { color: "#3E3A37" },
                      children: "Neem Contact Op",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:205",
                      className: "flex items-start gap-4",
                      children: [
                        o.jsx(sn, {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:206",
                          size: 20,
                          style: { color: "#8DA089" },
                          className: "mt-1 flex-shrink-0",
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:207",
                          children: [
                            o.jsx("p", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:208",
                              className: "font-body font-semibold",
                              style: { color: "#3E3A37" },
                              children: "Telefoon",
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:211",
                              href: `tel:${vo}`,
                              className: "font-body text-base",
                              style: { color: "#8DA089" },
                              children: vo,
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:216",
                      className: "flex items-start gap-4",
                      children: [
                        o.jsx(ln, {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:217",
                          size: 20,
                          style: { color: "#8DA089" },
                          className: "mt-1 flex-shrink-0",
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:218",
                          children: [
                            o.jsx("p", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:219",
                              className: "font-body font-semibold",
                              style: { color: "#3E3A37" },
                              children: "Email",
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:222",
                              href: `mailto:${yo}`,
                              className: "font-body text-base",
                              style: { color: "#8DA089" },
                              children: yo,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:232",
            className: "py-12 bg-white",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:233",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/PersonalTraining.tsx:234",
                className: "bg-yellow-50 border-l-4 p-6",
                style: {
                  borderColor: "#C69C6D",
                  backgroundColor: "rgba(198,156,109,0.1)",
                },
                children: [
                  o.jsx("p", {
                    "data-loc": "client/src/pages/PersonalTraining.tsx:235",
                    className: "font-body text-base font-semibold mb-3",
                    style: { color: "#3E3A37" },
                    children: "⚠️ Annuleringsbeleid",
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/PersonalTraining.tsx:238",
                    className: "font-body text-base leading-relaxed mb-3",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:239",
                        children: "Let op:",
                      }),
                      " Vanwege de volle agenda worden afspraken die minder dan 24 uur van tevoren worden afgezegd, ongeacht de reden, in rekening gebracht.",
                    ],
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/PersonalTraining.tsx:241",
                    className: "font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:242",
                        children: "Uitzondering:",
                      }),
                      " Wanneer je iemand anders in jouw plaats laat komen voor dezelfde tijdsduur, dan geldt dit niet.",
                    ],
                  }),
                ],
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:249",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:250",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:251",
                  className: "font-display text-3xl md:text-4xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Klaar om te beginnen?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:254",
                  className: "font-body text-lg mb-8 max-w-2xl mx-auto",
                  style: { color: "#6B6560" },
                  children:
                    "Boek je eerste les of neem contact op voor meer informatie",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:257",
                  href: bh,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                  style: { backgroundColor: "#8DA089" },
                  children: "BOEK NU",
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:271",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/PersonalTraining.tsx:272",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:273",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:274",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:275",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:276",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:280",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:281",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:282",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:283",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:283",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:284",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:284",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:285",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:285",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:286",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:286",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:287",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:287",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:288",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:288",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:289",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:289",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:292",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:293",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:294",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:295",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:296",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:297",
                              href: `tel:${vo}`,
                              className: "opacity-80 hover:opacity-100",
                              children: vo,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:299",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:300",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:301",
                              href: `mailto:${yo}`,
                              className: "opacity-80 hover:opacity-100",
                              children: yo,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:306",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/PersonalTraining.tsx:307",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const L2 = [
  {
    id: "prijzen",
    title: "Prijzen",
    description:
      "Actuele prijslijst van alle behandelingen, arrangementen en services per 1 januari 2026",
    date: "1 januari 2026",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/PrijzenBalanergyper1-1-2026_ecd9a526.pdf",
  },
  {
    id: "persoonsgegevens",
    title: "Privacyverklaring AVG",
    description: "Formulier voor het invullen van uw persoonsgegevens",
    date: "Op aanvraag",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/Uwpersoonsgegevens_01ec79e5.pdf",
  },
  {
    id: "anamnese",
    title: "Anamnese Formulier",
    description: "Gezondheids- en anamneseformulier voor nieuwe klanten",
    date: "Op aanvraag",
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/Anamneseformuliermassagetherapie_4db9c927.pdf",
  },
];
function Y2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Info.tsx:37",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Info.tsx:38" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Info.tsx:41",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Info.tsx:43",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Info.tsx:44",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Info.tsx:45",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Informatie & Documenten",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Info.tsx:48",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children: "Downloadbare documenten en formulieren",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Info.tsx:55",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Info.tsx:56",
              className: "container",
              children: o.jsx("div", {
                "data-loc": "client/src/pages/Info.tsx:57",
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: L2.map(s =>
                  o.jsxs(
                    "div",
                    {
                      "data-loc": "client/src/pages/Info.tsx:59",
                      className: "rounded-lg p-6 border transition-all",
                      style: {
                        backgroundColor: "white",
                        borderColor: "#E8DDD5",
                      },
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Info.tsx:67",
                          className: "mb-4",
                          children: [
                            o.jsx("h3", {
                              "data-loc": "client/src/pages/Info.tsx:68",
                              className: "font-display text-xl font-bold mb-2",
                              style: { color: "#3E3A37" },
                              children: s.title,
                            }),
                            o.jsx("p", {
                              "data-loc": "client/src/pages/Info.tsx:71",
                              className: "font-body text-sm leading-relaxed",
                              style: {
                                color: "#6B6560",
                                height: "3em",
                                overflow: "hidden",
                              },
                              children: s.description,
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          "data-loc": "client/src/pages/Info.tsx:76",
                          className: "mb-6 pb-6 border-b",
                          style: { borderColor: "#E8DDD5" },
                          children: o.jsx("p", {
                            "data-loc": "client/src/pages/Info.tsx:77",
                            className: "font-body text-xs",
                            style: { color: "#8DA089" },
                            children: s.date,
                          }),
                        }),
                        o.jsxs("a", {
                          "data-loc": "client/src/pages/Info.tsx:82",
                          href: s.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center gap-2 w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90",
                          style: { backgroundColor: "#8DA089" },
                          children: [
                            o.jsx(S1, {
                              "data-loc": "client/src/pages/Info.tsx:89",
                              size: 16,
                            }),
                            "DOWNLOAD",
                          ],
                        }),
                      ],
                    },
                    s.id
                  )
                ),
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Info.tsx:99",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Info.tsx:100",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Info.tsx:101",
                className: "bg-white rounded-lg p-8",
                style: { borderColor: "#E8DDD5", border: "1px solid #E8DDD5" },
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Info.tsx:102",
                    className: "font-display text-2xl font-bold mb-4",
                    style: { color: "#3E3A37" },
                    children: "Meer Informatie Nodig?",
                  }),
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Info.tsx:105",
                    className: "font-body text-base mb-6",
                    style: { color: "#6B6560" },
                    children:
                      "Heb je vragen over onze services, prijzen of formulieren? Neem gerust contact met ons op. We helpen je graag!",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Info.tsx:108",
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Info.tsx:109",
                        href: "tel:0642874405",
                        className:
                          "flex items-center justify-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(sn, {
                            "data-loc": "client/src/pages/Info.tsx:114",
                            size: 16,
                          }),
                          "bel: 06-42874405",
                        ],
                      }),
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Info.tsx:117",
                        href: "mailto:balanergy@hotmail.com",
                        className:
                          "flex items-center justify-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(ln, {
                            "data-loc": "client/src/pages/Info.tsx:122",
                            size: 16,
                          }),
                          "mail: balanergy@hotmail.com",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      o.jsx("footer", {
        "data-loc": "client/src/pages/Info.tsx:132",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Info.tsx:133",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Info.tsx:134",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Info.tsx:135",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Info.tsx:136",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Info.tsx:137",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Info.tsx:141",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Info.tsx:142",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Info.tsx:143",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:144",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:144",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:145",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:145",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:146",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:146",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:147",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:147",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:148",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:148",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:149",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:149",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:150",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:150",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:151",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:151",
                            href: "/info",
                            className: "opacity-80 hover:opacity-100",
                            children: "Info",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Info.tsx:154",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Info.tsx:155",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Info.tsx:156",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Info.tsx:157",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/Info.tsx:158",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Info.tsx:159",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Info.tsx:161",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/Info.tsx:162",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Info.tsx:163",
                              href: "mailto:balanergy@hotmail.com",
                              className: "opacity-80 hover:opacity-100",
                              children: "balanergy@hotmail.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              "data-loc": "client/src/pages/Info.tsx:168",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Info.tsx:169",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function q2() {
  return o.jsxs(t2, {
    "data-loc": "client/src/App.tsx:20",
    children: [
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:21",
        path: "/",
        component: y2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:22",
        path: "/behandelingen",
        component: w2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:23",
        path: "/arrangementen",
        component: E2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:24",
        path: "/over-mij",
        component: O2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:25",
        path: "/contact",
        component: z2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:26",
        path: "/workshops",
        component: _2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:27",
        path: "/personal-training",
        component: U2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:28",
        path: "/info",
        component: Y2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:29",
        path: "/404",
        component: cp,
      }),
      o.jsx(gn, { "data-loc": "client/src/App.tsx:31", component: cp }),
    ],
  });
}
function G2() {
  return o.jsx(g2, {
    "data-loc": "client/src/App.tsx:43",
    children: o.jsx(h2, {
      "data-loc": "client/src/App.tsx:44",
      defaultTheme: "light",
      children: o.jsxs(u1, {
        "data-loc": "client/src/App.tsx:47",
        children: [
          o.jsx(jy, { "data-loc": "client/src/App.tsx:48" }),
          o.jsx(q2, { "data-loc": "client/src/App.tsx:49" }),
          o.jsx(m2, { "data-loc": "client/src/App.tsx:50" }),
        ],
      }),
    }),
  });
}
qv.createRoot(document.getElementById("root")).render(
  o.jsx(G2, { "data-loc": "client/src/main.tsx:5" })
);
