(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [5936],
  {
    /***/ 623741: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var SB = __c.SB;
        var nc = __c.nc;
        var Qf = __c.Qf;
        var M = __c.M;
        var Di = __c.Di;
        var av = __c.av;
        var K = __c.K;
        var E = __c.E;
        var ei = __c.ei;
        var y = __c.y;
        var gBc = function (a, b, c, d, e) {
            const f = [];
            for (const l of d)
              for (const m of e) {
                d = l.ta;
                var g = m.column,
                  h = a.layout.cells.get(d, g);
                if (
                  !h ||
                  (l.boundary === "start" ? h.span.mc === d : h.span.wd === d)
                )
                  if (
                    ((d = c.get(`${g.id}:${d.id}`)),
                    (d = l.boundary === "start" ? d?.qa : d?.Da))
                  ) {
                    h = f[f.length - 1];
                    g = (g = b.next(g))
                      ? { column: g, boundary: "start" }
                      : { column: y(b.last()), boundary: "end" };
                    var k;
                    if ((k = h))
                      (k = h.xya),
                        (k =
                          k.column === m.column && k.boundary === m.boundary);
                    k &&
                      ((k = h.Q8a),
                      (k = k.ta === l.ta && k.boundary === l.boundary));
                    k &&
                    h.color === d.color &&
                    h.weight === d.weight &&
                    h.hd === d.hd &&
                    h.hd === 0
                      ? (h.xya = g)
                      : f.push({
                          Q8a: l,
                          IKb: m,
                          xya: g,
                          color: d.color,
                          weight: d.weight,
                          hd: d.hd,
                        });
                  }
              }
            return f;
          },
          hBc = function (a, b, c, d, e, f) {
            const g = [];
            for (const m of e)
              for (const n of d) {
                var h = n.ta,
                  k = m.column;
                e = a.layout.cells.get(h, k);
                if (
                  !e ||
                  (m.boundary === "start" ? e.span.fc === k : e.span.$c === k)
                )
                  if (
                    ((e = c.get(`${k.id}:${h.id}`)),
                    (e = m.boundary === "start" ? e?.pa : e?.Ma) &&
                      (m.boundary !== "start" || f(h, k) !== 1))
                  ) {
                    k = g[g.length - 1];
                    h = (h = b.next(h))
                      ? { ta: h, boundary: "start" }
                      : { ta: y(b.last()), boundary: "end" };
                    var l;
                    if ((l = k))
                      (l = k.ISa),
                        (l =
                          l.column === m.column && l.boundary === m.boundary);
                    l &&
                      ((l = k.Dya),
                      (l = l.ta === n.ta && l.boundary === n.boundary));
                    l &&
                    k.color === e.color &&
                    k.weight === e.weight &&
                    k.hd === e.hd &&
                    k.hd === 0
                      ? (k.Dya = h)
                      : g.push({
                          ISa: m,
                          YKb: n,
                          Dya: h,
                          color: e.color,
                          weight: e.weight,
                          hd: e.hd,
                        });
                  }
              }
            return g;
          },
          iBc = function (a, b, c, d, e, f) {
            const g = a.Dab.Pnb(d, b.last(), c.last());
            a = (r, t) => {
              const v = g.get(r) || 0,
                w = g.get(t) || 0;
              return v <= w ? r : t;
            };
            const h = new Map();
            if (e.length === 0 || f.length === 0) return h;
            var k = [],
              l = c.previous(f[0].column);
            l && k.push({ column: l, boundary: "start" });
            k.push(...f);
            (f = c.next(f[f.length - 1].column)) &&
              k.push({ column: f, boundary: "start" });
            f = [];
            (l = b.previous(e[0].ta)) && f.push({ ta: l, boundary: "start" });
            f.push(...e);
            (e = b.next(e[e.length - 1].ta)) &&
              f.push({ ta: e, boundary: "start" });
            for (const r of k) {
              k = (e = r.boundary === "start" ? r.column : void 0)
                ? c.previous(e)
                : c.last();
              for (const t of f) {
                var m = t.boundary === "start" ? t.ta : void 0;
                l = m ? b.previous(m) : b.last();
                var n = e && m && d.get(`${e.id}:${m.id}`),
                  p = e && l && d.get(`${e.id}:${l.id}`);
                m = k && m && d.get(`${k.id}:${m.id}`);
                var q = k && l && d.get(`${k.id}:${l.id}`);
                l = r.boundary === "end" ? m?.Ma : n?.pa;
                n = t.boundary === "end" ? p?.Da : n?.qa;
                p = r.boundary === "end" ? q?.Ma : p?.pa;
                m = t.boundary === "end" ? q?.Da : m?.qa;
                q = __c.wia({ qa: p, Da: l, pa: m, Ma: n }, a);
                let v;
                switch (q) {
                  case "blockStart":
                    v = p;
                    break;
                  case "blockEnd":
                    v = l;
                    break;
                  case "inlineStart":
                    v = m;
                    break;
                  case "inlineEnd":
                    v = n;
                    break;
                  default:
                    v = void 0;
                }
                const { height: w, width: z } =
                  v?.hd === 1
                    ? { height: v.weight, width: v.weight }
                    : {
                        height: Math.max(m?.weight || 0, n?.weight || 0),
                        width: Math.max(p?.weight || 0, l?.weight || 0),
                      };
                h.set(A6(r, t), __c.Nk(q, w / 2, z / 2));
              }
            }
            return h;
          },
          jBc = function (a, b, c, d, e, f, g, h) {
            if (f.length === 0 || g.length === 0) return [];
            const k = gBc(b, d, e, f, g);
            h = hBc(b, c, e, f, g, h);
            const l = iBc(a, c, d, e, f, g),
              m = a.Lub(c),
              n = a.Stb(b, d),
              p = b.direction === "rtl";
            a = k
              .map((q) => {
                var r = q.IKb,
                  t = q.xya,
                  v = q.Q8a;
                const w = q.color,
                  z = q.weight;
                q = q.hd;
                const A = p ? -1 : 1,
                  C = l.get(A6(r, v))?.Ma,
                  B = l.get(A6(t, v))?.pa;
                if (C != null && B != null) {
                  var D = y(m.get(v.ta)),
                    J = y(n.get(r.column));
                  r = y(n.get(t.column));
                  v = v.boundary === "start" ? D.start : D.end;
                  D = J.start;
                  t = t.boundary === "start" ? r.start : r.end;
                  return {
                    color: w,
                    weight: z,
                    hd: q,
                    p1: new ei(D + C * A, v),
                    p2: new ei(t + B * A, v),
                    ...__c.Sk((t - D) * A, q * z, C),
                  };
                }
              })
              .filter(__c.mb);
            return [
              ...h
                .map((q) => {
                  var r = q.ISa,
                    t = q.YKb,
                    v = q.Dya;
                  const w = q.color,
                    z = q.weight;
                  q = q.hd;
                  const A = l.get(A6(r, t))?.Da,
                    C = l.get(A6(r, v))?.qa;
                  if (A != null && C != null) {
                    var B = y(n.get(r.column)),
                      D = y(m.get(t.ta));
                    t = y(m.get(v.ta));
                    r = r.boundary === "start" ? B.start : B.end;
                    B = D.start;
                    v = v.boundary === "start" ? t.start : t.end;
                    return {
                      color: w,
                      weight: z,
                      hd: q,
                      p1: new ei(r, B + A),
                      p2: new ei(r, v + C),
                      ...__c.Sk(v - B, q * z, A),
                    };
                  }
                })
                .filter(__c.mb),
              ...a,
            ];
          },
          kBc = function (a) {
            const b = [];
            a = a.filter((c) => c.weight !== 0 && c.color != null);
            a = __c.Mk(a, (c) => c.weight);
            a = Array.from(a.entries()).sort(([c], [d]) => c - d);
            for (const [c, d] of a) {
              a = __c.Mk(d, (e) => `${e.Ll}_${e.Ml}`);
              for (const [, e] of a) {
                const { Ml: f, Ll: g } = e[0];
                a = __c.Mk(e, (h) => h.color);
                for (const [h, k] of a)
                  b.push({ weight: c, color: h, lines: k, Ll: g, Ml: f });
              }
            }
            return b;
          },
          lBc = function (a, b, c, d, e) {
            return a.QHb(b, c, d, e);
          },
          mBc = function (a, b, c, d, e, f) {
            var g = __c.pOb;
            const h = d.get().flatMap((m) =>
                b.last() === m
                  ? [
                      { ta: m, boundary: "start" },
                      { ta: m, boundary: "end" },
                    ]
                  : [{ ta: m, boundary: "start" }]
              ),
              k = e.get().flatMap((m) =>
                c.last() === m
                  ? [
                      { column: m, boundary: "start" },
                      { column: m, boundary: "end" },
                    ]
                  : [{ column: m, boundary: "start" }]
              ),
              l = new Map();
            for (const m of d.get())
              for (const n of e.get())
                (d = lBc(g.Dab, a, b, c, { column: n, ta: m })) &&
                  l.set(`${n.id}:${m.id}`, d);
            a = jBc(g, a, b, c, l, h, k, f);
            return kBc(a);
          },
          nBc = function (a, b) {
            switch (b.reference.type) {
              case 0:
                const c = a.XW(b.reference.ij);
                a = a.U_(b.reference.rj);
                return c != null && a != null;
              case 1:
                return a.XW(b.reference.ij) != null;
              case 2:
                return a.U_(b.reference.rj) != null;
              case 3:
                return !1;
              default:
                throw new E(b.reference);
            }
          },
          oBc = function (a, b, c) {
            switch (c.type) {
              case "invalid":
                return !1;
              case "canonical":
                if (c.U.length > 0) return !1;
                a = a.LI(c.Q3.slice(1).trim());
                return a.result !== "success"
                  ? !1
                  : __c.uz(new __c.xz(), a.gL).filter((d) => {
                      switch (d.type) {
                        case 0:
                          return nBc(b, d);
                        case 1:
                          return nBc(b, d.start) && nBc(b, d.end);
                        default:
                          throw new E(d);
                      }
                    }).length > 0;
              default:
                throw new E(c);
            }
          },
          pBc = function (a) {
            switch (a) {
              case 2:
                return K("ibdecg");
              case 7:
                return K("446quA");
              case 5:
                return K("j1fbqg");
              case 1:
                return K("O5i4AQ");
              case 6:
                return K("C0VHsg");
              case 4:
                return K("9ND0kg");
              case -1:
                return K("RWqnLA");
              case 9:
                return K("nQR/7w");
              case -2:
                return K("P23rtA");
              case 3:
                return K("+IXmVg");
              default:
                throw new E(a);
            }
          },
          qBc = function () {
            const [a] = (0, __c.hb)(() => av());
            return a;
          },
          rBc = function (a, b, c) {
            const d = [a];
            for (; a != null && a !== b; ) (a = c.next(a)) && d.push(a);
            return d;
          },
          sBc = function (a) {
            const b =
                a.direction === "rtl"
                  ? -(0, __c.sOb)(a) / 2
                  : -(0, __c.qOb)(a) / 2,
              c = -(0, __c.rOb)(a) / 2,
              d = a.width + (0, __c.qOb)(a) / 2 + (0, __c.sOb)(a) / 2;
            a = a.height + (0, __c.rOb)(a) / 2 + (0, __c.tOb)(a) / 2;
            return Di({
              top: 0,
              left: 0,
              width: d,
              height: a,
              rotation: 0,
            }).translate(b, c);
          },
          tBc = function (a) {
            return (b) => ({ type: "react", node: (0, __c.I)(a, { ...b }) });
          },
          uBc = function (a) {
            var b = a.QB;
            const c = a.content,
              d = a.context,
              e = a.cr;
            __c.x(c?.Zg?.type === "formula");
            const f = c.Kj;
            a = { type: "dom", render: (g) => (g.innerText = "") };
            switch (f.type) {
              case 9:
                b = a;
                break;
              case 6:
                b = b.zsa?.({
                  content: __c.Ad(__c.Rgb, { ...__c.nCb, value: f.value }),
                  context: d,
                  cr: e,
                });
                break;
              case 1:
              case 3:
              case 4:
              case 2:
              case 7:
              case 8:
                b = b.Csa?.({ context: d, value: c.JC, valueType: c.Kj.type });
                break;
              case 0:
                b = {
                  type: "react",
                  node: B6(__c.hU, {
                    label: pBc(f.error),
                    children: B6(__c.i6b, { tone: "critical" }),
                  }),
                };
                break;
              default:
                throw new E(f);
            }
            return b ?? a;
          },
          zBc = function (a) {
            const b = a.QB,
              c = a.Vf,
              d = a.ILb,
              e = a.bb;
            b.Csa = (f) => __c.dQa({ ...f, bb: e });
            b.dPa = (f) => uBc({ ...f, QB: b });
            b.cPa = (f) => vBc({ ...f });
            b.zsa = tBc(wBc({ Vf: c, zV: void 0 }));
            b.fPa = xBc(d, e);
            b.gPa = tBc((f) => B6(yBc, { ...f, bb: e }));
          },
          BBc = function ({
            label: a,
            Ya: b,
            width: c,
            height: d,
            scale: e,
            TSa: f,
          }) {
            return B6("div", {
              style: { width: c, height: d, transform: `scale(${e})` },
              className: "bx74uQ",
              children: C6(__c.bw, {
                className: D6("ivlMMQ", ABc(f)),
                size: "small",
                alignment: "center",
                children: [b && B6(b, { size: "small" }), a],
              }),
            });
          },
          ABc = function (a) {
            return {
              _2BX0vg: a === "primary-default",
              JfW_Cg: a === "primary-low",
              isMgNg: a === "primary-active",
              xwWDeQ: a === "secondary-default",
              w0EyUQ: a === "secondary-low",
              _8p5AIA: a === "secondary-active",
            };
          },
          DBc = function ({
            Qd: a,
            FZa: b,
            scale: c,
            Oq: d,
            onMouseDown: e,
            onTouchStart: f,
            Pq: g,
            Qfb: h,
            hUa: k,
          }) {
            const l = E6(() => {
                const q = d?.get();
                if (q != null && q.length !== 0) return new __c.bx(q);
              }, [d]),
              m = g(1),
              n = g(c),
              p = { ssE9Tg: !a, OkifGQ: a };
            return B6(__c.cw, {
              lp: "light",
              light: "light",
              cs: "light",
              dark: "light",
              children: (q) =>
                B6("div", {
                  className: D6("ze9QCQ", p, q.className),
                  style: { width: n, height: n },
                  children: B6("div", {
                    style: { width: m, height: m, transform: `scale(${c})` },
                    className: D6("N7J3UA", p),
                    onMouseDown: e,
                    onTouchStart: f,
                    ref: l?.qm,
                    children: B6(__c.lU, {
                      className: D6("m8CFdg", p, {
                        G6wL4w: h,
                        W_E0wA: b,
                        _52RFdg: k === "move",
                      }),
                      ariaLabel: K("ruWN9A"),
                      children: B6(CBc, { size: "tiny" }),
                    }),
                  }),
                }),
            });
          },
          FBc = function ({ zb: a }) {
            const b = new EBc(),
              c = new __c.PT(),
              d = F6((g) => {
                const {
                    scale: h = 1,
                    yZa: k,
                    size: l = "small",
                    Qfb: m = !0,
                  } = g,
                  n = G6((p) => b.Pq({ scale: p, size: l, VDa: k }), [l, k]);
                return B6(DBc, {
                  ...g,
                  scale: k ? Math.max(h, k) : h,
                  Qd: g.sheet.direction === "rtl",
                  FZa: g.selection != null && b.xyb(g.sheet, a, g.selection),
                  Pq: n,
                  Qfb: m,
                  hUa: g.hUa,
                  onMouseDown: g.onMouseDown,
                  onTouchStart: g.onTouchStart,
                });
              }),
              e = F6((g) => {
                const {
                    scale: h = 1,
                    yZa: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    AIb: p,
                  } = g,
                  q = G6((z) => b.Pq({ scale: z, size: l, VDa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = G6((z) => n != null && b.kIa(n).has(z), [n]),
                  v = G6((z) => n != null && b.Vvb(m, a, n).has(z), [m, n]),
                  w = G6(
                    (z) => {
                      var A = a.layout.CZ.Rk(m);
                      A = p != null && A.Ne(z, p.fc) >= 0 && A.Ne(z, p.$c) <= 0;
                      return t(z)
                        ? A
                          ? "secondary-active"
                          : "primary-active"
                        : v(z)
                        ? A
                          ? "secondary-low"
                          : "primary-low"
                        : A
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return B6(H6, {
                  ...g,
                  fe: h,
                  Ge: r,
                  Pq: q,
                  GH: w,
                  vI: c,
                  zb: a,
                });
              }),
              f = F6((g) => {
                const {
                    scale: h = 1,
                    yZa: k,
                    size: l = "small",
                    sheet: m,
                    selection: n,
                    AIb: p,
                  } = g,
                  q = G6((z) => b.Pq({ scale: z, size: l, VDa: k }), [l, k]),
                  r = k ? Math.max(h, k) : h,
                  t = G6((z) => n != null && b.mIa(n).has(z), [n]),
                  v = G6((z) => n != null && b.Wvb(m, a, n).has(z), [m, n]),
                  w = G6(
                    (z) => {
                      var A = a.layout.CZ.om(m);
                      A = p != null && A.Ne(z, p.mc) >= 0 && A.Ne(z, p.wd) <= 0;
                      return t(z)
                        ? A
                          ? "secondary-active"
                          : "primary-active"
                        : v(z)
                        ? A
                          ? "secondary-low"
                          : "primary-low"
                        : A
                        ? "secondary-default"
                        : "primary-default";
                    },
                    [m, p, v, t]
                  );
                return B6(I6, {
                  ...g,
                  fe: r,
                  Ge: h,
                  Pq: q,
                  GH: w,
                  vI: c,
                  zb: a,
                });
              });
            return { ugb: d, tgb: e, vgb: f };
          },
          HBc = function (a) {
            const b = a.Mr,
              c = () => null;
            return __c.iv((d) => B6(GBc, { ...d, Mr: b, Ei: c }));
          },
          IBc = function ({ sheet: a, zb: b, ba: c, range: d, Ad: e }) {
            J6(
              () =>
                K6(() => {
                  if (e.current != null) {
                    var f = c?.get() ?? 1,
                      g = a.direction === "rtl",
                      h = b.layout.Wg.om(a),
                      k = b.layout.Wg.Rk(a);
                    h = d && h.has(d.mc);
                    g =
                      d && k.has(d.fc)
                        ? b.Oa.pa(a, d.fc) * f * (g ? 1 : -1)
                        : 0;
                    k = h ? -b.Oa.qa(a, d.mc) * f : 0;
                    e.current.style.transform = `translate(${g}px, ${k}px)`;
                    e.current.style.width = `${a.width * f}px`;
                    e.current.style.height = `${a.height * f}px`;
                  }
                }),
              [a, b.layout.Wg, b.Oa, d, e, c]
            );
          },
          LBc = function ({ onScroll: a }) {
            const b = new JBc(a);
            return {
              pF: b,
              hsa: F6((c) =>
                B6(KBc, { sheet: c.sheet, pF: b, children: c.children })
              ),
            };
          },
          OBc = function (a) {
            const b = a.Mr,
              c = a.Xe,
              d = a.Fab,
              e = a.zb,
              f = ({ children: l }) => l,
              { pF: g, hsa: h } = LBc({ onScroll: a.onScroll });
            class k extends MBc {
              get nP() {
                const l = this.props.ia.kA;
                switch (l) {
                  case "screen":
                    return h;
                  case "print":
                    return f;
                  default:
                    throw new E(l);
                }
              }
              componentDidMount() {
                d.oab(this.props.item, {
                  bc: this.props.bc,
                  ia: this.props.ia,
                });
              }
              componentWillUnmount() {
                d.umb(this.props.item, {
                  bc: this.props.bc,
                  ia: this.props.ia,
                });
              }
              render() {
                d.oab(this.props.item, {
                  bc: this.props.bc,
                  ia: this.props.ia,
                });
                return B6(NBc, {
                  ...this.props,
                  ba: this.ba,
                  Mr: b,
                  nP: this.nP,
                  Ei: this.Ei,
                  Fab: d,
                  zb: e,
                  pF: g,
                });
              }
              constructor(...l) {
                super(...l);
                this.ba = L6(() => {
                  const m = this.props.item;
                  var n = this.props.ia,
                    p = n.kA;
                  n = n.zoom;
                  switch (p) {
                    case "screen":
                      return n;
                    case "print":
                      p = d.Pub(m);
                      if (!p) return 1;
                      ({ width: p } = new __c.Aq(m, p.bc, { zoom: n }));
                      return p / m.config.width;
                    default:
                      throw new E(p);
                  }
                });
                this.Ei = F6((m) =>
                  B6("div", {
                    className: "wKvivQ",
                    children: B6(__c.lQa, { ...this.props, ...m, Xe: c }),
                  })
                );
              }
            }
            return { Aib: k, pF: g };
          },
          PBc = function (a, b, c) {
            if (
              c != null &&
              c.fc != null &&
              c.mc != null &&
              c.$c != null &&
              c.wd != null
            ) {
              var d = b.Oa.pa(a, c.fc),
                e = b.Oa.qa(a, c.mc),
                f = b.Oa.pa(a, c.$c) + c.$c.width - d;
              a = b.Oa.qa(a, c.wd) + c.wd.height - e;
              return Di({ top: e, left: d, width: f, height: a });
            }
          },
          RBc = function (a) {
            const b = a.Mr,
              c = a.zb,
              d = () => null;
            return (e) => B6(QBc, { ...e, Mr: b, Ei: d, zb: c });
          },
          VBc = function (a) {
            const b = { transform: "translate(-1000px, -1000px) scale(0)" },
              c = { dSa: b, Fx: b, Qa: {}, XC: {} },
              d = M6(
                () => a.YB.style || c,
                (h) => {
                  Object.assign(a.Dea.style, h.dSa);
                  Object.assign(a.bQ.style, h.Fx);
                  Object.assign(a.IG.style, h.Qa);
                  Object.assign(a.PG.style, h.XC);
                  h = h?.Qa?.textDecoration;
                  a.IG.classList.toggle("OQx3PQ", h === "underline");
                  a.IG.classList.toggle("_99ezUA", h === "line-through");
                  a.IG.classList.toggle(
                    "kppAqQ",
                    h === "underline line-through"
                  );
                },
                { fireImmediately: !0, equals: SBc }
              ),
              e = M6(
                () => a.yCa,
                (h) => {
                  a.IG.classList.toggle("_84KvRA", !h);
                  a.Dea.classList.toggle("_84KvRA", !h);
                  a.bQ.classList.toggle("TL_RLA", !h);
                },
                { fireImmediately: !0 }
              ),
              f = M6(
                () => a.renderer,
                (h) => {
                  a.rfa && h?.type !== "react"
                    ? ((a.rfa = void 0), a.m$.remove())
                    : (a.PG.innerHTML = "");
                  switch (h?.type) {
                    case "react":
                      a.rfa = TBc(h.node, a.m$);
                      a.PG.appendChild(a.m$);
                      break;
                    case "dom":
                      h.render(a.PG);
                      break;
                    case void 0:
                      break;
                    default:
                      throw new E(h);
                  }
                  a.OEa();
                },
                { fireImmediately: !0 }
              ),
              g = UBc
                ? M6(
                    () => a.WAa,
                    (h) => {
                      a.IG.classList.toggle("qxD1GA", h);
                    },
                    { fireImmediately: !0 }
                  )
                : void 0;
            return () => {
              d();
              e();
              f();
              g?.();
            };
          },
          SBc = function (a, b) {
            return JSON.stringify(a) === JSON.stringify(b);
          },
          XBc = function (a) {
            const b = a.RB,
              c = a.zb,
              d = a.rl,
              e = a.VF,
              f = a.efb,
              g = a.yA,
              h = new WBc(d, c),
              k = (l, m) => (g ? oBc(g, l, m) : !1);
            return (l) =>
              B6(N6, {
                ...l,
                pS: k,
                VF: e,
                zb: c,
                rl: d,
                RB: b,
                TBa: h,
                efb: f?.get(),
              });
          },
          A6 = (a, b) =>
            `${a.column.id}-${a.boundary}:${b.ta.id}-${b.boundary}`,
          wBc =
            ({ Vf: a, zV: b }) =>
            (c) =>
              (0, __c.I)(__c.vOb, { ...c, Vf: a, zV: b }),
          YBc = __webpack_require__(405148),
          ZBc = YBc.Fragment,
          B6 = YBc.jsx,
          C6 = YBc.jsxs;
        var $Bc = __webpack_require__,
          aCc = $Bc(208463),
          D6 = $Bc.n_x(aCc)();
        var F6 = __webpack_require__(371201).PA;
        var O6 = __webpack_require__(227200),
          P6 = O6.Component,
          MBc = O6.PureComponent,
          G6 = O6.useCallback,
          J6 = O6.useEffect,
          bCc = O6.useLayoutEffect,
          E6 = O6.useMemo,
          Q6 = O6.useRef;
        var R6 = __webpack_require__(186901),
          L6 = R6.EW,
          K6 = R6.fm,
          cCc = R6.m3,
          M6 = R6.mJ,
          dCc = R6.MN,
          eCc = R6.O8,
          S6 = R6.sH,
          T6 = R6.XI;
        var fCc = __webpack_require__(536618),
          gCc = fCc.Aj,
          U6 = fCc.iB,
          hCc = fCc.uP;
        var V6 = __webpack_require__(277049)._;
        var W6 = __webpack_require__(269018)._;
        var iCc = __webpack_require__(13851).A;
        var TBc = __webpack_require__(662534).createPortal;
        var jCc = class {
            static D(a) {
              M(a, { viewBox: S6.ref });
            }
            constructor() {
              this.viewBox =
                (jCc.D(this), Di({ top: 0, left: 0, height: 0, width: 0 }));
              this.FJb = (a) => {
                this.viewBox.equals(a) || (this.viewBox = a);
              };
            }
          },
          kCc = F6((a) => {
            var b = a.sheet.direction === "rtl";
            b = { H2wykw: !b, UweldA: b };
            const c = Q6(new jCc()),
              d = T6(() => {
                if (a.$qa) {
                  var f = a.$qa.current;
                  f &&
                    c.current.FJb(
                      Di({
                        top: f.scrollTop,
                        left: f.scrollLeft,
                        height: f.clientHeight,
                        width: f.clientWidth,
                      })
                    );
                }
              });
            J6(() => {
              d();
              a.$qa.current?.addEventListener("scroll", d);
              window?.addEventListener("resize", d);
              return () => {
                a.$qa.current?.removeEventListener("scroll", d);
                window?.removeEventListener("resize", d);
              };
            }, [a.$qa, d]);
            const e = E6(() => ({ get: () => c.current.viewBox }), []);
            return C6("div", {
              className: D6("nMvVqA", b),
              children: [
                C6("div", {
                  ref: a.Ad,
                  className: "_0YOFPg",
                  children: [
                    B6(a.Mr, { ...a, viewport: e }),
                    B6("div", {
                      className: D6("Gdl7fQ", b),
                      children: a.xOa?.get()?.map((f, g) => B6(f, {}, g)),
                    }),
                  ],
                }),
                a.e0b === "visible" &&
                  C6(ZBc, {
                    children: [
                      B6("div", {
                        className: D6("_32sKQw", b),
                        children: B6(a.xib, { ...a }),
                      }),
                      B6("div", {
                        className: D6("xdIsTQ", b),
                        children: B6(a.Bib, { ...a }),
                      }),
                      B6("div", {
                        className: D6("rsTRSA", b),
                        children: B6(a.zib, { ...a }),
                      }),
                    ],
                  }),
              ],
            });
          }),
          lCc = F6((a) => {
            a = a.content;
            __c.u(a.type === "text2" || a.type === "text3");
            switch (a.type) {
              case "text2":
                return a.value.W;
              case "text3":
                return __c.Qx.snapshot(a.value).cells.W();
              default:
                throw new E(a);
            }
          });
        var mCc = 1 / 13.334,
          vBc = tBc(
            F6((a) => {
              var b = a.context;
              const c = a.value,
                d = a.onChange,
                e = b.attrs;
              b = b.container.column;
              __c.x(a.valueType === 3);
              const f = G6(
                  (l) => {
                    d?.(c, l.target.checked);
                  },
                  [d, c]
                ),
                g = e.fontSize ?? Qf.Sb.fontSize,
                h = b.width;
              a = E6(() => {
                const l = 18 * g * mCc;
                return `${Math.round(l * Math.min(1, (h - __c.tU * 2) / l))}px`;
              }, [g, h]);
              b = E6(() => {
                var l = e.color ?? Qf.Sb.color,
                  m = e.WC ?? Qf.Sb.WC;
                const { h: n, s: p, na: q } = __c.Yl(l),
                  r = __c.Wl(new __c.Ql(n, p * 0.59, q * 0.69)).Qo(),
                  t = __c.Wl(new __c.Ql(n, p * 0.68, q * 0.84)).Qo(),
                  v = __c.cm(__c.bm(__c.Wl(l), 0.5));
                return {
                  tSa: l,
                  kmb: r,
                  uSa: t,
                  lmb: m !== "transparent" ? m : "#ffffff",
                  mmb: v,
                };
              }, [e]);
              const k = __c.Mv();
              return B6("label", {
                className: D6("s5Xvtg", { _0YWo_Q: k, agLBbw: d == null }),
                children: C6("div", {
                  className: "nOL94A",
                  style: {
                    "--V8rdkw": a,
                    "--6kHV0A": b.tSa,
                    "--dhlyXQ": b.kmb,
                    "--pMrTCg": b.uSa,
                    "--EyYwbg": b.tSa,
                    "--3ZWdlg": b.uSa,
                    "--81jhOQ": b.lmb,
                    "--Cs3XTw": b.mmb,
                  },
                  children: [
                    B6("input", {
                      type: "checkbox",
                      checked: c,
                      onChange: T6((l) => f(l)),
                      className: "p8DDOg",
                    }),
                    B6("span", {
                      "aria-hidden": !0,
                      className: D6("l_S_Ng", { iGjddQ: c }),
                      children: B6(nCc, {}),
                    }),
                  ],
                }),
              });
            })
          ),
          nCc = () =>
            B6("svg", {
              className: "_8CNofA",
              viewBox: "0 0 10 8",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: B6("path", {
                d: "M0.750977 4.5L3.25098 7L9.25098 1",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
            });
        var xBc = (a, b) =>
            __c.PPa((c, d) => {
              const e = c.content;
              c = c.context;
              if (e.value.isEmpty) for (; d.lastChild; ) d.lastChild.remove();
              else
                ({ bh: c } = __c.qf(Qf, c.attrs)),
                  c === "wrap" &&
                    ((d = d.appendChild(document.createElement("div"))),
                    (d.className = "dt4Dlg")),
                  a.render({
                    container: d,
                    text: e.value,
                    oa: void 0,
                    writingMode: 1,
                    fd: "start",
                    jf: oCc(e, c),
                    bb: b,
                  });
            }),
          oCc = U6(
            (a, b) => {
              if (b === "wrap") return [];
              a = a.value.W.split("\n").map((c) => c.length + 1);
              a.pop();
              return a;
            },
            { equals: cCc.structural }
          );
        var pCc, qCc, rCc, yBc;
        new ((pCc = class extends V6 {
          constructor() {
            super(yBc);
            qCc();
          }
        }),
        (() => {
          class a extends (rCc = P6) {
            static D(b) {
              M(b, { bh: L6 });
            }
            get bh() {
              return __c.qf(Qf, this.props.context.attrs).bh;
            }
            render() {
              var b = this.props.content;
              const c = this.props.context;
              if (b.value.isEmpty) return null;
              b = B6(this.props.Ei, {
                content: b,
                ta: c.container.ta,
                col: c.container.column,
                bh: this.bh,
              });
              return this.bh === "wrap"
                ? B6("div", { className: "dt4Dlg", children: b })
                : b;
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [yBc, qCc],
          } = W6(a, [], [nc], rCc));
        })(),
        pCc)();
        var EBc = class {
          Pq({ size: a, scale: b, VDa: c }) {
            b = c ? Math.max(c, b) : b;
            return a === "large" ? __c.NX * b : __c.d5b * b;
          }
          constructor() {
            this.xyb = U6((a, b, c) => {
              c = c.get();
              const d = b.layout.CZ.om(a);
              a = b.layout.CZ.Rk(a);
              return (
                c != null &&
                d.count() === (c.rows?.size || 0) &&
                a.count() === (c.columns?.size || 0)
              );
            });
            this.kIa = gCc((a) => new Set(a.get()?.columns || []), {
              equals: __c.Si,
            });
            this.mIa = gCc((a) => new Set(a.get()?.rows || []), {
              equals: __c.Si,
            });
            this.Vvb = U6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.mIa(c);
                b = b.layout.CZ.Rk(a);
                if (e.size > 0) return new Set(b);
                c = this.kIa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.ta, f.column);
                  for (const g of rBc(
                    d ? d.span.fc : f.column,
                    d ? d.span.$c : f.column,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.Si }
            );
            this.Wvb = U6(
              (a, b, c) => {
                var { cells: d } = c.get() || {};
                if (!d) return new Set();
                var e = this.kIa(c);
                b = b.layout.CZ.om(a);
                if (e.size > 0) return new Set(b);
                c = this.mIa(c);
                e = new Set();
                for (const f of d) {
                  d = a.layout.cells.get(f.ta, f.column);
                  for (const g of rBc(
                    d ? d.span.mc : f.ta,
                    d ? d.span.wd : f.ta,
                    b
                  ))
                    (c.size === 0 || c.has(g)) && e.add(g);
                }
                return e;
              },
              { equals: __c.Si }
            );
          }
        };
        var sCc,
          tCc,
          uCc,
          vCc,
          wCc,
          xCc,
          yCc = parseInt("4px", 10) || 4,
          zCc = parseInt("0.5px", 10) || 0.5,
          ACc = parseInt("1px", 10) || 1,
          BCc = parseInt("0.5px", 10) || 0.5,
          CCc = parseInt("0.5px", 10) || 0.5,
          DCc = parseInt("1px", 10) || 1,
          ECc = parseInt("0.5px", 10) || 0.5,
          H6;
        new ((sCc = class extends V6 {
          constructor() {
            super(H6);
            uCc();
          }
        }),
        (() => {
          class a extends (vCc = P6) {
            static D(b) {
              M(b, { Qd: L6, xs: L6, Taa: L6 });
            }
            get Qd() {
              return this.props.sheet.direction === "rtl";
            }
            get xs() {
              const b = this.props.Oq?.get();
              if (b != null && b.length !== 0) return new __c.bx(b);
            }
            get Taa() {
              return this.props.hAa?.()?.get();
            }
            render() {
              return B6(__c.cw, {
                lp: "light",
                light: "light",
                cs: "light",
                dark: "light",
                children: this.Pmb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (H6.D(this),
                T6((c) => {
                  const { onMouseMove: d, sheet: e, fe: f = 1 } = this.props;
                  d?.(c, e, "column", f);
                }));
              this.onMouseLeave = T6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = T6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = T6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.n8a = (c, d, e) => {
                const {
                    sheet: f,
                    zb: g,
                    Pq: h,
                    GH: k,
                    o0b: l,
                    fe: m = 1,
                    Ge: n = 1,
                  } = this.props,
                  p = { jNbTIg: !this.Qd, gtA7Dw: this.Qd };
                var q = e?.sticky
                  ? this.Qd
                    ? { right: 0 }
                    : { left: 0 }
                  : void 0;
                q = e?.sticky ? this.Taa ?? q : void 0;
                let r = 0;
                const t = g.layout.Wg.Rk(f),
                  v = t.map((z) => {
                    if (!((c && t.Ne(z, c) < 0) || (d && t.Ne(z, d) > 0)))
                      return (
                        (r += z.width),
                        B6(
                          FCc,
                          {
                            col: z,
                            label: __c.Ku(f.Jt(z)),
                            Ya: l?.get()?.get(z),
                            Pq: h,
                            GH: k,
                            fe: m,
                            Ge: n,
                            start: g.Oa.pa(f, z),
                          },
                          z.id
                        )
                      );
                  }),
                  w = this.Qd ? { right: r * m } : { left: r * m };
                return C6("div", {
                  style: { height: h(n), width: r * m, ...q },
                  className: D6("Vt2_4w", p, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    v,
                    e?.sticky &&
                      B6("div", {
                        style: { width: yCc * m, ...w },
                        className: D6("HBvlug", "ru3tFQ", p),
                      }),
                  ],
                });
              };
              this.Pmb = (c) => {
                var d = this.props.sheet;
                const e = this.props.zb,
                  f = d.view.freeze.NG
                    ? d.layout.Vd.get(d.view.freeze.NG)
                    : void 0,
                  g = { jNbTIg: !this.Qd, gtA7Dw: this.Qd };
                d = e.layout.Wg.Rk(d);
                return C6("div", {
                  ref: this.xs?.qm,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: D6("xhBZaw", g, c.className),
                  children: [
                    f && this.n8a(void 0, f, { sticky: !0 }),
                    this.n8a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [H6, uCc],
          } = W6(a, [], [nc], vCc));
        })(),
        sCc)();
        var I6;
        new ((tCc = class extends V6 {
          constructor() {
            super(I6);
            wCc();
          }
        }),
        (() => {
          class a extends (xCc = P6) {
            static D(b) {
              M(b, { Qd: L6, xs: L6, Taa: L6 });
            }
            get Qd() {
              return this.props.sheet.direction === "rtl";
            }
            get xs() {
              const b = this.props.Oq?.get();
              if (b != null && b.length !== 0) return new __c.bx(b);
            }
            get Taa() {
              return this.props.hAa?.()?.get();
            }
            render() {
              return B6(__c.cw, {
                lp: "light",
                light: "light",
                cs: "light",
                dark: "light",
                children: this.gIb,
              });
            }
            constructor(...b) {
              super(...b);
              this.onMouseMove =
                (I6.D(this),
                T6((c) => {
                  const { onMouseMove: d, sheet: e, Ge: f = 1 } = this.props;
                  d?.(c, e, "row", f);
                }));
              this.onMouseLeave = T6((c) => {
                this.props.onMouseLeave?.(c);
              });
              this.onMouseDown = T6((c) => {
                this.props.onMouseDown?.(c);
              });
              this.onTouchStart = T6((c) => {
                this.props.onTouchStart?.(c);
              });
              this.t8a = (c, d, e) => {
                const {
                    sheet: f,
                    zb: g,
                    Pq: h,
                    GH: k,
                    fe: l = 1,
                    Ge: m = 1,
                  } = this.props,
                  n = { jNbTIg: !this.Qd, gtA7Dw: this.Qd };
                var p = e?.sticky ? { top: 0 } : void 0;
                p = e?.sticky ? this.Taa ?? p : void 0;
                let q = 0;
                const r = g.layout.Wg.om(f),
                  t = r.map((v) => {
                    if (!((c && r.Ne(v, c) < 0) || (d && r.Ne(v, d) > 0))) {
                      q += v.height;
                      var w = `${f.Lu(v) + 1}`;
                      return B6(
                        GCc,
                        {
                          ta: v,
                          label: w,
                          GH: k,
                          Pq: h,
                          fe: l,
                          Ge: m,
                          start: g.Oa.qa(f, v),
                        },
                        v.id
                      );
                    }
                  });
                return C6("div", {
                  style: { height: q * m, width: h(l), ...p },
                  className: D6("_93roJg", n, { Tn3nUw: e?.sticky }),
                  onMouseMove: this.onMouseMove,
                  onMouseLeave: this.onMouseLeave,
                  children: [
                    t,
                    e?.sticky &&
                      B6("div", {
                        style: { height: yCc * m },
                        className: D6("HBvlug", "koz2Hg"),
                      }),
                  ],
                });
              };
              this.gIb = (c) => {
                var d = this.props.sheet;
                const e = this.props.zb,
                  f = d.view.freeze.UT
                    ? d.layout.de.get(d.view.freeze.UT)
                    : void 0,
                  g = { jNbTIg: !this.Qd, gtA7Dw: this.Qd };
                d = e.layout.Wg.om(d);
                return C6("div", {
                  ref: this.xs?.qm,
                  onMouseDown: this.onMouseDown,
                  onTouchStart: this.onTouchStart,
                  className: D6("An9VeA", g, c.className),
                  children: [
                    f && this.t8a(void 0, f, { sticky: !0 }),
                    this.t8a(f ? d.next(f) : void 0),
                  ],
                });
              };
            }
          }
          ({
            c: [I6, wCc],
          } = W6(a, [], [nc], xCc));
        })(),
        tCc)();
        var FCc = F6((a) => {
            const b = a.label,
              c = a.Ya,
              d = a.col,
              e = a.GH,
              f = a.Pq,
              g = a.fe,
              h = a.Ge,
              k = f(h),
              l = hCc(() => e(d));
            return B6("div", {
              className: D6("_83Rssw", "d2uLIA", ABc(l)),
              style: {
                width: d.width * g,
                height: k,
                borderInlineWidth: `${zCc * g}px`,
                borderBlockStartWidth: `${ACc * g}px`,
                borderBlockEndWidth: `${BCc * g}px`,
                transform: `translateX(${a.start * g}px)`,
              },
              children: B6(BBc, {
                label: b,
                Ya: c,
                width: d.width,
                height: f(1),
                scale: h,
                TSa: l,
              }),
            });
          }),
          GCc = F6((a) => {
            const b = a.label,
              c = a.ta,
              d = a.Pq,
              e = a.GH,
              f = a.fe,
              g = a.Ge,
              h = d(f),
              k = hCc(() => e(c));
            return B6("div", {
              className: D6("_83Rssw", "JhBzyw", ABc(k)),
              style: {
                width: h,
                height: c.height * g,
                borderBlockWidth: `${CCc * g}px`,
                borderInlineStartWidth: `${DCc * g}px`,
                borderInlineEndWidth: `${ECc * g}px`,
                transform: `translateY(${a.start * g}px)`,
              },
              children: B6(BBc, {
                label: b,
                width: d(1),
                height: c.height,
                scale: f,
                TSa: k,
              }),
            });
          });
        var HCc =
          '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
        var ICc =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
        var CBc = __c.bU({ gq: HCc, medium: ICc });
        var JCc, KCc, LCc, GBc;
        new ((JCc = class extends V6 {
          constructor() {
            super(GBc);
            KCc();
          }
        }),
        (() => {
          class a extends (LCc = P6) {
            static D(b) {
              M(b, { Ke: L6.struct });
            }
            render() {
              const b = this.props.element;
              return B6(this.props.Mr, {
                sheet: b.G.config,
                container: b,
                iea: "visible",
                Oq: this.props.Oq,
                Ou: this.props.Ou,
                Uv: this.props.Uv,
                Wv: this.props.Wv,
                ba: this.props.ba,
                Ke: this.Ke,
                Ei: this.props.Ei,
                pK: void 0,
              });
            }
            get Ke() {
              return __c.Fl(this.props.element.G.Sa, this.props.yf);
            }
            constructor(...b) {
              super(...b);
              a.D(this);
            }
          }
          ({
            c: [GBc, KCc],
          } = W6(a, [], [nc], LCc));
        })(),
        JCc)();
        var MCc = class {
          constructor() {
            this.Ioa = new WeakMap();
            this.Pub = (a) => this.Ioa.get(a);
            this.oab = (a, b) => {
              this.Ioa.set(a, b);
            };
            this.umb = (a, b) => {
              const c = this.Ioa.get(a);
              c && c.ia === b.ia && c.bc === b.bc && this.Ioa.delete(a);
            };
          }
        };
        var NCc = parseInt("4px", 10) || 4,
          OCc = F6(({ sheet: a, zb: b, ba: c, range: d, Xx: e, Yx: f }) => {
            if (d != null && (e || f)) {
              c = c?.get() ?? 1;
              var g = a.direction === "rtl",
                h = { ZJ0G6w: !g, dOI_jA: g };
              if (e && f)
                return (
                  (e = b.Oa.qa(a, d.wd) + d.wd.height),
                  (a = b.Oa.pa(a, d.$c) + d.$c.width),
                  B6("div", {
                    style: { top: e * c, width: a * c, height: NCc * c },
                    className: D6("aX8dhQ", "VGcLng"),
                  })
                );
              if (e)
                return (
                  (b = b.Oa.pa(a, d.$c) + d.$c.width),
                  B6("div", {
                    style: {
                      width: NCc * c,
                      height: a.height * c,
                      ...(g ? { right: b * c } : { left: b * c }),
                    },
                    className: D6("aX8dhQ", "gl1RPg", h),
                  })
                );
              if (f)
                return (
                  (b = b.Oa.qa(a, d.wd) + d.wd.height),
                  B6("div", {
                    style: { top: b * c, width: a.width * c, height: NCc * c },
                    className: D6("aX8dhQ", "VGcLng"),
                  })
                );
            }
          });
        var X6 = ({ sheet: a, zb: b, range: c, ba: d, children: e }) => {
            const f = qBc();
            IBc({ sheet: a, zb: b, ba: d, range: c, Ad: f });
            return B6("div", {
              ref: f,
              className: D6(
                "nstn2A",
                a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"
              ),
              children: e,
            });
          },
          PCc = ({ sheet: a, zb: b, range: c, ba: d, children: e }) => {
            const f = qBc();
            IBc({ sheet: a, zb: b, ba: d, range: c, Ad: f });
            a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
            return B6("div", {
              className: D6("nstn2A", a, "_9sodyg"),
              children: B6("div", {
                ref: f,
                className: D6("nstn2A", a),
                children: e,
              }),
            });
          };
        var KBc = F6(({ sheet: a, children: b, pF: c }) => {
            const d = G6(
                (f) => {
                  c.mJa(a, f);
                },
                [c, a]
              ),
              e = G6(
                (f) => {
                  f != null ? c.qF.set(a, f) : c.qF.delete(a);
                },
                [c, a]
              );
            return B6(__c.p2b, {
              direction: a.config.direction === "rtl" ? "rtl" : "ltr",
              onScroll: d,
              Ew: e,
              children: b,
            });
          }),
          JBc = class {
            mJa(a, b) {
              this.onScroll && this.onScroll(a);
              this.aaa.set(a, b);
            }
            constructor(a) {
              this.onScroll = a;
              this.qF = new WeakMap();
              this.aaa = S6.map(new Map(), { deep: !1 });
              this.scrollTo = T6((b, c) => {
                this.qF.get(b)?.scrollTo({ left: Math.floor(c) });
              });
            }
          };
        var NBc = F6((a) => {
          const b = a.item,
            c = a.Oq,
            d = a.Ou,
            e = a.wg,
            f = a.measureRef,
            g = a.ba,
            h = a.K_a,
            k = a.bc,
            l = a.Uv,
            m = a.Wv,
            n = a.Mr,
            p = a.nP,
            q = a.Ei,
            r = a.yf,
            t = a.zb,
            v = a.pF;
          a = E6(() => __c.Fl(b.Sa, r), [b, r]);
          const w = E6(
              () =>
                F6(({ sheet: B, range: D, Xx: J, Yx: L }) =>
                  B6(X6, {
                    sheet: B,
                    zb: t,
                    range: D,
                    ba: g,
                    children: B6(OCc, {
                      sheet: B,
                      zb: t,
                      ba: g,
                      range: D,
                      Xx: J,
                      Yx: L,
                    }),
                  })
                ),
              [g, t]
            ),
            z = sBc(b.config),
            A = g.get(),
            C = Math.min(z.width * A, k.width);
          J6(
            () =>
              K6(() => {
                var B = b.config.view.freeze.NG
                  ? b.config.layout.Vd.get(b.config.view.freeze.NG)
                  : void 0;
                if (B != null)
                  if (b.config.pa(B) + B.width > C) {
                    if ((B = v.qF.get(b))) B.style.overflowX = "hidden";
                  } else if ((B = v.qF.get(b))) B.style.overflowX = "scroll";
              }),
            [b, k.width, v, A, C]
          );
          return B6("div", {
            ref: f,
            className: "E8r86A",
            style: { width: C },
            children: B6(p, {
              sheet: b,
              children: B6("div", {
                ref: h,
                className: "cXTiJA",
                style: { width: z.width * A, height: z.height * A },
                children: B6("div", {
                  className: "W1ir5A",
                  children: B6(n, {
                    container: e.pk(b),
                    sheet: b.config,
                    iea: "visible",
                    Oq: c,
                    Ou: d,
                    ba: g,
                    Uv: l,
                    Wv: m,
                    Ke: a,
                    Ei: q,
                    pK: w,
                  }),
                }),
              }),
            }),
          });
        });
        var QCc = F6(({ page: a, zb: b, range: c, gF: d }) => {
          const e = PBc(a.sheet, b, c);
          return B6("div", {
            className: "Gi9pfA",
            children: a.elements.map((f, g) =>
              e == null ? d(f, g) : __c.Bi(Di(f)).Tq(e) && d(f, g)
            ),
          });
        });
        var RCc = new __c.PT(),
          SCc = (a) => __c.NX * a,
          TCc = () => "primary-default",
          QBc = F6(
            ({
              container: a,
              Oq: b,
              Ou: c,
              Uv: d,
              Wv: e,
              I6: f,
              ba: g,
              viewport: h,
              zb: k,
              hKb: l,
              Mr: m,
              Ei: n,
              gF: p,
              Kna: q,
              FSb: r,
              lRb: t,
              kRb: v,
            }) => {
              const w = a.page,
                z = E6(
                  () =>
                    F6(({ sheet: A, range: C, Xx: B, Yx: D }) =>
                      C6(ZBc, {
                        children: [
                          B6(X6, {
                            sheet: w.sheet,
                            zb: k,
                            range: C,
                            ba: g,
                            children: B6(OCc, {
                              sheet: A,
                              zb: k,
                              ba: g,
                              range: C,
                              Xx: B,
                              Yx: D,
                            }),
                          }),
                          C6(PCc, {
                            sheet: w.sheet,
                            zb: k,
                            range: C,
                            ba: g,
                            children: [
                              r && B6(r, {}),
                              p && B6(QCc, { page: w, zb: k, gF: p, range: C }),
                              v && B6(v, {}),
                              q && q(),
                            ],
                          }),
                          t &&
                            C &&
                            B6(X6, {
                              sheet: w.sheet,
                              zb: k,
                              range: C,
                              ba: g,
                              children: B6(t, { range: C }),
                            }),
                        ],
                      })
                    ),
                  [w, k, g, r, p, v, q, t]
                );
              return l
                ? B6(UCc, {
                    container: a,
                    viewport: h,
                    ba: g,
                    Oq: b,
                    Ou: c,
                    Uv: d,
                    Wv: e,
                    Mr: m,
                    Ei: n,
                    pK: z,
                    zb: k,
                  })
                : B6(m, {
                    sheet: w.sheet,
                    container: a,
                    iea: "hidden",
                    Oq: b,
                    Ou: c,
                    Uv: d,
                    Wv: e,
                    I6: f,
                    ba: g,
                    viewport: h,
                    Ei: n,
                    pK: z,
                  });
            }
          ),
          UCc = F6((a) => {
            const b = a.container,
              c = a.ba,
              d = a.viewport,
              e = a.Oq,
              f = a.Ou,
              g = a.Uv,
              h = a.Wv,
              k = a.Mr,
              l = a.Ei,
              m = a.pK;
            a = a.zb;
            const n = b.page,
              p = n.sheet.direction === "rtl",
              q = Q6(null),
              r = Q6(null),
              t = Q6(null);
            J6(() => {
              const C = Y6({
                sheet: n.sheet,
                spa: !0,
                tpa: !0,
                ba: c,
                viewport: d,
              });
              return M6(
                () => C?.get(),
                (B) => {
                  const D = q.current;
                  if (B && D) {
                    var J = n.sheet.direction === "rtl";
                    D.style.position = B.position ?? "sticky";
                    D.style.top = B.top ?? "0px";
                    J
                      ? (D.style.right = B.right ?? "0px")
                      : (D.style.left = B.left ?? "0px");
                    D.style.transform = B.transform ?? "";
                  }
                }
              );
            }, [n.sheet, c, d]);
            J6(() => {
              const C = Y6({
                sheet: n.sheet,
                spa: !1,
                tpa: !0,
                ba: c,
                viewport: d,
              });
              return M6(
                () => C?.get(),
                (B) => {
                  const D = t.current;
                  B &&
                    D &&
                    ((D.style.position = B.position ?? "sticky"),
                    (D.style.top = B.top ?? "0px"),
                    (D.style.transform = B.transform ?? ""));
                }
              );
            }, [n.sheet, c, d]);
            J6(() => {
              const C = Y6({
                sheet: n.sheet,
                spa: !0,
                tpa: !1,
                ba: c,
                viewport: d,
              });
              return M6(
                () => C?.get(),
                (B) => {
                  const D = r.current;
                  if (B && D) {
                    var J = n.sheet.direction === "rtl";
                    D.style.position = B.position ?? "sticky";
                    J
                      ? (D.style.right = B.right ?? "0px")
                      : (D.style.left = B.left ?? "0px");
                    D.style.transform = B.transform ?? "";
                  }
                }
              );
            }, [n.sheet, c, d]);
            const v = G6(
                (C, B, D) =>
                  Y6({ sheet: C, spa: B, tpa: D, ba: c, viewport: d }),
                [c, d]
              ),
              w = E6(
                () => (v ? () => v(n.sheet, !0, !1) : void 0),
                [v, n.sheet]
              ),
              z = E6(
                () => (v ? () => v(n.sheet, !1, !0) : void 0),
                [v, n.sheet]
              ),
              A = c?.get() ?? 1;
            return C6("div", {
              className: D6("OsKKIQ", "cbOp6Q"),
              children: [
                B6("div", {
                  className: "VDFv_A",
                  children: B6(k, {
                    sheet: n.sheet,
                    container: b,
                    iea: "hidden",
                    Oq: e,
                    Ou: f,
                    Uv: g,
                    Wv: h,
                    I6: v,
                    ba: c,
                    viewport: d,
                    Ei: l,
                    pK: m,
                  }),
                }),
                B6("div", {
                  ref: q,
                  className: "_688KWg",
                  children: B6(DBc, { Qd: p, FZa: !1, Pq: SCc, scale: A }),
                }),
                B6("div", {
                  ref: t,
                  className: "m0cT1w",
                  children: B6(H6, {
                    sheet: n.sheet,
                    fe: A,
                    Ge: A,
                    Pq: SCc,
                    GH: TCc,
                    vI: RCc,
                    hAa: w,
                    zb: a,
                  }),
                }),
                B6("div", {
                  ref: r,
                  className: "zm537g",
                  children: B6(I6, {
                    sheet: n.sheet,
                    fe: A,
                    Ge: A,
                    Pq: SCc,
                    GH: TCc,
                    vI: RCc,
                    hAa: z,
                    zb: a,
                  }),
                }),
              ],
            });
          }),
          Y6 = ({ sheet: a, spa: b, tpa: c, ba: d, viewport: e }) =>
            L6(() => {
              var f = e?.get().rb();
              const g = d?.get() ?? 1;
              if (!f) return {};
              const h = {};
              f = new ei(f.left, f.top);
              const k = a.direction === "rtl";
              h.position = "relative";
              c && (h.top = "0px");
              b && (k ? (h.right = "0px") : (h.left = "0px"));
              h.transform = `translate(${b ? f.x * g : 0}px, ${
                c ? f.y * g : 0
              }px)`;
              return h;
            });
        var WBc = class {
          constructor(a, b) {
            this.rl = a;
            this.zb = b;
            this.$lb = __c.tU;
            this.mub = U6((c, d, e, f) => {
              e = e.get();
              const g = new WeakMap();
              for (let v = 0; v < e.length; v++) {
                var h = e[v],
                  k = this.bub(c, d, h);
                if (k) {
                  switch (k) {
                    case "start":
                    case "justify":
                      var l = e[v + 1];
                      if (l == null || !SB(c, this.zb, d, l)) continue;
                      break;
                    case "center":
                      l = e[v + 1];
                      if (l == null || !SB(c, this.zb, d, l)) continue;
                      l = e[v - 1];
                      if (l == null || !SB(c, this.zb, d, l)) continue;
                      break;
                    case "end":
                      l = e[v - 1];
                      if (l == null || !SB(c, this.zb, d, l)) continue;
                      break;
                    default:
                      throw new E(k);
                  }
                  if ((l = f(d, h))) {
                    var m = l.width + (k === "center" ? 0 : this.$lb);
                    if (!(h.width > m)) {
                      switch (k) {
                        case "start":
                        case "justify":
                          k = this.zb.Oa.pa(c, h);
                          l = k + m;
                          break;
                        case "center":
                          l = this.zb.Oa.pa(c, h) + h.width / 2;
                          k = l - m / 2;
                          l += m / 2;
                          break;
                        case "end":
                          l = this.zb.Oa.pa(c, h) + h.width;
                          k = l - m;
                          break;
                        default:
                          throw new E(k);
                      }
                      for (m = e.indexOf(h); m >= 0; m--) {
                        var n = e[m],
                          p = m - 1 < 0 || SB(c, this.zb, d, e[m - 1]),
                          q;
                        if ((q = n === h || SB(c, this.zb, d, n))) {
                          q = k;
                          var r = l,
                            t = this.zb.Oa.pa(c, n);
                          q = q < t && t < r;
                        }
                        if (q && p) g.set(n, 1);
                        else break;
                      }
                      for (h = e.indexOf(h) + 1; h < e.length; h++) {
                        m = e[h];
                        if ((n = SB(c, this.zb, d, m)))
                          (n = k),
                            (p = l),
                            (q = this.zb.Oa.pa(c, m)),
                            (n = n < q && q < p);
                        if (n) g.set(m, 1);
                        else break;
                      }
                    }
                  }
                }
              }
              return g;
            });
            this.bub = (c, d, e) => {
              const f = c.layout.cells.get(d, e);
              if (
                f &&
                (f.ref.content.ref || f.ref.Ca.ref) &&
                f.span.mc === f.span.wd &&
                f.span.fc === f.span.$c
              ) {
                var g = this.rl.zn(c, d, e);
                c = this.rl.aAa(
                  c,
                  d,
                  e,
                  __c.Rf({ bh: void 0, textAlign: void 0 })
                );
                var { bh: h, textAlign: k } = __c.qf(Qf, c);
                if (h === "overflow")
                  return __c.RPa(
                    k,
                    f.ref.content.ref?.type,
                    f.ref.Ca.ref?.type,
                    g ? () => g.Kj.type : void 0
                  );
              }
            };
          }
        };
        var VCc = F6(function (a) {
          const b = a.sheet;
          var c = a.zb,
            d = a.fi;
          const e = a.APb,
            f = a.ba,
            g = a.TBa,
            h = a.Ptb;
          a = a.overflow;
          const k = qBc();
          bCc(
            () =>
              K6(() => {
                const p = y(k.current),
                  q = f?.get() ?? 1,
                  r = b.height;
                p.style.width = `${b.width * q}px`;
                p.style.height = `${r * q}px`;
              }),
            [k, f, b]
          );
          const l = G6((p) => g.mub(b, p, e, h), [g, b, e, h]);
          var m = G6((p, q) => l(p)?.get(q) ?? 0, [l]);
          c = mBc(b, c.layout.Wg.om(b), c.layout.Wg.Rk(b), d, e, m);
          d = b.width;
          m = b.height;
          const n = b.direction === "rtl";
          return B6("svg", {
            ref: k,
            role: "presentation",
            className: D6("c6a1eQ", {
              H_CtIQ: !n,
              _8_56PQ: n,
              _3NnFzw: a === "visible",
              JMH1ng: a === "hidden",
            }),
            viewBox: `0 0 ${d} ${m}`,
            strokeLinecap: "butt",
            strokeLinejoin: "miter",
            children: c.map(({ lines: p, color: q, weight: r, Ll: t, Ml: v }) =>
              B6(
                "path",
                {
                  stroke: q,
                  strokeDasharray: t,
                  strokeDashoffset: v,
                  strokeWidth: r,
                  d: p
                    .map(
                      ({ p1: w, p2: z }) => `M ${w.x} ${w.y} L ${z.x} ${z.y}`
                    )
                    .join(" "),
                },
                `${q}-${r}-${t}-${v}`
              )
            ),
          });
        });
        var WCc;
        WCc = Symbol.iterator;
        var XCc = class {
          get size() {
            return this.bpa;
          }
          get([a, b]) {
            return (a = this.hI.get(a)) ? a.get(b) : void 0;
          }
          has([a, b]) {
            a = this.hI.get(a);
            return a == null ? !1 : a.has(b);
          }
          set([a, b], c) {
            let d = this.hI.get(a);
            d == null && ((d = new Map()), this.hI.set(a, d));
            d.set(b, c);
            this.bpa++;
            return this;
          }
          clear() {
            this.hI.clear();
            this.bpa = 0;
          }
          delete([a, b]) {
            const c = this.hI.get(a);
            if (c == null || !c.delete(b)) return !1;
            this.bpa--;
            c.size === 0 && this.hI.delete(a);
            return !0;
          }
          forEach(a) {
            for (const [b, c] of this.hI) for (const [d, e] of c) a([b, d], e);
          }
          *[WCc]() {
            for (const [a, b] of this.hI)
              for (const [c, d] of b) yield [[a, c], d];
          }
          constructor() {
            this.bpa = 0;
            this.hI = new Map();
          }
        };
        var YCc,
          ZCc,
          $Cc,
          aDc,
          bDc,
          cDc,
          dDc,
          UBc = __c.sc("285688d5", !1),
          eDc,
          fDc = class extends P6 {
            render() {
              const { lia: a, ...b } = this.props,
                c = this.props.sheet;
              return C6("div", {
                ref: this.Jab,
                className: D6(
                  "ZTz_iA",
                  c.direction === "ltr" ? "TA4X7w" : "WvuqMw"
                ),
                children: [
                  a?.lRa &&
                    B6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.lRa.range,
                      Xx: !0,
                      Yx: !0,
                      className: "_0C8M3w",
                    }),
                  a?.pfb &&
                    B6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.pfb.range,
                      Xx: !1,
                      Yx: !0,
                      className: "_7n44yg",
                    }),
                  a?.IZa &&
                    B6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.IZa.range,
                      Xx: !0,
                      Yx: !1,
                      className: "fF5r6w",
                    }),
                  a?.feb &&
                    B6(Z6, {
                      ...b,
                      sheet: c,
                      range: a.feb.range,
                      Xx: !1,
                      Yx: !1,
                      className: "llILYw",
                    }),
                ],
              });
            }
            componentDidMount() {
              const a = K6(() => {
                var b = this.props,
                  c = b.ba;
                b = b.sheet;
                const d = this.Jab.current;
                d &&
                  ((c = c ? c.get() : 1),
                  (d.style.width = `${b.width * c}px`),
                  (d.style.height = `${b.height * c}px`));
              });
              __c.fc(this, [a]);
            }
            constructor(...a) {
              super(...a);
              this.Jab = av();
            }
          };
        ({
          c: [eDc, $Cc],
        } = W6(fDc, [], [nc], P6));
        $Cc();
        var Z6;
        new ((YCc = class extends V6 {
          constructor() {
            super(Z6);
            aDc();
          }
        }),
        (() => {
          class a extends (bDc = P6) {
            static D(b) {
              M(b, { EJa: L6, bounds: L6 });
            }
            get EJa() {
              const b = this.props.viewport,
                c = this.props.Xx,
                d = this.props.Yx;
              return b == null || (!c && !d)
                ? b
                : L6(() => {
                    const e = b.get().rb();
                    return Di({
                      top: d ? 0 : e.top,
                      left: c ? 0 : e.left,
                      width: e.width,
                      height: e.height,
                    });
                  });
            }
            render() {
              const b = this.props.pS,
                c = this.props.sheet,
                d = this.props.container,
                e = this.props.range,
                f = this.props.pK,
                g = this.props.Xx,
                h = this.props.Yx;
              return C6("div", {
                ref: this.YFa,
                className: D6("i0YQww", this.props.className),
                children: [
                  B6("div", {
                    ref: this.o6a,
                    className: "vUKoKg",
                    children: B6("div", {
                      ref: this.p6a,
                      children: B6($6, {
                        pS: b,
                        sheet: c,
                        container: d,
                        bounds: e,
                        Oq: this.props.Oq,
                        Ou: this.props.Ou,
                        VF: this.props.VF,
                        Ei: this.props.Ei,
                        C4: this.props.C4,
                        zb: this.props.zb,
                        ba: this.props.ba,
                        fi: this.fi,
                        rca: this.rca,
                        iX: this.iX,
                      }),
                    }),
                  }),
                  B6(this.jsa, {}),
                  f && B6(f, { sheet: c, range: e, Xx: g, Yx: h }),
                ],
              });
            }
            componentDidMount() {
              const b = K6(() => {
                  var h = this.props,
                    k = h.ba,
                    l = h.sheet;
                  const m = h.zb;
                  var n = this.YFa.current;
                  const p = this.o6a.current;
                  h = this.p6a.current;
                  var q = this.bounds,
                    r = q.fc,
                    t = q.$c;
                  const v = q.mc;
                  q = q.wd;
                  k = k ? k.get() : 1;
                  t =
                    t && r ? m.Oa.pa(l, t) + t.width - m.Oa.pa(l, r) : l.width;
                  q =
                    q && v
                      ? m.Oa.qa(l, q) + q.height - m.Oa.qa(l, v)
                      : l.height;
                  n &&
                    ((n.style.width = `${t * k}px`),
                    (n.style.height = `${q * k}px`));
                  p &&
                    ((p.style.width = `${t * k}px`),
                    (p.style.height = `${q * k}px`));
                  n = l.direction === "rtl";
                  r = r ? m.Oa.pa(l, r) * k * (n ? 1 : -1) : 0;
                  l = v ? -m.Oa.qa(l, v) * k : 0;
                  h && (h.style.transform = `translate(${r}px, ${l}px)`);
                }),
                c = this.props.sheet;
              var d = this.props.I6;
              const e = this.props.Xx,
                f = this.props.Yx,
                g = e || f ? d?.(c, e, f) : void 0;
              d = K6(() => {
                const h = this.YFa.current;
                if (h != null) {
                  var k = e || f ? "sticky" : "relative",
                    l = f ? "0px" : "unset",
                    m = e ? "0px" : "unset",
                    n = e ? "0px" : "unset",
                    p = c.direction === "rtl";
                  if (g == null)
                    (h.style.position = k),
                      (h.style.top = l),
                      (h.style.left = p ? "unset" : m),
                      (h.style.right = p ? n : "unset");
                  else {
                    const q = g.get();
                    h.style.position = q.position ?? k;
                    h.style.top = q.top ?? l;
                    h.style.left = p ? "unset" : q.left ?? m;
                    h.style.right = p ? q.right ?? n : "unset";
                    h.style.transform = q.transform ?? "unset";
                  }
                }
              });
              __c.fc(this, [b, d]);
            }
            get bounds() {
              var b = this.props.sheet,
                c = this.props.zb,
                d = this.props.range;
              const e = c.layout.Wg.om(b);
              b = c.layout.Wg.Rk(b);
              if (b.empty || e.empty)
                return { fc: void 0, $c: void 0, mc: void 0, wd: void 0 };
              c = d.fc;
              const f = d.$c,
                g = d.mc;
              d = d.wd;
              const h = b.first(),
                k = e.first(),
                l = b.last(),
                m = e.last();
              return {
                fc: c ? (b.has(c) ? c : void 0) : h,
                $c: f ? (b.has(f) ? f : void 0) : l,
                mc: g ? (e.has(g) ? g : void 0) : k,
                wd: d ? (e.has(d) ? d : void 0) : m,
              };
            }
            constructor(...b) {
              super(...b);
              this.YFa = (Z6.D(this), av());
              this.o6a = av();
              this.p6a = av();
              this.iX = new gDc();
              this.BPb = L6(
                () =>
                  [...this.fi.get().keys()].sort((c, d) =>
                    this.props.zb.layout.Wg.om(this.props.sheet).Ne(c, d)
                  ),
                { equals: __c.Ti() }
              );
              this.zPb = L6(
                () =>
                  [...this.rca.get().keys()].sort((c, d) =>
                    this.props.zb.layout.Wg.Rk(this.props.sheet).Ne(c, d)
                  ),
                { equals: __c.Ti() }
              );
              this.jsa = F6(() =>
                B6(this.props.wib, {
                  fi: this.BPb,
                  APb: this.zPb,
                  Ptb: this.iX.yia,
                  range: this.props.range,
                })
              );
              this.fi = L6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.ba;
                  const e = this.props.zb;
                  var f = this.EJa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ua.y - h : g.mc ? e.Oa.qa(c, g.mc) : 0;
                  f = f
                    ? f.br.y + h
                    : g.wd
                    ? e.Oa.qa(c, g.wd) + g.wd.height
                    : 0;
                  h = new Map();
                  const l = e.layout.Wg.om(c);
                  for (
                    let m = g.mc;
                    m != null && g.wd != null && l.Ne(m, g.wd) <= 0;
                    m = l.next(m)
                  ) {
                    const n = e.Oa.qa(c, m);
                    if (!(n + m.height < k)) {
                      if (n > f) break;
                      h.set(m, n * d);
                    }
                  }
                  return h;
                },
                { equals: cCc.shallow }
              );
              this.rca = L6(
                () => {
                  const c = this.props.sheet;
                  var d = this.props.ba;
                  const e = this.props.zb;
                  var f = this.EJa?.get();
                  if (f && (f.height <= 0 || f.width <= 0)) return new Map();
                  const g = this.bounds;
                  d = d.get();
                  var h = 50 * d;
                  const k = f ? f.ua.x - h : g.fc ? e.Oa.pa(c, g.fc) : 0;
                  f = f ? f.br.x + h : g.$c ? e.Oa.pa(c, g.$c) + g.$c.width : 0;
                  h = new Map();
                  const l = e.layout.Wg.Rk(c);
                  for (
                    let m = g.fc;
                    m != null && g.$c != null && l.Ne(m, g.$c) <= 0;
                    m = l.next(m)
                  ) {
                    const n = e.Oa.pa(c, m);
                    if (!(n + m.width < k)) {
                      if (n > f) break;
                      h.set(m, n * d);
                    }
                  }
                  return h;
                },
                { equals: cCc.shallow }
              );
            }
          }
          ({
            c: [Z6, aDc],
          } = W6(a, [], [nc], bDc));
        })(),
        YCc)();
        var gDc = class {
            constructor() {
              this.cells = new XCc();
              this.iHa = (a, b, c) => {
                let d = this.cells.get([a, b]);
                d == null &&
                  ((d = S6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], d));
                d.set(c);
                return () => {
                  const e = this.cells.get([a, b]);
                  e === d && (e.set(void 0), this.cells.delete([a, b]));
                };
              };
              this.yia = (a, b) => {
                let c = this.cells.get([a, b]);
                c == null &&
                  ((c = S6.box(void 0, { deep: !1 })),
                  this.cells.set([a, b], c));
                return c.get()?.rTa;
              };
            }
          },
          $6;
        new ((ZCc = class extends V6 {
          constructor() {
            super($6);
            cDc();
          }
        }),
        (() => {
          class a extends (dDc = P6) {
            static D(b) {
              M(b, { YO: S6.shallow, xs: L6, NQa: T6, Efa: T6.bound });
            }
            get xs() {
              const b = this.props.Oq?.get();
              if (b != null && b.length !== 0) return new __c.bx(b);
            }
            render() {
              return C6("div", {
                onMouseDown: this.props.Ou?.onMouseDown,
                onTouchStart: this.props.Ou?.onTouchStart,
                ref: iCc(this.Ad, this.xs?.qm),
                children: [
                  B6("div", { ref: this.lva, className: "_5YlOqQ" }),
                  B6("div", { ref: this.nva, className: "_XCmKw" }),
                  this.YO.map((b) => b.$Fb),
                ],
              });
            }
            componentDidMount() {
              const b = M6(
                  () => [
                    this.props.sheet,
                    this.props.rca.get(),
                    this.props.fi.get(),
                  ],
                  ([e, f, g], h) => {
                    [h] = h || [];
                    e !== h && this.vmb();
                    this.NQa(f, g);
                  },
                  { fireImmediately: !0 }
                ),
                c = K6(() => {
                  var e = this.props,
                    f = e.ba;
                  e = e.sheet;
                  const g = this.Ad.current;
                  g &&
                    ((f = f ? f.get() : 1),
                    (g.style.width = `${e.width * f}px`),
                    (g.style.height = `${e.height * f}px`));
                }),
                d = this.YO.map((e) => VBc(e));
              __c.fc(this, [c, b, ...d]);
            }
            vmb() {
              const b = y(this.lva.current),
                c = y(this.nva.current);
              b.innerHTML = "";
              c.innerHTML = "";
              this.VMa.length = 0;
              this.YO.length = 0;
            }
            NQa(b, c) {
              const d = y(this.lva.current),
                e = y(this.nva.current),
                f = [],
                g = new Map();
              for (const h of this.VMa)
                c.has(h.ta) ? g.set(h.ta, h) : f.push(h);
              for (const [h, k] of c)
                (c = g.get(h) || f.pop()),
                  c ||
                    ((c = new hDc(this.Efa, h)),
                    d.appendChild(c.Eea),
                    e.appendChild(c.Gea),
                    this.VMa.push(c)),
                  c.update(k, h, b);
              for (const h of f) h.hide();
            }
            Efa(b, c) {
              const d = this.props.C4,
                e = this.props.zb,
                f = this.props.sheet,
                g = this.props.container,
                h = this.props.iX;
              b = new iDc(
                this.props.pS,
                this.props.VF,
                this.props.Ei,
                d(b, c),
                e,
                f,
                b,
                c,
                g,
                h.iHa,
                this.Iia,
                this.Hia
              );
              __c.fc(this, VBc(b));
              this.YO.push(b);
              return b;
            }
            constructor(...b) {
              super(...b);
              this.Ad = ($6.D(this), av());
              this.lva = av();
              this.nva = av();
              this.VMa = [];
              this.YO = [];
              this.Iia = U6((c) => {
                const d = this.props.fi.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
              this.Hia = U6((c) => {
                const d = this.props.rca.get();
                return c === "first"
                  ? d.keys().next().value
                  : [...d.keys()].pop();
              });
            }
          }
          ({
            c: [$6, cDc],
          } = W6(a, [], [nc], dDc));
        })(),
        ZCc)();
        var hDc = class {
            static D(a) {
              M(a, { update: T6 });
            }
            update(a, b, c) {
              [this.Eea, this.Gea].forEach((d) => {
                d.style.transform = `translateY(${a}px)`;
                d.classList.add("FPpqvg");
              });
              this.ta = b;
              for (const [d] of c)
                (c = this.YO.get(d)),
                  c ||
                    ((c = this.Efa(d, b)),
                    this.YO.set(d, c),
                    this.Eea.appendChild(c.Dea),
                    this.Gea.appendChild(c.bQ)),
                  c.update(b);
            }
            hide() {
              [this.Eea, this.Gea].forEach((a) => {
                a.style.transform = "translate(-1000px, -1000px) scale(0)";
              });
            }
            constructor(a, b) {
              this.Efa = a;
              this.ta = b;
              this.Eea = (hDc.D(this), document.createElement("div"));
              this.Gea = document.createElement("div");
              this.YO = new Map();
            }
          },
          iDc = class {
            static D(a) {
              M(a, {
                rfa: S6.ref,
                ta: S6.ref,
                WAa: L6,
                update: T6,
                zv: L6,
                attrs: L6.struct,
                yCa: L6,
                Fx: L6,
                renderer: L6,
                rTa: L6.struct,
              });
            }
            get WAa() {
              if (!UBc) return !1;
              const a = this.zv;
              return a == null ||
                a.content.ref == null ||
                a.content.ref.type !== "formula"
                ? !1
                : this.pS(this.sheet, a.content.ref.value);
            }
            update(a) {
              a !== this.ta &&
                ((this.ta = a),
                (this.YB.ta = a),
                this.Hxa && this.Hxa(),
                (this.Hxa = this.iHa(this.ta, this.col, this)));
            }
            get $Fb() {
              return this.rfa;
            }
            get zv() {
              const a = this.sheet.layout.cells.get(this.ta, this.col);
              return a ? a.ref : void 0;
            }
            get attrs() {
              const a = this.YB.attrs;
              return {
                bh: a?.bh,
                textAlign: a?.textAlign,
                direction: a?.direction,
                link: a?.link,
                fontSize: a?.fontSize,
                color: a?.color,
                WC: a?.WC,
              };
            }
            get yCa() {
              var a = this.YB.span;
              if (!a) return !1;
              if (a.mc === a.wd && a.fc === a.$c) return !0;
              var b = this.Iia("first");
              const c = this.Iia("last"),
                d = this.Hia("first"),
                e = this.Hia("last");
              if (!(b && c && d && e)) return !1;
              const f = this.zb.layout.Wg.om(this.sheet),
                g = this.zb.layout.Wg.Rk(this.sheet);
              b = f.Ne(a.mc, b) >= 0 && f.Ne(a.mc, c) <= 0 ? a.mc : b;
              a = g.Ne(a.fc, d) >= 0 && g.Ne(a.fc, e) <= 0 ? a.fc : d;
              return b === this.ta && a === this.col;
            }
            get Fx() {
              const a = this.sheet,
                b = this.ta,
                c = this.col;
              if (!this.container)
                return { type: void 0, sheet: a, ta: b, column: c };
              switch (this.container.type) {
                case "fixed-page":
                  return this.container.AR(c, b);
                case "sheet-item":
                  return this.container.AR(c, b);
                case "sheet-element":
                  return this.container.AR(c, b);
                default:
                  throw new E(this.container);
              }
            }
            get renderer() {
              const a = this.zv;
              if (a && this.yCa && (a.content.ref || a.Ca.ref))
                return this.VF({
                  context: { container: this.Fx, attrs: this.attrs },
                  cr: this.OEa,
                  Ei: this.Ei,
                });
            }
            get rTa() {
              this.sTa.reportObserved();
              var a = eCc(() => this.renderer);
              if (
                a &&
                ((a = a.type === "react" ? this.m$ : this.PG),
                a.childNodes.length !== 0 &&
                  ((a = a.childNodes[0]), a instanceof HTMLElement))
              )
                return { width: a.clientWidth, height: a.clientHeight };
            }
            constructor(a, b, c, d, e, f, g, h, k, l, m, n) {
              this.pS = a;
              this.VF = b;
              this.YB = d;
              this.zb = e;
              this.sheet = f;
              this.col = g;
              this.container = k;
              this.iHa = l;
              this.Iia = m;
              this.Hia = n;
              this.Dea = (iDc.D(this), document.createElement("div"));
              this.bQ = document.createElement("div");
              this.IG = document.createElement("div");
              this.PG = document.createElement("div");
              this.m$ = document.createElement("div");
              this.sTa = dCc("content size atom");
              this.OEa = T6(() => this.sTa.reportChanged());
              this.ta = h;
              this.Dea.className = "_2JFriw";
              this.bQ.className = "imy9ug";
              this.IG.className = D6("pDMp7w", {
                _0yZ6Qg: this.zv?.content.ref?.type !== "text3",
                qhF5uA:
                  this.zv?.content.ref?.type !== "text3" &&
                  this.zv?.content.ref?.type !== "text2",
                qxD1GA: this.WAa,
              });
              this.PG.className = "_30B9pw";
              this.IG.appendChild(this.PG);
              this.bQ.appendChild(this.IG);
              this.m$.className = "G7zH2w";
              this.Hxa = l(this.ta, this.col, this);
              this.Ei = (p) => B6(c, { ...p, cr: this.OEa });
            }
          };
        var jDc, kDc, lDc, N6;
        new ((jDc = class extends V6 {
          constructor() {
            super(N6);
            kDc();
          }
        }),
        (() => {
          class a extends (lDc = P6) {
            static D(b) {
              M(b, { lia: L6 });
            }
            render() {
              const {
                  pS: b,
                  sheet: c,
                  container: d,
                  zb: e,
                  Oq: f,
                  Ou: g,
                  I6: h,
                  VF: k,
                  Ke: l,
                  Ei: m,
                  viewport: n,
                  pK: p,
                  efb: q = !1,
                } = this.props,
                r = c.direction === "ltr" ? "TA4X7w" : "WvuqMw",
                t = e.layout.Wg.om(c);
              if (!e.layout.Wg.Rk(c).empty && !t.empty)
                return B6("div", {
                  className: D6("SNkrHw", r, { RaA0Nw: q }),
                  ...l,
                  children: B6(eDc, {
                    pS: b,
                    VF: k,
                    Ei: m,
                    wib: this.jsa,
                    C4: this.C4,
                    zb: e,
                    sheet: c,
                    container: d,
                    Oq: f,
                    Ou: g,
                    I6: h,
                    ba: this.ba,
                    viewport: n,
                    pK: p,
                    lia: this.lia,
                  }),
                });
            }
            get lia() {
              var b = this.props.sheet,
                c = this.props.zb;
              const d = {},
                e = b.view.freeze.UT
                  ? b.layout.de.get(b.view.freeze.UT)
                  : void 0,
                f = b.view.freeze.NG
                  ? b.layout.Vd.get(b.view.freeze.NG)
                  : void 0;
              var g = c.layout.Wg.om(b),
                h = c.layout.Wg.Rk(b);
              b = g.first();
              c = g.last();
              const k = h.first(),
                l = h.last();
              if (b != null && c != null && k != null && l != null)
                return (
                  (h = f ? h.next(f) : k),
                  (g = e ? g.next(e) : b),
                  e && f && (d.lRa = { range: { fc: k, mc: b, $c: f, wd: e } }),
                  e && h && (d.pfb = { range: { fc: h, mc: b, $c: l, wd: e } }),
                  f && g && (d.IZa = { range: { fc: k, mc: g, $c: f, wd: c } }),
                  g && h && (d.feb = { range: { fc: h, mc: g, $c: l, wd: c } }),
                  d
                );
            }
            get ba() {
              return this.props.ba ? this.props.ba : L6(() => 1);
            }
            constructor(...b) {
              super(...b);
              this.jsa =
                (N6.D(this),
                F6((c) => {
                  const {
                    sheet: d,
                    zb: e,
                    TBa: f,
                    ba: g,
                    iea: h = "hidden",
                  } = this.props;
                  return B6(X6, {
                    sheet: d,
                    zb: e,
                    range: c.range,
                    ba: g,
                    children: B6(VCc, {
                      ...c,
                      sheet: d,
                      zb: e,
                      ba: this.ba,
                      TBa: f,
                      overflow: h,
                    }),
                  });
                }));
              this.C4 = (c, d) =>
                new __c.jQa(
                  this.props.rl,
                  this.props.zb,
                  this.props.RB,
                  this.props.sheet,
                  c,
                  d,
                  this.ba,
                  this.Uv,
                  this.Wv
                );
              this.Uv = (c, d) => this.props.Uv?.(this.props.sheet, c, d);
              this.Wv = (c, d) => this.props.Wv?.(this.props.sheet, c, d);
            }
          }
          ({
            c: [N6, kDc],
          } = W6(a, [], [nc], lDc));
        })(),
        jDc)();
        __c.uQa = {
          exb: function (a) {
            const b = a.Yt,
              c = a.Od,
              d = a.Id,
              e = a.Hn,
              f = a.rl,
              g = a.zb,
              h = a.RB,
              k = a.B2;
            zBc({ QB: a.QB, Vf: a.Vf, ILb: a.RT, bb: a.bb });
            const l = XBc({ VF: k, zb: g, rl: f, RB: h, yA: void 0 });
            b.Gsa = RBc({ Mr: l, zb: g });
            c.ksa = HBc({ Mr: l });
            ({ Aib: a } = OBc({ Mr: l, Xe: e(), Fab: new MCc(), zb: g }));
            d.uq.Fsa = a;
            const { ugb: m, vgb: n, tgb: p } = FBc({ zb: g });
            return {
              POa: F6((q) =>
                B6(kCc, {
                  ...q,
                  container: void 0,
                  Mr: l,
                  zib: m,
                  Bib: n,
                  xib: p,
                  Ei: lCc,
                })
              ),
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/33721551e6c36744.js.map
