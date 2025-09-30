(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [41990],
  {
    /***/ 796909: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var E = __c.E;
        var x = __c.x;
        var tDc = function (a, b) {
            var c = __c.Di(b);
            a = __c.tm(a.Sc, b);
            b = c.ua;
            const d = c.br;
            c = c.br;
            try {
              a.Sd(b, d, c, !0, !1);
            } finally {
              a.destroy();
            }
          },
          vDc = function (a, b, c, d) {
            c = new uDc(c, d);
            x(a.count() === 1, "Only single widget root element is supported");
            a = a.first();
            x(
              a != null && a.type === "layout",
              `Unexpected widget root found: ${a?.type}`
            );
            c.fra(a, b);
          },
          xDc = function (a) {
            return {
              ...__c.ACb,
              ...a7,
              top: 0,
              left: 0,
              width: a.width,
              height: a.height,
              viewBox: {
                top: 0,
                left: 0,
                width: a.Zqa.width,
                height: a.Zqa.height,
              },
              fb: a.fb.map(wDc),
            };
          },
          yDc = function (a) {
            switch (a.GF) {
              case 0:
                var b = __c.Jk.Cb().attrs({
                  "font-size": a.fontSize,
                  leading: a.lineHeight ? a.lineHeight * 1e3 : void 0,
                  "text-align": a.textAlign || "start",
                  "font-weight": a.fontWeight,
                  "font-family": a.fontFamily,
                  "font-kerning": "normal",
                  "font-feature-liga": "on",
                  "font-feature-clig": "on",
                  "font-feature-calt": "on",
                  direction: a.direction,
                });
                a.color && b.Ae("color", a.color);
                b = b
                  .sb(a.text.endsWith("\n") ? a.text : `${a.text}\n`)
                  .build();
                return {
                  ...__c.VG,
                  ...b7,
                  ...a7,
                  xa: a.xa ?? 0,
                  text: b,
                  Mf: 2,
                };
              case 1:
                return (
                  (b = a.text), { ...__c.VG, ...b7, ...a7, text: b, Mf: 2 }
                );
              default:
                throw new E(a);
            }
          },
          DDc = function ({ content: a, fill: b, border: c, N: d }) {
            b = { ...__c.lCb, fill: zDc(b), border: ADc(c), N: BDc(d) };
            switch (a.type) {
              case "shape":
                return { ...b, element: xDc(a) };
              case "text":
                return { ...b, element: yDc(a) };
              case "layout":
                return { ...b, element: CDc(a) };
              default:
                throw new E(a);
            }
          },
          CDc = function ({
            cells: a,
            border: b,
            fill: c,
            N: d,
            gridTemplateColumns: e,
            gridTemplateRows: f,
            columnGap: g,
            rowGap: h,
          }) {
            return {
              ...__c.mCb,
              ...b7,
              ...a7,
              J: b7.width,
              P: b7.height,
              fill: zDc(c),
              border: ADc(b),
              direction: 1,
              N: BDc(d),
              cells: new Map(a.map((k) => [k.id, DDc(k)])),
              behavior: {
                rules: [
                  {
                    Jh: void 0,
                    grid: {
                      gridTemplateColumns: e,
                      gridTemplateRows: f,
                      columnGap: g ?? 0,
                      rowGap: h ?? 0,
                      Wh: EDc(a),
                    },
                  },
                ],
              },
              Ic: void 0,
            };
          },
          EDc = function (a) {
            return new Map(a.map((b) => [b.id, FDc(b)]));
          },
          FDc = function (a) {
            const b = a.placement.padding;
            return {
              ...__c.Tja,
              ...a.placement,
              alignSelf: "center",
              padding: {
                ...__c.PS,
                ...(b != null ? (typeof b === "number" ? { all: b } : b) : {}),
              },
            };
          },
          ADc = function (a) {
            const b = a?.color ?? "#000000";
            return {
              ...__c.Fz,
              all: a
                ? { ...__c.ES, weight: a.weight ?? 1, color: b, re: !0 }
                : void 0,
            };
          },
          BDc = function (a) {
            return {
              ...__c.OS,
              ...(a != null ? (typeof a === "number" ? { all: a } : a) : {}),
            };
          },
          wDc = function (a) {
            return {
              ...__c.BCb,
              ...a,
              fill: zDc(a.fill),
              stroke: GDc(a.stroke),
            };
          },
          GDc = function (a) {
            return a ? { ...__c.ES, color: a.color, weight: a.weight } : void 0;
          },
          zDc = function (a) {
            const b = { ...__c.tD, xa: a?.xa ?? 0 };
            switch (a?.type) {
              case "color":
                return { ...b, color: a.color };
              case "gradient":
                return { ...b, Pa: a.Pa };
              case void 0:
                return b;
              default:
                throw new E(a);
            }
          },
          NDc = function (a, b) {
            const c = new Map(b.cells.map((d) => [d.id, d]));
            HDc(
              a.cells,
              c,
              (d, e) => {
                let f = !1;
                IDc(d.element, e.content, () => {
                  a.cells.delete(e.id);
                  a.cells.set(e.id, DDc(e));
                  f = !0;
                });
                f ||
                  (JDc(d.fill, e.fill), KDc(d.border, e.border), LDc(d.N, e.N));
              },
              (d) => DDc(d)
            );
            MDc(a.behavior, b, c);
            JDc(a.fill, b.fill);
            LDc(a.N, b.N);
            KDc(a.border, b.border);
            a.xa = b.xa ?? 0;
          },
          MDc = function (a, b, c) {
            ODc(
              a.rules,
              [b],
              (d) => {
                PDc(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                  (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                PDc(d.grid.gridTemplateRows, b.gridTemplateRows) ||
                  (d.grid.gridTemplateRows = b.gridTemplateRows);
                d.grid.columnGap = b.columnGap ?? 0;
                d.grid.rowGap = b.rowGap ?? 0;
                HDc(
                  d.grid.Wh,
                  c,
                  (e, f) => {
                    const g = f.placement.padding,
                      h = f.placement.gridColumnEnd,
                      k = f.placement.gridRowStart,
                      l = f.placement.gridRowEnd,
                      m = f.placement.alignSelf;
                    e.gridColumnStart = f.placement.gridColumnStart;
                    e.gridColumnEnd = h;
                    e.gridRowStart = k;
                    e.gridRowEnd = l;
                    typeof g === "number" && e.padding.all !== g
                      ? (e.padding.all = g)
                      : typeof g !== "number" &&
                        ((e.padding.qa = g?.qa),
                        (e.padding.Da = g?.Da),
                        (e.padding.pa = g?.pa),
                        (e.padding.Ma = g?.Ma));
                    e.alignSelf = m;
                  },
                  (e) => FDc(e)
                );
              },
              (d) => ({
                Jh: void 0,
                grid: {
                  gridTemplateColumns: b.gridTemplateColumns,
                  gridTemplateRows: b.gridTemplateRows,
                  columnGap: b.columnGap ?? 0,
                  rowGap: b.rowGap ?? 0,
                  Wh: EDc(d.cells),
                },
              })
            );
          },
          QDc = function (a, b) {
            ODc(
              a.fb,
              b.fb,
              (e, f) => {
                e.d = f.d;
                JDc(e.fill, f.fill);
                e.stroke.ref && f.stroke
                  ? ((e = e.stroke.ref),
                    (f = f.stroke),
                    (e.color = f.color),
                    (e.weight = f.weight))
                  : e.stroke.set(GDc(f.stroke));
              },
              (e) => wDc(e)
            );
            const { viewBox: c, width: d } = xDc(b);
            a.width = d;
            __c.Di(a.viewBox).equals(__c.Di(c)) || (a.viewBox = c);
          },
          IDc = function (a, b, c) {
            switch (b.type) {
              case "shape":
                a.type === "shape" ? QDc(a, b) : c();
                break;
              case "text":
                (a.type === "text" &&
                  __c.Jk.domain.oc(__c.Jk.snapshot(a.text), yDc(b).text)) ||
                  c();
                break;
              case "layout":
                a.type === "layout" ? NDc(a, b) : c();
                break;
              default:
                throw new E(b);
            }
          },
          HDc = function (a, b, c, d) {
            const e = new Set(a.keys());
            for (const [f, g] of b)
              (b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
            e.forEach((f) => a.delete(f));
          },
          ODc = function (a, b, c, d) {
            const e = a.toArray();
            for (let f = 0; f < Math.max(e.length, b.length); f++)
              if (f < e.length && f < b.length) c(e[f], b[f]);
              else if (f < e.length && f >= b.length) a.delete(e[f]);
              else if (f >= e.length && f < b.length) {
                const g = d(b[f]);
                a.append(g);
              }
          },
          JDc = function (a, b) {
            switch (b?.type) {
              case "color":
                a.color = b.color;
                a.Pa.set(void 0);
                a.xa = b.xa ?? 0;
                break;
              case "gradient":
                if (a.Pa.ref && __c.zfb.domain.oc(a.Pa.ref, b.Pa)) break;
                a.color = void 0;
                a.Pa.set(b.Pa);
                a.xa = b.xa ?? 0;
                break;
              default:
                (a.color = void 0), a.Pa.set(void 0);
            }
          },
          LDc = function (a, b) {
            b = BDc(b);
            a.all = b.all;
            a.TC = b.TC;
            a.RC = b.RC;
            a.SC = b.SC;
            a.QC = b.QC;
          },
          KDc = function (a, b) {
            b = ADc(b).all;
            var c;
            if ((c = b))
              (c = a.all.ref),
                (c = !(c && b
                  ? __c.Gz.domain.oc(__c.Gz.snapshot(c), b)
                  : !c && !b));
            c && a.all.set(b);
          },
          PDc = function (a, b) {
            return a.length === b.length && a.every((c) => b.includes(c));
          },
          SDc = function (a, b, c, d) {
            let e = a.p8a.get(b);
            if (e) return e;
            e = {
              fA: new RDc(c.$m, b, d, c.yBa),
              FQa: void 0,
              y1a: void 0,
              T3a: __c.vX.mode,
            };
            a.p8a.set(b, e);
            return e;
          },
          UDc = function (a, b, c, d, e) {
            e = SDc(a, c, b, e);
            const f = e.fA,
              g = e.y1a,
              h = e.FQa,
              k = e.T3a;
            c = __c.GR.snapshot(c);
            const l = a.nC.DAa?.(d) || __c.vX;
            (f.bl === g && TDc.structural(c, h) && l.mode === k) ||
              ((e.FQa = c),
              (e.y1a = f.bl),
              (e.T3a = l.mode),
              (b = b.render(f, l)),
              a.VBb.update(d, b),
              vDc(
                d,
                b,
                (m, n) => a.YU.QBa.set(m, n),
                (m, n, p) => a.YU.refs.set(m, { ref: n, key: p })
              ));
          },
          XDc = function (a, b) {
            const c = [],
              d = () => c.forEach((e) => e());
            c.push(a.RCb());
            c.push(
              VDc(
                () => {
                  a: {
                    var e = new WDc();
                    for (const f of b)
                      if ((e.aV(f), e.pza)) {
                        e = e.pza;
                        break a;
                      }
                    e = void 0;
                  }
                  return e && (a.kc.isLoaded(e) || a.TCa.has(e));
                },
                (e) => {
                  if (e) {
                    for (const f of b) x(f.type === "layout"), tDc(a.im, f);
                    d();
                  }
                }
              )
            );
            return d;
          },
          YDc = function (a, b) {
            return {
              Mx: ({ Kd: c }) => {
                const { fA: d } = SDc(a.renderer, c, b, a.EM),
                  e = __c.hxb.create([]),
                  f = [];
                f.push(XDc(a.Vsb, e));
                f.push(
                  VDc(
                    () => [a.nC.DAa?.(e), __c.GR.snapshot(c), d.bl],
                    () => {
                      UDc(a.renderer, b, c, e, a.EM);
                    },
                    { fireImmediately: !0, equals: TDc.structural }
                  )
                );
                const g = b.GEa?.({ fA: d });
                g && f.push(g);
                return {
                  La: e,
                  Um: () => {
                    f.forEach((h) => h());
                  },
                };
              },
            };
          },
          c7 = __webpack_require__(186901),
          ZDc = c7.EW,
          $Dc = c7.h5,
          TDc = c7.m3,
          VDc = c7.mJ,
          d7 = c7.sH;
        var aEc = class {
          static D(a) {
            __c.M(a, { zEb: d7.ref, uub: d7.ref });
          }
          constructor() {
            this.DAa = (aEc.D(this), void 0);
          }
        };
        var bEc = class {
            constructor() {
              this.sources = new WeakMap();
            }
          },
          RDc = class {
            static D(a) {
              __c.M(a, { zf: ZDc });
            }
            get z1a() {
              var a = this.EM,
                b = this.Kd,
                c = this.yBa;
              let d = a.sources.get(b);
              d || ((d = d7.box(c)), a.sources.set(b, d));
              return d;
            }
            get bl() {
              return this.z1a.get();
            }
            get zf() {
              return this.$m.Wu({ type: "dict", value: this.Kd });
            }
            In(a) {
              this.z1a.set(
                a instanceof Function
                  ? { ...this.bl, ...a() }
                  : { ...this.bl, ...a }
              );
            }
            constructor(a, b, c, d) {
              this.$m = a;
              this.Kd = b;
              this.EM = c;
              this.yBa = d;
              RDc.D(this);
            }
          };
        var uDc = class {
          uca(a, b) {
            this.d8a(a, b);
            b.ref && this.jHa(a, b.ref, b.key);
          }
          U1(a, b) {
            b.ref && this.jHa(a.text, b.ref, b.key);
          }
          hNa(a, b) {
            switch (b.content.type) {
              case "shape":
                x(a.element.type === "shape");
                this.uca(a.element, b.content);
                break;
              case "text":
                x(a.element.type === "text");
                this.U1(a.element, b.content);
                break;
              case "layout":
                x(a.element.type === "layout");
                this.fra(a.element, b.content);
                break;
              default:
                throw new E(b.content);
            }
          }
          fra(a, b) {
            this.d8a(a, b);
            b.ref && this.jHa(a, b.ref, b.key);
            for (const [c, d] of a.cells)
              (a = b.cells.find((e) => e.id === c)),
                x(!!d && !!a),
                this.hNa(d, a);
          }
          constructor(a, b) {
            this.d8a = a;
            this.jHa = b;
          }
        };
        var a7 = { locked: !0, Cg: __c.jCb, lg: !0 },
          b7 = { top: 0, left: 0, width: 1, height: 1 };
        var cEc = class {
          constructor(a) {
            this.im = a;
            this.update = (b, c) => {
              ODc(
                b,
                [c],
                (d, e) => {
                  switch (d.type) {
                    case "layout":
                      NDc(d, e);
                      break;
                    default:
                      throw Error(`Not supported element type: ${d.type}`);
                  }
                },
                (d) => {
                  a: switch (d.type) {
                    case "layout":
                      d = {
                        ...CDc(d),
                        ...a7,
                        width: d.minWidth,
                        height: d.minHeight,
                        J: d.minWidth,
                        P: d.minHeight,
                      };
                      break a;
                    default:
                      throw new E(d.type);
                  }
                  return d;
                }
              );
              for (const d of b)
                x(d.type === "layout"),
                  (d.width = c.minWidth),
                  (d.height = c.minHeight),
                  (d.J = c.minWidth),
                  (d.P = c.minHeight),
                  c.direction && (d.direction = c.direction),
                  tDc(this.im, d);
            };
          }
        };
        var dEc = class {
          constructor(a, b, c) {
            this.VBb = a;
            this.YU = b;
            this.nC = c;
            this.p8a = new WeakMap();
          }
        };
        var eEc = class {
            static D(a) {
              __c.M(a, { TCa: d7.shallow });
            }
            constructor(a, b) {
              this.kc = a;
              this.im = b;
              this.TCa = (eEc.D(this), new Set());
              this.Cza = new Set();
              this.RCb = () => {
                this.Yha ||
                  (this.Yha = __c.rsa(this.kc).subscribe((d) => {
                    $Dc(() => {
                      this.TCa.add(d.id);
                    });
                  }));
                const c = Symbol();
                this.Cza.add(c);
                return () => {
                  this.Cza.delete(c);
                  this.Cza.size <= 0 &&
                    this.Yha &&
                    (this.Yha.unsubscribe(), (this.Yha = void 0));
                };
              };
            }
          },
          WDc = class extends __c.js {
            aV(a, b) {
              this.pza || super.aV(a, b);
            }
            U1(a) {
              this.pza =
                (a = a.text
                  .Zh("font-family")
                  ["font-family"].values()
                  .next().value) && __c.br(a).id;
            }
          };
        var fEc = !1,
          gEc = class {
            static D(a) {
              __c.M(a, { Ev: d7.shallow });
            }
            register(a, b) {
              this.Ev.has(a) ||
                (this.Ev.set(a, b),
                this.wga || fEc || (__c.HR.set(a, YDc(this, b)), (fEc = !0)));
            }
            get(a) {
              return this.Ev.get(a);
            }
            constructor(a, b, c, d, e, f = __c.sc("f576b13d", !1)) {
              this.renderer = a;
              this.EM = b;
              this.nC = c;
              this.kc = d;
              this.im = e;
              this.wga = f;
              this.Ev = (gEc.D(this), new Map());
              this.Vsb = new eEc(this.kc, this.im);
            }
          };
        var hEc = class {
            constructor() {
              this.QBa = new __c.eA();
              this.refs = new __c.eA();
            }
          },
          iEc = class {
            getContext(a) {
              return this.YU.refs.get(a);
            }
            HR(a) {
              return this.YU.QBa.get(a);
            }
            constructor(a, b, c) {
              this.YU = a;
              this.EM = b;
              this.renderer = c;
            }
          };
        __c.mSa = {
          hxb: function (a) {
            const b = new aEc(),
              c = new hEc(),
              d = new dEc(new cEc(a.im), c, b),
              e = new bEc();
            a = new gEc(d, e, b, a.kc, a.im, a.wga);
            return { nC: b, Gcc: new iEc(c, e, d), wca: a, YU: c };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/436544148ab13693.js.map
