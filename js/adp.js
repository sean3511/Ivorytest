! function(n, e) {
    var t = n.documentElement,
        i = "orientationchange" in window ? "orientationchange" : "resize",
        o = function() {
            var n = t.clientWidth;
            if (n) {
                htmlFontSize = n / 1920 * 100;
                t.style.fontSize = n / 1920 * 100 + "px"
            }
        };
    n.addEventListener && (e.addEventListener(i, o, !1), n.addEventListener("DOMContentLoaded", o, !1))
}(document, window);