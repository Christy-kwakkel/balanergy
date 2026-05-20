function My(s, c) {
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
 */ var Ng;
function Dy() {
  if (Ng) return Ys;
  Ng = 1;
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
      for (var v in f) v !== "key" && (m[v] = f[v]);
    } else m = f;
    return (
      (f = m.ref),
      { $$typeof: s, type: r, key: x, ref: f !== void 0 ? f : null, props: m }
    );
  }
  return ((Ys.Fragment = c), (Ys.jsx = u), (Ys.jsxs = u), Ys);
}
var wg;
function _y() {
  return (wg || ((wg = 1), (Jr.exports = Dy())), Jr.exports);
}
var o = _y(),
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
function By() {
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
            e: for (var ie = 0, re = S.length, N = re >>> 1; ie < N; ) {
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
            v = x.now();
          s.unstable_now = function () {
            return x.now() - v;
          };
        }
        var y = [],
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
              (r(h), (U.sortIndex = U.expirationTime), c(y, U));
            else break;
            U = u(h);
          }
        }
        function ee(S) {
          if (((Y = !1), P(S), !M))
            if (u(y) !== null) ((M = !0), se || ((se = !0), he()));
            else {
              var U = u(h);
              U !== null && je(ee, U.startTime - S);
            }
        }
        var se = !1,
          Q = -1,
          K = 5,
          ge = -1;
        function Ne() {
          return V ? !0 : !(s.unstable_now() - ge < K);
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
                      P(S), p = u(y);
                      p !== null && !(p.expirationTime > S && Ne());

                    ) {
                      var ie = p.callback;
                      if (typeof ie == "function") {
                        ((p.callback = null), (E = p.priorityLevel));
                        var re = ie(p.expirationTime <= S);
                        if (((S = s.unstable_now()), typeof re == "function")) {
                          ((p.callback = re), P(S), (U = !0));
                          break t;
                        }
                        (p === u(y) && r(y), P(S));
                      } else r(y);
                      p = u(y);
                    }
                    if (p !== null) U = !0;
                    else {
                      var N = u(h);
                      (N !== null && je(ee, N.startTime - S), (U = !1));
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
            ve = xe.port2;
          ((xe.port1.onmessage = Oe),
            (he = function () {
              ve.postMessage(null);
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
              : (K = 0 < S ? Math.floor(1e3 / S) : 5);
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
                  u(y) === null &&
                    S === u(h) &&
                    (Y ? (I(Q), (Q = -1)) : (Y = !0), je(ee, D - ie)))
                : ((S.sortIndex = re),
                  c(y, S),
                  M || C || ((M = !0), se || ((se = !0), he()))),
              S
            );
          }),
          (s.unstable_shouldYield = Ne),
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
function Ry() {
  return (Ag || ((Ag = 1), ($r.exports = By())), $r.exports);
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
function Hy() {
  if (Eg) return me;
  Eg = 1;
  var s = Symbol.for("react.transitional.element"),
    c = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    E = Symbol.iterator;
  function C(N) {
    return N === null || typeof N != "object"
      ? null
      : ((N = (E && N[E]) || N["@@iterator"]),
        typeof N == "function" ? N : null);
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
  function G(N, H, R) {
    ((this.props = N),
      (this.context = H),
      (this.refs = V),
      (this.updater = R || M));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (N, H) {
      if (typeof N != "object" && typeof N != "function" && N != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, N, H, "setState");
    }),
    (G.prototype.forceUpdate = function (N) {
      this.updater.enqueueForceUpdate(this, N, "forceUpdate");
    }));
  function I() {}
  I.prototype = G.prototype;
  function J(N, H, R) {
    ((this.props = N),
      (this.context = H),
      (this.refs = V),
      (this.updater = R || M));
  }
  var P = (J.prototype = new I());
  ((P.constructor = J), Y(P, G.prototype), (P.isPureReactComponent = !0));
  var ee = Array.isArray;
  function se() {}
  var Q = { H: null, A: null, T: null, S: null },
    K = Object.prototype.hasOwnProperty;
  function ge(N, H, R) {
    var X = R.ref;
    return {
      $$typeof: s,
      type: N,
      key: H,
      ref: X !== void 0 ? X : null,
      props: R,
    };
  }
  function Ne(N, H) {
    return ge(N.type, H, N.props);
  }
  function Oe(N) {
    return typeof N == "object" && N !== null && N.$$typeof === s;
  }
  function he(N) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      N.replace(/[=:]/g, function (R) {
        return H[R];
      })
    );
  }
  var xe = /\/+/g;
  function ve(N, H) {
    return typeof N == "object" && N !== null && N.key != null
      ? he("" + N.key)
      : H.toString(36);
  }
  function je(N) {
    switch (N.status) {
      case "fulfilled":
        return N.value;
      case "rejected":
        throw N.reason;
      default:
        switch (
          (typeof N.status == "string"
            ? N.then(se, se)
            : ((N.status = "pending"),
              N.then(
                function (H) {
                  N.status === "pending" &&
                    ((N.status = "fulfilled"), (N.value = H));
                },
                function (H) {
                  N.status === "pending" &&
                    ((N.status = "rejected"), (N.reason = H));
                }
              )),
          N.status)
        ) {
          case "fulfilled":
            return N.value;
          case "rejected":
            throw N.reason;
        }
    }
    throw N;
  }
  function S(N, H, R, X, W) {
    var oe = typeof N;
    (oe === "undefined" || oe === "boolean") && (N = null);
    var ne = !1;
    if (N === null) ne = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          ne = !0;
          break;
        case "object":
          switch (N.$$typeof) {
            case s:
            case c:
              ne = !0;
              break;
            case j:
              return ((ne = N._init), S(ne(N._payload), H, R, X, W));
          }
      }
    if (ne)
      return (
        (W = W(N)),
        (ne = X === "" ? "." + ve(N, 0) : X),
        ee(W)
          ? ((R = ""),
            ne != null && (R = ne.replace(xe, "$&/") + "/"),
            S(W, H, R, "", function (nt) {
              return nt;
            }))
          : W != null &&
            (Oe(W) &&
              (W = Ne(
                W,
                R +
                  (W.key == null || (N && N.key === W.key)
                    ? ""
                    : ("" + W.key).replace(xe, "$&/") + "/") +
                  ne
              )),
            H.push(W)),
        1
      );
    ne = 0;
    var de = X === "" ? "." : X + ":";
    if (ee(N))
      for (var Te = 0; Te < N.length; Te++)
        ((X = N[Te]), (oe = de + ve(X, Te)), (ne += S(X, H, R, oe, W)));
    else if (((Te = C(N)), typeof Te == "function"))
      for (N = Te.call(N), Te = 0; !(X = N.next()).done; )
        ((X = X.value), (oe = de + ve(X, Te++)), (ne += S(X, H, R, oe, W)));
    else if (oe === "object") {
      if (typeof N.then == "function") return S(je(N), H, R, X, W);
      throw (
        (H = String(N)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(N).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        )
      );
    }
    return ne;
  }
  function U(N, H, R) {
    if (N == null) return N;
    var X = [],
      W = 0;
    return (
      S(N, X, "", "", function (oe) {
        return H.call(R, oe, W++);
      }),
      X
    );
  }
  function D(N) {
    if (N._status === -1) {
      var H = N._result;
      ((H = H()),
        H.then(
          function (R) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 1), (N._result = R));
          },
          function (R) {
            (N._status === 0 || N._status === -1) &&
              ((N._status = 2), (N._result = R));
          }
        ),
        N._status === -1 && ((N._status = 0), (N._result = H)));
    }
    if (N._status === 1) return N._result.default;
    throw N._result;
  }
  var ie =
      typeof reportError == "function"
        ? reportError
        : function (N) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var H = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof N == "object" &&
                  N !== null &&
                  typeof N.message == "string"
                    ? String(N.message)
                    : String(N),
                error: N,
              });
              if (!window.dispatchEvent(H)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", N);
              return;
            }
            console.error(N);
          },
    re = {
      map: U,
      forEach: function (N, H, R) {
        U(
          N,
          function () {
            H.apply(this, arguments);
          },
          R
        );
      },
      count: function (N) {
        var H = 0;
        return (
          U(N, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (N) {
        return (
          U(N, function (H) {
            return H;
          }) || []
        );
      },
      only: function (N) {
        if (!Oe(N))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return N;
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
    (me.Suspense = y),
    (me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q),
    (me.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (N) {
        return Q.H.useMemoCache(N);
      },
    }),
    (me.cache = function (N) {
      return function () {
        return N.apply(null, arguments);
      };
    }),
    (me.cacheSignal = function () {
      return null;
    }),
    (me.cloneElement = function (N, H, R) {
      if (N == null)
        throw Error(
          "The argument must be a React element, but you passed " + N + "."
        );
      var X = Y({}, N.props),
        W = N.key;
      if (H != null)
        for (oe in (H.key !== void 0 && (W = "" + H.key), H))
          !K.call(H, oe) ||
            oe === "key" ||
            oe === "__self" ||
            oe === "__source" ||
            (oe === "ref" && H.ref === void 0) ||
            (X[oe] = H[oe]);
      var oe = arguments.length - 2;
      if (oe === 1) X.children = R;
      else if (1 < oe) {
        for (var ne = Array(oe), de = 0; de < oe; de++)
          ne[de] = arguments[de + 2];
        X.children = ne;
      }
      return ge(N.type, W, X);
    }),
    (me.createContext = function (N) {
      return (
        (N = {
          $$typeof: x,
          _currentValue: N,
          _currentValue2: N,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (N.Provider = N),
        (N.Consumer = { $$typeof: m, _context: N }),
        N
      );
    }),
    (me.createElement = function (N, H, R) {
      var X,
        W = {},
        oe = null;
      if (H != null)
        for (X in (H.key !== void 0 && (oe = "" + H.key), H))
          K.call(H, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (W[X] = H[X]);
      var ne = arguments.length - 2;
      if (ne === 1) W.children = R;
      else if (1 < ne) {
        for (var de = Array(ne), Te = 0; Te < ne; Te++)
          de[Te] = arguments[Te + 2];
        W.children = de;
      }
      if (N && N.defaultProps)
        for (X in ((ne = N.defaultProps), ne))
          W[X] === void 0 && (W[X] = ne[X]);
      return ge(N, oe, W);
    }),
    (me.createRef = function () {
      return { current: null };
    }),
    (me.forwardRef = function (N) {
      return { $$typeof: v, render: N };
    }),
    (me.isValidElement = Oe),
    (me.lazy = function (N) {
      return { $$typeof: j, _payload: { _status: -1, _result: N }, _init: D };
    }),
    (me.memo = function (N, H) {
      return { $$typeof: h, type: N, compare: H === void 0 ? null : H };
    }),
    (me.startTransition = function (N) {
      var H = Q.T,
        R = {};
      Q.T = R;
      try {
        var X = N(),
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
    (me.use = function (N) {
      return Q.H.use(N);
    }),
    (me.useActionState = function (N, H, R) {
      return Q.H.useActionState(N, H, R);
    }),
    (me.useCallback = function (N, H) {
      return Q.H.useCallback(N, H);
    }),
    (me.useContext = function (N) {
      return Q.H.useContext(N);
    }),
    (me.useDebugValue = function () {}),
    (me.useDeferredValue = function (N, H) {
      return Q.H.useDeferredValue(N, H);
    }),
    (me.useEffect = function (N, H) {
      return Q.H.useEffect(N, H);
    }),
    (me.useEffectEvent = function (N) {
      return Q.H.useEffectEvent(N);
    }),
    (me.useId = function () {
      return Q.H.useId();
    }),
    (me.useImperativeHandle = function (N, H, R) {
      return Q.H.useImperativeHandle(N, H, R);
    }),
    (me.useInsertionEffect = function (N, H) {
      return Q.H.useInsertionEffect(N, H);
    }),
    (me.useLayoutEffect = function (N, H) {
      return Q.H.useLayoutEffect(N, H);
    }),
    (me.useMemo = function (N, H) {
      return Q.H.useMemo(N, H);
    }),
    (me.useOptimistic = function (N, H) {
      return Q.H.useOptimistic(N, H);
    }),
    (me.useReducer = function (N, H, R) {
      return Q.H.useReducer(N, H, R);
    }),
    (me.useRef = function (N) {
      return Q.H.useRef(N);
    }),
    (me.useState = function (N) {
      return Q.H.useState(N);
    }),
    (me.useSyncExternalStore = function (N, H, R) {
      return Q.H.useSyncExternalStore(N, H, R);
    }),
    (me.useTransition = function () {
      return Q.H.useTransition();
    }),
    (me.version = "19.2.1"),
    me
  );
}
var Tg;
function Eo() {
  return (Tg || ((Tg = 1), (Fr.exports = Hy())), Fr.exports);
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
 */ var kg;
function Uy() {
  if (kg) return ft;
  kg = 1;
  var s = Eo();
  function c(y) {
    var h = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var j = 2; j < arguments.length; j++)
        h += "&args[]=" + encodeURIComponent(arguments[j]);
    }
    return (
      "Minified React error #" +
      y +
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
  function m(y, h, j) {
    var p =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: p == null ? null : "" + p,
      children: y,
      containerInfo: h,
      implementation: j,
    };
  }
  var x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(y, h) {
    if (y === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (ft.createPortal = function (y, h) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(c(299));
      return m(y, h, null, j);
    }),
    (ft.flushSync = function (y) {
      var h = x.T,
        j = r.p;
      try {
        if (((x.T = null), (r.p = 2), y)) return y();
      } finally {
        ((x.T = h), (r.p = j), r.d.f());
      }
    }),
    (ft.preconnect = function (y, h) {
      typeof y == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        r.d.C(y, h));
    }),
    (ft.prefetchDNS = function (y) {
      typeof y == "string" && r.d.D(y);
    }),
    (ft.preinit = function (y, h) {
      if (typeof y == "string" && h && typeof h.as == "string") {
        var j = h.as,
          p = v(j, h.crossOrigin),
          E = typeof h.integrity == "string" ? h.integrity : void 0,
          C = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        j === "style"
          ? r.d.S(y, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: p,
              integrity: E,
              fetchPriority: C,
            })
          : j === "script" &&
            r.d.X(y, {
              crossOrigin: p,
              integrity: E,
              fetchPriority: C,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (ft.preinitModule = function (y, h) {
      if (typeof y == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var j = v(h.as, h.crossOrigin);
            r.d.M(y, {
              crossOrigin: j,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && r.d.M(y);
    }),
    (ft.preload = function (y, h) {
      if (
        typeof y == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var j = h.as,
          p = v(j, h.crossOrigin);
        r.d.L(y, j, {
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
    (ft.preloadModule = function (y, h) {
      if (typeof y == "string")
        if (h) {
          var j = v(h.as, h.crossOrigin);
          r.d.m(y, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: j,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else r.d.m(y);
    }),
    (ft.requestFormReset = function (y) {
      r.d.r(y);
    }),
    (ft.unstable_batchedUpdates = function (y, h) {
      return y(h);
    }),
    (ft.useFormState = function (y, h, j) {
      return x.H.useFormState(y, h, j);
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
  return (s(), (Ir.exports = Uy()), Ir.exports);
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
function Ly() {
  if (Cg) return qs;
  Cg = 1;
  var s = Ry(),
    c = Eo(),
    u = mp();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
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
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
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
  function v(e) {
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
  function y(e) {
    if (m(e) !== e) throw Error(r(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ; ) {
      var l = a.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((n = l.return), n !== null)) {
          a = n;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === a) return (y(l), e);
          if (i === n) return (y(l), t);
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== n.return) ((a = l), (n = i));
      else {
        for (var d = !1, g = l.child; g; ) {
          if (g === a) {
            ((d = !0), (a = l), (n = i));
            break;
          }
          if (g === n) {
            ((d = !0), (n = l), (a = i));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = i.child; g; ) {
            if (g === a) {
              ((d = !0), (a = i), (n = l));
              break;
            }
            if (g === n) {
              ((d = !0), (n = i), (a = l));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(r(189));
        }
      }
      if (a.alternate !== n) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
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
    K = Symbol.for("react.lazy"),
    ge = Symbol.for("react.activity"),
    Ne = Symbol.for("react.memo_cache_sentinel"),
    Oe = Symbol.iterator;
  function he(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Oe && e[Oe]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var xe = Symbol.for("react.client.reference");
  function ve(e) {
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
            t !== null ? t : ve(e.type) || "Memo"
          );
        case K:
          ((t = e._payload), (e = e._init));
          try {
            return ve(e(t));
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
  function N(e) {
    return { current: e };
  }
  function H(e) {
    0 > re || ((e.current = ie[re]), (ie[re] = null), re--);
  }
  function R(e, t) {
    (re++, (ie[re] = e.current), (e.current = t));
  }
  var X = N(null),
    W = N(null),
    oe = N(null),
    ne = N(null);
  function de(e, t) {
    switch ((R(oe, t), R(W, e), R(X, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Qm(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Qm(t)), (e = Km(t, e)));
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
  function Te() {
    (H(X), H(W), H(oe));
  }
  function nt(e) {
    e.memoizedState !== null && R(ne, e);
    var t = X.current,
      a = Km(t, e.type);
    t !== a && (R(W, e), R(X, a));
  }
  function gt(e) {
    (W.current === e && (H(X), H(W)),
      ne.current === e && (H(ne), (Rs._currentValue = D)));
  }
  var lt, ya;
  function $t(e) {
    if (lt === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((lt = (t && t[1]) || ""),
          (ya =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      lt +
      e +
      ya
    );
  }
  var Ql = !1;
  function Zn(e, t) {
    if (!e || Ql) return "";
    Ql = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
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
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      l &&
        l.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = n.DetermineComponentFrameRoot(),
        d = i[0],
        g = i[1];
      if (d && g) {
        var b = d.split(`
`),
          k = g.split(`
`);
        for (
          l = n = 0;
          n < b.length && !b[n].includes("DetermineComponentFrameRoot");

        )
          n++;
        for (; l < k.length && !k[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (n === b.length || l === k.length)
          for (
            n = b.length - 1, l = k.length - 1;
            1 <= n && 0 <= l && b[n] !== k[l];

          )
            l--;
        for (; 1 <= n && 0 <= l; n--, l--)
          if (b[n] !== k[l]) {
            if (n !== 1 || l !== 1)
              do
                if ((n--, l--, 0 > l || b[n] !== k[l])) {
                  var B =
                    `
` + b[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", e.displayName)),
                    B
                  );
                }
              while (1 <= n && 0 <= l);
            break;
          }
      }
    } finally {
      ((Ql = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? $t(a) : "";
  }
  function bn(e, t) {
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
        return Zn(e.type, !1);
      case 11:
        return Zn(e.type.render, !1);
      case 1:
        return Zn(e.type, !0);
      case 31:
        return $t("Activity");
      default:
        return "";
    }
  }
  function Kl(e) {
    try {
      var t = "",
        a = null;
      do ((t += bn(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Ct = Object.prototype.hasOwnProperty,
    Zl = s.unstable_scheduleCallback,
    Jl = s.unstable_cancelCallback,
    pt = s.unstable_shouldYield,
    Ga = s.unstable_requestPaint,
    ht = s.unstable_now,
    Ro = s.unstable_getCurrentPriorityLevel,
    jn = s.unstable_ImmediatePriority,
    Js = s.unstable_UserBlockingPriority,
    Nn = s.unstable_NormalPriority,
    Wl = s.unstable_LowPriority,
    va = s.unstable_IdlePriority,
    Ws = s.log,
    Va = s.unstable_setDisableYieldValue,
    wn = null,
    xt = null;
  function Pt(e) {
    if (
      (typeof Ws == "function" && Va(e),
      xt && typeof xt.setStrictMode == "function")
    )
      try {
        xt.setStrictMode(wn, e);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : ia,
    Ho = Math.log,
    $l = Math.LN2;
  function ia(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ho(e) / $l) | 0)) | 0);
  }
  var Jn = 256,
    Wn = 262144,
    Sn = 4194304;
  function oa(e) {
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
  function fe(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      i = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var g = n & 134217727;
    return (
      g !== 0
        ? ((n = g & ~i),
          n !== 0
            ? (l = oa(n))
            : ((d &= g),
              d !== 0
                ? (l = oa(d))
                : a || ((a = g & ~e), a !== 0 && (l = oa(a)))))
        : ((g = n & ~i),
          g !== 0
            ? (l = oa(g))
            : d !== 0
              ? (l = oa(d))
              : a || ((a = n & ~e), a !== 0 && (l = oa(a)))),
      l === 0
        ? 0
        : t !== 0 &&
            t !== l &&
            (t & i) === 0 &&
            ((i = l & -l),
            (a = t & -t),
            i >= a || (i === 32 && (a & 4194048) !== 0))
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
    var e = Sn;
    return ((Sn <<= 1), (Sn & 62914560) === 0 && (Sn = 4194304), e);
  }
  function Xa(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function Ve(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function vt(e, t, a, n, l, i) {
    var d = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var g = e.entanglements,
      b = e.expirationTimes,
      k = e.hiddenUpdates;
    for (a = d & ~a; 0 < a; ) {
      var B = 31 - ut(a),
        q = 1 << B;
      ((g[B] = 0), (b[B] = -1));
      var O = k[B];
      if (O !== null)
        for (k[B] = null, B = 0; B < O.length; B++) {
          var _ = O[B];
          _ !== null && (_.lane &= -536870913);
        }
      a &= ~q;
    }
    (n !== 0 && An(e, n, 0),
      i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t)));
  }
  function An(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var n = 31 - ut(t);
    ((e.entangledLanes |= t),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 261930)));
  }
  function bt(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var n = 31 - ut(a),
        l = 1 << n;
      ((l & t) | (e[n] & t) && (e[n] |= t), (a &= ~l));
    }
  }
  function jt(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : $n(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function $n(e) {
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
    var a = U.p;
    try {
      return ((U.p = e), t());
    } finally {
      U.p = a;
    }
  }
  var Qa = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + Qa,
    Nt = "__reactProps$" + Qa,
    Pn = "__reactContainer$" + Qa,
    Lo = "__reactEvents$" + Qa,
    jh = "__reactListeners$" + Qa,
    Nh = "__reactHandles$" + Qa,
    zu = "__reactResources$" + Qa,
    Pl = "__reactMarker$" + Qa;
  function Yo(e) {
    (delete e[st], delete e[Nt], delete e[Lo], delete e[jh], delete e[Nh]);
  }
  function Fn(e) {
    var t = e[st];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[Pn] || a[st])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = Im(e); e !== null; ) {
            if ((a = e[st])) return a;
            e = Im(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function In(e) {
    if ((e = e[st] || e[Pn])) {
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
  function En(e, t) {
    (tl(e, t), tl(e + "Capture", t));
  }
  function tl(e, t) {
    for (Du[e] = t, e = 0; e < t.length; e++) Mu.add(t[e]);
  }
  var wh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    _u = {},
    Bu = {};
  function Sh(e) {
    return Ct.call(Bu, e)
      ? !0
      : Ct.call(_u, e)
        ? !1
        : wh.test(e)
          ? (Bu[e] = !0)
          : ((_u[e] = !0), !1);
  }
  function $s(e, t, a) {
    if (Sh(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Ps(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function ba(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + n);
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
  function Ah(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (d) {
            ((a = "" + d), i.call(this, d));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (d) {
            a = "" + d;
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
    var a = t.getValue(),
      n = "";
    return (
      e && (n = Ru(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== a ? (t.setValue(e), !0) : !1
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
  function Go(e, t, a, n, l, i, d, g) {
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
        : a != null
          ? Vo(e, d, Yt(a))
          : n != null && e.removeAttribute("value"),
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
  function Uu(e, t, a, n, l, i, d, g) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || a != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) {
        qo(e);
        return;
      }
      ((a = a != null ? "" + Yt(a) : ""),
        (t = t != null ? "" + Yt(t) : a),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = n ?? l),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = g ? e.checked : !!n),
      (e.defaultChecked = !!n),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      qo(e));
  }
  function Vo(e, t, a) {
    (t === "number" && Fs(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function al(e, t, a, n) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < a.length; l++) t["$" + a[l]] = !0;
      for (a = 0; a < e.length; a++)
        ((l = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== l && (e[a].selected = l),
          l && n && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + Yt(a), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === a) {
          ((e[l].selected = !0), n && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Lu(e, t, a) {
    if (
      t != null &&
      ((t = "" + Yt(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Yt(a) : "";
  }
  function Yu(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(r(92));
        if (je(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        a = n;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = Yt(t)),
      (e.defaultValue = a),
      (n = e.textContent),
      n === a && n !== "" && n !== null && (e.value = n),
      qo(e));
  }
  function nl(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Th = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qu(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? n
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : n
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Th.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Gu(e, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((e = e.style), a != null)) {
      for (var n in a)
        !a.hasOwnProperty(n) ||
          (t != null && t.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""));
      for (var l in t)
        ((n = t[l]), t.hasOwnProperty(l) && a[l] !== n && qu(e, l, n));
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
  var kh = new Map([
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
  function ja() {}
  var Qo = null;
  function Ko(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ll = null,
    sl = null;
  function Vu(e) {
    var t = In(e);
    if (t && (e = t.stateNode)) {
      var a = e[Nt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Go(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + qt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var l = n[Nt] || null;
                if (!l) throw Error(r(90));
                Go(
                  n,
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
            for (t = 0; t < a.length; t++)
              ((n = a[t]), n.form === e.form && Hu(n));
          }
          break e;
        case "textarea":
          Lu(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && al(e, !!a.multiple, t, !1));
      }
    }
  }
  var Zo = !1;
  function Xu(e, t, a) {
    if (Zo) return e(t, a);
    Zo = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (
        ((Zo = !1),
        (ll !== null || sl !== null) &&
          (Yi(), ll && ((t = ll), (e = sl), (sl = ll = null), Vu(t), e)))
      )
        for (t = 0; t < e.length; t++) Vu(e[t]);
    }
  }
  function Il(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[Nt] || null;
    if (n === null) return null;
    a = n[t];
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
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var Na = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Jo = !1;
  if (Na)
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
  var Ka = null,
    Wo = null,
    ei = null;
  function Qu() {
    if (ei) return ei;
    var e,
      t = Wo,
      a = t.length,
      n,
      l = "value" in Ka ? Ka.value : Ka.textContent,
      i = l.length;
    for (e = 0; e < a && t[e] === l[e]; e++);
    var d = a - e;
    for (n = 1; n <= d && t[a - n] === l[i - n]; n++);
    return (ei = l.slice(e, 1 < n ? 1 - n : void 0));
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
  function ai() {
    return !0;
  }
  function Ku() {
    return !1;
  }
  function wt(e) {
    function t(a, n, l, i, d) {
      ((this._reactName = a),
        (this._targetInst = l),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = d),
        (this.currentTarget = null));
      for (var g in e)
        e.hasOwnProperty(g) && ((a = e[g]), (this[g] = a ? a(i) : i[g]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? ai
          : Ku),
        (this.isPropagationStopped = Ku),
        this
      );
    }
    return (
      p(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = ai));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = ai));
        },
        persist: function () {},
        isPersistent: ai,
      }),
      t
    );
  }
  var Tn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ni = wt(Tn),
    ts = p({}, Tn, { view: 0, detail: 0 }),
    Ch = wt(ts),
    $o,
    Po,
    as,
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
          : (e !== as &&
              (as && e.type === "mousemove"
                ? (($o = e.screenX - as.screenX), (Po = e.screenY - as.screenY))
                : (Po = $o = 0),
              (as = e)),
            $o);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Po;
      },
    }),
    Zu = wt(li),
    zh = p({}, li, { dataTransfer: 0 }),
    Mh = wt(zh),
    Dh = p({}, ts, { relatedTarget: 0 }),
    Fo = wt(Dh),
    _h = p({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Bh = wt(_h),
    Rh = p({}, Tn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hh = wt(Rh),
    Uh = p({}, Tn, { data: 0 }),
    Ju = wt(Uh),
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
    Xh = wt(Vh),
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
    Wu = wt(Qh),
    Kh = p({}, ts, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Io,
    }),
    Zh = wt(Kh),
    Jh = p({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wh = wt(Jh),
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
    Ph = wt($h),
    Fh = p({}, Tn, { newState: 0, oldState: 0 }),
    Ih = wt(Fh),
    ex = [9, 13, 27, 32],
    ec = Na && "CompositionEvent" in window,
    ns = null;
  Na && "documentMode" in document && (ns = document.documentMode);
  var tx = Na && "TextEvent" in window && !ns,
    $u = Na && (!ec || (ns && 8 < ns && 11 >= ns)),
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
  function ax(e, t) {
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
  function nx(e, t) {
    if (il)
      return e === "compositionend" || (!ec && Iu(e, t))
        ? ((e = Qu()), (ei = Wo = Ka = null), (il = !1), e)
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
  function ad(e, t, a, n) {
    (ll ? (sl ? sl.push(n) : (sl = [n])) : (ll = n),
      (t = Zi(t, "onChange")),
      0 < t.length &&
        ((a = new ni("onChange", "change", null, a, n)),
        e.push({ event: a, listeners: t })));
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
  function nd(e, t) {
    if (e === "change") return t;
  }
  var ld = !1;
  if (Na) {
    var tc;
    if (Na) {
      var ac = "oninput" in document;
      if (!ac) {
        var sd = document.createElement("div");
        (sd.setAttribute("oninput", "return;"),
          (ac = typeof sd.oninput == "function"));
      }
      tc = ac;
    } else tc = !1;
    ld = tc && (!document.documentMode || 9 < document.documentMode);
  }
  function id() {
    ls && (ls.detachEvent("onpropertychange", od), (ss = ls = null));
  }
  function od(e) {
    if (e.propertyName === "value" && si(ss)) {
      var t = [];
      (ad(t, ss, e, Ko(e)), Xu(sx, t));
    }
  }
  function ix(e, t, a) {
    e === "focusin"
      ? (id(), (ls = t), (ss = a), ls.attachEvent("onpropertychange", od))
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
    var a = Object.keys(e),
      n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var l = a[n];
      if (!Ct.call(t, l) || !zt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function cd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rd(e, t) {
    var a = cd(e);
    e = 0;
    for (var n; a; ) {
      if (a.nodeType === 3) {
        if (((n = e + a.textContent.length), e <= t && n >= t))
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = cd(a);
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
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Fs(e.document);
    }
    return t;
  }
  function nc(e) {
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
  var dx = Na && "documentMode" in document && 11 >= document.documentMode,
    ol = null,
    lc = null,
    os = null,
    sc = !1;
  function fd(e, t, a) {
    var n =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    sc ||
      ol == null ||
      ol !== Fs(n) ||
      ((n = ol),
      "selectionStart" in n && nc(n)
        ? (n = { start: n.selectionStart, end: n.selectionEnd })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (os && is(os, n)) ||
        ((os = n),
        (n = Zi(lc, "onSelect")),
        0 < n.length &&
          ((t = new ni("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: n }),
          (t.target = ol))));
  }
  function kn(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var cl = {
      animationend: kn("Animation", "AnimationEnd"),
      animationiteration: kn("Animation", "AnimationIteration"),
      animationstart: kn("Animation", "AnimationStart"),
      transitionrun: kn("Transition", "TransitionRun"),
      transitionstart: kn("Transition", "TransitionStart"),
      transitioncancel: kn("Transition", "TransitionCancel"),
      transitionend: kn("Transition", "TransitionEnd"),
    },
    ic = {},
    md = {};
  Na &&
    ((md = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete cl.animationend.animation,
      delete cl.animationiteration.animation,
      delete cl.animationstart.animation),
    "TransitionEvent" in window || delete cl.transitionend.transition);
  function On(e) {
    if (ic[e]) return ic[e];
    if (!cl[e]) return e;
    var t = cl[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in md) return (ic[e] = t[a]);
    return e;
  }
  var gd = On("animationend"),
    pd = On("animationiteration"),
    hd = On("animationstart"),
    fx = On("transitionrun"),
    mx = On("transitionstart"),
    gx = On("transitioncancel"),
    xd = On("transitionend"),
    yd = new Map(),
    oc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  oc.push("scrollEnd");
  function It(e, t) {
    (yd.set(e, t), En(t, [e]));
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
      var a = Gt[t];
      Gt[t++] = null;
      var n = Gt[t];
      Gt[t++] = null;
      var l = Gt[t];
      Gt[t++] = null;
      var i = Gt[t];
      if (((Gt[t++] = null), n !== null && l !== null)) {
        var d = n.pending;
        (d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
          (n.pending = l));
      }
      i !== 0 && vd(a, l, i);
    }
  }
  function ci(e, t, a, n) {
    ((Gt[rl++] = e),
      (Gt[rl++] = t),
      (Gt[rl++] = a),
      (Gt[rl++] = n),
      (cc |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function rc(e, t, a, n) {
    return (ci(e, t, a, n), ri(e));
  }
  function Cn(e, t) {
    return (ci(e, null, null, t), ri(e));
  }
  function vd(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var l = !1, i = e.return; i !== null; )
      ((i.childLanes |= a),
        (n = i.alternate),
        n !== null && (n.childLanes |= a),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3
      ? ((i = e.stateNode),
        l &&
          t !== null &&
          ((l = 31 - ut(a)),
          (e = i.hiddenUpdates),
          (n = e[l]),
          n === null ? (e[l] = [t]) : n.push(t),
          (t.lane = a | 536870912)),
        i)
      : null;
  }
  function ri(e) {
    if (50 < Os) throw ((Os = 0), (yr = null), Error(r(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ul = {};
  function px(e, t, a, n) {
    ((this.tag = e),
      (this.key = a),
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
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Mt(e, t, a, n) {
    return new px(e, t, a, n);
  }
  function uc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function wa(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = Mt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function bd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function ui(e, t, a, n, l, i) {
    var d = 0;
    if (((n = e), typeof e == "function")) uc(e) && (d = 1);
    else if (typeof e == "string")
      d = by(e, a, X.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ge:
          return (
            (e = Mt(31, a, t, l)),
            (e.elementType = ge),
            (e.lanes = i),
            e
          );
        case Y:
          return zn(a.children, l, i, t);
        case V:
          ((d = 8), (l |= 24));
          break;
        case G:
          return (
            (e = Mt(12, a, t, l | 2)),
            (e.elementType = G),
            (e.lanes = i),
            e
          );
        case ee:
          return (
            (e = Mt(13, a, t, l)),
            (e.elementType = ee),
            (e.lanes = i),
            e
          );
        case se:
          return (
            (e = Mt(19, a, t, l)),
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
              case K:
                ((d = 16), (n = null));
                break e;
            }
          ((d = 29),
            (a = Error(r(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (t = Mt(d, a, t, l)),
      (t.elementType = e),
      (t.type = n),
      (t.lanes = i),
      t
    );
  }
  function zn(e, t, a, n) {
    return ((e = Mt(7, e, n, t)), (e.lanes = a), e);
  }
  function dc(e, t, a) {
    return ((e = Mt(6, e, null, t)), (e.lanes = a), e);
  }
  function jd(e) {
    var t = Mt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function fc(e, t, a) {
    return (
      (t = Mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Nd = new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Nd.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: Kl(t) }), Nd.set(e, t), t);
    }
    return { value: e, source: t, stack: Kl(t) };
  }
  var dl = [],
    fl = 0,
    di = null,
    cs = 0,
    Xt = [],
    Qt = 0,
    Za = null,
    ca = 1,
    ra = "";
  function Sa(e, t) {
    ((dl[fl++] = cs), (dl[fl++] = di), (di = e), (cs = t));
  }
  function wd(e, t, a) {
    ((Xt[Qt++] = ca), (Xt[Qt++] = ra), (Xt[Qt++] = Za), (Za = e));
    var n = ca;
    e = ra;
    var l = 32 - ut(n) - 1;
    ((n &= ~(1 << l)), (a += 1));
    var i = 32 - ut(t) + l;
    if (30 < i) {
      var d = l - (l % 5);
      ((i = (n & ((1 << d) - 1)).toString(32)),
        (n >>= d),
        (l -= d),
        (ca = (1 << (32 - ut(t) + l)) | (a << l) | n),
        (ra = i + e));
    } else ((ca = (1 << i) | (a << l) | n), (ra = e));
  }
  function mc(e) {
    e.return !== null && (Sa(e, 1), wd(e, 1, 0));
  }
  function gc(e) {
    for (; e === di; )
      ((di = dl[--fl]), (dl[fl] = null), (cs = dl[--fl]), (dl[fl] = null));
    for (; e === Za; )
      ((Za = Xt[--Qt]),
        (Xt[Qt] = null),
        (ra = Xt[--Qt]),
        (Xt[Qt] = null),
        (ca = Xt[--Qt]),
        (Xt[Qt] = null));
  }
  function Sd(e, t) {
    ((Xt[Qt++] = ca),
      (Xt[Qt++] = ra),
      (Xt[Qt++] = Za),
      (ca = t.id),
      (ra = t.overflow),
      (Za = e));
  }
  var it = null,
    Le = null,
    ke = !1,
    Ja = null,
    Kt = !1,
    pc = Error(r(519));
  function Wa(e) {
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
      a = e.type,
      n = e.memoizedProps;
    switch (((t[st] = e), (t[Nt] = n), a)) {
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
        for (a = 0; a < zs.length; a++) Se(zs[a], t);
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
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0
          ));
        break;
      case "select":
        Se("invalid", t);
        break;
      case "textarea":
        (Se("invalid", t), Yu(t, n.value, n.defaultValue, n.children));
    }
    ((a = n.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      n.suppressHydrationWarning === !0 ||
      Vm(t.textContent, a)
        ? (n.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          n.onScroll != null && Se("scroll", t),
          n.onScrollEnd != null && Se("scrollend", t),
          n.onClick != null && (t.onclick = ja),
          (t = !0))
        : (t = !1),
      t || Wa(e, !0));
  }
  function Ed(e) {
    for (it = e.return; it; )
      switch (it.tag) {
        case 5:
        case 31:
        case 13:
          Kt = !1;
          return;
        case 27:
        case 3:
          Kt = !0;
          return;
        default:
          it = it.return;
      }
  }
  function ml(e) {
    if (e !== it) return !1;
    if (!ke) return (Ed(e), (ke = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Dr(e.type, e.memoizedProps))),
        (a = !a)),
      a && Le && Wa(e),
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
        ? ((t = Le), un(e.type) ? ((e = Ur), (Ur = null), (Le = e)) : (Le = t))
        : (Le = it ? Jt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Mn() {
    ((Le = it = null), (ke = !1));
  }
  function hc() {
    var e = Ja;
    return (
      e !== null &&
        (Tt === null ? (Tt = e) : Tt.push.apply(Tt, e), (Ja = null)),
      e
    );
  }
  function rs(e) {
    Ja === null ? (Ja = [e]) : Ja.push(e);
  }
  var xc = N(null),
    Dn = null,
    Aa = null;
  function $a(e, t, a) {
    (R(xc, t._currentValue), (t._currentValue = a));
  }
  function Ea(e) {
    ((e._currentValue = xc.current), H(xc));
  }
  function yc(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
          : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function vc(e, t, a, n) {
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
              ((i.lanes |= a),
                (g = i.alternate),
                g !== null && (g.lanes |= a),
                yc(i.return, a, e),
                n || (d = null));
              break e;
            }
          i = g.next;
        }
      } else if (l.tag === 18) {
        if (((d = l.return), d === null)) throw Error(r(341));
        ((d.lanes |= a),
          (i = d.alternate),
          i !== null && (i.lanes |= a),
          yc(d, a, e),
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
  function gl(e, t, a, n) {
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
      } else if (l === ne.current) {
        if (((d = l.alternate), d === null)) throw Error(r(387));
        d.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(Rs) : (e = [Rs]));
      }
      l = l.return;
    }
    (e !== null && vc(t, e, a, n), (t.flags |= 262144));
  }
  function fi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!zt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function _n(e) {
    ((Dn = e),
      (Aa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function ot(e) {
    return Td(Dn, e);
  }
  function mi(e, t) {
    return (Dn === null && _n(e), Td(e, t));
  }
  function Td(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Aa === null)) {
      if (e === null) throw Error(r(308));
      ((Aa = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Aa = Aa.next = t;
    return a;
  }
  var hx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    xx = s.unstable_scheduleCallback,
    yx = s.unstable_NormalPriority,
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
        xx(yx, function () {
          e.controller.abort();
        }));
  }
  var ds = null,
    jc = 0,
    pl = 0,
    hl = null;
  function vx(e, t) {
    if (ds === null) {
      var a = (ds = []);
      ((jc = 0),
        (pl = Sr()),
        (hl = {
          status: "pending",
          value: void 0,
          then: function (n) {
            a.push(n);
          },
        }));
    }
    return (jc++, t.then(kd, kd), t);
  }
  function kd() {
    if (--jc === 0 && ds !== null) {
      hl !== null && (hl.status = "fulfilled");
      var e = ds;
      ((ds = null), (pl = 0), (hl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function bx(e, t) {
    var a = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          a.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = t));
          for (var l = 0; l < a.length; l++) (0, a[l])(t);
        },
        function (l) {
          for (n.status = "rejected", n.reason = l, l = 0; l < a.length; l++)
            (0, a[l])(void 0);
        }
      ),
      n
    );
  }
  var Od = S.S;
  S.S = function (e, t) {
    ((mm = ht()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        vx(e, t),
      Od !== null && Od(e, t));
  };
  var Bn = N(null);
  function Nc() {
    var e = Bn.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function gi(e, t) {
    t === null ? R(Bn, Bn.current) : R(Bn, t.pool);
  }
  function Cd() {
    var e = Nc();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var xl = Error(r(460)),
    wc = Error(r(474)),
    pi = Error(r(542)),
    hi = { then: function () {} };
  function zd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Md(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(ja, ja), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), _d(e), e);
      default:
        if (typeof t.status == "string") t.then(ja, ja);
        else {
          if (((e = Ue), e !== null && 100 < e.shellSuspendCounter))
            throw Error(r(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "fulfilled"), (l.value = n));
                }
              },
              function (n) {
                if (t.status === "pending") {
                  var l = t;
                  ((l.status = "rejected"), (l.reason = n));
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
        throw ((Hn = t), xl);
    }
  }
  function Rn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Hn = a), xl)
        : a;
    }
  }
  var Hn = null;
  function Dd() {
    if (Hn === null) throw Error(r(459));
    var e = Hn;
    return ((Hn = null), e);
  }
  function _d(e) {
    if (e === xl || e === pi) throw Error(r(483));
  }
  var yl = null,
    fs = 0;
  function xi(e) {
    var t = fs;
    return ((fs += 1), yl === null && (yl = []), Md(yl, e, t));
  }
  function ms(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function yi(e, t) {
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
    function t(A, w) {
      if (e) {
        var T = A.deletions;
        T === null ? ((A.deletions = [w]), (A.flags |= 16)) : T.push(w);
      }
    }
    function a(A, w) {
      if (!e) return null;
      for (; w !== null; ) (t(A, w), (w = w.sibling));
      return null;
    }
    function n(A) {
      for (var w = new Map(); A !== null; )
        (A.key !== null ? w.set(A.key, A) : w.set(A.index, A), (A = A.sibling));
      return w;
    }
    function l(A, w) {
      return ((A = wa(A, w)), (A.index = 0), (A.sibling = null), A);
    }
    function i(A, w, T) {
      return (
        (A.index = T),
        e
          ? ((T = A.alternate),
            T !== null
              ? ((T = T.index), T < w ? ((A.flags |= 67108866), w) : T)
              : ((A.flags |= 67108866), w))
          : ((A.flags |= 1048576), w)
      );
    }
    function d(A) {
      return (e && A.alternate === null && (A.flags |= 67108866), A);
    }
    function g(A, w, T, L) {
      return w === null || w.tag !== 6
        ? ((w = dc(T, A.mode, L)), (w.return = A), w)
        : ((w = l(w, T)), (w.return = A), w);
    }
    function b(A, w, T, L) {
      var ce = T.type;
      return ce === Y
        ? B(A, w, T.props.children, L, T.key)
        : w !== null &&
            (w.elementType === ce ||
              (typeof ce == "object" &&
                ce !== null &&
                ce.$$typeof === K &&
                Rn(ce) === w.type))
          ? ((w = l(w, T.props)), ms(w, T), (w.return = A), w)
          : ((w = ui(T.type, T.key, T.props, null, A.mode, L)),
            ms(w, T),
            (w.return = A),
            w);
    }
    function k(A, w, T, L) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== T.containerInfo ||
        w.stateNode.implementation !== T.implementation
        ? ((w = fc(T, A.mode, L)), (w.return = A), w)
        : ((w = l(w, T.children || [])), (w.return = A), w);
    }
    function B(A, w, T, L, ce) {
      return w === null || w.tag !== 7
        ? ((w = zn(T, A.mode, L, ce)), (w.return = A), w)
        : ((w = l(w, T)), (w.return = A), w);
    }
    function q(A, w, T) {
      if (
        (typeof w == "string" && w !== "") ||
        typeof w == "number" ||
        typeof w == "bigint"
      )
        return ((w = dc("" + w, A.mode, T)), (w.return = A), w);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case C:
            return (
              (T = ui(w.type, w.key, w.props, null, A.mode, T)),
              ms(T, w),
              (T.return = A),
              T
            );
          case M:
            return ((w = fc(w, A.mode, T)), (w.return = A), w);
          case K:
            return ((w = Rn(w)), q(A, w, T));
        }
        if (je(w) || he(w))
          return ((w = zn(w, A.mode, T, null)), (w.return = A), w);
        if (typeof w.then == "function") return q(A, xi(w), T);
        if (w.$$typeof === J) return q(A, mi(A, w), T);
        yi(A, w);
      }
      return null;
    }
    function O(A, w, T, L) {
      var ce = w !== null ? w.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ce !== null ? null : g(A, w, "" + T, L);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return T.key === ce ? b(A, w, T, L) : null;
          case M:
            return T.key === ce ? k(A, w, T, L) : null;
          case K:
            return ((T = Rn(T)), O(A, w, T, L));
        }
        if (je(T) || he(T)) return ce !== null ? null : B(A, w, T, L, null);
        if (typeof T.then == "function") return O(A, w, xi(T), L);
        if (T.$$typeof === J) return O(A, w, mi(A, T), L);
        yi(A, T);
      }
      return null;
    }
    function _(A, w, T, L, ce) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((A = A.get(T) || null), g(w, A, "" + L, ce));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case C:
            return (
              (A = A.get(L.key === null ? T : L.key) || null),
              b(w, A, L, ce)
            );
          case M:
            return (
              (A = A.get(L.key === null ? T : L.key) || null),
              k(w, A, L, ce)
            );
          case K:
            return ((L = Rn(L)), _(A, w, T, L, ce));
        }
        if (je(L) || he(L))
          return ((A = A.get(T) || null), B(w, A, L, ce, null));
        if (typeof L.then == "function") return _(A, w, T, xi(L), ce);
        if (L.$$typeof === J) return _(A, w, T, mi(w, L), ce);
        yi(w, L);
      }
      return null;
    }
    function F(A, w, T, L) {
      for (
        var ce = null, Ce = null, le = w, ye = (w = 0), Ee = null;
        le !== null && ye < T.length;
        ye++
      ) {
        le.index > ye ? ((Ee = le), (le = null)) : (Ee = le.sibling);
        var ze = O(A, le, T[ye], L);
        if (ze === null) {
          le === null && (le = Ee);
          break;
        }
        (e && le && ze.alternate === null && t(A, le),
          (w = i(ze, w, ye)),
          Ce === null ? (ce = ze) : (Ce.sibling = ze),
          (Ce = ze),
          (le = Ee));
      }
      if (ye === T.length) return (a(A, le), ke && Sa(A, ye), ce);
      if (le === null) {
        for (; ye < T.length; ye++)
          ((le = q(A, T[ye], L)),
            le !== null &&
              ((w = i(le, w, ye)),
              Ce === null ? (ce = le) : (Ce.sibling = le),
              (Ce = le)));
        return (ke && Sa(A, ye), ce);
      }
      for (le = n(le); ye < T.length; ye++)
        ((Ee = _(le, A, ye, T[ye], L)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              le.delete(Ee.key === null ? ye : Ee.key),
            (w = i(Ee, w, ye)),
            Ce === null ? (ce = Ee) : (Ce.sibling = Ee),
            (Ce = Ee)));
      return (
        e &&
          le.forEach(function (pn) {
            return t(A, pn);
          }),
        ke && Sa(A, ye),
        ce
      );
    }
    function ue(A, w, T, L) {
      if (T == null) throw Error(r(151));
      for (
        var ce = null,
          Ce = null,
          le = w,
          ye = (w = 0),
          Ee = null,
          ze = T.next();
        le !== null && !ze.done;
        ye++, ze = T.next()
      ) {
        le.index > ye ? ((Ee = le), (le = null)) : (Ee = le.sibling);
        var pn = O(A, le, ze.value, L);
        if (pn === null) {
          le === null && (le = Ee);
          break;
        }
        (e && le && pn.alternate === null && t(A, le),
          (w = i(pn, w, ye)),
          Ce === null ? (ce = pn) : (Ce.sibling = pn),
          (Ce = pn),
          (le = Ee));
      }
      if (ze.done) return (a(A, le), ke && Sa(A, ye), ce);
      if (le === null) {
        for (; !ze.done; ye++, ze = T.next())
          ((ze = q(A, ze.value, L)),
            ze !== null &&
              ((w = i(ze, w, ye)),
              Ce === null ? (ce = ze) : (Ce.sibling = ze),
              (Ce = ze)));
        return (ke && Sa(A, ye), ce);
      }
      for (le = n(le); !ze.done; ye++, ze = T.next())
        ((ze = _(le, A, ye, ze.value, L)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              le.delete(ze.key === null ? ye : ze.key),
            (w = i(ze, w, ye)),
            Ce === null ? (ce = ze) : (Ce.sibling = ze),
            (Ce = ze)));
      return (
        e &&
          le.forEach(function (zy) {
            return t(A, zy);
          }),
        ke && Sa(A, ye),
        ce
      );
    }
    function He(A, w, T, L) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === Y &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case C:
            e: {
              for (var ce = T.key; w !== null; ) {
                if (w.key === ce) {
                  if (((ce = T.type), ce === Y)) {
                    if (w.tag === 7) {
                      (a(A, w.sibling),
                        (L = l(w, T.props.children)),
                        (L.return = A),
                        (A = L));
                      break e;
                    }
                  } else if (
                    w.elementType === ce ||
                    (typeof ce == "object" &&
                      ce !== null &&
                      ce.$$typeof === K &&
                      Rn(ce) === w.type)
                  ) {
                    (a(A, w.sibling),
                      (L = l(w, T.props)),
                      ms(L, T),
                      (L.return = A),
                      (A = L));
                    break e;
                  }
                  a(A, w);
                  break;
                } else t(A, w);
                w = w.sibling;
              }
              T.type === Y
                ? ((L = zn(T.props.children, A.mode, L, T.key)),
                  (L.return = A),
                  (A = L))
                : ((L = ui(T.type, T.key, T.props, null, A.mode, L)),
                  ms(L, T),
                  (L.return = A),
                  (A = L));
            }
            return d(A);
          case M:
            e: {
              for (ce = T.key; w !== null; ) {
                if (w.key === ce)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === T.containerInfo &&
                    w.stateNode.implementation === T.implementation
                  ) {
                    (a(A, w.sibling),
                      (L = l(w, T.children || [])),
                      (L.return = A),
                      (A = L));
                    break e;
                  } else {
                    a(A, w);
                    break;
                  }
                else t(A, w);
                w = w.sibling;
              }
              ((L = fc(T, A.mode, L)), (L.return = A), (A = L));
            }
            return d(A);
          case K:
            return ((T = Rn(T)), He(A, w, T, L));
        }
        if (je(T)) return F(A, w, T, L);
        if (he(T)) {
          if (((ce = he(T)), typeof ce != "function")) throw Error(r(150));
          return ((T = ce.call(T)), ue(A, w, T, L));
        }
        if (typeof T.then == "function") return He(A, w, xi(T), L);
        if (T.$$typeof === J) return He(A, w, mi(A, T), L);
        yi(A, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          w !== null && w.tag === 6
            ? (a(A, w.sibling), (L = l(w, T)), (L.return = A), (A = L))
            : (a(A, w), (L = dc(T, A.mode, L)), (L.return = A), (A = L)),
          d(A))
        : a(A, w);
    }
    return function (A, w, T, L) {
      try {
        fs = 0;
        var ce = He(A, w, T, L);
        return ((yl = null), ce);
      } catch (le) {
        if (le === xl || le === pi) throw le;
        var Ce = Mt(29, le, null, A.mode);
        return ((Ce.lanes = L), (Ce.return = A), Ce);
      } finally {
      }
    };
  }
  var Un = Bd(!0),
    Rd = Bd(!1),
    Pa = !1;
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
  function Fa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ia(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (Me & 2) !== 0)) {
      var l = n.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (n.pending = t),
        (t = ri(e)),
        vd(e, null, a),
        t
      );
    }
    return (ci(e, n, t, a), ri(e));
  }
  function gs(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), bt(e, a));
    }
  }
  function Ec(e, t) {
    var a = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), a === n)) {
      var l = null,
        i = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var d = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (i === null ? (l = i = d) : (i = i.next = d), (a = a.next));
        } while (a !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      ((a = {
        baseState: n.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var Tc = !1;
  function ps() {
    if (Tc) {
      var e = hl;
      if (e !== null) throw e;
    }
  }
  function hs(e, t, a, n) {
    Tc = !1;
    var l = e.updateQueue;
    Pa = !1;
    var i = l.firstBaseUpdate,
      d = l.lastBaseUpdate,
      g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var b = g,
        k = b.next;
      ((b.next = null), d === null ? (i = k) : (d.next = k), (d = b));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (g = B.lastBaseUpdate),
        g !== d &&
          (g === null ? (B.firstBaseUpdate = k) : (g.next = k),
          (B.lastBaseUpdate = b)));
    }
    if (i !== null) {
      var q = l.baseState;
      ((d = 0), (B = k = b = null), (g = i));
      do {
        var O = g.lane & -536870913,
          _ = O !== g.lane;
        if (_ ? (Ae & O) === O : (n & O) === O) {
          (O !== 0 && O === pl && (Tc = !0),
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
            var He = a;
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
                Pa = !0;
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
            B === null ? ((k = B = _), (b = q)) : (B = B.next = _),
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
        (l.firstBaseUpdate = k),
        (l.lastBaseUpdate = B),
        i === null && (l.shared.lanes = 0),
        (ln |= d),
        (e.lanes = d),
        (e.memoizedState = q));
    }
  }
  function Hd(e, t) {
    if (typeof e != "function") throw Error(r(191, e));
    e.call(t);
  }
  function Ud(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Hd(a[e], t);
  }
  var vl = N(null),
    vi = N(0);
  function Ld(e, t) {
    ((e = Ba), R(vi, e), R(vl, t), (Ba = e | t.baseLanes));
  }
  function kc() {
    (R(vi, Ba), R(vl, vl.current));
  }
  function Oc() {
    ((Ba = vi.current), H(vl), H(vi));
  }
  var Dt = N(null),
    Zt = null;
  function en(e) {
    var t = e.alternate;
    (R(Ke, Ke.current & 1),
      R(Dt, e),
      Zt === null &&
        (t === null || vl.current !== null || t.memoizedState !== null) &&
        (Zt = e));
  }
  function Cc(e) {
    (R(Ke, Ke.current), R(Dt, e), Zt === null && (Zt = e));
  }
  function Yd(e) {
    e.tag === 22
      ? (R(Ke, Ke.current), R(Dt, e), Zt === null && (Zt = e))
      : tn();
  }
  function tn() {
    (R(Ke, Ke.current), R(Dt, Dt.current));
  }
  function _t(e) {
    (H(Dt), Zt === e && (Zt = null), H(Ke));
  }
  var Ke = N(0);
  function bi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Rr(a) || Hr(a)))
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
  var Ta = 0,
    pe = null,
    Be = null,
    We = null,
    ji = !1,
    bl = !1,
    Ln = !1,
    Ni = 0,
    xs = 0,
    jl = null,
    jx = 0;
  function Xe() {
    throw Error(r(321));
  }
  function zc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!zt(e[a], t[a])) return !1;
    return !0;
  }
  function Mc(e, t, a, n, l, i) {
    return (
      (Ta = i),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = e === null || e.memoizedState === null ? Sf : Zc),
      (Ln = !1),
      (i = a(n, l)),
      (Ln = !1),
      bl && (i = Gd(t, a, n, l)),
      qd(e),
      i
    );
  }
  function qd(e) {
    S.H = bs;
    var t = Be !== null && Be.next !== null;
    if (((Ta = 0), (We = Be = pe = null), (ji = !1), (xs = 0), (jl = null), t))
      throw Error(r(300));
    e === null ||
      $e ||
      ((e = e.dependencies), e !== null && fi(e) && ($e = !0));
  }
  function Gd(e, t, a, n) {
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
      ((S.H = Af), (i = t(a, n)));
    } while (bl);
    return i;
  }
  function Nx() {
    var e = S.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? ys(t) : t),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function Dc() {
    var e = Ni !== 0;
    return ((Ni = 0), e);
  }
  function _c(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function Bc(e) {
    if (ji) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      ji = !1;
    }
    ((Ta = 0), (We = Be = pe = null), (bl = !1), (xs = Ni = 0), (jl = null));
  }
  function yt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (We === null ? (pe.memoizedState = We = e) : (We = We.next = e), We);
  }
  function Ze() {
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
  function wi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ys(e) {
    var t = xs;
    return (
      (xs += 1),
      jl === null && (jl = []),
      (e = Md(jl, e, t)),
      (t = pe),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? Sf : Zc)),
      e
    );
  }
  function Si(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ys(e);
      if (e.$$typeof === J) return ot(e);
    }
    throw Error(r(438, String(e)));
  }
  function Rc(e) {
    var t = null,
      a = pe.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var n = pe.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (t = {
              data: n.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = wi()), (pe.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = Ne;
    return (t.index++, a);
  }
  function ka(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ai(e) {
    var t = Ze();
    return Hc(t, Be, e);
  }
  function Hc(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = a;
    var l = e.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var d = l.next;
        ((l.next = i.next), (i.next = d));
      }
      ((t.baseQueue = l = i), (n.pending = null));
    }
    if (((i = e.baseState), l === null)) e.memoizedState = i;
    else {
      t = l.next;
      var g = (d = null),
        b = null,
        k = t,
        B = !1;
      do {
        var q = k.lane & -536870913;
        if (q !== k.lane ? (Ae & q) === q : (Ta & q) === q) {
          var O = k.revertLane;
          if (O === 0)
            (b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: k.action,
                  hasEagerState: k.hasEagerState,
                  eagerState: k.eagerState,
                  next: null,
                }),
              q === pl && (B = !0));
          else if ((Ta & O) === O) {
            ((k = k.next), O === pl && (B = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null,
            }),
              b === null ? ((g = b = q), (d = i)) : (b = b.next = q),
              (pe.lanes |= O),
              (ln |= O));
          ((q = k.action),
            Ln && a(i, q),
            (i = k.hasEagerState ? k.eagerState : a(i, q)));
        } else
          ((O = {
            lane: q,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null,
          }),
            b === null ? ((g = b = O), (d = i)) : (b = b.next = O),
            (pe.lanes |= q),
            (ln |= q));
        k = k.next;
      } while (k !== null && k !== t);
      if (
        (b === null ? (d = i) : (b.next = g),
        !zt(i, e.memoizedState) && (($e = !0), B && ((a = hl), a !== null)))
      )
        throw a;
      ((e.memoizedState = i),
        (e.baseState = d),
        (e.baseQueue = b),
        (n.lastRenderedState = i));
    }
    return (l === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function Uc(e) {
    var t = Ze(),
      a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch,
      l = a.pending,
      i = t.memoizedState;
    if (l !== null) {
      a.pending = null;
      var d = (l = l.next);
      do ((i = e(i, d.action)), (d = d.next));
      while (d !== l);
      (zt(i, t.memoizedState) || ($e = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (a.lastRenderedState = i));
    }
    return [i, n];
  }
  function Vd(e, t, a) {
    var n = pe,
      l = Ze(),
      i = ke;
    if (i) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var d = !zt((Be || l).memoizedState, a);
    if (
      (d && ((l.memoizedState = a), ($e = !0)),
      (l = l.queue),
      qc(Kd.bind(null, n, l, e), [e]),
      l.getSnapshot !== t || d || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Nl(9, { destroy: void 0 }, Qd.bind(null, n, l, a, t), null),
        Ue === null)
      )
        throw Error(r(349));
      i || (Ta & 127) !== 0 || Xd(n, t, a);
    }
    return a;
  }
  function Xd(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = pe.updateQueue),
      t === null
        ? ((t = wi()), (pe.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function Qd(e, t, a, n) {
    ((t.value = a), (t.getSnapshot = n), Zd(t) && Jd(e));
  }
  function Kd(e, t, a) {
    return a(function () {
      Zd(t) && Jd(e);
    });
  }
  function Zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !zt(e, a);
    } catch {
      return !0;
    }
  }
  function Jd(e) {
    var t = Cn(e, 2);
    t !== null && kt(t, e, 2);
  }
  function Lc(e) {
    var t = yt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Ln)) {
        Pt(!0);
        try {
          a();
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
        lastRenderedReducer: ka,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Wd(e, t, a, n) {
    return ((e.baseState = a), Hc(e, Be, typeof n == "function" ? n : ka));
  }
  function wx(e, t, a, n, l) {
    if (ki(e)) throw Error(r(485));
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
      (S.T !== null ? a(!0) : (i.isTransition = !1),
        n(i),
        (a = t.pending),
        a === null
          ? ((i.next = t.pending = i), $d(t, i))
          : ((i.next = a.next), (t.pending = a.next = i)));
    }
  }
  function $d(e, t) {
    var a = t.action,
      n = t.payload,
      l = e.state;
    if (t.isTransition) {
      var i = S.T,
        d = {};
      S.T = d;
      try {
        var g = a(l, n),
          b = S.S;
        (b !== null && b(d, g), Pd(e, t, g));
      } catch (k) {
        Yc(e, t, k);
      } finally {
        (i !== null && d.types !== null && (i.types = d.types), (S.T = i));
      }
    } else
      try {
        ((i = a(l, n)), Pd(e, t, i));
      } catch (k) {
        Yc(e, t, k);
      }
  }
  function Pd(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (n) {
            Fd(e, t, n);
          },
          function (n) {
            return Yc(e, t, n);
          }
        )
      : Fd(e, t, a);
  }
  function Fd(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Id(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), $d(e, a))));
  }
  function Yc(e, t, a) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((t.status = "rejected"), (t.reason = a), Id(t), (t = t.next));
      while (t !== n);
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
    if (ke) {
      var a = Ue.formState;
      if (a !== null) {
        e: {
          var n = pe;
          if (ke) {
            if (Le) {
              t: {
                for (var l = Le, i = Kt; l.nodeType !== 8; ) {
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
                ((Le = Jt(l.nextSibling)), (n = l.data === "F!"));
                break e;
              }
            }
            Wa(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return (
      (a = yt()),
      (a.memoizedState = a.baseState = t),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ef,
        lastRenderedState: t,
      }),
      (a.queue = n),
      (a = jf.bind(null, pe, n)),
      (n.dispatch = a),
      (n = Lc(!1)),
      (i = Kc.bind(null, pe, !1, n.queue)),
      (n = yt()),
      (l = { state: t, dispatch: null, action: e, pending: null }),
      (n.queue = l),
      (a = wx.bind(null, pe, l, i, a)),
      (l.dispatch = a),
      (n.memoizedState = e),
      [t, a, !1]
    );
  }
  function af(e) {
    var t = Ze();
    return nf(t, Be, e);
  }
  function nf(e, t, a) {
    if (
      ((t = Hc(e, t, ef)[0]),
      (e = Ai(ka)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var n = ys(t);
      } catch (d) {
        throw d === xl ? pi : d;
      }
    else n = t;
    t = Ze();
    var l = t.queue,
      i = l.dispatch;
    return (
      a !== t.memoizedState &&
        ((pe.flags |= 2048),
        Nl(9, { destroy: void 0 }, Sx.bind(null, l, a), null)),
      [n, i, e]
    );
  }
  function Sx(e, t) {
    e.action = t;
  }
  function lf(e) {
    var t = Ze(),
      a = Be;
    if (a !== null) return nf(t, a, e);
    (Ze(), (t = t.memoizedState), (a = Ze()));
    var n = a.queue.dispatch;
    return ((a.memoizedState = e), [t, n, !1]);
  }
  function Nl(e, t, a, n) {
    return (
      (e = { tag: e, create: a, deps: n, inst: t, next: null }),
      (t = pe.updateQueue),
      t === null && ((t = wi()), (pe.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
      e
    );
  }
  function sf() {
    return Ze().memoizedState;
  }
  function Ei(e, t, a, n) {
    var l = yt();
    ((pe.flags |= e),
      (l.memoizedState = Nl(
        1 | t,
        { destroy: void 0 },
        a,
        n === void 0 ? null : n
      )));
  }
  function Ti(e, t, a, n) {
    var l = Ze();
    n = n === void 0 ? null : n;
    var i = l.memoizedState.inst;
    Be !== null && n !== null && zc(n, Be.memoizedState.deps)
      ? (l.memoizedState = Nl(t, i, a, n))
      : ((pe.flags |= e), (l.memoizedState = Nl(1 | t, i, a, n)));
  }
  function of(e, t) {
    Ei(8390656, 8, e, t);
  }
  function qc(e, t) {
    Ti(2048, 8, e, t);
  }
  function Ax(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = wi()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function cf(e) {
    var t = Ze().memoizedState;
    return (
      Ax({ ref: t, nextImpl: e }),
      function () {
        if ((Me & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function rf(e, t) {
    return Ti(4, 2, e, t);
  }
  function uf(e, t) {
    return Ti(4, 4, e, t);
  }
  function df(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
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
  function ff(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), Ti(4, 4, df.bind(null, t, e), a));
  }
  function Gc() {}
  function mf(e, t) {
    var a = Ze();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && zc(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
  }
  function gf(e, t) {
    var a = Ze();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && zc(t, n[1])) return n[0];
    if (((n = e()), Ln)) {
      Pt(!0);
      try {
        e();
      } finally {
        Pt(!1);
      }
    }
    return ((a.memoizedState = [n, t]), n);
  }
  function Vc(e, t, a) {
    return a === void 0 || ((Ta & 1073741824) !== 0 && (Ae & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = pm()), (pe.lanes |= e), (ln |= e), a);
  }
  function pf(e, t, a, n) {
    return zt(a, t)
      ? a
      : vl.current !== null
        ? ((e = Vc(e, a, n)), zt(e, t) || ($e = !0), e)
        : (Ta & 42) === 0 || ((Ta & 1073741824) !== 0 && (Ae & 261930) === 0)
          ? (($e = !0), (e.memoizedState = a))
          : ((e = pm()), (pe.lanes |= e), (ln |= e), t);
  }
  function hf(e, t, a, n, l) {
    var i = U.p;
    U.p = i !== 0 && 8 > i ? i : 8;
    var d = S.T,
      g = {};
    ((S.T = g), Kc(e, !1, t, a));
    try {
      var b = l(),
        k = S.S;
      if (
        (k !== null && k(g, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var B = bx(b, n);
        vs(e, t, B, Ht(e));
      } else vs(e, t, n, Ht(e));
    } catch (q) {
      vs(e, t, { then: function () {}, status: "rejected", reason: q }, Ht());
    } finally {
      ((U.p = i),
        d !== null && g.types !== null && (d.types = g.types),
        (S.T = d));
    }
  }
  function Ex() {}
  function Xc(e, t, a, n) {
    if (e.tag !== 5) throw Error(r(476));
    var l = xf(e).queue;
    hf(
      e,
      l,
      t,
      D,
      a === null
        ? Ex
        : function () {
            return (yf(e), a(n));
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
        lastRenderedReducer: ka,
        lastRenderedState: D,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ka,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function yf(e) {
    var t = xf(e);
    (t.next === null && (t = e.alternate.memoizedState),
      vs(e, t.next.queue, {}, Ht()));
  }
  function Qc() {
    return ot(Rs);
  }
  function vf() {
    return Ze().memoizedState;
  }
  function bf() {
    return Ze().memoizedState;
  }
  function Tx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Ht();
          e = Fa(a);
          var n = Ia(t, e, a);
          (n !== null && (kt(n, t, a), gs(n, t, a)),
            (t = { cache: bc() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function kx(e, t, a) {
    var n = Ht();
    ((a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ki(e)
        ? Nf(t, a)
        : ((a = rc(e, t, a, n)), a !== null && (kt(a, e, n), wf(a, t, n))));
  }
  function jf(e, t, a) {
    var n = Ht();
    vs(e, t, a, n);
  }
  function vs(e, t, a, n) {
    var l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ki(e)) Nf(t, l);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var d = t.lastRenderedState,
            g = i(d, a);
          if (((l.hasEagerState = !0), (l.eagerState = g), zt(g, d)))
            return (ci(e, t, l, 0), Ue === null && oi(), !1);
        } catch {
        } finally {
        }
      if (((a = rc(e, t, l, n)), a !== null))
        return (kt(a, e, n), wf(a, t, n), !0);
    }
    return !1;
  }
  function Kc(e, t, a, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: Sr(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ki(e))
    ) {
      if (t) throw Error(r(479));
    } else ((t = rc(e, a, n, 2)), t !== null && kt(t, e, 2));
  }
  function ki(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function Nf(e, t) {
    bl = ji = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function wf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      ((n &= e.pendingLanes), (a |= n), (t.lanes = a), bt(e, a));
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
        return ((yt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ot,
      useEffect: of,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          Ei(4194308, 4, df.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return Ei(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ei(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = yt();
        t = t === void 0 ? null : t;
        var n = e();
        if (Ln) {
          Pt(!0);
          try {
            e();
          } finally {
            Pt(!1);
          }
        }
        return ((a.memoizedState = [n, t]), n);
      },
      useReducer: function (e, t, a) {
        var n = yt();
        if (a !== void 0) {
          var l = a(t);
          if (Ln) {
            Pt(!0);
            try {
              a(t);
            } finally {
              Pt(!1);
            }
          }
        } else l = t;
        return (
          (n.memoizedState = n.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (n.queue = e),
          (e = e.dispatch = kx.bind(null, pe, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = yt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Lc(e);
        var t = e.queue,
          a = jf.bind(null, pe, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Gc,
      useDeferredValue: function (e, t) {
        var a = yt();
        return Vc(a, e, t);
      },
      useTransition: function () {
        var e = Lc(!1);
        return (
          (e = hf.bind(null, pe, e.queue, !0, !1)),
          (yt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var n = pe,
          l = yt();
        if (ke) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = t()), Ue === null)) throw Error(r(349));
          (Ae & 127) !== 0 || Xd(n, t, a);
        }
        l.memoizedState = a;
        var i = { value: a, getSnapshot: t };
        return (
          (l.queue = i),
          of(Kd.bind(null, n, i, e), [e]),
          (n.flags |= 2048),
          Nl(9, { destroy: void 0 }, Qd.bind(null, n, i, a, t), null),
          a
        );
      },
      useId: function () {
        var e = yt(),
          t = Ue.identifierPrefix;
        if (ke) {
          var a = ra,
            n = ca;
          ((a = (n & ~(1 << (32 - ut(n) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Ni++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = jx++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Qc,
      useFormState: tf,
      useActionState: tf,
      useOptimistic: function (e) {
        var t = yt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Kc.bind(null, pe, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Rc,
      useCacheRefresh: function () {
        return (yt().memoizedState = Tx.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = yt(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((Me & 2) !== 0) throw Error(r(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Zc = {
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
        return Ai(ka);
      },
      useDebugValue: Gc,
      useDeferredValue: function (e, t) {
        var a = Ze();
        return pf(a, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ai(ka)[0],
          t = Ze().memoizedState;
        return [typeof e == "boolean" ? e : ys(e), t];
      },
      useSyncExternalStore: Vd,
      useId: vf,
      useHostTransitionStatus: Qc,
      useFormState: af,
      useActionState: af,
      useOptimistic: function (e, t) {
        var a = Ze();
        return Wd(a, Be, e, t);
      },
      useMemoCache: Rc,
      useCacheRefresh: bf,
    };
  Zc.useEffectEvent = cf;
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
      return Uc(ka);
    },
    useDebugValue: Gc,
    useDeferredValue: function (e, t) {
      var a = Ze();
      return Be === null ? Vc(a, e, t) : pf(a, Be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Uc(ka)[0],
        t = Ze().memoizedState;
      return [typeof e == "boolean" ? e : ys(e), t];
    },
    useSyncExternalStore: Vd,
    useId: vf,
    useHostTransitionStatus: Qc,
    useFormState: lf,
    useActionState: lf,
    useOptimistic: function (e, t) {
      var a = Ze();
      return Be !== null
        ? Wd(a, Be, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: Rc,
    useCacheRefresh: bf,
  };
  Af.useEffectEvent = cf;
  function Jc(e, t, a, n) {
    ((t = e.memoizedState),
      (a = a(n, t)),
      (a = a == null ? t : p({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Wc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var n = Ht(),
        l = Fa(n);
      ((l.payload = t),
        a != null && (l.callback = a),
        (t = Ia(e, l, n)),
        t !== null && (kt(t, e, n), gs(t, e, n)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var n = Ht(),
        l = Fa(n);
      ((l.tag = 1),
        (l.payload = t),
        a != null && (l.callback = a),
        (t = Ia(e, l, n)),
        t !== null && (kt(t, e, n), gs(t, e, n)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Ht(),
        n = Fa(a);
      ((n.tag = 2),
        t != null && (n.callback = t),
        (t = Ia(e, n, a)),
        t !== null && (kt(t, e, a), gs(t, e, a)));
    },
  };
  function Ef(e, t, a, n, l, i, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, i, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !is(a, n) || !is(l, i)
          : !0
    );
  }
  function Tf(e, t, a, n) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, n),
      t.state !== e && Wc.enqueueReplaceState(t, t.state, null));
  }
  function Yn(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t) n !== "ref" && (a[n] = t[n]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = p({}, a));
      for (var l in e) a[l] === void 0 && (a[l] = e[l]);
    }
    return a;
  }
  function kf(e) {
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
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function zf(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function $c(e, t, a) {
    return (
      (a = Fa(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        Oi(e, t);
      }),
      a
    );
  }
  function Mf(e) {
    return ((e = Fa(e)), (e.tag = 3), e);
  }
  function Df(e, t, a, n) {
    var l = a.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = n.value;
      ((e.payload = function () {
        return l(i);
      }),
        (e.callback = function () {
          zf(t, a, n);
        }));
    }
    var d = a.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (zf(t, a, n),
          typeof l != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this)));
        var g = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Ox(e, t, a, n, l) {
    if (
      ((a.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && gl(t, a, l, !0),
        (a = Dt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Zt === null ? qi() : a.alternate === null && Qe === 0 && (Qe = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = l),
              n === hi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([n])) : t.add(n),
                  jr(e, n, l)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              n === hi
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
                  jr(e, n, l)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return (jr(e, n, l), qi(), !1);
    }
    if (ke)
      return (
        (t = Dt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = l),
            n !== pc && ((e = Error(r(422), { cause: n })), rs(Vt(e, a))))
          : (n !== pc && ((t = Error(r(423), { cause: n })), rs(Vt(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (n = Vt(n, a)),
            (l = $c(e.stateNode, n, l)),
            Ec(e, l),
            Qe !== 4 && (Qe = 2)),
        !1
      );
    var i = Error(r(520), { cause: n });
    if (
      ((i = Vt(i, a)),
      ks === null ? (ks = [i]) : ks.push(i),
      Qe !== 4 && (Qe = 2),
      t === null)
    )
      return !0;
    ((n = Vt(n, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = l & -l),
            (a.lanes |= e),
            (e = $c(a.stateNode, n, e)),
            Ec(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (i = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (sn === null || !sn.has(i)))))
          )
            return (
              (a.flags |= 65536),
              (l &= -l),
              (a.lanes |= l),
              (l = Mf(l)),
              Df(l, e, a, n),
              Ec(a, l),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Pc = Error(r(461)),
    $e = !1;
  function ct(e, t, a, n) {
    t.child = e === null ? Rd(t, null, a, n) : Un(t, e.child, a, n);
  }
  function _f(e, t, a, n, l) {
    a = a.render;
    var i = t.ref;
    if ("ref" in n) {
      var d = {};
      for (var g in n) g !== "ref" && (d[g] = n[g]);
    } else d = n;
    return (
      _n(t),
      (n = Mc(e, t, a, d, i, l)),
      (g = Dc()),
      e !== null && !$e
        ? (_c(e, t, l), Oa(e, t, l))
        : (ke && g && mc(t), (t.flags |= 1), ct(e, t, n, l), t.child)
    );
  }
  function Bf(e, t, a, n, l) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" &&
        !uc(i) &&
        i.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = i), Rf(e, t, i, n, l))
        : ((e = ui(a.type, null, n, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !sr(e, l))) {
      var d = i.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : is), a(d, n) && e.ref === t.ref)
      )
        return Oa(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = wa(i, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Rf(e, t, a, n, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (is(i, n) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = n = i), sr(e, l)))
          (e.flags & 131072) !== 0 && ($e = !0);
        else return ((t.lanes = e.lanes), Oa(e, t, l));
    }
    return Fc(e, t, a, n, l);
  }
  function Hf(e, t, a, n) {
    var l = n.children,
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
      n.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, l = 0; n !== null; )
            ((l = l | n.lanes | n.childLanes), (n = n.sibling));
          n = l & ~i;
        } else ((n = 0), (t.child = null));
        return Uf(e, t, i, a, n);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gi(t, i !== null ? i.cachePool : null),
          i !== null ? Ld(t, i) : kc(),
          Yd(t));
      else
        return (
          (n = t.lanes = 536870912),
          Uf(e, t, i !== null ? i.baseLanes | a : a, a, n)
        );
    } else
      i !== null
        ? (gi(t, i.cachePool), Ld(t, i), tn(), (t.memoizedState = null))
        : (e !== null && gi(t, null), kc(), tn());
    return (ct(e, t, l, a), t.child);
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
  function Uf(e, t, a, n, l) {
    var i = Nc();
    return (
      (i = i === null ? null : { parent: Je._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: a, cachePool: i }),
      e !== null && gi(t, null),
      kc(),
      Yd(t),
      e !== null && gl(e, t, n, !0),
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
  function Lf(e, t, a) {
    return (
      Un(t, e.child, null, a),
      (e = Ci(t, t.pendingProps)),
      (e.flags |= 2),
      _t(t),
      (t.memoizedState = null),
      e
    );
  }
  function Cx(e, t, a) {
    var n = t.pendingProps,
      l = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (ke) {
        if (n.mode === "hidden")
          return ((e = Ci(t, n)), (t.lanes = 536870912), js(null, e));
        if (
          (Cc(t),
          (e = Le)
            ? ((e = Pm(e, Kt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Za !== null ? { id: ca, overflow: ra } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = jd(e)),
                (a.return = t),
                (t.child = a),
                (it = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw Wa(t);
        return ((t.lanes = 536870912), null);
      }
      return Ci(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var d = i.dehydrated;
      if ((Cc(t), l))
        if (t.flags & 256) ((t.flags &= -257), (t = Lf(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        ($e || gl(e, t, a, !1), (l = (a & e.childLanes) !== 0), $e || l)
      ) {
        if (
          ((n = Ue),
          n !== null && ((d = jt(n, a)), d !== 0 && d !== i.retryLane))
        )
          throw ((i.retryLane = d), Cn(e, d), kt(n, e, d), Pc);
        (qi(), (t = Lf(e, t, a)));
      } else
        ((e = i.treeContext),
          (Le = Jt(d.nextSibling)),
          (it = t),
          (ke = !0),
          (Ja = null),
          (Kt = !1),
          e !== null && Sd(t, e),
          (t = Ci(t, n)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = wa(e.child, { mode: n.mode, children: n.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function zi(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Fc(e, t, a, n, l) {
    return (
      _n(t),
      (a = Mc(e, t, a, n, void 0, l)),
      (n = Dc()),
      e !== null && !$e
        ? (_c(e, t, l), Oa(e, t, l))
        : (ke && n && mc(t), (t.flags |= 1), ct(e, t, a, l), t.child)
    );
  }
  function Yf(e, t, a, n, l, i) {
    return (
      _n(t),
      (t.updateQueue = null),
      (a = Gd(t, n, a, l)),
      qd(e),
      (n = Dc()),
      e !== null && !$e
        ? (_c(e, t, i), Oa(e, t, i))
        : (ke && n && mc(t), (t.flags |= 1), ct(e, t, a, i), t.child)
    );
  }
  function qf(e, t, a, n, l) {
    if ((_n(t), t.stateNode === null)) {
      var i = ul,
        d = a.contextType;
      (typeof d == "object" && d !== null && (i = ot(d)),
        (i = new a(n, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Wc),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = n),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Sc(t),
        (d = a.contextType),
        (i.context = typeof d == "object" && d !== null ? ot(d) : ul),
        (i.state = t.memoizedState),
        (d = a.getDerivedStateFromProps),
        typeof d == "function" && (Jc(t, a, d, n), (i.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((d = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          d !== i.state && Wc.enqueueReplaceState(i, i.state, null),
          hs(t, n, i, l),
          ps(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      i = t.stateNode;
      var g = t.memoizedProps,
        b = Yn(a, g);
      i.props = b;
      var k = i.context,
        B = a.contextType;
      ((d = ul), typeof B == "object" && B !== null && (d = ot(B)));
      var q = a.getDerivedStateFromProps;
      ((B =
        typeof q == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (g = t.pendingProps !== g),
        B ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((g || k !== d) && Tf(t, i, n, d)),
        (Pa = !1));
      var O = t.memoizedState;
      ((i.state = O),
        hs(t, n, i, l),
        ps(),
        (k = t.memoizedState),
        g || O !== k || Pa
          ? (typeof q == "function" && (Jc(t, a, q, n), (k = t.memoizedState)),
            (b = Pa || Ef(t, a, b, n, O, k, d))
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
                (t.memoizedProps = n),
                (t.memoizedState = k)),
            (i.props = n),
            (i.state = k),
            (i.context = d),
            (n = b))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (n = !1)));
    } else {
      ((i = t.stateNode),
        Ac(e, t),
        (d = t.memoizedProps),
        (B = Yn(a, d)),
        (i.props = B),
        (q = t.pendingProps),
        (O = i.context),
        (k = a.contextType),
        (b = ul),
        typeof k == "object" && k !== null && (b = ot(k)),
        (g = a.getDerivedStateFromProps),
        (k =
          typeof g == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d !== q || O !== b) && Tf(t, i, n, b)),
        (Pa = !1),
        (O = t.memoizedState),
        (i.state = O),
        hs(t, n, i, l),
        ps());
      var _ = t.memoizedState;
      d !== q ||
      O !== _ ||
      Pa ||
      (e !== null && e.dependencies !== null && fi(e.dependencies))
        ? (typeof g == "function" && (Jc(t, a, g, n), (_ = t.memoizedState)),
          (B =
            Pa ||
            Ef(t, a, B, n, O, _, b) ||
            (e !== null && e.dependencies !== null && fi(e.dependencies)))
            ? (k ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(n, _, b),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(n, _, b)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (d === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = n),
              (t.memoizedState = _)),
          (i.props = n),
          (i.state = _),
          (i.context = b),
          (n = B))
        : (typeof i.componentDidUpdate != "function" ||
            (d === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (n = !1));
    }
    return (
      (i = n),
      zi(e, t),
      (n = (t.flags & 128) !== 0),
      i || n
        ? ((i = t.stateNode),
          (a =
            n && typeof a.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && n
            ? ((t.child = Un(t, e.child, null, l)),
              (t.child = Un(t, null, a, l)))
            : ct(e, t, a, l),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Oa(e, t, l)),
      e
    );
  }
  function Gf(e, t, a, n) {
    return (Mn(), (t.flags |= 256), ct(e, t, a, n), t.child);
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
  function tr(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Rt), e);
  }
  function Vf(e, t, a) {
    var n = t.pendingProps,
      l = !1,
      i = (t.flags & 128) !== 0,
      d;
    if (
      ((d = i) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Ke.current & 2) !== 0),
      d && ((l = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (ke) {
        if (
          (l ? en(t) : tn(),
          (e = Le)
            ? ((e = Pm(e, Kt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Za !== null ? { id: ca, overflow: ra } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = jd(e)),
                (a.return = t),
                (t.child = a),
                (it = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw Wa(t);
        return (Hr(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var g = n.children;
      return (
        (n = n.fallback),
        l
          ? (tn(),
            (l = t.mode),
            (g = Mi({ mode: "hidden", children: g }, l)),
            (n = zn(n, l, a, null)),
            (g.return = t),
            (n.return = t),
            (g.sibling = n),
            (t.child = g),
            (n = t.child),
            (n.memoizedState = er(a)),
            (n.childLanes = tr(e, d, a)),
            (t.memoizedState = Ic),
            js(null, n))
          : (en(t), ar(t, g))
      );
    }
    var b = e.memoizedState;
    if (b !== null && ((g = b.dehydrated), g !== null)) {
      if (i)
        t.flags & 256
          ? (en(t), (t.flags &= -257), (t = nr(e, t, a)))
          : t.memoizedState !== null
            ? (tn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (tn(),
              (g = n.fallback),
              (l = t.mode),
              (n = Mi({ mode: "visible", children: n.children }, l)),
              (g = zn(g, l, a, null)),
              (g.flags |= 2),
              (n.return = t),
              (g.return = t),
              (n.sibling = g),
              (t.child = n),
              Un(t, e.child, null, a),
              (n = t.child),
              (n.memoizedState = er(a)),
              (n.childLanes = tr(e, d, a)),
              (t.memoizedState = Ic),
              (t = js(null, n)));
      else if ((en(t), Hr(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var k = d.dgst;
        ((d = k),
          (n = Error(r(419))),
          (n.stack = ""),
          (n.digest = d),
          rs({ value: n, source: null, stack: null }),
          (t = nr(e, t, a)));
      } else if (
        ($e || gl(e, t, a, !1), (d = (a & e.childLanes) !== 0), $e || d)
      ) {
        if (
          ((d = Ue),
          d !== null && ((n = jt(d, a)), n !== 0 && n !== b.retryLane))
        )
          throw ((b.retryLane = n), Cn(e, n), kt(d, e, n), Pc);
        (Rr(g) || qi(), (t = nr(e, t, a)));
      } else
        Rr(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = b.treeContext),
            (Le = Jt(g.nextSibling)),
            (it = t),
            (ke = !0),
            (Ja = null),
            (Kt = !1),
            e !== null && Sd(t, e),
            (t = ar(t, n.children)),
            (t.flags |= 4096));
      return t;
    }
    return l
      ? (tn(),
        (g = n.fallback),
        (l = t.mode),
        (b = e.child),
        (k = b.sibling),
        (n = wa(b, { mode: "hidden", children: n.children })),
        (n.subtreeFlags = b.subtreeFlags & 65011712),
        k !== null ? (g = wa(k, g)) : ((g = zn(g, l, a, null)), (g.flags |= 2)),
        (g.return = t),
        (n.return = t),
        (n.sibling = g),
        (t.child = n),
        js(null, n),
        (n = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = er(a))
          : ((l = g.cachePool),
            l !== null
              ? ((b = Je._currentValue),
                (l = l.parent !== b ? { parent: b, pool: b } : l))
              : (l = Cd()),
            (g = { baseLanes: g.baseLanes | a, cachePool: l })),
        (n.memoizedState = g),
        (n.childLanes = tr(e, d, a)),
        (t.memoizedState = Ic),
        js(e.child, n))
      : (en(t),
        (a = e.child),
        (e = a.sibling),
        (a = wa(a, { mode: "visible", children: n.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((d = t.deletions),
          d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function ar(e, t) {
    return (
      (t = Mi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mi(e, t) {
    return ((e = Mt(22, e, null, t)), (e.lanes = 0), e);
  }
  function nr(e, t, a) {
    return (
      Un(t, e.child, null, a),
      (e = ar(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Xf(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    (n !== null && (n.lanes |= t), yc(e.return, t, a));
  }
  function lr(e, t, a, n, l, i) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: a,
          tailMode: l,
          treeForkCount: i,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = n),
        (d.tail = a),
        (d.tailMode = l),
        (d.treeForkCount = i));
  }
  function Qf(e, t, a) {
    var n = t.pendingProps,
      l = n.revealOrder,
      i = n.tail;
    n = n.children;
    var d = Ke.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      R(Ke, d),
      ct(e, t, n, a),
      (n = ke ? cs : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xf(e, a, t);
        else if (e.tag === 19) Xf(e, a, t);
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
        for (a = t.child, l = null; a !== null; )
          ((e = a.alternate),
            e !== null && bi(e) === null && (l = a),
            (a = a.sibling));
        ((a = l),
          a === null
            ? ((l = t.child), (t.child = null))
            : ((l = a.sibling), (a.sibling = null)),
          lr(t, !1, l, a, i, n));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && bi(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = a), (a = l), (l = e));
        }
        lr(t, !0, a, null, i, n);
        break;
      case "together":
        lr(t, !1, null, null, void 0, n);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Oa(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (ln |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((gl(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        e = t.child, a = wa(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (a = a.sibling = wa(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function sr(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && fi(e)));
  }
  function zx(e, t, a) {
    switch (t.tag) {
      case 3:
        (de(t, t.stateNode.containerInfo),
          $a(t, Je, e.memoizedState.cache),
          Mn());
        break;
      case 27:
      case 5:
        nt(t);
        break;
      case 4:
        de(t, t.stateNode.containerInfo);
        break;
      case 10:
        $a(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Cc(t), null);
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null
            ? (en(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Vf(e, t, a)
              : (en(t), (e = Oa(e, t, a)), e !== null ? e.sibling : null);
        en(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((n = (a & t.childLanes) !== 0),
          n || (gl(e, t, a, !1), (n = (a & t.childLanes) !== 0)),
          l)
        ) {
          if (n) return Qf(e, t, a);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          R(Ke, Ke.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Hf(e, t, a, t.pendingProps));
      case 24:
        $a(t, Je, e.memoizedState.cache);
    }
    return Oa(e, t, a);
  }
  function Kf(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) $e = !0;
      else {
        if (!sr(e, a) && (t.flags & 128) === 0) return (($e = !1), zx(e, t, a));
        $e = (e.flags & 131072) !== 0;
      }
    else (($e = !1), ke && (t.flags & 1048576) !== 0 && wd(t, cs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (((e = Rn(t.elementType)), (t.type = e), typeof e == "function"))
            uc(e)
              ? ((n = Yn(e, n)), (t.tag = 1), (t = qf(null, t, e, n, a)))
              : ((t.tag = 0), (t = Fc(null, t, e, n, a)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === P) {
                ((t.tag = 11), (t = _f(null, t, e, n, a)));
                break e;
              } else if (l === Q) {
                ((t.tag = 14), (t = Bf(null, t, e, n, a)));
                break e;
              }
            }
            throw ((t = ve(e) || e), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return Fc(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((n = t.type), (l = Yn(n, t.pendingProps)), qf(e, t, n, l, a));
      case 3:
        e: {
          if ((de(t, t.stateNode.containerInfo), e === null))
            throw Error(r(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          ((l = i.element), Ac(e, t), hs(t, n, null, a));
          var d = t.memoizedState;
          if (
            ((n = d.cache),
            $a(t, Je, n),
            n !== i.cache && vc(t, [Je], a, !0),
            ps(),
            (n = d.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: n, isDehydrated: !1, cache: d.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = Gf(e, t, n, a);
              break e;
            } else if (n !== l) {
              ((l = Vt(Error(r(424)), t)), rs(l), (t = Gf(e, t, n, a)));
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
                  ke = !0,
                  Ja = null,
                  Kt = !0,
                  a = Rd(t, null, n, a),
                  t.child = a;
                a;

              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Mn(), n === l)) {
              t = Oa(e, t, a);
              break e;
            }
            ct(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          zi(e, t),
          e === null
            ? (a = ng(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : ke ||
                ((a = t.type),
                (e = t.pendingProps),
                (n = Ji(oe.current).createElement(a)),
                (n[st] = t),
                (n[Nt] = e),
                rt(n, a, e),
                tt(n),
                (t.stateNode = n))
            : (t.memoizedState = ng(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          nt(t),
          e === null &&
            ke &&
            ((n = t.stateNode = eg(t.type, t.pendingProps, oe.current)),
            (it = t),
            (Kt = !0),
            (l = Le),
            un(t.type) ? ((Ur = l), (Le = Jt(n.firstChild))) : (Le = l)),
          ct(e, t, t.pendingProps.children, a),
          zi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            ke &&
            ((l = n = Le) &&
              ((n = oy(n, t.type, t.pendingProps, Kt)),
              n !== null
                ? ((t.stateNode = n),
                  (it = t),
                  (Le = Jt(n.firstChild)),
                  (Kt = !1),
                  (l = !0))
                : (l = !1)),
            l || Wa(t)),
          nt(t),
          (l = t.type),
          (i = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (n = i.children),
          Dr(l, i) ? (n = null) : d !== null && Dr(l, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((l = Mc(e, t, Nx, null, null, a)), (Rs._currentValue = l)),
          zi(e, t),
          ct(e, t, n, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            ke &&
            ((e = a = Le) &&
              ((a = cy(a, t.pendingProps, Kt)),
              a !== null
                ? ((t.stateNode = a), (it = t), (Le = null), (e = !0))
                : (e = !1)),
            e || Wa(t)),
          null
        );
      case 13:
        return Vf(e, t, a);
      case 4:
        return (
          de(t, t.stateNode.containerInfo),
          (n = t.pendingProps),
          e === null ? (t.child = Un(t, null, n, a)) : ct(e, t, n, a),
          t.child
        );
      case 11:
        return _f(e, t, t.type, t.pendingProps, a);
      case 7:
        return (ct(e, t, t.pendingProps, a), t.child);
      case 8:
        return (ct(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (ct(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (n = t.pendingProps),
          $a(t, t.type, n.value),
          ct(e, t, n.children, a),
          t.child
        );
      case 9:
        return (
          (l = t.type._context),
          (n = t.pendingProps.children),
          _n(t),
          (l = ot(l)),
          (n = n(l)),
          (t.flags |= 1),
          ct(e, t, n, a),
          t.child
        );
      case 14:
        return Bf(e, t, t.type, t.pendingProps, a);
      case 15:
        return Rf(e, t, t.type, t.pendingProps, a);
      case 19:
        return Qf(e, t, a);
      case 31:
        return Cx(e, t, a);
      case 22:
        return Hf(e, t, a, t.pendingProps);
      case 24:
        return (
          _n(t),
          (n = ot(Je)),
          e === null
            ? ((l = Nc()),
              l === null &&
                ((l = Ue),
                (i = bc()),
                (l.pooledCache = i),
                i.refCount++,
                i !== null && (l.pooledCacheLanes |= a),
                (l = i)),
              (t.memoizedState = { parent: n, cache: l }),
              Sc(t),
              $a(t, Je, l))
            : ((e.lanes & a) !== 0 && (Ac(e, t), hs(t, null, null, a), ps()),
              (l = e.memoizedState),
              (i = t.memoizedState),
              l.parent !== n
                ? ((l = { parent: n, cache: n }),
                  (t.memoizedState = l),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = l),
                  $a(t, Je, n))
                : ((n = i.cache),
                  $a(t, Je, n),
                  n !== l.cache && vc(t, [Je], a, !0))),
          ct(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Ca(e) {
    e.flags |= 4;
  }
  function ir(e, t, a, n, l) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (vm()) e.flags |= 8192;
        else throw ((Hn = hi), wc);
    } else e.flags &= -16777217;
  }
  function Zf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !cg(t)))
      if (vm()) e.flags |= 8192;
      else throw ((Hn = hi), wc);
  }
  function Di(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? dt() : 536870912), (e.lanes |= t), (El |= t)));
  }
  function Ns(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var n = null; a !== null; )
            (a.alternate !== null && (n = a), (a = a.sibling));
          n === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
      }
  }
  function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      n = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((a |= l.lanes | l.childLanes),
          (n |= l.subtreeFlags & 65011712),
          (n |= l.flags & 65011712),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((a |= l.lanes | l.childLanes),
          (n |= l.subtreeFlags),
          (n |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = a), t);
  }
  function Mx(e, t, a) {
    var n = t.pendingProps;
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
          (a = t.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Ea(Je),
          Te(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (ml(t)
              ? Ca(t)
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
            ? (Ca(t),
              i !== null ? (Ye(t), Zf(t, i)) : (Ye(t), ir(t, l, null, n, a)))
            : i
              ? i !== e.memoizedState
                ? (Ca(t), Ye(t), Zf(t, i))
                : (Ye(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && Ca(t),
                Ye(t),
                ir(t, l, e, n, a)),
          null
        );
      case 27:
        if (
          (gt(t),
          (a = oe.current),
          (l = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== n && Ca(t);
        else {
          if (!n) {
            if (t.stateNode === null) throw Error(r(166));
            return (Ye(t), null);
          }
          ((e = X.current),
            ml(t) ? Ad(t) : ((e = eg(l, n, a)), (t.stateNode = e), Ca(t)));
        }
        return (Ye(t), null);
      case 5:
        if ((gt(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== n && Ca(t);
        else {
          if (!n) {
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
                      typeof n.is == "string"
                        ? d.createElement("select", { is: n.is })
                        : d.createElement("select")),
                      n.multiple
                        ? (i.multiple = !0)
                        : n.size && (i.size = n.size));
                    break;
                  default:
                    i =
                      typeof n.is == "string"
                        ? d.createElement(l, { is: n.is })
                        : d.createElement(l);
                }
            }
            ((i[st] = t), (i[Nt] = n));
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
            e: switch ((rt(i, l, n), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && Ca(t);
          }
        }
        return (
          Ye(t),
          ir(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== n && Ca(t);
        else {
          if (typeof n != "string" && t.stateNode === null) throw Error(r(166));
          if (((e = oe.current), ml(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (n = null),
              (l = it),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  n = l.memoizedProps;
              }
            ((e[st] = t),
              (e = !!(
                e.nodeValue === a ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                Vm(e.nodeValue, a)
              )),
              e || Wa(t, !0));
          } else
            ((e = Ji(e).createTextNode(n)), (e[st] = t), (t.stateNode = e));
        }
        return (Ye(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = ml(t)), a !== null)) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(r(557));
              e[st] = t;
            } else
              (Mn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (e = !1));
          } else
            ((a = hc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (Ye(t), null);
      case 13:
        if (
          ((n = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = ml(t)), n !== null && n.dehydrated !== null)) {
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
              (Mn(),
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
            ? ((t.lanes = a), t)
            : ((a = n !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((n = t.child),
                (l = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (l = n.alternate.memoizedState.cachePool.pool),
                (i = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (i = n.memoizedState.cachePool.pool),
                i !== l && (n.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              Di(t, t.updateQueue),
              Ye(t),
              null)
        );
      case 4:
        return (Te(), e === null && kr(t.stateNode.containerInfo), Ye(t), null);
      case 10:
        return (Ea(t.type), Ye(t), null);
      case 19:
        if ((H(Ke), (n = t.memoizedState), n === null)) return (Ye(t), null);
        if (((l = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (l) Ns(n, !1);
          else {
            if (Qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = bi(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Ns(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Di(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    (bd(a, e), (a = a.sibling));
                  return (
                    R(Ke, (Ke.current & 1) | 2),
                    ke && Sa(t, n.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              ht() > Ui &&
              ((t.flags |= 128), (l = !0), Ns(n, !1), (t.lanes = 4194304));
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
                Ns(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !ke)
              )
                return (Ye(t), null);
            } else
              2 * ht() - n.renderingStartTime > Ui &&
                a !== 536870912 &&
                ((t.flags |= 128), (l = !0), Ns(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = n.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((e = n.tail),
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = ht()),
            (e.sibling = null),
            (a = Ke.current),
            R(Ke, l ? (a & 1) | 2 : a & 1),
            ke && Sa(t, n.treeForkCount),
            e)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          _t(t),
          Oc(),
          (n = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
            : n && (t.flags |= 8192),
          n
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ye(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ye(t),
          (a = t.updateQueue),
          a !== null && Di(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (n = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          n !== a && (t.flags |= 2048),
          e !== null && H(Bn),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Ea(Je),
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
          Ea(Je),
          Te(),
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
          Mn();
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
          Mn();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (H(Ke), null);
      case 4:
        return (Te(), null);
      case 10:
        return (Ea(t.type), null);
      case 22:
      case 23:
        return (
          _t(t),
          Oc(),
          e !== null && H(Bn),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Ea(Je), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jf(e, t) {
    switch ((gc(t), t.tag)) {
      case 3:
        (Ea(Je), Te());
        break;
      case 26:
      case 27:
      case 5:
        gt(t);
        break;
      case 4:
        Te();
        break;
      case 31:
        t.memoizedState !== null && _t(t);
        break;
      case 13:
        _t(t);
        break;
      case 19:
        H(Ke);
        break;
      case 10:
        Ea(t.type);
        break;
      case 22:
      case 23:
        (_t(t), Oc(), e !== null && H(Bn));
        break;
      case 24:
        Ea(Je);
    }
  }
  function ws(e, t) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var l = n.next;
        a = l;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var i = a.create,
              d = a.inst;
            ((n = i()), (d.destroy = n));
          }
          a = a.next;
        } while (a !== l);
      }
    } catch (g) {
      _e(t, t.return, g);
    }
  }
  function an(e, t, a) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var d = n.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (l = t));
              var b = a,
                k = g;
              try {
                k();
              } catch (B) {
                _e(l, b, B);
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (B) {
      _e(t, t.return, B);
    }
  }
  function Wf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Ud(t, a);
      } catch (n) {
        _e(e, e.return, n);
      }
    }
  }
  function $f(e, t, a) {
    ((a.props = Yn(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (n) {
      _e(e, t, n);
    }
  }
  function Ss(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(n)) : (a.current = n);
      }
    } catch (l) {
      _e(e, t, l);
    }
  }
  function ua(e, t) {
    var a = e.ref,
      n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (l) {
          _e(e, t, l);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (l) {
          _e(e, t, l);
        }
      else a.current = null;
  }
  function Pf(e) {
    var t = e.type,
      a = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function or(e, t, a) {
    try {
      var n = e.stateNode;
      (ty(n, e.type, a, t), (n[Nt] = t));
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function Ff(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && un(e.type)) ||
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
          (e.tag === 27 && un(e.type)) ||
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
  function rr(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = ja)));
    else if (
      n !== 4 &&
      (n === 27 && un(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (rr(e, t, a), e = e.sibling; e !== null; )
        (rr(e, t, a), (e = e.sibling));
  }
  function _i(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      n !== 4 &&
      (n === 27 && un(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (_i(e, t, a), e = e.sibling; e !== null; )
        (_i(e, t, a), (e = e.sibling));
  }
  function If(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var n = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      (rt(t, n, a), (t[st] = e), (t[Nt] = a));
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var za = !1,
    Pe = !1,
    ur = !1,
    em = typeof WeakSet == "function" ? WeakSet : Set,
    at = null;
  function _x(e, t) {
    if (((e = e.containerInfo), (zr = to), (e = dd(e)), nc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var l = n.anchorOffset,
              i = n.focusNode;
            n = n.focusOffset;
            try {
              (a.nodeType, i.nodeType);
            } catch {
              a = null;
              break e;
            }
            var d = 0,
              g = -1,
              b = -1,
              k = 0,
              B = 0,
              q = e,
              O = null;
            t: for (;;) {
              for (
                var _;
                q !== a || (l !== 0 && q.nodeType !== 3) || (g = d + l),
                  q !== i || (n !== 0 && q.nodeType !== 3) || (b = d + n),
                  q.nodeType === 3 && (d += q.nodeValue.length),
                  (_ = q.firstChild) !== null;

              )
                ((O = q), (q = _));
              for (;;) {
                if (q === e) break t;
                if (
                  (O === a && ++k === l && (g = d),
                  O === i && ++B === n && (b = d),
                  (_ = q.nextSibling) !== null)
                )
                  break;
                ((q = O), (O = q.parentNode));
              }
              q = _;
            }
            a = g === -1 || b === -1 ? null : { start: g, end: b };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Mr = { focusedElem: e, selectionRange: a }, to = !1, at = t;
      at !== null;

    )
      if (
        ((t = at), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (at = e));
      else
        for (; at !== null; ) {
          switch (((t = at), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((l = e[a]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (a = t),
                  (l = i.memoizedProps),
                  (i = i.memoizedState),
                  (n = a.stateNode));
                try {
                  var F = Yn(a.type, l);
                  ((e = n.getSnapshotBeforeUpdate(F, i)),
                    (n.__reactInternalSnapshotBeforeUpdate = e));
                } catch (ue) {
                  _e(a, a.return, ue);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Br(e);
                else if (a === 1)
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
            ((e.return = t.return), (at = e));
            break;
          }
          at = t.return;
        }
  }
  function tm(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Da(e, a), n & 4 && ws(5, a));
        break;
      case 1:
        if ((Da(e, a), n & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (d) {
              _e(a, a.return, d);
            }
          else {
            var l = Yn(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              _e(a, a.return, d);
            }
          }
        (n & 64 && Wf(a), n & 512 && Ss(a, a.return));
        break;
      case 3:
        if ((Da(e, a), n & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ud(e, t);
          } catch (d) {
            _e(a, a.return, d);
          }
        }
        break;
      case 27:
        t === null && n & 4 && If(a);
      case 26:
      case 5:
        (Da(e, a), t === null && n & 4 && Pf(a), n & 512 && Ss(a, a.return));
        break;
      case 12:
        Da(e, a);
        break;
      case 31:
        (Da(e, a), n & 4 && lm(e, a));
        break;
      case 13:
        (Da(e, a),
          n & 4 && sm(e, a),
          n & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = Vx.bind(null, a)), ry(e, a)))));
        break;
      case 22:
        if (((n = a.memoizedState !== null || za), !n)) {
          ((t = (t !== null && t.memoizedState !== null) || Pe), (l = za));
          var i = Pe;
          ((za = n),
            (Pe = t) && !i ? _a(e, a, (a.subtreeFlags & 8772) !== 0) : Da(e, a),
            (za = l),
            (Pe = i));
        }
        break;
      case 30:
        break;
      default:
        Da(e, a);
    }
  }
  function am(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), am(t)),
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
  function Ma(e, t, a) {
    for (a = a.child; a !== null; ) (nm(e, t, a), (a = a.sibling));
  }
  function nm(e, t, a) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(wn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Pe || ua(a, t),
          Ma(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Pe || ua(a, t);
        var n = Ge,
          l = St;
        (un(a.type) && ((Ge = a.stateNode), (St = !1)),
          Ma(e, t, a),
          Ds(a.stateNode),
          (Ge = n),
          (St = l));
        break;
      case 5:
        Pe || ua(a, t);
      case 6:
        if (
          ((n = Ge),
          (l = St),
          (Ge = null),
          Ma(e, t, a),
          (Ge = n),
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
              ).removeChild(a.stateNode);
            } catch (i) {
              _e(a, t, i);
            }
          else
            try {
              Ge.removeChild(a.stateNode);
            } catch (i) {
              _e(a, t, i);
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
                a.stateNode
              ),
              _l(e))
            : Wm(Ge, a.stateNode));
        break;
      case 4:
        ((n = Ge),
          (l = St),
          (Ge = a.stateNode.containerInfo),
          (St = !0),
          Ma(e, t, a),
          (Ge = n),
          (St = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (an(2, a, t), Pe || an(4, a, t), Ma(e, t, a));
        break;
      case 1:
        (Pe ||
          (ua(a, t),
          (n = a.stateNode),
          typeof n.componentWillUnmount == "function" && $f(a, t, n)),
          Ma(e, t, a));
        break;
      case 21:
        Ma(e, t, a);
        break;
      case 22:
        ((Pe = (n = Pe) || a.memoizedState !== null), Ma(e, t, a), (Pe = n));
        break;
      default:
        Ma(e, t, a);
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
      } catch (a) {
        _e(t, t.return, a);
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
      } catch (a) {
        _e(t, t.return, a);
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
    var a = Bx(e);
    t.forEach(function (n) {
      if (!a.has(n)) {
        a.add(n);
        var l = Xx.bind(null, e, n);
        n.then(l, l);
      }
    });
  }
  function At(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var l = a[n],
          i = e,
          d = t,
          g = d;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (un(g.type)) {
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
        (nm(i, d, l),
          (Ge = null),
          (St = !1),
          (i = l.alternate),
          i !== null && (i.return = null),
          (l.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (im(t, e), (t = t.sibling));
  }
  var ea = null;
  function im(e, t) {
    var a = e.alternate,
      n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (At(t, e),
          Et(e),
          n & 4 && (an(3, e, e.return), ws(3, e), an(5, e, e.return)));
        break;
      case 1:
        (At(t, e),
          Et(e),
          n & 512 && (Pe || a === null || ua(a, a.return)),
          n & 64 &&
            za &&
            ((e = e.updateQueue),
            e !== null &&
              ((n = e.callbacks),
              n !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
        break;
      case 26:
        var l = ea;
        if (
          (At(t, e),
          Et(e),
          n & 512 && (Pe || a === null || ua(a, a.return)),
          n & 4)
        ) {
          var i = a !== null ? a.memoizedState : null;
          if (((n = e.memoizedState), a === null))
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  ((n = e.type),
                    (a = e.memoizedProps),
                    (l = l.ownerDocument || l));
                  t: switch (n) {
                    case "title":
                      ((i = l.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Pl] ||
                          i[st] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = l.createElement(n)),
                          l.head.insertBefore(
                            i,
                            l.querySelector("head > title")
                          )),
                        rt(i, n, a),
                        (i[st] = e),
                        tt(i),
                        (n = i));
                      break e;
                    case "link":
                      var d = ig("link", "href", l).get(n + (a.href || ""));
                      if (d) {
                        for (var g = 0; g < d.length; g++)
                          if (
                            ((i = d[g]),
                            i.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              i.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              i.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              i.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((i = l.createElement(n)),
                        rt(i, n, a),
                        l.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (d = ig("meta", "content", l).get(
                          n + (a.content || "")
                        ))
                      ) {
                        for (g = 0; g < d.length; g++)
                          if (
                            ((i = d[g]),
                            i.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              i.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              i.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              i.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            d.splice(g, 1);
                            break t;
                          }
                      }
                      ((i = l.createElement(n)),
                        rt(i, n, a),
                        l.head.appendChild(i));
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  ((i[st] = e), tt(i), (n = i));
                }
                e.stateNode = n;
              } else og(l, e.type, e.stateNode);
            else e.stateNode = sg(l, n, e.memoizedProps);
          else
            i !== n
              ? (i === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : i.count--,
                n === null
                  ? og(l, e.type, e.stateNode)
                  : sg(l, n, e.memoizedProps))
              : n === null &&
                e.stateNode !== null &&
                or(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (At(t, e),
          Et(e),
          n & 512 && (Pe || a === null || ua(a, a.return)),
          a !== null && n & 4 && or(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (At(t, e),
          Et(e),
          n & 512 && (Pe || a === null || ua(a, a.return)),
          e.flags & 32)
        ) {
          l = e.stateNode;
          try {
            nl(l, "");
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        (n & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), or(e, l, a !== null ? a.memoizedProps : l)),
          n & 1024 && (ur = !0));
        break;
      case 6:
        if ((At(t, e), Et(e), n & 4)) {
          if (e.stateNode === null) throw Error(r(162));
          ((n = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = n;
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        break;
      case 3:
        if (
          ((Pi = null),
          (l = ea),
          (ea = Wi(t.containerInfo)),
          At(t, e),
          (ea = l),
          Et(e),
          n & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            _l(t.containerInfo);
          } catch (F) {
            _e(e, e.return, F);
          }
        ur && ((ur = !1), om(e));
        break;
      case 4:
        ((n = ea),
          (ea = Wi(e.stateNode.containerInfo)),
          At(t, e),
          Et(e),
          (ea = n));
        break;
      case 12:
        (At(t, e), Et(e));
        break;
      case 31:
        (At(t, e),
          Et(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Bi(e, n))));
        break;
      case 13:
        (At(t, e),
          Et(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Hi = ht()),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Bi(e, n))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var b = a !== null && a.memoizedState !== null,
          k = za,
          B = Pe;
        if (
          ((za = k || l),
          (Pe = B || b),
          At(t, e),
          (Pe = B),
          (za = k),
          Et(e),
          n & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = l ? t._visibility & -2 : t._visibility | 1,
              l && (a === null || b || za || Pe || qn(e)),
              a = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                b = a = t;
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
              if (a === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = l ? "" : b.memoizedProps;
                } catch (F) {
                  _e(b, b.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
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
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        n & 4 &&
          ((n = e.updateQueue),
          n !== null &&
            ((a = n.retryQueue),
            a !== null && ((n.retryQueue = null), Bi(e, a))));
        break;
      case 19:
        (At(t, e),
          Et(e),
          n & 4 &&
            ((n = e.updateQueue),
            n !== null && ((e.updateQueue = null), Bi(e, n))));
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
        for (var a, n = e.return; n !== null; ) {
          if (Ff(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var l = a.stateNode,
              i = cr(e);
            _i(e, i, l);
            break;
          case 5:
            var d = a.stateNode;
            a.flags & 32 && (nl(d, ""), (a.flags &= -33));
            var g = cr(e);
            _i(e, g, d);
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo,
              k = cr(e);
            rr(e, k, b);
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
  function Da(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (tm(e, t.alternate, t), (t = t.sibling));
  }
  function qn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (an(4, t, t.return), qn(t));
          break;
        case 1:
          ua(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && $f(t, t.return, a),
            qn(t));
          break;
        case 27:
          Ds(t.stateNode);
        case 26:
        case 5:
          (ua(t, t.return), qn(t));
          break;
        case 22:
          t.memoizedState === null && qn(t);
          break;
        case 30:
          qn(t);
          break;
        default:
          qn(t);
      }
      e = e.sibling;
    }
  }
  function _a(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate,
        l = e,
        i = t,
        d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (_a(l, i, a), ws(4, i));
          break;
        case 1:
          if (
            (_a(l, i, a),
            (n = i),
            (l = n.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (k) {
              _e(n, n.return, k);
            }
          if (((n = i), (l = n.updateQueue), l !== null)) {
            var g = n.stateNode;
            try {
              var b = l.shared.hiddenCallbacks;
              if (b !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < b.length; l++)
                  Hd(b[l], g);
            } catch (k) {
              _e(n, n.return, k);
            }
          }
          (a && d & 64 && Wf(i), Ss(i, i.return));
          break;
        case 27:
          If(i);
        case 26:
        case 5:
          (_a(l, i, a), a && n === null && d & 4 && Pf(i), Ss(i, i.return));
          break;
        case 12:
          _a(l, i, a);
          break;
        case 31:
          (_a(l, i, a), a && d & 4 && lm(l, i));
          break;
        case 13:
          (_a(l, i, a), a && d & 4 && sm(l, i));
          break;
        case 22:
          (i.memoizedState === null && _a(l, i, a), Ss(i, i.return));
          break;
        case 30:
          break;
        default:
          _a(l, i, a);
      }
      t = t.sibling;
    }
  }
  function dr(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && us(a)));
  }
  function fr(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && us(e)));
  }
  function ta(e, t, a, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (cm(e, t, a, n), (t = t.sibling));
  }
  function cm(e, t, a, n) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ta(e, t, a, n), l & 2048 && ws(9, t));
        break;
      case 1:
        ta(e, t, a, n);
        break;
      case 3:
        (ta(e, t, a, n),
          l & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && us(e))));
        break;
      case 12:
        if (l & 2048) {
          (ta(e, t, a, n), (e = t.stateNode));
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
        } else ta(e, t, a, n);
        break;
      case 31:
        ta(e, t, a, n);
        break;
      case 13:
        ta(e, t, a, n);
        break;
      case 23:
        break;
      case 22:
        ((i = t.stateNode),
          (d = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? ta(e, t, a, n)
              : As(e, t)
            : i._visibility & 2
              ? ta(e, t, a, n)
              : ((i._visibility |= 2),
                wl(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && dr(d, t));
        break;
      case 24:
        (ta(e, t, a, n), l & 2048 && fr(t.alternate, t));
        break;
      default:
        ta(e, t, a, n);
    }
  }
  function wl(e, t, a, n, l) {
    for (
      l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var i = e,
        d = t,
        g = a,
        b = n,
        k = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (wl(i, d, g, b, l), ws(8, d));
          break;
        case 23:
          break;
        case 22:
          var B = d.stateNode;
          (d.memoizedState !== null
            ? B._visibility & 2
              ? wl(i, d, g, b, l)
              : As(i, d)
            : ((B._visibility |= 2), wl(i, d, g, b, l)),
            l && k & 2048 && dr(d.alternate, d));
          break;
        case 24:
          (wl(i, d, g, b, l), l && k & 2048 && fr(d.alternate, d));
          break;
        default:
          wl(i, d, g, b, l);
      }
      t = t.sibling;
    }
  }
  function As(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          n = t,
          l = n.flags;
        switch (n.tag) {
          case 22:
            (As(a, n), l & 2048 && dr(n.alternate, n));
            break;
          case 24:
            (As(a, n), l & 2048 && fr(n.alternate, n));
            break;
          default:
            As(a, n);
        }
        t = t.sibling;
      }
  }
  var Es = 8192;
  function Sl(e, t, a) {
    if (e.subtreeFlags & Es)
      for (e = e.child; e !== null; ) (rm(e, t, a), (e = e.sibling));
  }
  function rm(e, t, a) {
    switch (e.tag) {
      case 26:
        (Sl(e, t, a),
          e.flags & Es &&
            e.memoizedState !== null &&
            jy(a, ea, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Sl(e, t, a);
        break;
      case 3:
      case 4:
        var n = ea;
        ((ea = Wi(e.stateNode.containerInfo)), Sl(e, t, a), (ea = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = Es), (Es = 16777216), Sl(e, t, a), (Es = n))
            : Sl(e, t, a));
        break;
      default:
        Sl(e, t, a);
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
  function Ts(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((at = n), fm(n, e));
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
        (Ts(e), e.flags & 2048 && an(9, e, e.return));
        break;
      case 3:
        Ts(e);
        break;
      case 12:
        Ts(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Ri(e))
          : Ts(e);
        break;
      default:
        Ts(e);
    }
  }
  function Ri(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          ((at = n), fm(n, e));
        }
      um(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (an(8, t, t.return), Ri(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Ri(t)));
          break;
        default:
          Ri(t);
      }
      e = e.sibling;
    }
  }
  function fm(e, t) {
    for (; at !== null; ) {
      var a = at;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          an(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          us(a.memoizedState.cache);
      }
      if (((n = a.child), n !== null)) ((n.return = a), (at = n));
      else
        e: for (a = e; at !== null; ) {
          n = at;
          var l = n.sibling,
            i = n.return;
          if ((am(n), n === a)) {
            at = null;
            break e;
          }
          if (l !== null) {
            ((l.return = i), (at = l));
            break e;
          }
          at = i;
        }
    }
  }
  var Rx = {
      getCacheForType: function (e) {
        var t = ot(Je),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return ot(Je).controller.signal;
      },
    },
    Hx = typeof WeakMap == "function" ? WeakMap : Map,
    Me = 0,
    Ue = null,
    we = null,
    Ae = 0,
    De = 0,
    Bt = null,
    nn = !1,
    Al = !1,
    mr = !1,
    Ba = 0,
    Qe = 0,
    ln = 0,
    Gn = 0,
    gr = 0,
    Rt = 0,
    El = 0,
    ks = null,
    Tt = null,
    pr = !1,
    Hi = 0,
    mm = 0,
    Ui = 1 / 0,
    Li = null,
    sn = null,
    Fe = 0,
    on = null,
    Tl = null,
    Ra = 0,
    hr = 0,
    xr = null,
    gm = null,
    Os = 0,
    yr = null;
  function Ht() {
    return (Me & 2) !== 0 && Ae !== 0 ? Ae & -Ae : S.T !== null ? Sr() : Uo();
  }
  function pm() {
    if (Rt === 0)
      if ((Ae & 536870912) === 0 || ke) {
        var e = Wn;
        ((Wn <<= 1), (Wn & 3932160) === 0 && (Wn = 262144), (Rt = e));
      } else Rt = 536870912;
    return ((e = Dt.current), e !== null && (e.flags |= 32), Rt);
  }
  function kt(e, t, a) {
    (((e === Ue && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) &&
      (kl(e, 0), cn(e, Ae, Rt, !1)),
      Ve(e, a),
      ((Me & 2) === 0 || e !== Ue) &&
        (e === Ue &&
          ((Me & 2) === 0 && (Gn |= a), Qe === 4 && cn(e, Ae, Rt, !1)),
        da(e)));
  }
  function hm(e, t, a) {
    if ((Me & 6) !== 0) throw Error(r(327));
    var n = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || qe(e, t),
      l = n ? Yx(e, t) : br(e, t, !0),
      i = n;
    do {
      if (l === 0) {
        Al && !n && cn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), i && !Ux(a))) {
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
              l = ks;
              var b = g.current.memoizedState.isDehydrated;
              if ((b && (kl(g, d).flags |= 256), (d = br(g, d, !1)), d !== 2)) {
                if (mr && !b) {
                  ((g.errorRecoveryDisabledLanes |= i), (Gn |= i), (l = 4));
                  break e;
                }
                ((i = Tt),
                  (Tt = l),
                  i !== null &&
                    (Tt === null ? (Tt = i) : Tt.push.apply(Tt, i)));
              }
              l = d;
            }
            if (((i = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (kl(e, 0), cn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (i = l), i)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              cn(n, t, Rt, !nn);
              break e;
            case 2:
              Tt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((l = Hi + 300 - ht()), 10 < l)) {
            if ((cn(n, t, Rt, !nn), fe(n, 0, !0) !== 0)) break e;
            ((Ra = t),
              (n.timeoutHandle = Zm(
                xm.bind(
                  null,
                  n,
                  a,
                  Tt,
                  Li,
                  pr,
                  t,
                  Rt,
                  Gn,
                  El,
                  nn,
                  i,
                  "Throttled",
                  -0,
                  0
                ),
                l
              )));
            break e;
          }
          xm(n, a, Tt, Li, pr, t, Rt, Gn, El, nn, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    da(e);
  }
  function xm(e, t, a, n, l, i, d, g, b, k, B, q, O, _) {
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
        unsuspend: ja,
      }),
        rm(t, i, q));
      var F =
        (i & 62914560) === i ? Hi - ht() : (i & 4194048) === i ? mm - ht() : 0;
      if (((F = Ny(q, F)), F !== null)) {
        ((Ra = i),
          (e.cancelPendingCommit = F(
            Am.bind(null, e, t, i, a, n, l, d, g, b, B, q, null, O, _)
          )),
          cn(e, i, d, !k));
        return;
      }
    }
    Am(e, t, i, a, n, l, d, g, b);
  }
  function Ux(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var n = 0; n < a.length; n++) {
          var l = a[n],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!zt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
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
  function cn(e, t, a, n) {
    ((t &= ~gr),
      (t &= ~Gn),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      n && (e.warmLanes |= t),
      (n = e.expirationTimes));
    for (var l = t; 0 < l; ) {
      var i = 31 - ut(l),
        d = 1 << i;
      ((n[i] = -1), (l &= ~d));
    }
    a !== 0 && An(e, a, t);
  }
  function Yi() {
    return (Me & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function vr() {
    if (we !== null) {
      if (De === 0) var e = we.return;
      else ((e = we), (Aa = Dn = null), Bc(e), (yl = null), (fs = 0), (e = we));
      for (; e !== null; ) (Jf(e.alternate, e), (e = e.return));
      we = null;
    }
  }
  function kl(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), ly(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Ra = 0),
      vr(),
      (Ue = e),
      (we = a = wa(e.current, null)),
      (Ae = t),
      (De = 0),
      (Bt = null),
      (nn = !1),
      (Al = qe(e, t)),
      (mr = !1),
      (El = Rt = gr = Gn = ln = Qe = 0),
      (Tt = ks = null),
      (pr = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - ut(n),
          i = 1 << l;
        ((t |= e[l]), (n &= ~i));
      }
    return ((Ba = t), oi(), a);
  }
  function ym(e, t) {
    ((pe = null),
      (S.H = bs),
      t === xl || t === pi
        ? ((t = Dd()), (De = 3))
        : t === wc
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
      we === null && ((Qe = 1), Oi(e, Vt(t, e.current))));
  }
  function vm() {
    var e = Dt.current;
    return e === null
      ? !0
      : (Ae & 4194048) === Ae
        ? Zt === null
        : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0
          ? e === Zt
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
      nn || ((Ae & 4194048) !== Ae && Dt.current !== null) || (Al = !0),
      ((ln & 134217727) === 0 && (Gn & 134217727) === 0) ||
        Ue === null ||
        cn(Ue, Ae, Rt, !1));
  }
  function br(e, t, a) {
    var n = Me;
    Me |= 2;
    var l = bm(),
      i = jm();
    ((Ue !== e || Ae !== t) && ((Li = null), kl(e, t)), (t = !1));
    var d = Qe;
    e: do
      try {
        if (De !== 0 && we !== null) {
          var g = we,
            b = Bt;
          switch (De) {
            case 8:
              (vr(), (d = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Dt.current === null && (t = !0);
              var k = De;
              if (((De = 0), (Bt = null), Ol(e, g, b, k), a && Al)) {
                d = 0;
                break e;
              }
              break;
            default:
              ((k = De), (De = 0), (Bt = null), Ol(e, g, b, k));
          }
        }
        (Lx(), (d = Qe));
        break;
      } catch (B) {
        ym(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Aa = Dn = null),
      (Me = n),
      (S.H = l),
      (S.A = i),
      we === null && ((Ue = null), (Ae = 0), oi()),
      d
    );
  }
  function Lx() {
    for (; we !== null; ) Nm(we);
  }
  function Yx(e, t) {
    var a = Me;
    Me |= 2;
    var n = bm(),
      l = jm();
    Ue !== e || Ae !== t
      ? ((Li = null), (Ui = ht() + 500), kl(e, t))
      : (Al = qe(e, t));
    e: do
      try {
        if (De !== 0 && we !== null) {
          t = we;
          var i = Bt;
          t: switch (De) {
            case 1:
              ((De = 0), (Bt = null), Ol(e, t, i, 1));
              break;
            case 2:
            case 9:
              if (zd(i)) {
                ((De = 0), (Bt = null), wm(t));
                break;
              }
              ((t = function () {
                ((De !== 2 && De !== 9) || Ue !== e || (De = 7), da(e));
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
                ? ((De = 0), (Bt = null), wm(t))
                : ((De = 0), (Bt = null), Ol(e, t, i, 7));
              break;
            case 5:
              var d = null;
              switch (we.tag) {
                case 26:
                  d = we.memoizedState;
                case 5:
                case 27:
                  var g = we;
                  if (d ? cg(d) : g.stateNode.complete) {
                    ((De = 0), (Bt = null));
                    var b = g.sibling;
                    if (b !== null) we = b;
                    else {
                      var k = g.return;
                      k !== null ? ((we = k), Gi(k)) : (we = null);
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
              (vr(), (Qe = 6));
              break e;
            default:
              throw Error(r(462));
          }
        }
        qx();
        break;
      } catch (B) {
        ym(e, B);
      }
    while (!0);
    return (
      (Aa = Dn = null),
      (S.H = n),
      (S.A = l),
      (Me = a),
      we !== null ? 0 : ((Ue = null), (Ae = 0), oi(), Qe)
    );
  }
  function qx() {
    for (; we !== null && !pt(); ) Nm(we);
  }
  function Nm(e) {
    var t = Kf(e.alternate, e, Ba);
    ((e.memoizedProps = e.pendingProps), t === null ? Gi(e) : (we = t));
  }
  function wm(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Yf(a, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = Yf(a, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        Bc(t);
      default:
        (Jf(a, t), (t = we = bd(t, Ba)), (t = Kf(a, t, Ba)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Gi(e) : (we = t));
  }
  function Ol(e, t, a, n) {
    ((Aa = Dn = null), Bc(t), (yl = null), (fs = 0));
    var l = t.return;
    try {
      if (Ox(e, l, t, a, Ae)) {
        ((Qe = 1), Oi(e, Vt(a, e.current)), (we = null));
        return;
      }
    } catch (i) {
      if (l !== null) throw ((we = l), i);
      ((Qe = 1), Oi(e, Vt(a, e.current)), (we = null));
      return;
    }
    t.flags & 32768
      ? (ke || n === 1
          ? (e = !0)
          : Al || (Ae & 536870912) !== 0
            ? (e = !1)
            : ((nn = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Dt.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        Sm(t, e))
      : Gi(t);
  }
  function Gi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sm(t, nn);
        return;
      }
      e = t.return;
      var a = Mx(t.alternate, t, Ba);
      if (a !== null) {
        we = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        we = t;
        return;
      }
      we = t = e;
    } while (t !== null);
    Qe === 0 && (Qe = 5);
  }
  function Sm(e, t) {
    do {
      var a = Dx(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (we = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        we = e;
        return;
      }
      we = e = a;
    } while (e !== null);
    ((Qe = 6), (we = null));
  }
  function Am(e, t, a, n, l, i, d, g, b) {
    e.cancelPendingCommit = null;
    do Vi();
    while (Fe !== 0);
    if ((Me & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= cc),
        vt(e, a, i, d, g, b),
        e === Ue && ((we = Ue = null), (Ae = 0)),
        (Tl = t),
        (on = e),
        (Ra = a),
        (hr = i),
        (xr = l),
        (gm = n),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Qx(Nn, function () {
              return (Cm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (n = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || n)
      ) {
        ((n = S.T), (S.T = null), (l = U.p), (U.p = 2), (d = Me), (Me |= 4));
        try {
          _x(e, t, a);
        } finally {
          ((Me = d), (U.p = l), (S.T = n));
        }
      }
      ((Fe = 1), Em(), Tm(), km());
    }
  }
  function Em() {
    if (Fe === 1) {
      Fe = 0;
      var e = on,
        t = Tl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var n = U.p;
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
            if (b !== null && nc(g)) {
              var k = b.start,
                B = b.end;
              if ((B === void 0 && (B = k), "selectionStart" in g))
                ((g.selectionStart = k),
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
                    w = rd(g, He);
                  if (
                    A &&
                    w &&
                    (_.rangeCount !== 1 ||
                      _.anchorNode !== A.node ||
                      _.anchorOffset !== A.offset ||
                      _.focusNode !== w.node ||
                      _.focusOffset !== w.offset)
                  ) {
                    var T = q.createRange();
                    (T.setStart(A.node, A.offset),
                      _.removeAllRanges(),
                      ue > He
                        ? (_.addRange(T), _.extend(w.node, w.offset))
                        : (T.setEnd(w.node, w.offset), _.addRange(T)));
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
          ((Me = l), (U.p = n), (S.T = a));
        }
      }
      ((e.current = t), (Fe = 2));
    }
  }
  function Tm() {
    if (Fe === 2) {
      Fe = 0;
      var e = on,
        t = Tl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var n = U.p;
        U.p = 2;
        var l = Me;
        Me |= 4;
        try {
          tm(e, t.alternate, t);
        } finally {
          ((Me = l), (U.p = n), (S.T = a));
        }
      }
      Fe = 3;
    }
  }
  function km() {
    if (Fe === 4 || Fe === 3) {
      ((Fe = 0), Ga());
      var e = on,
        t = Tl,
        a = Ra,
        n = gm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Fe = 5)
        : ((Fe = 0), (Tl = on = null), Om(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (sn = null),
        Ft(a),
        (t = t.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(wn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (n !== null) {
        ((t = S.T), (l = U.p), (U.p = 2), (S.T = null));
        try {
          for (var i = e.onRecoverableError, d = 0; d < n.length; d++) {
            var g = n[d];
            i(g.value, { componentStack: g.stack });
          }
        } finally {
          ((S.T = t), (U.p = l));
        }
      }
      ((Ra & 3) !== 0 && Vi(),
        da(e),
        (l = e.pendingLanes),
        (a & 261930) !== 0 && (l & 42) !== 0
          ? e === yr
            ? Os++
            : ((Os = 0), (yr = e))
          : (Os = 0),
        Cs(0));
    }
  }
  function Om(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), us(t)));
  }
  function Vi() {
    return (Em(), Tm(), km(), Cm());
  }
  function Cm() {
    if (Fe !== 5) return !1;
    var e = on,
      t = hr;
    hr = 0;
    var a = Ft(Ra),
      n = S.T,
      l = U.p;
    try {
      ((U.p = 32 > a ? 32 : a), (S.T = null), (a = xr), (xr = null));
      var i = on,
        d = Ra;
      if (((Fe = 0), (Tl = on = null), (Ra = 0), (Me & 6) !== 0))
        throw Error(r(331));
      var g = Me;
      if (
        ((Me |= 4),
        dm(i.current),
        cm(i, i.current, d, a),
        (Me = g),
        Cs(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(wn, i);
        } catch {}
      return !0;
    } finally {
      ((U.p = l), (S.T = n), Om(e, t));
    }
  }
  function zm(e, t, a) {
    ((t = Vt(a, t)),
      (t = $c(e.stateNode, t, 2)),
      (e = Ia(e, t, 2)),
      e !== null && (Ve(e, 2), da(e)));
  }
  function _e(e, t, a) {
    if (e.tag === 3) zm(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          zm(t, e, a);
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (sn === null || !sn.has(n)))
          ) {
            ((e = Vt(a, e)),
              (a = Mf(2)),
              (n = Ia(t, a, 2)),
              n !== null && (Df(a, n, t, e), Ve(n, 2), da(n)));
            break;
          }
        }
        t = t.return;
      }
  }
  function jr(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Hx();
      var l = new Set();
      n.set(t, l);
    } else ((l = n.get(t)), l === void 0 && ((l = new Set()), n.set(t, l)));
    l.has(a) ||
      ((mr = !0), l.add(a), (e = Gx.bind(null, e, t, a)), t.then(e, e));
  }
  function Gx(e, t, a) {
    var n = e.pingCache;
    (n !== null && n.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ue === e &&
        (Ae & a) === a &&
        (Qe === 4 || (Qe === 3 && (Ae & 62914560) === Ae && 300 > ht() - Hi)
          ? (Me & 2) === 0 && kl(e, 0)
          : (gr |= a),
        El === Ae && (El = 0)),
      da(e));
  }
  function Mm(e, t) {
    (t === 0 && (t = dt()), (e = Cn(e, t)), e !== null && (Ve(e, t), da(e)));
  }
  function Vx(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Mm(e, a));
  }
  function Xx(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          l = e.memoizedState;
        l !== null && (a = l.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (n !== null && n.delete(t), Mm(e, a));
  }
  function Qx(e, t) {
    return Zl(e, t);
  }
  var Xi = null,
    Cl = null,
    Nr = !1,
    Qi = !1,
    wr = !1,
    rn = 0;
  function da(e) {
    (e !== Cl &&
      e.next === null &&
      (Cl === null ? (Xi = Cl = e) : (Cl = Cl.next = e)),
      (Qi = !0),
      Nr || ((Nr = !0), Zx()));
  }
  function Cs(e, t) {
    if (!wr && Qi) {
      wr = !0;
      do
        for (var a = !1, n = Xi; n !== null; ) {
          if (e !== 0) {
            var l = n.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var d = n.suspendedLanes,
                g = n.pingedLanes;
              ((i = (1 << (31 - ut(42 | e) + 1)) - 1),
                (i &= l & ~(d & ~g)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((a = !0), Rm(n, i));
          } else
            ((i = Ae),
              (i = fe(
                n,
                n === Ue ? i : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              (i & 3) === 0 || qe(n, i) || ((a = !0), Rm(n, i)));
          n = n.next;
        }
      while (a);
      wr = !1;
    }
  }
  function Kx() {
    Dm();
  }
  function Dm() {
    Qi = Nr = !1;
    var e = 0;
    rn !== 0 && ny() && (e = rn);
    for (var t = ht(), a = null, n = Xi; n !== null; ) {
      var l = n.next,
        i = _m(n, t);
      (i === 0
        ? ((n.next = null),
          a === null ? (Xi = l) : (a.next = l),
          l === null && (Cl = a))
        : ((a = n), (e !== 0 || (i & 3) !== 0) && (Qi = !0)),
        (n = l));
    }
    ((Fe !== 0 && Fe !== 5) || Cs(e), rn !== 0 && (rn = 0));
  }
  function _m(e, t) {
    for (
      var a = e.suspendedLanes,
        n = e.pingedLanes,
        l = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var d = 31 - ut(i),
        g = 1 << d,
        b = l[d];
      (b === -1
        ? ((g & a) === 0 || (g & n) !== 0) && (l[d] = et(g, t))
        : b <= t && (e.expiredLanes |= g),
        (i &= ~g));
    }
    if (
      ((t = Ue),
      (a = Ae),
      (a = fe(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (n = e.callbackNode),
      a === 0 ||
        (e === t && (De === 2 || De === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && Jl(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || qe(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((n !== null && Jl(n), Ft(a))) {
        case 2:
        case 8:
          a = Js;
          break;
        case 32:
          a = Nn;
          break;
        case 268435456:
          a = va;
          break;
        default:
          a = Nn;
      }
      return (
        (n = Bm.bind(null, e)),
        (a = Zl(a, n)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      n !== null && n !== null && Jl(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Bm(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Vi() && e.callbackNode !== a) return null;
    var n = Ae;
    return (
      (n = fe(
        e,
        e === Ue ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      n === 0
        ? null
        : (hm(e, n, t),
          _m(e, ht()),
          e.callbackNode != null && e.callbackNode === a
            ? Bm.bind(null, e)
            : null)
    );
  }
  function Rm(e, t) {
    if (Vi()) return null;
    hm(e, t, !0);
  }
  function Zx() {
    sy(function () {
      (Me & 6) !== 0 ? Zl(jn, Kx) : Dm();
    });
  }
  function Sr() {
    if (rn === 0) {
      var e = pl;
      (e === 0 && ((e = Jn), (Jn <<= 1), (Jn & 261888) === 0 && (Jn = 256)),
        (rn = e));
    }
    return rn;
  }
  function Hm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Is("" + e);
  }
  function Um(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Jx(e, t, a, n, l) {
    if (t === "submit" && a && a.stateNode === l) {
      var i = Hm((l[Nt] || null).action),
        d = n.submitter;
      d &&
        ((t = (t = d[Nt] || null)
          ? Hm(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((i = t), (d = null)));
      var g = new ni("action", "action", null, n, l);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (rn !== 0) {
                  var b = d ? Um(l, d) : new FormData(l);
                  Xc(
                    a,
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
                    a,
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
    En(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    En(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    En(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    En(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    En(
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
    for (var a = 0; a < e.length; a++) {
      var n = e[a],
        l = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var d = n.length - 1; 0 <= d; d--) {
            var g = n[d],
              b = g.instance,
              k = g.currentTarget;
            if (((g = g.listener), b !== i && l.isPropagationStopped()))
              break e;
            ((i = g), (l.currentTarget = k));
            try {
              i(l);
            } catch (B) {
              ii(B);
            }
            ((l.currentTarget = null), (i = b));
          }
        else
          for (d = 0; d < n.length; d++) {
            if (
              ((g = n[d]),
              (b = g.instance),
              (k = g.currentTarget),
              (g = g.listener),
              b !== i && l.isPropagationStopped())
            )
              break e;
            ((i = g), (l.currentTarget = k));
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
    var a = t[Lo];
    a === void 0 && (a = t[Lo] = new Set());
    var n = e + "__bubble";
    a.has(n) || (Ym(t, e, 2, !1), a.add(n));
  }
  function Tr(e, t, a) {
    var n = 0;
    (t && (n |= 4), Ym(a, e, n, t));
  }
  var Ki = "_reactListening" + Math.random().toString(36).slice(2);
  function kr(e) {
    if (!e[Ki]) {
      ((e[Ki] = !0),
        Mu.forEach(function (a) {
          a !== "selectionchange" && (Px.has(a) || Tr(a, !1, e), Tr(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ki] || ((t[Ki] = !0), Tr("selectionchange", !1, t));
    }
  }
  function Ym(e, t, a, n) {
    switch (pg(t)) {
      case 2:
        var l = Ay;
        break;
      case 8:
        l = Ey;
        break;
      default:
        l = Vr;
    }
    ((a = l.bind(null, t, a, e)),
      (l = void 0),
      !Jo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      n
        ? l !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: l })
          : e.addEventListener(t, a, !0)
        : l !== void 0
          ? e.addEventListener(t, a, { passive: l })
          : e.addEventListener(t, a, !1));
  }
  function Or(e, t, a, n, l) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var d = n.tag;
        if (d === 3 || d === 4) {
          var g = n.stateNode.containerInfo;
          if (g === l) break;
          if (d === 4)
            for (d = n.return; d !== null; ) {
              var b = d.tag;
              if ((b === 3 || b === 4) && d.stateNode.containerInfo === l)
                return;
              d = d.return;
            }
          for (; g !== null; ) {
            if (((d = Fn(g)), d === null)) return;
            if (((b = d.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              n = i = d;
              continue e;
            }
            g = g.parentNode;
          }
        }
        n = n.return;
      }
    Xu(function () {
      var k = i,
        B = Ko(a),
        q = [];
      e: {
        var O = yd.get(e);
        if (O !== void 0) {
          var _ = ni,
            F = e;
          switch (e) {
            case "keypress":
              if (ti(a) === 0) break e;
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
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _ = Zu;
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
              _ = Zh;
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
          for (var w = k, T; w !== null; ) {
            var L = w;
            if (
              ((T = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                T === null ||
                A === null ||
                ((L = Il(w, A)), L != null && ue.push(Ms(w, L, T))),
              He)
            )
              break;
            w = w.return;
          }
          0 < ue.length &&
            ((O = new _(O, F, null, a, B)),
            q.push({ event: O, listeners: ue }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            O &&
              a !== Qo &&
              (F = a.relatedTarget || a.fromElement) &&
              (Fn(F) || F[Pn]))
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
              ? ((F = a.relatedTarget || a.toElement),
                (_ = k),
                (F = F ? Fn(F) : null),
                F !== null &&
                  ((He = m(F)),
                  (ue = F.tag),
                  F !== He || (ue !== 5 && ue !== 27 && ue !== 6)) &&
                  (F = null))
              : ((_ = null), (F = k)),
            _ !== F)
          ) {
            if (
              ((ue = Zu),
              (L = "onMouseLeave"),
              (A = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ue = Wu),
                (L = "onPointerLeave"),
                (A = "onPointerEnter"),
                (w = "pointer")),
              (He = _ == null ? O : Fl(_)),
              (T = F == null ? O : Fl(F)),
              (O = new ue(L, w + "leave", _, a, B)),
              (O.target = He),
              (O.relatedTarget = T),
              (L = null),
              Fn(B) === k &&
                ((ue = new ue(A, w + "enter", F, a, B)),
                (ue.target = T),
                (ue.relatedTarget = He),
                (L = ue)),
              (He = L),
              _ && F)
            )
              t: {
                for (ue = Fx, A = _, w = F, T = 0, L = A; L; L = ue(L)) T++;
                L = 0;
                for (var ce = w; ce; ce = ue(ce)) L++;
                for (; 0 < T - L; ) ((A = ue(A)), T--);
                for (; 0 < L - T; ) ((w = ue(w)), L--);
                for (; T--; ) {
                  if (A === w || (w !== null && A === w.alternate)) {
                    ue = A;
                    break t;
                  }
                  ((A = ue(A)), (w = ue(w)));
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
            ((O = k ? Fl(k) : window),
            (_ = O.nodeName && O.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && O.type === "file"))
          )
            var Ce = nd;
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
                ? k && Xo(k.elementType) && (Ce = nd)
                : (Ce = cx));
          if (Ce && (Ce = Ce(e, k))) {
            ad(q, Ce, a, B);
            break e;
          }
          (le && le(e, O, k),
            e === "focusout" &&
              k &&
              O.type === "number" &&
              k.memoizedProps.value != null &&
              Vo(O, "number", O.value));
        }
        switch (((le = k ? Fl(k) : window), e)) {
          case "focusin":
            (td(le) || le.contentEditable === "true") &&
              ((ol = le), (lc = k), (os = null));
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
            ((sc = !1), fd(q, a, B));
            break;
          case "selectionchange":
            if (dx) break;
          case "keydown":
          case "keyup":
            fd(q, a, B);
        }
        var ye;
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
            ? Iu(e, a) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Ee = "onCompositionStart");
        (Ee &&
          ($u &&
            a.locale !== "ko" &&
            (il || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && il && (ye = Qu())
              : ((Ka = B),
                (Wo = "value" in Ka ? Ka.value : Ka.textContent),
                (il = !0))),
          (le = Zi(k, Ee)),
          0 < le.length &&
            ((Ee = new Ju(Ee, e, null, a, B)),
            q.push({ event: Ee, listeners: le }),
            ye
              ? (Ee.data = ye)
              : ((ye = ed(a)), ye !== null && (Ee.data = ye)))),
          (ye = tx ? ax(e, a) : nx(e, a)) &&
            ((Ee = Zi(k, "onBeforeInput")),
            0 < Ee.length &&
              ((le = new Ju("onBeforeInput", "beforeinput", null, a, B)),
              q.push({ event: le, listeners: Ee }),
              (le.data = ye))),
          Jx(q, e, k, a, B));
      }
      Lm(q, t);
    });
  }
  function Ms(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Zi(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          i === null ||
          ((l = Il(e, a)),
          l != null && n.unshift(Ms(e, l, i)),
          (l = Il(e, t)),
          l != null && n.push(Ms(e, l, i))),
        e.tag === 3)
      )
        return n;
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
  function qm(e, t, a, n, l) {
    for (var i = t._reactName, d = []; a !== null && a !== n; ) {
      var g = a,
        b = g.alternate,
        k = g.stateNode;
      if (((g = g.tag), b !== null && b === n)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        k === null ||
        ((b = k),
        l
          ? ((k = Il(a, i)), k != null && d.unshift(Ms(a, k, b)))
          : l || ((k = Il(a, i)), k != null && d.push(Ms(a, k, b)))),
        (a = a.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Ix = /\r\n?/g,
    ey = /\u0000|\uFFFD/g;
  function Gm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Ix,
        `
`
      )
      .replace(ey, "");
  }
  function Vm(e, t) {
    return ((t = Gm(t)), Gm(e) === t);
  }
  function Re(e, t, a, n, l, i) {
    switch (a) {
      case "children":
        typeof n == "string"
          ? t === "body" || (t === "textarea" && n === "") || nl(e, n)
          : (typeof n == "number" || typeof n == "bigint") &&
            t !== "body" &&
            nl(e, "" + n);
        break;
      case "className":
        Ps(e, "class", n);
        break;
      case "tabIndex":
        Ps(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ps(e, a, n);
        break;
      case "style":
        Gu(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          Ps(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((n = Is("" + n)), e.setAttribute(a, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (a === "formAction"
              ? (t !== "input" && Re(e, t, "name", l.name, l, null),
                Re(e, t, "formEncType", l.formEncType, l, null),
                Re(e, t, "formMethod", l.formMethod, l, null),
                Re(e, t, "formTarget", l.formTarget, l, null))
              : (Re(e, t, "encType", l.encType, l, null),
                Re(e, t, "method", l.method, l, null),
                Re(e, t, "target", l.target, l, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((n = Is("" + n)), e.setAttribute(a, n));
        break;
      case "onClick":
        n != null && (e.onclick = ja);
        break;
      case "onScroll":
        n != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
          if (((a = n.__html), a != null)) {
            if (l.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
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
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Is("" + n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "" + n)
          : e.removeAttribute(a);
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
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(a, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(a, n)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(a)
          : e.setAttribute(a, n);
        break;
      case "popover":
        (Se("beforetoggle", e), Se("toggle", e), $s(e, "popover", n));
        break;
      case "xlinkActuate":
        ba(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        ba(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        ba(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        ba(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        ba(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        ba(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        ba(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        ba(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        ba(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        $s(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = kh.get(a) || a), $s(e, a, n));
    }
  }
  function Cr(e, t, a, n, l, i) {
    switch (a) {
      case "style":
        Gu(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(r(61));
          if (((a = n.__html), a != null)) {
            if (l.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string"
          ? nl(e, n)
          : (typeof n == "number" || typeof n == "bigint") && nl(e, "" + n);
        break;
      case "onScroll":
        n != null && Se("scroll", e);
        break;
      case "onScrollEnd":
        n != null && Se("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = ja);
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
        if (!Du.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((l = a.endsWith("Capture")),
              (t = a.slice(2, l ? a.length - 7 : void 0)),
              (i = e[Nt] || null),
              (i = i != null ? i[a] : null),
              typeof i == "function" && e.removeEventListener(t, i, l),
              typeof n == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, n, l));
              break e;
            }
            a in e
              ? (e[a] = n)
              : n === !0
                ? e.setAttribute(a, "")
                : $s(e, a, n);
          }
    }
  }
  function rt(e, t, a) {
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
        var n = !1,
          l = !1,
          i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var d = a[i];
            if (d != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Re(e, t, i, d, a, null);
              }
          }
        (l && Re(e, t, "srcSet", a.srcSet, a, null),
          n && Re(e, t, "src", a.src, a, null));
        return;
      case "input":
        Se("invalid", e);
        var g = (i = d = l = null),
          b = null,
          k = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var B = a[n];
            if (B != null)
              switch (n) {
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
                  k = B;
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
                  Re(e, t, n, B, a, null);
              }
          }
        Uu(e, i, g, b, k, d, l, !1);
        return;
      case "select":
        (Se("invalid", e), (n = d = i = null));
        for (l in a)
          if (a.hasOwnProperty(l) && ((g = a[l]), g != null))
            switch (l) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                n = g;
              default:
                Re(e, t, l, g, a, null);
            }
        ((t = i),
          (a = d),
          (e.multiple = !!n),
          t != null ? al(e, !!n, t, !1) : a != null && al(e, !!n, a, !0));
        return;
      case "textarea":
        (Se("invalid", e), (i = l = n = null));
        for (d in a)
          if (a.hasOwnProperty(d) && ((g = a[d]), g != null))
            switch (d) {
              case "value":
                n = g;
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
                Re(e, t, d, g, a, null);
            }
        Yu(e, n, l, i);
        return;
      case "option":
        for (b in a)
          if (a.hasOwnProperty(b) && ((n = a[b]), n != null))
            switch (b) {
              case "selected":
                e.selected =
                  n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                Re(e, t, b, n, a, null);
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
        for (n = 0; n < zs.length; n++) Se(zs[n], e);
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
        for (k in a)
          if (a.hasOwnProperty(k) && ((n = a[k]), n != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Re(e, t, k, n, a, null);
            }
        return;
      default:
        if (Xo(t)) {
          for (B in a)
            a.hasOwnProperty(B) &&
              ((n = a[B]), n !== void 0 && Cr(e, t, B, n, a, void 0));
          return;
        }
    }
    for (g in a)
      a.hasOwnProperty(g) && ((n = a[g]), n != null && Re(e, t, g, n, a, null));
  }
  function ty(e, t, a, n) {
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
          k = null,
          B = null;
        for (_ in a) {
          var q = a[_];
          if (a.hasOwnProperty(_) && q != null)
            switch (_) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = q;
              default:
                n.hasOwnProperty(_) || Re(e, t, _, null, n, q);
            }
        }
        for (var O in n) {
          var _ = n[O];
          if (((q = a[O]), n.hasOwnProperty(O) && (_ != null || q != null)))
            switch (O) {
              case "type":
                i = _;
                break;
              case "name":
                l = _;
                break;
              case "checked":
                k = _;
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
                _ !== q && Re(e, t, O, _, n, q);
            }
        }
        Go(e, d, g, b, k, B, i, l);
        return;
      case "select":
        _ = d = g = O = null;
        for (i in a)
          if (((b = a[i]), a.hasOwnProperty(i) && b != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                _ = b;
              default:
                n.hasOwnProperty(i) || Re(e, t, i, null, n, b);
            }
        for (l in n)
          if (
            ((i = n[l]),
            (b = a[l]),
            n.hasOwnProperty(l) && (i != null || b != null))
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
                i !== b && Re(e, t, l, i, n, b);
            }
        ((t = g),
          (a = d),
          (n = _),
          O != null
            ? al(e, !!a, O, !1)
            : !!n != !!a &&
              (t != null ? al(e, !!a, t, !0) : al(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        _ = O = null;
        for (g in a)
          if (
            ((l = a[g]),
            a.hasOwnProperty(g) && l != null && !n.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, g, null, n, l);
            }
        for (d in n)
          if (
            ((l = n[d]),
            (i = a[d]),
            n.hasOwnProperty(d) && (l != null || i != null))
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
                l !== i && Re(e, t, d, l, n, i);
            }
        Lu(e, O, _);
        return;
      case "option":
        for (var F in a)
          if (
            ((O = a[F]),
            a.hasOwnProperty(F) && O != null && !n.hasOwnProperty(F))
          )
            switch (F) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Re(e, t, F, null, n, O);
            }
        for (b in n)
          if (
            ((O = n[b]),
            (_ = a[b]),
            n.hasOwnProperty(b) && O !== _ && (O != null || _ != null))
          )
            switch (b) {
              case "selected":
                e.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                Re(e, t, b, O, n, _);
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
        for (var ue in a)
          ((O = a[ue]),
            a.hasOwnProperty(ue) &&
              O != null &&
              !n.hasOwnProperty(ue) &&
              Re(e, t, ue, null, n, O));
        for (k in n)
          if (
            ((O = n[k]),
            (_ = a[k]),
            n.hasOwnProperty(k) && O !== _ && (O != null || _ != null))
          )
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(r(137, t));
                break;
              default:
                Re(e, t, k, O, n, _);
            }
        return;
      default:
        if (Xo(t)) {
          for (var He in a)
            ((O = a[He]),
              a.hasOwnProperty(He) &&
                O !== void 0 &&
                !n.hasOwnProperty(He) &&
                Cr(e, t, He, void 0, n, O));
          for (B in n)
            ((O = n[B]),
              (_ = a[B]),
              !n.hasOwnProperty(B) ||
                O === _ ||
                (O === void 0 && _ === void 0) ||
                Cr(e, t, B, O, n, _));
          return;
        }
    }
    for (var A in a)
      ((O = a[A]),
        a.hasOwnProperty(A) &&
          O != null &&
          !n.hasOwnProperty(A) &&
          Re(e, t, A, null, n, O));
    for (q in n)
      ((O = n[q]),
        (_ = a[q]),
        !n.hasOwnProperty(q) ||
          O === _ ||
          (O == null && _ == null) ||
          Re(e, t, q, O, n, _));
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
  function ay() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0;
        n < a.length;
        n++
      ) {
        var l = a[n],
          i = l.transferSize,
          d = l.initiatorType,
          g = l.duration;
        if (i && g && Xm(d)) {
          for (d = 0, g = l.responseEnd, n += 1; n < a.length; n++) {
            var b = a[n],
              k = b.startTime;
            if (k > g) break;
            var B = b.transferSize,
              q = b.initiatorType;
            B &&
              Xm(q) &&
              ((b = b.responseEnd), (d += B * (b < g ? 1 : (g - k) / (b - k))));
          }
          if ((--n, (t += (8 * (i + d)) / (l.duration / 1e3)), e++, 10 < e))
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
  function Km(e, t) {
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
  function ny() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === _r
        ? !1
        : ((_r = e), !0)
      : ((_r = null), !1);
  }
  var Zm = typeof setTimeout == "function" ? setTimeout : void 0,
    ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jm = typeof Promise == "function" ? Promise : void 0,
    sy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Jm < "u"
          ? function (e) {
              return Jm.resolve(null).then(e).catch(iy);
            }
          : Zm;
  function iy(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function un(e) {
    return e === "head";
  }
  function Wm(e, t) {
    var a = t,
      n = 0;
    do {
      var l = a.nextSibling;
      if ((e.removeChild(a), l && l.nodeType === 8))
        if (((a = l.data), a === "/$" || a === "/&")) {
          if (n === 0) {
            (e.removeChild(l), _l(t));
            return;
          }
          n--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          n++;
        else if (a === "html") Ds(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), Ds(a));
          for (var i = a.firstChild; i; ) {
            var d = i.nextSibling,
              g = i.nodeName;
            (i[Pl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(i),
              (i = d));
          }
        } else a === "body" && Ds(e.ownerDocument.body);
      a = l;
    } while (a);
    _l(t);
  }
  function $m(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((a = n.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = n;
    } while (a);
  }
  function Br(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Br(a), Yo(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function oy(e, t, a, n) {
    for (; e.nodeType === 1; ) {
      var l = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
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
  function cy(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
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
  function ry(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var n = function () {
        (t(), a.removeEventListener("DOMContentLoaded", n));
      };
      (a.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
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
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Jt(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
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
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function eg(e, t, a) {
    switch (((t = Ji(a)), e)) {
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
  var Ha = U.d;
  U.d = { f: uy, r: dy, D: fy, C: my, L: gy, m: py, X: xy, S: hy, M: yy };
  function uy() {
    var e = Ha.f(),
      t = Yi();
    return e || t;
  }
  function dy(e) {
    var t = In(e);
    t !== null && t.tag === 5 && t.type === "form" ? yf(t) : Ha.r(e);
  }
  var zl = typeof document > "u" ? null : document;
  function ag(e, t, a) {
    var n = zl;
    if (n && typeof t == "string" && t) {
      var l = qt(t);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof a == "string" && (l += '[crossorigin="' + a + '"]'),
        tg.has(l) ||
          (tg.add(l),
          (e = { rel: e, crossOrigin: a, href: t }),
          n.querySelector(l) === null &&
            ((t = n.createElement("link")),
            rt(t, "link", e),
            tt(t),
            n.head.appendChild(t))));
    }
  }
  function fy(e) {
    (Ha.D(e), ag("dns-prefetch", e, null));
  }
  function my(e, t) {
    (Ha.C(e, t), ag("preconnect", e, t));
  }
  function gy(e, t, a) {
    Ha.L(e, t, a);
    var n = zl;
    if (n && e && t) {
      var l = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((l += '[imagesrcset="' + qt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (l += '[imagesizes="' + qt(a.imageSizes) + '"]'))
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
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        Wt.set(i, e),
        n.querySelector(l) !== null ||
          (t === "style" && n.querySelector(_s(i))) ||
          (t === "script" && n.querySelector(Bs(i))) ||
          ((t = n.createElement("link")),
          rt(t, "link", e),
          tt(t),
          n.head.appendChild(t)));
    }
  }
  function py(e, t) {
    Ha.m(e, t);
    var a = zl;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script",
        l =
          'link[rel="modulepreload"][as="' + qt(n) + '"][href="' + qt(e) + '"]',
        i = l;
      switch (n) {
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
        a.querySelector(l) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Bs(i))) return;
        }
        ((n = a.createElement("link")),
          rt(n, "link", e),
          tt(n),
          a.head.appendChild(n));
      }
    }
  }
  function hy(e, t, a) {
    Ha.S(e, t, a);
    var n = zl;
    if (n && e) {
      var l = el(n).hoistableStyles,
        i = Ml(e);
      t = t || "default";
      var d = l.get(i);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = n.querySelector(_s(i)))) g.loading = 5;
        else {
          ((e = p({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Wt.get(i)) && Lr(e, a));
          var b = (d = n.createElement("link"));
          (tt(b),
            rt(b, "link", e),
            (b._p = new Promise(function (k, B) {
              ((b.onload = k), (b.onerror = B));
            })),
            b.addEventListener("load", function () {
              g.loading |= 1;
            }),
            b.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            $i(d, t, n));
        }
        ((d = { type: "stylesheet", instance: d, count: 1, state: g }),
          l.set(i, d));
      }
    }
  }
  function xy(e, t) {
    Ha.X(e, t);
    var a = zl;
    if (a && e) {
      var n = el(a).hoistableScripts,
        l = Dl(e),
        i = n.get(l);
      i ||
        ((i = a.querySelector(Bs(l))),
        i ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Wt.get(l)) && Yr(e, t),
          (i = a.createElement("script")),
          tt(i),
          rt(i, "link", e),
          a.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        n.set(l, i));
    }
  }
  function yy(e, t) {
    Ha.M(e, t);
    var a = zl;
    if (a && e) {
      var n = el(a).hoistableScripts,
        l = Dl(e),
        i = n.get(l);
      i ||
        ((i = a.querySelector(Bs(l))),
        i ||
          ((e = p({ src: e, async: !0, type: "module" }, t)),
          (t = Wt.get(l)) && Yr(e, t),
          (i = a.createElement("script")),
          tt(i),
          rt(i, "link", e),
          a.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        n.set(l, i));
    }
  }
  function ng(e, t, a, n) {
    var l = (l = oe.current) ? Wi(l) : null;
    if (!l) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Ml(a.href)),
            (a = el(l).hoistableStyles),
            (n = a.get(t)),
            n ||
              ((n = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, n)),
            n)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Ml(a.href);
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
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Wt.set(e, a),
                i || vy(l, e, a, d.state))),
            t && n === null)
          )
            throw Error(r(528, ""));
          return d;
        }
        if (t && n !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Dl(a)),
              (a = el(l).hoistableScripts),
              (n = a.get(t)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, n)),
              n)
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
  function vy(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (n.loading = 1)
      : ((t = e.createElement("link")),
        (n.preload = t),
        t.addEventListener("load", function () {
          return (n.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (n.loading |= 2);
        }),
        rt(t, "link", a),
        tt(t),
        e.head.appendChild(t));
  }
  function Dl(e) {
    return '[src="' + qt(e) + '"]';
  }
  function Bs(e) {
    return "script[async]" + e;
  }
  function sg(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + qt(a.href) + '"]');
          if (n) return ((t.instance = n), tt(n), n);
          var l = p({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            tt(n),
            rt(n, "style", l),
            $i(n, a.precedence, e),
            (t.instance = n)
          );
        case "stylesheet":
          l = Ml(a.href);
          var i = e.querySelector(_s(l));
          if (i) return ((t.state.loading |= 4), (t.instance = i), tt(i), i);
          ((n = lg(a)),
            (l = Wt.get(l)) && Lr(n, l),
            (i = (e.ownerDocument || e).createElement("link")),
            tt(i));
          var d = i;
          return (
            (d._p = new Promise(function (g, b) {
              ((d.onload = g), (d.onerror = b));
            })),
            rt(i, "link", n),
            (t.state.loading |= 4),
            $i(i, a.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Dl(a.src)),
            (l = e.querySelector(Bs(i)))
              ? ((t.instance = l), tt(l), l)
              : ((n = a),
                (l = Wt.get(i)) && ((n = p({}, a)), Yr(n, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement("script")),
                tt(l),
                rt(l, "link", n),
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
        ((n = t.instance), (t.state.loading |= 4), $i(n, a.precedence, e));
    return t.instance;
  }
  function $i(e, t, a) {
    for (
      var n = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        l = n.length ? n[n.length - 1] : null,
        i = l,
        d = 0;
      d < n.length;
      d++
    ) {
      var g = n[d];
      if (g.dataset.precedence === t) i = g;
      else if (i !== l) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
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
  function ig(e, t, a) {
    if (Pi === null) {
      var n = new Map(),
        l = (Pi = new Map());
      l.set(a, n);
    } else ((l = Pi), (n = l.get(a)), n || ((n = new Map()), l.set(a, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), a = a.getElementsByTagName(e), l = 0;
      l < a.length;
      l++
    ) {
      var i = a[l];
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
        var g = n.get(d);
        g ? g.push(i) : n.set(d, [i]);
      }
    }
    return n;
  }
  function og(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function by(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function jy(e, t, a, n) {
    if (
      a.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var l = Ml(n.href),
          i = t.querySelector(_s(l));
        if (i) {
          ((t = i._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Fi.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = i),
            tt(i));
          return;
        }
        ((i = t.ownerDocument || t),
          (n = lg(n)),
          (l = Wt.get(l)) && Lr(n, l),
          (i = i.createElement("link")),
          tt(i));
        var d = i;
        ((d._p = new Promise(function (g, b) {
          ((d.onload = g), (d.onerror = b));
        })),
          rt(i, "link", n),
          (a.instance = i));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Fi.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var qr = 0;
  function Ny(e, t) {
    return (
      e.stylesheets && e.count === 0 && eo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var n = setTimeout(function () {
              if ((e.stylesheets && eo(e, e.stylesheets), e.unsuspend)) {
                var i = e.unsuspend;
                ((e.unsuspend = null), i());
              }
            }, 6e4 + t);
            0 < e.imgBytes && qr === 0 && (qr = 62500 * ay());
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
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(l));
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
        t.forEach(wy, e),
        (Ii = null),
        Fi.call(e)));
  }
  function wy(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ii.get(e);
      if (a) var n = a.get(null);
      else {
        ((a = new Map()), Ii.set(e, a));
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
            (a.set(d.dataset.precedence, d), (n = d));
        }
        n && a.set(null, n);
      }
      ((l = t.instance),
        (d = l.getAttribute("data-precedence")),
        (i = a.get(d) || n),
        i === n && a.set(null, l),
        a.set(d, l),
        this.count++,
        (n = Fi.bind(this)),
        l.addEventListener("load", n),
        l.addEventListener("error", n),
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
  function Sy(e, t, a, n, l, i, d, g, b) {
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
      (this.expirationTimes = Xa(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xa(0)),
      (this.hiddenUpdates = Xa(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = l),
      (this.onCaughtError = i),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map()));
  }
  function rg(e, t, a, n, l, i, d, g, b, k, B, q) {
    return (
      (e = new Sy(e, t, a, d, b, k, B, q, g)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = Mt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = bc()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: n, isDehydrated: a, cache: t }),
      Sc(i),
      e
    );
  }
  function ug(e) {
    return e ? ((e = ul), e) : ul;
  }
  function dg(e, t, a, n, l, i) {
    ((l = ug(l)),
      n.context === null ? (n.context = l) : (n.pendingContext = l),
      (n = Fa(t)),
      (n.payload = { element: a }),
      (i = i === void 0 ? null : i),
      i !== null && (n.callback = i),
      (a = Ia(e, n, t)),
      a !== null && (kt(a, e, t), gs(a, e, t)));
  }
  function fg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Gr(e, t) {
    (fg(e, t), (e = e.alternate) && fg(e, t));
  }
  function mg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Cn(e, 67108864);
      (t !== null && kt(t, e, 67108864), Gr(e, 67108864));
    }
  }
  function gg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = $n(t);
      var a = Cn(e, t);
      (a !== null && kt(a, e, t), Gr(e, t));
    }
  }
  var to = !0;
  function Ay(e, t, a, n) {
    var l = S.T;
    S.T = null;
    var i = U.p;
    try {
      ((U.p = 2), Vr(e, t, a, n));
    } finally {
      ((U.p = i), (S.T = l));
    }
  }
  function Ey(e, t, a, n) {
    var l = S.T;
    S.T = null;
    var i = U.p;
    try {
      ((U.p = 8), Vr(e, t, a, n));
    } finally {
      ((U.p = i), (S.T = l));
    }
  }
  function Vr(e, t, a, n) {
    if (to) {
      var l = Xr(n);
      if (l === null) (Or(e, t, n, ao, a), hg(e, n));
      else if (ky(l, e, t, a, n)) n.stopPropagation();
      else if ((hg(e, n), t & 4 && -1 < Ty.indexOf(e))) {
        for (; l !== null; ) {
          var i = In(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var d = oa(i.pendingLanes);
                  if (d !== 0) {
                    var g = i;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; d; ) {
                      var b = 1 << (31 - ut(d));
                      ((g.entanglements[1] |= b), (d &= ~b));
                    }
                    (da(i), (Me & 6) === 0 && ((Ui = ht() + 500), Cs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = Cn(i, 2)), g !== null && kt(g, i, 2), Yi(), Gr(i, 2));
            }
          if (((i = Xr(n)), i === null && Or(e, t, n, ao, a), i === l)) break;
          l = i;
        }
        l !== null && n.stopPropagation();
      } else Or(e, t, n, null, a);
    }
  }
  function Xr(e) {
    return ((e = Ko(e)), Qr(e));
  }
  var ao = null;
  function Qr(e) {
    if (((ao = null), (e = Fn(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = x(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = v(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((ao = e), null);
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
          case jn:
            return 2;
          case Js:
            return 8;
          case Nn:
          case Wl:
            return 32;
          case va:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Kr = !1,
    dn = null,
    fn = null,
    mn = null,
    Hs = new Map(),
    Us = new Map(),
    gn = [],
    Ty =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function hg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        dn = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        mn = null;
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
  function Ls(e, t, a, n, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: n,
          nativeEvent: i,
          targetContainers: [l],
        }),
        t !== null && ((t = In(t)), t !== null && mg(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function ky(e, t, a, n, l) {
    switch (t) {
      case "focusin":
        return ((dn = Ls(dn, e, t, a, n, l)), !0);
      case "dragenter":
        return ((fn = Ls(fn, e, t, a, n, l)), !0);
      case "mouseover":
        return ((mn = Ls(mn, e, t, a, n, l)), !0);
      case "pointerover":
        var i = l.pointerId;
        return (Hs.set(i, Ls(Hs.get(i) || null, e, t, a, n, l)), !0);
      case "gotpointercapture":
        return (
          (i = l.pointerId),
          Us.set(i, Ls(Us.get(i) || null, e, t, a, n, l)),
          !0
        );
    }
    return !1;
  }
  function xg(e) {
    var t = Fn(e.target);
    if (t !== null) {
      var a = m(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = x(a)), t !== null)) {
            ((e.blockedOn = t),
              Cu(e.priority, function () {
                gg(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = v(a)), t !== null)) {
            ((e.blockedOn = t),
              Cu(e.priority, function () {
                gg(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function no(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Xr(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(a.type, a);
        ((Qo = n), a.target.dispatchEvent(n), (Qo = null));
      } else return ((t = In(a)), t !== null && mg(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function yg(e, t, a) {
    no(e) && a.delete(t);
  }
  function Oy() {
    ((Kr = !1),
      dn !== null && no(dn) && (dn = null),
      fn !== null && no(fn) && (fn = null),
      mn !== null && no(mn) && (mn = null),
      Hs.forEach(yg),
      Us.forEach(yg));
  }
  function lo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Kr ||
        ((Kr = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Oy)));
  }
  var so = null;
  function vg(e) {
    so !== e &&
      ((so = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        so === e && (so = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            n = e[t + 1],
            l = e[t + 2];
          if (typeof n != "function") {
            if (Qr(n || a) === null) continue;
            break;
          }
          var i = In(a);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Xc(i, { pending: !0, data: l, method: a.method, action: n }, n, l));
        }
      }));
  }
  function _l(e) {
    function t(b) {
      return lo(b, e);
    }
    (dn !== null && lo(dn, e),
      fn !== null && lo(fn, e),
      mn !== null && lo(mn, e),
      Hs.forEach(t),
      Us.forEach(t));
    for (var a = 0; a < gn.length; a++) {
      var n = gn[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < gn.length && ((a = gn[0]), a.blockedOn === null); )
      (xg(a), a.blockedOn === null && gn.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (n = 0; n < a.length; n += 3) {
        var l = a[n],
          i = a[n + 1],
          d = l[Nt] || null;
        if (typeof i == "function") d || vg(a);
        else if (d) {
          var g = null;
          if (i && i.hasAttribute("formAction")) {
            if (((l = i), (d = i[Nt] || null))) g = d.formAction;
            else if (Qr(l) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (a[n + 1] = g) : (a.splice(n, 3), (n -= 3)),
            vg(a));
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
      (l !== null && (l(), (l = null)), n || setTimeout(a, 20));
    }
    function a() {
      if (!n && !navigation.transition) {
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
      var n = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function Zr(e) {
    this._internalRoot = e;
  }
  ((io.prototype.render = Zr.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current,
        n = Ht();
      dg(a, n, e, t, null, null);
    }),
    (io.prototype.unmount = Zr.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (dg(e.current, 2, null, e, null, null), Yi(), (t[Pn] = null));
        }
      }));
  function io(e) {
    this._internalRoot = e;
  }
  io.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uo();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < gn.length && t !== 0 && t < gn[a].priority; a++);
      (gn.splice(a, 0, e), a === 0 && xg(e));
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
  var Cy = {
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
        ((wn = oo.inject(Cy)), (xt = oo));
      } catch {}
  }
  return (
    (qs.createRoot = function (e, t) {
      if (!f(e)) throw Error(r(299));
      var a = !1,
        n = "",
        l = kf,
        i = Of,
        d = Cf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = rg(e, 1, !1, null, null, a, n, null, l, i, d, bg)),
        (e[Pn] = t.current),
        kr(e),
        new Zr(t)
      );
    }),
    (qs.hydrateRoot = function (e, t, a) {
      if (!f(e)) throw Error(r(299));
      var n = !1,
        l = "",
        i = kf,
        d = Of,
        g = Cf,
        b = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (n = !0),
          a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (i = a.onUncaughtError),
          a.onCaughtError !== void 0 && (d = a.onCaughtError),
          a.onRecoverableError !== void 0 && (g = a.onRecoverableError),
          a.formState !== void 0 && (b = a.formState)),
        (t = rg(e, 1, !0, t, a ?? null, n, l, b, i, d, g, bg)),
        (t.context = ug(null)),
        (a = t.current),
        (n = Ht()),
        (n = $n(n)),
        (l = Fa(n)),
        (l.callback = null),
        Ia(a, l, n),
        (a = n),
        (t.current.lanes = a),
        Ve(t, a),
        da(t),
        (e[Pn] = t.current),
        kr(e),
        new io(t)
      );
    }),
    (qs.version = "19.2.1"),
    qs
  );
}
var zg;
function Yy() {
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
  return (s(), (Wr.exports = Ly()), Wr.exports);
}
var qy = Yy(),
  z = Eo();
const Z = fp(z),
  Gy = My({ __proto__: null, default: Z }, [z]);
var Vy = (s, c, u, r, f, m, x, v) => {
    let y = document.documentElement,
      h = ["light", "dark"];
    function j(C) {
      ((Array.isArray(s) ? s : [s]).forEach(M => {
        let Y = M === "class",
          V = Y && m ? f.map(G => m[G] || G) : f;
        Y
          ? (y.classList.remove(...V), y.classList.add(m && m[C] ? m[C] : C))
          : y.setAttribute(M, C);
      }),
        p(C));
    }
    function p(C) {
      v && h.includes(C) && (y.style.colorScheme = C);
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
  Xy = z.createContext(void 0),
  Qy = { setTheme: s => {}, themes: [] },
  Ky = () => {
    var s;
    return (s = z.useContext(Xy)) != null ? s : Qy;
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
    themes: v,
    nonce: y,
    scriptProps: h,
  }) => {
    let j = JSON.stringify([u, c, m, s, v, x, r, f]).slice(1, -1);
    return z.createElement("script", {
      ...h,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? y : "",
      dangerouslySetInnerHTML: { __html: `(${Vy.toString()})(${j})` },
    });
  }
);
var xu = mp();
const Zy = fp(xu);
function Jy(s) {
  if (typeof document > "u") return;
  let c = document.head || document.getElementsByTagName("head")[0],
    u = document.createElement("style");
  ((u.type = "text/css"),
    c.appendChild(u),
    u.styleSheet
      ? (u.styleSheet.cssText = s)
      : u.appendChild(document.createTextNode(s)));
}
const Wy = s => {
    switch (s) {
      case "success":
        return Fy;
      case "info":
        return ev;
      case "warning":
        return Iy;
      case "error":
        return tv;
      default:
        return null;
    }
  },
  $y = Array(12).fill(0),
  Py = ({ visible: s, className: c }) =>
    Z.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", c].filter(Boolean).join(" "),
        "data-visible": s,
      },
      Z.createElement(
        "div",
        { className: "sonner-spinner" },
        $y.map((u, r) =>
          Z.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  Fy = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Iy = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  ev = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  tv = Z.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    Z.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  av = Z.createElement(
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
    Z.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    Z.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  nv = () => {
    const [s, c] = Z.useState(document.hidden);
    return (
      Z.useEffect(() => {
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
class lv {
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
          x = this.toasts.find(y => y.id === m),
          v = c.dismissible === void 0 ? !0 : c.dismissible;
        return (
          this.dismissedToasts.has(m) && this.dismissedToasts.delete(m),
          x
            ? (this.toasts = this.toasts.map(y =>
                y.id === m
                  ? (this.publish({ ...y, ...c, id: m, title: r }),
                    { ...y, ...c, id: m, dismissible: v, title: r })
                  : y
              ))
            : this.addToast({ title: r, ...f, dismissible: v, id: m }),
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
        const v = f
            .then(async h => {
              if (((x = ["resolve", h]), Z.isValidElement(h)))
                ((m = !1), this.create({ id: r, type: "default", message: h }));
              else if (iv(h) && !h.ok) {
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
                    typeof p == "object" && !Z.isValidElement(p)
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
                    typeof p == "object" && !Z.isValidElement(p)
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
                    typeof p == "object" && !Z.isValidElement(p)
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
                    typeof j == "object" && !Z.isValidElement(j)
                      ? j
                      : { message: j };
                this.create({ id: r, type: "error", description: p, ...C });
              }
            })
            .finally(() => {
              (m && (this.dismiss(r), (r = void 0)),
                u.finally == null || u.finally.call(u));
            }),
          y = () =>
            new Promise((h, j) =>
              v.then(() => (x[0] === "reject" ? j(x[1]) : h(x[1]))).catch(j)
            );
        return typeof r != "string" && typeof r != "number"
          ? { unwrap: y }
          : Object.assign(r, { unwrap: y });
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
const Ot = new lv(),
  sv = (s, c) => {
    const u = c?.id || ou++;
    return (Ot.addToast({ title: s, ...c, id: u }), u);
  },
  iv = s =>
    s &&
    typeof s == "object" &&
    "ok" in s &&
    typeof s.ok == "boolean" &&
    "status" in s &&
    typeof s.status == "number",
  ov = sv,
  cv = () => Ot.toasts,
  rv = () => Ot.getActiveToasts();
Object.assign(
  ov,
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
  { getHistory: cv, getToasts: rv }
);
Jy(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function co(s) {
  return s.label !== void 0;
}
const uv = 3,
  dv = "24px",
  fv = "16px",
  Mg = 4e3,
  mv = 356,
  gv = 14,
  pv = 45,
  hv = 200;
function fa(...s) {
  return s.filter(Boolean).join(" ");
}
function xv(s) {
  const [c, u] = s.split("-"),
    r = [];
  return (c && r.push(c), u && r.push(u), r);
}
const yv = s => {
  var c, u, r, f, m, x, v, y, h;
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
      cancelButtonStyle: K,
      actionButtonStyle: ge,
      className: Ne = "",
      descriptionClassName: Oe = "",
      duration: he,
      position: xe,
      gap: ve,
      expandByDefault: je,
      classNames: S,
      icons: U,
      closeButtonAriaLabel: D = "Close toast",
    } = s,
    [ie, re] = Z.useState(null),
    [N, H] = Z.useState(null),
    [R, X] = Z.useState(!1),
    [W, oe] = Z.useState(!1),
    [ne, de] = Z.useState(!1),
    [Te, nt] = Z.useState(!1),
    [gt, lt] = Z.useState(!1),
    [ya, $t] = Z.useState(0),
    [Ql, Zn] = Z.useState(0),
    bn = Z.useRef(p.duration || he || Mg),
    Kl = Z.useRef(null),
    Ct = Z.useRef(null),
    Zl = G === 0,
    Jl = G + 1 <= Y,
    pt = p.type,
    Ga = p.dismissible !== !1,
    ht = p.className || "",
    Ro = p.descriptionClassName || "",
    jn = Z.useMemo(
      () => V.findIndex(fe => fe.toastId === p.id) || 0,
      [V, p.id]
    ),
    Js = Z.useMemo(() => {
      var fe;
      return (fe = p.closeButton) != null ? fe : se;
    }, [p.closeButton, se]),
    Nn = Z.useMemo(() => p.duration || he || Mg, [p.duration, he]),
    Wl = Z.useRef(0),
    va = Z.useRef(0),
    Ws = Z.useRef(0),
    Va = Z.useRef(null),
    [wn, xt] = xe.split("-"),
    Pt = Z.useMemo(
      () => V.reduce((fe, qe, et) => (et >= jn ? fe : fe + qe.height), 0),
      [V, jn]
    ),
    ut = nv(),
    Ho = p.invert || j,
    $l = pt === "loading";
  ((va.current = Z.useMemo(() => jn * ve + Pt, [jn, Pt])),
    Z.useEffect(() => {
      bn.current = Nn;
    }, [Nn]),
    Z.useEffect(() => {
      X(!0);
    }, []),
    Z.useEffect(() => {
      const fe = Ct.current;
      if (fe) {
        const qe = fe.getBoundingClientRect().height;
        return (
          Zn(qe),
          M(et => [{ toastId: p.id, height: qe, position: p.position }, ...et]),
          () => M(et => et.filter(dt => dt.toastId !== p.id))
        );
      }
    }, [M, p.id]),
    Z.useLayoutEffect(() => {
      if (!R) return;
      const fe = Ct.current,
        qe = fe.style.height;
      fe.style.height = "auto";
      const et = fe.getBoundingClientRect().height;
      ((fe.style.height = qe),
        Zn(et),
        M(dt =>
          dt.find(Ve => Ve.toastId === p.id)
            ? dt.map(Ve => (Ve.toastId === p.id ? { ...Ve, height: et } : Ve))
            : [{ toastId: p.id, height: et, position: p.position }, ...dt]
        ));
    }, [R, p.title, p.description, M, p.id, p.jsx, p.action, p.cancel]));
  const ia = Z.useCallback(() => {
    (oe(!0),
      $t(va.current),
      M(fe => fe.filter(qe => qe.toastId !== p.id)),
      setTimeout(() => {
        P(p);
      }, hv));
  }, [p, P, M, va]);
  (Z.useEffect(() => {
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
              bn.current = bn.current - dt;
            }
            Ws.current = new Date().getTime();
          })()
        : (() => {
            bn.current !== 1 / 0 &&
              ((Wl.current = new Date().getTime()),
              (fe = setTimeout(() => {
                (p.onAutoClose == null || p.onAutoClose.call(p, p), ia());
              }, bn.current)));
          })(),
      () => clearTimeout(fe)
    );
  }, [J, C, p, pt, ut, ia]),
    Z.useEffect(() => {
      p.delete && (ia(), p.onDismiss == null || p.onDismiss.call(p, p));
    }, [ia, p.delete]));
  function Jn() {
    var fe;
    if (U?.loading) {
      var qe;
      return Z.createElement(
        "div",
        {
          className: fa(
            S?.loader,
            p == null || (qe = p.classNames) == null ? void 0 : qe.loader,
            "sonner-loader"
          ),
          "data-visible": pt === "loading",
        },
        U.loading
      );
    }
    return Z.createElement(Py, {
      className: fa(
        S?.loader,
        p == null || (fe = p.classNames) == null ? void 0 : fe.loader
      ),
      visible: pt === "loading",
    });
  }
  const Wn = p.icon || U?.[pt] || Wy(pt);
  var Sn, oa;
  return Z.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Ct,
      className: fa(
        Ne,
        ht,
        S?.toast,
        p == null || (c = p.classNames) == null ? void 0 : c.toast,
        S?.default,
        S?.[pt],
        p == null || (u = p.classNames) == null ? void 0 : u[pt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (Sn = p.richColors) != null ? Sn : ee,
      "data-styled": !(p.jsx || p.unstyled || E),
      "data-mounted": R,
      "data-promise": !!p.promise,
      "data-swiped": gt,
      "data-removed": W,
      "data-visible": Jl,
      "data-y-position": wn,
      "data-x-position": xt,
      "data-index": G,
      "data-front": Zl,
      "data-swiping": ne,
      "data-dismissible": Ga,
      "data-type": pt,
      "data-invert": Ho,
      "data-swipe-out": Te,
      "data-swipe-direction": N,
      "data-expanded": !!(J || (je && R)),
      "data-testid": p.testId,
      style: {
        "--index": G,
        "--toasts-before": G,
        "--z-index": I.length - G,
        "--offset": `${W ? ya : va.current}px`,
        "--initial-height": je ? "auto" : `${Ql}px`,
        ...Q,
        ...p.style,
      },
      onDragEnd: () => {
        (de(!1), re(null), (Va.current = null));
      },
      onPointerDown: fe => {
        fe.button !== 2 &&
          ($l ||
            !Ga ||
            ((Kl.current = new Date()),
            $t(va.current),
            fe.target.setPointerCapture(fe.pointerId),
            fe.target.tagName !== "BUTTON" &&
              (de(!0), (Va.current = { x: fe.clientX, y: fe.clientY }))));
      },
      onPointerUp: () => {
        var fe, qe, et;
        if (Te || !Ga) return;
        Va.current = null;
        const dt = Number(
            ((fe = Ct.current) == null
              ? void 0
              : fe.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Xa = Number(
            ((qe = Ct.current) == null
              ? void 0
              : qe.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Ve =
            new Date().getTime() -
            ((et = Kl.current) == null ? void 0 : et.getTime()),
          vt = ie === "x" ? dt : Xa,
          An = Math.abs(vt) / Ve;
        if (Math.abs(vt) >= pv || An > 0.11) {
          ($t(va.current),
            p.onDismiss == null || p.onDismiss.call(p, p),
            H(
              ie === "x" ? (dt > 0 ? "right" : "left") : Xa > 0 ? "down" : "up"
            ),
            ia(),
            nt(!0));
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
          !Va.current ||
          !Ga ||
          ((qe = window.getSelection()) == null
            ? void 0
            : qe.toString().length) > 0
        )
          return;
        const Ve = fe.clientY - Va.current.y,
          vt = fe.clientX - Va.current.x;
        var An;
        const bt = (An = s.swipeDirections) != null ? An : xv(xe);
        !ie &&
          (Math.abs(vt) > 1 || Math.abs(Ve) > 1) &&
          re(Math.abs(vt) > Math.abs(Ve) ? "x" : "y");
        let jt = { x: 0, y: 0 };
        const $n = Ft => 1 / (1.5 + Math.abs(Ft) / 20);
        if (ie === "y") {
          if (bt.includes("top") || bt.includes("bottom"))
            if (
              (bt.includes("top") && Ve < 0) ||
              (bt.includes("bottom") && Ve > 0)
            )
              jt.y = Ve;
            else {
              const Ft = Ve * $n(Ve);
              jt.y = Math.abs(Ft) < Math.abs(Ve) ? Ft : Ve;
            }
        } else if (ie === "x" && (bt.includes("left") || bt.includes("right")))
          if (
            (bt.includes("left") && vt < 0) ||
            (bt.includes("right") && vt > 0)
          )
            jt.x = vt;
          else {
            const Ft = vt * $n(vt);
            jt.x = Math.abs(Ft) < Math.abs(vt) ? Ft : vt;
          }
        ((Math.abs(jt.x) > 0 || Math.abs(jt.y) > 0) && lt(!0),
          (et = Ct.current) == null ||
            et.style.setProperty("--swipe-amount-x", `${jt.x}px`),
          (dt = Ct.current) == null ||
            dt.style.setProperty("--swipe-amount-y", `${jt.y}px`));
      },
    },
    Js && !p.jsx && pt !== "loading"
      ? Z.createElement(
          "button",
          {
            "aria-label": D,
            "data-disabled": $l,
            "data-close-button": !0,
            onClick:
              $l || !Ga
                ? () => {}
                : () => {
                    (ia(), p.onDismiss == null || p.onDismiss.call(p, p));
                  },
            className: fa(
              S?.closeButton,
              p == null || (r = p.classNames) == null ? void 0 : r.closeButton
            ),
          },
          (oa = U?.close) != null ? oa : av
        )
      : null,
    (pt || p.icon || p.promise) &&
      p.icon !== null &&
      (U?.[pt] !== null || p.icon)
      ? Z.createElement(
          "div",
          {
            "data-icon": "",
            className: fa(
              S?.icon,
              p == null || (f = p.classNames) == null ? void 0 : f.icon
            ),
          },
          p.promise || (p.type === "loading" && !p.icon)
            ? p.icon || Jn()
            : null,
          p.type !== "loading" ? Wn : null
        )
      : null,
    Z.createElement(
      "div",
      {
        "data-content": "",
        className: fa(
          S?.content,
          p == null || (m = p.classNames) == null ? void 0 : m.content
        ),
      },
      Z.createElement(
        "div",
        {
          "data-title": "",
          className: fa(
            S?.title,
            p == null || (x = p.classNames) == null ? void 0 : x.title
          ),
        },
        p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title
      ),
      p.description
        ? Z.createElement(
            "div",
            {
              "data-description": "",
              className: fa(
                Oe,
                Ro,
                S?.description,
                p == null || (v = p.classNames) == null ? void 0 : v.description
              ),
            },
            typeof p.description == "function" ? p.description() : p.description
          )
        : null
    ),
    Z.isValidElement(p.cancel)
      ? p.cancel
      : p.cancel && co(p.cancel)
        ? Z.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: p.cancelButtonStyle || K,
              onClick: fe => {
                co(p.cancel) &&
                  Ga &&
                  (p.cancel.onClick == null ||
                    p.cancel.onClick.call(p.cancel, fe),
                  ia());
              },
              className: fa(
                S?.cancelButton,
                p == null || (y = p.classNames) == null
                  ? void 0
                  : y.cancelButton
              ),
            },
            p.cancel.label
          )
        : null,
    Z.isValidElement(p.action)
      ? p.action
      : p.action && co(p.action)
        ? Z.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: p.actionButtonStyle || ge,
              onClick: fe => {
                co(p.action) &&
                  (p.action.onClick == null ||
                    p.action.onClick.call(p.action, fe),
                  !fe.defaultPrevented && ia());
              },
              className: fa(
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
function vv(s, c) {
  const u = {};
  return (
    [s, c].forEach((r, f) => {
      const m = f === 1,
        x = m ? "--mobile-offset" : "--offset",
        v = m ? fv : dv;
      function y(h) {
        ["top", "right", "bottom", "left"].forEach(j => {
          u[`${x}-${j}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? y(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach(h => {
              r[h] === void 0
                ? (u[`${x}-${h}`] = v)
                : (u[`${x}-${h}`] =
                    typeof r[h] == "number" ? `${r[h]}px` : r[h]);
            })
          : y(v);
    }),
    u
  );
}
const bv = Z.forwardRef(function (c, u) {
    const {
        id: r,
        invert: f,
        position: m = "bottom-right",
        hotkey: x = ["altKey", "KeyT"],
        expand: v,
        closeButton: y,
        className: h,
        offset: j,
        mobileOffset: p,
        theme: E = "light",
        richColors: C,
        duration: M,
        style: Y,
        visibleToasts: V = uv,
        toastOptions: G,
        dir: I = Dg(),
        gap: J = gv,
        icons: P,
        containerAriaLabel: ee = "Notifications",
      } = c,
      [se, Q] = Z.useState([]),
      K = Z.useMemo(
        () =>
          r ? se.filter(R => R.toasterId === r) : se.filter(R => !R.toasterId),
        [se, r]
      ),
      ge = Z.useMemo(
        () =>
          Array.from(
            new Set([m].concat(K.filter(R => R.position).map(R => R.position)))
          ),
        [K, m]
      ),
      [Ne, Oe] = Z.useState([]),
      [he, xe] = Z.useState(!1),
      [ve, je] = Z.useState(!1),
      [S, U] = Z.useState(
        E !== "system"
          ? E
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
      ),
      D = Z.useRef(null),
      ie = x.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      re = Z.useRef(null),
      N = Z.useRef(!1),
      H = Z.useCallback(R => {
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
      Z.useEffect(
        () =>
          Ot.subscribe(R => {
            if (R.dismiss) {
              requestAnimationFrame(() => {
                Q(X => X.map(W => (W.id === R.id ? { ...W, delete: !0 } : W)));
              });
              return;
            }
            setTimeout(() => {
              Zy.flushSync(() => {
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
      Z.useEffect(() => {
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
      Z.useEffect(() => {
        se.length <= 1 && xe(!1);
      }, [se]),
      Z.useEffect(() => {
        const R = X => {
          var W;
          if (x.every(de => X[de] || X.code === de)) {
            var ne;
            (xe(!0), (ne = D.current) == null || ne.focus());
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
      Z.useEffect(() => {
        if (D.current)
          return () => {
            re.current &&
              (re.current.focus({ preventScroll: !0 }),
              (re.current = null),
              (N.current = !1));
          };
      }, [D.current]),
      Z.createElement(
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
          const [oe, ne] = R.split("-");
          return K.length
            ? Z.createElement(
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
                  "data-x-position": ne,
                  style: {
                    "--front-toast-height": `${((W = Ne[0]) == null ? void 0 : W.height) || 0}px`,
                    "--width": `${mv}px`,
                    "--gap": `${J}px`,
                    ...Y,
                    ...vv(j, p),
                  },
                  onBlur: de => {
                    N.current &&
                      !de.currentTarget.contains(de.relatedTarget) &&
                      ((N.current = !1),
                      re.current &&
                        (re.current.focus({ preventScroll: !0 }),
                        (re.current = null)));
                  },
                  onFocus: de => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      N.current ||
                      ((N.current = !0), (re.current = de.relatedTarget));
                  },
                  onMouseEnter: () => xe(!0),
                  onMouseMove: () => xe(!0),
                  onMouseLeave: () => {
                    ve || xe(!1);
                  },
                  onDragEnd: () => xe(!1),
                  onPointerDown: de => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      je(!0);
                  },
                  onPointerUp: () => je(!1),
                },
                K.filter(
                  de => (!de.position && X === 0) || de.position === R
                ).map((de, Te) => {
                  var nt, gt;
                  return Z.createElement(yv, {
                    key: de.id,
                    icons: P,
                    index: Te,
                    toast: de,
                    defaultRichColors: C,
                    duration: (nt = G?.duration) != null ? nt : M,
                    className: G?.className,
                    descriptionClassName: G?.descriptionClassName,
                    invert: f,
                    visibleToasts: V,
                    closeButton: (gt = G?.closeButton) != null ? gt : y,
                    interacting: ve,
                    position: R,
                    style: G?.style,
                    unstyled: G?.unstyled,
                    classNames: G?.classNames,
                    cancelButtonStyle: G?.cancelButtonStyle,
                    actionButtonStyle: G?.actionButtonStyle,
                    closeButtonAriaLabel: G?.closeButtonAriaLabel,
                    removeToast: H,
                    toasts: K.filter(lt => lt.position == de.position),
                    heights: Ne.filter(lt => lt.position == de.position),
                    setHeights: Oe,
                    expandByDefault: v,
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
  jv = ({ ...s }) => {
    const { theme: c = "system" } = Ky();
    return o.jsx(bv, {
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
function La(s, c, { checkForDefaultPrevented: u = !0 } = {}) {
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
function Qn(...s) {
  return z.useCallback(gp(...s), s);
}
function pp(s, c = []) {
  let u = [];
  function r(m, x) {
    const v = z.createContext(x),
      y = u.length;
    u = [...u, x];
    const h = p => {
      const { scope: E, children: C, ...M } = p,
        Y = E?.[s]?.[y] || v,
        V = z.useMemo(() => M, Object.values(M));
      return o.jsx(Y.Provider, { value: V, children: C });
    };
    h.displayName = m + "Provider";
    function j(p, E) {
      const C = E?.[s]?.[y] || v,
        M = z.useContext(C);
      if (M) return M;
      if (x !== void 0) return x;
      throw new Error(`\`${p}\` must be used within \`${m}\``);
    }
    return [h, j];
  }
  const f = () => {
    const m = u.map(x => z.createContext(x));
    return function (v) {
      const y = v?.[s] || m;
      return z.useMemo(() => ({ [`__scope${s}`]: { ...v, [s]: y } }), [v, y]);
    };
  };
  return ((f.scopeName = s), [r, Nv(f, ...c)]);
}
function Nv(...s) {
  const c = s[0];
  if (s.length === 1) return c;
  const u = () => {
    const r = s.map(f => ({ useScope: f(), scopeName: f.scopeName }));
    return function (m) {
      const x = r.reduce((v, { useScope: y, scopeName: h }) => {
        const p = y(m)[`__scope${h}`];
        return { ...v, ...p };
      }, {});
      return z.useMemo(() => ({ [`__scope${c.scopeName}`]: x }), [x]);
    };
  };
  return ((u.scopeName = c.scopeName), u);
}
function hp(s) {
  const c = Sv(s),
    u = z.forwardRef((r, f) => {
      const { children: m, ...x } = r,
        v = z.Children.toArray(m),
        y = v.find(Ev);
      if (y) {
        const h = y.props.children,
          j = v.map(p =>
            p === y
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
var wv = hp("Slot");
function Sv(s) {
  const c = z.forwardRef((u, r) => {
    const { children: f, ...m } = u;
    if (z.isValidElement(f)) {
      const x = kv(f),
        v = Tv(m, f.props);
      return (
        f.type !== z.Fragment && (v.ref = r ? gp(r, x) : x),
        z.cloneElement(f, v)
      );
    }
    return z.Children.count(f) > 1 ? z.Children.only(null) : null;
  });
  return ((c.displayName = `${s}.SlotClone`), c);
}
var xp = Symbol("radix.slottable");
function Av(s) {
  const c = ({ children: u }) => o.jsx(o.Fragment, { children: u });
  return ((c.displayName = `${s}.Slottable`), (c.__radixId = xp), c);
}
function Ev(s) {
  return (
    z.isValidElement(s) &&
    typeof s.type == "function" &&
    "__radixId" in s.type &&
    s.type.__radixId === xp
  );
}
function Tv(s, c) {
  const u = { ...c };
  for (const r in c) {
    const f = s[r],
      m = c[r];
    /^on[A-Z]/.test(r)
      ? f && m
        ? (u[r] = (...v) => {
            const y = m(...v);
            return (f(...v), y);
          })
        : f && (u[r] = f)
      : r === "style"
        ? (u[r] = { ...f, ...m })
        : r === "className" && (u[r] = [f, m].filter(Boolean).join(" "));
  }
  return { ...s, ...u };
}
function kv(s) {
  let c = Object.getOwnPropertyDescriptor(s.props, "ref")?.get,
    u = c && "isReactWarning" in c && c.isReactWarning;
  return u
    ? s.ref
    : ((c = Object.getOwnPropertyDescriptor(s, "ref")?.get),
      (u = c && "isReactWarning" in c && c.isReactWarning),
      u ? s.props.ref : s.props.ref || s.ref);
}
var Ov = [
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
  Kn = Ov.reduce((s, c) => {
    const u = hp(`Primitive.${c}`),
      r = z.forwardRef((f, m) => {
        const { asChild: x, ...v } = f,
          y = x ? u : c;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          o.jsx(y, { ...v, ref: m })
        );
      });
    return ((r.displayName = `Primitive.${c}`), { ...s, [c]: r });
  }, {});
function Cv(s, c) {
  s && xu.flushSync(() => s.dispatchEvent(c));
}
function To(s) {
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
function zv(s, c = globalThis?.document) {
  const u = To(s);
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
var Mv = "DismissableLayer",
  cu = "dismissableLayer.update",
  Dv = "dismissableLayer.pointerDownOutside",
  _v = "dismissableLayer.focusOutside",
  Bg,
  yp = z.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  vp = z.forwardRef((s, c) => {
    const {
        disableOutsidePointerEvents: u = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: f,
        onFocusOutside: m,
        onInteractOutside: x,
        onDismiss: v,
        ...y
      } = s,
      h = z.useContext(yp),
      [j, p] = z.useState(null),
      E = j?.ownerDocument ?? globalThis?.document,
      [, C] = z.useState({}),
      M = Qn(c, Q => p(Q)),
      Y = Array.from(h.layers),
      [V] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      G = Y.indexOf(V),
      I = j ? Y.indexOf(j) : -1,
      J = h.layersWithOutsidePointerEventsDisabled.size > 0,
      P = I >= G,
      ee = Hv(Q => {
        const K = Q.target,
          ge = [...h.branches].some(Ne => Ne.contains(K));
        !P || ge || (f?.(Q), x?.(Q), Q.defaultPrevented || v?.());
      }, E),
      se = Uv(Q => {
        const K = Q.target;
        [...h.branches].some(Ne => Ne.contains(K)) ||
          (m?.(Q), x?.(Q), Q.defaultPrevented || v?.());
      }, E);
    return (
      zv(Q => {
        I === h.layers.size - 1 &&
          (r?.(Q), !Q.defaultPrevented && v && (Q.preventDefault(), v()));
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
      o.jsx(Kn.div, {
        ...y,
        ref: M,
        style: {
          pointerEvents: J ? (P ? "auto" : "none") : void 0,
          ...s.style,
        },
        onFocusCapture: La(s.onFocusCapture, se.onFocusCapture),
        onBlurCapture: La(s.onBlurCapture, se.onBlurCapture),
        onPointerDownCapture: La(
          s.onPointerDownCapture,
          ee.onPointerDownCapture
        ),
      })
    );
  });
vp.displayName = Mv;
var Bv = "DismissableLayerBranch",
  Rv = z.forwardRef((s, c) => {
    const u = z.useContext(yp),
      r = z.useRef(null),
      f = Qn(c, r);
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
      o.jsx(Kn.div, { ...s, ref: f })
    );
  });
Rv.displayName = Bv;
function Hv(s, c = globalThis?.document) {
  const u = To(s),
    r = z.useRef(!1),
    f = z.useRef(() => {});
  return (
    z.useEffect(() => {
      const m = v => {
          if (v.target && !r.current) {
            let y = function () {
              bp(Dv, u, h, { discrete: !0 });
            };
            const h = { originalEvent: v };
            v.pointerType === "touch"
              ? (c.removeEventListener("click", f.current),
                (f.current = y),
                c.addEventListener("click", f.current, { once: !0 }))
              : y();
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
function Uv(s, c = globalThis?.document) {
  const u = To(s),
    r = z.useRef(!1);
  return (
    z.useEffect(() => {
      const f = m => {
        m.target &&
          !r.current &&
          bp(_v, u, { originalEvent: m }, { discrete: !1 });
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
    r ? Cv(f, m) : f.dispatchEvent(m));
}
var Vs = globalThis?.document ? z.useLayoutEffect : () => {};
const Lv = ["top", "right", "bottom", "left"],
  xn = Math.min,
  Ut = Math.max,
  jo = Math.round,
  ro = Math.floor,
  pa = s => ({ x: s, y: s }),
  Yv = { left: "right", right: "left", bottom: "top", top: "bottom" },
  qv = { start: "end", end: "start" };
function ru(s, c, u) {
  return Ut(s, xn(c, u));
}
function Ya(s, c) {
  return typeof s == "function" ? s(c) : s;
}
function qa(s) {
  return s.split("-")[0];
}
function ql(s) {
  return s.split("-")[1];
}
function yu(s) {
  return s === "x" ? "y" : "x";
}
function vu(s) {
  return s === "y" ? "height" : "width";
}
const Gv = new Set(["top", "bottom"]);
function ga(s) {
  return Gv.has(qa(s)) ? "y" : "x";
}
function bu(s) {
  return yu(ga(s));
}
function Vv(s, c, u) {
  u === void 0 && (u = !1);
  const r = ql(s),
    f = bu(s),
    m = vu(f);
  let x =
    f === "x"
      ? r === (u ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (c.reference[m] > c.floating[m] && (x = No(x)), [x, No(x)]);
}
function Xv(s) {
  const c = No(s);
  return [uu(s), c, uu(c)];
}
function uu(s) {
  return s.replace(/start|end/g, c => qv[c]);
}
const Hg = ["left", "right"],
  Ug = ["right", "left"],
  Qv = ["top", "bottom"],
  Kv = ["bottom", "top"];
function Zv(s, c, u) {
  switch (s) {
    case "top":
    case "bottom":
      return u ? (c ? Ug : Hg) : c ? Hg : Ug;
    case "left":
    case "right":
      return c ? Qv : Kv;
    default:
      return [];
  }
}
function Jv(s, c, u, r) {
  const f = ql(s);
  let m = Zv(qa(s), u === "start", r);
  return (
    f && ((m = m.map(x => x + "-" + f)), c && (m = m.concat(m.map(uu)))),
    m
  );
}
function No(s) {
  return s.replace(/left|right|bottom|top/g, c => Yv[c]);
}
function Wv(s) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...s };
}
function jp(s) {
  return typeof s != "number"
    ? Wv(s)
    : { top: s, right: s, bottom: s, left: s };
}
function wo(s) {
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
  const m = ga(c),
    x = bu(c),
    v = vu(x),
    y = qa(c),
    h = m === "y",
    j = r.x + r.width / 2 - f.width / 2,
    p = r.y + r.height / 2 - f.height / 2,
    E = r[v] / 2 - f[v] / 2;
  let C;
  switch (y) {
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
const $v = async (s, c, u) => {
  const {
      placement: r = "bottom",
      strategy: f = "absolute",
      middleware: m = [],
      platform: x,
    } = u,
    v = m.filter(Boolean),
    y = await (x.isRTL == null ? void 0 : x.isRTL(c));
  let h = await x.getElementRects({ reference: s, floating: c, strategy: f }),
    { x: j, y: p } = Lg(h, r, y),
    E = r,
    C = {},
    M = 0;
  for (let Y = 0; Y < v.length; Y++) {
    const { name: V, fn: G } = v[Y],
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
          ({ x: j, y: p } = Lg(h, E, y))),
        (Y = -1)));
  }
  return { x: j, y: p, placement: E, strategy: f, middlewareData: C };
};
async function Xs(s, c) {
  var u;
  c === void 0 && (c = {});
  const { x: r, y: f, platform: m, rects: x, elements: v, strategy: y } = s,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: j = "viewport",
      elementContext: p = "floating",
      altBoundary: E = !1,
      padding: C = 0,
    } = Ya(c, s),
    M = jp(C),
    V = v[E ? (p === "floating" ? "reference" : "floating") : p],
    G = wo(
      await m.getClippingRect({
        element:
          (u = await (m.isElement == null ? void 0 : m.isElement(V))) == null ||
          u
            ? V
            : V.contextElement ||
              (await (m.getDocumentElement == null
                ? void 0
                : m.getDocumentElement(v.floating))),
        boundary: h,
        rootBoundary: j,
        strategy: y,
      })
    ),
    I =
      p === "floating"
        ? { x: r, y: f, width: x.floating.width, height: x.floating.height }
        : x.reference,
    J = await (m.getOffsetParent == null
      ? void 0
      : m.getOffsetParent(v.floating)),
    P = (await (m.isElement == null ? void 0 : m.isElement(J)))
      ? (await (m.getScale == null ? void 0 : m.getScale(J))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    ee = wo(
      m.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await m.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: v,
            rect: I,
            offsetParent: J,
            strategy: y,
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
const Pv = s => ({
    name: "arrow",
    options: s,
    async fn(c) {
      const {
          x: u,
          y: r,
          placement: f,
          rects: m,
          platform: x,
          elements: v,
          middlewareData: y,
        } = c,
        { element: h, padding: j = 0 } = Ya(s, c) || {};
      if (h == null) return {};
      const p = jp(j),
        E = { x: u, y: r },
        C = bu(f),
        M = vu(C),
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
        (Q = v.floating[J] || m.floating[M]);
      const K = P / 2 - ee / 2,
        ge = Q / 2 - Y[M] / 2 - 1,
        Ne = xn(p[G], ge),
        Oe = xn(p[I], ge),
        he = Ne,
        xe = Q - Y[M] - Oe,
        ve = Q / 2 - Y[M] / 2 + K,
        je = ru(he, ve, xe),
        S =
          !y.arrow &&
          ql(f) != null &&
          ve !== je &&
          m.reference[M] / 2 - (ve < he ? Ne : Oe) - Y[M] / 2 < 0,
        U = S ? (ve < he ? ve - he : ve - xe) : 0;
      return {
        [C]: E[C] + U,
        data: {
          [C]: je,
          centerOffset: ve - je - U,
          ...(S && { alignmentOffset: U }),
        },
        reset: S,
      };
    },
  }),
  Fv = function (s) {
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
              initialPlacement: v,
              platform: y,
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
            } = Ya(s, c);
          if ((u = m.arrow) != null && u.alignmentOffset) return {};
          const G = qa(f),
            I = ga(v),
            J = qa(v) === v,
            P = await (y.isRTL == null ? void 0 : y.isRTL(h.floating)),
            ee = E || (J || !Y ? [No(v)] : Xv(v)),
            se = M !== "none";
          !E && se && ee.push(...Jv(v, Y, M, P));
          const Q = [v, ...ee],
            K = await Xs(c, V),
            ge = [];
          let Ne = ((r = m.flip) == null ? void 0 : r.overflows) || [];
          if ((j && ge.push(K[G]), p)) {
            const ve = Vv(f, x, P);
            ge.push(K[ve[0]], K[ve[1]]);
          }
          if (
            ((Ne = [...Ne, { placement: f, overflows: ge }]),
            !ge.every(ve => ve <= 0))
          ) {
            var Oe, he;
            const ve = (((Oe = m.flip) == null ? void 0 : Oe.index) || 0) + 1,
              je = Q[ve];
            if (
              je &&
              (!(p === "alignment" ? I !== ga(je) : !1) ||
                Ne.every(D =>
                  ga(D.placement) === I ? D.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: ve, overflows: Ne },
                reset: { placement: je },
              };
            let S =
              (he = Ne.filter(U => U.overflows[0] <= 0).sort(
                (U, D) => U.overflows[1] - D.overflows[1]
              )[0]) == null
                ? void 0
                : he.placement;
            if (!S)
              switch (C) {
                case "bestFit": {
                  var xe;
                  const U =
                    (xe = Ne.filter(D => {
                      if (se) {
                        const ie = ga(D.placement);
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
                  S = v;
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
  return Lv.some(c => s[c] >= 0);
}
const Iv = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        name: "hide",
        options: s,
        async fn(c) {
          const { rects: u } = c,
            { strategy: r = "referenceHidden", ...f } = Ya(s, c);
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
  Np = new Set(["left", "top"]);
async function e0(s, c) {
  const { placement: u, platform: r, elements: f } = s,
    m = await (r.isRTL == null ? void 0 : r.isRTL(f.floating)),
    x = qa(u),
    v = ql(u),
    y = ga(u) === "y",
    h = Np.has(x) ? -1 : 1,
    j = m && y ? -1 : 1,
    p = Ya(c, s);
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
    v && typeof M == "number" && (C = v === "end" ? M * -1 : M),
    y ? { x: C * j, y: E * h } : { x: E * h, y: C * j }
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
          const { x: f, y: m, placement: x, middlewareData: v } = c,
            y = await e0(c, s);
          return x === ((u = v.offset) == null ? void 0 : u.placement) &&
            (r = v.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: f + y.x, y: m + y.y, data: { ...y, placement: x } };
        },
      }
    );
  },
  a0 = function (s) {
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
              limiter: v = {
                fn: V => {
                  let { x: G, y: I } = V;
                  return { x: G, y: I };
                },
              },
              ...y
            } = Ya(s, c),
            h = { x: u, y: r },
            j = await Xs(c, y),
            p = ga(qa(f)),
            E = yu(p);
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
          const Y = v.fn({ ...c, [E]: C, [p]: M });
          return {
            ...Y,
            data: { x: Y.x - u, y: Y.y - r, enabled: { [E]: m, [p]: x } },
          };
        },
      }
    );
  },
  n0 = function (s) {
    return (
      s === void 0 && (s = {}),
      {
        options: s,
        fn(c) {
          const { x: u, y: r, placement: f, rects: m, middlewareData: x } = c,
            { offset: v = 0, mainAxis: y = !0, crossAxis: h = !0 } = Ya(s, c),
            j = { x: u, y: r },
            p = ga(f),
            E = yu(p);
          let C = j[E],
            M = j[p];
          const Y = Ya(v, c),
            V =
              typeof Y == "number"
                ? { mainAxis: Y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...Y };
          if (y) {
            const J = E === "y" ? "height" : "width",
              P = m.reference[E] - m.floating[J] + V.mainAxis,
              ee = m.reference[E] + m.reference[J] - V.mainAxis;
            C < P ? (C = P) : C > ee && (C = ee);
          }
          if (h) {
            var G, I;
            const J = E === "y" ? "width" : "height",
              P = Np.has(qa(f)),
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
          const { placement: f, rects: m, platform: x, elements: v } = c,
            { apply: y = () => {}, ...h } = Ya(s, c),
            j = await Xs(c, h),
            p = qa(f),
            E = ql(f),
            C = ga(f) === "y",
            { width: M, height: Y } = m.floating;
          let V, G;
          p === "top" || p === "bottom"
            ? ((V = p),
              (G =
                E ===
                ((await (x.isRTL == null ? void 0 : x.isRTL(v.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((G = p), (V = E === "end" ? "top" : "bottom"));
          const I = Y - j.top - j.bottom,
            J = M - j.left - j.right,
            P = xn(Y - j[V], I),
            ee = xn(M - j[G], J),
            se = !c.middlewareData.shift;
          let Q = P,
            K = ee;
          if (
            ((u = c.middlewareData.shift) != null && u.enabled.x && (K = J),
            (r = c.middlewareData.shift) != null && r.enabled.y && (Q = I),
            se && !E)
          ) {
            const Ne = Ut(j.left, 0),
              Oe = Ut(j.right, 0),
              he = Ut(j.top, 0),
              xe = Ut(j.bottom, 0);
            C
              ? (K =
                  M -
                  2 * (Ne !== 0 || Oe !== 0 ? Ne + Oe : Ut(j.left, j.right)))
              : (Q =
                  Y -
                  2 * (he !== 0 || xe !== 0 ? he + xe : Ut(j.top, j.bottom)));
          }
          await y({ ...c, availableWidth: K, availableHeight: Q });
          const ge = await x.getDimensions(v.floating);
          return M !== ge.width || Y !== ge.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ko() {
  return typeof window < "u";
}
function Gl(s) {
  return wp(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function Lt(s) {
  var c;
  return (
    (s == null || (c = s.ownerDocument) == null ? void 0 : c.defaultView) ||
    window
  );
}
function xa(s) {
  var c;
  return (c = (wp(s) ? s.ownerDocument : s.document) || window.document) == null
    ? void 0
    : c.documentElement;
}
function wp(s) {
  return ko() ? s instanceof Node || s instanceof Lt(s).Node : !1;
}
function aa(s) {
  return ko() ? s instanceof Element || s instanceof Lt(s).Element : !1;
}
function ha(s) {
  return ko() ? s instanceof HTMLElement || s instanceof Lt(s).HTMLElement : !1;
}
function Gg(s) {
  return !ko() || typeof ShadowRoot > "u"
    ? !1
    : s instanceof ShadowRoot || s instanceof Lt(s).ShadowRoot;
}
const s0 = new Set(["inline", "contents"]);
function Ks(s) {
  const { overflow: c, overflowX: u, overflowY: r, display: f } = na(s);
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
  const c = Nu(),
    u = aa(s) ? na(s) : s;
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
  let c = yn(s);
  for (; ha(c) && !Ll(c); ) {
    if (ju(c)) return c;
    if (Oo(c)) return null;
    c = yn(c);
  }
  return null;
}
function Nu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const m0 = new Set(["html", "body", "#document"]);
function Ll(s) {
  return m0.has(Gl(s));
}
function na(s) {
  return Lt(s).getComputedStyle(s);
}
function Co(s) {
  return aa(s)
    ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop }
    : { scrollLeft: s.scrollX, scrollTop: s.scrollY };
}
function yn(s) {
  if (Gl(s) === "html") return s;
  const c = s.assignedSlot || s.parentNode || (Gg(s) && s.host) || xa(s);
  return Gg(c) ? c.host : c;
}
function Sp(s) {
  const c = yn(s);
  return Ll(c)
    ? s.ownerDocument
      ? s.ownerDocument.body
      : s.body
    : ha(c) && Ks(c)
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
    const v = du(x);
    return c.concat(
      x,
      x.visualViewport || [],
      Ks(f) ? f : [],
      v && u ? Qs(v) : []
    );
  }
  return c.concat(f, Qs(f, [], u));
}
function du(s) {
  return s.parent && Object.getPrototypeOf(s.parent) ? s.frameElement : null;
}
function Ap(s) {
  const c = na(s);
  let u = parseFloat(c.width) || 0,
    r = parseFloat(c.height) || 0;
  const f = ha(s),
    m = f ? s.offsetWidth : u,
    x = f ? s.offsetHeight : r,
    v = jo(u) !== m || jo(r) !== x;
  return (v && ((u = m), (r = x)), { width: u, height: r, $: v });
}
function wu(s) {
  return aa(s) ? s : s.contextElement;
}
function Hl(s) {
  const c = wu(s);
  if (!ha(c)) return pa(1);
  const u = c.getBoundingClientRect(),
    { width: r, height: f, $: m } = Ap(c);
  let x = (m ? jo(u.width) : u.width) / r,
    v = (m ? jo(u.height) : u.height) / f;
  return (
    (!x || !Number.isFinite(x)) && (x = 1),
    (!v || !Number.isFinite(v)) && (v = 1),
    { x, y: v }
  );
}
const g0 = pa(0);
function Ep(s) {
  const c = Lt(s);
  return !Nu() || !c.visualViewport
    ? g0
    : { x: c.visualViewport.offsetLeft, y: c.visualViewport.offsetTop };
}
function p0(s, c, u) {
  return (c === void 0 && (c = !1), !u || (c && u !== Lt(s)) ? !1 : c);
}
function Xn(s, c, u, r) {
  (c === void 0 && (c = !1), u === void 0 && (u = !1));
  const f = s.getBoundingClientRect(),
    m = wu(s);
  let x = pa(1);
  c && (r ? aa(r) && (x = Hl(r)) : (x = Hl(s)));
  const v = p0(m, u, r) ? Ep(m) : pa(0);
  let y = (f.left + v.x) / x.x,
    h = (f.top + v.y) / x.y,
    j = f.width / x.x,
    p = f.height / x.y;
  if (m) {
    const E = Lt(m),
      C = r && aa(r) ? Lt(r) : r;
    let M = E,
      Y = du(M);
    for (; Y && r && C !== M; ) {
      const V = Hl(Y),
        G = Y.getBoundingClientRect(),
        I = na(Y),
        J = G.left + (Y.clientLeft + parseFloat(I.paddingLeft)) * V.x,
        P = G.top + (Y.clientTop + parseFloat(I.paddingTop)) * V.y;
      ((y *= V.x),
        (h *= V.y),
        (j *= V.x),
        (p *= V.y),
        (y += J),
        (h += P),
        (M = Lt(Y)),
        (Y = du(M)));
    }
  }
  return wo({ width: j, height: p, x: y, y: h });
}
function zo(s, c) {
  const u = Co(s).scrollLeft;
  return c ? c.left + u : Xn(xa(s)).left + u;
}
function Tp(s, c) {
  const u = s.getBoundingClientRect(),
    r = u.left + c.scrollLeft - zo(s, u),
    f = u.top + c.scrollTop;
  return { x: r, y: f };
}
function h0(s) {
  let { elements: c, rect: u, offsetParent: r, strategy: f } = s;
  const m = f === "fixed",
    x = xa(r),
    v = c ? Oo(c.floating) : !1;
  if (r === x || (v && m)) return u;
  let y = { scrollLeft: 0, scrollTop: 0 },
    h = pa(1);
  const j = pa(0),
    p = ha(r);
  if (
    (p || (!p && !m)) &&
    ((Gl(r) !== "body" || Ks(x)) && (y = Co(r)), ha(r))
  ) {
    const C = Xn(r);
    ((h = Hl(r)), (j.x = C.x + r.clientLeft), (j.y = C.y + r.clientTop));
  }
  const E = x && !p && !m ? Tp(x, y) : pa(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - y.scrollLeft * h.x + j.x + E.x,
    y: u.y * h.y - y.scrollTop * h.y + j.y + E.y,
  };
}
function x0(s) {
  return Array.from(s.getClientRects());
}
function y0(s) {
  const c = xa(s),
    u = Co(s),
    r = s.ownerDocument.body,
    f = Ut(c.scrollWidth, c.clientWidth, r.scrollWidth, r.clientWidth),
    m = Ut(c.scrollHeight, c.clientHeight, r.scrollHeight, r.clientHeight);
  let x = -u.scrollLeft + zo(s);
  const v = -u.scrollTop;
  return (
    na(r).direction === "rtl" && (x += Ut(c.clientWidth, r.clientWidth) - f),
    { width: f, height: m, x, y: v }
  );
}
const Vg = 25;
function v0(s, c) {
  const u = Lt(s),
    r = xa(s),
    f = u.visualViewport;
  let m = r.clientWidth,
    x = r.clientHeight,
    v = 0,
    y = 0;
  if (f) {
    ((m = f.width), (x = f.height));
    const j = Nu();
    (!j || (j && c === "fixed")) && ((v = f.offsetLeft), (y = f.offsetTop));
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
  return { width: m, height: x, x: v, y };
}
const b0 = new Set(["absolute", "fixed"]);
function j0(s, c) {
  const u = Xn(s, !0, c === "fixed"),
    r = u.top + s.clientTop,
    f = u.left + s.clientLeft,
    m = ha(s) ? Hl(s) : pa(1),
    x = s.clientWidth * m.x,
    v = s.clientHeight * m.y,
    y = f * m.x,
    h = r * m.y;
  return { width: x, height: v, x: y, y: h };
}
function Xg(s, c, u) {
  let r;
  if (c === "viewport") r = v0(s, u);
  else if (c === "document") r = y0(xa(s));
  else if (aa(c)) r = j0(c, u);
  else {
    const f = Ep(s);
    r = { x: c.x - f.x, y: c.y - f.y, width: c.width, height: c.height };
  }
  return wo(r);
}
function kp(s, c) {
  const u = yn(s);
  return u === c || !aa(u) || Ll(u)
    ? !1
    : na(u).position === "fixed" || kp(u, c);
}
function N0(s, c) {
  const u = c.get(s);
  if (u) return u;
  let r = Qs(s, [], !1).filter(v => aa(v) && Gl(v) !== "body"),
    f = null;
  const m = na(s).position === "fixed";
  let x = m ? yn(s) : s;
  for (; aa(x) && !Ll(x); ) {
    const v = na(x),
      y = ju(x);
    (!y && v.position === "fixed" && (f = null),
      (
        m
          ? !y && !f
          : (!y && v.position === "static" && !!f && b0.has(f.position)) ||
            (Ks(x) && !y && kp(s, x))
      )
        ? (r = r.filter(j => j !== x))
        : (f = v),
      (x = yn(x)));
  }
  return (c.set(s, r), r);
}
function w0(s) {
  let { element: c, boundary: u, rootBoundary: r, strategy: f } = s;
  const x = [
      ...(u === "clippingAncestors"
        ? Oo(c)
          ? []
          : N0(c, this._c)
        : [].concat(u)),
      r,
    ],
    v = x[0],
    y = x.reduce(
      (h, j) => {
        const p = Xg(c, j, f);
        return (
          (h.top = Ut(p.top, h.top)),
          (h.right = xn(p.right, h.right)),
          (h.bottom = xn(p.bottom, h.bottom)),
          (h.left = Ut(p.left, h.left)),
          h
        );
      },
      Xg(c, v, f)
    );
  return {
    width: y.right - y.left,
    height: y.bottom - y.top,
    x: y.left,
    y: y.top,
  };
}
function S0(s) {
  const { width: c, height: u } = Ap(s);
  return { width: c, height: u };
}
function A0(s, c, u) {
  const r = ha(c),
    f = xa(c),
    m = u === "fixed",
    x = Xn(s, !0, m, c);
  let v = { scrollLeft: 0, scrollTop: 0 };
  const y = pa(0);
  function h() {
    y.x = zo(f);
  }
  if (r || (!r && !m))
    if (((Gl(c) !== "body" || Ks(f)) && (v = Co(c)), r)) {
      const C = Xn(c, !0, m, c);
      ((y.x = C.x + c.clientLeft), (y.y = C.y + c.clientTop));
    } else f && h();
  m && !r && f && h();
  const j = f && !r && !m ? Tp(f, v) : pa(0),
    p = x.left + v.scrollLeft - y.x - j.x,
    E = x.top + v.scrollTop - y.y - j.y;
  return { x: p, y: E, width: x.width, height: x.height };
}
function eu(s) {
  return na(s).position === "static";
}
function Qg(s, c) {
  if (!ha(s) || na(s).position === "fixed") return null;
  if (c) return c(s);
  let u = s.offsetParent;
  return (xa(s) === u && (u = u.ownerDocument.body), u);
}
function Op(s, c) {
  const u = Lt(s);
  if (Oo(s)) return u;
  if (!ha(s)) {
    let f = yn(s);
    for (; f && !Ll(f); ) {
      if (aa(f) && !eu(f)) return f;
      f = yn(f);
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
function T0(s) {
  return na(s).direction === "rtl";
}
const k0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: h0,
  getDocumentElement: xa,
  getClippingRect: w0,
  getOffsetParent: Op,
  getElementRects: E0,
  getClientRects: x0,
  getDimensions: S0,
  getScale: Hl,
  isElement: aa,
  isRTL: T0,
};
function Cp(s, c) {
  return (
    s.x === c.x && s.y === c.y && s.width === c.width && s.height === c.height
  );
}
function O0(s, c) {
  let u = null,
    r;
  const f = xa(s);
  function m() {
    var v;
    (clearTimeout(r), (v = u) == null || v.disconnect(), (u = null));
  }
  function x(v, y) {
    (v === void 0 && (v = !1), y === void 0 && (y = 1), m());
    const h = s.getBoundingClientRect(),
      { left: j, top: p, width: E, height: C } = h;
    if ((v || c(), !E || !C)) return;
    const M = ro(p),
      Y = ro(f.clientWidth - (j + E)),
      V = ro(f.clientHeight - (p + C)),
      G = ro(j),
      J = {
        rootMargin: -M + "px " + -Y + "px " + -V + "px " + -G + "px",
        threshold: Ut(0, xn(1, y)) || 1,
      };
    let P = !0;
    function ee(se) {
      const Q = se[0].intersectionRatio;
      if (Q !== y) {
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
      layoutShift: v = typeof IntersectionObserver == "function",
      animationFrame: y = !1,
    } = r,
    h = wu(s),
    j = f || m ? [...(h ? Qs(h) : []), ...Qs(c)] : [];
  j.forEach(G => {
    (f && G.addEventListener("scroll", u, { passive: !0 }),
      m && G.addEventListener("resize", u));
  });
  const p = h && v ? O0(h, u) : null;
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
    h && !y && C.observe(h),
    C.observe(c));
  let M,
    Y = y ? Xn(s) : null;
  y && V();
  function V() {
    const G = Xn(s);
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
        y && cancelAnimationFrame(M));
    }
  );
}
const z0 = t0,
  M0 = a0,
  D0 = Fv,
  _0 = l0,
  B0 = Iv,
  Kg = Pv,
  R0 = n0,
  H0 = (s, c, u) => {
    const r = new Map(),
      f = { platform: k0, ...u },
      m = { ...f.platform, _c: r };
    return $v(s, c, { ...f, platform: m });
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
function Zg(s, c) {
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
      transform: v = !0,
      whileElementsMounted: y,
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
    K = z.useRef(j),
    ge = y != null,
    Ne = tu(y),
    Oe = tu(f),
    he = tu(h),
    xe = z.useCallback(() => {
      if (!se.current || !Q.current) return;
      const D = { placement: c, strategy: u, middleware: E };
      (Oe.current && (D.platform = Oe.current),
        H0(se.current, Q.current, D).then(ie => {
          const re = { ...ie, isPositioned: he.current !== !1 };
          ve.current &&
            !So(K.current, re) &&
            ((K.current = re),
            xu.flushSync(() => {
              p(re);
            }));
        }));
    }, [E, c, u, Oe, he]);
  bo(() => {
    h === !1 &&
      K.current.isPositioned &&
      ((K.current.isPositioned = !1), p(D => ({ ...D, isPositioned: !1 })));
  }, [h]);
  const ve = z.useRef(!1);
  (bo(
    () => (
      (ve.current = !0),
      () => {
        ve.current = !1;
      }
    ),
    []
  ),
    bo(() => {
      if ((P && (se.current = P), ee && (Q.current = ee), P && ee)) {
        if (Ne.current) return Ne.current(P, ee, xe);
        xe();
      }
    }, [P, ee, xe, Ne, ge]));
  const je = z.useMemo(
      () => ({ reference: se, floating: Q, setReference: I, setFloating: J }),
      [I, J]
    ),
    S = z.useMemo(() => ({ reference: P, floating: ee }), [P, ee]),
    U = z.useMemo(() => {
      const D = { position: u, left: 0, top: 0 };
      if (!S.floating) return D;
      const ie = Zg(S.floating, j.x),
        re = Zg(S.floating, j.y);
      return v
        ? {
            ...D,
            transform: "translate(" + ie + "px, " + re + "px)",
            ...(zp(S.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: u, left: ie, top: re };
    }, [u, v, S.floating, j.x, j.y]);
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
            ? Kg({ element: r.current, padding: f }).fn(u)
            : {}
          : r
            ? Kg({ element: r, padding: f }).fn(u)
            : {};
      },
    };
  },
  G0 = (s, c) => ({ ...z0(s), options: [s, c] }),
  V0 = (s, c) => ({ ...M0(s), options: [s, c] }),
  X0 = (s, c) => ({ ...R0(s), options: [s, c] }),
  Q0 = (s, c) => ({ ...D0(s), options: [s, c] }),
  K0 = (s, c) => ({ ..._0(s), options: [s, c] }),
  Z0 = (s, c) => ({ ...B0(s), options: [s, c] }),
  J0 = (s, c) => ({ ...q0(s), options: [s, c] });
var W0 = "Arrow",
  Mp = z.forwardRef((s, c) => {
    const { children: u, width: r = 10, height: f = 5, ...m } = s;
    return o.jsx(Kn.svg, {
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
          let x, v;
          if ("borderBoxSize" in m) {
            const y = m.borderBoxSize,
              h = Array.isArray(y) ? y[0] : y;
            ((x = h.inlineSize), (v = h.blockSize));
          } else ((x = s.offsetWidth), (v = s.offsetHeight));
          u({ width: x, height: v });
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
      v = Qn(c, x),
      y = z.useRef(null);
    return (
      z.useEffect(() => {
        const h = y.current;
        ((y.current = r?.current || x.current),
          h !== y.current && m.onAnchorChange(y.current));
      }),
      r ? null : o.jsx(Kn.div, { ...f, ref: v })
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
        arrowPadding: v = 0,
        avoidCollisions: y = !0,
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
      J = Qn(c, ne => I(ne)),
      [P, ee] = z.useState(null),
      se = P0(P),
      Q = se?.width ?? 0,
      K = se?.height ?? 0,
      ge = r + (m !== "center" ? "-" + m : ""),
      Ne =
        typeof j == "number"
          ? j
          : { top: 0, right: 0, bottom: 0, left: 0, ...j },
      Oe = Array.isArray(h) ? h : [h],
      he = Oe.length > 0,
      xe = { padding: Ne, boundary: Oe.filter(tb), altBoundary: he },
      {
        refs: ve,
        floatingStyles: je,
        placement: S,
        isPositioned: U,
        middlewareData: D,
      } = Y0({
        strategy: "fixed",
        placement: ge,
        whileElementsMounted: (...ne) =>
          C0(...ne, { animationFrame: C === "always" }),
        elements: { reference: V.anchor },
        middleware: [
          G0({ mainAxis: f + K, alignmentAxis: x }),
          y &&
            V0({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? X0() : void 0,
              ...xe,
            }),
          y && Q0({ ...xe }),
          K0({
            ...xe,
            apply: ({
              elements: ne,
              rects: de,
              availableWidth: Te,
              availableHeight: nt,
            }) => {
              const { width: gt, height: lt } = de.reference,
                ya = ne.floating.style;
              (ya.setProperty("--radix-popper-available-width", `${Te}px`),
                ya.setProperty("--radix-popper-available-height", `${nt}px`),
                ya.setProperty("--radix-popper-anchor-width", `${gt}px`),
                ya.setProperty("--radix-popper-anchor-height", `${lt}px`));
            },
          }),
          P && J0({ element: P, padding: v }),
          ab({ arrowWidth: Q, arrowHeight: K }),
          E && Z0({ strategy: "referenceHidden", ...xe }),
        ],
      }),
      [ie, re] = Gp(S),
      N = To(M);
    Vs(() => {
      U && N?.();
    }, [U, N]);
    const H = D.arrow?.x,
      R = D.arrow?.y,
      X = D.arrow?.centerOffset !== 0,
      [W, oe] = z.useState();
    return (
      Vs(() => {
        G && oe(window.getComputedStyle(G).zIndex);
      }, [G]),
      o.jsx("div", {
        ref: ve.setFloating,
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
          children: o.jsx(Kn.div, {
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
var ab = s => ({
  name: "transformOrigin",
  options: s,
  fn(c) {
    const { placement: u, rects: r, middlewareData: f } = c,
      x = f.arrow?.centerOffset !== 0,
      v = x ? 0 : s.arrowWidth,
      y = x ? 0 : s.arrowHeight,
      [h, j] = Gp(u),
      p = { start: "0%", center: "50%", end: "100%" }[j],
      E = (f.arrow?.x ?? 0) + v / 2,
      C = (f.arrow?.y ?? 0) + y / 2;
    let M = "",
      Y = "";
    return (
      h === "bottom"
        ? ((M = x ? p : `${E}px`), (Y = `${-y}px`))
        : h === "top"
          ? ((M = x ? p : `${E}px`), (Y = `${r.floating.height + y}px`))
          : h === "right"
            ? ((M = `${-y}px`), (Y = x ? p : `${C}px`))
            : h === "left" &&
              ((M = `${r.floating.width + y}px`), (Y = x ? p : `${C}px`)),
      { data: { x: M, y: Y } }
    );
  },
});
function Gp(s) {
  const [c, u = "center"] = s.split("-");
  return [c, u];
}
var nb = Up,
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
    m = Qn(r.ref, cb(f));
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
    [v, y] = ib(x, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    z.useEffect(() => {
      const h = uo(r.current);
      m.current = v === "mounted" ? h : "none";
    }, [v]),
    Vs(() => {
      const h = r.current,
        j = f.current;
      if (j !== s) {
        const E = m.current,
          C = uo(h);
        (s
          ? y("MOUNT")
          : C === "none" || h?.display === "none"
            ? y("UNMOUNT")
            : y(j && E !== C ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = s));
      }
    }, [s, y]),
    Vs(() => {
      if (c) {
        let h;
        const j = c.ownerDocument.defaultView ?? window,
          p = C => {
            const Y = uo(r.current).includes(CSS.escape(C.animationName));
            if (C.target === c && Y && (y("ANIMATION_END"), !f.current)) {
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
      } else y("ANIMATION_END");
    }, [c, y]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(v),
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
    o.jsx(Kn.span, { ...s, ref: c, style: { ...rb, ...s.style } })
  );
Xp.displayName = ub;
var db = Xp,
  [Mo] = pp("Tooltip", [Bp]),
  Au = Bp(),
  Qp = "TooltipProvider",
  fb = 700,
  Jg = "tooltip.open",
  [mb, Kp] = Mo(Qp),
  Zp = s => {
    const {
        __scopeTooltip: c,
        delayDuration: u = fb,
        skipDelayDuration: r = 300,
        disableHoverableContent: f = !1,
        children: m,
      } = s,
      x = z.useRef(!0),
      v = z.useRef(!1),
      y = z.useRef(0);
    return (
      z.useEffect(() => {
        const h = y.current;
        return () => window.clearTimeout(h);
      }, []),
      o.jsx(mb, {
        scope: c,
        isOpenDelayedRef: x,
        delayDuration: u,
        onOpen: z.useCallback(() => {
          (window.clearTimeout(y.current), (x.current = !1));
        }, []),
        onClose: z.useCallback(() => {
          (window.clearTimeout(y.current),
            (y.current = window.setTimeout(() => (x.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: v,
        onPointerInTransitChange: z.useCallback(h => {
          v.current = h;
        }, []),
        disableHoverableContent: f,
        children: m,
      })
    );
  };
Zp.displayName = Qp;
var Jp = "Tooltip",
  [X2, Do] = Mo(Jp),
  fu = "TooltipTrigger",
  gb = z.forwardRef((s, c) => {
    const { __scopeTooltip: u, ...r } = s,
      f = Do(fu, u),
      m = Kp(fu, u),
      x = Au(u),
      v = z.useRef(null),
      y = Qn(c, v, f.onTriggerChange),
      h = z.useRef(!1),
      j = z.useRef(!1),
      p = z.useCallback(() => (h.current = !1), []);
    return (
      z.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      o.jsx(nb, {
        asChild: !0,
        ...x,
        children: o.jsx(Kn.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...r,
          ref: y,
          onPointerMove: La(s.onPointerMove, E => {
            E.pointerType !== "touch" &&
              !j.current &&
              !m.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (j.current = !0));
          }),
          onPointerLeave: La(s.onPointerLeave, () => {
            (f.onTriggerLeave(), (j.current = !1));
          }),
          onPointerDown: La(s.onPointerDown, () => {
            (f.open && f.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", p, { once: !0 }));
          }),
          onFocus: La(s.onFocus, () => {
            h.current || f.onOpen();
          }),
          onBlur: La(s.onBlur, f.onClose),
          onClick: La(s.onClick, f.onClose),
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
        : o.jsx(yb, { side: f, ...m, ref: c }),
    });
  }),
  yb = z.forwardRef((s, c) => {
    const u = Do(Yl, s.__scopeTooltip),
      r = Kp(Yl, s.__scopeTooltip),
      f = z.useRef(null),
      m = Qn(c, f),
      [x, v] = z.useState(null),
      { trigger: y, onClose: h } = u,
      j = f.current,
      { onPointerInTransitChange: p } = r,
      E = z.useCallback(() => {
        (v(null), p(!1));
      }, [p]),
      C = z.useCallback(
        (M, Y) => {
          const V = M.currentTarget,
            G = { x: M.clientX, y: M.clientY },
            I = wb(G, V.getBoundingClientRect()),
            J = Sb(G, I),
            P = Ab(Y.getBoundingClientRect()),
            ee = Tb([...J, ...P]);
          (v(ee), p(!0));
        },
        [p]
      );
    return (
      z.useEffect(() => () => E(), [E]),
      z.useEffect(() => {
        if (y && j) {
          const M = V => C(V, j),
            Y = V => C(V, y);
          return (
            y.addEventListener("pointerleave", M),
            j.addEventListener("pointerleave", Y),
            () => {
              (y.removeEventListener("pointerleave", M),
                j.removeEventListener("pointerleave", Y));
            }
          );
        }
      }, [y, j, C, E]),
      z.useEffect(() => {
        if (x) {
          const M = Y => {
            const V = Y.target,
              G = { x: Y.clientX, y: Y.clientY },
              I = y?.contains(V) || j?.contains(V),
              J = !Eb(G, x);
            I ? E() : J && (E(), h());
          };
          return (
            document.addEventListener("pointermove", M),
            () => document.removeEventListener("pointermove", M)
          );
        }
      }, [y, j, x, h, E]),
      o.jsx(Wp, { ...s, ref: m })
    );
  }),
  [vb, bb] = Mo(Jp, { isInside: !1 }),
  jb = Av("TooltipContent"),
  Wp = z.forwardRef((s, c) => {
    const {
        __scopeTooltip: u,
        children: r,
        "aria-label": f,
        onEscapeKeyDown: m,
        onPointerDownOutside: x,
        ...v
      } = s,
      y = Do(Yl, u),
      h = Au(u),
      { onClose: j } = y;
    return (
      z.useEffect(
        () => (
          document.addEventListener(Jg, j),
          () => document.removeEventListener(Jg, j)
        ),
        [j]
      ),
      z.useEffect(() => {
        if (y.trigger) {
          const p = E => {
            E.target?.contains(y.trigger) && j();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [y.trigger, j]),
      o.jsx(vp, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: m,
        onPointerDownOutside: x,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: j,
        children: o.jsxs(lb, {
          "data-state": y.stateAttribute,
          ...h,
          ...v,
          ref: c,
          style: {
            ...v.style,
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
            o.jsx(vb, {
              scope: u,
              isInside: !0,
              children: o.jsx(db, {
                id: y.contentId,
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
  Nb = z.forwardRef((s, c) => {
    const { __scopeTooltip: u, ...r } = s,
      f = Au(u);
    return bb($p, u).isInside ? null : o.jsx(sb, { ...f, ...r, ref: c });
  });
Nb.displayName = $p;
function wb(s, c) {
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
    const v = c[m],
      y = c[x],
      h = v.x,
      j = v.y,
      p = y.x,
      E = y.y;
    j > r != E > r && u < ((p - h) * (r - j)) / (E - j) + h && (f = !f);
  }
  return f;
}
function Tb(s) {
  const c = s.slice();
  return (
    c.sort((u, r) =>
      u.x < r.x ? -1 : u.x > r.x ? 1 : u.y < r.y ? -1 : u.y > r.y ? 1 : 0
    ),
    kb(c)
  );
}
function kb(s) {
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
var Ob = Zp;
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
        const v = x.split(Eu);
        return (v[0] === "" && v.length !== 1 && v.shift(), Ip(v, c) || zb(x));
      },
      getConflictingClassGroupIds: (x, v) => {
        const y = u[x] || [];
        return v && r[x] ? [...y, ...r[x]] : y;
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
        v = 0,
        y = 0,
        h;
      for (let M = 0; M < f.length; M++) {
        let Y = f[M];
        if (x === 0 && v === 0) {
          if (Y === pu) {
            (m.push(f.slice(y, M)), (y = M + Bb));
            continue;
          }
          if (Y === "/") {
            h = M;
            continue;
          }
        }
        Y === "[" ? x++ : Y === "]" ? x-- : Y === "(" ? v++ : Y === ")" && v--;
      }
      const j = m.length === 0 ? f : f.substring(y),
        p = Hb(j),
        E = p !== j,
        C = h && h > y ? h - y : void 0;
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
      v = s.trim().split(Yb);
    let y = "";
    for (let h = v.length - 1; h >= 0; h -= 1) {
      const j = v[h],
        {
          isExternal: p,
          modifiers: E,
          hasImportantModifier: C,
          baseClassName: M,
          maybePostfixModifierPosition: Y,
        } = u(j);
      if (p) {
        y = j + (y.length > 0 ? " " + y : y);
        continue;
      }
      let V = !!Y,
        G = r(V ? M.substring(0, Y) : M);
      if (!G) {
        if (!V) {
          y = j + (y.length > 0 ? " " + y : y);
          continue;
        }
        if (((G = r(M)), !G)) {
          y = j + (y.length > 0 ? " " + y : y);
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
      y = j + (y.length > 0 ? " " + y : y);
    }
    return y;
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
  function x(y) {
    const h = c.reduce((j, p) => p(j), s());
    return ((u = Lb(h)), (r = u.cache.get), (f = u.cache.set), (m = v), v(y));
  }
  function v(y) {
    const h = r(y);
    if (h) return h;
    const j = qb(y, u);
    return (f(y, j), j);
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
  ah = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Xb = /^\d+\/\d+$/,
  Qb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Kb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Zb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Jb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Wb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Bl = s => Xb.test(s),
  be = s => !!s && !Number.isNaN(Number(s)),
  hn = s => !!s && Number.isInteger(Number(s)),
  au = s => s.endsWith("%") && be(s.slice(0, -1)),
  Ua = s => Qb.test(s),
  $b = () => !0,
  Pb = s => Kb.test(s) && !Zb.test(s),
  nh = () => !1,
  Fb = s => Jb.test(s),
  Ib = s => Wb.test(s),
  e1 = s => !te(s) && !ae(s),
  t1 = s => Vl(s, ih, nh),
  te = s => th.test(s),
  Vn = s => Vl(s, oh, Pb),
  nu = s => Vl(s, i1, be),
  Pg = s => Vl(s, lh, nh),
  a1 = s => Vl(s, sh, Ib),
  fo = s => Vl(s, ch, Fb),
  ae = s => ah.test(s),
  Gs = s => Xl(s, oh),
  n1 = s => Xl(s, o1),
  Fg = s => Xl(s, lh),
  l1 = s => Xl(s, ih),
  s1 = s => Xl(s, sh),
  mo = s => Xl(s, ch, !0),
  Vl = (s, c, u) => {
    const r = th.exec(s);
    return r ? (r[1] ? c(r[1]) : u(r[2])) : !1;
  },
  Xl = (s, c, u = !1) => {
    const r = ah.exec(s);
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
      v = Ie("container"),
      y = Ie("spacing"),
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
      ee = () => [...P(), ae, te],
      se = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Q = () => ["auto", "contain", "none"],
      K = () => [ae, te, y],
      ge = () => [Bl, "full", "auto", ...K()],
      Ne = () => [hn, "none", "subgrid", ae, te],
      Oe = () => ["auto", { span: ["full", hn, ae, te] }, hn, ae, te],
      he = () => [hn, "auto", ae, te],
      xe = () => ["auto", "min", "max", "fr", ae, te],
      ve = () => [
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
      S = () => ["auto", ...K()],
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
        ...K(),
      ],
      D = () => [s, ae, te],
      ie = () => [...P(), Fg, Pg, { position: [ae, te] }],
      re = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      N = () => ["auto", "cover", "contain", l1, t1, { size: [ae, te] }],
      H = () => [au, Gs, Vn],
      R = () => ["", "none", "full", h, ae, te],
      X = () => ["", be, Gs, Vn],
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
      ne = () => [be, au, Fg, Pg],
      de = () => ["", "none", M, ae, te],
      Te = () => ["none", be, ae, te],
      nt = () => ["none", be, ae, te],
      gt = () => [be, ae, te],
      lt = () => [Bl, "full", ...K()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ua],
        breakpoint: [Ua],
        color: [$b],
        container: [Ua],
        "drop-shadow": [Ua],
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
        "inset-shadow": [Ua],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ua],
        shadow: [Ua],
        spacing: ["px", be],
        text: [Ua],
        "text-shadow": [Ua],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Bl, te, ae, V] }],
        container: ["container"],
        columns: [{ columns: [be, te, ae, v] }],
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
        z: [{ z: [hn, "auto", ae, te] }],
        basis: [{ basis: [Bl, "full", "auto", v, ...K()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [be, Bl, "auto", "initial", "none", te] }],
        grow: [{ grow: ["", be, ae, te] }],
        shrink: [{ shrink: ["", be, ae, te] }],
        order: [{ order: [hn, "first", "last", "none", ae, te] }],
        "grid-cols": [{ "grid-cols": Ne() }],
        "col-start-end": [{ col: Oe() }],
        "col-start": [{ "col-start": he() }],
        "col-end": [{ "col-end": he() }],
        "grid-rows": [{ "grid-rows": Ne() }],
        "row-start-end": [{ row: Oe() }],
        "row-start": [{ "row-start": he() }],
        "row-end": [{ "row-end": he() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": xe() }],
        "auto-rows": [{ "auto-rows": xe() }],
        gap: [{ gap: K() }],
        "gap-x": [{ "gap-x": K() }],
        "gap-y": [{ "gap-y": K() }],
        "justify-content": [{ justify: [...ve(), "normal"] }],
        "justify-items": [{ "justify-items": [...je(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...je()] }],
        "align-content": [{ content: ["normal", ...ve()] }],
        "align-items": [{ items: [...je(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...je(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": ve() }],
        "place-items": [{ "place-items": [...je(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...je()] }],
        p: [{ p: K() }],
        px: [{ px: K() }],
        py: [{ py: K() }],
        ps: [{ ps: K() }],
        pe: [{ pe: K() }],
        pt: [{ pt: K() }],
        pr: [{ pr: K() }],
        pb: [{ pb: K() }],
        pl: [{ pl: K() }],
        m: [{ m: S() }],
        mx: [{ mx: S() }],
        my: [{ my: S() }],
        ms: [{ ms: S() }],
        me: [{ me: S() }],
        mt: [{ mt: S() }],
        mr: [{ mr: S() }],
        mb: [{ mb: S() }],
        ml: [{ ml: S() }],
        "space-x": [{ "space-x": K() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": K() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: U() }],
        w: [{ w: [v, "screen", ...U()] }],
        "min-w": [{ "min-w": [v, "screen", "none", ...U()] }],
        "max-w": [
          { "max-w": [v, "screen", "none", "prose", { screen: [x] }, ...U()] },
        ],
        h: [{ h: ["screen", "lh", ...U()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...U()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...U()] }],
        "font-size": [{ text: ["base", u, Gs, Vn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, ae, nu] }],
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
              au,
              te,
            ],
          },
        ],
        "font-family": [{ font: [n1, te, c] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, ae, te] }],
        "line-clamp": [{ "line-clamp": [be, "none", ae, nu] }],
        leading: [{ leading: [m, ...K()] }],
        "list-image": [{ "list-image": ["none", ae, te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", ae, te] }],
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
          { decoration: [be, "from-font", "auto", ae, Vn] },
        ],
        "text-decoration-color": [{ decoration: D() }],
        "underline-offset": [{ "underline-offset": [be, "auto", ae, te] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: K() }],
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
              ae,
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
        content: [{ content: ["none", ae, te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: ie() }],
        "bg-repeat": [{ bg: re() }],
        "bg-size": [{ bg: N() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  hn,
                  ae,
                  te,
                ],
                radial: ["", ae, te],
                conic: [hn, ae, te],
              },
              s1,
              a1,
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
        "outline-offset": [{ "outline-offset": [be, ae, te] }],
        "outline-w": [{ outline: ["", be, Gs, Vn] }],
        "outline-color": [{ outline: D() }],
        shadow: [{ shadow: ["", "none", j, mo, fo] }],
        "shadow-color": [{ shadow: D() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, mo, fo] }],
        "inset-shadow-color": [{ "inset-shadow": D() }],
        "ring-w": [{ ring: X() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: D() }],
        "ring-offset-w": [{ "ring-offset": [be, Vn] }],
        "ring-offset-color": [{ "ring-offset": D() }],
        "inset-ring-w": [{ "inset-ring": X() }],
        "inset-ring-color": [{ "inset-ring": D() }],
        "text-shadow": [{ "text-shadow": ["none", E, mo, fo] }],
        "text-shadow-color": [{ "text-shadow": D() }],
        opacity: [{ opacity: [be, ae, te] }],
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
        "mask-image-linear-from-pos": [{ "mask-linear-from": ne() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": ne() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": D() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": D() }],
        "mask-image-t-from-pos": [{ "mask-t-from": ne() }],
        "mask-image-t-to-pos": [{ "mask-t-to": ne() }],
        "mask-image-t-from-color": [{ "mask-t-from": D() }],
        "mask-image-t-to-color": [{ "mask-t-to": D() }],
        "mask-image-r-from-pos": [{ "mask-r-from": ne() }],
        "mask-image-r-to-pos": [{ "mask-r-to": ne() }],
        "mask-image-r-from-color": [{ "mask-r-from": D() }],
        "mask-image-r-to-color": [{ "mask-r-to": D() }],
        "mask-image-b-from-pos": [{ "mask-b-from": ne() }],
        "mask-image-b-to-pos": [{ "mask-b-to": ne() }],
        "mask-image-b-from-color": [{ "mask-b-from": D() }],
        "mask-image-b-to-color": [{ "mask-b-to": D() }],
        "mask-image-l-from-pos": [{ "mask-l-from": ne() }],
        "mask-image-l-to-pos": [{ "mask-l-to": ne() }],
        "mask-image-l-from-color": [{ "mask-l-from": D() }],
        "mask-image-l-to-color": [{ "mask-l-to": D() }],
        "mask-image-x-from-pos": [{ "mask-x-from": ne() }],
        "mask-image-x-to-pos": [{ "mask-x-to": ne() }],
        "mask-image-x-from-color": [{ "mask-x-from": D() }],
        "mask-image-x-to-color": [{ "mask-x-to": D() }],
        "mask-image-y-from-pos": [{ "mask-y-from": ne() }],
        "mask-image-y-to-pos": [{ "mask-y-to": ne() }],
        "mask-image-y-from-color": [{ "mask-y-from": D() }],
        "mask-image-y-to-color": [{ "mask-y-to": D() }],
        "mask-image-radial": [{ "mask-radial": [ae, te] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": ne() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": ne() }],
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
        "mask-image-conic-from-pos": [{ "mask-conic-from": ne() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": ne() }],
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
        "mask-size": [{ mask: N() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ae, te] }],
        filter: [{ filter: ["", "none", ae, te] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [be, ae, te] }],
        contrast: [{ contrast: [be, ae, te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", C, mo, fo] }],
        "drop-shadow-color": [{ "drop-shadow": D() }],
        grayscale: [{ grayscale: ["", be, ae, te] }],
        "hue-rotate": [{ "hue-rotate": [be, ae, te] }],
        invert: [{ invert: ["", be, ae, te] }],
        saturate: [{ saturate: [be, ae, te] }],
        sepia: [{ sepia: ["", be, ae, te] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", ae, te] }],
        "backdrop-blur": [{ "backdrop-blur": de() }],
        "backdrop-brightness": [{ "backdrop-brightness": [be, ae, te] }],
        "backdrop-contrast": [{ "backdrop-contrast": [be, ae, te] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", be, ae, te] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [be, ae, te] }],
        "backdrop-invert": [{ "backdrop-invert": ["", be, ae, te] }],
        "backdrop-opacity": [{ "backdrop-opacity": [be, ae, te] }],
        "backdrop-saturate": [{ "backdrop-saturate": [be, ae, te] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", be, ae, te] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": K() }],
        "border-spacing-x": [{ "border-spacing-x": K() }],
        "border-spacing-y": [{ "border-spacing-y": K() }],
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
              ae,
              te,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [be, "initial", ae, te] }],
        ease: [{ ease: ["linear", "initial", G, ae, te] }],
        delay: [{ delay: [be, ae, te] }],
        animate: [{ animate: ["none", I, ae, te] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [Y, ae, te] }],
        "perspective-origin": [{ "perspective-origin": ee() }],
        rotate: [{ rotate: Te() }],
        "rotate-x": [{ "rotate-x": Te() }],
        "rotate-y": [{ "rotate-y": Te() }],
        "rotate-z": [{ "rotate-z": Te() }],
        scale: [{ scale: nt() }],
        "scale-x": [{ "scale-x": nt() }],
        "scale-y": [{ "scale-y": nt() }],
        "scale-z": [{ "scale-z": nt() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: gt() }],
        "skew-x": [{ "skew-x": gt() }],
        "skew-y": [{ "skew-y": gt() }],
        transform: [{ transform: [ae, te, "", "none", "gpu", "cpu"] }],
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
              ae,
              te,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": K() }],
        "scroll-mx": [{ "scroll-mx": K() }],
        "scroll-my": [{ "scroll-my": K() }],
        "scroll-ms": [{ "scroll-ms": K() }],
        "scroll-me": [{ "scroll-me": K() }],
        "scroll-mt": [{ "scroll-mt": K() }],
        "scroll-mr": [{ "scroll-mr": K() }],
        "scroll-mb": [{ "scroll-mb": K() }],
        "scroll-ml": [{ "scroll-ml": K() }],
        "scroll-p": [{ "scroll-p": K() }],
        "scroll-px": [{ "scroll-px": K() }],
        "scroll-py": [{ "scroll-py": K() }],
        "scroll-ps": [{ "scroll-ps": K() }],
        "scroll-pe": [{ "scroll-pe": K() }],
        "scroll-pt": [{ "scroll-pt": K() }],
        "scroll-pr": [{ "scroll-pr": K() }],
        "scroll-pb": [{ "scroll-pb": K() }],
        "scroll-pl": [{ "scroll-pl": K() }],
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
            "will-change": ["auto", "scroll", "contents", "transform", ae, te],
          },
        ],
        fill: [{ fill: ["none", ...D()] }],
        "stroke-w": [{ stroke: [be, Gs, Vn, nu] }],
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
      v =
        u &&
        Object.entries(u).reduce((h, j) => {
          let [p, E] = j;
          return (E === void 0 || (h[p] = E), h);
        }, {}),
      y =
        c == null || (r = c.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((h, j) => {
              let { class: p, className: E, ...C } = j;
              return Object.entries(C).every(M => {
                let [Y, V] = M;
                return Array.isArray(V)
                  ? V.includes({ ...m, ...v }[Y])
                  : { ...m, ...v }[Y] === V;
              })
                ? [...h, p, E]
                : h;
            }, []);
    return ep(s, x, y, u?.class, u?.className);
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
  const m = r ? wv : "button";
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
 */ const y1 = z.forwardRef(
  (
    {
      color: s = "currentColor",
      size: c = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: r,
      className: f = "",
      children: m,
      iconNode: x,
      ...v
    },
    y
  ) =>
    z.createElement(
      "svg",
      {
        ref: y,
        ...x1,
        width: c,
        height: c,
        stroke: s,
        strokeWidth: r ? (Number(u) * 24) / Number(c) : u,
        className: rh("lucide", f),
        ...v,
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
    z.createElement(y1, {
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
 */ const v1 = mt("Calendar", [
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
 */ const N1 = mt("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = mt("Clock", [
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
 */ const la = mt("Mail", [
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
 */ const T1 = mt("MapPin", [
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
 */ const k1 = mt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = mt("Phone", [
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
    v = "",
    y = s.split("/");
  for (y[0] || y.shift(); (f = y.shift()); )
    ((u = f[0]),
      u === "*"
        ? (x.push(u), (v += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : u === ":"
          ? ((r = f.indexOf("?", 1)),
            (m = f.indexOf(".", 1)),
            x.push(f.substring(1, ~r ? r : ~m ? m : f.length)),
            (v += ~r && !~m ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~m && (v += (~r ? "?" : "") + "\\" + f.substring(m)))
          : (v += "/" + f));
  return {
    keys: x,
    pattern: new RegExp("^" + v + (c ? "(?=$|/)" : "/?$"), "i"),
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
  function v(p, E) {
    var C = E(),
      M = r({ inst: { value: C, getSnapshot: E } }),
      Y = M[0].inst,
      V = M[1];
    return (
      m(
        function () {
          ((Y.value = C), (Y.getSnapshot = E), y(Y) && V({ inst: Y }));
        },
        [p, C, E]
      ),
      f(
        function () {
          return (
            y(Y) && V({ inst: Y }),
            p(function () {
              y(Y) && V({ inst: Y });
            })
          );
        },
        [p]
      ),
      x(C),
      C
    );
  }
  function y(p) {
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
      : v;
  return (
    (iu.useSyncExternalStore =
      s.useSyncExternalStore !== void 0 ? s.useSyncExternalStore : j),
    iu
  );
}
var ap;
function _1() {
  return (ap || ((ap = 1), (su.exports = D1())), su.exports);
}
var B1 = _1();
const R1 = Gy.useInsertionEffect,
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
  Tu = "pushState",
  ku = "replaceState",
  q1 = "hashchange",
  np = [Y1, Tu, ku, q1],
  G1 = s => {
    for (const c of np) addEventListener(c, s);
    return () => {
      for (const c of np) removeEventListener(c, s);
    };
  },
  dh = (s, c) => B1.useSyncExternalStore(G1, s, c),
  V1 = () => location.search,
  X1 = ({ ssrSearch: s = "" } = {}) => dh(V1, () => s),
  lp = () => location.pathname,
  Q1 = ({ ssrPath: s } = {}) => dh(lp, s ? () => s : lp),
  K1 = (s, { replace: c = !1, state: u = null } = {}) =>
    history[c ? ku : Tu](u, "", s),
  Z1 = (s = {}) => [Q1(s), K1],
  sp = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[sp] > "u") {
  for (const s of [Tu, ku]) {
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
    hook: Z1,
    searchHook: X1,
    parser: M1,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: s => s,
  },
  gh = z.createContext(mh),
  Zs = () => z.useContext(gh),
  ph = {},
  hh = z.createContext(ph),
  P1 = () => z.useContext(hh),
  Bo = s => {
    const [c, u] = s.hook(s);
    return [$1(s.base, c), uh((r, f) => u(W1(r, s.base), f))];
  },
  F1 = () => Bo(Zs()),
  xh = (s, c, u, r) => {
    const { pattern: f, keys: m } =
        c instanceof RegExp ? { keys: !1, pattern: c } : s(c || "*", r),
      x = f.exec(u) || [],
      [v, ...y] = x;
    return v !== void 0
      ? [
          !0,
          (() => {
            const h =
              m !== !1
                ? Object.fromEntries(m.map((p, E) => [p, y[E]]))
                : x.groups;
            let j = { ...y };
            return (h && Object.assign(j, h), j);
          })(),
          ...(r ? [v] : []),
        ]
      : [!1, null];
  },
  I1 = ({ children: s, ...c }) => {
    const u = Zs(),
      r = c.hook ? mh : u;
    let f = r;
    const [m, x] = c.ssrPath?.split("?") ?? [];
    (x && ((c.ssrSearch = x), (c.ssrPath = m)),
      (c.hrefs = c.hrefs ?? c.hook?.hrefs));
    let v = z.useRef({}),
      y = v.current,
      h = y;
    for (let j in r) {
      const p = j === "base" ? r[j] + (c[j] || "") : c[j] || r[j];
      (y === h && p !== h[j] && (v.current = h = { ...h }),
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
  ma = ({ path: s, nest: c, match: u, ...r }) => {
    const f = Zs(),
      [m] = Bo(f),
      [x, v, y] = u ?? xh(f.parser, s, m, c),
      h = e2({ ...P1(), ...v });
    if (!x) return null;
    const j = y ? z.createElement(I1, { base: y }, op(r, h)) : op(r, h);
    return z.createElement(hh.Provider, { value: h, children: j });
  },
  $ = z.forwardRef((s, c) => {
    const u = Zs(),
      [r, f] = Bo(u),
      {
        to: m = "",
        href: x = m,
        onClick: v,
        asChild: y,
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
          (v?.(V), V.defaultPrevented || (V.preventDefault(), f(x, s)));
      }),
      Y = u.hrefs(x[0] === "~" ? x.slice(1) : u.base + x, u);
    return y && z.isValidElement(h)
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
    const u = Zs(),
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
  a2 = () => {
    window.va ||
      (window.va = function (...c) {
        (window.vaq || (window.vaq = []), window.vaq.push(c));
      });
  },
  n2 = "@vercel/analytics",
  l2 = "2.0.1";
function yh() {
  return typeof window < "u";
}
function vh() {
  try {
    const s = "production";
  } catch {}
  return "production";
}
function s2(s = "auto") {
  if (s === "auto") {
    window.vam = vh();
    return;
  }
  window.vam = s;
}
function i2() {
  return (yh() ? window.vam : vh()) || "production";
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
  const f = { sdkn: n2 + (r.framework ? `/${r.framework}` : ""), sdkv: l2 };
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
  if (!yh()) return;
  const { beforeSend: r, src: f, dataset: m } = c2(s, c);
  if (
    (a2(),
    r && ((u = window.va) == null || u.call(window, "beforeSend", r)),
    document.head.querySelector(`script[src*="${f}"]`))
  )
    return;
  const x = document.createElement("script");
  x.src = f;
  for (const [v, y] of Object.entries(m)) x.dataset[v] = y;
  ((x.defer = !0),
    (x.onerror = () => {
      const v = Ou()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${f}. ${v}`
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
function vn() {
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
              : o.jsx(k1, {
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
  y2 = [
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
function v2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Home.tsx:34",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(vn, { "data-loc": "client/src/pages/Home.tsx:35" }),
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
                  children: y2.map((s, c) =>
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
                            o.jsx(sa, {
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
                            o.jsx(la, {
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
  const [v, y] = z.useState(!1);
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
                  onClick: () => y(!v),
                  className:
                    "flex items-center gap-2 font-body text-sm font-semibold transition-all w-full",
                  style: { color: "#8DA089" },
                  children: [
                    o.jsx("span", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:58",
                      children: v ? "Lees minder" : "Lees meer",
                    }),
                    o.jsx(b1, {
                      "data-loc": "client/src/components/ExpandableCard.tsx:59",
                      size: 16,
                      style: {
                        transform: v ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      },
                    }),
                  ],
                }),
                v &&
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
function N2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Behandelingen.tsx:122",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(vn, { "data-loc": "client/src/pages/Behandelingen.tsx:123" }),
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
                            o.jsx(sa, {
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
                            o.jsx(la, {
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
const w2 = [
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
      description: "Stimulerende massage met westerse en oosterse technieken.",
      fullDescription:
        "Ben je toe aan je lijf voorbereiding op de winter? Dit arrangement maakt gebruik van een stevige maar rustige gegeven, stimulerende massage met zowel westerse als oosterse massagetechnieken met essentiële olie naar keuze om het lichaam energie te geven en op te peppen.|||Er wordt begonnen met een scrub van de rug, nek en shoulders en achterkant van de benen, precies die delen waar je zelf minder makkelijk bij kunt. Daarna volgt een massage van rug, nek en shoulders, gevolgd door de achterkant van de benen, armen en handen indien tijd over, het hoofd en ter afsluiting is er aandacht voor het meest belaste onderdeelvan je lijf: je voeten!|||Na de behandeling zul je je energiek en verfrist voelen en ben je klaar voor de winter!",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "balsem-sinaasappel",
      title: "Balsem sinaasappel-kaneel arrangement",
      subtitle: "Tafel",
      description: "Start met kaneel of sinaasappel etherische oliebad.",
      fullDescription:
        "Je behandeling start met een kaneel of sinaasappel etherische oliebad van je voeten.|||Hierna worden bij een uur rug, nek, shoulders en indien gewenst de bilspieren ingesmeerd met verwarmende therapeutische balsem, bij 90 minuten ook de voor- en achterkant van de benen. Daarna volgt de massage met verwarmde, etherische olie van rug, nek, shoulders en bilspieren, aangevuld met een keuze uit voor- of achterkant benen, voeten, handen of hoofd.|||Bij 90 minuten komen al deze onderdelenaan de beurt en bepalen we in overleg waar jij behoefte aan hebt!",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "balsem-thais",
      title: "Balsem kaneel/sinaasappel arrangement Thais",
      subtitle: "Mat",
      description: "Start met warm voetbad met essentiële olie.",
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
        "Ontspannende massage met zwaartepunt op rug, nek en schouders.",
      fullDescription:
        "Ontspannende massage met zwaartepunt op rug, nek, schouders, handen, voeten en hoofd.|||Na afloop krijg je een miniflesje massageolie met anti-stress essentiële olie mee naar huis.",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "thai-western",
      title: "Thai Western massage",
      subtitle: "Mat & Tafel",
      description: "Start op mat met voetbad, massage met yogastretches.",
      fullDescription:
        "Start op mat met voetbad, massage van armen, handen, voeten, benen en rug met yogastretches.|||Vervolgens op tafel rug, nek, schouders en hoofd.",
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
      description: "Thaise yogamassage met voetreflexologie en warm voetenbad.",
      fullDescription:
        "Thaise yogamassage met ongeveer 15-20 minuten voetreflexologie.|||Start met warm voetenbad en kopje kruiden- of vruchtenthee naar keuze.",
      prices: [
        { duration: "60 min", price: "€ 59,-" },
        { duration: "90 min", price: "€ 79,-" },
      ],
    },
    {
      id: "indian-summer",
      title: "Indian summer arrangement",
      subtitle: "Tafel",
      description: "Start met voetenbad en kopje thee, daarna stevige scrub.",
      fullDescription:
        "Start met voetenbad en kopje thee, daarna stevige scrub van rug en achterkant benen, gevolgd door massage van rug, nek, schouders, achterkant benen en bilspieren.",
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
        "Speciaal voor zwangeren met warm voetenbad en lavendelolie.",
      fullDescription:
        "Speciaal voor zwangeren. Start met warm voetenbad met lavendelolie en kopje kruidenthee. Ontspannende massage van hoofd, gezicht, nek, schouders, armen, handen en voeten.",
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
      o.jsx(vn, { "data-loc": "client/src/pages/Arrangementen.tsx:149" }),
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
                  children: w2.map(s =>
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
                          o.jsx(sa, {
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
                          o.jsx(la, {
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
  T2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  k2 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";
function O2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/OverMij.tsx:16",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(vn, { "data-loc": "client/src/pages/OverMij.tsx:17" }),
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
                      src: k2,
                      alt: "Mascha Kwakkel",
                      className: "rounded-lg shadow-sm w-full h-auto",
                    }),
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:44",
                    className: "order-1 md:order-2",
                    children: [
                      o.jsx("h2", {
                        "data-loc": "client/src/pages/OverMij.tsx:45",
                        className: "font-display text-3xl font-bold mb-6",
                        style: { color: "#3E3A37" },
                        children: "Balanergy is Mascha Kwakkel",
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:48",
                        className:
                          "space-y-4 font-body text-base leading-relaxed",
                        style: { color: "#6B6560" },
                        children: [
                          o.jsx("p", {
                            "data-loc": "client/src/pages/OverMij.tsx:49",
                            children:
                              "Even voorstellen: Ik ben Mascha Kwakkel en woon met mijn man en kinderen in IJsselmuiden. Na jaren van leidinggevende- en coachende functies, wilde ik een andere kant van mezelf verder ontwikkelen waardoor ik meer op- en vanuit mijn gevoel kon werken. Dat werd iets wat ik al jaren graag ontving én gaf, vanuit de filosofie dat aanraking helend werkt: massage!",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/OverMij.tsx:52",
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
            "data-loc": "client/src/pages/OverMij.tsx:62",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:63",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:64",
                className: "max-w-3xl",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/OverMij.tsx:65",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Mijn Opleiding in Chiang Mai",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:68",
                    className: "space-y-4 font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:69",
                        children:
                          'Na vele jaren van deze verrukkelijke massages ondergaan in de 7 keer dat ik Thailand bezocht heb, wilde ik van deze eeuwenoude, helende, veelzijdige massage mijn "signature dish" maken. Ik heb de stoute schoenen aangetrokken en ben naar Chiang Mai, Thailand gereisd voor een opleiding Nuad Boran bij de internationale school ITM Chiang Mai. Het was enorm bijzonder om dit helemaal alleen te doen.',
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:72",
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
            "data-loc": "client/src/pages/OverMij.tsx:81",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:82",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:83",
                className: "max-w-3xl",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/OverMij.tsx:84",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Mijn Filosofie",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:87",
                    className: "space-y-4 font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:88",
                        children:
                          "Mijn missie is daar waar ik kan helpen met helen. Ik werk holistisch: ik maak een inschatting van wie je bent, hoe je in elkaar zit, wat je thema's zijn en wat je uitstraalt — en pas per keer mijn behandeling daar op aan. Anderzijds kijk ik naar het totaalplaatje van spieren, pezen en bindweefsel, en integreer ik zenuwstelselkalmering, leefstijladviezen en omgaan met stress en mental load.",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:91",
                        children:
                          "Bij Balanergy sta jij centraal, met waar jij en jouw lijf op dat moment behoefte aan hebben. Ik bied een scala aan massages en personal yoga training in allerlei vormen, waardoor er altijd wel een is die op dit moment bij jou past.",
                      }),
                      o.jsx("blockquote", {
                        "data-loc": "client/src/pages/OverMij.tsx:94",
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
            "data-loc": "client/src/pages/OverMij.tsx:106",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:107",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/OverMij.tsx:108",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Mijn Opleidingen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:111",
                  className: "bg-white p-8 rounded-lg shadow-sm",
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:112",
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:113",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/OverMij.tsx:114",
                            className: "font-display text-lg font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Thaise Massage & Voetreflexologie",
                          }),
                          o.jsxs("ul", {
                            "data-loc": "client/src/pages/OverMij.tsx:117",
                            className: "space-y-2 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:118",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:119",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:120",
                                    children:
                                      "2018 – Docentenopleiding Thaise Yogamassage Gevorderden",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:122",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:123",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:124",
                                    children:
                                      "2018 – Docentenopleiding Voetreflexologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:126",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:127",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:128",
                                    children:
                                      "2018 – Thaise Kruidenstempelmassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:130",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:131",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:132",
                                    children:
                                      "2016 – Docentenopleiding Thaise Yogamassage Beginners",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:134",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:135",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:136",
                                    children:
                                      "2016 – Opleiding Sen (Energielijnen)",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:138",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:139",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:140",
                                    children:
                                      "2015 – Basis en Gevorderden Opleiding Thaise Yogamassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:142",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:143",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:144",
                                    children:
                                      "2015 – Opleiding Thaise Voetreflexologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:146",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:147",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:148",
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
                        "data-loc": "client/src/pages/OverMij.tsx:152",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/OverMij.tsx:153",
                            className: "font-display text-lg font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Yoga, Coaching & Specialisaties",
                          }),
                          o.jsxs("ul", {
                            "data-loc": "client/src/pages/OverMij.tsx:156",
                            className: "space-y-2 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:157",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:158",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:159",
                                    children: "2023 – Triggerpointherapie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:161",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:162",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:163",
                                    children: "2022 – Sportmassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:165",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:166",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:167",
                                    children: "2021 – Beweegcoach",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:169",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:170",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:171",
                                    children: "2021 – Trainingsleer",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:173",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:174",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:175",
                                    children: "2021 – Inspanningsfysiologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:177",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:178",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:179",
                                    children: "2021 – Functionele Anatomie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:181",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:182",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:183",
                                    children:
                                      "2019 – Docentenopleiding Power Yoga 2",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:185",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:186",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:187",
                                    children:
                                      "2018 – Docentenopleiding Power Yoga 1",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:189",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:190",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:191",
                                    children:
                                      "2015 – Docentenopleiding Kinderyoga",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:193",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:194",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:195",
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
            "data-loc": "client/src/pages/OverMij.tsx:205",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:206",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/OverMij.tsx:207",
                  className: "font-display text-2xl font-bold mb-4",
                  style: { color: "#3E3A37" },
                  children: "Klaar om kennis te maken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/OverMij.tsx:210",
                  className: "font-body text-lg mb-6",
                  style: { color: "#6B6560" },
                  children:
                    "Boek je eerste behandeling en ervaar zelf de Balanergy filosofie",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/OverMij.tsx:213",
                  href: T2,
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
        "data-loc": "client/src/pages/OverMij.tsx:227",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/OverMij.tsx:228",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:229",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:230",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/OverMij.tsx:231",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/OverMij.tsx:232",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:236",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/OverMij.tsx:237",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/OverMij.tsx:238",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:239",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:239",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:240",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:240",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:241",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:241",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:242",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:242",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:243",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:243",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:244",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:244",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:245",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:245",
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
                  "data-loc": "client/src/pages/OverMij.tsx:248",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/OverMij.tsx:249",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/OverMij.tsx:250",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/OverMij.tsx:251",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sa, {
                              "data-loc": "client/src/pages/OverMij.tsx:252",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/OverMij.tsx:253",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/OverMij.tsx:255",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(la, {
                              "data-loc": "client/src/pages/OverMij.tsx:256",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/OverMij.tsx:257",
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
              "data-loc": "client/src/pages/OverMij.tsx:262",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/OverMij.tsx:263",
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
      o.jsx(vn, { "data-loc": "client/src/pages/Contact.tsx:16" }),
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
                          o.jsx(T1, {
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
                          o.jsx(sa, {
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
                          o.jsx(la, {
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
                      o.jsx(w1, {
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
                      o.jsx(v1, {
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
                            o.jsx(sa, {
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
                            o.jsx(la, {
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
      fullDescription:
        "Je leert in vogelvlucht de belangrijkste grepen en technieken voor klacht gerichte massage van de nek, shoulders, rug en bil- en bekkenspierenovenbenenen achterkant, do's and don'ts, de opbouw van een massage, materiaalgebruik en houding. Inclusief handout met de grepen en basale kennis van je workshop om mee naar huis te nemen.|||Geef bij je boeking duidelijk aan of de workshop voor 1 of 2 personen moet worden. Indien je alleen komt, dan neem je een model mee op wie je kunt oefenen.",
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
      fullDescription:
        "Wil je Thaise yogamassage leren? Dat kan in duo's (of eventueel alleen, dan neem je een model mee), door de opleiding BalaneryThai Yoga massage te doen, volgens de principes en leermethoden van ITM Chiangmai. Iedereen kan zich aanmelden, zowel leken als (ervaren) masseurs.|||De opleiding certificeert je om daarna in te stromen op level 2, het gevorderden level met nog meer houdingenm.|||Wat leer je? 64 basisposities van Thaise yogamassage level 1, voorkant posities van voeten tot gezicht, de belangrijkste energielijnen (Sen lijnen), stretches en acupressuur punten, diepe buikmassage (Hara werk), en het juiste gebruik van je lichaamgewicht.|||Wat krijg je? Een duidelijk lesboek, praktijkexamen met internationale certificering, 6 lessen van 2,5-3 uur in overleg, gratis Thaise yogamassage van 60 minuten, onbeperkt water en kruidenthee, en onbeperkte mogelijkheid tot vragen stellen na de opleiding.",
      prices: [
        { duration: "6 lessen van 2,5-3 uur", price: "€699 per persoon" },
      ],
    },
    {
      id: "klachtgerichte-opleiding",
      title: "Volledige opleiding klachtgerichte massage",
      subtitle: "Opleiding",
      description: "Professionele klachtgerichte massagetraining.",
      fullDescription:
        "Volledige opleiding klachtgerichte massage, 7-8 ochtenden of middagen van 2 weekenddagen, dagdelen in overleg.|||Kennismaking, inventarisatie kennis niveau, persoonlijke doelen, massage basics, do's and don'ts, contra indicaties, anamnesegespreken formulier, werkhouding, en uitgebreide anatomie van de belangrijkste botten en spieren.|||Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd, voeten, buik en borst, met herhalingsles en gelegenheid tot extra oefenen.|||Afsluitend praktijkexamen, inclusief massageboek en diploma. Aan het einde heb je alles in huis om zelf een praktijk te gaan starten, inclusief gratis klachtgerichte massage van een uur!",
      prices: [
        { duration: "7-8 ochtenden of middagen", price: "€650 per persoon" },
      ],
    },
    {
      id: "ontspanning-volledig",
      title: "Volledige opleiding ontspanningsmassage",
      subtitle: "Opleiding",
      description: "Volledige ontspanningsmassagetraining.",
      fullDescription:
        "Volledige opleiding ontspanningsmassage, 7-8 ochtenden of middagen van ongeveer 3-3,5 uur of 2 weekenddagen, dagdelen in overleg.|||Kennismaking, inventarisatie kennis niveau, persoonlijke doelen, massage basics, do's and don'ts, contra-indicaties, werkhouding, en globale anatomie van de belangrijkste botten en spieren.|||Lessen massage van de rug, nek, shoulders, armen, handen, achterkant en voorkant benen, hoofd en voeten, met herhalingsles en gelegenheid tot extra oefenen.|||Afsluitend praktijkexamen, inclusief massageboek en diploma. Aan het einde heb je alles in huis om zelf een praktijk te gaan starten, inclusief gratis ontspanningsmassage van een uur!",
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
      o.jsx(vn, { "data-loc": "client/src/pages/Workshops.tsx:82" }),
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
                    "Korte workshops waarin je de basisprincipes van massage leert. Perfecte introductie voor beginners of aanvulling voor ervaren therapeuten.",
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
                    "Volledige professionele opleidingen met certificering. Ideaal voor degenen die een massagepraktijk willen starten of hun vaardigheden willen verdiepen.",
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
                          o.jsx(sa, {
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
                          o.jsx(la, {
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
  yo = "06-42874405",
  vo = "balanergy@hotmail.com",
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
      o.jsx(vn, { "data-loc": "client/src/pages/PersonalTraining.tsx:95" }),
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
              className: "container max-w-3xl",
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
                          o.jsx(N1, {
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
              className: "container max-w-3xl",
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
                        o.jsx(sa, {
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
                              href: `tel:${yo}`,
                              className: "font-body text-base",
                              style: { color: "#8DA089" },
                              children: yo,
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:216",
                      className: "flex items-start gap-4",
                      children: [
                        o.jsx(la, {
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
                              href: `mailto:${vo}`,
                              className: "font-body text-base",
                              style: { color: "#8DA089" },
                              children: vo,
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
                            o.jsx(sa, {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:296",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:297",
                              href: `tel:${yo}`,
                              className: "opacity-80 hover:opacity-100",
                              children: yo,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:299",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(la, {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:300",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:301",
                              href: `mailto:${vo}`,
                              className: "opacity-80 hover:opacity-100",
                              children: vo,
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
      o.jsx(vn, { "data-loc": "client/src/pages/Info.tsx:38" }),
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
                          o.jsx(sa, {
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
                          o.jsx(la, {
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
                            o.jsx(sa, {
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
                            o.jsx(la, {
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
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:21",
        path: "/",
        component: v2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:22",
        path: "/behandelingen",
        component: N2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:23",
        path: "/arrangementen",
        component: E2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:24",
        path: "/over-mij",
        component: O2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:25",
        path: "/contact",
        component: z2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:26",
        path: "/workshops",
        component: _2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:27",
        path: "/personal-training",
        component: U2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:28",
        path: "/info",
        component: Y2,
      }),
      o.jsx(ma, {
        "data-loc": "client/src/App.tsx:29",
        path: "/404",
        component: cp,
      }),
      o.jsx(ma, { "data-loc": "client/src/App.tsx:31", component: cp }),
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
          o.jsx(jv, { "data-loc": "client/src/App.tsx:48" }),
          o.jsx(q2, { "data-loc": "client/src/App.tsx:49" }),
          o.jsx(m2, { "data-loc": "client/src/App.tsx:50" }),
        ],
      }),
    }),
  });
}
qy.createRoot(document.getElementById("root")).render(
  o.jsx(G2, { "data-loc": "client/src/main.tsx:5" })
);
