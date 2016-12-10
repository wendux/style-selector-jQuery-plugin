/**
 * Created by du on 16/12/10.
 */
!function ($) {
    $.extend($.expr[':'],
        {
            css: function (e, i, m) {
                "use strict";
                var s = eval("(" + m[3] + ")")
                var r = /^[><=!]?=?/;
                for (var c in s) {
                    var t,v
                    s[c] = s[c].replace(r, function (w) {
                        t = w;
                        return ""
                    })
                    if(!t) t="==";
                    if (!m[9]) {
                        var d = $("#_cs");
                        m[9] = d[0] && d || $("<div id='_cs' style='display:none'>").appendTo("body")
                    }
                    m[9].css(c, s[c]);
                    v = m[9].css(c);
                    if (!eval("$(e).css(c)" + t + "v")) {
                        return false
                    }
                }
                return true;
            }
        });
}(jQuery);