(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [46495],
  {
    /***/ 891548: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        __c.mic = function (a) {
          const b = { ...a.props };
          a.G.zt(({ Ii: c, eL: d }) => {
            c = a.EWb ? {} : { Gd: c() };
            a.ha.track(a.event, { ...c, spanContext: d(), ...b });
          });
        };
        __c.LF.prototype.bY = __c.da(23, function () {});
        __c.ZH.prototype.bY = __c.da(22, function () {
          this.ended ||
            this.bP ||
            ((this.bP = !0),
            setTimeout(() => {
              try {
                (this.ended = !0), __c.P6a(this);
              } catch (a) {
                this.I.Mb(a, {
                  Qe: "Error ending span in next cycle",
                  extra: new Map(__c.SH(this)),
                });
              }
            }));
        });
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/f2393dc7c1240373.js.map
