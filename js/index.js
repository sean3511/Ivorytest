var _extends = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
    }
    return e
};
Array.prototype.findIndex || (Array.prototype.findIndex = function(e) {
    if (null == this) throw new TypeError("Array.prototype.findIndex called on null or undefined");
    if ("function" != typeof e) throw new TypeError("predicate must be a function");
    for (var n, o = Object(this), t = o.length >>> 0, a = arguments[1], r = 0; r < t; r++)
        if (r in o && (n = o[r], e.call(a, n, r, o))) return r;
    return -1
}), $((function() {
    new Swiper(".card-swiper", {
        slidesPerView: 1,
        centeredSlides: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        loop: !0,
        lazy: {
            loadPrevNext: !0
        },
        navigation: {
            nextEl: ".card-swiper-button-next",
            prevEl: ".card-swiper-button-prev"
        }
    }), new Swiper(".feature-swiper", {
        slidesPerView: 1,
        centeredSlides: !0,
        autoplay: {
            delay: 5e3,
            disableOnInteraction: !1
        },
        loop: !0,
        lazy: {
            loadPrevNext: !0
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    });
    var e = {
            browserInfo: browser(),
            version: 3,
            warm_page_en_name: "StickMan",
            active_unique_id: "0AcxI578ibxoVGG53f3o",
            baseUrl: "https://asia-east2-preregister-70a55.cloudfunctions.net",
            areaCode: "886",
            phone: "",
            likeNum: 0,
            myLucky: null,
            apppleStoreUrl: "",
            googlepayStoreUrl: "",
            assoc_url: "",
            recommend_code: "",
            recommend_utm: "",
            prizesIndex: -1,
            prizesName: "",
            lockPrizesName: "",
            lockIndex: -1,
            prizesOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            prizesConfig: [],
            isExchange: !1,
            isShowPopupOrder: !1,
            regs: {
                tw: /^9\d{8}$/,
                hk: /^([2|4|5|6|7|8|9|])\d{7}$/,
                macao: /^6\d{7}$/,
                sg: /^[89]\d{7}$/,
                my: /^1\d{8,9}$/
            },
            isAndroid: /(android)/i.test(navigator.userAgent),
            isIOS: /(iphone|ipad|ipod)/i.test(navigator.userAgent),
            tokenInfoKey: "tokenInfo",
            videoUrl: "",
            popupOrder: void 0,
            package_config: [],
            packages: [],
            haveShowPopupOrder: !1,
            phoneInput: !1,
            lockAward: {},
            source_config: {
                phone: {
                    key: "phone",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function() {
                        n.showPopupOrderSuccess(1)
                    }
                },
                store: {
                    key: "store",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(e) {
                        n.pop("你已成功預訂，兌換碼為" + e + "（可在獎勵查詢中查看）。")
                    }
                },
                like: {
                    key: "like",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(e) {
                        setTimeout((() => {
                            n.pop("你已成功按讚，兌換碼為" + e + "（可在獎勵查詢中查看）。")
                        }), 3e3)
                    }
                },
                share: {
                    key: "share",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(e) {
                        setTimeout((() => {
                            n.pop("你已成功分享，兌換碼為" + e + "（可在獎勵查詢中查看）。")
                        }), 3e3)
                    }
                },
                assoc: {
                    key: "assoc",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(e) {
                        n.pop("你已成功加入，兌換碼為" + e + "（可在獎勵查詢中查看）。")
                    }
                },
                friend: {
                    key: "friend",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(e) {
                        n.pop("你已成功邀請，兌換碼為" + e + "（可在獎勵查詢中查看）。")
                    }
                },
                exchange: {
                    key: "exchange",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(n) {
                        $(".popup-exchange-img").css("background", 'url("./imgs/card/' + e.lockPrizesName + '.png") no-repeat'), $(".popup-exchange-img").css("background-size", "100% 100%"), $(".popup-exchange-text").text(e.lockPrizesName), $(".popup-exchange").bPopup()
                    }
                },
                end: {
                    key: "end",
                    error: function() {
                        n.pop("請輸入正確的手機門號。")
                    },
                    success: function(e) {
                        n.pop("你已成功領取20000代金券獎勵，兌換碼為" + e + "（可在獎勵查詢中查看）")
                    }
                }
            },
            IframeOnClick: {
                resolution: 200,
                iframes: [],
                interval: null,
                Iframe: function() {
                    this.element = arguments[0], this.cb = arguments[1], this.hasTracked = !1
                },
                track: function(e, n) {
                    if (this.iframes.push(new this.Iframe(e, n)), !this.interval) {
                        var o = this;
                        this.interval = setInterval((function() {
                            o.checkClick()
                        }), this.resolution)
                    }
                },
                checkClick: function() {
                    if (document.activeElement) {
                        var e = document.activeElement;
                        for (var n in this.iframes) e === this.iframes[n].element ? 0 == this.iframes[n].hasTracked && (this.iframes[n].cb.apply(window, []), this.iframes[n].hasTracked = !0) : this.iframes[n].hasTracked = !1
                    }
                }
            }
        },
        n = {
            initListenLikeBtn: function(o) {
                var t = null;
                switch (o) {
                    case 1:
                        t = $("#like1 iframe")[0];
                        break;
                    case 2:
                        t = $("#like2 iframe")[0]
                }
                var a = null;
                a = setInterval((function() {
                    e.IframeOnClick.track(t, (function() {
                        if (clearInterval(a), e.phone && 0 == e.likeNum) {
                            var t = e.package_config.filter((function(n) {
                                return n.event_name == e.source_config.like.key
                            }))[0]; - 1 == e.packages.findIndex((function(e) {
                                return e.source == t.event_name
                            })) && (e.likeNum++, 1 == o ? gtag("event", "p2-like-btn") : gtag("event", "popup-like-btn")), n.packageGrant(t.event_name, t.package_unique_id)
                        }
                    }))
                }), 2e3)
            },
            slotMachine: function() {
                n.clearMyLucky();
                var o = e.prizesConfig.map((function(e) {
                    return {
                        imgs: [{
                            src: e.img,
                            width: "100%",
                            top: "-0.39rem",
                            name: e.name
                        }]
                    }
                }));
                // width: 5.62rem;
                // height: 7.37rem;
                    e.myLucky = new LuckyCanvas.SlotMachine({
                        divElement: document.querySelector("#my-lucky"),
                        dpr: 2
                    }, {
                        width: "2.25rem",
                        height: "2.95rem",
    
                        slots: [{
                            order: e.prizesOrder,
                            direction: -1
                        }],
                        prizes: o,
                        defaultConfig: {
                            rowSpacing: "0.72rem",
                            speed: 25
                        },
                        end: function(o) {
                            n.hideFullShade(), e.prizesName = o.imgs[0].name
                        }
                    })
                 },
            playGame: function(n) {
                e.myLucky.play()
            },
            showAreaOptions: function() {
                $(".area-options").css("display", "flex")
            },
            hideAreaOptions: function() {
                $(".area-options").css("display", "none")
            },
            setAreaCode: function(n) {
                e.areaCode = n;
                var o = "",
                    t = "";
                switch (n) {
                    case "886":
                        o = "台灣", t = "9xxxxxxxx（共9位）";
                        break;
                    case "852":
                        o = "香港", t = "xxxxxxxx（共8位）";
                        break;
                    case "853":
                        o = "澳門", t = "6xxxxxxx（共8位）";
                        break;
                    case "65":
                        o = "新加坡", t = "8/9xxxxxxx（共8位）";
                        break;
                    case "60":
                        o = "馬來西亞", t = "1xxxxxxxx（共9/10位）"
                }
                $(".phoneDiv input").attr("placeholder", t), $(".area-select span").text(o + "+" + e.areaCode)
            },
            setPhone: function(n) {
                e.phone = n, $(".phoneDiv input").val(e.phone)
            },
            verifyPhone: function(o) {
                if (!o) return n.pop("請輸入正確的手機門號進行預約。"), !1;
                switch (e.areaCode) {
                    case "886":
                        if (!e.regs.tw.test(o)) return n.pop("請輸入正確的手機門號。"), !1;
                        break;
                    case "852":
                        if (!e.regs.hk.test(o)) return n.pop("請輸入正確的手機門號。"), !1;
                        break;
                    case "853":
                        if (!e.regs.macao.test(o)) return n.pop("請輸入正確的手機門號。"), !1;
                        break;
                    case "65":
                        if (!e.regs.sg.test(o)) return n.pop("請輸入正確的手機門號。"), !1;
                        break;
                    case "60":
                        if (!e.regs.my.test(o)) return n.pop("請輸入正確的手機門號。"), !1
                }
                return !0
            },
            toStore: function(o) {
                if (e.phone) {
                    var t = e.package_config.filter((function(n) {
                        return n.event_name == e.source_config.store.key
                    }))[0];
                    n.packageGrant(t.event_name, t.package_unique_id)
                }
                1 == o && window.open(e.apppleStoreUrl), 2 == o && window.open(e.googlepayStoreUrl)
            },
            lockImg: function(e) {
                $(".draw-lockImg").css("background", "url(" + e + ") no-repeat"), $(".draw-lockImg").css("background-size", "100% 100%")
            },
            hideMyLucky: function() {
                $("#my-lucky").css("opacity", "0")
            },
            showMyLucky: function() {
                $("#my-lucky").css("opacity", "1")
            },
            clearMyLucky: function() {
                $("#my-lucky").html("")
            },
            popupFriend: function() {
                $(".popup-friend").bPopup()
            },
            showStoreBtn: function() {
                e.isAndroid ? $(".foot-google").show() : e.isIOS && $(".foot-apple").show()
            },
            init: function() {
                -1 != navigator.userAgent.indexOf("Firefox") && $(".order-number").css("font-size", "0.6rem"), n.carouselFoot(), n.showDrawCount(), +(localStorage.getItem("version") || 0) < e.version && (localStorage.clear(), localStorage.setItem("version", e.version)), setTimeout((function() {
                    e.phone || e.haveShowPopupOrder || e.phoneInput || (n.popupOrder(), e.haveShowPopupOrder = !0)
                }), 1e4), n.showStoreBtn();
                var o = n.getTokenInfo();
                o && (n.setAreaCode(o.areaCode), n.setPhone(o.phone), n.maxLength(o.areaCode)), n.getWarmPage()
            },
            setTokenInfo: function() {
                var n = {
                    areaCode: e.areaCode,
                    phone: e.phone
                };
                localStorage.setItem(e.tokenInfoKey, JSON.stringify(n))
            },
            getTokenInfo: function() {
                var n = localStorage.getItem(e.tokenInfoKey);
                return n ? JSON.parse(n) : ""
            },
            commonAjax: function(n, o, t) {
                $.ajax({
                    headers: {
                        funs_browser_engine: e.browserInfo.browser,
                        funs_browser_ver: e.browserInfo.version,
                        funs_platform: e.browserInfo.system,
                        funs_os_ver: e.browserInfo.systemVersion,
                        funs_user_token: localStorage.getItem(e.areaCode + "_" + e.phone)
                    },
                    url: n,
                    data: _extends({}, o, {
                        Language: "TW"
                    }),
                    success: t
                })
            },
            getWarmPage: function() {
                var o = e.baseUrl + "/warmPageIndex";
                n.commonAjax(o, {
                    warm_page_en_name: e.warm_page_en_name
                }, (function(o) {
                    if (0 != o.code) return n.pop(o.message);
                    var order_user = o.data.order_user_distinct + o.data.order_user_other;
                    if (e.apppleStoreUrl = o.data.appstore_url, 
                        e.googlepayStoreUrl = o.data.google_play_url, 
                        e.assoc_url = o.data.assoc_url, 
                        e.videoUrl = o.data.video_url, 
                        $("meta[name='share_title']").attr("content", o.data.share_title), 
                        $("meta[name='share_name']").attr("content", o.data.share_name), 
                        $("meta[name='share_description']").attr("content", o.data.share_description), 
                        $("meta[name='share_pic_url']").attr("content", o.data.share_pic_url), 
                        order_user >= 1e5 && $(".reach1").show(), 
                        order_user >= 3e5 && $(".reach2").show(), 
                        order_user >= 5e5 && $(".reach3").show(), 
                        order_user >= 8e5 && $(".reach4").show(), 
                        order_user >= 1e6 && $(".reach5").show(), 
                        $(".order-number").text(order_user), 
                        o.data.package_config && (e.package_config = JSON.parse(o.data.package_config)), e.phone)
                        n.order();
                    else switch (o.data.country_code) {
                        case "TW":
                            n.setAreaCode("886"), n.maxLength("886");
                            break;
                        case "HK":
                            n.setAreaCode("852"), n.maxLength("852");
                            break;
                        case "MO":
                            n.setAreaCode("853"), n.maxLength("853");
                            break;
                        case "SG":
                            n.setAreaCode("65"), n.maxLength("65");
                            break;
                        case "MY":
                            n.setAreaCode("60"), n.maxLength("60");
                            break;
                        default:
                            n.setAreaCode("886"), n.maxLength("886")
                    }
                }))
            },
            hideActivityStatus: function() {
                $(".activity-phone .unfinished").show(), $(".activity-store .unfinished").show(), $(".activity-like .unfinished").show(), $(".activity-share .unfinished").show(), $(".activity-assoc .unfinished").show(), $(".activity-friend .unfinished").show(), $(".endBtn").addClass("voucher-over-btn"), $(".drawBtn").addClass()
            },
            hideUnOrderEffect: function() {
                $(".preBtn").removeClass("point finger"), $(".preBtn,.p1-preBtn").removeClass("animation-btn")
            },
            order: function(o) {
                var t = e.baseUrl + "/warmPageOrder";
                e.recommend_code = n.getParams("code"), e.recommend_utm = n.getParams("recommend_utm"), n.commonAjax(t, {
                    warm_page_en_name: e.warm_page_en_name,
                    phone: e.phone,
                    dialing_code: e.areaCode,
                    code: e.recommend_code,
                    recommend_utm: e.recommend_utm,
                    version: e.version
                }, (function(t) {
                    if (0 != t.code) return n.pop(t.message);
                    localStorage.setItem(e.areaCode + "_" + e.phone, t.data.funs_user_token);
                    var a = setInterval((function() {
                        if (2 == $("#like1 iframe,#like2 iframe").length) return clearInterval(a), e.likeNum = 0, n.initListenLikeBtn(1), void n.initListenLikeBtn(2)
                    }), 1e3);
                    if (1 == t.data.ip_order_cnt && 1 == t.data.is_new) {
                        fbq("track", "CompleteRegistration", {
                            currency: "USD",
                            value: 1
                        }), gtag("event", "CompleteRegistration");
                        ttq.instance("CG7FT03C77UFNRPAKN60").track("CompleteRegistration")
                    }
                    n.setPhone(e.phone), e.prizesIndex = -1, e.lockIndex = -1, e.isExchange = !1;
                    var r = e.package_config.filter((function(n) {
                        return n.event_name == e.source_config.phone.key
                    }))[0];
                    if (e.packages = t.data.packages, e.code = t.data.code, t.data.recommend && t.data.recommend.length > 0) {
                        $(".activity-friend .unFriend").hide(), $(".activity-friend .received").show();
                        var i = e.package_config.filter((function(n) {
                            return n.event_name == e.source_config.friend.key
                        }))[0];
                        n.packageGrant(i.event_name, i.package_unique_id)
                    }
                    n.hideActivityStatus();
                    var c = !1,
                        s = !1;
                    (t.data.packages.forEach((function(n, o) {
                        switch (n.source) {
                            case "phone":
                                $(".activity-phone .unfinished").hide(), $(".activity-phone .received").show();
                                break;
                            case "store":
                                $(".activity-store .unfinished").hide(), $(".activity-store .received").show();
                                break;
                            case "like":
                                s = !0, $(".fb-like").removeClass("like-point"), $(".fb-like").removeClass("like-finger"), $(".activity-like .unfinished").hide(), $(".activity-like .received").show();
                                break;
                            case "share":
                                $(".activity-share .unfinished").hide(), $(".activity-share .received").show();
                                break;
                            case "assoc":
                                $(".activity-assoc .unfinished").hide(), $(".activity-assoc .received").show();
                                break;
                            case "friend":
                                $(".activity-friend .unfinished").hide(), $(".activity-friend .received").show();
                                break;
                            case "exchange":
                                e.isExchange = !0, $(".drawBtn,.drawCount").removeClass("animation-btn");
                                break;
                            case "end":
                                c = !0, $(".endBtn").addClass("voucher-over-btn"), $(".endBtn").removeClass("animation-btn endBtn-finger endBtn-point")
                        }
                    })), s || ($(".fb-like").addClass("like-point"), $(".fb-like").addClass("like-finger")), c || ($(".endBtn").removeClass("voucher-over-btn"), $(".endBtn").addClass("animation-btn endBtn-finger endBtn-point")), e.isExchange || $(".drawBtn,.drawCount").addClass("animation-btn"), n.getTokenInfo().phone != e.phone) ? ($(".activity-phone .unfinished").hide(), $(".activity-phone .received").show(), e.packages.findIndex((function(n) {
                        return n.source == e.source_config.phone.key
                    })) > -1 ? n.showPopupOrderSuccess() : n.packageGrant(r.event_name, r.package_unique_id)) : o && n.showPopupOrderSuccess();
                    n.setTokenInfo(), n.showDrawCount(), n.showBall(), n.hideUnOrderEffect(), n.isShowShareAdd(), n.getLotteryConfig()
                }))
            },
            isShowShareAdd: function() {
                0 == n.getShareCount() ? $(".share-log").show() : $(".share-log").hide()
            },
            showDrawCount: function() {
                $(".draw-count").text("剩餘抽卡次數:" + n.getRemainCount())
            },
            getRemainCount: function() {
                if (!e.phone) return 0;
                var o = n.getDrawCount(),
                    t = n.getShareCount();
                t > 0 && (t = 1);
                var a = 1 + t - o;
                return a <= 0 ? 0 : a
            },
            getDrawCountKey: function() {
                return (new Date).toLocaleDateString() + "_" + e.areaCode + "_" + e.phone
            },
            getDrawCount: function() {
                var e = 0,
                    o = n.getDrawCountKey();
                return null !== localStorage.getItem(o) && (e = +localStorage.getItem(o)), e
            },
            setDrawCount: function(e) {
                localStorage.setItem(n.getDrawCountKey(), e)
            },
            getSharekey: function() {
                return (new Date).toLocaleDateString() + "_" + e.areaCode + "_" + e.phone + "_share"
            },
            getShareCount: function() {
                var e = 0,
                    o = n.getSharekey();
                return localStorage.getItem(o) && (e = +localStorage.getItem(o)), e
            },
            setShareCount: function(e) {
                localStorage.setItem(n.getSharekey(), e)
            },
            isCanLottery: function() {
                return e.phone ? !(n.getDrawCount() >= 2) || (n.pop("你的抽獎次數已用完，請明天再來。"), !1) : (n.scrollToOrder(), n.pop("請先預約。"), !1)
            },
            lottery: function() {
                var o = e.baseUrl + "/startLottery";
                n.commonAjax(o, {
                    active_unique_id: e.active_unique_id,
                    phone: e.phone,
                    dialing_code: e.areaCode,
                    recording_award: 1
                }, (function(o) {
                    if (0 != o.code) return n.pop(o.message);
                    e.lockAward.award || e.lockAward.lock_award || gtag("event", "draw-btn");
                    var t = n.getDrawCount();
                    t++, n.setDrawCount(t), n.showMyLucky(), n.showFullShade(), n.showDrawCount(), n.playGame(), setTimeout((function() {
                        e.prizesIndex = e.prizesConfig.findIndex((function(e) {
                            return e.name == o.data.name
                        })), e.myLucky.stop(e.prizesIndex)
                    }), 2e3)
                }))
            },
            getLotteryConfig: function() {
                var o = e.baseUrl + "/lotteryConfig";
                n.commonAjax(o, {
                    active_unique_id: e.active_unique_id
                }, (function(o) {
                    if (0 != o.code) return n.pop(o.message);
                    e.prizesConfig = o.data, n.getLockAward()
                }))
            },
            lock: function() {
                var o = e.baseUrl + "/lockAward";
                n.commonAjax(o, {
                    active_unique_id: e.active_unique_id,
                    phone: e.phone,
                    dialing_code: e.areaCode
                }, (function(e) {
                    if (0 != e.code) return n.pop(e.message)
                }))
            },
            exchange: function() {
                var o = e.baseUrl + "/exchangeAward";
                n.commonAjax(o, {
                    active_unique_id: e.active_unique_id,
                    phone: e.phone,
                    dialing_code: e.areaCode
                }, (function(o) {
                    if (0 != o.code) return n.pop(o.message);
                    e.isExchange = !0, n.packageGrant("exchange", o.data.package_unique_id)
                }))
            },
            getLockAward: function() {
                var o = e.baseUrl + "/getLockAward";
                n.commonAjax(o, {
                    active_unique_id: e.active_unique_id,
                    phone: e.phone,
                    dialing_code: e.areaCode
                }, (function(o) {
                    if (0 != o.code) return n.pop(o.message);
                    if (e.lockAward = o.data, o.data.lock_award || $(".draw-lockImg").css("background", "none"), o.data.lock_award && (n.lockImg(o.data.lock_award.img), e.lockPrizesName = o.data.lock_award.name, e.lockIndex = 1), !o.data.award) return n.slotMachine(), void n.hideMyLucky();
                    var t = Array.from({
                            length: e.prizesConfig.length
                        }, (function(e, n) {
                            return 0 + n
                        })),
                        a = e.prizesConfig.findIndex((function(e) {
                            return e.name == o.data.award.name
                        }));
                    t.splice(a, 1), t.unshift(a), e.prizesIndex = a, e.prizesOrder = t, n.slotMachine(), n.showMyLucky(), e.prizesName = o.data.award.name
                }))
            },
            packageGrant: function(o, t) {
                if (!(e.packages.findIndex((function(e) {
                        return e.source == o
                    })) > -1)) {
                    var a = e.baseUrl + "/packageGrant";
                    e.recommend_utm = n.getParams("recommend_utm"), n.commonAjax(a, {
                        source: o,
                        package_unique_id: t,
                        phone: e.phone,
                        dialing_code: e.areaCode,
                        recommend_utm: e.recommend_utm
                    }, (function(t) {
                        if (0 != t.code) return "phone" == o ? void n.showPopupOrderSuccess() : n.pop(t.message);
                        e.source_config[o].success(t.data.package_num), "phone" != o && n.order()
                    }))
                }
            },
            shareFB: function() {
                FB.ui({
                    method: "share",
                    href: "https://lvorystory.com"
                }, (function(e) {}))
            },
            timeOutGet: function(e, n) {
                n = n || 3e3;
                setTimeout(e, n)
            },
            pop: function(e) {
                $(".pop .text").text(e), $(".pop").bPopup()
            },
            popupSelect: function(e, n) {
                $(".popup-select-text").text(e), $(".popup-select-confirm").off("click"), $(".popup-select-confirm").click(n), $(".popup-select").bPopup()
            },
            copy: function(e, n) {
                var o = document.createElement("textarea");
                o.readOnly = !0, o.style.position = "absolute", o.style.left = "-9999px", o.value = e, document.body.appendChild(o), o.select(), o.setSelectionRange(0, o.value.length), document.execCommand("Copy"), document.body.removeChild(o), n && "[object Function]" === Object.prototype.toString.call(n) && n()
            },
            getParams: function(e) {
                var n = window.location.search,
                    o = {};
                if ("" !== n)
                    for (var t = (n = n.substr(1)).split("&"), a = 0; a < t.length; a++) {
                        var r = t[a].split("=");
                        o[r[0]] = r[1]
                    }
                return o[e]
            },
            isExchangeShow: function() {
                n.pop("你已完成英雄兌換，無法再進行抽卡或更改等操作。")
            },
            inputPhone: function(n) {
                switch (e.areaCode) {
                    case "886":
                        e.regs.tw.test(n) ? $(".phoneDiv input").css("color", "#fff") : $(".phoneDiv input").css("color", "red");
                        break;
                    case "852":
                        e.regs.hk.test(n) ? $(".phoneDiv input").css("color", "#fff") : $(".phoneDiv input").css("color", "red");
                        break;
                    case "853":
                        e.regs.macao.test(n) ? $(".phoneDiv input").css("color", "#fff") : $(".phoneDiv input").css("color", "red");
                        break;
                    case "65":
                        e.regs.sg.test(n) ? $(".phoneDiv input").css("color", "#fff") : $(".phoneDiv input").css("color", "red");
                        break;
                    case "60":
                        e.regs.my.test(n) ? $(".phoneDiv input").css("color", "#fff") : $(".phoneDiv input").css("color", "red")
                }
            },
            showFullShade: function() {
                $(".full-shade").show()
            },
            hideFullShade: function() {
                $(".full-shade").hide()
            },
            isCanGet: function() {
                var n = e.packages.findIndex((function(n) {
                        return n.source == e.source_config.phone.key
                    })),
                    o = e.packages.findIndex((function(n) {
                        return n.source == e.source_config.store.key
                    })),
                    t = e.packages.findIndex((function(n) {
                        return n.source == e.source_config.like.key
                    })),
                    a = e.packages.findIndex((function(n) {
                        return n.source == e.source_config.share.key
                    })),
                    r = e.packages.findIndex((function(n) {
                        return n.source == e.source_config.assoc.key
                    })),
                    i = e.packages.findIndex((function(n) {
                        return n.source == e.source_config.friend.key
                    }));
                return n > -1 && o > -1 && t > -1 && a > -1 && r > -1 && i > -1
            },
            popupOrder: function() {
                return $(".popup-order").bPopup()
            },
            scrollToOrder: function() {
                location.href = "#p1"
            },
            showPopupOrderSuccess: function(e) {
                var n = ".popup-order-success";
                return e ? ($(n + " .close").hide(), $(".store-gp-btn,.store-ios-btn").addClass("animation-btn store-btn-point store-btn-finger")) : ($(n + " .close").show(), $(".store-gp-btn,.store-ios-btn").removeClass("animation-btn store-btn-point store-btn-finger")), $(n).bPopup({
                    modalClose: !e,
                    escClose: !e
                })
            },
            showBall: function() {
                var n = ["end", "exchange"],
                    o = "ball0";
                switch (e.packages.filter((function(e) {
                        return !n.includes(e.source)
                    })).length) {
                    case 0:
                        o = "ball0";
                        break;
                    case 1:
                        o = "ball1";
                        break;
                    case 2:
                        o = "ball2";
                        break;
                    case 3:
                        o = "ball3";
                        break;
                    case 4:
                        o = "ball4";
                        break;
                    case 5:
                        o = "ball5";
                        break;
                    case 6:
                        o = "ball6"
                }
                var t = $(".ball");
                $(t).removeClass(), $(t).addClass("ball " + o), $(t).show()
            },
            carouselFoot: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                setTimeout((function() {
                    e > 2 && (e = 0), $(".right-card").hide(), $(".right-card:eq(" + e + ")").show(), n.carouselFoot(++e)
                }), 3e3)
            },
            fbBtnSelf: function() {
                var e = document.documentElement.clientWidth;
                e > 1600 ? ($("#like1").css("transform", "scale(1.4)"), $("#like1").css("right", "7.25rem")) : e <= 1600 && e > 1400 ? ($("#like1").css("transform", "scale(1.5)"), $("#like1").css("right", "7.15rem")) : e <= 1400 && e > 1200 ? ($("#like1").css("transform", "scale(1.3)"), $("#like1").css("right", "7.05rem")) : e <= 1200 && e > 1e3 ? ($("#like1").css("transform", "scale(1.1)"), $("#like1").css("right", "6.9rem")) : e <= 1e3 && e > 800 ? ($("#like1").css("transform", "scale(0.9)"), $("#like1").css("right", "6.8rem")) : e <= 800 && ($("#like1").css("transform", "scale(0.7)"), $("#like1").css("right", "6.6rem"))
            },
            maxLength: function(e) {
                "886" == e ? $(".phoneDiv input").attr("maxlength", "9") : "60" == e ? $(".phoneDiv input").attr("maxlength", "10") : $(".phoneDiv input").attr("maxlength", "8")
            },
            handleClickPopOrder: function() {
                var o = $(".popup-order input").val();
                n.verifyPhone(o) && (e.phone = o, n.order(!0))
            },
            handleClickOrder: function() {
                var o = $(".phoneDiv input").val();
                n.verifyPhone(o) && (e.phone = o, n.order(!0))
            },
            throttle: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    o = !0,
                    t = arguments;
                return function() {
                    o && (o = !1, e(t), setTimeout((function() {
                        o = !0
                    }), n))
                }
            }
        };
    n.init(), $(".draw-btn,.draw-count").click((function(o) {
        if (o.stopPropagation(), e.isExchange) return n.isExchangeShow();
        var t = n.getDrawCount(),
            a = n.getShareCount();
        1 != t || 0 != a ? n.isCanLottery() && n.lottery() : n.pop("分享到FB可再獲得一次抽卡機會。")
    })), $(".shareFB,.popup-share .btn").click((function() {
        if (e.phone) {
            var o = n.getShareCount();
            n.setShareCount(++o);
            var t = e.package_config.filter((function(n) {
                return n.event_name == e.source_config.share.key
            }))[0];
            n.showDrawCount(), n.packageGrant(t.event_name, t.package_unique_id)
        }
        n.shareFB()
    })), $(".area-select").click((function() {
        e.phoneInput = !0, n.showAreaOptions()
    })), $(".area-option").click((function() {
        var o = $(this).attr("data-code");
        e.areaCode != o ? (n.maxLength(o), n.setPhone(""), e.areaCode = o, n.inputPhone(e.phone), n.setAreaCode(e.areaCode), n.hideAreaOptions()) : n.hideAreaOptions()
    })), $(".preBtn").click(n.throttle(n.handleClickOrder, 1e3)), $(".popup-preBtn").click(n.throttle(n.handleClickPopOrder, 1e3)), $(document).scroll((function() {
        var o = document.querySelector("#main").getBoundingClientRect();
        o.top <= -1100 ? $(".float-right").show() : $(".float-right").hide(), e.haveShowPopupOrder || e.phoneInput || !e.phone && o.top <= -3400 && (e.popupOrder = n.popupOrder(), e.haveShowPopupOrder = !0)
    })), $(".float-right-apple-btn,.apple-store,.popup-apple-btn").click((function() {
        e.phone && ($(this).hasClass("apple-store") ? gtag("event", "p2_apple_btn") : $(this).hasClass("float-right-apple-btn") && gtag("event", "right-apple_btn")), n.toStore(1)
    })), $(".float-right-google-btn,.google-store,.popup-gp-btn").click((function() {
        e.phone && ($(this).hasClass("google-store") ? gtag("event", "p2_gp_btn") : $(this).hasClass("float-right-google-btn") && gtag("event", "right-google-btn")), n.toStore(2)
    })), $(".draw-lock").click((function() {
        return e.isExchange ? n.isExchangeShow() : -1 == e.prizesIndex ? n.pop("請先抽卡。") : void n.popupSelect("你確定要鎖定[" + e.prizesName + "]嗎？", (function() {
            n.lockImg(e.prizesConfig[e.prizesIndex].img), n.hideMyLucky(), n.lock(), e.lockIndex = e.prizesIndex, e.lockPrizesName = e.prizesName, e.prizesIndex = -1
        }))
    })), $(".draw-exchange").click((function() {
        return e.isExchange ? n.isExchangeShow() : -1 == e.lockIndex ? n.pop("請先鎖定。") : void n.popupSelect("你確定要兌換[" + e.lockPrizesName + "]嗎？", (function() {
            n.exchange()
        }))
    })), $(".float-right-assoc-btn,.popup-assoc .btn").click((function() {
        if (e.phone) {
            var o = e.package_config.filter((function(n) {
                return n.event_name == e.source_config.assoc.key
            }))[0]; - 1 == e.packages.findIndex((function(e) {
                return e.source == o.event_name
            })) && ($(this).hasClass("btn") ? gtag("event", "popup-assoc-btn") : gtag("event", "assoc-btn")), n.packageGrant(o.event_name, o.package_unique_id)
        }
        window.open(e.assoc_url)
    })), $(".activity-friend").click((function() {
        if (!e.phone) return n.scrollToOrder(), void n.pop("請先預約。");
        var o = e.packages.filter((function(n) {
            return n.source == e.source_config.friend.key
        }))[0];
        o ? e.source_config.friend.success(o.package_num) : n.popupFriend()
    })), $(".activity-store").click((function() {
        if (!e.phone) return n.scrollToOrder(), void n.pop("請先預約。");
        var o = e.packages.filter((function(n) {
            return n.source == e.source_config.store.key
        }))[0];
        o ? e.source_config.store.success(o.package_num) : $(".popup-store").bPopup()
    })), $(".popup-store .btn").click((function() {
        n.toStore(1)
    })), $(".activity-share").click((function() {
        if (!e.phone) return n.scrollToOrder(), void n.pop("請先預約。");
        var o = e.packages.filter((function(n) {
            return n.source == e.source_config.share.key
        }))[0];
        o ? e.source_config.share.success(o.package_num) : $(".popup-share").bPopup()
    })), $(".activity-assoc").click((function() {
        if (!e.phone) return n.scrollToOrder(), void n.pop("請先預約。");
        var o = e.packages.filter((function(n) {
            return n.source == e.source_config.assoc.key
        }))[0];
        o ? e.source_config.assoc.success(o.package_num) : $(".popup-assoc").bPopup()
    })), $(".activity-phone").click((function() {
        if (e.phone) {
            var o = e.packages.filter((function(n) {
                return n.source == e.source_config.phone.key
            }))[0];
            o ? n.pop("你已成功預約，兌換碼為" + o.package_num + "（可在獎勵查詢中查看）。") : $(".popup-phone").bPopup()
        } else n.popupOrder()
    })), $(".activity-like").click((function() {
        if (!e.phone) return n.scrollToOrder(), void n.pop("請先預約。");
        var o = e.packages.filter((function(n) {
            return n.source == e.source_config.like.key
        }))[0];
        o ? e.source_config.like.success(o.package_num) : $(".popup-like").bPopup()
    })), $(".popup-friend .btn").click((function() {
        var o = e.phone + "popup-invite-btn";
        localStorage.getItem(o) || (gtag("event", "popup-invite-btn"), localStorage.setItem(o, 1)), n.copy(window.location.protocol + "//" + window.location.host + window.location.pathname + "?code=" + encodeURIComponent(e.code) + "&recommend_utm=invite"), n.pop("複製成功。邀約好友完成預約後，刷新頁面即可獲取對應兌換碼。")
    })), $(".video").click((function() {
        $(".iframeVideo").attr("src", e.videoUrl), $("#popup-video").bPopup({
            onClose: function() {
                $(".iframeVideo").attr("src", "")
            }
        })
    })), $(".phoneDiv input").click((function() {
        e.phoneInput = !0
    })), $(".p1 .phoneDiv input").keyup((function(e) {
        var o = $(".p1 .phoneDiv input").val();
        n.inputPhone(o)
    })), $(".popup-order .phoneDiv input").keyup((function(e) {
        var o = $(".popup-order .phoneDiv input").val();
        n.inputPhone(o)
    })), $(".draw-desc-btn").click((function() {
        $(".popup-draw-desc .text").html("<p>1. 玩家可透過預約登錄參與本網站的預先抽卡活動，免費獲得1個英雄。<br />2. 每個帳號只可保留一個抽獎結果，但可以選擇使用最新抽取結果替換原保留的角色。可點擊【鎖定】按鈕，將卡保留在獎勵區。獎勵區只能存放一張卡，每次替換將會更換掉已有的獎勵卡，請謹慎操作。<br />3. 抽卡次數獲取：①一個帳號每日登入頁面可獲取一次抽卡機會，②每日分享抽卡也可再獲得一次抽卡機會。每日抽卡上限為2次，次日不累積次數，僅限當天使用。<br />4. 如你已抽到心儀的卡，想進行兌換，可點擊【兌換】按鈕，立即鎖定獎勵區卡牌並獲得該卡牌序列號。完成【兌換】後，獎勵區卡牌將成為最終獎勵，後續無法再繼續抽卡。<br />5. 玩家獲得獎勵後可通過查詢獎勵獲得兌換碼，玩家需自行保管好兌換碼，如有遺失將不補發獎勵。</p>"), $(".popup-draw-desc").bPopup()
    })), $(".activity-desc-btn").click((function() {
        $(".popup-voucher-desc .text").html("<p>1. 活動期間玩家可透過完成對應活動任務，用於解鎖水晶球進度。<br />2. 活動對應的任務有規定可完成次數，點擊任務可查看該任務的完成情況和任務對應獎勵。<br />3. 當完成全部任務成功解鎖「20000代金券」獎勵後，可通過查詢獎勵獲得兌換碼，玩家需自行保管好兌換碼，如有遺失將不補發獎勵。當玩家等級達10級時，可透過兌換碼在遊戲內領取，兌換碼兌換流程：設置-兌換碼-兌換。且每個帳號只可兌換一次。<br />4. 獎勵代金券可在遊戲內的專屬商店裡充當貨幣使用，用於購買專屬道具、英雄、裝備等。</p>"), $(".popup-voucher-desc").bPopup()
    })), $(".conclude-desc-btn").click((function() {
        $(".popup-activity-desc .text").html("<p>1. 累計事前登錄人次達成的虛寶獎勵，將於遊戲上線當日，通過遊戲信件發送；若長期間內沒有登入遊戲，將無法領取。<br />2. 抽中實體獎勵的用戶，實體獎勵兌換時間為遊戲上線日起至2023/4/30，請玩家在兌換時間內私訊FB官方粉絲專頁，逾期視同放棄獎勵。依規定，機會中獎獎品價值超過新台幣 2 萬元（含），將由主辦單位代扣 10% 機會中獎稅（非台灣地區境內居住之個人，依法扣繳20%稅金）。機會中獎獎品價值如超過 $1,000 元以上者，依法需納入年度個人綜合所得總額進行申報。扣繳憑單將由主辦單位寄發予得獎者，請務必據實申報。承上，故中獎者需提供並填寫中獎者資料，繳交身分證正反面影本。如中獎者不同意繳交稅款，或逾時未完成申請作業或提供不實與不完整的資料，導致無法確認得獎者身份或獎品無法寄出，將視同自動放棄獎品，中獎者不得異議；未滿14歲之兒童中獎，視同監護人中獎，由監護人代為領取。<br />3. 公告內容與訊息均以本活動網頁或FB粉絲專頁公佈之內容為準，請密切注意活動網頁或FB粉絲專頁所公佈之訊息，恕不另行通知。</p>"), $(".popup-activity-desc").bPopup()
    })), $(".logout").click((function() {
        n.popupSelect("确认退出吗?", (function() {
            localStorage.clear(), location.reload()
        }))
    })), $(".float-right-award-btn").click((function() {
        var n = [],
            o = "",
            t = e.packages.findIndex((function(e) {
                return "phone" == e.source
            }));
        t > -1 && n.push({
            text: "手機預約獎勵序號：",
            code: e.packages[t].package_num
        });
        var a = e.packages.findIndex((function(e) {
            return "store" == e.source
        }));
        a > -1 && n.push({
            text: "商店預訂獎勵序號：",
            code: e.packages[a].package_num
        });
        var r = e.packages.findIndex((function(e) {
            return "like" == e.source
        }));
        r > -1 && n.push({
            text: "FB按讚獎勵序號：",
            code: e.packages[r].package_num
        });
        var i = e.packages.findIndex((function(e) {
            return "share" == e.source
        }));
        i > -1 && n.push({
            text: "FB分享獎勵序號：",
            code: e.packages[i].package_num
        });
        var c = e.packages.findIndex((function(e) {
            return "assoc" == e.source
        }));
        c > -1 && n.push({
            text: "加入社群獎勵序號：",
            code: e.packages[c].package_num
        });
        var s = e.packages.findIndex((function(e) {
            return "friend" == e.source
        }));
        s > -1 && n.push({
            text: "邀請好友獎勵序號：",
            code: e.packages[s].package_num
        });
        var p = e.packages.findIndex((function(e) {
            return "exchange" == e.source
        }));
        p > -1 && n.push({
            text: "英雄預抽獎勵序號：",
            code: e.packages[p].package_num
        });
        var u = e.packages.findIndex((function(e) {
            return "end" == e.source
        }));
        u > -1 && n.push({
            text: "代金券獎勵序號：",
            code: e.packages[u].package_num
        }), n.forEach((function(e) {
            o += '\n          <div class="award-record-item">\n            <div class="award-record-text">' + e.text + '</div>\n            <div class="award-record-code">' + e.code + '</div>\n            <div class="award-record-copy" data-code="' + e.code + '">複製</div>\n          </div>'
        })), $(".award-record-list").html(o), $(".popup-award-record").bPopup()
    })), $(".endBtn").click((function() {
        if (!e.phone) return n.scrollToOrder(), void n.pop("請先預約。");
        var o = e.package_config.filter((function(n) {
            return n.event_name == e.source_config.end.key
        }))[0];
        return e.packages.findIndex((function(n) {
            return n.source == e.source_config.end.key
        })) > -1 ? n.pop("你已領取獎勵，可在獎勵查詢中查看兌換碼。") : n.isCanGet() ? n.packageGrant(o.event_name, o.package_unique_id) : void n.pop("請完成任務。")
    })), $(document).on("click", ".award-record-copy", (function() {
        var e = $(this).attr("data-code");
        n.copy(e), n.pop("複製成功")
    })), $(".head .option,.p1-preBtn").click((function() {
        n.scrollToOrder()
    })), $(".myCard").click((function() {
        var o = "";
        if (e.isExchange && (o = e.lockPrizesName), o) return $(".popup-mycard-img").css("background", 'url("./imgs/card/' + o + '.png") no-repeat'), $(".popup-mycard-img").css("background-size", "100% 100%"), void $(".popup-mycard").bPopup();
        n.pop("尚未兌換英雄，請先兌換。")
    })), $(".allCard").click((function() {
        $(".popup-allCard").bPopup()
    })), $(".float-right-award-top").click((function() {
        location.href = "#main"
    })), $(".menu-btn").click((function() {
        "none" == $(".menu").css("display") ? $(".menu").show() : $(".menu").hide()
    })), $(".menu-btn-close").click((function() {
        $(".menu").hide()
    })), $(".store-gp-btn").click((function() {
        if ($(this).hasClass("animation-btn")) {
            gtag("event", "popup-order-success-gp")
        }
        n.toStore(2)
    })), $(".store-ios-btn").click((function() {
        if ($(this).hasClass("animation-btn")) {
            gtag("event", "popup-order-success-ios")
        }
        n.toStore(1)
    })), $(".feature-swiper img").click((function() {
        $(".popup-img").css("background", "url(" + $(this).attr("src") + ") no-repeat"), $(".popup-img").css("background-size", "100% 100%"), $(".popup-img").bPopup()
    })), $(".matters").click((function() {
        $(this).hasClass("matters-top") ? ($(this).removeClass("matters-top"), $(this).addClass("matters-bottom"), $(".matters-desc").hide()) : ($(this).addClass("matters-top"), $(this).removeClass("matters-bottom"), $(".matters-desc").show())
    })), document.addEventListener("click", (function(e) {
        e.target != $(".area-select-text")[0] && e.target != $(".area-select")[0] && e.target != $(".popup-order .area-select-text")[0] && e.target != $(".popup-order .area-select")[0] && n.hideAreaOptions()
    }))
}));