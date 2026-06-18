function Bv(l, r) {
  for (var u = 0; u < r.length; u++) {
    const c = r[u];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const f in c)
        if (f !== "default" && !(f in l)) {
          const m = Object.getOwnPropertyDescriptor(c, f);
          m &&
            Object.defineProperty(
              l,
              f,
              m.get ? m : { enumerable: !0, get: () => c[f] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(l, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) c(f);
  new MutationObserver(f => {
    for (const m of f)
      if (m.type === "childList")
        for (const x of m.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && c(x);
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
  function c(f) {
    if (f.ep) return;
    f.ep = !0;
    const m = u(f);
    fetch(f.href, m);
  }
})();
function gp(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var $c = { exports: {} },
  Ys = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sg;
function Rv() {
  if (Sg) return Ys;
  Sg = 1;
  var l = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function u(c, f, m) {
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
      { $$typeof: l, type: c, key: x, ref: f !== void 0 ? f : null, props: m }
    );
  }
  return ((Ys.Fragment = r), (Ys.jsx = u), (Ys.jsxs = u), Ys);
}
var Ag;
function Hv() {
  return (Ag || ((Ag = 1), ($c.exports = Rv())), $c.exports);
}
var o = Hv(),
  Pc = { exports: {} },
  qs = {},
  Fc = { exports: {} },
  Ic = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eg;
function Uv() {
  return (
    Eg ||
      ((Eg = 1),
      (function (l) {
        function r(S, U) {
          var D = S.length;
          S.push(U);
          e: for (; 0 < D; ) {
            var ie = (D - 1) >>> 1,
              ce = S[ie];
            if (0 < f(ce, U)) ((S[ie] = U), (S[D] = ce), (D = ie));
            else break e;
          }
        }
        function u(S) {
          return S.length === 0 ? null : S[0];
        }
        function c(S) {
          if (S.length === 0) return null;
          var U = S[0],
            D = S.pop();
          if (D !== U) {
            S[0] = D;
            e: for (var ie = 0, ce = S.length, w = ce >>> 1; ie < w; ) {
              var H = 2 * (ie + 1) - 1,
                R = S[H],
                X = H + 1,
                W = S[X];
              if (0 > f(R, D))
                X < ce && 0 > f(W, R)
                  ? ((S[ie] = W), (S[X] = D), (ie = X))
                  : ((S[ie] = R), (S[H] = D), (ie = H));
              else if (X < ce && 0 > f(W, D))
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
          ((l.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          l.unstable_now = function () {
            return m.now();
          };
        } else {
          var x = Date,
            y = x.now();
          l.unstable_now = function () {
            return x.now() - y;
          };
        }
        var v = [],
          h = [],
          j = 1,
          p = null,
          E = 3,
          z = !1,
          M = !1,
          Y = !1,
          V = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          I = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function P(S) {
          for (var U = u(h); U !== null; ) {
            if (U.callback === null) c(h);
            else if (U.startTime <= S)
              (c(h), (U.sortIndex = U.expirationTime), r(v, U));
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
          return V ? !0 : !(l.unstable_now() - ge < Z);
        }
        function Oe() {
          if (((V = !1), se)) {
            var S = l.unstable_now();
            ge = S;
            var U = !0;
            try {
              e: {
                ((M = !1), Y && ((Y = !1), I(Q), (Q = -1)), (z = !0));
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
                        var ce = ie(p.expirationTime <= S);
                        if (((S = l.unstable_now()), typeof ce == "function")) {
                          ((p.callback = ce), P(S), (U = !0));
                          break t;
                        }
                        (p === u(v) && c(v), P(S));
                      } else c(v);
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
                  ((p = null), (E = D), (z = !1));
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
            S(l.unstable_now());
          }, U);
        }
        ((l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (l.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Z = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return E;
          }),
          (l.unstable_next = function (S) {
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
          (l.unstable_requestPaint = function () {
            V = !0;
          }),
          (l.unstable_runWithPriority = function (S, U) {
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
          (l.unstable_scheduleCallback = function (S, U, D) {
            var ie = l.unstable_now();
            switch (
              (typeof D == "object" && D !== null
                ? ((D = D.delay),
                  (D = typeof D == "number" && 0 < D ? ie + D : ie))
                : (D = ie),
              S)
            ) {
              case 1:
                var ce = -1;
                break;
              case 2:
                ce = 250;
                break;
              case 5:
                ce = 1073741823;
                break;
              case 4:
                ce = 1e4;
                break;
              default:
                ce = 5e3;
            }
            return (
              (ce = D + ce),
              (S = {
                id: j++,
                callback: U,
                priorityLevel: S,
                startTime: D,
                expirationTime: ce,
                sortIndex: -1,
              }),
              D > ie
                ? ((S.sortIndex = D),
                  r(h, S),
                  u(v) === null &&
                    S === u(h) &&
                    (Y ? (I(Q), (Q = -1)) : (Y = !0), je(ee, D - ie)))
                : ((S.sortIndex = ce),
                  r(v, S),
                  M || z || ((M = !0), se || ((se = !0), he()))),
              S
            );
          }),
          (l.unstable_shouldYield = we),
          (l.unstable_wrapCallback = function (S) {
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
      })(Ic)),
    Ic
  );
}
var kg;
function Lv() {
  return (kg || ((kg = 1), (Fc.exports = Uv())), Fc.exports);
}
var eu = { exports: {} },
  me = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tg;
function Yv() {
  if (Tg) return me;
  Tg = 1;
  var l = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    p = Symbol.for("react.activity"),
    E = Symbol.iterator;
  function z(w) {
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
      $$typeof: l,
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
    return typeof w == "object" && w !== null && w.$$typeof === l;
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
            case l:
            case r:
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
    else if (((ke = z(w)), typeof ke == "function"))
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
    ce = {
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
    (me.Children = ce),
    (me.Component = G),
    (me.Fragment = u),
    (me.Profiler = f),
    (me.PureComponent = J),
    (me.StrictMode = c),
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
var Og;
function To() {
  return (Og || ((Og = 1), (eu.exports = Yv())), eu.exports);
}
var tu = { exports: {} },
  ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cg;
function qv() {
  if (Cg) return ft;
  Cg = 1;
  var l = To();
  function r(v) {
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
  var c = {
      d: {
        f: u,
        r: function () {
          throw Error(r(522));
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
  var x = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(v, h) {
    if (v === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (ft.createPortal = function (v, h) {
      var j =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(r(299));
      return m(v, h, null, j);
    }),
    (ft.flushSync = function (v) {
      var h = x.T,
        j = c.p;
      try {
        if (((x.T = null), (c.p = 2), v)) return v();
      } finally {
        ((x.T = h), (c.p = j), c.d.f());
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
        c.d.C(v, h));
    }),
    (ft.prefetchDNS = function (v) {
      typeof v == "string" && c.d.D(v);
    }),
    (ft.preinit = function (v, h) {
      if (typeof v == "string" && h && typeof h.as == "string") {
        var j = h.as,
          p = y(j, h.crossOrigin),
          E = typeof h.integrity == "string" ? h.integrity : void 0,
          z = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        j === "style"
          ? c.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: p,
              integrity: E,
              fetchPriority: z,
            })
          : j === "script" &&
            c.d.X(v, {
              crossOrigin: p,
              integrity: E,
              fetchPriority: z,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (ft.preinitModule = function (v, h) {
      if (typeof v == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var j = y(h.as, h.crossOrigin);
            c.d.M(v, {
              crossOrigin: j,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && c.d.M(v);
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
        c.d.L(v, j, {
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
          c.d.m(v, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: j,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else c.d.m(v);
    }),
    (ft.requestFormReset = function (v) {
      c.d.r(v);
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
var zg;
function pp() {
  if (zg) return tu.exports;
  zg = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return (l(), (tu.exports = qv()), tu.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mg;
function Gv() {
  if (Mg) return qs;
  Mg = 1;
  var l = Lv(),
    r = To(),
    u = pp();
  function c(e) {
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
    if (m(e) !== e) throw Error(c(188));
  }
  function h(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var i = s.alternate;
      if (i === null) {
        if (((a = s.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === i.child) {
        for (i = s.child; i; ) {
          if (i === n) return (v(s), e);
          if (i === a) return (v(s), t);
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) ((n = s), (a = i));
      else {
        for (var d = !1, g = s.child; g; ) {
          if (g === n) {
            ((d = !0), (n = s), (a = i));
            break;
          }
          if (g === a) {
            ((d = !0), (a = s), (n = i));
            break;
          }
          g = g.sibling;
        }
        if (!d) {
          for (g = i.child; g; ) {
            if (g === n) {
              ((d = !0), (n = i), (a = s));
              break;
            }
            if (g === a) {
              ((d = !0), (a = i), (n = s));
              break;
            }
            g = g.sibling;
          }
          if (!d) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
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
    z = Symbol.for("react.transitional.element"),
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
    S = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = { pending: !1, data: null, method: null, action: null },
    ie = [],
    ce = -1;
  function w(e) {
    return { current: e };
  }
  function H(e) {
    0 > ce || ((e.current = ie[ce]), (ie[ce] = null), ce--);
  }
  function R(e, t) {
    (ce++, (ie[ce] = e.current), (e.current = t));
  }
  var X = w(null),
    W = w(null),
    oe = w(null),
    ae = w(null);
  function de(e, t) {
    switch ((R(oe, t), R(W, e), R(X, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Km(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Km(t)), (e = Jm(t, e)));
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
      n = Jm(t, e.type);
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
                  var C = _;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (_) {
                  C = _;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_) {
                C = _;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (_) {
            if (_ && C && typeof _.stack == "string") return [_.stack, C.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s &&
        s.configurable &&
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
          s = a = 0;
          a < b.length && !b[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; s < T.length && !T[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (a === b.length || s === T.length)
          for (
            a = b.length - 1, s = T.length - 1;
            1 <= a && 0 <= s && b[a] !== T[s];

          )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (b[a] !== T[s]) {
            if (a !== 1 || s !== 1)
              do
                if ((a--, s--, 0 > s || b[a] !== T[s])) {
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
              while (1 <= a && 0 <= s);
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
    Kl = l.unstable_scheduleCallback,
    Jl = l.unstable_cancelCallback,
    pt = l.unstable_shouldYield,
    Vn = l.unstable_requestPaint,
    ht = l.unstable_now,
    Uo = l.unstable_getCurrentPriorityLevel,
    ja = l.unstable_ImmediatePriority,
    Js = l.unstable_UserBlockingPriority,
    wa = l.unstable_NormalPriority,
    Wl = l.unstable_LowPriority,
    bn = l.unstable_IdlePriority,
    Ws = l.log,
    Xn = l.unstable_setDisableYieldValue,
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
    Lo = Math.log,
    $l = Math.LN2;
  function on(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Lo(e) / $l) | 0)) | 0);
  }
  var Ja = 256,
    Wa = 262144,
    Sa = 4194304;
  function rn(e) {
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
    var s = 0,
      i = e.suspendedLanes,
      d = e.pingedLanes;
    e = e.warmLanes;
    var g = a & 134217727;
    return (
      g !== 0
        ? ((a = g & ~i),
          a !== 0
            ? (s = rn(a))
            : ((d &= g),
              d !== 0
                ? (s = rn(d))
                : n || ((n = g & ~e), n !== 0 && (s = rn(n)))))
        : ((g = a & ~i),
          g !== 0
            ? (s = rn(g))
            : d !== 0
              ? (s = rn(d))
              : n || ((n = a & ~e), n !== 0 && (s = rn(n)))),
      s === 0
        ? 0
        : t !== 0 &&
            t !== s &&
            (t & i) === 0 &&
            ((i = s & -s),
            (n = t & -t),
            i >= n || (i === 32 && (n & 4194048) !== 0))
          ? t
          : s
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
  function yt(e, t, n, a, s, i) {
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
      var C = T[B];
      if (C !== null)
        for (T[B] = null, B = 0; B < C.length; B++) {
          var _ = C[B];
          _ !== null && (_.lane &= -536870913);
        }
      n &= ~q;
    }
    (a !== 0 && Aa(e, a, 0),
      i !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(d & ~t)));
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
        s = 1 << a;
      ((s & t) | (e[a] & t) && (e[a] |= t), (n &= ~s));
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
  function Yo() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : xg(e.type));
  }
  function Mu(e, t) {
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
    qo = "__reactEvents$" + Zn,
    Sh = "__reactListeners$" + Zn,
    Ah = "__reactHandles$" + Zn,
    Du = "__reactResources$" + Zn,
    Pl = "__reactMarker$" + Zn;
  function Go(e) {
    (delete e[st], delete e[wt], delete e[qo], delete e[Sh], delete e[Ah]);
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
          for (e = tg(e); e !== null; ) {
            if ((n = e[st])) return n;
            e = tg(e);
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
    throw Error(c(33));
  }
  function el(e) {
    var t = e[Du];
    return (
      t ||
        (t = e[Du] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function tt(e) {
    e[Pl] = !0;
  }
  var _u = new Set(),
    Bu = {};
  function Ea(e, t) {
    (tl(e, t), tl(e + "Capture", t));
  }
  function tl(e, t) {
    for (Bu[e] = t, e = 0; e < t.length; e++) _u.add(t[e]);
  }
  var Eh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Ru = {},
    Hu = {};
  function kh(e) {
    return Ct.call(Hu, e)
      ? !0
      : Ct.call(Ru, e)
        ? !1
        : Eh.test(e)
          ? (Hu[e] = !0)
          : ((Ru[e] = !0), !1);
  }
  function $s(e, t, n) {
    if (kh(t))
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
  function Uu(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Th(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var s = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
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
  function Vo(e) {
    if (!e._valueTracker) {
      var t = Uu(e) ? "checked" : "value";
      e._valueTracker = Th(e, t, "" + e[t]);
    }
  }
  function Lu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      a = "";
    return (
      e && (a = Uu(e) ? (e.checked ? "true" : "false") : e.value),
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
  var Oh = /[\n"\\]/g;
  function qt(e) {
    return e.replace(Oh, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Xo(e, t, n, a, s, i, d, g) {
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
        ? Qo(e, d, Yt(t))
        : n != null
          ? Qo(e, d, Yt(n))
          : a != null && e.removeAttribute("value"),
      s == null && i != null && (e.defaultChecked = !!i),
      s != null &&
        (e.checked = s && typeof s != "function" && typeof s != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (e.name = "" + Yt(g))
        : e.removeAttribute("name"));
  }
  function Yu(e, t, n, a, s, i, d, g) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || n != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) {
        Vo(e);
        return;
      }
      ((n = n != null ? "" + Yt(n) : ""),
        (t = t != null ? "" + Yt(t) : n),
        g || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((a = a ?? s),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = g ? e.checked : !!a),
      (e.defaultChecked = !!a),
      d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (e.name = d),
      Vo(e));
  }
  function Qo(e, t, n) {
    (t === "number" && Fs(e.ownerDocument) === e) ||
      e.defaultValue === "" + n ||
      (e.defaultValue = "" + n);
  }
  function nl(e, t, n, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        ((s = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== s && (e[n].selected = s),
          s && a && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + Yt(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          ((e[s].selected = !0), a && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qu(e, t, n) {
    if (
      t != null &&
      ((t = "" + Yt(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Yt(n) : "";
  }
  function Gu(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (je(a)) {
          if (1 < a.length) throw Error(c(93));
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
      Vo(e));
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
  var Ch = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vu(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : a
        ? e.setProperty(t, n)
        : typeof n != "number" || n === 0 || Ch.has(t)
          ? t === "float"
            ? (e.cssFloat = n)
            : (e[t] = ("" + n).trim())
          : (e[t] = n + "px");
  }
  function Xu(e, t, n) {
    if (t != null && typeof t != "object") throw Error(c(62));
    if (((e = e.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
              ? (e.cssFloat = "")
              : (e[a] = ""));
      for (var s in t)
        ((a = t[s]), t.hasOwnProperty(s) && n[s] !== a && Vu(e, s, a));
    } else for (var i in t) t.hasOwnProperty(i) && Vu(e, i, t[i]);
  }
  function Zo(e) {
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
  var zh = new Map([
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
    Mh =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Is(e) {
    return Mh.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function wn() {}
  var Ko = null;
  function Jo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ll = null,
    sl = null;
  function Qu(e) {
    var t = Ia(e);
    if (t && (e = t.stateNode)) {
      var n = e[wt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Xo(
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
                var s = a[wt] || null;
                if (!s) throw Error(c(90));
                Xo(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((a = n[t]), a.form === e.form && Lu(a));
          }
          break e;
        case "textarea":
          qu(e, n.value, n.defaultValue);
          break e;
        case "select":
          ((t = n.value), t != null && nl(e, !!n.multiple, t, !1));
      }
    }
  }
  var Wo = !1;
  function Zu(e, t, n) {
    if (Wo) return e(t, n);
    Wo = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((Wo = !1),
        (ll !== null || sl !== null) &&
          (Yi(), ll && ((t = ll), (e = sl), (sl = ll = null), Qu(t), e)))
      )
        for (t = 0; t < e.length; t++) Qu(e[t]);
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
    if (n && typeof n != "function") throw Error(c(231, t, typeof n));
    return n;
  }
  var Nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $o = !1;
  if (Nn)
    try {
      var es = {};
      (Object.defineProperty(es, "passive", {
        get: function () {
          $o = !0;
        },
      }),
        window.addEventListener("test", es, es),
        window.removeEventListener("test", es, es));
    } catch {
      $o = !1;
    }
  var Kn = null,
    Po = null,
    ei = null;
  function Ku() {
    if (ei) return ei;
    var e,
      t = Po,
      n = t.length,
      a,
      s = "value" in Kn ? Kn.value : Kn.textContent,
      i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var d = n - e;
    for (a = 1; a <= d && t[n - a] === s[i - a]; a++);
    return (ei = s.slice(e, 1 < a ? 1 - a : void 0));
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
  function Ju() {
    return !1;
  }
  function Nt(e) {
    function t(n, a, s, i, d) {
      ((this._reactName = n),
        (this._targetInst = s),
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
          : Ju),
        (this.isPropagationStopped = Ju),
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
    Dh = Nt(ts),
    Fo,
    Io,
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
      getModifierState: tr,
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
                ? ((Fo = e.screenX - ns.screenX), (Io = e.screenY - ns.screenY))
                : (Io = Fo = 0),
              (ns = e)),
            Fo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Io;
      },
    }),
    Wu = Nt(li),
    _h = p({}, li, { dataTransfer: 0 }),
    Bh = Nt(_h),
    Rh = p({}, ts, { relatedTarget: 0 }),
    er = Nt(Rh),
    Hh = p({}, ka, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Uh = Nt(Hh),
    Lh = p({}, ka, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Yh = Nt(Lh),
    qh = p({}, ka, { data: 0 }),
    $u = Nt(qh),
    Gh = {
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
    Vh = {
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
    Xh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Qh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Xh[e])
        ? !!t[e]
        : !1;
  }
  function tr() {
    return Qh;
  }
  var Zh = p({}, ts, {
      key: function (e) {
        if (e.key) {
          var t = Gh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ti(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Vh[e.keyCode] || "Unidentified"
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
      getModifierState: tr,
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
    Kh = Nt(Zh),
    Jh = p({}, li, {
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
    Pu = Nt(Jh),
    Wh = p({}, ts, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tr,
    }),
    $h = Nt(Wh),
    Ph = p({}, ka, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fh = Nt(Ph),
    Ih = p({}, li, {
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
    ex = Nt(Ih),
    tx = p({}, ka, { newState: 0, oldState: 0 }),
    nx = Nt(tx),
    ax = [9, 13, 27, 32],
    nr = Nn && "CompositionEvent" in window,
    as = null;
  Nn && "documentMode" in document && (as = document.documentMode);
  var lx = Nn && "TextEvent" in window && !as,
    Fu = Nn && (!nr || (as && 8 < as && 11 >= as)),
    Iu = " ",
    ed = !1;
  function td(e, t) {
    switch (e) {
      case "keyup":
        return ax.indexOf(t.keyCode) !== -1;
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
  function nd(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var il = !1;
  function sx(e, t) {
    switch (e) {
      case "compositionend":
        return nd(t);
      case "keypress":
        return t.which !== 32 ? null : ((ed = !0), Iu);
      case "textInput":
        return ((e = t.data), e === Iu && ed ? null : e);
      default:
        return null;
    }
  }
  function ix(e, t) {
    if (il)
      return e === "compositionend" || (!nr && td(e, t))
        ? ((e = Ku()), (ei = Po = Kn = null), (il = !1), e)
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
        return Fu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ox = {
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
  function ad(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ox[e.type] : t === "textarea";
  }
  function ld(e, t, n, a) {
    (ll ? (sl ? sl.push(a) : (sl = [a])) : (ll = a),
      (t = Ki(t, "onChange")),
      0 < t.length &&
        ((n = new ai("onChange", "change", null, n, a)),
        e.push({ event: n, listeners: t })));
  }
  var ls = null,
    ss = null;
  function rx(e) {
    qm(e, 0);
  }
  function si(e) {
    var t = Fl(e);
    if (Lu(t)) return e;
  }
  function sd(e, t) {
    if (e === "change") return t;
  }
  var id = !1;
  if (Nn) {
    var ar;
    if (Nn) {
      var lr = "oninput" in document;
      if (!lr) {
        var od = document.createElement("div");
        (od.setAttribute("oninput", "return;"),
          (lr = typeof od.oninput == "function"));
      }
      ar = lr;
    } else ar = !1;
    id = ar && (!document.documentMode || 9 < document.documentMode);
  }
  function rd() {
    ls && (ls.detachEvent("onpropertychange", cd), (ss = ls = null));
  }
  function cd(e) {
    if (e.propertyName === "value" && si(ss)) {
      var t = [];
      (ld(t, ss, e, Jo(e)), Zu(rx, t));
    }
  }
  function cx(e, t, n) {
    e === "focusin"
      ? (rd(), (ls = t), (ss = n), ls.attachEvent("onpropertychange", cd))
      : e === "focusout" && rd();
  }
  function ux(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return si(ss);
  }
  function dx(e, t) {
    if (e === "click") return si(t);
  }
  function fx(e, t) {
    if (e === "input" || e === "change") return si(t);
  }
  function mx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var zt = typeof Object.is == "function" ? Object.is : mx;
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
      var s = n[a];
      if (!Ct.call(t, s) || !zt(e[s], t[s])) return !1;
    }
    return !0;
  }
  function ud(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function dd(e, t) {
    var n = ud(e);
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
      n = ud(n);
    }
  }
  function fd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function md(e) {
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
  function sr(e) {
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
  var gx = Nn && "documentMode" in document && 11 >= document.documentMode,
    ol = null,
    ir = null,
    os = null,
    or = !1;
  function gd(e, t, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    or ||
      ol == null ||
      ol !== Fs(a) ||
      ((a = ol),
      "selectionStart" in a && sr(a)
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
        (a = Ki(ir, "onSelect")),
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
  var rl = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionrun: Ta("Transition", "TransitionRun"),
      transitionstart: Ta("Transition", "TransitionStart"),
      transitioncancel: Ta("Transition", "TransitionCancel"),
      transitionend: Ta("Transition", "TransitionEnd"),
    },
    rr = {},
    pd = {};
  Nn &&
    ((pd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete rl.animationend.animation,
      delete rl.animationiteration.animation,
      delete rl.animationstart.animation),
    "TransitionEvent" in window || delete rl.transitionend.transition);
  function Oa(e) {
    if (rr[e]) return rr[e];
    if (!rl[e]) return e;
    var t = rl[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in pd) return (rr[e] = t[n]);
    return e;
  }
  var hd = Oa("animationend"),
    xd = Oa("animationiteration"),
    vd = Oa("animationstart"),
    px = Oa("transitionrun"),
    hx = Oa("transitionstart"),
    xx = Oa("transitioncancel"),
    yd = Oa("transitionend"),
    bd = new Map(),
    cr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  cr.push("scrollEnd");
  function It(e, t) {
    (bd.set(e, t), Ea(t, [e]));
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
    cl = 0,
    ur = 0;
  function oi() {
    for (var e = cl, t = (ur = cl = 0); t < e; ) {
      var n = Gt[t];
      Gt[t++] = null;
      var a = Gt[t];
      Gt[t++] = null;
      var s = Gt[t];
      Gt[t++] = null;
      var i = Gt[t];
      if (((Gt[t++] = null), a !== null && s !== null)) {
        var d = a.pending;
        (d === null ? (s.next = s) : ((s.next = d.next), (d.next = s)),
          (a.pending = s));
      }
      i !== 0 && jd(n, s, i);
    }
  }
  function ri(e, t, n, a) {
    ((Gt[cl++] = e),
      (Gt[cl++] = t),
      (Gt[cl++] = n),
      (Gt[cl++] = a),
      (ur |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a));
  }
  function dr(e, t, n, a) {
    return (ri(e, t, n, a), ci(e));
  }
  function Ca(e, t) {
    return (ri(e, null, null, t), ci(e));
  }
  function jd(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, i = e.return; i !== null; )
      ((i.childLanes |= n),
        (a = i.alternate),
        a !== null && (a.childLanes |= n),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (s = !0)),
        (e = i),
        (i = i.return));
    return e.tag === 3
      ? ((i = e.stateNode),
        s &&
          t !== null &&
          ((s = 31 - ut(n)),
          (e = i.hiddenUpdates),
          (a = e[s]),
          a === null ? (e[s] = [t]) : a.push(t),
          (t.lane = n | 536870912)),
        i)
      : null;
  }
  function ci(e) {
    if (50 < Os) throw ((Os = 0), (bc = null), Error(c(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var ul = {};
  function vx(e, t, n, a) {
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
    return new vx(e, t, n, a);
  }
  function fr(e) {
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
  function wd(e, t) {
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
  function ui(e, t, n, a, s, i) {
    var d = 0;
    if (((a = e), typeof e == "function")) fr(e) && (d = 1);
    else if (typeof e == "string")
      d = Nv(e, n, X.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ge:
          return (
            (e = Mt(31, n, t, s)),
            (e.elementType = ge),
            (e.lanes = i),
            e
          );
        case Y:
          return za(n.children, s, i, t);
        case V:
          ((d = 8), (s |= 24));
          break;
        case G:
          return (
            (e = Mt(12, n, t, s | 2)),
            (e.elementType = G),
            (e.lanes = i),
            e
          );
        case ee:
          return (
            (e = Mt(13, n, t, s)),
            (e.elementType = ee),
            (e.lanes = i),
            e
          );
        case se:
          return (
            (e = Mt(19, n, t, s)),
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
            (n = Error(c(130, e === null ? "null" : typeof e, ""))),
            (a = null));
      }
    return (
      (t = Mt(d, n, t, s)),
      (t.elementType = e),
      (t.type = a),
      (t.lanes = i),
      t
    );
  }
  function za(e, t, n, a) {
    return ((e = Mt(7, e, a, t)), (e.lanes = n), e);
  }
  function mr(e, t, n) {
    return ((e = Mt(6, e, null, t)), (e.lanes = n), e);
  }
  function Nd(e) {
    var t = Mt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function gr(e, t, n) {
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
  var Sd = new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Sd.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: Zl(t) }), Sd.set(e, t), t);
    }
    return { value: e, source: t, stack: Zl(t) };
  }
  var dl = [],
    fl = 0,
    di = null,
    rs = 0,
    Xt = [],
    Qt = 0,
    Jn = null,
    cn = 1,
    un = "";
  function An(e, t) {
    ((dl[fl++] = rs), (dl[fl++] = di), (di = e), (rs = t));
  }
  function Ad(e, t, n) {
    ((Xt[Qt++] = cn), (Xt[Qt++] = un), (Xt[Qt++] = Jn), (Jn = e));
    var a = cn;
    e = un;
    var s = 32 - ut(a) - 1;
    ((a &= ~(1 << s)), (n += 1));
    var i = 32 - ut(t) + s;
    if (30 < i) {
      var d = s - (s % 5);
      ((i = (a & ((1 << d) - 1)).toString(32)),
        (a >>= d),
        (s -= d),
        (cn = (1 << (32 - ut(t) + s)) | (n << s) | a),
        (un = i + e));
    } else ((cn = (1 << i) | (n << s) | a), (un = e));
  }
  function pr(e) {
    e.return !== null && (An(e, 1), Ad(e, 1, 0));
  }
  function hr(e) {
    for (; e === di; )
      ((di = dl[--fl]), (dl[fl] = null), (rs = dl[--fl]), (dl[fl] = null));
    for (; e === Jn; )
      ((Jn = Xt[--Qt]),
        (Xt[Qt] = null),
        (un = Xt[--Qt]),
        (Xt[Qt] = null),
        (cn = Xt[--Qt]),
        (Xt[Qt] = null));
  }
  function Ed(e, t) {
    ((Xt[Qt++] = cn),
      (Xt[Qt++] = un),
      (Xt[Qt++] = Jn),
      (cn = t.id),
      (un = t.overflow),
      (Jn = e));
  }
  var it = null,
    Le = null,
    Te = !1,
    Wn = null,
    Zt = !1,
    xr = Error(c(519));
  function $n(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (cs(Vt(t, e)), xr);
  }
  function kd(e) {
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
          Yu(
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
        (Se("invalid", t), Gu(t, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      t.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Qm(t.textContent, n)
        ? (a.popover != null && (Se("beforetoggle", t), Se("toggle", t)),
          a.onScroll != null && Se("scroll", t),
          a.onScrollEnd != null && Se("scrollend", t),
          a.onClick != null && (t.onclick = wn),
          (t = !0))
        : (t = !1),
      t || $n(e, !0));
  }
  function Td(e) {
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
    if (!Te) return (Td(e), (Te = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== "form" && n !== "button") || Bc(e.type, e.memoizedProps))),
        (n = !n)),
      n && Le && $n(e),
      Td(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Le = eg(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(c(317));
      Le = eg(e);
    } else
      t === 27
        ? ((t = Le), ua(e.type) ? ((e = Yc), (Yc = null), (Le = e)) : (Le = t))
        : (Le = it ? Jt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ma() {
    ((Le = it = null), (Te = !1));
  }
  function vr() {
    var e = Wn;
    return (
      e !== null &&
        (kt === null ? (kt = e) : kt.push.apply(kt, e), (Wn = null)),
      e
    );
  }
  function cs(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  var yr = w(null),
    Da = null,
    En = null;
  function Pn(e, t, n) {
    (R(yr, t._currentValue), (t._currentValue = n));
  }
  function kn(e) {
    ((e._currentValue = yr.current), H(yr));
  }
  function br(e, t, n) {
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
  function jr(e, t, n, a) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var i = s.dependencies;
      if (i !== null) {
        var d = s.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var g = i;
          i = s;
          for (var b = 0; b < t.length; b++)
            if (g.context === t[b]) {
              ((i.lanes |= n),
                (g = i.alternate),
                g !== null && (g.lanes |= n),
                br(i.return, n, e),
                a || (d = null));
              break e;
            }
          i = g.next;
        }
      } else if (s.tag === 18) {
        if (((d = s.return), d === null)) throw Error(c(341));
        ((d.lanes |= n),
          (i = d.alternate),
          i !== null && (i.lanes |= n),
          br(d, n, e),
          (d = null));
      } else d = s.child;
      if (d !== null) d.return = s;
      else
        for (d = s; d !== null; ) {
          if (d === e) {
            d = null;
            break;
          }
          if (((s = d.sibling), s !== null)) {
            ((s.return = d.return), (d = s));
            break;
          }
          d = d.return;
        }
      s = d;
    }
  }
  function gl(e, t, n, a) {
    e = null;
    for (var s = t, i = !1; s !== null; ) {
      if (!i) {
        if ((s.flags & 524288) !== 0) i = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var d = s.alternate;
        if (d === null) throw Error(c(387));
        if (((d = d.memoizedProps), d !== null)) {
          var g = s.type;
          zt(s.pendingProps.value, d.value) ||
            (e !== null ? e.push(g) : (e = [g]));
        }
      } else if (s === ae.current) {
        if (((d = s.alternate), d === null)) throw Error(c(387));
        d.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (e !== null ? e.push(Rs) : (e = [Rs]));
      }
      s = s.return;
    }
    (e !== null && jr(t, e, n, a), (t.flags |= 262144));
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
    return Od(Da, e);
  }
  function mi(e, t) {
    return (Da === null && _a(e), Od(e, t));
  }
  function Od(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), En === null)) {
      if (e === null) throw Error(c(308));
      ((En = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else En = En.next = t;
    return n;
  }
  var yx =
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
    bx = l.unstable_scheduleCallback,
    jx = l.unstable_NormalPriority,
    Je = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function wr() {
    return { controller: new yx(), data: new Map(), refCount: 0 };
  }
  function us(e) {
    (e.refCount--,
      e.refCount === 0 &&
        bx(jx, function () {
          e.controller.abort();
        }));
  }
  var ds = null,
    Nr = 0,
    pl = 0,
    hl = null;
  function wx(e, t) {
    if (ds === null) {
      var n = (ds = []);
      ((Nr = 0),
        (pl = Ec()),
        (hl = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (Nr++, t.then(Cd, Cd), t);
  }
  function Cd() {
    if (--Nr === 0 && ds !== null) {
      hl !== null && (hl.status = "fulfilled");
      var e = ds;
      ((ds = null), (pl = 0), (hl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Nx(e, t) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          n.push(s);
        },
      };
    return (
      e.then(
        function () {
          ((a.status = "fulfilled"), (a.value = t));
          for (var s = 0; s < n.length; s++) (0, n[s])(t);
        },
        function (s) {
          for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
            (0, n[s])(void 0);
        }
      ),
      a
    );
  }
  var zd = S.S;
  S.S = function (e, t) {
    ((pm = ht()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        wx(e, t),
      zd !== null && zd(e, t));
  };
  var Ba = w(null);
  function Sr() {
    var e = Ba.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function gi(e, t) {
    t === null ? R(Ba, Ba.current) : R(Ba, t.pool);
  }
  function Md() {
    var e = Sr();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var xl = Error(c(460)),
    Ar = Error(c(474)),
    pi = Error(c(542)),
    hi = { then: function () {} };
  function Dd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function _d(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(wn, wn), (t = n)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Rd(e), e);
      default:
        if (typeof t.status == "string") t.then(wn, wn);
        else {
          if (((e = Ue), e !== null && 100 < e.shellSuspendCounter))
            throw Error(c(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "fulfilled"), (s.value = a));
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var s = t;
                  ((s.status = "rejected"), (s.reason = a));
                }
              }
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Rd(e), e);
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
  function Bd() {
    if (Ha === null) throw Error(c(459));
    var e = Ha;
    return ((Ha = null), e);
  }
  function Rd(e) {
    if (e === xl || e === pi) throw Error(c(483));
  }
  var vl = null,
    fs = 0;
  function xi(e) {
    var t = fs;
    return ((fs += 1), vl === null && (vl = []), _d(vl, e, t));
  }
  function ms(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function vi(e, t) {
    throw t.$$typeof === E
      ? Error(c(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          c(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function Hd(e) {
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
    function s(A, N) {
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
        ? ((N = mr(k, A.mode, L)), (N.return = A), N)
        : ((N = s(N, k)), (N.return = A), N);
    }
    function b(A, N, k, L) {
      var re = k.type;
      return re === Y
        ? B(A, N, k.props.children, L, k.key)
        : N !== null &&
            (N.elementType === re ||
              (typeof re == "object" &&
                re !== null &&
                re.$$typeof === Z &&
                Ra(re) === N.type))
          ? ((N = s(N, k.props)), ms(N, k), (N.return = A), N)
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
        ? ((N = gr(k, A.mode, L)), (N.return = A), N)
        : ((N = s(N, k.children || [])), (N.return = A), N);
    }
    function B(A, N, k, L, re) {
      return N === null || N.tag !== 7
        ? ((N = za(k, A.mode, L, re)), (N.return = A), N)
        : ((N = s(N, k)), (N.return = A), N);
    }
    function q(A, N, k) {
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ((N = mr("" + N, A.mode, k)), (N.return = A), N);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case z:
            return (
              (k = ui(N.type, N.key, N.props, null, A.mode, k)),
              ms(k, N),
              (k.return = A),
              k
            );
          case M:
            return ((N = gr(N, A.mode, k)), (N.return = A), N);
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
    function C(A, N, k, L) {
      var re = N !== null ? N.key : null;
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return re !== null ? null : g(A, N, "" + k, L);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case z:
            return k.key === re ? b(A, N, k, L) : null;
          case M:
            return k.key === re ? T(A, N, k, L) : null;
          case Z:
            return ((k = Ra(k)), C(A, N, k, L));
        }
        if (je(k) || he(k)) return re !== null ? null : B(A, N, k, L, null);
        if (typeof k.then == "function") return C(A, N, xi(k), L);
        if (k.$$typeof === J) return C(A, N, mi(A, k), L);
        vi(A, k);
      }
      return null;
    }
    function _(A, N, k, L, re) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((A = A.get(k) || null), g(N, A, "" + L, re));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case z:
            return (
              (A = A.get(L.key === null ? k : L.key) || null),
              b(N, A, L, re)
            );
          case M:
            return (
              (A = A.get(L.key === null ? k : L.key) || null),
              T(N, A, L, re)
            );
          case Z:
            return ((L = Ra(L)), _(A, N, k, L, re));
        }
        if (je(L) || he(L))
          return ((A = A.get(k) || null), B(N, A, L, re, null));
        if (typeof L.then == "function") return _(A, N, k, xi(L), re);
        if (L.$$typeof === J) return _(A, N, k, mi(N, L), re);
        vi(N, L);
      }
      return null;
    }
    function F(A, N, k, L) {
      for (
        var re = null, Ce = null, le = N, ve = (N = 0), Ee = null;
        le !== null && ve < k.length;
        ve++
      ) {
        le.index > ve ? ((Ee = le), (le = null)) : (Ee = le.sibling);
        var ze = C(A, le, k[ve], L);
        if (ze === null) {
          le === null && (le = Ee);
          break;
        }
        (e && le && ze.alternate === null && t(A, le),
          (N = i(ze, N, ve)),
          Ce === null ? (re = ze) : (Ce.sibling = ze),
          (Ce = ze),
          (le = Ee));
      }
      if (ve === k.length) return (n(A, le), Te && An(A, ve), re);
      if (le === null) {
        for (; ve < k.length; ve++)
          ((le = q(A, k[ve], L)),
            le !== null &&
              ((N = i(le, N, ve)),
              Ce === null ? (re = le) : (Ce.sibling = le),
              (Ce = le)));
        return (Te && An(A, ve), re);
      }
      for (le = a(le); ve < k.length; ve++)
        ((Ee = _(le, A, ve, k[ve], L)),
          Ee !== null &&
            (e &&
              Ee.alternate !== null &&
              le.delete(Ee.key === null ? ve : Ee.key),
            (N = i(Ee, N, ve)),
            Ce === null ? (re = Ee) : (Ce.sibling = Ee),
            (Ce = Ee)));
      return (
        e &&
          le.forEach(function (pa) {
            return t(A, pa);
          }),
        Te && An(A, ve),
        re
      );
    }
    function ue(A, N, k, L) {
      if (k == null) throw Error(c(151));
      for (
        var re = null,
          Ce = null,
          le = N,
          ve = (N = 0),
          Ee = null,
          ze = k.next();
        le !== null && !ze.done;
        ve++, ze = k.next()
      ) {
        le.index > ve ? ((Ee = le), (le = null)) : (Ee = le.sibling);
        var pa = C(A, le, ze.value, L);
        if (pa === null) {
          le === null && (le = Ee);
          break;
        }
        (e && le && pa.alternate === null && t(A, le),
          (N = i(pa, N, ve)),
          Ce === null ? (re = pa) : (Ce.sibling = pa),
          (Ce = pa),
          (le = Ee));
      }
      if (ze.done) return (n(A, le), Te && An(A, ve), re);
      if (le === null) {
        for (; !ze.done; ve++, ze = k.next())
          ((ze = q(A, ze.value, L)),
            ze !== null &&
              ((N = i(ze, N, ve)),
              Ce === null ? (re = ze) : (Ce.sibling = ze),
              (Ce = ze)));
        return (Te && An(A, ve), re);
      }
      for (le = a(le); !ze.done; ve++, ze = k.next())
        ((ze = _(le, A, ve, ze.value, L)),
          ze !== null &&
            (e &&
              ze.alternate !== null &&
              le.delete(ze.key === null ? ve : ze.key),
            (N = i(ze, N, ve)),
            Ce === null ? (re = ze) : (Ce.sibling = ze),
            (Ce = ze)));
      return (
        e &&
          le.forEach(function (_v) {
            return t(A, _v);
          }),
        Te && An(A, ve),
        re
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
          case z:
            e: {
              for (var re = k.key; N !== null; ) {
                if (N.key === re) {
                  if (((re = k.type), re === Y)) {
                    if (N.tag === 7) {
                      (n(A, N.sibling),
                        (L = s(N, k.props.children)),
                        (L.return = A),
                        (A = L));
                      break e;
                    }
                  } else if (
                    N.elementType === re ||
                    (typeof re == "object" &&
                      re !== null &&
                      re.$$typeof === Z &&
                      Ra(re) === N.type)
                  ) {
                    (n(A, N.sibling),
                      (L = s(N, k.props)),
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
              for (re = k.key; N !== null; ) {
                if (N.key === re)
                  if (
                    N.tag === 4 &&
                    N.stateNode.containerInfo === k.containerInfo &&
                    N.stateNode.implementation === k.implementation
                  ) {
                    (n(A, N.sibling),
                      (L = s(N, k.children || [])),
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
              ((L = gr(k, A.mode, L)), (L.return = A), (A = L));
            }
            return d(A);
          case Z:
            return ((k = Ra(k)), He(A, N, k, L));
        }
        if (je(k)) return F(A, N, k, L);
        if (he(k)) {
          if (((re = he(k)), typeof re != "function")) throw Error(c(150));
          return ((k = re.call(k)), ue(A, N, k, L));
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
            ? (n(A, N.sibling), (L = s(N, k)), (L.return = A), (A = L))
            : (n(A, N), (L = mr(k, A.mode, L)), (L.return = A), (A = L)),
          d(A))
        : n(A, N);
    }
    return function (A, N, k, L) {
      try {
        fs = 0;
        var re = He(A, N, k, L);
        return ((vl = null), re);
      } catch (le) {
        if (le === xl || le === pi) throw le;
        var Ce = Mt(29, le, null, A.mode);
        return ((Ce.lanes = L), (Ce.return = A), Ce);
      } finally {
      }
    };
  }
  var Ua = Hd(!0),
    Ud = Hd(!1),
    Fn = !1;
  function Er(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function kr(e, t) {
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
      var s = a.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (a.pending = t),
        (t = ci(e)),
        jd(e, null, n),
        t
      );
    }
    return (ri(e, a, t, n), ci(e));
  }
  function gs(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var a = t.lanes;
      ((a &= e.pendingLanes), (n |= a), (t.lanes = n), bt(e, n));
    }
  }
  function Tr(e, t) {
    var n = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var s = null,
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
          (i === null ? (s = i = d) : (i = i.next = d), (n = n.next));
        } while (n !== null);
        i === null ? (s = i = t) : (i = i.next = t);
      } else s = i = t;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
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
  var Or = !1;
  function ps() {
    if (Or) {
      var e = hl;
      if (e !== null) throw e;
    }
  }
  function hs(e, t, n, a) {
    Or = !1;
    var s = e.updateQueue;
    Fn = !1;
    var i = s.firstBaseUpdate,
      d = s.lastBaseUpdate,
      g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
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
      var q = s.baseState;
      ((d = 0), (B = T = b = null), (g = i));
      do {
        var C = g.lane & -536870913,
          _ = C !== g.lane;
        if (_ ? (Ae & C) === C : (a & C) === C) {
          (C !== 0 && C === pl && (Or = !0),
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
            C = t;
            var He = n;
            switch (ue.tag) {
              case 1:
                if (((F = ue.payload), typeof F == "function")) {
                  q = F.call(He, q, C);
                  break e;
                }
                q = F;
                break e;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = ue.payload),
                  (C = typeof F == "function" ? F.call(He, q, C) : F),
                  C == null)
                )
                  break e;
                q = p({}, q, C);
                break e;
              case 2:
                Fn = !0;
            }
          }
          ((C = g.callback),
            C !== null &&
              ((e.flags |= 64),
              _ && (e.flags |= 8192),
              (_ = s.callbacks),
              _ === null ? (s.callbacks = [C]) : _.push(C)));
        } else
          ((_ = {
            lane: C,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            B === null ? ((T = B = _), (b = q)) : (B = B.next = _),
            (d |= C));
        if (((g = g.next), g === null)) {
          if (((g = s.shared.pending), g === null)) break;
          ((_ = g),
            (g = _.next),
            (_.next = null),
            (s.lastBaseUpdate = _),
            (s.shared.pending = null));
        }
      } while (!0);
      (B === null && (b = q),
        (s.baseState = b),
        (s.firstBaseUpdate = T),
        (s.lastBaseUpdate = B),
        i === null && (s.shared.lanes = 0),
        (sa |= d),
        (e.lanes = d),
        (e.memoizedState = q));
    }
  }
  function Ld(e, t) {
    if (typeof e != "function") throw Error(c(191, e));
    e.call(t);
  }
  function Yd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Ld(n[e], t);
  }
  var yl = w(null),
    yi = w(0);
  function qd(e, t) {
    ((e = Rn), R(yi, e), R(yl, t), (Rn = e | t.baseLanes));
  }
  function Cr() {
    (R(yi, Rn), R(yl, yl.current));
  }
  function zr() {
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
  function Mr(e) {
    (R(Ze, Ze.current), R(Dt, e), Kt === null && (Kt = e));
  }
  function Gd(e) {
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
        if (n !== null && ((n = n.dehydrated), n === null || Uc(n) || Lc(n)))
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
    Sx = 0;
  function Xe() {
    throw Error(c(321));
  }
  function Dr(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!zt(e[n], t[n])) return !1;
    return !0;
  }
  function _r(e, t, n, a, s, i) {
    return (
      (Tn = i),
      (pe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = e === null || e.memoizedState === null ? Ef : Wr),
      (La = !1),
      (i = n(a, s)),
      (La = !1),
      bl && (i = Xd(t, n, a, s)),
      Vd(e),
      i
    );
  }
  function Vd(e) {
    S.H = bs;
    var t = Be !== null && Be.next !== null;
    if (((Tn = 0), (We = Be = pe = null), (ji = !1), (xs = 0), (jl = null), t))
      throw Error(c(300));
    e === null ||
      $e ||
      ((e = e.dependencies), e !== null && fi(e) && ($e = !0));
  }
  function Xd(e, t, n, a) {
    pe = e;
    var s = 0;
    do {
      if ((bl && (jl = null), (xs = 0), (bl = !1), 25 <= s))
        throw Error(c(301));
      if (((s += 1), (We = Be = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        ((i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0));
      }
      ((S.H = kf), (i = t(n, a)));
    } while (bl);
    return i;
  }
  function Ax() {
    var e = S.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? vs(t) : t),
      (e = e.useState()[0]),
      (Be !== null ? Be.memoizedState : null) !== e && (pe.flags |= 1024),
      t
    );
  }
  function Br() {
    var e = wi !== 0;
    return ((wi = 0), e);
  }
  function Rr(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Hr(e) {
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
        throw pe.alternate === null ? Error(c(467)) : Error(c(310));
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
      (e = _d(jl, e, t)),
      (t = pe),
      (We === null ? t.memoizedState : We.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? Ef : Wr)),
      e
    );
  }
  function Si(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return vs(e);
      if (e.$$typeof === J) return ot(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ur(e) {
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
              data: a.data.map(function (s) {
                return s.slice();
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
    return Lr(t, Be, e);
  }
  function Lr(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var s = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (s !== null) {
        var d = s.next;
        ((s.next = i.next), (i.next = d));
      }
      ((t.baseQueue = s = i), (a.pending = null));
    }
    if (((i = e.baseState), s === null)) e.memoizedState = i;
    else {
      t = s.next;
      var g = (d = null),
        b = null,
        T = t,
        B = !1;
      do {
        var q = T.lane & -536870913;
        if (q !== T.lane ? (Ae & q) === q : (Tn & q) === q) {
          var C = T.revertLane;
          if (C === 0)
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
          else if ((Tn & C) === C) {
            ((T = T.next), C === pl && (B = !0));
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
              (pe.lanes |= C),
              (sa |= C));
          ((q = T.action),
            La && n(i, q),
            (i = T.hasEagerState ? T.eagerState : n(i, q)));
        } else
          ((C = {
            lane: q,
            revertLane: T.revertLane,
            gesture: T.gesture,
            action: T.action,
            hasEagerState: T.hasEagerState,
            eagerState: T.eagerState,
            next: null,
          }),
            b === null ? ((g = b = C), (d = i)) : (b = b.next = C),
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
    return (s === null && (a.lanes = 0), [e.memoizedState, a.dispatch]);
  }
  function Yr(e) {
    var t = Ke(),
      n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch,
      s = n.pending,
      i = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var d = (s = s.next);
      do ((i = e(i, d.action)), (d = d.next));
      while (d !== s);
      (zt(i, t.memoizedState) || ($e = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i));
    }
    return [i, a];
  }
  function Qd(e, t, n) {
    var a = pe,
      s = Ke(),
      i = Te;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var d = !zt((Be || s).memoizedState, n);
    if (
      (d && ((s.memoizedState = n), ($e = !0)),
      (s = s.queue),
      Vr(Jd.bind(null, a, s, e), [e]),
      s.getSnapshot !== t || d || (We !== null && We.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        wl(9, { destroy: void 0 }, Kd.bind(null, a, s, n, t), null),
        Ue === null)
      )
        throw Error(c(349));
      i || (Tn & 127) !== 0 || Zd(a, t, n);
    }
    return n;
  }
  function Zd(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = pe.updateQueue),
      t === null
        ? ((t = Ni()), (pe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Kd(e, t, n, a) {
    ((t.value = n), (t.getSnapshot = a), Wd(t) && $d(e));
  }
  function Jd(e, t, n) {
    return n(function () {
      Wd(t) && $d(e);
    });
  }
  function Wd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !zt(e, n);
    } catch {
      return !0;
    }
  }
  function $d(e) {
    var t = Ca(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function qr(e) {
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
  function Pd(e, t, n, a) {
    return ((e.baseState = n), Lr(e, Be, typeof a == "function" ? a : On));
  }
  function Ex(e, t, n, a, s) {
    if (Ti(e)) throw Error(c(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: s,
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
          ? ((i.next = t.pending = i), Fd(t, i))
          : ((i.next = n.next), (t.pending = n.next = i)));
    }
  }
  function Fd(e, t) {
    var n = t.action,
      a = t.payload,
      s = e.state;
    if (t.isTransition) {
      var i = S.T,
        d = {};
      S.T = d;
      try {
        var g = n(s, a),
          b = S.S;
        (b !== null && b(d, g), Id(e, t, g));
      } catch (T) {
        Gr(e, t, T);
      } finally {
        (i !== null && d.types !== null && (i.types = d.types), (S.T = i));
      }
    } else
      try {
        ((i = n(s, a)), Id(e, t, i));
      } catch (T) {
        Gr(e, t, T);
      }
  }
  function Id(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            ef(e, t, a);
          },
          function (a) {
            return Gr(e, t, a);
          }
        )
      : ef(e, t, n);
  }
  function ef(e, t, n) {
    ((t.status = "fulfilled"),
      (t.value = n),
      tf(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Fd(e, n))));
  }
  function Gr(e, t, n) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do ((t.status = "rejected"), (t.reason = n), tf(t), (t = t.next));
      while (t !== a);
    }
    e.action = null;
  }
  function tf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function nf(e, t) {
    return t;
  }
  function af(e, t) {
    if (Te) {
      var n = Ue.formState;
      if (n !== null) {
        e: {
          var a = pe;
          if (Te) {
            if (Le) {
              t: {
                for (var s = Le, i = Zt; s.nodeType !== 8; ) {
                  if (!i) {
                    s = null;
                    break t;
                  }
                  if (((s = Jt(s.nextSibling)), s === null)) {
                    s = null;
                    break t;
                  }
                }
                ((i = s.data), (s = i === "F!" || i === "F" ? s : null));
              }
              if (s) {
                ((Le = Jt(s.nextSibling)), (a = s.data === "F!"));
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
        lastRenderedReducer: nf,
        lastRenderedState: t,
      }),
      (n.queue = a),
      (n = Nf.bind(null, pe, a)),
      (a.dispatch = n),
      (a = qr(!1)),
      (i = Jr.bind(null, pe, !1, a.queue)),
      (a = vt()),
      (s = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = s),
      (n = Ex.bind(null, pe, s, i, n)),
      (s.dispatch = n),
      (a.memoizedState = e),
      [t, n, !1]
    );
  }
  function lf(e) {
    var t = Ke();
    return sf(t, Be, e);
  }
  function sf(e, t, n) {
    if (
      ((t = Lr(e, t, nf)[0]),
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
    var s = t.queue,
      i = s.dispatch;
    return (
      n !== t.memoizedState &&
        ((pe.flags |= 2048),
        wl(9, { destroy: void 0 }, kx.bind(null, s, n), null)),
      [a, i, e]
    );
  }
  function kx(e, t) {
    e.action = t;
  }
  function of(e) {
    var t = Ke(),
      n = Be;
    if (n !== null) return sf(t, n, e);
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
  function rf() {
    return Ke().memoizedState;
  }
  function Ei(e, t, n, a) {
    var s = vt();
    ((pe.flags |= e),
      (s.memoizedState = wl(
        1 | t,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a
      )));
  }
  function ki(e, t, n, a) {
    var s = Ke();
    a = a === void 0 ? null : a;
    var i = s.memoizedState.inst;
    Be !== null && a !== null && Dr(a, Be.memoizedState.deps)
      ? (s.memoizedState = wl(t, i, n, a))
      : ((pe.flags |= e), (s.memoizedState = wl(1 | t, i, n, a)));
  }
  function cf(e, t) {
    Ei(8390656, 8, e, t);
  }
  function Vr(e, t) {
    ki(2048, 8, e, t);
  }
  function Tx(e) {
    pe.flags |= 4;
    var t = pe.updateQueue;
    if (t === null) ((t = Ni()), (pe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function uf(e) {
    var t = Ke().memoizedState;
    return (
      Tx({ ref: t, nextImpl: e }),
      function () {
        if ((Me & 2) !== 0) throw Error(c(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function df(e, t) {
    return ki(4, 2, e, t);
  }
  function ff(e, t) {
    return ki(4, 4, e, t);
  }
  function mf(e, t) {
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
  function gf(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), ki(4, 4, mf.bind(null, t, e), n));
  }
  function Xr() {}
  function pf(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Dr(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
  }
  function hf(e, t) {
    var n = Ke();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Dr(t, a[1])) return a[0];
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
  function Qr(e, t, n) {
    return n === void 0 || ((Tn & 1073741824) !== 0 && (Ae & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = xm()), (pe.lanes |= e), (sa |= e), n);
  }
  function xf(e, t, n, a) {
    return zt(n, t)
      ? n
      : yl.current !== null
        ? ((e = Qr(e, n, a)), zt(e, t) || ($e = !0), e)
        : (Tn & 42) === 0 || ((Tn & 1073741824) !== 0 && (Ae & 261930) === 0)
          ? (($e = !0), (e.memoizedState = n))
          : ((e = xm()), (pe.lanes |= e), (sa |= e), t);
  }
  function vf(e, t, n, a, s) {
    var i = U.p;
    U.p = i !== 0 && 8 > i ? i : 8;
    var d = S.T,
      g = {};
    ((S.T = g), Jr(e, !1, t, n));
    try {
      var b = s(),
        T = S.S;
      if (
        (T !== null && T(g, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var B = Nx(b, a);
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
  function Ox() {}
  function Zr(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var s = yf(e).queue;
    vf(
      e,
      s,
      t,
      D,
      n === null
        ? Ox
        : function () {
            return (bf(e), n(a));
          }
    );
  }
  function yf(e) {
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
  function bf(e) {
    var t = yf(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ys(e, t.next.queue, {}, Ht()));
  }
  function Kr() {
    return ot(Rs);
  }
  function jf() {
    return Ke().memoizedState;
  }
  function wf() {
    return Ke().memoizedState;
  }
  function Cx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ht();
          e = In(n);
          var a = ea(t, e, n);
          (a !== null && (Tt(a, t, n), gs(a, t, n)),
            (t = { cache: wr() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function zx(e, t, n) {
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
        ? Sf(t, n)
        : ((n = dr(e, t, n, a)), n !== null && (Tt(n, e, a), Af(n, t, a))));
  }
  function Nf(e, t, n) {
    var a = Ht();
    ys(e, t, n, a);
  }
  function ys(e, t, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ti(e)) Sf(t, s);
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
          if (((s.hasEagerState = !0), (s.eagerState = g), zt(g, d)))
            return (ri(e, t, s, 0), Ue === null && oi(), !1);
        } catch {
        } finally {
        }
      if (((n = dr(e, t, s, a)), n !== null))
        return (Tt(n, e, a), Af(n, t, a), !0);
    }
    return !1;
  }
  function Jr(e, t, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Ec(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ti(e))
    ) {
      if (t) throw Error(c(479));
    } else ((t = dr(e, n, a, 2)), t !== null && Tt(t, e, 2));
  }
  function Ti(e) {
    var t = e.alternate;
    return e === pe || (t !== null && t === pe);
  }
  function Sf(e, t) {
    bl = ji = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Af(e, t, n) {
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
  var Ef = {
      readContext: ot,
      use: Si,
      useCallback: function (e, t) {
        return ((vt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: ot,
      useEffect: cf,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Ei(4194308, 4, mf.bind(null, t, e), n));
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
          var s = n(t);
          if (La) {
            Pt(!0);
            try {
              n(t);
            } finally {
              Pt(!1);
            }
          }
        } else s = t;
        return (
          (a.memoizedState = a.baseState = s),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: s,
          }),
          (a.queue = e),
          (e = e.dispatch = zx.bind(null, pe, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = vt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = qr(e);
        var t = e.queue,
          n = Nf.bind(null, pe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Xr,
      useDeferredValue: function (e, t) {
        var n = vt();
        return Qr(n, e, t);
      },
      useTransition: function () {
        var e = qr(!1);
        return (
          (e = vf.bind(null, pe, e.queue, !0, !1)),
          (vt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var a = pe,
          s = vt();
        if (Te) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = t()), Ue === null)) throw Error(c(349));
          (Ae & 127) !== 0 || Zd(a, t, n);
        }
        s.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (s.queue = i),
          cf(Jd.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          wl(9, { destroy: void 0 }, Kd.bind(null, a, i, n, t), null),
          n
        );
      },
      useId: function () {
        var e = vt(),
          t = Ue.identifierPrefix;
        if (Te) {
          var n = un,
            a = cn;
          ((n = (a & ~(1 << (32 - ut(a) - 1))).toString(32) + n),
            (t = "_" + t + "R_" + n),
            (n = wi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += "_"));
        } else ((n = Sx++), (t = "_" + t + "r_" + n.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Kr,
      useFormState: af,
      useActionState: af,
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
          (t = Jr.bind(null, pe, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Ur,
      useCacheRefresh: function () {
        return (vt().memoizedState = Cx.bind(null, pe));
      },
      useEffectEvent: function (e) {
        var t = vt(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Me & 2) !== 0) throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Wr = {
      readContext: ot,
      use: Si,
      useCallback: pf,
      useContext: ot,
      useEffect: Vr,
      useImperativeHandle: gf,
      useInsertionEffect: df,
      useLayoutEffect: ff,
      useMemo: hf,
      useReducer: Ai,
      useRef: rf,
      useState: function () {
        return Ai(On);
      },
      useDebugValue: Xr,
      useDeferredValue: function (e, t) {
        var n = Ke();
        return xf(n, Be.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ai(On)[0],
          t = Ke().memoizedState;
        return [typeof e == "boolean" ? e : vs(e), t];
      },
      useSyncExternalStore: Qd,
      useId: jf,
      useHostTransitionStatus: Kr,
      useFormState: lf,
      useActionState: lf,
      useOptimistic: function (e, t) {
        var n = Ke();
        return Pd(n, Be, e, t);
      },
      useMemoCache: Ur,
      useCacheRefresh: wf,
    };
  Wr.useEffectEvent = uf;
  var kf = {
    readContext: ot,
    use: Si,
    useCallback: pf,
    useContext: ot,
    useEffect: Vr,
    useImperativeHandle: gf,
    useInsertionEffect: df,
    useLayoutEffect: ff,
    useMemo: hf,
    useReducer: Yr,
    useRef: rf,
    useState: function () {
      return Yr(On);
    },
    useDebugValue: Xr,
    useDeferredValue: function (e, t) {
      var n = Ke();
      return Be === null ? Qr(n, e, t) : xf(n, Be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Yr(On)[0],
        t = Ke().memoizedState;
      return [typeof e == "boolean" ? e : vs(e), t];
    },
    useSyncExternalStore: Qd,
    useId: jf,
    useHostTransitionStatus: Kr,
    useFormState: of,
    useActionState: of,
    useOptimistic: function (e, t) {
      var n = Ke();
      return Be !== null
        ? Pd(n, Be, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Ur,
    useCacheRefresh: wf,
  };
  kf.useEffectEvent = uf;
  function $r(e, t, n, a) {
    ((t = e.memoizedState),
      (n = n(a, t)),
      (n = n == null ? t : p({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Pr = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ht(),
        s = In(a);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = ea(e, s, a)),
        t !== null && (Tt(t, e, a), gs(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var a = Ht(),
        s = In(a);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = ea(e, s, a)),
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
  function Tf(e, t, n, a, s, i, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, d)
        : t.prototype && t.prototype.isPureReactComponent
          ? !is(n, a) || !is(s, i)
          : !0
    );
  }
  function Of(e, t, n, a) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, a),
      t.state !== e && Pr.enqueueReplaceState(t, t.state, null));
  }
  function Ya(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t) a !== "ref" && (n[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = p({}, n));
      for (var s in e) n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function Cf(e) {
    ii(e);
  }
  function zf(e) {
    console.error(e);
  }
  function Mf(e) {
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
  function Df(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Fr(e, t, n) {
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
  function _f(e) {
    return ((e = In(e)), (e.tag = 3), e);
  }
  function Bf(e, t, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var i = a.value;
      ((e.payload = function () {
        return s(i);
      }),
        (e.callback = function () {
          Df(t, n, a);
        }));
    }
    var d = n.stateNode;
    d !== null &&
      typeof d.componentDidCatch == "function" &&
      (e.callback = function () {
        (Df(t, n, a),
          typeof s != "function" &&
            (ia === null ? (ia = new Set([this])) : ia.add(this)));
        var g = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Mx(e, t, n, a, s) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = n.alternate),
        t !== null && gl(t, n, s, !0),
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
              (n.lanes = s),
              a === hi
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([a])) : t.add(a),
                  Nc(e, a, s)),
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
                  Nc(e, a, s)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return (Nc(e, a, s), qi(), !1);
    }
    if (Te)
      return (
        (t = Dt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = s),
            a !== xr && ((e = Error(c(422), { cause: a })), cs(Vt(e, n))))
          : (a !== xr && ((t = Error(c(423), { cause: a })), cs(Vt(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (s &= -s),
            (e.lanes |= s),
            (a = Vt(a, n)),
            (s = Fr(e.stateNode, a, s)),
            Tr(e, s),
            Qe !== 4 && (Qe = 2)),
        !1
      );
    var i = Error(c(520), { cause: a });
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
            (e = s & -s),
            (n.lanes |= e),
            (e = Fr(n.stateNode, a, e)),
            Tr(n, e),
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
              (s &= -s),
              (n.lanes |= s),
              (s = _f(s)),
              Bf(s, e, n, a),
              Tr(n, s),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ir = Error(c(461)),
    $e = !1;
  function rt(e, t, n, a) {
    t.child = e === null ? Ud(t, null, n, a) : Ua(t, e.child, n, a);
  }
  function Rf(e, t, n, a, s) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var d = {};
      for (var g in a) g !== "ref" && (d[g] = a[g]);
    } else d = a;
    return (
      _a(t),
      (a = _r(e, t, n, d, i, s)),
      (g = Br()),
      e !== null && !$e
        ? (Rr(e, t, s), Cn(e, t, s))
        : (Te && g && pr(t), (t.flags |= 1), rt(e, t, a, s), t.child)
    );
  }
  function Hf(e, t, n, a, s) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !fr(i) &&
        i.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = i), Uf(e, t, i, a, s))
        : ((e = ui(n.type, null, a, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !oc(e, s))) {
      var d = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : is), n(d, a) && e.ref === t.ref)
      )
        return Cn(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = Sn(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Uf(e, t, n, a, s) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (is(i, a) && e.ref === t.ref)
        if ((($e = !1), (t.pendingProps = a = i), oc(e, s)))
          (e.flags & 131072) !== 0 && ($e = !0);
        else return ((t.lanes = e.lanes), Cn(e, t, s));
    }
    return ec(e, t, n, a, s);
  }
  function Lf(e, t, n, a) {
    var s = a.children,
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
          for (a = t.child = e.child, s = 0; a !== null; )
            ((s = s | a.lanes | a.childLanes), (a = a.sibling));
          a = s & ~i;
        } else ((a = 0), (t.child = null));
        return Yf(e, t, i, n, a);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && gi(t, i !== null ? i.cachePool : null),
          i !== null ? qd(t, i) : Cr(),
          Gd(t));
      else
        return (
          (a = t.lanes = 536870912),
          Yf(e, t, i !== null ? i.baseLanes | n : n, n, a)
        );
    } else
      i !== null
        ? (gi(t, i.cachePool), qd(t, i), na(), (t.memoizedState = null))
        : (e !== null && gi(t, null), Cr(), na());
    return (rt(e, t, s, n), t.child);
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
  function Yf(e, t, n, a, s) {
    var i = Sr();
    return (
      (i = i === null ? null : { parent: Je._currentValue, pool: i }),
      (t.memoizedState = { baseLanes: n, cachePool: i }),
      e !== null && gi(t, null),
      Cr(),
      Gd(t),
      e !== null && gl(e, t, a, !0),
      (t.childLanes = s),
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
  function qf(e, t, n) {
    return (
      Ua(t, e.child, null, n),
      (e = Ci(t, t.pendingProps)),
      (e.flags |= 2),
      _t(t),
      (t.memoizedState = null),
      e
    );
  }
  function Dx(e, t, n) {
    var a = t.pendingProps,
      s = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Te) {
        if (a.mode === "hidden")
          return ((e = Ci(t, a)), (t.lanes = 536870912), js(null, e));
        if (
          (Mr(t),
          (e = Le)
            ? ((e = Im(e, Zt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Jn !== null ? { id: cn, overflow: un } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Nd(e)),
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
      if ((Mr(t), s))
        if (t.flags & 256) ((t.flags &= -257), (t = qf(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(c(558));
      else if (
        ($e || gl(e, t, n, !1), (s = (n & e.childLanes) !== 0), $e || s)
      ) {
        if (
          ((a = Ue),
          a !== null && ((d = jt(a, n)), d !== 0 && d !== i.retryLane))
        )
          throw ((i.retryLane = d), Ca(e, d), Tt(a, e, d), Ir);
        (qi(), (t = qf(e, t, n)));
      } else
        ((e = i.treeContext),
          (Le = Jt(d.nextSibling)),
          (it = t),
          (Te = !0),
          (Wn = null),
          (Zt = !1),
          e !== null && Ed(t, e),
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
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function ec(e, t, n, a, s) {
    return (
      _a(t),
      (n = _r(e, t, n, a, void 0, s)),
      (a = Br()),
      e !== null && !$e
        ? (Rr(e, t, s), Cn(e, t, s))
        : (Te && a && pr(t), (t.flags |= 1), rt(e, t, n, s), t.child)
    );
  }
  function Gf(e, t, n, a, s, i) {
    return (
      _a(t),
      (t.updateQueue = null),
      (n = Xd(t, a, n, s)),
      Vd(e),
      (a = Br()),
      e !== null && !$e
        ? (Rr(e, t, i), Cn(e, t, i))
        : (Te && a && pr(t), (t.flags |= 1), rt(e, t, n, i), t.child)
    );
  }
  function Vf(e, t, n, a, s) {
    if ((_a(t), t.stateNode === null)) {
      var i = ul,
        d = n.contextType;
      (typeof d == "object" && d !== null && (i = ot(d)),
        (i = new n(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Pr),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Er(t),
        (d = n.contextType),
        (i.context = typeof d == "object" && d !== null ? ot(d) : ul),
        (i.state = t.memoizedState),
        (d = n.getDerivedStateFromProps),
        typeof d == "function" && ($r(t, n, d, a), (i.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((d = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          d !== i.state && Pr.enqueueReplaceState(i, i.state, null),
          hs(t, a, i, s),
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
          ((g || T !== d) && Of(t, i, a, d)),
        (Fn = !1));
      var C = t.memoizedState;
      ((i.state = C),
        hs(t, a, i, s),
        ps(),
        (T = t.memoizedState),
        g || C !== T || Fn
          ? (typeof q == "function" && ($r(t, n, q, a), (T = t.memoizedState)),
            (b = Fn || Tf(t, n, b, a, C, T, d))
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
        kr(e, t),
        (d = t.memoizedProps),
        (B = Ya(n, d)),
        (i.props = B),
        (q = t.pendingProps),
        (C = i.context),
        (T = n.contextType),
        (b = ul),
        typeof T == "object" && T !== null && (b = ot(T)),
        (g = n.getDerivedStateFromProps),
        (T =
          typeof g == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((d !== q || C !== b) && Of(t, i, a, b)),
        (Fn = !1),
        (C = t.memoizedState),
        (i.state = C),
        hs(t, a, i, s),
        ps());
      var _ = t.memoizedState;
      d !== q ||
      C !== _ ||
      Fn ||
      (e !== null && e.dependencies !== null && fi(e.dependencies))
        ? (typeof g == "function" && ($r(t, n, g, a), (_ = t.memoizedState)),
          (B =
            Fn ||
            Tf(t, n, B, a, C, _, b) ||
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
                (d === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (d === e.memoizedProps && C === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = _)),
          (i.props = a),
          (i.state = _),
          (i.context = b),
          (a = B))
        : (typeof i.componentDidUpdate != "function" ||
            (d === e.memoizedProps && C === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (d === e.memoizedProps && C === e.memoizedState) ||
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
            ? ((t.child = Ua(t, e.child, null, s)),
              (t.child = Ua(t, null, n, s)))
            : rt(e, t, n, s),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Cn(e, t, s)),
      e
    );
  }
  function Xf(e, t, n, a) {
    return (Ma(), (t.flags |= 256), rt(e, t, n, a), t.child);
  }
  var tc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function nc(e) {
    return { baseLanes: e, cachePool: Md() };
  }
  function ac(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Rt), e);
  }
  function Qf(e, t, n) {
    var a = t.pendingProps,
      s = !1,
      i = (t.flags & 128) !== 0,
      d;
    if (
      ((d = i) ||
        (d =
          e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0),
      d && ((s = !0), (t.flags &= -129)),
      (d = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Te) {
        if (
          (s ? ta(t) : na(),
          (e = Le)
            ? ((e = Im(e, Zt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Jn !== null ? { id: cn, overflow: un } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Nd(e)),
                (n.return = t),
                (t.child = n),
                (it = t),
                (Le = null)))
            : (e = null),
          e === null)
        )
          throw $n(t);
        return (Lc(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var g = a.children;
      return (
        (a = a.fallback),
        s
          ? (na(),
            (s = t.mode),
            (g = Mi({ mode: "hidden", children: g }, s)),
            (a = za(a, s, n, null)),
            (g.return = t),
            (a.return = t),
            (g.sibling = a),
            (t.child = g),
            (a = t.child),
            (a.memoizedState = nc(n)),
            (a.childLanes = ac(e, d, n)),
            (t.memoizedState = tc),
            js(null, a))
          : (ta(t), lc(t, g))
      );
    }
    var b = e.memoizedState;
    if (b !== null && ((g = b.dehydrated), g !== null)) {
      if (i)
        t.flags & 256
          ? (ta(t), (t.flags &= -257), (t = sc(e, t, n)))
          : t.memoizedState !== null
            ? (na(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (na(),
              (g = a.fallback),
              (s = t.mode),
              (a = Mi({ mode: "visible", children: a.children }, s)),
              (g = za(g, s, n, null)),
              (g.flags |= 2),
              (a.return = t),
              (g.return = t),
              (a.sibling = g),
              (t.child = a),
              Ua(t, e.child, null, n),
              (a = t.child),
              (a.memoizedState = nc(n)),
              (a.childLanes = ac(e, d, n)),
              (t.memoizedState = tc),
              (t = js(null, a)));
      else if ((ta(t), Lc(g))) {
        if (((d = g.nextSibling && g.nextSibling.dataset), d)) var T = d.dgst;
        ((d = T),
          (a = Error(c(419))),
          (a.stack = ""),
          (a.digest = d),
          cs({ value: a, source: null, stack: null }),
          (t = sc(e, t, n)));
      } else if (
        ($e || gl(e, t, n, !1), (d = (n & e.childLanes) !== 0), $e || d)
      ) {
        if (
          ((d = Ue),
          d !== null && ((a = jt(d, n)), a !== 0 && a !== b.retryLane))
        )
          throw ((b.retryLane = a), Ca(e, a), Tt(d, e, a), Ir);
        (Uc(g) || qi(), (t = sc(e, t, n)));
      } else
        Uc(g)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = b.treeContext),
            (Le = Jt(g.nextSibling)),
            (it = t),
            (Te = !0),
            (Wn = null),
            (Zt = !1),
            e !== null && Ed(t, e),
            (t = lc(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? (na(),
        (g = a.fallback),
        (s = t.mode),
        (b = e.child),
        (T = b.sibling),
        (a = Sn(b, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = b.subtreeFlags & 65011712),
        T !== null ? (g = Sn(T, g)) : ((g = za(g, s, n, null)), (g.flags |= 2)),
        (g.return = t),
        (a.return = t),
        (a.sibling = g),
        (t.child = a),
        js(null, a),
        (a = t.child),
        (g = e.child.memoizedState),
        g === null
          ? (g = nc(n))
          : ((s = g.cachePool),
            s !== null
              ? ((b = Je._currentValue),
                (s = s.parent !== b ? { parent: b, pool: b } : s))
              : (s = Md()),
            (g = { baseLanes: g.baseLanes | n, cachePool: s })),
        (a.memoizedState = g),
        (a.childLanes = ac(e, d, n)),
        (t.memoizedState = tc),
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
  function lc(e, t) {
    return (
      (t = Mi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mi(e, t) {
    return ((e = Mt(22, e, null, t)), (e.lanes = 0), e);
  }
  function sc(e, t, n) {
    return (
      Ua(t, e.child, null, n),
      (e = lc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Zf(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    (a !== null && (a.lanes |= t), br(e.return, t, n));
  }
  function ic(e, t, n, a, s, i) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: s,
          treeForkCount: i,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = a),
        (d.tail = n),
        (d.tailMode = s),
        (d.treeForkCount = i));
  }
  function Kf(e, t, n) {
    var a = t.pendingProps,
      s = a.revealOrder,
      i = a.tail;
    a = a.children;
    var d = Ze.current,
      g = (d & 2) !== 0;
    if (
      (g ? ((d = (d & 1) | 2), (t.flags |= 128)) : (d &= 1),
      R(Ze, d),
      rt(e, t, a, n),
      (a = Te ? rs : 0),
      !g && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zf(e, n, t);
        else if (e.tag === 19) Zf(e, n, t);
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
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && bi(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          ic(t, !1, s, n, i, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && bi(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        ic(t, !0, n, null, i, a);
        break;
      case "together":
        ic(t, !1, null, null, void 0, a);
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
    if (e !== null && t.child !== e.child) throw Error(c(153));
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
  function oc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && fi(e)));
  }
  function _x(e, t, n) {
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
        if (t.memoizedState !== null) return ((t.flags |= 128), Mr(t), null);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ta(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Qf(e, t, n)
              : (ta(t), (e = Cn(e, t, n)), e !== null ? e.sibling : null);
        ta(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (
          ((a = (n & t.childLanes) !== 0),
          a || (gl(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
          s)
        ) {
          if (a) return Kf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          R(Ze, Ze.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Lf(e, t, n, t.pendingProps));
      case 24:
        Pn(t, Je, e.memoizedState.cache);
    }
    return Cn(e, t, n);
  }
  function Jf(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) $e = !0;
      else {
        if (!oc(e, n) && (t.flags & 128) === 0) return (($e = !1), _x(e, t, n));
        $e = (e.flags & 131072) !== 0;
      }
    else (($e = !1), Te && (t.flags & 1048576) !== 0 && Ad(t, rs, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (((e = Ra(t.elementType)), (t.type = e), typeof e == "function"))
            fr(e)
              ? ((a = Ya(e, a)), (t.tag = 1), (t = Vf(null, t, e, a, n)))
              : ((t.tag = 0), (t = ec(null, t, e, a, n)));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === P) {
                ((t.tag = 11), (t = Rf(null, t, e, a, n)));
                break e;
              } else if (s === Q) {
                ((t.tag = 14), (t = Hf(null, t, e, a, n)));
                break e;
              }
            }
            throw ((t = ye(e) || e), Error(c(306, t, "")));
          }
        }
        return t;
      case 0:
        return ec(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((a = t.type), (s = Ya(a, t.pendingProps)), Vf(e, t, a, s, n));
      case 3:
        e: {
          if ((de(t, t.stateNode.containerInfo), e === null))
            throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          ((s = i.element), kr(e, t), hs(t, a, null, n));
          var d = t.memoizedState;
          if (
            ((a = d.cache),
            Pn(t, Je, a),
            a !== i.cache && jr(t, [Je], n, !0),
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
              t = Xf(e, t, a, n);
              break e;
            } else if (a !== s) {
              ((s = Vt(Error(c(424)), t)), cs(s), (t = Xf(e, t, a, n)));
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
                  n = Ud(t, null, a, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ma(), a === s)) {
              t = Cn(e, t, n);
              break e;
            }
            rt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          zi(e, t),
          e === null
            ? (n = sg(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Te ||
                ((n = t.type),
                (e = t.pendingProps),
                (a = Ji(oe.current).createElement(n)),
                (a[st] = t),
                (a[wt] = e),
                ct(a, n, e),
                tt(a),
                (t.stateNode = a))
            : (t.memoizedState = sg(
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
            ((a = t.stateNode = ng(t.type, t.pendingProps, oe.current)),
            (it = t),
            (Zt = !0),
            (s = Le),
            ua(t.type) ? ((Yc = s), (Le = Jt(a.firstChild))) : (Le = s)),
          rt(e, t, t.pendingProps.children, n),
          zi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Te &&
            ((s = a = Le) &&
              ((a = uv(a, t.type, t.pendingProps, Zt)),
              a !== null
                ? ((t.stateNode = a),
                  (it = t),
                  (Le = Jt(a.firstChild)),
                  (Zt = !1),
                  (s = !0))
                : (s = !1)),
            s || $n(t)),
          at(t),
          (s = t.type),
          (i = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (a = i.children),
          Bc(s, i) ? (a = null) : d !== null && Bc(s, d) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((s = _r(e, t, Ax, null, null, n)), (Rs._currentValue = s)),
          zi(e, t),
          rt(e, t, a, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Te &&
            ((e = n = Le) &&
              ((n = dv(n, t.pendingProps, Zt)),
              n !== null
                ? ((t.stateNode = n), (it = t), (Le = null), (e = !0))
                : (e = !1)),
            e || $n(t)),
          null
        );
      case 13:
        return Qf(e, t, n);
      case 4:
        return (
          de(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ua(t, null, a, n)) : rt(e, t, a, n),
          t.child
        );
      case 11:
        return Rf(e, t, t.type, t.pendingProps, n);
      case 7:
        return (rt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (rt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (rt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (a = t.pendingProps),
          Pn(t, t.type, a.value),
          rt(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (s = t.type._context),
          (a = t.pendingProps.children),
          _a(t),
          (s = ot(s)),
          (a = a(s)),
          (t.flags |= 1),
          rt(e, t, a, n),
          t.child
        );
      case 14:
        return Hf(e, t, t.type, t.pendingProps, n);
      case 15:
        return Uf(e, t, t.type, t.pendingProps, n);
      case 19:
        return Kf(e, t, n);
      case 31:
        return Dx(e, t, n);
      case 22:
        return Lf(e, t, n, t.pendingProps);
      case 24:
        return (
          _a(t),
          (a = ot(Je)),
          e === null
            ? ((s = Sr()),
              s === null &&
                ((s = Ue),
                (i = wr()),
                (s.pooledCache = i),
                i.refCount++,
                i !== null && (s.pooledCacheLanes |= n),
                (s = i)),
              (t.memoizedState = { parent: a, cache: s }),
              Er(t),
              Pn(t, Je, s))
            : ((e.lanes & n) !== 0 && (kr(e, t), hs(t, null, null, n), ps()),
              (s = e.memoizedState),
              (i = t.memoizedState),
              s.parent !== a
                ? ((s = { parent: a, cache: a }),
                  (t.memoizedState = s),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = s),
                  Pn(t, Je, a))
                : ((a = i.cache),
                  Pn(t, Je, a),
                  a !== s.cache && jr(t, [Je], n, !0))),
          rt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function zn(e) {
    e.flags |= 4;
  }
  function rc(e, t, n, a, s) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (s & 335544128) === s))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (jm()) e.flags |= 8192;
        else throw ((Ha = hi), Ar);
    } else e.flags &= -16777217;
  }
  function Wf(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !ug(t)))
      if (jm()) e.flags |= 8192;
      else throw ((Ha = hi), Ar);
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
      for (var s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags & 65011712),
          (a |= s.flags & 65011712),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((n |= s.lanes | s.childLanes),
          (a |= s.subtreeFlags),
          (a |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= a), (e.childLanes = n), t);
  }
  function Bx(e, t, n) {
    var a = t.pendingProps;
    switch ((hr(t), t.tag)) {
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
                ((t.flags |= 1024), vr())),
          Ye(t),
          null
        );
      case 26:
        var s = t.type,
          i = t.memoizedState;
        return (
          e === null
            ? (zn(t),
              i !== null ? (Ye(t), Wf(t, i)) : (Ye(t), rc(t, s, null, a, n)))
            : i
              ? i !== e.memoizedState
                ? (zn(t), Ye(t), Wf(t, i))
                : (Ye(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== a && zn(t),
                Ye(t),
                rc(t, s, e, a, n)),
          null
        );
      case 27:
        if (
          (gt(t),
          (n = oe.current),
          (s = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ye(t), null);
          }
          ((e = X.current),
            ml(t) ? kd(t) : ((e = ng(s, a, n)), (t.stateNode = e), zn(t)));
        }
        return (Ye(t), null);
      case 5:
        if ((gt(t), (s = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && zn(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(c(166));
            return (Ye(t), null);
          }
          if (((i = X.current), ml(t))) kd(t);
          else {
            var d = Ji(oe.current);
            switch (i) {
              case 1:
                i = d.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                i = d.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    i = d.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    i = d.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
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
                        ? d.createElement(s, { is: a.is })
                        : d.createElement(s);
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
            e: switch ((ct(i, s, a), s)) {
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
          rc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && zn(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(c(166));
          if (((e = oe.current), ml(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = null),
              (s = it),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            ((e[st] = t),
              (e = !!(
                e.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Qm(e.nodeValue, n)
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
              if (!a) throw Error(c(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(c(557));
              e[st] = t;
            } else
              (Ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (e = !1));
          } else
            ((n = vr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
          if ((t.flags & 128) !== 0) throw Error(c(558));
        }
        return (Ye(t), null);
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((s = ml(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(c(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(c(317));
              s[st] = t;
            } else
              (Ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ye(t), (s = !1));
          } else
            ((s = vr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
        }
        return (
          _t(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = a !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((a = t.child),
                (s = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (s = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== s && (a.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Di(t, t.updateQueue),
              Ye(t),
              null)
        );
      case 4:
        return (ke(), e === null && Cc(t.stateNode.containerInfo), Ye(t), null);
      case 10:
        return (kn(t.type), Ye(t), null);
      case 19:
        if ((H(Ze), (a = t.memoizedState), a === null)) return (Ye(t), null);
        if (((s = (t.flags & 128) !== 0), (i = a.rendering), i === null))
          if (s) ws(a, !1);
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
                    (wd(n, e), (n = n.sibling));
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
              ((t.flags |= 128), (s = !0), ws(a, !1), (t.lanes = 4194304));
          }
        else {
          if (!s)
            if (((e = bi(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (s = !0),
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
                ((t.flags |= 128), (s = !0), ws(a, !1), (t.lanes = 4194304));
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
            R(Ze, s ? (n & 1) | 2 : n & 1),
            Te && An(t, a.treeForkCount),
            e)
          : (Ye(t), null);
      case 22:
      case 23:
        return (
          _t(t),
          zr(),
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
    throw Error(c(156, t.tag));
  }
  function Rx(e, t) {
    switch ((hr(t), t.tag)) {
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
          if ((_t(t), t.alternate === null)) throw Error(c(340));
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
          if (t.alternate === null) throw Error(c(340));
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
          zr(),
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
  function $f(e, t) {
    switch ((hr(t), t.tag)) {
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
        (_t(t), zr(), e !== null && H(Ba));
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
        var s = a.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var i = n.create,
              d = n.inst;
            ((a = i()), (d.destroy = a));
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (g) {
      _e(t, t.return, g);
    }
  }
  function aa(e, t, n) {
    try {
      var a = t.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var i = s.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var d = a.inst,
              g = d.destroy;
            if (g !== void 0) {
              ((d.destroy = void 0), (s = t));
              var b = n,
                T = g;
              try {
                T();
              } catch (B) {
                _e(s, b, B);
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
  function Pf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Yd(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Ff(e, t, n) {
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
    } catch (s) {
      _e(e, t, s);
    }
  }
  function dn(e, t) {
    var n = e.ref,
      a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          _e(e, t, s);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          _e(e, t, s);
        }
      else n.current = null;
  }
  function If(e) {
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
    } catch (s) {
      _e(e, e.return, s);
    }
  }
  function cc(e, t, n) {
    try {
      var a = e.stateNode;
      (lv(a, e.type, n, t), (a[wt] = t));
    } catch (s) {
      _e(e, e.return, s);
    }
  }
  function em(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ua(e.type)) ||
      e.tag === 4
    );
  }
  function uc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || em(e.return)) return null;
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
  function dc(e, t, n) {
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
      for (dc(e, t, n), e = e.sibling; e !== null; )
        (dc(e, t, n), (e = e.sibling));
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
  function tm(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var a = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      (ct(t, a, n), (t[st] = e), (t[wt] = n));
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var Mn = !1,
    Pe = !1,
    fc = !1,
    nm = typeof WeakSet == "function" ? WeakSet : Set,
    nt = null;
  function Hx(e, t) {
    if (((e = e.containerInfo), (Dc = to), (e = md(e)), sr(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var s = a.anchorOffset,
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
              C = null;
            t: for (;;) {
              for (
                var _;
                q !== n || (s !== 0 && q.nodeType !== 3) || (g = d + s),
                  q !== i || (a !== 0 && q.nodeType !== 3) || (b = d + a),
                  q.nodeType === 3 && (d += q.nodeValue.length),
                  (_ = q.firstChild) !== null;

              )
                ((C = q), (q = _));
              for (;;) {
                if (q === e) break t;
                if (
                  (C === n && ++T === s && (g = d),
                  C === i && ++B === a && (b = d),
                  (_ = q.nextSibling) !== null)
                )
                  break;
                ((q = C), (C = q.parentNode));
              }
              q = _;
            }
            n = g === -1 || b === -1 ? null : { start: g, end: b };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      _c = { focusedElem: e, selectionRange: n }, to = !1, nt = t;
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
                  ((s = e[n]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                ((e = void 0),
                  (n = t),
                  (s = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = n.stateNode));
                try {
                  var F = Ya(n.type, s);
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
                  Hc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Hc(e);
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
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (nt = e));
            break;
          }
          nt = t.return;
        }
  }
  function am(e, t, n) {
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
            var s = Ya(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (d) {
              _e(n, n.return, d);
            }
          }
        (a & 64 && Pf(n), a & 512 && Ss(n, n.return));
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
            Yd(e, t);
          } catch (d) {
            _e(n, n.return, d);
          }
        }
        break;
      case 27:
        t === null && a & 4 && tm(n);
      case 26:
      case 5:
        (_n(e, n), t === null && a & 4 && If(n), a & 512 && Ss(n, n.return));
        break;
      case 12:
        _n(e, n);
        break;
      case 31:
        (_n(e, n), a & 4 && im(e, n));
        break;
      case 13:
        (_n(e, n),
          a & 4 && om(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Zx.bind(null, n)), fv(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Mn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || Pe), (s = Mn));
          var i = Pe;
          ((Mn = a),
            (Pe = t) && !i ? Bn(e, n, (n.subtreeFlags & 8772) !== 0) : _n(e, n),
            (Mn = s),
            (Pe = i));
        }
        break;
      case 30:
        break;
      default:
        _n(e, n);
    }
  }
  function lm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), lm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Go(t)),
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
    for (n = n.child; n !== null; ) (sm(e, t, n), (n = n.sibling));
  }
  function sm(e, t, n) {
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
          s = St;
        (ua(n.type) && ((Ge = n.stateNode), (St = !1)),
          Dn(e, t, n),
          Ds(n.stateNode),
          (Ge = a),
          (St = s));
        break;
      case 5:
        Pe || dn(n, t);
      case 6:
        if (
          ((a = Ge),
          (s = St),
          (Ge = null),
          Dn(e, t, n),
          (Ge = a),
          (St = s),
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
              Pm(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                n.stateNode
              ),
              _l(e))
            : Pm(Ge, n.stateNode));
        break;
      case 4:
        ((a = Ge),
          (s = St),
          (Ge = n.stateNode.containerInfo),
          (St = !0),
          Dn(e, t, n),
          (Ge = a),
          (St = s));
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
          typeof a.componentWillUnmount == "function" && Ff(n, t, a)),
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
  function im(e, t) {
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
  function om(e, t) {
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
  function Ux(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new nm()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new nm()),
          t
        );
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Bi(e, t) {
    var n = Ux(e);
    t.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var s = Kx.bind(null, e, a);
        a.then(s, s);
      }
    });
  }
  function At(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a],
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
        if (Ge === null) throw Error(c(160));
        (sm(i, d, s),
          (Ge = null),
          (St = !1),
          (i = s.alternate),
          i !== null && (i.return = null),
          (s.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (rm(t, e), (t = t.sibling));
  }
  var en = null;
  function rm(e, t) {
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
        var s = en;
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
                    (s = s.ownerDocument || s));
                  t: switch (a) {
                    case "title":
                      ((i = s.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Pl] ||
                          i[st] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = s.createElement(a)),
                          s.head.insertBefore(
                            i,
                            s.querySelector("head > title")
                          )),
                        ct(i, a, n),
                        (i[st] = e),
                        tt(i),
                        (a = i));
                      break e;
                    case "link":
                      var d = rg("link", "href", s).get(a + (n.href || ""));
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
                      ((i = s.createElement(a)),
                        ct(i, a, n),
                        s.head.appendChild(i));
                      break;
                    case "meta":
                      if (
                        (d = rg("meta", "content", s).get(
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
                      ((i = s.createElement(a)),
                        ct(i, a, n),
                        s.head.appendChild(i));
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  ((i[st] = e), tt(i), (a = i));
                }
                e.stateNode = a;
              } else cg(s, e.type, e.stateNode);
            else e.stateNode = og(s, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : i.count--,
                a === null
                  ? cg(s, e.type, e.stateNode)
                  : og(s, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                cc(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (At(t, e),
          Et(e),
          a & 512 && (Pe || n === null || dn(n, n.return)),
          n !== null && a & 4 && cc(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (At(t, e),
          Et(e),
          a & 512 && (Pe || n === null || dn(n, n.return)),
          e.flags & 32)
        ) {
          s = e.stateNode;
          try {
            al(s, "");
          } catch (F) {
            _e(e, e.return, F);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((s = e.memoizedProps), cc(e, s, n !== null ? n.memoizedProps : s)),
          a & 1024 && (fc = !0));
        break;
      case 6:
        if ((At(t, e), Et(e), a & 4)) {
          if (e.stateNode === null) throw Error(c(162));
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
          (s = en),
          (en = Wi(t.containerInfo)),
          At(t, e),
          (en = s),
          Et(e),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            _l(t.containerInfo);
          } catch (F) {
            _e(e, e.return, F);
          }
        fc && ((fc = !1), cm(e));
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
        s = e.memoizedState !== null;
        var b = n !== null && n.memoizedState !== null,
          T = Mn,
          B = Pe;
        if (
          ((Mn = T || s),
          (Pe = B || b),
          At(t, e),
          (Pe = B),
          (Mn = T),
          Et(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = s ? t._visibility & -2 : t._visibility | 1,
              s && (n === null || b || Mn || Pe || qa(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                b = n = t;
                try {
                  if (((i = b.stateNode), s))
                    ((d = i.style),
                      typeof d.setProperty == "function"
                        ? d.setProperty("display", "none", "important")
                        : (d.display = "none"));
                  else {
                    g = b.stateNode;
                    var q = b.memoizedProps.style,
                      C =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    g.style.display =
                      C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (F) {
                  _e(b, b.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = s ? "" : b.memoizedProps;
                } catch (F) {
                  _e(b, b.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                b = t;
                try {
                  var _ = b.stateNode;
                  s ? Fm(_, !0) : Fm(b.stateNode, !1);
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
          if (em(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode,
              i = uc(e);
            _i(e, i, s);
            break;
          case 5:
            var d = n.stateNode;
            n.flags & 32 && (al(d, ""), (n.flags &= -33));
            var g = uc(e);
            _i(e, g, d);
            break;
          case 3:
          case 4:
            var b = n.stateNode.containerInfo,
              T = uc(e);
            dc(e, T, b);
            break;
          default:
            throw Error(c(161));
        }
      } catch (B) {
        _e(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function cm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (cm(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function _n(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (am(e, t.alternate, t), (t = t.sibling));
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
          (typeof n.componentWillUnmount == "function" && Ff(t, t.return, n),
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
        s = e,
        i = t,
        d = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (Bn(s, i, n), Ns(4, i));
          break;
        case 1:
          if (
            (Bn(s, i, n),
            (a = i),
            (s = a.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (T) {
              _e(a, a.return, T);
            }
          if (((a = i), (s = a.updateQueue), s !== null)) {
            var g = a.stateNode;
            try {
              var b = s.shared.hiddenCallbacks;
              if (b !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < b.length; s++)
                  Ld(b[s], g);
            } catch (T) {
              _e(a, a.return, T);
            }
          }
          (n && d & 64 && Pf(i), Ss(i, i.return));
          break;
        case 27:
          tm(i);
        case 26:
        case 5:
          (Bn(s, i, n), n && a === null && d & 4 && If(i), Ss(i, i.return));
          break;
        case 12:
          Bn(s, i, n);
          break;
        case 31:
          (Bn(s, i, n), n && d & 4 && im(s, i));
          break;
        case 13:
          (Bn(s, i, n), n && d & 4 && om(s, i));
          break;
        case 22:
          (i.memoizedState === null && Bn(s, i, n), Ss(i, i.return));
          break;
        case 30:
          break;
        default:
          Bn(s, i, n);
      }
      t = t.sibling;
    }
  }
  function mc(e, t) {
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
  function gc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && us(e)));
  }
  function tn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (um(e, t, n, a), (t = t.sibling));
  }
  function um(e, t, n, a) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (tn(e, t, n, a), s & 2048 && Ns(9, t));
        break;
      case 1:
        tn(e, t, n, a);
        break;
      case 3:
        (tn(e, t, n, a),
          s & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && us(e))));
        break;
      case 12:
        if (s & 2048) {
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
          s & 2048 && mc(d, t));
        break;
      case 24:
        (tn(e, t, n, a), s & 2048 && gc(t.alternate, t));
        break;
      default:
        tn(e, t, n, a);
    }
  }
  function Nl(e, t, n, a, s) {
    for (
      s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
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
          (Nl(i, d, g, b, s), Ns(8, d));
          break;
        case 23:
          break;
        case 22:
          var B = d.stateNode;
          (d.memoizedState !== null
            ? B._visibility & 2
              ? Nl(i, d, g, b, s)
              : As(i, d)
            : ((B._visibility |= 2), Nl(i, d, g, b, s)),
            s && T & 2048 && mc(d.alternate, d));
          break;
        case 24:
          (Nl(i, d, g, b, s), s && T & 2048 && gc(d.alternate, d));
          break;
        default:
          Nl(i, d, g, b, s);
      }
      t = t.sibling;
    }
  }
  function As(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          a = t,
          s = a.flags;
        switch (a.tag) {
          case 22:
            (As(n, a), s & 2048 && mc(a.alternate, a));
            break;
          case 24:
            (As(n, a), s & 2048 && gc(a.alternate, a));
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
      for (e = e.child; e !== null; ) (dm(e, t, n), (e = e.sibling));
  }
  function dm(e, t, n) {
    switch (e.tag) {
      case 26:
        (Sl(e, t, n),
          e.flags & Es &&
            e.memoizedState !== null &&
            Sv(n, en, e.memoizedState, e.memoizedProps));
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
  function fm(e) {
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
          ((nt = a), gm(a, e));
        }
      fm(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (mm(e), (e = e.sibling));
  }
  function mm(e) {
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
          ((nt = a), gm(a, e));
        }
      fm(e);
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
  function gm(e, t) {
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
          var s = a.sibling,
            i = a.return;
          if ((lm(a), a === n)) {
            nt = null;
            break e;
          }
          if (s !== null) {
            ((s.return = i), (nt = s));
            break e;
          }
          nt = i;
        }
    }
  }
  var Lx = {
      getCacheForType: function (e) {
        var t = ot(Je),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return ot(Je).controller.signal;
      },
    },
    Yx = typeof WeakMap == "function" ? WeakMap : Map,
    Me = 0,
    Ue = null,
    Ne = null,
    Ae = 0,
    De = 0,
    Bt = null,
    la = !1,
    Al = !1,
    pc = !1,
    Rn = 0,
    Qe = 0,
    sa = 0,
    Ga = 0,
    hc = 0,
    Rt = 0,
    El = 0,
    Ts = null,
    kt = null,
    xc = !1,
    Hi = 0,
    pm = 0,
    Ui = 1 / 0,
    Li = null,
    ia = null,
    Fe = 0,
    oa = null,
    kl = null,
    Hn = 0,
    vc = 0,
    yc = null,
    hm = null,
    Os = 0,
    bc = null;
  function Ht() {
    return (Me & 2) !== 0 && Ae !== 0 ? Ae & -Ae : S.T !== null ? Ec() : Yo();
  }
  function xm() {
    if (Rt === 0)
      if ((Ae & 536870912) === 0 || Te) {
        var e = Wa;
        ((Wa <<= 1), (Wa & 3932160) === 0 && (Wa = 262144), (Rt = e));
      } else Rt = 536870912;
    return ((e = Dt.current), e !== null && (e.flags |= 32), Rt);
  }
  function Tt(e, t, n) {
    (((e === Ue && (De === 2 || De === 9)) || e.cancelPendingCommit !== null) &&
      (Tl(e, 0), ra(e, Ae, Rt, !1)),
      Ve(e, n),
      ((Me & 2) === 0 || e !== Ue) &&
        (e === Ue &&
          ((Me & 2) === 0 && (Ga |= n), Qe === 4 && ra(e, Ae, Rt, !1)),
        fn(e)));
  }
  function vm(e, t, n) {
    if ((Me & 6) !== 0) throw Error(c(327));
    var a = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || qe(e, t),
      s = a ? Vx(e, t) : wc(e, t, !0),
      i = a;
    do {
      if (s === 0) {
        Al && !a && ra(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), i && !qx(n))) {
          ((s = wc(e, t, !1)), (i = !1));
          continue;
        }
        if (s === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var d = 0;
          else
            ((d = e.pendingLanes & -536870913),
              (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0));
          if (d !== 0) {
            t = d;
            e: {
              var g = e;
              s = Ts;
              var b = g.current.memoizedState.isDehydrated;
              if ((b && (Tl(g, d).flags |= 256), (d = wc(g, d, !1)), d !== 2)) {
                if (pc && !b) {
                  ((g.errorRecoveryDisabledLanes |= i), (Ga |= i), (s = 4));
                  break e;
                }
                ((i = kt),
                  (kt = s),
                  i !== null &&
                    (kt === null ? (kt = i) : kt.push.apply(kt, i)));
              }
              s = d;
            }
            if (((i = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Tl(e, 0), ra(e, t, 0, !0));
          break;
        }
        e: {
          switch (((a = e), (i = s), i)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ra(a, t, Rt, !la);
              break e;
            case 2:
              kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && ((s = Hi + 300 - ht()), 10 < s)) {
            if ((ra(a, t, Rt, !la), fe(a, 0, !0) !== 0)) break e;
            ((Hn = t),
              (a.timeoutHandle = Wm(
                ym.bind(
                  null,
                  a,
                  n,
                  kt,
                  Li,
                  xc,
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
                s
              )));
            break e;
          }
          ym(a, n, kt, Li, xc, t, Rt, Ga, El, la, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    fn(e);
  }
  function ym(e, t, n, a, s, i, d, g, b, T, B, q, C, _) {
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
        dm(t, i, q));
      var F =
        (i & 62914560) === i ? Hi - ht() : (i & 4194048) === i ? pm - ht() : 0;
      if (((F = Av(q, F)), F !== null)) {
        ((Hn = i),
          (e.cancelPendingCommit = F(
            km.bind(null, e, t, i, n, a, s, d, g, b, B, q, null, C, _)
          )),
          ra(e, i, d, !T));
        return;
      }
    }
    km(e, t, i, n, a, s, d, g, b);
  }
  function qx(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var s = n[a],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!zt(i(), s)) return !1;
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
  function ra(e, t, n, a) {
    ((t &= ~hc),
      (t &= ~Ga),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes));
    for (var s = t; 0 < s; ) {
      var i = 31 - ut(s),
        d = 1 << i;
      ((a[i] = -1), (s &= ~d));
    }
    n !== 0 && Aa(e, n, t);
  }
  function Yi() {
    return (Me & 6) === 0 ? (Cs(0), !1) : !0;
  }
  function jc() {
    if (Ne !== null) {
      if (De === 0) var e = Ne.return;
      else ((e = Ne), (En = Da = null), Hr(e), (vl = null), (fs = 0), (e = Ne));
      for (; e !== null; ) ($f(e.alternate, e), (e = e.return));
      Ne = null;
    }
  }
  function Tl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), ov(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Hn = 0),
      jc(),
      (Ue = e),
      (Ne = n = Sn(e.current, null)),
      (Ae = t),
      (De = 0),
      (Bt = null),
      (la = !1),
      (Al = qe(e, t)),
      (pc = !1),
      (El = Rt = hc = Ga = sa = Qe = 0),
      (kt = Ts = null),
      (xc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var s = 31 - ut(a),
          i = 1 << s;
        ((t |= e[s]), (a &= ~i));
      }
    return ((Rn = t), oi(), n);
  }
  function bm(e, t) {
    ((pe = null),
      (S.H = bs),
      t === xl || t === pi
        ? ((t = Bd()), (De = 3))
        : t === Ar
          ? ((t = Bd()), (De = 4))
          : (De =
              t === Ir
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Bt = t),
      Ne === null && ((Qe = 1), Oi(e, Vt(t, e.current))));
  }
  function jm() {
    var e = Dt.current;
    return e === null
      ? !0
      : (Ae & 4194048) === Ae
        ? Kt === null
        : (Ae & 62914560) === Ae || (Ae & 536870912) !== 0
          ? e === Kt
          : !1;
  }
  function wm() {
    var e = S.H;
    return ((S.H = bs), e === null ? bs : e);
  }
  function Nm() {
    var e = S.A;
    return ((S.A = Lx), e);
  }
  function qi() {
    ((Qe = 4),
      la || ((Ae & 4194048) !== Ae && Dt.current !== null) || (Al = !0),
      ((sa & 134217727) === 0 && (Ga & 134217727) === 0) ||
        Ue === null ||
        ra(Ue, Ae, Rt, !1));
  }
  function wc(e, t, n) {
    var a = Me;
    Me |= 2;
    var s = wm(),
      i = Nm();
    ((Ue !== e || Ae !== t) && ((Li = null), Tl(e, t)), (t = !1));
    var d = Qe;
    e: do
      try {
        if (De !== 0 && Ne !== null) {
          var g = Ne,
            b = Bt;
          switch (De) {
            case 8:
              (jc(), (d = 6));
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
        (Gx(), (d = Qe));
        break;
      } catch (B) {
        bm(e, B);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (En = Da = null),
      (Me = a),
      (S.H = s),
      (S.A = i),
      Ne === null && ((Ue = null), (Ae = 0), oi()),
      d
    );
  }
  function Gx() {
    for (; Ne !== null; ) Sm(Ne);
  }
  function Vx(e, t) {
    var n = Me;
    Me |= 2;
    var a = wm(),
      s = Nm();
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
              if (Dd(i)) {
                ((De = 0), (Bt = null), Am(t));
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
              Dd(i)
                ? ((De = 0), (Bt = null), Am(t))
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
                  if (d ? ug(d) : g.stateNode.complete) {
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
              (jc(), (Qe = 6));
              break e;
            default:
              throw Error(c(462));
          }
        }
        Xx();
        break;
      } catch (B) {
        bm(e, B);
      }
    while (!0);
    return (
      (En = Da = null),
      (S.H = a),
      (S.A = s),
      (Me = n),
      Ne !== null ? 0 : ((Ue = null), (Ae = 0), oi(), Qe)
    );
  }
  function Xx() {
    for (; Ne !== null && !pt(); ) Sm(Ne);
  }
  function Sm(e) {
    var t = Jf(e.alternate, e, Rn);
    ((e.memoizedProps = e.pendingProps), t === null ? Gi(e) : (Ne = t));
  }
  function Am(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Gf(n, t, t.pendingProps, t.type, void 0, Ae);
        break;
      case 11:
        t = Gf(n, t, t.pendingProps, t.type.render, t.ref, Ae);
        break;
      case 5:
        Hr(t);
      default:
        ($f(n, t), (t = Ne = wd(t, Rn)), (t = Jf(n, t, Rn)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Gi(e) : (Ne = t));
  }
  function Ol(e, t, n, a) {
    ((En = Da = null), Hr(t), (vl = null), (fs = 0));
    var s = t.return;
    try {
      if (Mx(e, s, t, n, Ae)) {
        ((Qe = 1), Oi(e, Vt(n, e.current)), (Ne = null));
        return;
      }
    } catch (i) {
      if (s !== null) throw ((Ne = s), i);
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
        Em(t, e))
      : Gi(t);
  }
  function Gi(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Em(t, la);
        return;
      }
      e = t.return;
      var n = Bx(t.alternate, t, Rn);
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
  function Em(e, t) {
    do {
      var n = Rx(e.alternate, e);
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
  function km(e, t, n, a, s, i, d, g, b) {
    e.cancelPendingCommit = null;
    do Vi();
    while (Fe !== 0);
    if ((Me & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= ur),
        yt(e, n, i, d, g, b),
        e === Ue && ((Ne = Ue = null), (Ae = 0)),
        (kl = t),
        (oa = e),
        (Hn = n),
        (vc = i),
        (yc = s),
        (hm = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Jx(wa, function () {
              return (Mm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = S.T), (S.T = null), (s = U.p), (U.p = 2), (d = Me), (Me |= 4));
        try {
          Hx(e, t, n);
        } finally {
          ((Me = d), (U.p = s), (S.T = a));
        }
      }
      ((Fe = 1), Tm(), Om(), Cm());
    }
  }
  function Tm() {
    if (Fe === 1) {
      Fe = 0;
      var e = oa,
        t = kl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = S.T), (S.T = null));
        var a = U.p;
        U.p = 2;
        var s = Me;
        Me |= 4;
        try {
          rm(t, e);
          var i = _c,
            d = md(e.containerInfo),
            g = i.focusedElem,
            b = i.selectionRange;
          if (
            d !== g &&
            g &&
            g.ownerDocument &&
            fd(g.ownerDocument.documentElement, g)
          ) {
            if (b !== null && sr(g)) {
              var T = b.start,
                B = b.end;
              if ((B === void 0 && (B = T), "selectionStart" in g))
                ((g.selectionStart = T),
                  (g.selectionEnd = Math.min(B, g.value.length)));
              else {
                var q = g.ownerDocument || document,
                  C = (q && q.defaultView) || window;
                if (C.getSelection) {
                  var _ = C.getSelection(),
                    F = g.textContent.length,
                    ue = Math.min(b.start, F),
                    He = b.end === void 0 ? ue : Math.min(b.end, F);
                  !_.extend && ue > He && ((d = He), (He = ue), (ue = d));
                  var A = dd(g, ue),
                    N = dd(g, He);
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
          ((to = !!Dc), (_c = Dc = null));
        } finally {
          ((Me = s), (U.p = a), (S.T = n));
        }
      }
      ((e.current = t), (Fe = 2));
    }
  }
  function Om() {
    if (Fe === 2) {
      Fe = 0;
      var e = oa,
        t = kl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = S.T), (S.T = null));
        var a = U.p;
        U.p = 2;
        var s = Me;
        Me |= 4;
        try {
          am(e, t.alternate, t);
        } finally {
          ((Me = s), (U.p = a), (S.T = n));
        }
      }
      Fe = 3;
    }
  }
  function Cm() {
    if (Fe === 4 || Fe === 3) {
      ((Fe = 0), Vn());
      var e = oa,
        t = kl,
        n = Hn,
        a = hm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Fe = 5)
        : ((Fe = 0), (kl = oa = null), zm(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (
        (s === 0 && (ia = null),
        Ft(n),
        (t = t.stateNode),
        xt && typeof xt.onCommitFiberRoot == "function")
      )
        try {
          xt.onCommitFiberRoot(Na, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((t = S.T), (s = U.p), (U.p = 2), (S.T = null));
        try {
          for (var i = e.onRecoverableError, d = 0; d < a.length; d++) {
            var g = a[d];
            i(g.value, { componentStack: g.stack });
          }
        } finally {
          ((S.T = t), (U.p = s));
        }
      }
      ((Hn & 3) !== 0 && Vi(),
        fn(e),
        (s = e.pendingLanes),
        (n & 261930) !== 0 && (s & 42) !== 0
          ? e === bc
            ? Os++
            : ((Os = 0), (bc = e))
          : (Os = 0),
        Cs(0));
    }
  }
  function zm(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), us(t)));
  }
  function Vi() {
    return (Tm(), Om(), Cm(), Mm());
  }
  function Mm() {
    if (Fe !== 5) return !1;
    var e = oa,
      t = vc;
    vc = 0;
    var n = Ft(Hn),
      a = S.T,
      s = U.p;
    try {
      ((U.p = 32 > n ? 32 : n), (S.T = null), (n = yc), (yc = null));
      var i = oa,
        d = Hn;
      if (((Fe = 0), (kl = oa = null), (Hn = 0), (Me & 6) !== 0))
        throw Error(c(331));
      var g = Me;
      if (
        ((Me |= 4),
        mm(i.current),
        um(i, i.current, d, n),
        (Me = g),
        Cs(0, !1),
        xt && typeof xt.onPostCommitFiberRoot == "function")
      )
        try {
          xt.onPostCommitFiberRoot(Na, i);
        } catch {}
      return !0;
    } finally {
      ((U.p = s), (S.T = a), zm(e, t));
    }
  }
  function Dm(e, t, n) {
    ((t = Vt(n, t)),
      (t = Fr(e.stateNode, t, 2)),
      (e = ea(e, t, 2)),
      e !== null && (Ve(e, 2), fn(e)));
  }
  function _e(e, t, n) {
    if (e.tag === 3) Dm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Dm(t, e, n);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ia === null || !ia.has(a)))
          ) {
            ((e = Vt(n, e)),
              (n = _f(2)),
              (a = ea(t, n, 2)),
              a !== null && (Bf(n, a, t, e), Ve(a, 2), fn(a)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Yx();
      var s = new Set();
      a.set(t, s);
    } else ((s = a.get(t)), s === void 0 && ((s = new Set()), a.set(t, s)));
    s.has(n) ||
      ((pc = !0), s.add(n), (e = Qx.bind(null, e, t, n)), t.then(e, e));
  }
  function Qx(e, t, n) {
    var a = e.pingCache;
    (a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Ue === e &&
        (Ae & n) === n &&
        (Qe === 4 || (Qe === 3 && (Ae & 62914560) === Ae && 300 > ht() - Hi)
          ? (Me & 2) === 0 && Tl(e, 0)
          : (hc |= n),
        El === Ae && (El = 0)),
      fn(e));
  }
  function _m(e, t) {
    (t === 0 && (t = dt()), (e = Ca(e, t)), e !== null && (Ve(e, t), fn(e)));
  }
  function Zx(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), _m(e, n));
  }
  function Kx(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode,
          s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (a !== null && a.delete(t), _m(e, n));
  }
  function Jx(e, t) {
    return Kl(e, t);
  }
  var Xi = null,
    Cl = null,
    Sc = !1,
    Qi = !1,
    Ac = !1,
    ca = 0;
  function fn(e) {
    (e !== Cl &&
      e.next === null &&
      (Cl === null ? (Xi = Cl = e) : (Cl = Cl.next = e)),
      (Qi = !0),
      Sc || ((Sc = !0), $x()));
  }
  function Cs(e, t) {
    if (!Ac && Qi) {
      Ac = !0;
      do
        for (var n = !1, a = Xi; a !== null; ) {
          if (e !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var i = 0;
            else {
              var d = a.suspendedLanes,
                g = a.pingedLanes;
              ((i = (1 << (31 - ut(42 | e) + 1)) - 1),
                (i &= s & ~(d & ~g)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0));
            }
            i !== 0 && ((n = !0), Um(a, i));
          } else
            ((i = Ae),
              (i = fe(
                a,
                a === Ue ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || qe(a, i) || ((n = !0), Um(a, i)));
          a = a.next;
        }
      while (n);
      Ac = !1;
    }
  }
  function Wx() {
    Bm();
  }
  function Bm() {
    Qi = Sc = !1;
    var e = 0;
    ca !== 0 && iv() && (e = ca);
    for (var t = ht(), n = null, a = Xi; a !== null; ) {
      var s = a.next,
        i = Rm(a, t);
      (i === 0
        ? ((a.next = null),
          n === null ? (Xi = s) : (n.next = s),
          s === null && (Cl = n))
        : ((n = a), (e !== 0 || (i & 3) !== 0) && (Qi = !0)),
        (a = s));
    }
    ((Fe !== 0 && Fe !== 5) || Cs(e), ca !== 0 && (ca = 0));
  }
  function Rm(e, t) {
    for (
      var n = e.suspendedLanes,
        a = e.pingedLanes,
        s = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var d = 31 - ut(i),
        g = 1 << d,
        b = s[d];
      (b === -1
        ? ((g & n) === 0 || (g & a) !== 0) && (s[d] = et(g, t))
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
        (a = Hm.bind(null, e)),
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
  function Hm(e, t) {
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
        : (vm(e, a, t),
          Rm(e, ht()),
          e.callbackNode != null && e.callbackNode === n
            ? Hm.bind(null, e)
            : null)
    );
  }
  function Um(e, t) {
    if (Vi()) return null;
    vm(e, t, !0);
  }
  function $x() {
    rv(function () {
      (Me & 6) !== 0 ? Kl(ja, Wx) : Bm();
    });
  }
  function Ec() {
    if (ca === 0) {
      var e = pl;
      (e === 0 && ((e = Ja), (Ja <<= 1), (Ja & 261888) === 0 && (Ja = 256)),
        (ca = e));
    }
    return ca;
  }
  function Lm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Is("" + e);
  }
  function Ym(e, t) {
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
  function Px(e, t, n, a, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var i = Lm((s[wt] || null).action),
        d = a.submitter;
      d &&
        ((t = (t = d[wt] || null)
          ? Lm(t.formAction)
          : d.getAttribute("formAction")),
        t !== null && ((i = t), (d = null)));
      var g = new ai("action", "action", null, a, s);
      e.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ca !== 0) {
                  var b = d ? Ym(s, d) : new FormData(s);
                  Zr(
                    n,
                    { pending: !0, data: b, method: s.method, action: i },
                    null,
                    b
                  );
                }
              } else
                typeof i == "function" &&
                  (g.preventDefault(),
                  (b = d ? Ym(s, d) : new FormData(s)),
                  Zr(
                    n,
                    { pending: !0, data: b, method: s.method, action: i },
                    i,
                    b
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var kc = 0; kc < cr.length; kc++) {
    var Tc = cr[kc],
      Fx = Tc.toLowerCase(),
      Ix = Tc[0].toUpperCase() + Tc.slice(1);
    It(Fx, "on" + Ix);
  }
  (It(hd, "onAnimationEnd"),
    It(xd, "onAnimationIteration"),
    It(vd, "onAnimationStart"),
    It("dblclick", "onDoubleClick"),
    It("focusin", "onFocus"),
    It("focusout", "onBlur"),
    It(px, "onTransitionRun"),
    It(hx, "onTransitionStart"),
    It(xx, "onTransitionCancel"),
    It(yd, "onTransitionEnd"),
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
    ev = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zs)
    );
  function qm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n],
        s = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var d = a.length - 1; 0 <= d; d--) {
            var g = a[d],
              b = g.instance,
              T = g.currentTarget;
            if (((g = g.listener), b !== i && s.isPropagationStopped()))
              break e;
            ((i = g), (s.currentTarget = T));
            try {
              i(s);
            } catch (B) {
              ii(B);
            }
            ((s.currentTarget = null), (i = b));
          }
        else
          for (d = 0; d < a.length; d++) {
            if (
              ((g = a[d]),
              (b = g.instance),
              (T = g.currentTarget),
              (g = g.listener),
              b !== i && s.isPropagationStopped())
            )
              break e;
            ((i = g), (s.currentTarget = T));
            try {
              i(s);
            } catch (B) {
              ii(B);
            }
            ((s.currentTarget = null), (i = b));
          }
      }
    }
  }
  function Se(e, t) {
    var n = t[qo];
    n === void 0 && (n = t[qo] = new Set());
    var a = e + "__bubble";
    n.has(a) || (Gm(t, e, 2, !1), n.add(a));
  }
  function Oc(e, t, n) {
    var a = 0;
    (t && (a |= 4), Gm(n, e, a, t));
  }
  var Zi = "_reactListening" + Math.random().toString(36).slice(2);
  function Cc(e) {
    if (!e[Zi]) {
      ((e[Zi] = !0),
        _u.forEach(function (n) {
          n !== "selectionchange" && (ev.has(n) || Oc(n, !1, e), Oc(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Zi] || ((t[Zi] = !0), Oc("selectionchange", !1, t));
    }
  }
  function Gm(e, t, n, a) {
    switch (xg(t)) {
      case 2:
        var s = Tv;
        break;
      case 8:
        s = Ov;
        break;
      default:
        s = Qc;
    }
    ((n = s.bind(null, t, n, e)),
      (s = void 0),
      !$o ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (s = !0),
      a
        ? s !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: s })
          : e.addEventListener(t, n, !0)
        : s !== void 0
          ? e.addEventListener(t, n, { passive: s })
          : e.addEventListener(t, n, !1));
  }
  function zc(e, t, n, a, s) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var d = a.tag;
        if (d === 3 || d === 4) {
          var g = a.stateNode.containerInfo;
          if (g === s) break;
          if (d === 4)
            for (d = a.return; d !== null; ) {
              var b = d.tag;
              if ((b === 3 || b === 4) && d.stateNode.containerInfo === s)
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
    Zu(function () {
      var T = i,
        B = Jo(n),
        q = [];
      e: {
        var C = bd.get(e);
        if (C !== void 0) {
          var _ = ai,
            F = e;
          switch (e) {
            case "keypress":
              if (ti(n) === 0) break e;
            case "keydown":
            case "keyup":
              _ = Kh;
              break;
            case "focusin":
              ((F = "focus"), (_ = er));
              break;
            case "focusout":
              ((F = "blur"), (_ = er));
              break;
            case "beforeblur":
            case "afterblur":
              _ = er;
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
              _ = Wu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _ = Bh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _ = $h;
              break;
            case hd:
            case xd:
            case vd:
              _ = Uh;
              break;
            case yd:
              _ = Fh;
              break;
            case "scroll":
            case "scrollend":
              _ = Dh;
              break;
            case "wheel":
              _ = ex;
              break;
            case "copy":
            case "cut":
            case "paste":
              _ = Yh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _ = Pu;
              break;
            case "toggle":
            case "beforetoggle":
              _ = nx;
          }
          var ue = (t & 4) !== 0,
            He = !ue && (e === "scroll" || e === "scrollend"),
            A = ue ? (C !== null ? C + "Capture" : null) : C;
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
            ((C = new _(C, F, null, n, B)),
            q.push({ event: C, listeners: ue }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((C = e === "mouseover" || e === "pointerover"),
            (_ = e === "mouseout" || e === "pointerout"),
            C &&
              n !== Ko &&
              (F = n.relatedTarget || n.fromElement) &&
              (Fa(F) || F[Pa]))
          )
            break e;
          if (
            (_ || C) &&
            ((C =
              B.window === B
                ? B
                : (C = B.ownerDocument)
                  ? C.defaultView || C.parentWindow
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
              ((ue = Wu),
              (L = "onMouseLeave"),
              (A = "onMouseEnter"),
              (N = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ue = Pu),
                (L = "onPointerLeave"),
                (A = "onPointerEnter"),
                (N = "pointer")),
              (He = _ == null ? C : Fl(_)),
              (k = F == null ? C : Fl(F)),
              (C = new ue(L, N + "leave", _, n, B)),
              (C.target = He),
              (C.relatedTarget = k),
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
                for (ue = tv, A = _, N = F, k = 0, L = A; L; L = ue(L)) k++;
                L = 0;
                for (var re = N; re; re = ue(re)) L++;
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
            (_ !== null && Vm(q, C, _, ue, !1),
              F !== null && He !== null && Vm(q, He, F, ue, !0));
          }
        }
        e: {
          if (
            ((C = T ? Fl(T) : window),
            (_ = C.nodeName && C.nodeName.toLowerCase()),
            _ === "select" || (_ === "input" && C.type === "file"))
          )
            var Ce = sd;
          else if (ad(C))
            if (id) Ce = fx;
            else {
              Ce = ux;
              var le = cx;
            }
          else
            ((_ = C.nodeName),
              !_ ||
              _.toLowerCase() !== "input" ||
              (C.type !== "checkbox" && C.type !== "radio")
                ? T && Zo(T.elementType) && (Ce = sd)
                : (Ce = dx));
          if (Ce && (Ce = Ce(e, T))) {
            ld(q, Ce, n, B);
            break e;
          }
          (le && le(e, C, T),
            e === "focusout" &&
              T &&
              C.type === "number" &&
              T.memoizedProps.value != null &&
              Qo(C, "number", C.value));
        }
        switch (((le = T ? Fl(T) : window), e)) {
          case "focusin":
            (ad(le) || le.contentEditable === "true") &&
              ((ol = le), (ir = T), (os = null));
            break;
          case "focusout":
            os = ir = ol = null;
            break;
          case "mousedown":
            or = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((or = !1), gd(q, n, B));
            break;
          case "selectionchange":
            if (gx) break;
          case "keydown":
          case "keyup":
            gd(q, n, B);
        }
        var ve;
        if (nr)
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
            ? td(e, n) && (Ee = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Ee = "onCompositionStart");
        (Ee &&
          (Fu &&
            n.locale !== "ko" &&
            (il || Ee !== "onCompositionStart"
              ? Ee === "onCompositionEnd" && il && (ve = Ku())
              : ((Kn = B),
                (Po = "value" in Kn ? Kn.value : Kn.textContent),
                (il = !0))),
          (le = Ki(T, Ee)),
          0 < le.length &&
            ((Ee = new $u(Ee, e, null, n, B)),
            q.push({ event: Ee, listeners: le }),
            ve
              ? (Ee.data = ve)
              : ((ve = nd(n)), ve !== null && (Ee.data = ve)))),
          (ve = lx ? sx(e, n) : ix(e, n)) &&
            ((Ee = Ki(T, "onBeforeInput")),
            0 < Ee.length &&
              ((le = new $u("onBeforeInput", "beforeinput", null, n, B)),
              q.push({ event: le, listeners: Ee }),
              (le.data = ve))),
          Px(q, e, T, n, B));
      }
      qm(q, t);
    });
  }
  function Ms(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ki(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var s = e,
        i = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          i === null ||
          ((s = Il(e, n)),
          s != null && a.unshift(Ms(e, s, i)),
          (s = Il(e, t)),
          s != null && a.push(Ms(e, s, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function tv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vm(e, t, n, a, s) {
    for (var i = t._reactName, d = []; n !== null && n !== a; ) {
      var g = n,
        b = g.alternate,
        T = g.stateNode;
      if (((g = g.tag), b !== null && b === a)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        T === null ||
        ((b = T),
        s
          ? ((T = Il(n, i)), T != null && d.unshift(Ms(n, T, b)))
          : s || ((T = Il(n, i)), T != null && d.push(Ms(n, T, b)))),
        (n = n.return));
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var nv = /\r\n?/g,
    av = /\u0000|\uFFFD/g;
  function Xm(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        nv,
        `
`
      )
      .replace(av, "");
  }
  function Qm(e, t) {
    return ((t = Xm(t)), Xm(e) === t);
  }
  function Re(e, t, n, a, s, i) {
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
        Xu(e, a, i);
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
              ? (t !== "input" && Re(e, t, "name", s.name, s, null),
                Re(e, t, "formEncType", s.formEncType, s, null),
                Re(e, t, "formMethod", s.formMethod, s, null),
                Re(e, t, "formTarget", s.formTarget, s, null))
              : (Re(e, t, "encType", s.encType, s, null),
                Re(e, t, "method", s.method, s, null),
                Re(e, t, "target", s.target, s, null)));
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
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(c(60));
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
          ((n = zh.get(n) || n), $s(e, n, a));
    }
  }
  function Mc(e, t, n, a, s, i) {
    switch (n) {
      case "style":
        Xu(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(c(61));
          if (((n = a.__html), n != null)) {
            if (s.children != null) throw Error(c(60));
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
        if (!Bu.hasOwnProperty(n))
          e: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((s = n.endsWith("Capture")),
              (t = n.slice(2, s ? n.length - 7 : void 0)),
              (i = e[wt] || null),
              (i = i != null ? i[n] : null),
              typeof i == "function" && e.removeEventListener(t, i, s),
              typeof a == "function")
            ) {
              (typeof i != "function" &&
                i !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, a, s));
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
  function ct(e, t, n) {
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
          s = !1,
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
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Re(e, t, i, d, n, null);
              }
          }
        (s && Re(e, t, "srcSet", n.srcSet, n, null),
          a && Re(e, t, "src", n.src, n, null));
        return;
      case "input":
        Se("invalid", e);
        var g = (i = d = s = null),
          b = null,
          T = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var B = n[a];
            if (B != null)
              switch (a) {
                case "name":
                  s = B;
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
                  if (B != null) throw Error(c(137, t));
                  break;
                default:
                  Re(e, t, a, B, n, null);
              }
          }
        Yu(e, i, g, b, T, d, s, !1);
        return;
      case "select":
        (Se("invalid", e), (a = d = i = null));
        for (s in n)
          if (n.hasOwnProperty(s) && ((g = n[s]), g != null))
            switch (s) {
              case "value":
                i = g;
                break;
              case "defaultValue":
                d = g;
                break;
              case "multiple":
                a = g;
              default:
                Re(e, t, s, g, n, null);
            }
        ((t = i),
          (n = d),
          (e.multiple = !!a),
          t != null ? nl(e, !!a, t, !1) : n != null && nl(e, !!a, n, !0));
        return;
      case "textarea":
        (Se("invalid", e), (i = s = a = null));
        for (d in n)
          if (n.hasOwnProperty(d) && ((g = n[d]), g != null))
            switch (d) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                i = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(c(91));
                break;
              default:
                Re(e, t, d, g, n, null);
            }
        Gu(e, a, s, i);
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
                throw Error(c(137, t));
              default:
                Re(e, t, T, a, n, null);
            }
        return;
      default:
        if (Zo(t)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((a = n[B]), a !== void 0 && Mc(e, t, B, a, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((a = n[g]), a != null && Re(e, t, g, a, n, null));
  }
  function lv(e, t, n, a) {
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
        var s = null,
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
        for (var C in a) {
          var _ = a[C];
          if (((q = n[C]), a.hasOwnProperty(C) && (_ != null || q != null)))
            switch (C) {
              case "type":
                i = _;
                break;
              case "name":
                s = _;
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
                if (_ != null) throw Error(c(137, t));
                break;
              default:
                _ !== q && Re(e, t, C, _, a, q);
            }
        }
        Xo(e, d, g, b, T, B, i, s);
        return;
      case "select":
        _ = d = g = C = null;
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
        for (s in a)
          if (
            ((i = a[s]),
            (b = n[s]),
            a.hasOwnProperty(s) && (i != null || b != null))
          )
            switch (s) {
              case "value":
                C = i;
                break;
              case "defaultValue":
                g = i;
                break;
              case "multiple":
                d = i;
              default:
                i !== b && Re(e, t, s, i, a, b);
            }
        ((t = g),
          (n = d),
          (a = _),
          C != null
            ? nl(e, !!n, C, !1)
            : !!a != !!n &&
              (t != null ? nl(e, !!n, t, !0) : nl(e, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        _ = C = null;
        for (g in n)
          if (
            ((s = n[g]),
            n.hasOwnProperty(g) && s != null && !a.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Re(e, t, g, null, a, s);
            }
        for (d in a)
          if (
            ((s = a[d]),
            (i = n[d]),
            a.hasOwnProperty(d) && (s != null || i != null))
          )
            switch (d) {
              case "value":
                C = s;
                break;
              case "defaultValue":
                _ = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(c(91));
                break;
              default:
                s !== i && Re(e, t, d, s, a, i);
            }
        qu(e, C, _);
        return;
      case "option":
        for (var F in n)
          if (
            ((C = n[F]),
            n.hasOwnProperty(F) && C != null && !a.hasOwnProperty(F))
          )
            switch (F) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Re(e, t, F, null, a, C);
            }
        for (b in a)
          if (
            ((C = a[b]),
            (_ = n[b]),
            a.hasOwnProperty(b) && C !== _ && (C != null || _ != null))
          )
            switch (b) {
              case "selected":
                e.selected =
                  C && typeof C != "function" && typeof C != "symbol";
                break;
              default:
                Re(e, t, b, C, a, _);
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
          ((C = n[ue]),
            n.hasOwnProperty(ue) &&
              C != null &&
              !a.hasOwnProperty(ue) &&
              Re(e, t, ue, null, a, C));
        for (T in a)
          if (
            ((C = a[T]),
            (_ = n[T]),
            a.hasOwnProperty(T) && C !== _ && (C != null || _ != null))
          )
            switch (T) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null) throw Error(c(137, t));
                break;
              default:
                Re(e, t, T, C, a, _);
            }
        return;
      default:
        if (Zo(t)) {
          for (var He in n)
            ((C = n[He]),
              n.hasOwnProperty(He) &&
                C !== void 0 &&
                !a.hasOwnProperty(He) &&
                Mc(e, t, He, void 0, a, C));
          for (B in a)
            ((C = a[B]),
              (_ = n[B]),
              !a.hasOwnProperty(B) ||
                C === _ ||
                (C === void 0 && _ === void 0) ||
                Mc(e, t, B, C, a, _));
          return;
        }
    }
    for (var A in n)
      ((C = n[A]),
        n.hasOwnProperty(A) &&
          C != null &&
          !a.hasOwnProperty(A) &&
          Re(e, t, A, null, a, C));
    for (q in a)
      ((C = a[q]),
        (_ = n[q]),
        !a.hasOwnProperty(q) ||
          C === _ ||
          (C == null && _ == null) ||
          Re(e, t, q, C, a, _));
  }
  function Zm(e) {
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
  function sv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var s = n[a],
          i = s.transferSize,
          d = s.initiatorType,
          g = s.duration;
        if (i && g && Zm(d)) {
          for (d = 0, g = s.responseEnd, a += 1; a < n.length; a++) {
            var b = n[a],
              T = b.startTime;
            if (T > g) break;
            var B = b.transferSize,
              q = b.initiatorType;
            B &&
              Zm(q) &&
              ((b = b.responseEnd), (d += B * (b < g ? 1 : (g - T) / (b - T))));
          }
          if ((--a, (t += (8 * (i + d)) / (s.duration / 1e3)), e++, 10 < e))
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
  var Dc = null,
    _c = null;
  function Ji(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Km(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jm(e, t) {
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
  function Bc(e, t) {
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
  var Rc = null;
  function iv() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Rc
        ? !1
        : ((Rc = e), !0)
      : ((Rc = null), !1);
  }
  var Wm = typeof setTimeout == "function" ? setTimeout : void 0,
    ov = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $m = typeof Promise == "function" ? Promise : void 0,
    rv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $m < "u"
          ? function (e) {
              return $m.resolve(null).then(e).catch(cv);
            }
          : Wm;
  function cv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ua(e) {
    return e === "head";
  }
  function Pm(e, t) {
    var n = t,
      a = 0;
    do {
      var s = n.nextSibling;
      if ((e.removeChild(n), s && s.nodeType === 8))
        if (((n = s.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (e.removeChild(s), _l(t));
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
      n = s;
    } while (n);
    _l(t);
  }
  function Fm(e, t) {
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
  function Hc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Hc(n), Go(n));
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
  function uv(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var s = n;
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
                i !== s.rel ||
                e.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                e.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                e.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (s.src == null ? null : s.src) ||
                  e.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  e.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
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
        var i = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Jt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function dv(e, t, n) {
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
  function Im(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Jt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Uc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Lc(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function fv(e, t) {
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
  var Yc = null;
  function eg(e) {
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
  function tg(e) {
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
  function ng(e, t, n) {
    switch (((t = Ji(n)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(c(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(c(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Ds(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Go(e);
  }
  var Wt = new Map(),
    ag = new Set();
  function Wi(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Un = U.d;
  U.d = { f: mv, r: gv, D: pv, C: hv, L: xv, m: vv, X: bv, S: yv, M: jv };
  function mv() {
    var e = Un.f(),
      t = Yi();
    return e || t;
  }
  function gv(e) {
    var t = Ia(e);
    t !== null && t.tag === 5 && t.type === "form" ? bf(t) : Un.r(e);
  }
  var zl = typeof document > "u" ? null : document;
  function lg(e, t, n) {
    var a = zl;
    if (a && typeof t == "string" && t) {
      var s = qt(t);
      ((s = 'link[rel="' + e + '"][href="' + s + '"]'),
        typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
        ag.has(s) ||
          (ag.add(s),
          (e = { rel: e, crossOrigin: n, href: t }),
          a.querySelector(s) === null &&
            ((t = a.createElement("link")),
            ct(t, "link", e),
            tt(t),
            a.head.appendChild(t))));
    }
  }
  function pv(e) {
    (Un.D(e), lg("dns-prefetch", e, null));
  }
  function hv(e, t) {
    (Un.C(e, t), lg("preconnect", e, t));
  }
  function xv(e, t, n) {
    Un.L(e, t, n);
    var a = zl;
    if (a && e && t) {
      var s = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === "image" && n && n.imageSrcSet
        ? ((s += '[imagesrcset="' + qt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (s += '[imagesizes="' + qt(n.imageSizes) + '"]'))
        : (s += '[href="' + qt(e) + '"]');
      var i = s;
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
        a.querySelector(s) !== null ||
          (t === "style" && a.querySelector(_s(i))) ||
          (t === "script" && a.querySelector(Bs(i))) ||
          ((t = a.createElement("link")),
          ct(t, "link", e),
          tt(t),
          a.head.appendChild(t)));
    }
  }
  function vv(e, t) {
    Un.m(e, t);
    var n = zl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        s =
          'link[rel="modulepreload"][as="' + qt(a) + '"][href="' + qt(e) + '"]',
        i = s;
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
        n.querySelector(s) === null)
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
          ct(a, "link", e),
          tt(a),
          n.head.appendChild(a));
      }
    }
  }
  function yv(e, t, n) {
    Un.S(e, t, n);
    var a = zl;
    if (a && e) {
      var s = el(a).hoistableStyles,
        i = Ml(e);
      t = t || "default";
      var d = s.get(i);
      if (!d) {
        var g = { loading: 0, preload: null };
        if ((d = a.querySelector(_s(i)))) g.loading = 5;
        else {
          ((e = p({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
            (n = Wt.get(i)) && qc(e, n));
          var b = (d = a.createElement("link"));
          (tt(b),
            ct(b, "link", e),
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
          s.set(i, d));
      }
    }
  }
  function bv(e, t) {
    Un.X(e, t);
    var n = zl;
    if (n && e) {
      var a = el(n).hoistableScripts,
        s = Dl(e),
        i = a.get(s);
      i ||
        ((i = n.querySelector(Bs(s))),
        i ||
          ((e = p({ src: e, async: !0 }, t)),
          (t = Wt.get(s)) && Gc(e, t),
          (i = n.createElement("script")),
          tt(i),
          ct(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(s, i));
    }
  }
  function jv(e, t) {
    Un.M(e, t);
    var n = zl;
    if (n && e) {
      var a = el(n).hoistableScripts,
        s = Dl(e),
        i = a.get(s);
      i ||
        ((i = n.querySelector(Bs(s))),
        i ||
          ((e = p({ src: e, async: !0, type: "module" }, t)),
          (t = Wt.get(s)) && Gc(e, t),
          (i = n.createElement("script")),
          tt(i),
          ct(i, "link", e),
          n.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(s, i));
    }
  }
  function sg(e, t, n, a) {
    var s = (s = oe.current) ? Wi(s) : null;
    if (!s) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((t = Ml(n.href)),
            (n = el(s).hoistableStyles),
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
          var i = el(s).hoistableStyles,
            d = i.get(e);
          if (
            (d ||
              ((s = s.ownerDocument || s),
              (d = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, d),
              (i = s.querySelector(_s(e))) &&
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
                i || wv(s, e, n, d.state))),
            t && a === null)
          )
            throw Error(c(528, ""));
          return d;
        }
        if (t && a !== null) throw Error(c(529, ""));
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
              (n = el(s).hoistableScripts),
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
        throw Error(c(444, e));
    }
  }
  function Ml(e) {
    return 'href="' + qt(e) + '"';
  }
  function _s(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ig(e) {
    return p({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function wv(e, t, n, a) {
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
        ct(t, "link", n),
        tt(t),
        e.head.appendChild(t));
  }
  function Dl(e) {
    return '[src="' + qt(e) + '"]';
  }
  function Bs(e) {
    return "script[async]" + e;
  }
  function og(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + qt(n.href) + '"]');
          if (a) return ((t.instance = a), tt(a), a);
          var s = p({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            tt(a),
            ct(a, "style", s),
            $i(a, n.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          s = Ml(n.href);
          var i = e.querySelector(_s(s));
          if (i) return ((t.state.loading |= 4), (t.instance = i), tt(i), i);
          ((a = ig(n)),
            (s = Wt.get(s)) && qc(a, s),
            (i = (e.ownerDocument || e).createElement("link")),
            tt(i));
          var d = i;
          return (
            (d._p = new Promise(function (g, b) {
              ((d.onload = g), (d.onerror = b));
            })),
            ct(i, "link", a),
            (t.state.loading |= 4),
            $i(i, n.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = Dl(n.src)),
            (s = e.querySelector(Bs(i)))
              ? ((t.instance = s), tt(s), s)
              : ((a = n),
                (s = Wt.get(i)) && ((a = p({}, n)), Gc(a, s)),
                (e = e.ownerDocument || e),
                (s = e.createElement("script")),
                tt(s),
                ct(s, "link", a),
                e.head.appendChild(s),
                (t.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
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
        s = a.length ? a[a.length - 1] : null,
        i = s,
        d = 0;
      d < a.length;
      d++
    ) {
      var g = a[d];
      if (g.dataset.precedence === t) i = g;
      else if (i !== s) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function qc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Gc(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Pi = null;
  function rg(e, t, n) {
    if (Pi === null) {
      var a = new Map(),
        s = (Pi = new Map());
      s.set(n, a);
    } else ((s = Pi), (a = s.get(n)), a || ((a = new Map()), s.set(n, a)));
    if (a.has(e)) return a;
    for (
      a.set(e, null), n = n.getElementsByTagName(e), s = 0;
      s < n.length;
      s++
    ) {
      var i = n[s];
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
  function cg(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === "title" ? e.querySelector("head > title") : null
      ));
  }
  function Nv(e, t, n) {
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
  function ug(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Sv(e, t, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var s = Ml(a.href),
          i = t.querySelector(_s(s));
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
          (a = ig(a)),
          (s = Wt.get(s)) && qc(a, s),
          (i = i.createElement("link")),
          tt(i));
        var d = i;
        ((d._p = new Promise(function (g, b) {
          ((d.onload = g), (d.onerror = b));
        })),
          ct(i, "link", a),
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
  var Vc = 0;
  function Av(e, t) {
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
            0 < e.imgBytes && Vc === 0 && (Vc = 62500 * sv());
            var s = setTimeout(
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
              (e.imgBytes > Vc ? 50 : 800) + t
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(a), clearTimeout(s));
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
        t.forEach(Ev, e),
        (Ii = null),
        Fi.call(e)));
  }
  function Ev(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ii.get(e);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Ii.set(e, n));
        for (
          var s = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < s.length;
          i++
        ) {
          var d = s[i];
          (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
            (n.set(d.dataset.precedence, d), (a = d));
        }
        a && n.set(null, a);
      }
      ((s = t.instance),
        (d = s.getAttribute("data-precedence")),
        (i = n.get(d) || a),
        i === a && n.set(null, s),
        n.set(d, s),
        this.count++,
        (a = Fi.bind(this)),
        s.addEventListener("load", a),
        s.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(s, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(s, e.firstChild)),
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
  function kv(e, t, n, a, s, i, d, g, b) {
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
      (this.onUncaughtError = s),
      (this.onCaughtError = i),
      (this.onRecoverableError = d),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.incompleteTransitions = new Map()));
  }
  function dg(e, t, n, a, s, i, d, g, b, T, B, q) {
    return (
      (e = new kv(e, t, n, d, b, T, B, q, g)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = Mt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = wr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: n, cache: t }),
      Er(i),
      e
    );
  }
  function fg(e) {
    return e ? ((e = ul), e) : ul;
  }
  function mg(e, t, n, a, s, i) {
    ((s = fg(s)),
      a.context === null ? (a.context = s) : (a.pendingContext = s),
      (a = In(t)),
      (a.payload = { element: n }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (n = ea(e, a, t)),
      n !== null && (Tt(n, e, t), gs(n, e, t)));
  }
  function gg(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Xc(e, t) {
    (gg(e, t), (e = e.alternate) && gg(e, t));
  }
  function pg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ca(e, 67108864);
      (t !== null && Tt(t, e, 67108864), Xc(e, 67108864));
    }
  }
  function hg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ht();
      t = $a(t);
      var n = Ca(e, t);
      (n !== null && Tt(n, e, t), Xc(e, t));
    }
  }
  var to = !0;
  function Tv(e, t, n, a) {
    var s = S.T;
    S.T = null;
    var i = U.p;
    try {
      ((U.p = 2), Qc(e, t, n, a));
    } finally {
      ((U.p = i), (S.T = s));
    }
  }
  function Ov(e, t, n, a) {
    var s = S.T;
    S.T = null;
    var i = U.p;
    try {
      ((U.p = 8), Qc(e, t, n, a));
    } finally {
      ((U.p = i), (S.T = s));
    }
  }
  function Qc(e, t, n, a) {
    if (to) {
      var s = Zc(a);
      if (s === null) (zc(e, t, a, no, n), vg(e, a));
      else if (zv(s, e, t, n, a)) a.stopPropagation();
      else if ((vg(e, a), t & 4 && -1 < Cv.indexOf(e))) {
        for (; s !== null; ) {
          var i = Ia(s);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var d = rn(i.pendingLanes);
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
                ((g = Ca(i, 2)), g !== null && Tt(g, i, 2), Yi(), Xc(i, 2));
            }
          if (((i = Zc(a)), i === null && zc(e, t, a, no, n), i === s)) break;
          s = i;
        }
        s !== null && a.stopPropagation();
      } else zc(e, t, a, null, n);
    }
  }
  function Zc(e) {
    return ((e = Jo(e)), Kc(e));
  }
  var no = null;
  function Kc(e) {
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
  function xg(e) {
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
        switch (Uo()) {
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
  var Jc = !1,
    da = null,
    fa = null,
    ma = null,
    Hs = new Map(),
    Us = new Map(),
    ga = [],
    Cv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function vg(e, t) {
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
  function Ls(e, t, n, a, s, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [s],
        }),
        t !== null && ((t = Ia(t)), t !== null && pg(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function zv(e, t, n, a, s) {
    switch (t) {
      case "focusin":
        return ((da = Ls(da, e, t, n, a, s)), !0);
      case "dragenter":
        return ((fa = Ls(fa, e, t, n, a, s)), !0);
      case "mouseover":
        return ((ma = Ls(ma, e, t, n, a, s)), !0);
      case "pointerover":
        var i = s.pointerId;
        return (Hs.set(i, Ls(Hs.get(i) || null, e, t, n, a, s)), !0);
      case "gotpointercapture":
        return (
          (i = s.pointerId),
          Us.set(i, Ls(Us.get(i) || null, e, t, n, a, s)),
          !0
        );
    }
    return !1;
  }
  function yg(e) {
    var t = Fa(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = x(n)), t !== null)) {
            ((e.blockedOn = t),
              Mu(e.priority, function () {
                hg(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = y(n)), t !== null)) {
            ((e.blockedOn = t),
              Mu(e.priority, function () {
                hg(n);
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
      var n = Zc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((Ko = a), n.target.dispatchEvent(a), (Ko = null));
      } else return ((t = Ia(n)), t !== null && pg(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function bg(e, t, n) {
    ao(e) && n.delete(t);
  }
  function Mv() {
    ((Jc = !1),
      da !== null && ao(da) && (da = null),
      fa !== null && ao(fa) && (fa = null),
      ma !== null && ao(ma) && (ma = null),
      Hs.forEach(bg),
      Us.forEach(bg));
  }
  function lo(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Jc ||
        ((Jc = !0),
        l.unstable_scheduleCallback(l.unstable_NormalPriority, Mv)));
  }
  var so = null;
  function jg(e) {
    so !== e &&
      ((so = e),
      l.unstable_scheduleCallback(l.unstable_NormalPriority, function () {
        so === e && (so = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            a = e[t + 1],
            s = e[t + 2];
          if (typeof a != "function") {
            if (Kc(a || n) === null) continue;
            break;
          }
          var i = Ia(n);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Zr(i, { pending: !0, data: s, method: n.method, action: a }, a, s));
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
      (yg(n), n.blockedOn === null && ga.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var s = n[a],
          i = n[a + 1],
          d = s[wt] || null;
        if (typeof i == "function") d || jg(n);
        else if (d) {
          var g = null;
          if (i && i.hasAttribute("formAction")) {
            if (((s = i), (d = i[wt] || null))) g = d.formAction;
            else if (Kc(s) !== null) continue;
          } else g = d.action;
          (typeof g == "function" ? (n[a + 1] = g) : (n.splice(a, 3), (a -= 3)),
            jg(n));
        }
      }
  }
  function wg() {
    function e(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (d) {
              return (s = d);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (s !== null && (s(), (s = null)), a || setTimeout(n, 20));
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
        s = null;
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
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Wc(e) {
    this._internalRoot = e;
  }
  ((io.prototype.render = Wc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(c(409));
      var n = t.current,
        a = Ht();
      mg(n, a, e, t, null, null);
    }),
    (io.prototype.unmount = Wc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (mg(e.current, 2, null, e, null, null), Yi(), (t[Pa] = null));
        }
      }));
  function io(e) {
    this._internalRoot = e;
  }
  io.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Yo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ga.length && t !== 0 && t < ga[n].priority; n++);
      (ga.splice(n, 0, e), n === 0 && yg(e));
    }
  };
  var Ng = r.version;
  if (Ng !== "19.2.1") throw Error(c(527, Ng, "19.2.1"));
  U.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(c(188))
        : ((e = Object.keys(e).join(",")), Error(c(268, e)));
    return (
      (e = h(t)),
      (e = e !== null ? j(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Dv = {
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
        ((Na = oo.inject(Dv)), (xt = oo));
      } catch {}
  }
  return (
    (qs.createRoot = function (e, t) {
      if (!f(e)) throw Error(c(299));
      var n = !1,
        a = "",
        s = Cf,
        i = zf,
        d = Mf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (d = t.onRecoverableError)),
        (t = dg(e, 1, !1, null, null, n, a, null, s, i, d, wg)),
        (e[Pa] = t.current),
        Cc(e),
        new Wc(t)
      );
    }),
    (qs.hydrateRoot = function (e, t, n) {
      if (!f(e)) throw Error(c(299));
      var a = !1,
        s = "",
        i = Cf,
        d = zf,
        g = Mf,
        b = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (i = n.onUncaughtError),
          n.onCaughtError !== void 0 && (d = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (b = n.formState)),
        (t = dg(e, 1, !0, t, n ?? null, a, s, b, i, d, g, wg)),
        (t.context = fg(null)),
        (n = t.current),
        (a = Ht()),
        (a = $a(a)),
        (s = In(a)),
        (s.callback = null),
        ea(n, s, a),
        (n = a),
        (t.current.lanes = n),
        Ve(t, n),
        fn(t),
        (e[Pa] = t.current),
        Cc(e),
        new io(t)
      );
    }),
    (qs.version = "19.2.1"),
    qs
  );
}
var Dg;
function Vv() {
  if (Dg) return Pc.exports;
  Dg = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return (l(), (Pc.exports = Gv()), Pc.exports);
}
var Xv = Vv(),
  O = To();
const K = gp(O),
  Qv = Bv({ __proto__: null, default: K }, [O]);
var Zv = (l, r, u, c, f, m, x, y) => {
    let v = document.documentElement,
      h = ["light", "dark"];
    function j(z) {
      ((Array.isArray(l) ? l : [l]).forEach(M => {
        let Y = M === "class",
          V = Y && m ? f.map(G => m[G] || G) : f;
        Y
          ? (v.classList.remove(...V), v.classList.add(m && m[z] ? m[z] : z))
          : v.setAttribute(M, z);
      }),
        p(z));
    }
    function p(z) {
      y && h.includes(z) && (v.style.colorScheme = z);
    }
    function E() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (c) j(c);
    else
      try {
        let z = localStorage.getItem(r) || u,
          M = x && z === "system" ? E() : z;
        j(M);
      } catch {}
  },
  Kv = O.createContext(void 0),
  Jv = { setTheme: l => {}, themes: [] },
  Wv = () => {
    var l;
    return (l = O.useContext(Kv)) != null ? l : Jv;
  };
O.memo(
  ({
    forcedTheme: l,
    storageKey: r,
    attribute: u,
    enableSystem: c,
    enableColorScheme: f,
    defaultTheme: m,
    value: x,
    themes: y,
    nonce: v,
    scriptProps: h,
  }) => {
    let j = JSON.stringify([u, r, m, l, y, x, c, f]).slice(1, -1);
    return O.createElement("script", {
      ...h,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? v : "",
      dangerouslySetInnerHTML: { __html: `(${Zv.toString()})(${j})` },
    });
  }
);
var yu = pp();
const $v = gp(yu);
function Pv(l) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    u = document.createElement("style");
  ((u.type = "text/css"),
    r.appendChild(u),
    u.styleSheet
      ? (u.styleSheet.cssText = l)
      : u.appendChild(document.createTextNode(l)));
}
const Fv = l => {
    switch (l) {
      case "success":
        return ty;
      case "info":
        return ay;
      case "warning":
        return ny;
      case "error":
        return ly;
      default:
        return null;
    }
  },
  Iv = Array(12).fill(0),
  ey = ({ visible: l, className: r }) =>
    K.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
        "data-visible": l,
      },
      K.createElement(
        "div",
        { className: "sonner-spinner" },
        Iv.map((u, c) =>
          K.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${c}`,
          })
        )
      )
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
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  ny = K.createElement(
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
  ay = K.createElement(
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
  ly = K.createElement(
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
  sy = K.createElement(
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
  iy = () => {
    const [l, r] = K.useState(document.hidden);
    return (
      K.useEffect(() => {
        const u = () => {
          r(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", u),
          () => window.removeEventListener("visibilitychange", u)
        );
      }, []),
      l
    );
  };
let cu = 1;
class oy {
  constructor() {
    ((this.subscribe = r => (
      this.subscribers.push(r),
      () => {
        const u = this.subscribers.indexOf(r);
        this.subscribers.splice(u, 1);
      }
    )),
      (this.publish = r => {
        this.subscribers.forEach(u => u(r));
      }),
      (this.addToast = r => {
        (this.publish(r), (this.toasts = [...this.toasts, r]));
      }),
      (this.create = r => {
        var u;
        const { message: c, ...f } = r,
          m =
            typeof r?.id == "number" ||
            ((u = r.id) == null ? void 0 : u.length) > 0
              ? r.id
              : cu++,
          x = this.toasts.find(v => v.id === m),
          y = r.dismissible === void 0 ? !0 : r.dismissible;
        return (
          this.dismissedToasts.has(m) && this.dismissedToasts.delete(m),
          x
            ? (this.toasts = this.toasts.map(v =>
                v.id === m
                  ? (this.publish({ ...v, ...r, id: m, title: c }),
                    { ...v, ...r, id: m, dismissible: y, title: c })
                  : v
              ))
            : this.addToast({ title: c, ...f, dismissible: y, id: m }),
          m
        );
      }),
      (this.dismiss = r => (
        r
          ? (this.dismissedToasts.add(r),
            requestAnimationFrame(() =>
              this.subscribers.forEach(u => u({ id: r, dismiss: !0 }))
            ))
          : this.toasts.forEach(u => {
              this.subscribers.forEach(c => c({ id: u.id, dismiss: !0 }));
            }),
        r
      )),
      (this.message = (r, u) => this.create({ ...u, message: r })),
      (this.error = (r, u) => this.create({ ...u, message: r, type: "error" })),
      (this.success = (r, u) =>
        this.create({ ...u, type: "success", message: r })),
      (this.info = (r, u) => this.create({ ...u, type: "info", message: r })),
      (this.warning = (r, u) =>
        this.create({ ...u, type: "warning", message: r })),
      (this.loading = (r, u) =>
        this.create({ ...u, type: "loading", message: r })),
      (this.promise = (r, u) => {
        if (!u) return;
        let c;
        u.loading !== void 0 &&
          (c = this.create({
            ...u,
            promise: r,
            type: "loading",
            message: u.loading,
            description:
              typeof u.description != "function" ? u.description : void 0,
          }));
        const f = Promise.resolve(r instanceof Function ? r() : r);
        let m = c !== void 0,
          x;
        const y = f
            .then(async h => {
              if (((x = ["resolve", h]), K.isValidElement(h)))
                ((m = !1), this.create({ id: c, type: "default", message: h }));
              else if (cy(h) && !h.ok) {
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
                this.create({ id: c, type: "error", description: E, ...M });
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
                this.create({ id: c, type: "error", description: E, ...M });
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
                this.create({ id: c, type: "success", description: E, ...M });
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
                  z =
                    typeof j == "object" && !K.isValidElement(j)
                      ? j
                      : { message: j };
                this.create({ id: c, type: "error", description: p, ...z });
              }
            })
            .finally(() => {
              (m && (this.dismiss(c), (c = void 0)),
                u.finally == null || u.finally.call(u));
            }),
          v = () =>
            new Promise((h, j) =>
              y.then(() => (x[0] === "reject" ? j(x[1]) : h(x[1]))).catch(j)
            );
        return typeof c != "string" && typeof c != "number"
          ? { unwrap: v }
          : Object.assign(c, { unwrap: v });
      }),
      (this.custom = (r, u) => {
        const c = u?.id || cu++;
        return (this.create({ jsx: r(c), id: c, ...u }), c);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter(r => !this.dismissedToasts.has(r.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const Ot = new oy(),
  ry = (l, r) => {
    const u = r?.id || cu++;
    return (Ot.addToast({ title: l, ...r, id: u }), u);
  },
  cy = l =>
    l &&
    typeof l == "object" &&
    "ok" in l &&
    typeof l.ok == "boolean" &&
    "status" in l &&
    typeof l.status == "number",
  uy = ry,
  dy = () => Ot.toasts,
  fy = () => Ot.getActiveToasts();
Object.assign(
  uy,
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
  { getHistory: dy, getToasts: fy }
);
Pv(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
);
function ro(l) {
  return l.label !== void 0;
}
const my = 3,
  gy = "24px",
  py = "16px",
  _g = 4e3,
  hy = 356,
  xy = 14,
  vy = 45,
  yy = 200;
function mn(...l) {
  return l.filter(Boolean).join(" ");
}
function by(l) {
  const [r, u] = l.split("-"),
    c = [];
  return (r && c.push(r), u && c.push(u), c);
}
const jy = l => {
  var r, u, c, f, m, x, y, v, h;
  const {
      invert: j,
      toast: p,
      unstyled: E,
      interacting: z,
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
    } = l,
    [ie, ce] = K.useState(null),
    [w, H] = K.useState(null),
    [R, X] = K.useState(!1),
    [W, oe] = K.useState(!1),
    [ae, de] = K.useState(!1),
    [ke, at] = K.useState(!1),
    [gt, lt] = K.useState(!1),
    [yn, $t] = K.useState(0),
    [Ql, Ka] = K.useState(0),
    ba = K.useRef(p.duration || he || _g),
    Zl = K.useRef(null),
    Ct = K.useRef(null),
    Kl = G === 0,
    Jl = G + 1 <= Y,
    pt = p.type,
    Vn = p.dismissible !== !1,
    ht = p.className || "",
    Uo = p.descriptionClassName || "",
    ja = K.useMemo(
      () => V.findIndex(fe => fe.toastId === p.id) || 0,
      [V, p.id]
    ),
    Js = K.useMemo(() => {
      var fe;
      return (fe = p.closeButton) != null ? fe : se;
    }, [p.closeButton, se]),
    wa = K.useMemo(() => p.duration || he || _g, [p.duration, he]),
    Wl = K.useRef(0),
    bn = K.useRef(0),
    Ws = K.useRef(0),
    Xn = K.useRef(null),
    [Na, xt] = xe.split("-"),
    Pt = K.useMemo(
      () => V.reduce((fe, qe, et) => (et >= ja ? fe : fe + qe.height), 0),
      [V, ja]
    ),
    ut = iy(),
    Lo = p.invert || j,
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
      }, yy));
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
      J || z || ut
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
  }, [J, z, p, pt, ut, on]),
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
    return K.createElement(ey, {
      className: mn(
        S?.loader,
        p == null || (fe = p.classNames) == null ? void 0 : fe.loader
      ),
      visible: pt === "loading",
    });
  }
  const Wa = p.icon || U?.[pt] || Fv(pt);
  var Sa, rn;
  return K.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Ct,
      className: mn(
        we,
        ht,
        S?.toast,
        p == null || (r = p.classNames) == null ? void 0 : r.toast,
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
      "data-invert": Lo,
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
        (de(!1), ce(null), (Xn.current = null));
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
        if (Math.abs(yt) >= vy || Aa > 0.11) {
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
        (lt(!1), de(!1), ce(null));
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
        const bt = (Aa = l.swipeDirections) != null ? Aa : by(xe);
        !ie &&
          (Math.abs(yt) > 1 || Math.abs(Ve) > 1) &&
          ce(Math.abs(yt) > Math.abs(Ve) ? "x" : "y");
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
              p == null || (c = p.classNames) == null ? void 0 : c.closeButton
            ),
          },
          (rn = U?.close) != null ? rn : sy
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
                Uo,
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
      : p.cancel && ro(p.cancel)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: p.cancelButtonStyle || Z,
              onClick: fe => {
                ro(p.cancel) &&
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
      : p.action && ro(p.action)
        ? K.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: p.actionButtonStyle || ge,
              onClick: fe => {
                ro(p.action) &&
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
function Bg() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const l = document.documentElement.getAttribute("dir");
  return l === "auto" || !l
    ? window.getComputedStyle(document.documentElement).direction
    : l;
}
function wy(l, r) {
  const u = {};
  return (
    [l, r].forEach((c, f) => {
      const m = f === 1,
        x = m ? "--mobile-offset" : "--offset",
        y = m ? py : gy;
      function v(h) {
        ["top", "right", "bottom", "left"].forEach(j => {
          u[`${x}-${j}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof c == "number" || typeof c == "string"
        ? v(c)
        : typeof c == "object"
          ? ["top", "right", "bottom", "left"].forEach(h => {
              c[h] === void 0
                ? (u[`${x}-${h}`] = y)
                : (u[`${x}-${h}`] =
                    typeof c[h] == "number" ? `${c[h]}px` : c[h]);
            })
          : v(y);
    }),
    u
  );
}
const Ny = K.forwardRef(function (r, u) {
    const {
        id: c,
        invert: f,
        position: m = "bottom-right",
        hotkey: x = ["altKey", "KeyT"],
        expand: y,
        closeButton: v,
        className: h,
        offset: j,
        mobileOffset: p,
        theme: E = "light",
        richColors: z,
        duration: M,
        style: Y,
        visibleToasts: V = my,
        toastOptions: G,
        dir: I = Bg(),
        gap: J = xy,
        icons: P,
        containerAriaLabel: ee = "Notifications",
      } = r,
      [se, Q] = K.useState([]),
      Z = K.useMemo(
        () =>
          c ? se.filter(R => R.toasterId === c) : se.filter(R => !R.toasterId),
        [se, c]
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
      ce = K.useRef(null),
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
              $v.flushSync(() => {
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
            ce.current &&
              (ce.current.focus({ preventScroll: !0 }),
              (ce.current = null),
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
                  dir: I === "auto" ? Bg() : I,
                  tabIndex: -1,
                  ref: D,
                  className: h,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": S,
                  "data-y-position": oe,
                  "data-x-position": ae,
                  style: {
                    "--front-toast-height": `${((W = we[0]) == null ? void 0 : W.height) || 0}px`,
                    "--width": `${hy}px`,
                    "--gap": `${J}px`,
                    ...Y,
                    ...wy(j, p),
                  },
                  onBlur: de => {
                    w.current &&
                      !de.currentTarget.contains(de.relatedTarget) &&
                      ((w.current = !1),
                      ce.current &&
                        (ce.current.focus({ preventScroll: !0 }),
                        (ce.current = null)));
                  },
                  onFocus: de => {
                    (de.target instanceof HTMLElement &&
                      de.target.dataset.dismissible === "false") ||
                      w.current ||
                      ((w.current = !0), (ce.current = de.relatedTarget));
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
                  return K.createElement(jy, {
                    key: de.id,
                    icons: P,
                    index: ke,
                    toast: de,
                    defaultRichColors: z,
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
                    swipeDirections: r.swipeDirections,
                  });
                })
              )
            : null;
        })
      )
    );
  }),
  Sy = ({ ...l }) => {
    const { theme: r = "system" } = Wv();
    return o.jsx(Ny, {
      "data-loc": "client/src/components/ui/sonner.tsx:8",
      theme: r,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...l,
    });
  };
function Yn(l, r, { checkForDefaultPrevented: u = !0 } = {}) {
  return function (f) {
    if ((l?.(f), u === !1 || !f.defaultPrevented)) return r?.(f);
  };
}
function Rg(l, r) {
  if (typeof l == "function") return l(r);
  l != null && (l.current = r);
}
function hp(...l) {
  return r => {
    let u = !1;
    const c = l.map(f => {
      const m = Rg(f, r);
      return (!u && typeof m == "function" && (u = !0), m);
    });
    if (u)
      return () => {
        for (let f = 0; f < c.length; f++) {
          const m = c[f];
          typeof m == "function" ? m() : Rg(l[f], null);
        }
      };
  };
}
function Qa(...l) {
  return O.useCallback(hp(...l), l);
}
function xp(l, r = []) {
  let u = [];
  function c(m, x) {
    const y = O.createContext(x),
      v = u.length;
    u = [...u, x];
    const h = p => {
      const { scope: E, children: z, ...M } = p,
        Y = E?.[l]?.[v] || y,
        V = O.useMemo(() => M, Object.values(M));
      return o.jsx(Y.Provider, { value: V, children: z });
    };
    h.displayName = m + "Provider";
    function j(p, E) {
      const z = E?.[l]?.[v] || y,
        M = O.useContext(z);
      if (M) return M;
      if (x !== void 0) return x;
      throw new Error(`\`${p}\` must be used within \`${m}\``);
    }
    return [h, j];
  }
  const f = () => {
    const m = u.map(x => O.createContext(x));
    return function (y) {
      const v = y?.[l] || m;
      return O.useMemo(() => ({ [`__scope${l}`]: { ...y, [l]: v } }), [y, v]);
    };
  };
  return ((f.scopeName = l), [c, Ay(f, ...r)]);
}
function Ay(...l) {
  const r = l[0];
  if (l.length === 1) return r;
  const u = () => {
    const c = l.map(f => ({ useScope: f(), scopeName: f.scopeName }));
    return function (m) {
      const x = c.reduce((y, { useScope: v, scopeName: h }) => {
        const p = v(m)[`__scope${h}`];
        return { ...y, ...p };
      }, {});
      return O.useMemo(() => ({ [`__scope${r.scopeName}`]: x }), [x]);
    };
  };
  return ((u.scopeName = r.scopeName), u);
}
function vp(l) {
  const r = ky(l),
    u = O.forwardRef((c, f) => {
      const { children: m, ...x } = c,
        y = O.Children.toArray(m),
        v = y.find(Oy);
      if (v) {
        const h = v.props.children,
          j = y.map(p =>
            p === v
              ? O.Children.count(h) > 1
                ? O.Children.only(null)
                : O.isValidElement(h)
                  ? h.props.children
                  : null
              : p
          );
        return o.jsx(r, {
          ...x,
          ref: f,
          children: O.isValidElement(h) ? O.cloneElement(h, void 0, j) : null,
        });
      }
      return o.jsx(r, { ...x, ref: f, children: m });
    });
  return ((u.displayName = `${l}.Slot`), u);
}
var Ey = vp("Slot");
function ky(l) {
  const r = O.forwardRef((u, c) => {
    const { children: f, ...m } = u;
    if (O.isValidElement(f)) {
      const x = zy(f),
        y = Cy(m, f.props);
      return (
        f.type !== O.Fragment && (y.ref = c ? hp(c, x) : x),
        O.cloneElement(f, y)
      );
    }
    return O.Children.count(f) > 1 ? O.Children.only(null) : null;
  });
  return ((r.displayName = `${l}.SlotClone`), r);
}
var yp = Symbol("radix.slottable");
function Ty(l) {
  const r = ({ children: u }) => o.jsx(o.Fragment, { children: u });
  return ((r.displayName = `${l}.Slottable`), (r.__radixId = yp), r);
}
function Oy(l) {
  return (
    O.isValidElement(l) &&
    typeof l.type == "function" &&
    "__radixId" in l.type &&
    l.type.__radixId === yp
  );
}
function Cy(l, r) {
  const u = { ...r };
  for (const c in r) {
    const f = l[c],
      m = r[c];
    /^on[A-Z]/.test(c)
      ? f && m
        ? (u[c] = (...y) => {
            const v = m(...y);
            return (f(...y), v);
          })
        : f && (u[c] = f)
      : c === "style"
        ? (u[c] = { ...f, ...m })
        : c === "className" && (u[c] = [f, m].filter(Boolean).join(" "));
  }
  return { ...l, ...u };
}
function zy(l) {
  let r = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    u = r && "isReactWarning" in r && r.isReactWarning;
  return u
    ? l.ref
    : ((r = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (u = r && "isReactWarning" in r && r.isReactWarning),
      u ? l.props.ref : l.props.ref || l.ref);
}
var My = [
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
  Za = My.reduce((l, r) => {
    const u = vp(`Primitive.${r}`),
      c = O.forwardRef((f, m) => {
        const { asChild: x, ...y } = f,
          v = x ? u : r;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          o.jsx(v, { ...y, ref: m })
        );
      });
    return ((c.displayName = `Primitive.${r}`), { ...l, [r]: c });
  }, {});
function Dy(l, r) {
  l && yu.flushSync(() => l.dispatchEvent(r));
}
function Oo(l) {
  const r = O.useRef(l);
  return (
    O.useEffect(() => {
      r.current = l;
    }),
    O.useMemo(
      () =>
        (...u) =>
          r.current?.(...u),
      []
    )
  );
}
function _y(l, r = globalThis?.document) {
  const u = Oo(l);
  O.useEffect(() => {
    const c = f => {
      f.key === "Escape" && u(f);
    };
    return (
      r.addEventListener("keydown", c, { capture: !0 }),
      () => r.removeEventListener("keydown", c, { capture: !0 })
    );
  }, [u, r]);
}
var By = "DismissableLayer",
  uu = "dismissableLayer.update",
  Ry = "dismissableLayer.pointerDownOutside",
  Hy = "dismissableLayer.focusOutside",
  Hg,
  bp = O.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  jp = O.forwardRef((l, r) => {
    const {
        disableOutsidePointerEvents: u = !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: f,
        onFocusOutside: m,
        onInteractOutside: x,
        onDismiss: y,
        ...v
      } = l,
      h = O.useContext(bp),
      [j, p] = O.useState(null),
      E = j?.ownerDocument ?? globalThis?.document,
      [, z] = O.useState({}),
      M = Qa(r, Q => p(Q)),
      Y = Array.from(h.layers),
      [V] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      G = Y.indexOf(V),
      I = j ? Y.indexOf(j) : -1,
      J = h.layersWithOutsidePointerEventsDisabled.size > 0,
      P = I >= G,
      ee = Yy(Q => {
        const Z = Q.target,
          ge = [...h.branches].some(we => we.contains(Z));
        !P || ge || (f?.(Q), x?.(Q), Q.defaultPrevented || y?.());
      }, E),
      se = qy(Q => {
        const Z = Q.target;
        [...h.branches].some(we => we.contains(Z)) ||
          (m?.(Q), x?.(Q), Q.defaultPrevented || y?.());
      }, E);
    return (
      _y(Q => {
        I === h.layers.size - 1 &&
          (c?.(Q), !Q.defaultPrevented && y && (Q.preventDefault(), y()));
      }, E),
      O.useEffect(() => {
        if (j)
          return (
            u &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Hg = E.body.style.pointerEvents),
                (E.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(j)),
            h.layers.add(j),
            Ug(),
            () => {
              u &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (E.body.style.pointerEvents = Hg);
            }
          );
      }, [j, E, u, h]),
      O.useEffect(
        () => () => {
          j &&
            (h.layers.delete(j),
            h.layersWithOutsidePointerEventsDisabled.delete(j),
            Ug());
        },
        [j, h]
      ),
      O.useEffect(() => {
        const Q = () => z({});
        return (
          document.addEventListener(uu, Q),
          () => document.removeEventListener(uu, Q)
        );
      }, []),
      o.jsx(Za.div, {
        ...v,
        ref: M,
        style: {
          pointerEvents: J ? (P ? "auto" : "none") : void 0,
          ...l.style,
        },
        onFocusCapture: Yn(l.onFocusCapture, se.onFocusCapture),
        onBlurCapture: Yn(l.onBlurCapture, se.onBlurCapture),
        onPointerDownCapture: Yn(
          l.onPointerDownCapture,
          ee.onPointerDownCapture
        ),
      })
    );
  });
jp.displayName = By;
var Uy = "DismissableLayerBranch",
  Ly = O.forwardRef((l, r) => {
    const u = O.useContext(bp),
      c = O.useRef(null),
      f = Qa(r, c);
    return (
      O.useEffect(() => {
        const m = c.current;
        if (m)
          return (
            u.branches.add(m),
            () => {
              u.branches.delete(m);
            }
          );
      }, [u.branches]),
      o.jsx(Za.div, { ...l, ref: f })
    );
  });
Ly.displayName = Uy;
function Yy(l, r = globalThis?.document) {
  const u = Oo(l),
    c = O.useRef(!1),
    f = O.useRef(() => {});
  return (
    O.useEffect(() => {
      const m = y => {
          if (y.target && !c.current) {
            let v = function () {
              wp(Ry, u, h, { discrete: !0 });
            };
            const h = { originalEvent: y };
            y.pointerType === "touch"
              ? (r.removeEventListener("click", f.current),
                (f.current = v),
                r.addEventListener("click", f.current, { once: !0 }))
              : v();
          } else r.removeEventListener("click", f.current);
          c.current = !1;
        },
        x = window.setTimeout(() => {
          r.addEventListener("pointerdown", m);
        }, 0);
      return () => {
        (window.clearTimeout(x),
          r.removeEventListener("pointerdown", m),
          r.removeEventListener("click", f.current));
      };
    }, [r, u]),
    { onPointerDownCapture: () => (c.current = !0) }
  );
}
function qy(l, r = globalThis?.document) {
  const u = Oo(l),
    c = O.useRef(!1);
  return (
    O.useEffect(() => {
      const f = m => {
        m.target &&
          !c.current &&
          wp(Hy, u, { originalEvent: m }, { discrete: !1 });
      };
      return (
        r.addEventListener("focusin", f),
        () => r.removeEventListener("focusin", f)
      );
    }, [r, u]),
    {
      onFocusCapture: () => (c.current = !0),
      onBlurCapture: () => (c.current = !1),
    }
  );
}
function Ug() {
  const l = new CustomEvent(uu);
  document.dispatchEvent(l);
}
function wp(l, r, u, { discrete: c }) {
  const f = u.originalEvent.target,
    m = new CustomEvent(l, { bubbles: !1, cancelable: !0, detail: u });
  (r && f.addEventListener(l, r, { once: !0 }),
    c ? Dy(f, m) : f.dispatchEvent(m));
}
var Vs = globalThis?.document ? O.useLayoutEffect : () => {};
const Gy = ["top", "right", "bottom", "left"],
  xa = Math.min,
  Ut = Math.max,
  jo = Math.round,
  co = Math.floor,
  hn = l => ({ x: l, y: l }),
  Vy = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Xy = { start: "end", end: "start" };
function du(l, r, u) {
  return Ut(l, xa(r, u));
}
function qn(l, r) {
  return typeof l == "function" ? l(r) : l;
}
function Gn(l) {
  return l.split("-")[0];
}
function ql(l) {
  return l.split("-")[1];
}
function bu(l) {
  return l === "x" ? "y" : "x";
}
function ju(l) {
  return l === "y" ? "height" : "width";
}
const Qy = new Set(["top", "bottom"]);
function pn(l) {
  return Qy.has(Gn(l)) ? "y" : "x";
}
function wu(l) {
  return bu(pn(l));
}
function Zy(l, r, u) {
  u === void 0 && (u = !1);
  const c = ql(l),
    f = wu(l),
    m = ju(f);
  let x =
    f === "x"
      ? c === (u ? "end" : "start")
        ? "right"
        : "left"
      : c === "start"
        ? "bottom"
        : "top";
  return (r.reference[m] > r.floating[m] && (x = wo(x)), [x, wo(x)]);
}
function Ky(l) {
  const r = wo(l);
  return [fu(l), r, fu(r)];
}
function fu(l) {
  return l.replace(/start|end/g, r => Xy[r]);
}
const Lg = ["left", "right"],
  Yg = ["right", "left"],
  Jy = ["top", "bottom"],
  Wy = ["bottom", "top"];
function $y(l, r, u) {
  switch (l) {
    case "top":
    case "bottom":
      return u ? (r ? Yg : Lg) : r ? Lg : Yg;
    case "left":
    case "right":
      return r ? Jy : Wy;
    default:
      return [];
  }
}
function Py(l, r, u, c) {
  const f = ql(l);
  let m = $y(Gn(l), u === "start", c);
  return (
    f && ((m = m.map(x => x + "-" + f)), r && (m = m.concat(m.map(fu)))),
    m
  );
}
function wo(l) {
  return l.replace(/left|right|bottom|top/g, r => Vy[r]);
}
function Fy(l) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...l };
}
function Np(l) {
  return typeof l != "number"
    ? Fy(l)
    : { top: l, right: l, bottom: l, left: l };
}
function No(l) {
  const { x: r, y: u, width: c, height: f } = l;
  return {
    width: c,
    height: f,
    top: u,
    left: r,
    right: r + c,
    bottom: u + f,
    x: r,
    y: u,
  };
}
function qg(l, r, u) {
  let { reference: c, floating: f } = l;
  const m = pn(r),
    x = wu(r),
    y = ju(x),
    v = Gn(r),
    h = m === "y",
    j = c.x + c.width / 2 - f.width / 2,
    p = c.y + c.height / 2 - f.height / 2,
    E = c[y] / 2 - f[y] / 2;
  let z;
  switch (v) {
    case "top":
      z = { x: j, y: c.y - f.height };
      break;
    case "bottom":
      z = { x: j, y: c.y + c.height };
      break;
    case "right":
      z = { x: c.x + c.width, y: p };
      break;
    case "left":
      z = { x: c.x - f.width, y: p };
      break;
    default:
      z = { x: c.x, y: c.y };
  }
  switch (ql(r)) {
    case "start":
      z[x] -= E * (u && h ? -1 : 1);
      break;
    case "end":
      z[x] += E * (u && h ? -1 : 1);
      break;
  }
  return z;
}
const Iy = async (l, r, u) => {
  const {
      placement: c = "bottom",
      strategy: f = "absolute",
      middleware: m = [],
      platform: x,
    } = u,
    y = m.filter(Boolean),
    v = await (x.isRTL == null ? void 0 : x.isRTL(r));
  let h = await x.getElementRects({ reference: l, floating: r, strategy: f }),
    { x: j, y: p } = qg(h, c, v),
    E = c,
    z = {},
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
        initialPlacement: c,
        placement: E,
        strategy: f,
        middlewareData: z,
        rects: h,
        platform: x,
        elements: { reference: l, floating: r },
      });
    ((j = I ?? j),
      (p = J ?? p),
      (z = { ...z, [V]: { ...z[V], ...P } }),
      ee &&
        M <= 50 &&
        (M++,
        typeof ee == "object" &&
          (ee.placement && (E = ee.placement),
          ee.rects &&
            (h =
              ee.rects === !0
                ? await x.getElementRects({
                    reference: l,
                    floating: r,
                    strategy: f,
                  })
                : ee.rects),
          ({ x: j, y: p } = qg(h, E, v))),
        (Y = -1)));
  }
  return { x: j, y: p, placement: E, strategy: f, middlewareData: z };
};
async function Xs(l, r) {
  var u;
  r === void 0 && (r = {});
  const { x: c, y: f, platform: m, rects: x, elements: y, strategy: v } = l,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: j = "viewport",
      elementContext: p = "floating",
      altBoundary: E = !1,
      padding: z = 0,
    } = qn(r, l),
    M = Np(z),
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
        ? { x: c, y: f, width: x.floating.width, height: x.floating.height }
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
const e0 = l => ({
    name: "arrow",
    options: l,
    async fn(r) {
      const {
          x: u,
          y: c,
          placement: f,
          rects: m,
          platform: x,
          elements: y,
          middlewareData: v,
        } = r,
        { element: h, padding: j = 0 } = qn(l, r) || {};
      if (h == null) return {};
      const p = Np(j),
        E = { x: u, y: c },
        z = wu(f),
        M = ju(z),
        Y = await x.getDimensions(h),
        V = z === "y",
        G = V ? "top" : "left",
        I = V ? "bottom" : "right",
        J = V ? "clientHeight" : "clientWidth",
        P = m.reference[M] + m.reference[z] - E[z] - m.floating[M],
        ee = E[z] - m.reference[z],
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
        je = du(he, ye, xe),
        S =
          !v.arrow &&
          ql(f) != null &&
          ye !== je &&
          m.reference[M] / 2 - (ye < he ? we : Oe) - Y[M] / 2 < 0,
        U = S ? (ye < he ? ye - he : ye - xe) : 0;
      return {
        [z]: E[z] + U,
        data: {
          [z]: je,
          centerOffset: ye - je - U,
          ...(S && { alignmentOffset: U }),
        },
        reset: S,
      };
    },
  }),
  t0 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "flip",
        options: l,
        async fn(r) {
          var u, c;
          const {
              placement: f,
              middlewareData: m,
              rects: x,
              initialPlacement: y,
              platform: v,
              elements: h,
            } = r,
            {
              mainAxis: j = !0,
              crossAxis: p = !0,
              fallbackPlacements: E,
              fallbackStrategy: z = "bestFit",
              fallbackAxisSideDirection: M = "none",
              flipAlignment: Y = !0,
              ...V
            } = qn(l, r);
          if ((u = m.arrow) != null && u.alignmentOffset) return {};
          const G = Gn(f),
            I = pn(y),
            J = Gn(y) === y,
            P = await (v.isRTL == null ? void 0 : v.isRTL(h.floating)),
            ee = E || (J || !Y ? [wo(y)] : Ky(y)),
            se = M !== "none";
          !E && se && ee.push(...Py(y, Y, M, P));
          const Q = [y, ...ee],
            Z = await Xs(r, V),
            ge = [];
          let we = ((c = m.flip) == null ? void 0 : c.overflows) || [];
          if ((j && ge.push(Z[G]), p)) {
            const ye = Zy(f, x, P);
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
              switch (z) {
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
                          .reduce((ie, ce) => ie + ce, 0),
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
function Gg(l, r) {
  return {
    top: l.top - r.height,
    right: l.right - r.width,
    bottom: l.bottom - r.height,
    left: l.left - r.width,
  };
}
function Vg(l) {
  return Gy.some(r => l[r] >= 0);
}
const n0 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "hide",
        options: l,
        async fn(r) {
          const { rects: u } = r,
            { strategy: c = "referenceHidden", ...f } = qn(l, r);
          switch (c) {
            case "referenceHidden": {
              const m = await Xs(r, { ...f, elementContext: "reference" }),
                x = Gg(m, u.reference);
              return {
                data: { referenceHiddenOffsets: x, referenceHidden: Vg(x) },
              };
            }
            case "escaped": {
              const m = await Xs(r, { ...f, altBoundary: !0 }),
                x = Gg(m, u.floating);
              return { data: { escapedOffsets: x, escaped: Vg(x) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Sp = new Set(["left", "top"]);
async function a0(l, r) {
  const { placement: u, platform: c, elements: f } = l,
    m = await (c.isRTL == null ? void 0 : c.isRTL(f.floating)),
    x = Gn(u),
    y = ql(u),
    v = pn(u) === "y",
    h = Sp.has(x) ? -1 : 1,
    j = m && v ? -1 : 1,
    p = qn(r, l);
  let {
    mainAxis: E,
    crossAxis: z,
    alignmentAxis: M,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    y && typeof M == "number" && (z = y === "end" ? M * -1 : M),
    v ? { x: z * j, y: E * h } : { x: E * h, y: z * j }
  );
}
const l0 = function (l) {
    return (
      l === void 0 && (l = 0),
      {
        name: "offset",
        options: l,
        async fn(r) {
          var u, c;
          const { x: f, y: m, placement: x, middlewareData: y } = r,
            v = await a0(r, l);
          return x === ((u = y.offset) == null ? void 0 : u.placement) &&
            (c = y.arrow) != null &&
            c.alignmentOffset
            ? {}
            : { x: f + v.x, y: m + v.y, data: { ...v, placement: x } };
        },
      }
    );
  },
  s0 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "shift",
        options: l,
        async fn(r) {
          const { x: u, y: c, placement: f } = r,
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
            } = qn(l, r),
            h = { x: u, y: c },
            j = await Xs(r, v),
            p = pn(Gn(f)),
            E = bu(p);
          let z = h[E],
            M = h[p];
          if (m) {
            const V = E === "y" ? "top" : "left",
              G = E === "y" ? "bottom" : "right",
              I = z + j[V],
              J = z - j[G];
            z = du(I, z, J);
          }
          if (x) {
            const V = p === "y" ? "top" : "left",
              G = p === "y" ? "bottom" : "right",
              I = M + j[V],
              J = M - j[G];
            M = du(I, M, J);
          }
          const Y = y.fn({ ...r, [E]: z, [p]: M });
          return {
            ...Y,
            data: { x: Y.x - u, y: Y.y - c, enabled: { [E]: m, [p]: x } },
          };
        },
      }
    );
  },
  i0 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        options: l,
        fn(r) {
          const { x: u, y: c, placement: f, rects: m, middlewareData: x } = r,
            { offset: y = 0, mainAxis: v = !0, crossAxis: h = !0 } = qn(l, r),
            j = { x: u, y: c },
            p = pn(f),
            E = bu(p);
          let z = j[E],
            M = j[p];
          const Y = qn(y, r),
            V =
              typeof Y == "number"
                ? { mainAxis: Y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...Y };
          if (v) {
            const J = E === "y" ? "height" : "width",
              P = m.reference[E] - m.floating[J] + V.mainAxis,
              ee = m.reference[E] + m.reference[J] - V.mainAxis;
            z < P ? (z = P) : z > ee && (z = ee);
          }
          if (h) {
            var G, I;
            const J = E === "y" ? "width" : "height",
              P = Sp.has(Gn(f)),
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
          return { [E]: z, [p]: M };
        },
      }
    );
  },
  o0 = function (l) {
    return (
      l === void 0 && (l = {}),
      {
        name: "size",
        options: l,
        async fn(r) {
          var u, c;
          const { placement: f, rects: m, platform: x, elements: y } = r,
            { apply: v = () => {}, ...h } = qn(l, r),
            j = await Xs(r, h),
            p = Gn(f),
            E = ql(f),
            z = pn(f) === "y",
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
            se = !r.middlewareData.shift;
          let Q = P,
            Z = ee;
          if (
            ((u = r.middlewareData.shift) != null && u.enabled.x && (Z = J),
            (c = r.middlewareData.shift) != null && c.enabled.y && (Q = I),
            se && !E)
          ) {
            const we = Ut(j.left, 0),
              Oe = Ut(j.right, 0),
              he = Ut(j.top, 0),
              xe = Ut(j.bottom, 0);
            z
              ? (Z =
                  M -
                  2 * (we !== 0 || Oe !== 0 ? we + Oe : Ut(j.left, j.right)))
              : (Q =
                  Y -
                  2 * (he !== 0 || xe !== 0 ? he + xe : Ut(j.top, j.bottom)));
          }
          await v({ ...r, availableWidth: Z, availableHeight: Q });
          const ge = await x.getDimensions(y.floating);
          return M !== ge.width || Y !== ge.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Co() {
  return typeof window < "u";
}
function Gl(l) {
  return Ap(l) ? (l.nodeName || "").toLowerCase() : "#document";
}
function Lt(l) {
  var r;
  return (
    (l == null || (r = l.ownerDocument) == null ? void 0 : r.defaultView) ||
    window
  );
}
function vn(l) {
  var r;
  return (r = (Ap(l) ? l.ownerDocument : l.document) || window.document) == null
    ? void 0
    : r.documentElement;
}
function Ap(l) {
  return Co() ? l instanceof Node || l instanceof Lt(l).Node : !1;
}
function nn(l) {
  return Co() ? l instanceof Element || l instanceof Lt(l).Element : !1;
}
function xn(l) {
  return Co() ? l instanceof HTMLElement || l instanceof Lt(l).HTMLElement : !1;
}
function Xg(l) {
  return !Co() || typeof ShadowRoot > "u"
    ? !1
    : l instanceof ShadowRoot || l instanceof Lt(l).ShadowRoot;
}
const r0 = new Set(["inline", "contents"]);
function Zs(l) {
  const { overflow: r, overflowX: u, overflowY: c, display: f } = an(l);
  return /auto|scroll|overlay|hidden|clip/.test(r + c + u) && !r0.has(f);
}
const c0 = new Set(["table", "td", "th"]);
function u0(l) {
  return c0.has(Gl(l));
}
const d0 = [":popover-open", ":modal"];
function zo(l) {
  return d0.some(r => {
    try {
      return l.matches(r);
    } catch {
      return !1;
    }
  });
}
const f0 = ["transform", "translate", "scale", "rotate", "perspective"],
  m0 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  g0 = ["paint", "layout", "strict", "content"];
function Nu(l) {
  const r = Su(),
    u = nn(l) ? an(l) : l;
  return (
    f0.some(c => (u[c] ? u[c] !== "none" : !1)) ||
    (u.containerType ? u.containerType !== "normal" : !1) ||
    (!r && (u.backdropFilter ? u.backdropFilter !== "none" : !1)) ||
    (!r && (u.filter ? u.filter !== "none" : !1)) ||
    m0.some(c => (u.willChange || "").includes(c)) ||
    g0.some(c => (u.contain || "").includes(c))
  );
}
function p0(l) {
  let r = va(l);
  for (; xn(r) && !Ll(r); ) {
    if (Nu(r)) return r;
    if (zo(r)) return null;
    r = va(r);
  }
  return null;
}
function Su() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const h0 = new Set(["html", "body", "#document"]);
function Ll(l) {
  return h0.has(Gl(l));
}
function an(l) {
  return Lt(l).getComputedStyle(l);
}
function Mo(l) {
  return nn(l)
    ? { scrollLeft: l.scrollLeft, scrollTop: l.scrollTop }
    : { scrollLeft: l.scrollX, scrollTop: l.scrollY };
}
function va(l) {
  if (Gl(l) === "html") return l;
  const r = l.assignedSlot || l.parentNode || (Xg(l) && l.host) || vn(l);
  return Xg(r) ? r.host : r;
}
function Ep(l) {
  const r = va(l);
  return Ll(r)
    ? l.ownerDocument
      ? l.ownerDocument.body
      : l.body
    : xn(r) && Zs(r)
      ? r
      : Ep(r);
}
function Qs(l, r, u) {
  var c;
  (r === void 0 && (r = []), u === void 0 && (u = !0));
  const f = Ep(l),
    m = f === ((c = l.ownerDocument) == null ? void 0 : c.body),
    x = Lt(f);
  if (m) {
    const y = mu(x);
    return r.concat(
      x,
      x.visualViewport || [],
      Zs(f) ? f : [],
      y && u ? Qs(y) : []
    );
  }
  return r.concat(f, Qs(f, [], u));
}
function mu(l) {
  return l.parent && Object.getPrototypeOf(l.parent) ? l.frameElement : null;
}
function kp(l) {
  const r = an(l);
  let u = parseFloat(r.width) || 0,
    c = parseFloat(r.height) || 0;
  const f = xn(l),
    m = f ? l.offsetWidth : u,
    x = f ? l.offsetHeight : c,
    y = jo(u) !== m || jo(c) !== x;
  return (y && ((u = m), (c = x)), { width: u, height: c, $: y });
}
function Au(l) {
  return nn(l) ? l : l.contextElement;
}
function Hl(l) {
  const r = Au(l);
  if (!xn(r)) return hn(1);
  const u = r.getBoundingClientRect(),
    { width: c, height: f, $: m } = kp(r);
  let x = (m ? jo(u.width) : u.width) / c,
    y = (m ? jo(u.height) : u.height) / f;
  return (
    (!x || !Number.isFinite(x)) && (x = 1),
    (!y || !Number.isFinite(y)) && (y = 1),
    { x, y }
  );
}
const x0 = hn(0);
function Tp(l) {
  const r = Lt(l);
  return !Su() || !r.visualViewport
    ? x0
    : { x: r.visualViewport.offsetLeft, y: r.visualViewport.offsetTop };
}
function v0(l, r, u) {
  return (r === void 0 && (r = !1), !u || (r && u !== Lt(l)) ? !1 : r);
}
function Xa(l, r, u, c) {
  (r === void 0 && (r = !1), u === void 0 && (u = !1));
  const f = l.getBoundingClientRect(),
    m = Au(l);
  let x = hn(1);
  r && (c ? nn(c) && (x = Hl(c)) : (x = Hl(l)));
  const y = v0(m, u, c) ? Tp(m) : hn(0);
  let v = (f.left + y.x) / x.x,
    h = (f.top + y.y) / x.y,
    j = f.width / x.x,
    p = f.height / x.y;
  if (m) {
    const E = Lt(m),
      z = c && nn(c) ? Lt(c) : c;
    let M = E,
      Y = mu(M);
    for (; Y && c && z !== M; ) {
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
        (Y = mu(M)));
    }
  }
  return No({ width: j, height: p, x: v, y: h });
}
function Do(l, r) {
  const u = Mo(l).scrollLeft;
  return r ? r.left + u : Xa(vn(l)).left + u;
}
function Op(l, r) {
  const u = l.getBoundingClientRect(),
    c = u.left + r.scrollLeft - Do(l, u),
    f = u.top + r.scrollTop;
  return { x: c, y: f };
}
function y0(l) {
  let { elements: r, rect: u, offsetParent: c, strategy: f } = l;
  const m = f === "fixed",
    x = vn(c),
    y = r ? zo(r.floating) : !1;
  if (c === x || (y && m)) return u;
  let v = { scrollLeft: 0, scrollTop: 0 },
    h = hn(1);
  const j = hn(0),
    p = xn(c);
  if (
    (p || (!p && !m)) &&
    ((Gl(c) !== "body" || Zs(x)) && (v = Mo(c)), xn(c))
  ) {
    const z = Xa(c);
    ((h = Hl(c)), (j.x = z.x + c.clientLeft), (j.y = z.y + c.clientTop));
  }
  const E = x && !p && !m ? Op(x, v) : hn(0);
  return {
    width: u.width * h.x,
    height: u.height * h.y,
    x: u.x * h.x - v.scrollLeft * h.x + j.x + E.x,
    y: u.y * h.y - v.scrollTop * h.y + j.y + E.y,
  };
}
function b0(l) {
  return Array.from(l.getClientRects());
}
function j0(l) {
  const r = vn(l),
    u = Mo(l),
    c = l.ownerDocument.body,
    f = Ut(r.scrollWidth, r.clientWidth, c.scrollWidth, c.clientWidth),
    m = Ut(r.scrollHeight, r.clientHeight, c.scrollHeight, c.clientHeight);
  let x = -u.scrollLeft + Do(l);
  const y = -u.scrollTop;
  return (
    an(c).direction === "rtl" && (x += Ut(r.clientWidth, c.clientWidth) - f),
    { width: f, height: m, x, y }
  );
}
const Qg = 25;
function w0(l, r) {
  const u = Lt(l),
    c = vn(l),
    f = u.visualViewport;
  let m = c.clientWidth,
    x = c.clientHeight,
    y = 0,
    v = 0;
  if (f) {
    ((m = f.width), (x = f.height));
    const j = Su();
    (!j || (j && r === "fixed")) && ((y = f.offsetLeft), (v = f.offsetTop));
  }
  const h = Do(c);
  if (h <= 0) {
    const j = c.ownerDocument,
      p = j.body,
      E = getComputedStyle(p),
      z =
        (j.compatMode === "CSS1Compat" &&
          parseFloat(E.marginLeft) + parseFloat(E.marginRight)) ||
        0,
      M = Math.abs(c.clientWidth - p.clientWidth - z);
    M <= Qg && (m -= M);
  } else h <= Qg && (m += h);
  return { width: m, height: x, x: y, y: v };
}
const N0 = new Set(["absolute", "fixed"]);
function S0(l, r) {
  const u = Xa(l, !0, r === "fixed"),
    c = u.top + l.clientTop,
    f = u.left + l.clientLeft,
    m = xn(l) ? Hl(l) : hn(1),
    x = l.clientWidth * m.x,
    y = l.clientHeight * m.y,
    v = f * m.x,
    h = c * m.y;
  return { width: x, height: y, x: v, y: h };
}
function Zg(l, r, u) {
  let c;
  if (r === "viewport") c = w0(l, u);
  else if (r === "document") c = j0(vn(l));
  else if (nn(r)) c = S0(r, u);
  else {
    const f = Tp(l);
    c = { x: r.x - f.x, y: r.y - f.y, width: r.width, height: r.height };
  }
  return No(c);
}
function Cp(l, r) {
  const u = va(l);
  return u === r || !nn(u) || Ll(u)
    ? !1
    : an(u).position === "fixed" || Cp(u, r);
}
function A0(l, r) {
  const u = r.get(l);
  if (u) return u;
  let c = Qs(l, [], !1).filter(y => nn(y) && Gl(y) !== "body"),
    f = null;
  const m = an(l).position === "fixed";
  let x = m ? va(l) : l;
  for (; nn(x) && !Ll(x); ) {
    const y = an(x),
      v = Nu(x);
    (!v && y.position === "fixed" && (f = null),
      (
        m
          ? !v && !f
          : (!v && y.position === "static" && !!f && N0.has(f.position)) ||
            (Zs(x) && !v && Cp(l, x))
      )
        ? (c = c.filter(j => j !== x))
        : (f = y),
      (x = va(x)));
  }
  return (r.set(l, c), c);
}
function E0(l) {
  let { element: r, boundary: u, rootBoundary: c, strategy: f } = l;
  const x = [
      ...(u === "clippingAncestors"
        ? zo(r)
          ? []
          : A0(r, this._c)
        : [].concat(u)),
      c,
    ],
    y = x[0],
    v = x.reduce(
      (h, j) => {
        const p = Zg(r, j, f);
        return (
          (h.top = Ut(p.top, h.top)),
          (h.right = xa(p.right, h.right)),
          (h.bottom = xa(p.bottom, h.bottom)),
          (h.left = Ut(p.left, h.left)),
          h
        );
      },
      Zg(r, y, f)
    );
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function k0(l) {
  const { width: r, height: u } = kp(l);
  return { width: r, height: u };
}
function T0(l, r, u) {
  const c = xn(r),
    f = vn(r),
    m = u === "fixed",
    x = Xa(l, !0, m, r);
  let y = { scrollLeft: 0, scrollTop: 0 };
  const v = hn(0);
  function h() {
    v.x = Do(f);
  }
  if (c || (!c && !m))
    if (((Gl(r) !== "body" || Zs(f)) && (y = Mo(r)), c)) {
      const z = Xa(r, !0, m, r);
      ((v.x = z.x + r.clientLeft), (v.y = z.y + r.clientTop));
    } else f && h();
  m && !c && f && h();
  const j = f && !c && !m ? Op(f, y) : hn(0),
    p = x.left + y.scrollLeft - v.x - j.x,
    E = x.top + y.scrollTop - v.y - j.y;
  return { x: p, y: E, width: x.width, height: x.height };
}
function nu(l) {
  return an(l).position === "static";
}
function Kg(l, r) {
  if (!xn(l) || an(l).position === "fixed") return null;
  if (r) return r(l);
  let u = l.offsetParent;
  return (vn(l) === u && (u = u.ownerDocument.body), u);
}
function zp(l, r) {
  const u = Lt(l);
  if (zo(l)) return u;
  if (!xn(l)) {
    let f = va(l);
    for (; f && !Ll(f); ) {
      if (nn(f) && !nu(f)) return f;
      f = va(f);
    }
    return u;
  }
  let c = Kg(l, r);
  for (; c && u0(c) && nu(c); ) c = Kg(c, r);
  return c && Ll(c) && nu(c) && !Nu(c) ? u : c || p0(l) || u;
}
const O0 = async function (l) {
  const r = this.getOffsetParent || zp,
    u = this.getDimensions,
    c = await u(l.floating);
  return {
    reference: T0(l.reference, await r(l.floating), l.strategy),
    floating: { x: 0, y: 0, width: c.width, height: c.height },
  };
};
function C0(l) {
  return an(l).direction === "rtl";
}
const z0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: y0,
  getDocumentElement: vn,
  getClippingRect: E0,
  getOffsetParent: zp,
  getElementRects: O0,
  getClientRects: b0,
  getDimensions: k0,
  getScale: Hl,
  isElement: nn,
  isRTL: C0,
};
function Mp(l, r) {
  return (
    l.x === r.x && l.y === r.y && l.width === r.width && l.height === r.height
  );
}
function M0(l, r) {
  let u = null,
    c;
  const f = vn(l);
  function m() {
    var y;
    (clearTimeout(c), (y = u) == null || y.disconnect(), (u = null));
  }
  function x(y, v) {
    (y === void 0 && (y = !1), v === void 0 && (v = 1), m());
    const h = l.getBoundingClientRect(),
      { left: j, top: p, width: E, height: z } = h;
    if ((y || r(), !E || !z)) return;
    const M = co(p),
      Y = co(f.clientWidth - (j + E)),
      V = co(f.clientHeight - (p + z)),
      G = co(j),
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
          : (c = setTimeout(() => {
              x(!1, 1e-7);
            }, 1e3));
      }
      (Q === 1 && !Mp(h, l.getBoundingClientRect()) && x(), (P = !1));
    }
    try {
      u = new IntersectionObserver(ee, { ...J, root: f.ownerDocument });
    } catch {
      u = new IntersectionObserver(ee, J);
    }
    u.observe(l);
  }
  return (x(!0), m);
}
function D0(l, r, u, c) {
  c === void 0 && (c = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: m = !0,
      elementResize: x = typeof ResizeObserver == "function",
      layoutShift: y = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = c,
    h = Au(l),
    j = f || m ? [...(h ? Qs(h) : []), ...Qs(r)] : [];
  j.forEach(G => {
    (f && G.addEventListener("scroll", u, { passive: !0 }),
      m && G.addEventListener("resize", u));
  });
  const p = h && y ? M0(h, u) : null;
  let E = -1,
    z = null;
  x &&
    ((z = new ResizeObserver(G => {
      let [I] = G;
      (I &&
        I.target === h &&
        z &&
        (z.unobserve(r),
        cancelAnimationFrame(E),
        (E = requestAnimationFrame(() => {
          var J;
          (J = z) == null || J.observe(r);
        }))),
        u());
    })),
    h && !v && z.observe(h),
    z.observe(r));
  let M,
    Y = v ? Xa(l) : null;
  v && V();
  function V() {
    const G = Xa(l);
    (Y && !Mp(Y, G) && u(), (Y = G), (M = requestAnimationFrame(V)));
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
        (G = z) == null || G.disconnect(),
        (z = null),
        v && cancelAnimationFrame(M));
    }
  );
}
const _0 = l0,
  B0 = s0,
  R0 = t0,
  H0 = o0,
  U0 = n0,
  Jg = e0,
  L0 = i0,
  Y0 = (l, r, u) => {
    const c = new Map(),
      f = { platform: z0, ...u },
      m = { ...f.platform, _c: c };
    return Iy(l, r, { ...f, platform: m });
  };
var q0 = typeof document < "u",
  G0 = function () {},
  bo = q0 ? O.useLayoutEffect : G0;
function So(l, r) {
  if (l === r) return !0;
  if (typeof l != typeof r) return !1;
  if (typeof l == "function" && l.toString() === r.toString()) return !0;
  let u, c, f;
  if (l && r && typeof l == "object") {
    if (Array.isArray(l)) {
      if (((u = l.length), u !== r.length)) return !1;
      for (c = u; c-- !== 0; ) if (!So(l[c], r[c])) return !1;
      return !0;
    }
    if (((f = Object.keys(l)), (u = f.length), u !== Object.keys(r).length))
      return !1;
    for (c = u; c-- !== 0; ) if (!{}.hasOwnProperty.call(r, f[c])) return !1;
    for (c = u; c-- !== 0; ) {
      const m = f[c];
      if (!(m === "_owner" && l.$$typeof) && !So(l[m], r[m])) return !1;
    }
    return !0;
  }
  return l !== l && r !== r;
}
function Dp(l) {
  return typeof window > "u"
    ? 1
    : (l.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wg(l, r) {
  const u = Dp(l);
  return Math.round(r * u) / u;
}
function au(l) {
  const r = O.useRef(l);
  return (
    bo(() => {
      r.current = l;
    }),
    r
  );
}
function V0(l) {
  l === void 0 && (l = {});
  const {
      placement: r = "bottom",
      strategy: u = "absolute",
      middleware: c = [],
      platform: f,
      elements: { reference: m, floating: x } = {},
      transform: y = !0,
      whileElementsMounted: v,
      open: h,
    } = l,
    [j, p] = O.useState({
      x: 0,
      y: 0,
      strategy: u,
      placement: r,
      middlewareData: {},
      isPositioned: !1,
    }),
    [E, z] = O.useState(c);
  So(E, c) || z(c);
  const [M, Y] = O.useState(null),
    [V, G] = O.useState(null),
    I = O.useCallback(D => {
      D !== se.current && ((se.current = D), Y(D));
    }, []),
    J = O.useCallback(D => {
      D !== Q.current && ((Q.current = D), G(D));
    }, []),
    P = m || M,
    ee = x || V,
    se = O.useRef(null),
    Q = O.useRef(null),
    Z = O.useRef(j),
    ge = v != null,
    we = au(v),
    Oe = au(f),
    he = au(h),
    xe = O.useCallback(() => {
      if (!se.current || !Q.current) return;
      const D = { placement: r, strategy: u, middleware: E };
      (Oe.current && (D.platform = Oe.current),
        Y0(se.current, Q.current, D).then(ie => {
          const ce = { ...ie, isPositioned: he.current !== !1 };
          ye.current &&
            !So(Z.current, ce) &&
            ((Z.current = ce),
            yu.flushSync(() => {
              p(ce);
            }));
        }));
    }, [E, r, u, Oe, he]);
  bo(() => {
    h === !1 &&
      Z.current.isPositioned &&
      ((Z.current.isPositioned = !1), p(D => ({ ...D, isPositioned: !1 })));
  }, [h]);
  const ye = O.useRef(!1);
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
  const je = O.useMemo(
      () => ({ reference: se, floating: Q, setReference: I, setFloating: J }),
      [I, J]
    ),
    S = O.useMemo(() => ({ reference: P, floating: ee }), [P, ee]),
    U = O.useMemo(() => {
      const D = { position: u, left: 0, top: 0 };
      if (!S.floating) return D;
      const ie = Wg(S.floating, j.x),
        ce = Wg(S.floating, j.y);
      return y
        ? {
            ...D,
            transform: "translate(" + ie + "px, " + ce + "px)",
            ...(Dp(S.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: u, left: ie, top: ce };
    }, [u, y, S.floating, j.x, j.y]);
  return O.useMemo(
    () => ({ ...j, update: xe, refs: je, elements: S, floatingStyles: U }),
    [j, xe, je, S, U]
  );
}
const X0 = l => {
    function r(u) {
      return {}.hasOwnProperty.call(u, "current");
    }
    return {
      name: "arrow",
      options: l,
      fn(u) {
        const { element: c, padding: f } = typeof l == "function" ? l(u) : l;
        return c && r(c)
          ? c.current != null
            ? Jg({ element: c.current, padding: f }).fn(u)
            : {}
          : c
            ? Jg({ element: c, padding: f }).fn(u)
            : {};
      },
    };
  },
  Q0 = (l, r) => ({ ..._0(l), options: [l, r] }),
  Z0 = (l, r) => ({ ...B0(l), options: [l, r] }),
  K0 = (l, r) => ({ ...L0(l), options: [l, r] }),
  J0 = (l, r) => ({ ...R0(l), options: [l, r] }),
  W0 = (l, r) => ({ ...H0(l), options: [l, r] }),
  $0 = (l, r) => ({ ...U0(l), options: [l, r] }),
  P0 = (l, r) => ({ ...X0(l), options: [l, r] });
var F0 = "Arrow",
  _p = O.forwardRef((l, r) => {
    const { children: u, width: c = 10, height: f = 5, ...m } = l;
    return o.jsx(Za.svg, {
      ...m,
      ref: r,
      width: c,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: l.asChild ? u : o.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
_p.displayName = F0;
var I0 = _p;
function eb(l) {
  const [r, u] = O.useState(void 0);
  return (
    Vs(() => {
      if (l) {
        u({ width: l.offsetWidth, height: l.offsetHeight });
        const c = new ResizeObserver(f => {
          if (!Array.isArray(f) || !f.length) return;
          const m = f[0];
          let x, y;
          if ("borderBoxSize" in m) {
            const v = m.borderBoxSize,
              h = Array.isArray(v) ? v[0] : v;
            ((x = h.inlineSize), (y = h.blockSize));
          } else ((x = l.offsetWidth), (y = l.offsetHeight));
          u({ width: x, height: y });
        });
        return (c.observe(l, { box: "border-box" }), () => c.unobserve(l));
      } else u(void 0);
    }, [l]),
    r
  );
}
var Bp = "Popper",
  [Rp, Hp] = xp(Bp),
  [aj, Up] = Rp(Bp),
  Lp = "PopperAnchor",
  Yp = O.forwardRef((l, r) => {
    const { __scopePopper: u, virtualRef: c, ...f } = l,
      m = Up(Lp, u),
      x = O.useRef(null),
      y = Qa(r, x),
      v = O.useRef(null);
    return (
      O.useEffect(() => {
        const h = v.current;
        ((v.current = c?.current || x.current),
          h !== v.current && m.onAnchorChange(v.current));
      }),
      c ? null : o.jsx(Za.div, { ...f, ref: y })
    );
  });
Yp.displayName = Lp;
var Eu = "PopperContent",
  [tb, nb] = Rp(Eu),
  qp = O.forwardRef((l, r) => {
    const {
        __scopePopper: u,
        side: c = "bottom",
        sideOffset: f = 0,
        align: m = "center",
        alignOffset: x = 0,
        arrowPadding: y = 0,
        avoidCollisions: v = !0,
        collisionBoundary: h = [],
        collisionPadding: j = 0,
        sticky: p = "partial",
        hideWhenDetached: E = !1,
        updatePositionStrategy: z = "optimized",
        onPlaced: M,
        ...Y
      } = l,
      V = Up(Eu, u),
      [G, I] = O.useState(null),
      J = Qa(r, ae => I(ae)),
      [P, ee] = O.useState(null),
      se = eb(P),
      Q = se?.width ?? 0,
      Z = se?.height ?? 0,
      ge = c + (m !== "center" ? "-" + m : ""),
      we =
        typeof j == "number"
          ? j
          : { top: 0, right: 0, bottom: 0, left: 0, ...j },
      Oe = Array.isArray(h) ? h : [h],
      he = Oe.length > 0,
      xe = { padding: we, boundary: Oe.filter(lb), altBoundary: he },
      {
        refs: ye,
        floatingStyles: je,
        placement: S,
        isPositioned: U,
        middlewareData: D,
      } = V0({
        strategy: "fixed",
        placement: ge,
        whileElementsMounted: (...ae) =>
          D0(...ae, { animationFrame: z === "always" }),
        elements: { reference: V.anchor },
        middleware: [
          Q0({ mainAxis: f + Z, alignmentAxis: x }),
          v &&
            Z0({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? K0() : void 0,
              ...xe,
            }),
          v && J0({ ...xe }),
          W0({
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
          P && P0({ element: P, padding: y }),
          sb({ arrowWidth: Q, arrowHeight: Z }),
          E && $0({ strategy: "referenceHidden", ...xe }),
        ],
      }),
      [ie, ce] = Xp(S),
      w = Oo(M);
    Vs(() => {
      U && w?.();
    }, [U, w]);
    const H = D.arrow?.x,
      R = D.arrow?.y,
      X = D.arrow?.centerOffset !== 0,
      [W, oe] = O.useState();
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
        dir: l.dir,
        children: o.jsx(tb, {
          scope: u,
          placedSide: ie,
          onArrowChange: ee,
          arrowX: H,
          arrowY: R,
          shouldHideArrow: X,
          children: o.jsx(Za.div, {
            "data-side": ie,
            "data-align": ce,
            ...Y,
            ref: J,
            style: { ...Y.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
qp.displayName = Eu;
var Gp = "PopperArrow",
  ab = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Vp = O.forwardRef(function (r, u) {
    const { __scopePopper: c, ...f } = r,
      m = nb(Gp, c),
      x = ab[m.placedSide];
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
      children: o.jsx(I0, {
        ...f,
        ref: u,
        style: { ...f.style, display: "block" },
      }),
    });
  });
Vp.displayName = Gp;
function lb(l) {
  return l !== null;
}
var sb = l => ({
  name: "transformOrigin",
  options: l,
  fn(r) {
    const { placement: u, rects: c, middlewareData: f } = r,
      x = f.arrow?.centerOffset !== 0,
      y = x ? 0 : l.arrowWidth,
      v = x ? 0 : l.arrowHeight,
      [h, j] = Xp(u),
      p = { start: "0%", center: "50%", end: "100%" }[j],
      E = (f.arrow?.x ?? 0) + y / 2,
      z = (f.arrow?.y ?? 0) + v / 2;
    let M = "",
      Y = "";
    return (
      h === "bottom"
        ? ((M = x ? p : `${E}px`), (Y = `${-v}px`))
        : h === "top"
          ? ((M = x ? p : `${E}px`), (Y = `${c.floating.height + v}px`))
          : h === "right"
            ? ((M = `${-v}px`), (Y = x ? p : `${z}px`))
            : h === "left" &&
              ((M = `${c.floating.width + v}px`), (Y = x ? p : `${z}px`)),
      { data: { x: M, y: Y } }
    );
  },
});
function Xp(l) {
  const [r, u = "center"] = l.split("-");
  return [r, u];
}
var ib = Yp,
  ob = qp,
  rb = Vp;
function cb(l, r) {
  return O.useReducer((u, c) => r[u][c] ?? u, l);
}
var Qp = l => {
  const { present: r, children: u } = l,
    c = ub(r),
    f =
      typeof u == "function" ? u({ present: c.isPresent }) : O.Children.only(u),
    m = Qa(c.ref, db(f));
  return typeof u == "function" || c.isPresent
    ? O.cloneElement(f, { ref: m })
    : null;
};
Qp.displayName = "Presence";
function ub(l) {
  const [r, u] = O.useState(),
    c = O.useRef(null),
    f = O.useRef(l),
    m = O.useRef("none"),
    x = l ? "mounted" : "unmounted",
    [y, v] = cb(x, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    O.useEffect(() => {
      const h = uo(c.current);
      m.current = y === "mounted" ? h : "none";
    }, [y]),
    Vs(() => {
      const h = c.current,
        j = f.current;
      if (j !== l) {
        const E = m.current,
          z = uo(h);
        (l
          ? v("MOUNT")
          : z === "none" || h?.display === "none"
            ? v("UNMOUNT")
            : v(j && E !== z ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = l));
      }
    }, [l, v]),
    Vs(() => {
      if (r) {
        let h;
        const j = r.ownerDocument.defaultView ?? window,
          p = z => {
            const Y = uo(c.current).includes(CSS.escape(z.animationName));
            if (z.target === r && Y && (v("ANIMATION_END"), !f.current)) {
              const V = r.style.animationFillMode;
              ((r.style.animationFillMode = "forwards"),
                (h = j.setTimeout(() => {
                  r.style.animationFillMode === "forwards" &&
                    (r.style.animationFillMode = V);
                })));
            }
          },
          E = z => {
            z.target === r && (m.current = uo(c.current));
          };
        return (
          r.addEventListener("animationstart", E),
          r.addEventListener("animationcancel", p),
          r.addEventListener("animationend", p),
          () => {
            (j.clearTimeout(h),
              r.removeEventListener("animationstart", E),
              r.removeEventListener("animationcancel", p),
              r.removeEventListener("animationend", p));
          }
        );
      } else v("ANIMATION_END");
    }, [r, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(y),
      ref: O.useCallback(h => {
        ((c.current = h ? getComputedStyle(h) : null), u(h));
      }, []),
    }
  );
}
function uo(l) {
  return l?.animationName || "none";
}
function db(l) {
  let r = Object.getOwnPropertyDescriptor(l.props, "ref")?.get,
    u = r && "isReactWarning" in r && r.isReactWarning;
  return u
    ? l.ref
    : ((r = Object.getOwnPropertyDescriptor(l, "ref")?.get),
      (u = r && "isReactWarning" in r && r.isReactWarning),
      u ? l.props.ref : l.props.ref || l.ref);
}
var fb = Object.freeze({
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
  mb = "VisuallyHidden",
  Zp = O.forwardRef((l, r) =>
    o.jsx(Za.span, { ...l, ref: r, style: { ...fb, ...l.style } })
  );
Zp.displayName = mb;
var gb = Zp,
  [_o] = xp("Tooltip", [Hp]),
  ku = Hp(),
  Kp = "TooltipProvider",
  pb = 700,
  $g = "tooltip.open",
  [hb, Jp] = _o(Kp),
  Wp = l => {
    const {
        __scopeTooltip: r,
        delayDuration: u = pb,
        skipDelayDuration: c = 300,
        disableHoverableContent: f = !1,
        children: m,
      } = l,
      x = O.useRef(!0),
      y = O.useRef(!1),
      v = O.useRef(0);
    return (
      O.useEffect(() => {
        const h = v.current;
        return () => window.clearTimeout(h);
      }, []),
      o.jsx(hb, {
        scope: r,
        isOpenDelayedRef: x,
        delayDuration: u,
        onOpen: O.useCallback(() => {
          (window.clearTimeout(v.current), (x.current = !1));
        }, []),
        onClose: O.useCallback(() => {
          (window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => (x.current = !0), c)));
        }, [c]),
        isPointerInTransitRef: y,
        onPointerInTransitChange: O.useCallback(h => {
          y.current = h;
        }, []),
        disableHoverableContent: f,
        children: m,
      })
    );
  };
Wp.displayName = Kp;
var $p = "Tooltip",
  [lj, Bo] = _o($p),
  gu = "TooltipTrigger",
  xb = O.forwardRef((l, r) => {
    const { __scopeTooltip: u, ...c } = l,
      f = Bo(gu, u),
      m = Jp(gu, u),
      x = ku(u),
      y = O.useRef(null),
      v = Qa(r, y, f.onTriggerChange),
      h = O.useRef(!1),
      j = O.useRef(!1),
      p = O.useCallback(() => (h.current = !1), []);
    return (
      O.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      o.jsx(ib, {
        asChild: !0,
        ...x,
        children: o.jsx(Za.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...c,
          ref: v,
          onPointerMove: Yn(l.onPointerMove, E => {
            E.pointerType !== "touch" &&
              !j.current &&
              !m.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (j.current = !0));
          }),
          onPointerLeave: Yn(l.onPointerLeave, () => {
            (f.onTriggerLeave(), (j.current = !1));
          }),
          onPointerDown: Yn(l.onPointerDown, () => {
            (f.open && f.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", p, { once: !0 }));
          }),
          onFocus: Yn(l.onFocus, () => {
            h.current || f.onOpen();
          }),
          onBlur: Yn(l.onBlur, f.onClose),
          onClick: Yn(l.onClick, f.onClose),
        }),
      })
    );
  });
xb.displayName = gu;
var vb = "TooltipPortal",
  [sj, yb] = _o(vb, { forceMount: void 0 }),
  Yl = "TooltipContent",
  bb = O.forwardRef((l, r) => {
    const u = yb(Yl, l.__scopeTooltip),
      { forceMount: c = u.forceMount, side: f = "top", ...m } = l,
      x = Bo(Yl, l.__scopeTooltip);
    return o.jsx(Qp, {
      present: c || x.open,
      children: x.disableHoverableContent
        ? o.jsx(Pp, { side: f, ...m, ref: r })
        : o.jsx(jb, { side: f, ...m, ref: r }),
    });
  }),
  jb = O.forwardRef((l, r) => {
    const u = Bo(Yl, l.__scopeTooltip),
      c = Jp(Yl, l.__scopeTooltip),
      f = O.useRef(null),
      m = Qa(r, f),
      [x, y] = O.useState(null),
      { trigger: v, onClose: h } = u,
      j = f.current,
      { onPointerInTransitChange: p } = c,
      E = O.useCallback(() => {
        (y(null), p(!1));
      }, [p]),
      z = O.useCallback(
        (M, Y) => {
          const V = M.currentTarget,
            G = { x: M.clientX, y: M.clientY },
            I = Eb(G, V.getBoundingClientRect()),
            J = kb(G, I),
            P = Tb(Y.getBoundingClientRect()),
            ee = Cb([...J, ...P]);
          (y(ee), p(!0));
        },
        [p]
      );
    return (
      O.useEffect(() => () => E(), [E]),
      O.useEffect(() => {
        if (v && j) {
          const M = V => z(V, j),
            Y = V => z(V, v);
          return (
            v.addEventListener("pointerleave", M),
            j.addEventListener("pointerleave", Y),
            () => {
              (v.removeEventListener("pointerleave", M),
                j.removeEventListener("pointerleave", Y));
            }
          );
        }
      }, [v, j, z, E]),
      O.useEffect(() => {
        if (x) {
          const M = Y => {
            const V = Y.target,
              G = { x: Y.clientX, y: Y.clientY },
              I = v?.contains(V) || j?.contains(V),
              J = !Ob(G, x);
            I ? E() : J && (E(), h());
          };
          return (
            document.addEventListener("pointermove", M),
            () => document.removeEventListener("pointermove", M)
          );
        }
      }, [v, j, x, h, E]),
      o.jsx(Pp, { ...l, ref: m })
    );
  }),
  [wb, Nb] = _o($p, { isInside: !1 }),
  Sb = Ty("TooltipContent"),
  Pp = O.forwardRef((l, r) => {
    const {
        __scopeTooltip: u,
        children: c,
        "aria-label": f,
        onEscapeKeyDown: m,
        onPointerDownOutside: x,
        ...y
      } = l,
      v = Bo(Yl, u),
      h = ku(u),
      { onClose: j } = v;
    return (
      O.useEffect(
        () => (
          document.addEventListener($g, j),
          () => document.removeEventListener($g, j)
        ),
        [j]
      ),
      O.useEffect(() => {
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
      o.jsx(jp, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: m,
        onPointerDownOutside: x,
        onFocusOutside: p => p.preventDefault(),
        onDismiss: j,
        children: o.jsxs(ob, {
          "data-state": v.stateAttribute,
          ...h,
          ...y,
          ref: r,
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
            o.jsx(Sb, { children: c }),
            o.jsx(wb, {
              scope: u,
              isInside: !0,
              children: o.jsx(gb, {
                id: v.contentId,
                role: "tooltip",
                children: f || c,
              }),
            }),
          ],
        }),
      })
    );
  });
bb.displayName = Yl;
var Fp = "TooltipArrow",
  Ab = O.forwardRef((l, r) => {
    const { __scopeTooltip: u, ...c } = l,
      f = ku(u);
    return Nb(Fp, u).isInside ? null : o.jsx(rb, { ...f, ...c, ref: r });
  });
Ab.displayName = Fp;
function Eb(l, r) {
  const u = Math.abs(r.top - l.y),
    c = Math.abs(r.bottom - l.y),
    f = Math.abs(r.right - l.x),
    m = Math.abs(r.left - l.x);
  switch (Math.min(u, c, f, m)) {
    case m:
      return "left";
    case f:
      return "right";
    case u:
      return "top";
    case c:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function kb(l, r, u = 5) {
  const c = [];
  switch (r) {
    case "top":
      c.push({ x: l.x - u, y: l.y + u }, { x: l.x + u, y: l.y + u });
      break;
    case "bottom":
      c.push({ x: l.x - u, y: l.y - u }, { x: l.x + u, y: l.y - u });
      break;
    case "left":
      c.push({ x: l.x + u, y: l.y - u }, { x: l.x + u, y: l.y + u });
      break;
    case "right":
      c.push({ x: l.x - u, y: l.y - u }, { x: l.x - u, y: l.y + u });
      break;
  }
  return c;
}
function Tb(l) {
  const { top: r, right: u, bottom: c, left: f } = l;
  return [
    { x: f, y: r },
    { x: u, y: r },
    { x: u, y: c },
    { x: f, y: c },
  ];
}
function Ob(l, r) {
  const { x: u, y: c } = l;
  let f = !1;
  for (let m = 0, x = r.length - 1; m < r.length; x = m++) {
    const y = r[m],
      v = r[x],
      h = y.x,
      j = y.y,
      p = v.x,
      E = v.y;
    j > c != E > c && u < ((p - h) * (c - j)) / (E - j) + h && (f = !f);
  }
  return f;
}
function Cb(l) {
  const r = l.slice();
  return (
    r.sort((u, c) =>
      u.x < c.x ? -1 : u.x > c.x ? 1 : u.y < c.y ? -1 : u.y > c.y ? 1 : 0
    ),
    zb(r)
  );
}
function zb(l) {
  if (l.length <= 1) return l.slice();
  const r = [];
  for (let c = 0; c < l.length; c++) {
    const f = l[c];
    for (; r.length >= 2; ) {
      const m = r[r.length - 1],
        x = r[r.length - 2];
      if ((m.x - x.x) * (f.y - x.y) >= (m.y - x.y) * (f.x - x.x)) r.pop();
      else break;
    }
    r.push(f);
  }
  r.pop();
  const u = [];
  for (let c = l.length - 1; c >= 0; c--) {
    const f = l[c];
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
    r.length === 1 && u.length === 1 && r[0].x === u[0].x && r[0].y === u[0].y
      ? r
      : r.concat(u)
  );
}
var Mb = Wp;
function Ip(l) {
  var r,
    u,
    c = "";
  if (typeof l == "string" || typeof l == "number") c += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var f = l.length;
      for (r = 0; r < f; r++)
        l[r] && (u = Ip(l[r])) && (c && (c += " "), (c += u));
    } else for (u in l) l[u] && (c && (c += " "), (c += u));
  return c;
}
function eh() {
  for (var l, r, u = 0, c = "", f = arguments.length; u < f; u++)
    (l = arguments[u]) && (r = Ip(l)) && (c && (c += " "), (c += r));
  return c;
}
const Tu = "-",
  Db = l => {
    const r = Bb(l),
      { conflictingClassGroups: u, conflictingClassGroupModifiers: c } = l;
    return {
      getClassGroupId: x => {
        const y = x.split(Tu);
        return (y[0] === "" && y.length !== 1 && y.shift(), th(y, r) || _b(x));
      },
      getConflictingClassGroupIds: (x, y) => {
        const v = u[x] || [];
        return y && c[x] ? [...v, ...c[x]] : v;
      },
    };
  },
  th = (l, r) => {
    if (l.length === 0) return r.classGroupId;
    const u = l[0],
      c = r.nextPart.get(u),
      f = c ? th(l.slice(1), c) : void 0;
    if (f) return f;
    if (r.validators.length === 0) return;
    const m = l.join(Tu);
    return r.validators.find(({ validator: x }) => x(m))?.classGroupId;
  },
  Pg = /^\[(.+)\]$/,
  _b = l => {
    if (Pg.test(l)) {
      const r = Pg.exec(l)[1],
        u = r?.substring(0, r.indexOf(":"));
      if (u) return "arbitrary.." + u;
    }
  },
  Bb = l => {
    const { theme: r, classGroups: u } = l,
      c = { nextPart: new Map(), validators: [] };
    for (const f in u) pu(u[f], c, f, r);
    return c;
  },
  pu = (l, r, u, c) => {
    l.forEach(f => {
      if (typeof f == "string") {
        const m = f === "" ? r : Fg(r, f);
        m.classGroupId = u;
        return;
      }
      if (typeof f == "function") {
        if (Rb(f)) {
          pu(f(c), r, u, c);
          return;
        }
        r.validators.push({ validator: f, classGroupId: u });
        return;
      }
      Object.entries(f).forEach(([m, x]) => {
        pu(x, Fg(r, m), u, c);
      });
    });
  },
  Fg = (l, r) => {
    let u = l;
    return (
      r.split(Tu).forEach(c => {
        (u.nextPart.has(c) ||
          u.nextPart.set(c, { nextPart: new Map(), validators: [] }),
          (u = u.nextPart.get(c)));
      }),
      u
    );
  },
  Rb = l => l.isThemeGetter,
  Hb = l => {
    if (l < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      u = new Map(),
      c = new Map();
    const f = (m, x) => {
      (u.set(m, x), r++, r > l && ((r = 0), (c = u), (u = new Map())));
    };
    return {
      get(m) {
        let x = u.get(m);
        if (x !== void 0) return x;
        if ((x = c.get(m)) !== void 0) return (f(m, x), x);
      },
      set(m, x) {
        u.has(m) ? u.set(m, x) : f(m, x);
      },
    };
  },
  hu = "!",
  xu = ":",
  Ub = xu.length,
  Lb = l => {
    const { prefix: r, experimentalParseClassName: u } = l;
    let c = f => {
      const m = [];
      let x = 0,
        y = 0,
        v = 0,
        h;
      for (let M = 0; M < f.length; M++) {
        let Y = f[M];
        if (x === 0 && y === 0) {
          if (Y === xu) {
            (m.push(f.slice(v, M)), (v = M + Ub));
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
        p = Yb(j),
        E = p !== j,
        z = h && h > v ? h - v : void 0;
      return {
        modifiers: m,
        hasImportantModifier: E,
        baseClassName: p,
        maybePostfixModifierPosition: z,
      };
    };
    if (r) {
      const f = r + xu,
        m = c;
      c = x =>
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
      const f = c;
      c = m => u({ className: m, parseClassName: f });
    }
    return c;
  },
  Yb = l =>
    l.endsWith(hu)
      ? l.substring(0, l.length - 1)
      : l.startsWith(hu)
        ? l.substring(1)
        : l,
  qb = l => {
    const r = Object.fromEntries(l.orderSensitiveModifiers.map(c => [c, !0]));
    return c => {
      if (c.length <= 1) return c;
      const f = [];
      let m = [];
      return (
        c.forEach(x => {
          x[0] === "[" || r[x] ? (f.push(...m.sort(), x), (m = [])) : m.push(x);
        }),
        f.push(...m.sort()),
        f
      );
    };
  },
  Gb = l => ({
    cache: Hb(l.cacheSize),
    parseClassName: Lb(l),
    sortModifiers: qb(l),
    ...Db(l),
  }),
  Vb = /\s+/,
  Xb = (l, r) => {
    const {
        parseClassName: u,
        getClassGroupId: c,
        getConflictingClassGroupIds: f,
        sortModifiers: m,
      } = r,
      x = [],
      y = l.trim().split(Vb);
    let v = "";
    for (let h = y.length - 1; h >= 0; h -= 1) {
      const j = y[h],
        {
          isExternal: p,
          modifiers: E,
          hasImportantModifier: z,
          baseClassName: M,
          maybePostfixModifierPosition: Y,
        } = u(j);
      if (p) {
        v = j + (v.length > 0 ? " " + v : v);
        continue;
      }
      let V = !!Y,
        G = c(V ? M.substring(0, Y) : M);
      if (!G) {
        if (!V) {
          v = j + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((G = c(M)), !G)) {
          v = j + (v.length > 0 ? " " + v : v);
          continue;
        }
        V = !1;
      }
      const I = m(E).join(":"),
        J = z ? I + hu : I,
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
function Qb() {
  let l = 0,
    r,
    u,
    c = "";
  for (; l < arguments.length; )
    (r = arguments[l++]) && (u = nh(r)) && (c && (c += " "), (c += u));
  return c;
}
const nh = l => {
  if (typeof l == "string") return l;
  let r,
    u = "";
  for (let c = 0; c < l.length; c++)
    l[c] && (r = nh(l[c])) && (u && (u += " "), (u += r));
  return u;
};
function Zb(l, ...r) {
  let u,
    c,
    f,
    m = x;
  function x(v) {
    const h = r.reduce((j, p) => p(j), l());
    return ((u = Gb(h)), (c = u.cache.get), (f = u.cache.set), (m = y), y(v));
  }
  function y(v) {
    const h = c(v);
    if (h) return h;
    const j = Xb(v, u);
    return (f(v, j), j);
  }
  return function () {
    return m(Qb.apply(null, arguments));
  };
}
const Ie = l => {
    const r = u => u[l] || [];
    return ((r.isThemeGetter = !0), r);
  },
  ah = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  lh = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Kb = /^\d+\/\d+$/,
  Jb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Wb =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  $b = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Pb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Fb =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Bl = l => Kb.test(l),
  be = l => !!l && !Number.isNaN(Number(l)),
  ha = l => !!l && Number.isInteger(Number(l)),
  lu = l => l.endsWith("%") && be(l.slice(0, -1)),
  Ln = l => Jb.test(l),
  Ib = () => !0,
  e1 = l => Wb.test(l) && !$b.test(l),
  sh = () => !1,
  t1 = l => Pb.test(l),
  n1 = l => Fb.test(l),
  a1 = l => !te(l) && !ne(l),
  l1 = l => Vl(l, rh, sh),
  te = l => ah.test(l),
  Va = l => Vl(l, ch, e1),
  su = l => Vl(l, c1, be),
  Ig = l => Vl(l, ih, sh),
  s1 = l => Vl(l, oh, n1),
  fo = l => Vl(l, uh, t1),
  ne = l => lh.test(l),
  Gs = l => Xl(l, ch),
  i1 = l => Xl(l, u1),
  ep = l => Xl(l, ih),
  o1 = l => Xl(l, rh),
  r1 = l => Xl(l, oh),
  mo = l => Xl(l, uh, !0),
  Vl = (l, r, u) => {
    const c = ah.exec(l);
    return c ? (c[1] ? r(c[1]) : u(c[2])) : !1;
  },
  Xl = (l, r, u = !1) => {
    const c = lh.exec(l);
    return c ? (c[1] ? r(c[1]) : u) : !1;
  },
  ih = l => l === "position" || l === "percentage",
  oh = l => l === "image" || l === "url",
  rh = l => l === "length" || l === "size" || l === "bg-size",
  ch = l => l === "length",
  c1 = l => l === "number",
  u1 = l => l === "family-name",
  uh = l => l === "shadow",
  d1 = () => {
    const l = Ie("color"),
      r = Ie("font"),
      u = Ie("text"),
      c = Ie("font-weight"),
      f = Ie("tracking"),
      m = Ie("leading"),
      x = Ie("breakpoint"),
      y = Ie("container"),
      v = Ie("spacing"),
      h = Ie("radius"),
      j = Ie("shadow"),
      p = Ie("inset-shadow"),
      E = Ie("text-shadow"),
      z = Ie("drop-shadow"),
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
      D = () => [l, ne, te],
      ie = () => [...P(), ep, Ig, { position: [ne, te] }],
      ce = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      w = () => ["auto", "cover", "contain", o1, l1, { size: [ne, te] }],
      H = () => [lu, Gs, Va],
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
      ae = () => [be, lu, ep, Ig],
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
        color: [Ib],
        container: [Ln],
        "drop-shadow": [Ln],
        ease: ["in", "out", "in-out"],
        font: [a1],
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
        "font-weight": [{ font: [c, ne, su] }],
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
              lu,
              te,
            ],
          },
        ],
        "font-family": [{ font: [i1, te, r] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, ne, te] }],
        "line-clamp": [{ "line-clamp": [be, "none", ne, su] }],
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
        "bg-repeat": [{ bg: ce() }],
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
              r1,
              s1,
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
        "mask-repeat": [{ mask: ce() }],
        "mask-size": [{ mask: w() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", ne, te] }],
        filter: [{ filter: ["", "none", ne, te] }],
        blur: [{ blur: de() }],
        brightness: [{ brightness: [be, ne, te] }],
        contrast: [{ contrast: [be, ne, te] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", z, mo, fo] }],
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
        "stroke-w": [{ stroke: [be, Gs, Va, su] }],
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
  f1 = Zb(d1);
function Ro(...l) {
  return f1(eh(l));
}
function m1({ delayDuration: l = 0, ...r }) {
  return o.jsx(Mb, {
    "data-loc": "client/src/components/ui/tooltip.tsx:11",
    "data-slot": "tooltip-provider",
    delayDuration: l,
    ...r,
  });
}
const tp = l => (typeof l == "boolean" ? `${l}` : l === 0 ? "0" : l),
  np = eh,
  g1 = (l, r) => u => {
    var c;
    if (r?.variants == null) return np(l, u?.class, u?.className);
    const { variants: f, defaultVariants: m } = r,
      x = Object.keys(f).map(h => {
        const j = u?.[h],
          p = m?.[h];
        if (j === null) return null;
        const E = tp(j) || tp(p);
        return f[h][E];
      }),
      y =
        u &&
        Object.entries(u).reduce((h, j) => {
          let [p, E] = j;
          return (E === void 0 || (h[p] = E), h);
        }, {}),
      v =
        r == null || (c = r.compoundVariants) === null || c === void 0
          ? void 0
          : c.reduce((h, j) => {
              let { class: p, className: E, ...z } = j;
              return Object.entries(z).every(M => {
                let [Y, V] = M;
                return Array.isArray(V)
                  ? V.includes({ ...m, ...y }[Y])
                  : { ...m, ...y }[Y] === V;
              })
                ? [...h, p, E]
                : h;
            }, []);
    return np(l, x, v, u?.class, u?.className);
  },
  p1 = g1(
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
function h1({ className: l, variant: r, size: u, asChild: c = !1, ...f }) {
  const m = c ? Ey : "button";
  return o.jsx(m, {
    "data-loc": "client/src/components/ui/button.tsx:51",
    "data-slot": "button",
    className: Ro(p1({ variant: r, size: u, className: l })),
    ...f,
  });
}
function x1({ className: l, ...r }) {
  return o.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:7",
    "data-slot": "card",
    className: Ro(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      l
    ),
    ...r,
  });
}
function v1({ className: l, ...r }) {
  return o.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:66",
    "data-slot": "card-content",
    className: Ro("px-6", l),
    ...r,
  });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const y1 = l => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  dh = (...l) => l.filter((r, u, c) => !!r && c.indexOf(r) === u).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var b1 = {
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
 */ const j1 = O.forwardRef(
  (
    {
      color: l = "currentColor",
      size: r = 24,
      strokeWidth: u = 2,
      absoluteStrokeWidth: c,
      className: f = "",
      children: m,
      iconNode: x,
      ...y
    },
    v
  ) =>
    O.createElement(
      "svg",
      {
        ref: v,
        ...b1,
        width: r,
        height: r,
        stroke: l,
        strokeWidth: c ? (Number(u) * 24) / Number(r) : u,
        className: dh("lucide", f),
        ...y,
      },
      [
        ...x.map(([h, j]) => O.createElement(h, j)),
        ...(Array.isArray(m) ? m : [m]),
      ]
    )
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mt = (l, r) => {
  const u = O.forwardRef(({ className: c, ...f }, m) =>
    O.createElement(j1, {
      ref: m,
      iconNode: r,
      className: dh(`lucide-${y1(l)}`, c),
      ...f,
    })
  );
  return ((u.displayName = `${l}`), u);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iu = mt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = mt("Calendar", [
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
 */ const N1 = mt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = mt("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = mt("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const E1 = mt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = mt("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const T1 = mt("Dumbbell", [
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
 */ const O1 = mt("House", [
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
 */ const C1 = mt("MapPin", [
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
 */ const z1 = mt("Menu", [
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
 */ const M1 = mt("RotateCcw", [
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
 */ const D1 = mt("TriangleAlert", [
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
 */ const _1 = mt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
function B1(l, r) {
  if (l instanceof RegExp) return { keys: !1, pattern: l };
  var u,
    c,
    f,
    m,
    x = [],
    y = "",
    v = l.split("/");
  for (v[0] || v.shift(); (f = v.shift()); )
    ((u = f[0]),
      u === "*"
        ? (x.push(u), (y += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : u === ":"
          ? ((c = f.indexOf("?", 1)),
            (m = f.indexOf(".", 1)),
            x.push(f.substring(1, ~c ? c : ~m ? m : f.length)),
            (y += ~c && !~m ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~m && (y += (~c ? "?" : "") + "\\" + f.substring(m)))
          : (y += "/" + f));
  return {
    keys: x,
    pattern: new RegExp("^" + y + (r ? "(?=$|/)" : "/?$"), "i"),
  };
}
var ou = { exports: {} },
  ru = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ap;
function R1() {
  if (ap) return ru;
  ap = 1;
  var l = To();
  function r(p, E) {
    return (p === E && (p !== 0 || 1 / p === 1 / E)) || (p !== p && E !== E);
  }
  var u = typeof Object.is == "function" ? Object.is : r,
    c = l.useState,
    f = l.useEffect,
    m = l.useLayoutEffect,
    x = l.useDebugValue;
  function y(p, E) {
    var z = E(),
      M = c({ inst: { value: z, getSnapshot: E } }),
      Y = M[0].inst,
      V = M[1];
    return (
      m(
        function () {
          ((Y.value = z), (Y.getSnapshot = E), v(Y) && V({ inst: Y }));
        },
        [p, z, E]
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
      x(z),
      z
    );
  }
  function v(p) {
    var E = p.getSnapshot;
    p = p.value;
    try {
      var z = E();
      return !u(p, z);
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
    (ru.useSyncExternalStore =
      l.useSyncExternalStore !== void 0 ? l.useSyncExternalStore : j),
    ru
  );
}
var lp;
function H1() {
  return (lp || ((lp = 1), (ou.exports = R1())), ou.exports);
}
var U1 = H1();
const L1 = Qv.useInsertionEffect,
  Y1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  q1 = Y1 ? O.useLayoutEffect : O.useEffect,
  G1 = L1 || q1,
  fh = l => {
    const r = O.useRef([l, (...u) => r[0](...u)]).current;
    return (
      G1(() => {
        r[0] = l;
      }),
      r[1]
    );
  },
  V1 = "popstate",
  Ou = "pushState",
  Cu = "replaceState",
  X1 = "hashchange",
  sp = [V1, Ou, Cu, X1],
  Q1 = l => {
    for (const r of sp) addEventListener(r, l);
    return () => {
      for (const r of sp) removeEventListener(r, l);
    };
  },
  mh = (l, r) => U1.useSyncExternalStore(Q1, l, r),
  Z1 = () => location.search,
  K1 = ({ ssrSearch: l = "" } = {}) => mh(Z1, () => l),
  ip = () => location.pathname,
  J1 = ({ ssrPath: l } = {}) => mh(ip, l ? () => l : ip),
  W1 = (l, { replace: r = !1, state: u = null } = {}) =>
    history[r ? Cu : Ou](u, "", l),
  $1 = (l = {}) => [J1(l), W1],
  op = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[op] > "u") {
  for (const l of [Ou, Cu]) {
    const r = history[l];
    history[l] = function () {
      const u = r.apply(this, arguments),
        c = new Event(l);
      return ((c.arguments = arguments), dispatchEvent(c), u);
    };
  }
  Object.defineProperty(window, op, { value: !0 });
}
const P1 = (l, r) =>
    r.toLowerCase().indexOf(l.toLowerCase())
      ? "~" + r
      : r.slice(l.length) || "/",
  gh = (l = "") => (l === "/" ? "" : l),
  F1 = (l, r) => (l[0] === "~" ? l.slice(1) : gh(r) + l),
  I1 = (l = "", r) => P1(rp(gh(l)), rp(r)),
  rp = l => {
    try {
      return decodeURI(l);
    } catch {
      return l;
    }
  },
  ph = {
    hook: $1,
    searchHook: K1,
    parser: B1,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: l => l,
  },
  hh = O.createContext(ph),
  Ks = () => O.useContext(hh),
  xh = {},
  vh = O.createContext(xh),
  e2 = () => O.useContext(vh),
  Ho = l => {
    const [r, u] = l.hook(l);
    return [I1(l.base, r), fh((c, f) => u(F1(c, l.base), f))];
  },
  t2 = () => Ho(Ks()),
  yh = (l, r, u, c) => {
    const { pattern: f, keys: m } =
        r instanceof RegExp ? { keys: !1, pattern: r } : l(r || "*", c),
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
          ...(c ? [y] : []),
        ]
      : [!1, null];
  },
  n2 = ({ children: l, ...r }) => {
    const u = Ks(),
      c = r.hook ? ph : u;
    let f = c;
    const [m, x] = r.ssrPath?.split("?") ?? [];
    (x && ((r.ssrSearch = x), (r.ssrPath = m)),
      (r.hrefs = r.hrefs ?? r.hook?.hrefs));
    let y = O.useRef({}),
      v = y.current,
      h = v;
    for (let j in c) {
      const p = j === "base" ? c[j] + (r[j] || "") : r[j] || c[j];
      (v === h && p !== h[j] && (y.current = h = { ...h }),
        (h[j] = p),
        (p !== c[j] || p !== f[j]) && (f = h));
    }
    return O.createElement(hh.Provider, { value: f, children: l });
  },
  cp = ({ children: l, component: r }, u) =>
    r ? O.createElement(r, { params: u }) : typeof l == "function" ? l(u) : l,
  a2 = l => {
    let r = O.useRef(xh);
    const u = r.current;
    return (r.current =
      Object.keys(l).length !== Object.keys(u).length ||
      Object.entries(l).some(([c, f]) => f !== u[c])
        ? l
        : u);
  },
  gn = ({ path: l, nest: r, match: u, ...c }) => {
    const f = Ks(),
      [m] = Ho(f),
      [x, y, v] = u ?? yh(f.parser, l, m, r),
      h = a2({ ...e2(), ...y });
    if (!x) return null;
    const j = v ? O.createElement(n2, { base: v }, cp(c, h)) : cp(c, h);
    return O.createElement(vh.Provider, { value: h, children: j });
  },
  $ = O.forwardRef((l, r) => {
    const u = Ks(),
      [c, f] = Ho(u),
      {
        to: m = "",
        href: x = m,
        onClick: y,
        asChild: v,
        children: h,
        className: j,
        replace: p,
        state: E,
        ...z
      } = l,
      M = fh(V => {
        V.ctrlKey ||
          V.metaKey ||
          V.altKey ||
          V.shiftKey ||
          V.button !== 0 ||
          (y?.(V), V.defaultPrevented || (V.preventDefault(), f(x, l)));
      }),
      Y = u.hrefs(x[0] === "~" ? x.slice(1) : u.base + x, u);
    return v && O.isValidElement(h)
      ? O.cloneElement(h, { onClick: M, href: Y })
      : O.createElement("a", {
          ...z,
          onClick: M,
          href: Y,
          className: j?.call ? j(c === x) : j,
          children: h,
          ref: r,
        });
  }),
  vu = l =>
    Array.isArray(l)
      ? l.flatMap(r => vu(r && r.type === O.Fragment ? r.props.children : r))
      : [l],
  l2 = ({ children: l, location: r }) => {
    const u = Ks(),
      [c] = Ho(u);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      vu(l).forEach(m => {
        if (O.isValidElement(m) && m.props.path) {
          const x = m.props.path;
          window.__WOUTER_ROUTES__.includes(x) ||
            window.__WOUTER_ROUTES__.push(x);
        }
      }));
    for (const f of vu(l)) {
      let m = 0;
      if (
        O.isValidElement(f) &&
        (m = yh(u.parser, f.props.path, r || c, f.props.nest))[0]
      )
        return O.cloneElement(f, { match: m });
    }
    return null;
  };
function up() {
  const [, l] = t2(),
    r = () => {
      l("/");
    };
  return o.jsx("div", {
    "data-loc": "client/src/pages/NotFound.tsx:14",
    className:
      "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
    children: o.jsx(x1, {
      "data-loc": "client/src/pages/NotFound.tsx:15",
      className:
        "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
      children: o.jsxs(v1, {
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
                o.jsx(S1, {
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
            children: o.jsxs(h1, {
              "data-loc": "client/src/pages/NotFound.tsx:37",
              onClick: r,
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                o.jsx(O1, {
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
class s2 extends O.Component {
  constructor(r) {
    (super(r), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(r) {
    return { hasError: !0, error: r };
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
              o.jsx(D1, {
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
                className: Ro(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer"
                ),
                children: [
                  o.jsx(M1, {
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
const i2 = O.createContext(void 0);
function o2({ children: l, defaultTheme: r = "light", switchable: u = !1 }) {
  const [c, f] = O.useState(() => (u && localStorage.getItem("theme")) || r);
  O.useEffect(() => {
    const x = document.documentElement;
    (c === "dark" ? x.classList.add("dark") : x.classList.remove("dark"),
      u && localStorage.setItem("theme", c));
  }, [c, u]);
  const m = u
    ? () => {
        f(x => (x === "light" ? "dark" : "light"));
      }
    : void 0;
  return o.jsx(i2.Provider, {
    "data-loc": "client/src/contexts/ThemeContext.tsx:52",
    value: { theme: c, toggleTheme: m, switchable: u },
    children: l,
  });
}
const dp = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  fp = [
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
  const [l, r] = O.useState(!1),
    u = () => {
      (r(!1), window.scrollTo(0, 0));
    };
  return o.jsxs("header", {
    "data-loc": "client/src/components/Navigation.tsx:35",
    className: "sticky top-0 z-50 bg-white shadow-sm",
    children: [
      o.jsxs("div", {
        "data-loc": "client/src/components/Navigation.tsx:36",
        className: "container py-4 flex justify-between items-center",
        children: [
          o.jsx($, {
            "data-loc": "client/src/components/Navigation.tsx:38",
            href: "/",
            children: o.jsx("a", {
              "data-loc": "client/src/components/Navigation.tsx:39",
              className: "font-display text-2xl font-bold",
              style: { color: "#3E3A37" },
              children: "Balanergy",
            }),
          }),
          o.jsx("nav", {
            "data-loc": "client/src/components/Navigation.tsx:48",
            className: "hidden lg:flex gap-6 items-center",
            children: fp.map(c =>
              o.jsx(
                $,
                {
                  "data-loc": "client/src/components/Navigation.tsx:50",
                  href: c.href,
                  children: o.jsx("a", {
                    "data-loc": "client/src/components/Navigation.tsx:51",
                    className:
                      "font-body text-sm font-medium hover:opacity-70 transition-opacity",
                    style: { color: "#6B6560" },
                    onClick: u,
                    children: c.label,
                  }),
                },
                c.href
              )
            ),
          }),
          o.jsx("a", {
            "data-loc": "client/src/components/Navigation.tsx:63",
            href: dp,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "hidden lg:inline-block px-4 py-2 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
            style: { backgroundColor: "#8DA089" },
            children: "BOEK NU",
          }),
          o.jsx("button", {
            "data-loc": "client/src/components/Navigation.tsx:74",
            onClick: () => r(!l),
            className: "lg:hidden p-2",
            "aria-label": "Toggle menu",
            children: l
              ? o.jsx(_1, {
                  "data-loc": "client/src/components/Navigation.tsx:80",
                  size: 24,
                  style: { color: "#3E3A37" },
                })
              : o.jsx(z1, {
                  "data-loc": "client/src/components/Navigation.tsx:82",
                  size: 24,
                  style: { color: "#3E3A37" },
                }),
          }),
        ],
      }),
      l &&
        o.jsx("div", {
          "data-loc": "client/src/components/Navigation.tsx:89",
          className: "lg:hidden border-t",
          style: { borderColor: "#E8D5C4", backgroundColor: "#FCF9F5" },
          children: o.jsxs("nav", {
            "data-loc": "client/src/components/Navigation.tsx:93",
            className: "container py-4 flex flex-col gap-3",
            children: [
              fp.map(c =>
                o.jsx(
                  $,
                  {
                    "data-loc": "client/src/components/Navigation.tsx:95",
                    href: c.href,
                    children: o.jsx("a", {
                      "data-loc": "client/src/components/Navigation.tsx:96",
                      className:
                        "font-body text-sm font-medium py-2 hover:opacity-70 transition-opacity block",
                      style: { color: "#6B6560" },
                      onClick: u,
                      children: c.label,
                    }),
                  },
                  c.href
                )
              ),
              o.jsx("a", {
                "data-loc": "client/src/components/Navigation.tsx:105",
                href: dp,
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
const mp = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  r2 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/hero-massage-7TjQGLyDBijKFozQs3yYZd.webp",
  c2 = [
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
function u2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Home.tsx:36",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Home.tsx:40" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Home.tsx:43",
        className: "flex-1",
        children: [
          o.jsxs("section", {
            "data-loc": "client/src/pages/Home.tsx:45",
            className: "relative h-screen flex items-center overflow-hidden",
            style: {
              backgroundImage: `url('${r2}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
            children: [
              o.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:53",
                className: "absolute inset-0",
                style: { backgroundColor: "rgba(0, 0, 0, 0.3)" },
              }),
              o.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:57",
                className: "container relative z-10",
                children: o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:58",
                  className: "max-w-2xl",
                  children: [
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:59",
                      className:
                        "font-body text-sm font-semibold uppercase tracking-widest mb-4",
                      style: { color: "#E8D5C4" },
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie",
                    }),
                    o.jsxs("h1", {
                      "data-loc": "client/src/pages/Home.tsx:65",
                      className:
                        "font-display text-5xl md:text-6xl font-bold mb-6 leading-tight",
                      style: { color: "white" },
                      children: [
                        "Breng je energie",
                        o.jsx("br", {
                          "data-loc": "client/src/pages/Home.tsx:70",
                        }),
                        o.jsx("span", {
                          "data-loc": "client/src/pages/Home.tsx:71",
                          style: { fontStyle: "italic", color: "#E8D5C4" },
                          children: "weer in balans",
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:75",
                      className: "font-body text-lg mb-8 max-w-xl",
                      style: { color: "#F5F1ED" },
                      children:
                        "Balanergy is de praktijk van Mascha Kwakkel in IJsselmuiden — centraal gelegen tussen Kampen en Zwolle. Hier staat jouw lichaam en geest centraal.",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:83",
                      className: "flex flex-col gap-4 justify-start",
                      children: [
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Home.tsx:84",
                          href: mp,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "inline-block px-6 py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90",
                          style: { backgroundColor: "#C69C6D", width: "200px" },
                          children: "AFSPRAAK BOEKEN",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Home.tsx:93",
                          href: "/behandelingen",
                          children: o.jsx("a", {
                            "data-loc": "client/src/pages/Home.tsx:94",
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
            "data-loc": "client/src/pages/Home.tsx:107",
            className: "py-16 md:py-24",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:108",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:109",
                className: "max-w-3xl",
                children: [
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:110",
                    className:
                      "font-body text-xs font-semibold uppercase tracking-widest mb-4",
                    style: { color: "#8DA089" },
                    children: "Welkom bij Balanergy",
                  }),
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:116",
                    className:
                      "font-display text-4xl md:text-5xl font-bold mb-8",
                    style: { color: "#3E3A37" },
                    children: "Meer dan een massage",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:122",
                    className: "space-y-4 font-body text-lg leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:126",
                        children:
                          "Balanergy biedt Thaise yogamassage, ontspanningsmassages, anti-stress massages, sportmassage en voetreflexologie — maar ook technieklessen yoga en Personal Training in IJsselmuiden.",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:131",
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
            "data-loc": "client/src/pages/Home.tsx:142",
            className: "py-16",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:146",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:147",
                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                children: [
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:148",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:149",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "10+",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:155",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Jaar ervaring",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:159",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:160",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "3×",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:166",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Opleiding in Thailand",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:170",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:171",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "15+",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:177",
                        className: "font-body text-sm",
                        style: { color: "#6B6560" },
                        children: "Opleidingen & cursussen",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:181",
                    className: "text-center",
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:182",
                        className: "font-display text-4xl font-bold mb-2",
                        style: { color: "#8DA089" },
                        children: "100%",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:188",
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
            "data-loc": "client/src/pages/Home.tsx:197",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:198",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:199",
                  className: "font-display text-4xl font-bold mb-12",
                  style: { color: "#3E3A37" },
                  children: "Onze Diensten",
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:205",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
                  children: [
                    o.jsx($, {
                      "data-loc": "client/src/pages/Home.tsx:206",
                      href: "/behandelingen",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:207",
                        className:
                          "group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer",
                        onClick: () => window.scrollTo(0, 0),
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:211",
                            className: "font-display text-2xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Behandelingen",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:217",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children:
                              "Ontdek onze volledige aanbod van massages en behandelingen met prijzen.",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:224",
                            className: "flex items-center gap-2",
                            style: { color: "#8DA089" },
                            children: [
                              o.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:228",
                                className: "font-body text-sm font-semibold",
                                children: "Bekijk meer",
                              }),
                              o.jsx(iu, {
                                "data-loc": "client/src/pages/Home.tsx:231",
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
                      "data-loc": "client/src/pages/Home.tsx:238",
                      href: "/arrangementen",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:239",
                        className:
                          "group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer",
                        onClick: () => window.scrollTo(0, 0),
                        style: { height: "195px" },
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:244",
                            className: "font-display text-2xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Arrangementen",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:250",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children:
                              "Ontdek onze speciale arrangementen, seizoensgebonden aanbiedingen en acties.",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:257",
                            className: "flex items-center gap-2",
                            style: { color: "#8DA089" },
                            children: [
                              o.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:261",
                                className: "font-body text-sm font-semibold",
                                children: "Bekijk meer",
                              }),
                              o.jsx(iu, {
                                "data-loc": "client/src/pages/Home.tsx:264",
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
                      "data-loc": "client/src/pages/Home.tsx:271",
                      href: "/workshops",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Home.tsx:272",
                        className:
                          "group bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer",
                        onClick: () => window.scrollTo(0, 0),
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Home.tsx:276",
                            className: "font-display text-2xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Workshops & Opleidingen",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:282",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children:
                              "Leer technieken en verdiep je kennis met onze workshops.",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Home.tsx:288",
                            className: "flex items-center gap-2",
                            style: { color: "#8DA089" },
                            children: [
                              o.jsx("span", {
                                "data-loc": "client/src/pages/Home.tsx:292",
                                className: "font-body text-sm font-semibold",
                                children: "Bekijk meer",
                              }),
                              o.jsx(iu, {
                                "data-loc": "client/src/pages/Home.tsx:295",
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
            "data-loc": "client/src/pages/Home.tsx:307",
            className: "py-16 md:py-24",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:311",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:312",
                  className: "font-display text-4xl font-bold mb-12",
                  style: { color: "#3E3A37" },
                  children: "Wat cliënten zeggen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:318",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                  children: c2.map((l, r) =>
                    o.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/Home.tsx:320",
                        className: "bg-white p-8 rounded-lg shadow-sm",
                        children: [
                          o.jsx("div", {
                            "data-loc": "client/src/pages/Home.tsx:321",
                            className: "flex gap-1 mb-4",
                            children: [...Array(l.rating)].map((u, c) =>
                              o.jsx(
                                "span",
                                {
                                  "data-loc": "client/src/pages/Home.tsx:323",
                                  style: { color: "#C69C6D" },
                                  children: "★",
                                },
                                c
                              )
                            ),
                          }),
                          o.jsxs("p", {
                            "data-loc": "client/src/pages/Home.tsx:328",
                            className:
                              "font-body text-base mb-6 leading-relaxed",
                            style: { color: "#6B6560" },
                            children: ['"', l.text, '"'],
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/Home.tsx:334",
                            className: "font-body text-sm font-semibold",
                            style: { color: "#3E3A37" },
                            children: l.name,
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Home.tsx:347",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:348",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:349",
                  className: "font-display text-4xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Klaar om je afspraak in te boeken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:355",
                  className: "font-body text-lg mb-8",
                  style: { color: "#6B6560" },
                  children:
                    "Kies je behandeling en boek direct online via onze agenda, of neem contact met ons op",
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:359",
                  className: "flex flex-col gap-4 justify-start",
                  children: [
                    o.jsx("a", {
                      "data-loc": "client/src/pages/Home.tsx:360",
                      href: mp,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-block px-8 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                      style: { backgroundColor: "#8DA089", width: "175px" },
                      children: "ONLINE AGENDA",
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Home.tsx:369",
                      href: "/contact",
                      children: o.jsx("a", {
                        "data-loc": "client/src/pages/Home.tsx:370",
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
        "data-loc": "client/src/pages/Home.tsx:383",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:387",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:388",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:389",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Home.tsx:390",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:391",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:396",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:397",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Home.tsx:400",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:401",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:402",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:406",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:407",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:414",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:415",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:422",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:423",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:430",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:431",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:438",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:439",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:446",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:447",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Home.tsx:454",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Home.tsx:455",
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
                  "data-loc": "client/src/pages/Home.tsx:461",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Home.tsx:462",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:463",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:464",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/Home.tsx:465",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Home.tsx:466",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:473",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/Home.tsx:474",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Home.tsx:475",
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
              "data-loc": "client/src/pages/Home.tsx:485",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:486",
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
  title: l,
  subtitle: r,
  description: u,
  fullDescription: c,
  prices: f,
  note: m,
  tag: x,
}) {
  const [y, v] = O.useState(!1);
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
        "data-loc": "client/src/components/ExpandableCard.tsx:42",
        className: "p-6 flex flex-col",
        children: [
          o.jsx("h3", {
            "data-loc": "client/src/components/ExpandableCard.tsx:43",
            className: "font-display text-xl font-bold mb-1",
            style: { color: "#3E3A37" },
            children: l,
          }),
          o.jsx("p", {
            "data-loc": "client/src/components/ExpandableCard.tsx:49",
            className: "font-body text-xs font-semibold mb-3",
            style: { color: "#8DA089" },
            children: r,
          }),
          o.jsx("p", {
            "data-loc": "client/src/components/ExpandableCard.tsx:55",
            className: "font-body text-sm leading-relaxed mb-6",
            style: { color: "#6B6560", height: "6.5em", overflow: "hidden" },
            children: u,
          }),
          c &&
            o.jsxs("div", {
              "data-loc": "client/src/components/ExpandableCard.tsx:64",
              className: "mb-4 w-full",
              children: [
                o.jsxs("button", {
                  "data-loc": "client/src/components/ExpandableCard.tsx:65",
                  onClick: () => v(!y),
                  className:
                    "flex items-center gap-2 font-body text-sm font-semibold transition-all w-full",
                  style: { color: "#8DA089" },
                  children: [
                    o.jsx("span", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:70",
                      children: y ? "Lees minder" : "Lees meer",
                    }),
                    o.jsx(N1, {
                      "data-loc": "client/src/components/ExpandableCard.tsx:71",
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
                    "data-loc": "client/src/components/ExpandableCard.tsx:81",
                    className: "mt-4 p-4 rounded bg-white border",
                    style: {
                      borderColor: "rgba(141,160,137,0.2)",
                      backgroundColor: "rgba(141,160,137,0.05)",
                    },
                    children: o.jsx("p", {
                      "data-loc": "client/src/components/ExpandableCard.tsx:88",
                      className:
                        "font-body text-sm leading-relaxed whitespace-pre-wrap",
                      style: { color: "#6B6560" },
                      children: c,
                    }),
                  }),
              ],
            }),
        ],
      }),
      o.jsx("div", {
        "data-loc": "client/src/components/ExpandableCard.tsx:101",
        className: "border-t",
        style: { borderColor: "rgba(141,160,137,0.2)" },
      }),
      o.jsxs("div", {
        "data-loc": "client/src/components/ExpandableCard.tsx:107",
        className: "p-6",
        children: [
          o.jsx("div", {
            "data-loc": "client/src/components/ExpandableCard.tsx:108",
            className: "space-y-2 mb-3",
            children: f.map((h, j) =>
              o.jsxs(
                "div",
                {
                  "data-loc": "client/src/components/ExpandableCard.tsx:110",
                  className: "flex justify-between font-body text-sm",
                  children: [
                    o.jsx("span", {
                      "data-loc":
                        "client/src/components/ExpandableCard.tsx:111",
                      style: { color: "#6B6560" },
                      children: h.duration,
                    }),
                    o.jsx("span", {
                      "data-loc":
                        "client/src/components/ExpandableCard.tsx:112",
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
              "data-loc": "client/src/components/ExpandableCard.tsx:119",
              className: "font-body text-xs mb-4 italic",
              style: { color: "#C69C6D" },
              children: m,
            }),
          o.jsx("a", {
            "data-loc": "client/src/components/ExpandableCard.tsx:126",
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
const d2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  f2 = [
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
function m2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Behandelingen.tsx:121",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Behandelingen.tsx:125" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Behandelingen.tsx:128",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:130",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:131",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:132",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Behandelingen & Prijzen",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:138",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Van ontspannend tot therapeutisch — er is altijd een behandeling die op dit moment bij jou past",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:146",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:147",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:148",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Onze Behandelingen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:154",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: f2.map(l =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Behandelingen.tsx:156",
                        title: l.title,
                        subtitle: l.subtitle,
                        description: l.description,
                        fullDescription: l.fullDescription,
                        prices: l.prices,
                        tag: l.tag,
                      },
                      l.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Behandelingen.tsx:171",
            className: "py-12 bg-white",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:172",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Behandelingen.tsx:173",
                className: "bg-yellow-50 border-l-4 p-6",
                style: {
                  borderColor: "#C69C6D",
                  backgroundColor: "rgba(198,156,109,0.1)",
                },
                children: [
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Behandelingen.tsx:180",
                    className: "font-body text-base font-semibold mb-3",
                    style: { color: "#3E3A37" },
                    children: "⚠️ Annuleringsbeleid",
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/Behandelingen.tsx:186",
                    className: "font-body text-base leading-relaxed mb-3",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/Behandelingen.tsx:190",
                        children: "Let op:",
                      }),
                      " Vanwege de volle agenda worden afspraken die minder dan 24 uur van tevoren worden afgezegd, ongeacht de reden, in rekening gebracht.",
                    ],
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/Behandelingen.tsx:194",
                    className: "font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/Behandelingen.tsx:198",
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
            "data-loc": "client/src/pages/Behandelingen.tsx:206",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:207",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:208",
                  className: "font-display text-3xl md:text-4xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Klaar om je afspraak in te boeken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:214",
                  className: "font-body text-lg mb-8 max-w-2xl mx-auto",
                  style: { color: "#6B6560" },
                  children:
                    "Kies je behandeling en boek direct online via onze agenda",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:220",
                  href: d2,
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
        "data-loc": "client/src/pages/Behandelingen.tsx:234",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Behandelingen.tsx:238",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Behandelingen.tsx:239",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:240",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:241",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:242",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Behandelingen.tsx:247",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:248",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:251",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:252",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:253",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:257",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:258",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:265",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:266",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:273",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:274",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:281",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:282",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:289",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:290",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:297",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:298",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:305",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/Behandelingen.tsx:306",
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
                  "data-loc": "client/src/pages/Behandelingen.tsx:312",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:313",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Behandelingen.tsx:314",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:315",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:316",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:317",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Behandelingen.tsx:324",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:325",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/Behandelingen.tsx:326",
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
              "data-loc": "client/src/pages/Behandelingen.tsx:336",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Behandelingen.tsx:337",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const g2 = [
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
  p2 = [
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
  h2 = [
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
function x2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Arrangementen.tsx:164",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Arrangementen.tsx:168" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Arrangementen.tsx:171",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:173",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:174",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:175",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Arrangementen & Acties",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:181",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Speciale combinaties en aanbiedingen voor een unieke ervaring",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:188",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:189",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:190",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Acties",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:196",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: g2.map(l =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Arrangementen.tsx:198",
                        title: l.title,
                        subtitle: l.subtitle,
                        description: l.description,
                        fullDescription: l.fullDescription,
                        prices: l.prices,
                        note: l.note,
                      },
                      l.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:213",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:214",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:215",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Seizoen Arrangementen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:221",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: p2.map(l =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Arrangementen.tsx:223",
                        title: l.title,
                        subtitle: l.subtitle,
                        description: l.description,
                        fullDescription: l.fullDescription,
                        prices: l.prices,
                      },
                      l.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:237",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:238",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:239",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Vaste Arrangementen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:245",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: h2.map(l =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Arrangementen.tsx:247",
                        title: l.title,
                        subtitle: l.subtitle,
                        description: l.description,
                        fullDescription: l.fullDescription,
                        prices: l.prices,
                        tag: l.tag,
                      },
                      l.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Arrangementen.tsx:262",
            className: "py-12 bg-white",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:263",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Arrangementen.tsx:264",
                className: "text-center",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Arrangementen.tsx:265",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Vragen over arrangementen?",
                  }),
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Arrangementen.tsx:271",
                    className: "font-body text-lg mb-8",
                    style: { color: "#6B6560" },
                    children:
                      "Neem contact op voor meer informatie of om een arrangement naar wens samen te stellen.",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Arrangementen.tsx:278",
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Arrangementen.tsx:279",
                        href: `tel:${go}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(sn, {
                            "data-loc":
                              "client/src/pages/Arrangementen.tsx:284",
                            size: 18,
                          }),
                          go,
                        ],
                      }),
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Arrangementen.tsx:287",
                        href: `mailto:${po}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(ln, {
                            "data-loc":
                              "client/src/pages/Arrangementen.tsx:292",
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
        "data-loc": "client/src/pages/Arrangementen.tsx:302",
        className: "bg-white border-t",
        style: { borderColor: "rgba(198,156,109,0.15)" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Arrangementen.tsx:306",
          className: "container py-12",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Arrangementen.tsx:307",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Arrangementen.tsx:308",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:309",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Navigatie",
                    }),
                    o.jsxs("nav", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:315",
                      className: "space-y-2",
                      children: [
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:316",
                          href: "/",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Home",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:323",
                          href: "/behandelingen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Behandelingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:330",
                          href: "/over-mij",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Over Mij",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:337",
                          href: "/arrangementen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Arrangementen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:344",
                          href: "/workshops",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Workshops & Opleidingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:351",
                          href: "/personal-training",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Personal Training",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Arrangementen.tsx:358",
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
                  "data-loc": "client/src/pages/Arrangementen.tsx:368",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:369",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:375",
                      className: "space-y-2",
                      children: [
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Arrangementen.tsx:376",
                          href: `tel:${go}`,
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: go,
                        }),
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Arrangementen.tsx:383",
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
                  "data-loc": "client/src/pages/Arrangementen.tsx:393",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Arrangementen.tsx:394",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Informatie",
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Arrangementen.tsx:400",
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
              "data-loc": "client/src/pages/Arrangementen.tsx:410",
              className: "border-t pt-8 text-center",
              style: { borderColor: "rgba(198,156,109,0.15)" },
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Arrangementen.tsx:414",
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
  v2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy",
  y2 =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663495181631/fJXKTVuKN2f6PMKBQCtqnD/about-mascha-dvPzjAqj7qTAQ57W5UwV4y.webp";
function b2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/OverMij.tsx:18",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/OverMij.tsx:22" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/OverMij.tsx:25",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:27",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:28",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/OverMij.tsx:29",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Wie is Balanergy?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/OverMij.tsx:35",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Ontmoet Mascha Kwakkel, masseuse en oprichter van Balanergy",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/OverMij.tsx:42",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:43",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:44",
                className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start",
                children: [
                  o.jsx("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:45",
                    className: "order-2 md:order-1",
                    children: o.jsx("img", {
                      "data-loc": "client/src/pages/OverMij.tsx:46",
                      src: y2,
                      alt: "Mascha Kwakkel",
                      className: "rounded-lg shadow-sm w-full h-auto",
                      style: { marginTop: "-75px" },
                    }),
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:53",
                    className: "order-1 md:order-2",
                    style: { marginTop: "-80px" },
                    children: [
                      o.jsx("h2", {
                        "data-loc": "client/src/pages/OverMij.tsx:57",
                        className: "font-display text-3xl font-bold mb-6",
                        style: { color: "#3E3A37" },
                        children: "Balanergy is Mascha Kwakkel",
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:63",
                        className:
                          "space-y-4 font-body text-base leading-relaxed",
                        style: { color: "#6B6560" },
                        children: [
                          o.jsx("p", {
                            "data-loc": "client/src/pages/OverMij.tsx:67",
                            children:
                              "Even voorstellen: Ik ben Mascha Kwakkel en woon met mijn man en kinderen in IJsselmuiden. Na jaren van leidinggevende- en coachende functies, wilde ik een andere kant van mezelf verder ontwikkelen waardoor ik meer op- en vanuit mijn gevoel kon werken. Dat werd iets wat ik al jaren graag ontving én gaf, vanuit de filosofie dat aanraking helend werkt: massage!",
                          }),
                          o.jsx("p", {
                            "data-loc": "client/src/pages/OverMij.tsx:76",
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
            "data-loc": "client/src/pages/OverMij.tsx:92",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:96",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:97",
                className: "max-w-3xl",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/OverMij.tsx:98",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Mijn Opleiding in Chiang Mai",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:104",
                    className: "space-y-4 font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:108",
                        children:
                          'Na vele jaren van deze verrukkelijke massages ondergaan in de 7 keer dat ik Thailand bezocht heb, wilde ik van deze eeuwenoude, helende, veelzijdige massage mijn "signature dish" maken. Ik heb de stoute schoenen aangetrokken en ben naar Chiang Mai, Thailand gereisd voor een opleiding Nuad Boran bij de internationale school ITM Chiang Mai. Het was enorm bijzonder om dit helemaal alleen te doen.',
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:117",
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
            "data-loc": "client/src/pages/OverMij.tsx:130",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/OverMij.tsx:131",
              className: "container",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/OverMij.tsx:132",
                className: "max-w-3xl",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/OverMij.tsx:133",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Mijn Filosofie",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:139",
                    className: "space-y-4 font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:143",
                        children:
                          "Mijn missie is daar waar ik kan helpen met helen. Ik werk holistisch: ik maak een inschatting van wie je bent, hoe je in elkaar zit, wat je thema's zijn en wat je uitstraalt — en pas per keer mijn behandeling daar op aan. Anderzijds kijk ik naar het totaalplaatje van spieren, pezen en bindweefsel, en integreer ik zenuwstelselkalmering, leefstijladviezen en omgaan met stress en mental load.",
                      }),
                      o.jsx("p", {
                        "data-loc": "client/src/pages/OverMij.tsx:152",
                        children:
                          "Bij Balanergy sta jij centraal, met waar jij en jouw lijf op dat moment behoefte aan hebben. Ik bied een scala aan massages en personal yoga training in allerlei vormen, waardoor er altijd wel een is die op dit moment bij jou past.",
                      }),
                      o.jsx("blockquote", {
                        "data-loc": "client/src/pages/OverMij.tsx:158",
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
            "data-loc": "client/src/pages/OverMij.tsx:174",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:178",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/OverMij.tsx:179",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Mijn Opleidingen",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:185",
                  className: "bg-white p-8 rounded-lg shadow-sm",
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/OverMij.tsx:186",
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/OverMij.tsx:187",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/OverMij.tsx:188",
                            className: "font-display text-lg font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Thaise Massage & Voetreflexologie",
                          }),
                          o.jsxs("ul", {
                            "data-loc": "client/src/pages/OverMij.tsx:194",
                            className: "space-y-2 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:198",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:199",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:205",
                                    children:
                                      "2018 – Docentenopleiding Thaise Yogamassage Gevorderden",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:209",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:210",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:216",
                                    children:
                                      "2018 – Docentenopleiding Voetreflexologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:218",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:219",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:225",
                                    children:
                                      "2018 – Thaise Kruidenstempelmassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:227",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:228",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:234",
                                    children:
                                      "2016 – Docentenopleiding Thaise Yogamassage Beginners",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:238",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:239",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:245",
                                    children:
                                      "2016 – Opleiding Sen (Energielijnen)",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:247",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:248",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:254",
                                    children:
                                      "2015 – Basis en Gevorderden Opleiding Thaise Yogamassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:258",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:259",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:265",
                                    children:
                                      "2015 – Opleiding Thaise Voetreflexologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:267",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:268",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:274",
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
                        "data-loc": "client/src/pages/OverMij.tsx:278",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/OverMij.tsx:279",
                            className: "font-display text-lg font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Yoga, Coaching & Specialisaties",
                          }),
                          o.jsxs("ul", {
                            "data-loc": "client/src/pages/OverMij.tsx:285",
                            className: "space-y-2 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:289",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:290",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:296",
                                    children: "2023 – Triggerpointherapie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:298",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:299",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:305",
                                    children: "2022 – Sportmassage",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:307",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:308",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:314",
                                    children: "2021 – Beweegcoach",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:316",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:317",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:323",
                                    children: "2021 – Trainingsleer",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:325",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:326",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:332",
                                    children: "2021 – Inspanningsfysiologie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:334",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:335",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:341",
                                    children: "2021 – Functionele Anatomie",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:343",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:344",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:350",
                                    children:
                                      "2019 – Docentenopleiding Power Yoga 2",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:352",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:353",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:359",
                                    children:
                                      "2018 – Docentenopleiding Power Yoga 1",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:361",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:362",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:368",
                                    children:
                                      "2015 – Docentenopleiding Kinderyoga",
                                  }),
                                ],
                              }),
                              o.jsxs("li", {
                                "data-loc": "client/src/pages/OverMij.tsx:370",
                                className: "flex items-start gap-3",
                                children: [
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:371",
                                    className: "text-lg mt-1",
                                    style: { color: "#8DA089" },
                                    children: "✓",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/OverMij.tsx:377",
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
            "data-loc": "client/src/pages/OverMij.tsx:390",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:391",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/OverMij.tsx:392",
                  className: "font-display text-2xl font-bold mb-4",
                  style: { color: "#3E3A37" },
                  children: "Klaar om kennis te maken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/OverMij.tsx:398",
                  className: "font-body text-lg mb-6",
                  style: { color: "#6B6560" },
                  children:
                    "Boek je eerste behandeling en ervaar zelf de Balanergy filosofie",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/OverMij.tsx:401",
                  href: v2,
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
        "data-loc": "client/src/pages/OverMij.tsx:415",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/OverMij.tsx:419",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/OverMij.tsx:420",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:421",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/OverMij.tsx:422",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/OverMij.tsx:423",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/OverMij.tsx:428",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/OverMij.tsx:429",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/OverMij.tsx:432",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:433",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:434",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:438",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:439",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:446",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:447",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:454",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:455",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:462",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:463",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:470",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:471",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/OverMij.tsx:478",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/OverMij.tsx:479",
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
                  "data-loc": "client/src/pages/OverMij.tsx:488",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/OverMij.tsx:489",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/OverMij.tsx:490",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/OverMij.tsx:491",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/OverMij.tsx:492",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/OverMij.tsx:493",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/OverMij.tsx:500",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/OverMij.tsx:501",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/OverMij.tsx:502",
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
              "data-loc": "client/src/pages/OverMij.tsx:512",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/OverMij.tsx:513",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const j2 = "https://www.supersaas.nl/schedule/balanergy/Balanergy";
function w2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Contact.tsx:16",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Contact.tsx:20" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Contact.tsx:23",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Contact.tsx:25",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:26",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Contact.tsx:27",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Contact & Locatie",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Contact.tsx:33",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children: "Kom langs in IJsselmuiden of neem contact op",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Contact.tsx:40",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:41",
              className: "container",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:42",
                  className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12",
                  children: [
                    o.jsx("div", {
                      "data-loc": "client/src/pages/Contact.tsx:44",
                      className: "bg-white p-8 rounded-lg shadow-sm",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:45",
                        className: "flex items-start gap-4 mb-4",
                        children: [
                          o.jsx(C1, {
                            "data-loc": "client/src/pages/Contact.tsx:46",
                            size: 32,
                            style: { color: "#8DA089" },
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:47",
                            children: [
                              o.jsx("h3", {
                                "data-loc": "client/src/pages/Contact.tsx:48",
                                className:
                                  "font-display text-xl font-bold mb-2",
                                style: { color: "#3E3A37" },
                                children: "Adres",
                              }),
                              o.jsxs("p", {
                                "data-loc": "client/src/pages/Contact.tsx:54",
                                className: "font-body text-base",
                                style: { color: "#6B6560" },
                                children: [
                                  "Kreeft 45",
                                  o.jsx("br", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:59",
                                  }),
                                  "8271KL IJsselmuiden",
                                  o.jsx("br", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:61",
                                  }),
                                  o.jsx("span", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:62",
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
                      "data-loc": "client/src/pages/Contact.tsx:71",
                      className: "bg-white p-8 rounded-lg shadow-sm",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:72",
                        className: "flex items-start gap-4 mb-4",
                        children: [
                          o.jsx(sn, {
                            "data-loc": "client/src/pages/Contact.tsx:73",
                            size: 32,
                            style: { color: "#8DA089" },
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:74",
                            children: [
                              o.jsx("h3", {
                                "data-loc": "client/src/pages/Contact.tsx:75",
                                className:
                                  "font-display text-xl font-bold mb-2",
                                style: { color: "#3E3A37" },
                                children: "Telefoon",
                              }),
                              o.jsx("a", {
                                "data-loc": "client/src/pages/Contact.tsx:81",
                                href: "tel:0642874405",
                                className:
                                  "font-body text-base font-semibold hover:opacity-70",
                                style: { color: "#8DA089" },
                                children: "06-42874405",
                              }),
                              o.jsx("p", {
                                "data-loc": "client/src/pages/Contact.tsx:88",
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
                      "data-loc": "client/src/pages/Contact.tsx:99",
                      className: "bg-white p-8 rounded-lg shadow-sm",
                      children: o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:100",
                        className: "flex items-start gap-4 mb-4",
                        children: [
                          o.jsx(ln, {
                            "data-loc": "client/src/pages/Contact.tsx:101",
                            size: 32,
                            style: { color: "#8DA089" },
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:102",
                            children: [
                              o.jsx("h3", {
                                "data-loc": "client/src/pages/Contact.tsx:103",
                                className:
                                  "font-display text-xl font-bold mb-2",
                                style: { color: "#3E3A37" },
                                children: "E-mail",
                              }),
                              o.jsx("a", {
                                "data-loc": "client/src/pages/Contact.tsx:109",
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
                  "data-loc": "client/src/pages/Contact.tsx:122",
                  className: "bg-white p-8 rounded-lg shadow-sm mb-12",
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/Contact.tsx:123",
                    className: "flex items-start gap-4 mb-4",
                    children: [
                      o.jsx(E1, {
                        "data-loc": "client/src/pages/Contact.tsx:124",
                        size: 32,
                        style: { color: "#8DA089" },
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:125",
                        className: "flex-1",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Contact.tsx:126",
                            className: "font-display text-xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Openingstijden",
                          }),
                          o.jsxs("p", {
                            "data-loc": "client/src/pages/Contact.tsx:132",
                            className: "font-body text-base mb-4",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsx("strong", {
                                "data-loc": "client/src/pages/Contact.tsx:136",
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
                  "data-loc": "client/src/pages/Contact.tsx:144",
                  className: "bg-white p-8 rounded-lg shadow-sm",
                  style: { backgroundColor: "rgba(141,160,137,0.05)" },
                  children: o.jsxs("div", {
                    "data-loc": "client/src/pages/Contact.tsx:148",
                    className: "flex items-start gap-4 mb-4",
                    children: [
                      o.jsx(w1, {
                        "data-loc": "client/src/pages/Contact.tsx:149",
                        size: 32,
                        style: { color: "#8DA089" },
                      }),
                      o.jsxs("div", {
                        "data-loc": "client/src/pages/Contact.tsx:150",
                        className: "flex-1",
                        children: [
                          o.jsx("h3", {
                            "data-loc": "client/src/pages/Contact.tsx:151",
                            className: "font-display text-xl font-bold mb-4",
                            style: { color: "#3E3A37" },
                            children: "Afspraken Maken",
                          }),
                          o.jsxs("div", {
                            "data-loc": "client/src/pages/Contact.tsx:157",
                            className: "space-y-4 font-body text-base",
                            style: { color: "#6B6560" },
                            children: [
                              o.jsx("p", {
                                "data-loc": "client/src/pages/Contact.tsx:161",
                                children: "Afspraken kunt u inboeken via:",
                              }),
                              o.jsxs("ul", {
                                "data-loc": "client/src/pages/Contact.tsx:162",
                                className: "space-y-3 ml-4",
                                children: [
                                  o.jsx("li", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:163",
                                    children:
                                      "✓ Online agenda (direct beschikbaarheid zien)",
                                  }),
                                  o.jsxs("li", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:164",
                                    children: [
                                      "✓ Telefonisch/app:",
                                      " ",
                                      o.jsx("a", {
                                        "data-loc":
                                          "client/src/pages/Contact.tsx:166",
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
                                      "client/src/pages/Contact.tsx:174",
                                    children: [
                                      "✓ Via mail:",
                                      " ",
                                      o.jsx("a", {
                                        "data-loc":
                                          "client/src/pages/Contact.tsx:176",
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
                                "data-loc": "client/src/pages/Contact.tsx:185",
                                className: "mt-4",
                                children: [
                                  o.jsx("strong", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:186",
                                    children: "Tip:",
                                  }),
                                  " Heb je een specifieke voorkeur voor een dag of tijdstip? Plan dan bij voorkeur minimaal twee afspraken vooruit.",
                                ],
                              }),
                              o.jsxs("p", {
                                "data-loc": "client/src/pages/Contact.tsx:190",
                                className: "text-sm opacity-80 mt-4",
                                children: [
                                  o.jsx("strong", {
                                    "data-loc":
                                      "client/src/pages/Contact.tsx:191",
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
            "data-loc": "client/src/pages/Contact.tsx:204",
            className: "py-12",
            style: { backgroundColor: "rgba(141,160,137,0.05)" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:208",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Contact.tsx:209",
                  className: "font-display text-2xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Onze Locatie",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Contact.tsx:215",
                  className: "w-full h-96 rounded-lg shadow-sm overflow-hidden",
                  children: o.jsx("iframe", {
                    "data-loc": "client/src/pages/Contact.tsx:216",
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
            "data-loc": "client/src/pages/Contact.tsx:230",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:231",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Contact.tsx:232",
                  className: "font-display text-2xl font-bold mb-4",
                  style: { color: "#3E3A37" },
                  children: "Klaar om je afspraak in te boeken?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Contact.tsx:238",
                  className: "font-body text-lg mb-6",
                  style: { color: "#6B6560" },
                  children: "Bekijk de beschikbaarheid en boek direct online",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/Contact.tsx:241",
                  href: j2,
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
        "data-loc": "client/src/pages/Contact.tsx:255",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Contact.tsx:259",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Contact.tsx:260",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:261",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Contact.tsx:262",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Contact.tsx:263",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Contact.tsx:268",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Contact.tsx:269",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Contact.tsx:272",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:273",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:274",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:278",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:279",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:286",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:287",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:294",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:295",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:302",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:303",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:310",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:311",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Contact.tsx:318",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Contact.tsx:319",
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
                  "data-loc": "client/src/pages/Contact.tsx:328",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Contact.tsx:329",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Contact.tsx:330",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Contact.tsx:331",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/Contact.tsx:332",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Contact.tsx:333",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Contact.tsx:340",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/Contact.tsx:341",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Contact.tsx:342",
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
              "data-loc": "client/src/pages/Contact.tsx:352",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Contact.tsx:353",
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
  N2 = [
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
  S2 = [
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
function A2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Workshops.tsx:89",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Workshops.tsx:93" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Workshops.tsx:96",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:98",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:99",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Workshops.tsx:100",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Workshops & Opleidingen",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Workshops.tsx:106",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children:
                    "Leer massagetechnieken van een professioneel therapeut",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:113",
            className: "py-12",
            style: { marginTop: "-80px" },
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:114",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Workshops.tsx:115",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Workshops",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Workshops.tsx:121",
                  className: "font-body text-lg mb-8",
                  style: { color: "#6B6560" },
                  children:
                    "Onze workshops zijn korte, intensieve trainingen waarin je de basisprincipes en technieken van massage leert. Ze zijn perfect voor beginners die hun eerste stappen in de massagewereld willen zetten, maar ook een waardevolle aanvulling voor ervaren therapeuten die hun vaardigheden willen uitbreiden. Alle workshops zijn beschikbaar voor 1 of 2 personen. Indien je alleen komt, neem je een model mee om op te oefenen. Elke workshop eindigt met een handout met alle grepen en basale kennis om mee naar huis te nemen.",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:132",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: N2.map(l =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Workshops.tsx:134",
                        title: l.title,
                        subtitle: l.subtitle,
                        description: l.description,
                        fullDescription: l.fullDescription,
                        prices: l.prices,
                      },
                      l.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:148",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:149",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/Workshops.tsx:150",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Volledige Opleidingen",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Workshops.tsx:156",
                  className: "font-body text-lg mb-8",
                  style: { color: "#6B6560" },
                  children:
                    "Onze volledige opleidingen zijn professionele trainingen met internationale certificering. Ze zijn ontworpen voor iedereen die een massagepraktijk wil starten of hun vaardigheden en kennis dieper wil verdiepen. Of je nu een beginner bent of al ervaring hebt, je leert alles wat je nodig hebt om zelfstandig te werken. Elke opleiding bevat theoretische kennis, praktische training, een praktijkexamen en een diploma. Daarnaast krijg je een gratis massagebehandeling en heb je onbeperkte mogelijkheid tot vragen stellen na de opleiding.",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:167",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch",
                  children: S2.map(l =>
                    o.jsx(
                      Ul,
                      {
                        "data-loc": "client/src/pages/Workshops.tsx:169",
                        title: l.title,
                        subtitle: l.subtitle,
                        description: l.description,
                        fullDescription: l.fullDescription,
                        prices: l.prices,
                      },
                      l.id
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Workshops.tsx:183",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Workshops.tsx:184",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Workshops.tsx:185",
                className: "text-center",
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Workshops.tsx:186",
                    className: "font-display text-3xl font-bold mb-6",
                    style: { color: "#3E3A37" },
                    children: "Meer informatie?",
                  }),
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Workshops.tsx:192",
                    className: "font-body text-lg mb-8",
                    style: { color: "#6B6560" },
                    children:
                      "Heb je vragen over de workshops of opleidingen? Neem contact met ons op! We helpen je graag bij het kiezen van de juiste opleiding voor jouw doelen.",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Workshops.tsx:200",
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Workshops.tsx:201",
                        href: `tel:${ho}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(sn, {
                            "data-loc": "client/src/pages/Workshops.tsx:206",
                            size: 18,
                          }),
                          ho,
                        ],
                      }),
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Workshops.tsx:209",
                        href: `mailto:${xo}`,
                        className:
                          "inline-flex items-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(ln, {
                            "data-loc": "client/src/pages/Workshops.tsx:214",
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
        "data-loc": "client/src/pages/Workshops.tsx:224",
        className: "bg-white border-t",
        style: { borderColor: "rgba(198,156,109,0.15)" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Workshops.tsx:228",
          className: "container py-12",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Workshops.tsx:229",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Workshops.tsx:230",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Workshops.tsx:231",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Navigatie",
                    }),
                    o.jsxs("nav", {
                      "data-loc": "client/src/pages/Workshops.tsx:237",
                      className: "space-y-2",
                      children: [
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:238",
                          href: "/",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Home",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:245",
                          href: "/behandelingen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Behandelingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:252",
                          href: "/over-mij",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Over Mij",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:259",
                          href: "/arrangementen",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Arrangementen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:266",
                          href: "/workshops",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Workshops & Opleidingen",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:273",
                          href: "/personal-training",
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: "Personal Training",
                        }),
                        o.jsx($, {
                          "data-loc": "client/src/pages/Workshops.tsx:280",
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
                  "data-loc": "client/src/pages/Workshops.tsx:290",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Workshops.tsx:291",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Workshops.tsx:297",
                      className: "space-y-2",
                      children: [
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Workshops.tsx:298",
                          href: `tel:${ho}`,
                          className: "block font-body text-sm hover:underline",
                          style: { color: "#6B6560" },
                          children: ho,
                        }),
                        o.jsx("a", {
                          "data-loc": "client/src/pages/Workshops.tsx:305",
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
                  "data-loc": "client/src/pages/Workshops.tsx:315",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Workshops.tsx:316",
                      className: "font-display text-lg font-bold mb-4",
                      style: { color: "#3E3A37" },
                      children: "Informatie",
                    }),
                    o.jsx($, {
                      "data-loc": "client/src/pages/Workshops.tsx:322",
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
              "data-loc": "client/src/pages/Workshops.tsx:332",
              className: "border-t pt-8 text-center",
              style: { borderColor: "rgba(198,156,109,0.15)" },
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Workshops.tsx:336",
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
  E2 = [
    "Yoga of Body Balance op individueel afgestemde manier",
    "Leren welke houdingen bij jouw lichaam passen",
    "Directe feedback en correctie op je practice",
    "Specifieke fysieke of mentale doelen bereiken",
    "1 op 1 begeleiding in houding en ademhaling",
    "Voor beginners en gevorderden",
  ],
  k2 = [
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
function T2({ title: l, subtitle: r, duration: u, price: c, description: f }) {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/PersonalTraining.tsx:74",
    className: "bg-white rounded-lg shadow-sm p-6 flex flex-col h-full",
    children: [
      o.jsxs("div", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:75",
        className: "mb-4",
        children: [
          o.jsx("h3", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:76",
            className: "font-display text-lg font-bold mb-1",
            style: { color: "#3E3A37" },
            children: l,
          }),
          o.jsx("p", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:82",
            className: "font-body text-xs font-semibold",
            style: { color: "#8DA089" },
            children: r,
          }),
        ],
      }),
      o.jsx("p", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:89",
        className: "font-body text-sm leading-relaxed mb-4 flex-1",
        style: { color: "#6B6560" },
        children: f,
      }),
      o.jsx("div", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:95",
        className: "border-t my-4",
        style: { borderColor: "rgba(141,160,137,0.2)" },
      }),
      o.jsxs("div", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:99",
        className: "flex justify-between items-center mb-4",
        children: [
          o.jsx("span", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:100",
            className: "font-body text-xs",
            style: { color: "#6B6560" },
            children: u,
          }),
          o.jsx("span", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:103",
            className: "font-display text-lg font-bold",
            style: { color: "#8DA089" },
            children: c,
          }),
        ],
      }),
      o.jsx("a", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:110",
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
function O2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/PersonalTraining.tsx:125",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/PersonalTraining.tsx:129" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/PersonalTraining.tsx:132",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:134",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:135",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:136",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Personal Training",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:142",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children: "Yoga en Body Balance op maat voor jou",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:149",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:150",
              className: "container max-w-3xl text-left",
              style: { marginRight: "0px", marginLeft: "105px" },
              children: [
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:151",
                  className: "font-body text-base leading-relaxed mb-6",
                  style: { color: "#6B6560" },
                  children:
                    "Wil jij yoga of Body Balance op een individueel afgestemde manier leren? Bij Balanergy bieden we persoonlijke trainingen waarbij jij centraal staat. Of je nu beginner bent of al ervaring hebt, we passen het programma volledig aan jouw kennis, ervaring en persoonlijke doelen.",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:161",
                  className: "font-body text-base leading-relaxed",
                  style: { color: "#6B6560" },
                  children:
                    "Je krijgt 1 op 1 begeleiding met directe feedback en correctie op je practice. Alle trainingen zijn inclusief gebruik van een yogamat indien gewenst, en vinden plaats in de praktijkruimte van Balanergy.",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:174",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:175",
              className: "container",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:176",
                  className: "font-display text-3xl font-bold mb-8",
                  style: { color: "#3E3A37" },
                  children: "Waarom Personal Training?",
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:182",
                  className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                  children: E2.map((l, r) =>
                    o.jsxs(
                      "div",
                      {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:184",
                        className: "flex items-start gap-4",
                        children: [
                          o.jsx(A1, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:185",
                            size: 24,
                            style: { color: "#8DA089" },
                            className: "flex-shrink-0 mt-1",
                          }),
                          o.jsx("p", {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:190",
                            className: "font-body text-base",
                            style: { color: "#6B6560" },
                            children: l,
                          }),
                        ],
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:203",
            className: "py-12",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:204",
              className: "container",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:205",
                  className: "flex items-center gap-3 mb-8",
                  children: [
                    o.jsx(T1, {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:206",
                      size: 24,
                      style: { color: "#C69C6D" },
                    }),
                    o.jsx("h2", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:207",
                      className: "font-display text-3xl font-bold",
                      style: { color: "#3E3A37" },
                      children: "Training Pakketten",
                    }),
                  ],
                }),
                o.jsx("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:214",
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                  children: k2.map((l, r) =>
                    o.jsx(
                      T2,
                      {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:216",
                        ...l,
                      },
                      r
                    )
                  ),
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/PersonalTraining.tsx:223",
            className: "py-12 bg-white",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:224",
              className: "container max-w-3xl text-left",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:225",
                  className: "font-display text-2xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Hoe Werkt Het?",
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:231",
                  className: "space-y-6 mb-8",
                  children: [
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:232",
                      children: [
                        o.jsx("h3", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:233",
                          className: "font-body font-semibold text-lg mb-2",
                          style: { color: "#3E3A37" },
                          children: "Losse Lessen",
                        }),
                        o.jsx("p", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:239",
                          className: "font-body text-base",
                          style: { color: "#6B6560" },
                          children:
                            "Losse lessen in de praktijkruimte van Balanergy zijn online boekbaar via onze agenda.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:244",
                      children: [
                        o.jsx("h3", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:245",
                          className: "font-body font-semibold text-lg mb-2",
                          style: { color: "#3E3A37" },
                          children: "Trainingspakketten",
                        }),
                        o.jsx("p", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:251",
                          className: "font-body text-base",
                          style: { color: "#6B6560" },
                          children:
                            "Voor trainingspakketten of lessen op locatie, neem contact op via telefoon of email. We plannen dan samen een moment in dat bij jou past.",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:257",
                      children: [
                        o.jsx("h3", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:258",
                          className: "font-body font-semibold text-lg mb-2",
                          style: { color: "#3E3A37" },
                          children: "Zakelijke Trainingen",
                        }),
                        o.jsx("p", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:264",
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
                  "data-loc": "client/src/pages/PersonalTraining.tsx:271",
                  className: "bg-yellow-50 border-l-4 p-6 mb-8",
                  style: {
                    borderColor: "#C69C6D",
                    backgroundColor: "rgba(198,156,109,0.1)",
                  },
                  children: [
                    o.jsx("p", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:278",
                      className: "font-body text-base font-semibold mb-2",
                      style: { color: "#3E3A37" },
                      children: "💡 Cadeau Idee",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:284",
                      className: "font-body text-base",
                      style: { color: "#6B6560" },
                      children:
                        "Personal Training is ook superleuk en origineel om cadeau te doen! Geef iemand de kans om op een persoonlijke manier fit en gezond te worden.",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:291",
                  className: "space-y-4",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:292",
                      className: "font-body text-lg font-semibold",
                      style: { color: "#3E3A37" },
                      children: "Neem Contact Op",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:298",
                      className: "flex items-start gap-4",
                      children: [
                        o.jsx(sn, {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:299",
                          size: 20,
                          style: { color: "#8DA089" },
                          className: "mt-1 flex-shrink-0",
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:304",
                          children: [
                            o.jsx("p", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:305",
                              className: "font-body font-semibold",
                              style: { color: "#3E3A37" },
                              children: "Telefoon",
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:311",
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
                      "data-loc": "client/src/pages/PersonalTraining.tsx:320",
                      className: "flex items-start gap-4",
                      children: [
                        o.jsx(ln, {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:321",
                          size: 20,
                          style: { color: "#8DA089" },
                          className: "mt-1 flex-shrink-0",
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:326",
                          children: [
                            o.jsx("p", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:327",
                              className: "font-body font-semibold",
                              style: { color: "#3E3A37" },
                              children: "Email",
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:333",
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
            "data-loc": "client/src/pages/PersonalTraining.tsx:347",
            className: "py-12 bg-white",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:348",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/PersonalTraining.tsx:349",
                className: "bg-yellow-50 border-l-4 p-6",
                style: {
                  borderColor: "#C69C6D",
                  backgroundColor: "rgba(198,156,109,0.1)",
                },
                children: [
                  o.jsx("p", {
                    "data-loc": "client/src/pages/PersonalTraining.tsx:356",
                    className: "font-body text-base font-semibold mb-3",
                    style: { color: "#3E3A37" },
                    children: "⚠️ Annuleringsbeleid",
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/PersonalTraining.tsx:362",
                    className: "font-body text-base leading-relaxed mb-3",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:366",
                        children: "Let op:",
                      }),
                      " Vanwege de volle agenda worden afspraken die minder dan 24 uur van tevoren worden afgezegd, ongeacht de reden, in rekening gebracht.",
                    ],
                  }),
                  o.jsxs("p", {
                    "data-loc": "client/src/pages/PersonalTraining.tsx:370",
                    className: "font-body text-base leading-relaxed",
                    style: { color: "#6B6560" },
                    children: [
                      o.jsx("strong", {
                        "data-loc": "client/src/pages/PersonalTraining.tsx:374",
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
            "data-loc": "client/src/pages/PersonalTraining.tsx:382",
            className: "py-16 md:py-24",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:383",
              className: "container text-center",
              children: [
                o.jsx("h2", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:384",
                  className: "font-display text-3xl md:text-4xl font-bold mb-6",
                  style: { color: "#3E3A37" },
                  children: "Klaar om te beginnen?",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:390",
                  className: "font-body text-lg mb-8 max-w-2xl mx-auto",
                  style: { color: "#6B6560" },
                  children:
                    "Boek je eerste les of neem contact op voor meer informatie",
                }),
                o.jsx("a", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:396",
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
        "data-loc": "client/src/pages/PersonalTraining.tsx:410",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/PersonalTraining.tsx:414",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/PersonalTraining.tsx:415",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:416",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:417",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:418",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/PersonalTraining.tsx:423",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:424",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:427",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:428",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:429",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:433",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:434",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:441",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:442",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:449",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:450",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:457",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:458",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:465",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:466",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:473",
                          children: o.jsx($, {
                            "data-loc":
                              "client/src/pages/PersonalTraining.tsx:474",
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
                  "data-loc": "client/src/pages/PersonalTraining.tsx:483",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:484",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/PersonalTraining.tsx:485",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:486",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:487",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:488",
                              href: `tel:${vo}`,
                              className: "opacity-80 hover:opacity-100",
                              children: vo,
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc":
                            "client/src/pages/PersonalTraining.tsx:495",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:496",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc":
                                "client/src/pages/PersonalTraining.tsx:497",
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
              "data-loc": "client/src/pages/PersonalTraining.tsx:507",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/PersonalTraining.tsx:508",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
const C2 = [
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
function z2() {
  return o.jsxs("div", {
    "data-loc": "client/src/pages/Info.tsx:38",
    className: "min-h-screen flex flex-col",
    style: { backgroundColor: "#FCF9F5" },
    children: [
      o.jsx(ya, { "data-loc": "client/src/pages/Info.tsx:42" }),
      o.jsxs("main", {
        "data-loc": "client/src/pages/Info.tsx:45",
        className: "flex-1",
        children: [
          o.jsx("section", {
            "data-loc": "client/src/pages/Info.tsx:47",
            className: "py-12 md:py-16",
            children: o.jsxs("div", {
              "data-loc": "client/src/pages/Info.tsx:48",
              className: "container",
              children: [
                o.jsx("h1", {
                  "data-loc": "client/src/pages/Info.tsx:49",
                  className: "font-display text-4xl md:text-5xl font-bold mb-2",
                  style: { color: "#3E3A37" },
                  children: "Informatie & Documenten",
                }),
                o.jsx("p", {
                  "data-loc": "client/src/pages/Info.tsx:55",
                  className: "font-body text-lg",
                  style: { color: "#8DA089" },
                  children: "Downloadbare documenten en formulieren",
                }),
              ],
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Info.tsx:62",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Info.tsx:63",
              className: "container",
              children: o.jsx("div", {
                "data-loc": "client/src/pages/Info.tsx:64",
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: C2.map(l =>
                  o.jsxs(
                    "div",
                    {
                      "data-loc": "client/src/pages/Info.tsx:66",
                      className: "rounded-lg p-6 border transition-all",
                      style: {
                        backgroundColor: "white",
                        borderColor: "#E8DDD5",
                      },
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Info.tsx:74",
                          className: "mb-4",
                          children: [
                            o.jsx("h3", {
                              "data-loc": "client/src/pages/Info.tsx:75",
                              className: "font-display text-xl font-bold mb-2",
                              style: { color: "#3E3A37" },
                              children: l.title,
                            }),
                            o.jsx("p", {
                              "data-loc": "client/src/pages/Info.tsx:81",
                              className: "font-body text-sm leading-relaxed",
                              style: {
                                color: "#6B6560",
                                height: "3em",
                                overflow: "hidden",
                              },
                              children: l.description,
                            }),
                          ],
                        }),
                        o.jsx("div", {
                          "data-loc": "client/src/pages/Info.tsx:93",
                          className: "mb-6 pb-6 border-b",
                          style: { borderColor: "#E8DDD5" },
                          children: o.jsx("p", {
                            "data-loc": "client/src/pages/Info.tsx:97",
                            className: "font-body text-xs",
                            style: { color: "#8DA089" },
                            children: l.date,
                          }),
                        }),
                        o.jsxs("a", {
                          "data-loc": "client/src/pages/Info.tsx:105",
                          href: l.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center justify-center gap-2 w-full py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90",
                          style: { backgroundColor: "#8DA089" },
                          children: [
                            o.jsx(k1, {
                              "data-loc": "client/src/pages/Info.tsx:112",
                              size: 16,
                            }),
                            "DOWNLOAD",
                          ],
                        }),
                      ],
                    },
                    l.id
                  )
                ),
              }),
            }),
          }),
          o.jsx("section", {
            "data-loc": "client/src/pages/Info.tsx:122",
            className: "py-12",
            children: o.jsx("div", {
              "data-loc": "client/src/pages/Info.tsx:123",
              className: "container max-w-3xl",
              children: o.jsxs("div", {
                "data-loc": "client/src/pages/Info.tsx:124",
                className: "bg-white rounded-lg p-8",
                style: { borderColor: "#E8DDD5", border: "1px solid #E8DDD5" },
                children: [
                  o.jsx("h2", {
                    "data-loc": "client/src/pages/Info.tsx:128",
                    className: "font-display text-2xl font-bold mb-4",
                    style: { color: "#3E3A37" },
                    children: "Meer Informatie Nodig?",
                  }),
                  o.jsx("p", {
                    "data-loc": "client/src/pages/Info.tsx:134",
                    className: "font-body text-base mb-6",
                    style: { color: "#6B6560" },
                    children:
                      "Heb je vragen over onze services, prijzen of formulieren? Neem gerust contact met ons op. We helpen je graag!",
                  }),
                  o.jsxs("div", {
                    "data-loc": "client/src/pages/Info.tsx:141",
                    className: "flex flex-col sm:flex-row gap-4",
                    children: [
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Info.tsx:142",
                        href: "tel:0642874405",
                        className:
                          "flex items-center justify-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(sn, {
                            "data-loc": "client/src/pages/Info.tsx:147",
                            size: 16,
                          }),
                          "bel: 06-42874405",
                        ],
                      }),
                      o.jsxs("a", {
                        "data-loc": "client/src/pages/Info.tsx:150",
                        href: "mailto:balanergy@hotmail.com",
                        className:
                          "flex items-center justify-center gap-2 px-6 py-3 rounded font-body text-sm font-semibold text-white transition-opacity hover:opacity-90",
                        style: { backgroundColor: "#8DA089" },
                        children: [
                          o.jsx(ln, {
                            "data-loc": "client/src/pages/Info.tsx:155",
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
        "data-loc": "client/src/pages/Info.tsx:165",
        className: "mt-12 py-8",
        style: { backgroundColor: "#3E3A37", color: "white" },
        children: o.jsxs("div", {
          "data-loc": "client/src/pages/Info.tsx:169",
          className: "container",
          children: [
            o.jsxs("div", {
              "data-loc": "client/src/pages/Info.tsx:170",
              className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
              children: [
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Info.tsx:171",
                  children: [
                    o.jsx("h3", {
                      "data-loc": "client/src/pages/Info.tsx:172",
                      className: "font-display text-lg font-bold mb-4",
                      children: "Balanergy",
                    }),
                    o.jsx("p", {
                      "data-loc": "client/src/pages/Info.tsx:173",
                      className: "font-body text-sm opacity-80",
                      children:
                        "Praktijk voor Thaise yogamassage & voetreflexologie in IJsselmuiden",
                    }),
                  ],
                }),
                o.jsxs("div", {
                  "data-loc": "client/src/pages/Info.tsx:178",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Info.tsx:179",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Snelle Links",
                    }),
                    o.jsxs("ul", {
                      "data-loc": "client/src/pages/Info.tsx:182",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:183",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:184",
                            href: "/",
                            className: "opacity-80 hover:opacity-100",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:188",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:189",
                            href: "/behandelingen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Behandelingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:196",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:197",
                            href: "/over-mij",
                            className: "opacity-80 hover:opacity-100",
                            children: "Over Mij",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:204",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:205",
                            href: "/arrangementen",
                            className: "opacity-80 hover:opacity-100",
                            children: "Arrangementen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:212",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:213",
                            href: "/workshops",
                            className: "opacity-80 hover:opacity-100",
                            children: "Workshops & Opleidingen",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:220",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:221",
                            href: "/personal-training",
                            className: "opacity-80 hover:opacity-100",
                            children: "Personal Training",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:228",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:229",
                            href: "/contact",
                            className: "opacity-80 hover:opacity-100",
                            children: "Contact",
                          }),
                        }),
                        o.jsx("li", {
                          "data-loc": "client/src/pages/Info.tsx:236",
                          children: o.jsx($, {
                            "data-loc": "client/src/pages/Info.tsx:237",
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
                  "data-loc": "client/src/pages/Info.tsx:243",
                  children: [
                    o.jsx("h4", {
                      "data-loc": "client/src/pages/Info.tsx:244",
                      className: "font-body text-sm font-semibold mb-4",
                      children: "Contact",
                    }),
                    o.jsxs("div", {
                      "data-loc": "client/src/pages/Info.tsx:245",
                      className: "space-y-2 font-body text-sm",
                      children: [
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Info.tsx:246",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(sn, {
                              "data-loc": "client/src/pages/Info.tsx:247",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Info.tsx:248",
                              href: "tel:0642874405",
                              className: "opacity-80 hover:opacity-100",
                              children: "06-42874405",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          "data-loc": "client/src/pages/Info.tsx:255",
                          className: "flex items-center gap-2",
                          children: [
                            o.jsx(ln, {
                              "data-loc": "client/src/pages/Info.tsx:256",
                              size: 16,
                            }),
                            o.jsx("a", {
                              "data-loc": "client/src/pages/Info.tsx:257",
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
              "data-loc": "client/src/pages/Info.tsx:267",
              className:
                "border-t border-white border-opacity-20 pt-8 text-center font-body text-sm opacity-80",
              children: o.jsx("p", {
                "data-loc": "client/src/pages/Info.tsx:268",
                children: "© 2026 Balanergy. Alle rechten voorbehouden.",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
var Ao = {},
  M2 = () => {
    window.va ||
      (window.va = function (...r) {
        (window.vaq || (window.vaq = []), window.vaq.push(r));
      });
  },
  D2 = "@vercel/analytics",
  _2 = "2.0.1";
function jh() {
  return typeof window < "u";
}
function wh() {
  try {
    const l = "production";
  } catch {}
  return "production";
}
function B2(l = "auto") {
  if (l === "auto") {
    window.vam = wh();
    return;
  }
  window.vam = l;
}
function R2() {
  return (jh() ? window.vam : wh()) || "production";
}
function zu() {
  return R2() === "development";
}
function H2(l) {
  return l.scriptSrc
    ? Rl(l.scriptSrc)
    : zu()
      ? "https://va.vercel-scripts.com/v1/script.debug.js"
      : l.basePath
        ? Rl(`${l.basePath}/insights/script.js`)
        : "/_vercel/insights/script.js";
}
function U2(l, r) {
  var u;
  let c = l;
  if (r)
    try {
      c = { ...((u = JSON.parse(r)) == null ? void 0 : u.analytics), ...l };
    } catch {}
  B2(c.mode);
  const f = { sdkn: D2 + (c.framework ? `/${c.framework}` : ""), sdkv: _2 };
  return (
    c.disableAutoTrack && (f.disableAutoTrack = "1"),
    c.viewEndpoint && (f.viewEndpoint = Rl(c.viewEndpoint)),
    c.eventEndpoint && (f.eventEndpoint = Rl(c.eventEndpoint)),
    c.sessionEndpoint && (f.sessionEndpoint = Rl(c.sessionEndpoint)),
    zu() && c.debug === !1 && (f.debug = "false"),
    c.dsn && (f.dsn = c.dsn),
    c.endpoint
      ? (f.endpoint = c.endpoint)
      : c.basePath && (f.endpoint = Rl(`${c.basePath}/insights`)),
    { beforeSend: c.beforeSend, src: H2(c), dataset: f }
  );
}
function Rl(l) {
  return l.startsWith("http://") ||
    l.startsWith("https://") ||
    l.startsWith("/")
    ? l
    : `/${l}`;
}
function L2(l = { debug: !0 }, r) {
  var u;
  if (!jh()) return;
  const { beforeSend: c, src: f, dataset: m } = U2(l, r);
  if (
    (M2(),
    c && ((u = window.va) == null || u.call(window, "beforeSend", c)),
    document.head.querySelector(`script[src*="${f}"]`))
  )
    return;
  const x = document.createElement("script");
  x.src = f;
  for (const [y, v] of Object.entries(m)) x.dataset[y] = v;
  ((x.defer = !0),
    (x.onerror = () => {
      const y = zu()
        ? "Please check if any ad blockers are enabled and try again."
        : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
      console.log(
        `[Vercel Web Analytics] Failed to load script from ${f}. ${y}`
      );
    }),
    document.head.appendChild(x));
}
function Y2({ route: l, path: r }) {
  var u;
  (u = window.va) == null || u.call(window, "pageview", { route: l, path: r });
}
function q2() {
  if (!(typeof process > "u" || typeof Ao > "u"))
    return Ao.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function G2() {
  if (!(typeof process > "u" || typeof Ao > "u"))
    return Ao.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
function V2(l) {
  return (
    O.useEffect(() => {
      var r;
      l.beforeSend &&
        ((r = window.va) == null || r.call(window, "beforeSend", l.beforeSend));
    }, [l.beforeSend]),
    O.useEffect(() => {
      L2(
        {
          framework: l.framework || "react",
          basePath: l.basePath ?? q2(),
          ...(l.route !== void 0 && { disableAutoTrack: !0 }),
          ...l,
        },
        l.configString ?? G2()
      );
    }, []),
    O.useEffect(() => {
      l.route && l.path && Y2({ route: l.route, path: l.path });
    }, [l.route, l.path]),
    null
  );
}
var Eo = {},
  X2 = () => {
    window.si ||
      (window.si = function (...r) {
        ((window.siq = window.siq || []), window.siq.push(r));
      });
  },
  Q2 = "@vercel/speed-insights",
  Z2 = "2.0.0";
function K2() {
  return typeof window < "u";
}
function J2() {
  try {
    const l = "production";
  } catch {}
  return "production";
}
function Nh() {
  return J2() === "development";
}
function W2(l) {
  return l.scriptSrc
    ? ko(l.scriptSrc)
    : Nh()
      ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js"
      : l.dsn
        ? "https://va.vercel-scripts.com/v1/speed-insights/script.js"
        : l.basePath
          ? ko(`${l.basePath}/speed-insights/script.js`)
          : "/_vercel/speed-insights/script.js";
}
function $2(l, r) {
  var u;
  let c = l;
  if (r)
    try {
      c = { ...((u = JSON.parse(r)) == null ? void 0 : u.speedInsights), ...l };
    } catch {}
  const f = { sdkn: Q2 + (c.framework ? `/${c.framework}` : ""), sdkv: Z2 };
  return (
    c.sampleRate && (f.sampleRate = c.sampleRate.toString()),
    c.route && (f.route = c.route),
    Nh() && c.debug === !1 && (f.debug = "false"),
    c.dsn && (f.dsn = c.dsn),
    c.endpoint
      ? (f.endpoint = ko(c.endpoint))
      : c.basePath && (f.endpoint = ko(`${c.basePath}/speed-insights/vitals`)),
    { src: W2(c), beforeSend: c.beforeSend, dataset: f }
  );
}
function ko(l) {
  return l.startsWith("http://") ||
    l.startsWith("https://") ||
    l.startsWith("/")
    ? l
    : `/${l}`;
}
function P2(l = {}, r) {
  var u;
  if (!K2() || l.route === null) return null;
  X2();
  const { beforeSend: c, src: f, dataset: m } = $2(l, r);
  if (document.head.querySelector(`script[src*="${f}"]`)) return null;
  c && ((u = window.si) == null || u.call(window, "beforeSend", c));
  const x = document.createElement("script");
  ((x.src = f), (x.defer = !0));
  for (const [y, v] of Object.entries(m)) x.dataset[y] = v;
  return (
    (x.onerror = () => {
      console.log(
        `[Vercel Speed Insights] Failed to load script from ${f}. Please check if any content blockers are enabled and try again.`
      );
    }),
    document.head.appendChild(x),
    {
      setRoute: y => {
        x.dataset.route = y ?? void 0;
      },
    }
  );
}
function F2() {
  if (!(typeof process > "u" || typeof Eo > "u"))
    return Eo.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
function I2() {
  if (!(typeof process > "u" || typeof Eo > "u"))
    return Eo.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
}
function ej(l) {
  O.useEffect(() => {
    var u;
    l.beforeSend &&
      ((u = window.si) == null || u.call(window, "beforeSend", l.beforeSend));
  }, [l.beforeSend]);
  const r = O.useRef(null);
  return (
    O.useEffect(() => {
      if (!r.current) {
        const u = P2(
          {
            framework: l.framework ?? "react",
            basePath: l.basePath ?? F2(),
            ...l,
          },
          l.configString ?? I2()
        );
        u && (r.current = u.setRoute);
      }
    }, [l]),
    O.useEffect(() => {
      r.current && l.route && r.current(l.route);
    }, [l.route]),
    null
  );
}
function tj() {
  return o.jsxs(l2, {
    "data-loc": "client/src/App.tsx:20",
    children: [
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:21",
        path: "/",
        component: u2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:22",
        path: "/behandelingen",
        component: m2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:23",
        path: "/arrangementen",
        component: x2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:24",
        path: "/over-mij",
        component: b2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:25",
        path: "/contact",
        component: w2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:26",
        path: "/workshops",
        component: A2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:27",
        path: "/personal-training",
        component: O2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:28",
        path: "/info",
        component: z2,
      }),
      o.jsx(gn, {
        "data-loc": "client/src/App.tsx:29",
        path: "/404",
        component: up,
      }),
      o.jsx(gn, { "data-loc": "client/src/App.tsx:31", component: up }),
    ],
  });
}
function nj() {
  return o.jsx(s2, {
    "data-loc": "client/src/App.tsx:43",
    children: o.jsx(o2, {
      "data-loc": "client/src/App.tsx:44",
      defaultTheme: "light",
      children: o.jsxs(m1, {
        "data-loc": "client/src/App.tsx:45",
        children: [
          o.jsx(Sy, { "data-loc": "client/src/App.tsx:46" }),
          o.jsx(tj, { "data-loc": "client/src/App.tsx:47" }),
          o.jsx(V2, { "data-loc": "client/src/App.tsx:48" }),
          o.jsx(ej, { "data-loc": "client/src/App.tsx:49" }),
        ],
      }),
    }),
  });
}
Xv.createRoot(document.getElementById("root")).render(
  o.jsx(nj, { "data-loc": "client/src/main.tsx:5" })
);
