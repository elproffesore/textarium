/**
 * Minified by jsDelivr using Terser v5.19.2.
 * Original file: /npm/porter-stemmer@0.9.1/porter.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
    var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log",
        },
        t = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" },
        i = "[aeiouy]",
        s = "[^aeiou][^aeiouy]*",
        n = i + "[aeiou]*",
        a = "^(" + s + ")?" + n + s,
        l = "^(" + s + ")?" + n + s + "(" + n + ")?$",
        o = "^(" + s + ")?" + n + s + n + s,
        c = "^(" + s + ")?" + i;
    function stemmer(n) {
        var r, u, x, p, $, g, w;
        if (n.length < 3) return n;
        if (
            ("y" == (x = n.substr(0, 1)) && (n = x.toUpperCase() + n.substr(1)),
            ($ = /^(.+?)([^s])s$/),
            (p = /^(.+?)(ss|i)es$/).test(n) ? (n = n.replace(p, "$1$2")) : $.test(n) && (n = n.replace($, "$1$2")),
            ($ = /^(.+?)(ed|ing)$/),
            (p = /^(.+?)eed$/).test(n))
        ) {
            var f = p.exec(n);
            (p = new RegExp(a)).test(f[1]) && ((p = /.$/), (n = n.replace(p, "")));
        } else if ($.test(n)) {
            (r = (f = $.exec(n))[1]),
                ($ = new RegExp(c)).test(r) &&
                    ((n = r),
                    ($ = /(at|bl|iz)$/),
                    (g = new RegExp("([^aeiouylsz])\\1$")),
                    (w = new RegExp("^" + s + i + "[^aeiouwxy]$")),
                    $.test(n) ? (n += "e") : g.test(n) ? ((p = /.$/), (n = n.replace(p, ""))) : w.test(n) && (n += "e"));
        }
        (p = /^(.+?)y$/).test(n) && ((r = (f = p.exec(n))[1]), (p = new RegExp(c)).test(r) && (n = r + "i"));
        (p =
            /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/).test(
            n
        ) && ((r = (f = p.exec(n))[1]), (u = f[2]), (p = new RegExp(a)).test(r) && (n = r + e[u]));
        (p = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/).test(n) &&
            ((r = (f = p.exec(n))[1]), (u = f[2]), (p = new RegExp(a)).test(r) && (n = r + t[u]));
        if ((($ = /^(.+?)(s|t)(ion)$/), (p = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/).test(n)))
            (r = (f = p.exec(n))[1]), (p = new RegExp(o)).test(r) && (n = r);
        else if ($.test(n)) {
            (r = (f = $.exec(n))[1] + f[2]), ($ = new RegExp(o)).test(r) && (n = r);
        }
        (p = /^(.+?)e$/).test(n) &&
            ((r = (f = p.exec(n))[1]),
            (p = new RegExp(o)),
            ($ = new RegExp(l)),
            (g = new RegExp("^" + s + i + "[^aeiouwxy]$")),
            (p.test(r) || ($.test(r) && !g.test(r))) && (n = r));
        return (
            (p = /ll$/),
            ($ = new RegExp(o)),
            p.test(n) && $.test(n) && ((p = /.$/), (n = n.replace(p, ""))),
            "y" == x && (n = x.toLowerCase() + n.substr(1)),
            n
        );
    }
