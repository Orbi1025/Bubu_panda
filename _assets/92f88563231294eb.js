(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [43432],
  {
    /***/ 666647: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(738123);
      __web_req__(152531);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var i1 = __c.i1;
        var M = __c.M;
        var OIc = async function (a, b) {
            return a.xca(b, async () => {
              if (a.XVa == null)
                throw Error("Scene document resources are not supported");
              const c = await a.XVa.Mq({ id: b, version: 1 }, void 0),
                d = { id: c.id, files: { TYa: c.content.url, r7a: c.Rc.url } };
              (0, __c.$b)(() => {
                a.scenes.set(d.id, d);
              });
              return d;
            });
          },
          PIc = function (a, b, c) {
            let d = b - 1,
              e = 0,
              f = c - 1,
              g = 0;
            for (let h = 0; h < c; h++)
              for (let k = 0; k < b; k++)
                a[3 + (h * b + k) * 4] !== 0 &&
                  ((d = Math.min(d, k)),
                  (e = Math.max(e, k)),
                  (f = Math.min(f, h)),
                  (g = Math.max(g, h)));
            a = g - f + 1;
            return { left: d, top: c - (f + a), width: e - d + 1, height: a };
          },
          QIc = function (a, b) {
            a.store.container = b;
            b.contains(a.yj.canvas) || b.appendChild(a.yj.canvas);
          },
          RIc = function (a, b) {
            const c = b.getContext("2d");
            if (!c) throw Error("Unable to create 2d context");
            a.store.VL && a.render(!1);
            b.width = 2e3;
            b.height = 2e3;
            c.drawImage(a.store.VL ? a.yj.canvas : a.store.vha, 0, 0, 2e3, 2e3);
          },
          SIc = function (a) {
            if (a.store.ye) {
              const b = requestAnimationFrame(() => SIc(a));
              a.store.Lda = b;
              a.render(a.store.xWa);
            }
          },
          VIc = function ({ KY: a, yj: b }) {
            const c = new TIc();
            return new UIc(c, a, b);
          },
          WIc = function (a) {
            const b = a.Nk;
            a = __c.zN.create({
              ...__c.tD,
              image: {
                ...__c.VBb,
                media: { id: a.FE, version: 1 },
                nb: void 0,
              },
            });
            return X7(b, { fill: a });
          },
          XIc = function (a) {
            const b = __c.y(a.store.container, "Missing container"),
              c = a.Bh.hY;
            b.style.width = 2e3 * a.Bh.ba + "px";
            b.style.height = 2e3 * a.Bh.ba + "px";
            b.style.left = `-${c.left * a.Bh.ba}px`;
            b.style.top = `-${c.top * a.Bh.ba}px`;
            b.style.position = "absolute";
            RIc(a.Bh, a.store.vT);
          },
          ZIc = function (a) {
            var b = __c.y(a.store.container, "Missing container");
            b.style.position = "init";
            b.style.left = "0";
            b.style.top = "0";
            b.style.width = "100%";
            b.style.height = "100%";
            b = a.Bh;
            a = a.store.vT;
            if (b.store.isInitialized) {
              var c = a.getContext("2d");
              if (!c) throw Error("Unable to create 2d context");
              var d = b.ria();
              a.width = 1 * d.width;
              a.height = 1 * d.height;
              a = YIc(b.yj);
              Y7(b.yj, 2e3, 2e3);
              b.render(!1);
              c.drawImage(
                b.yj.canvas,
                d.left * 1,
                d.top * 1,
                d.width * 1,
                d.height * 1,
                0,
                0,
                d.width * 1,
                d.height * 1
              );
              Y7(b.yj, a.width, a.height);
            } else {
              c = a.getContext("2d");
              if (!c) throw Error("Unable to create 2d context");
              d = b.store.Dua;
              a.width = d.width;
              a.height = d.height;
              c.drawImage(
                b.store.vha,
                d.left,
                d.top,
                d.width,
                d.height,
                0,
                0,
                d.width,
                d.height
              );
            }
          },
          aJc = async function (a) {
            a = new $Ic(a, {
              environment_sdr:
                "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_sdr.png",
              environment_gain:
                "https://smartmockups-web-assets.s3.us-east-1.amazonaws.com/default_octahedral_packed_gain.png",
            });
            await a.load();
            return a;
          },
          jJc = function ({ Io: a, KY: b, Zy: c, yj: d }) {
            const e = new bJc(),
              f = new cJc(e, a, dJc, c, b, d),
              g = eJc({ local: a.Rn.local }),
              h = fJc({ local: a.Rn.local }),
              k = () => X7("div", { children: "Error" });
            return gJc(() => {
              Z7(() => {
                f.initialize();
                return () => {
                  f.destroy();
                };
              }, []);
              switch (f.Owa) {
                case 1:
                  return X7(h, {});
                case 3:
                  return X7(hJc, { dS: f.dS || "" });
                case 0:
                  return X7(g, {});
                case 2:
                  return X7(WIc, { Nk: a.Nk, FE: f.Iaa || "" });
                case 4:
                  return X7(iJc, {
                    Pwb: f.dS,
                    selected: f.uyb,
                    Iaa: f.Iaa,
                    Nk: a.Nk,
                  });
                case 5:
                  return X7(k, {});
                default:
                  throw new __c.E(f.Owa);
              }
            });
          },
          mJc = function (a) {
            return gJc(({ data: b, We: { Nk: c }, Ji: { De: d } }) => {
              const [e, f] = kJc(),
                [g, h] = kJc();
              Z7(() => {
                const k = new lJc(b, d, c),
                  l = jJc({ Io: k, ...a });
                f(l);
                h(k);
              }, []);
              Z7(() => {
                g &&
                  $7(() => {
                    g.Rn = b;
                    g.De = d;
                    g.Nk = c;
                  });
              }, [g, b, d, c]);
              return e ? X7(e, {}) : X7("span", {});
            });
          },
          Y7 = function (a, b, c) {
            a.sK.width = b;
            a.sK.height = c;
          },
          nJc = function (a, b) {
            a.xna = a.xna.filter((c) => c !== b);
          },
          YIc = function (a) {
            return { width: a.sK.width, height: a.sK.height };
          },
          rJc = function (a, b = 0) {
            if (b > 5) throw Error("Unable to recreate context");
            const c = oJc(a);
            a.$V = new pJc(c);
            a.$V.onContextLost = () => {
              const d = a.sK;
              a.sK = qJc();
              rJc(a, b + 1);
              a.xna.forEach((e) => e(d));
            };
            return a.$V;
          },
          uJc = async function (a) {
            await sJc({ path: tJc });
            try {
              a.$V = rJc(a);
            } catch (b) {
              throw (
                (a.I.Mb("Failed to create WebGL renderer"),
                Error("Failed to create WebGL renderer"))
              );
            }
          },
          oJc = function (a) {
            const b = a.sK.getContext("webgl");
            if (b != null) return b;
            a.I.Mb("Failed to get WebGL context for scene widget");
            throw Error("Failed to get WebGL context for scene widget");
          },
          qJc = function () {
            const a = document.createElement("canvas");
            a.width = 1e3;
            a.height = 1e3;
            a.style.width = "100%";
            a.style.visibility = "visible";
            return a;
          },
          a8 = __webpack_require__(946863),
          sJc = a8.Ay,
          $Ic = a8.IB,
          pJc = a8.ly,
          vJc = a8.tV;
        var b8 = __webpack_require__(186901),
          wJc = b8.EW,
          $7 = b8.h5,
          c8 = b8.mJ,
          d8 = b8.sH,
          e8 = b8.XI;
        var xJc = __webpack_require__(405148),
          X7 = xJc.jsx,
          yJc = xJc.jsxs;
        var zJc = __webpack_require__(227200),
          Z7 = zJc.useEffect,
          AJc = zJc.useRef,
          kJc = zJc.useState;
        var gJc = __webpack_require__(371201).PA;
        var tJc = __webpack_require__(107745).A;
        var BJc = class {
          constructor(a) {
            this.yj = a;
          }
        };
        var CJc = class {
          static D(a) {
            M(a, {
              selected: d8.ref,
              Ueb: d8.ref,
              $ia: d8.ref,
              uCa: d8.ref,
              cra: d8.ref,
            });
          }
          constructor(a) {
            this.Bh = a;
            this.selected = (CJc.D(this), !1);
            this.uCa = this.$ia = this.Ueb = !1;
            this.cra = 0;
          }
        };
        var UIc = class {
          static D(a) {
            M(a, {
              initialize: e8,
              Qrb: e8,
              rKa: e8,
              iab: e8,
              dispose: e8,
              ria: e8,
              KAa: e8,
              zbb: e8,
            });
          }
          initialize(a) {
            this.store.UYa = a;
            if (!this.store.VL) {
              a = this.store;
              var b = this.KY;
              var c = this.store.UYa;
              if (b.yj.Kfb && c instanceof $Ic) b = new vJc(b.yj.Kfb, c);
              else throw Error("GltfResource needs GltfResource");
              a.VL = b;
              this.yj.xna.push(this.KAa);
            }
            Y7(this.yj, 2e3, 2e3);
            this.store.isInitialized = !0;
          }
          Qrb(a, b = !0) {
            Y7(this.yj, 2e3, 2e3);
            this.store.hY = this.ria();
            this.store.ba = a;
            this.store.xWa = b;
            this.zbb();
          }
          get hY() {
            return this.store.hY;
          }
          rKa() {
            this.store.ye = !1;
            this.store.Lda != null &&
              (cancelAnimationFrame(this.store.Lda), (this.store.Lda = void 0));
          }
          iab(a) {
            this.store.FQ = a;
          }
          dispose() {
            this.rKa();
            this.isInitialized &&
              ((this.store.Dua = this.ria()), RIc(this, this.store.vha));
            this.store.VL?.dispose();
            this.store.VL = void 0;
            this.store.isInitialized = !1;
            nJc(this.yj, this.KAa);
          }
          ria() {
            if (this.store.kea && this.store.FQ === this.store.kea?.aGb)
              return this.store.kea.ja;
            var a = YIc(this.yj);
            Y7(this.yj, 2e3, 2e3);
            this.render(!1);
            const b = this.yj.getImageData();
            Y7(this.yj, a.width, a.height);
            a = this.Ltb(b.data, b.width, b.height);
            this.store.kea = { aGb: this.store.FQ, ja: a };
            return a;
          }
          get isInitialized() {
            return this.store.isInitialized;
          }
          get ye() {
            return this.store.ye;
          }
          get ba() {
            return this.store.ba;
          }
          zbb() {
            this.rKa();
            this.store.ye = !0;
            SIc(this);
          }
          render(a) {
            this.store.VL?.render({
              distance: 1,
              rotationPhi: this.store.FQ.rotation.x,
              rotationTheta: this.store.FQ.rotation.y,
              enableGrid: a,
            });
          }
          constructor(a, b, c, d = PIc) {
            this.store = a;
            this.KY = b;
            this.yj = c;
            this.Ltb = d;
            this.KAa =
              (UIc.D(this),
              (e) => {
                $7(() => {
                  const f = this.store.UYa,
                    g = this.store.container;
                  g &&
                    this.store.isInitialized &&
                    f &&
                    (g.contains(e) && g.removeChild(e),
                    QIc(this, g),
                    this.store.VL?.dispose(),
                    (this.store.VL = void 0),
                    this.initialize(f));
                });
              });
          }
        };
        var TIc = class {
          static D(a) {
            M(a, {
              ye: d8.ref,
              FQ: d8.ref,
              Lda: d8.ref,
              yKb: d8.ref,
              vha: d8.ref,
              Dua: d8.ref,
              kea: d8.ref,
              isInitialized: d8.ref,
              ba: d8.ref,
              hY: d8.ref,
            });
          }
          constructor() {
            this.container = (TIc.D(this), void 0);
            this.xWa = this.ye = !1;
            this.FQ = { rotation: { x: 0, y: 0, z: 0 } };
            this.yKb = document.createElement("canvas");
            this.vha = document.createElement("canvas");
            this.Dua = { left: 0, top: 0, width: 1, height: 1 };
            this.isInitialized = !1;
            this.ba = 1;
            this.hY = { left: 0, top: 0, width: 1, height: 1 };
          }
        };
        var hJc = ({ dS: a }) =>
          X7("img", {
            src: a,
            alt: "Initial Snapshot",
            style: {
              maxWidth: "100%",
              maxHeight: "100%",
              width: "auto",
              height: "auto",
            },
          });
        var DJc = ({ $xb: a }) =>
            yJc("div", {
              className: "Wfem7A",
              children: [
                X7("div", { className: "CSoSRg" }),
                X7("div", {
                  className: "__J59g",
                  style: {
                    width: a ? "300%" : "init",
                    height: a ? "init" : "300%",
                    aspectRatio: "1",
                  },
                  children: X7("div", { className: "tEhdig" }),
                }),
              ],
            }),
          iJc = ({ selected: a, Pwb: b, Iaa: c, Nk: d }) => {
            const e = AJc(null),
              [f, g] = kJc(!1);
            Z7(() => {
              e.current && g(e.current.clientWidth >= e.current.clientHeight);
            }, [e]);
            return X7("div", {
              ref: e,
              className: "uDEnGQ",
              children:
                a && (b || c)
                  ? yJc("div", {
                      className: "E8BDLQ",
                      children: [
                        X7("div", {
                          className: "II7r4Q",
                          children: c
                            ? X7(WIc, { Nk: d, FE: c || "" })
                            : X7(hJc, { dS: b || "" }),
                        }),
                        X7(DJc, { $xb: f }),
                      ],
                    })
                  : X7("div", { className: "_4Wsohg" }),
            });
          };
        var EJc = ({ eDb: a, dDb: b }) => {
          const c = AJc(null);
          Z7(() => {
            const d = c.current;
            c.current && a(c.current);
            return () => {
              d && b();
            };
          }, [c, a, b]);
          return X7("div", {
            ref: c,
            style: { display: "block", position: "absolute" },
          });
        };
        var FJc = class {
          get Bh() {
            return this.local.Bh;
          }
          constructor(a) {
            this.local = a;
            this.mvb = (b) => {
              const c = this.Bh.hY;
              b.style.width = 2e3 * this.Bh.ba + "px";
              b.style.height = 2e3 * this.Bh.ba + "px";
              b.style.left = `-${c.left * this.Bh.ba}px`;
              b.style.top = `-${c.top * this.Bh.ba}px`;
              QIc(this.Bh, b);
            };
            this.kvb = () => {
              var b = this.Bh;
              b.store.container?.removeChild(b.yj.canvas);
              b.store.container = void 0;
            };
          }
        };
        var fJc = ({ local: a }) => {
          const b = new FJc(a);
          return () => X7(EJc, { eDb: b.mvb, dDb: b.kvb });
        };
        var GJc = ({ vT: a, FDb: b, onDispose: c }) => {
          const d = AJc(null);
          Z7(() => {
            d.current && b(d.current);
            return () => c();
          }, [d, b, c]);
          Z7(() => {
            d.current &&
              ((a.style.width = "100%"),
              (a.style.height = "100%"),
              d.current.appendChild(a));
          }, [d, a]);
          return X7("div", {
            ref: d,
            style: { width: "100%", height: "100%" },
          });
        };
        var HJc = class {
          static D(a) {
            M(a, { initialize: e8.bound, dispose: e8.bound });
          }
          initialize(a) {
            this.store.container = a;
            this.store.NVa = c8(
              () => [this.Bh.store.FQ, this.Bh.ye],
              this.qvb,
              { fireImmediately: !1 }
            );
            this.store.LVa = c8(() => this.local.$ia, this.nvb, {
              fireImmediately: !0,
            });
          }
          dispose() {
            this.store.NVa?.();
            this.store.NVa = void 0;
            this.store.LVa?.();
            this.store.LVa = void 0;
          }
          get vT() {
            return this.store.vT;
          }
          get Bh() {
            return this.local.Bh;
          }
          constructor(a, b) {
            this.store = a;
            this.local = b;
            this.qvb =
              (HJc.D(this),
              () => {
                this.Bh.ye || (this.local.$ia ? XIc(this) : ZIc(this));
              });
            this.nvb = () => {
              this.local.$ia ? XIc(this) : ZIc(this);
            };
          }
        };
        var IJc = class {
          constructor() {
            this.vT = document.createElement("canvas");
          }
        };
        var eJc = ({ local: a }) => {
          const b = new IJc(),
            c = new HJc(b, a);
          return () =>
            X7(GJc, { FDb: c.initialize, onDispose: c.dispose, vT: c.vT });
        };
        var cJc = class {
          static D(a) {
            M(a, {
              initialize: e8,
              destroy: e8,
              Owa: wJc,
              dS: wJc,
              ai: wJc,
              jZa: e8,
            });
          }
          async initialize() {
            this.Io.Rn.local.cra++;
            const a = await OIc(this.Zy, this.Io.Rn.G.scene.id);
            $7(() => {
              this.store.scene = a;
            });
            if (this.$H) {
              await this.yj.IPb;
              var b = await aJc(a.files.TYa);
              $7(() => {
                this.store.Zja = !0;
              });
              this.store.OVa = c8(
                () => this.ai,
                () => this.jZa(b),
                { fireImmediately: !0 }
              );
              this.store.Rpb = c8(
                () => [
                  this.Io.Rn.G.config.ref.rotationPhi,
                  this.Io.Rn.G.config.ref.rotationTheta,
                ],
                this.vvb,
                { fireImmediately: !0 }
              );
            }
          }
          destroy() {
            this.Io.Rn.local.cra--;
            this.Io.Rn.local.cra === 0 && this.Bh.dispose();
            this.$H && (this.store.OVa?.(), this.store.Rpb?.());
          }
          get Owa() {
            return this.$H && this.ai && !this.store.Zja
              ? 4
              : (this.x0a && this.$H && !this.Bh.ye) ||
                (this.c0a && !this.Bh.ye) ||
                (this.$H && this.x0a && !this.ai)
              ? 0
              : this.c0a
              ? 1
              : this.Iaa
              ? 2
              : this.dS
              ? 3
              : this.vg
              ? 4
              : 5;
          }
          get dS() {
            return this.store.scene?.files.r7a;
          }
          get x0a() {
            return this.Io.Rn.local.Ueb;
          }
          get Iaa() {
            return this.Io.Rn.G.config.ref.snapshot?.id;
          }
          get vg() {
            return this.store.scene == null;
          }
          get $H() {
            return this.yWa && this.Io.De === 30;
          }
          get uyb() {
            return this.ai && this.$H;
          }
          get ai() {
            return this.Io.Rn.local.selected;
          }
          get c0a() {
            return this.yWa && this.$H && this.ai && this.store.Zja;
          }
          get Bh() {
            return this.Io.Rn.local.Bh;
          }
          get G() {
            return this.Io.Rn.G;
          }
          constructor(a, b, c, d, e, f) {
            this.store = a;
            this.Io = b;
            this.yWa = c;
            this.Zy = d;
            this.KY = e;
            this.yj = f;
            this.jZa =
              (cJc.D(this),
              (g) => {
                this.ai
                  ? (this.Bh.initialize(g), (this.Io.Rn.local.uCa = !0))
                  : (this.Bh.dispose(), (this.Io.Rn.local.uCa = !1));
              });
            this.vvb = () => {
              this.Bh.ye ||
                this.Bh.iab({
                  rotation: {
                    x: this.Io.Rn.G.config.ref.rotationPhi,
                    y: this.Io.Rn.G.config.ref.rotationTheta,
                    z: 0,
                  },
                });
            };
          }
        };
        var bJc = class {
          static D(a) {
            M(a, { Zja: d8.ref, scene: d8.ref });
          }
          constructor() {
            this.OVa = (bJc.D(this), void 0);
            this.Zja = !1;
          }
        };
        var dJc = __c.sc("4260f337", !1);
        var lJc = class {
          static D(a) {
            M(a, { Rn: d8.ref, De: d8.ref, Nk: d8.ref });
          }
          constructor(a, b, c) {
            lJc.D(this);
            this.Rn = a;
            this.De = b;
            this.Nk = c;
          }
        };
        var JJc = class {
          get IPb() {
            return this.wjb;
          }
          get canvas() {
            return this.sK;
          }
          get Kfb() {
            return this.$V;
          }
          getImageData() {
            __c.x(this.$V != null, "WebGlRenderer is not initialized");
            return this.$V.readPixels();
          }
          constructor(a) {
            this.I = a;
            this.xna = [];
            this.sK = qJc();
            this.wjb = uJc(this);
          }
        };
        var KJc = __c.P_()(() => ({
          AVb(a, b, c) {
            return {
              data: {
                G: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: void 0,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              O: { width: b, height: c },
            };
          },
          BVb(a, b, c, d) {
            return {
              data: {
                G: {
                  scene: { type: "scene", id: a, version: 0 },
                  config: {
                    snapshot: b,
                    rotationPhi: 6.02138592,
                    rotationTheta: 0.08726646,
                  },
                },
                document: {},
              },
              O: { width: c, height: d },
            };
          },
        }));
        var LJc = __c.Z_({
          G: __c.Y_({
            scene: i1.Pm(1, "SceneRef"),
            config: i1.Jua(2, {
              snapshot: i1.FEb(1, "MediaRef"),
              rotationPhi: i1.YVa(2, { min: 0, max: 6.284 }),
              rotationTheta: i1.YVa(3, { min: -1.571, max: 1.571 }),
            }),
          }),
        });
        var MJc;
        MJc = __c.E_()(({ ui: a, oQ: b }) => {
          b = b.I.Wf("scene_widget_rendering");
          const c = new JJc(b),
            d = new BJc(c);
          a = mJc({ KY: d, Zy: a.Zy, yj: c });
          return {
            metadata: { type: void 0, name: void 0 },
            G4: () => {
              const e = VIc({ KY: d, yj: c });
              return new CJc(e);
            },
            G: __c.D_(a),
            exports: {},
          };
        });
        __c.n0 = {};
        __c.n0.oSb = CJc;
        __c.n0.mi = KJc;
        __c.n0.Md = MJc;
        __c.n0.ni = LJc;
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/92f88563231294eb.js.map
