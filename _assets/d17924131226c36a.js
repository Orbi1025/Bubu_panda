(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
  [6712],
  {
    /***/ 152531: function (_, __, __webpack_require__) {
      __webpack_require__.n_x = __webpack_require__.n;
      const __web_req__ = __webpack_require__;
      __web_req__(905716);
      self._5f74ec40302898c5a55451c9fbd04240 =
        self._5f74ec40302898c5a55451c9fbd04240 || {};
      (function (__c) {
        var Y_;
        var i1;
        var M = __c.M;
        var Na = __c.Na;
        var FI = __c.FI;
        var G = __c.G;
        var X = __c.X;
        var W = __c.W;
        var H = __c.H;
        var rD = __c.rD;
        var Ad = __c.Ad;
        var Uc = __c.Uc;
        var me = __c.me;
        var E = __c.E;
        var u = __c.u;
        var Aa = __c.Aa;
        var y = __c.y;
        var t$b,
          u$b,
          v$b,
          x$b,
          z$b,
          y$b,
          B$b,
          G_,
          D$b,
          H_,
          H$b,
          K$b,
          P$b,
          S$b,
          J_,
          X$b,
          aac,
          I_,
          bac,
          dac,
          fac,
          hac,
          iac,
          O_,
          kac,
          Q_,
          R_,
          lac,
          S_,
          mac,
          T_,
          nac,
          U_,
          V_,
          W_,
          oac,
          X_,
          pac,
          rac,
          sac,
          tac,
          xac,
          zac,
          wac,
          yac,
          uac,
          vac,
          Aac,
          Bac,
          Cac,
          Dac,
          Eac,
          Gac,
          Mac,
          Sac,
          bbc,
          cbc,
          dbc,
          ebc,
          q0,
          r0,
          s0,
          gbc,
          hbc,
          ibc,
          t0,
          lbc,
          jbc,
          v0,
          x0,
          w0,
          mbc,
          y0,
          obc,
          qbc,
          rbc,
          tbc,
          B0,
          ubc,
          Gbc,
          Hbc,
          Ibc,
          Jbc,
          G0,
          vbc,
          C0,
          Abc,
          Dbc,
          Fbc,
          E0,
          Cbc,
          Kbc,
          sbc,
          Mbc,
          Nbc,
          Obc,
          Lbc,
          Rbc,
          Sbc,
          I0,
          fcc,
          ccc,
          acc,
          K0,
          Tbc,
          Wbc,
          Vbc,
          bcc,
          Ubc,
          gcc,
          $bc,
          Ybc,
          Xbc,
          J0,
          L0,
          jcc,
          kcc,
          lcc,
          ncc,
          mcc,
          pcc,
          O0,
          ucc,
          xcc,
          wcc,
          Nac,
          zcc,
          Vac,
          Wac,
          Xac,
          Bcc,
          Ccc,
          Dcc,
          U0,
          Ecc,
          Hcc,
          Jcc,
          W0,
          X0,
          Y0,
          Hac,
          Kcc,
          Occ,
          Qcc,
          Pcc,
          Scc,
          Rcc,
          Tcc,
          Ucc,
          Vcc,
          Zcc,
          $cc,
          bdc,
          cdc,
          ddc,
          edc;
        t$b = async function (a, b) {
          const c = await __c.Th(a.hy, { method: "GET", url: y(b.url) });
          return (0, __c.$b)(() => __c.Rra(a, b, c.body));
        };
        u$b = function (a, b) {
          b = a.Ej.get(__c.Wq(b));
          return b != null ? a.E3.get(b) : void 0;
        };
        v$b = function (a, b) {
          a.xca(b, async () => {
            if (a.VVa == null)
              throw Error("Blueprint document resources are not supported");
            const c = await a.VVa.Mq(b),
              d = (0, __c.$b)(() => __c.Sra(a, c)),
              e = a.E3.get(d) ?? (await t$b(a, d));
            return { ...d, element: e };
          });
        };
        __c.D_ = function (a) {
          return { type: 1, Component: a };
        };
        __c.E_ = function () {
          return (a) => a;
        };
        x$b = function (a) {
          a.Zd = setTimeout(() => {
            a.g8a(new w$b());
          }, 500);
        };
        z$b = async function (a, b) {
          const c = b.requestId,
            d = b.path;
          b = b.payload;
          const e = a.Q_.get(d);
          if (e) {
            a.d9.J3.send({ type: "ack", requestId: c });
            var f = setInterval(
              () => a.d9.J3.send({ type: "ack", requestId: c }),
              9e3
            );
            try {
              var g = await e(b);
              clearInterval(f);
              a.d9.J3.send({ type: "response", requestId: c, payload: g });
            } catch (k) {
              clearInterval(f);
              g = "internal_error";
              b =
                "Something went wrong on our end, if this issue persists please contact us.";
              if (k instanceof F_) {
                var h = k;
                k.code === "internal_error"
                  ? a.I.Mb(k, {
                      Qe: "Internal error in comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : ((g = k.code), (b = k.NGb));
              } else
                a.DHb
                  ? a.I.Mb(k, {
                      Qe: "Unexpected error type thrown from comms handler",
                      tags: new Map([
                        ["type", "request"],
                        ["path", d],
                      ]),
                    })
                  : a.xpb.error(k);
              g = y$b(a.d9, c, g, b);
              g.ok ||
                a.I.DQ(g.error, {
                  Qe: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
            }
            if (h != null)
              for (const k of a.Grb)
                try {
                  k(h);
                } catch (l) {
                  a.I.eK(l, { Qe: "Error executing errorObserver" });
                }
          } else
            (h = y$b(
              a.d9,
              c,
              "internal_error",
              `No request handler configured for path: "${d}".`
            )),
              h.ok ||
                a.I.DQ(h.error, {
                  Qe: "unable to send error response",
                  tags: new Map([
                    ["type", "request"],
                    ["path", d],
                  ]),
                });
        };
        y$b = function (a, b, c, d) {
          return a.J3.send({
            type: "error",
            requestId: b,
            code: c,
            message: d,
          });
        };
        B$b = function ({ src: a, srcdoc: b, sandbox: c }) {
          if (b.length !== 0 || !c.contains("allow-same-origin")) return A$b;
          a = new URL(a).origin;
          return a === "null" ? A$b : { EMa: a, A9a: a };
        };
        G_ = async function (
          a,
          b,
          c,
          { addEventListener: d, removeEventListener: e } = window,
          f = B$b,
          g
        ) {
          const h = new C$b(6e4),
            k = f(c),
            l = c.contentWindow;
          if (!l)
            throw new F_({
              code: "internal_error",
              message: "contentWindow is missing from iFrame",
            });
          c = ({ data: m, source: n, origin: p }) => {
            const q = m?.source,
              r = m?.clientId;
            q?.startsWith("react-") ||
              (p !== k.EMa
                ? D$b(p) ||
                  b.info("received message event from an unexpected origin", {
                    extra: new Map([
                      ["expected", k.EMa],
                      ["actual", p],
                    ]),
                  })
                : n !== l
                ? n !== window &&
                  b.info("source and content window do not match", {
                    extra: new Map([["data.source", q]]),
                  })
                : ((m = m
                    ? m.source
                      ? m.source !== "iframe"
                        ? Aa("invalid source")
                        : m.clientId !== g
                        ? Aa("unknown client id")
                        : (0, __c.za)()
                      : Aa("'source' is missing in MessageEvent data object")
                    : Aa("missing 'data' field in MessageEvent")),
                  m.ok
                    ? (l.postMessage({ source: "parent", clientId: r }, k.A9a, [
                        a,
                      ]),
                      h.resolve(void 0))
                    : b.dK(m.error, { extra: new Map([["data.source", q]]) })));
          };
          d("message", c);
          try {
            await h.promise();
          } finally {
            e("message", c);
          }
        };
        D$b = function (a) {
          return E$b.some((b) => a.endsWith(b));
        };
        H_ = function (a, b, c, d, e) {
          a.handle(b, async (f) => {
            if (f === void 0)
              throw new F_({
                code: "internal_error",
                message: `${b}: request cannot be undefined.`,
              });
            f = c.za(f);
            f = await d(f);
            if (e) return e.Ea(f);
          });
        };
        H$b = function (a, b) {
          H_(a, "INIT_DATA", F$b, (c) => b.pvb(c), G$b);
        };
        K$b = async function (a, b) {
          a = await a.aA.request("SET_EDITING_CONFIG", I$b.Ea(b));
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${"SET_EDITING_CONFIG"} request: ${
                a.error
              }`
            );
          if (a.value == null)
            throw Error("SET_EDITING_CONFIG: Result cannot be empty");
          return J$b.za(a.value);
        };
        P$b = function (a, b) {
          H_(a, "SELECTION_CHANGED", L$b, (c) => b.zvb(c), M$b);
          H_(a, "TEXT_CONTENT_CHANGED", N$b, (c) => b.Bvb(c), O$b);
        };
        S$b = async function (a, b) {
          a = await a.aA.request("RENDER_ELEMENT", Q$b.Ea(b));
          a = I_(a, "RENDER_ELEMENT");
          return R$b.za(a);
        };
        J_ = async function (a, b) {
          a = await a.aA.request("SET_CAPABILITY", T$b.Ea(b));
          a = I_(a, "SET_CAPABILITY");
          return U$b.za(a);
        };
        X$b = async function (a, b) {
          a = await a.aA.request("SET_EDIT_PANEL_VALUE", V$b.Ea(b));
          a = I_(a, "SET_EDIT_PANEL_VALUE");
          return W$b.za(a);
        };
        aac = function (a, b) {
          H_(a, "SET_CONFIG", Y$b, (c) => b.Avb(c), Z$b);
          H_(a, "RESIZE_EVENT", $$b, (c) => b.uvb(c));
        };
        I_ = function (a, b) {
          if (!a.ok)
            throw Error(
              `Encountered an error while sending ${b} request: ${a.error}`
            );
          if (a.value == null) throw Error(`${b}: Result cannot be empty`);
          return a.value;
        };
        bac = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new K_(c, b);
          await G_(d, b, a, window, void 0, "canva-code-data-sdk");
          return { aA: e };
        };
        dac = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new K_(c, b);
          await G_(d, b, a, window, void 0, "canva-code-element-sdk");
          return { aA: e, zqb: new cac(e) };
        };
        fac = async function (a, b) {
          const { port1: c, port2: d } = new MessageChannel(),
            e = new K_(c, b);
          await G_(d, b, a, window, void 0, "canva-code-editing-sdk");
          return { aA: e, emitter: new eac(e) };
        };
        hac = function ({ De: a, yp: b, Gq: c, Ta: d, I: e }) {
          const f = new gac(e),
            g = (h, k) =>
              e.error(h, {
                Qe: "codelet: ",
                extra: new Map(Object.entries(k)),
              });
          return L_((h) => {
            const k = M_(
              (l) => {
                f.anb(l, h.fN);
              },
              [h.fN]
            );
            return N_(__c.dy, {
              url: h.url,
              store: b,
              Go: c,
              GD: g,
              Ta: d,
              KN: a > 10,
              Gi: h.Gi || !1,
              AI: k,
              Jy: h.Jy,
            });
          });
        };
        iac = function ({ De: a, yp: b, Gq: c, Ta: d, I: e }) {
          const f = new gac(e),
            g = (h, k) =>
              e.error(h, {
                Qe: "codelet2: ",
                extra: new Map(Object.entries(k)),
              });
          return L_(({ url: h, Gi: k, fN: l, Jy: m }) => {
            const n = M_(
              (p) => {
                f.$mb(p, l);
              },
              [l]
            );
            return N_(__c.dy, {
              url: h,
              store: b,
              Go: c,
              GD: g,
              Ta: d,
              KN: a > 10,
              Gi: k || !1,
              AI: n,
              Jy: m,
            });
          });
        };
        O_ = function () {
          throw Error("ref not found");
        };
        kac = function (a, b, c) {
          return new jac(a, b, c);
        };
        __c.P_ = function () {
          return (a) => a;
        };
        Q_ = function (a, b) {
          return b.map((c) => ({ type: a, id: c.id, version: c.version }));
        };
        R_ = function (a) {
          return { kind: 0, JN: a };
        };
        lac = function () {
          return { kind: 1 };
        };
        S_ = function (a) {
          return { kind: 3, range: a };
        };
        mac = function (a) {
          return { kind: 2, range: a };
        };
        T_ = function (...a) {
          return { kind: 4, values: new Set(a) };
        };
        nac = function (a) {
          return { kind: 5, itemType: a };
        };
        U_ = function (a) {
          return { kind: 7, name: a };
        };
        V_ = function (a) {
          return { kind: 8, itemType: a };
        };
        W_ = function (a) {
          return { kind: 10, fields: a };
        };
        oac = function (a, ...b) {
          return { kind: 11, FVa: a, rg: b };
        };
        X_ = function (a, b, c) {
          return (d, ...e) => ({ key: d, yJa: a, $E: b, type: c(...e) });
        };
        Y_ = __c.Y_ = function (a) {
          const b = new Set();
          for (const c of Object.values(a))
            u(!b.has(c.key), "duplicate key: {}", c.key), b.add(c.key);
          return a;
        };
        pac = function (a) {
          switch (a.kind) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
              return !1;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              return !0;
            default:
              throw new E(a);
          }
        };
        __c.Z_ = function (a) {
          return () => ({ ...qac, ...a });
        };
        rac = function (a, b) {
          a = { ...a.xX };
          b.fb.every((c) => !!c.fill.te.ref?.image && !!c.fill.te.ref?.video) &&
            (a.Nt = !0);
          return a;
        };
        sac = function (a, b) {
          a = { ...a.xX };
          b.ub.every((c) => !!c.te.ref?.text) && (a.Nt = !0);
          return a;
        };
        tac = function (a, b) {
          switch (b.type) {
            case "rect":
              return (
                (a = { ...a.xX }),
                b.fill.te.ref?.image && b.fill.te.ref?.video && (a.Nt = !0),
                a
              );
            case "shape":
              return rac(a, b);
            case "text":
              return (a = { ...a.xX }), b.te.ref?.text && (a.Nt = !0), a;
            case "chart":
              return { ...a.xX };
            case "line":
              return sac(a, b);
            case "grid":
              return { ...a.xX };
            default:
              throw new E(b);
          }
        };
        xac = function (a, b) {
          return a.e.classes.n2.create(
            {},
            {
              U: {
                image: a.e.computed(() => uac(a.te, b.image, b.te.ref?.image)),
                video: a.e.computed(() => vac(a.te, b.video, b.te.ref?.video)),
                Pa: b.Pa,
              },
              attributes: wac(b),
            }
          );
        };
        zac = function (a, b) {
          return { ...yac(a, b), N: () => b.N };
        };
        wac = function (a) {
          return {
            Rl: () => a.Rl,
            color: () => a.color,
            xa: () => a.xa,
            locked: () => a.locked,
            lg: () => a.lg,
            Sk: () => a.Sk,
            Vc: () => a.Vc,
            flipX: () => a.flipX,
            flipY: () => a.flipY,
          };
        };
        yac = function (a, b) {
          return {
            height: () => b.height,
            width: () => b.width,
            top: () => b.top,
            left: () => b.left,
            rotation: () => b.rotation,
            Cg: () => tac(a.C1a, b),
            locked: !0,
          };
        };
        uac = function (a, b, c) {
          const d = c ? a.te?.get(c) : void 0;
          return {
            ref: (d && Aac(d, "image_fill"))?.image.ref ?? b.ref,
            set: (e) =>
              Bac(a, { type: "image_fill", value: { ...__c.tD, image: e } }, c),
          };
        };
        vac = function (a, b, c) {
          const d = c ? a.te?.get(c) : void 0;
          return {
            ref: (d && Aac(d, "video_fill"))?.video.ref ?? b.ref,
            set: (e) =>
              Bac(a, { type: "video_fill", value: { ...__c.tD, video: e } }, c),
          };
        };
        Aac = function (a, b) {
          if (a.type !== b)
            throw Error(`Expected override type ${b} but got ${a.type}`);
          return a.value;
        };
        Bac = function (a, b, c) {
          if (!c)
            throw Error(
              "No override key is available, but this is being set on an instance. This is likely an error with the locking logic."
            );
          a.te.set(c, b);
        };
        Cac = async function (a, b) {
          [a] = await __c.Esa(a, [b]);
          return new $_({ id: b.id, url: a.fonts[0].files[0].url });
        };
        Dac = async function (a, b, c) {
          a = await Cac(a, c);
          return J_(b, a);
        };
        Eac = async function (a, b, c, d, e, f, g) {
          const h = b.QXa.ref?.first(),
            k = a.Ra;
          c = await S$b(c, {
            config: b.config,
            Pha: k != null && h != null ? await Cac(k, h) : void 0,
          });
          a.config.RX?.Meb({ ...c, xR: c.xR?.size }, b, d, e, f, g);
        };
        Gac = function (a, b) {
          const c = new Map();
          return Fac(
            () => {
              const d = new Map();
              a.config.forEach((e, f) => {
                let g;
                const h = c.get(f);
                e.textContent !== h?.textContent &&
                  (g = { ...(g ?? new a0({})), textContent: e.textContent });
                e.backgroundColor !== h?.backgroundColor &&
                  (g = {
                    ...(g ?? new a0({})),
                    backgroundColor: e.backgroundColor,
                  });
                g && d.set(f, g);
                c.set(f, { ...e });
              });
              return d;
            },
            async (d) => K$b(b, new I$b({ config: d })),
            { fireImmediately: !0 }
          );
        };
        Mac = function (a) {
          function b(f, g) {
            var h = c;
            g = g();
            u(!h.$$.has(f));
            g = { document: Hac(h.LTa(f, g.document)), G: Hac(h.LTa(f, g.G)) };
            h.$$.set(f, g);
            return { id: f, $m: g };
          }
          const c = a.qNa,
            { dha: d = __c.sc("c79472f0", !1) } = a,
            e = a.AXb ?? __c.sc("1d0cd616", !1);
          return {
            qv: b("w:wnJF5T87v", Iac),
            Gga: b("w:xB9fK2LmQ", Jac),
            AX: a.hya
              ? Promise.all([
                  __webpack_require__.me(270376).then(() => __c.b0),
                  __webpack_require__.me(309241).then(() => __c.c0),
                  __webpack_require__.me(726606).then(() => __c.d0),
                  __webpack_require__.me(555219).then(() => __c.e0),
                  __webpack_require__.me(756388).then(() => __c.f0),
                  __webpack_require__.me(516583).then(() => __c.g0),
                  __webpack_require__.me(93698).then(() => __c.h0),
                  __webpack_require__.me(295247).then(() => __c.i0),
                  __webpack_require__.me(934200).then(() => __c.j0),
                  __webpack_require__.me(308710).then(() => __c.k0),
                ]).then(([f, g, h, k, l, m, n, p, q, r]) => ({
                  Xfa: b("w:cm9wgGptP", f.ni),
                  Zfa: b("w:yLMS4dWnl", g.ni),
                  $fa: b("w:2flp30CGQ", h.ni),
                  aga: b("w:1Nv6K6Dtv", k.ni),
                  bga: b("w:5Nv6K6Dtv", l.ni),
                  cga: b("w:6Nv6K6Dtv", m.ni),
                  dga: b("w:7Nv6K6Dtv", n.ni),
                  ega: b("w:8Nv6K6Dtv", p.ni),
                  fga: b("w:9Nv6K6Dtv", q.ni),
                  Yfa: b("w:sSrc7m4Q3", r.ni),
                }))
              : void 0,
            bD: b("w:JR4G8hDDg", Kac),
            Yea: b("w:KS5H9iEEh", Lac),
            form: d
              ? __webpack_require__
                  .me(313335)
                  .then(() => __c.l0)
                  .then((f) => b("widget:form", f.ni))
              : void 0,
            SZ: a.pya
              ? __webpack_require__
                  .me(870165)
                  .then(() => __c.m0)
                  .then((f) => b("w:K7mQ9xR3p", f.ni))
              : void 0,
            scene: a.uya
              ? __webpack_require__
                  .me(666647)
                  .then(() => __c.n0)
                  .then((f) => b("w:2pbXJMtm1", f.ni))
              : void 0,
            button: e
              ? __webpack_require__
                  .me(868015)
                  .then(() => __c.o0)
                  .then((f) => b("w:PQccHDsCJ", f.ni))
              : void 0,
          };
        };
        Sac = function (a) {
          function b({ id: e, $m: f }, g) {
            var h = d;
            g = g();
            const k = y(h.cIa.$$.get(e));
            u(k.G === f.G);
            u(!h.PTa.has(e));
            f = Nac(e, g, f);
            h.PTa.set(e, f);
            return f;
          }
          const c = a.rNa,
            d = a.pNa;
          return {
            AX: c.AX
              ? Promise.all([
                  c.AX,
                  __webpack_require__.me(270376).then(() => __c.b0),
                  __webpack_require__.me(309241).then(() => __c.c0),
                  __webpack_require__.me(726606).then(() => __c.d0),
                  __webpack_require__.me(555219).then(() => __c.e0),
                  __webpack_require__.me(756388).then(() => __c.f0),
                  __webpack_require__.me(516583).then(() => __c.g0),
                  __webpack_require__.me(93698).then(() => __c.h0),
                  __webpack_require__.me(295247).then(() => __c.i0),
                  __webpack_require__.me(934200).then(() => __c.j0),
                  __webpack_require__.me(308710).then(() => __c.k0),
                ]).then(([e, f, g, h, k, l, m, n, p, q, r]) => ({
                  Xfa: b(e.Xfa, f.mi),
                  Zfa: b(e.Zfa, g.mi),
                  $fa: b(e.$fa, h.mi),
                  aga: b(e.aga, k.mi),
                  bga: b(e.bga, l.mi),
                  cga: b(e.cga, m.mi),
                  dga: b(e.dga, n.mi),
                  ega: b(e.ega, p.mi),
                  fga: b(e.fga, q.mi),
                  Yfa: b(e.Yfa, r.mi),
                }))
              : void 0,
            scene: c.scene
              ? Promise.all([
                  c.scene,
                  __webpack_require__.me(666647).then(() => __c.n0),
                ]).then(([e, f]) => b(e, f.mi))
              : void 0,
            button: c.button
              ? Promise.all([
                  c.button,
                  __webpack_require__.me(868015).then(() => __c.o0),
                ]).then(([e, f]) => b(e, f.mi))
              : void 0,
            bD: b(c.bD, Oac),
            Yea: b(c.Yea, Pac),
            form: c.form
              ? Promise.all([
                  c.form,
                  __webpack_require__.me(313335).then(() => __c.l0),
                ]).then(([e, f]) => b(e, f.mi))
              : void 0,
            qv: b(c.qv, Qac),
            Gga: b(c.Gga, Rac),
            SZ: c.SZ
              ? Promise.all([
                  c.SZ,
                  __webpack_require__.me(870165).then(() => __c.m0),
                ]).then(([e, f]) => b(e, f.mi))
              : void 0,
          };
        };
        bbc = function (a) {
          function b({ ui: h, Jo: k, Md: l, IJ: m = "default" }) {
            const n = k.id;
            k = k.$m;
            h = l({
              oQ: { ...f, $a: e.Xv(`widgets.rendering.clients.${m}`) },
              ui: h,
            });
            l = y(d.cIa.$$.get(n));
            u(l.G === k.G);
            u(!d.L$.has(n));
            Tac.has(n) || (__c.HR.set(n, Uac), Tac.add(n));
            const { Brb: p, EM: q } = Vac(d, k, h);
            l = Wac(d, k, h, q);
            h = {
              G: p,
              email: l,
              exports: h.exports,
              metadata: h.metadata,
              EBb: Xac(k, h.metadata),
              EM: q,
              xga: h.xga,
            };
            d.L$.set(n, h);
            return { id: n, $m: k, xHa: h, IJ: m };
          }
          const c = a.rNa,
            d = a.wca,
            e = a.kf,
            f = a.oQ,
            g = a.ui;
          return {
            qv: b({
              ui: { EG: g.EG, UC: g.UC },
              Jo: c.qv,
              Md: Yac,
              IJ: "blueprint",
            }),
            Gga: b({
              ui: { EG: g.EG },
              Jo: c.Gga,
              Md: Zac,
              IJ: "documentBlueprint",
            }),
            AX: c.AX
              ? Promise.all([
                  c.AX,
                  __webpack_require__.me(270376).then(() => __c.b0),
                  __webpack_require__.me(309241).then(() => __c.c0),
                  __webpack_require__.me(726606).then(() => __c.d0),
                  __webpack_require__.me(555219).then(() => __c.e0),
                  __webpack_require__.me(756388).then(() => __c.f0),
                  __webpack_require__.me(516583).then(() => __c.g0),
                  __webpack_require__.me(93698).then(() => __c.h0),
                  __webpack_require__.me(295247).then(() => __c.i0),
                  __webpack_require__.me(934200).then(() => __c.j0),
                  __webpack_require__.me(308710).then(() => __c.k0),
                ]).then(([h, k, l, m, n, p, q, r, t, v, w]) => ({
                  Xfa: b({ ui: void 0, Jo: h.Xfa, Md: k.Md }),
                  Zfa: b({ ui: void 0, Jo: h.Zfa, Md: l.Md }),
                  $fa: b({ ui: void 0, Jo: h.$fa, Md: m.Md }),
                  aga: b({ ui: void 0, Jo: h.aga, Md: n.Md }),
                  bga: b({ ui: void 0, Jo: h.bga, Md: p.Md }),
                  cga: b({ ui: void 0, Jo: h.cga, Md: q.Md }),
                  dga: b({ ui: void 0, Jo: h.dga, Md: r.Md }),
                  ega: b({ ui: void 0, Jo: h.ega, Md: t.Md }),
                  fga: b({ ui: void 0, Jo: h.fga, Md: v.Md }),
                  Yfa: b({ ui: void 0, Jo: h.Yfa, Md: w.Md }),
                }))
              : void 0,
            bD: b({
              ui: { Fra: g.Fra, Ra: g.Ra, mC: g.mC },
              Jo: c.bD,
              Md: $ac,
              IJ: "codelet",
            }),
            Yea: b({ ui: { Gra: g.Gra }, Jo: c.Yea, Md: abc, IJ: "codelet2" }),
            form: c.form
              ? Promise.all([
                  c.form,
                  __webpack_require__.me(313335).then(() => __c.l0),
                  g.iM?.(),
                ]).then(([h, k, l]) =>
                  b({ ui: { ktb: l, DD: g.DD }, Jo: h, Md: k.Md, IJ: "form" })
                )
              : void 0,
            SZ: c.SZ
              ? Promise.all([
                  c.SZ,
                  __webpack_require__.me(870165).then(() => __c.m0),
                ]).then(([h, k]) =>
                  b({ ui: void 0, Jo: h, Md: k.Md, IJ: "navigationMenu" })
                )
              : void 0,
            scene: c.scene
              ? Promise.all([
                  c.scene,
                  __webpack_require__.me(666647).then(() => __c.n0),
                ]).then(([h, k]) =>
                  b({ ui: { Zy: g.Zy }, Jo: h, Md: k.Md, IJ: "scene" })
                )
              : void 0,
            button: c.button
              ? Promise.all([
                  c.button,
                  __webpack_require__.me(868015).then(() => __c.o0),
                ]).then(([h, k]) =>
                  b({ ui: void 0, Jo: h, Md: k.Md, IJ: "button" })
                )
              : void 0,
          };
        };
        cbc = function (a) {
          var b = { document: void 0, G: void 0 };
          const c = new Map();
          for (const d in b) a[d].ZK.forEach((e, f) => c.set(f, e));
          return {
            ZK: c,
            decode: (d) => {
              const e = new Map(),
                f = {};
              for (const g in d) {
                const h = a[g].decode(d[g]);
                h.WHa.forEach((k, l) => e.set(l, k));
                f[g] = h.data;
              }
              return { WHa: e, data: f };
            },
            encode: (d) => me(b, (e, f) => a[f].encode(d[f])),
          };
        };
        dbc = function (a) {
          return () => a;
        };
        ebc = function (a) {
          return a();
        };
        q0 = function (a, b, c) {
          return new p0([a], b, c);
        };
        r0 = function (a, b, c, d) {
          return new p0([a, b], c, d);
        };
        s0 = function (a, b, c, d) {
          return new fbc(a, b, c, d);
        };
        gbc = function (a, b) {
          return b(a);
        };
        hbc = function (a) {
          return (b, c) => ({ kind: 2, name: a, args: [b, c] });
        };
        ibc = function (a) {
          return (b) => ({ kind: 3, name: a, args: b });
        };
        t0 = function (a, b) {
          return a === b || b.map((c) => a.VBa(jbc(c)));
        };
        lbc = function (a, b) {
          return a.iEa(b).map((c) => new kbc(c, (d) => d.props[b]));
        };
        jbc = function (a) {
          u(a instanceof u0);
          return a;
        };
        v0 = function (a) {
          const b = new WeakMap();
          return function (c) {
            let d = b.get(c);
            d == null && ((d = a.call(this, c)), b.set(c, d));
            return d;
          };
        };
        x0 = function (a, b) {
          if (a === b) return !0;
          switch (typeof a) {
            case "string":
            case "number":
            case "boolean":
            case "undefined":
              return !1;
            case "object":
              if (typeof b !== "object" || a.kind !== b.kind) return !1;
              switch (a.kind) {
                case "array":
                  return b.kind === "array" && w0(a.items, b.items);
                case "set":
                  var c;
                  if ((c = b.kind === "set"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : w0([...a], [...b]));
                  return c;
                case "map":
                  if ((c = b.kind === "map"))
                    (a = a.items),
                      (b = b.items),
                      (c =
                        a === b
                          ? !0
                          : a.size !== b.size
                          ? !1
                          : w0(
                              [...a.keys(), ...a.values()],
                              [...b.keys(), ...b.values()]
                            ));
                  return c;
                case "record":
                  return b.kind === "record" && mbc(a.fields, b.fields);
                case "instance":
                  return b.kind === "instance" && a.instance === b.instance;
                default:
                  throw new E(a);
              }
            default:
              throw new E(a);
          }
        };
        w0 = function (a, b) {
          if (a === b) return !0;
          if (a.length !== b.length) return !1;
          for (let c = 0; c < a.length; c++) if (!x0(a[c], b[c])) return !1;
          return !0;
        };
        mbc = function (a, b) {
          if (a === b) return !0;
          const c = Object.keys(a),
            d = Object.keys(b),
            e = new Set([...c, ...d]);
          if (c.length !== e.size || d.length !== e.size) return !1;
          for (const f of e) if (!x0(a[f], b[f])) return !1;
          return !0;
        };
        y0 = function (a) {
          return typeof a === "string" ? JSON.stringify(a) : String(a);
        };
        obc = function (a, b) {
          return a.map((c) => b.map((d) => nbc[0](c, d)));
        };
        qbc = function (a, b, c) {
          return b.map((d) => pbc[a](d, c));
        };
        rbc = function (a, b) {
          return new z0(new A0(new Map(b), a.vars), a.v6);
        };
        tbc = function (a, b, c) {
          for (const [e, f] of c.v6) {
            var d = f.params.map(([g, h]) => [g, a.types.evaluate(h)]);
            d = sbc(b, d, (g) => B0(a, g, f.body));
            b = new z0(b.vars, b.v6.define(e, d));
          }
          return B0(a, b, c.body);
        };
        B0 = function (a, b, c) {
          switch (c.kind) {
            case 1:
              return ubc(c.value);
            case 2:
              const f = c.args.map((q) => B0(a, b, q));
              c = c.name;
              return typeof c === "string"
                ? b.v6.resolve(c).map((q) => vbc(q, f))
                : wbc[c].map((q) => C0(q, f));
            case 3:
              const g = c.args.map((q) =>
                q.kind !== 13 ? new xbc(B0(a, b, q)) : new ybc(B0(a, b, q.e1b))
              );
              c = c.name;
              switch (c) {
                case 0:
                case 1:
                  var d = g.map((q) =>
                    q.sza(
                      (r) => r.type,
                      (r) => r.type.vS()
                    )
                  );
                  return D0.union(...d)
                    .map(zbc[c])
                    .map((q) => Abc(q, g));
                default:
                  return Bbc[c].map((q) => Abc(q, g));
              }
            case 4:
              d = c.name;
              var e = c.param;
              const h = c.body,
                k = B0(a, b, c.$W);
              c = k.type.vS();
              const l = sbc(b, [[e, c]], (q) => B0(a, q, h));
              return qbc(d, c, l.resultType).map((q) => Cbc(q, k, l));
            case 5:
              const m = c.entries.map(([q, r]) => [B0(a, b, q), B0(a, b, r)]);
              c = D0.union(...m.map(([q]) => q.type));
              d = D0.union(...m.map(([, q]) => q.type));
              if (!t0(c, D0.primitive))
                throw Error(`key type is not a primitive: ${c}`);
              return obc(c, d).map((q) => Dbc(q, m));
            case 6:
              const n = me(c.fields, (q) => B0(a, b, q));
              c = me(n, (q) => q.type);
              return (0, Ebc[0])(c).map((q) => Fbc(q, n));
            case 7:
              d = a.types.resolve(c.name);
              if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
              const p = B0(a, b, { kind: 6, fields: c.args });
              return d.mCb.map((q) => C0(q, [p], { Op: !0 }));
            case 8:
              return (d = B0(a, b, c.base)), Gbc(d, c.l9b);
            case 9:
              return Hbc(b, c.name);
            case 10:
              return (d = Uc(c.defs, (q) => B0(a, b, q))), Ibc(a, b, d, c.body);
            case 11:
              return (
                (d = B0(a, b, c.test).as(D0.$g)),
                (e = B0(a, b, c.aVb)),
                (c = B0(a, b, c.alternate)),
                Jbc(d, e, c)
              );
            case 12:
              return B0(a, b, c.body).computed();
            default:
              throw new E(c);
          }
        };
        ubc = function (a) {
          switch (typeof a) {
            case "string":
              return E0(D0.string, a);
            case "number":
              return E0(D0.number, a);
            case "boolean":
              return E0(D0.$g, a);
            case "undefined":
              return E0(D0.undefined, a);
            default:
              throw new E(a);
          }
        };
        Gbc = function (a, b) {
          return a.map((c) =>
            lbc(c, b).map(({ type: d, get: e }) => C0(new p0([c], d, e), [a]))
          );
        };
        Hbc = function (a, b) {
          return a.vars.resolve(b).map((c) => F0.of(c, (d) => d.resolve(b)));
        };
        Ibc = function (a, b, c, d) {
          const e = Uc(c, (g) => g.type),
            f = Uc(c, (g) => g.evaluate);
          return Kbc(B0(a, rbc(b, e), d), (g) => {
            const h = Uc(f, (k) => k(g));
            return new A0(new Map(h), g);
          });
        };
        Jbc = function (a, b, c) {
          return b.map((d, e) =>
            c.map((f, g) => {
              f = D0.union(d, f);
              return F0.of(f, (h) => {
                const k = a(h),
                  l = e(h),
                  m = g(h);
                return () => (k() ? l() : m());
              });
            })
          );
        };
        G0 = function (a) {
          return (b) => b(a);
        };
        vbc = function ({ Mma: a, resultType: b, evaluate: c }, d) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const e = Lbc(a, (f, g) => d[g].as(f));
          return F0.of(b, (f) => {
            const g = e.map(G0(f));
            return c(f)(...g);
          });
        };
        C0 = function ({ Mma: a, resultType: b, apply: c }, d, e) {
          if (d.length !== a.length)
            throw Error(`expected ${a.length} arguments, but got ${d.length}`);
          const f = Lbc(a, (g, h) => d[h].as(g));
          return F0.of(b, (g) => {
            g = f.map(G0(g));
            return Mbc(e?.Op ? Nbc(c) : c, g);
          });
        };
        Abc = function ({ DFb: a, resultType: b, apply: c }, d) {
          let e;
          const f = d.map((g) =>
            g.oua(
              (h) => h.as(a),
              (h) => h.as(e ?? (e = D0.$W(a)))
            )
          );
          return new F0(b, (g) => {
            const h = G0(g),
              k = f.map((l) => l.oua(h, h));
            return () => {
              const l = [];
              k.forEach((m) => {
                m.sza(
                  (n) => l.push(n()),
                  (n) => l.push(...n())
                );
              });
              return c(l);
            };
          });
        };
        Dbc = function (
          { keyType: a, valueType: b, resultType: c, apply: d },
          e
        ) {
          const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
          return new F0(c, (g) => {
            const h = f.map(([k, l]) => [k(g), l(g)]);
            return () => d(h.map(([k, l]) => [k(), l()]));
          });
        };
        Fbc = function ({ jkb: a, resultType: b, apply: c }, d) {
          const e = Object.keys(a).filter((g) => !d.hasOwnProperty(g));
          if (e.length) throw Error(`too few arguments (missing ${e})`);
          const f = Obc(a, (g, h) => d[h].as(g));
          return new F0(b, (g) => {
            const h = me(f, G0(g));
            return () => {
              var k = me(h, ebc);
              return c(k);
            };
          });
        };
        E0 = function (a, b) {
          const c = dbc(b);
          return new F0(a, () => c);
        };
        Cbc = function (
          { itemType: a, Ekb: b, resultType: c, reduce: d },
          e,
          f
        ) {
          const g = f.as([a], b),
            h = e.as(D0.$W(a));
          return new F0(c, (k) => {
            const l = h(k),
              m = g(k),
              n = Nbc((p) => {
                p = p.map(dbc);
                return [p, p.map(m)];
              });
            return () => {
              const [p, q] = n(l());
              return d(p, q);
            };
          });
        };
        Kbc = function (a, b) {
          const c = a.evaluate;
          return new F0(a.type, (d) => c(b(d)));
        };
        sbc = function (a, b, c) {
          const d = b.map((f) => f[0]),
            e = b.map((f) => f[1]);
          return gbc(e, (f) =>
            c(rbc(a, new Map(b))).map(
              (g, h) =>
                new Pbc(f, g, (k) => (...l) => {
                  const m = new Map(d.map((n, p) => [n, l[p]]));
                  return h(new A0(new Map(m), k));
                })
            )
          );
        };
        Mbc = function (a, b) {
          switch (b.length) {
            case 0:
              return a;
            case 1:
              const [c] = b;
              return () => a(c());
            case 2:
              const [d, e] = b;
              return () => a(d(), e());
            default:
              return () => {
                var f = b.map(ebc);
                return a(...f);
              };
          }
        };
        Nbc = function (a) {
          let b;
          return (...c) => {
            if (
              b &&
              b.Veb.length === c.length &&
              b.Veb.every((e, f) => H0.nh(e, c[f]))
            )
              return b.v;
            const d = a(...c);
            b = { Veb: c, v: d };
            return d;
          };
        };
        Obc = function (a, b) {
          return me(a, b);
        };
        Lbc = function (a, b) {
          return a.map(b);
        };
        Rbc = function (a, b, c) {
          return new Qbc(a, b, c);
        };
        Sbc = function (a, b) {
          return [...a].map(b)[Symbol.iterator]();
        };
        I0 = function (a, b, c, d) {
          if (d == null) throw a.error(b.JL(c), "not found");
          return d;
        };
        fcc = function (a) {
          function b(r) {
            return m[r.kind](r);
          }
          const c = a.types,
            d = a.values;
          class e {
            static of(r, t, v, w, z, A) {
              return new e(r, v, w, Tbc(z, Ubc(t)), Vbc(A, Ubc(t)));
            }
            map(r) {
              return r(this);
            }
            validate(r) {
              return r
                ? new e(
                    this.dataType,
                    this.Yba,
                    this.yba,
                    Wbc(this.decode, r),
                    Tbc(this.encode, r)
                  )
                : this;
            }
            constructor(r, t, v, w, z) {
              this.dataType = r;
              this.Yba = t;
              this.yba = v;
              this.decode = w;
              this.encode = z;
            }
          }
          const f = e.of(
              { kind: 0 },
              "string",
              c.string,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "string", value: v })
            ),
            g = e.of(
              { kind: 1 },
              "boolean",
              c.$g,
              (r) => r,
              (r, t, v) => v.value,
              (r, t, v) => ({ type: "boolean", value: v })
            ),
            h = e
              .of(
                { kind: 2 },
                "double",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "double", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isFinite(v))
                  throw r.error(t, `number is not finite: ${v}`);
              }),
            k = e
              .of(
                { kind: 3 },
                "int32",
                c.number,
                (r) => r,
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "int32", value: v })
              )
              .validate((r, t, v) => {
                if (!Number.isInteger(v) || v < -2147483648 || v > 2147483647)
                  throw r.error(t, `number is not an int32: ${v}`);
              }),
            l = {
              FontRef: e.of(
                { kind: 7, name: "FontRef" },
                "ref",
                c.instance("FontRef"),
                (r) => d.instance("FontRef", r),
                J0("font"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              MediaRef: e.of(
                { kind: 7, name: "MediaRef" },
                "ref",
                c.instance("MediaRef"),
                (r) => d.instance("MediaRef", r),
                J0("media"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              VideoRef: e.of(
                { kind: 7, name: "VideoRef" },
                "ref",
                c.instance("VideoRef"),
                (r) => d.instance("VideoRef", r),
                J0("video"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              AudioRef: e.of(
                { kind: 7, name: "AudioRef" },
                "ref",
                c.instance("AudioRef"),
                (r) => d.instance("AudioRef", r),
                J0("audio"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              EmbedRef: e.of(
                { kind: 7, name: "EmbedRef" },
                "ref",
                c.instance("EmbedRef"),
                (r) => d.instance("EmbedRef", r),
                J0("embed"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              SceneRef: e.of(
                { kind: 7, name: "SceneRef" },
                "ref",
                c.instance("SceneRef"),
                (r) => d.instance("SceneRef", r),
                J0("scene"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              BlueprintRef: e.of(
                { kind: 7, name: "BlueprintRef" },
                "ref",
                c.instance("BlueprintRef"),
                (r) => d.instance("BlueprintRef", r),
                J0("blueprint"),
                (r, t, v) => ({ type: "ref", value: v })
              ),
              Fill: e.of(
                { kind: 7, name: "Fill" },
                "fill",
                c.instance("Fill"),
                (r) => d.instance("Fill", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "fill", value: v })
              ),
              Stroke: e.of(
                { kind: 7, name: "Stroke" },
                "stroke",
                c.instance("Stroke"),
                (r) => d.instance("Stroke", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "stroke", value: v })
              ),
              Richtext2: e.of(
                { kind: 7, name: "Richtext2" },
                "text2",
                c.instance("Richtext2"),
                (r) => d.instance("Richtext2", r),
                (r, t, v) => v.value,
                (r, t, v) => ({ type: "text2", value: v })
              ),
            },
            m = {
              [0]: (r) => f.validate(Xbc(r.JN)),
              [1]: () => g,
              [2]: (r) => h.validate(Ybc(r.range)),
              [3]: (r) => k.validate(Ybc(r.range)),
              [4]: (r) =>
                e
                  .of(
                    { kind: 4, values: r.values },
                    Zbc,
                    c.primitive,
                    (t) => t,
                    (t, v, w) => w.value,
                    (t, v, w) => {
                      a: switch (typeof w) {
                        case "string":
                          t = { type: "string", value: w };
                          break a;
                        case "boolean":
                          t = { type: "boolean", value: w };
                          break a;
                        case "number":
                          t = { type: "int32", value: w };
                          break a;
                        default:
                          throw new E(w);
                      }
                      return t;
                    }
                  )
                  .validate($bc(r.values)),
              [5]: (r) => {
                const {
                  dataType: t,
                  Yba: v,
                  yba: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 5, itemType: t },
                  "list",
                  c.array(v),
                  (C) => d.array(C.map(w)),
                  (C, B, D) =>
                    D.value.toArray().map((J, L) => z(C, B.yR(L), J)),
                  (C, B, D) => ({
                    type: "list",
                    value: D.map((J, L) => A(C, B.yR(L), J)),
                  })
                );
              },
              [6]: (r) => {
                const {
                  dataType: t,
                  Yba: v,
                  yba: w,
                  decode: z,
                  encode: A,
                } = b(r.itemType);
                return e.of(
                  { kind: 6, itemType: t },
                  "dict",
                  c.map(c.string, v),
                  (C) => d.map(Uc(C, w)),
                  (C, B, D) => Uc(D.value.wl(), (J, L) => z(C, B.m6(L), J)),
                  (C, B, D) => ({
                    type: "dict",
                    value: Uc(D, (J, L) => A(C, B.m6(L), J)),
                  })
                );
              },
              [7]: (r) => l[r.name],
              [8]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 8, itemType: t },
                  "list",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    kac(
                      C.value,
                      (B) => w(z, A.yR("*"), B),
                      acc(v, z, A.yR("*"))
                    ),
                  (z, A, C) => ({
                    type: "list",
                    value: C.map((B, D) => w(z, A.yR(D), B)),
                  })
                );
              },
              [9]: (r) => {
                const { dataType: t, decode: v, encode: w } = b(r.itemType);
                return e.of(
                  { kind: 9, itemType: t },
                  "dict",
                  c.undefined,
                  () => {},
                  (z, A, C) =>
                    Rbc(
                      C.value,
                      (B) => w(z, A.m6("*"), B),
                      acc(v, z, A.yR("*"))
                    ),
                  (z, A, C) => ({
                    type: "dict",
                    value: Uc(C, (B, D) => w(z, A.m6(D), B)),
                  })
                );
              },
              [10]: (r) => {
                const { decode: t, encode: v } = p.I1a(r.fields);
                return e.of(
                  { kind: 10, fields: r.fields },
                  "dict",
                  c.undefined,
                  () => {},
                  t,
                  v
                );
              },
              [11]: (r) => {
                function t(J, L, N, O) {
                  N = N.get(O);
                  if (N == null)
                    throw J.error(
                      L,
                      `unknown case for discriminator value: ${O}`
                    );
                  return N;
                }
                const v = r.FVa;
                r = r.rg;
                var w = Object.keys(v);
                u(w.length >= 1, "missing discriminator props");
                u(w.length <= 1, "too many discriminator props: {}", w);
                const z = w[0];
                u(r.length >= 1, "discriminated union has no cases");
                w = new Map();
                for (const J of r) {
                  const L = J.fields[z].type.values,
                    N = b(J);
                  for (const O of L)
                    u(
                      !w.has(O),
                      "discriminator values are not unique across cases: {}",
                      O
                    ),
                      w.set(O, N);
                }
                const { decode: A, encode: C } = b({
                    kind: 4,
                    values: new Set(w.keys()),
                  }),
                  B = Uc(w, (J) => J.decode),
                  D = Uc(w, (J) => J.encode);
                return e.of(
                  { kind: 11, FVa: v, rg: r },
                  "dict",
                  c.undefined,
                  () => {},
                  (J, L, N) => {
                    var O = I0(J, L, "k", N.value.get("k"));
                    N = I0(J, L, "v", N.value.get("v"));
                    bcc(J, L, "dict", N);
                    O = A(J, L, O);
                    return t(J, L, B, O)(J, L, N);
                  },
                  (J, L, N) => {
                    const O = N[z],
                      S = t(J, L, D, O);
                    return {
                      type: "dict",
                      value: new Map([
                        ["k", C(J, L, O)],
                        ["v", S(J, L, N)],
                      ]),
                    };
                  }
                );
              },
            },
            n = Symbol("$impl");
          class p {
            static I1a(r) {
              r = me(r, (w) => q.of(w));
              const t = me(r, (w) => w.fMb()),
                v = Object.entries(r);
              return {
                ZK: new Map(v.map(([, w]) => w.aMb())),
                gMb: (w) => {
                  const z = w[n];
                  return new Map(v.map(([, A]) => A.hMb(z)));
                },
                decode: (w, z, A) => {
                  const C = Object.create(null, t);
                  Object.defineProperty(C, n, {
                    enumerable: !1,
                    writable: !1,
                    value: new p(w, z, A.value),
                  });
                  return C;
                },
                encode: (w, z, A) => {
                  const C = v.map(([B, D]) => D.encode(w, z, A[B]));
                  return { type: "dict", value: new Map(C.filter(__c.mb)) };
                },
              };
            }
            sAa(r, t) {
              const v = I0(this.e, this.p, t, this.data.get(t));
              return K0(this.jXa, r.decode, this.e, this.p.JL(t), v);
            }
            pAa(r, t) {
              const v = this.data.get(t);
              if (v != null)
                return K0(this.jXa, r.decode, this.e, this.p.JL(t), v);
            }
            nab(r, t, v) {
              this.data.set(t, r.encode(this.e, this.p.JL(t), v));
            }
            gab(r, t, v) {
              v != null
                ? this.data.set(t, r.encode(this.e, this.p.JL(t), v))
                : this.data.delete(t);
            }
            constructor(r, t, v) {
              this.e = r;
              this.p = t;
              this.data = v;
              this.jXa = new WeakMap();
              this.IRa = new Map();
              this.Jub = ccc(this.IRa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.sAa(z, w);
                  },
                  set(C) {
                    A.nab(z, w, C);
                  },
                };
              });
              this.wub = ccc(this.IRa, (w, z) => {
                const A = this;
                return {
                  get ref() {
                    return A.pAa(z, w);
                  },
                  set(C) {
                    A.gab(z, w, C);
                  },
                };
              });
            }
          }
          class q {
            static of(r) {
              return new q(r, b(r.type));
            }
            aMb() {
              const r = this.key,
                t = this.Eb,
                v = this.type;
              switch (t.$E) {
                case 0:
                  return [r, v.Yba];
                case 1:
                  return [r, c.optional(v.Yba)];
                default:
                  throw new E(t.$E);
              }
            }
            hMb(r) {
              const t = this.key,
                v = this.Eb,
                w = this.type;
              switch (v.$E) {
                case 0:
                  return [t, () => w.yba(r.sAa(w, t))];
                case 1:
                  return [
                    t,
                    () => {
                      const z = r.pAa(w, t);
                      return z != null ? w.yba(z) : void 0;
                    },
                  ];
                default:
                  throw new E(v.$E);
              }
            }
            fMb() {
              const r = this.key;
              var t = this.Eb;
              const v = this.type;
              if (pac(v.dataType) && t.yJa === 1) {
                switch (t.$E) {
                  case 0:
                    t = function () {
                      return this[n].Jub(r, v);
                    };
                    break;
                  case 1:
                    t = function () {
                      return this[n].wub(r, v);
                    };
                    break;
                  default:
                    throw new E(t.$E);
                }
                return { enumerable: !0, get: t };
              }
              let w;
              switch (t.$E) {
                case 0:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].sAa(v, r);
                    },
                    set(z) {
                      this[n].nab(v, r, z);
                    },
                  };
                  break;
                case 1:
                  w = {
                    enumerable: !0,
                    get() {
                      return this[n].pAa(v, r);
                    },
                    set(z) {
                      this[n].gab(v, r, z);
                    },
                  };
                  break;
                default:
                  throw new E(t.$E);
              }
              switch (t.yJa) {
                case 0:
                  w.set = void 0;
                  break;
                case 1:
                  break;
                default:
                  throw new E(t.yJa);
              }
              return w;
            }
            encode(r, t, v) {
              const w = this.key,
                z = this.Eb,
                A = this.type;
              switch (z.$E) {
                case 0:
                  return [w, A.encode(r, t.JL(w), I0(r, t, w, v))];
                case 1:
                  return v != null ? [w, A.encode(r, t.JL(w), v)] : void 0;
                default:
                  throw new E(z.$E);
              }
            }
            constructor(r, t) {
              this.Eb = r;
              this.type = t;
              r = r.key;
              u(r > 0 && Number.isInteger(r));
              if (r <= 52)
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                  r - 1
                ];
              else {
                for (t = ""; r > 0; )
                  r--,
                    (t =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"[
                        r % 52
                      ] + t),
                    (r = Math.floor(r / 52));
                r = t;
              }
              this.key = r;
            }
          }
          return (r, t) => {
            const v = new dcc(r),
              w = new ecc(),
              { ZK: z, gMb: A, decode: C, encode: B } = p.I1a(t);
            return {
              ZK: z,
              decode: (D) => {
                D = C(v, w, { type: "dict", value: D });
                return { WHa: A(D), data: D };
              },
              encode: (D) => B(v, w, D).value,
            };
          };
        };
        ccc = function (a, b) {
          return (c, ...d) => {
            a.has(c) || a.set(c, b(c, ...d));
            return a.get(c);
          };
        };
        acc = function (a, b, c) {
          const d = new WeakMap();
          return (e) => K0(d, a, b, c, e);
        };
        K0 = function (a, b, c, d, e) {
          let f = a.get(e);
          f == null && ((f = b(c, d, e)), a.set(e, f));
          return f;
        };
        Tbc = function (a, b) {
          return (c, d, e) => {
            b(c, d, e);
            return a(c, d, e);
          };
        };
        Wbc = function (a, b) {
          return (c, d, e) => {
            e = a(c, d, e);
            b(c, d, e);
            return e;
          };
        };
        Vbc = function (a, b) {
          var c = gcc();
          return (d, e, f) => {
            f = a(d, e, f);
            b(d, e, f);
            c(d, e, f);
            return f;
          };
        };
        bcc = function (a, b, c, d) {
          if (d.type !== c)
            throw a.error(b, `type error: expected ${c}, was ${d.type}`);
        };
        Ubc = function (a) {
          return typeof a === "string"
            ? (b, c, d) => bcc(b, c, a, d)
            : (b, c, d) => {
                if (!a.has(d.type))
                  throw b.error(
                    c,
                    `type error: expected one of ${[...a].join(" or ")}, was ${
                      d.type
                    }`
                  );
              };
        };
        gcc = function () {
          return (a, b, c) => {
            if (typeof c.value !== hcc[c.type])
              throw a.error(
                b,
                `type error: expected ${c.type}, was ${typeof c.value}`
              );
          };
        };
        $bc = function (a) {
          return (b, c, d) => {
            if (!a.has(d))
              throw b.error(
                c,
                `expected one of ${[...a].join(" or ")}, was ${d}`
              );
          };
        };
        Ybc = function (a) {
          if (a) {
            var b = a.min,
              c = a.max;
            u(b == null || c == null || b <= c);
            return (d, e, f) => {
              if (b != null && f < b)
                throw d.error(e, `value below min ${b}: ${f}`);
              if (c != null && f > c)
                throw d.error(e, `value above max ${b}: ${f}`);
            };
          }
        };
        Xbc = function (a) {
          if (a)
            return (b, c, d) => {
              if (!a.test(d))
                throw b.error(c, `value does not match regex ${a}: '${d}'`);
            };
        };
        J0 = function (a) {
          return (b, c, d) => {
            if (d.value.type !== a)
              throw b.error(
                c,
                `expected ${icc[a]} resource type, got ${icc[d.value.type]}`
              );
            return { ...d.value, type: a };
          };
        };
        L0 = function (a) {
          return typeof a === "function";
        };
        jcc = function (a) {
          return { get: () => a, set: M0 };
        };
        kcc = function (...a) {
          const b = new Set(),
            c = new Set();
          for (const d of a) for (const e in d) b.has(e) ? c.add(e) : b.add(e);
          if (c.size)
            throw Error(
              `keys not disjoint: ${[...c].map((d) => `'${d}'`).join(", ")}`
            );
        };
        lcc = function (a, b) {
          return () => b(me(a, (c) => c()));
        };
        ncc = function (a) {
          u(a.length === 1);
          let b;
          return (c) => {
            if (b != null && mcc(b[0], c)) return b[1];
            const d = a(c);
            b = [c, d];
            return d;
          };
        };
        mcc = function (a, b) {
          if (a === b) return !0;
          if (a == null || b == null) return !1;
          const c = Object.keys(a),
            d = Object.keys(b);
          if (c.length !== d.length) return !1;
          for (const e of c) if (a[e] !== b[e]) return !1;
          return !0;
        };
        pcc = function (a) {
          var b = occ;
          return {
            n2: b({
              vp: a.n2,
              args: {},
              te: {
                U: { image: void 0, video: void 0, Pa: void 0 },
                attributes: {
                  Rl: void 0,
                  color: void 0,
                  xa: void 0,
                  locked: void 0,
                  lg: void 0,
                  Sk: void 0,
                  Vc: void 0,
                  flipX: void 0,
                  flipY: void 0,
                },
              },
            }),
            osa: b({
              vp: a.osa,
              args: {},
              te: {
                U: { fill: void 0 },
                attributes: {
                  weight: void 0,
                  color: void 0,
                  Oc: void 0,
                  re: void 0,
                },
              },
            }),
            GV: b({
              vp: a.GV,
              args: { d: void 0 },
              te: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { N: void 0 },
              },
            }),
            w2: b({
              vp: a.w2,
              args: {},
              te: {
                U: { fill: void 0, stroke: void 0 },
                attributes: { ...N0, N: void 0 },
              },
            }),
            isa: b({
              vp: a.isa,
              args: {},
              te: {
                U: {
                  ub: void 0,
                  resizeMode: void 0,
                  slice: void 0,
                  fb: void 0,
                },
                attributes: { ...N0, Jj: void 0, viewBox: void 0 },
              },
            }),
            Zca: b({
              vp: a.Zca,
              args: {},
              te: {
                U: { text: void 0 },
                attributes: {
                  ...N0,
                  Xz: void 0,
                  Ah: void 0,
                  Ha: void 0,
                  J: void 0,
                  P: void 0,
                  Mf: void 0,
                },
              },
            }),
            eOa: b({
              vp: a.eOa,
              args: { url: void 0, J: void 0, P: void 0 },
              te: { U: {}, attributes: N0 },
            }),
          };
        };
        O0 = function (a, b) {
          return (c) => b({ ...a, ...c });
        };
        ucc = function () {
          return pcc({
            n2: O0(P0, (a) => Ad(__c.zN, a)),
            osa: O0(qcc, (a) => Ad(__c.Gz, a)),
            GV: O0(rcc, (a) => Ad(__c.sR, a)),
            w2: O0(Q0, (a) => Ad(__c.pA, { ...a, id: rD.generate() })),
            isa: O0(R0, (a) =>
              Ad(__c.qA, {
                ...a,
                fb: [],
                viewBox: { top: 0, left: 0, width: 1, height: 1 },
                id: rD.generate(),
              })
            ),
            Zca: O0(scc, (a) => Ad(__c.rA, { ...a, id: rD.generate() })),
            eOa: O0(tcc, (a) => Ad(__c.sA, { ...a, id: rD.generate() })),
          });
        };
        xcc = function () {
          return new vcc({})
            .add((a, b) => ({
              FontRef: new a(
                "FontRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "font", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              MediaRef: new a(
                "MediaRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "media", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              VideoRef: new a("VideoRef", { id: b.string }, (c) => ({
                type: "video",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              AudioRef: new a("AudioRef", { id: b.string }, (c) => ({
                type: "audio",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              EmbedRef: new a("EmbedRef", { id: b.string }, (c) => ({
                type: "embed",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              SceneRef: new a("SceneRef", { id: b.string }, (c) => ({
                type: "scene",
                id: c.id,
                version: 0,
              })),
            }))
            .add((a, b) => ({
              BlueprintRef: new a(
                "BlueprintRef",
                { id: b.string, version: b.number },
                (c) => ({ type: "blueprint", id: c.id, version: c.version })
              ),
            }))
            .add((a, b) => ({
              Fill: new a("Fill", { color: b.string }, (c) =>
                __c.zN.create({ ...P0, color: c.color })
              ),
            }))
            .add((a, b) => ({
              Stroke: new a(
                "Stroke",
                {
                  color: b.string,
                  weight: b.number,
                  Oc: b.array(b.number),
                  re: b.$g,
                },
                (c) =>
                  __c.Gz.create({
                    ...qcc,
                    color: c.color,
                    weight: c.weight,
                    Oc: c.Oc.items,
                    re: c.re,
                  })
              ),
            }))
            .add((a, b) => ({
              Richtext2: new a(
                "Richtext2",
                {
                  ntb: b.array(
                    b.Rb({ sb: b.string, attrs: b.map(b.string, b.string) })
                  ),
                },
                (c) => {
                  c = c.ntb;
                  const d = __c.Jk.Cb();
                  c.items.forEach((e) => {
                    const f = e.fields.sb;
                    d.attrs(__c.Pf(e.fields.attrs.items));
                    d.sb(f);
                  });
                  return __c.Jk.create(d.build());
                }
              ),
            }))
            .add((a, b) => ({
              Path: new a(
                "Path",
                {
                  d: b.string,
                  fill: b.instance("Fill"),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = c.fill;
                  c = __c.sR.create({ ...rcc, d: c.d, fill: P0 });
                  Object.defineProperties(c, {
                    fill: { value: e.instance },
                    stroke: { value: wcc(d) },
                  });
                  return c;
                }
              ),
            }))
            .add((a, b) => ({
              RectElement: new a(
                "RectElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  fill: b.instance("Fill"),
                  N: b.union(b.array(b.number), b.undefined),
                  stroke: b.union(b.instance("Stroke"), b.undefined),
                },
                (c) => {
                  const d = c.stroke,
                    e = __c.pA.create({
                      ...Q0,
                      id: rD.generate(),
                      top: c.top,
                      left: c.left,
                      width: c.width,
                      height: c.height,
                      rotation: c.rotation ?? Q0.rotation,
                      fill: P0,
                      N: c.N?.items ?? Q0.N,
                    });
                  Object.defineProperties(e, {
                    fill: { value: c.fill.instance },
                    stroke: { value: wcc(d) },
                  });
                  return e;
                }
              ),
            }))
            .add((a, b) => ({
              ShapeElement: new a(
                "ShapeElement",
                {
                  top: b.number,
                  left: b.number,
                  width: b.number,
                  height: b.number,
                  rotation: b.union(b.number, b.undefined),
                  xa: b.union(b.number, b.undefined),
                  viewBox: b.Rb({
                    top: b.number,
                    left: b.number,
                    width: b.number,
                    height: b.number,
                  }),
                  fb: b.array(b.instance("Path")),
                },
                (c) => {
                  const d = __c.qA.create({
                    ...R0,
                    id: rD.generate(),
                    top: c.top,
                    left: c.left,
                    width: c.width,
                    height: c.height,
                    rotation: c.rotation ?? R0.rotation,
                    xa: c.xa ?? R0.xa,
                    fb: [],
                    viewBox: c.viewBox.fields,
                  });
                  Object.defineProperties(d, {
                    fb: {
                      value: new S0(
                        c.fb.items.map((e) => T0(() => e.instance))
                      ),
                    },
                  });
                  return d;
                }
              ),
            }));
        };
        wcc = function (a) {
          return (
            a && {
              ref: a.instance,
              set() {
                throw Error(
                  "Replacing of stroke on a model unit is not yet supported"
                );
              },
            }
          );
        };
        Nac = function (a, b, c) {
          return me(b, (d) => (...e) => {
            const {
              data: f,
              O: { width: g, height: h },
            } = d(...e);
            e = c.G.encode(f.G);
            const k =
              c.document.ZK.size > 0 ? c.document.encode(f.document) : void 0;
            return {
              Ic: { ...__c.iCb, app: { id: a, version: 1 } },
              QWb: k,
              Kd: e,
              Oe: { width: g, height: h },
            };
          });
        };
        zcc = function (a, b) {
          return class extends ycc {
            componentDidCatch(c) {
              a.error(c);
              this.setState({ hasError: !0 });
            }
            render() {
              return this.state.hasError
                ? N_(__c.ew, {
                    background: "criticalLow",
                    width: "full",
                    height: "full",
                    padding: "0.25u",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    role: "alert",
                    children: N_(__c.bw, {
                      size: "xsmall",
                      alignment: "center",
                      children: __c.K("Q6XSow"),
                    }),
                  })
                : N_(b, { ...this.props });
            }
            constructor(...c) {
              super(...c);
              this.state = { hasError: !1 };
            }
          };
        };
        Vac = function (a, b, c) {
          const d = c.G,
            e = (c = c.G4) ? new Acc(c) : void 0;
          c = e ? (f) => e.Pc(f.G) : void 0;
          switch (d.type) {
            case 0:
              a = Bcc(a, d, b, c);
              break;
            case 1:
              a = Ccc(a, d, b, c);
              break;
            default:
              throw new E(d);
          }
          return { Brb: a, EM: e };
        };
        Wac = function (a, b, c, d) {
          c = c.email;
          if (c != null) {
            var e = d ? (g) => d.Pc(g.G) : void 0,
              f = c.type;
            switch (f) {
              case 2:
                return Dcc(a, c, b, e);
              default:
                throw new E(f);
            }
          }
        };
        Xac = function (a, b) {
          return (c) => {
            if (b)
              return (
                (c = a.G.decode(c.G.Kd).data),
                {
                  type: b.type,
                  Xaa: typeof b.Xaa === "function" ? b.Xaa(c) : b.Xaa,
                  name: typeof b.name === "function" ? b.name(c) : b.name,
                }
              );
          };
        };
        Bcc = function (a, b, c, d) {
          const e = b.Mx,
            { Fta: f, I4: g, $m: h, wHa: k } = U0(a, c);
          return typeof e === "object"
            ? ((b = a.e1.types),
              (b = b.$W(
                b.union(b.instance("RectElement"), b.instance("ShapeElement"))
              )),
              Ecc(
                a,
                f,
                h,
                b,
                e,
                (l) => new V0(() => l().map((m) => m.instance)),
                k
              ))
            : {
                type: 0,
                Mx: (l, m) => {
                  const { document: n, G: p } = h.decode(f(l)).data;
                  m = g(l, m);
                  l = d
                    ? { document: n, G: p, local: d(l) }
                    : { document: n, G: p, local: void 0 };
                  return e(l, m);
                },
                ila: W0(k),
                NR: X0(k),
                J_: Y0(k),
              };
        };
        Ccc = function (a, b, c, d) {
          const e = b.Component,
            { Fta: f, I4: g, $m: h, wHa: k } = U0(a, c);
          return {
            type: 1,
            ila: W0(k),
            NR: X0(k),
            J_: Y0(k),
            Component: zcc(
              a.I,
              Z0(({ model: l, De: m, Elb: n }) => {
                n = Fcc(a.We, n);
                const [p] = $0(() => {
                  const { document: q, G: r } = h.decode(f(l)).data;
                  return d
                    ? { document: q, G: r, local: d(l) }
                    : { document: q, G: r, local: void 0 };
                });
                m = g(l, m);
                return N_(e, { data: p, We: n, Ji: m });
              })
            ),
          };
        };
        Dcc = function (a, b, c, d) {
          const e = b.Component,
            { Fta: f, I4: g, $m: h, wHa: k } = U0(a, c);
          return {
            type: 2,
            ila: W0(k),
            NR: X0(k),
            J_: Y0(k),
            Component: zcc(
              a.I,
              Z0(({ model: l, De: m, scale: n }) => {
                const p = Gcc(a.Hqb, n),
                  [q] = $0(() => {
                    const { document: r, G: t } = h.decode(f(l)).data;
                    return d
                      ? { document: r, G: t, local: d(l) }
                      : { document: r, G: t, local: void 0 };
                  });
                m = g(l, m);
                return N_(e, { data: q, We: p, scale: n, Ji: m });
              })
            ),
          };
        };
        U0 = function (a, b) {
          return {
            Fta: (c) => ({ document: Hcc(a, c), G: c.G.Kd }),
            I4: (c, d) => a.QPb.I4(c, d),
            $m: cbc(b),
            wHa: new Icc(),
          };
        };
        Ecc = function (a, b, c, d, e, f, g) {
          const h = a.twa(a.e1, c, d).compile(e);
          return {
            type: 0,
            Mx: (k) => ({ La: f(h(b(k))) }),
            ila: W0(g),
            NR: X0(g),
            J_: Y0(g),
          };
        };
        Hcc = function (a, b) {
          return (
            a.pb.Am.first(
              (c) =>
                c.app.id === b.G.Ic.app.id &&
                c.app.version === b.G.Ic.app.version
            )?.data ?? __c.GR.create(new Map())
          );
        };
        Jcc = function (a, b) {
          return a.L$.get(b.G.Ic.app.id)?.EBb(b);
        };
        W0 = function (a) {
          return a1((b) => {
            if ((b = a.get(b.G)) && b.size !== 0)
              return Array.from(b)
                .map((c) => c.yia())
                .reduce(
                  (c, d) => ({
                    width: Math.max(c.width, d.width),
                    height: Math.max(c.height, d.height),
                  }),
                  { width: -Infinity, height: -Infinity }
                );
          });
        };
        X0 = function (a) {
          return a1((b) =>
            (b = a.get(b.G)) && b.size !== 0
              ? Array.from(b).flatMap((c) => c.NR())
              : []
          );
        };
        Y0 = function (a) {
          return (b, c) => {
            a.add(b.G, c);
            return () => a.remove(b.G, c);
          };
        };
        Hac = function (a) {
          return { ZK: a.ZK, decode: Kcc(a.decode), encode: a.encode };
        };
        Kcc = function (a) {
          const b = new WeakMap();
          return (c) => {
            let d = b.get(c);
            d || ((d = a(c)), b.set(c, d));
            return d;
          };
        };
        Occ = function (a) {
          var b = a.kra;
          const c = a.UPb,
            d = a.RPb,
            e = a.Cwa,
            f = a.e1,
            g = a.I,
            h = a.pb,
            k = a.y9a,
            l = a.b8a;
          a = new Lcc(a.vn, h);
          const m = new Mcc(h, b, f, e, g, a, c, d);
          b = new Ncc();
          k && k.B9b((n) => Jcc(m, n));
          l && l((n) => Jcc(m, n));
          return { wca: m, oC: m, expr: b };
        };
        Qcc = function (a, b) {
          if (!a) return "Arial, Helvetica, sans-serif";
          const c = __c.br(a);
          a = b.find((d) => d.id === c.id && d.version === c.version);
          switch (a?.name) {
            case "Arimo":
            case "Arial":
              return "Arial, Helvetica, sans-serif";
            case "Times New Roman MT":
            case "Times New Roman":
              return '"Times New Roman", Times, serif';
            case "Tahoma":
              return "Tahoma, Geneva, sans-serif";
            case "Trebuchet MS":
              return '"Trebuchet MS", Helvetica, sans-serif';
            case "Lucida Console":
              return '"Lucida Console", Monaco, monospace';
            case "Comic Sans":
              return '"Comic Sans MS", "Comic Sans", cursive, sans-serif';
            case "Courier New OS":
            case "Courier New":
              return '"Courier New", monospace';
            case "Georgia Pro":
            case "Georgia":
              return "Georgia, serif";
            case "Verdana Pro":
            case "Verdana":
              return "Verdana, Geneva, sans-serif";
            default:
              return a?.name
                ? `${Pcc(a.name)}, ${"Arial, Helvetica, sans-serif"}`
                : "Arial, Helvetica, sans-serif";
          }
        };
        Pcc = function (a) {
          a = a.replace(/["']/g, "");
          return /[\s,]/.test(a) ? `"${a}"` : a;
        };
        Scc = function () {
          ({ wh: a } = { wh: [] });
          var a;
          return ({ text: b }) => {
            const c = Rcc(b, a);
            return N_("span", {
              style: {
                ...c,
                display: "table-cell",
                width: "100%",
                height: "100%",
                verticalAlign: "middle",
                boxSizing: "border-box",
              },
              children: b.W,
            });
          };
        };
        Rcc = function (a, b) {
          var c = (q) => [...a.Zh(q)[q]].values().next().value ?? __c.Nf.Sb[q],
            d = c("font-family");
          b = Qcc(d, b);
          d = c("font-size");
          var e = c("color"),
            f = c("font-weight"),
            g = c("font-style"),
            h = c("decoration"),
            k = c("strikethrough"),
            l = c("direction"),
            m = c("text-align"),
            n = c("leading");
          c = c("tracking");
          const p = [];
          h === "underline" && p.push("underline");
          k === "strikethrough" && p.push("line-through");
          h = p.length > 0 ? p.join(" ") : "none";
          return {
            color: e,
            fontSize: `${d}px`,
            fontWeight: f,
            fontFamily: b,
            fontStyle: g === "italic" ? "italic" : "normal",
            textDecoration: h,
            direction: l,
            textAlign: Tcc(l, m),
            lineHeight: `${Ucc(n)}em`,
            letterSpacing: `${Ucc(c)}em`,
          };
        };
        Tcc = function (a, b) {
          const c = {
            start: "left",
            center: "center",
            end: "right",
            justify: "justify",
          };
          if (a !== "rtl") return c[b];
          switch (b) {
            case "start":
              return "end";
            case "end":
              return "start";
            default:
              return c[b];
          }
        };
        Ucc = function (a) {
          if (!Number.isFinite(a)) throw Error("Invalid milliEms value");
          return a / 1e3;
        };
        Vcc = function (a) {
          a.vP && (a.vP(), (a.vP = null));
          const b = a.props.bqb;
          b.forEach((c) => {
            window.addEventListener(c, a.tPa);
          });
          a.vP = () => {
            b.forEach((c) => {
              window.removeEventListener(c, a.tPa);
            });
          };
        };
        Zcc = function (a) {
          const b = L_(function (c) {
            const [{ store: d, Ga: e }] = $0(() => {
              const f = new Wcc(),
                g = new Xcc(f);
              return { store: f, Ga: g };
            });
            return N_(Ycc, {
              B9: e.reset,
              children: N_(__c.CVb, {
                kxb: e,
                lxb: d,
                o0a: a.yp.contains(c.url),
                children: ({ Gi: f }) => c.children({ Gi: f }),
              }),
            });
          });
          return L_((c) =>
            c.Flb && a.Ta?.status !== 2
              ? N_(b, { ...c })
              : c.children({ Gi: !1 })
          );
        };
        $cc = function (a) {
          return Z0(function (b) {
            return N_("div", {
              className: "gcYy_A",
              children: N_(__c.Uw, {
                S5: "both",
                children: ({ width: c, height: d }) =>
                  N_(a.gj, {
                    fill: b.fill,
                    Lb: c,
                    rc: d,
                    he: void 0,
                    animation: void 0,
                    wF: !1,
                    ba: void 0,
                    ia: void 0,
                  }),
              }),
            });
          });
        };
        bdc = function (a) {
          const b = a.Ra,
            c = a.qia,
            d = (e) => {
              e = __c.br(e);
              b.LD([e], { ou: !0 });
              return __c.tr(b, e);
            };
          return Z0(function (e) {
            var f = e.Aza;
            const g = e.fontWeight,
              h = e.xua,
              k = e.Jc,
              l = e.Nta,
              m = e.ariaInvalid,
              n = e.className,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.inputMode,
              v = e.onBlur,
              w = e.onFocus,
              z = e.onChange,
              A = e.placeholder,
              C = e.Q6a,
              B = e.readOnly,
              D = e.type,
              J = e.value;
            e = {
              color: e.Ni,
              fontSize: e.fontSize,
              borderRadius: e.borderRadius,
              fontFamily: f && d(f),
              fontWeight: g && __c.hr(g),
            };
            [f] = $0(() => c?.Vub());
            return N_("div", {
              ref: f?.qm,
              className: "BHOPhg",
              children: N_("input", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: adc(n, ["_6Yde8g", C && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                inputMode: t,
                onBlur: v,
                onFocus: w,
                onChange: z,
                placeholder: A,
                readOnly: B,
                type: D,
                value: J,
                style: {
                  ...e,
                  "--srRiKA": C,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.ug,
                  "--UBd2ow": h?.focus,
                },
              }),
            });
          });
        };
        cdc = function () {
          return () => N_(__c.iV, { mediaType: "embed", failed: !1 });
        };
        ddc = function (a) {
          return Z0(function (b) {
            return N_("div", {
              className: "oUJNhQ",
              children: N_(a.Xe, {
                text: b.text,
                animation: void 0,
                fd: "middle",
                oa: void 0,
                bb: void 0,
                jf: [],
                writingMode: 1,
              }),
            });
          });
        };
        edc = function (a) {
          const b = a.Ra,
            c = a.qia,
            d = (e) => {
              e = __c.br(e);
              b.LD([e], { ou: !0 });
              return __c.tr(b, e);
            };
          return Z0(function (e) {
            var f = e.Aza;
            const g = e.fontWeight,
              h = e.xua,
              k = e.Jc,
              l = e.Nta,
              m = e.ariaInvalid,
              n = e.className,
              p = e.disabled,
              q = e.id,
              r = e.name,
              t = e.onBlur,
              v = e.onFocus,
              w = e.onChange,
              z = e.placeholder,
              A = e.Q6a,
              C = e.readOnly,
              B = e.rows,
              D = e.value;
            e = {
              color: e.Ni,
              fontSize: e.fontSize,
              borderRadius: e.borderRadius,
              fontFamily: f && d(f),
              fontWeight: g && __c.hr(g),
            };
            [f] = $0(() => c?.Vub());
            return N_("div", {
              ref: f?.qm,
              className: "BHOPhg",
              children: N_("textarea", {
                "aria-describedby": k,
                "aria-errormessage": l,
                "aria-invalid": m,
                className: adc(n, ["_6Yde8g", A && "sR0SUA"]),
                disabled: p,
                id: q,
                name: r,
                onBlur: t,
                onFocus: v,
                onChange: w,
                placeholder: z,
                rows: B,
                readOnly: C,
                style: {
                  ...e,
                  "--srRiKA": A,
                  "--oiOG3Q": h?.default,
                  "--oGOcXA": h?.ug,
                  "--UBd2ow": h?.focus,
                },
                value: D,
              }),
            });
          });
        };
        __c.Xq.prototype.xca = __c.da(8, function (a, b) {
          const c = this.Ej.get(__c.Wq(a));
          if (c != null) {
            const e = this.E3.get(c);
            if (e != null) return Promise.resolve({ ...c, element: e });
          }
          const d = __c.Wq(a);
          if ((a = this.pending.get(d))) return a;
          c != null &&
            (b = async () => {
              const e = await t$b(this, c);
              return { ...c, element: e };
            });
          b = b().finally(() => this.pending.delete(d));
          this.pending.set(d, b);
          return b;
        });
        __c.ls.prototype.xca = __c.da(7, function (a, b) {
          var c = this.scenes.get(a);
          if (c) return Promise.resolve(c);
          if ((c = this.pending.get(a))) return c;
          b = b().finally(() => this.pending.delete(a));
          this.pending.set(a, b);
          return b;
        });
        __c.Dc.prototype.DQ = __c.da(3, function (a, b) {
          this.console.error(...__c.Cc(this, "critical", a, b));
        });
        __c.eI.prototype.DQ = __c.da(2, function (a, b) {
          this.Fv.DQ(a, b);
          __c.cI(this, a, "critical", b);
        });
        var fdc = class {
            constructor(a) {
              this.ref = a;
            }
          },
          gdc = class {
            get ref() {
              return this.box.get();
            }
            constructor(a) {
              this.box = a;
            }
          },
          hdc = class {
            get ref() {
              return this.box.ref;
            }
            set() {
              throw Error("cannot set unmodifiable box");
            }
            constructor(a) {
              this.box = a;
            }
          },
          N_ = __webpack_require__(405148).jsx;
        var L_ = __webpack_require__(371201).PA;
        var b1 = __webpack_require__(227200),
          idc = b1.Component,
          Z0 = b1.memo,
          ycc = b1.PureComponent,
          M_ = b1.useCallback,
          $0 = b1.useState;
        var c1 = __webpack_require__(186901),
          T0 = c1.EW,
          jdc = c1.fm,
          kdc = c1.h5,
          ldc = c1.m3,
          Fac = c1.mJ,
          d1 = c1.sH,
          e1 = c1.XI;
        var a1 = __webpack_require__(536618).iB;
        var mdc = __webpack_require__,
          ndc = mdc(208463),
          adc = mdc.n_x(ndc)();
        var F_ = class extends Error {
          constructor(a) {
            a.code = a.code;
            const b = a.message.endsWith(".") ? "" : ".";
            super(`[${a.code}]:  ${a.message}${b}`.trim());
            this.code = a.code;
            this.name = "CanvaError";
            this.NGb = a.message;
            Object.setPrototypeOf(this, F_.prototype);
          }
        };
        var odc = class {
          constructor(a, b, c) {
            this.handler = a;
            this.port = b;
            this.I = c;
            this.send = (d) => {
              try {
                return this.port.postMessage(d), (0, __c.za)();
              } catch (e) {
                return this.I.Mb(e), Aa(e);
              }
            };
            this.ODb = (d) => {
              this.I.Mb(d);
            };
            this.YEa = ({ data: d }) => {
              if (d)
                try {
                  this.handler.TGb(d);
                } catch (e) {
                  this.I.Mb(e);
                }
              else
                this.I.error(
                  new F_({
                    code: "internal_error",
                    message: "missing data in 'MessageEvent'",
                  })
                );
            };
            this.port.onmessage = this.YEa;
            this.port.onmessageerror = this.ODb;
          }
        };
        var w$b = class extends Error {
            constructor() {
              super("[internal_error] Comms promise timed out.");
            }
          },
          C$b = class {
            reset(a) {
              a && (this.timeoutMs = a);
              this.setTimeout();
            }
            resolve(a) {
              clearTimeout(this.Zd);
              this.RHb(a);
            }
            reject(a) {
              clearTimeout(this.Zd);
              this.g8a(a);
            }
            promise() {
              return this.p;
            }
            setTimeout() {
              clearTimeout(this.Zd);
              this.Zd = setTimeout(() => {
                x$b(this);
              }, Math.max(this.timeoutMs - 500, 500));
            }
            constructor(a) {
              this.timeoutMs = a;
              this.p = new Promise((b, c) => {
                this.RHb = b;
                this.g8a = c;
              });
              this.setTimeout();
            }
          };
        var pdc = class {
          request(a, b) {
            const c = this.F6a,
              d = new C$b(5e3),
              e = this.FHb(),
              f = (async function () {
                c.set(e, { path: a, HHb: d });
                try {
                  const g = await d.promise();
                  return (0, __c.za)(g);
                } catch (g) {
                  return g instanceof w$b
                    ? Aa(
                        new F_({
                          code: "internal_error",
                          message: `Comms promise timed out (${a}).`,
                        })
                      )
                    : Aa(g);
                } finally {
                  c.delete(e);
                }
              })();
            b = this.send(e, a, b);
            b.ok ||
              (this.I.Mb(b.error, {
                Qe: "unable to send request",
                tags: new Map([
                  ["type", "request"],
                  ["path", a],
                ]),
              }),
              d.reject(b.error));
            return f;
          }
          constructor(a, b) {
            this.send = a;
            this.I = b;
            this.FHb = __c.Yq;
            this.F6a = new Map();
          }
        };
        var qdc = class {
          handle(a, b) {
            if (this.Q_.has(a))
              throw new F_({
                code: "internal_error",
                message: `Handler for '${a}' is already defined.`,
              });
            this.Q_.set(a, b);
          }
          constructor(a, b) {
            var c = console;
            this.d9 = a;
            this.I = b;
            this.DHb = !0;
            this.xpb = c;
            this.Q_ = new Map();
            this.Grb = new Set();
          }
        };
        var K_ = class {
            constructor(a, b) {
              this.request = (c, d) => this.client.request(c, d);
              this.handle = (c, d) => this.Q_.handle(c, d);
              a = new rdc(
                (c) => {
                  switch (c.type) {
                    case "ack":
                    case "error":
                    case "response":
                      var d = this.client;
                      const e = c.requestId,
                        f = c.type,
                        { path: g, HHb: h } = d.F6a.get(e) || {};
                      if (h)
                        switch (f) {
                          case "response":
                            h.resolve(c.payload);
                            break;
                          case "ack":
                            h.reset(2e4);
                            break;
                          case "error":
                            d.I.V2({
                              level: "info",
                              category: "sandbox_comms",
                              message: "Error response received",
                              data: { path: g ?? "unknown" },
                            });
                            h.reject(
                              new F_({ code: c.code, message: c.message })
                            );
                            break;
                          default:
                            throw new E(c);
                        }
                      else
                        f !== "ack" &&
                          d.I.error(
                            "request has already been handled and resolved or was not sent from this client",
                            {
                              tags: new Map([
                                ["type", f],
                                ["requestId", `${e}`],
                              ]),
                            }
                          );
                      break;
                    case "request":
                      z$b(this.Q_, c);
                      break;
                    default:
                      throw new E(c);
                  }
                },
                a,
                b.Wf("bus")
              );
              this.client = new pdc(a.PB, b.Wf("client"));
              this.Q_ = new qdc(a, b.Wf("requestHandler"));
            }
          },
          rdc = class {
            constructor(a, b, c) {
              this.Sia = a;
              this.PB = (d, e, f) =>
                this.J3.send({
                  type: "request",
                  requestId: d,
                  path: e,
                  payload: f,
                });
              this.ZDb = (d) => {
                switch (d.type) {
                  case "ack":
                    this.Sia({ type: "ack", requestId: d.requestId });
                    break;
                  case "error":
                    this.Sia({
                      type: "error",
                      requestId: d.requestId,
                      code: d.code,
                      message: d.message,
                    });
                    break;
                  case "response":
                    this.Sia({
                      type: "response",
                      requestId: d.requestId,
                      payload: d.payload,
                    });
                    break;
                  case "request":
                    this.Sia({
                      type: "request",
                      requestId: d.requestId,
                      path: d.path,
                      payload: d.payload,
                    });
                    break;
                  default:
                    throw new E(d);
                }
              };
              this.J3 = new odc({ TGb: this.ZDb }, b, c);
            }
          };
        var A$b = { EMa: "null", A9a: "*" };
        var E$b =
          "canva-dev.com canva-dev.cn canva-staging.com canva-staging.cn canva.com canva.cn canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-dev.cn canva-apps-staging.com canva-apps-staging.cn".split(
            " "
          );
        var F$b = H(() => ({}));
        var sdc = H(() => ({ gga: W(1), vd: W(2) }));
        var G$b = H(
          () => ({
            Ij: X("documentId", 1),
            Sl: X("elementId", 2),
            JPb: G("websiteContext", 3, sdc),
            qCa: __c.OI("isPreview", 4),
          }),
          { Uk: 0 }
        );
        var tdc = H(() => ({}));
        var a0 = H(
          () => ({
            textContent: X("textContent", 1),
            backgroundColor: X("backgroundColor", 2),
          }),
          { Uk: 0 }
        );
        var I$b = H(() => ({ config: (0, __c.SI)("config", 1, a0) }), {
          Uk: 0,
        });
        var J$b = H(() => ({}));
        var L$b = H(() => ({ Hya: X("entityId", 1) }), { Uk: 0 });
        var M$b = H(() => ({}));
        var N$b = H(
          () => ({ Hya: W("entityId", 1), textContent: W("textContent", 2) }),
          { Uk: 0 }
        );
        var O$b = H(() => ({}));
        var eac = class {
          constructor(a) {
            this.aA = a;
          }
        };
        var $_ = H(
          () => ({
            type: __c.F("type", "FONT_EDITABLE", 3, "FONT_EDITABLE"),
            id: W("id", 1),
            url: W("url", 4),
          }),
          { Uk: 0 }
        );
        var Q$b = H(
          () => ({ config: X("config", 1), Pha: G("fontEditable", 2, $_) }),
          { Uk: 0 }
        );
        var f1 = H(
          () => ({
            type: __c.F("type", "RECOLORABLE", 1, "RECOLORABLE"),
            id: W("id", 1),
            value: W("value", 2),
          }),
          { Uk: 0 }
        );
        var udc = H(
          () => ({
            borderRadius: FI("borderRadius", 1),
            borderWidth: FI("borderWidth", 2),
          }),
          { Uk: 0 }
        );
        var g1 = H(
          () => ({
            type: __c.F("type", "BORDERABLE", 2, "BORDERABLE"),
            id: W("id", 1),
            value: __c.Ma("value", 2, udc),
          }),
          { Uk: 0 }
        );
        var vdc = H(() => ({ id: W("id", 1), value: W("value", 2) }), {
          Uk: 0,
        });
        var h1 = H(
          () => ({
            type: __c.F("type", "FONT_SIZEABLE", 5, "FONT_SIZEABLE"),
            size: FI("size", 21),
          }),
          { Uk: 0 }
        );
        var R$b = H(
          () => ({
            config: W("config", 1),
            G_: Na("recolorables", 4, f1),
            mlb: Na("borderables", 5, g1),
            uqb: Na("editPanelValues", 6, vdc),
            xR: G("fontSizeable", 7, h1),
            Pha: G("fontEditable", 8, $_),
          }),
          { Uk: 0 }
        );
        var T$b = __c.Za(
          () => ({ type: [1, f1, 2, g1, 3, $_, 5, h1] }),
          () => ({}),
          { Uk: 0 }
        );
        var U$b = H(() => ({ config: W("config", 1) }), { Uk: 0 });
        var V$b = H(() => ({ id: W(1), value: W(2) }));
        var W$b = H(() => ({ config: W(1) }));
        var Y$b = H(
          () => ({
            config: W("config", 1),
            G_: Na("recolorables", 4, f1),
            mlb: Na("borderables", 5, g1),
            Pha: G("fontEditable", 6, $_),
            uqb: Na("editPanelValues", 7, vdc),
            xR: G("fontSizeable", 8, h1),
          }),
          { Uk: 0 }
        );
        var Z$b = H(() => ({}));
        var wdc = H(
          () => ({
            scrollWidth: FI("scrollWidth", 1),
            scrollHeight: FI("scrollHeight", 2),
            offsetWidth: FI("offsetWidth", 3),
            offsetHeight: FI("offsetHeight", 4),
          }),
          { Uk: 0 }
        );
        var $$b = H(() => ({ body: __c.Ma("body", 1, wdc) }), { Uk: 0 });
        var cac = class {
          constructor(a) {
            this.aA = a;
          }
        };
        var gac = class {
          constructor(a) {
            this.I = a;
            this.anb = (b, c) => {
              b.addEventListener("load", async () => {
                const { aA: d, zqb: e } = await dac(b, this.I),
                  { aA: f } = await bac(b, this.I),
                  { Aqb: g, Oob: h } = c(e);
                aac(d, g);
                H$b(f, h);
              });
            };
            this.$mb = (b, c) => {
              b.addEventListener("load", async () => {
                const { aA: d, emitter: e } = await fac(b, this.I),
                  f = c(e);
                P$b(d, f);
              });
            };
          }
        };
        var xdc = Object.freeze({
          empty: !0,
          count() {
            return 0;
          },
          toArray() {
            return [];
          },
          wl() {
            return new Map();
          },
          first() {},
          last() {},
          next() {
            O_();
          },
          previous() {
            O_();
          },
          Ne() {
            O_();
          },
          bw() {
            O_();
          },
          has() {
            return !1;
          },
          Cp() {
            return this;
          },
          map() {
            return [];
          },
          flatMap() {
            return [];
          },
          filter() {
            return [];
          },
          forEach() {},
          reduce(a, b) {
            return b;
          },
          some() {
            return !1;
          },
          every() {
            return !0;
          },
          [Symbol.iterator]() {
            return [][Symbol.iterator]();
          },
        });
        var ydc;
        ydc = Symbol.iterator;
        var V0 = class {
          static D(a) {
            M(a, { Im: T0, Sq: T0 });
          }
          get Im() {
            return this.okb().map((a) => {
              let b = this.SZa.get(a);
              b == null && ((b = `${this.ewb++}`), this.SZa.set(a, b));
              return { id: b, ref: a };
            });
          }
          get Sq() {
            const a = new Map();
            this.Im.forEach((b, c) => b && a.set(b.ref, c));
            return a;
          }
          xk(a) {
            return y(this.Sq.get(a), "ref not found");
          }
          get empty() {
            return !this.Im.length;
          }
          count() {
            return this.Im.length;
          }
          toArray() {
            return this.Im.map((a) => a.ref);
          }
          wl() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get tR() {
            return this.Im[0]?.ref;
          }
          get zS() {
            return this.Im[this.Im.length - 1]?.ref;
          }
          first(a) {
            return a ? this.Im.find((b) => a(b.ref))?.ref : this.tR;
          }
          last(a) {
            if (!a) return this.zS;
            const b = this.Im;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.ref)) return d.ref;
            }
          }
          next(a, b) {
            const c = this.Im;
            for (a = this.xk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          previous(a, b) {
            const c = this.Im;
            for (a = this.xk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (!b || b(d.ref)) return d.ref;
            }
          }
          Ne(a, b) {
            a = this.Sq.get(a);
            b = this.Sq.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          bw(a) {
            return this.Im[this.xk(a)].id;
          }
          has(a) {
            return this.Sq.has(a);
          }
          Cp(a) {
            return new __c.cK(this, a);
          }
          map(a) {
            return this.Im.map(({ ref: b, id: c }) => a(b, c));
          }
          flatMap(a) {
            return this.Im.flatMap(({ ref: b, id: c }) => a(b, c));
          }
          filter(a) {
            return this.Im.filter((b) => a(b.ref, b.id)).map((b) => b.ref);
          }
          forEach(a) {
            this.Im.forEach((b, c) => a(b.ref, b.id, c));
          }
          reduce(a, b) {
            return this.Im.reduce((c, d) => a(c, d.ref, d.id), b);
          }
          some(a) {
            return this.Im.some((b) => a(b.ref, b.id));
          }
          every(a) {
            return this.Im.every((b) => a(b.ref, b.id));
          }
          [ydc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.okb = a;
            this.ewb = (V0.D(this), 0);
            this.SZa = new WeakMap();
          }
        };
        var zdc;
        zdc = Symbol.iterator;
        var jac = class {
          static D(a) {
            M(a, { M8: T0 });
          }
          get M8() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.jg(b), b));
            return a;
          }
          tu(a) {
            return y(this.M8.get(a));
          }
          KZ(a) {
            return a != null ? this.jg(a) : void 0;
          }
          get empty() {
            return this.base.empty;
          }
          count() {
            return this.base.count();
          }
          toArray() {
            return this.base.toArray().map(this.jg);
          }
          wl() {
            return Uc(this.base.wl(), this.jg);
          }
          [zdc]() {
            return this.toArray()[Symbol.iterator]();
          }
          first(a) {
            return this.KZ(this.base.first(a && ((b) => a(this.jg(b)))));
          }
          last(a) {
            return this.KZ(this.base.last(a && ((b) => a(this.jg(b)))));
          }
          next(a, b) {
            return this.KZ(
              this.base.next(this.tu(a), b && ((c) => b(this.jg(c))))
            );
          }
          previous(a, b) {
            return this.KZ(
              this.base.previous(this.tu(a), b && ((c) => b(this.jg(c))))
            );
          }
          Ne(a, b) {
            return this.base.Ne(this.tu(a), this.tu(b));
          }
          bw(a) {
            return this.base.bw(this.tu(a));
          }
          has(a) {
            return this.base.has(this.tu(a));
          }
          set(a, b) {
            return this.jg(this.base.set(a, this.nI(b)));
          }
          replace(a, b) {
            return this.jg(this.base.replace(this.tu(a), this.nI(b)));
          }
          append(a) {
            return this.jg(this.base.append(this.nI(a)));
          }
          prepend(a) {
            return this.jg(this.base.prepend(this.nI(a)));
          }
          VH(a, b) {
            return this.jg(this.base.VH(a && this.tu(a), this.nI(b)));
          }
          insertBefore(a, b) {
            return this.jg(this.base.insertBefore(a && this.tu(a), this.nI(b)));
          }
          hE(a, b) {
            return this.base.hE(a && this.tu(a), b.map(this.nI)).map(this.jg);
          }
          delete(a) {
            this.base.delete(this.tu(a));
          }
          hA(a) {
            this.base.hA(a && ((b) => a(this.jg(b))));
          }
          Zq(a, b) {
            this.base.Zq(a && this.tu(a), this.tu(b));
          }
          Cp(a) {
            return new __c.cK(this, a);
          }
          map(a) {
            return this.base.map((b, c) => a(this.jg(b), c));
          }
          flatMap(a) {
            return this.base.flatMap((b, c) => a(this.jg(b), c));
          }
          filter(a) {
            return this.base.filter((b, c) => a(this.jg(b), c)).map(this.jg);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.jg(b), c));
          }
          reduce(a, b) {
            return this.base.reduce((c, d) => a(c, this.jg(d)), b);
          }
          some(a) {
            return this.base.some((b) => a(this.jg(b)));
          }
          every(a) {
            return this.base.every((b) => a(this.jg(b)));
          }
          constructor(a, b, c) {
            this.base = a;
            this.nI = b;
            this.jg = c;
            jac.D(this);
          }
        };
        var Adc,
          Bdc = class {
            get value() {
              return this.box.get();
            }
            constructor(a, b) {
              this.id = a;
              this.box = b;
            }
          };
        Adc = Symbol.iterator;
        var S0 = class {
          static D(a) {
            M(a, { Sq: T0, tR: T0, zS: T0 });
          }
          get Sq() {
            const a = new Map();
            this.cells.forEach((b, c) => a.set(b.value, c));
            return a;
          }
          xk(a) {
            return y(this.Sq.get(a), "ref not found");
          }
          get empty() {
            return !this.cells.length;
          }
          count() {
            return this.cells.length;
          }
          toArray() {
            return this.cells.map((a) => a.value);
          }
          wl() {
            return new Map(this.map((a, b) => [b, a]));
          }
          get tR() {
            return this.cells[0]?.value;
          }
          get zS() {
            return this.cells[this.cells.length - 1]?.value;
          }
          first(a) {
            return a ? this.cells.find((b) => a(b.value))?.value : this.tR;
          }
          last(a) {
            if (!a) return this.zS;
            const b = this.cells;
            for (let c = b.length - 1; c >= 0; c--) {
              const d = b[c];
              if (a(d.value)) return d.value;
            }
          }
          next(a, b) {
            const c = this.cells;
            for (a = this.xk(a) + 1; a < c.length; a++) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          previous(a, b) {
            const c = this.cells;
            for (a = this.xk(a) - 1; a >= 0; a--) {
              const d = c[a];
              if (d && (!b || b(d.value))) return d.value;
            }
          }
          Ne(a, b) {
            a = this.Sq.get(a);
            b = this.Sq.get(b);
            u(a != null);
            u(b != null);
            return a < b ? -1 : a > b ? 1 : 0;
          }
          bw(a) {
            return this.cells[this.xk(a)].id;
          }
          has(a) {
            return this.Sq.has(a);
          }
          Cp(a) {
            return new __c.cK(this, a);
          }
          map(a) {
            return this.cells.map((b) => a(b.value, b.id));
          }
          flatMap(a) {
            return this.cells.flatMap((b) => a(b.value, b.id));
          }
          filter(a) {
            return this.cells
              .filter((b) => a(b.value, b.id))
              .map((b) => b.value);
          }
          forEach(a) {
            this.cells.forEach((b) => a(b.value, b.id));
          }
          reduce(a, b) {
            return this.cells.reduce((c, d) => a(c, d.value, d.id), b);
          }
          some(a) {
            return this.cells.some((b) => a(b.value, b.id));
          }
          every(a) {
            return this.cells.every((b) => a(b.value, b.id));
          }
          [Adc]() {
            return this.toArray()[Symbol.iterator]();
          }
          constructor(a) {
            this.cells = (S0.D(this), void 0);
            this.cells = a.map((b, c) => new Bdc(String(c), b));
          }
        };
        var Qac = __c.P_()(() => ({
            nVb({ NK: a, ilb: b, version: c }, d, e) {
              e = e && {
                fonts: Q_("font", e.fonts),
                media: Q_("media", e.media),
                Cd: Q_("video", e.Cd),
                embeds: Q_("embed", e.embeds),
              };
              return {
                data: {
                  G: {
                    NK: a,
                    qv: {
                      domain: "resource",
                      resource: {
                        ref: { type: "blueprint", id: b, version: c },
                        resources: e,
                      },
                    },
                    type: "instance",
                    te: void 0,
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          Cdc = ({ resource: a, UC: b }) => {
            const c = jdc(() => {
              v$b(b, a.ref.ref);
            });
            return {
              La: new V0(() => {
                const d = u$b(b, a.ref.ref);
                return d
                  ? (__c.x(d.type === "group", "Expected group element"),
                    d.La.filter(__c.mb).map((e) =>
                      __c.QG.create({ ...e, locked: !0, lg: !0 })
                    ))
                  : [];
              }),
              Um: c,
            };
          },
          Yac = __c.E_()(({ ui: { UC: a } }) => ({
            metadata: { type: "blueprint", name: __c.K("iAtEVw") },
            G: {
              type: 0,
              Mx: ({ G: b }) => Cdc({ resource: b.qv.resource, UC: a }),
            },
            exports: {},
          }));
        i1 = __c.i1 = class {};
        i1.val = (a, b) => X_(0, 0, () => b)(a);
        i1.wx = (a) => {
          var b = __c.j1;
          return X_(1, 0, () => b)(a);
        };
        i1.ref = (a, b) => X_(0, 0, () => b)(a);
        i1.CEb = () => {
          var a = __c.j1;
          return X_(1, 1, () => a)(1);
        };
        i1.u5a = (a, b) => X_(0, 1, () => b)(a);
        i1.zpa = X_(0, 0, R_);
        i1.YVa = X_(0, 0, mac);
        i1.hh = X_(0, 0, T_);
        i1.kz = X_(1, 0, R_);
        i1.DRa = X_(1, 0, lac);
        i1.iDa = X_(1, 0, T_);
        i1.jE = X_(1, 0, S_);
        i1.OQa = X_(1, 0, nac);
        i1.tw = X_(1, 1, R_);
        i1.xma = X_(1, 1, lac);
        i1.Ly = X_(1, 1, mac);
        i1.GEb = X_(1, 1, S_);
        i1.ME = X_(1, 1, T_);
        i1.BEb = X_(1, 1, nac);
        i1.Pm = X_(0, 0, U_);
        i1.listRef = X_(0, 0, V_);
        i1.wVa = X_(0, 0, function (a) {
          return { kind: 9, itemType: a };
        });
        i1.dHa = X_(0, 0, W_);
        i1.yOb = X_(0, 0, oac);
        i1.FEb = X_(0, 1, U_);
        i1.HEb = X_(0, 1, W_);
        i1.Jua = X_(1, 0, W_);
        i1.DEb = X_(1, 1, U_);
        i1.EEb = X_(1, 1, V_);
        i1.t5a = X_(1, 1, W_);
        i1.Ubb = R_;
        i1.ixb = S_;
        i1.I7 = U_;
        i1.p1a = V_;
        i1.Rg = W_;
        i1.l1 = oac;
        i1.zCb = Y_({});
        var qac = Object.freeze({
          document: Object.freeze({}),
          G: Object.freeze({}),
        });
        var Iac = __c.Z_({
          G: Y_({
            NK: i1.zpa(1),
            qv: i1.dHa(2, {
              domain: i1.hh(1, "resource"),
              resource: i1.Jua(2, {
                ref: i1.Pm(2, "BlueprintRef"),
                resources: i1.HEb(3, {
                  fonts: i1.listRef(1, i1.I7("FontRef")),
                  media: i1.listRef(2, i1.I7("MediaRef")),
                  Cd: i1.listRef(3, i1.I7("VideoRef")),
                  embeds: i1.listRef(5, i1.I7("EmbedRef")),
                }),
              }),
            }),
          }),
        });
        var Ddc = class {
          constructor() {
            this.xX = { Nt: !1, CJ: !1, OG: !1, fH: !1 };
          }
        };
        var Edc = class {
          create(a) {
            switch (a.type) {
              case "rect":
                return this.e.classes.w2.create(
                  {},
                  { U: { fill: xac(this, a.fill) }, attributes: zac(this, a) }
                );
              default:
                const b = __c.JR.snapshot(a);
                return __c.JR.create({
                  ...b,
                  locked: !0,
                  lg: !0,
                  Cg: tac(this.C1a, a),
                });
            }
          }
          constructor(a, b) {
            this.e = a;
            this.te = b;
            this.C1a = new Ddc();
          }
        };
        var Fdc = class {
          constructor(a) {
            this.te = a;
          }
        };
        var Rac = __c.P_()(() => ({
            rVb({ NK: a, ilb: b, type: c }, d) {
              return {
                data: {
                  G: {
                    NK: a,
                    qv: {
                      domain: "document",
                      id: b,
                      version: 1,
                      Eb:
                        c === "source"
                          ? { type: c }
                          : { type: c, te: new Map() },
                    },
                  },
                  document: {},
                },
                O: d,
              };
            },
          })),
          Gdc = ({ data: a, EG: b, expr: c }) => {
            b = b.ysb(a.NK);
            if (!b) throw Error(`Blueprint set ${a.NK} not found`);
            const d = b.Ej.get(a.qv.id);
            if (!d)
              throw Error(
                `Blueprint ${a.qv.id} not found in blueprint set ${a.NK}`
              );
            if (a.qv.Eb.type === "source") return { La: d.elements };
            const e = new Edc(c, new Fdc(a.qv.Eb.te));
            return { La: c.list(() => d.elements.map((f) => e.create(f))) };
          },
          Zac = __c.E_()(({ oQ: { expr: a }, ui: { EG: b } }) => ({
            metadata: { type: void 0, name: void 0 },
            G: { type: 0, Mx: ({ G: c }) => Gdc({ data: c, EG: b, expr: a }) },
            exports: {},
          }));
        var Hdc = i1.l1(
          { type: void 0 },
          i1.Rg({ type: i1.hh(1, "anchoring"), value: i1.iDa(2, 1, 2, 3) }),
          i1.Rg({ type: i1.hh(1, "boolean"), value: i1.xma(2) }),
          i1.Rg({ type: i1.hh(1, "block_alignment"), value: i1.Ly(2) }),
          i1.Rg({ type: i1.hh(1, "non-negative-double"), value: i1.Ly(2) }),
          i1.Rg({ type: i1.hh(1, "double"), value: i1.Ly(2) }),
          i1.Rg({ type: i1.hh(1, "string"), value: i1.tw(2) }),
          i1.Rg({ type: i1.hh(1, "richtext2"), value: i1.Pm(2, "Richtext2") }),
          i1.Rg({ type: i1.hh(1, "text_anchor"), value: i1.iDa(2, 1, 2, 3) }),
          i1.Rg({ type: i1.hh(1, "text_effects"), value: i1.tw(2) }),
          i1.Rg({ type: i1.hh(1, "text_flow"), value: i1.tw(2) }),
          i1.Rg({ type: i1.hh(1, "image_fill"), value: i1.Pm(2, "Fill") }),
          i1.Rg({ type: i1.hh(1, "video_fill"), value: i1.Pm(2, "Fill") })
        );
        var Idc = i1.Rg({ type: i1.hh(1, "source") }),
          Jdc = i1.Rg({ type: i1.hh(1, "instance"), te: i1.wVa(2, Hdc) }),
          Jac = __c.Z_({
            G: Y_({
              NK: i1.zpa(1),
              qv: i1.dHa(2, {
                domain: i1.hh(1, "document"),
                id: i1.zpa(2),
                version: i1.jE(3),
                Eb: i1.yOb(4, { type: void 0 }, Idc, Jdc),
              }),
            }),
          });
        var Kdc = class {
            static D(a) {
              M(a, { Sl: d1.ref });
            }
            constructor(a) {
              this.Sl = (Kdc.D(this), void 0);
              this.Sl = a;
            }
          },
          Oac = __c.P_()(() => ({
            qVb(a, b) {
              return {
                data: {
                  G: {
                    Jva: { type: "embed", id: a, version: 0 },
                    FSa: b,
                    config: void 0,
                    QXa: void 0,
                  },
                  document: {},
                },
                O: { width: 1366, height: 768 },
              };
            },
          }));
        var Ldc = class {};
        var Mdc = class {
          static D(a) {
            M(a, { BRa: d1.ref });
          }
          get Oe() {
            return this.BRa;
          }
          constructor(a, b, c) {
            this.config = a;
            this.Ra = b;
            this.mC = c;
            this.Xn = (Mdc.D(this), void 0);
            this.fN = (d, e, f) => {
              this.Xn?.();
              this.Xn = void 0;
              const g = (q) => J_(f, new f1(q)),
                h = this.Ra,
                k = h ? (q) => Dac(h, f, q) : void 0,
                l = (q) => X$b(f, new V$b(q)),
                m = (q) => J_(f, new h1({ size: q })),
                n = {
                  Avb: (q) => {
                    this.config.RX?.Meb(
                      { ...q, xR: q.xR?.size },
                      d,
                      g,
                      k,
                      m,
                      l
                    );
                    return new Z$b();
                  },
                  uvb: e1((q) => {
                    this.BRa = q.body;
                  }),
                },
                p = this.mC && new sdc({ gga: this.mC.id, vd: this.mC.vd });
              this.Xn = Fac(
                () => d.config,
                async (q) => {
                  const r = await S$b(f, { config: q, Pha: void 0 });
                  r.config &&
                    r.config !== q &&
                    this.config.RX?.Meb(
                      { ...r, xR: r.xR?.size },
                      d,
                      g,
                      k,
                      m,
                      l
                    );
                }
              );
              Eac(this, d, f, g, k, m, l);
              return {
                Aqb: n,
                Oob: {
                  pvb: () =>
                    new G$b({ Ij: e.page?.container?.id, Sl: e.Sl, JPb: p }),
                  Y_b: () => new tdc(),
                },
              };
            };
            this.Jy = () => {
              this.Xn?.();
            };
          }
        };
        var Kac = __c.Z_({
          G: Y_({
            Jva: i1.Pm(1, "EmbedRef"),
            FSa: i1.zpa(35),
            config: i1.tw(29),
            QXa: i1.EEb(6, i1.I7("FontRef")),
          }),
        });
        var $ac = __c.E_()(({ ui: a }) => {
          const b = a.Fra,
            c = a.Ra,
            d = a.mC,
            e = new Ldc();
          return {
            metadata: {
              type: "codelet",
              name: __c.K("4kcGvw"),
              Xaa: (f) => f.FSa,
            },
            G4: () => new Kdc(void 0),
            G: __c.D_(
              L_(({ data: { G: f, local: g }, We: { Nca: h }, Ji: k }) => {
                kdc(() => {
                  g.Sl = k.Sl;
                });
                const [l] = $0(() => new Mdc(e, c, d)),
                  m = M_((n) => l.fN(f, k, n), [f, l, k]);
                return N_("div", {
                  style: { minHeight: l.Oe?.scrollHeight ?? k.O.height },
                  className: "fVbdNA",
                  children: N_(h, {
                    url: f.Jva.id,
                    children: ({ Gi: n }) =>
                      N_(b, { url: f.Jva.id, Gi: n, fN: m, Jy: l.Jy }),
                  }),
                });
              })
            ),
            exports: { config: e },
          };
        });
        var Lac = __c.Z_({
            G: Y_({
              bD: i1.Jua(
                1,
                Y_({
                  Kva: i1.Pm(1, "EmbedRef"),
                  config: i1.wVa(
                    2,
                    i1.Rg({
                      textContent: i1.tw(1),
                      backgroundColor: i1.tw(2, /^#[0-9a-f]{6}$/),
                    })
                  ),
                })
              ),
            }),
          }),
          Pac = __c.P_()(() => ({
            pVb(a, b) {
              return {
                data: {
                  G: {
                    bD: {
                      Kva: { type: "embed", id: a, version: 0 },
                      config: b,
                    },
                  },
                  document: {},
                },
                O: { width: 1366, height: 768 },
              };
            },
          })),
          Ndc = class {};
        var Odc = class {
          dispose() {
            this.Xn?.();
            this.Xn = void 0;
          }
          constructor(a) {
            this.config = a;
            this.fN = (b, c) => {
              this.dispose();
              this.Xn = Gac(b, c);
              return {
                zvb: (d) => {
                  this.config.RX?.G7b(b, d.Hya);
                  return new M$b();
                },
                Bvb: (d) => {
                  this.config.RX?.N7b(b, d.Hya, d.textContent);
                  return new O$b();
                },
              };
            };
            this.Jy = () => {
              this.dispose();
            };
          }
        };
        var abc = __c.E_()(({ ui: a }) => {
          const b = a.Gra,
            c = new Ndc();
          return {
            metadata: { type: void 0, name: void 0 },
            G: __c.D_(
              L_(({ data: { G: d }, We: { Nca: e } }) => {
                const [f] = $0(() => new Odc(c)),
                  g = M_((h) => f.fN(d.bD.ref, h), [d.bD.ref, f]);
                return N_(e, {
                  url: d.bD.ref.Kva.id,
                  children: ({ Gi: h }) =>
                    N_(b, { url: d.bD.ref.Kva.id, Gi: h, fN: g, Jy: f.Jy }),
                });
              })
            ),
            exports: { configuration: c },
          };
        });
        var p0 = class {
            static of(a, b, c) {
              return new p0(a, b, c);
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Mma = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Qdc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b) {
              var c = Pdc;
              this.jkb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          k1 = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.DFb = a;
              this.resultType = b;
              this.apply = c;
            }
          },
          Sdc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              var d = Rdc;
              this.keyType = a;
              this.valueType = b;
              this.resultType = c;
              this.apply = d;
            }
          },
          fbc = class {
            map(a) {
              return a(this);
            }
            constructor(a, b, c, d) {
              this.itemType = a;
              this.Ekb = b;
              this.resultType = c;
              this.reduce = d;
            }
          };
        var kbc = class {
          map(a) {
            return a(this);
          }
          constructor(a, b) {
            this.type = a;
            this.get = b;
          }
        };
        __c.Tdc = hbc(4);
        __c.l1 = hbc(6);
        __c.Udc = ibc(5);
        __c.m1 = ibc(0);
        var Vdc = class {},
          xbc = class extends Vdc {
            oua(a) {
              return new xbc(a(this.value));
            }
            sza(a) {
              return a(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          },
          ybc = class extends Vdc {
            oua(a, b) {
              return new ybc(b(this.value));
            }
            sza(a, b) {
              return b(this.value);
            }
            constructor(a) {
              super();
              this.value = this.value = a;
            }
          };
        var u0 = class {
            map(a) {
              return a(this);
            }
          },
          n1 = class extends u0 {
            VBa(a) {
              return this === a || a.VJa((b) => this.N7(b));
            }
            vS() {
              throw Error(`${this} is not iterable`);
            }
            iEa(a) {
              const b = this.propTypes ?? (this.propTypes = this.Mka());
              if (!b) throw Error(`${this} is not navigable"`);
              if (!b.hasOwnProperty(a))
                throw Error(`${this} has no navigable property "${a}"`);
              return b[a];
            }
            Mka() {
              throw Error(`${this} is not navigable`);
            }
            Dza(a) {
              a(this);
            }
            VJa(a) {
              return a(this);
            }
            constructor() {
              super();
              this.kind = "simple";
              this.propTypes = void 0;
            }
          },
          o1 = class extends n1 {
            N7(a) {
              return a instanceof o1 && this.name === a.name;
            }
            toString() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          p1 = class extends n1 {
            N7(a) {
              return a instanceof p1 && this.vp === a.vp;
            }
            toString() {
              return this.vp.name;
            }
            constructor(a) {
              super();
              this.vp = a;
            }
          },
          q1 = class extends n1 {
            N7(a) {
              return a instanceof q1 && this.vp === a.vp && t0(this.arg, a.arg);
            }
            toString() {
              return `${this.vp}<${this.arg}>`;
            }
            constructor(a, b) {
              super();
              this.vp = a;
              this.arg = b;
            }
          },
          Wdc = class extends q1 {
            vS() {
              return this.arg;
            }
            Mka() {
              const a = this.arg;
              return {
                size: D0.number,
                empty: D0.$g,
                get first() {
                  return D0.optional(a);
                },
              };
            }
            constructor(a) {
              super("array", a);
            }
          },
          Xdc = class extends q1 {
            vS() {
              return this.arg;
            }
            Mka() {
              const a = this.arg;
              return {
                size: D0.number,
                empty: D0.$g,
                get first() {
                  return D0.optional(a);
                },
              };
            }
            constructor(a) {
              super("set", a);
            }
          },
          Ydc = class extends n1 {
            N7(a) {
              return (
                a instanceof Ydc &&
                t0(this.key, a.key) &&
                t0(this.value, a.value)
              );
            }
            toString() {
              return `map<${this.key}, ${this.value}>`;
            }
            constructor(a, b) {
              super();
              this.key = a;
              this.value = b;
            }
          },
          Zdc = class extends n1 {
            N7(a) {
              return a instanceof Zdc
                ? Object.entries(a.fields).every(
                    ([b, c]) =>
                      this.fields.hasOwnProperty(b) && t0(this.fields[b], c)
                  )
                : !1;
            }
            Mka() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${a.map(([b, c]) => `${b}: ${c}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
            }
          },
          r1 = class extends u0 {
            VBa(a) {
              return this === a || this.rg.every((b) => b.VBa(a));
            }
            vS() {
              return D0.union(...this.rg.map((a) => a.vS()));
            }
            iEa(a) {
              return D0.union(...this.rg.map((b) => b.iEa(a)));
            }
            Dza(a) {
              this.rg.forEach((b) => b.Dza(a));
            }
            VJa(a) {
              return this.rg.some((b) => b.VJa(a));
            }
            toString() {
              return this.rg.length
                ? this.rg.map((a) => a.toString()).join(" | ")
                : "never";
            }
            constructor(a) {
              super();
              this.rg = a;
              this.kind = "disjunction";
              u(a.length !== 1);
            }
          },
          s1 = new r1([]),
          $dc = new o1("string"),
          aec = new o1("number"),
          bec = new o1("boolean"),
          cec = new o1("undefined"),
          dec = new r1([$dc, aec, bec]),
          eec = class {
            get never() {
              return s1;
            }
            get string() {
              return $dc;
            }
            get number() {
              return aec;
            }
            get $g() {
              return bec;
            }
            get undefined() {
              return cec;
            }
            get primitive() {
              return dec;
            }
            optional(a) {
              return D0.union(a, D0.undefined);
            }
            array(a) {
              return new Wdc(a);
            }
            set(a) {
              return new Xdc(a);
            }
            $W(a) {
              return new r1([new Wdc(a), new Xdc(a)]);
            }
            map(a, b) {
              return new Ydc(a, b);
            }
            Rb(a) {
              return new Zdc({ ...a });
            }
            union(...a) {
              if (a.length === 0) return s1;
              if (a.length === 1) return a[0];
              const b = new Set();
              for (const d of a) jbc(d).Dza((e) => b.add(e));
              a = [...b];
              if (a.length === 0) return s1;
              if (a.length === 1) return a[0];
              if (a.length === 2) {
                const [d, e] = a;
                return t0(d, e) ? e : t0(e, d) ? d : new r1(a);
              }
              const c = new Set();
              for (const d of a)
                [...c].some((e) => t0(d, e)) ||
                  (c.forEach((e) => t0(e, d) && c.delete(e)), c.add(d));
              return c.size === 1 ? [...c][0] : new r1([...c]);
            }
            constructor() {
              this.optional = v0(this.optional);
              this.array = v0(this.array);
              this.set = v0(this.set);
              this.$W = v0(this.$W);
            }
          },
          fec = class extends eec {
            instance(a) {
              return new p1(a);
            }
          },
          D0 = new fec(),
          gec = class extends eec {
            instance(a) {
              return new p1(y(this.classes[a]));
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var hec,
          iec,
          t1 = Symbol("value"),
          u1 = class {
            get props() {
              return this.qjb ?? (this.qjb = this.Pta());
            }
          },
          jec = class {
            get size() {
              return this[t1].length;
            }
            get empty() {
              return this[t1].length === 0;
            }
            get first() {
              return this[t1][0];
            }
            constructor(a) {
              this[t1] = a;
            }
          };
        hec = Symbol.iterator;
        var kec = class extends u1 {
            Pta() {
              return new jec(this.items);
            }
            map(a) {
              return this.items.map(a);
            }
            [hec]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.length
                ? `[${Array.from(this.items, y0).join(", ")}]`
                : "[]";
            }
            constructor(a) {
              super();
              this.kind = "array";
              this.items = [...a];
            }
          },
          lec = class {
            get size() {
              return this[t1].size;
            }
            get empty() {
              return this[t1].size === 0;
            }
            get first() {
              return this[t1][Symbol.iterator]().next().value;
            }
            constructor(a) {
              this[t1] = a;
            }
          };
        iec = Symbol.iterator;
        var mec = class extends u1 {
            Pta() {
              return new lec(this.items);
            }
            map(a) {
              return Array.from(this.items, a);
            }
            [iec]() {
              return this.items[Symbol.iterator]();
            }
            toString() {
              return this.items.size
                ? `Set [${Array.from(this.items, y0).join(", ")}]`
                : "Set []";
            }
            constructor(a) {
              super();
              this.kind = "set";
              this.items = new Set(a);
            }
          },
          nec = class {
            toString() {
              return this.items.size
                ? `Map {${Array.from(
                    this.items,
                    ([a, b]) => `[${y0(a)}]: ${y0(b)}`
                  ).join(", ")}}`
                : "Map {}";
            }
            constructor(a) {
              this.items = a;
              this.kind = "map";
            }
          },
          oec = class extends u1 {
            Pta() {
              return this.fields;
            }
            toString() {
              const a = Object.entries(this.fields);
              return a.length
                ? `{ ${[...a].map(([b, c]) => `${b}: ${y0(c)}`).join(", ")} }`
                : "{}";
            }
            constructor(a) {
              super();
              this.fields = a;
              this.kind = "record";
            }
          },
          pec = class {
            toString() {
              return `[instance ${this.vp.name}]`;
            }
            constructor(a, b) {
              this.vp = a;
              this.instance = b;
              this.kind = "instance";
            }
          },
          qec = class {
            array(a) {
              return new kec(a);
            }
            arrayOf(...a) {
              return new kec(a);
            }
            set(a) {
              return new mec(a);
            }
            map(a) {
              return new nec(new Map(a));
            }
            Rb(a) {
              return new oec({ ...a });
            }
          },
          rec = class extends qec {
            instance(a, b) {
              return new pec(a, b);
            }
            stringify(a) {
              return y0(a);
            }
            constructor() {
              super();
              this.nh = x0;
            }
          },
          H0 = new rec(),
          sec = class extends qec {
            instance(a, b) {
              a = y(this.classes[a]);
              return new pec(a, b);
            }
            constructor(a) {
              super();
              this.classes = a;
            }
          };
        var wbc = {
            [0]: q0(D0.number, D0.number, (a) => -a),
            [1]: q0(D0.string, D0.number, (a) => a.length),
            [2]: q0(D0.$g, D0.$g, (a) => !a),
            [3]: r0(D0.number, D0.number, D0.number, (a, b) => a + b),
            [4]: r0(D0.number, D0.number, D0.number, (a, b) => a - b),
            [5]: r0(D0.number, D0.number, D0.number, (a, b) => a * b),
            [6]: r0(D0.number, D0.number, D0.number, (a, b) => a / b),
            [7]: r0(D0.number, D0.number, D0.number, (a, b) => a % b),
            [8]: r0(D0.string, D0.string, D0.string, (a, b) => a + b),
            [9]: r0(D0.number, D0.number, D0.$g, (a, b) => a === b),
            [10]: r0(D0.number, D0.number, D0.$g, (a, b) => a !== b),
            [11]: r0(D0.number, D0.number, D0.$g, (a, b) => a < b),
            [12]: r0(D0.number, D0.number, D0.$g, (a, b) => a <= b),
            [13]: r0(D0.number, D0.number, D0.$g, (a, b) => a > b),
            [14]: r0(D0.number, D0.number, D0.$g, (a, b) => a >= b),
            [15]: r0(D0.$g, D0.$g, D0.$g, (a, b) => a && b),
            [16]: r0(D0.$g, D0.$g, D0.$g, (a, b) => a || b),
          },
          Bbc = {
            [2]: new k1(D0.number, D0.number, (a) =>
              a.reduce((b, c) => b + c, 0)
            ),
            [3]: new k1(D0.number, D0.number, (a) =>
              a.reduce((b, c) => b * c, 1)
            ),
            [4]: new k1(D0.number, D0.number, (a) => Math.max(...a)),
            [5]: new k1(D0.number, D0.number, (a) => Math.min(...a)),
            [6]: new k1(D0.string, D0.string, (a) => a.join("")),
          },
          tec = (a) => H0.array(a),
          uec = (a) => H0.set(a),
          zbc = {
            [0]: (a) => new k1(a, D0.array(a), tec),
            [1]: (a) => new k1(a, D0.set(a), uec),
          },
          Rdc = (a) => H0.map(a),
          nbc = { [0]: (a, b) => new Sdc(a, b, D0.map(a, b)) },
          Pdc = (a) => H0.Rb(a),
          Ebc = { [0]: (a) => new Qdc(a, D0.Rb(a)) },
          vec = (a, b) => H0.array(b.map((c) => c())),
          wec = (a, b) => H0.array(b.flatMap((c) => c().items)),
          xec = (a, b) => H0.array(a.filter((c, d) => b[d]()).map((c) => c())),
          yec = (a, b) => b.some((c) => c()),
          zec = (a, b) => b.every((c) => c()),
          Aec = (a, b) => a.find((c, d) => b[d]())?.(),
          pbc = {
            [0]: (a, b) => b.map((c) => s0(a, c, D0.array(c), vec)),
            [1]: (a, b) =>
              b.vS().map((c) => s0(a, D0.array(c), D0.array(c), wec)),
            [2]: (a) => s0(a, D0.$g, D0.array(a), xec),
            [3]: (a) => s0(a, D0.$g, D0.$g, yec),
            [4]: (a) => s0(a, D0.$g, D0.$g, zec),
            [5]: (a) => s0(a, D0.$g, D0.optional(a), Aec),
          };
        var A0 = class {
          define(a, b) {
            return new A0(new Map([[a, b]]), this);
          }
          resolve(a) {
            const b = this.defs.get(a);
            if (b) return b;
            if (this.parent) return this.parent.resolve(a);
            throw Error(`undefined symbol: "${a}"`);
          }
          constructor(a, b) {
            this.defs = a;
            this.parent = b;
          }
        };
        var Cec = (a, b, c) => {
            const d = z0.create(b.ZK),
              e = new Bec(a);
            return {
              compile: (f) => {
                const g = tbc(e, d, f).as(c);
                return (h) => {
                  h = new A0(new Map(b.decode(h).WHa));
                  return g(h);
                };
              },
            };
          },
          z0 = class {
            static create(a) {
              return new z0(new A0(new Map(a)), new A0(new Map()));
            }
            constructor(a = new A0(new Map()), b = new A0(new Map())) {
              this.vars = a;
              this.v6 = b;
            }
          },
          Bec = class {
            constructor(a) {
              this.types = a;
            }
          },
          F0 = class {
            static of(a, b) {
              return new F0(a, b);
            }
            as(a) {
              if (!t0(this.type, a))
                throw Error(
                  `type ${this.type} does not match expected type: ${a}`
                );
              return this.evaluate;
            }
            computed() {
              const a = this.evaluate;
              return new F0(this.type, (b) => {
                const c = T0(a(b), { equals: H0.nh });
                return () => c.get();
              });
            }
            map(a) {
              return a(this.type, this.evaluate);
            }
            constructor(a, b) {
              this.type = a;
              this.evaluate = b;
            }
          },
          Pbc = class {
            as(a, b) {
              const c = this.Mma,
                d = this.resultType;
              if (a.length < c.length)
                throw Error(
                  `Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`
                );
              for (let e = 0; e < c.length; e++)
                if (!t0(a[e], c[e]))
                  throw Error(
                    `Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`
                  );
              if (!t0(d, b))
                throw Error(
                  `return type ${d} is not assignable to expected type: ${b}`
                );
              return this.evaluate;
            }
            map(a) {
              return a(this);
            }
            constructor(a, b, c) {
              this.Mma = a;
              this.resultType = b;
              this.evaluate = c;
            }
          };
        var vcc = class {
            add(a) {
              a = a(Dec, this.types);
              return new vcc({ ...this.classes, ...a });
            }
            resolve(a) {
              return this.classes[a];
            }
            evaluate(a) {
              const b = this.types;
              switch (a.kind) {
                case 0:
                  switch (a.name) {
                    case "string":
                      return b.string;
                    case "number":
                      return b.number;
                    case "boolean":
                      return b.$g;
                    case "undefined":
                      return b.undefined;
                    default:
                      throw new E(a);
                  }
                case 1:
                  return b.instance(a.name);
                case 4:
                  switch (a.name) {
                    case "array":
                      return b.array(this.evaluate(a.MQa));
                    case "set":
                      return b.set(this.evaluate(a.MQa));
                    default:
                      throw new E(a);
                  }
                case 5:
                  switch (a.name) {
                    case "map":
                      const c = this.evaluate(a.MQa);
                      a = this.evaluate(a.ATb);
                      if (!t0(c, b.primitive))
                        throw Error(`key type is not a primitive: ${c}`);
                      return b.map(c, a);
                    default:
                      throw new E(a);
                  }
                case 3:
                  return b.union(...a.args.map((c) => this.evaluate(c)));
                case 2:
                  return b.Rb(me(a.args, (c) => this.evaluate(c)));
                default:
                  throw new E(a);
              }
            }
            constructor(a) {
              this.classes = a;
              this.types = new gec(this.classes);
              this.values = new sec(this.classes);
            }
          },
          Dec = class {
            constructor(a, b, c) {
              this.name = a;
              this.create = c;
              this.mCb = new p0([D0.Rb(b)], D0.instance(this), (d) =>
                H0.instance(this, c(d.fields))
              );
            }
          };
        var Eec;
        Eec = Symbol.iterator;
        var Qbc = class {
          static D(a) {
            M(a, { M8: T0 });
          }
          get M8() {
            const a = new Map();
            this.base.forEach((b) => a.set(this.jg(b), b));
            return a;
          }
          tu(a) {
            return y(this.M8.get(a));
          }
          KZ(a) {
            return a != null ? this.jg(a) : void 0;
          }
          get size() {
            return this.base.size;
          }
          get(a) {
            a = this.base.get(a);
            return this.KZ(a);
          }
          has(a) {
            return this.base.has(a);
          }
          forEach(a) {
            this.base.forEach((b, c) => a(this.jg(b), c));
          }
          map(a) {
            return this.base.map((b, c) => a(this.jg(b), c));
          }
          set(a, b) {
            return this.jg(this.base.set(a, this.nI(b)));
          }
          every(a) {
            return this.base.every((b, c) => a(this.jg(b), c));
          }
          delete(a) {
            this.base.delete(a);
          }
          entries() {
            return Sbc(this.base.entries(), ([a, b]) => [a, this.jg(b)]);
          }
          keys() {
            return this.base.keys();
          }
          values() {
            return Sbc(this.base.values(), this.jg);
          }
          [Eec]() {
            return this.wl()[Symbol.iterator]();
          }
          wl() {
            return Uc(this.base.wl(), this.jg);
          }
          constructor(a, b, c) {
            this.base = a;
            this.nI = b;
            this.jg = c;
            Qbc.D(this);
          }
        };
        var v1 = class {
            JL(a) {
              return new Fec(this, a);
            }
            m6(a) {
              return new Gec(this, a);
            }
            yR(a) {
              return new Hec(this, a);
            }
            toString() {
              return this.s ?? (this.s = this.N8());
            }
          },
          ecc = class extends v1 {
            JL(a) {
              return new Iec(a);
            }
            m6() {
              throw Error();
            }
            yR() {
              throw Error();
            }
            N8() {
              return "(global)";
            }
          },
          Iec = class extends v1 {
            N8() {
              return this.name;
            }
            constructor(a) {
              super();
              this.name = a;
            }
          },
          Fec = class extends v1 {
            N8() {
              return `${this.parent}.${this.name}`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.name = b;
            }
          },
          Gec = class extends v1 {
            N8() {
              return `${this.parent}["${this.key}"]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.key = b;
            }
          },
          Hec = class extends v1 {
            N8() {
              return `${this.parent}[${this.index}]`;
            }
            constructor(a, b) {
              super();
              this.parent = a;
              this.index = b;
            }
          },
          dcc = class {
            error(a, b) {
              return Error(
                `widget '${this.TPb}': schema error on key '${a}': ${b}`
              );
            }
            constructor(a) {
              this.TPb = a;
            }
          },
          hcc = {
            string: "string",
            boolean: "boolean",
            double: "number",
            int32: "number",
            list: "object",
            dict: "object",
            ref: "object",
            fill: "object",
            stroke: "object",
            text2: "object",
          },
          Zbc = new Set(["string", "boolean", "int32"]),
          icc = {
            font: "font",
            media: "media",
            video: "video",
            audio: "audio",
            embed: "embed",
            scene: "scene",
            blueprint: "blueprint",
          };
        var Ncc, occ, M0, Jec, Kec;
        __c.w1 = class {
          map(a, b) {
            const c = this.get,
              d = this.set;
            return new __c.w1(
              () => a(c()),
              (e) => d(b(e))
            );
          }
          project({ get: a, set: b }) {
            const c = this.get,
              d = this.set;
            return new __c.w1(
              () => a(c()),
              (e) => d(b(c(), e))
            );
          }
          constructor(a, b) {
            this.get = a;
            this.set = b;
          }
        };
        Ncc = class {
          read(a) {
            return L0(a) ? a() : a;
          }
          computed(a) {
            const b = T0(a);
            return () => b.get();
          }
          map(a, b) {
            return L0(a) ? () => b(a()) : b(a);
          }
          box(a) {
            return new hdc(L0(a) ? new gdc(T0(a)) : new fdc(a));
          }
          list(a) {
            const b = this.map(
              a,
              (c) => new __c.V$a(new S0(c.map((d) => (L0(d) ? T0(d) : jcc(d)))))
            );
            return L0(b) ? __c.te(() => b()) : b;
          }
          constructor() {
            this.classes = ucc();
          }
        };
        occ = (a) => {
          const b = a.vp,
            c = a.te,
            d = c.U,
            e = c.attributes;
          kcc(a.args, d, e);
          return {
            create: function (f, g) {
              const h = {};
              var k;
              const l = g?.U;
              g = g?.attributes;
              if (l)
                for (const [m, n] of Object.entries(l))
                  u(m in d, "unknown override: '{}'", m),
                    L0(n) ? ((k || (k = {}))[m] = n) : (h[m] = Jec(n));
              if (g)
                for (const [m, n] of Object.entries(g))
                  u(m in e, "unknown override: '{}'", m),
                    (h[m] =
                      n instanceof __c.w1
                        ? n
                        : L0(n)
                        ? { enumerable: !0, get: n, set: M0 }
                        : Kec(n));
              if (k)
                return lcc(
                  k,
                  ncc((m) => {
                    const n = b(f);
                    Object.defineProperties(n, { ...h, ...me(m, Jec) });
                    return n;
                  })
                );
              k = b(f);
              Object.defineProperties(k, h);
              return k;
            },
          };
        };
        M0 = () => {};
        Jec = (a) => ({ enumerable: !0, writable: !1, value: a });
        Kec = (a) => ({ enumerable: !0, get: () => a, set: M0 });
        var N0 = {
          top: void 0,
          left: void 0,
          width: void 0,
          height: void 0,
          rotation: void 0,
          locked: void 0,
          Cg: void 0,
        };
        var Lec = new Map(),
          x1 = [],
          P0 = Object.freeze({
            Rl: void 0,
            image: void 0,
            video: void 0,
            Pa: void 0,
            color: void 0,
            xa: 0,
            locked: !0,
            lg: !0,
            Sk: void 0,
            Vc: void 0,
            K: void 0,
            transition: void 0,
            flipX: !1,
            flipY: !1,
          }),
          rcc = Object.freeze({ fill: P0, stroke: void 0, N: 0 }),
          qcc = Object.freeze({
            weight: 0,
            color: "#000000",
            fill: P0,
            Oc: x1,
            re: !1,
          }),
          y1 = Object.freeze({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            rotation: 0,
            xa: 0,
            Wi: void 0,
            fa: void 0,
            K: void 0,
            transition: void 0,
            oa: x1,
            Ub: x1,
            animation: void 0,
            If: void 0,
            link: void 0,
            locked: !0,
            Cg: void 0,
            lg: !0,
            Sk: void 0,
            Sa: void 0,
            Or: void 0,
            Af: x1,
            eF: Lec,
            NB: Lec,
            anchor: void 0,
            ah: Lec,
          }),
          Q0 = Object.freeze({
            ...y1,
            type: "rect",
            fill: P0,
            stroke: void 0,
            N: x1,
          }),
          R0 = Object.freeze({
            ...y1,
            type: "shape",
            slice: void 0,
            Jj: void 0,
            ub: x1,
            resizeMode: void 0,
          }),
          scc = Object.freeze({
            ...y1,
            type: "text",
            text: __c.Jk.Ox("\n"),
            Ha: Object.freeze({ ib: [] }),
            Te: void 0,
            placeholder: void 0,
            Mf: 1,
            writingMode: void 0,
            J: void 0,
            P: void 0,
            lo: !1,
            Xz: void 0,
            Ah: void 0,
            Vc: void 0,
          }),
          tcc = Object.freeze({ ...y1, type: "embed" });
        var Lcc = class {
            I4(a, b) {
              const c = __c.Nh(a);
              __c.x(c.type !== "body", "Unexpected body context.");
              switch (c.type) {
                case "fixed-page":
                  return {
                    page: this.mk.xYa(c),
                    O: new Mec(a),
                    Sl: a.G.id,
                    De: b,
                  };
                case "concatenated-fixed-page":
                  return {
                    page: this.mk.nYa(c),
                    O: new Mec(a),
                    Sl: a.G.id,
                    De: b,
                  };
                case "responsive-page":
                  return {
                    page: this.mk.MYa(c),
                    O: new Mec(a),
                    Sl: a.G.id,
                    De: b,
                  };
                default:
                  throw new E(c);
              }
            }
            constructor(a, b) {
              this.Vna = a;
              u(
                b.Tf === "fixed",
                "Responsive documents are not supported in widget rendering."
              );
              this.pb = __c.Sh(b);
              this.mk = new Nec(this.Vna, this.pb);
            }
          },
          Mec = class {
            get width() {
              return this.container.type === "controlled-item"
                ? this.container.G.Oe?.width || 0
                : this.container.G.J;
            }
            get height() {
              return this.container.type === "controlled-item"
                ? this.container.G.Oe?.height || 0
                : this.container.G.P;
            }
            constructor(a) {
              this.container = a;
            }
          },
          Oec = class {
            getIndex() {
              return this.UL(this.page);
            }
            get id() {
              return this.page.G.id;
            }
            get title() {
              return this.page.G.title;
            }
            get anchor() {
              return this.page.G.anchor;
            }
            get Lxb() {
              return this.page.G.eg;
            }
            constructor(a, b) {
              this.page = a;
              this.UL = b;
            }
          },
          Pec = class extends Oec {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "fixed";
            }
          },
          Qec = class extends Oec {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "concatenated-fixed";
            }
          },
          Rec = class extends Oec {
            constructor(a, b, c) {
              super(a, b);
              this.page = a;
              this.container = c;
              this.type = "responsive";
            }
          },
          Sec = class {
            get id() {
              return this.Vna?.id;
            }
            get extension() {
              return this.Vna?.extension;
            }
            get language() {
              return this.pb.G.language;
            }
            constructor(a, b) {
              this.Vna = a;
              this.pb = b;
            }
          },
          Nec = class extends Sec {
            static D(a) {
              M(a, {
                Z: T0({ equals: ldc.shallow }),
                U3a: T0({ equals: ldc.shallow }),
              });
            }
            get Z() {
              return this.pb.G.Z.map((a) => this.zub(this.pb.Se(a)));
            }
            get U3a() {
              return this.pb.G.Z.toArray();
            }
            constructor(a, b) {
              super(a, b);
              this.vn = a;
              this.pb = b;
              this.type = (Nec.D(this), "fixed");
              this.xYa = a1((c) => new Pec(c, this.UL, this));
              this.nYa = a1((c) => new Qec(c, this.UL, this));
              this.MYa = a1((c) => new Rec(c, this.UL, this));
              this.zub = a1((c) => {
                switch (c.type) {
                  case "fixed-page":
                    return this.xYa(c);
                  case "concatenated-fixed-page":
                    return this.nYa(c);
                  case "responsive-page":
                    return this.MYa(c);
                  default:
                    throw new E(c);
                }
              });
              this.UL = a1((c) => {
                c = this.pb.G.Z.has(c.G) ? c.G : void 0;
                return c != null ? this.U3a.indexOf(c) : -1;
              });
            }
          };
        var Tec = class {
          constructor(a) {
            this.cIa = a;
            this.PTa = new Map();
          }
        };
        var Icc = class {
          add(a, b) {
            let c = this.store.get(a);
            c || ((c = d1.set(void 0, { deep: !1 })), this.store.set(a, c));
            c.add(b);
          }
          get(a) {
            return this.store.get(a);
          }
          remove(a, b) {
            const c = this.store.get(a);
            c && (c.delete(b), c.size === 0 && this.store.delete(a));
          }
          constructor() {
            this.store = new __c.eA();
          }
        };
        var Acc = class {
          Pc(a) {
            let b = this.store.get(a);
            b == null && ((b = this.hob()), this.store.set(a, b));
            return b;
          }
          constructor(a) {
            this.hob = a;
            this.store = new WeakMap();
          }
        };
        var Tac = new Set(),
          Uac = { Mx: () => ({ La: xdc }) },
          Mcc = class {
            static D(a) {
              M(a, { L$: d1.shallow });
            }
            Kha(a) {
              return this.L$.get(a)?.G;
            }
            constructor(a, b, c, d, e, f, g, h) {
              this.pb = a;
              this.cIa = b;
              this.e1 = c;
              this.twa = d;
              this.I = e;
              this.QPb = f;
              this.We = g;
              this.Hqb = h;
              this.L$ = (Mcc.D(this), new Map());
            }
          },
          Fcc = (a, b) => ({
            ...a,
            Nca: (c) => N_(a.Nca, { ...c, Flb: b || !1 }),
          }),
          Gcc = (a, b) => ({
            ...a,
            Di: (c) => N_(a.Di, { ...c, scale: b || 1 }),
          });
        var Uec = class {
          static D(a) {
            M(a, { $$: d1.shallow });
          }
          constructor(a) {
            this.LTa = a;
            this.$$ = (Uec.D(this), new Map());
          }
        };
        var Vec = class extends idc {
          render() {
            const {
              children: a,
              component: b = "div",
              PGb: c,
              Xla: d,
            } = this.props;
            let e = {};
            d &&
              (e = c.reduce((f, g) => {
                f[g] = this.gjb;
                return f;
              }, {}));
            return N_(b, { className: "_kI3Pw", ...e, children: a });
          }
          componentDidMount() {
            this.props.Xla && Vcc(this);
          }
          componentDidUpdate() {
            this.props.Xla && Vcc(this);
          }
          componentWillUnmount() {
            this.vP && (this.vP(), (this.vP = null));
          }
          constructor(...a) {
            super(...a);
            this.Wsa = this.vP = null;
            this.gjb = (b) => {
              this.Wsa = b.nativeEvent;
            };
            this.tPa = (b) => {
              const c = this.props.Xla,
                d = this.Wsa === b;
              c && !d && c(b);
              this.Wsa = null;
            };
          }
        };
        var Ycc = (a) =>
          N_(Vec, {
            PGb: ["onMouseDown", "onTouchStart"],
            bqb: ["mousedown", "touchstart"],
            Xla: a.B9,
            children: a.children,
          });
        var Wcc = class {
            static D(a) {
              M(a, { Gi: d1.ref });
            }
            constructor() {
              this.Gi = (Wcc.D(this), !0);
            }
          },
          Xcc = class {
            static D(a) {
              M(a, {
                onDoubleClick: e1.bound,
                onTouchEnd: e1.bound,
                reset: e1.bound,
              });
            }
            onDoubleClick() {
              this.store.Gi = !1;
            }
            onTouchEnd(a) {
              a.touches.length > 0 ||
                (this.BU
                  ? (window.clearTimeout(this.BU),
                    (this.BU = void 0),
                    (this.store.Gi = !1))
                  : (this.BU = window.setTimeout(
                      () => (this.BU = void 0),
                      300
                    )));
            }
            reset() {
              this.store.Gi = !0;
            }
            SW() {
              this.BU && window.clearTimeout(this.BU);
            }
            constructor(a) {
              this.store = a;
              this.BU = (Xcc.D(this), void 0);
            }
          };
        __c.MZa = {
          gxb: function ({
            document: a,
            mk: b,
            mC: c,
            Zy: d,
            UC: e,
            EG: f,
            Ag: g,
            Wga: h,
            Ra: k,
            vf: l,
            Xe: m,
            Vf: n,
            De: p,
            dha: q,
            DD: r,
            VPb: t,
            y9a: v,
            b8a: w,
            qia: z,
          }) {
            const A = g.iM,
              C = g.Yh;
            var B = g.I;
            const D = g.kf,
              J = g.ha,
              L = g.nWa,
              N = g.Ta;
            var O = h.yp;
            const { hya: S = !1, uya: U = !1, pya: V = !1 } = t ?? {},
              { Go: Z, twa: ca } = { Go: xcc(), twa: Cec };
            t = new Uec(fcc(Z));
            const {
              qNa: ja,
              kra: ra,
              Cwa: oa,
              e1: na,
            } = { qNa: t, kra: t, Cwa: ca, e1: Z };
            q = Mac({ qNa: ja, hya: S, dha: q, uya: U, pya: V });
            t = new Tec(ra);
            const { pNa: Ha, Mfb: ba } = { pNa: t, Mfb: t };
            t = Sac({ rNa: q, pNa: Ha });
            B = B.Wf("widget");
            O = Zcc({ yp: O, Ta: N });
            const la = cdc();
            m = ddc({ Xe: m });
            n = $cc({ gj: n });
            const sa = bdc({ Ra: k, qia: z });
            z = edc({ Ra: k, qia: z });
            const {
              wca: wa,
              oC: Ta,
              expr: Da,
            } = Occ({
              I: B,
              kra: ra,
              UPb: { Nca: O, ERb: la, Di: m, Nk: n, Qca: sa, rsa: z },
              RPb: { Di: Scc() },
              Cwa: oa,
              e1: na,
              vn: b,
              pb: a,
              y9a: v,
              b8a: w,
            });
            a = hac({
              De: p,
              yp: h.yp,
              Gq: h.Gq,
              Ta: g.Ta,
              I: g.I.Wf("codelet"),
            });
            g = iac({
              De: p,
              yp: h.yp,
              Gq: h.Gq,
              Ta: g.Ta,
              I: g.I.Wf("codelet2"),
            });
            c = bbc({
              rNa: q,
              wca: wa,
              kf: D,
              oQ: { I: B, ha: J, vf: p === 30 ? l : void 0, Ta: N, expr: Da },
              ui: {
                Zy: d,
                EG: f,
                UC: e,
                nWa: L,
                Ra: k,
                mC: c,
                Fra: a,
                Gra: g,
                DD: r,
                iM: A,
                Yh: C,
              },
            });
            return { kra: ra, oC: Ta, Hcc: c, Fcc: t, Mfb: ba };
          },
        };
      }.call(self, self._5f74ec40302898c5a55451c9fbd04240));
    },
  },
]);
//# sourceMappingURL=sourcemaps/d17924131226c36a.js.map
