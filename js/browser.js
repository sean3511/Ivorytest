! function(e, r) {
    "function" == typeof define && (define.amd || define.cmd) ? define((function() {
        return r(e)
    })) : "object" == typeof exports ? module.exports = r(e) : e.browser = r(e)
}("undefined" != typeof self ? self : this, (function(e) {
    var r = e || {},
        n = void 0 !== e.navigator ? e.navigator : {},
        i = function(e, r) {
            var i = n.mimeTypes;
            for (var o in i)
                if (i[o][e] == r) return !0;
            return !1
        },
        o = null;
    return void 0 !== n.userAgentData && n.userAgentData.getHighEntropyValues(["platformVersion"]).then((function(e) {
            if ("Windows" === n.userAgentData.platform) {
                const r = parseInt(e.platformVersion.split(".")[0]);
                o = r >= 13 ? 11 : 10
            }
        })),
        function(e) {
            var a = e || n.userAgent || "",
                d = {},
                t = {
                    Trident: a.indexOf("Trident") > -1 || a.indexOf("NET CLR") > -1,
                    Presto: a.indexOf("Presto") > -1,
                    WebKit: a.indexOf("AppleWebKit") > -1,
                    Gecko: a.indexOf("Gecko/") > -1,
                    KHTML: a.indexOf("KHTML/") > -1,
                    Safari: a.indexOf("Safari") > -1,
                    Chrome: a.indexOf("Chrome") > -1 || a.indexOf("CriOS") > -1,
                    IE: a.indexOf("MSIE") > -1 || a.indexOf("Trident") > -1,
                    Edge: a.indexOf("Edge") > -1 || a.indexOf("Edg/") > -1 || a.indexOf("EdgA") > -1 || a.indexOf("EdgiOS") > -1,
                    Firefox: a.indexOf("Firefox") > -1 || a.indexOf("FxiOS") > -1,
                    "Firefox Focus": a.indexOf("Focus") > -1,
                    Chromium: a.indexOf("Chromium") > -1,
                    Opera: a.indexOf("Opera") > -1 || a.indexOf("OPR") > -1,
                    Vivaldi: a.indexOf("Vivaldi") > -1,
                    Yandex: a.indexOf("YaBrowser") > -1,
                    Brave: !!n.brave,
                    Arora: a.indexOf("Arora") > -1,
                    Lunascape: a.indexOf("Lunascape") > -1,
                    QupZilla: a.indexOf("QupZilla") > -1,
                    "Coc Coc": a.indexOf("coc_coc_browser") > -1,
                    Kindle: a.indexOf("Kindle") > -1 || a.indexOf("Silk/") > -1,
                    Iceweasel: a.indexOf("Iceweasel") > -1,
                    Konqueror: a.indexOf("Konqueror") > -1,
                    Iceape: a.indexOf("Iceape") > -1,
                    SeaMonkey: a.indexOf("SeaMonkey") > -1,
                    Epiphany: a.indexOf("Epiphany") > -1,
                    360: a.indexOf("QihooBrowser") > -1 || a.indexOf("QHBrowser") > -1,
                    "360EE": a.indexOf("360EE") > -1,
                    "360SE": a.indexOf("360SE") > -1,
                    UC: a.indexOf("UCBrowser") > -1 || a.indexOf(" UBrowser") > -1 || a.indexOf("UCWEB") > -1,
                    QQBrowser: a.indexOf("QQBrowser") > -1,
                    QQ: a.indexOf("QQ/") > -1,
                    Baidu: a.indexOf("Baidu") > -1 || a.indexOf("BIDUBrowser") > -1 || a.indexOf("baidubrowser") > -1 || a.indexOf("baiduboxapp") > -1 || a.indexOf("BaiduHD") > -1,
                    Maxthon: a.indexOf("Maxthon") > -1,
                    Sogou: a.indexOf("MetaSr") > -1 || a.indexOf("Sogou") > -1,
                    Liebao: a.indexOf("LBBROWSER") > -1 || a.indexOf("LieBaoFast") > -1,
                    "2345Explorer": a.indexOf("2345Explorer") > -1 || a.indexOf("Mb2345Browser") > -1 || a.indexOf("2345chrome") > -1,
                    "115Browser": a.indexOf("115Browser") > -1,
                    TheWorld: a.indexOf("TheWorld") > -1,
                    Quark: a.indexOf("Quark") > -1,
                    Qiyu: a.indexOf("Qiyu") > -1,
                    XiaoMi: a.indexOf("MiuiBrowser") > -1,
                    Huawei: a.indexOf("HuaweiBrowser") > -1 || a.indexOf("HUAWEI/") > -1 || a.indexOf("HONOR") > -1 || a.indexOf("HBPC/") > -1,
                    Vivo: a.indexOf("VivoBrowser") > -1,
                    OPPO: a.indexOf("HeyTapBrowser") > -1,
                    Wechat: a.indexOf("MicroMessenger") > -1,
                    WechatWork: a.indexOf("wxwork/") > -1,
                    Taobao: a.indexOf("AliApp(TB") > -1,
                    Alipay: a.indexOf("AliApp(AP") > -1,
                    Weibo: a.indexOf("Weibo") > -1,
                    Douban: a.indexOf("com.douban.frodo") > -1,
                    Suning: a.indexOf("SNEBUY-APP") > -1,
                    iQiYi: a.indexOf("IqiyiApp") > -1,
                    DingTalk: a.indexOf("DingTalk") > -1,
                    Douyin: a.indexOf("aweme") > -1,
                    Googlebot: a.indexOf("Googlebot") > -1,
                    Baiduspider: a.indexOf("Baiduspider") > -1,
                    Sogouspider: a.match(/Sogou (\S+) Spider/i),
                    Bingbot: a.indexOf("bingbot") > -1,
                    "360Spider": a.indexOf("360Spider") > -1 || a.indexOf("HaosouSpider") > -1,
                    Bytespider: a.indexOf("Bytespider") > -1,
                    YisouSpider: a.indexOf("YisouSpider") > -1,
                    YodaoBot: a.indexOf("YodaoBot") > -1,
                    YandexBot: a.indexOf("YandexBot") > -1,
                    Windows: a.indexOf("Windows") > -1,
                    Linux: a.indexOf("Linux") > -1 || a.indexOf("X11") > -1,
                    "Mac OS": a.indexOf("Macintosh") > -1,
                    Android: a.indexOf("Android") > -1 || a.indexOf("Adr") > -1,
                    HarmonyOS: a.indexOf("HarmonyOS") > -1,
                    Ubuntu: a.indexOf("Ubuntu") > -1,
                    FreeBSD: a.indexOf("FreeBSD") > -1,
                    Debian: a.indexOf("Debian") > -1,
                    "Windows Phone": a.indexOf("IEMobile") > -1 || a.indexOf("Windows Phone") > -1,
                    BlackBerry: a.indexOf("BlackBerry") > -1 || a.indexOf("RIM") > -1,
                    MeeGo: a.indexOf("MeeGo") > -1,
                    Symbian: a.indexOf("Symbian") > -1,
                    iOS: a.indexOf("like Mac OS X") > -1,
                    "Chrome OS": a.indexOf("CrOS") > -1,
                    WebOS: a.indexOf("hpwOS") > -1,
                    Mobile: a.indexOf("Mobi") > -1 || a.indexOf("iPh") > -1 || a.indexOf("480") > -1,
                    Tablet: a.indexOf("Tablet") > -1 || a.indexOf("Pad") > -1 || a.indexOf("Nexus 7") > -1 || "MacIntel" === n.platform && n.maxTouchPoints > 1,
                    isWebview: a.indexOf("; wv)") > -1
                },
                u = !1;
            if (r.chrome) {
                var c = a.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                r.chrome.adblock2345 || r.chrome.common2345 ? t["2345Explorer"] = !0 : i("type", "application/360softmgrplugin") || i("type", "application/mozilla-npqihooquicklogin") || c > 36 && r.showModalDialog ? u = !0 : c > 45 && !(u = i("type", "application/vnd.chromium.remoting-viewer")) && c >= 69 && (u = i("type", "application/hwepass2001.installepass2001") || i("type", "application/asx"))
            }
            t.Mobile ? t.Mobile = !(a.indexOf("iPad") > -1) : u && (i("type", "application/gameplugin") || n && void 0 !== n.connection && void 0 === n.connection.saveData ? t["360SE"] = !0 : t["360EE"] = !0), t.Baidu && t.Opera ? t.Baidu = !1 : t.iOS && (t.Safari = !0);
            var f = {
                engine: ["WebKit", "Trident", "Gecko", "Presto", "KHTML"],
                browser: ["Safari", "Chrome", "Edge", "IE", "Firefox", "Firefox Focus", "Chromium", "Opera", "Vivaldi", "Yandex", "Brave", "Arora", "Lunascape", "QupZilla", "Coc Coc", "Kindle", "Iceweasel", "Konqueror", "Iceape", "SeaMonkey", "Epiphany", "XiaoMi", "Vivo", "OPPO", "360", "360SE", "360EE", "UC", "QQBrowser", "QQ", "Huawei", "Baidu", "Maxthon", "Sogou", "Liebao", "2345Explorer", "115Browser", "TheWorld", "Quark", "Qiyu", "Wechat", "WechatWork", "Taobao", "Alipay", "Weibo", "Douban", "Suning", "iQiYi", "DingTalk", "Douyin", "Googlebot", "Baiduspider", "Sogouspider", "Bingbot", "360Spider", "Bytespider", "YisouSpider", "YodaoBot", "YandexBot"],
                system: ["Windows", "Linux", "Mac OS", "Android", "HarmonyOS", "Ubuntu", "FreeBSD", "Debian", "iOS", "Windows Phone", "BlackBerry", "MeeGo", "Symbian", "Chrome OS", "WebOS"],
                device: ["Mobile", "Tablet"]
            };
            for (var p in d.device = "PC", d.language = function() {
                    var e = n.browserLanguage || n.language;
                    if ("string" != typeof e) return "Unknown language";
                    var r = e.split("-");
                    return r[1] && (r[1] = r[1].toUpperCase()), r.join("_")
                }(), f)
                for (var l = 0; l < f[p].length; l++) {
                    var s = f[p][l];
                    t[s] && (d[p] = s)
                }
            var $ = {
                Windows: function() {
                    var e = a.replace(/^Mozilla\/\d.0 \(Windows NT ([\d.]+)[;)].*$/, "$1");
                    return {
                        10: "10",
                        6.4: "10",
                        6.3: "8.1",
                        6.2: "8",
                        6.1: "7",
                        "6.0": "Vista",
                        5.2: "XP",
                        5.1: "XP",
                        "5.0": "2000"
                    } [e] || e
                },
                Android: function() {
                    return a.replace(/^.*Android ([\d.]+);.*$/, "$1")
                },
                HarmonyOS: function() {
                    return {
                        10: "2",
                        12: "3"
                    } [a.replace(/^Mozilla.*Android ([\d.]+)[;)].*$/, "$1")] || ""
                },
                iOS: function() {
                    return a.replace(/^.*OS ([\d_]+) like.*$/, "$1").replace(/_/g, ".")
                },
                Debian: function() {
                    return a.replace(/^.*Debian\/([\d.]+).*$/, "$1")
                },
                "Windows Phone": function() {
                    return a.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2")
                },
                "Mac OS": function() {
                    return a.replace(/^.*Mac OS X -?([\d_]+).*$/, "$1").replace(/_/g, ".")
                },
                WebOS: function() {
                    return a.replace(/^.*hpwOS\/([\d.]+);.*$/, "$1")
                }
            };
            d.systemVersion = "", $[d.system] && (d.systemVersion = $[d.system](), d.systemVersion == a && (d.systemVersion = "")), "Windows" == d.system && o && (d.systemVersion = o), d.platform = n.platform, d.isWebview = t.isWebview, d.isBot = ["Googlebot", "Baiduspider", "Sogouspider", "Bingbot", "360Spider", "Bytespider", "YandexBot"].some((function(e) {
                return t[e]
            }));
            var O = {
                Safari: function() {
                    return a.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Chrome: function() {
                    return a.replace(/^.*Chrome\/([\d.]+).*$/, "$1").replace(/^.*CriOS\/([\d.]+).*$/, "$1")
                },
                IE: function() {
                    return a.replace(/^.*MSIE ([\d.]+).*$/, "$1").replace(/^.*rv:([\d.]+).*$/, "$1")
                },
                Edge: function() {
                    return a.replace(/^.*Edge\/([\d.]+).*$/, "$1").replace(/^.*Edg\/([\d.]+).*$/, "$1").replace(/^.*EdgA\/([\d.]+).*$/, "$1").replace(/^.*EdgiOS\/([\d.]+).*$/, "$1")
                },
                Firefox: function() {
                    return a.replace(/^.*Firefox\/([\d.]+).*$/, "$1").replace(/^.*FxiOS\/([\d.]+).*$/, "$1")
                },
                "Firefox Focus": function() {
                    return a.replace(/^.*Focus\/([\d.]+).*$/, "$1")
                },
                Chromium: function() {
                    return a.replace(/^.*Chromium\/([\d.]+).*$/, "$1")
                },
                Opera: function() {
                    return a.replace(/^.*Opera\/([\d.]+).*$/, "$1").replace(/^.*OPR\/([\d.]+).*$/, "$1")
                },
                Vivaldi: function() {
                    return a.replace(/^.*Vivaldi\/([\d.]+).*$/, "$1")
                },
                Yandex: function() {
                    return a.replace(/^.*YaBrowser\/([\d.]+).*$/, "$1")
                },
                Brave: function() {
                    return a.replace(/^.*Chrome\/([\d.]+).*$/, "$1")
                },
                Arora: function() {
                    return a.replace(/^.*Arora\/([\d.]+).*$/, "$1")
                },
                Lunascape: function() {
                    return a.replace(/^.*Lunascape[\/\s]([\d.]+).*$/, "$1")
                },
                QupZilla: function() {
                    return a.replace(/^.*QupZilla[\/\s]([\d.]+).*$/, "$1")
                },
                "Coc Coc": function() {
                    return a.replace(/^.*coc_coc_browser\/([\d.]+).*$/, "$1")
                },
                Kindle: function() {
                    return a.replace(/^.*Version\/([\d.]+).*$/, "$1")
                },
                Iceweasel: function() {
                    return a.replace(/^.*Iceweasel\/([\d.]+).*$/, "$1")
                },
                Konqueror: function() {
                    return a.replace(/^.*Konqueror\/([\d.]+).*$/, "$1")
                },
                Iceape: function() {
                    return a.replace(/^.*Iceape\/([\d.]+).*$/, "$1")
                },
                SeaMonkey: function() {
                    return a.replace(/^.*SeaMonkey\/([\d.]+).*$/, "$1")
                },
                Epiphany: function() {
                    return a.replace(/^.*Epiphany\/([\d.]+).*$/, "$1")
                },
                360: function() {
                    return a.replace(/^.*QihooBrowser(HD)?\/([\d.]+).*$/, "$2")
                },
                "360SE": function() {
                    return {
                        108: "14.0",
                        86: "13.0",
                        78: "12.0",
                        69: "11.0",
                        63: "10.0",
                        55: "9.1",
                        45: "8.1",
                        42: "8.0",
                        31: "7.0",
                        21: "6.3"
                    } [a.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
                },
                "360EE": function() {
                    return {
                        95: "21",
                        86: "13.0",
                        78: "12.0",
                        69: "11.0",
                        63: "9.5",
                        55: "9.0",
                        50: "8.7",
                        30: "7.5"
                    } [a.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || ""
                },
                Maxthon: function() {
                    return a.replace(/^.*Maxthon\/([\d.]+).*$/, "$1")
                },
                QQBrowser: function() {
                    return a.replace(/^.*QQBrowser\/([\d.]+).*$/, "$1")
                },
                QQ: function() {
                    return a.replace(/^.*QQ\/([\d.]+).*$/, "$1")
                },
                Baidu: function() {
                    return a.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1").replace(/^.*baiduboxapp\/([\d.]+).*$/, "$1")
                },
                UC: function() {
                    return a.replace(/^.*UC?Browser\/([\d.]+).*$/, "$1")
                },
                Sogou: function() {
                    return a.replace(/^.*SE ([\d.X]+).*$/, "$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1")
                },
                Liebao: function() {
                    var e = "";
                    a.indexOf("LieBaoFast") > -1 && (e = a.replace(/^.*LieBaoFast\/([\d.]+).*$/, "$1"));
                    var r = a.replace(/^.*Chrome\/([\d]+).*$/, "$1");
                    return e || {
                        57: "6.5",
                        49: "6.0",
                        46: "5.9",
                        42: "5.3",
                        39: "5.2",
                        34: "5.0",
                        29: "4.5",
                        21: "4.0"
                    } [r] || ""
                },
                "2345Explorer": function() {
                    return {
                        69: "10.0",
                        55: "9.9"
                    } [navigator.userAgent.replace(/^.*Chrome\/([\d]+).*$/, "$1")] || a.replace(/^.*2345Explorer\/([\d.]+).*$/, "$1").replace(/^.*Mb2345Browser\/([\d.]+).*$/, "$1")
                },
                "115Browser": function() {
                    return a.replace(/^.*115Browser\/([\d.]+).*$/, "$1")
                },
                TheWorld: function() {
                    return a.replace(/^.*TheWorld ([\d.]+).*$/, "$1")
                },
                XiaoMi: function() {
                    return a.replace(/^.*MiuiBrowser\/([\d.]+).*$/, "$1")
                },
                Vivo: function() {
                    return a.replace(/^.*VivoBrowser\/([\d.]+).*$/, "$1")
                },
                OPPO: function() {
                    return a.replace(/^.*HeyTapBrowser\/([\d.]+).*$/, "$1")
                },
                Quark: function() {
                    return a.replace(/^.*Quark\/([\d.]+).*$/, "$1")
                },
                Qiyu: function() {
                    return a.replace(/^.*Qiyu\/([\d.]+).*$/, "$1")
                },
                Wechat: function() {
                    return a.replace(/^.*MicroMessenger\/([\d.]+).*$/, "$1")
                },
                WechatWork: function() {
                    return a.replace(/^.*wxwork\/([\d.]+).*$/, "$1")
                },
                Taobao: function() {
                    return a.replace(/^.*AliApp\(TB\/([\d.]+).*$/, "$1")
                },
                Alipay: function() {
                    return a.replace(/^.*AliApp\(AP\/([\d.]+).*$/, "$1")
                },
                Weibo: function() {
                    return a.replace(/^.*weibo__([\d.]+).*$/, "$1")
                },
                Douban: function() {
                    return a.replace(/^.*com.douban.frodo\/([\d.]+).*$/, "$1")
                },
                Suning: function() {
                    return a.replace(/^.*SNEBUY-APP([\d.]+).*$/, "$1")
                },
                iQiYi: function() {
                    return a.replace(/^.*IqiyiVersion\/([\d.]+).*$/, "$1")
                },
                DingTalk: function() {
                    return a.replace(/^.*DingTalk\/([\d.]+).*$/, "$1")
                },
                Douyin: function() {
                    return a.replace(/^.*app_version\/([\d.]+).*$/, "$1")
                },
                Huawei: function() {
                    return a.replace(/^.*Version\/([\d.]+).*$/, "$1").replace(/^.*HuaweiBrowser\/([\d.]+).*$/, "$1").replace(/^.*HBPC\/([\d.]+).*$/, "$1")
                },
                Googlebot: function() {
                    return a.replace(/^.*Googlebot\/([\d.]+).*$/, "$1")
                },
                Baiduspider: function() {
                    return a.replace(/^.*Baiduspider(-render)?\/([\d.]+).*$/, "$1")
                },
                Sogouspider: function() {
                    return a.replace(/^.*Sogou (\S+) Spider\/([\d.]+).*$/i, "$2")
                },
                Bingbot: function() {
                    return a.replace(/^.*bingbot\/([\d.]+).*$/, "$1")
                },
                "360Spider": function() {
                    return ""
                },
                Bytespider: function() {
                    return ""
                },
                YisouSpider: function() {
                    return a.replace(/^.*YisouSpider\/([\d.]+).*$/, "$1")
                },
                YodaoBot: function() {
                    return a.replace(/^.*YodaoBot\/([\d.]+).*$/, "$1")
                },
                YandexBot: function() {
                    return a.replace(/^.*YandexBot\/([\d.]+).*$/, "$1")
                }
            };
            return d.version = "", O[d.browser] && (d.version = O[d.browser](), d.version == a && (d.version = "")), "Chrome" == d.browser && a.match(/\S+Browser/) && (d.browser = a.match(/\S+Browser/)[0], d.version = a.replace(/^.*Browser\/([\d.]+).*$/, "$1")), "Edge" == d.browser ? d.engine = parseInt(d.version) > 75 ? "Blink" : "EdgeHTML" : (t.Chrome && "WebKit" == d.engine && parseInt(O.Chrome()) > 27 || "Opera" == d.browser && parseInt(d.version) > 12 || "Yandex" == d.browser) && (d.engine = "Blink"), d
        }
}));