/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/monotone-chain-convex-hull@1.1.0/lib/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
'use strict';
function monotoneChainConvexHull(e, n = {}) {
    const { sorted: o } = n;
    o || (e = e.slice().sort(byXThenY));
    const t = e.length,
        r = new Array(2 * t);
    let c = 0;
    for (let n = 0; n < t; n++) {
        const o = e[n];
        for (; c >= 2 && cw(r[c - 2], r[c - 1], o) <= 0; ) c--;
        r[c++] = o;
    }
    const s = c + 1;
    for (let n = t - 2; n >= 0; n--) {
        const o = e[n];
        for (; c >= s && cw(r[c - 2], r[c - 1], o) <= 0; ) c--;
        r[c++] = o;
    }
    return r.slice(0, c - 1);
}
function cw(e, n, o) {
    return (n[1] - e[1]) * (o[0] - e[0]) - (n[0] - e[0]) * (o[1] - e[1]);
}
function byXThenY(e, n) {
    return e[0] === n[0] ? e[1] - n[1] : e[0] - n[0];
}
//# sourceMappingURL=/sm/e183dce3dc26b65fa5142cdfae542e6d69cecb964459bb3709b5e684e9488c05.map
