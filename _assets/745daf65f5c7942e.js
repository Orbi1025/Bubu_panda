(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [94260],
  {
    /***/ 519987: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      __web_req__(131662);
      __web_req__(775822);
      __web_req__(891548);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var mb = __c.mb;
        var E = __c.E;
        var K = __c.K;
        var $yc = function (a) {
            __c.mic({ ...a, G: a.span });
          },
          f6 = function (a, b) {
            var c = a.Wcb.get(b);
            if (c != null) return c;
            c = { value: a.$m.mt(b) };
            a.Wcb.set(b, c);
            a.Ocb.set(c, b);
            return c;
          },
          g6 = function (a, b) {
            a = a.Ocb.get(b);
            if (a == null) throw new azc("ref does not exists");
            return a;
          },
          bzc = function () {
            const a = (b) => {
              if (b?.type !== "text2") throw new h6("text2", b);
              return b.value;
            };
            return {
              vl: (b) => ({ type: "text2", value: b }),
              nt: (b) => {
                if (b?.type !== "text2") throw new i6("text2", b);
                return b.value;
              },
              mt: a,
              Wu: a,
            };
          },
          czc = function (a) {
            const b = () => a.bl.ZB.get(a.zf.Zi) || j6;
            return {
              DY: function () {
                return a.bl.Zk
                  ? 3
                  : a.bl.Twb === "checking" || a.bl.Zc.status === 2
                  ? 1
                  : a.bl.Zc.status === 3
                  ? 4
                  : a.bl.zy
                  ? 2
                  : 0;
              },
              gAa: function () {
                const c = a.zf,
                  { uJ: d } = b();
                return !(
                  !d ||
                  !c.fields.first(
                    ({ value: e }) =>
                      e.type === "select" &&
                      !!e.options.first(({ value: f }) => f.id === d)
                  )
                );
              },
              vub: function (c, d) {
                const { results: e } = b();
                c = e.fields.get(c);
                if (!c) return 0;
                d = c.HI.get(d) ?? 0;
                d = c.total > 0 ? (d / c.total) * 100 : 0;
                Number.isInteger(d) || (d = parseFloat(d.toFixed(1)));
                return d;
              },
              Wub: function (c) {
                if (!a.zf.fields.first(({ value: e }) => e.id === c)) return 0;
                var { results: d } = b();
                return (d = d.fields.get(c)) ? d.total : 0;
              },
              xAa: b,
              CBb: (c) => {
                const d = new Map(a.bl.ZB);
                d.set(a.zf.Zi, { ...b(), ...c });
                return d;
              },
            };
          },
          gzc = function (a, b, c, d, e, f) {
            function g() {
              const v = b.DY(),
                w = q();
              return (p === "poll" || !w) && v === 0;
            }
            async function h() {
              const v = f.Th("submit_response", {
                  cq: { name: "ui.rendering.form.submit_response" },
                }),
                w = {
                  BH: m,
                  cia: p,
                  Or: "interacted",
                  action: "response_submitted",
                  location: "in_form",
                };
              e && $yc({ span: v, ha: e, event: __c.b3, props: w });
              const { results: z, $f: A, HGa: C } = r();
              if (A != null && g()) {
                var B = a.zf.fields.first(
                  ({ value: O }) =>
                    O.type === "select" &&
                    !!O.options.first(({ value: S }) => S.id === A)?.value
                )?.value;
                if (B) {
                  l("selected_field_found", v);
                  var D = a.bl,
                    J = z;
                  p === "poll" &&
                    C &&
                    C !== A &&
                    (J = dzc({ mua: z, us: B.id, e_: C }));
                  J = ezc({ bUa: J, us: B.id, e_: A });
                  l("field_results_created", v);
                  k6(() => {
                    a.In(() => ({
                      ZB: t({ $f: A, uJ: A, results: J }),
                      zy: !0,
                    }));
                  });
                  l("submission_set", v);
                  v.bY();
                  var L = await c.Wzb({
                    yr: a.zf.yr,
                    Zi: n,
                    Dta: [
                      {
                        type: 0,
                        us: B.id,
                        Tl: B.label.text.W.trim(),
                        k0: [A],
                        options:
                          B.type === "select"
                            ? B.options.map(({ value: O }) => ({
                                id: O.id,
                                label: O.label.text.W.trim(),
                              }))
                            : [],
                      },
                    ],
                  });
                  if (L.ok)
                    return k6(() => {
                      const O = (S) =>
                        !!L.value.result.lXa
                          .get(B.id)
                          ?.feedback?.lD?.includes(S);
                      a.In(() => ({
                        zy: !1,
                        Zc: { ...a.bl.Zc, Fja: O },
                        ZB: t({ HGa: void 0 }),
                      }));
                    });
                  d?.sx({
                    Gy: K("izckBA"),
                    group: fzc,
                    CC: { Dx: K("mQhziQ"), onClick: h },
                  });
                  var N = dzc({ mua: J, us: B.id, e_: A });
                  C && (N = ezc({ bUa: N, us: B.id, e_: C }));
                  k6(() => {
                    a.In({
                      ...D,
                      ...(C && { ZB: t({ $f: C, uJ: C, results: N }) }),
                    });
                  });
                } else v.abort();
              } else v.abort();
            }
            async function k(v) {
              const w = r(),
                z = a.zf.fields.first(
                  ({ value: B }) =>
                    B.type === "select" &&
                    !!B.options.first(({ value: D }) => D.id === v)?.value
                )?.value;
              if (z) {
                var A = a.bl,
                  C = dzc({ mua: w.results, us: z.id, e_: v });
                k6(() => {
                  a.In(() => ({
                    ZB: t({ $f: void 0, uJ: void 0, results: C }),
                    Lz: void 0,
                    zy: !0,
                  }));
                });
                (await c.M_({ Zi: n })).ok
                  ? k6(() => {
                      a.In({ zy: !1 });
                    })
                  : (d?.sx({
                      Gy: K("kgHTHw"),
                      group: fzc,
                      CC: { Dx: K("mQhziQ"), onClick: () => k(v) },
                    }),
                    k6(() => {
                      a.In(A);
                    }));
              }
            }
            function l(v, w) {
              w.addEvent(v);
              w.md().addEvent(v);
            }
            const m = a.zf.id,
              n = a.zf.Zi,
              p = a.zf.type,
              q = b.gAa,
              r = b.xAa,
              t = b.CBb;
            return {
              submit: h,
              bEa: function () {
                a.In(() => ({ wU: 1 }));
              },
              cEa: function () {
                a.In(() => ({ wU: 0 }));
              },
              aEa: function () {
                a.In(() => ({ wU: 2 }));
              },
              dEa: function () {
                a.In(() => ({ wU: 1 }));
              },
              gqa: function (v) {
                const w = r(),
                  z = p === "poll" && v === w?.$f && v === w?.uJ;
                if (g() && z) k(v);
                else if (
                  g() &&
                  a.zf.fields.some(
                    ({ value: C }) =>
                      C.type === "select" &&
                      C.options.some(({ value: B }) => B.id === v)
                  )
                ) {
                  var A = w?.uJ;
                  k6(() => {
                    const C = r();
                    a.In(() => ({
                      ZB: t({ HGa: A, $f: C.$f === v ? void 0 : v }),
                    }));
                  });
                  p === "poll" && h();
                }
              },
              vla: function (v) {
                g() &&
                  a.zf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.In(() => ({ NH: v }));
              },
              wla: function (v) {
                b.DY() === 0 &&
                  a.zf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.bl.NH &&
                  a.In(() => ({ NH: void 0 }));
              },
              tla: function (v) {
                const { uJ: w, $f: z } = r();
                b.DY() === 0 &&
                  a.zf.fields.some(
                    ({ value: A }) =>
                      A.type === "select" &&
                      A.options.some(({ value: C }) => C.id === v)
                  ) &&
                  z !== v &&
                  !w &&
                  a.In(() => ({ Lz: v }));
              },
              xla: function (v) {
                b.DY() === 0 &&
                  a.zf.fields.some(
                    ({ value: w }) =>
                      w.type === "select" &&
                      w.options.some(({ value: z }) => z.id === v)
                  ) &&
                  a.bl.Lz &&
                  a.In(() => ({ Lz: void 0 }));
              },
            };
          },
          dzc = function ({ mua: a, us: b, e_: c }) {
            const d = a.fields.get(b) ?? { id: b, HI: new Map(), total: 0 },
              e = Math.max(0, (d.HI.get(c) ?? 0) - 1),
              f = new Map(d.HI);
            e > 0 ? f.set(c, e) : f.delete(c);
            return {
              fields: hzc(a.fields, b, {
                id: b,
                HI: f,
                total: Math.max(0, d.total - 1),
              }),
            };
          },
          ezc = function ({ bUa: a, us: b, e_: c }) {
            const d = a.fields.get(b) ?? { id: b, HI: new Map(), total: 0 },
              e = (d.HI.get(c) ?? 0) + 1;
            return {
              fields: hzc(a.fields, b, {
                id: b,
                HI: hzc(d.HI, c, e),
                total: d.total + 1,
              }),
            };
          },
          hzc = function (a, b, c) {
            return new Map([...a.entries(), [b, c]]);
          },
          l6 = function (a, b) {
            __c.u(b.length > 0, "zero contrast candidates received");
            const c = new Map();
            return __c.Wi(b, (d) => {
              const e = c.get(d) ?? __c.im(d, a);
              c.set(d, e);
              return e;
            });
          },
          izc = function (a, b) {
            return __c.Hkc(a, b) >= 20 ? a : l6(b, m6);
          },
          n6 = function (a) {
            switch (a.type) {
              case "color":
                return a.color;
              case "gradient":
                return a.Pa.Bg[0].color;
              default:
                throw new E(a);
            }
          },
          o6 = function ({
            layout: a,
            direction: b,
            gap: c,
            padding: d,
            background: e,
            border: f,
            N: g,
            cells: h,
            ...k
          }) {
            a = a === "vertical";
            let l = [];
            const m = [],
              n = c && d,
              p = d ? 1 : 0;
            let q = 1;
            for (let r = 0; r < h.length; r++) {
              const t = h[r];
              typeof t.size === "string"
                ? l.push(t.size)
                : l.push(`${t.size}px`);
              m.push({
                ...t,
                id: t.id,
                placement: a
                  ? {
                      gridColumnStart: `${p + 1}`,
                      gridColumnEnd: `${p + 2}`,
                      gridRowStart: `${p + q}`,
                      gridRowEnd: `${p + q + 1}`,
                      padding: t.padding ? jzc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    }
                  : {
                      gridColumnStart: `${p + q}`,
                      gridColumnEnd: `${p + q + 1}`,
                      gridRowStart: `${p + 1}`,
                      gridRowEnd: `${p + 2}`,
                      padding: t.padding ? jzc(t.padding) : void 0,
                      alignSelf: t.alignSelf,
                    },
              });
              q += n ? 2 : 1;
            }
            n && (l = l.join(` ${c}px `).split(" "));
            d && (l = [`${d}px`, ...l, `${d}px`]);
            return {
              ...k,
              type: "layout",
              cells: m,
              direction: b,
              fill: e,
              border: f,
              N: g,
              gridTemplateColumns: a
                ? d
                  ? [`${d}px`, "1fr", `${d}px`]
                  : ["1fr"]
                : l,
              gridTemplateRows: a
                ? l
                : d
                ? [`${d}px`, "auto", `${d}px`]
                : ["auto"],
              columnGap: n || a ? void 0 : c,
              rowGap: !n && a ? c : void 0,
            };
          },
          kzc = function ({
            padding: a,
            direction: b,
            background: c,
            N: d,
            xa: e,
            border: f,
            content: g,
            ref: h,
            key: k,
            ...l
          }) {
            return {
              ...l,
              type: "layout",
              direction: b,
              gridTemplateColumns: ["1fr"],
              gridTemplateRows: ["1fr"],
              fill: c,
              N: d,
              xa: e,
              border: f,
              cells: [
                {
                  id: "_",
                  content: g,
                  placement: {
                    gridColumnStart: "1",
                    gridColumnEnd: "2",
                    gridRowStart: "1",
                    gridRowEnd: "2",
                    alignSelf: "center",
                    padding: a,
                  },
                },
              ],
              key: k,
              ref: h,
            };
          },
          jzc = function (a) {
            switch (a.length) {
              case 0:
                break;
              case 1:
                return a[0];
              case 2:
                return { qa: a[0], Ma: a[1], Da: a[0], pa: a[1] };
              case 4:
                return { qa: a[0], Ma: a[1], Da: a[2], pa: a[3] };
              default:
                throw Error(`Invalid padding value: ${a}`);
            }
          },
          p6 = function (a, b) {
            a = __c.Jk.create(__c.Jk.snapshot(a.text));
            b != null && a.setAttributes(b);
            return { type: "text", GF: 1, text: __c.Jk.snapshot(a) };
          },
          q6 = function (a) {
            switch (a) {
              case "l":
                return 1;
              case "r":
                return 2;
              default:
                throw new E(a);
            }
          },
          r6 = function (a) {
            switch (a) {
              case "l":
                return "ltr";
              case "r":
                return "rtl";
              default:
                throw new E(a);
            }
          },
          lzc = function (a) {
            if (a)
              return {
                gqa: a.gqa,
                vla: a.vla,
                wla: a.wla,
                tla: a.tla,
                xla: a.xla,
              };
          },
          mzc = function ({ direction: a, text: b, background: c }) {
            return {
              id: "header",
              size: "auto",
              fill: c,
              padding: [20, 20, 16, 20],
              content: p6(b, { direction: r6(a) }),
            };
          },
          pzc = function ({
            direction: a,
            messages: b,
            GFa: c,
            fontFamily: d,
            i$: e,
            N: f,
            state: g,
            Vp: h,
            Ts: k,
          }) {
            var l = h !== k,
              m = l6(k, m6);
            h = l ? h : m;
            m = izc("#000000", k);
            var n = izc(h, k);
            l = nzc(g, g === 3 && l ? n : m, l);
            b = {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
              fill: l,
              cells: [
                {
                  id: "text",
                  placement: {
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                    alignSelf: "center",
                  },
                  content: p6(c, {
                    direction: r6(a),
                    ...(g === 3 && { color: l6(h, m6) }),
                  }),
                },
                g === 3 || g === 4 || g === 5
                  ? {
                      id: "percentage",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: {
                        type: "text",
                        GF: 0,
                        fontFamily: d,
                        fontWeight: "bold",
                        fontSize: ozc,
                        text: b.Sna(e),
                        textAlign: "end",
                        direction: r6(a),
                        color: g === 3 ? l6(h, m6) : l6(k, m6),
                      },
                    }
                  : void 0,
              ].filter(mb),
            };
            if (g !== 3 && g !== 4 && g !== 5) return b;
            c = e > 0;
            const p = e < 100;
            n = (k = (c && !p) || (!c && p)) ? 1 : 2;
            e = [c ? `${e}fr` : void 0, p ? `${100 - e}fr` : void 0].filter(mb);
            g = {
              type: "color",
              color: g === 3 ? h : m,
              xa: g === 3 ? 0 : 0.8,
            };
            return k
              ? { ...b, fill: c ? g : l }
              : {
                  type: "layout",
                  direction: q6(a),
                  gridTemplateRows: ["1fr"],
                  gridTemplateColumns: e,
                  fill: l,
                  cells: [
                    {
                      id: "bar",
                      N: f,
                      fill: g,
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: "2",
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: kzc({
                        direction: q6(a),
                        content: {
                          type: "text",
                          GF: 0,
                          text: "",
                          fontFamily: d,
                          fontSize: ozc,
                          direction: r6(a),
                        },
                      }),
                    },
                    {
                      id: "optionTextWithPercentage",
                      placement: {
                        gridColumnStart: "1",
                        gridColumnEnd: `${n + 1}`,
                        gridRowStart: "1",
                        gridRowEnd: "2",
                      },
                      content: b,
                    },
                  ],
                };
          },
          nzc = function (a, b, c) {
            switch (a) {
              case 0:
                return { type: "color", color: b, xa: 0.92 };
              case 1:
              case 5:
                return { type: "color", color: b, xa: 0.88 };
              case 2:
                return { type: "color", color: b, xa: 0.74 };
              case 3:
                return { type: "color", color: b, xa: c ? 0.5 : 0.92 };
              case 4:
                return { type: "color", color: b, xa: 0.92 };
              default:
                throw new E(a);
            }
          },
          qzc = function ({
            itb: a,
            kS: b,
            us: c,
            direction: d,
            options: e,
            $f: f,
            NH: g,
            Lz: h,
            FFa: k,
            fontFamily: l,
            Eaa: m,
            Vp: n,
            Ts: p,
            messages: q,
            Yqa: r,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20],
              alignSelf: "center",
              content: o6({
                layout: "vertical",
                direction: q6(d),
                gap: 8,
                cells: e.map(({ value: t }) => {
                  var v = t.id === f;
                  const w = t.id === g,
                    z = t.id === h;
                  v = m ? (v ? 3 : w ? 5 : 4) : z ? 2 : w ? 1 : 0;
                  return {
                    id: t.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: r.option,
                      key: t.id,
                      N: k,
                      Vm: () => b?.gqa?.(t.id),
                      onMouseEnter: () => b?.vla?.(t.id),
                      onMouseLeave: () => b?.wla?.(t.id),
                      onMouseDown: () => b?.tla?.(t.id),
                      onMouseUp: () => b?.xla?.(t.id),
                      ...pzc({
                        messages: q,
                        GFa: t.label,
                        direction: d,
                        fontFamily: l,
                        i$: a.vub(c, t.id),
                        N: k,
                        state: v,
                        Vp: n,
                        Ts: p,
                      }),
                    },
                  };
                }),
              }),
            };
          },
          vzc = function (a) {
            const b = a.status,
              c = a.direction,
              d = a.backgroundColor,
              e = a.fontSize,
              f = a.fontFamily,
              g = l6(d, m6);
            switch (b) {
              case 0:
                return {
                  type: "text",
                  GF: 1,
                  text: s6(
                    a.statusMessage ?? (a.messages.ys("live") || K("/iw6+Q")),
                    c,
                    l6(d, rzc),
                    g,
                    e,
                    f
                  ),
                };
              case 1:
                return {
                  type: "text",
                  GF: 1,
                  text: s6(a.messages.loading(), c, l6(d, szc), g, e, f),
                };
              case 2:
                return {
                  type: "text",
                  GF: 1,
                  text: s6(a.messages.Zaa(), c, l6(d, szc), g, e, f),
                };
              case 3:
                return {
                  type: "text",
                  GF: 1,
                  text: s6(a.messages.offline(), c, l6(d, tzc), g, e, f),
                };
              case 4:
                return {
                  type: "text",
                  GF: 1,
                  text: s6(
                    a.messages.ys("somethingWentWrong") || K("ElTceA"),
                    c,
                    l6(d, uzc),
                    g,
                    e,
                    f
                  ),
                };
              default:
                throw new E(b);
            }
          },
          wzc = function ({
            direction: a,
            messages: b,
            LCb: c,
            status: d,
            Zc: e,
            backgroundColor: f,
            fontSize: g,
            fontFamily: h,
          }) {
            e =
              e.status === 1
                ? e.data.xU?.type === "ANON"
                  ? b.d2()
                  : b.c2()
                : b.ys("live") || K("/iw6+Q");
            return [
              {
                id: "footer",
                size: "auto",
                padding: [0, 20, 20, 20],
                content: vzc({
                  messages: b,
                  status: d,
                  statusMessage: `${e} | ${b.t9(c)}`,
                  backgroundColor: f,
                  direction: a,
                  fontSize: g,
                  fontFamily: h,
                }),
              },
            ];
          },
          yzc = function (a, b, c, d, e, f, g) {
            const h = c.zf;
            c = c.bl;
            const k = a.qr;
            a = a.Us;
            b = b.border;
            const l = b.P8a,
              m = h.direction,
              n = h.fields.first()?.value;
            if (!n || n.type !== "select" || !k || !a)
              return {
                ...o6({
                  layout: "vertical",
                  direction: q6(m),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: h.minWidth,
                minHeight: h.minHeight,
              };
            const p = n6(k),
              q = n6(a);
            var r = n.options.first()?.value.label.text,
              t = (C) => C?.values().next().value,
              v =
                r?.stream.Zh("font-size")["font-size"]?.values().next().value ||
                16;
            const w = t(r?.stream.Zh("font-family")["font-family"]) || h.wX,
              z =
                t(r?.stream.Zh("font-weight")["font-weight"]) ||
                __c.Nf.Sb["font-weight"];
            r =
              t(r?.stream.Zh("font-style")["font-style"]) ||
              __c.Nf.Sb["font-style"];
            v *= xzc;
            t = d.gAa();
            const A = d.xAa();
            return {
              minWidth: h.minWidth,
              minHeight: h.minHeight,
              ...o6({
                layout: "vertical",
                direction: q6(m),
                background: a,
                N: l,
                border: b,
                cells: [
                  h.$L
                    ? void 0
                    : mzc({ direction: m, text: n.label, background: k }),
                  qzc({
                    itb: d,
                    kS: lzc(e),
                    options: n.options,
                    NH: c.NH,
                    Lz: c.Lz,
                    $f: A.$f,
                    FFa: n.N,
                    Vp: p,
                    Ts: q,
                    fontFamily: w,
                    direction: m,
                    Eaa: t,
                    us: n.id,
                    messages: f,
                    Yqa: g,
                  }),
                  ...wzc({
                    direction: m,
                    messages: f,
                    LCb: d.Wub(n.id),
                    status: d.DY(),
                    Zc: c.Zc,
                    backgroundColor: q,
                    fontSize: v,
                    fontFamily: w,
                    fontWeight: z,
                    fontStyle: r,
                  }),
                ].filter(mb),
              }),
              ref: g.root,
            };
          },
          zzc = function ({
            width: a,
            height: b,
            ge: c,
            color: d,
            Hxb: e,
            backgroundColor: f,
          }) {
            return {
              type: "shape",
              width: a,
              height: b,
              Zqa: { width: 16, height: 16 },
              fb: [
                {
                  d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                  stroke: { weight: c, color: d },
                  fill: { type: "color", color: d },
                },
                {
                  d: e
                    ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z"
                    : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                  fill: { type: "color", color: f },
                },
              ],
            };
          },
          Czc = function ({ direction: a, GFa: b, Ts: c, state: d }) {
            const e = izc("#000000", c);
            return {
              type: "layout",
              gridTemplateRows: ["10px", "1fr", "10px"],
              gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
              fill: Azc(d, e),
              cells: [
                {
                  id: "text",
                  placement: {
                    alignSelf: "center",
                    gridColumnStart: "2",
                    gridColumnEnd: "3",
                    gridRowStart: "2",
                    gridRowEnd: "3",
                  },
                  content: (() => {
                    switch (d) {
                      case 5:
                        return p6(b, { direction: r6(a), color: "#00873d" });
                      case 6:
                        return p6(b, { direction: r6(a), color: "#c8001e" });
                      case 4:
                        return p6(b, { direction: r6(a), color: l6(c, Bzc) });
                      default:
                        return p6(b, { direction: r6(a) });
                    }
                  })(),
                },
                d === 5 || d === 6
                  ? {
                      id: "validation",
                      placement: {
                        gridColumnStart: "4",
                        gridColumnEnd: "5",
                        gridRowStart: "2",
                        gridRowEnd: "3",
                        alignSelf: "center",
                      },
                      content: zzc({
                        width: 18,
                        height: 18,
                        ge: 1.6,
                        Hxb: d === 5,
                        color: d === 5 ? "#00873d" : "#c8001e",
                        backgroundColor: "#ffffff",
                      }),
                    }
                  : void 0,
              ].filter(mb),
            };
          },
          Azc = function (a, b) {
            switch (a) {
              case 0:
                return { type: "color", color: b, xa: 0.92 };
              case 1:
                return { type: "color", color: b, xa: 0.74 };
              case 2:
                return { type: "color", color: b, xa: 0.88 };
              case 3:
                return { type: "color", color: b, xa: 0.74 };
              case 4:
                return { type: "color", color: b, xa: 0.9 };
              case 5:
                return { type: "color", color: "#e3fff0", xa: 0 };
              case 6:
                return { type: "color", color: "#ffd9df", xa: 0 };
              default:
                throw new E(a);
            }
          },
          Dzc = function ({
            kS: a,
            direction: b,
            options: c,
            Zc: d,
            $f: e,
            NH: f,
            Lz: g,
            FFa: h,
            Ts: k,
            Eaa: l,
            Yqa: m,
            context: n,
          }) {
            return {
              id: "field",
              size: "1fr",
              padding: [16, 20, 10, 20],
              alignSelf: "center",
              content: o6({
                layout: "vertical",
                direction: q6(b),
                gap: 8,
                cells: c.map(({ value: p }) => {
                  var q = p.id === e;
                  const r = d.status === 1,
                    t = p.id === f,
                    v = p.id === g;
                  q =
                    r && l && n.mode !== "edit"
                      ? d.data.Fja(p.id)
                        ? 5
                        : q
                        ? 6
                        : 4
                      : n.mode === "edit"
                      ? r && d.data.Fja(p.id)
                        ? 5
                        : 4
                      : q
                      ? 1
                      : v
                      ? 3
                      : t
                      ? 2
                      : 0;
                  return {
                    id: p.id,
                    size: "auto",
                    alignSelf: "center",
                    content: {
                      ref: m.option,
                      key: p.id,
                      N: h,
                      Vm: () => a?.gqa?.(p.id),
                      onMouseEnter: () => a?.vla?.(p.id),
                      onMouseLeave: () => a?.wla?.(p.id),
                      onMouseDown: () => a?.tla?.(p.id),
                      onMouseUp: () => a?.xla?.(p.id),
                      ...Czc({ direction: b, GFa: p.label, Ts: k, state: q }),
                    },
                  };
                }),
              }),
            };
          },
          Ezc = function ({
            direction: a,
            text: b,
            FW: c,
            GW: d,
            kS: e,
            fontSize: f,
            fontFamily: g,
            fontWeight: h,
            fontStyle: k,
          }) {
            const l = m6.includes(c),
              { h: m, s: n, na: p } = __c.Yl(c);
            var q = new __c.Ql(m, n, p < 10 ? p + 6 : p - 6);
            q = __c.Zl(q);
            var r = new __c.Ql(m, n, p < 10 ? p + 10 : p - 10);
            r = __c.Zl(r);
            return {
              id: "submit",
              size: "auto",
              padding: [0, 20],
              content: kzc({
                direction: q6(a),
                Vm: e?.submit,
                onMouseEnter: e?.bEa,
                onMouseLeave: e?.cEa,
                onMouseDown: e?.aEa,
                onMouseUp: e?.dEa,
                background: {
                  type: "color",
                  color: d === 2 ? r : d === 1 ? q : c,
                  xa: e?.submit ? (l ? 0.1 : void 0) : 0.6,
                },
                N: 24,
                padding: 12,
                content: p6(b, {
                  direction: r6(a),
                  "font-size": f,
                  "font-family": g,
                  "font-weight": h,
                  "font-style": k,
                }),
              }),
            };
          },
          Fzc = function ({
            kS: a,
            direction: b,
            messages: c,
            Dx: d,
            Vp: e,
            status: f,
            Zc: g,
            $f: h,
            backgroundColor: k,
            Eaa: l,
            wU: m,
            l6: n,
            fontFamily: p,
            fontWeight: q,
            fontStyle: r,
          }) {
            if (!l || !g || !h)
              return (
                (h = e === k ? l6(e, m6) : e),
                (g =
                  g?.status === 1
                    ? g.data.xU?.type === "ANON"
                      ? c.d2()
                      : c.c2()
                    : void 0),
                [
                  Ezc({
                    direction: b,
                    text: d,
                    FW: h,
                    GW: m,
                    kS: a,
                    fontSize: n.label,
                    fontFamily: p,
                    fontWeight: q,
                    fontStyle: r,
                  }),
                  {
                    id: "quiz_status",
                    size: "auto",
                    padding: [8, 20, 10, 20],
                    content: vzc({
                      status: f,
                      statusMessage: g,
                      messages: c,
                      direction: b,
                      backgroundColor: k,
                      fontSize: n.message,
                      fontFamily: p,
                    }),
                  },
                ]
              );
            a = l6(k, m6);
            return [
              {
                id: "quiz_results_footer",
                size: "auto",
                padding: [20, 20, 24, 20],
                content: o6({
                  layout: "vertical",
                  direction: q6(b),
                  cells: [
                    {
                      id: "quiz_result",
                      size: "auto",
                      content: {
                        type: "text",
                        GF: 0,
                        fontFamily: p,
                        text: g.data.Fja(h) ? c.y4() : c.v7(),
                        fontSize: n.label,
                        fontWeight: "bold",
                        textAlign: "center",
                        direction: r6(b),
                        color: a,
                      },
                    },
                    {
                      id: "quiz_message",
                      size: "auto",
                      content: {
                        type: "text",
                        GF: 0,
                        fontFamily: p,
                        text: c.P$(),
                        fontSize: n.message,
                        xa: 0.2,
                        textAlign: "center",
                        direction: r6(b),
                        color: a,
                      },
                    },
                  ],
                }),
              },
            ];
          },
          Hzc = function (a, b, c, d, e, f, g, h) {
            const k = c.zf;
            c = c.bl;
            var l = a.qr;
            a = a.Us;
            b = b.border;
            const m = b.P8a,
              n = k.direction;
            var p = k.fields.first()?.value;
            if (!p || p.type !== "select" || !l || !a)
              return {
                ...o6({
                  layout: "vertical",
                  direction: q6(n),
                  background: { type: "color", color: "#ffffff" },
                  cells: [],
                }),
                minWidth: k.minWidth,
                minHeight: k.minHeight,
              };
            const q = n6(l),
              r = n6(a),
              t = d.DY(),
              v = c.Zc.status === 1 && c.Zc,
              w = d.gAa() && v && t === 0;
            var z = p.options.first()?.value.label.text,
              A = (O) => O?.values().next().value,
              C =
                z?.stream.Zh("font-size")["font-size"]?.values().next().value ||
                16;
            const B = A(z?.stream.Zh("font-family")["font-family"]) || k.wX,
              D =
                A(z?.stream.Zh("font-weight")["font-weight"]) ||
                __c.Nf.Sb["font-weight"];
            z =
              A(z?.stream.Zh("font-style")["font-style"]) ||
              __c.Nf.Sb["font-style"];
            A = C * Gzc;
            C *= xzc;
            d = d.xAa();
            var J = k.minWidth,
              L = k.minHeight,
              N = q6(n);
            l = k.$L
              ? void 0
              : mzc({ direction: n, text: p.label, background: l });
            p = Dzc({
              kS: lzc(e),
              direction: n,
              options: p.options,
              Zc: c.Zc,
              NH: c.NH,
              Lz: c.Lz,
              $f: d.$f,
              FFa: p.N,
              Ts: r,
              Eaa: w,
              Yqa: g,
              context: h,
            });
            e = e
              ? {
                  submit: e.submit,
                  bEa: e.bEa,
                  cEa: e.cEa,
                  aEa: e.aEa,
                  dEa: e.dEa,
                }
              : void 0;
            return {
              minWidth: J,
              minHeight: L,
              ...o6({
                layout: "vertical",
                direction: N,
                background: a,
                N: m,
                border: b,
                cells: [
                  l,
                  p,
                  ...Fzc({
                    kS: e,
                    direction: n,
                    messages: f,
                    Dx: k.footer.label,
                    Vp: q,
                    status: t,
                    Eaa: w && h.mode !== "edit",
                    Zc: v ? v : void 0,
                    $f: d.$f,
                    backgroundColor: r,
                    wU: c.wU,
                    l6: { label: A, message: C },
                    fontFamily: B,
                    fontWeight: D,
                    fontStyle: z,
                  }),
                ].filter(mb),
              }),
              ref: g.root,
            };
          },
          Izc = class {
            constructor() {
              this.type = "layout";
            }
          },
          t6 = __webpack_require__(186901),
          u6 = t6.EW,
          k6 = t6.h5,
          Jzc = t6.mJ,
          Kzc = t6.sH,
          Lzc = t6.XI;
        var Mzc = class {
            static D(a) {
              __c.M(a, { uVa: u6 });
            }
            get uVa() {
              const a = [];
              for (const b of this.list.value) {
                const c = f6(this, b);
                if (c === void 0)
                  throw new azc(
                    "undefined value found when deserializing list."
                  );
                a.push(c);
              }
              return a;
            }
            count() {
              return this.list.value.count();
            }
            toArray() {
              return this.uVa.map(({ value: a }) => a);
            }
            first(a) {
              const b = this.list.value.first(
                a ? (c) => a(f6(this, c)) : void 0
              );
              if (b != null) return f6(this, b);
            }
            last(a) {
              const b = this.list.value.last(
                a ? (c) => a(f6(this, c)) : void 0
              );
              if (b != null) return f6(this, b);
            }
            next(a, b) {
              var c = b ? (d) => b(f6(this, d)) : void 0;
              a = g6(this, a);
              c = this.list.value.next(a, c);
              if (c != null) return f6(this, c);
            }
            previous(a, b) {
              var c = b ? (d) => b(f6(this, d)) : void 0;
              a = g6(this, a);
              c = this.list.value.previous(a, c);
              if (c != null) return f6(this, c);
            }
            map(a) {
              return this.list.value.map((b, c) => a(f6(this, b), c));
            }
            filter(a) {
              return this.list.value
                .filter((b, c) => a(f6(this, b), c))
                .map((b) => f6(this, b));
            }
            forEach(a) {
              return this.list.value.forEach((b, c) => a(f6(this, b), c));
            }
            some(a) {
              return this.list.value.some((b) => a(f6(this, b)));
            }
            constructor(a, b) {
              this.$m = b;
              this.Wcb = (Mzc.D(this), new WeakMap());
              this.Ocb = new WeakMap();
              __c.x(a.type === "list");
              this.list = a;
            }
          },
          Nzc = class extends Mzc {
            replace(a, b) {
              a = g6(this, a);
              b = this.list.value.replace(a, this.$m.vl(b));
              return f6(this, b);
            }
            VH(a, b) {
              a = a != null ? g6(this, a) : void 0;
              b = this.list.value.VH(a, this.$m.vl(b));
              return f6(this, b);
            }
            hE(a, b) {
              a = a != null ? g6(this, a) : void 0;
              return this.list.value
                .hE(
                  a,
                  b.map((c) => this.$m.vl(c))
                )
                .map((c) => f6(this, c));
            }
            insertBefore(a, b) {
              a = a != null ? g6(this, a) : void 0;
              b = this.list.value.insertBefore(a, this.$m.vl(b));
              return f6(this, b);
            }
            append(a) {
              a = this.list.value.append(this.$m.vl(a));
              return f6(this, a);
            }
            prepend(a) {
              a = this.list.value.prepend(this.$m.vl(a));
              return f6(this, a);
            }
            delete(a) {
              a = g6(this, a);
              this.list.value.delete(a);
            }
            hA(a) {
              this.list.value.hA(a ? (b) => a(f6(this, b)) : void 0);
            }
            Zq(a, b) {
              a = a == null ? void 0 : g6(this, a);
              b = g6(this, b);
              this.list.value.Zq(a, b);
            }
          };
        var w6 = class {
            static string(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "string")
                  throw d === "toWidgetData"
                    ? new h6("string", c)
                    : new i6("string", c);
                return c.value;
              };
              return {
                vl: (c) => ({ type: "string", value: c }),
                nt: (c) => b(c, "toWidgetState"),
                mt: (c) => b(c, "toWidgetData"),
                Wu: (c) => b(c, "toWidgetData"),
              };
            }
            static literal(a, b) {
              if (a.length === 0)
                throw new v6(
                  "At least one value must be provided for literal types."
                );
              const c = new Set(a),
                d = (e, f) => {
                  if (e == null && b != null) return b;
                  if (e?.type !== "string" || !c.has(e.value))
                    throw f === "toWidgetData"
                      ? new h6("literal", e)
                      : new i6("literal", e);
                  return e.value;
                };
              return {
                vl: (e) => ({ type: "string", value: e }),
                nt: (e) => d(e, "toWidgetState"),
                mt: (e) => d(e, "toWidgetData"),
                Wu: (e) => d(e, "toWidgetData"),
              };
            }
            static integer(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (
                  c?.type !== "int32" ||
                  !Number.isFinite(c.value) ||
                  !Number.isInteger(c.value)
                )
                  throw d === "toWidgetData"
                    ? new h6("integer", c)
                    : new i6("integer", c);
                return c.value;
              };
              return {
                vl: (c) => {
                  if (!Number.isFinite(c) || !Number.isInteger(c))
                    throw new Ozc("integer", c);
                  return { type: "int32", value: c };
                },
                nt: (c) => b(c, "toWidgetState"),
                mt: (c) => b(c, "toWidgetData"),
                Wu: (c) => b(c, "toWidgetData"),
              };
            }
            static double(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "double" || !Number.isFinite(c.value))
                  throw d === "toWidgetData"
                    ? new h6("double", c)
                    : new i6("double", c);
                return c.value;
              };
              return {
                vl: (c) => {
                  if (!Number.isFinite(c)) throw new Ozc("double", c);
                  return { type: "double", value: c };
                },
                nt: (c) => b(c, "toWidgetState"),
                mt: (c) => b(c, "toWidgetData"),
                Wu: (c) => b(c, "toWidgetData"),
              };
            }
            static $g(a) {
              const b = (c, d) => {
                if (c == null && a != null) return a;
                if (c?.type !== "boolean")
                  throw d === "toWidgetData"
                    ? new h6("boolean", c)
                    : new i6("boolean", c);
                return c.value;
              };
              return {
                vl: (c) => ({ type: "boolean", value: c }),
                nt: (c) => b(c, "toWidgetState"),
                mt: (c) => b(c, "toWidgetData"),
                Wu: (c) => b(c, "toWidgetData"),
              };
            }
            static fill() {
              const a = (b) => {
                if (b?.type !== "fill") throw new h6("fill", b);
                return b.value;
              };
              return {
                vl: (b) => ({ type: "fill", value: b }),
                nt: (b) => {
                  if (b?.type !== "fill") throw new i6("fill", b);
                  return b.value;
                },
                mt: a,
                Wu: a,
              };
            }
            static stroke() {
              const a = (b) => {
                if (b?.type !== "stroke") throw new h6("stroke", b);
                return b.value;
              };
              return {
                vl: (b) => ({ type: "stroke", value: b }),
                nt: (b) => {
                  if (b?.type !== "stroke") throw new i6("stroke", b);
                  return b.value;
                },
                mt: a,
                Wu: a,
              };
            }
            static Rb(a) {
              const b = new Set();
              for (const d of Object.keys(a)) {
                const [e] = a[d];
                if (b.has(e))
                  throw new v6(
                    `Duplicate serialized keys "${e}" found in record schema.`
                  );
                b.add(e);
              }
              const c = (d, e) => {
                if (e?.type !== "dict") throw new h6("record", e);
                const f = {};
                for (const g of Object.keys(a)) {
                  const [h, k] = a[g],
                    l = u6(
                      () => {
                        const m = e.value.get(h);
                        return k.mt(m);
                      },
                      { keepAlive: !0 }
                    );
                  Object.defineProperty(f, g, {
                    get() {
                      return l.get();
                    },
                    set(m) {
                      d !== "readonly" &&
                        ((m = k.vl(m)),
                        m == null ? e.value.delete(h) : e.value.set(h, m));
                    },
                    enumerable: !0,
                  });
                }
                return f;
              };
              return {
                vl: (d) => {
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.vl(d[f]);
                    k != null && (e[g] = k);
                  }
                  return { type: "dict", value: new Map(Object.entries(e)) };
                },
                nt: (d) => {
                  if (d?.type !== "dict") throw new i6("record", d);
                  const e = {};
                  for (const f of Object.keys(a)) {
                    const [g, h] = a[f],
                      k = h.nt(d.value.get(g));
                    k != null && (e[f] = k);
                  }
                  return e;
                },
                mt: (d) => c("editable", d),
                Wu: (d) => c("readonly", d),
                xb: (d) => w6.Rb({ ...a, ...d }),
              };
            }
            static list(a) {
              return {
                vl: (b) => ({ type: "list", value: b.map((c) => a.vl(c)) }),
                nt: (b) => {
                  if (b?.type !== "list") throw new i6("list", b);
                  return b.value.filter(mb).map((c) => a.nt(c));
                },
                mt: (b) => {
                  if (b?.type !== "list") throw new h6("list", b);
                  return new Nzc(b, a);
                },
                Wu: (b) => {
                  if (b?.type !== "list") throw new h6("list", b);
                  return new Mzc(b, a);
                },
              };
            }
            static optional(a) {
              return {
                vl: (b) => {
                  if (b != null) return a.vl(b);
                },
                nt: (b) => {
                  if (b != null) return a.nt(b);
                },
                mt: (b) => {
                  if (b != null) return a.mt(b);
                },
                Wu: (b) => {
                  if (b != null) return a.Wu(b);
                },
              };
            }
            static union(a, b) {
              const c = new Set(Object.keys(a)),
                d = (e) => {
                  if (e?.type !== "dict") throw new h6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new h6("union", e);
                  return { Aea: a[f], Bea: g };
                };
              return {
                vl: (e) => {
                  const f = b(e);
                  return {
                    type: "dict",
                    value: new Map([
                      ["k", { type: "string", value: f }],
                      ["v", a[f].vl(e)],
                    ]),
                  };
                },
                nt: (e) => {
                  if (e?.type !== "dict") throw new i6("union", e);
                  const f = e.value.get("k")?.value,
                    g = e.value.get("v");
                  if (
                    f == null ||
                    g == null ||
                    typeof f !== "string" ||
                    !c.has(f)
                  )
                    throw new i6("union", e);
                  const { Aea: h, Bea: k } = { Aea: a[f], Bea: g };
                  return h.nt(k);
                },
                mt: (e) => {
                  const { Aea: f, Bea: g } = d(e);
                  return f.mt(g);
                },
                Wu: (e) => {
                  const { Aea: f, Bea: g } = d(e);
                  return f.Wu(g);
                },
              };
            }
          },
          v6 = class extends Error {
            constructor(a) {
              super(a);
              this.name = "SchemaError";
            }
          },
          azc = class extends v6 {
            constructor(a) {
              super(`ListError: ${a}`);
            }
          },
          h6 = class extends v6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget data`);
            }
          },
          i6 = class extends v6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of widget state`);
            }
          },
          Ozc = class extends v6 {
            constructor(a, b) {
              super(`Error transforming ${b} into type ${a} of document state`);
            }
          };
        var j6 = {
            $f: void 0,
            uJ: void 0,
            HGa: void 0,
            results: { fields: new Map() },
          },
          Pzc = {
            Zc: { status: 2 },
            ZB: new Map(),
            wU: 0,
            NH: void 0,
            Lz: void 0,
            XAa: !1,
            Twb: "unchecked",
            zy: !1,
            Zk: !1,
          };
        var Qzc = w6.Rb({
            type: ["t", w6.literal(["text2"], "text2"), "readonly"],
            text: ["te", bzc()],
          }),
          Rzc = w6.union({ text2: Qzc }, (a) => a.type),
          Szc = w6.Rb({ id: ["i", w6.string("")], label: ["l", Rzc] }),
          Tzc = w6.list(Szc),
          Uzc = w6.list(w6.string("")),
          Vzc = w6.Rb({
            id: ["i", w6.string("")],
            label: ["l", Rzc],
            u8: ["tl", w6.literal(["c", "u"], "c")],
            required: ["rq", w6.$g(!1)],
            N: ["c", w6.double(0)],
          }),
          Wzc = w6.Rb({ type: ["t", w6.literal(["r"], "r"), "readonly"] }),
          Xzc = w6.Rb({ type: ["t", w6.literal(["p"], "p"), "readonly"] }),
          Yzc = w6.Rb({ type: ["t", w6.literal(["q"], "q"), "readonly"] }),
          Zzc = w6.union({ r: Wzc, p: Xzc, q: Yzc }, (a) => a.type),
          $zc = Vzc.xb({
            type: ["t", w6.literal(["select"], "select"), "readonly"],
            variant: ["v", w6.optional(Zzc)],
            options: ["o", Tzc],
            JZ: ["m", w6.optional(w6.integer(1))],
            z4: ["co", Uzc],
          }),
          aAc = w6.Rb({ type: ["t", w6.literal(["e"], "e"), "readonly"] }),
          bAc = w6.Rb({
            type: ["t", w6.literal(["f"], "f"), "readonly"],
            WM: ["n", w6.integer(1)],
          }),
          cAc = w6.union({ e: aAc, f: bAc }, (a) => a.type),
          dAc = Vzc.xb({
            type: ["t", w6.literal(["text"], "text"), "readonly"],
            placeholder: ["p", w6.string("")],
            variant: ["v", cAc],
          }),
          eAc = w6.Rb({ type: ["t", w6.literal(["a"], "a"), "readonly"] }),
          fAc = w6.Rb({ type: ["t", w6.literal(["b"], "b"), "readonly"] }),
          gAc = w6.Rb({ type: ["t", w6.literal(["c"], "c"), "readonly"] }),
          hAc = w6.Rb({ type: ["t", w6.literal(["d"], "d"), "readonly"] }),
          iAc = w6.union({ a: eAc, b: fAc, c: gAc, d: hAc }, (a) => a.type),
          jAc = Vzc.xb({
            type: ["t", w6.literal(["number"], "number"), "readonly"],
            variant: ["v", iAc],
            min: ["a", w6.optional(w6.double())],
            max: ["b", w6.optional(w6.double())],
          }),
          kAc = w6.union(
            { select: $zc, text: dAc, number: jAc },
            (a) => a.type
          ),
          lAc = w6.list(kAc),
          mAc = w6.Rb({ label: ["l", Rzc] }),
          nAc = w6.Rb({}),
          oAc = w6.Rb({
            label: ["A", bzc()],
            u8: ["tl", w6.literal(["c", "u"])],
          }),
          pAc = w6.literal(["l", "r"], "l"),
          qAc = w6.Rb({
            minHeight: ["mh", w6.double(1)],
            minWidth: ["mw", w6.double(1)],
            type: ["t", w6.literal(["poll", "quiz"], "poll"), "readonly"],
            id: ["i", w6.string()],
            Zi: ["s", w6.string()],
            yr: ["a", w6.optional(w6.string())],
            direction: ["r", pAc],
            wX: ["d", w6.string("")],
            qr: ["pf", w6.fill()],
            Us: ["sf", w6.fill()],
            border: ["b", w6.stroke()],
            N: ["c", w6.double(0)],
            $L: ["hh", w6.$g(!1)],
            TJa: ["z", w6.$g(!0)],
            FUa: ["h", w6.optional(nAc)],
            header: ["j", w6.optional(oAc)],
            fields: ["f", lAc],
            footer: ["fo", w6.optional(mAc)],
          }),
          rAc = w6.union({ poll: qAc, quiz: qAc }, (a) => a.type);
        var fzc = Symbol("UNABLE_TO_SUBMIT");
        var sAc = {
            resultsPercentage: 0,
            yourNameWillBeShared: 1,
            incorrectLabel: 2,
            responseSaved: 3,
            submitting: 4,
            loading: 5,
            numVotes: 6,
            offline: 7,
            yourNameWontBeShared: 8,
            somethingWentWrong: 9,
            correctLabel: 10,
            live: 11,
          },
          tAc = class {
            static D(a) {
              __c.M(a, { d1: Kzc.ref });
            }
            async DBa(a) {
              const b = await a;
              k6(() => {
                const c = JSON.parse(b),
                  d = new Map();
                for (const e in c) d.set(e, Object.values(c[e]));
                this.d1 = d;
              });
            }
            ys(a) {
              return (this.d1?.get(this.document.language || "en") || [])[
                sAc[a]
              ];
            }
            y4() {
              return this.ys("correctLabel") || K("i3mNPA");
            }
            v7() {
              return this.ys("incorrectLabel") || K("As1GTA");
            }
            P$() {
              return this.ys("responseSaved") || K("xSH8Og");
            }
            t9(a) {
              const b = this.ys("numVotes");
              return b
                ? __c.Gkc(b, [a], this.document.language)
                : __c.pb("6QpLYA", [a]);
            }
            Sna(a) {
              const b = this.ys("resultsPercentage");
              return b
                ? __c.Gkc(b, [a], this.document.language)
                : __c.pb("sUWUOA", [a]);
            }
            offline() {
              return this.ys("offline") || K("nFbxIQ");
            }
            loading() {
              return this.ys("loading") || K("2Q9Q+A");
            }
            Zaa() {
              return this.ys("submitting") || K("wutQEA");
            }
            d2() {
              return this.ys("yourNameWontBeShared") || K("Gzs/9g");
            }
            c2() {
              return this.ys("yourNameWillBeShared") || K("WjcAyg");
            }
            constructor(a, b) {
              this.document = a;
              this.d1 = (tAc.D(this), void 0);
              this.DBa(b);
            }
          };
        var vAc = class extends tAc {
          constructor(a) {
            const b = __webpack_require__
              .me(282643)
              .then(() => __c.uAc)
              .then(({ OJ: c }) => c);
            super(a, b);
          }
        };
        var wAc = class {
          static D(a) {
            __c.M(a, { border: u6 });
          }
          get border() {
            const a = this.fA.zf;
            a.border.weight &&
              !a.border.color &&
              this.I &&
              this.I.error(
                "Form widget borders cannot have weight without a color"
              );
            return { weight: a.border.weight, color: a.border.color, P8a: a.N };
          }
          constructor(a, b) {
            this.fA = a;
            this.I = b;
            wAc.D(this);
          }
        };
        var xAc = class {
          static D(a) {
            __c.M(a, { qr: u6, Us: u6, Vp: u6, Ts: u6 });
          }
          get qr() {
            const a = this.fA.zf.qr.color,
              b = this.fA.zf.qr.Pa;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Pa: b.ref };
          }
          get Us() {
            const a = this.fA.zf.Us.color,
              b = this.fA.zf.Us.Pa;
            if (a) return { type: "color", color: a };
            if (b.ref) return { type: "gradient", Pa: b.ref };
          }
          get Vp() {
            if (!this.qr) return "#000000";
            switch (this.qr.type) {
              case "color":
                return this.qr.color;
              case "gradient":
                return this.qr.Pa.Bg[0].color;
              default:
                throw new E(this.qr);
            }
          }
          get Ts() {
            if (!this.Us) return "#000000";
            switch (this.Us.type) {
              case "color":
                return this.Us.color;
              case "gradient":
                return this.Us.Pa.Bg[0].color;
              default:
                throw new E(this.Us);
            }
          }
          constructor(a) {
            this.fA = a;
            xAc.D(this);
          }
        };
        var m6 = ["#000000", "#ffffff"];
        var ozc = 9 * __c.US,
          Bzc = ["#cccccc", "#333333"],
          rzc = ["#00d200", "#00ed00"],
          szc = ["#ffae00", "#ffc654"],
          tzc = ["#545454", "#c8c8c8"],
          uzc = ["#e53935", "#ef5350"],
          Gzc = (14 * __c.US) / 16,
          xzc = (9 * __c.US) / 16;
        var s6 = (a, b, c, d, e, f) =>
          __c.Jk.Cb()
            .attrs({
              "font-family": f,
              "font-size": e,
              leading: void 0,
              "text-align": "center",
              direction: r6(b),
              color: c,
            })
            .sb("\u25cf ")
            .attrs({
              "font-family": f,
              "font-size": e,
              color: d,
              "font-kerning": "normal",
              "font-feature-liga": "on",
              "font-feature-clig": "on",
              "font-feature-calt": "on",
            })
            .sb(a)
            .$q()
            .build();
        var yAc;
        yAc = ({ qCb: a, Fob: b }) => {
          const c = b.status !== 1 && a.status === 1;
          return (
            (a.status === 1 && b.status === 1 && a.data.Pva !== b.data.Pva) || c
          );
        };
        __c.CGa = {
          cob: function (a, b, c, d, e, f, g, h, k) {
            g.Wf("forms");
            const { jtb: l } = d ?? {},
              m = h.Xv("ui.rendering.form"),
              n = { root: new Izc(), option: new Izc() },
              p = new vAc(b);
            return {
              yBa: Pzc,
              $m: rAc,
              GEa: ({ fA: q }) => {
                if (l && a) {
                  var r,
                    t = Jzc(
                      () => q.zf.id,
                      () => {
                        const w = q.zf.type,
                          z = l.get({ BH: q.zf.id, dg: a, T5: c });
                        r?.unsubscribe();
                        w === "poll" &&
                          (r = z
                            .tzb({ Sub: () => q.zf.Zi })
                            .subscribe(({ results: A, Zi: C }) => {
                              k6(() => {
                                const B = new Map(q.bl.ZB);
                                B.set(C, { ...(B.get(C) ?? j6), results: A });
                                q.In({ ZB: B });
                              });
                            }));
                        z.getSettings({ L_b: () => q.zf.yr }).subscribe((A) => {
                          const C = q.bl.Zc;
                          let B = A;
                          if (
                            A.status === 1 &&
                            !q.zf.yr &&
                            q.zf.type === "quiz"
                          ) {
                            const D = q.zf.fields.first()?.value,
                              J = D?.type === "select" ? D.z4.toArray() : [];
                            B = {
                              status: 1,
                              data: {
                                lD: new Map(
                                  q.zf.fields
                                    .filter(
                                      ({ value: L }) => L.type === "select"
                                    )
                                    .map(({ value: L }) => [
                                      L.id,
                                      L.z4.toArray(),
                                    ])
                                ),
                                Fja: (L) => J.includes(L),
                                Pva: A.data.Pva,
                                xU: A.data.xU,
                                JHb: !1,
                              },
                            };
                          }
                          k6(() => {
                            q.In({ Zc: B });
                          });
                          yAc({ qCb: B, Fob: C }) &&
                            z.Asb({ Zi: q.zf.Zi, yr: q.zf.yr }).then(
                              Lzc((D) => {
                                const J = q.zf.Zi;
                                if (D.ok) {
                                  var L = new Map(q.bl.ZB);
                                  if (D.value) {
                                    D = D.value;
                                    const N =
                                      q.zf.fields.first()?.value.id ?? "";
                                    D = D.Dta.get(N);
                                    D =
                                      D?.type === 0 && D.k0.length >= 1
                                        ? D.k0[0]
                                        : void 0;
                                    L.set(J, {
                                      ...(L.get(J) ?? j6),
                                      $f: D,
                                      uJ: D,
                                    });
                                  } else
                                    L.set(J, {
                                      ...(L.get(J) ?? j6),
                                      $f: void 0,
                                      uJ: void 0,
                                    });
                                  q.In({ ZB: L, Lz: void 0 });
                                }
                              })
                            );
                        });
                      },
                      { fireImmediately: !0 }
                    ),
                    v = Jzc(
                      () => k?.status === 2,
                      Lzc((w) => {
                        q.In({ Zk: w });
                      }),
                      { fireImmediately: !0 }
                    );
                  return () => {
                    r?.unsubscribe();
                    t();
                    v();
                  };
                }
              },
              render: (q, r) => {
                const t = czc(q);
                if (l && a) {
                  var v = l.get({ BH: q.zf.id, dg: a, T5: c });
                  v = gzc(q, t, v, e, f, m);
                }
                a: {
                  const w = q.zf,
                    z = new xAc(q),
                    A = new wAc(q);
                  switch (w.type) {
                    case "poll":
                      q = yzc(z, A, q, t, v, p, n);
                      break a;
                    case "quiz":
                      q = Hzc(z, A, q, t, v, p, n, r);
                      break a;
                    default:
                      throw new E(w.type);
                  }
                }
                return q;
              },
              Yqa: n,
            };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/745daf65f5c7942e.js.map
