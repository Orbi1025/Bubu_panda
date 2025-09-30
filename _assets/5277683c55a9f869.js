(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [58724],
  {
    /***/ 102402: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(103410);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var y7b = __webpack_require__(405148),
          z7b = y7b.jsx,
          A7b = y7b.jsxs;
        var B7b = __webpack_require__,
          C7b = B7b(208463),
          D7b = B7b.n_x(C7b)();
        var E7b = __webpack_require__,
          F7b = E7b(802496),
          G7b = E7b.n_x(F7b);
        var H7b = __webpack_require__(227200).Component;
        var I7b = __webpack_require__(277049)._;
        var hY = __webpack_require__(186901),
          J7b = hY.EW,
          K7b = hY.m3,
          L7b = hY.mJ,
          M7b = hY.sH,
          iY = hY.XI;
        var N7b = __webpack_require__(269018)._;
        var O7b = __webpack_require__(536618),
          P7b = O7b.iB,
          Q7b = O7b.Sx;
        var R7b, S7b, T7b, jY, V7b, U7b;
        new ((R7b = class extends I7b {
          constructor() {
            super(jY);
            S7b();
          }
        }),
        (() => {
          class a extends (T7b = H7b) {
            static D(b) {
              __c.M(b, {
                Cn: M7b.ref,
                Cxa: J7b,
                componentDidMount: iY,
                $4a: iY.bound,
                onError: iY.bound,
                SW: iY.bound,
              });
            }
            get Cxa() {
              const b = this.props.store,
                c = this.props.Hu;
              return !this.Cn || (c && !b.qb && !b.Mc?.size);
            }
            componentDidMount() {
              const b = this.props.store;
              this.props.controller.onWaiting();
              __c.fc(this, [
                L7b(
                  () => ({ data: b.animationData?.get(), Mc: b.Mc }),
                  ({ data: c, Mc: d }) => c && this.loadAnimation(c, d),
                  { fireImmediately: !0, equals: K7b.shallow }
                ),
                L7b(
                  () => this.Cn && b.qb,
                  (c) => (c ? this.play() : this.pause()),
                  { fireImmediately: !0 }
                ),
                this.SW,
              ]);
            }
            render() {
              const b = this.props.Hu,
                c = this.props.store,
                d = c.Sa,
                { ariaHidden: e, ariaLabel: f } = __c.ZU(d);
              return A7b("div", {
                className: "UB_yHg",
                children: [
                  this.Cxa &&
                    z7b("img", {
                      className: "KYSIUA",
                      src: c.yN,
                      ref: this.a7a,
                      alt: d,
                    }),
                  z7b("div", {
                    className: D7b("KYSIUA", b && this.Cxa && "BUTEbw"),
                    ref: this.DZ,
                    role: d ? "img" : void 0,
                    "aria-label": f,
                    "aria-hidden": e,
                  }),
                ],
              });
            }
            $4a() {
              this.Cn = !0;
              this.props.controller.onCanPlay();
            }
            onError() {
              this.props.controller.onError();
              this.SW();
            }
            seek(b) {
              this.rn &&
                ((b *= 1e3),
                this.props.store.qb
                  ? this.rn.goToAndPlay(b)
                  : this.rn.goToAndStop(b));
            }
            io() {
              if (!this.Cn) {
                var b = this.a7a.current;
                return b ? __c.nx(b) : void 0;
              }
              if ((b = this.DZ.current))
                if ((b = b.getElementsByTagName("svg")[0]))
                  return (
                    (b = U7b(b)),
                    b.state === "fulfilled"
                      ? { type: "image", element: b.value }
                      : void 0
                  );
            }
            play() {
              this.rn?.play();
            }
            pause() {
              this.rn?.pause();
            }
            SW() {
              this.rn &&
                (this.rn.destroy(), (this.rn = void 0), (this.Cn = !1));
            }
            loadAnimation(b, c) {
              const d = __c.y(this.DZ.current);
              b = JSON.parse(JSON.stringify(b));
              c && c.size > 0 && __c.k7b(b, c);
              this.SW();
              this.rn = G7b().loadAnimation({
                autoplay: !1,
                animationData: b,
                container: d,
                renderer: "svg",
                loop: !0,
              });
              if ((c = d.getElementsByTagName("svg")[0]))
                c.style.transform === "translate3d(0px, 0px, 0px)" &&
                  (c.style.transform = ""),
                  this.rn.goToAndStop(this.props.store.currentTime * 1e3),
                  this.rn.addEventListener("DOMLoaded", this.$4a),
                  this.rn.addEventListener("error", this.onError),
                  this.rn.addEventListener("data_failed", this.onError);
            }
            constructor(...b) {
              super(...b);
              this.DZ = (jY.D(this), __c.av());
              this.a7a = __c.av();
              this.Cn = !1;
            }
          }
          ({
            c: [jY, S7b],
          } = N7b(a, [], [__c.nc], T7b));
        })(),
        R7b)();
        V7b = new XMLSerializer();
        U7b = P7b((a) => {
          a = new Blob([V7b.serializeToString(a)], { type: "image/svg+xml" });
          const b = URL.createObjectURL(a);
          return Q7b(__c.kT(b).finally(() => URL.revokeObjectURL(b)));
        });
        __c.CQb = {
          get Sib() {
            return jY;
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/5277683c55a9f869.js.map
